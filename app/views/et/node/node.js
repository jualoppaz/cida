(function(){

    'use strict';

    angular.module('node')
        .controller('NodeController', Controller);

    Controller.$inject = ['node'];
    function Controller(node){
        var self = this;

        var params = node.params;

        self.logo = params.logo;
    }

})();