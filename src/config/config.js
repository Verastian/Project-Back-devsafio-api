require("dotenv").config();

module.exports = {
  development: {
    // hostname:process.env.DB_HOSTNAME,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    dialect: "postgres",
    host: process.env.POSTGRES_HOST,

  }
}
