import { Request, Response } from 'express';
import { Product } from '../models';
export class ProductController {

  async getProducts(req: Request, res: Response): Promise<void> {
    const products = await Product.findAll();

    res.json({
      message: 'All products',
      data: products
    });
  }

  async createProduct(req: Request, res: Response): Promise<void> {

    const { code, name, price } = req.body;

    const newProduct = Product.build({
      code,
      name,
      price
    });

    const savedProduct = await newProduct.save();
    console.log(savedProduct);
    res.json({
      message: 'Produvt created',
      data: savedProduct
    });
  }
}