const { getCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer} = require('../controllers/customers');
const router = require('express').Router();

// CRUD Routes /customers

/**
 * @swagger
 * components: 
 *  schemas:
 *    Customer:
 *      type: object
 *      properties:
 *        fullName:
 *          type: string
 *          description: Nombre completo del cliente
 *        email:
 *          type: string
 *          description: Email del cliente
 *        amount:
 *          type: string
 *          description: Monto o cantidad
 *      required:
 *        - fullName
 *        - email
 *        - amount
 *      example:
 *        fullName: Sandra Rojas
 *        email: sandra.rojas@corre.com
 *        amount: 2000000
 */  

/**
 * @swagger
 * /api/v1/customers:
 *  get:
 *    summary: return all customers
 *    tags: [Customer]
 *    responses:
 *      200:
 *        description: all customers
 *        content:
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Customer'
 */
router.get('/', getCustomers); 

/**
 * @swagger
 * /api/v1/customers/{customerId}:
 *  get:
 *    summary: return an customer
 *    tags: [Customer]
 *    parameters:
 *      - in: path
 *        name: customerId
 *        schema: 
 *          type: string
 *        required: true
 *        description: the customer id
 *    responses:
 *      200:
 *        description: an customer
 *        content:
 *          application/json:
 *            schema: 
 *              type: object
 *              $ref: '#/components/schemas/Customer'
 */
router.get('/:customerId', getCustomer); 

/**
 * @swagger
 * /api/v1/customers:
 *  post:
 *    summary: create new customers
 *    tags: [Customer]
 *    requestBody: 
 *      required: true
 *      content: 
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/Customer'
 *    responses:
 *      200:
 *        description: new customer created!
 */
router.post('/', createCustomer);

/**
 * @swagger
 * /api/v1/customers/{customerId}:
 *  put:
 *    summary: update an customer
 *    tags: [Customer]
 *    parameters:
 *      - in: path
 *        name: customerId
 *        schema: 
 *          type: string
 *        required: true
 *        description: the customer id
 *    requestBody: 
 *      required: true
 *      content: 
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/Customer'
 *    responses:
 *      200:
 *        description: customer update
 */
router.put('/:customerId', updateCustomer); 

/**
 * @swagger
 * /api/v1/customers/{customerId}:
 *  delete:
 *    summary: delete an customers
 *    tags: [Customer]
 *    parameters:
 *      - in: path
 *        name: customerId
 *        schema: 
 *          type: string
 *        required: true
 *        description: the customer id
 *    responses:
 *      200:
 *        description: customer deleted
 */
router.delete('/:customerId', deleteCustomer);

module.exports = router;
