const DataTypes = require("sequelize");
const sequelize = require("../config/database");

const WorkProfile = sequelize.define(
  "work_profiles", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cv_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    linkedin_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    github_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    featured_project: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dev_experience: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ideal_work_comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    educational_level: {
      type: DataTypes.ENUM(
        "universidad-completa",
        "universidad-incompleta-o-en-curso",
        "instituto-profesional-o-cft-completa",
        "instituto-profesional-o-cft-incompleta-o-en-curso",
        "educación-media-completa",
        "bootcamp-completo",
        "bootcamp-incompleto-o-en-curso",
        "escolar-completa",
        "escolar-incompleta",
      ),
      allowNull: false
    },
    relocation_option: {
      type: DataTypes.ENUM(
        "quiero-trabajo-desde-mi-ciudad",
        "estoy-disponible-a-migrar-de-mi-ciudad-dentro-de-mi-país",
        "estoy-disponible-para-migrar-a-otro-país"),
      allowNull: false,
    },
    design: {
      type: DataTypes.ENUM(
        "sin-experiencia",
        "0-a-1-años",
        "1-a-2-años",
        "2-a-4-años",
        "5+-años"),
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM(
        "masculino",
        "femenino",
        "otro",
        "prefiero-no-decirlo"),
      allowNull: false,
    },
    visa: {
      type: DataTypes.ENUM(
        "estados-unidos",
        "union-europea",
        "mi-país-de-recidencia-actual",
        "otros-paises"),
      allowNull: false,
    },
    english_level: {
      type: DataTypes.ENUM(
        "ninguno",
        "principiante-a1",
        "principiante-a2",
        "pre-intermedio-b1",
        "intermedio-b2",
        "intermedio-avanzado-c1",
        "avanzado-c2"),
      allowNull: false,
    },
    work_availability: {
      type: DataTypes.ENUM(
        "fulltime",
        "part-time",
        "freelancer"),
      allowNull: false,
    },
    education_status: {
      type: DataTypes.ENUM(
        "egresado/a",
        "titulado/a",
        "en-curso"),
      allowNull: false,
    },
  }
);
module.exports = WorkProfile;
