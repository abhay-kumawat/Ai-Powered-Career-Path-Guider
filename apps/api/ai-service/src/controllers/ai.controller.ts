import { Request, Response } from 'express';
import { AiService } from '../services/ai.service';

const aiService = new AiService();

export const analyzeCareerPath = async (req: Request, res: Response) => {
    try {
        const { answers } = req.body;

        // Use the service to generate the path
        const result = await aiService.generateCareerPath(answers);

        res.json(result);
    } catch (error) {
        console.error('Error in AI analysis:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
