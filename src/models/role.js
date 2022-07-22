'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Role.belongsToMany(models.WorkProfile, {
        through: 'WorkProfileRole',
        foreignKey: 'worprofile_id',
        onDelete: 'CASCADE',
        // onUpdate: 'CASCADE', // optional
      });
    }
  }
  Role.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
    underscored: true,
  });
  return Role;
};