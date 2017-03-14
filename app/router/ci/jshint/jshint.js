(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider.state('ci.jshint', {
            url: "/jshint",
            views: {
                'general@layout': {
                    templateUrl: "app/views/ci/jshint/jshint.html",
                    controller: 'JSHintController as jshint'
                }
            },
            data: {
                displayName: 'JSHint'
            },
            resolve: {}
        });
    }


})();