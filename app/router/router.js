(function(){

    'use strict';

    angular.module('rutas')
        .config(config)
        .run(run);

    function config($urlRouterProvider) {
        $urlRouterProvider.otherwise(function($location){
            $location.path('/');
        });
    }

    config.$inject = ['$urlRouterProvider'];

    function run($rootScope, $state, Validaciones, literales, noticias) {

        $rootScope.$on( '$stateChangeStart', stateChangeStart);
        function stateChangeStart(event, toState, toParams, fromState, fromParams, options) {

        }

        $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
        function stateChangeSuccess(event, toState, toParams, fromState, fromParams){

        }
        $rootScope.$on('$stateChangeError', stateChangeError);
        function stateChangeError(event, toState, toParams, fromState, fromParams, error){

        }
    }

})();