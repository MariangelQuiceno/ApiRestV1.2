import { Router } from "express";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getProducts, // Importa la función getProducts
} from "../controllers/products.controller";
import { schemaValidation } from "../middlewares/schemaValidator.middleware";
import {
  CreateProductSchema,
  UpdateProductSchema,
} from "../schemas/product.schema";

const router = Router();

/**
 * Ruta para crear un nuevo producto.
 * Se valida el cuerpo de la solicitud utilizando el esquema CreateProductSchema.
 * Se llama a la función createProduct del controlador de productos para manejar la solicitud.
 */
router.post("/products", schemaValidation(CreateProductSchema), createProduct);

/**
 * Ruta para actualizar un producto existente.
 * Se valida el cuerpo, los parámetros y la consulta de la solicitud utilizando el esquema UpdateProductSchema.
 * Se llama a la función updateProduct del controlador de productos para manejar la solicitud.
 */
router.put("/products/:id", schemaValidation(UpdateProductSchema), updateProduct);

/**
 * Ruta para eliminar un producto existente.
 * Se valida los parámetros de la solicitud.
 * Se llama a la función deleteProduct del controlador de productos para manejar la solicitud.
 */
router.delete("/products/:id", deleteProduct);

/**
 * Ruta para obtener un producto existente.
 * Se valida los parámetros y la consulta de la solicitud.
 * Se llama a la función getProduct del controlador de productos para manejar la solicitud.
 */
router.get("/products/:id", getProduct);

/**
 * Ruta para obtener todos los productos.
 * Se llama a la función getProducts del controlador de productos para manejar la solicitud.
 */
router.get("/products", getProducts);

export default router;
