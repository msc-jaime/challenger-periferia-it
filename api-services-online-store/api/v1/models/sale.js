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
    allowNull: false,
    validate: {
      notNull: { message: "Invoice number is required" },
    },
  },
  productId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    validate: {
      notNull: { message: "Product id is required" },
    },
    references: {
      model: 'products',
      key: 'id'
    },
    onDelete: 'cascade'
  },
  customerId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    validate: {
      notNull: { msg: "Customer id is required" },
    },
    references: {
      model: 'customers',
      key: 'id'
    },
    onDelete: 'cascade'
  },
  quantityProduct: {
    type:DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: { msg: "Quantity product is required" },
    },
  },
  price: {
    type:DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Price is required" },
    },
  }
});


Sale.associate = (models) => {
  Sale.belongsTo(models.Product, {
    foreignKey: "productId",
    as: "product"
  });
}

Sale.associate = (models) => {
  Sale.belongsTo(models.Customer, {
    foreignKey: "customerId",
    as: "customer"
  });
}

module.exports = Sale;