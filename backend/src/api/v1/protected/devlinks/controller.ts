import DevLinks from '@/db/models/devLinks.model';
import CustomError from '@/utils/customError';
import { Request, Response, NextFunction } from 'express';

// Controller to create new DevLinks
export const createDevLinks = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { links } = req.body;
  const userId = req.user?._id;

  try {
    // Check if the user already has a DevLinks entry
    const existingDevLinks = await DevLinks.findOne({ userId });

    if (existingDevLinks)
      throw new CustomError('DevLinks for this user already exists', 400);

    // Create new DevLinks entry
    const newDevLinks = new DevLinks({
      userId,
      links,
    });

    await newDevLinks.save();

    return res.status(201).json(newDevLinks);
  } catch (error) {
    if (error instanceof Error || error instanceof CustomError) next(error);
  }
};

export const updateDevLinks = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { links } = req.body;
  const userId = req.user?._id;

  try {
    // Find the DevLinks entry by userId
    const devLinks = await DevLinks.findOne({ userId });

    if (!devLinks)
      throw new CustomError('DevLinks not found for this user', 404);

    // Update the links array
    devLinks.links = links;

    await devLinks.save();

    return res.status(200).json(devLinks);
  } catch (error) {
    if (error instanceof Error || error instanceof CustomError) next(error);
  }
};
