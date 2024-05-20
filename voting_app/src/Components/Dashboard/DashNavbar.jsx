import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DashNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    navigate('/login');
  };

  return (
    <div className="p-4 bg-black absolute top-0 w-full mb-7">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/votingarea">
          <div className="cursor-pointer bg-cover hidden sm:block">
            <img src="./src/Images/logo.png" className="h-35 w-20" alt="Logo" />
          </div>
        </Link>
        <ul className="flex items-center">
          <li className="mr-4 relative flex items-center">
            <button>
              <Link to="/news" className="relative flex items-center">
                <span className="animate-ping absolute h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-block rounded-full h-3 w-3 bg-red-500 mr-1"></span>
                <span className="text-white font-mono text-xl md:text-2xl pr-5 hover:text-sky-500">NEWS</span>
              </Link>
            </button>
          </li>
          <li>
            <button onClick={handleLogout} className="text-white bg-sky-500 px-5 py-2 my-4 rounded hover:bg-sky-600 font-mono text-xl md:text-2xl">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashNavbar;
