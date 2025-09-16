import React from 'react';
import { Link } from 'react-router-dom';

const portfolioItems = [
  {
    id: 1,
    title: 'Landing Page para Consultor de Marketing',
    description: '<b>Problema:</b> Un consultor B2B con una web que no generaba ni un solo lead cualificado.<br/><b>Solución:</b> Diseñamos una landing page ultra-enfocada en su servicio estrella, destacando casos de éxito.<br/><b>Resultado:</b> Capturó 30 leads de alto valor en la primera semana y cerró 3 nuevos clientes en el primer mes.',
    imageUrl: '/portfolio-marketing-consultant.png',
    liveUrl: '/portfolio/marketing-consultant',
    tags: ['Servicios', 'Generación de Leads', 'B2B'],
    testimonial: "'Dejé de quemar dinero en anuncios. Esta página se paga sola cada día.'",
    clientName: "Carlos G., Consultor B2B"
  },
  {
    id: 2,
    title: 'Landing Page para Gimnasio / Entrenador',
    description: '<b>Problema:</b> Un gimnasio local con clases increíbles pero una web que no lograba que la gente reservara su primera visita.<br/><b>Solución:</b> Creamos una página llena de energía, con testimonios potentes y un proceso de reserva en un solo clic.<br/><b>Resultado:</b> Aumentaron las reservas de clases de prueba en un 300%, llenando sus grupos.',
    imageUrl: '/portfolio-gym-trainer.png',
    liveUrl: '/portfolio/gym-trainer',
    tags: ['Negocio Local', 'Conversión', 'Salud y Bienestar'],
    testimonial: "'Nuestras clases ahora están llenas. La página transmite exactamente la energía que se vive aquí.'",
    clientName: "Ana F., Dueña de Powerhouse Gym"
  },
  {
    id: 3,
    title: 'Landing Page para Software (SaaS)',
    description: '<b>Problema:</b> Una startup de software con un producto genial pero una página confusa que no convertía visitantes.<br/><b>Solución:</b> Diseñamos una página limpia que explica los beneficios clave y dirige toda la atención al botón de \'Prueba Gratuita\'.<br/><b>Resultado:</b> La tasa de conversión de visitante a prueba gratuita se disparó en un 80%.',
    imageUrl: '/portfolio-saas.png',
    liveUrl: '/portfolio/saas',
    tags: ['SaaS', 'Tecnología', 'Prueba Gratuita'],
    testimonial: "'Finalmente tenemos una página que vende nuestro producto tan bien como nosotros. El aumento en registros fue inmediato.'",
    clientName: "David L., CEO de SyncFlow"
  },
  {
    id: 4,
    title: 'Landing Page para Agente Inmobiliario',
    description: '<b>Problema:</b> Un agente necesitaba vender una propiedad de lujo, pero los portales genéricos no le hacían justicia.<br/><b>Solución:</b> Creamos una \'micro-web\' exclusiva para la propiedad, con un tour virtual 360° y formulario para visitas privadas.<br/><b>Resultado:</b> La propiedad se vendió en menos de 30 días por encima del precio de venta.',
    imageUrl: '/portfolio-real-estate.png',
    liveUrl: '/portfolio/real-estate',
    tags: ['Bienes Raíces', 'Propiedades', 'Captación de Clientes'],
    testimonial: "'Presentó mi propiedad como una obra de arte. El resultado habla por sí solo: venta récord en tiempo récord.'",
    clientName: "Familia Torres, Vendedores"
  },
  {
    id: 5,
    title: 'Landing Page para Coach de Negocios',
    description: '<b>Problema:</b> Una coach vendía programas de alto valor, pero su web no transmitía la autoridad y el nivel premium de su oferta.<br/><b>Solución:</b> Desarrollamos una landing page con un diseño aspiracional, centrada en testimonios en video.<br/><b>Resultado:</b> Duplicó el precio de sus programas y empezó a atraer clientes de un calibre mucho más alto.',
    imageUrl: '/portfolio-business-coach.png',
    liveUrl: '/portfolio/business-coach',
    tags: ['Coaching', 'Marca Personal', 'Alto Valor'],
    testimonial: "'Esta página me posicionó como la experta que soy. Ahora atraigo a los clientes que siempre quise.'",
    clientName: "Sofía C., Coach de Liderazgo"
  },
  {
    id: 6,
    title: 'Landing Page para Manicurista',
    description: '<b>Problema:</b> Un estudio de uñas boutique dependía de un caótico proceso de reservas por mensajes de Instagram.<br/><b>Solución:</b> Construimos una página visualmente impactante con un sistema de reservas online integrado.<br/><b>Resultado:</b> Automatizó el 90% de sus reservas y aumentó su facturación en un 40%.',
    imageUrl: '/portfolio-manicurist.png',
    liveUrl: '/portfolio/manicurist',
    tags: ['Estética', 'Reservas Online', 'Negocio Local'],
    testimonial: "'Mis clientas aman poder reservar online y yo recuperé mi tiempo. La página es tan elegante como mis diseños.'",
    clientName: "Valentina M., Artista de Uñas"
  },
  {
    id: 7,
    title: 'Landing Page para Abogado/a',
    description: '<b>Problema:</b> Un despacho necesitaba atraer casos de un área de práctica específica, pero su web genérica no generaba confianza.<br/><b>Solución:</b> Diseñamos una página sobria y profesional, enfocada en el servicio con un llamado a la \'Consulta Confidencial\'.<br/><b>Resultado:</b> El número de consultas cualificadas para su especialización se triplicó en 60 días.',
    imageUrl: '/portfolio-lawyer.png',
    liveUrl: '/portfolio/lawyer',
    tags: ['Servicios Legales', 'Confianza', 'Profesional'],
    testimonial: "'En un campo donde la confianza lo es todo, esta página comunica profesionalismo. Los clientes llegan informados.'",
    clientName: "Lic. Ramos, Abogado"
  },
  {
    id: 8,
    title: 'Landing Page para Clínica Dental',
    description: '<b>Problema:</b> Una clínica dental moderna tenía dificultades para que los pacientes agendaran su primera cita a través de su web.<br/><b>Solución:</b> Una página limpia y tranquilizadora, enfocada en la tecnología sin dolor y con un formulario de reserva simple.<br/><b>Resultado:</b> Aumento del 150% en las solicitudes de citas online para nuevos pacientes.',
    imageUrl: '/portfolio-dentist.png',
    liveUrl: '/portfolio/dentist',
    tags: ['Salud', 'Reservas Online', 'Confianza'],
    testimonial: "'La nueva página transmite la calma y profesionalismo de nuestra clínica. Los pacientes llegan sintiéndose seguros.'",
    clientName: "Dra. Elena Valdés, Odontóloga"
  },
];

const PortfolioLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
       {/* New Hero/CTA Section */}
       <section className="bg-gray-900 text-center py-20 px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-6 font-display">
            ¿Listo para lanzar tu negocio en 24 horas?
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Una landing page de alta conversión es la forma más rápida y efectiva de validar tu idea y empezar a conseguir clientes. Yo las construyo por ti.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Contáctame ahora
          </Link>
        </section>

      <div className="p-4 sm:p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Mi Portfolio: Landing Pages que Convierten
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Una colección de páginas funcionales y diseñadas a medida, enfocadas en generar resultados tangibles para distintos nichos de mercado.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.sort((a,b) => a.id - b.id).map((item) => (
              <div key={item.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col group transform transition-transform duration-300 hover:-translate-y-2 border border-transparent hover:border-indigo-500/50">
                <div className="overflow-hidden">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 aspect-[16/10]" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 font-display group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-base mb-4 flex-grow" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                  
                  <blockquote className="bg-gray-900/50 p-4 rounded-lg border-l-4 border-indigo-500 my-4">
                    <p className="text-gray-300 italic">{item.testimonial}</p>
                    <cite className="block text-right text-gray-400 text-sm mt-2 not-italic font-semibold">- {item.clientName}</cite>
                  </blockquote>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag) => (
                      <span key={tag} className="bg-brand-secondary text-indigo-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Link
                      to={item.liveUrl}
                      className="inline-block w-full text-center bg-brand-secondary hover:bg-brand-accent text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Ver Landing Page
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLandingPage;
