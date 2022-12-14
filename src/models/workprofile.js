'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      WorkProfile.belongsTo(models.User, {
        foreignKey: 'user_id',
        targetKey: 'id',
        onDelete: 'CASCADE'
      })
      WorkProfile.belongsToMany(models.EducationExperience, {
        through: 'WorkProfileEducationExperience',
        foreignKey: 'workprofile_id',
        onDelete: 'CASCADE'
      });
      WorkProfile.belongsToMany(models.DevLanguage, {
        through: 'WorkProfileDevLanguage',
        foreignKey: 'workprofile_id',
        onDelete: 'CASCADE'
      });
      WorkProfile.belongsToMany(models.SoftSkill, {
        through: 'WorkProfileSoftSkill',
        foreignKey: 'workprofile_id',
        onDelete: 'CASCADE'
      });
      WorkProfile.belongsToMany(models.Tool, {
        through: 'WorkProfileTool',
        foreignKey: 'workprofile_id',
        onDelete: 'CASCADE'
      });
      WorkProfile.belongsToMany(models.Role, {
        through: 'WorkProfileRole',
        foreignKey: 'workprofile_id',
        onDelete: 'CASCADE'
      });
      WorkProfile.belongsToMany(models.Database, {
        through: 'WorkProfileDatabase',
        foreignKey: 'workprofile_id',
        onDelete: 'CASCADE'
      });
    }
  }
  WorkProfile.init({
    user_id: DataTypes.INTEGER,
    country: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    city: DataTypes.STRING,
    cv_url: DataTypes.STRING,
    linkedin_url: DataTypes.STRING,
    github_url: DataTypes.STRING,
    featured_project: DataTypes.STRING,
    other_technologies_comment: DataTypes.STRING,
    ideal_work_comment: DataTypes.STRING,
    educational_level: DataTypes.ENUM(
      "universidad-completa",
      "universidad-incompleta-o-en-curso",
      "instituto-profesional-o-cft-completa",
      "instituto-profesional-o-cft-incompleta-o-en-curso",
      "educaci??n-media-completa",
      "bootcamp-completo",
      "bootcamp-incompleto-o-en-curso",
      "escolar-completa",
      "escolar-incompleta",
    ),
    relocation_option: DataTypes.ENUM(
      "quiero-trabajo-desde-mi-ciudad",
      "estoy-disponible-a-migrar-de-mi-ciudad-dentro-de-mi-pa??s",
      "estoy-disponible-para-migrar-a-otro-pa??s"),
    dev_experience: DataTypes.ENUM(
      "sin-experiencia",
      "0-a-1-a??os",
      "1-a-2-a??os",
      "2-a-4-a??os",
      "5+-a??os"),
    design_experience: DataTypes.ENUM(
      "sin-experiencia",
      "0-a-1-a??os",
      "1-a-2-a??os",
      "2-a-4-a??os",
      "5+-a??os"),
    data_experience: DataTypes.ENUM(
      "sin-experiencia",
      "0-a-1-a??os",
      "1-a-2-a??os",
      "2-a-4-a??os",
      "5+-a??os"),
    gender: DataTypes.ENUM(
      "masculino",
      "femenino",
      "otro",
      "prefiero-no-decirlo"),
    english_level: DataTypes.ENUM(
      "ninguno",
      "principiante-a1",
      "principiante-a2",
      "pre-intermedio-b1",
      "intermedio-b2",
      "intermedio-avanzado-c1",
      "avanzado-c2"),
    work_availability: DataTypes.ENUM(
      "fulltime",
      "part-time",
      "freelancer"),
    education_status: DataTypes.ENUM(
      "egresado/a",
      "titulado/a",
      "en-curso"),
    visa: DataTypes.ENUM(
      "estados-unidos",
      "union-europea",
      "mi-pa??s-de-residencia-actual",
      "otros-paises"),
  }, {
    sequelize,
    modelName: 'WorkProfile',

  });
  return WorkProfile;
};
