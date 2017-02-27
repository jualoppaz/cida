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
                    controller: 'HomeController as home'
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

            //angular.element(document).ready(onResize);
        }

        $rootScope.$on('$stateChangeError', stateChangeError);
        function stateChangeError(event, toState, toParams, fromState, fromParams, error){

        }

        //$(window).resize(onResize);
    }

    /*function onResize(){
        var windowHeight = $(window).height();

        var headerHeight = $("#header").height();

        var contentHeight = $("#content").height();

        var menuHeight = $("#menu").height();

        var footerHeight = $("#footer").height();

        var heightsSum = headerHeight + contentHeight + footerHeight;

        console.log("Suma de alturas:", heightsSum);

        if(heightsSum < windowHeight){ // Hay que modificar la altura del content

            var newContentHeight = windowHeight - headerHeight - footerHeight;
            console.log("Modificamos la altura del content:", menuHeight);
            $("#content").height(newContentHeight);

        }
    }*/

})();