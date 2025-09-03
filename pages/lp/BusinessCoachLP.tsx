import React from 'react';

const BusinessCoachLP: React.FC = () => {
  return (
    <div className="bg-black text-white font-sans" style={{'--accent-color': '#D4AF37'} as React.CSSProperties}>
      {/* Hero Section */}
      <header className="text-center py-20 px-4 bg-black">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-display">Escala Tu Negocio de 6 a 7 Cifras Anuales</h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">Mi programa de coaching <span className="text-[var(--accent-color)] font-semibold">ACCELERATOR</span> te da el mapa, los sistemas y la mentalidad para romper tus barreras de crecimiento.</p>
        <a href="#cta" className="border-2 border-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-black text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
          Aplica a una Sesión Estratégica Gratuita
        </a>
         <p className="text-sm text-gray-500 mt-4">Plazas muy limitadas. Solo para emprendedores serios.</p>
      </header>

      {/* Problem & Solution Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-display">¿Trabajas más que nunca pero tus ingresos están estancados?</h2>
          <p className="text-lg text-gray-400 mb-10">
            Eres el cuello de botella de tu propio negocio. Atrapado en el día a día, no tienes tiempo para la estrategia. Sabes que podrías crecer más, pero no tienes claro el siguiente paso.
          </p>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl border-l-4 border-[var(--accent-color)]">
            <h3 className="text-2xl font-bold text-white mb-4 font-display">La Solución: <span className="text-[var(--accent-color)]">De Emprendedor a CEO</span></h3>
            <p className="text-lg text-gray-300">
             El crecimiento exponencial no viene de trabajar más duro, sino de forma más inteligente. Te ayudo a implementar los sistemas de marketing, ventas y operaciones que te liberarán del trabajo operativo para que te enfoques en escalar.
            </p>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-center text-3xl font-bold mb-12 font-display">¿Qué Incluye el Programa <span className="text-[var(--accent-color)]">Accelerator</span>?</h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="p-6 border border-gray-800 rounded-lg">
              <h4 className="text-xl font-bold mb-2 font-display text-white">Sesiones 1-a-1 Quincenales</h4>
              <p className="text-gray-400"><strong>Característica:</strong> Sesiones de coaching privadas y enfocadas.<br/><strong>Beneficio:</strong> Obtienes claridad y un plan de acción concreto para tus desafíos más grandes, eliminando las conjeturas.</p>
            </div>
            <div className="p-6 border border-gray-800 rounded-lg">
              <h4 className="text-xl font-bold mb-2 font-display text-white">Acceso a Comunidad Exclusiva</h4>
              <p className="text-gray-400"><strong>Característica:</strong> Un grupo privado con otros emprendedores de 6-7 cifras.<br/><strong>Beneficio:</strong> Te rodeas de una red de contactos de alto nivel, creando oportunidades de colaboración y aprendizaje.</p>
            </div>
            <div className="p-6 border border-gray-800 rounded-lg">
              <h4 className="text-xl font-bold mb-2 font-display text-white">Masterclasses Mensuales</h4>
              <p className="text-gray-400"><strong>Característica:</strong> Talleres en vivo sobre temas avanzados de negocio.<br/><strong>Beneficio:</strong> Te mantienes a la vanguardia con estrategias probadas en marketing, ventas y liderazgo de equipos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <img src="https://placehold.co/100x100/111827/FFFFFF/png?text=SC" alt="Sofía Castro" className="rounded-full mx-auto mb-4 border-2 border-[var(--accent-color)]" />
          <p className="text-lg italic text-gray-300 mb-4">"Estaba estancada en $10k al mes y no veía la salida. En seis meses trabajando juntos, no solo tripliqué mis ingresos, sino que ahora trabajo la mitad de horas. Su sistema me devolvió la libertad."</p>
          <p className="font-bold text-white">- Sofía Castro, Fundadora de Creativa Studio</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-20 px-4 text-center bg-black">
        <h2 className="text-3xl font-bold mb-4 font-display text-white">¿Estás Listo para el Siguiente Nivel?</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Esta oportunidad no es para todos. Es para dueños de negocio 100% comprometidos con el crecimiento. Si eres tú, aplica ahora para una sesión estratégica y veamos si podemos trabajar juntos.
        </p>
        <a href="#cta" className="bg-[var(--accent-color)] hover:bg-yellow-500 text-black font-bold text-lg py-4 px-10 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
          Aplicar Ahora
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-900 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Coaching de Élite. Todos los derechos reservados.</p>
        <a href="#" className="underline hover:text-white">Política de Privacidad</a>
      </footer>
    </div>
  );
};

export default BusinessCoachLP;