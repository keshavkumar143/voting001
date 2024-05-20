import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NewsNavbar from '../News/NewsNavbar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePoll = () => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '']);
    const [endTime, setEndTime] = useState('');
    const navigate = useNavigate();

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
      };

      const addOption = () => {
          setOptions([...options, '']);
      };
  
      const deleteOption = (index) => {
          const newOptions = [...options];
          newOptions.splice(index, 1);
          setOptions(newOptions);
      };
  
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (question.trim() === '' || options.some(option => option.trim() === '') || !endTime) {
            toast.error("Please provide a valid question, at least two options, and an end time.");
            return;
        }
    
        try {
            const token = localStorage.getItem('token');
            const res = await axios.post(
                'http://localhost:3000/polls/create', 
                { question, options: options.filter(option => option.trim() !== ''), endTime },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            toast.success("Poll created successfully!");
            navigate('/activepolls');
        } catch (err) {
            console.error(err);
            toast.error("An error occurred while creating the poll.");
        }
    };

    
      return (
          <div className='bg-black h-screen'>
              <NewsNavbar name="Go Back" path="/votingarea" />
              <div className='bg-black flex justify-center items-center'>
                  <form className="w-full max-w-lg bg-slate rounded-lg border border-white shadow-lg p-6" onSubmit={handleSubmit}>
                      <div className="mb-6">
                          <label className="block text-sky-400 text-sm font-bold mb-2" htmlFor="grid-question">
                              Question
                          </label>
                          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-question" type="text" placeholder="Enter your question" value={question} onChange={(e) => setQuestion(e.target.value)} required />
                      </div>
                      {options.map((option, index) => (
                          <div key={index} className="mb-6 flex items-center">
                              <label className="block text-sky-400 text-sm font-bold mr-4" htmlFor={`grid-option-${index}`}>
                                  Option {index + 1}
                              </label>
                              <input className="appearance-none bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id={`grid-option-${index}`} type="text" placeholder={`Enter option ${index + 1}`} value={option} onChange={(e) => handleOptionChange(index, e.target.value)} required />
                              {index === options.length - 1 && (
                                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-3 mb-2 rounded focus:outline-none focus:shadow-outline" type="button" onClick={addOption}>
                                      Add Option
                                  </button>
                              )}
                              {options.length > 2 && (
                                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-3 mb-2 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => deleteOption(index)}>
                                      Delete
                                  </button>
                              )}
                          </div>
                      ))}
                      <div className="mb-6">
                          <label className="block text-sky-400 text-sm font-bold mb-2" htmlFor="grid-end-time">
                              End Time
                          </label>
                          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-end-time" type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
                      </div>
                      <div className="flex justify-between items-center">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                              Create Poll
                          </button>
                          <Link to="/activepolls" className="inline-block font-bold text-sm text-blue-500 hover:text-blue-800">
                              View Polls
                          </Link>
                      </div>
                  </form>
              </div>
          </div>
      );
  };
  
  export default CreatePoll;
  
