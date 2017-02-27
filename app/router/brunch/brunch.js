(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider.state('brunch', {
            url: "/brunch",
            views: {
                'general': {
                    templateUrl: "app/views/brunch/brunch.html",
                    controller: 'BrunchController as brunch'
                }
            },
            parent: 'layout',
            data: {
                displayName: 'Brunch'
            },
            resolve: {}
        });
    }


})();