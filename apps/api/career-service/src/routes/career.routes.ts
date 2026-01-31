import { Router } from 'express';
import { getCareers, getCareerById, getUserRoadmap, createRoadmap, updateRoadmapItem } from '../controllers/career.controller';
import { authenticateToken } from '../middlewares/auth.middleware';

const router: Router = Router();

router.get('/careers', getCareers); // Legacy?
router.get('/paths', getCareers); // New endpoint for list with filters
router.get('/paths/:id', getCareerById);
router.get('/roadmap', authenticateToken, getUserRoadmap); // Now fetches specific user roadmap
router.post('/roadmap', authenticateToken, createRoadmap);
router.put('/roadmap/:id/items/:itemId', authenticateToken, updateRoadmapItem);

export default router;
