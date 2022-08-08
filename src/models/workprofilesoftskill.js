'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkProfileSoftSkill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkProfileSoftSkill.init({
    workprofile_id: DataTypes.INTEGER,
    softSkill_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WorkProfileSoftSkill',
  });
  return WorkProfileSoftSkill;
};