const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.status(200).json({ products: products });
    })
    .catch(err => console.log(err));
}

exports.getProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findByPk(productId)
    .then(product => {
      if (!product) {
        return res.status(404).json({ message: 'Product not found!' });
      }
      res.status(200).json({ product: product });
    })
    .catch(err => console.log(err));
}

exports.createProduct = (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;
  const totalQuantity = req.body.totalQuantity;
  const totalSold = req.body.totalSold;
  const urlProductImage = req.body.urlProductImage;
  Product.create({
    name: name,
    price: price,
    totalQuantity: totalQuantity,
    totalSold: totalSold,
    urlProductImage: urlProductImage
  })
    .then(result => {
      res.status(201).json({
        message: 'Product created successfully!',
        products: result
      });
    })
    .catch(err => {
      console.log(err);
    });
}

exports.updateProduct = (req, res, next) => {
  const productId = req.params.productId;
  const updatedName = req.body.name;
  const updatedPrice = req.body.price;
  const updatedTotalQuantity = req.body.totalQuantity;
  const updatedTotalSold = req.body.updatedTotalSold;
  const updatedUrlProductImage = req.body.urlProductImage;
  Product.findByPk(productId)
    .then(product => {
      if (!product) {
        return res.status(404).json({ message: 'Product not found!' });
      }
      product.name = updatedName;
      product.price = updatedPrice;
      product.totalQuantity = updatedTotalQuantity;
      product.totalSold = updatedTotalSold;
      product.urlProductImage = updatedUrlProductImage;
      return product.save();
    })
    .then(result => {
      res.status(200).json({ message: 'Product updated!', product: result });
    })
    .catch(err => console.log(err));
}

exports.deleteProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findByPk(productId)
    .then(product => {
      if (!product) {
        return res.status(404).json({ message: 'Product not found!' });
      }
      return Product.destroy({
        where: {
          id: productId
        }
      });
    })
    .then(result => {
      res.status(200).json({ message: 'Product deleted!' });
    })
    .catch(err => console.log(err));
}

