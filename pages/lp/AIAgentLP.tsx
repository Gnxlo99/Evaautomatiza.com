import React, { useState } from 'react';

const AIAgentLP: React.FC = () => {
    
  const CheckIcon = () => (
    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
  );

  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ status: 'idle' | 'success' | 'error'; message: string }>({ status: 'idle', message: '' });

  const handleScrollToCta = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ status: 'idle', message: '' });

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "eva-ia-demo", ...formData })
    })
    .then(() => {
        setFormStatus({ status: 'success', message: '¡Gracias! Recibimos tu solicitud. Te contactaremos a la brevedad para iniciar tu prueba gratuita.' });
        setFormData({ name: '', email: '', phone: '' });
    })
    .catch(error => {
        setFormStatus({ status: 'error', message: 'Algo salió mal. Por favor, intenta de nuevo.' });
    })
    .finally(() => setIsSubmitting(false));
  };


  return (
    <div className="bg-white text-gray-800 font-sans" style={{'--accent-color-dark': '#4F46E5', '--accent-color-light': '#818CF8'} as React.CSSProperties}>

      {/* Hero Section */}
      <header className="bg-slate-50 text-center py-20 px-4 relative overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-600/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 font-display leading-tight">
            ¿Tu negocio cierra a las 7 PM? Las consultas de tus clientes, no.
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-color-dark)] to-purple-500 mb-8 font-display">
            EVA IA atiende, califica y agenda por vos. 24/7.
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Tu nuevo Agente de Ventas para WhatsApp. 100% configurado y gestionado por nosotros para que solo te ocupes de cerrar las ventas que importan.
          </p>
          <button 
            onClick={handleScrollToCta}
            className="inline-block bg-[var(--accent-color-dark)] hover:bg-indigo-700 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg shadow-indigo-500/30 transform transition-transform duration-300 hover:scale-105"
          >
            Probá 5 Días GRATIS
          </button>
        </div>
      </header>
      
      {/* Metrics Section */}
       <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-50 p-8 rounded-xl">
              <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500 font-display">+60%</p>
              <p className="text-xl font-bold text-gray-700 mt-2">Horas Ahorradas</p>
              <p className="text-gray-600">Tu equipo deja de responder preguntas repetitivas y se enfoca en tareas de alto valor.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500 font-display">+35%</p>
              <p className="text-xl font-bold text-gray-700 mt-2">Leads Calificados</p>
              <p className="text-gray-600">EVA filtra las consultas y te entrega solo los contactos listos para comprar o agendar.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
               <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500 font-display">24/7</p>
              <p className="text-xl font-bold text-gray-700 mt-2">Respuesta Instantánea</p>
              <p className="text-gray-600">Cada consulta es atendida al instante, sin importar la hora, mejorando la experiencia del cliente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-display text-gray-900 mb-12">Dejalo en nuestras manos. Tu IA lista en 3 pasos.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center"><div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg></div><h3 className="text-2xl font-bold font-display text-gray-900 mb-2">1. Conectamos tu Canal</h3><p className="text-gray-600">Integramos a EVA IA en tu WhatsApp. Vos no tocás nada técnico.</p></div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center"><div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg></div><h3 className="text-2xl font-bold font-display text-gray-900 mb-2">2. La Entrenamos por Vos</h3><p className="text-gray-600">Nos das tu información de productos y servicios, y la entrenamos para que responda como un experto de tu equipo.</p></div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center"><div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg></div><h3 className="text-2xl font-bold font-display text-gray-900 mb-2">3. Recibís Leads y Ventas</h3><p className="text-gray-600">Tu equipo solo interviene para cerrar ventas, mientras EVA IA filtra y califica leads 24/7 en piloto automático.</p></div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold font-display text-gray-900 mb-4">Planes para cada Etapa de tu Negocio</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">Empezá gratis. Sin tarjeta de crédito. Cancelá cuando quieras.</p>
            
            <div className="text-center mb-12">
                <div className="bg-slate-100 p-4 rounded-xl inline-block">
                    <p className="font-semibold text-gray-800">Instalación y Entrenamiento (Pago Único)</p>
                    <p className="text-4xl font-extrabold text-gray-900 font-display mt-1">AR$ 50.000</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-center">
                
                {/* Starter Plan */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                    <h3 className="text-2xl font-bold font-display text-indigo-600">Starter</h3>
                    <p className="text-5xl font-extrabold text-gray-900 my-4">$35 <span className="text-xl font-semibold text-gray-500">USD/mes</span></p>
                    <ul className="text-left space-y-3 text-gray-700 mb-8">
                        <li className="flex items-center"><CheckIcon /><span>Hasta 500 conversaciones/mes</span></li>
                        <li className="flex items-center"><CheckIcon /><span>Integración WhatsApp</span></li>
                        <li className="flex items-center"><CheckIcon /><span>Soporte por email</span></li>
                    </ul>
                    <button onClick={handleScrollToCta} className="w-full bg-slate-200 text-indigo-600 font-bold py-3 rounded-lg hover:bg-slate-300 transition-colors">Empezar Prueba Gratis</button>
                </div>

                {/* Pro Plan */}
                <div className="bg-white p-8 rounded-2xl border-2 border-indigo-600 shadow-2xl relative">
                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-indigo-600 text-white font-bold py-1 px-4 rounded-full uppercase text-sm tracking-wider">Más Popular</div>
                    <h3 className="text-2xl font-bold font-display text-indigo-600">Pro</h3>
                    <p className="text-5xl font-extrabold text-gray-900 my-4">$55 <span className="text-xl font-semibold text-gray-500">USD/mes</span></p>
                    <ul className="text-left space-y-3 text-gray-700 mb-8">
                        <li className="flex items-center"><CheckIcon /><span>Hasta 2.000 conversaciones/mes</span></li>
                        <li className="flex items-center"><CheckIcon /><span>Integración WhatsApp</span></li>
                        <li className="flex items-center"><CheckIcon /><span>Soporte <b>prioritario</b></span></li>
                    </ul>
                    <button onClick={handleScrollToCta} className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/30">Empezar Prueba Gratis</button>
                </div>

                {/* Premium Plan */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                    <h3 className="text-2xl font-bold font-display text-indigo-600">Premium</h3>
                     <p className="text-5xl font-extrabold text-gray-900 my-4">Desde $99 <span className="text-xl font-semibold text-gray-500">USD/mes</span></p>
                    <ul className="text-left space-y-3 text-gray-700 mb-8">
                        <li className="flex items-center"><CheckIcon /><span>Conversaciones ilimitadas</span></li>
                        <li className="flex items-center"><CheckIcon /><span>Integraciones a medida</span></li>
                        <li className="flex items-center"><CheckIcon /><span>Reportes avanzados</span></li>
                        <li className="flex items-center"><CheckIcon /><span>Gestor de cuenta dedicado</span></li>
                    </ul>
                    <button onClick={handleScrollToCta} className="w-full bg-slate-200 text-indigo-600 font-bold py-3 rounded-lg hover:bg-slate-300 transition-colors">Solicitar Cotización</button>
                </div>

            </div>
             <p className="text-xs text-gray-500 mt-8">Nota: Los costos por conversación de la API de WhatsApp de Meta se facturan por separado de forma transparente.</p>
        </div>
      </section>

      {/* CTA Form Section */}
      <section id="cta" className="py-20 px-4 bg-slate-50">
          <div className="max-w-lg mx-auto">
            <h3 className="text-3xl font-bold font-display text-gray-900 mb-4 text-center">Empezá tu Prueba Gratuita de 5 Días</h3>
            <p className="text-lg text-gray-600 mb-8 text-center">Completá el formulario y te contactaremos para configurar tu agente IA. Sin compromiso.</p>
            
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200 text-left">
              {formStatus.status === 'success' ? (
                <div className="text-center py-10">
                  <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold font-display mb-2 text-green-700">¡Solicitud Enviada!</h3>
                  <p className="text-gray-700">{formStatus.message}</p>
                </div>
              ) : (
                <form name="eva-ia-demo" onSubmit={handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="eva-ia-demo" />
                  <p className="hidden"><label>No llenar si eres humano: <input name="bot-field" /></label></p>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name-eva" className="block text-sm font-semibold text-gray-700 mb-2">Nombre</label>
                      <input type="text" id="name-eva" name="name" required value={formData.name} onChange={handleChange} disabled={isSubmitting} className="w-full bg-slate-100 border border-slate-300 text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color-dark)] transition-shadow disabled:opacity-50" />
                    </div>
                    <div>
                      <label htmlFor="email-eva" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <input type="email" id="email-eva" name="email" required value={formData.email} onChange={handleChange} disabled={isSubmitting} className="w-full bg-slate-100 border border-slate-300 text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color-dark)] transition-shadow disabled:opacity-50" />
                    </div>
                    <div>
                      <label htmlFor="phone-eva" className="block text-sm font-semibold text-gray-700 mb-2">Número de Contacto</label>
                      <input type="tel" id="phone-eva" name="phone" required placeholder="Ej: +54 9 11 12345678" value={formData.phone} onChange={handleChange} disabled={isSubmitting} className="w-full bg-slate-100 border border-slate-300 text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color-dark)] transition-shadow disabled:opacity-50" />
                    </div>
                    <div>
                      <button type="submit" disabled={isSubmitting} className="w-full bg-[var(--accent-color-dark)] hover:bg-indigo-700 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg shadow-indigo-500/30 transform transition-transform duration-300 hover:scale-105 disabled:bg-indigo-300 disabled:cursor-not-allowed">
                        {isSubmitting ? 'Enviando...' : 'Comenzar Prueba Gratis'}
                      </button>
                    </div>
                    {formStatus.status === 'error' && <p className="text-red-500 text-center">{formStatus.message}</p>}
                  </div>
                </form>
              )}
            </div>
          </div>
      </section>

    </div>
  );
};

export default AIAgentLP;
