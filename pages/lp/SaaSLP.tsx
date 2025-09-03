import React from 'react';

const SaaSLP: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="text-center py-20 px-4 bg-gray-50">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-display">Gestiona Tus Proyectos Sin Esfuerzo</h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">SyncFlow es la herramienta todo-en-uno que tu equipo amará. Centraliza tareas, comunicación y archivos en un solo lugar.</p>
        <a href="#cta" className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          Empieza tu Prueba Gratuita de 14 Días
        </a>
         <p className="text-sm text-gray-500 mt-4">Sin tarjeta de crédito. Cancela en cualquier momento.</p>
      </header>

      {/* Problem & Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-display text-gray-900">¿Cansado de usar 5 herramientas diferentes?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Hojas de cálculo, chats, gestores de tareas, email... El caos de cambiar entre aplicaciones mata la productividad y hace que la información importante se pierda. Tu equipo pierde tiempo buscando, no trabajando.
          </p>
          <div className="bg-gray-100 p-8 rounded-lg shadow-xl">
             <img src="https://placehold.co/800x450/E5E7EB/34D399/png?text=SyncFlow+UI" alt="Dashboard de SyncFlow" className="rounded-lg shadow-md mx-auto mb-6 border border-gray-200" />
            <h3 className="text-2xl font-bold text-green-600 mb-4 font-display">La Solución: Tu Centro de Mando Unificado</h3>
            <p className="text-lg text-gray-700">
             SyncFlow reúne todo lo que necesitas para llevar un proyecto de principio a fin. Desde la idea inicial hasta la entrega final, todo tu equipo trabaja en sincronía, en la misma plataforma.
            </p>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="p-6 flex items-start space-x-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1 font-display text-gray-900">Tareas Colaborativas</h4>
                <p className="text-gray-600"><strong>Beneficio:</strong> Todos saben qué hacer y para cuándo, eliminando la confusión y los cuellos de botella.</p>
              </div>
            </div>
            <div className="p-6 flex items-start space-x-4">
               <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1 font-display text-gray-900">Seguimiento del Tiempo</h4>
                <p className="text-gray-600"><strong>Beneficio:</strong> Entiende la rentabilidad de tus proyectos y optimiza la distribución de recursos de tu equipo.</p>
              </div>
            </div>
            <div className="p-6 flex items-start space-x-4">
               <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1 font-display text-gray-900">Reportes Automáticos</h4>
                <p className="text-gray-600"><strong>Beneficio:</strong> Toma decisiones basadas en datos reales y mantén a tus clientes informados sin esfuerzo manual.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <img src="https://placehold.co/100x100/1F2937/FFFFFF/png?text=LA" alt="Laura Álvarez" className="rounded-full mx-auto mb-4" />
          <p className="text-lg italic text-gray-700 mb-4">"SyncFlow ha revolucionado nuestra forma de trabajar. Hemos reducido nuestras reuniones a la mitad y la productividad ha aumentado un 30%. Es la primera herramienta que todo el equipo ha adoptado sin quejas."</p>
          <p className="font-bold text-gray-900">- Laura Álvarez, Project Manager en Innovatech</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-20 px-4 text-center bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-4 font-display">Deja el Caos Atrás. Empieza a Construir.</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Únete a más de 10,000 equipos que ya confían en SyncFlow para entregar sus proyectos a tiempo y dentro del presupuesto.
        </p>
        <a href="#cta" className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          Empieza tu Prueba Gratuita AHORA
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-100 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} SyncFlow Inc. Todos los derechos reservados.</p>
        <a href="#" className="underline hover:text-gray-800">Política de Privacidad</a>
      </footer>
    </div>
  );
};

export default SaaSLP;