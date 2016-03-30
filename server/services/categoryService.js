var categories = require('../models/collections/categories');

var categoryService = (function() {
    return {
        getAllActiveCategories: getAllActiveCategories
    };
    
    function getAllActiveCategories() {
        return categories.where('active', true).fetch().then(function(dbCategories) {
            return convertCollection(dbCategories);
        });
    }

    function convertCollection(dbCategories) {
        return dbCategories.map(convertCategory);
    }

    function convertCategory(category) {
        return {
            id: category.id,
            category: category.category,
            subcat: category.subcat
        };
    }
    
})();

module.exports = categoryService;
