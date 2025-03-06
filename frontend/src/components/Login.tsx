import { useState } from 'react';

const Login = ({ onSwitchToRegister }: { onSwitchToRegister: () => void }) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
};

return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
    <div className="w-full max-w-md">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                placeholder="your@email.com"
            />
            </div>
            
            <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
            </label>
            <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                placeholder="••••••••"
            />
            </div>
            
            
            <div className="flex items-center justify-between">
            
           
            </div>
            
            <div>
            <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200"
            >
                Sign In
            </button>
            </div>
        </form>
        
        <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
            Don't have an account?{' '}
            <button
                onClick={onSwitchToRegister}
                className="font-medium text-indigo-400 hover:text-indigo-300 transition duration-200 border-none bg-transparent p-0"
            >
                Register here
            </button>
            </p>
        </div>
        </div>
    </div>
    </div>
);
};

export default Login;

