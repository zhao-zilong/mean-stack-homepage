{"filter":false,"title":"api_exprerience.js","tooltip":"/server/routes/api_exprerience.js","undoManager":{"mark":41,"position":41,"stack":[[{"start":{"row":0,"column":0},"end":{"row":71,"column":1},"action":"insert","lines":["var Customer = require(\"../models/customer\");","module.exports = function(router) {","    router.post('/customer', function(req, res) {","        console.log(req.body);","        var customer = new Customer();","        customer.firstname = req.body.firstname;","        customer.lastname = req.body.lastname;","        customer.phone = req.body.phone;","        if (req.body.address) {","            customer.address.street = req.body.address.street;","            customer.address.city = req.body.address.city;","            customer.address.region = req.body.address.region;","            customer.address.zip = req.body.address.zip;","        }","        customer.save(function(err, data) {","            if (err)","                throw err;","            res.json(data);","        });","    });","","","    router.get('/customer', function(req, res) {","        Customer.find({}, function(err, data) {","            res.json(data);","        })","    });","","    router.delete('/customer', function(req, res) {","        Customer.remove({}, function(err) {","            res.json({","                result: err ? 'error' : 'ok'","            });","        })","    });","","    router.get('/customer/:id', function(req, res) {","        Customer.findOne({","            _id: req.params.id","        }, function(err, data) {","            res.json(data);","        });","    });","","    router.delete('/customer/:id', function(req, res) {","        Customer.remove({_id: req.params.id}, function(err) {","            res.json({","                result: err ? 'error' : 'ok'","            });","        })","    });","","    router.post('/customer/:id', function(req, res) {","        Customer.findOne({_id: req.params.id}, function(err, data) {","            var customer = data;","            customer.firstname = req.body.firstname;","            customer.lastname = req.body.lastname;","            customer.phone = req.body.phone;","            if (req.body.address) {","                customer.address.street = req.body.address.street;","                customer.address.city = req.body.address.city;","                customer.address.region = req.body.address.region;","                customer.address.zip = req.body.address.zip;","            }","            customer.save(function(err, data) {","                if (err)","                    throw err;","                res.json(data);","            });","        });","    });","}"],"id":1}],[{"start":{"row":0,"column":34},"end":{"row":0,"column":42},"action":"remove","lines":["customer"],"id":2},{"start":{"row":0,"column":34},"end":{"row":0,"column":35},"action":"insert","lines":["e"]}],[{"start":{"row":0,"column":35},"end":{"row":0,"column":36},"action":"insert","lines":["x"],"id":3}],[{"start":{"row":0,"column":36},"end":{"row":0,"column":37},"action":"insert","lines":["p"],"id":4}],[{"start":{"row":0,"column":37},"end":{"row":0,"column":38},"action":"insert","lines":["e"],"id":5}],[{"start":{"row":0,"column":38},"end":{"row":0,"column":39},"action":"insert","lines":["r"],"id":6}],[{"start":{"row":0,"column":39},"end":{"row":0,"column":40},"action":"insert","lines":["i"],"id":7}],[{"start":{"row":0,"column":40},"end":{"row":0,"column":41},"action":"insert","lines":["e"],"id":8}],[{"start":{"row":0,"column":41},"end":{"row":0,"column":42},"action":"insert","lines":["n"],"id":9}],[{"start":{"row":0,"column":42},"end":{"row":0,"column":43},"action":"insert","lines":["c"],"id":10}],[{"start":{"row":0,"column":43},"end":{"row":0,"column":44},"action":"insert","lines":["e"],"id":11}],[{"start":{"row":2,"column":18},"end":{"row":2,"column":26},"action":"remove","lines":["customer"],"id":12},{"start":{"row":2,"column":18},"end":{"row":2,"column":28},"action":"insert","lines":["experience"]}],[{"start":{"row":22,"column":17},"end":{"row":22,"column":25},"action":"remove","lines":["customer"],"id":13},{"start":{"row":22,"column":17},"end":{"row":22,"column":27},"action":"insert","lines":["experience"]}],[{"start":{"row":28,"column":20},"end":{"row":28,"column":28},"action":"remove","lines":["customer"],"id":14},{"start":{"row":28,"column":20},"end":{"row":28,"column":30},"action":"insert","lines":["experience"]}],[{"start":{"row":36,"column":17},"end":{"row":36,"column":25},"action":"remove","lines":["customer"],"id":15},{"start":{"row":36,"column":17},"end":{"row":36,"column":27},"action":"insert","lines":["experience"]}],[{"start":{"row":44,"column":20},"end":{"row":44,"column":28},"action":"remove","lines":["customer"],"id":16},{"start":{"row":44,"column":20},"end":{"row":44,"column":30},"action":"insert","lines":["experience"]}],[{"start":{"row":52,"column":18},"end":{"row":52,"column":26},"action":"remove","lines":["customer"],"id":17},{"start":{"row":52,"column":18},"end":{"row":52,"column":28},"action":"insert","lines":["experience"]}],[{"start":{"row":4,"column":12},"end":{"row":4,"column":20},"action":"remove","lines":["customer"],"id":18},{"start":{"row":4,"column":12},"end":{"row":4,"column":22},"action":"insert","lines":["experience"]}],[{"start":{"row":4,"column":29},"end":{"row":4,"column":37},"action":"remove","lines":["Customer"],"id":19},{"start":{"row":4,"column":29},"end":{"row":4,"column":39},"action":"insert","lines":["experience"]}],[{"start":{"row":4,"column":29},"end":{"row":4,"column":30},"action":"remove","lines":["e"],"id":20}],[{"start":{"row":4,"column":29},"end":{"row":4,"column":30},"action":"insert","lines":["W"],"id":21}],[{"start":{"row":4,"column":29},"end":{"row":4,"column":30},"action":"remove","lines":["W"],"id":22}],[{"start":{"row":4,"column":29},"end":{"row":4,"column":30},"action":"insert","lines":["E"],"id":23}],[{"start":{"row":0,"column":4},"end":{"row":0,"column":12},"action":"remove","lines":["Customer"],"id":24},{"start":{"row":0,"column":4},"end":{"row":0,"column":14},"action":"insert","lines":["experience"]},{"start":{"row":5,"column":8},"end":{"row":5,"column":16},"action":"remove","lines":["customer"]},{"start":{"row":5,"column":8},"end":{"row":5,"column":18},"action":"insert","lines":["experience"]},{"start":{"row":6,"column":8},"end":{"row":6,"column":16},"action":"remove","lines":["customer"]},{"start":{"row":6,"column":8},"end":{"row":6,"column":18},"action":"insert","lines":["experience"]},{"start":{"row":7,"column":8},"end":{"row":7,"column":16},"action":"remove","lines":["customer"]},{"start":{"row":7,"column":8},"end":{"row":7,"column":18},"action":"insert","lines":["experience"]},{"start":{"row":9,"column":12},"end":{"row":9,"column":20},"action":"remove","lines":["customer"]},{"start":{"row":9,"column":12},"end":{"row":9,"column":22},"action":"insert","lines":["experience"]},{"start":{"row":10,"column":12},"end":{"row":10,"column":20},"action":"remove","lines":["customer"]},{"start":{"row":10,"column":12},"end":{"row":10,"column":22},"action":"insert","lines":["experience"]},{"start":{"row":11,"column":12},"end":{"row":11,"column":20},"action":"remove","lines":["customer"]},{"start":{"row":11,"column":12},"end":{"row":11,"column":22},"action":"insert","lines":["experience"]},{"start":{"row":12,"column":12},"end":{"row":12,"column":20},"action":"remove","lines":["customer"]},{"start":{"row":12,"column":12},"end":{"row":12,"column":22},"action":"insert","lines":["experience"]},{"start":{"row":14,"column":8},"end":{"row":14,"column":16},"action":"remove","lines":["customer"]},{"start":{"row":14,"column":8},"end":{"row":14,"column":18},"action":"insert","lines":["experience"]},{"start":{"row":23,"column":8},"end":{"row":23,"column":16},"action":"remove","lines":["Customer"]},{"start":{"row":23,"column":8},"end":{"row":23,"column":18},"action":"insert","lines":["experience"]},{"start":{"row":29,"column":8},"end":{"row":29,"column":16},"action":"remove","lines":["Customer"]},{"start":{"row":29,"column":8},"end":{"row":29,"column":18},"action":"insert","lines":["experience"]},{"start":{"row":37,"column":8},"end":{"row":37,"column":16},"action":"remove","lines":["Customer"]},{"start":{"row":37,"column":8},"end":{"row":37,"column":18},"action":"insert","lines":["experience"]},{"start":{"row":45,"column":8},"end":{"row":45,"column":16},"action":"remove","lines":["Customer"]},{"start":{"row":45,"column":8},"end":{"row":45,"column":18},"action":"insert","lines":["experience"]},{"start":{"row":53,"column":8},"end":{"row":53,"column":16},"action":"remove","lines":["Customer"]},{"start":{"row":53,"column":8},"end":{"row":53,"column":18},"action":"insert","lines":["experience"]},{"start":{"row":54,"column":16},"end":{"row":54,"column":24},"action":"remove","lines":["customer"]},{"start":{"row":54,"column":16},"end":{"row":54,"column":26},"action":"insert","lines":["experience"]},{"start":{"row":55,"column":12},"end":{"row":55,"column":20},"action":"remove","lines":["customer"]},{"start":{"row":55,"column":12},"end":{"row":55,"column":22},"action":"insert","lines":["experience"]},{"start":{"row":56,"column":12},"end":{"row":56,"column":20},"action":"remove","lines":["customer"]},{"start":{"row":56,"column":12},"end":{"row":56,"column":22},"action":"insert","lines":["experience"]},{"start":{"row":57,"column":12},"end":{"row":57,"column":20},"action":"remove","lines":["customer"]},{"start":{"row":57,"column":12},"end":{"row":57,"column":22},"action":"insert","lines":["experience"]},{"start":{"row":59,"column":16},"end":{"row":59,"column":24},"action":"remove","lines":["customer"]},{"start":{"row":59,"column":16},"end":{"row":59,"column":26},"action":"insert","lines":["experience"]},{"start":{"row":60,"column":16},"end":{"row":60,"column":24},"action":"remove","lines":["customer"]},{"start":{"row":60,"column":16},"end":{"row":60,"column":26},"action":"insert","lines":["experience"]},{"start":{"row":61,"column":16},"end":{"row":61,"column":24},"action":"remove","lines":["customer"]},{"start":{"row":61,"column":16},"end":{"row":61,"column":26},"action":"insert","lines":["experience"]},{"start":{"row":62,"column":16},"end":{"row":62,"column":24},"action":"remove","lines":["customer"]},{"start":{"row":62,"column":16},"end":{"row":62,"column":26},"action":"insert","lines":["experience"]},{"start":{"row":64,"column":12},"end":{"row":64,"column":20},"action":"remove","lines":["customer"]},{"start":{"row":64,"column":12},"end":{"row":64,"column":22},"action":"insert","lines":["experience"]}],[{"start":{"row":5,"column":19},"end":{"row":5,"column":28},"action":"remove","lines":["firstname"],"id":25},{"start":{"row":5,"column":19},"end":{"row":5,"column":26},"action":"insert","lines":["company"]},{"start":{"row":5,"column":38},"end":{"row":5,"column":47},"action":"remove","lines":["firstname"]},{"start":{"row":5,"column":38},"end":{"row":5,"column":45},"action":"insert","lines":["company"]},{"start":{"row":55,"column":23},"end":{"row":55,"column":32},"action":"remove","lines":["firstname"]},{"start":{"row":55,"column":23},"end":{"row":55,"column":30},"action":"insert","lines":["company"]},{"start":{"row":55,"column":42},"end":{"row":55,"column":51},"action":"remove","lines":["firstname"]},{"start":{"row":55,"column":42},"end":{"row":55,"column":49},"action":"insert","lines":["company"]}],[{"start":{"row":6,"column":19},"end":{"row":6,"column":27},"action":"remove","lines":["lastname"],"id":26},{"start":{"row":6,"column":19},"end":{"row":6,"column":24},"action":"insert","lines":["title"]},{"start":{"row":6,"column":36},"end":{"row":6,"column":44},"action":"remove","lines":["lastname"]},{"start":{"row":6,"column":36},"end":{"row":6,"column":41},"action":"insert","lines":["title"]},{"start":{"row":56,"column":23},"end":{"row":56,"column":31},"action":"remove","lines":["lastname"]},{"start":{"row":56,"column":23},"end":{"row":56,"column":28},"action":"insert","lines":["title"]},{"start":{"row":56,"column":40},"end":{"row":56,"column":48},"action":"remove","lines":["lastname"]},{"start":{"row":56,"column":40},"end":{"row":56,"column":45},"action":"insert","lines":["title"]}],[{"start":{"row":7,"column":19},"end":{"row":7,"column":24},"action":"remove","lines":["phone"],"id":27},{"start":{"row":7,"column":19},"end":{"row":7,"column":30},"action":"insert","lines":["description"]},{"start":{"row":7,"column":42},"end":{"row":7,"column":47},"action":"remove","lines":["phone"]},{"start":{"row":7,"column":42},"end":{"row":7,"column":53},"action":"insert","lines":["description"]},{"start":{"row":57,"column":23},"end":{"row":57,"column":28},"action":"remove","lines":["phone"]},{"start":{"row":57,"column":23},"end":{"row":57,"column":34},"action":"insert","lines":["description"]},{"start":{"row":57,"column":46},"end":{"row":57,"column":51},"action":"remove","lines":["phone"]},{"start":{"row":57,"column":46},"end":{"row":57,"column":57},"action":"insert","lines":["description"]}],[{"start":{"row":8,"column":21},"end":{"row":8,"column":28},"action":"remove","lines":["address"],"id":28},{"start":{"row":8,"column":21},"end":{"row":8,"column":31},"action":"insert","lines":["timePeriod"]},{"start":{"row":9,"column":23},"end":{"row":9,"column":30},"action":"remove","lines":["address"]},{"start":{"row":9,"column":23},"end":{"row":9,"column":33},"action":"insert","lines":["timePeriod"]},{"start":{"row":9,"column":52},"end":{"row":9,"column":59},"action":"remove","lines":["address"]},{"start":{"row":9,"column":52},"end":{"row":9,"column":62},"action":"insert","lines":["timePeriod"]},{"start":{"row":10,"column":23},"end":{"row":10,"column":30},"action":"remove","lines":["address"]},{"start":{"row":10,"column":23},"end":{"row":10,"column":33},"action":"insert","lines":["timePeriod"]},{"start":{"row":10,"column":50},"end":{"row":10,"column":57},"action":"remove","lines":["address"]},{"start":{"row":10,"column":50},"end":{"row":10,"column":60},"action":"insert","lines":["timePeriod"]},{"start":{"row":11,"column":23},"end":{"row":11,"column":30},"action":"remove","lines":["address"]},{"start":{"row":11,"column":23},"end":{"row":11,"column":33},"action":"insert","lines":["timePeriod"]},{"start":{"row":11,"column":52},"end":{"row":11,"column":59},"action":"remove","lines":["address"]},{"start":{"row":11,"column":52},"end":{"row":11,"column":62},"action":"insert","lines":["timePeriod"]},{"start":{"row":12,"column":23},"end":{"row":12,"column":30},"action":"remove","lines":["address"]},{"start":{"row":12,"column":23},"end":{"row":12,"column":33},"action":"insert","lines":["timePeriod"]},{"start":{"row":12,"column":49},"end":{"row":12,"column":56},"action":"remove","lines":["address"]},{"start":{"row":12,"column":49},"end":{"row":12,"column":59},"action":"insert","lines":["timePeriod"]},{"start":{"row":58,"column":25},"end":{"row":58,"column":32},"action":"remove","lines":["address"]},{"start":{"row":58,"column":25},"end":{"row":58,"column":35},"action":"insert","lines":["timePeriod"]},{"start":{"row":59,"column":27},"end":{"row":59,"column":34},"action":"remove","lines":["address"]},{"start":{"row":59,"column":27},"end":{"row":59,"column":37},"action":"insert","lines":["timePeriod"]},{"start":{"row":59,"column":56},"end":{"row":59,"column":63},"action":"remove","lines":["address"]},{"start":{"row":59,"column":56},"end":{"row":59,"column":66},"action":"insert","lines":["timePeriod"]},{"start":{"row":60,"column":27},"end":{"row":60,"column":34},"action":"remove","lines":["address"]},{"start":{"row":60,"column":27},"end":{"row":60,"column":37},"action":"insert","lines":["timePeriod"]},{"start":{"row":60,"column":54},"end":{"row":60,"column":61},"action":"remove","lines":["address"]},{"start":{"row":60,"column":54},"end":{"row":60,"column":64},"action":"insert","lines":["timePeriod"]},{"start":{"row":61,"column":27},"end":{"row":61,"column":34},"action":"remove","lines":["address"]},{"start":{"row":61,"column":27},"end":{"row":61,"column":37},"action":"insert","lines":["timePeriod"]},{"start":{"row":61,"column":56},"end":{"row":61,"column":63},"action":"remove","lines":["address"]},{"start":{"row":61,"column":56},"end":{"row":61,"column":66},"action":"insert","lines":["timePeriod"]},{"start":{"row":62,"column":27},"end":{"row":62,"column":34},"action":"remove","lines":["address"]},{"start":{"row":62,"column":27},"end":{"row":62,"column":37},"action":"insert","lines":["timePeriod"]},{"start":{"row":62,"column":53},"end":{"row":62,"column":60},"action":"remove","lines":["address"]},{"start":{"row":62,"column":53},"end":{"row":62,"column":63},"action":"insert","lines":["timePeriod"]}],[{"start":{"row":9,"column":34},"end":{"row":9,"column":40},"action":"remove","lines":["street"],"id":29},{"start":{"row":9,"column":34},"end":{"row":9,"column":39},"action":"insert","lines":["start"]},{"start":{"row":9,"column":62},"end":{"row":9,"column":68},"action":"remove","lines":["street"]},{"start":{"row":9,"column":62},"end":{"row":9,"column":67},"action":"insert","lines":["start"]},{"start":{"row":59,"column":38},"end":{"row":59,"column":44},"action":"remove","lines":["street"]},{"start":{"row":59,"column":38},"end":{"row":59,"column":43},"action":"insert","lines":["start"]},{"start":{"row":59,"column":66},"end":{"row":59,"column":72},"action":"remove","lines":["street"]},{"start":{"row":59,"column":66},"end":{"row":59,"column":71},"action":"insert","lines":["start"]}],[{"start":{"row":10,"column":34},"end":{"row":10,"column":38},"action":"remove","lines":["city"],"id":30},{"start":{"row":10,"column":34},"end":{"row":10,"column":37},"action":"insert","lines":["end"]},{"start":{"row":10,"column":60},"end":{"row":10,"column":64},"action":"remove","lines":["city"]},{"start":{"row":10,"column":60},"end":{"row":10,"column":63},"action":"insert","lines":["end"]},{"start":{"row":60,"column":38},"end":{"row":60,"column":42},"action":"remove","lines":["city"]},{"start":{"row":60,"column":38},"end":{"row":60,"column":41},"action":"insert","lines":["end"]},{"start":{"row":60,"column":64},"end":{"row":60,"column":68},"action":"remove","lines":["city"]},{"start":{"row":60,"column":64},"end":{"row":60,"column":67},"action":"insert","lines":["end"]}],[{"start":{"row":11,"column":0},"end":{"row":12,"column":64},"action":"remove","lines":["            experience.timePeriod.region = req.body.timePeriod.region;","            experience.timePeriod.zip = req.body.timePeriod.zip;"],"id":31}],[{"start":{"row":10,"column":64},"end":{"row":11,"column":0},"action":"remove","lines":["",""],"id":32}],[{"start":{"row":59,"column":0},"end":{"row":60,"column":68},"action":"remove","lines":["                experience.timePeriod.region = req.body.timePeriod.region;","                experience.timePeriod.zip = req.body.timePeriod.zip;"],"id":33}],[{"start":{"row":58,"column":68},"end":{"row":59,"column":0},"action":"remove","lines":["",""],"id":34}],[{"start":{"row":4,"column":29},"end":{"row":4,"column":39},"action":"remove","lines":["Experience"],"id":35},{"start":{"row":4,"column":29},"end":{"row":4,"column":39},"action":"insert","lines":["Experience"]}],[{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"remove","lines":["e"],"id":36}],[{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["E"],"id":37}],[{"start":{"row":21,"column":8},"end":{"row":21,"column":18},"action":"remove","lines":["experience"],"id":38},{"start":{"row":21,"column":8},"end":{"row":21,"column":18},"action":"insert","lines":["Experience"]}],[{"start":{"row":27,"column":8},"end":{"row":27,"column":18},"action":"remove","lines":["experience"],"id":39},{"start":{"row":27,"column":8},"end":{"row":27,"column":18},"action":"insert","lines":["Experience"]}],[{"start":{"row":35,"column":8},"end":{"row":35,"column":18},"action":"remove","lines":["experience"],"id":40},{"start":{"row":35,"column":8},"end":{"row":35,"column":18},"action":"insert","lines":["Experience"]}],[{"start":{"row":43,"column":8},"end":{"row":43,"column":18},"action":"remove","lines":["experience"],"id":41},{"start":{"row":43,"column":8},"end":{"row":43,"column":18},"action":"insert","lines":["Experience"]}],[{"start":{"row":51,"column":8},"end":{"row":51,"column":18},"action":"remove","lines":["experience"],"id":42},{"start":{"row":51,"column":8},"end":{"row":51,"column":18},"action":"insert","lines":["Experience"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":18,"column":0},"end":{"row":18,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1478353491950,"hash":"2697cd38a5381a550b164105d2fa58c80851f43e"}