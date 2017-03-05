(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider.state('jshint', {
            url: "/jshint",
            views: {
                'general': {
                    templateUrl: "app/views/jshint/jshint.html",
                    controller: 'JSHintController as jshint'
                }
            },
            parent: 'layout',
            data: {
                displayName: 'JSHint'
            },
            resolve: {}
        });
    }


})();