import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/register', { name, email, password });
      console.log(res);
      toast.success("Sign up successful! You can now log in.");
      navigate('/login');
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while signing up.");
    }
  }

  return (
    <div className="authhead bg-black flex justify-center items-center">
      <div className="flex flex-col justify-center px-6 py-12 lg:px-8 w-full max-w-sm">
        <div className="mx-auto mb-10">
          <Link to="/">
            <img
              className="mx-auto h-10 w-auto cursor-pointer"
              src="./src/Images/logo.png"
              alt="Logo"
            />
          </Link> 
          <h2 className="mt-4 text-center text-2xl font-bold font-mono leading-9 tracking-tight text-white">
            Create your own account
          </h2>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit} method="POST">
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-white font-mono">
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="off"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 font-mono focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

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
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white font-mono">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 font-mono focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-sky-400 px-3 py-1.5 text-sm font-semibold font-mono leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 fon-mono"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{' '}
          <Link to="/login" className="font-semibold leading-6 text-sky-700 hover:text-sky-500">
            Log in
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
