import React from 'react';

const RealEstateLP: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans" style={{'--accent-color': '#1E3A8A'} as React.CSSProperties}>
      {/* Hero Section */}
      <header 
        className="text-center py-24 px-4 text-white relative"
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <img src="/real-estate-hero-background.jpg" alt="Propiedad de lujo" className="absolute inset-0 w-full h-full object-cover z-[-1]" />
        <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif font-display">Vende Tu Casa al Mejor Precio, en Tiempo Récord</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">Combinamos marketing de vanguardia y un servicio personalizado para asegurar la máxima rentabilidad de tu propiedad.</p>
            <a href="#cta" className="bg-[var(--accent-color)] hover:bg-blue-900 text-white font-bold text-lg py-4 px-10 rounded-sm shadow-lg transform transition-transform duration-300 hover:scale-105">
            Obtén tu Tasación Gratuita AHORA
            </a>
        </div>
      </header>

      {/* Problem & Solution Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif font-display text-gray-900">¿El proceso de vender te parece abrumador?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Papeleo interminable, visitas a deshoras, negociaciones estresantes y la incertidumbre de no saber si estás obteniendo el mejor precio. Vender tu casa puede convertirse en una pesadilla.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-[var(--accent-color)]">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 font-serif font-display">La Solución: Una Experiencia de Venta Sin Estrés</h3>
            <p className="text-lg text-gray-700">
             Nos encargamos de todo por ti. Desde la fotografía profesional y la promoción en portales premium hasta la gestión de visitas y la negociación final. Nuestro objetivo es simple: que vendas tu casa rápido, al mejor precio y con la mínima molestia para ti.
            </p>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2 font-serif font-display text-gray-900">Marketing Digital Inmobiliario</h4>
              <p className="text-gray-600"><strong>Característica:</strong> Campañas en redes sociales y portales.<br/><strong>Beneficio:</strong> Tu propiedad llega a miles de compradores cualificados, no solo a los que pasan por la calle.</p>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2 font-serif font-display text-gray-900">Fotografía y Video Profesional</h4>
              <p className="text-gray-600"><strong>Característica:</strong> Sesión de fotos y tour virtual de alta calidad.<br/><strong>Beneficio:</strong> Hacemos que tu casa deslumbre online, generando más interés y visitas de compradores serios.</p>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2 font-serif font-display text-gray-900">Red de Compradores Exclusiva</h4>
              <p className="text-gray-600"><strong>Característica:</strong> Acceso a nuestra base de datos de inversores.<br/><strong>Beneficio:</strong> A menudo, encontramos al comprador ideal para tu casa antes de publicarla en el mercado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <img src="/real-estate-testimonial.png" alt="Familia Pérez" className="w-24 h-24 object-cover rounded-full mx-auto mb-4" />
          <p className="text-lg italic text-gray-700 mb-4">"Intentamos vender nuestra casa por nuestra cuenta durante 6 meses sin éxito. Los contactamos y, gracias a su estrategia, recibimos tres ofertas en la primera semana. ¡Vendimos por encima del precio que pedíamos! Increíble."</p>
          <p className="font-bold text-gray-900">- Juan Pérez, Vendedor Satisfecho</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-20 px-4 text-center bg-gray-800 text-white">
        <h2 className="text-3xl font-bold mb-4 font-serif font-display">Descubre el Verdadero Valor de Tu Hogar</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          No dejes dinero sobre la mesa. Solicita una tasación profesional y gratuita de tu propiedad hoy mismo. Sin compromiso, solo información de valor.
        </p>
        <a href="#cta" className="bg-[var(--accent-color)] hover:bg-blue-900 text-white font-bold text-lg py-4 px-10 rounded-sm shadow-lg transform transition-transform duration-300 hover:scale-105">
          Quiero Saber Cuánto Vale mi Casa
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-white text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Inmobiliaria Élite. Todos los derechos reservados.</p>
        <a href="#" className="underline hover:text-gray-800">Política de Privacidad</a>
      </footer>
    </div>
  );
};

export default RealEstateLP;