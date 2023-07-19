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
    allowNull: false,
    validate: {
      notNull: { msg: "Full name is required" },
    },
  },
  email: { 
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Email is required" },
    },
  },
  amount: {
    type: DataTypes.STRING, 
    allowNull: false,
    validate: {
      notNull: { msg: "Amount is required" },
    },
  },
});

Customer.associate = models => {
  Customer.hasMany(models.Sale, { as: "sale"});
}

module.exports = Customer;