import { z } from "zod";
/**
 * Esquema para validar los datos de inicio de sesión.
 */
export const loginSchema = z.object({
  body: z.object({
    email: z.string().nonempty("Email is required").email({
      message: "Write a correct email", // Mensaje personalizado para la validación de correo electrónico.
    }),
    password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password too short"), // Requiere que la contraseña tenga al menos 6 caracteres.
  }),
});