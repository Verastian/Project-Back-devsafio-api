'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SoftSkill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SoftSkill.belongsToMany(models.WorkProfile, {
        through: 'WorkProfileSoftSkills',
        foreignKey: 'softSkill_id',
        onDelete: 'CASCADE',
        // onUpdate: 'CASCADE', // optional
      });
    }
  }
  SoftSkill.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SoftSkill',
  });
  return SoftSkill;
};