(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider.state('ci.ngdocs', {
            url: "/ngdocs",
            views: {
                'general': {
                    templateUrl: "app/views/ci/ngdocs/ngdocs.html",
                    controller: 'NgDocsController as ngdocs'
                }
            },
            parent: 'layout',
            data: {
                displayName: 'ng-docs'
            },
            resolve: {}
        });
    }


})();