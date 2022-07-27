require("dotenv").config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
    /* dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }, */
    define: {
      //prevent sequelize from pluralizing table names
      //freezeTableName: true,
    },
  }
}