import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="max-w-3xl mx-auto w-full text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 mb-8 font-display leading-tight">
            Claridad en el Caos.
          </h1>
          <div className="space-y-6 text-lg md:text-xl text-medium leading-relaxed">
            <p>
              Me llamo Eva. Y creé esta herramienta por una razón muy simple: <strong>estaba harta</strong>.
            </p>
            <p>
              Harta de tener veintipico, un trabajo que pagaba las cuentas pero me comía el alma, y mil pestañas abiertas con "ideas de negocio" que nunca empezaba. Estaba atrapada en un bucle: investigar, abrumarme con opciones, no hacer nada. Y al día siguiente, el mismo problema otra vez.
            </p>
            <p className="text-light">
              Esta herramienta es mi respuesta. Es <strong>un filtro, no un motor de ideas</strong>. En lugar de darte 100 opciones genéricas, he destilado 10 arquetipos de emprendedores digitales reales y sostenibles. Mi misión es darte un punto de partida claro y accionable para que dejes de buscar y, de una vez por todas, empieces a construir.
            </p>
          </div>
          <div className="mt-12">
            <Link
              to="/generador"
              className="inline-block bg-accent hover:bg-accent-hover text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              &larr; Volver al test
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
