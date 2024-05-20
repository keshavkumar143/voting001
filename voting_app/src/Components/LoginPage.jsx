import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/login', { email, password });
      const token = res.data.token;
      localStorage.setItem('token', token);
      toast.success('Login successful!');
      navigate('/votingArea');
    } catch (err) {
      if (err.response && err.response.status === 401) {
        toast.error('Password Incorrect');
      } else if (err.response && err.response.status === 404) {
        toast.error("User doesn't exist");
      } else {
        console.error(err);
        toast.error('An error occurred while logging in.');
      }
    }
  };

  return (
    <div className="authhead bg-black flex justify-center items-center">
      <div className="flex flex-col justify-center px-6 py-12 lg:px-8 w-full max-w-sm">
        <div className="mx-auto mb-10">
          <Link to="/">
            <img className="mx-auto h-10 w-auto cursor-pointer" src="./src/Images/logo.png" alt="Logo" />
          </Link>
          <h2 className="mt-4 text-center text-2xl font-bold font-mono leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white font-mono">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 font-mono focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white font-mono">
                Password
              </label>
            </div>

            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-mono px-2"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-sky-400 px-3 py-1.5 text-sm font-semibold font-mono leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <Link to="/signup" className="font-semibold leading-6 text-sky-700 hover:text-sky-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;