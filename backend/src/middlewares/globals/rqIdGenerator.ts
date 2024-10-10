import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

export const generateRequestId = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  req.id = uuidv4();
  next();
};
