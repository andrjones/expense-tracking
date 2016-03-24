var express = require('express');
var bodyParser = require('body-parser');
var routeConfig = require('./routeConfig');
require('./db'); // initialize bookshelf

var port = process.env.PORT || 5101;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

routeConfig(app);

var server = app.listen(port, function() {
    console.log('running server on port: ' + port);
});
