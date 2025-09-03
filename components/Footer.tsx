import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary border-t border-secondary">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-base text-medium">
              &copy; {new Date().getFullYear()} Eva Automatiza. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex justify-center space-x-6 flex-wrap">
             <Link to="/" className="text-medium hover:text-light transition-colors duration-300">
              Inicio
            </Link>
            <Link to="/blog" className="text-medium hover:text-light transition-colors duration-300">
              Blog
            </Link>
            <Link to="/portfolio/landing-pages" className="text-medium hover:text-light transition-colors duration-300">
              Portfolio
            </Link>
            <Link to="/politica-de-privacidad" className="text-medium hover:text-light transition-colors duration-300">
              Privacidad
            </Link>
            <Link to="/politica-de-cookies" className="text-medium hover:text-light transition-colors duration-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
