(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider.state('heroku', {
            url: "/heroku",
            views: {
                'general': {
                    templateUrl: "app/views/heroku/heroku.html",
                    controller: 'HerokuController as heroku'
                }
            },
            parent: 'layout',
            data: {
                displayName: 'Heroku'
            },
            resolve: {}
        });
    }


})();