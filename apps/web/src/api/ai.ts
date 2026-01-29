import { client } from './client';

export interface AnalysisResult {
    analysis: string;
    recommendations: {
        role: string;
        match: number;
        reason: string;
    }[];
}

export const aiApi = {
    submitAssessment: async (answers: any[]): Promise<AnalysisResult> => {
        const response = await client.post<AnalysisResult>('/ai/analyze', { answers });
        return response.data;
    }
};
