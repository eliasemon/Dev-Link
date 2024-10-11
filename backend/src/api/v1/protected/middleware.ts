import { Request, Response, NextFunction } from 'express';
import CustomError from '@/utils/customError';
import { verifyToken } from '@/lib/token';

const middleware = async (req: Request, _res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new CustomError('Unauthorized - No Token Provided', 401);
    }

    const token = authHeader.split(' ')[1];

    const user = await verifyToken(token);

    req.user = user;

    next();
  } catch (error: unknown) {
    next(error);
  }
};

export default middleware;
