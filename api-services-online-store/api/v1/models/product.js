const { DataTypes } = require("sequelize")
const db = require('../util/database');

const Product = db.define('product', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING, 
    allowNull: false
  },
  price: {
    type:DataTypes.STRING,
    allowNull: false
  },
  totalQuantity: {
    type:DataTypes.INTEGER,
    allowNull: false
  },
  urlProductImage: { 
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = Product;