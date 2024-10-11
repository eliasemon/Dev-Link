import DevLinks, { ILink } from '@/db/models/devLinks.model';
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
  const sanifyLinks = links.map((link: ILink) => ({
    platform: link.platform,
    link: link.link,
  }));
  try {
    // Check if the user already has a DevLinks entry
    const existingDevLinks = await DevLinks.findOne({ userId });

    if (existingDevLinks) {
      existingDevLinks.links = sanifyLinks;
      await existingDevLinks.save();
      return res.status(201).json(existingDevLinks);
    }
    const newDevLinks = new DevLinks({
      userId,
      sanifyLinks,
    });
    await newDevLinks.save();
    return res.status(201).json(newDevLinks);

    // Create new DevLinks entry
  } catch (error) {
    if (error instanceof Error || error instanceof CustomError) next(error);
  }
};
