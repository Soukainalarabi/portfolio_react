import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';

const Home = lazy(() => import('./pages/Home'));
const Projet = lazy(() => import('./components/Projet'));
const Projet2 = lazy(() => import('./components/Projet2'));

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projet" element={<Projet />} />
            <Route path="/projet2" element={<Projet2 />} />
          </Routes>
        </Suspense>
      </Router>
    </React.StrictMode>
  );
}

export default App;