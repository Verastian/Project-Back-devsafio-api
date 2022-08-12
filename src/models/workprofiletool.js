'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkProfileTool extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkProfileTool.init({
    count: DataTypes.INTEGER,
    workprofile_id: DataTypes.INTEGER,
    tool_id: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'WorkProfileTool',
  });
  return WorkProfileTool;
};