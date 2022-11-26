import { Request, Response } from 'express';
export class ProductController {

  static getProducts(req: Request, res: Response): void {
    res.json({
      'message': 'OK'
    });
  }

}