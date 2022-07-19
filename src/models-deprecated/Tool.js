const DataTypes = require('sequelize')
const sequelize = require('../config/database')

const Tool = sequelize.define(
  'tools', {
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

module.exports = Tool;
