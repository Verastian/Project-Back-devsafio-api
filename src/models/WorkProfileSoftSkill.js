const DataTypes = require("sequelize");
const sequelize = require("../config/database");
const SoftSkill = require("./SoftSkill");
const WorkProfile = require("./WorkProfile");

const WorkProfileSoftSkill = sequelize.define(
  "work_profile_soft_skills", {
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
    soft_skill_id: {
      type: DataTypes.INTEGER,
      references: {
        model: SoftSkill,
        key: 'id'
      }
    }
  }
);

module.exports = WorkProfileSoftSkill;
