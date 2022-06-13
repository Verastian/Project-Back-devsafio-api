const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.POSTGRES_DB, //db name
  process.env.POSTGRES_USER, //username
  process.env.POSTGRES_PASSWORD, //password of postgres
  {
    host: "db",
    dialect: "postgres",
  }
);

module.exports = sequelize;
