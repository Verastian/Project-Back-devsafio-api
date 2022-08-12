'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WorkProfileDevLanguages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      level: {
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
      devLanguage_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'DevLanguages',
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
    await queryInterface.dropTable('WorkProfileDevLanguages');
  }
};
