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
        type: Sequelize.ENUM
      },
      relocation_option: {
        type: Sequelize.ENUM
      },
      dev_experience: {
        type: Sequelize.ENUM
      },
      design_experience: {
        type: Sequelize.ENUM
      },
      data_experience: {
        type: Sequelize.ENUM
      },
      gender: {
        type: Sequelize.ENUM
      },
      english_level: {
        type: Sequelize.ENUM
      },
      work_availability: {
        type: Sequelize.ENUM
      },
      education_status: {
        type: Sequelize.ENUM
      },
      visa: {
        type: Sequelize.ENUM
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
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