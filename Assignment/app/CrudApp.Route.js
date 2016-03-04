
    angular.module('CrudApp').config(function($stateProvider,$urlRouterProvider){


        $urlRouterProvider.otherwise('/List');

        $stateProvider
            .state('List',{
                url:'/List',
                templateUrl:'app/components/List/List.html',
                controller:'listController'

            })

            .state('Add',{

                url:'/Add',
                templateUrl:'app/components/Add/Add.html',
                controller:'AddController'
            })


    })


