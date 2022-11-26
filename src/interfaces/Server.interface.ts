import e from 'express';
export interface IServer {
  app: e.Application;
  router: e.Router;
  init(): void;
  config(): void;
  middlewares(): void;
}