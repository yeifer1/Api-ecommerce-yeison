// Middleware de manejo de errores
function errorMiddleware(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
  
  module.exports = errorMiddleware;