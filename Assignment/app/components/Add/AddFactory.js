/**
 * Created by knoldus on 24/2/16.
 */
angular
    .module('CrudApp')
    .factory('AddFactory',function($http) {


            return $http.post('reactive-app.herokuapp.com/create -H',saveddata)


        }

    );