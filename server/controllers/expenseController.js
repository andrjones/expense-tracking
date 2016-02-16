var express = require('express');

var expenseController = function(expenseService) {
    var expenseRouter = express.Router();

    expenseRouter
        .route('/')
        .get(function(request, response) {
            response.send(expenseService.getAllExpenses());
        });

    return expenseRouter;
};

module.exports = expenseController;