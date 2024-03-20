import { z } from "zod";
/**
 * Esquema para validar la creación de un producto.
 */
export const CreateProductSchema = z.object({
  body: z.object({
    name: z.string().nonempty(), // Nombre del producto (cadena no vacía).
    price: z.number().nonnegative(), // Precio del producto (número no negativo).
  }),
});
/**
 * Esquema para validar la actualización de un producto.
 */
export const UpdateProductSchema = z.object({
  body: z.object({
    name: z.string().optional(), // Nombre del producto (opcional).
    price: z.number().nonnegative().optional(), // Precio del producto (opcional).
  }),
  params: z.object({
    id: z.string().min(3), // Identificador del producto (cadena con longitud mínima de 3 caracteres).
  }),
  query: z.object({
    title: z.string(), // Título de la consulta (cadena).
  }),
});
/**
 * Tipo para los datos de creación de un producto.
 */
export type CreateProductType = z.infer<typeof CreateProductSchema>["body"];
/**
 * Tipo para los datos del cuerpo de la actualización de un producto.
 */
export type UpdateProductBodyType = z.infer<typeof UpdateProductSchema>["body"];
/**
 * Tipo para los datos de los parámetros de la actualización de un producto.
 */
export type UpdateProductParamsType = z.infer<
  typeof UpdateProductSchema
>["params"];
/**
 * Tipo para los datos de la consulta de la actualización de un producto.
 */
export type UpdateProductQueryType = z.infer<
  typeof UpdateProductSchema
>["query"];