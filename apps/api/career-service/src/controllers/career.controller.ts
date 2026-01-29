import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';

// Keep mock roadmap for now as per plan, can be moved to DB later
const MOCK_ROADMAP = [
    {
        id: "1",
        title: "Master React Fundamentals",
        description: "Hooks, Context, and Component patterns",
        status: "completed",
        duration: "2 weeks",
    },
    {
        id: "2",
        title: "Advanced TypeScript",
        description: "Generics, Utility types, and Type inference",
        status: "current",
        duration: "3 weeks",
    },
    {
        id: "3",
        title: "System Design",
        description: "Scalability, Performance and Architecture",
        status: "locked",
        duration: "4 weeks",
    },
];

export const getCareers = async (req: Request, res: Response) => {
    try {
        const careers = await prisma.careerPath.findMany();
        res.json({ careers });
    } catch (error) {
        console.error('Error fetching careers:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getCareerById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Career ID is required" });
        }

        const career = await prisma.careerPath.findUnique({
            where: { id: String(id) }
        });

        if (!career) {
            return res.status(404).json({ message: "Career not found" });
        }

        res.json({ career });
    } catch (error) {
        console.error('Error fetching career:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getRoadmap = async (req: Request, res: Response) => {
    try {
        // ideally fetching based on a specific career or user progress
        // for now, fetching the first available roadmap to replace the mock
        const roadmap = await prisma.roadmap.findFirst({
            include: {
                items: {
                    orderBy: {
                        order: 'asc'
                    }
                }
            }
        });

        if (!roadmap) {
            // Fallback to empty or null if no roadmap exists yet
            return res.json({ roadmap: [] });
        }

        // transforming to match the structure expected by frontend if needed
        // or simply returning the items
        res.json({ roadmap: roadmap.items });
    } catch (error) {
        console.error('Error fetching roadmap:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
