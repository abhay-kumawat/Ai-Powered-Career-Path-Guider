import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/Button';
import { Bell, Search, Sun, Moon } from 'lucide-react';

export function Navbar() {
    const { user } = useAuth();
    const { theme, setTheme } = useTheme();

    return (
        <header className="flex h-16 items-center justify-between border-b border-neutral-200 bg-white px-6 dark:border-dark-border dark:bg-dark-surface">
            {/* ... search ... */}
            <div className="flex flex-1 items-center gap-4">
                <div className="relative w-full max-w-md">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                    <input
                        type="text"
                        placeholder="Search careers, skills, or paths..."
                        className="h-10 w-full rounded-xl border border-neutral-200 bg-neutral-50 pl-10 pr-4 text-sm outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-dark-border dark:bg-dark-hover dark:text-white"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                    {theme === 'dark' ? (
                        <Sun className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                    ) : (
                        <Moon className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                    )}
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <Bell className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                </Button>

                <div className="flex items-center gap-3 pl-4 border-l border-neutral-200 dark:border-dark-border">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-neutral-900 dark:text-white">
                            {user?.firstName} {user?.lastName}
                        </p>
                        <p className="text-xs text-neutral-500">{user?.role}</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary-600 to-accent-purple flex items-center justify-center text-white font-bold">
                        {user?.firstName?.[0]}
                    </div>
                </div>
            </div>
        </header>
    );
}
