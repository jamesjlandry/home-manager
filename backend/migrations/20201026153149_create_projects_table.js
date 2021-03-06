
exports.up = function(knex) {
    return knex.schema.createTable('projects', function (table) {
        table.increments();
        table.string('name');
        table.float('start_time')
        table.float('end_time')
        table.integer('day')
        table.datetime('week')
        table.integer('user_id')
        table.timestamps();
      })
};

exports.down = function(knex) {
  return knex.schema.dropTable('projects')
};
