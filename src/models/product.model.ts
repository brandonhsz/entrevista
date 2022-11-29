import { DataTypes, Model } from 'sequelize';
import { DataBase } from '../config/DataBase';

const sequelize = DataBase.getInstance().sequelize;
export class Product extends Model {
  readonly code: string;
  readonly name: string;
  readonly price: number;
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
  }
}, { sequelize });