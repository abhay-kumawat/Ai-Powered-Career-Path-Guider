import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Code, Database, Globe, Layers, Server, Cpu, Brain, PenTool, BarChart } from 'lucide-react';
import { useEffect, useState } from 'react';

// Helper to generate skills based on role (Mock AI)
const generateSkillsForRole = (role: string) => {
    const normalizeRole = role.toLowerCase();

    if (normalizeRole.includes('data') || normalizeRole.includes('scientist') || normalizeRole.includes('analyst')) {
        return [
            { category: 'Data Analysis', icon: BarChart, color: 'from-blue-400 to-cyan-300', skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'Tableau'], level: 'Advanced' },
            { category: 'Machine Learning', icon: Brain, color: 'from-purple-400 to-pink-300', skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Model Deployment'], level: 'Intermediate' },
            { category: 'Big Data', icon: Database, color: 'from-green-400 to-emerald-300', skills: ['Spark', 'Hadoop', 'Databricks'], level: 'Beginner' },
            { category: 'Statistics', icon: BarChart, color: 'from-yellow-400 to-amber-300', skills: ['Probability', 'Hypothesis Testing', 'Regression'], level: 'Advanced' }
        ];
    }

    if (normalizeRole.includes('designer') || normalizeRole.includes('ui') || normalizeRole.includes('ux')) {
        return [
            { category: 'Design Tools', icon: PenTool, color: 'from-pink-400 to-rose-300', skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop'], level: 'Advanced' },
            { category: 'Prototyping', icon: Layers, color: 'from-purple-400 to-violet-300', skills: ['Wireframing', 'Interactive Prototypes', 'User Flows'], level: 'Advanced' },
            { category: 'User Research', icon: Globe, color: 'from-blue-400 to-indigo-300', skills: ['User Testing', 'Personas', 'Journey Mapping'], level: 'Intermediate' }
        ];
    }

    if (normalizeRole.includes('manager') || normalizeRole.includes('product')) {
        return [
            { category: 'Product Strategy', icon: Brain, color: 'from-blue-500 to-indigo-400', skills: ['Roadmapping', 'KPIs', 'Market Research'], level: 'Advanced' },
            { category: 'Agile & Scrum', icon: Layers, color: 'from-green-500 to-teal-400', skills: ['Sprint Planning', 'Jira', 'User Stories'], level: 'Advanced' },
            { category: 'Data Analytics', icon: BarChart, color: 'from-orange-500 to-red-400', skills: ['Mixpanel', 'Google Analytics', 'SQL'], level: 'Intermediate' }
        ];
    }

    // Default: Software Engineering
    return [
        { category: 'Frontend Development', icon: Globe, color: 'from-blue-400 to-cyan-300', skills: ['React', 'Vue', 'Angular', 'Tailwind CSS', 'Framer Motion'], level: 'Advanced' },
        { category: 'Backend Development', icon: Server, color: 'from-purple-400 to-pink-300', skills: ['Node.js', 'Python', 'Go', 'Express', 'NestJS'], level: 'Intermediate' },
        { category: 'Database Management', icon: Database, color: 'from-green-400 to-emerald-300', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Supabase'], level: 'Advanced' },
        { category: 'DevOps & Cloud', icon: Layers, color: 'from-orange-400 to-red-300', skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform'], level: 'Beginner' },
        { category: 'System Architecture', icon: Cpu, color: 'from-indigo-400 to-violet-300', skills: ['Microservices', 'Event-Driven', 'Serverless', 'System Design'], level: 'Intermediate' },
        { category: 'Programming Languages', icon: Code, color: 'from-yellow-400 to-amber-300', skills: ['TypeScript', 'JavaScript', 'Python', 'Rust', 'Go'], level: 'Advanced' }
    ];
};

export default function SkillMapping() {
    const [role, setRole] = useState("Software Engineer");
    const [skills, setSkills] = useState(generateSkillsForRole("Software Engineer"));

    useEffect(() => {
        const savedRole = localStorage.getItem('currentCareerGoal');
        if (savedRole) {
            setRole(savedRole);
            setSkills(generateSkillsForRole(savedRole));
        }
    }, []);

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Skill Mapping</h1>
                <p className="text-neutral-500">
                    Competencies required for <span className="text-purple-600 font-semibold">{role}</span>
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{
                            y: -10,
                            rotateX: 5,
                            rotateY: 5,
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 300 }
                        }}
                        style={{ perspective: 1000 }}
                    >
                        <Card className="h-full overflow-hidden border-none bg-white/50 dark:bg-dark-surface/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group ring-1 ring-black/5 dark:ring-white/10">
                            <div className={`h-2 w-full bg-gradient-to-r ${skill.color}`} />
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-10 dark:bg-opacity-20`}>
                                        <skill.icon className="h-6 w-6 text-white drop-shadow-sm" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-neutral-900 dark:text-white group-hover:text-primary-600 transition-colors">
                                            {skill.category}
                                        </h3>
                                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                                            {skill.level}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex flex-wrap gap-2">
                                        {skill.skills.map((s, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 text-xs font-medium rounded-md bg-neutral-50 dark:bg-dark-hover border border-neutral-100 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                                    <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-full h-1.5 overflow-hidden">
                                        <motion.div
                                            className={`h-full bg-gradient-to-r ${skill.color}`}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level === 'Advanced' ? 90 : skill.level === 'Intermediate' ? 60 : 30}%` }}
                                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
