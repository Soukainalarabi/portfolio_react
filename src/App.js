import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Projet2 from "./components/Projet2"
import Projet from './components/Projet';
import Navigation from './components/navigation/Navigation';

export default function App() {
  return (
    <React.StrictMode>
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projet" element={<Projet/>}/>
          <Route path="/projet2" element={<Projet2/>}/>
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

