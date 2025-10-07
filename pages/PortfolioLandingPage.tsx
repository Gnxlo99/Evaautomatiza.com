import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioItems } from '../data/portfolio';

// Data for new sections
const processSteps = [
  {
    step: '01',
    title: 'Diagnóstico Rápido',
    description: 'Responde una pregunta y recibe ejemplos de diseños probados para tu objetivo de negocio específico.',
  },
  {
    step: '02',
    title: 'Diseño Personalizado',
    description: 'Si te gusta lo que ves, solicita una muestra de diseño gratuita con tu logo y tus colores. Sin compromiso.',
  },
  {
    step: '03',
    title: 'Lanzamiento en 24h',
    description: 'Una vez aprobado el diseño, tu landing page de alta conversión estará online y lista para conseguir clientes en un día.',
  }
];

const benefits = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
        title: "Velocidad Imbatible",
        description: "En el mundo digital, la velocidad lo es todo. Tu landing page estará funcionando en 24 horas, permitiéndote validar ideas y capturar clientes sin demoras."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        title: "Enfoque en Conversión",
        description: "No solo creamos páginas bonitas. Aplicamos principios de psicología de ventas y diseño UX para construir páginas que convierten visitantes en clientes."
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: "Tecnología sin Estrés",
        description: "Nos encargamos de todo lo técnico: hosting, SEO básico y optimización. Tú te enfocas en lo que mejor sabes hacer: dirigir tu negocio."
    }
];

const PortfolioLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark">
       <section className="bg-gray-900 text-center pt-20 pb-16 px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-6 font-display">
            Lanza tu Negocio con una Landing Page de Alta Conversión
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Es la forma más rápida y efectiva de validar tu idea y empezar a conseguir clientes. Yo las construyo por ti.
          </p>
          <Link
            to="/comenzar"
            className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Obtener Diagnóstico Gratuito
          </Link>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-white font-display">
                    De la Idea al Cliente en 3 Simples Pasos
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
            </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gray-900">
            <div className="max-w-5xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-4 font-display">Más que una Página, un Sistema de Ventas</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                        Mi enfoque combina diseño estratégico, velocidad y una experiencia libre de complicaciones para darte la herramienta que necesitas para crecer.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map(benefit => (
                         <div key={benefit.title} className="bg-gray-800 p-8 rounded-lg flex flex-col items-start">
                             <div className="flex-shrink-0 h-14 w-14 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4">
                                {benefit.icon}
                             </div>
                             <h3 className="font-bold text-xl text-white mb-2">{benefit.title}</h3>
                             <p className="text-gray-400">{benefit.description}</p>
                         </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                Explora Diseños Probados para tu Nicho
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Cada plantilla es un punto de partida, personalizable para reflejar tu marca y optimizado para convertir a tus visitantes ideales.
                </p>
            </header>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {portfolioItems.sort((a,b) => a.id - b.id).map((item) => (
                <div key={item.id} className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-xl flex flex-col group transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="overflow-hidden">
                    <img src={item.imageUrl} alt={`Ejemplo de Landing Page para ${item.title}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 aspect-[16/10]" />
                    </div>
                    <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display group-hover:text-brand-accent transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-base mb-4 flex-grow" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                    
                    <div className="my-4">
                        <h4 className="font-bold text-brand-accent mb-2">Características Clave:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {item.keyFeatures.map((feature) => (
                            <li key={feature}>{feature}</li>
                        ))}
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {item.tags.map((tag) => (
                        <span key={tag} className="bg-gray-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">
                            {tag}
                        </span>
                        ))}
                    </div>
                    <div className="mt-auto">
                        <Link
                        to={item.liveUrl}
                        className="inline-block w-full text-center border-2 border-brand-accent text-brand-accent font-bold py-3 px-6 rounded-lg transition-colors duration-300 hover:bg-brand-accent hover:text-white"
                        >
                        Ver Ejemplo en Vivo
                        </Link>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-4 text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white">¿Listo para Dejar de Adivinar y Empezar a Vender?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                    El diagnóstico es gratuito y toma 30 segundos. Descubre la estrategia y el diseño exacto que tu negocio necesita para crecer.
                </p>
                <Link
                    to="/comenzar"
                    className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                >
                    Obtener Mi Diagnóstico Gratuito &rarr;
                </Link>
            </div>
        </section>
    </div>
  );
};

export default PortfolioLandingPage;
