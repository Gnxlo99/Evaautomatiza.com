import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioItems } from '../data/portfolio';

const PortfolioLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
       {/* New Hero/CTA Section */}
       <section className="bg-gray-900 text-center py-20 px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-6 font-display">
            ¿Listo para lanzar tu negocio en 24 horas?
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Una landing page de alta conversión es la forma más rápida y efectiva de validar tu idea y empezar a conseguir clientes. Yo las construyo por ti.
          </p>
          <Link
            to="/comenzar"
            className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Obtener Diagnóstico Gratuito
          </Link>
        </section>

      <div className="p-4 sm:p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Mi Portfolio: Plantillas de Landing Pages que Convierten
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Una colección de diseños funcionales y personalizables, enfocados en generar resultados para distintos nichos de mercado.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.sort((a,b) => a.id - b.id).map((item) => (
              <div key={item.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col group transform transition-transform duration-300 hover:-translate-y-2 border border-transparent hover:border-indigo-500/50">
                <div className="overflow-hidden">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 aspect-[16/10]" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 font-display group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-base mb-4 flex-grow" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                  
                  <div className="my-4">
                    <h4 className="font-bold text-indigo-300 mb-2">Características Clave:</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      {item.keyFeatures.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

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
                      className="inline-block w-full text-center bg-brand-secondary hover:bg-brand-accent text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Ver Ejemplo en Vivo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLandingPage;
