import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';
import { hashPassword, comparePassword, generateAccessToken, generateRefreshToken } from '../utils/auth';

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password, firstName, lastName } = req.body;

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const passwordHash = await hashPassword(password);
        const user = await prisma.user.create({
            data: {
                email,
                passwordHash,
                firstName,
                lastName
            }
        });

        const token = generateAccessToken({ userId: user.id, email: user.email, role: 'USER' });

        // Return structure matching Frontend types/auth.ts AuthResponse
        res.status(201).json({
            token,
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: 'USER',
                createdAt: user.createdAt.toISOString(),
                updatedAt: user.updatedAt.toISOString()
            }
        });
    } catch (error) {
        console.error('Register error', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !(await comparePassword(password, user.passwordHash))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = generateAccessToken({ userId: user.id, email: user.email, role: 'USER' });

        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: 'USER',
                createdAt: user.createdAt.toISOString(),
                updatedAt: user.updatedAt.toISOString()
            }
        });
    } catch (error) {
        console.error('Login error', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getMe = async (req: Request, res: Response) => {
    try {
        // In a real middleware, req.user would be populated. 
        // For now, we'll parse header manually or rely on Gateway passing headers if we implemented it there.
        // Assuming Gateway passes X-User-Id
        const userId = req.headers['x-user-id'] as string; // Gateway logic

        // OR fallback to decoding token if Gateway isn't stripping it
        // For simplicity in this step, let's assume we decode token here or just return mock if not setup

        // TODO: Implement proper middleware
        return res.status(501).json({ message: 'Not implemented yet' });
    } catch (error) {
        res.status(500).json({ message: 'Error' });
    }
};
