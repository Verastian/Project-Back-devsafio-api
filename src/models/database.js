'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Database extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Database.belongsToMany(models.WorkProfile, {
        through: 'WorkProfileDatabase',
        foreignKey: 'database_id',
        onDelete: 'CASCADE',
        // onUpdate: 'CASCADE', // optional
      });
    }
  }
  Database.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Database',
  });
  return Database;
};