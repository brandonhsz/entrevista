import { Request, Response } from 'express';
export class ProductController {

  getProducts(req: Request, res: Response): void {
    res.json({
      'message': 'OK'
    });
  }
}