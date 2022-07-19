const DataTypes = require("sequelize");
const sequelize = require("../config/database");

const Role = sequelize.define(
  "roles", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

module.exports = Role;
