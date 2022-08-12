require("dotenv").config();

const { NODE_ENV } = process.env;

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
    dialectOptions: NODE_ENV !== 'production' ? {} : {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}
