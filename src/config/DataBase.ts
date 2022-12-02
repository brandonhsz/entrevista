import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
export class DataBase {
  private static instance: DataBase;
  public sequelize: Sequelize;

  private constructor() {
    this.sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_NAME, process.env.DATABASE_PASS, {
      'host': process.env.HOST,
      'dialect': 'postgres'
    });
    this.tryConnection();
  }

  public static getInstance(): DataBase {
    if (!DataBase.instance) {
      DataBase.instance = new DataBase();
    }
    return DataBase.instance;
  }

  private async tryConnection(): Promise<void> {
    try {
      await this.sequelize.authenticate();
      console.log('Connection succesfully');
    } catch (e) {
      console.error('Unable to connect to the DataBase', e);
    }
  }

  // public async synchronize(): Promise<void> {
  //   try {
  //     // check if founds like this or need to select the specific model file
  //     require('../models');

  //     await this.sequelize.sync({ alter: true });
  //     console.log('DataBase synchronized');
  //   } catch (e) {
  //     console.log('Error database sync', e);
  //   }
  // }

}