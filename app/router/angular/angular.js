(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider.state('angular', {
            url: "/angular",
            views: {
                'general': {
                    templateUrl: "app/views/angular/angular.html",
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