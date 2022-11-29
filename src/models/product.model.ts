import { DataTypes, Model } from 'sequelize';
import { DataBase } from '../config/DataBase';

const sequelize = DataBase.getInstance().sequelize;
export class Product extends Model {
  declare code: string;
  declare name: string;
  declare price: number;
}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  code: {
    type: DataTypes.STRING,
  },

  price: {
    type: DataTypes.FLOAT,
  },

  name: {
    type: DataTypes.STRING,
  }
}, { sequelize, modelName: 'Product' });