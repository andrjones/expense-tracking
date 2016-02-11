var express = require('express');

var routeConfig = function(app) {
    app.use('/api/expenses', expenseRoute());
};

function expenseRoute() {
    var expenseRouter = express.Router();
    var expenseService = require('./services/expenseService');
    var expenseController = require('./controllers/expenseController')(expenseService);

    expenseRouter
        .route('/')
        .get(expenseController.getAllExpenses);

    return expenseRouter;
}

module.exports = routeConfig;