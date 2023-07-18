const { DataTypes } = require("sequelize")
const db = require('../util/database');

const Product = db.define('product', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: DataTypes.STRING,
  price: DataTypes.STRING,
  totalQuantity: DataTypes.INTEGER,
  urlProductImage: DataTypes.STRING
});

module.exports = Product;