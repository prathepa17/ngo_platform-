'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Allocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Allocation.init({
    donationId: DataTypes.INTEGER,
    beneficiaryId: DataTypes.INTEGER,
    allocatedBy: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    amountAllocated: DataTypes.DECIMAL,
    note: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Allocation',
  });
  return Allocation;
};