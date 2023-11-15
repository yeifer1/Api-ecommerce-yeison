const User = require('../models/usersModel');

// Registrar un nuevo usuario
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
};

// Iniciar sesión de usuario
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Contraseña incorrecta' });
    }

    // Aquí puedes generar un token JWT y enviarlo al cliente para mantener la sesión activa

    res.json({ message: 'Inicio de sesión exitoso', user });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

// Obtener información del usuario actual
exports.getCurrentUser = async (req, res) => {
  try {
    // Puedes acceder a la información del usuario autenticado a través de req.user
    const currentUser = req.user;
    res.json({ user: currentUser });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener información del usuario' });
  }
};

// Cerrar sesión de usuario
exports.logoutUser = async (req, res) => {
  try {
    // Implementa la lógica para cerrar sesión de usuario, como invalidar el token JWT
    res.json({ message: 'Cierre de sesión exitoso' });
  } catch (error) {
    res.status(500).json({ error: 'Error al cerrar sesión' });
  }
};