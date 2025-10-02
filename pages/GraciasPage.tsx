import React from 'react';
import { Link } from 'react-router-dom';

const GraciasPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <div className="max-w-2xl w-full bg-gray-800 rounded-xl shadow-2xl p-8 md:p-12 animate-fade-in">
        <div className="mb-6">
            <svg className="w-20 h-20 text-green-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500 mb-4 font-display">
            ¡Gracias! Tu Muestra Personalizada está en camino.
        </h1>
        <p className="text-xl text-gray-300 mb-8">
            Hemos recibido tus datos correctamente. Nuestro equipo ya está revisando la información de tu marca.
        </p>
        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
            <h2 className="font-bold text-2xl text-white mb-3">¿Cuál es el siguiente paso?</h2>
            <p className="text-gray-400 text-lg">
                En las próximas horas, <strong>recibirás un mensaje de Gonzalo por WhatsApp</strong> con tu muestra de diseño y los siguientes pasos. Por favor, ¡revisa tu bandeja de entrada o WhatsApp!
            </p>
        </div>
        <div className="mt-10">
            <Link
                to="/blog"
                className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors duration-300"
            >
                Mientras esperas, conoce nuestro Blog &rarr;
            </Link>
        </div>
      </div>
    </div>
  );
};

export default GraciasPage;
