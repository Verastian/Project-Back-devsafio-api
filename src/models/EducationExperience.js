const DataTypes = require('sequelize')
const sequelize = require('../config/database')

const EducationExperience = sequelize.define(
    'education_experiences', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        institute_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        area: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        graduation_year: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }
);

module.exports = EducationExperience;
