
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'quiz_db',
      username: 'ashkan',
      password: 'ashkan'
    },
    migrations: {
      tableName: "migrations",
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  }
}