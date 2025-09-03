import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const activeLinkStyle = {
    color: '#E2E8F0', // light
    backgroundImage: 'linear-gradient(to right, #6366F1, #A855F7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <header className="bg-primary/80 backdrop-blur-sm sticky top-0 z-50 border-b border-secondary">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 hover:opacity-80 transition-opacity font-display">
              Eva Automatiza
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <NavLink
                to="/"
                end
                className="text-medium hover:text-light px-3 py-2 rounded-md text-sm font-semibold transition-colors"
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              >
                Inicio
              </NavLink>
              <NavLink
                to="/blog"
                className="text-medium hover:text-light px-3 py-2 rounded-md text-sm font-semibold transition-colors"
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              >
                Blog
              </NavLink>
              <NavLink
                to="/portfolio/landing-pages"
                className="text-medium hover:text-light px-3 py-2 rounded-md text-sm font-semibold transition-colors"
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/sobre"
                className="text-medium hover:text-light px-3 py-2 rounded-md text-sm font-semibold transition-colors"
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              >
                Sobre Eva
              </NavLink>
              <NavLink
                to="/contacto"
                className="text-medium hover:text-light px-3 py-2 rounded-md text-sm font-semibold transition-colors"
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              >
                Contacto
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
