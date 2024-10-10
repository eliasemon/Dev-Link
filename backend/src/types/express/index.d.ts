// to make the file a module and avoid the Typescript error
import { IUser } from '@db/models/user.model';

export {};
declare global {
  namespace Express {
    export interface Request {
      id: string;
      user?: Omit<IUser, 'password'> | null;
    }
  }
}
