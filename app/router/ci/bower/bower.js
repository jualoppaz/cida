(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider.state('ci.bower', {
            url: "/bower",
            views: {
                'general': {
                    templateUrl: "app/views/ci/bower/bower.html",
                    controller: 'BowerController as bower'
                }
            },
            parent: 'layout',
            data: {
                displayName: 'Bower'
            },
            resolve: {}
        });
    }


})();