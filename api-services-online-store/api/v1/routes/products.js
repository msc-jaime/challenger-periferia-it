const { getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/products');
const router = require('express').Router();

// CRUD Routes /products

/**
 * @swagger
 * components: 
 *  schemas:
 *    Product:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: Nombre de usuario
 *        price:
 *          type: string
 *          description: Precio del producto
 *        totalQuabtity:
 *          type: integer
 *          description: Total cantidad
 *        totalSold:
 *          type: integer
 *          description: Total vendidos
 *        urlProductImage:
 *          type: string
 *          description: Url de la ruta de la imagen
 *      required:
 *        - name
 *        - price
 *        - totalQuantity
 *        - totalSold
 *        - urlProductImage
 *      example:
 *        name: Pesa Báscula Gramera Balanza 500 Gr Para Joyas-alimentos 
 *        price: 30900
 *        totalQuantity: 40
 *        totalSold: 0
 *        urlProductImage: https://http2.mlstatic.com/D_NQ_NP_2X_647505-MCO48372021583_112021-F.webp
 */  

/**
 * @swagger
 * /api/v1/products:
 *  get:
 *    summary: return all products
 *    tags: [Product]
 *    responses:
 *      200:
 *        description: all products
 *        content:
 *          application/json:
 *            schema: 
 *              type: array
 *              items: 
 *                $ref: '#/components/schemas/Product'
 */
router.get('/', getProducts); 

/**
 * @swagger
 * /api/v1/products/{productId}:
 *  get:
 *    summary: return an products
 *    tags: [Product]
 *    parameters:
 *      - in: path
 *        name: productId
 *        schema: 
 *          type: string
 *        required: true
 *        description: the product id
 *    responses:
 *      200:
 *        description: an products
 *        content:
 *          application/json:
 *            schema: 
 *              type: object
 *              $ref: '#/components/schemas/Product'
 */
router.get('/:productId', getProduct); 

/**
 * @swagger
 * /api/v1/products:
 *  post:
 *    summary: create new products
 *    tags: [Product]
 *    requestBody: 
 *      required: true
 *      content: 
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/Product'
 *    responses:
 *      200:
 *        description: new user created!
 */
router.post('/', createProduct);

/**
 * @swagger
 * /api/v1/products/{productId}:
 *  put:
 *    summary: update an product
 *    tags: [Product]
 *    parameters:
 *      - in: path
 *        name: productId
 *        schema: 
 *          type: string
 *        required: true
 *        description: the product id
 *    requestBody: 
 *      required: true
 *      content: 
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/Product'
 *    responses:
 *      200:
 *        description: product update
 */
router.put('/:productId', updateProduct); 

/**
 * @swagger
 * /api/v1/products/{productId}:
 *  delete:
 *    summary: delete an products
 *    tags: [Product]
 *    parameters:
 *      - in: path
 *        name: productId
 *        schema: 
 *          type: string
 *        required: true
 *        description: the product id
 *    responses:
 *      200:
 *        description: product deleted
 */
router.delete('/:productId', deleteProduct);

module.exports = router;
