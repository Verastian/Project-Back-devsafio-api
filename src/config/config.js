
/* {
  "development": {
    "username": "app",
    "password": "password",
    "database": "devsafio-api-development",
    "host": "db",
    "dialect": "postgres"
  },
  "test": {
    "username": "app",
    "password": "password",
    "database": "devsafio-api-development",
    "host": "db",
    "dialect": "postgres"
  },
  "production": {
    "username": "app",
    "password": "password",
    "database": "devsafio-api-development",
    "host": "db",
    "dialect": "postgres"
  }
}
 */
module.exports = {
  "development": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DB,
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres",
  },
}
