const { getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/products');
const router = require('express').Router();

// CRUD Routes /products
router.get('/', getProducts); 
router.get('/:productId', getProduct); 
router.post('/', createProduct);
router.put('/:productId', updateProduct); 
router.delete('/:productId', deleteProduct);

module.exports = router;
