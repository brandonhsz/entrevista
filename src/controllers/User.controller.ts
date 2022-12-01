import { Request, Response } from 'express';
import { User } from '../models/user.model';
import { comparePassword } from '../services/comparePassword';
import { createToken } from '../services/createToken';

export class UserController {

  async signUp(req: Request, res: Response): Promise<void> {

    const { email, password } = req.body;

    if (!email && !password) {
      res.status(400).json({ msg: 'Please enter all fields' });
    }

    await User.findOne({ where: { email } }).then(user => {
      if (user) res.status(400).json({ msg: 'User already' });
    });

    const newUser = await User.build({ email, password }).save();

    res.json({
      newUser
    });

  }

  async signIn(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    if (!email && !password) {
      res.status(400).json({ msg: 'Please enter all fields' });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(400).json({ msg: 'User does not exist' });
    }

    const isMatch = comparePassword(password, user.password);

    if (!isMatch) {
      res.status(400).json({ msg: 'Invalid credentials' });
    }

    res.json({ token: createToken(user) });
  }

}