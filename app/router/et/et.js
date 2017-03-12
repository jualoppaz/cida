(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider.state('et', {
            url: "",
            abstract: true,
            parent: 'layout',
            resolve: {}
        });
    }


})();