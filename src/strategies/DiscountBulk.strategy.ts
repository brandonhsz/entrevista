import { IStrategyProps, IStrategy } from '../interfaces';

export class DiscountBUlkStrategy implements IStrategy {

  doStrategy(data: IStrategyProps): number {
    const { amount, price, discount } = data;
    if (amount >= 3) {
      const withOutDiscount = amount * price;
      const withDiscount = withOutDiscount - (discount * amount);
      return withDiscount;
    }

    return amount * price;
  }

}