import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const processSteps = [
  {
    step: '01',
    title: 'Diagnóstico Rápido',
    description: 'Responde una única pregunta para que entendamos tu principal objetivo de negocio. Menos de 10 segundos.',
  },
  {
    step: '02',
    title: 'Solución a Medida',
    description: 'Te mostramos ejemplos de landing pages de alta conversión diseñadas específicamente para alcanzar metas como la tuya.',
  },
  {
    step: '03',
    title: 'Lanzamiento en 24h',
    description: 'Si te gusta lo que ves, solicita una muestra de diseño gratuita. Tu nueva landing page, lista en 24 horas.',
  }
];


const painPoints = [
  {
    id: 'autoridad',
    title: 'Quiero verme más profesional',
    description: 'Necesito una web que genere confianza al instante y me posicione como un experto en mi sector.',
  },
  {
    id: 'automatizacion',
    title: 'Quiero agendar citas en automático',
    description: 'Necesito un sistema que trabaje por mí, capturando datos o agendando reuniones 24/7.',
  },
  {
    id: 'venta',
    title: 'Quiero vender más',
    description: 'Necesito una página 100% enfocada en convertir visitantes en clientes para un producto o servicio.',
  }
];

const HomePage: React.FC = () => {
  const [selectedPain, setSelectedPain] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSelect = (painId: string) => {
    setSelectedPain(painId);
  };

  const handleContinue = () => {
    if (selectedPain) {
      navigate('/resultado', { state: { painPoint: selectedPain } });
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 font-display leading-tight">
            Descubre la Landing Page <br /> Perfecta para tu Negocio
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            No todas las páginas son iguales. Nuestro diagnóstico gratuito te muestra la estrategia y el diseño exacto que necesitas para convertir visitantes en clientes.
          </p>
        </header>

        <main className="space-y-16">
          <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold text-center mb-10 text-indigo-300 font-display">
              Nuestro Proceso en 3 Pasos
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {processSteps.map((step) => (
                <div key={step.step} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-indigo-400 font-display">{step.step}</span>
                    <h3 className="text-2xl font-bold text-white ml-3 font-display">{step.title}</h3>
                  </div>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 md:p-12 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-bold text-indigo-300 font-display mb-2">
              Paso 1: Empecemos el Diagnóstico
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              ¿Cuál es tu prioridad AHORA?
            </p>

            <div className="space-y-4 max-w-lg mx-auto mb-8">
              {painPoints.map((pain) => (
                <button
                  key={pain.id}
                  onClick={() => handleSelect(pain.id)}
                  className={`w-full text-left p-6 border-2 rounded-xl transition-all duration-300 transform ${
                    selectedPain === pain.id
                      ? 'bg-gray-700 border-indigo-500 shadow-lg scale-105'
                      : 'bg-brand-secondary border-gray-700 hover:bg-gray-600 hover:border-gray-500'
                  }`}
                >
                  <h3 className="font-bold text-xl text-white">{pain.title}</h3>
                  <p className="text-gray-300">{pain.description}</p>
                </button>
              ))}
            </div>

            <button
              onClick={handleContinue}
              disabled={!selectedPain}
              className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-lg py-4 px-12 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100"
            >
              Ver mi Solución &rarr;
            </button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
