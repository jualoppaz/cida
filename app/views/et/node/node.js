(function(){

    'use strict';

    angular.module('node')
        .controller('NodeController', controller);

    controller.$inject = ['nodeService'];
    function controller(node){
        var self = this;

        var params = node.params;

        self.logo = params.logo;
    }

})();