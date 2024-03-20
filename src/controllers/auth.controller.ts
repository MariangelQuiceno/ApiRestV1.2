import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
 /*
    * Para obtener la información ingresada en Thunder Client,
    * se puede utilizar el siguiente comando:
    */
    /*
    * console.log(req.body)
    */
    try {
      // Imprime en la consola la información recibida en el cuerpo de la solicitud.
        console.log(req.body);
        // Envía una respuesta indicando que se ha iniciado sesión.
        res.send("login");
      } catch (error) {
         // Maneja cualquier error que ocurra y devuelve una respuesta de error al cliente.
        return res.status(500).json({ message: "Internal server error" });
      }
    };