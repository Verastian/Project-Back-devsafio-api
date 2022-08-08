'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkProfileDatabases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkProfileDatabases.init({
    level: DataTypes.INTEGER,
    workprofile_id: DataTypes.INTEGER,
    database_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WorkProfileDatabases',
  });
  return WorkProfileDatabases;
};