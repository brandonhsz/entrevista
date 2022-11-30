import { IStrategy } from '../interfaces';

export class DiscountBUlkStrategy implements IStrategy {

  doStrategy(data: number): number {
    console.log(data);
    return data;
  }

}