(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider.state('node', {
            url: "/node",
            views: {
                'general': {
                    templateUrl: "app/views/node/node.html",
                    controller: 'NodeController as node'
                }
            },
            parent: 'layout',
            data: {
                displayName: 'NodeJS'
            },
            resolve: {}
        });
    }


})();