import { Router } from 'express';
import { findDevLinksByUserId } from './controller';

const router = Router();

router.get('/:userId', findDevLinksByUserId);

export default router;
