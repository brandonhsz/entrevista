import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import { User } from '../models/user.model';
import dotenv from 'dotenv';
dotenv.config();

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY,

};

export const passportStrategy = new Strategy(options, (payload, done) => {
  try {
    const user = User.findOne({ where: { id: payload.id } });

    if (user) {
      return done(null, user);
    }
  } catch (e) {
    return done(null, false);
  }

});