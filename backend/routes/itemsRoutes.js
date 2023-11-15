const express = require('express');
const router = express.Router();
const ecommerceController = require('../controllers/itemsControllers');

// Ruta para obtener la lista de productos
router.get('/products', ecommerceController.getAllProducts);

// Ruta para obtener detalles de un producto por su ID
router.get('/products/:productId', ecommerceController.getProductById);

// Ruta para crear un nuevo producto (requiere autenticación)
router.post('/products', ecommerceController.createProduct);

// Ruta para actualizar un producto por su ID (requiere autenticación)
router.put('/products/:productId', ecommerceController.updateProduct);

// Ruta para eliminar un producto por su ID (requiere autenticación)
router.delete('/products/:productId', ecommerceController.deleteProduct);

module.exports = router;