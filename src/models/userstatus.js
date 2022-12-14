'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserStatus.hasMany(models.User,
        {
          foreignKey: 'user_status_id',
          allowNull: false
        }
      )
    }
  }
  UserStatus.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserStatus',
  });
  return UserStatus;
};