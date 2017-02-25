var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(__dirname + '/app/public'));

var cadena_bbdd = "";

/*if(process.env.MONGOLAB_URL){
    cadena_bbdd = process.env.MONGOLAB_URL;
}else {
    cadena_bbdd = 'mongodb://localhost/jmlp';
}*/

var router = require('./server/router');

app.use(router);

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("Node server running on http://localhost:", port);
});