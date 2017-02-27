(function(){

    'use strict';

    angular.module('vnav')
        .factory('vnav', vnavService);

    vnavService.$inject = [];

    function vnavService() {

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

            var res = {
                "items": [
                    {
                        "codigo": "home",
                        "titulo": "Inicio"
                    },{
                        "codigo": "angular",
                        "titulo": "AngularJS"
                    },{
                        "codigo": "brunch",
                        "titulo": "Brunch"
                    },{
                        "codigo": "sass",
                        "titulo": "Sass"
                    },{
                        "codigo": "node",
                        "titulo": "NodeJS"
                    }
                ]
            };

            return res;
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