import express from 'express';
import morgan from 'morgan';
import passport from 'passport';
import { passportStrategy } from '../middlewares';
import { IServer } from '../interfaces';
import { IndexRouter } from '../routes/Routes';
import dotenv from 'dotenv';
import { DataBase } from './DataBase';
export class Server implements IServer {
  app: express.Application;
  dataBase: DataBase;
  constructor() {
    dotenv.config();
    this.app = express();
    this.middlewares();
    this.dataBase = DataBase.getInstance();
    this.dataBase.synchronize();
  }

  init(port?: number): void {
    console.clear();
    this.app.listen(process.env.PORT || port, () => console.log('Server is running'));
  }

  middlewares(): void {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use('/', new IndexRouter().router);
    this.app.use(passport.initialize());
    passport.use(passportStrategy);
  }

}