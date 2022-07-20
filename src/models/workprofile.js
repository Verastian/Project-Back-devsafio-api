'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkProfile.init({
    country: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    city: DataTypes.STRING,
    cv_url: DataTypes.STRING,
    linkendin_url: DataTypes.STRING,
    github_url: DataTypes.STRING,
    featured_project: DataTypes.STRING,
    other_technologies_comment: DataTypes.STRING,
    ideal_work_comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'WorkProfile',
  });
  return WorkProfile;
};