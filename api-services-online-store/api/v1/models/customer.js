const { DataTypes } = require("sequelize")
const db = require('../util/database');

const Customer = db.define('customer', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  fullName: DataTypes.STRING,
  email: DataTypes.STRING,
  amount: DataTypes.STRING,
});

module.exports = Customer;