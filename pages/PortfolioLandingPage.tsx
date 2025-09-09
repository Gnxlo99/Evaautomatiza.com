import React from 'react';
import { Link } from 'react-router-dom';

const portfolioItems = [
  {
    id: 1,
    title: 'Landing Page para Consultor de Marketing',
    description: 'Página de alta conversión diseñada para capturar leads cualificados para servicios de consultoría. El enfoque está en establecer autoridad y mostrar resultados claros.',
    imageUrl: '/portfolio-marketing-consultant.png',
    liveUrl: '/portfolio/marketing-consultant',
    tags: ['Servicios', 'Generación de Leads', 'B2B'],
  },
  {
    id: 2,
    title: 'Landing Page para Gimnasio / Entrenador',
    description: 'Diseño energético y motivador enfocado en un llamado a la acción claro: la reserva de una clase de prueba. Se prioriza la prueba social con testimonios visuales.',
    imageUrl: '/portfolio-gym-trainer.png',
    liveUrl: '/portfolio/gym-trainer',
    tags: ['Negocio Local', 'Conversión', 'Salud y Bienestar'],
  },
  {
    id: 3,
    title: 'Landing Page para Software (SaaS)',
    description: 'Página limpia y moderna para una empresa de software, diseñada para comunicar características complejas de forma simple y conseguir registros para una prueba gratuita.',
    imageUrl: '/portfolio-saas.png',
    liveUrl: '/portfolio/saas',
    tags: ['SaaS', 'Tecnología', 'Prueba Gratuita'],
  },
  {
    id: 4,
    title: 'Landing Page para Agente Inmobiliario',
    description: 'Página elegante para promocionar una propiedad específica o captar vendedores. El diseño se centra en imágenes de alta calidad y en generar confianza.',
    imageUrl: '/portfolio-real-estate.png',
    liveUrl: '/portfolio/real-estate',
    tags: ['Bienes Raíces', 'Propiedades', 'Captación de Clientes'],
  },
  {
    id: 5,
    title: 'Landing Page para Coach de Negocios',
    description: 'Diseño premium y aspiracional para vender programas de coaching de alto valor. Se enfoca en la marca personal del coach y en los testimonios de éxito de sus clientes.',
    imageUrl: '/portfolio-business-coach.png',
    liveUrl: '/portfolio/business-coach',
    tags: ['Coaching', 'Marca Personal', 'Alto Valor'],
  },
  {
    id: 6,
    title: 'Landing Page para Manicurista',
    description: 'Diseño elegante y femenino para un estudio de uñas, enfocado en mostrar el arte del "nail art" y facilitar la reserva de citas online a través de un CTA claro.',
    imageUrl: '/portfolio-manicurist.png',
    liveUrl: '/portfolio/manicurist',
    tags: ['Estética', 'Reservas Online', 'Negocio Local'],
  },
  {
    id: 7,
    title: 'Landing Page para Abogado/a',
    description: 'Diseño sobrio y profesional para un despacho de abogados, enfocado en generar confianza y captar consultas legales a través de una propuesta de valor clara y testimonios.',
    imageUrl: '/portfolio-lawyer.png',
    liveUrl: '/portfolio/lawyer',
    tags: ['Servicios Legales', 'Confianza', 'Profesional'],
  },
];

const PortfolioLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-6 font-display">
            Portfolio: Landing Pages
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Una colección de landing pages funcionales y diseñadas a medida, enfocadas en la conversión y construidas para distintos nichos de mercado.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.sort((a,b) => a.id - b.id).map((item) => (
            <div key={item.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col group transform transition-transform duration-300 hover:-translate-y-2">
              <div className="overflow-hidden">
                <img src={item.imageUrl} alt={item.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 aspect-[16/10]" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold text-white mb-3 font-display group-hover:text-indigo-400 transition-colors">{item.title}</h2>
                <p className="text-gray-400 text-base mb-4 flex-grow">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag) => (
                    <span key={tag} className="bg-brand-secondary text-indigo-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <Link
                    to={item.liveUrl}
                    className="inline-block w-full text-center bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
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
