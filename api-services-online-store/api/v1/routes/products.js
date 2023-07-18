const controller = require('../controllers/products');
const router = require('express').Router();

// CRUD Routes /empleados
router.get('/', controller.getEmpleados); 
router.get('/:productsId', controller.getEmpleado); 
router.post('/', controller.createEmpleado);
router.put('/:productsId', controller.updateEmpleado); 
router.delete('/:productsId', controller.deleteEmpleado);

module.exports = router;
