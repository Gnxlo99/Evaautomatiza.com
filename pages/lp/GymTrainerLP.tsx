import React from 'react';

const GymTrainerLP: React.FC = () => {
  return (
    <div className="bg-black text-white font-sans" style={{'--accent-color': '#F59E0B', '--accent-color-hover': '#D97706'} as React.CSSProperties}>
      {/* Hero Section */}
      <header 
        className="text-center py-24 px-4 relative flex items-center justify-center min-h-screen"
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <img src="/gym-hero-background.jpg" alt="Fondo de gimnasio con pesas" className="absolute inset-0 w-full h-full object-cover z-[-1]" />
        <div className="relative z-10 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 font-display tracking-wider uppercase">
                TRANSFORMA TU <span className="text-[var(--accent-color)]">CUERPO</span>.
            </h1>
             <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 font-display tracking-wider uppercase">
                TRANSFORMA TU <span className="text-[var(--accent-color)]">VIDA</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
                Nuestro programa de 12 semanas te da el plan, el apoyo y la motivación para lograr resultados reales y duraderos. Sin excusas.
            </p>
            <a href="#cta" className="bg-[var(--accent-color)] hover:bg-[var(--accent-color-hover)] text-black font-bold text-lg py-4 px-12 rounded-md shadow-lg shadow-yellow-500/30 transform transition-all duration-300 hover:scale-110 uppercase tracking-widest">
                Reserva tu Clase de Prueba GRATIS
            </a>
        </div>
      </header>

      {/* Problem & Solution Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display uppercase">¿Estancado <span className="text-[var(--accent-color)]">Sin Resultados</span>?</h2>
            <p className="text-lg text-gray-400 mb-4">
              Pasas horas en el gimnasio, sigues dietas restrictivas, pero la balanza y el espejo no cambian. El problema no es tu esfuerzo, es la falta de un plan que funcione para TI.
            </p>
             <p className="text-lg text-gray-400">
              Dejar de adivinar es el primer paso para empezar a ganar.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl border-t-4 border-[var(--accent-color)]">
            <h3 className="text-2xl font-bold text-white mb-4 font-display uppercase">La Solución: Entrenamiento <span className="text-[var(--accent-color)]">Inteligente</span></h3>
            <ul className="text-lg text-gray-300 space-y-4">
                <li className="flex items-start"><span className="text-[var(--accent-color)] font-bold mr-3">✔</span><span>Un plan a medida para tu cuerpo, estilo de vida y metas.</span></li>
                <li className="flex items-start"><span className="text-[var(--accent-color)] font-bold mr-3">✔</span><span>Nutrición flexible para que disfrutes del proceso.</span></li>
                <li className="flex items-start"><span className="text-[var(--accent-color)] font-bold mr-3">✔</span><span>Seguimiento constante para garantizar tu éxito.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-display uppercase">Tu <span className="text-[var(--accent-color)]">Camino al Éxito</span></h2>
            <div className="grid md:grid-cols-3 gap-10">
                <div className="text-center p-6">
                    <div className="relative mb-6">
                        <div className="text-6xl font-extrabold text-gray-800 font-display">01</div>
                        <h4 className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white font-display uppercase">Plan Personalizado</h4>
                    </div>
                    <p className="text-gray-400">Rutinas diseñadas para tus objetivos, maximizando cada minuto de tu esfuerzo para un progreso constante y sin lesiones.</p>
                </div>
                <div className="text-center p-6">
                    <div className="relative mb-6">
                        <div className="text-6xl font-extrabold text-gray-800 font-display">02</div>
                        <h4 className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white font-display uppercase">Nutrición Sostenible</h4>
                    </div>
                    <p className="text-gray-400">Aprende a comer de forma inteligente sin renunciar a tus comidas favoritas. Un plan que puedes mantener de por vida.</p>
                </div>
                <div className="text-center p-6">
                    <div className="relative mb-6">
                        <div className="text-6xl font-extrabold text-gray-800 font-display">03</div>
                        <h4 className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white font-display uppercase">Comunidad y Apoyo</h4>
                    </div>
                    <p className="text-gray-400">Acceso a nuestro grupo privado y a coaches 24/7 para mantenerte motivado y resolver tus dudas, rodeado de gente como tú.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <img src="/gym-trainer-testimonial.png" alt="Maria Fernanda" className="w-24 h-24 object-cover rounded-full mx-auto mb-6 border-4 border-[var(--accent-color)]" />
          <p className="text-xl italic text-gray-300 mb-6">"Pensé que a mis 40 ya era imposible recuperar mi figura. Este programa no solo me ayudó a perder 10 kilos, sino que me devolvió una energía que no sentía desde hace años. ¡Gracias por cambiar mi vida!"</p>
          <p className="font-bold text-white text-lg">- María Fernanda, Cliente Satisfecha</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-24 px-4 text-center bg-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-[var(--accent-color)] uppercase">Tu Transformación Empieza con un Clic</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          No esperes al próximo lunes. Tu primera clase es completamente gratis y sin compromiso. ¿Qué tienes que perder, además de tus excusas?
        </p>
        <a href="#cta" className="bg-[var(--accent-color)] hover:bg-[var(--accent-color-hover)] text-black font-bold text-lg py-4 px-12 rounded-md shadow-lg shadow-yellow-500/30 transform transition-all duration-300 hover:scale-110 uppercase tracking-widest">
          ¡Sí, Quiero mi Clase GRATIS!
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-gray-900 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Powerhouse Gym. Todos los derechos reservados.</p>
        <a href="#" className="underline hover:text-white">Política de Privacidad</a>
      </footer>
    </div>
  );
};

export default GymTrainerLP;
