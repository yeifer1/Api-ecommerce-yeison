const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error('Error de conexión a la base de datos:', error));
db.once('open', () => console.log('Conexión exitosa a la base de datos'));

app.use(express.json());

const ecomerceRoutes = require('./routes/itemsRoutes');
const usersRoutes = require('./routes/usersRoutes');

app.use('/api', ecomerceRoutes);
app.use('/api', usersRoutes);

// Middleware de manejo de errores (debe ir al final)
const errorMiddleware = require('./middleware/errorMiddleware');
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});