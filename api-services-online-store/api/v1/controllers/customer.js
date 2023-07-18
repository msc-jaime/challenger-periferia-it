const Customer = require('../models/customer');

exports.getCustomers = (req, res, next) => {
    Customer.findAll()
    .then(customers => {
      res.status(200).json({ customers: customers });
    })
    .catch(err => console.log(err));
}

exports.getCustomer = (req, res, next) => {
  const customerId = req.params.customerId;
  Customer.findByPk(customerId)
    .then(customer => {
      if (!customer) {
        return res.status(404).json({ message: 'Customer not found!' });
      }
      res.status(200).json({ customer: customer });
    })
    .catch(err => console.log(err));
}

exports.createCustomer = (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;
  const totalQuantity = req.body.totalQuantity;
  const urlCustomerImage = req.body.urlCustomerImage;
  Customer.create({
    name: name,
    price: price,
    totalQuantity: totalQuantity,
    urlCustomerImage: urlCustomerImage
  })
    .then(result => {
      res.status(201).json({
        message: 'Customer created successfully!',
        customers: result
      });
    })
    .catch(err => {
      console.log(err);
    });
}

exports.updateCustomer = (req, res, next) => {
  const customerId = req.params.customerId;
  const updatedName = req.body.name;
  const updatedPrice = req.body.price;
  const updatedTotalQuantity = req.body.totalQuantity;
  Customer.findByPk(customerId)
    .then(customer => {
      if (!customer) {
        return res.status(404).json({ message: 'Customer not found!' });
      }
      customer.name = updatedName;
      customer.price = updatedPrice;
      customer.totalQuantity = updatedTotalQuantity;
      return customer.save();
    })
    .then(result => {
      res.status(200).json({ message: 'Customer updated!', customer: result });
    })
    .catch(err => console.log(err));
}

exports.deleteCustomer = (req, res, next) => {
  const customerId = req.params.customerId;
  Customer.findByPk(customerId)
    .then(customer => {
      if (!customer) {
        return res.status(404).json({ message: 'Customer not found!' });
      }
      return Customer.destroy({
        where: {
          id: customerId
        }
      });
    })
    .then(result => {
      res.status(200).json({ message: 'Customer deleted!' });
    })
    .catch(err => console.log(err));
}

