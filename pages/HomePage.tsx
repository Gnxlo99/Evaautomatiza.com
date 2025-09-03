
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <div className="max-w-2xl w-full">
        <header className="mb-8 animate-fade-in-down">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-4 font-display">
            <span className="block">Basta de buscar.</span>
            <span className="block">Es hora de construir.</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
            No más "ideas millonarias". Un análisis de 90 segundos para encontrar el modelo de negocio online que vos podés empezar. Sin humo.
          </h2>
        </header>

        <main className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Tenés veintipico, un laburo que paga las cuentas pero te come el alma, y mil pestañas abiertas con "ideas de negocio" que nunca empezás. Sabés que la IA es una locura, pero no tenés idea de cómo usarla para algo tuyo. Estás en un bucle: investigás, te abrumás con opciones, no hacés nada. Y al día siguiente, el mismo problema otra vez. Yo estaba igual. Creé esta herramienta para romper ese ciclo.
          </p>
        </main>

        <footer className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <Link
            to="/generador"
            className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            [ ROMPER EL BUCLE ]
          </Link>
          <div className="mt-8">
            <Link to="/sobre" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Sobre esta herramienta
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;