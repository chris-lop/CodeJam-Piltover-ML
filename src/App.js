import React, { useState } from 'react';
import Timer from './Timer';
import './App.css';
import Timer90Minutes from './Timer90Minutes';
import Timer5217rule from './Timer5217rule';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import HeroSection from './HeroSection';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <HeroSection />
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
          <Link to="Timer"><button className='btns' type="button">
          Pomodoro
     </button></Link>
          <Link to="90"><button className='btns' type="button">
          90 Minutes
     </button></Link>
          <Link to="5217"><button className='btns' type="button">
          52-17 Minutes
     </button></Link>
      <Outlet />
      </>
        }>
          <Route index element={<h1>Hello! Please select your timer</h1>} />
          <Route path="Timer" element={<Timer />} />
          <Route path="90" element={<Timer90Minutes />} />
          <Route path="5217" element={<Timer5217rule />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App;
