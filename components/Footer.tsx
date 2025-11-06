import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2 flex-wrap">
             <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
              Inicio
            </Link>
            <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">
              Portafolio
            </Link>
            <Link to="/comenzar" className="text-gray-400 hover:text-white transition-colors duration-300">
              Descubre tu Perfil
            </Link>
            <Link to="/blog" className="text-gray-400 hover:text-white transition-colors duration-300">
              Blog
            </Link>
            <Link to="/sobre" className="text-gray-400 hover:text-white transition-colors duration-300">
              Sobre Eva
            </Link>
             <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors duration-300">
              Contacto
            </Link>
            <Link to="/politica-de-privacidad" className="text-gray-400 hover:text-white transition-colors duration-300">
              Política de Privacidad
            </Link>
            <Link to="/politica-de-cookies" className="text-gray-400 hover:text-white transition-colors duration-300">
              Política de Cookies
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-500">
              &copy; {new Date().getFullYear()} Eva Automatiza. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
