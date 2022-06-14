const DataTypes = require("sequelize");
const sequelize = require("../config/database");

const WorkProfileRole = sequelize.define(
  "work_profile_roles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: false, //* if true get date create and update
  }
);

module.exports = WorkProfileRole;
