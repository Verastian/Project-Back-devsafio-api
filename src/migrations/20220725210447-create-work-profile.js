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