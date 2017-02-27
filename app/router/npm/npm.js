(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider.state('npm', {
            url: "/npm",
            views: {
                'general': {
                    templateUrl: "app/views/npm/npm.html",
                    controller: 'NpmController as npm'
                }
            },
            parent: 'layout',
            data: {
                displayName: 'NPM'
            },
            resolve: {}
        });
    }


})();