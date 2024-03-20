import express from "express";
import authRoutes from './routes/auth.routes'
import productRoutes from './routes/products.routes'

const app = express();

// Habilita el middleware para analizar el cuerpo de la solicitud como JSON.
app.use(express.json());

// Usa las rutas definidas en authRoutes para manejar las solicitudes relacionadas con la autenticación.
app.use(authRoutes);

// Usa las rutas definidas en productRoutes para manejar las solicitudes relacionadas con los productos.
app.use(productRoutes);

// Establece el servidor para escuchar en el puerto 3000.
app.listen(3000);

// Imprime un mensaje en la consola indicando que el servidor está escuchando en el puerto 3000.
console.log('Server on port',3000);