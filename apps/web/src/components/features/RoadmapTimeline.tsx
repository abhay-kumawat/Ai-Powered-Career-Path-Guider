import { Card } from '@/components/ui/Card';
import { CheckCircle2, Lock } from 'lucide-react';

interface Step {
    id: string;
    title: string;
    description: string;
    status: 'completed' | 'current' | 'locked';
    duration: string;
}

interface RoadmapTimelineProps {
    steps: Step[];
    onStepClick?: (id: string) => void;
}

export function RoadmapTimeline({ steps, onStepClick }: RoadmapTimelineProps) {
    return (
        <div className="relative space-y-8 pl-8 before:absolute before:left-3.5 before:top-2 before:h-[calc(100%-1rem)] before:w-0.5 before:bg-neutral-200 dark:before:bg-dark-border">
            {steps.map((step, _index) => (
                <div
                    key={step.id}
                    className="relative cursor-pointer group"
                    onClick={() => onStepClick?.(step.id)}
                >
                    <div className="absolute -left-[34px] top-1 rounded-full bg-white p-1 dark:bg-dark-bg transition-transform group-hover:scale-110">
                        {step.status === 'completed' ? (
                            <CheckCircle2 className="h-6 w-6 text-green-500" />
                        ) : step.status === 'current' ? (
                            <div className="h-6 w-6 rounded-full border-4 border-primary-100 bg-primary-600 dark:border-primary-900/30" />
                        ) : (
                            <Lock className="h-6 w-6 text-neutral-300 dark:text-neutral-600" />
                        )}
                    </div>

                    <Card className={`
            p-5 transition-all
            ${step.status === 'locked' ? 'opacity-60 grayscale' : 'hover:shadow-soft group-hover:border-primary-200 dark:group-hover:border-primary-800'}
          `}>
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="font-semibold text-neutral-900 dark:text-white">
                                    {step.title}
                                </h3>
                                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                                    {step.description}
                                </p>
                            </div>
                            <span className="shrink-0 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-dark-hover dark:text-neutral-400">
                                {step.duration}
                            </span>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
}
