import { IStrategy } from '../interfaces';

export class DiscountAmountStrategy implements IStrategy {

  doStrategy(data: number): number {
    console.log(data);
    return data;
  }

}