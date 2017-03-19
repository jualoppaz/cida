(function(){

    'use strict';

    angular.module('npm')
        .controller('NpmController', controller);

    controller.$inject = ['npm'];
    function controller(npm){
        var self = this;

        var params = npm.params;

        self.logo = params.logo;
    }

})();