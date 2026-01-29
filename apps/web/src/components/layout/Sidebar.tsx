import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Compass, BookOpen, Settings, LogOut } from 'lucide-react';
import { cn } from '@/utils/cn';
import { useAuth } from '@/hooks/useAuth';

const navigation = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Career Paths', href: '/dashboard/career', icon: Compass },
    { name: 'Learning', href: '/dashboard/learning', icon: BookOpen },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function Sidebar() {
    const location = useLocation();
    const { logout } = useAuth();

    return (
        <div className="flex h-screen w-64 flex-col border-r border-neutral-200 bg-white dark:border-dark-border dark:bg-dark-surface">
            <div className="flex h-16 items-center px-6">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-600 to-accent-purple mr-2" />
                <span className="text-xl font-bold text-neutral-900 dark:text-white">PathGuide</span>
            </div>

            <div className="flex flex-1 flex-col gap-1 px-3 py-4">
                {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                                'flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors',
                                isActive
                                    ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/10 dark:text-primary-400'
                                    : 'text-neutral-600 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-dark-hover'
                            )}
                        >
                            <item.icon className="h-5 w-5" />
                            {item.name}
                        </Link>
                    );
                })}
            </div>

            <div className="border-t border-neutral-200 p-4 dark:border-dark-border">
                <button
                    onClick={logout}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/10"
                >
                    <LogOut className="h-5 w-5" />
                    Sign out
                </button>
            </div>
        </div>
    );
}
