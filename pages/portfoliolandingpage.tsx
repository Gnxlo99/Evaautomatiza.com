import React from 'react';
import { Link } from 'react-router-dom';

const portfolioItems = [
  {
    id: 1,
    title: 'Landing Page para Consultor de Marketing',
    description: 'Página de alta conversión diseñada para capturar leads cualificados para servicios de consultoría. El enfoque está en establecer autoridad y mostrar resultados claros.',
    imageUrl: 'https://placehold.co/1280x800/1E293B/6366F1/png?text=Marketing\nConsultant',
    liveUrl: '/portfolio/marketing-consultant',
    tags: ['Servicios', 'Generación de Leads', 'B2B'],
  },
  {
    id: 2,
    title: 'Landing Page para Gimnasio / Entrenador',
    description: 'Diseño energético y motivador enfocado en un llamado a la acción claro: la reserva de una clase de prueba. Se prioriza la prueba social con testimonios visuales.',
    imageUrl: 'https://placehold.co/1280x800/1E293B/F59E0B/png?text=Gym+%26+Fitness',
    liveUrl: '/portfolio/gym-trainer',
    tags: ['Negocio Local', 'Conversión', 'Salud y Bienestar'],
  },
  {
    id: 3,
    title: 'Landing Page para Software (SaaS)',
    description: 'Página limpia y moderna para una empresa de software, diseñada para comunicar características complejas de forma simple y conseguir registros para una prueba gratuita.',
    imageUrl: 'https://placehold.co/1280x800/1E293B/34D399/png?text=SaaS+App',
    liveUrl: '/portfolio/saas',
    tags: ['SaaS', 'Tecnología', 'Prueba Gratuita'],
  },
  {
    id: 4,
    title: 'Landing Page para Agente Inmobiliario',
    description: 'Página elegante para promocionar una propiedad específica o captar vendedores. El diseño se centra en imágenes de alta calidad y en generar confianza.',
    imageUrl: 'https://placehold.co/1280x800/1E293B/F87171/png?text=Real+Estate',
    liveUrl: '/portfolio/real-estate',
    tags: ['Bienes Raíces', 'Propiedades', 'Captación de Clientes'],
  },
  {
    id: 5,
    title: 'Landing Page para Coach de Negocios',
    description: 'Diseño premium y aspiracional para vender programas de coaching de alto valor. Se enfoca en la marca personal del coach y en los testimonios de éxito de sus clientes.',
    imageUrl: 'https://placehold.co/1280x800/1E293B/A78BFA/png?text=Business+Coach',
    liveUrl: '/portfolio/business-coach',
    tags: ['Coaching', 'Marca Personal', 'Alto Valor'],
  },
];

const PortfolioLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 mb-6 font-display">
            Portfolio: Landing Pages
          </h1>
          <p className="text-xl text-medium max-w-3xl mx-auto">
            Una colección de landing pages funcionales y diseñadas a medida, enfocadas en la conversión y construidas para distintos nichos de mercado.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-secondary rounded-2xl overflow-hidden shadow-2xl flex flex-col group transform transition-all duration-300 hover:-translate-y-2 border border-slate-700 hover:border-accent">
              <div className="overflow-hidden aspect-video">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold text-light mb-3 font-display group-hover:text-accent transition-colors">{item.title}</h2>
                <p className="text-medium text-base mb-4 flex-grow">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag) => (
                    <span key={tag} className="bg-slate-700 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <Link
                    to={item.liveUrl}
                    className="inline-block w-full text-center bg-accent hover:bg-accent-hover text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Ver Landing Page
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioLandingPage;
