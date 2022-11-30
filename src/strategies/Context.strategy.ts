import { IStrategy, IStrategyProps } from '../interfaces';

export class ContextStrategy {
  private strategy: IStrategy;

  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: IStrategy): void {
    this.strategy = strategy;
  }

  public doSomeBusinessLogic(data: IStrategyProps): number {
    const result = this.strategy.doStrategy(data);
    return result;
  }
}