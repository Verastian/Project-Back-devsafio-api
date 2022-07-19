const DataTypes = require("sequelize");
const sequelize = require("../config/database");
const WorkProfile = require('./WorkProfile');
const Role = require('./Role');

const WorkProfileRole = sequelize.define(
  "work_profile_roles", {
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
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Role,
        key: 'id'
      }
    },
  }
);

module.exports = WorkProfileRole;
