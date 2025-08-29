
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Quiz from './components/Quiz';
import ProfilePage from './pages/ProfilePage';
import BlogDroppingServices from './pages/BlogDroppingServices';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-brand-dark text-brand-light min-h-screen font-sans">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/generador" element={<Quiz />} />
          <Route path="/perfil/:profileId" element={<ProfilePage />} />
          <Route path="/blog/guia-dropping-services" element={<BlogDroppingServices />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;