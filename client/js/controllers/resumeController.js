myApp.controller('resumeController', ['$scope', 'Api_experience', function($scope, Api_experience){
    $scope.form = {};
    $scope.experiences = [];
    $scope.pageSize = 4;
    $scope.currentPage = 1;
    
    Api_experience.Experience.query({}, function(data){
        $scope.experiences = data;
    });
    
    $scope.deleteAll = function(){
         Api_experience.Experience.delete({}, function(data){
                    $scope.experiences = [];
                });
    };
    
    $scope.delete = function(index){
        bootbox.confirm("Are you sure you want to delete this Experience?", function(answer){
            if(answer == true){
                Api_experience.Experience.delete({id: $scope.experiences[index]._id}, function(data){
                    $scope.experiences.splice(index, 1);
                });
            }
        })
    };
    
    $scope.addToDatabase = function(){
        Api_experience.Experience.save({} , $scope.form, 
        function(data){
            $scope.experiences.push(data);
        },
        function(err){
           bootbox.alert('Error: ' + err); 
        });
    };
    
    $scope.editExperienceByCompany = function(index){
        Api_experience.Experience.save({id: $scope.experiences[index]._id},function(err){
           bootbox.alert('Error: ' + err); 
        });
        
    }
    
    
    
}]);