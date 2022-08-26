'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DevLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DevLanguage.belongsToMany(models.WorkProfile, {
        through: 'WorkProfileDevLanguage',
        foreignKey: 'dev_language_id',
        onDelete: 'CASCADE',
        // onUpdate: 'CASCADE', // optional
      });
    }
  }
  DevLanguage.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DevLanguage',
  });
  return DevLanguage;
};