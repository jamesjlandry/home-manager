
exports.up = function(knex) {
    return knex.schema.createTable('errands', function (table) {
        table.increments();
        table.string('name');
        table.string('description')
        table.float('start_time')
        table.float('end_time')
        table.integer('day')
        table.datetime('week')
        table.integer('user_id')
        table.timestamps();
      })
};

exports.down = function(knex) {
  return knex.schema.dropTable('errands')
};



// day: 0-6
// startTime : float (ex: 6, 13.5)
// endTime: float
// week: datetime/null <-- if it's null, recurs on a weekly basis. 
//                          If a datetime, calculate the actual time by adding the former 3 values to the datetime
//   Ex: day: 3, startTime: 12, endTime: 13.5,  week: 1604188800 (the very beginning of the sunday of that week)


// SELECT * FROM wherever WHERE week = {whatever week} OR week = null

