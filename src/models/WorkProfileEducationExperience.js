const DataTypes = require('sequelize')
const sequelize = require('../config/database');
const WorkProfile = require('./WorkProfile');
const EducationExperience = require('./EducationExperience');

const WorkProfileEducationExperience = sequelize.define(
  'work_profile_education_experiences', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    work_profile_id: {
      type: DataTypes.INTEGER,
      references: {
        model: WorkProfile,
        key: 'id'
      }
    },
    education_experience_id: {
      type: DataTypes.INTEGER,
      references: {
        model: EducationExperience,
        key: 'id',
      }
    }
  }
);

module.exports = WorkProfileEducationExperience;
