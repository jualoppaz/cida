var express, http, sysPath;
express = require('express');
sysPath = require('path');
http = require('http');
exports.startServer = function(port, path, callback) {
    var app, server;
    app = express();

    console.log("Ruta configurada en app:", path);

    app.use(express.static(path));

    require('./express/router')(app);

    app.all("/", function(req, res) {
        console.log("Entramos en ruta: /");
        console.log("Ruta recibida:", req.url);
        return res.redirect('index.html');
    });

    app.get("/docs*", function(req, res) {
        return res.sendFile(sysPath.resolve(sysPath.join(path, "docs/index.html")));
    });

    app.all('/*', function(req, res) {
        console.log("Entramos en ruta: /*");
        console.log("Ruta recibida:", req.url);

        var filePath = sysPath.resolve(sysPath.join(path, 'index.html'));

        console.log("Ubicacion del fichero a retornar:", filePath);
        return res.sendFile(filePath);
    });

    server = http.createServer(app);

    // Inicializacion alternativa en Heroku
    port = process.env.port || port;

    server.listen(parseInt(port, 10), callback);

    console.log("Arrancamos el servidor en el puerto:", port);

    return server;
};

var portHeroku = process.env.port;

console.log("Puerto en Heroku:", portHeroku);

if(portHeroku){
    /*exports.startServer(portHeroku, './public', function(err, res){
        console.log("Servidor arrancado en Heroku correctamente en puerto:", portHeroku);
    });*/

    console.log("Vamos a lanzar el servidor en Heroku");

    exports.startServer();
}