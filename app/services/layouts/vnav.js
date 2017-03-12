(function(){

    'use strict';

    angular.module('vnav')
        .factory('vnav', service);

    service.$inject = ['$http'];

    /**
     * @ngdoc service
     * @name vnav.vnav
     * @description
     * Servicio que contendrá todas las operaciones necesarias relacionadas con el menú lateral.
     */
    function service($http) {

        var service = {
            messages: {},

            getMenuCI: getMenuCI,
            getMenuET: getMenuET
        };

        return service;

        /**
         * Metodo que devuelve el listado de tecnologías relacionadas con la Integración Continua.
         */
        function getMenuCI() {

            return $http.get('/api/layouts/vnavs/CI')
                .then(function(data){
                    console.log("respuesta OK");
                })
                .catch(function(err){
                    console.log("error");
                });
        }

        /**
         * Metodo que devuelve el listado de tecnologías extra.
         */
        function getMenuET() {

            var res = {
                "items": [
                    {
                        "codigo": "ngdocs",
                        "titulo": "ng-docs"
                    },{
                        "codigo": "postgre",
                        "titulo": "PostgreSQL"
                    },{
                        "codigo": "sequelize",
                        "titulo": "SequelizeJS"
                    }
                ]
            };

            return res;
        }

    }

})();