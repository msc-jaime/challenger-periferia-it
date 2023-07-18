const { getCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer} = require('../controllers/Customers');
const router = require('express').Router();

// CRUD Routes /customers
router.get('/', getCustomers); 
router.get('/:customerId', getCustomer); 
router.post('/', createCustomer);
router.put('/:customerId', updateCustomer); 
router.delete('/:customerId', deleteCustomer);

module.exports = router;
