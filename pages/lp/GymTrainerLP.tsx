import React from 'react';

const GymTrainerLP: React.FC = () => {
  return (
    <div className="bg-black text-white font-sans" style={{'--accent-color': '#F59E0B'} as React.CSSProperties}>
      {/* Hero Section */}
      <header 
        className="text-center py-20 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <img src="https://placehold.co/1920x1080/000000/F59E0B/png?text=." alt="Fondo de gimnasio" className="absolute inset-0 w-full h-full object-cover z-[-1]" />
        <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--accent-color)] mb-4 font-display tracking-wider uppercase">Transforma Tu Cuerpo. Transforma Tu Vida.</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">Únete a nuestro programa de 12 semanas y logra resultados reales y duraderos. Sin excusas. Solo resultados.</p>
            <a href="#cta" className="bg-[var(--accent-color)] hover:bg-yellow-600 text-black font-bold text-lg py-4 px-10 rounded-md shadow-lg transform transition-all duration-300 hover:scale-110 uppercase tracking-widest">
            ¡Reserva tu Clase de Prueba GRATIS!
            </a>
        </div>
      </header>

      {/* Problem & Solution Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-display uppercase">¿Cansado de entrenar sin ver progreso?</h2>
          <p className="text-lg text-gray-400 mb-10">
            Pasas horas en el gimnasio, sigues dietas restrictivas, pero la balanza y el espejo no mienten: estás estancado. El problema no es tu esfuerzo, es la falta de un plan que funcione para TI.
          </p>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl border-t-4 border-[var(--accent-color)]">
            <h3 className="text-2xl font-bold text-[var(--accent-color)] mb-4 font-display uppercase">La Solución: Entrenamiento Inteligente, Resultados Visibles</h3>
            <p className="text-lg text-gray-300">
              Nuestro método combina entrenamiento de alta intensidad, nutrición flexible y seguimiento constante para garantizar tu éxito. Dejamos de lado las soluciones genéricas y creamos un plan a medida para tu cuerpo, tu estilo de vida y tus metas.
            </p>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-[var(--accent-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
              <h4 className="text-xl font-bold mb-2 text-white font-display uppercase">Plan Personalizado</h4>
              <p className="text-gray-400"><strong>Característica:</strong> Rutinas diseñadas para tus objetivos.<br/><strong>Beneficio:</strong> Maximizas cada minuto, asegurando un progreso constante y evitando lesiones.</p>
            </div>
            <div className="p-6">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-[var(--accent-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <h4 className="text-xl font-bold mb-2 text-white font-display uppercase">Nutrición Flexible</h4>
              <p className="text-gray-400"><strong>Característica:</strong> Un plan de alimentación que se adapta a ti.<br/><strong>Beneficio:</strong> Aprendes a comer sano sin renunciar a tus comidas favoritas, haciendo el cambio sostenible.</p>
            </div>
            <div className="p-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-[var(--accent-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.283.356-1.857m0 0a3.001 3.001 0 015.688 0M12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>
              <h4 className="text-xl font-bold mb-2 text-white font-display uppercase">Comunidad 24/7</h4>
              <p className="text-gray-400"><strong>Característica:</strong> Acceso a nuestro grupo privado y coaches.<br/><strong>Beneficio:</strong> Te mantienes motivado y resuelves tus dudas al instante, rodeado de gente como tú.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <img src="https://placehold.co/100x100/F59E0B/000000/png?text=MF" alt="Maria Fernanda" className="rounded-full mx-auto mb-4 border-4 border-[var(--accent-color)]" />
          <p className="text-lg italic text-gray-300 mb-4">"Pensé que a mis 40 ya era imposible recuperar mi figura. Este programa no solo me ayudó a perder 10 kilos, sino que me devolvió una energía que no sentía desde hace años. ¡Gracias por cambiar mi vida!"</p>
          <p className="font-bold text-white">- María Fernanda, Cliente Satisfecha</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-20 px-4 text-center bg-black">
        <h2 className="text-3xl font-bold mb-4 font-display text-[var(--accent-color)] uppercase">Tu Transformación Empieza con un Clic</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          No esperes al próximo lunes. Tu primera clase es completamente gratis y sin compromiso. ¿Qué tienes que perder, además de tus excusas?
        </p>
        <a href="#cta" className="bg-[var(--accent-color)] hover:bg-yellow-600 text-black font-bold text-lg py-4 px-10 rounded-md shadow-lg transform transition-all duration-300 hover:scale-110 uppercase tracking-widest">
          ¡Sí, Quiero mi Clase GRATIS!
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-900 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Powerhouse Gym. Todos los derechos reservados.</p>
        <a href="#" className="underline hover:text-white">Política de Privacidad</a>
      </footer>
    </div>
  );
};

export default GymTrainerLP;