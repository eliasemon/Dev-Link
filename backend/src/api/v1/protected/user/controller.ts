import { Request, Response, NextFunction } from 'express';
import User from '@db/models/user.model'; // Adjust the import path as necessary
import CustomError from '@/utils/customError';

export const findUserById = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    // Extract userId from route params
    const { userId } = req.params;

    // Find the user by userId
    const user = await User.findById(userId).select('-password');

    if (!user) {
      throw new CustomError('User not found', 404);
    }

    // Return the found user
    res.status(200).json(user);
  } catch (error: unknown) {
    if (error instanceof Error || error instanceof CustomError) next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?._id;
    const { firstName, lastName, gender, profilePic, userEmail } = req.body;

    // Find the user and update only allowed fields
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        userEmail,
        firstName,
        lastName,
        gender,
        profilePic,
      },
      { new: true, runValidators: true }, // Return the updated document and validate schema
    );

    if (!updatedUser) throw new CustomError('User not found', 404);

    res.status(200).json({
      message: 'User updated successfully',
      user: updatedUser,
    });
  } catch (error) {
    if (error instanceof Error || error instanceof CustomError) next(error);
  }
};
