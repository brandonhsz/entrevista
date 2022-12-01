import { ContextStrategy, DiscountAmountStrategy, DiscountBUlkStrategy, WithOutDiscount } from '../../src/strategies';

interface IProps {
  amount: number;
  discount: number;
  price: number;
}

export const discountAmount = (amountD: IProps, bulkD: IProps, withOutD: IProps): number => {

  const amountDiscount = new ContextStrategy(new DiscountAmountStrategy()).doSomeBusinessLogic({ amount: amountD.amount, discount: amountD.discount, price: amountD.price });
  const bulkDiscount = new ContextStrategy(new DiscountBUlkStrategy()).doSomeBusinessLogic({ amount: bulkD.amount, discount: bulkD.discount, price: bulkD.price });
  const withOutDiscount = new ContextStrategy(new WithOutDiscount()).doSomeBusinessLogic({ amount: withOutD.amount, discount: withOutD.discount, price: withOutD.price });
  const finalPrice = amountDiscount + bulkDiscount + withOutDiscount;
  return finalPrice;
};