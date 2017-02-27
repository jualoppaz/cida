(function(){

    'use strict';

    angular.module('general').controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'settings'];

    function HomeController($scope, settings) {
        var self = this;

        $scope.baseUrl = settings.baseUrl;
        $scope.nombreApp = settings.nombreApp;
        $scope.tituloMiganPan = "";

        $scope.formatoFecha = 'dd/MM/yyyy';
        self.sinContenido = '---';
    }

})();
