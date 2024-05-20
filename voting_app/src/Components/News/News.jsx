import React from 'react';
import NewsNavbar from './NewsNavbar';
import NewsContainers from './NewsContainers';

export default function News() {
    return (
        <>
            <div className="h-full bg-black">
              <div className="navContainer"><NewsNavbar name = "Go Back" path="/votingarea"/></div>

              <div className="Containers mx-5 my-5 ">
                <NewsContainers></NewsContainers>
              </div>

              
            </div>
        </>
    );
}
