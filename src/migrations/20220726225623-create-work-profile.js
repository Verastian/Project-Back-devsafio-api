'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WorkProfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      cv_url: {
        type: Sequelize.STRING
      },
      linkendin_url: {
        type: Sequelize.STRING
      },
      github_url: {
        type: Sequelize.STRING
      },
      featured_project: {
        type: Sequelize.STRING
      },
      other_technologies_comment: {
        type: Sequelize.STRING
      },
      ideal_work_comment: {
        type: Sequelize.STRING
      },
      educational_level: {
        type: Sequelize.ENUM, values: [
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
        type: Sequelize.ENUM, values: [
          "quiero-trabajo-desde-mi-ciudad",
          "estoy-disponible-a-migrar-de-mi-ciudad-dentro-de-mi-país",
          "estoy-disponible-para-migrar-a-otro-país"],
        allowNull: false,
      },
      dev_experience: {
        type: Sequelize.ENUM, values: [
          "sin-experiencia",
          "0-a-1-años",
          "1-a-2-años",
          "2-a-4-años",
          "5+-años"],
        allowNull: false
      },
      design_experience: {
        type: Sequelize.ENUM, values: [
          "sin-experiencia",
          "0-a-1-años",
          "1-a-2-años",
          "2-a-4-años",
          "5+-años"],
        allowNull: false,
      },
      data_experience: {
        type: Sequelize.ENUM, values: [
          "sin-experiencia",
          "0-a-1-años",
          "1-a-2-años",
          "2-a-4-años",
          "5+-años"],
        allowNull: false
      },
      gender: {
        type: Sequelize.ENUM, values: [
          "masculino",
          "femenino",
          "otro",
          "prefiero-no-decirlo"],
        allowNull: false,
      },
      english_level: {
        type: Sequelize.ENUM, values: [
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
        type: Sequelize.ENUM, values: [
          "fulltime",
          "part-time",
          "freelancer"],
        allowNull: false,
      },
      education_status: {
        type: Sequelize.ENUM, values: [
          "egresado/a",
          "titulado/a",
          "en-curso"],
        allowNull: false,
      },
      visa: {
        type: Sequelize.ENUM, values: [
          "estados-unidos",
          "union-europea",
          "mi-país-de-recidencia-actual",
          "otros-paises"],
        allowNull: false,
      },

      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('WorkProfiles');
  }
};