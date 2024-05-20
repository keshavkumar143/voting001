import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashNavbar from './DashNavbar';
import UserTyper from './UserTyper';

function VotingArea() {
  return (
    <>
      <div className="relative bg-black h-screen">
        <div className="absolute top-0 left-0 w-full">
          <DashNavbar />
        </div>
        <div className="absolute top-20 left-0 w-full my-28">
          <UserTyper />
        </div>
      </div>
    </>
  );
}

export default VotingArea;
