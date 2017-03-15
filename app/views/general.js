(function(){

    'use strict';

    angular.module('general')

        .controller('GeneralCtrl', GeneralCtrl);

    GeneralCtrl.$inject = ['$scope', '$rootScope', 'settings', '$state', 'generalService'];

    function GeneralCtrl($scope, $rootScope, settings, $state, general) {
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