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
      count: {
        type: Sequelize.INTEGER
      },
      workprofile_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'WorkProfiles',
          key: 'id'
        },
        allowNull: false,
      },
      educationExperience_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'EducationExperiences',
          key: 'id'
        },
        allowNull: false,
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