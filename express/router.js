var express = require("express");
var router = express.Router();

module.exports = function(app){

    // TODO: Importacion de rutas de los distintos modulos
    require('./layouts/vnav.js')(app);

};
