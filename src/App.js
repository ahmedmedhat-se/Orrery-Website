import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import News from './News';
import CosmicExplorer from './CosmicExplorer';
import PhaExplorer from './PhaExplorer';
import Workspace from "./Workspace.js";
import Userin from "./Userin.js";
import Footer from './Footer';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/homepage' element={<Homepage />}></Route>
          <Route path='/Orrery-Website' element={<Homepage />}></Route>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/galactic-pioneers' element={<Homepage />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/cosmic-explorer' element={<CosmicExplorer />}></Route>
          <Route path='/pha-explorer' element={<PhaExplorer />}></Route>
          <Route path="/workspace" element={<Workspace />}></Route>
          <Route path="/login" element={<Userin />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
