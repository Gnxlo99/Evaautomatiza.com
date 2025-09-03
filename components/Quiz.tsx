import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { profiles } from '../data/profiles';
import { Profile } from '../types';

const questions = [
  {
    text: 'Inversión: ¿Con cuánta plata contás para arrancar?',
    options: ['Cero', 'Menos de $100.000', 'Más de $100.000'],
    scores: {
      'Cero': ['gestor-de-proyectos', 'curador-estrategico', 'creador-de-soluciones', 'editor-con-ia', 'consultor-especialista', 'moderador-de-comunidades'],
      'Menos de $100.000': ['arquitecto-digital', 'conector-de-oportunidades', 'mercader-digital'],
      'Más de $100.000': ['operador-de-ecommerce'],
    }
  },
  {
    text: 'Dedicación: Siendo realista, ¿cuántas horas a la semana puedes dedicarle?',
    options: ['1-5', '5-15', 'Más de 15'],
    scores: {
        '1-5': ['curador-estrategico', 'mercader-digital', 'creador-de-soluciones'],
        '5-15': ['gestor-de-proyectos', 'arquitecto-digital', 'editor-con-ia', 'consultor-especialista'],
        'Más de 15': ['conector-de-oportunidades', 'operador-de-ecommerce', 'moderador-de-comunidades'],
    }
  },
  {
    text: 'Fortaleza: ¿Con qué te sientes más cómodo?',
    options: ['Organizando y gestionando', 'Analizando e investigando', 'Creando sistemas', 'Contacto uno a uno'],
    scores: {
        'Organizando y gestionando': ['gestor-de-proyectos'],
        'Analizando e investigando': ['curador-estrategico'],
        'Creando sistemas': ['arquitecto-digital'],
        'Contacto uno a uno': ['conector-de-oportunidades', 'consultor-especialista'],
    }
  },
  {
    text: 'Riesgo: ¿Qué tan cómodo te sientes con la incertidumbre?',
    options: ['Prefiero un ingreso lento pero seguro', 'Dispuesto a arriesgar un poco', 'Busco el mayor potencial'],
    scores: {
        'Prefiero un ingreso lento pero seguro': ['consultor-especialista', 'moderador-de-comunidades', 'curador-estrategico'],
        'Dispuesto a arriesgar un poco': ['gestor-de-proyectos', 'arquitecto-digital', 'creador-de-soluciones', 'editor-con-ia', 'operador-de-ecommerce'],
        'Busco el mayor potencial': ['conector-de-oportunidades', 'mercader-digital'],
    }
  },
  {
    text: 'Interés: ¿Qué área te genera más curiosidad?',
    options: ['Servicios y Clientes', 'Contenido e Información', 'Productos Digitales', 'Activos e Inversiones'],
    scores: {
        'Servicios y Clientes': ['gestor-de-proyectos', 'conector-de-oportunidades', 'consultor-especialista'],
        'Contenido e Información': ['curador-estrategico', 'editor-con-ia'],
        'Productos Digitales': ['arquitecto-digital', 'creador-de-soluciones', 'moderador-de-comunidades'],
        'Activos e Inversiones': ['mercader-digital', 'operador-de-ecommerce'],
    }
  },
];

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowEmailForm(true);
    }
  };

  const calculateProfile = (): Profile | undefined => {
    const scores: { [key: string]: number } = {};
    profiles.forEach(p => scores[p.id] = 0);

    answers.forEach((answer, index) => {
      const question = questions[index];
      const affectedProfiles = question.scores[answer as keyof typeof question.scores];
      if (affectedProfiles) {
        affectedProfiles.forEach(profileId => {
          const points = index === 2 ? 3 : 1;
          scores[profileId] = (scores[profileId] || 0) + points;
        });
      }
    });
    
    const sortedProfiles = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topProfileId = sortedProfiles[0][0];
    return profiles.find(p => p.id === topProfileId);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = calculateProfile();
    if (!result) {
        console.error("No se pudo calcular el perfil.");
        setIsSubmitting(false);
        return;
    }

    const ID_DEL_GRUPO_GENERICO = '164355959067509824';

    if (email) {
        try {
            await fetch('/.netlify/functions/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    groupId: ID_DEL_GRUPO_GENERICO,
                }),
            });
            console.log('Solicitud de suscripción enviada para:', email);
        } catch (error) {
            console.error('Falló la llamada a la función de Netlify:', error);
        }
    }
    
    navigate(`/perfil/${result.id}`);
  };

  const progress = ((currentQuestionIndex + (showEmailForm ? 1 : 0)) / (questions.length + 1)) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] p-4">
      <div className="max-w-2xl w-full bg-secondary rounded-2xl shadow-2xl p-6 md:p-8 transition-all duration-500 border border-slate-700">
        <div className="w-full bg-slate-700 rounded-full h-4 mb-8">
          <div 
            className="bg-gradient-to-r from-accent to-purple-500 h-4 rounded-full flex items-center justify-end" 
            style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}
          >
             <span className="text-xs font-bold text-white pr-2">{`${Math.round(progress)}%`}</span>
          </div>
        </div>

        {!showEmailForm ? (
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-light font-display">{questions[currentQuestionIndex].text}</h2>
            <div className="flex flex-col gap-4">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full bg-slate-700 hover:bg-accent text-light font-semibold py-4 px-5 rounded-lg transition-all duration-300 text-left transform hover:scale-105"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-fade-in text-center">
            <h2 className="text-3xl font-bold mb-2 text-light font-display">Tu plan de acción está listo.</h2>
            <h3 className="text-2xl font-bold mb-4 text-accent font-display">¿Dónde lo envío?</h3>
            <p className="text-medium mb-6">
              Recibirás una copia de tu análisis detallado para que la tengas siempre a mano. Cero spam. Podrás ver tu hoja de ruta completa al instante.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu.email@ejemplo.com"
                required
                disabled={isSubmitting}
                className="bg-slate-700 border border-slate-600 text-light rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 px-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 disabled:bg-slate-600 disabled:cursor-not-allowed disabled:scale-100"
              >
                {isSubmitting ? 'ENVIANDO...' : '[ VER MI PLAN DE ACCIÓN ]'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
