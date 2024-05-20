import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function HeadingHome() {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.to(headingRef.current, {
      duration: 1,
      opacity: 1,
      color: "white",
      delay: 0.5,
      stagger: 1,
      ease: "back.out"
    });
  }, []);

  return (
    <div className='home bg-black h-screen relative'>
      <Navbar />
      <div className="homeContainer flex flex-col-reverse gap-y-12 md:gap-y-0 md:gap-x-8 md:flex-row items-center justify-around py-20 px-4">
        <div className="heading text-center md:text-left mb-10 md:mb-0 md:ml-5 text-transparent font-mono flex flex-col items-center justify-center">
          <p ref={headingRef} className="sm:text-2xl md:text-4xl lg:text-5xl font-bold">Make Your Own Decision</p>
          <Link to="/login" className="mt-5">
            <button className="button transition delay-150 duration-300 ease-in-out rounded-full border-solid border-2 font-mono text-xl sm:text-lg md:text-2xl text-white px-6 py-4 hover:bg-sky-400 ml-4">Get Started</button>
          </Link>
        </div>
        <div className="log md:mt-0 flex items-center justify-center">
          <img src="./src/Images/HomePage.jpg" alt="" className="pic1 rounded-lg md:mt-7 object-cover w-[60%] hover:animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default HeadingHome;
