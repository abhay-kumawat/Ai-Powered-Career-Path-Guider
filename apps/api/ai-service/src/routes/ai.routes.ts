import { Router } from 'express';
import { analyzeCareerPath } from '../controllers/ai.controller';
import { authenticateToken } from '../middlewares/auth.middleware';

const router: Router = Router();

router.post('/analyze', authenticateToken, analyzeCareerPath);

export default router;
