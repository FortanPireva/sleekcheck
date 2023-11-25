
'use client'
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Handle login logic here
    router.push('/dashboard'); // Redirect to dashboard page after successful login
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded px-4 py-2"
        />
        <button
          type="submit"
          onClick={handleLogin}
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
