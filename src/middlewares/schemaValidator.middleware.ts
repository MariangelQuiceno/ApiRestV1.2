import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";
/*
*Creamos una funcion para hacer la validacion
*/
export const schemaValidation =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
// Parsea los datos de la solicitud utilizando el esquema Zod.
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });
// Si la validación es exitosa, pasa al siguiente middleware.
      next();
    } catch (error) {
      console.log(error);
// Maneja los errores de validación.
      if (error instanceof ZodError) {
// Si el error es de tipo ZodError, envía una respuesta con detalles del error.
        return res.status(400).json(
          error.issues.map((issue) => ({
            path: issue.path,
            message: issue.message,
          }))
        );
      }
// Si el error no es de tipo ZodError, envía una respuesta de error genérica.
      return res.status(400).json({ message: "internal server error" });
    }
  };
        
      
      