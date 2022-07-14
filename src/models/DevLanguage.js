const DataTypes = require('sequelize')
const sequelize = require('../config/database')

const DevLanguage = sequelize.define(
  'dev_languages', {
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
)

module.exports = DevLanguage;
