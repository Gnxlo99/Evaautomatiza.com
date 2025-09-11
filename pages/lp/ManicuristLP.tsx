import React from 'react';

const ManicuristLP: React.FC = () => {
  const services = [
    { name: 'Manicura Clásica', price: '$25', description: 'Corte, limado, tratamiento de cutículas y esmalte tradicional de alta calidad.' },
    { name: 'Esmaltado Semi-permanente', price: '$40', description: 'Una manicura perfecta con un brillo impecable que dura hasta 3 semanas.' },
    { name: 'Uñas Acrílicas / Gel', price: 'Desde $60', description: 'Extensiones y construcción para un look duradero, elegante y sofisticado.' },
    { name: 'Nail Art Personalizado', price: 'Desde $5', description: 'Desde diseños minimalistas hasta creaciones artísticas complejas. Tu imaginación es el límite.' },
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
    <div className="bg-[#FFFDF9] text-stone-800 font-sans" style={{'--accent-color': '#D97706', '--accent-color-light': '#FCD34D'} as React.CSSProperties}>
      {/* Hero Section */}
      <header className="manicurist-hero-bg bg-cover bg-center relative text-center py-24 px-4 text-white flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif font-display" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>Arte en Tus Manos</h1>
            <p className="text-xl md:text-2xl mb-10" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                Servicios de manicura de lujo en un ambiente exclusivo y relajante. Dale a tus uñas el cuidado y el diseño que se merecen.
            </p>
            <a href="#cta" className="bg-[var(--accent-color)] hover:bg-amber-700 text-white font-bold text-lg py-4 px-12 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 uppercase tracking-wider">
                Reservar Cita
            </a>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-16 font-display text-stone-900">Nuestros Servicios</h2>
            <div className="grid md:grid-cols-2 gap-10 text-left">
            {services.map(service => (
                <div key={service.name} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[var(--accent-color)]">
                    <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-2xl font-bold text-stone-800 font-display">{service.name}</h3>
                        <p className="text-2xl font-semibold text-[var(--accent-color)] font-display">{service.price}</p>
                    </div>
                    <p className="text-stone-600 text-lg">{service.description}</p>
                </div>
            ))}
            </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-16 font-display text-stone-900">Inspírate con Nuestros Diseños</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
                <img src={src} alt={`Diseño de uñas ${index + 1}`} className="w-full h-full object-cover aspect-square transform group-hover:scale-110 transition-transform duration-500 cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <img src="/manicurist-testimonial.png" alt="Carla R." className="w-24 h-24 object-cover rounded-full mx-auto mb-6" />
          <blockquote className="text-xl italic text-stone-700 mb-6 relative leading-relaxed">
            <p>"El nivel de detalle y cuidado es de otro mundo. Nunca había tenido unas uñas tan perfectas y duraderas. El ambiente del estudio es un oasis de calma. ¡100% recomendada!"</p>
          </blockquote>
          <p className="font-bold text-stone-800 text-lg">- Carla R., Cliente Frecuente</p>
        </div>
      </section>

      {/* Final CTA / Booking Section */}
      <section id="cta" className="py-24 px-4 bg-stone-800 text-white">
        <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 font-serif font-display">Agenda Tu Cita Ahora</h2>
                <p className="text-xl text-stone-300 max-w-3xl mx-auto">
                    Completa el formulario y nos pondremos en contacto contigo a la brevedad para confirmar tu turno. ¡Estamos ansiosas por consentirte!
                </p>
            </div>
            
            <form name="manicurist-booking" method="POST" data-netlify="true" className="space-y-6 text-left">
                <input type="hidden" name="form-name" value="manicurist-booking" />
                
                <div>
                    <label htmlFor="name" className="block text-sm font-bold text-stone-300 mb-2">Nombre</label>
                    <input type="text" id="name" name="name" required className="w-full bg-stone-700 border border-stone-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-shadow" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-stone-300 mb-2">Teléfono</label>
                        <input type="tel" id="phone" name="phone" required className="w-full bg-stone-700 border border-stone-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-shadow" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-stone-300 mb-2">Correo Electrónico</label>
                        <input type="email" id="email" name="email" required className="w-full bg-stone-700 border border-stone-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-shadow" />
                    </div>
                </div>

                <div>
                    <label htmlFor="service" className="block text-sm font-bold text-stone-300 mb-2">Servicio Deseado</label>
                    <select id="service" name="service" required className="w-full bg-stone-700 border border-stone-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-shadow appearance-none" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23a8a29e' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}>
                        <option value="">Selecciona un servicio...</option>
                        <option value="Manicura Clásica">Manicura Clásica</option>
                        <option value="Esmaltado Semi-permanente">Esmaltado Semi-permanente</option>
                        <option value="Uñas Acrílicas / Gel">Uñas Acrílicas / Gel</option>
                        <option value="Nail Art Personalizado">Nail Art Personalizado</option>
                        <option value="Pedicura">Pedicura</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="datetime" className="block text-sm font-bold text-stone-300 mb-2">Fecha y Hora Preferida</label>
                    <input type="text" id="datetime" name="datetime" placeholder="Ej: Martes por la tarde, 15/10 a las 16hs" required className="w-full bg-stone-700 border border-stone-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-shadow" />
                </div>
                
                <div>
                    <button type="submit" className="w-full bg-[var(--accent-color)] hover:bg-amber-700 text-white font-bold text-lg py-4 px-12 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 uppercase tracking-wider mt-4">
                        Enviar Solicitud de Cita
                    </button>
                </div>
            </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-[#FFFDF9] text-stone-500 text-sm">
        <p>&copy; {new Date().getFullYear()} The Nail Studio. Todos los derechos reservados.</p>
        <p>Calle Ficticia 123, Ciudad. | (123) 456-7890</p>
        <a href="#" className="underline hover:text-stone-800">Política de Privacidad</a>
      </footer>
    </div>
  );
};

export default ManicuristLP;
