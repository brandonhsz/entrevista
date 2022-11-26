import express from 'express';
import { IServer } from '../interfaces/Server.interface';
import morgan from 'morgan';
import { router } from '../routes/Router';

export class Server implements IServer {
  readonly app;
  readonly port;

  constructor(port: number) {
    this.app = express();
    this.port = process.env.PORT || port;
    this.configure();
    this.routes();
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.clear();
      console.log(`Server is running on port ${this.port}`);
    });
  }

  configure(): void {
    if (process.env.NODE_ENV === 'dev') {
      this.app.use(morgan('dev'));
    }
  }

  middleware(): void {
    throw new Error('Method not implemented.');
  }

  routes(): void {
    this.app.use('/', router);
  }
}