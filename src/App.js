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
          Focus Blocks
     </button></Link>
          <Link to="5217"><button className='btns' type="button">
          52-17 Rule
     </button></Link>
      <Outlet />
      </>
        }>
          <Route index element={<div>
          <h1 className="selectionApp">Let's study.</h1>
        <p1 className="selectionDescription">Start by choosing a timer</p1>
        </div>
        } />
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
