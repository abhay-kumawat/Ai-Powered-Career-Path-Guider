import OpenAI from 'openai';

export class AiService {
    private openai: OpenAI;

    constructor() {
        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY || 'dummy_key',
        });
    }

    async generateCareerPath(answers: any) {
        if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'dummy_key') {
            const mock = this.getMockAnalysis(answers);
            // Simulate delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            return mock;
        }

        try {
            const prompt = this.buildPrompt(answers);
            const completion = await this.openai.chat.completions.create({
                messages: [{ role: "user", content: prompt }],
                model: "gpt-3.5-turbo",
            });

            const content = completion.choices[0]?.message?.content;
            return JSON.parse(content || '{}');
        } catch (error) {
            console.error("OpenAI API call failed, falling back to mock:", error);
            return this.getMockAnalysis(answers);
        }
    }

    private buildPrompt(answers: any): string {
        return `
            Analyze the following user profile and survey answers to suggest career paths.
            User Profile: ${JSON.stringify(answers)}
            
            Return a JSON object with the following structure:
            {
                "analysis": "string",
                "recommendations": [
                    { "role": "string", "match": number, "reason": "string" }
                ],
                "marketTrends": { "demand": "string", "growth": "string" }
            }
        `;
    }

    private getMockAnalysis(answers: any) {
        return {
            analysis: "Based on your strong problem-solving skills and interest in technology (Mock Analysis)...",
            recommendations: [
                {
                    role: "Frontend Engineer",
                    match: 95,
                    reason: "Matches your visual creativity and logic skills."
                },
                {
                    role: "Backend Engineer",
                    match: 85,
                    reason: "Good fit for your logical reasoning abilities."
                }
            ],
            marketTrends: {
                demand: "High",
                growth: "15% annually"
            }
        };
    }
}
