import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="max-w-3xl mx-auto w-full text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-6 font-display leading-tight">
            Deja de Adivinar. Empieza a Convertir.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Me llamo Eva. Y durante años, vi a emprendedores brillantes con ideas increíbles fracasar por una razón simple: <strong>no sabían cómo conseguir clientes online.</strong>
          </p>
          <p className="text-lg text-gray-400 mb-6">
            Creaban webs complejas, se perdían en redes sociales y gastaban dinero en anuncios que no llevaban a ninguna parte. Su problema no era su producto. Su problema era que no tenían un sistema para convertir la atención en ingresos.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Creé <strong>Eva Automatiza</strong> para solucionar exactamente eso. No construyo webs de 20 páginas. Construyo máquinas de conversión: landing pages de alto rendimiento, diseñadas con un único objetivo en mente. Mi misión es darte la herramienta más rápida y efectiva para validar tu oferta y empezar a crecer.
          </p>
          <Link
            to="/comenzar"
            className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-lg py-3 px-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Obtén tu Diagnóstico Gratuito
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
