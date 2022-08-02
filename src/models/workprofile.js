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
      WorkProfile.hasOne(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        // onUpdate: 'CASCADE', // optional
      });
      WorkProfile.belongsToMany(models.Database, {
        through: 'WorkProfileDatabase',
        foreignKey: 'workprofile_id',
        onDelete: 'CASCADE',
        // onUpdate: 'CASCADE', // optional
      });
      WorkProfile.belongsToMany(models.DevLanguage, {
        through: 'WorkProfileDevLanguage',
        foreignKey: 'workprofile_id',
        onDelete: 'CASCADE',
        // onUpdate: 'CASCADE', // optional
      });
      WorkProfile.belongsToMany(models.EducationExperience, {
        through: 'WorkProfileEducationExperience',
        foreignKey: 'workprofile_id',
        onDelete: 'CASCADE',
        // onUpdate: 'CASCADE', // optional
      });
      WorkProfile.belongsToMany(models.SoftSkill, {
        through: 'WorkProfileSoftSkill',
        foreignKey: 'workprofile_id',
        onDelete: 'CASCADE',
        // onUpdate: 'CASCADE', // optional
      });
      WorkProfile.belongsToMany(models.Tool, {
        through: 'WorkProfileTool',
        foreignKey: 'workprofile_id',
        onDelete: 'CASCADE',
        // onUpdate: 'CASCADE', // optional
      });
      WorkProfile.belongsToMany(models.Role, {
        through: 'WorkProfileRole',
        foreignKey: 'workprofile_id',
        onDelete: 'CASCADE',
        // onUpdate: 'CASCADE', // optional
      });
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
    ideal_work_comment: DataTypes.STRING,
    educational_level: {
      type: DataTypes.ENUM, values: [
        "universidad-completa",
        "universidad-incompleta-o-en-curso",
        "instituto-profesional-o-cft-completa",
        "instituto-profesional-o-cft-incompleta-o-en-curso",
        "educación-media-completa",
        "bootcamp-completo",
        "bootcamp-incompleto-o-en-curso",
        "escolar-completa",
        "escolar-incompleta",

      ],
      allowNull: false
    },
    relocation_option: {
      type: DataTypes.ENUM, values: [
        "quiero-trabajo-desde-mi-ciudad",
        "estoy-disponible-a-migrar-de-mi-ciudad-dentro-de-mi-país",
        "estoy-disponible-para-migrar-a-otro-país"],
      allowNull: false,
    },
    dev_experience: {
      type: DataTypes.ENUM, values: [
        "sin-experiencia",
        "0-a-1-años",
        "1-a-2-años",
        "2-a-4-años",
        "5+-años"],
      allowNull: false
    },
    design_experience: {
      type: DataTypes.ENUM, values: [
        "sin-experiencia",
        "0-a-1-años",
        "1-a-2-años",
        "2-a-4-años",
        "5+-años"],
      allowNull: false,
    },
    data_experience: {
      type: DataTypes.ENUM, values: [
        "sin-experiencia",
        "0-a-1-años",
        "1-a-2-años",
        "2-a-4-años",
        "5+-años"],
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM, values: [
        "masculino",
        "femenino",
        "otro",
        "prefiero-no-decirlo"],
      allowNull: false,
    },
    english_level: {
      type: DataTypes.ENUM, values: [
        "ninguno",
        "principiante-a1",
        "principiante-a2",
        "pre-intermedio-b1",
        "intermedio-b2",
        "intermedio-avanzado-c1",
        "avanzado-c2"],
      allowNull: false,
    },
    work_availability: {
      type: DataTypes.ENUM, values: [
        "fulltime",
        "part-time",
        "freelancer"],
      allowNull: false,
    },
    education_status: {
      type: DataTypes.ENUM, values: [
        "egresado/a",
        "titulado/a",
        "en-curso"],
      allowNull: false,
    },
    visa: {
      type: DataTypes.ENUM, values: [
        "estados-unidos",
        "union-europea",
        "mi-país-de-recidencia-actual",
        "otros-paises"],
      allowNull: false,
    },
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'WorkProfile',
  });
  return WorkProfile;
};