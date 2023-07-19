const { DataTypes } = require("sequelize")
const db = require('../util/database');

const Sale = db.define('sale', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  invoiceNumber: {
    type: DataTypes.STRING,
    allowNull: false
  } ,
  idProduct: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  idCustomers: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  quantityProduct: {
    type:DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type:DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Sale;