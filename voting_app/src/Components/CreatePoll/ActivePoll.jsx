import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewsNavbar from '../News/NewsNavbar';

const ActivePolls = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:3000/polls', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setPolls(res.data);
      } catch (err) {
        console.error(err);
        toast.error("An error occurred while fetching polls.");
      }
    };

    fetchPolls();
  }, []);

  return (
    <div className='bg-black h-screen'>
      <NewsNavbar name="Go Back" path="/votingarea" />
      <div className='bg-black flex justify-center items-center'>
        <div className="w-full max-w-lg bg-slate rounded-lg border border-white shadow-lg p-6">
          <h2 className="text-sky-400 text-2xl font-bold mb-6">Active Polls</h2>
          {polls.length > 0 ? (
            polls.map(poll => (
              <div key={poll._id} className="mb-6">
                <h3 className="text-white text-xl font-bold mb-2">{poll.question}</h3>
                <ul>
                  {poll.options.map((option, index) => (
                    <li key={index} className="text-gray-400 mb-1">{option.text} - {option.votes} votes</li>
                  ))}
                </ul>
                <p className="text-gray-500 text-sm">Ends at: {new Date(poll.endTime).toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No active polls available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivePolls;
