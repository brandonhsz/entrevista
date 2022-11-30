import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import { getAmount } from '../services/getDiscount';
import { ContextStrategy } from '../strategies/Context.strategy';
import { DiscountAmountStrategy } from '../strategies/DiscountAmount.strategy';

export class StoreController {

  async getTotal(req: Request, res: Response): Promise<void> {
    const itemsToPay: IProduct[] = req.body.items;
    const { tshirt, hats, pants } = getAmount(itemsToPay);

    const amountDiscount = new ContextStrategy(new DiscountAmountStrategy()).doSomeBusinessLogic(tshirt);
    console.log(`discount ${amountDiscount}`);
    res.json({
      message: 'items to bought',
      data: amountDiscount
    });
  }

}