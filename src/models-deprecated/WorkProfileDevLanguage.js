const DataTypes = require("sequelize");
const sequelize = require("../config/database");
const DevLanguage = require("./DevLanguage");
const WorkProfile = require("./WorkProfile");

const WorProfileDevLanguage = sequelize.define(
  "work_profile_dev_languages", {
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
    dev_language_id: {
      type: DataTypes.INTEGER,
      references: {
        model: DevLanguage,
        key: 'id'
      }
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }
);

module.exports = WorProfileDevLanguage;
