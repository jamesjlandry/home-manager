
exports.up = function(knex) {
    knex.schema.createTable('errands', function (table) {
        table.increments();
        table.string('name');
        table.string('description')
        table.integer('duration')
        table.integer('user_id')
        table.timestamps();
      })
};

exports.down = function(knex) {
  
};
