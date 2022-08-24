'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.UserStatus,
        {
          foreignKey: 'user_status_id',
          onDelete: 'CASCADE',
        }
      );
      User.hasOne(models.WorkProfile, {
        foreignKey: 'user_id',
        targetKey: 'id',
        onDelete: 'CASCADE'
      });
    }
  }
  User.init({
    user_status_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
