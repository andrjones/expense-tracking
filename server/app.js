var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 5101;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var expenseController = require('./controllers/expenseController.js')();
app.use('/api/expenses', expenseController);

var server = app.listen(port, function() {
    console.log('running server on port: ' + port);
});
