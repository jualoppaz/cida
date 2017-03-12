(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider.state('ci.npm', {
            url: "/npm",
            views: {
                'general@layout': {
                    templateUrl: "app/views/ci/npm/npm.html",
                    controller: 'NpmController as npm'
                }
            },
            data: {
                displayName: 'NPM'
            },
            resolve: {}
        });
    }


})();