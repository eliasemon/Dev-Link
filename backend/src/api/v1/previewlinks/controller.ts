import DevLinks from '@/db/models/devLinks.model';
import User from '@/db/models/user.model';
import CustomError from '@/utils/customError';
import { Request, Response, NextFunction } from 'express';

// Controller to create new DevLinks

export const findDevLinksByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userId } = req.params; // Assuming userId is passed as a query parameter

  if (!userId) {
    return next(new CustomError('UserId parameter is required', 400));
  }

  try {
    // Find the DevLinks entry by userId
    const devLinks = await DevLinks.findOne({ userId });

    if (!devLinks) {
      throw new CustomError('DevLinks not found for the given userId', 404);
    }

    // Fetch the associated user details, excluding the password
    const user = await User.findById(userId).select('-password');

    if (!user) {
      throw new CustomError('User not found for the given userId', 404);
    }

    // Respond with the found DevLinks and user details
    return res.status(200).json({
      links: devLinks,
      user,
    });
  } catch (error) {
    if (error instanceof Error || error instanceof CustomError) {
      return next(error);
    }
    // Handle other types of errors as needed
    return next(new CustomError('Internal Server Error', 500));
  }
};
