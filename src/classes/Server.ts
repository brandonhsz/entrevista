import express from 'express';
import morgan from 'morgan';
import { IServer } from '../interfaces';
import { router } from '../routes/Routes';
import dotenv from 'dotenv';

export class Server implements IServer {
  app: express.Application;
  router;

  constructor() {
    dotenv.config();
    this.app = express();
    this.config();
  }

  init(port?: number): void {
    console.clear();
    this.app.listen(process.env.PORT || port, () => console.log('Server is running'));
  }

  config(): void {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use('/', router);
  }

  middlewares(): void {
    console.log('');
  }
}