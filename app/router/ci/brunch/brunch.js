(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider.state('ci.brunch', {
            url: "/brunch",
            views: {
                'general@layout': {
                    templateUrl: "app/views/ci/brunch/brunch.html",
                    controller: 'BrunchController as brunch'
                }
            },
            data: {
                displayName: 'Brunch'
            },
            resolve: {}
        });
    }


})();