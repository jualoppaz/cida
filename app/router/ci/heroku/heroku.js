(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider.state('ci.heroku', {
            url: "/heroku",
            views: {
                'general@layout': {
                    templateUrl: "app/views/ci/heroku/heroku.html",
                    controller: 'HerokuController as heroku'
                }
            },
            data: {
                displayName: 'Heroku'
            },
            resolve: {}
        });
    }

})();