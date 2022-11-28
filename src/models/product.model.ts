import { DataTypes, Model } from 'sequelize';
import { DataBase } from '../config/DataBase';

const sequelize = DataBase.getInstance().sequelize

export class Product extends Model {
  code: string;
  name: string;
  price: number;
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
    type: DataTypes.NUMBER,
  }
}, { sequelize })