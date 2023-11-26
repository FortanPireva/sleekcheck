
'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import DATA_TEST_IDS from '../../utils/datatest_ids';

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false); // Error message for login failure


  const handleLogin = async (e) => {
    // Handle login logic here
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const result = await res.json();
    if (res.status === 200) {
      // Login success
      router.push('/dashboard');
    } else {
      alert('faulty login')
      setError(result.message)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={`border border-gray-300 rounded px-4 py-2 ${error ? 'border-red-500 error' : ''}`}
          data-testid={DATA_TEST_IDS.LOGIN_INPUT_EMAIL}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          value={password}
          className={`border border-gray-300 rounded px-4 py-2 ${error ? 'border-red-500 error' : ''}`}
          data-testid={DATA_TEST_IDS.LOGIN_INPUT_PASSWORD}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          id='login-button'
          onClick={handleLogin}
          className="bg-blue-500 text-white rounded px-4 py-2"
          data-testid={DATA_TEST_IDS.LOGIN_BUTTON}

        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
