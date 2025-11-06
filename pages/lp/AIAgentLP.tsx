import React from 'react';

const AIAgentLP: React.FC = () => {
    
  const CheckIcon = () => (
    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
  );

  return (
    <div className="bg-white text-gray-800 font-sans" style={{'--accent-color-dark': '#2563EB', '--accent-color-light': '#38BDF8'} as React.CSSProperties}>

      {/* Hero Section */}
      <header className="bg-slate-50 text-center py-20 px-4 relative overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/5 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 font-display leading-tight">
            ¿Harto de perder ventas después de las 7 PM?
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-color-dark)] to-[var(--accent-color-light)] mb-8 font-display">
            EVA IA gestiona, califica y nunca duerme.
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Tu Agente de Ventas a medida en WhatsApp e Instagram. 100% configurado, gestionado y optimizado por expertos (DFY).
          </p>
          <a href="#cta" className="inline-block bg-[var(--accent-color-dark)] hover:bg-blue-700 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg shadow-blue-500/30 transform transition-transform duration-300 hover:scale-105">
            Agenda una Demo de 15 Minutos
          </a>
        </div>
      </header>
      
      {/* Metrics Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <p className="text-xl font-bold text-gray-900 mt-2 mb-1">Horas Ahorradas</p>
              <p className="text-5xl font-extrabold text-gray-800 font-display">+60%</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <p className="text-xl font-bold text-gray-900 mt-2 mb-1">Conversiones Calificadas</p>
              <p className="text-5xl font-extrabold text-gray-800 font-display">+35%</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <p className="text-xl font-bold text-gray-900 mt-2 mb-1">Tiempo de Respuesta</p>
              <p className="text-5xl font-extrabold text-gray-800 font-display">Instantáneo</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-display text-gray-900 mb-12">Empieza a Vender en 3 Simples Pasos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center relative">
              <div className="absolute top-4 right-4 bg-slate-100 text-slate-600 font-bold py-1 px-3 rounded-full text-sm">Paso 1</div>
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg></div>
              <h3 className="text-2xl font-bold font-display text-gray-900 mb-2">Conecta tus Canales</h3>
              <p className="text-gray-600">Integramos a EVA IA en tu WhatsApp e Instagram para que no pierdas ni una sola consulta.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center relative">
              <div className="absolute top-4 right-4 bg-slate-100 text-slate-600 font-bold py-1 px-3 rounded-full text-sm">Paso 2</div>
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg></div>
              <h3 className="text-2xl font-bold font-display text-gray-900 mb-2">Crea su Personalidad</h3>
              <p className="text-gray-600">Entrenamos a la IA con tu información para que responda como un humano, pero mejor.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center relative">
              <div className="absolute top-4 right-4 bg-slate-100 text-slate-600 font-bold py-1 px-3 rounded-full text-sm">Paso 3</div>
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg></div>
              <h3 className="text-2xl font-bold font-display text-gray-900 mb-2">Convierte en Ventas</h3>
              <p className="text-gray-600">Tu equipo solo interviene para cerrar ventas, mientras EVA IA filtra y califica leads 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why EVA IA? (DFY) & Mockup Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold font-display text-gray-900 mb-6">EVA IA no es una herramienta, es tu nuevo empleado más eficiente.</h2>
            <div className="space-y-6">
                <div className="flex items-start"><div className="w-12 h-12 flex-shrink-0 mr-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div><div><h4 className="text-xl font-bold">Experto a Medida</h4><p className="text-gray-600">Entrenamos a tu agente IA con la personalidad y el conocimiento de tu negocio. Es como clonar a tu mejor vendedor, pero hacerlo infalible.</p></div></div>
                <div className="flex items-start"><div className="w-12 h-12 flex-shrink-0 mr-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg></div><div><h4 className="text-xl font-bold">Filtro Humano Inteligente</h4><p className="text-gray-600">Tu equipo deja de perder tiempo. La IA gestiona el 90% de las conversaciones y solo deriva a un humano cuando el cliente está listo para comprar.</p></div></div>
                <div className="flex items-start"><div className="w-12 h-12 flex-shrink-0 mr-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div><div><h4 className="text-xl font-bold">Gestión Completa (DFY)</h4><p className="text-gray-600">Olvídate de la complejidad técnica. Nosotros nos encargamos de las APIs, la automatización y el mantenimiento. Tú solo ves los resultados.</p></div></div>
            </div>
          </div>
          <div className="bg-white p-2 rounded-xl shadow-2xl border border-slate-200">
            <div className="font-sans text-sm p-4 rounded-lg bg-slate-100" style={{backgroundImage: "url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')"}}>
                <div className="flex flex-col space-y-3">
                    <div className="flex justify-end items-end">
                        <div className="bg-white text-gray-800 rounded-2xl rounded-br-none p-3 max-w-[80%] shadow">
                            Hola, ¿cuáles son los precios de la membresía anual del club?
                        </div>
                    </div>
                    <div className="flex justify-start items-end">
                       <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2 flex-shrink-0">E</div>
                        <div className="bg-gradient-to-r from-blue-500 to-sky-500 text-white rounded-2xl rounded-bl-none p-3 max-w-[80%] shadow">
                            ¡Hola! Gracias por tu interés en Club Fénix. La membresía anual tiene un costo de $120.000 ARS. Incluye acceso ilimitado a todas las instalaciones y clases. ¿Te gustaría que te inscriba?
                        </div>
                    </div>
                     <div className="flex justify-end items-end">
                        <div className="bg-white text-gray-800 rounded-2xl rounded-br-none p-3 max-w-[80%] shadow">
                            Sí, por favor!
                        </div>
                    </div>
                    <div className="flex justify-start items-end">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2 flex-shrink-0">E</div>
                        <div className="bg-gradient-to-r from-blue-500 to-sky-500 text-white rounded-2xl rounded-bl-none p-3 max-w-[80%] shadow">
                           ¡Excelente! Te estoy pasando con nuestro asesor, Juan, para que complete tu inscripción. Te contactará en breve. ¡Bienvenido a Fénix!
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 text-center text-gray-500">
                <p className="font-semibold text-lg">Integramos las herramientas que ya usas:</p>
                <div className="mt-4 flex justify-center items-center gap-6 flex-wrap opacity-70">
                    <span className="font-semibold">WhatsApp</span> &bull;
                    <span className="font-semibold">Instagram</span> &bull;
                    <span className="font-semibold">Google Sheets</span> &bull;
                    <span className="font-semibold">Google Calendar</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-sky-500">
        <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold font-display mb-6">¿Listo para transformar la manera en que vendés online?</h2>
            <p className="text-xl opacity-90 mb-8">Únete a las PyMEs que ya están respondiendo sus conversaciones con IA y multiplicando sus ventas.</p>
             <a href="#cta" className="inline-block bg-white hover:bg-slate-100 text-blue-600 font-bold text-lg py-4 px-10 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                Agenda tu Demo Ahora
            </a>
        </div>
      </section>

      {/* Pricing & Form Section */}
      <section id="cta" className="py-20 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-display text-gray-900 mb-4">Simple y Transparente</h2>
          <p className="text-lg text-gray-600 mb-10">Un único plan con todo incluido para que te enfoques en crecer.</p>
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-[var(--accent-color-dark)] relative mb-16">
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[var(--accent-color-dark)] text-white font-bold py-1 px-4 rounded-full uppercase text-sm tracking-wider">Plan Único</div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center md:text-right md:border-r md:pr-8">
                    <p className="text-gray-600 font-semibold">Instalación (Pago Único)</p>
                    <p className="text-5xl font-extrabold text-gray-900 mt-2">AR$50.000</p>
                </div>
                <div className="text-center md:text-left">
                    <p className="text-gray-600 font-semibold">Servicio Mensual (DFY)</p>
                    <p className="text-5xl font-extrabold text-gray-900 mt-2">$100 <span className="text-2xl font-bold">USD</span></p>
                    <p className="text-gray-500 text-sm mt-1">/ mes</p>
                </div>
            </div>
            <hr className="my-8 border-slate-200" />
            <ul className="text-left space-y-3 text-gray-700 mb-8">
                <li className="flex items-center"><CheckIcon /><span>Entrenamiento y personalización del Agente IA.</span></li>
                <li className="flex items-center"><CheckIcon /><span>Integración con WhatsApp e Instagram.</span></li>
                <li className="flex items-center"><CheckIcon /><span>Hasta 2.000 consultas/mes incluidas.</span></li>
                <li className="flex items-center"><CheckIcon /><span>Mantenimiento y optimización por expertos.</span></li>
                <li className="flex items-center"><CheckIcon /><span>Soporte técnico prioritario.</span></li>
            </ul>
            <p className="text-xs text-gray-500 mt-6">Nota: Los costos por conversación de Meta (WhatsApp) se facturan por separado de forma transparente.</p>
          </div>
          
          <h3 className="text-3xl font-bold font-display text-gray-900 mb-4">Solicita tu Demo de 15 Minutos</h3>
          <p className="text-lg text-gray-600 mb-8">Completa el formulario y te contactaremos para agendar una demostración en vivo y sin compromiso.</p>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200 text-left">
            <form name="eva-ia-demo" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="eva-ia-demo" />
              <p className="hidden"><label>No llenar si eres humano: <input name="bot-field" /></label></p>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name-eva" className="block text-sm font-semibold text-gray-700 mb-2">Nombre</label>
                  <input type="text" id="name-eva" name="name" required className="w-full bg-slate-50 border border-slate-300 text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color-dark)] transition-shadow" />
                </div>
                <div>
                  <label htmlFor="email-eva" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input type="email" id="email-eva" name="email" required className="w-full bg-slate-50 border border-slate-300 text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color-dark)] transition-shadow" />
                </div>
                <div>
                  <label htmlFor="website-eva" className="block text-sm font-semibold text-gray-700 mb-2">Sitio Web o Instagram de tu Negocio</label>
                  <input type="text" id="website-eva" name="website" required placeholder="Ej: https://instagram.com/tu_negocio" className="w-full bg-slate-50 border border-slate-300 text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color-dark)] transition-shadow" />
                </div>
                <div>
                  <button type="submit" className="w-full bg-[var(--accent-color-dark)] hover:bg-blue-700 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg shadow-blue-500/30 transform transition-transform duration-300 hover:scale-105">
                    Agendar mi Demo
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AIAgentLP;
