angular.module('CrudApp').controller('listController',function($scope,listFactory){


      var employees= listFactory
          employees.then(function(response){
             $scope.employees=response.data
      })

}
);
