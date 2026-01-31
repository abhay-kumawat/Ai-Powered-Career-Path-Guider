import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Search, Sparkles, ArrowRight, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { WavyRoadmap } from '@/components/features/WavyRoadmap';
import { CareerDiscoveryWizard } from '@/components/features/CareerDiscoveryWizard';
import { careerApi } from '@/api/career';
import { useEffect } from 'react';

// Mock data generator for demo purposes
const generateRoadmap = (role: string) => {
    const lowerRole = role.toLowerCase();
    if (lowerRole.includes('game') || lowerRole.includes('sport') || lowerRole.includes('stream') || lowerRole.includes('bgmi') || lowerRole.includes('ff')) {
        return [
            {
                id: '1',
                title: 'Game Selection & Mechanics',
                description: 'Download FF/BGMI, master mechanics, and choose your primary role.',
                status: 'completed',
                duration: '1 Month'
            },
            {
                id: '2',
                title: 'Squad Formation',
                description: 'Build a reliable team (Squad) and practice coordination.',
                status: 'current',
                duration: '2-3 Months'
            },
            {
                id: '3',
                title: 'Content & Competition',
                description: 'Join Esports tournaments and start streaming on YouTube.',
                status: 'upcoming',
                duration: '6 Months'
            },
            {
                id: '4',
                title: 'Personal Branding',
                description: 'Launch your name across platforms and grow your audience.',
                status: 'locked',
                duration: 'Ongoing'
            },
            {
                id: '5',
                title: 'Industry Icon',
                description: 'Build your own legacy, brand, or even your own game.',
                status: 'locked',
                duration: 'Long-term'
            }
        ];
    }

    return [
        {
            id: '1',
            title: 'Fundamentals',
            description: `Master the core concepts of ${role}.`,
            status: 'completed',
            duration: '1-2 Months'
        },
        {
            id: '2',
            title: 'Advanced Skills',
            description: 'Deep dive into specialized frameworks and tools.',
            status: 'current',
            duration: '2-4 Months'
        },
        {
            id: '3',
            title: 'Real-world Projects',
            description: 'Build portfolio-worthy applications.',
            status: 'upcoming',
            duration: '2 Months'
        },
        {
            id: '4',
            title: 'Professional Growth',
            description: 'Networking, Resume building and Interview prep.',
            status: 'locked',
            duration: 'Ongoing'
        }
    ];
};

export default function CareerList() {
    const [searchQuery, setSearchQuery] = useState('');
    const [generatedPath, setGeneratedPath] = useState<any[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [isWizardOpen, setIsWizardOpen] = useState(false);
    const [currentRoadmapId, setCurrentRoadmapId] = useState<string | null>(null);

    useEffect(() => {
        const loadRoadmap = async () => {
            try {
                const roadmap = await careerApi.getUserRoadmap();
                if (roadmap && roadmap.items.length > 0) {
                    setGeneratedPath(roadmap.items);
                    setSearchQuery(roadmap.title);
                    setCurrentRoadmapId(roadmap.id);
                }
            } catch (error) {
                console.log("No existing roadmap or error fetching");
            }
        };
        loadRoadmap();
    }, []);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        // setIsWizardOpen(true); // removed to allow quick search without wizard modal
        // Note: Quick search via tiles also triggers this if we don't change logic, but for now tiles set query then call this.
        // Actually, tiles call logic is: setSearchQuery(role); handleSearch(...);
        // Wait, if setIsWizardOpen(true) is here, it opens wizard for EVERYTHING?
        // The previous code had `setIsWizardOpen(true)` then some logic.
        // If user wants search to just SHOW results (like tiles), we shouldn't open wizard?
        // Let's check user intent. "include multiple career paths" -> tiles.
        // Tiles click should PROBABLY just show roadmap, not open wizard.
        // I will assume if it comes from search bar, maybe wizard?
        // But the previous code opened wizard immediately.
        // Let's stick to: If logic falls through to "Simulate AI", we generate & SAVE.

        // Refactored logic:
        setLoading(true);
        localStorage.setItem('currentCareerGoal', searchQuery);

        // Simulate AI delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        const mockPath = generateRoadmap(searchQuery);
        setGeneratedPath(mockPath);

        try {
            // Save to DB immediately
            const savedRoadmap = await careerApi.saveRoadmap({
                title: searchQuery,
                description: `AI Generated Roadmap for ${searchQuery}`,
                items: mockPath.map((step: any, index: number) => ({
                    title: step.title,
                    description: step.description,
                    status: step.status,
                    duration: step.duration,
                    order: index
                }))
            });

            if (savedRoadmap) {
                setCurrentRoadmapId(savedRoadmap.id);
            }
            // Dispatch update for sidebar
            window.dispatchEvent(new Event('career-goal-update'));

        } catch (error) {
            console.error("Failed to save auto-generated roadmap", error);
        } finally {
            setLoading(false);
            setIsWizardOpen(false); // Ensure wizard is closed if it was opened
        }
    };

    const handleWizardComplete = async (data: any) => {
        // Data contains { career, roadmap }
        if (data && data.career && data.roadmap) {
            const { career, roadmap } = data;
            const role = career.title || career.role;

            setSearchQuery(role);
            localStorage.setItem('currentCareerGoal', role);
            window.dispatchEvent(new Event('career-goal-update'));

            setGeneratedPath(roadmap); // Update UI immediately with the generated map
            setIsWizardOpen(false);

            setLoading(true);
            try {
                // Save the AI-generated roadmap to the backend
                const savedRoadmap = await careerApi.saveRoadmap({
                    title: role,
                    description: career.description || `Professional roadmap for ${role}`,
                    careerPathId: career.id, // If available from backend
                    items: roadmap.map((step: any, index: number) => ({
                        title: step.title,
                        description: step.description,
                        status: step.status,
                        duration: step.duration,
                        order: index
                    }))
                });
                if (savedRoadmap) setCurrentRoadmapId(savedRoadmap.id);

            } catch (error) {
                console.error("Failed to save roadmap", error);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleStepClick = async (step: any) => {
        // Find the full roadmap object or at least the roadmap ID
        // Currently generatingPath is just the items array.
        // We probably need to store the full roadmap object or at least ID.
        // Let's assume we can fetch it or we stored it.
        // Re-fetching user roadmap on load sets generatedPath = roadmap.items.
        // We need roadmap.id.
        // Let's optimize state to store full roadmap.

        let newStatus = 'completed';
        if (step.status === 'completed') newStatus = 'current';
        else if (step.status === 'current') newStatus = 'completed';
        else newStatus = 'current'; // Activate locked/upcoming

        // Optimistic update
        const updatedPath = generatedPath?.map(s =>
            s.id === step.id ? { ...s, status: newStatus } : s
        );
        setGeneratedPath(updatedPath || null);

        try {
            // We need roadmap ID. Let's fetch it from state if we had it.
            // Temporary workaround: Fetch it again or assume we have it.
            // For now, let's just try to update if we have an item ID that looks real (UUID vs "1", "2")
            // If it's a mock ID, we can't save to DB.

            // Actually, let's fetch the roadmap ID properly.
            // I'll update the state to store roadmapId.
            // For now, let's just log it if we can't find ID.

            if (currentRoadmapId && step.id && step.id.length > 5) {
                await careerApi.updateRoadmapItem(currentRoadmapId, step.id, newStatus);
            }
        } catch (error) {
            console.error("Failed to update step status", error);
            // Revert on error
            setGeneratedPath(generatedPath);
        }
    };

    return (
        <div className="space-y-8 max-w-7xl mx-auto pb-20 pt-4">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative rounded-3xl overflow-hidden glass-strong p-10 text-center"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-600/10" />
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
                        Design Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Destiny</span>
                    </h1>
                    <p className="text-xl text-purple-200 max-w-2xl mx-auto mb-8">
                        Enter your dream role and let our AI architect your personalized roadmap to success.
                    </p>

                    {/* Search Box */}
                    <form
                        onSubmit={handleSearch}
                        className="max-w-xl mx-auto relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                        <div className="relative flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
                            <Search className="ml-4 text-purple-300" />
                            <input
                                type="text"
                                placeholder="E.g. Full Stack Developer, Data Scientist..."
                                className="flex-1 bg-transparent border-none px-4 py-3 text-lg text-white placeholder-purple-300/50 focus:ring-0 focus:outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Button
                                type="submit"
                                disabled={loading}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/30 rounded-xl px-6 py-6 font-bold"
                            >
                                {loading ? (
                                    <span className="animate-spin text-xl">✨</span>
                                ) : (
                                    <ArrowRight />
                                )}
                            </Button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <button
                            onClick={() => setIsWizardOpen(true)}
                            className="text-sm text-purple-300 hover:text-white flex items-center gap-2 mx-auto transition-colors"
                        >
                            <Sparkles className="w-4 h-4 text-pink-400" />
                            Not sure? Let AI guide you
                        </button>
                    </div>

                    {!generatedPath && (
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                            {['AI Engineer', 'Full Stack Developer', 'Data Scientist', 'Product Manager', 'UX Designer', 'Blockchain Dev'].map((role) => (
                                <div key={role} onClick={() => { setSearchQuery(role); handleSearch({ preventDefault: () => { } } as any); }} className="glass-light p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 hover:bg-white/5 transition-all cursor-pointer group">
                                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Compass className="w-5 h-5 text-purple-300" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{role}</h3>
                                    <p className="text-sm text-purple-300/60">Generate a personalized roadmap for {role}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </motion.div>

            {/* Results Section */}
            {generatedPath && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="space-y-6"
                >
                    <div className="flex items-center gap-3 mb-6 px-4">
                        <div className="h-8 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                        <div>
                            <h2 className="text-2xl font-bold text-white">Roadmap for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{searchQuery}</span></h2>
                            <p className="text-purple-300 text-sm">Your step-by-step journey</p>
                        </div>
                    </div>

                    <div className="glass rounded-3xl p-8 border border-white/10">
                        <WavyRoadmap steps={generatedPath as any} onStepClick={handleStepClick} />
                    </div>
                </motion.div>
            )}

            <CareerDiscoveryWizard
                isOpen={isWizardOpen}
                onClose={() => setIsWizardOpen(false)}
                onComplete={handleWizardComplete}
            />
        </div>
    );
}
