(function(){

    'use strict';

    angular.module('rutas')
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {

        $stateProvider
            .state('layout', {
                url: '',
                abstract: true,
                views: {
                    'header': {
                        templateUrl: 'app/views/layouts/header/header.html'
                    },
                    'hnav@layout': {
                        templateUrl: 'app/views/layouts/hnav/hnav.html',
                        controller: 'HnavController as hnav'
                    },
                    'main': {
                        templateUrl: 'app/views/layouts/main/main.html'
                    },
                    'vnav@layout': {
                        templateUrl: 'app/views/layouts/vnav/vnav.html',
                        controller: 'VnavController as vnav'
                    },
                    'sub-container@layout': {
                        templateUrl: 'app/views/layouts/sub-container/sub-container.html'
                    },
                    'breadcrumbs@layout': {
                        templateUrl: 'app/views/layouts/breadcrumbs/breadcrumbs.html'
                    },
                    'footer': {
                        templateUrl: 'app/views/layouts/footer/footer.html',
                        controller: 'FooterController as footer'
                    }
                },
                data: {
                    breadcrumbProxy: 'home'
                },
                resolve: {}
            });
    }

})();