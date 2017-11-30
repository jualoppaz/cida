(function(){

    'use strict';

    angular.module('ngdocs')
        .controller('NgDocsController', Controller);

    Controller.$inject = ['ngdocs'];
    function Controller(ngdocs){
        var self = this;

        var params = ngdocs.params;
    }

})();