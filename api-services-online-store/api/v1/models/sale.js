const { DataTypes } = require("sequelize")
const db = require('../util/database');

const Sale = db.define('sale', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  invoiceNumber: DataTypes.STRING,
  idProduct: DataTypes.BIGINT,
  idCustomers: DataTypes.BIGINT,
  quantityProduct: DataTypes.INTEGER,
  price: DataTypes.STRING,
});

module.exports = Sale;