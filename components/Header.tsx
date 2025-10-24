import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const activeLinkStyle = {
    textDecoration: 'underline',
    textDecorationColor: '#818CF8', // indigo-400
    textUnderlineOffset: '4px',
    color: 'white',
  };

  return (
    <header className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-700/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 hover:opacity-80 transition-opacity">
              Eva Automatiza
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              >
                Inicio
              </NavLink>
              <NavLink
                to="/comenzar"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              >
                Diagnóstico Gratuito
              </NavLink>
              <NavLink
                to="/blog"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              >
                Blog
              </NavLink>
              <NavLink
                to="/sobre"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              >
                Sobre Eva
              </NavLink>
              <NavLink
                to="/contacto"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
