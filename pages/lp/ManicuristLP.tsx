import React from 'react';

const ManicuristLP: React.FC = () => {
  const services = [
    { name: 'Manicura Clásica', price: '$25', description: 'Corte, limado, cutículas y esmalte tradicional.' },
    { name: 'Esmaltado Semi-permanente', price: '$40', description: 'Duración de hasta 3 semanas con un brillo impecable.' },
    { name: 'Uñas Acrílicas', price: 'Desde $60', description: 'Extensiones y construcción para un look duradero y sofisticado.' },
    { name: 'Nail Art (por uña)', price: 'Desde $5', description: 'Desde diseños simples hasta creaciones artísticas complejas.' },
  ];

  const galleryImages = [
    '/manicurist-gallery-1.jpg',
    '/manicurist-gallery-2.jpg',
    '/manicurist-gallery-3.jpg',
    '/manicurist-gallery-4.jpg',
    '/manicurist-gallery-5.jpg',
    '/manicurist-gallery-6.jpg',
  ];

  return (
    <div className="bg-[#FFFBF5] text-stone-800 font-sans" style={{'--accent-color': '#D97706'} as React.CSSProperties}>
      {/* Hero Section */}
      <header 
        className="relative text-center py-24 px-4 text-white flex items-center justify-center min-h-[60vh] bg-center bg-cover"
        style={{ backgroundImage: "url('/manicurist-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif font-display" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>Arte en Tus Manos</h1>
            <p className="text-xl md:text-2xl mb-8" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                Servicios de manicura de lujo en un ambiente relajante. Dale a tus uñas el cuidado y el diseño que se merecen.
            </p>
            <a href="#cta" className="bg-[var(--accent-color)] hover:bg-amber-700 text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 uppercase tracking-wider">
                Reservar Cita
            </a>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-12 font-display text-stone-900">Nuestros Servicios</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
            {services.map(service => (
                <div key={service.name} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[var(--accent-color)]">
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-xl font-bold text-stone-800 font-display">{service.name}</h3>
                        <p className="text-xl font-semibold text-[var(--accent-color)]">{service.price}</p>
                    </div>
                    <p className="text-stone-600 mt-2">{service.description}</p>
                </div>
            ))}
            </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-12 font-display text-stone-900">Nuestra Galería</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img src={src} alt={`Diseño de uñas ${index + 1}`} className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-500 cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <img src="/manicurist-testimonial.png" alt="Carla R." className="w-24 h-24 object-cover rounded-full mx-auto mb-4" />
          <blockquote className="text-lg italic text-stone-700 mb-4 relative">
            <p>"El nivel de detalle y cuidado es increíble. Nunca había tenido unas uñas tan perfectas y duraderas. El ambiente del estudio es súper relajante. ¡100% recomendada!"</p>
          </blockquote>
          <p className="font-bold text-stone-800">- Carla R., Cliente Frecuente</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-20 px-4 text-center bg-stone-800 text-white">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 font-serif font-display">¿Lista para unas Uñas Espectaculares?</h2>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto mb-8">
            Tu cita para la manicura perfecta está a solo un clic de distancia. Agenda tu espacio hoy y déjanos consentirte.
            </p>
            <a href="#cta" className="bg-[var(--accent-color)] hover:bg-amber-700 text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 uppercase tracking-wider">
                Reservar Mi Cita Ahora
            </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-[#FFFBF5] text-stone-500 text-sm">
        <p>&copy; {new Date().getFullYear()} The Nail Studio. Todos los derechos reservados.</p>
        <a href="#" className="underline hover:text-stone-800">Política de Privacidad</a>
      </footer>
    </div>
  );
};

export default ManicuristLP;
