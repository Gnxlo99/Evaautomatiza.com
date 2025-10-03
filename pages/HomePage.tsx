import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <div className="max-w-3xl w-full animate-fade-in">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 font-display leading-tight">
            <span className="block">Tu negocio merece una web que funcione.</span>
            <span className="block mt-2 text-indigo-300">¿Cuál es tu prioridad AHORA?</span>
          </h1>
        </header>

        <main className="mb-10">
          <div className="space-y-4 max-w-lg mx-auto">
            {painPoints.map((pain) => (
              <button
                key={pain.id}
                onClick={() => handleSelect(pain.id)}
                className={`w-full text-left p-6 border-2 rounded-lg transition-all duration-200 ${
                  selectedPain === pain.id
                    ? 'bg-brand-accent border-indigo-400 shadow-lg scale-105'
                    : 'bg-brand-secondary border-gray-600 hover:bg-gray-600'
                }`}
              >
                <h3 className="font-bold text-xl text-white">{pain.title}</h3>
                <p className="text-gray-300">{pain.description}</p>
              </button>
            ))}
          </div>
        </main>

        <footer className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={handleContinue}
            disabled={!selectedPain}
            className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-lg py-4 px-12 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100"
          >
            [ CONTINUAR ]
          </button>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
