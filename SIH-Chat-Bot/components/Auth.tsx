
import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const ORBS = [
  { size: 200, left: '10%', duration: 18, delay: 0, color: 'rgba(99,102,241,0.15)' },
  { size: 150, left: '30%', duration: 22, delay: 3, color: 'rgba(15,118,110,0.12)' },
  { size: 120, left: '55%', duration: 16, delay: 6, color: 'rgba(129,140,248,0.1)' },
  { size: 180, left: '75%', duration: 20, delay: 2, color: 'rgba(99,102,241,0.12)' },
  { size: 100, left: '90%', duration: 14, delay: 4, color: 'rgba(15,118,110,0.1)' },
];

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, signup } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }
    setError('');
    setIsLoading(true);

    try {
      if (isLogin) {
        await login(username, password);
      } else {
        await signup(username, password);
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
    setUsername('');
    setPassword('');
  }

  return (
    <div className="relative flex items-center justify-center h-full overflow-hidden animate-gradient">
      {ORBS.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.left,
            bottom: '-10%',
            background: `radial-gradient(circle, ${orb.color}, transparent)`,
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-900/80 backdrop-blur-xl rounded-lg shadow-2xl border border-gray-700/50 animate-fade-slide-up">
        <div>
          <h2 className="text-3xl font-extrabold text-center text-white">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            {isLogin ? 'Sign in to continue' : 'to get started'}
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-800/50 text-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-t-md transition-colors duration-200"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={isLogin ? "current-password" : "new-password"}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-800/50 text-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-b-md transition-colors duration-200"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-center text-red-400 animate-fade-slide-up">{error}</p>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900 disabled:bg-indigo-800 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 disabled:shadow-none"
            >
              {isLoading ? 'Processing...' : (isLogin ? 'Sign in' : 'Sign up')}
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          <button
            onClick={toggleForm}
            className="font-medium text-indigo-400 hover:text-indigo-300 disabled:text-indigo-600 transition-colors duration-200"
            disabled={isLoading}
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
