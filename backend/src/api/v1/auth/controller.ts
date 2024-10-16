import bcrypt from 'bcryptjs';
import { Request, Response, NextFunction } from 'express';
import User from '@db/models/user.model';
import { generateToken } from '@/lib/token';
import CustomError from '@/utils/customError';

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const {
      firstName,
      lastName,
      userEmail,
      password,
      confirmPassword,
      gender,
    } = req.body;

    if (password !== confirmPassword)
      throw new CustomError(`Passwords don't match`, 400);

    const user = await User.findOne({ userEmail });

    if (user) throw new CustomError(`User Email already exists`, 400);

    // HASH PASSWORD HERE
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      userEmail,
      password: hashedPassword,
      gender,
      profilePic: `https://avatar.iran.liara.run/public/${gender === 'male' ? 'boy' : 'girl'}?username=${firstName.split(' ')[0]}`,
    });

    if (newUser) {
      // Generate JWT token here
      const token = generateToken(newUser._id.toString());
      await newUser.save();

      res.status(201).json({
        _id: newUser._id.toString(),
        token,
        gender: newUser.gender,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        userEmail: newUser.userEmail,
        profilePic: newUser.profilePic,
      });
    } else {
      throw new CustomError(`Invalid user data`, 400);
    }
  } catch (error: unknown) {
    next(error);
  }
};

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { userEmail, password } = req.body;

    const user = await User.findOne({ userEmail });
    if (!user) {
      throw new CustomError('Invalid user email or password', 400);
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new CustomError('Invalid user email or password', 400);
    }

    const token = generateToken(user._id.toString());

    res.status(200).json({
      _id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      token,
      gender: user.gender,
      userEmail: user.userEmail,
      profilePic: user.profilePic,
    });
  } catch (error: unknown) {
    next(error);
  }
};

export const signOut = (
  _req: Request,
  res: Response,
  next: NextFunction,
): void => {
  try {
    res.cookie('jwt', '', { maxAge: 0 });
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error: unknown) {
    next(error);
  }
};
