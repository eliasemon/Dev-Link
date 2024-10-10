import { Router } from 'express';
import { findUserById, updateUser } from './controller';

const router = Router();

router.get('/:userId', findUserById);
router.put('/:userId', updateUser);

export default router;
