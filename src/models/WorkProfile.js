const DataTypes = require("sequelize");
const sequelize = require("../config/database");

const WorkProfile = sequelize.define(
  "workprofile",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    branch_work: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("FEMALE", "MALE", "NEUTRAL"),
      defaultValue: "NEUTRAL",
    },
  },
  {
    timestamps: false, //* if true get date create and update
  }
);
module.exports = WorkProfile;
