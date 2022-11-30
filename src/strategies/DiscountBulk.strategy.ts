import { IStrategyProps, IStrategy } from '../interfaces';

export class DiscountBUlkStrategy implements IStrategy {

  doStrategy(data: IStrategyProps): number {
    const { amount, price, discount } = data;
    const withOutDiscount = amount * price;
    const withDiscount = withOutDiscount - (discount * amount);
    return withDiscount;
  }

}