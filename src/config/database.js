const { Sequelize } = require("sequelize");

//database wide options
const opts = {
  host: "db",
  dialect: "postgres",
  define: {
    //prevent sequelize from pluralizing table names
    freezeTableName: true,
  },
};

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  opts
);

module.exports = sequelize;
