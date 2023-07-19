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
  productId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'products',
      key: 'id'
    },
    onDelete: 'cascade'
  },
  customerId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'customers',
      key: 'id'
    },
    onDelete: 'cascade'
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