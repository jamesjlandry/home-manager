
exports.up = function(knex) {
    knex.schema.createTable('projects', function (table) {
        table.increments();
        table.string('name');
        table.string('description')
        table.datetime('start_time')
        table.datetime('end_time')
        table.integer('user_id')
        table.timestamps();
      })
};

exports.down = function(knex) {
  
};
