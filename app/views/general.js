(function(){

    'use strict';

    angular.module('general')

        .controller('GeneralCtrl', GeneralCtrl);

    GeneralCtrl.$inject = ['$scope', '$rootScope', 'settings', '$state'];

    function GeneralCtrl($scope, $rootScope, settings, $state) {
        var self = this;

        $scope.baseUrl = settings.baseUrl;
        $scope.nombreApp = settings.nombreApp;
        $scope.nombreEmpresa = settings.nombreEmpresa;
        $scope.tituloMiganPan = "";

        $scope.formatoFecha = 'dd/MM/yyyy';
        self.sinContenido = '---';

        // Estas variables se actualizarán desde los estados login y home
        $rootScope.version = "";
        $rootScope.buildNumber = "";
        $rootScope.diaActivoCalendario = null;

        self.getEstadoActual = function(){
            return $state.current.name;
        };

        self.getURLByStateName = function(name){
            return $state.href(name);
        };

    }

})();