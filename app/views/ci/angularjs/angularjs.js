(function(){

    'use strict';

    angular.module('angularjs')
        .controller('AngularjsController', Controller);

    Controller.$inject = ['angularjs'];

    function Controller(angularjs){
        var self = this;

        var params = angularjs.params;

        self.logo = params.logo;
    }

})();