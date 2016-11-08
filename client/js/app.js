//ui.bootstrap  is for font awesome
var myApp = angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap',
    'ngResource',
    'ngAnimate',
    'btford.socket-io',
    'ui']).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

        $routeProvider.when('/home', {templateUrl: '/partials/home.html', controller: 'homeController'});
        $routeProvider.when('/about', {templateUrl: '/partials/about.html', controller: 'aboutController'});
        $routeProvider.when('/contact', {templateUrl: '/partials/contact.html', controller: 'contactController'});
        $routeProvider.when('/resume', {templateUrl: '/partials/resume.html', controller: 'resumeController'});
        $routeProvider.when('/project', {templateUrl: '/partials/project.html', controller: 'chatController'});
        $routeProvider.when('/project/customerapi', {templateUrl: '/partials/projects/customerapi.html', controller: 'customerApiController'});
        $routeProvider.when('/project/chat', {templateUrl: '/partials/projects/chat.html', controller: 'chatController'});
        $routeProvider.otherwise({redirectTo: '/home'});

        $locationProvider.html5Mode({enabled: true, requireBase: false});

    }])
    .filter('startfrom', function(){
        return function(data, start){
            if(!data || !data.length){return;}

            return data.slice(start);
        }
    })
