import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Search, BookOpen, PlayCircle, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['All', 'Development', 'Design', 'Business', 'Data Science'];

const RESOURCES = [
    {
        id: 1,
        title: 'Advanced React Patterns',
        author: 'Kent C. Dodds',
        type: 'Course',
        category: 'Development',
        duration: '6h 30m',
        rating: 4.9,
        progress: 75,
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
        id: 2,
        title: 'UI Design Fundamentals',
        author: 'Gary Simon',
        type: 'Video',
        category: 'Design',
        duration: '2h 15m',
        rating: 4.7,
        progress: 30,
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d4b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
        id: 3,
        title: 'Product Management 101',
        author: 'Lenny Rachitsky',
        type: 'Article',
        category: 'Business',
        duration: '15m read',
        rating: 4.8,
        progress: 0,
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
        id: 4,
        title: 'TypeScript for Professionals',
        author: 'Matt Pocock',
        type: 'Course',
        category: 'Development',
        duration: '4h 45m',
        rating: 5.0,
        progress: 10,
        image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
];

export default function Learning() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredResources = RESOURCES.filter(resource => {
        const matchesCategory = activeCategory === 'All' || resource.category === activeCategory;
        const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.author.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Learning Hub</h1>
                <p className="text-neutral-500">Curated resources to accelerate your growth</p>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
                    {CATEGORIES.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`
                whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all
                ${activeCategory === category
                                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                                    : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50 dark:bg-dark-surface dark:border-dark-border dark:text-neutral-400'}
              `}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="relative w-full sm:w-72">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                    <Input
                        placeholder="Search resources..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence>
                    {filteredResources.map((resource) => (
                        <motion.div
                            layout
                            key={resource.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card hover className="group h-full overflow-hidden p-0 border-neutral-200 dark:border-dark-border">
                                {/* Image */}
                                <div className="relative h-40 w-full overflow-hidden bg-neutral-100">
                                    <img
                                        src={resource.image}
                                        alt={resource.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute right-3 top-3 rounded-lg bg-white/90 px-2 py-1 text-xs font-bold backdrop-blur-sm dark:bg-black/80 dark:text-white">
                                        {resource.type}
                                    </div>
                                </div>

                                <div className="p-5">
                                    <div className="flex items-start justify-between gap-2">
                                        <div>
                                            <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-1">{resource.category}</p>
                                            <h3 className="line-clamp-1 font-bold text-neutral-900 dark:text-white" title={resource.title}>{resource.title}</h3>
                                            <p className="text-sm text-neutral-500">{resource.author}</p>
                                        </div>
                                        <div className="flex items-center gap-1 rounded-md bg-yellow-50 px-1.5 py-0.5 text-xs font-medium text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400">
                                            <Star className="h-3 w-3 fill-current" />
                                            {resource.rating}
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
                                        <span className="flex items-center gap-1">
                                            <PlayCircle className="h-3.5 w-3.5" />
                                            {resource.duration}
                                        </span>
                                        <span>{resource.progress > 0 ? `${resource.progress}% Complete` : 'Not Started'}</span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="mt-2 h-1.5 w-full rounded-full bg-neutral-100 dark:bg-dark-hover">
                                        <div
                                            className="h-full rounded-full bg-primary-600"
                                            style={{ width: `${resource.progress}%` }}
                                        />
                                    </div>

                                    <Button className="mt-4 w-full" variant={resource.progress > 0 ? "outline" : "primary"}>
                                        {resource.progress > 0 ? "Continue" : "Start Learning"}
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredResources.length === 0 && (
                <div className="py-12 text-center text-neutral-500">
                    <BookOpen className="mx-auto mb-3 h-10 w-10 opacity-20" />
                    <p>No resources found matching your criteria.</p>
                </div>
            )}
        </div>
    );
}
