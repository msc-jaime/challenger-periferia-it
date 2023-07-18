const { getSales, getSale, createSale, updateSale, deleteSale} = require('../controllers/sales');
const router = require('express').Router();

// CRUD Routes /sales
router.get('/', getSales); 
router.get('/:saleId', getSale); 
router.post('/', createSale);
router.put('/:saleId', updateSale); 
router.delete('/:saleId', deleteSale);

module.exports = router;
