// Importa el objeto Router de Express y los controladores y middlewares necesarios
import { Router } from "express";
import { login } from "../controllers/auth.controller"; // Controlador para el inicio de sesión
import { schemaValidation } from "../middlewares/schemaValidator.middleware"; // Middleware para validación de esquema
import { loginSchema } from '../schemas/auth.schema'; // Esquema de validación para el inicio de sesión

// Crea una instancia de Router
const router = Router();

/**
 * Ruta para el inicio de sesión de usuario.
 * Se valida el cuerpo de la solicitud utilizando el esquema loginSchema.
 * Se llama a la función login del controlador de autenticación para manejar la solicitud.
 */
router.post("/login", schemaValidation(loginSchema), login);
// Define una ruta POST "/login":
// - Utiliza el middleware schemaValidation para validar el cuerpo de la solicitud utilizando el esquema loginSchema.
// - Llama a la función login del controlador de autenticación para manejar la solicitud.

// Exporta el enrutador
export default router;
