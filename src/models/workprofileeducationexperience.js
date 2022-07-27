'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkProfileEducationExperience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkProfileEducationExperience.init({
    count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WorkProfileEducationExperience',
  });
  return WorkProfileEducationExperience;
};