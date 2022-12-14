'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WorkProfileEducationExperiences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      workprofile_id: {
        type: Sequelize.INTEGER
      },
      education_experience_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('WorkProfileEducationExperiences');
  }
};
