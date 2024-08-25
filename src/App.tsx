// import React from 'react';
// import logo from './logo.svg';

// import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonGradient from './assets/svg/ButtonGradient';
// import { Button } from './components/Button';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Collaboration } from './components/Collaboration';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { RoadMap } from './components/Roadmap';


function App() {

  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <RoadMap />
        {/* <Button className="mt-10" href="">Register</Button> */}
      </div>
      <ButtonGradient />
      <ToastContainer />
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<ProfileUpdate />} />
      </Routes> */}

    </>

  );
}

export default App;
