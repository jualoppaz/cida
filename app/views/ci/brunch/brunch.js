(function(){

    'use strict';

    angular.module('brunch')
        .controller('BrunchController', Controller);

    Controller.$inject = ['brunch'];
    function Controller(brunch){
        var self = this;

        var params = brunch.params;

        self.logo = params.logo;
    }

})();