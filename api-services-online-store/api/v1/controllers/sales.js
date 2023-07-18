const Sale = require('../models/sale');

exports.getSales = (req, res, next) => {
    Sale.findAll()
    .then(sales => {
      res.status(200).json({ sales: sales });
    })
    .catch(err => console.log(err));
}

exports.getSale = (req, res, next) => {
  const saleId = req.params.saleId;
  Sale.findByPk(saleId)
    .then(sale => {
      if (!sale) {
        return res.status(404).json({ message: 'Sale not found!' });
      }
      res.status(200).json({ sale: sale });
    })
    .catch(err => console.log(err));
}

exports.createSale = (req, res, next) => {
  const invoiceNumber = req.body.invoiceNumber;
  const idProduct = req.body.idProduct;
  const idCustomers = req.body.idCustomers;
  const quantityProduct = req.body.quantityProduct;
  const price = req.body.price;
  Sale.create({
    invoiceNumber: invoiceNumber,
    idProduct: idProduct,
    idCustomers: idCustomers,
    quantityProduct: quantityProduct,
    price: price,
  })
    .then(result => {
      res.status(201).json({
        message: 'Sales created successfully!',
        sales: result
      });
    })
    .catch(err => {
      console.log(err);
    });
}

exports.updateSale = (req, res, next) => {
  const saleId = req.params.saleId;

  const updatedInvoiceNumber = req.body.invoiceNumber;
  const updatedIdProduct = req.body.idProduct;
  const updatedIdCustomers = req.body.idCustomers;
  const updatedQuantityProduct = req.body.quantityProduct;
  const updatedPrice = req.body.price;
  Sale.findByPk(saleId)
    .then(sale => {
      if (!sale) {
        return res.status(404).json({ message: 'Sale not found!' });
      }
      sale.invoiceNumber = updatedInvoiceNumber;
      sale.price = updatedIdProduct;
      sale.idProduct = updatedIdCustomers;
      sale.idCustomers = updatedQuantityProduct;
      sale.quantityProduct = updatedPrice;
      return sale.save();
    })
    .then(result => {
      res.status(200).json({ message: 'Sale updated!', sale: result });
    })
    .catch(err => console.log(err));
}

exports.deleteSale = (req, res, next) => {
  const saleId = req.params.saleId;
  Sale.findByPk(saleId)
    .then(sale => {
      if (!sale) {
        return res.status(404).json({ message: 'Sale not found!' });
      }
      return Sale.destroy({
        where: {
          id: saleId
        }
      });
    })
    .then(result => {
      res.status(200).json({ message: 'Sale deleted!' });
    })
    .catch(err => console.log(err));
}

