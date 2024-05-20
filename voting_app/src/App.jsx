import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customcursor from './Components/Customcursor';
import HeadingHome from './Components/HeadingHome';
import About from './Components/About';
import LoginPage from './Components/LoginPage';
import SignUp from './Components/SignUp';
import VotingArea from './Components/Dashboard/VotingArea';
import { ToastContainer } from 'react-toastify';
import News from './Components/News/News';
import CreatePoll from './Components/CreatePoll/CreatePoll';
import ActivePolls from './Components/CreatePoll/ActivePoll';


export default function App() {
  return (
    <>
      <Customcursor />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HeadingHome/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/Votingarea' element={<VotingArea/>}></Route>
          <Route path='/news' element={<News/>}></Route>
          <Route path = '/createpoll'element={<CreatePoll/>}></Route>
          <Route path = '/activepoll' element = {<ActivePolls/>}></Route>
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </>
  );
}
