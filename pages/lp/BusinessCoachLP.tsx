import React from 'react';

const BusinessCoachLP: React.FC = () => {
  return (
    <div className="bg-black text-white font-sans" style={{'--accent-color': '#D4AF37', '--accent-color-hover': '#E5C100'} as React.CSSProperties}>
      {/* Hero Section */}
      <header className="text-center py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent z-10"></div>
        <div className="absolute inset-0 business-coach-hero-gradient"></div>
        <div className="relative z-20">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 font-display leading-tight">
                Escala tu Negocio de 6 a <span className="text-[var(--accent-color)]">7 Cifras</span> Anuales
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
                Mi programa de coaching <strong className="font-semibold text-white">ACCELERATOR</strong> te da el mapa, los sistemas y la mentalidad para romper tus barreras de crecimiento y convertirte en un verdadero CEO.
            </p>
            <a href="#cta" className="border-2 border-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-black text-[var(--accent-color)] font-bold text-lg py-4 px-12 rounded-lg shadow-lg shadow-yellow-500/20 transform transition-all duration-300 hover:scale-105">
                Aplica a una Sesión Estratégica
            </a>
            <p className="text-sm text-gray-500 mt-4">Plazas muy limitadas. Solo para fundadores ambiciosos.</p>
        </div>
      </header>

      {/* Problem & Solution Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">¿Atrapado en el <span className="text-gray-500">"Humedal del Emprendedor"</span>?</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Trabajas más que nunca, pero tus ingresos están estancados. Eres el cuello de botella de tu propio negocio, ahogado en el día a día sin tiempo para la estrategia. Sabes que hay un siguiente nivel, pero no tienes el mapa para llegar.
          </p>
          <div className="bg-gray-800 p-8 md:p-12 rounded-lg shadow-xl border-l-4 border-[var(--accent-color)] text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display">La Solución: De <span className="text-gray-400">Emprendedor</span> a <span className="text-[var(--accent-color)]">CEO</span></h3>
            <p className="text-lg text-gray-300">
             El crecimiento exponencial no viene de trabajar más duro, sino de instalar sistemas. Te ayudo a implementar las palancas de crecimiento en marketing, ventas y operaciones que te liberarán del trabajo operativo para que te enfoques en escalar tu imperio.
            </p>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 font-display">El Sistema <span className="text-[var(--accent-color)]">Accelerator</span></h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 border border-gray-800 rounded-lg bg-gray-900/50 hover:border-[var(--accent-color)]/50 transition-colors">
              <h4 className="text-xl font-bold mb-3 font-display text-white">Sesiones Estratégicas 1-a-1</h4>
              <p className="text-gray-400">Obtienes un plan de acción a medida para tus desafíos más grandes, eliminando las conjeturas y acelerando tus resultados.</p>
            </div>
            <div className="p-8 border border-gray-800 rounded-lg bg-gray-900/50 hover:border-[var(--accent-color)]/50 transition-colors">
              <h4 className="text-xl font-bold mb-3 font-display text-white">Comunidad de Élite</h4>
              <p className="text-gray-400">Accedes a una red de contactos privada con otros emprendedores de 6-7 cifras, creando oportunidades de colaboración y aprendizaje de alto nivel.</p>
            </div>
            <div className="p-8 border border-gray-800 rounded-lg bg-gray-900/50 hover:border-[var(--accent-color)]/50 transition-colors">
              <h4 className="text-xl font-bold mb-3 font-display text-white">Playbooks de Escalado</h4>
              <p className="text-gray-400">Obtienes acceso a mi biblioteca de sistemas probados (SOPs, plantillas, checklists) para que no tengas que reinventar la rueda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <img src="/business-coach-testimonial.png" alt="Sofía Castro" className="w-24 h-24 object-cover rounded-full mx-auto mb-6 border-2 border-[var(--accent-color)]" />
          <p className="text-xl italic text-gray-300 mb-6 leading-relaxed">"Estaba estancada en $10k al mes y completamente quemada. En seis meses con él, no solo tripliqué mis ingresos, sino que ahora trabajo la mitad de horas. Su sistema no solo escaló mi negocio, me devolvió la libertad."</p>
          <p className="font-bold text-white text-lg">- Sofía Castro, Fundadora de Creativa Studio</p>
        </div>
      </section>

      {/* Who is this for Section */}
       <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
            <div className="bg-gray-900 p-8 rounded-lg border border-green-500/30">
                <h3 className="text-2xl font-bold font-display mb-4 text-green-400">Este programa ES para ti si...</h3>
                <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start"><span className="text-green-400 mr-3">✔</span><span>Ya facturas al menos $5,000/mes de forma consistente.</span></li>
                    <li className="flex items-start"><span className="text-green-400 mr-3">✔</span><span>Estás 100% comprometido y listo para ejecutar.</span></li>
                    <li className="flex items-start"><span className="text-green-400 mr-3">✔</span><span>Vendes un producto o servicio de calidad y quieres más impacto.</span></li>
                </ul>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg border border-red-500/30">
                <h3 className="text-2xl font-bold font-display mb-4 text-red-400">Este programa NO es para ti si...</h3>
                <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start"><span className="text-red-400 mr-3">✖</span><span>Estás buscando una solución mágica o "hacerte rico rápido".</span></li>
                    <li className="flex items-start"><span className="text-red-400 mr-3">✖</span><span>No estás dispuesto a invertir en tu negocio (y en ti mismo).</span></li>
                    <li className="flex items-start"><span className="text-red-400 mr-3">✖</span><span>No estás abierto a recibir feedback y cambiar tu forma de operar.</span></li>
                </ul>
            </div>
        </div>
       </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-24 px-4 text-center bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white">¿Estás Listo para el Siguiente Nivel?</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Si cumples los requisitos y estás decidido a construir un negocio que trabaje para ti (y no al revés), aplica ahora a una sesión estratégica gratuita.
        </p>
        <a href="#cta" className="bg-[var(--accent-color)] hover:bg-[var(--accent-color-hover)] text-black font-bold text-lg py-4 px-12 rounded-lg shadow-lg shadow-yellow-500/30 transform transition-all duration-300 hover:scale-105">
          Aplicar Ahora
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-black text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Coaching de Élite. Todos los derechos reservados.</p>
        <a href="#" className="underline hover:text-white">Política de Privacidad</a>
      </footer>
    </div>
  );
};

export default BusinessCoachLP;