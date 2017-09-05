(function(){

    'use strict';

    angular.module('angular')
        .controller('AngularController', Controller);

    Controller.$inject = ['angular'];

    function Controller(angular){
        var self = this;

        var params = angular.params;

        self.logo = params.logo;
    }

})();