import { client } from './client';

export interface CareerPath {
    id: string;
    title: string;
    description: string;
    category?: string;
    avgSalary?: number;
    growthRate?: number;
    difficulty?: string;
    // UI/Mock fields
    matchScore?: number;
    salary?: string;
    growth?: string;
    demand?: string;
    requiredSkills?: string[];
}

export interface RoadmapItem {
    id: string;
    title: string;
    description?: string;
    status: 'locked' | 'active' | 'completed' | 'current' | 'upcoming';
    duration?: string;
    order: number;
}

export interface Roadmap {
    id: string;
    title: string;
    items: RoadmapItem[];
    careerPathId?: string;
}

export const careerApi = {
    // Fetch all career paths (catalog)
    getCareers: async () => {
        const response = await client.get<{ data: CareerPath[] }>('/careers/paths');
        return response.data.data;
    },

    // Fetch specific career details
    getCareerById: async (id: string) => {
        const response = await client.get<{ career: CareerPath }>(`/careers/paths/${id}`);
        return response.data.career;
    },

    // Get the user's active roadmap
    getUserRoadmap: async () => {
        const response = await client.get<{ roadmap: Roadmap }>('/careers/roadmap');
        return response.data.roadmap;
    },

    // Create a new roadmap (e.g. from AI result)
    saveRoadmap: async (data: { title: string, description: string, careerPathId?: string, items: any[] }) => {
        const response = await client.post<{ roadmap: Roadmap }>('/careers/roadmap', data);
        return response.data.roadmap;
    },

    // Update a roadmap item's status
    updateRoadmapItem: async (roadmapId: string, itemId: string, status: string) => {
        const response = await client.put<{ item: RoadmapItem }>(`/careers/roadmap/${roadmapId}/items/${itemId}`, { status });
        return response.data.item;
    }
};
