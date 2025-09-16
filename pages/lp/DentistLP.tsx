import React from 'react';

const DentistLP: React.FC = () => {
    const services = [
        { title: 'Odontología General', description: 'Chequeos, limpiezas y tratamientos para mantener tu salud bucal en óptimas condiciones.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-14l-3 3m5 0l-3-3m-2 8a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
        { title: 'Implantes Dentales', description: 'Recupera la función y estética de tu sonrisa con soluciones permanentes y de apariencia natural.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg> },
        { title: 'Ortodoncia Invisible', description: 'Alinea tus dientes de forma discreta y cómoda con la última tecnología en alineadores transparentes.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg> },
        { title: 'Blanqueamiento Dental', description: 'Consigue una sonrisa más blanca y brillante en una sola sesión con nuestro tratamiento profesional.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> }
    ];
  return (
    <div className="bg-gray-50 text-gray-800 font-sans" style={{'--accent-color': '#06B6D4', '--accent-color-hover': '#0891B2'} as React.CSSProperties}>
      
      <header className="dentist-hero-bg bg-cover bg-center text-white relative py-24 px-4 flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-4" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.7)'}}>La Sonrisa que Mereces, con la Tecnología que Confías</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>Odontología moderna en un ambiente relajado y profesional. Tu comodidad y salud son nuestra prioridad.</p>
          <a href="#cta" className="bg-[var(--accent-color)] hover:bg-[var(--accent-color-hover)] text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
            Agendar mi Cita
          </a>
        </div>
      </header>
      
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold font-display text-gray-900 mb-2">Tecnología Sin Dolor</h3>
                <p className="text-gray-600">Utilizamos los últimos avances para garantizar tratamientos eficaces y una experiencia confortable.</p>
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold font-display text-gray-900 mb-2">Atención Personalizada</h3>
                <p className="text-gray-600">Cada paciente es único. Escuchamos tus necesidades para crear un plan de tratamiento a tu medida.</p>
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold font-display text-gray-900 mb-2">Ambiente Relajado</h3>
                <p className="text-gray-600">Nuestra clínica está diseñada para que te sientas tranquilo y seguro desde el momento en que entras.</p>
            </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900">Nuestros Servicios Dentales</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Ofrecemos un cuidado dental integral para toda la familia.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {services.map(service => (
              <div key={service.title} className="flex items-start gap-6">
                <div className="flex-shrink-0 text-[var(--accent-color)] mt-1">{service.icon}</div>
                <div>
                    <h3 className="text-2xl font-bold font-display text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-lg">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img src="/dentist-headshot.jpg" alt="Retrato de la Dra. Elena Valdés" className="rounded-lg shadow-2xl w-full" />
          </div>
          <div>
            <h2 className="text-4xl font-bold font-display text-gray-900 mb-6">Conozca a la Dra. Elena Valdés</h2>
            <p className="text-lg text-gray-600 mb-4">Apasionada por la odontología y el bienestar de sus pacientes, la Dra. Valdés se graduó con honores de la Universidad de Odontología de [Ciudad]. Con más de 10 años de experiencia, se especializa en odontología estética y restauradora, manteniéndose siempre a la vanguardia de las nuevas tecnologías para ofrecer los mejores resultados.</p>
            <p className="text-lg text-gray-600">"Mi mayor satisfacción es ver la confianza que una sonrisa sana y bonita puede dar a una persona. Mi equipo y yo estamos dedicados a hacer de tu visita al dentista una experiencia positiva y transformadora."</p>
          </div>
        </div>
      </section>

      <section id="testimonial" className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white p-10 rounded-lg shadow-xl relative">
                <img src="/dentist-testimonial.png" alt="Paciente Satisfecho" className="w-20 h-20 object-cover rounded-full mx-auto -mt-16 mb-6 border-4 border-white shadow-lg" />
                <blockquote className="text-xl italic text-gray-700 mb-6">
                    "Tenía mucho miedo de ir al dentista, pero la Dra. Valdés y su equipo me hicieron sentir increíblemente cómodo. El tratamiento fue completamente indoloro y los resultados son fantásticos. ¡Por fin puedo sonreír sin complejos!"
                </blockquote>
                <p className="font-bold text-gray-800 text-lg">- Marcos L., Paciente</p>
            </div>
        </div>
      </section>
      
      <section id="cta" className="py-24 px-4 text-center bg-gray-800 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold font-display mb-4">¿Listo para Cuidar tu Sonrisa?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">Tu primera consulta incluye una revisión completa y un diagnóstico sin compromiso. Agenda tu cita hoy y da el primer paso hacia una salud bucal óptima.</p>
           <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
                <h3 className="text-3xl font-bold font-display text-center mb-6 text-gray-900">Solicitar una Cita</h3>
                <form className="space-y-6 text-left">
                    <div>
                        <label htmlFor="name" className="font-semibold text-gray-700">Nombre Completo</label>
                        <input type="text" id="name" required className="w-full mt-2 p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"/>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                          <label htmlFor="phone" className="font-semibold text-gray-700">Teléfono</label>
                          <input type="tel" id="phone" required className="w-full mt-2 p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"/>
                      </div>
                      <div>
                          <label htmlFor="email" className="font-semibold text-gray-700">Correo Electrónico</label>
                          <input type="email" id="email" required className="w-full mt-2 p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"/>
                      </div>
                    </div>
                    <div>
                        <label htmlFor="datetime" className="font-semibold text-gray-700">Fecha y Hora de Preferencia</label>
                        <input type="text" id="datetime" placeholder="Ej: Lunes por la mañana, 20/10 a las 10hs" required className="w-full mt-2 p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"/>
                    </div>
                     <div>
                        <label htmlFor="reason" className="font-semibold text-gray-700">Motivo de la consulta (opcional)</label>
                        <textarea id="reason" rows={3} placeholder="Ej: Revisión general, dolor en una muela, etc." className="w-full mt-2 p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[var(--accent-color)] hover:bg-[var(--accent-color-hover)] text-white font-bold py-4 rounded-md transition-colors duration-300">Solicitar mi Cita</button>
                </form>
           </div>
        </div>
      </section>

      <footer className="text-center py-8 bg-white text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Clínica Dental Valdés. Todos los derechos reservados.</p>
        <p className="mt-1">Avenida Siempre Viva 742, Springfield | (123) 456-7890</p>
        <a href="#" className="underline hover:text-gray-800 mt-2 inline-block">Política de Privacidad</a>
      </footer>
    </div>
  );
};

export default DentistLP;
