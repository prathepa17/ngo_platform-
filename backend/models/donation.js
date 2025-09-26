'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Donation.init({
    donorId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    itemDescription: DataTypes.TEXT,
    itemQuantity: DataTypes.INTEGER,
    receiptUrl: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Donation',
  });
  return Donation;
};