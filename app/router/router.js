(function(){

    'use strict';

    angular.module('rutas')
        .config(config)
        .run(run);

    config.$inject = ['$urlRouterProvider', '$stateProvider'];
    function config($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise(function($injector, $location){
            $location.path('/');
        });

        $stateProvider.state('home', {
            url: "/",
            views: {
                'general': {
                    templateUrl: "app/views/home.html",
                    controller: 'HomeController as ctrl'
                }
            },
            parent: 'layout',
            data: {
                displayName: 'Inicio'
            },
            resolve: {}
        });
    }

    function run($rootScope) {

        $rootScope.$on( '$stateChangeStart', stateChangeStart);
        function stateChangeStart(event, toState, toParams, fromState, fromParams, options) {

        }

        $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
        function stateChangeSuccess(event, toState, toParams, fromState, fromParams){

            angular.element(document).ready(function () {
                var contentHeight = $("#content").css('height');

                var menuHeight = $("#menu").css('height');

                if(contentHeight < menuHeight){
                    console.log("Modificamos la altura del content:", menuHeight);
                    $("#content").height(menuHeight);
                }
            });
        }
        $rootScope.$on('$stateChangeError', stateChangeError);
        function stateChangeError(event, toState, toParams, fromState, fromParams, error){

        }
    }

})();