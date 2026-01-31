import OpenAI from 'openai';

interface GrokConfig {
    apiKey: string;
    baseURL?: string;
    timeout?: number;
}

interface InsightRequest {
    userId: string;
    skills: Array<{ skillName: string; proficiency: string; yearsExp: number }>;
    interests: Array<{ interestName: string; priority: number }>;
    careerGoals?: string;
}

interface RoadmapRequest {
    userId: string;
    careerPathTitle: string;
    currentSkills: Array<{ skillName: string; proficiency: string }>;
    targetSkills: string[];
    timeframe: string;
}

interface ExplanationRequest {
    userId: string;
    careerPathTitle: string;
    careerDescription: string;
    userSkills: string[];
    userInterests: string[];
    matchScore: number;
}

/**
 * Grok API Client for AI-powered career guidance
 * Uses ApiFreeLLM or compatible provider
 */
export class GrokClient {
    private apiKey: string;
    private baseURL: string;
    private readonly model: string = process.env.GROK_MODEL || 'apifreellm';
    private readonly maxRetries: number = 3;

    constructor(config?: GrokConfig) {
        this.apiKey = config?.apiKey ||
            process.env.GROK_API_KEY ||
            process.env.XAI_API_KEY ||
            'dummy_key';

        this.baseURL = config?.baseURL || process.env.GROK_API_URL || 'https://apifreellm.com/api/v1/chat';
    }

    /**
     * Check if Grok API is properly configured
     */
    isConfigured(): boolean {
        return this.apiKey !== 'dummy_key';
    }

    /**
     * Generate personalized career insights based on user profile
     */
    async generateInsights(request: InsightRequest): Promise<any> {
        if (!this.isConfigured()) {
            return this.getMockInsights(request);
        }

        const prompt = `
You are an expert career counselor. Analyze the user profile and recommend the top 3 best-fit career paths.

User Profile:
- Skills: ${JSON.stringify(request.skills)}
- Interests: ${JSON.stringify(request.interests)}
- Career Goals: ${request.careerGoals || 'Not specified'}

Return a JSON array of "CareerRecommendation" objects. Each object must have:
- "matchScore" (0-100)
- "reasoning" (Why it fits)
- "careerPath": {
    "title" (string),
    "description" (string),
    "category" (string),
    "avgSalary" (number),
    "growthRate" (number),
    "difficulty" ("Beginner"|"Intermediate"|"Advanced"|"Expert"),
    "requiredSkills" (string array)
}

Example format:
[
  {
    "matchScore": 95,
    "reasoning": "...",
    "careerPath": { ... }
  }
]
`;

        try {
            return await this.makeRequest(prompt, 0.7);
        } catch (error) {
            console.error('Failed to generate insights from AI, falling back to mock data:', error);
            return this.getMockInsights(request);
        }
    }

    /**
     * Explain why a career path matches user's profile
     */
    async explainRecommendation(request: ExplanationRequest): Promise<any> {
        if (!this.isConfigured()) {
            return this.getMockExplanation(request);
        }

        const prompt = `
You are an expert career advisor. Explain why the following career path is a good match for this user.

Career Path: ${request.careerPathTitle}
Description: ${request.careerDescription}
Match Score: ${request.matchScore}%

User Profile:
- Skills: ${request.userSkills.join(', ')}
- Interests: ${request.userInterests.join(', ')}

Provide a detailed explanation in JSON format:
{
  "summary": "One-paragraph summary of why this is a good match",
  "strengths": [
    {
      "aspect": "What user strength applies",
      "relevance": "How it relates to this career",
      "impact": "Why it matters"
    }
  ],
  "areasForGrowth": [
    {
      "skill": "Skill to develop",
      "importance": "Why it's needed",
      "timeline": "Estimated time to develop",
      "resources": ["Resource 1", "Resource 2"]
    }
  ],
  "marketOutlook": {
    "demand": "Current market demand",
    "growth": "Growth projections",
    "salary": "Salary range information"
  },
  "nextSteps": ["Step 1", "Step 2", "Step 3"]
}

Be encouraging but realistic. Provide actionable insights.
`;

        try {
            return await this.makeRequest(prompt, 0.6);
        } catch (error) {
            console.error('Failed to explain recommendation from AI, falling back to mock data:', error);
            return this.getMockExplanation(request);
        }
    }

    /**
     * Generate a personalized learning roadmap
     */
    async generatePersonalizedRoadmap(request: RoadmapRequest): Promise<any> {
        if (!this.isConfigured()) {
            return this.getMockRoadmap(request);
        }

        const prompt = `
        You are an expert technical career coach. Create a highly detailed, step-by-step learning roadmap for the target career.

        Target Career: ${request.careerPathTitle}
        Timeframe: ${request.timeframe}
        Current Skills: ${JSON.stringify(request.currentSkills)}
        Target Skills: ${request.targetSkills.join(', ')}

        The user wants a very granular path with visual milestones.
        Return a JSON structure:
        {
          "roadmap": {
            "title": "Mastering ${request.careerPathTitle}",
            "totalDuration": "${request.timeframe}",
            "difficulty": "Beginner" | "Intermediate" | "Advanced",
            "phases": [
              {
                "phase": 1,
                "title": "Phase Title (e.g. Fundamentals)",
                "duration": "X weeks",
                "focus": "Core concepts",
                "description": "Brief overview of this phase",
                "milestones": ["Completed HTML", "Built a website"],
                "topics": [
                  {
                    "name": "Specific Topic",
                    "description": "What to learn exactly",
                    "resources": [
                       { "title": "Best Resource", "type": "Course", "url": "url" }
                    ]
                  }
                ]
              }
            ]
          }
        }
        `;

        try {
            return await this.makeRequest(prompt, 0.5);
        } catch (error) {
            console.error('Failed to generate roadmap from AI, falling back to mock data:', error);
            return this.getMockRoadmap(request);
        }
    }

    /**
     * Chat with AI assistant
     */
    async chat(message: string): Promise<string> {
        if (!this.isConfigured()) {
            return "I am running in mock mode. Please configure the AI API to chat with me.";
        }

        try {
            // Just pass the message directly or wrap it?
            // ApiFreeLLM acts as a completion engine usually. 
            // A simple prompt wrapper enables better chat experience.
            const prompt = `You are a helpful Career Guide Assistant. Answer the user's question concisely.\nUser: ${message}\nAssistant:`;
            return await this.makeRequest(prompt, 0.7, false);
        } catch (error) {
            console.error('Chat error:', error);
            throw error;
        }
    }

    /**
     * Generate career path analysis from survey answers
     */
    async analyzeCareerPath(answers: any): Promise<any> {
        if (!this.isConfigured()) {
            return this.getMockCareerAnalysis(answers);
        }

        const prompt = `
        Analyze the following user profile and survey answers to suggest the best career paths.

        User Profile: ${JSON.stringify(answers)}

        The user has answered detailed questions about their psychology and preferences.
        1. Analyze their "Psychological Profile" based on:
           - Work Style (Team/Solo, Remote/Office)
           - Problem Solving (Logical/Creative)
           - Risk Tolerance (Startup/Corp)
           - Core Motivation (Impact/Money/Tech)
        2. Consider their specific interests (e.g., Web3, Gaming, Bio).

        Return a JSON object with this structure:
        {
          "analysis": "Deep psychological and technical analysis of why these careers fit.",
          "recommendations": [
            {
              "id": "generated-id-1",
              "title": "Specific Job Title (e.g. Blockchain Developer)",
              "description": "A compelling description of the role.",
              "category": "Technology" | "Creative" | "Business" | "Science",
              "avgSalary": 120000,
              "growthRate": 25,
              "difficulty": "Beginner" | "Intermediate" | "Advanced",
              "matchScore": 95,
              "reason": "Detailed reason linking their psychology and interests to this role",
              "requiredSkills": ["Skill 1", "Skill 2"]
            }
          ],
          "marketTrends": {
            "demand": "Current market demand analysis",
            "growth": "Growth projections",
            "emergingRoles": ["Role 1", "Role 2"]
          },
          "developmentPriorities": [
            {
              "skill": "Skill name",
              "priority": "High" | "Medium" | "Low",
              "reason": "Why this skill is important"
            }
          ]
        }
        `;

        try {
            return await this.makeRequest(prompt, 0.7);
        } catch (error) {
            console.error('Failed to analyze career path from AI, falling back to mock data:', error);
            return this.getMockCareerAnalysis(answers);
        }
    }

    /**
     * Make a request to ApiFreeLLM API with retry logic
     */
    private async makeRequest(prompt: string, temperature: number = 0.7, expectJson: boolean = true, retries: number = 0): Promise<any> {
        try {
            // ApiFreeLLM Custom Format
            const response = await fetch(this.baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                    message: prompt,
                    model: this.model
                })
            });

            if (!response.ok) {
                if (response.status === 403) {
                    // Check if it is the "insufficient credits" equivalent, though this is "apifreellm"
                    console.warn('ApiFreeLLM returned 403 Forbidden. Check usage limits.');
                }
                throw new Error(`API returned status ${response.status}: ${await response.text()}`);
            }

            const data = await response.json();

            // ApiFreeLLM response structure: { success: true, response: "...", ... }
            const content = data.response;

            if (!content) {
                throw new Error('Empty response from AI API');
            }

            if (!expectJson) {
                return content;
            }

            return this.safeJsonParse(content);

        } catch (error) {
            console.error(`AI API error (attempt ${retries + 1}):`, error);

            if (retries < this.maxRetries) {
                // Exponential backoff
                const delay = Math.pow(2, retries) * 1000;
                await new Promise(resolve => setTimeout(resolve, delay));
                return this.makeRequest(prompt, temperature, expectJson, retries + 1);
            }

            console.warn('All AI API retries failed, using mock response');
            throw error;
        }
    }

    /**
     * Safely parse JSON from AI response, handling markdown fences
     */
    private safeJsonParse(raw: string): any {
        try {
            const trimmed = raw.trim();

            // Remove markdown code fences
            const withoutFences = trimmed
                .replace(/^```(?:json)?\s*/i, '')
                .replace(/\s*```$/i, '')
                .trim();

            try {
                return JSON.parse(withoutFences);
            } catch {
                // Try to extract JSON object if embedded in text
                const firstBrace = withoutFences.indexOf('{');
                const lastBrace = withoutFences.lastIndexOf('}');

                if (firstBrace >= 0 && lastBrace > firstBrace) {
                    const candidate = withoutFences.slice(firstBrace, lastBrace + 1);
                    return JSON.parse(candidate);
                }

                throw new Error('No valid JSON found in response');
            }
        } catch (error) {
            console.error('JSON parsing failed:', error);
            console.error('Raw response:', raw);
            return { error: 'Failed to parse AI response', raw };
        }
    }

    // Mock responses for when API is not configured or fails

    private getMockInsights(request: InsightRequest) {
        // Return structured CareerRecommendation[] based on frontend type
        return [
            {
                id: 'rec-1',
                matchScore: 92,
                reasoning: 'Your strong technical skills in JavaScript and React make you a perfect fit for Full Stack Development. You have 4/5 required skills.',
                status: 'active',
                createdAt: new Date().toISOString(),
                careerPath: {
                    id: '1',
                    title: 'Full Stack Developer',
                    description: 'Build complete web applications managing both frontend and backend.',
                    category: 'Technology',
                    avgSalary: 110000,
                    growthRate: 15,
                    difficulty: 'Intermediate',
                    requiredSkills: ['JavaScript', 'React', 'Node.js', 'SQL'],
                    matchScore: 92,
                    salary: '$90k - $130k',
                    growth: 'High',
                    demand: 'Very High'
                }
            },
            {
                id: 'rec-2',
                matchScore: 85,
                reasoning: 'Your analytical mindset aligns well with Data Science, though you may need to pick up some Python and Machine Learning skills.',
                status: 'active',
                createdAt: new Date().toISOString(),
                careerPath: {
                    id: '2',
                    title: 'Data Scientist',
                    description: 'Analyze complex data sets to help businesses make better decisions.',
                    category: 'Technology',
                    avgSalary: 125000,
                    growthRate: 22,
                    difficulty: 'Advanced',
                    requiredSkills: ['Python', 'Machine Learning', 'Statistics', 'SQL'],
                    matchScore: 85,
                    salary: '$110k - $160k',
                    growth: 'Very High',
                    demand: 'High'
                }
            }
        ];
    }

    private getMockExplanation(request: ExplanationRequest) {
        return {
            summary: `${request.careerPathTitle} is an excellent match (${request.matchScore}% compatibility) based on your skills and interests. Your background aligns well with the core requirements of this role.`,
            strengths: [
                {
                    aspect: 'Technical Skills',
                    relevance: 'Your skills directly match the key requirements for this role',
                    impact: 'This gives you a competitive advantage and faster onboarding'
                },
                {
                    aspect: 'Interest Alignment',
                    relevance: 'Your interests align with the day-to-day work in this career',
                    impact: 'Higher job satisfaction and motivation for continuous learning'
                }
            ],
            areasForGrowth: [
                {
                    skill: 'Advanced System Design',
                    importance: 'Critical for senior-level positions',
                    timeline: '6-12 months',
                    resources: ['System Design Interview Course', 'Design large-scale systems on paper']
                }
            ],
            marketOutlook: {
                demand: 'Very High - consistent growth across industries',
                growth: '15% projected growth over next 5 years',
                salary: '$80,000 - $150,000 depending on experience and location'
            },
            nextSteps: [
                'Review and update your resume to highlight relevant skills',
                'Build 2-3 portfolio projects in this domain',
                'Connect with professionals in this field on LinkedIn',
                'Start applying to entry-level or junior positions'
            ]
        };
    }

    private getMockRoadmap(request: RoadmapRequest) {
        return {
            roadmap: {
                title: `Personalized Learning Path for ${request.careerPathTitle}`,
                totalDuration: request.timeframe,
                difficulty: 'Intermediate',
                phases: [
                    {
                        phase: 1,
                        title: 'Foundation Building',
                        duration: '2 months',
                        focus: 'Core fundamentals and essential skills',
                        objectives: [
                            'Master the basics of required technologies',
                            'Build first working project',
                            'Establish learning routine'
                        ],
                        topics: [
                            {
                                name: 'Web Development Fundamentals',
                                description: 'HTML, CSS, JavaScript basics',
                                estimatedHours: 60,
                                resources: [
                                    {
                                        type: 'course',
                                        title: 'The Complete Web Developer Bootcamp',
                                        provider: 'Udemy',
                                        url: 'https://www.udemy.com',
                                        cost: 'Paid'
                                    }
                                ]
                            }
                        ],
                        milestones: [
                            'Complete first course',
                            'Build a personal portfolio website'
                        ],
                        practiceProjects: [
                            'Personal Portfolio',
                            'Simple To-Do App'
                        ]
                    }
                ],
                weeklyCommitment: '10-15 hours per week',
                certifications: ['AWS Certified Developer', 'Google Professional Certificate'],
                communityResources: ['Stack Overflow', 'Dev.to', 'Reddit r/webdev']
            }
        };
    }

    private getMockCareerAnalysis(answers: any) {
        return {
            analysis: 'Based on your profile, you show strong aptitude for technology and problem-solving. Your interests align well with careers in software development and data analysis.',
            recommendations: [
                {
                    id: 'mock-1',
                    title: 'Full-Stack Developer',
                    description: 'Build complete web applications managing both frontend and backend.',
                    category: 'Technology',
                    avgSalary: 100000,
                    growthRate: 15,
                    difficulty: 'Intermediate',
                    matchScore: 92,
                    reason: 'Your technical skills and interest in building complete solutions make this an excellent fit',
                    requiredSkills: ['JavaScript', 'React', 'Node.js', 'SQL']
                },
                {
                    id: 'mock-2',
                    title: 'Data Analyst',
                    description: 'Analyze complex data sets to help businesses make better decisions.',
                    category: 'Data Science',
                    avgSalary: 85000,
                    growthRate: 20,
                    difficulty: 'Beginner',
                    matchScore: 85,
                    reason: 'Your analytical thinking and interest in insights align well with this role',
                    requiredSkills: ['Python', 'SQL', 'Excel', 'Tableau']
                }
            ],
            marketTrends: {
                demand: 'Very high demand for software professionals, with shortage of qualified candidates',
                growth: '22% projected growth for software developers through 2030',
                emergingRoles: ['AI/ML Engineer', 'Cloud Architect', 'DevOps Engineer']
            },
            developmentPriorities: [
                {
                    skill: 'Cloud Technologies',
                    priority: 'High',
                    reason: 'Essential for modern software development and highly valued by employers'
                },
                {
                    skill: 'System Design',
                    priority: 'Medium',
                    reason: 'Important for senior roles and technical interviews'
                }
            ]
        };
    }
}

export default GrokClient;
