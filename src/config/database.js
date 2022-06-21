const { Sequelize } = require("sequelize");

//database wide options

const { NODE_ENV } = process.env;

const opts = {
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  dialectOptions: NODE_ENV !== 'production' ? {} : {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
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
