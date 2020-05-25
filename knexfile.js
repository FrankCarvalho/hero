// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'heropl'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'mysql',
    connection: {
      filename: './src/database/test.sql'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'heropl',
      user:     'francisdev',
      password: 'fran9876'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
