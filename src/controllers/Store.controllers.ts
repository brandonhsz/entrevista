import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import { getAmount } from '../services/getDiscount';
import { ContextStrategy } from '../strategies/Context.strategy';
import { DiscountBUlkStrategy } from '../strategies/DiscountBulk.strategy';
import { DiscountAmountStrategy } from '../strategies/DiscountAmount.strategy';

export class StoreController {

  async getTotal(req: Request, res: Response): Promise<void> {
    const itemsToPay: IProduct[] = req.body.items;
    const { tshirt, pants } = getAmount(itemsToPay);

    const amountDiscount = new ContextStrategy(new DiscountAmountStrategy()).doSomeBusinessLogic({ amount: pants, discount: 0, price: 5 });
    const bulkDiscount = new ContextStrategy(new DiscountBUlkStrategy()).doSomeBusinessLogic({ amount: tshirt, discount: 1, price: 20 });
    res.json({
      message: 'items to bought',
      data: [amountDiscount, bulkDiscount]
    });
  }

}