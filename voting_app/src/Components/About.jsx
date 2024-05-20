import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from './Navbar';
import { Typewriter } from 'react-simple-typewriter';

function About() {
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
    <div className='relative'>
      <Navbar />
      <div className="mainContainer bg-black">
        <div className="AboutContainer flex flex-col md:flex-row justify-between items-center h-screen py-10 px-4 md:px-10">
          <div className="AboutImage hidden lg:block mt-4 md:mt-0 md:mr-4">
            <div className="image-background rounded-lg w-full md:w-96 h-64 md:h-auto" />
            <img src="./src/Images/AboutPic.jpg" alt="" className='rounded lg hover:animate-spin' />
          </div>
          <div className="text bg-black text-white">
            <div className="name-container w-full md:w-3/4 mx-auto md:p-4" ref={headingRef}>
              <span className='font-mono font-bold text-xl md:text-3xl lg:text-4xl text-sky-400 mb-4 block'>
                <Typewriter
                  words={['What We Do', 'Why us', 'What Drives Us']}
                  loop={100}
                  cursor
                  cursorStyle='?'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
              <div className="Aboutlines mt-3">
                <p className='font-mono text-xs md:text-base lg:text-lg'>
                  At VoteEase, our mission is encapsulated in "What We Do": providing a seamless platform for democratic participation. Our commitment to transparency, security, and inclusivity defines "Why Us", ensuring that every voice is valued and heard securely. "What Drives Us" is our dedication to empowering individuals through the transformative power of voting, guided by principles of fairness, integrity, and innovation, shaping the future of civic engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
