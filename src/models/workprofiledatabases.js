'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class workProfileDatabase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  workProfileDatabase.init({
    level: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WorkProfileDatabase',
  });
  return workProfileDatabase;
};