const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersControllers');
const authMiddleware = require('../middleware/authMiddleware');

// Ruta para registrar un nuevo usuario
router.post('/register', userController.registerUser);

// Ruta para iniciar sesión
router.post('/login', userController.loginUser);

// Rutas protegidas que requieren autenticación mediante middleware
router.use(authMiddleware);

// Ruta para obtener información del usuario actual
router.get('/current-user', userController.getCurrentUser);

// Ruta para cerrar sesión
router.post('/logout', userController.logoutUser);

module.exports = router;