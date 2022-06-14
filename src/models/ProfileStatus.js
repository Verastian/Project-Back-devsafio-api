const DataTypes = require("sequelize");
const sequelize = require("../config/database");

const ProfileStatus = sequelize.define(
  "profile_statuses",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, //* if true get date create and updpte
  }
);

module.exports = ProfileStatus;
