const DataTypes = require("sequelize");
const sequelize = require("../config/database");

const UserStatus = sequelize.define(
  "user_statuses",
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
    timestamps: true,
  }
);

module.exports = UserStatus;
