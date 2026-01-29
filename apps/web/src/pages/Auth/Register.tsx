import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { authApi } from '@/api/auth';
import { ArrowLeft, Mail, Lock, User, AlertCircle, Brain, Sparkles, Target, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setIsLoading(true);

        try {
            const response = await authApi.register({
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password
            });
            login(response.token, response.user);
        } catch (err: any) {
            setError(err?.response?.data?.message || 'Failed to create account');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="relative flex min-h-screen gradient-surface">
            {/* Animated Background */}
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
            </div>

            {/* Back Button */}
            <Button
                variant="ghost"
                className="absolute left-4 top-4 md:left-8 md:top-8 z-10 glass hover:bg-white/10 text-white border-white/10"
                onClick={() => navigate('/')}
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
            </Button>

            {/* Left Side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center px-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-lg"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                            <Brain className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-3xl font-bold text-gradient-light">PathGuide AI</span>
                    </div>

                    <h1 className="text-5xl font-bold text-white mb-6">
                        Begin Your Discovery
                    </h1>

                    <p className="text-xl text-purple-200 mb-12 leading-relaxed">
                        Join thousands who've found their perfect career path. Your journey to clarity and success starts here.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3 glass rounded-2xl p-4">
                            <div className="p-2 rounded-xl bg-purple-500/20 flex-shrink-0">
                                <Sparkles className="h-5 w-5 text-purple-400" />
                            </div>
                            <div>
                                <div className="font-semibold text-white mb-1">AI-Powered Matching</div>
                                <div className="text-sm text-purple-200">Get personalized career recommendations in minutes</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 glass rounded-2xl p-4">
                            <div className="p-2 rounded-xl bg-teal-500/20 flex-shrink-0">
                                <Target className="h-5 w-5 text-teal-400" />
                            </div>
                            <div>
                                <div className="font-semibold text-white mb-1">Personalized Roadmap</div>
                                <div className="text-sm text-purple-200">Step-by-step guidance tailored to your goals</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 glass rounded-2xl p-4">
                            <div className="p-2 rounded-xl bg-blue-500/20 flex-shrink-0">
                                <Shield className="h-5 w-5 text-blue-400" />
                            </div>
                            <div>
                                <div className="font-semibold text-white mb-1">100% Free to Start</div>
                                <div className="text-sm text-purple-200">No credit card required. Ever.</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 flex items-center justify-center px-4 py-12 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md"
                >
                    <div className="card-glass p-8 md:p-10">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="lg:hidden mx-auto mb-6 h-14 w-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                                <Brain className="h-7 w-7 text-white" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Create Your Account</h2>
                            <p className="text-purple-200">
                                Start your journey to career clarity
                            </p>
                        </div>

                        {/* Form */}
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    label="First name"
                                    required
                                    placeholder="John"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    icon={<User className="h-4 w-4" />}
                                    className="bg-white/5 border-white/10 text-white placeholder:text-purple-300/50"
                                />

                                <Input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    label="Last name"
                                    required
                                    placeholder="Doe"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="bg-white/5 border-white/10 text-white placeholder:text-purple-300/50"
                                />
                            </div>

                            <Input
                                id="email"
                                name="email"
                                type="email"
                                label="Email address"
                                autoComplete="email"
                                required
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                icon={<Mail className="h-4 w-4" />}
                                className="bg-white/5 border-white/10 text-white placeholder:text-purple-300/50"
                            />

                            <Input
                                id="password"
                                name="password"
                                type="password"
                                label="Password"
                                autoComplete="new-password"
                                required
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                icon={<Lock className="h-4 w-4" />}
                                className="bg-white/5 border-white/10 text-white placeholder:text-purple-300/50"
                            />

                            <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                label="Confirm password"
                                autoComplete="new-password"
                                required
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                icon={<Lock className="h-4 w-4" />}
                                className="bg-white/5 border-white/10 text-white placeholder:text-purple-300/50"
                            />

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 rounded-xl glass-strong p-4 text-sm text-red-300 border border-red-500/30"
                                >
                                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                                    {error}
                                </motion.div>
                            )}

                            <Button
                                className="w-full h-12 gradient-accent shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] transition-all"
                                type="submit"
                                loading={isLoading}
                            >
                                <Sparkles className="mr-2 h-4 w-4" />
                                {isLoading ? 'Creating account...' : 'Start Free Journey'}
                            </Button>

                            <p className="text-xs text-center text-purple-300 leading-relaxed">
                                By creating an account, you agree to our Terms of Service and Privacy Policy
                            </p>

                            <div className="text-center text-sm">
                                <span className="text-purple-300">Already have an account? </span>
                                <Link to="/auth/login" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                                    Sign in
                                </Link>
                            </div>
                        </form>

                        {/* Trust Badge */}
                        <div className="mt-8 pt-6 border-t border-white/10 text-center">
                            <div className="flex items-center justify-center gap-2 text-sm text-purple-300">
                                <Shield className="h-4 w-4 text-teal-400" />
                                <span>100% Free • No credit card required</span>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Trust Indicators */}
                    <div className="lg:hidden mt-8 space-y-3">
                        <div className="flex items-center gap-3 glass rounded-xl p-3 text-sm">
                            <Sparkles className="h-5 w-5 text-purple-400 flex-shrink-0" />
                            <span className="text-purple-200">AI-powered career matching in minutes</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
