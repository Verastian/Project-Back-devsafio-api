'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tool extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tool.belongsToMany(models.WorkProfile, {
        through: 'WorkProfileTool',
        foreignKey: 'workprofile_id',
        onDelete: 'CASCADE',
        // onUpdate: 'CASCADE', // optional
      });
    }
  }
  Tool.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tool',
  });
  return Tool;
};