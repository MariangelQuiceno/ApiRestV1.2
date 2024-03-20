import { Request, Response } from "express";

// Definir array de productos con datos quemados
const products = [
  { id: 1, name: "Producto 1", price: 10.99 },
  { id: 2, name: "Producto 2", price: 20.99 },
  { id: 3, name: "Producto 3", price: 30.99 }
];

export const createProduct = (
  req: Request<unknown, unknown, { name: string; price: number }>,
  res: Response
) => {
  const { name, price } = req.body;
  res.send("Consulta: CREATE 'product'");
};

export const updateProduct = (
  req: Request<
    { id: string },
    unknown,
    { name: string; price: number },
    { title: string }
  >,
  res: Response
) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const { title } = req.query;

  console.log(id, name, price, title);
  res.send("Consulta: UPDATE 'product'");
};

export const deleteProduct = (
  req: Request<{ id: string }, unknown, unknown>,
  res: Response
) => {
  const { id } = req.params;

  console.log(id);
  res.send("Consulta: DELETE 'product'");
};

// Nueva función para obtener todos los productos
export const getProducts = (
  req: Request<unknown, unknown, unknown, unknown>,
  res: Response
) => {
  res.json(products);
};

export const getProduct = (
  req: Request<{ id: string }, unknown, unknown, { title: string }>,
  res: Response
) => {
  const { id } = req.params;
  const { title } = req.query;

  console.log(id, title);
  res.send("Consulta: GET 'product'");
};
