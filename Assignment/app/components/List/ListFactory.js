angular
    .module('CrudApp')
    .factory('listFactory',function($http) {


        return $http.get('http://reactive-app.herokuapp.com/getAll')


    }

    );