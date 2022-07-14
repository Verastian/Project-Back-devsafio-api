const DataTypes = require("sequelize");
const sequelize = require("../config/database");
const Tool = require('./Tool');
const WorkProfile = require('./WorkProfile');

const WorkProfileTool = sequelize.define(
  "work_profile_tools", {
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
    tool_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tool,
        key: 'id'
      }
    },
  },
);

module.exports = WorkProfileTool;
