import { IStrategy } from '../interfaces';

export class ContextStrategy {
  private strategy: IStrategy;

  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: IStrategy): void {
    this.strategy = strategy;
  }

  public doSomeBusinessLogic(data: number): number {
    const result = this.strategy.doStrategy(data);
    return result;
  }
}