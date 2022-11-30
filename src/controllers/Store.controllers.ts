import { Request, Response } from 'express';
import { IProduct } from '../interfaces';

export class StoreController {

  async getTotal(req: Request, res: Response): Promise<void> {
    const itemsToPay: IProduct[] = req.body.items;
    res.json({
      message: 'items to bought',
      data: itemsToPay
    });
  }

}