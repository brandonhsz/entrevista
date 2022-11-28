import { Sequelize } from "sequelize";
export class DataBase {
  private static instance: DataBase;
  public sequelize: Sequelize

  private constructor() {
    this.sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_NAME, process.env.DATABASE_PASS, {
      "host": "localhost",
      "dialect": "postgres"
    })

    this.tryConnection();
  }

  public static getInstance(): DataBase {
    if (!DataBase.instance) {
      DataBase.instance = new DataBase()
    }
    return DataBase.instance
  }

  private async tryConnection(): Promise<void> {
    try {
      await this.sequelize.authenticate();
      console.log('Connection succesfully')
    } catch (e) {
      console.error('Unable to connect to the DataBase')
    }
  }

}