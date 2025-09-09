import React from 'react';

const LawyerLP: React.FC = () => {
    const practiceAreas = [
        { title: 'Derecho de Familia', description: 'Divorcios, custodias y planificación patrimonial con la sensibilidad y la firmeza que estos casos requieren.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
        { title: 'Derecho Mercantil', description: 'Asesoramiento integral a empresas, desde la constitución de sociedades hasta la resolución de conflictos contractuales.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
        { title: 'Litigios Civiles', description: 'Representación experta en disputas contractuales, reclamaciones por daños y perjuicios, y defensa de sus derechos ante los tribunales.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.758 16.242a5.001 5.001 0 006.484 0M12 6v4m0 0v4m0-4h4m-4 0H8" /></svg> },
        { title: 'Derecho Inmobiliario', description: 'Acompañamiento en procesos de compraventa, arrendamientos y resolución de conflictos de propiedad con total seguridad jurídica.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> }
    ];

  return (
    <div className="bg-gray-100 text-gray-800 font-sans" style={{'--accent-color': '#062d5f', '--accent-color-light': '#e0b872'} as React.CSSProperties}>
      
      <header className="lawyer-hero-bg bg-cover bg-center text-white relative py-24 px-4 flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-4" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.7)'}}>Defensa Legal Estratégica para Proteger su Futuro</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>Representación experta con un enfoque personal y orientado a resultados. Su tranquilidad es nuestra prioridad.</p>
          <a href="#cta" className="bg-[var(--accent-color)] hover:bg-[#042146] text-white font-bold text-lg py-4 px-10 rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105">
            Agendar Consulta Confidencial
          </a>
        </div>
      </header>
      
      <section className="bg-white py-8">
        <div className="max-w-5xl mx-auto">
            <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider">Con la confianza de clientes y el respeto de nuestros colegas</p>
        </div>
      </section>

      <section id="areas" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900">Áreas de Práctica</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Nos especializamos en áreas clave para ofrecerle la representación más competente y enfocada.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map(area => (
              <div key={area.title} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-2">
                <div className="inline-block text-[var(--accent-color)] mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold font-display text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img src="/lawyer-headshot.jpg" alt="Retrato del Abogado/a" className="rounded-lg shadow-2xl w-full" />
          </div>
          <div>
            <h2 className="text-4xl font-bold font-display text-gray-900 mb-6">Un Aliado Estratégico a su Lado</h2>
            <p className="text-lg text-gray-600 mb-4">Con más de 15 años de experiencia, el/la Abogado/a [Apellido] ha construido una reputación de excelencia, integridad y resultados. Licenciado/a por la Universidad de [Nombre], y miembro del Colegio de Abogados de [Ciudad], nuestro enfoque se basa en entender a fondo sus necesidades para diseñar una estrategia legal a medida.</p>
            <p className="text-lg text-gray-600">Creemos en una comunicación transparente y un trato cercano. No es solo un caso, es su futuro, y lo defendemos con la máxima dedicación.</p>
          </div>
        </div>
      </section>

      <section id="testimonial" className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold font-display text-gray-900 mb-12">Lo que Dicen Nuestros Clientes</h2>
            <div className="bg-white p-10 rounded-lg shadow-xl relative">
                <div className="absolute top-0 left-10 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white -mt-2"></div>
                <img src="/lawyer-testimonial.png" alt="Cliente Satisfecho" className="w-20 h-20 object-cover rounded-full mx-auto -mt-20 mb-6 border-4 border-white shadow-lg" />
                <blockquote className="text-xl italic text-gray-700 mb-6">
                    "En el momento más complicado de mi vida, encontré no solo un abogado/a excepcional, sino un consejero de confianza. Su profesionalismo y calma me guiaron a través del proceso y lograron un resultado que superó mis expectativas. Eternamente agradecido/a."
                </blockquote>
                <p className="font-bold text-gray-800 text-lg">- J. Pérez, Cliente de Derecho de Familia</p>
            </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold font-display text-center mb-12 text-gray-900">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <details className="p-4 bg-white rounded-lg shadow-sm cursor-pointer"><summary className="font-semibold text-lg">¿Cuánto cuesta la primera consulta?</summary><p className="mt-4 text-gray-600">Ofrecemos una primera consulta confidencial para evaluar su caso, discutir sus opciones y determinar cómo podemos ayudarle. Póngase en contacto para conocer las tarifas aplicables.</p></details>
            <details className="p-4 bg-white rounded-lg shadow-sm cursor-pointer"><summary className="font-semibold text-lg">¿Qué tipo de información debo traer a nuestra primera reunión?</summary><p className="mt-4 text-gray-600">Cualquier documento relevante para su caso: contratos, correspondencia, informes, etc. Lo más importante es que venga preparado para contar su historia con el mayor detalle posible.</p></details>
            <details className="p-4 bg-white rounded-lg shadow-sm cursor-pointer"><summary className="font-semibold text-lg">¿Cómo se mantendrá informado sobre el progreso de mi caso?</summary><p className="mt-4 text-gray-600">Creemos en la comunicación proactiva. Recibirá actualizaciones regulares por correo electrónico y teléfono, y siempre tendrá una línea directa para sus preguntas.</p></details>
          </div>
        </div>
      </section>
      
      <section id="cta" className="py-24 px-4 text-center bg-[var(--accent-color)] text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold font-display mb-4">El Primer Paso Hacia su Tranquilidad</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">No afronte sus desafíos legales solo/a. Dé el primer paso hoy mismo agendando una consulta confidencial para discutir su caso.</p>
          <a href="#cta-form" className="bg-white text-[var(--accent-color)] font-bold text-lg py-4 px-12 rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105">
            Solicitar mi Consulta
          </a>
        </div>
      </section>

      <section id="cta-form" className="py-20 px-4">
        <div className="max-w-2xl mx-auto bg-white p-10 rounded-lg shadow-2xl">
            <h3 className="text-3xl font-bold font-display text-center mb-8 text-gray-900">Contacto para Consulta</h3>
            <form className="space-y-6">
                <div><label htmlFor="name" className="font-semibold">Nombre Completo</label><input type="text" id="name" className="w-full mt-2 p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"/></div>
                <div><label htmlFor="email" className="font-semibold">Correo Electrónico</label><input type="email" id="email" className="w-full mt-2 p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"/></div>
                <div><label htmlFor="phone" className="font-semibold">Teléfono</label><input type="tel" id="phone" className="w-full mt-2 p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"/></div>
                <div><label htmlFor="message" className="font-semibold">Breve descripción de su caso</label><textarea id="message" rows={4} className="w-full mt-2 p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"></textarea></div>
                <button type="submit" className="w-full bg-[var(--accent-color)] hover:bg-[#042146] text-white font-bold py-4 rounded-md transition-colors duration-300">Enviar Solicitud</button>
            </form>
        </div>
      </section>

      <footer className="text-center py-8 bg-gray-900 text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} [Apellido] Despacho de Abogados. Todos los derechos reservados.</p>
        <p className="mt-2 max-w-2xl mx-auto">La información en este sitio web es para fines informativos generales únicamente. Nada en este sitio debe tomarse como asesoramiento legal para ningún caso o situación individual. Esta información no pretende crear, y su recepción o visualización no constituye, una relación abogado-cliente.</p>
        <a href="#" className="underline hover:text-white mt-4 inline-block">Política de Privacidad</a>
      </footer>
    </div>
  );
};

export default LawyerLP;
