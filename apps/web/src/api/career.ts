import { client } from './client';

export interface Career {
    id: string;
    title: string;
    description: string;
    matchScore: number;
    salary: string;
    growth: string;
    demand: string;
    skills?: string[];
    resources?: {
        title: string;
        type: string;
        duration: string;
    }[];
}

export interface RoadmapStep {
    id: string;
    title: string;
    description: string;
    status: 'completed' | 'current' | 'locked';
    duration: string;
}

export const careerApi = {
    getCareers: async (): Promise<Career[]> => {
        const response = await client.get<{ careers: Career[] }>('/careers/careers');
        return response.data.careers;
    },

    getCareerById: async (id: string): Promise<Career> => {
        const response = await client.get<Career>(`/careers/careers/${id}`);
        return response.data;
    },

    getRoadmap: async (): Promise<RoadmapStep[]> => {
        const response = await client.get<{ roadmap: RoadmapStep[] }>('/careers/roadmap');
        return response.data.roadmap;
    }
};
