import { useAuth } from '@/contexts/authUser';
import { useState } from 'react';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUpWithEmail, signInWithGoogle } = useAuth();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    signUpWithEmail(email, password);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full p-6 bg-slate-800 rounded-md shadow-xl">
        <h2 className="text-2xl font-semibold mb-6">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 mt-4 focus:outline-none"
          >
            Register
          </button>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2 mt-2 focus:outline-none"
          >
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
