var express, http, sysPath, statik;
express = require('express');
sysPath = require('path');
http = require('http');
exports.startServer = function(port, path, callback) {
    var app, server;
    app = express();
    app.use(express.static(path));

    require('./express/router')(app);

    app.all("/", function(req, res) {
        return res.redirect('/index.html');
    });

    app.get("/docs*", function(req, res) {
        return res.sendFile(sysPath.resolve(sysPath.join(path, "docs/index.html")));
    });

    app.all('/*', function(request, response) {
        return response.sendFile(sysPath.resolve(sysPath.join(path, 'index.html')));
    });

    server = http.createServer(app);

    // Inicializacion alternativa en Heroku
    port = port || 3333;

    server.listen(parseInt(port, 10), callback);

    console.log("Arrancamos el servidor en el puerto:", port);

    return server;
};

var portHeroku = process.env.port;

if(portHeroku){
    exports.startServer(portHeroku, './public', function(err, res){
        console.log("Servidor arrancado en Heroku correctamente en puerto:", portHeroku);
    });
}