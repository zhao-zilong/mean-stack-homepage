//Author: Zhao Zilong
//NodeJS Server


console.log(process.env);

//Initialize our Express Web framework
var express = require("express");
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

//native NodeJS module for resolving paths
var path = require("path");


var mongoose = require("mongoose");
var configDB = require("./server/config/database.js");

mongoose.connect(configDB.url);

var bodyParser = require('body-parser');
var methodOverride = require('method-override');
app.use(bodyParser.json());
app.use(methodOverride());

//var port = process.env.PORT;
var port = (process.env.PORT || process.env.VCAP_APP_PORT || '8080');


//Set our view engine to EJS, and set the directory our views will be stored in
app.set('view engine' , 'ejs');
app.set('views', path.resolve(__dirname, 'client' , 'views'));


app.use(express.static(path.resolve(__dirname, 'client')));

var users = [];
io.on('connection', function(socket){
  var username = '';

  socket.on('request-users', function(){
    socket.emit('users', {users: users});
  })

  socket.on('message', function(data){
    io.emit('message', {username: username, message: data.message});
  })

  socket.on('add-user', function(data){
    if(users.indexOf(data.username) == -1){
      io.emit('add-user', {username: data.username});
      username = data.username;
      users.push(data.username);
    }
    else{
      socket.emit('prompt-username', {
        message: 'User already exists'
      });
    }

  })

  socket.on('disconnect', function(){
    users.splice(users.indexOf(username), 1);
    io.emit('remove-user', {username: username});
  })
})


//set our first route
app.get('/', function(req, res){
  res.render('index.ejs');
});



var api = express.Router();
require("./server/routes/api")(api);
app.use('/api',api);

app.get('/*', function(req, res) {
  res.render('index.ejs');
});
//make our app listen for incoming requests on the port assigned above
http.listen(port, function(){
  console.log("SERVER  RUNING PORT: "+port);
});
