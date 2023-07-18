const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./util/database');

const app = express();

// Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });

// Routes
app.get('/', (req, res, next) => {res.send('Api V1 Online Store');});
app.use('/products', require('./routes/products'));
app.use('/customers', require('./routes/customers'));
app.use('/sales', require('./routes/sales'));

// Error handling
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
  });

// Sync database
sequelize
  .sync()
  .catch(err => console.log(err));

const server = app.listen(3000);

module.exports = {app, server, sequelize};