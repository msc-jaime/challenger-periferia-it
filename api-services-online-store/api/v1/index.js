const express = require('express');
const bodyparser = require('body-parser');


const app = express();

// Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });

// Test route
app.get('/', (req, res, next) => {
    res.send('Hello World');
  });

app.use('/products', require('./routes/products'));

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