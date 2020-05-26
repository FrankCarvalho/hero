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

  production: {
    client: 'mysql',
    connection: {
      host : 'mysql669.umbler.com',
    user : 'francisdev',
    password : 'fran9876',
    database : 'heropl'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  }

};
