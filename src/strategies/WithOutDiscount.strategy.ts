import { IStrategy, IStrategyProps } from '../interfaces';

export class WithOutDiscount implements IStrategy {
  doStrategy(data: IStrategyProps): number {
    const { amount, price } = data;
    return amount * price;
  }
}