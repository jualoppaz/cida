(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider.state('et.node', {
            url: "/node",
            views: {
                'general@layout': {
                    templateUrl: "app/views/et/node/node.html",
                    controller: 'NodeController as node'
                }
            },
            data: {
                displayName: 'NodeJS'
            },
            resolve: {}
        });
    }


})();