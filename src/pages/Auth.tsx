import React, { useState } from 'react';
import { useAuthStore } from '@/store/authStore';
import { useNavigate } from 'react-router-dom';

export const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { login, signup } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      login(email, password);
    } else {
      signup(username, email, password);
    }
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block w-20 h-20 bg-primary border-4 border-black neo-brutal-shadow-lg mb-4">
            <span className="text-4xl font-bold flex items-center justify-center h-full">C</span>
          </div>
          <h1 className="text-5xl font-bold mb-2">CONNECT</h1>
          <p className="text-lg">Join the conversation</p>
        </div>

        <div className="bg-white border-4 border-black neo-brutal-shadow-lg p-8">
          <div className="flex mb-6 border-3 border-black">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 font-bold transition-all ${
                isLogin
                  ? 'bg-primary'
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              LOGIN
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 font-bold border-l-3 border-black transition-all ${
                !isLogin
                  ? 'bg-primary'
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              SIGNUP
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block font-bold mb-2">USERNAME</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 border-3 border-black focus:outline-none focus:ring-0 font-mono"
                  placeholder="johndoe"
                  required
                />
              </div>
            )}

            <div>
              <label className="block font-bold mb-2">EMAIL</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border-3 border-black focus:outline-none focus:ring-0 font-mono"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block font-bold mb-2">PASSWORD</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border-3 border-black focus:outline-none focus:ring-0 font-mono"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 border-4 border-black bg-primary hover:bg-yellow-400 font-bold text-lg transition-all neo-brutal-shadow hover:translate-x-2 hover:translate-y-2"
            >
              {isLogin ? 'LOGIN' : 'CREATE ACCOUNT'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
