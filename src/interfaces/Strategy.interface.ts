export interface IStrategyProps {
  amount: number,
  price: number,
  discount: number,
}
export interface IStrategy {
  doStrategy(data: IStrategyProps): number;
}

