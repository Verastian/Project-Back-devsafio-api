const { Sequelize } = require("sequelize");

/* 
! this setting is temporary 
*/
const sequelize = new Sequelize(
  "devsafio_db", //db name
  "postgres", //username
  "postadmin123", //password of postgres
  {
    host: "localhost",
    dialect: "postgres",
  }
);

module.exports = sequelize;
