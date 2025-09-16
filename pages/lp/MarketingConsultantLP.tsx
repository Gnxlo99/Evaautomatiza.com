import React from 'react';

const MarketingConsultantLP: React.FC = () => {
  return (
    <div className="bg-brand-dark text-white font-sans">
      {/* Hero Section */}
      <header className="bg-gray-900 text-center py-24 px-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-gray-900 opacity-80"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-6 font-display">
                Duplica Tus Ventas en 90 Días
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
                Deja de gastar en anuncios que no funcionan. Implementamos un sistema de marketing predecible que atrae clientes cualificados listos para comprar.
            </p>
            <a href="#cta" className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-base sm:text-lg py-3 px-6 sm:py-4 sm:px-10 rounded-lg shadow-lg shadow-indigo-500/30 transform transition-all duration-300 hover:scale-110">
                Agenda tu Auditoría Gratuita
            </a>
            <p className="mt-4 text-sm text-gray-400">100% Gratis y Sin Compromiso</p>
        </div>
      </header>

      {/* Problem & Solution Section */}
      <section className="py-20 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">¿Tu marketing actual se siente como tirar dinero a la basura?</h2>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                Inviertes en publicidad, publicas en redes sociales... pero los resultados son impredecibles. El problema no es tu esfuerzo, es la falta de un sistema probado.
            </p>
            <div className="bg-gray-800/50 border border-gray-700 p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
                <div className="relative">
                    <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400 mb-6 font-display">La Solución: Un Sistema de Adquisición de Clientes</h3>
                    <p className="text-lg text-gray-300">
                        Construimos un motor de crecimiento a medida para tu negocio. Nos enfocamos en 3 pilares: atraer el tráfico correcto, convertirlo en leads cualificados y nutrirlos hasta la venta. Es marketing con resultados medibles, no con esperanzas.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 font-display">Nuestro Sistema de Crecimiento en 3 Pasos</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-xl transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
                <div className="mb-4 inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500/10 text-indigo-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <h4 className="text-xl font-bold mb-3 font-display">1. SEO y Autoridad</h4>
                <p className="text-gray-400">Optimizamos tu web para que aparezcas primero en Google cuando tus clientes ideales buscan soluciones, atrayendo tráfico de alta calidad de forma orgánica.</p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-xl transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="mb-4 inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-500/10 text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
                </div>
              <h4 className="text-xl font-bold mb-3 font-display">2. Publicidad Rentable</h4>
              <p className="text-gray-400">Creamos campañas de anuncios ultra-segmentadas que convierten. Cada dólar invertido se traduce en un retorno medible, no en clics vacíos.</p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-xl transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
                <div className="mb-4 inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500/10 text-indigo-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /><path d="M12 18c-1.657 0-3-.895-3-2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2m0 8c1.11 0 2.08-.402 2.599-1M12 18v-1m0-11v.01" /></svg>
                </div>
              <h4 className="text-xl font-bold mb-3 font-display">3. Automatización y Nutrición</h4>
              <p className="text-gray-400">Implementamos sistemas de email marketing que convierten leads en clientes de forma automática, construyendo relaciones y confianza a escala.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-brand-dark">
        <div className="max-w-3xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
                <img src="/marketing-consultant-testimonial.png" alt="Juan Silva" className="w-24 h-24 object-cover rounded-full mx-auto mb-6 border-4 border-indigo-500" />
                <p className="text-xl italic text-gray-300 mb-6">"Pasamos de un marketing impredecible a un flujo constante de leads cualificados en menos de 60 días. No solo redujeron nuestro costo por lead en un 40%, sino que la calidad mejoró drásticamente. Imprescindibles."</p>
                <p className="font-bold text-white text-lg">- Juan Silva, CEO de TiendaTech</p>
            </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-24 px-4 text-center bg-gradient-to-r from-indigo-600 to-purple-600">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">¿Listo para Dejar de Adivinar y Empezar a Vender?</h2>
        <p className="text-xl text-indigo-200 max-w-3xl mx-auto mb-10">
          Agenda una llamada de 30 minutos sin costo. Analizaremos tu estrategia actual y te daremos un plan de acción claro para alcanzar tus objetivos. Sin compromiso, solo valor.
        </p>
        <a href="#cta" className="inline-block bg-white text-indigo-600 font-bold text-base sm:text-lg py-3 px-6 sm:py-4 sm:px-10 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-110">
          ¡Quiero mi Auditoría Gratuita!
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-brand-dark text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Consultoría Digital Pro. Todos los derechos reservados.</p>
        <a href="#" className="underline hover:text-white">Política de Privacidad</a>
      </footer>
    </div>
  );
};

export default MarketingConsultantLP;
