var /*apiProxy, */express, http, httpProxy, sysPath;
express = require('express');
sysPath = require('path');
http = require('http');
httpProxy = require('http-proxy');
/*apiProxy = httpProxy.createServer({
    target: 'http://uoclp.redocu.lan:80/InvestAugeRest',
    listen: 3333
});
apiProxy.on('error', function(e) {
    return console.error(e);
});*/
exports.startServer = function(port, path, callback) {
    var app, server;
    app = express();
    app.use(express.static(path));
    /*app.all("/rest/api/*", function(req, res) {
        delete req.headers.host;
        return apiProxy.web(req, res);
    });*/

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

    console.log("Puerto: ", port);

    server.listen(parseInt(port, 10), callback);
    return server;
};