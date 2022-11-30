import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import { getAmount } from '../services/getDiscount';

export class StoreController {

  async getTotal(req: Request, res: Response): Promise<void> {
    const itemsToPay: IProduct[] = req.body.items;
    const amountToPay = getAmount(itemsToPay);
    res.json({
      message: 'items to bought',
      data: amountToPay
    });
  }

}