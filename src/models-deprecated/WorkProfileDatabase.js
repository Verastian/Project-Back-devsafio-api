const DataTypes = require("sequelize");
const sequelize = require("../config/database");
const Database = require('./Database');
const WorkProfile = require('./WorkProfile');

const WorkProfileDatabase = sequelize.define(
  "work_profile_databases", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    work_profile_id: {
      type: DataTypes.INTEGER,
      references: {
        model: WorkProfile,
        key: 'id'
      }
    },
    database_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Database,
        key: 'id'
      }
    },
  }
);

module.exports = WorkProfileDatabase;
