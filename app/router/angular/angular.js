(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider.state('angular', {
            url: "/",
            views: {
                'general': {
                    templateUrl: "app/views/angular/angular.html",
                    controller: 'AngularController as ctrl'
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