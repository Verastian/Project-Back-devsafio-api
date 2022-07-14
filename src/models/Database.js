const DataTypes = require('sequelize')
const sequelize = require('../config/database')

const Database = sequelize.define(
  'databases', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }
);

module.exports = Database;
