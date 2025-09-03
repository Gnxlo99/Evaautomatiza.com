import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center p-4 overflow-hidden">
      <div className="max-w-3xl w-full">
        <header className="mb-8">
          <h1 
            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 mb-6 font-display animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="block">Basta de buscar.</span>
            <span className="block">Es hora de construir.</span>
          </h1>
          <h2 
            className="text-xl md:text-2xl text-medium font-medium animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Análisis de 90 segundos para encontrar el modelo de negocio online que <span className="text-light">vos</span> podés empezar. Sin humo.
          </h2>
        </header>

        <main 
          className="mb-10 animate-fade-in-up" 
          style={{ animationDelay: '0.6s' }}
        >
          <p className="text-medium text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Tenés veintipico, un laburo que paga las cuentas pero te come el alma, y mil pestañas abiertas con "ideas de negocio" que nunca empezás. Sabés que la IA es una locura, pero no tenés idea de cómo usarla para algo tuyo. Estás en un bucle: investigás, te abrumás con opciones, no hacés nada. Y al día siguiente, el mismo problema otra vez. Creé esta herramienta para romper ese ciclo.
          </p>
        </main>

        <footer 
          className="animate-fade-in-up" 
          style={{ animationDelay: '0.8s' }}
        >
          <Link
            to="/generador"
            className="inline-block bg-accent hover:bg-accent-hover text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            [ ROMPER EL BUCLE ]
          </Link>
          <div className="mt-8">
            <Link to="/sobre" className="text-medium hover:text-light transition-colors duration-300 text-sm">
              Sobre esta herramienta
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
