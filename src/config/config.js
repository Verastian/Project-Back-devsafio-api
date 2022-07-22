require('dotenv').config()


module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    /* 'username': process.env.POSTGRES_USER,
    'password': process.env.POSTGRES_PASSWORD,
    'host': process.env.POSTGRES_HOST, */
    dialect: "postgres",
    /* dialectOptions: process.env.NODE_ENV !== 'production' ? {} : {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    define: {
      //prevent sequelize from pluralizing table names
      //freezeTableName: true,
    }, */
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
    dialectOptions: process.env.NODE_ENV !== 'production' ? {} : {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    define: {
      //prevent sequelize from pluralizing table names
      // freezeTableName: true,
    },
  },
}
