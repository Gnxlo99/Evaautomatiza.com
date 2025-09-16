import React from 'react';

const SaaSLP: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="text-center py-24 px-4 bg-gray-50">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-display leading-tight">
          Gestiona Tus Proyectos, <br /> No Tus Herramientas
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
          SyncFlow es la plataforma todo-en-uno que tu equipo necesita para colaborar sin fricción. Centraliza tareas, comunicación y archivos en un solo lugar.
        </p>
        <div className="flex justify-center items-center gap-4">
            <a href="#cta" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-base sm:text-lg py-3 px-6 sm:py-4 sm:px-10 rounded-lg shadow-lg shadow-green-500/30 transform transition-transform duration-300 hover:scale-105">
                Empieza tu Prueba Gratuita
            </a>
        </div>
         <p className="text-sm text-gray-500 mt-4">14 días gratis. Sin tarjeta de crédito. Cancela en cualquier momento.</p>
      </header>
      
      {/* Trusted by Section */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider">CONFIAN EN NOSOTROS MÁS DE 10.000 EQUIPOS</p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-60">
            {/* Replace with actual client logos */}
            <span className="font-display font-bold text-xl">Innovatech</span>
            <span className="font-display font-bold text-xl">QuantumLeap</span>
            <span className="font-display font-bold text-xl">Apex Solutions</span>
            <span className="font-display font-bold text-xl">NextGen Co.</span>
            <span className="font-display font-bold text-xl">BrightMinds</span>
          </div>
        </div>
      </div>

      {/* Problem & Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-gray-900">El Caos de Múltiples Apps Mata Tu Productividad</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Hojas de cálculo, chats, gestores de tareas, email... Cambiar de contexto constantemente hace que la información se pierda y tu equipo pierda el foco.
          </p>
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-300 rounded-lg -rotate-2 transform shadow-2xl"></div>
             <img src="/saas-ui-mockup.png" alt="Dashboard de SyncFlow" className="relative rounded-lg shadow-2xl mx-auto border border-gray-200" />
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 font-display text-gray-900">Todo lo que tu equipo necesita para triunfar</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-green-500">
                <h4 className="text-xl font-bold mb-2 font-display text-gray-900">Gestión de Tareas Visual</h4>
                <p className="text-gray-600">Organiza el trabajo en tableros Kanban, listas o calendarios. Todos saben qué hacer y para cuándo, eliminando la confusión.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-green-500">
                <h4 className="text-xl font-bold mb-2 font-display text-gray-900">Comunicación Centralizada</h4>
                <p className="text-gray-600">Comenta directamente en las tareas, crea canales de equipo y olvídate de los hilos de email interminables. La información siempre en contexto.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-green-500">
                <h4 className="text-xl font-bold mb-2 font-display text-gray-900">Reportes de Progreso</h4>
                <p className="text-gray-600">Dashboards automáticos que te muestran el estado de tus proyectos en tiempo real. Toma decisiones basadas en datos, no en suposiciones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <img src="/saas-testimonial.png" alt="Laura Álvarez" className="w-24 h-24 object-cover rounded-full mx-auto mb-6" />
          <p className="text-xl italic text-gray-700 mb-6 leading-relaxed">"SyncFlow ha revolucionado nuestra forma de trabajar. Hemos reducido nuestras reuniones a la mitad y la productividad ha aumentado un 30%. Es la primera herramienta que todo el equipo ha adoptado sin quejas."</p>
          <p className="font-bold text-gray-900 text-lg">- Laura Álvarez, Project Manager en Innovatech</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-24 px-4 text-center bg-gray-900 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Deja el Caos Atrás. Empieza a Construir.</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Únete a los equipos de alto rendimiento que ya confían en SyncFlow para entregar sus proyectos a tiempo y dentro del presupuesto.
        </p>
        <a href="#cta" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-base sm:text-lg py-3 px-6 sm:py-4 sm:px-10 rounded-lg shadow-lg shadow-green-500/30 transform transition-transform duration-300 hover:scale-105">
          Empieza tu Prueba Gratuita AHORA
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-gray-100 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} SyncFlow Inc. Todos los derechos reservados.</p>
        <a href="#" className="underline hover:text-gray-800">Política de Privacidad</a>
      </footer>
    </div>
  );
};

export default SaaSLP;
