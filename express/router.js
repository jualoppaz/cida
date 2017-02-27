var express = require("express");
var router = express.Router();

// TODO: Importacion de rutas de los distintos modulos
require('./layouts/vnav.js')(router);

function notFound(req, res){
    res.status(404).send('not-found');
}

function index(req, res){
    res.redirect('/index.html');
}

router.get('/', index);

router.get('/api/*', notFound);

router.get('/*', notFound);

module.exports = router;