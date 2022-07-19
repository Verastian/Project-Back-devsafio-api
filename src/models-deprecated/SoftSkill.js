const DataTypes = require('sequelize')
const sequelize = require('../config/database');


const SoftSkill = sequelize.define(
  'soft_skills', {
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

module.exports = SoftSkill;
