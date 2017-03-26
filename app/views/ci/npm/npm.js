(function(){

    'use strict';

    angular.module('npm')
        .controller('NpmController', Controller);

    Controller.$inject = ['npm'];
    function Controller(npm){
        var self = this;

        var params = npm.params;

        self.logo = params.logo;
    }

})();