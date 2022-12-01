import { DataTypes, Model } from 'sequelize';
import { DataBase } from '../config/DataBase';
import bcrypt from 'bcrypt';

const sequelize = DataBase.getInstance().sequelize;

export class User extends Model {
  declare id: number;
  declare email: string;
  declare password: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  }
}, { sequelize, modelName: 'User' });

User.addHook('beforeCreate', async (user: User) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
});