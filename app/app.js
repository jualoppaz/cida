(function(){

    'use strict';

    var configFile = "./config/config.json";

    configuration.$inject = ['$httpProvider', 'toastrConfig'];

    function configuration($httpProvider, toastrConfig) {
        $httpProvider.defaults.withCredentials = true;

        angular.extend(toastrConfig, {
            autoDismiss: false,
            closeButton: true,
            containerId: 'toast-container',
            maxOpened: 0,
            newestOnTop: true,
            preventDuplicates: false,
            preventOpenDuplicates: true,
            target: 'body'
        });
    }

    angular.module('app',
        [
            'templates', 'ngSanitize', 'ngAnimate', 'ngTouch', 'rutas', 'angularUtils.directives.uiBreadcrumbs', 'ui.bootstrap',
            'toastr', 'footer', 'general', 'hnav', 'vnav'
        ])
        .config(configuration)
        .run(function($rootScope) {
            $rootScope.$on("$stateChangeError", console.log.bind(console));
        });

    angular.element(document).ready(function () {
        $.get(configFile, function (data) {
            if (typeof data === "string") {
                data = JSON.parse(data);
            }

            angular.module('app').constant('settings', data);

            angular.bootstrap(document, ['app']);
        });
    });
})();