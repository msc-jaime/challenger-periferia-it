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
  const fullName = req.body.fullName;
  const email = req.body.email;
  const amount = req.body.amount;
  Customer.create({
    fullName: fullName,
    email: email,
    amount: amount,
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
  const updateFullName = req.body.fullName;
  const updateEmail = req.body.email;
  const updateAmount = req.body.amount;
  Customer.findByPk(customerId)
    .then(customer => {
      if (!customer) {
        return res.status(404).json({ message: 'Customer not found!' });
      }
      customer.updateFullName = updateFullName;
      customer.updateEmail = updateEmail;
      customer.updateAmount = updateAmount;
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

