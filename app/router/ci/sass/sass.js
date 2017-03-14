(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider.state('ci.sass', {
            url: "/sass",
            views: {
                'general@layout': {
                    templateUrl: "app/views/ci/sass/sass.html",
                    controller: 'SassController as sass'
                }
            },
            data: {
                displayName: 'Sass'
            },
            resolve: {}
        });
    }


})();