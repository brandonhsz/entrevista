import { IStrategy } from '../interfaces';
import { IStrategyProps } from '../interfaces/Strategy.interface';

export class DiscountAmountStrategy implements IStrategy {

  doStrategy(data: IStrategyProps): number {
    const { amount, price } = data;

    if (amount % 2 === 0) {
      console.log(amount * price / 2);
      return (amount * price) / 2;
    }
    console.log((((amount - 1) * price) / 2) + price);
    return (((amount - 1) * price) / 2) + price;
  }

}