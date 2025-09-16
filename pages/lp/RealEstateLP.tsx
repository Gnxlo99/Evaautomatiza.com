import React from 'react';

const RealEstateLP: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans" style={{'--accent-color': '#1E3A8A', '--accent-color-hover': '#172554'} as React.CSSProperties}>
      {/* Hero Section */}
      <header 
        className="real-estate-hero-bg bg-cover bg-center text-center py-24 px-4 text-white relative flex items-center justify-center min-h-[70vh]"
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif font-display leading-tight" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.7)'}}>Venda su Propiedad al Mejor Precio, en Tiempo Récord</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>Combinamos un marketing digital de vanguardia y un servicio de guante blanco para asegurar la máxima rentabilidad de su hogar.</p>
            <a href="#cta" className="inline-block bg-[var(--accent-color)] hover:bg-[var(--accent-color-hover)] text-white font-bold text-base sm:text-lg py-3 px-8 sm:py-4 sm:px-12 rounded-sm shadow-2xl transform transition-transform duration-300 hover:scale-105">
                Obtenga su Tasación Gratuita
            </a>
        </div>
      </header>
      
      {/* 3 Step Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold font-serif mb-12 font-display text-gray-900">Un Proceso de Venta Sencillo y Transparente</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-6">
                <div className="text-5xl font-bold text-blue-200 font-serif mb-4">1.</div>
                <h3 className="text-xl font-bold mb-2 font-serif font-display text-gray-900">Tasación Profesional</h3>
                <p className="text-gray-600">Realizamos un análisis de mercado exhaustivo para determinar el valor óptimo de su propiedad, sin compromiso.</p>
            </div>
             <div className="p-6">
                <div className="text-5xl font-bold text-blue-200 font-serif mb-4">2.</div>
                <h3 className="text-xl font-bold mb-2 font-serif font-display text-gray-900">Marketing de Impacto</h3>
                <p className="text-gray-600">Lanzamos una campaña de marketing digital y tradicional para llegar a miles de compradores cualificados.</p>
            </div>
             <div className="p-6">
                <div className="text-5xl font-bold text-blue-200 font-serif mb-4">3.</div>
                <h3 className="text-xl font-bold mb-2 font-serif font-display text-gray-900">Negociación y Cierre</h3>
                <p className="text-gray-600">Gestionamos las ofertas y la negociación para asegurar el mejor trato, acompañándole hasta la firma final.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
           <div>
                <img src="/real-estate-feature.jpg" alt="Interior de una casa moderna y luminosa" className="rounded-lg shadow-2xl" />
           </div>
           <div>
               <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 font-display text-gray-900">Nos Encargamos de Todo para que Usted No Tenga que Hacerlo</h2>
               <p className="text-lg text-gray-600 mb-8">
                 Vender su casa puede ser abrumador. Nosotros simplificamos el proceso, gestionando cada detalle con la máxima profesionalidad.
               </p>
               <ul className="space-y-4">
                 <li className="flex items-start"><span className="text-[var(--accent-color)] font-bold mr-3 mt-1">✔</span><span><strong>Fotografía y Tour Virtual 360°:</strong> Hacemos que su propiedad deslumbre online.</span></li>
                 <li className="flex items-start"><span className="text-[var(--accent-color)] font-bold mr-3 mt-1">✔</span><span><strong>Gestión de Visitas:</strong> Filtramos y coordinamos las visitas con compradores serios.</span></li>
                 <li className="flex items-start"><span className="text-[var(--accent-color)] font-bold mr-3 mt-1">✔</span><span><strong>Asesoramiento Legal y Financiero:</strong> Le acompañamos en todo el papeleo para una transacción segura.</span></li>
               </ul>
           </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <img src="/real-estate-testimonial.png" alt="Familia Pérez" className="w-24 h-24 object-cover rounded-full mx-auto mb-6" />
          <p className="text-xl italic text-gray-700 mb-6 leading-relaxed">"Intentamos vender nuestra casa por nuestra cuenta durante 6 meses sin éxito. Los contactamos y, gracias a su estrategia, recibimos tres ofertas en la primera semana. ¡Vendimos por encima del precio que pedíamos! Un servicio impecable de principio a fin."</p>
          <p className="font-bold text-gray-900 text-lg">- Familia Pérez, Vendedores Satisfechos</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-24 px-4 text-center bg-gray-800 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif font-display">Descubra el Verdadero Valor de su Hogar</h2>
        <p className="text-xl max-w-3xl mx-auto mb-10">
          No deje dinero sobre la mesa. Solicite una tasación profesional y gratuita de su propiedad hoy mismo. Sin compromiso, solo información de valor para su decisión.
        </p>
        <a href="#cta" className="inline-block bg-[var(--accent-color)] hover:bg-[var(--accent-color-hover)] text-white font-bold text-base sm:text-lg py-3 px-8 sm:py-4 sm:px-12 rounded-sm shadow-lg transform transition-transform duration-300 hover:scale-105">
          Quiero Saber Cuánto Vale mi Casa
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-white text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Inmobiliaria Élite. Todos los derechos reservados.</p>
        <a href="#" className="underline hover:text-gray-800">Política de Privacidad</a>
      </footer>
    </div>
  );
};

export default RealEstateLP;
