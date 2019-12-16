
exports.up = function(knex,Promise) {
    return knex.schema.createTable("posts",table=>{
        table.incriments("id");
        table.string("title");
        table.text("content");
        table.string("tags");
        table.timestamp("createAt").defaultTo(knex.fn.now());
    });
  
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTable("posts");
  
};
