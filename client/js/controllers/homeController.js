myApp.controller('homeController', ['$scope', function($scope){
    $scope.myInterval = 3000;
    $scope.slides = [
    {
        image: "img/fullstack.png",
        link: "https://www.youtube.com/playlist?list=PLZm85UZQLd2RyFN1IQWuOk8gBt0aJHE1F"
    },    
    {
        image: "img/angular.png",
        link: "https://www.youtube.com/playlist?list=PLZm85UZQLd2SFY1lOEUNgplCyFpAQGo9D"
    },
    {
        image: "img/node.png",
        link: "https://www.youtube.com/playlist?list=PLZm85UZQLd2Q946FgnllFFMa0mfQLrYDL"
    },
    {
        image: "img/express.png",
        link: "https://www.youtube.com/playlist?list=PLZm85UZQLd2Q946FgnllFFMa0mfQLrYDL"
    }];
}]);