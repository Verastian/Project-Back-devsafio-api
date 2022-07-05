const DataTypes = require("sequelize");
const sequelize = require("../config/database");

const WorkProfile = sequelize.define(
  "work_profiles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("FEMALE", "MALE", "NEUTRAL"),
      defaultValue: "NEUTRAL",
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = WorkProfile;
