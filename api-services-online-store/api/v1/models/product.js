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
    allowNull: false,
    validate: {
      notNull: { msg: "Name is required" },
    },
  },
  price: {
    type:DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Price is required" },
    },
  },
  totalQuantity: {
    type:DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: { msg: "Total quantity is required" },
    },
  },
  totalSold: {
    type:DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: { msg: "Total sold is required" },
    },
  },
  urlProductImage: { 
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Url product image is required" },
    },
  },
});

Product.associate = models => {
  Product.hasMany(models.Sale, { as: "sale"});
}

module.exports = Product;