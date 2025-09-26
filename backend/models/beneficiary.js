'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beneficiary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Beneficiary.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    contact: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Beneficiary',
  });
  return Beneficiary;
};