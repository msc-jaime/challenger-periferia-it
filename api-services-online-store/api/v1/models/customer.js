const { DataTypes } = require("sequelize")
const db = require('../util/database');

const Customer = db.define('customer', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.STRING, 
    allowNull: false
  },
});

module.exports = Customer;