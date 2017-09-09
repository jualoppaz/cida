(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider.state('ci.angularjs', {
            url: "/angularjs",
            views: {
                'general': {
                    templateUrl: "app/views/ci/angularjs/angularjs.html",
                    controller: 'AngularjsController as angularjs'
                }
            },
            parent: 'layout',
            data: {
                displayName: 'AngularJS'
            },
            resolve: {}
        });
    }


})();