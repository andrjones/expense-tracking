var expenseService = require('./services/expenseService');
var expenseController = require('./controllers/expenseController');
var categoryService = require('./services/categoryService');
var categoryController = require('./controllers/categoryController');

var routeConfig = function(app) {
    app.use('/api/expenses', expenseController(expenseService));
    app.use('/api/categories', categoryController(categoryService));
};

module.exports = routeConfig;