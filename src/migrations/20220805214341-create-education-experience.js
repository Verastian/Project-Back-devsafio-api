'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EducationExperiences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      institute_name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.ENUM(
          "postgrado",
          "universidad",
          "instituto",
          "bootcamp",
          "otro",
        ),
      },
      area: {
        type: Sequelize.ENUM(
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
      },
      graduation_year: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('EducationExperiences');
  }
};