import { Typewriter } from 'react-simple-typewriter';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function UserTyper() {
    const headingRef = useRef(null);

    return (
        <>
            <div className="bg-black text-white flex justify-center items-center h-screen relative">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="w-full md:w-3/4 mx-auto md:p-4 my-3 md:my-0" ref={headingRef}>
                        <div className='font-mono font-bold text-xl md:text-3xl lg:text-6xl text-sky-400 mb-10 block mx-3'>
                            <Typewriter
                                words={['Welcome To VoteEase']}
                                loop={1}
                                cursor
                                cursorStyle='!'
                                typeSpeed={40}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </div>
                        <div className="flex flex-col md:flex-row mx-3">
                            <Link to="/createpoll" className="mt-5 md:mr-4">
                                <button className="transition delay-150 duration-300 ease-in-out rounded-full border-solid border-2 font-mono text-xl sm:text-lg md:text-2xl text-white px-6 py-4 hover:bg-sky-400 my-3 md:my-0">Host Election</button>
                            </Link>
                            <Link to="/ActivePoll" className="mt-5">
                                <button className="transition delay-150 duration-300 ease-in-out rounded-full border-solid border-2 font-mono text-xl sm:text-lg md:text-2xl text-white px-6 py-4 hover:bg-sky-400 my-3 md:my-0">Vote Now</button>
                            </Link>
                        </div>
                    </div>
                    <div class="ml-4 md:ml-0 mb-4 md:mb-0">
                        <img src="./src/Images/Voting2.jpg" alt="Your Image" class="w-70 h-70 md:w-full hover:animate-spin mx-3 my-3 rounded-2xl" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserTyper;
