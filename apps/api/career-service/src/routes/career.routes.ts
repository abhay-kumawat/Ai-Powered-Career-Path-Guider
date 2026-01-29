import { Router } from 'express';
import { getCareers, getCareerById, getRoadmap } from '../controllers/career.controller';
import { authenticateToken } from '../middlewares/auth.middleware';

const router: Router = Router();

router.get('/careers', getCareers);
router.get('/careers/:id', getCareerById);
router.get('/roadmap', authenticateToken, getRoadmap);

export default router;
