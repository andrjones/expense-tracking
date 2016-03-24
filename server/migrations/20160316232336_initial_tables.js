
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('categories', function(table) {
            table.string('id', 40).primary();
            table.string('category', 50).notNullable();
            table.string('subcat', 50).notNullable();
            table.boolean('active').notNullable().defaultTo(true);
            table.timestamps();
            table.index(['category', 'subcat'], 'uniq_cat_subcat', 'unique');
            table.engine('InnoDB');
            table.charset('utf8');
            table.collate('utf8_unicode_ci');
        }),

        knex.schema.createTable('expenses', function(table) {
            table.string('id', 40).primary();
            table.string('category_id', 40)
                .references('id')
                .inTable('categories');
            table.dateTime('date').notNullable();
            table.decimal('amount').notNullable();
            table.string('place');
            table.string('note');
            table.timestamps();
            table.engine('InnoDB');
            table.charset('utf8');
            table.collate('utf8_unicode_ci');
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('expenses'),
        knex.schema.dropTable('categories')
    ]);
};
