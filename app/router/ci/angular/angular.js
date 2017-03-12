(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider.state('ci.angular', {
            url: "/angular",
            views: {
                'general': {
                    templateUrl: "app/views/ci/angular/angular.html",
                    controller: 'AngularController as angular'
                }
            },
            parent: 'layout',
            data: {
                displayName: 'Angular'
            },
            resolve: {}
        });
    }


})();