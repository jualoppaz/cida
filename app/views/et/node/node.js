(function(){

    'use strict';

    angular.module('node')
        .controller('NodeController', Controller);

    Controller.$inject = ['nodeService'];
    function Controller(node){
        var self = this;

        var params = node.params;

        self.logo = params.logo;
    }

})();