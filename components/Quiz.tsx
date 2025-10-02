import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const quizQuestions = [
  {
    id: 1,
    text: '¿Cuál es el objetivo principal que buscas con una nueva presencia online?',
    options: [
      { text: 'Conseguir más clientes o agendar más citas.' },
      { text: 'Establecer mi marca y mostrar mi trabajo profesionalmente.' },
      { text: 'Vender productos o servicios directamente online.' },
      { text: 'Validar una idea de negocio antes de invertir más.' },
    ],
  },
  {
    id: 2,
    text: '¿A quién te diriges principalmente?',
    options: [
        { text: 'A clientes locales en mi ciudad o región.' },
        { text: 'A un público nacional o internacional.' },
        { text: 'A otras empresas (B2B).' },
        { text: 'Aún no estoy seguro, necesito ayuda para definirlo.' },
    ],
  },
  {
    id: 3, // This is the classifier
    text: 'Finalmente, ¿cuál de estas opciones describe mejor tu situación actual?',
    options: [
      { text: 'Tengo una idea o un negocio, pero no tengo una web y no sé por dónde empezar.', stage: 'stage3' },
      { text: 'Ya sé que necesito una web profesional y estoy evaluando opciones para construirla.', stage: 'stage4' },
      { text: 'Necesito lanzar YA. Estoy decidido a invertir en una página que me traiga clientes.', stage: 'stage5' },
    ],
  },
];


const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [key, setKey] = useState(0); // For re-triggering animations
  const navigate = useNavigate();

  useEffect(() => {
    setProgress(((currentQuestionIndex) / quizQuestions.length) * 100);
  }, [currentQuestionIndex]);

  const handleAnswer = (option: { text: string; stage?: string }) => {
    setIsAnswered(true);
    setProgress(((currentQuestionIndex + 1) / quizQuestions.length) * 100);

    const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

    setTimeout(() => {
        if (isLastQuestion && option.stage) {
            navigate('/resultado', { state: { stage: option.stage } });
        } else {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setIsAnswered(false);
            setKey(prevKey => prevKey + 1); // Change key to re-mount the question component
        }
    }, 500);
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-2xl w-full bg-gray-800 rounded-xl shadow-2xl p-6 md:p-8 transition-all duration-500">
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-6">
          <div 
            className="bg-brand-accent h-2.5 rounded-full" 
            style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}
          ></div>
        </div>

        <div key={key} className="animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-100 font-display">{currentQuestion.text}</h2>
          <div className="flex flex-col gap-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={isAnswered}
                className="w-full bg-brand-secondary hover:bg-brand-accent text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 text-left disabled:bg-brand-accent disabled:opacity-75"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
