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
        foreignKey: 'educationExperience_id',
        onDelete: 'CASCADE',
        // onUpdate: 'CASCADE', // optional
      });
    }
  }
  EducationExperience.init({
    name: DataTypes.STRING,
    institute_name: DataTypes.STRING,
    type: DataTypes.ENUM(
      "postgrado",
      "universidad",
      "instituto",
      "bootcamp",
      "otro",
    ),
    area: DataTypes.ENUM(
      "informática/sistemas/computación",
      "diseño-gráfico/audiovisual",
      "otra-ingeniería",
      "soporte/redes",
      "otra-carrera-técnica/profesional",
      "full-stack",
      "front-end",
      "diseño-ux/diseño-ui",
      "data-science/data-analysis",
      "desarrollo-mobile",
      "ciberseguridad",
      "otra",
    ),
    graduation_year: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EducationExperience',
  });
  return EducationExperience;
};