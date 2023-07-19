const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./util/database');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Doc api service online store",
      version: "1.0.0"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: [
    `${path.join(__dirname, "./routes/*.js")}`
  ]
}

const app = express();

// Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });
app.use('/api/v1/doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

// Routes
app.get('/', (req, res, next) => {res.send('Api V1 Online Store');});
app.use('/api/v1/products', require('./routes/products'));
app.use('/api/v1/customers', require('./routes/customers'));
app.use('/api/v1/sales', require('./routes/sales'));

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