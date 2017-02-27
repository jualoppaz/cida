(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider.state('sass', {
            url: "/sass",
            views: {
                'general': {
                    templateUrl: "app/views/sass/sass.html",
                    controller: 'SassController as sass'
                }
            },
            parent: 'layout',
            data: {
                displayName: 'Sass'
            },
            resolve: {}
        });
    }


})();