import { Request, Response } from 'express';
import { PrismaClient } from '@internal/prisma-user-client';
const prisma = new PrismaClient();

export const getProfile = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.userId;

        const profile = await prisma.userProfile.findUnique({
            where: { userId },
            include: { skills: true, interests: true }
        });

        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }

        res.json({ user: profile });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching profile' });
    }
};

export const updateProfile = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.userId;
        const data = req.body;

        const profile = await prisma.userProfile.upsert({
            where: { userId },
            update: {
                firstName: data.firstName,
                lastName: data.lastName,
                bio: data.bio,
                currentRole: data.currentRole,
                location: data.location,
                educationLevel: data.education,
                skills: data.skills ? {
                    deleteMany: {},
                    create: data.skills.map((s: string) => ({ skillName: s }))
                } : undefined,
                interests: data.interests ? {
                    deleteMany: {},
                    create: data.interests.map((i: string) => ({ interestName: i }))
                } : undefined
            },
            create: {
                userId,
                email: (req as any).user.email,
                firstName: data.firstName,
                lastName: data.lastName,
                bio: data.bio,
                currentRole: data.currentRole,
                location: data.location,
                educationLevel: data.education,
                skills: {
                    create: data.skills?.map((s: string) => ({ skillName: s })) || []
                },
                interests: {
                    create: data.interests?.map((i: string) => ({ interestName: i })) || []
                }
            }
        });

        res.json({ user: profile });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating profile' });
    }
};
