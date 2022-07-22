'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EducationExperience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EducationExperience.belongsToMany(models.WorkProfile, {
        through: 'WorkProfileEducationExperience',
        foreignKey: 'workprofile_id',
        onDelete: 'CASCADE',
        // onUpdate: 'CASCADE', // optional
      });
    }
  }
  EducationExperience.init({
    name: DataTypes.STRING,
    institute_name: DataTypes.STRING,
    type: DataTypes.STRING,
    area: DataTypes.STRING,
    graduation_year: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EducationExperience',
  });
  return EducationExperience;
};