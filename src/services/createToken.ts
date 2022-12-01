import { User } from '../models/user.model';
import jwt from 'jsonwebtoken';

export const createToken = (user: User): string => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 3600 });
};