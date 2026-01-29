import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/hooks/useAuth';
import { Sparkles, TrendingUp, Clock, Target, Award, Zap, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { careerApi, Career } from '@/api/career';

// Widgets
// Widgets
import { SkillTracker } from '@/components/dashboard/SkillTracker';
import { CalendarWidget } from '@/components/dashboard/CalendarWidget';
import { JobCard } from '@/components/dashboard/JobCard';
import { PromoCard } from '@/components/dashboard/PromoCard';
import { CourseRail } from '@/components/dashboard/CourseRail';

// Mock data for fallback
const MOCK_CAREERS: Career[] = [
    {
        id: '1',
        title: 'Senior Product Designer',
        description: 'Design interactive user experiences...',
        matchScore: 95,
        salary: '$120k - $160k',
        growth: 'High',
        demand: 'Very High'
    },
    {
        id: '2',
        title: 'Frontend Engineer',
        description: 'Build scalable web applications...',
        matchScore: 88,
        salary: '$110k - $150k',
        growth: 'High',
        demand: 'High'
    }
];

export default function Dashboard() {
    const { user } = useAuth();
    const [careers, setCareers] = useState<Career[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const careerData = await careerApi.getCareers();
                setCareers(careerData.length > 0 ? careerData : MOCK_CAREERS);
            } catch (err) {
                console.warn("Failed to load dashboard api data, using fallback", err);
                setCareers(MOCK_CAREERS);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15
            }
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="relative"
                >
                    <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full" />
                    <Sparkles className="absolute inset-0 m-auto h-6 w-6 text-purple-400" />
                </motion.div>
            </div>
        );
    }

    const featuredJob = careers[0];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
                />
            </div>

            <motion.div
                className="relative z-10 p-6 md:p-8 lg:p-10 space-y-8 max-w-[1800px] mx-auto"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {/* Premium Header */}
                <motion.div variants={item} className="relative">
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl shadow-purple-500/10">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        animate={{
                                            rotate: [0, 360],
                                        }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg shadow-purple-500/50"
                                    >
                                        <Sparkles className="h-6 w-6 text-white" />
                                    </motion.div>
                                    <div>
                                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                                            Dashboard
                                        </h1>
                                        <p className="text-purple-300/80 text-lg">
                                            Welcome back, <span className="font-semibold text-white">{user?.firstName || 'User'}</span>! 🚀
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 flex-wrap">
                                <Button variant="outline" className="group border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/10 text-white backdrop-blur-xl">
                                    <BookOpen className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                                    Explore Careers
                                </Button>
                                <Button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-500/50 text-white border-0">
                                    <Sparkles className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                                    AI Assistant
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Quick Stats Row */}
                <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Stat Card 1 */}
                    <div className="group relative backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-purple-500/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="p-3 bg-purple-500/20 rounded-xl group-hover:scale-110 transition-transform">
                                    <TrendingUp className="h-5 w-5 text-purple-400" />
                                </div>
                                <span className="text-xs font-medium text-green-400 flex items-center gap-1">
                                    <TrendingUp className="h-3 w-3" />
                                    +12%
                                </span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white">46</h3>
                                <p className="text-sm text-purple-300/70">Lessons Completed</p>
                            </div>
                        </div>
                    </div>

                    {/* Stat Card 2 */}
                    <div className="group relative backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="p-3 bg-blue-500/20 rounded-xl group-hover:scale-110 transition-transform">
                                    <Clock className="h-5 w-5 text-blue-400" />
                                </div>
                                <span className="text-xs font-medium text-green-400 flex items-center gap-1">
                                    <TrendingUp className="h-3 w-3" />
                                    +8%
                                </span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white">127h</h3>
                                <p className="text-sm text-blue-300/70">Learning Hours</p>
                            </div>
                        </div>
                    </div>

                    {/* Stat Card 3 */}
                    <div className="group relative backdrop-blur-xl bg-gradient-to-br from-pink-500/10 to-pink-600/5 border border-pink-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-pink-500/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="p-3 bg-pink-500/20 rounded-xl group-hover:scale-110 transition-transform">
                                    <Target className="h-5 w-5 text-pink-400" />
                                </div>
                                <span className="text-xs font-medium text-green-400 flex items-center gap-1">
                                    <TrendingUp className="h-3 w-3" />
                                    +25%
                                </span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white">89%</h3>
                                <p className="text-sm text-pink-300/70">Goal Progress</p>
                            </div>
                        </div>
                    </div>

                    {/* Stat Card 4 */}
                    <div className="group relative backdrop-blur-xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-amber-500/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="p-3 bg-amber-500/20 rounded-xl group-hover:scale-110 transition-transform">
                                    <Award className="h-5 w-5 text-amber-400" />
                                </div>
                                <span className="text-xs font-medium text-green-400 flex items-center gap-1">
                                    <Zap className="h-3 w-3" />
                                    New!
                                </span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white">12</h3>
                                <p className="text-sm text-amber-300/70">Certifications</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    {/* Calendar Widget - Large */}
                    <motion.div variants={item} className="lg:col-span-8">
                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-1 shadow-2xl shadow-purple-500/10 h-full">
                            <CalendarWidget />
                        </div>
                    </motion.div>

                    {/* Skill Tracker - Sidebar */}
                    <motion.div variants={item} className="lg:col-span-4">
                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-1 shadow-2xl shadow-blue-500/10 h-full">
                            <SkillTracker />
                        </div>
                    </motion.div>

                    {/* Featured Job Card */}
                    <motion.div variants={item} className="lg:col-span-6">
                        <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-1 shadow-2xl shadow-pink-500/10">
                            {featuredJob && (
                                <JobCard
                                    title={featuredJob.title}
                                    salary={featuredJob.salary.replace(' - ', '-')}
                                    company="Tech Corp"
                                    location="Remote"
                                />
                            )}
                            {!featuredJob && <JobCard />}
                        </div>
                    </motion.div>

                    {/* Promo Card */}
                    <motion.div variants={item} className="lg:col-span-6">
                        <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-1 shadow-2xl shadow-purple-500/10">
                            <PromoCard />
                        </div>
                    </motion.div>
                </div>

                {/* Course Rail */}
                <motion.div variants={item}>
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-1 shadow-2xl shadow-blue-500/10">
                        <CourseRail />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
