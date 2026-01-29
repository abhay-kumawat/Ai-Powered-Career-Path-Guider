import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';

interface CareerCardProps {
    title: string;
    description: string;
    matchScore: number;
    salary: string;
    growth: string;
    demand: string;
    onClick?: () => void;
}

export function CareerCard({ title, description, matchScore, salary, growth, demand, onClick }: CareerCardProps) {
    return (
        <Card hover className="group relative overflow-hidden transition-all">
            <div className="absolute top-0 right-0 p-4">
                <div className={`
          flex h-12 w-12 items-center justify-center rounded-full border-4 text-sm font-bold
          ${matchScore >= 90 ? 'border-green-100 bg-green-50 text-green-600 dark:border-green-900/30 dark:bg-green-900/20 dark:text-green-400' :
                        matchScore >= 70 ? 'border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-400' :
                            'border-yellow-100 bg-yellow-50 text-yellow-600 dark:border-yellow-900/30 dark:bg-yellow-900/20 dark:text-yellow-400'}
        `}>
                    {matchScore}%
                </div>
            </div>

            <CardHeader>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="line-clamp-2 mt-2">{description}</CardDescription>
            </CardHeader>

            <CardContent>
                <div className="mb-6 grid grid-cols-3 gap-2">
                    <div className="rounded-lg bg-neutral-50 p-2 text-center dark:bg-dark-hover">
                        <DollarSign className="mx-auto mb-1 h-4 w-4 text-neutral-500" />
                        <p className="text-xs font-medium text-neutral-900 dark:text-white">{salary}</p>
                        <p className="text-[10px] text-neutral-500">Salary</p>
                    </div>
                    <div className="rounded-lg bg-neutral-50 p-2 text-center dark:bg-dark-hover">
                        <TrendingUp className="mx-auto mb-1 h-4 w-4 text-neutral-500" />
                        <p className="text-xs font-medium text-neutral-900 dark:text-white">{growth}</p>
                        <p className="text-[10px] text-neutral-500">Growth</p>
                    </div>
                    <div className="rounded-lg bg-neutral-50 p-2 text-center dark:bg-dark-hover">
                        <Users className="mx-auto mb-1 h-4 w-4 text-neutral-500" />
                        <p className="text-xs font-medium text-neutral-900 dark:text-white">{demand}</p>
                        <p className="text-[10px] text-neutral-500">Jobs</p>
                    </div>
                </div>

                <Button className="w-full group-hover:bg-primary-600 group-hover:text-white" onClick={onClick}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </CardContent>
        </Card>
    );
}
