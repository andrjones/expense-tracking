var expenseService = require('./services/expenseService');
var expenseController = require('./controllers/expenseController');

var routeConfig = function(app) {
    app.use('/api/expenses', expenseController(expenseService));
};

module.exports = routeConfig;