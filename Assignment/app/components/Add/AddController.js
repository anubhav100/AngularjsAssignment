angular.module('CrudApp').controller('AddController',function($scope,AddFactory) {

    $scope.save = function () {

       var saveddata=$scope.emp

var employeesdata =  AddFactory(data)

        alert(employeesdata)
        employeesdata.then(function(response){
            $scope.employeedata=response.data
        })
    }

})

