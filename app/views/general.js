(function(){

    'use strict';

    angular.module('general')

        .controller('GeneralController', GeneralController);

    GeneralController.$inject = ['$scope', '$rootScope', 'settings', '$state', 'general'];

    function GeneralController($scope, $rootScope, settings, $state, general) {
        /* jshint validthis: true */
        var self = this;

        $scope.nombreApp = settings.nombreApp;

        self.getActualState = function(){
            return general.getActualState();
        };

        self.getURLByScreenName = function(screen){
            return general.getURLByScreenName(screen);
        };

        self.getStateNameByScreen = function(screen){
            return general.getStateNameByScreen(screen);
        };

    }

})();