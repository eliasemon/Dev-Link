import { Router } from 'express';
import { createDevLinks } from './controller';

const router = Router();

router.post('/', createDevLinks);

export default router;
