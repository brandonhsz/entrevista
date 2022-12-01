import e from 'express';
export interface IServer {
  app: e.Application;
  init(): void;
  middlewares(): void;
}