(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider.state('ci', {
            url: "",
            abstract: true,
            parent: 'layout',
            resolve: {}
        });
    }


})();