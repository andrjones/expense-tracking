var express = require('express');
var expenseService = require('expenseService');
var expenseRouter = express.Router();

var expenseController = function() {

    expenseRouter
        .route('/')
        .get(function(request, response) {
            response.send(expenseService.getAllExpenses());
            // todo: use this once the service returns a promise
            //expenseService.getAllExpenses().then(function(result) {
            //    response.send(result);
            //});
        });

    return expenseRouter;
};

module.exports = expenseController;