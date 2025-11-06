import React from 'react';

const AIAgentLP: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans" style={{'--accent-color-dark': '#2563EB', '--accent-color-light': '#38BDF8'} as React.CSSProperties}>

      {/* Hero Section */}
      <header className="bg-slate-50 text-center py-20 px-4 relative overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 font-display leading-tight">
            ¿Harto de perder ventas después de las 7 PM?
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-color-dark)] to-[var(--accent-color-light)] mb-8 font-display">
            EVA IA PRO gestiona, califica y nunca duerme.
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
            <div className="bg-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <p className="text-6xl font-extrabold text-[var(--accent-color-dark)] font-display">+60%</p>
              <h3 className="text-xl font-bold text-gray-900 mt-2">Horas Ahorradas</h3>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <p className="text-6xl font-extrabold text-[var(--accent-color-dark)] font-display">+35%</p>
              <h3 className="text-xl font-bold text-gray-900 mt-2">Conversiones Calificadas</h3>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <p className="text-6xl font-extrabold text-[var(--accent-color-dark)] font-display">Instantáneo</p>
              <h3 className="text-xl font-bold text-gray-900 mt-2">Tiempo de Respuesta</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why EVA IA? (DFY) Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold font-display text-gray-900 mb-6">EVA IA no es una herramienta, es tu nuevo empleado más eficiente.</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p><strong>Experto a Medida:</strong> Entrenamos a tu agente IA con la personalidad y el conocimiento de tu negocio. Es como clonar a tu mejor vendedor, pero hacerlo infalible y disponible 24/7.</p>
              <p><strong>Filtro Humano Inteligente:</strong> Tu equipo deja de perder tiempo con preguntas repetitivas. La IA gestiona el 90% de las conversaciones y solo deriva a un humano cuando el cliente está listo para comprar o necesita atención especializada.</p>
              <p><strong>Gestión Completa (DFY):</strong> Olvídate de la complejidad técnica. Nosotros nos encargamos de las APIs, la automatización con Make.com y el mantenimiento constante. Tú solo pagas y ves los resultados.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-2xl border border-slate-200">
            <div className="font-sans text-sm p-4 bg-gray-200 rounded-lg bg-cover" style={{backgroundImage: "url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')"}}>
                <div className="space-y-3">
                    <div className="flex justify-end">
                        <div className="bg-white text-gray-800 rounded-2xl rounded-br-none p-3 max-w-xs shadow">
                            Hola, ¿cuáles son los precios de la membresía anual del club?
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="bg-gradient-to-r from-blue-500 to-sky-500 text-white rounded-2xl rounded-bl-none p-3 max-w-xs shadow">
                            ¡Hola! Gracias por tu interés en Club Fénix. La membresía anual tiene un costo de $120.000 ARS. Incluye acceso ilimitado a todas las instalaciones y clases. ¿Te gustaría que te inscriba?
                        </div>
                    </div>
                     <div className="flex justify-end">
                        <div className="bg-white text-gray-800 rounded-2xl rounded-br-none p-3 max-w-xs shadow">
                            Sí, por favor!
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="bg-gradient-to-r from-blue-500 to-sky-500 text-white rounded-2xl rounded-bl-none p-3 max-w-xs shadow">
                           ¡Excelente! Te estoy pasando con nuestro asesor, Juan, para que complete tu inscripción. Te contactará en breve. ¡Bienvenido a Fénix!
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Functionality & Flow Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-display text-gray-900 mb-6">Un Flujo de Conversación Diseñado para Vender</h2>
          <p className="text-lg text-gray-600 mb-12">Integramos tu agente en los canales que tus clientes ya usan, creando una experiencia fluida y natural.</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {/* WhatsApp Icon */}
            <div className="flex items-center gap-3"><svg className="w-10 h-10 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg> <span className="text-xl font-semibold">WhatsApp</span></div>
            {/* Instagram Icon */}
            <div className="flex items-center gap-3"><svg className="w-10 h-10 text-pink-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg> <span className="text-xl font-semibold">Instagram</span></div>
            {/* Google Sheets Icon */}
            <div className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-700" viewBox="0 0 24 24" fill="currentColor"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13,3.5L18.5,9H13V3.5M12,14H14V17H12V14M15,14H17V19H15V14M9,14H11V19H9V14Z" /></svg><span className="text-xl font-semibold">Google Sheets</span></div>
             {/* Google Calendar Icon */}
            <div className="flex items-center gap-3"><svg className="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" /></svg><span className="text-xl font-semibold">Google Calendar</span></div>
          </div>
        </div>
      </section>

      {/* Pricing & Final CTA Section */}
      <section id="cta" className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-display text-gray-900 mb-6">Simple, Transparente y Sin Límites Ocultos.</h2>
          <div className="bg-white border-2 border-[var(--accent-color-dark)] rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 font-display">Plan EVA IA PRO</h3>
            <p className="text-gray-600 mt-2">Todo lo que necesitas para vender 24/7</p>
            <div className="my-8">
                <p className="text-gray-600">Instalación (Pago Único)</p>
                <p className="text-5xl font-extrabold text-gray-900">AR$50.000</p>
            </div>
            <div className="my-8">
                <p className="text-gray-600">Servicio Mensual (DFY)</p>
                <p className="text-5xl font-extrabold text-gray-900">$100 <span className="text-2xl font-bold">USD</span></p>
                <p className="text-gray-500 text-sm mt-1">/ mes</p>
            </div>
            <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-green-500 font-bold mr-3 mt-1">✔</span><span>Entrenamiento y personalización del Agente IA.</span></li>
                <li className="flex items-start"><span className="text-green-500 font-bold mr-3 mt-1">✔</span><span>Integración con WhatsApp e Instagram.</span></li>
                <li className="flex items-start"><span className="text-green-500 font-bold mr-3 mt-1">✔</span><span>Hasta 2.000 consultas/mes incluidas.</span></li>
                <li className="flex items-start"><span className="text-green-500 font-bold mr-3 mt-1">✔</span><span>Mantenimiento y optimización continua por expertos.</span></li>
            </ul>
            <a href="#cta" className="mt-10 block w-full bg-[var(--accent-color-dark)] hover:bg-blue-700 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg shadow-blue-500/30 transform transition-transform duration-300 hover:scale-105">
              Comienza a Vender 24/7
            </a>
            <p className="text-xs text-gray-500 mt-6">Nota: Los costos por conversación de Meta (WhatsApp) se facturan por separado de forma transparente.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-white text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Eva Automatiza. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default AIAgentLP;
