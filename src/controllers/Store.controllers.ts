import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import { getAmount } from '../services/getAmount';
import { ContextStrategy, DiscountAmountStrategy, DiscountBUlkStrategy, WithOutDiscount } from '../strategies';
export class StoreController {

  async getTotal(req: Request, res: Response): Promise<void> {
    const itemsToPay: IProduct[] = req.body.items;
    const { tshirt, pants, hats } = getAmount(itemsToPay);

    const amountDiscount = new ContextStrategy(new DiscountAmountStrategy()).doSomeBusinessLogic({ amount: pants, discount: 0, price: 5 });
    const bulkDiscount = new ContextStrategy(new DiscountBUlkStrategy()).doSomeBusinessLogic({ amount: tshirt, discount: 1, price: 20 });
    const withOutDiscount = new ContextStrategy(new WithOutDiscount()).doSomeBusinessLogic({ amount: hats, discount: 0, price: 7.5 });
    const finalPrice = amountDiscount + bulkDiscount + withOutDiscount;
    console.log(`pants ${amountDiscount}, tshirt ${bulkDiscount}, hats ${withOutDiscount}`);
    res.json({
      message: 'items to bought',
      data: finalPrice
    });
  }

}