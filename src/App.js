import React, { lazy, Suspense } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';

const Home = lazy(() => import('./pages/Home'));
const Projet = lazy(() => import('./pages/Projet'));
const Projet2 = lazy(() => import('./pages/Projet2'));

export default function App() {
  return (
    <React.StrictMode>
      <HashRouter>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projet" element={<Projet />} />
            <Route path="/projet2" element={<Projet2 />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </React.StrictMode>
  );
}