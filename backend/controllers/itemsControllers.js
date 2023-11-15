const Product = require('../models/itemsModel');
const asyncHandler = require('express-async-handler');

// Obtener todos los productos
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

// Crear un nuevo producto
const createProduct = asyncHandler(async (req, res) => {
  const { name, price, description, category } = req.body;
  if (!name || !price || !description || !category) {
    res.status(400);
    throw new Error('Por favor completa los campos obligatorios');
  }

  const product = await Product.create({ name, price, description, category });
  res.status(201).json(product);
});

// Obtener un producto por su ID
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error('Producto no encontrado');
  }
  res.status(200).json(product);
});

// Actualizar un producto por su ID
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, category } = req.body;
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error('Producto no encontrado');
  }

  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { name, price, description, category }, { new: true });
  res.status(200).json(updatedProduct);
});

// Eliminar un producto por su ID
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error('Producto no encontrado');
  }
  await product.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
};