import React from 'react';

const MarketingConsultantLP: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-gray-900 to-gray-800 text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-indigo-400 mb-4 font-display">Duplica Tus Ventas en 90 Días</h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">Con nuestra estrategia de marketing digital probada, atraemos clientes cualificados que están listos para comprar.</p>
        <a href="#cta" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          Agenda tu Auditoría Gratuita
        </a>
      </header>

      {/* Problem & Solution Section */}
      <section className="py-20 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-display">¿Inviertes en anuncios sin ver retorno?</h2>
          <p className="text-lg text-gray-400 mb-10">
            Muchos negocios gastan miles en publicidad con la esperanza de atraer clientes, solo para terminar con clics vacíos y un presupuesto agotado. El problema no es la publicidad, es la falta de una estrategia integral.
          </p>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-indigo-400 mb-4 font-display">La Solución: Un Sistema Predecible de Adquisición de Clientes</h3>
            <p className="text-lg text-gray-300">
              Dejamos de adivinar. Creamos un sistema a medida para tu negocio que identifica a tu cliente ideal, lo atrae con contenido de valor y lo convierte a través de campañas optimizadas. Nosotros nos encargamos del marketing para que tú te enfoques en tu negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="bg-gray-800 p-6 rounded-lg transform transition-transform hover:-translate-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              <h4 className="text-xl font-bold mb-2 font-display">Optimización SEO</h4>
              <p className="text-gray-400"><strong>Característica:</strong> Analizamos y optimizamos tu web.<br/><strong>Beneficio:</strong> Apareces primero en Google cuando tus clientes te buscan, generando tráfico orgánico y gratuito.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transform transition-transform hover:-translate-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              <h4 className="text-xl font-bold mb-2 font-display">Campañas de Ads</h4>
              <p className="text-gray-400"><strong>Característica:</strong> Creamos y gestionamos campañas de pago.<br/><strong>Beneficio:</strong> Obtienes visibilidad inmediata y atraes a clientes con alta intención de compra desde el primer día.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transform transition-transform hover:-translate-y-2">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
              <h4 className="text-xl font-bold mb-2 font-display">Marketing de Contenidos</h4>
              <p className="text-gray-400"><strong>Característica:</strong> Producimos artículos de blog y guías.<br/><strong>Beneficio:</strong> Te posicionas como una autoridad, generando confianza y atrayendo clientes a largo plazo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <img src="/marketing-consultant-testimonial.png" alt="Juan Silva" className="w-24 h-24 object-cover rounded-full mx-auto mb-4" />
          <p className="text-lg italic text-gray-300 mb-4">"Antes de trabajar con ellos, nuestro costo por lead era altísimo. En solo 60 días, no solo redujeron el costo en un 40%, sino que la calidad de los leads mejoró drásticamente. ¡Totalmente recomendados!"</p>
          <p className="font-bold text-white">- Juan Silva, CEO de TiendaTech</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-20 px-4 text-center bg-indigo-900/50">
        <h2 className="text-3xl font-bold mb-4 font-display">¿Listo para Dejar de Adivinar y Empezar a Vender?</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Agenda una llamada de 30 minutos sin costo. Analizaremos tu estrategia actual y te daremos un plan de acción claro para alcanzar tus objetivos. Sin compromiso.
        </p>
        <a href="#cta" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          ¡Quiero mi Auditoría Gratuita!
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-brand-dark text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Consultoría Digital Pro. Todos los derechos reservados.</p>
        <a href="#" className="underline hover:text-white">Política de Privacidad</a>
      </footer>
    </div>
  );
};

export default MarketingConsultantLP;