import React from 'react';
import { Link } from 'react-router-dom';

const BlogLpVsWeb: React.FC = () => {
  const headerImageUrl = '/blog-lp-vs-web.jpeg';

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <article className="
          [&_p]:text-lg [&_p]:text-gray-300 [&_p]:leading-relaxed [&_p]:mb-6
          [&_h2]:text-3xl [&_h2]:md:text-4xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:text-indigo-300 [&_h2]:border-b-2 [&_h2]:border-indigo-500 [&_h2]:pb-4 [&_h2]:font-display
          [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:text-gray-100 [&_h3]:font-display
          [&_ul]:list-disc [&_ul]:list-outside [&_ul]:pl-6 [&_ul]:space-y-3 [&_ul]:mb-6 [&_ul]:text-lg [&_ul]:text-gray-300 [&_ul]:leading-relaxed
          [&_a]:text-brand-accent [&_a:hover]:underline
          [&_strong]:font-semibold [&_strong]:text-white
          [&_code]:bg-gray-700 [&_code]:text-indigo-300 [&_code]:font-mono [&_code]:rounded-md [&_code]:px-2 [&_code]:py-1 [&_code]:text-base
          [&_blockquote]:border-l-4 [&_blockquote]:border-indigo-500 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:my-6 [&_blockquote]:py-2 [&_blockquote]:bg-gray-800/50
          [&_blockquote_p]:mb-2 [&_blockquote_p]:text-gray-400
        ">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-8 leading-relaxed font-display">
            Landing Page vs. Sitio Web: La Batalla que tu Negocio Necesita que Entiendas
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            "¿Necesito una landing page si ya tengo una web?". "Mi web tiene una página de contacto, ¿no es eso suficiente?". "No entiendo la diferencia, ¿no son ambas solo... páginas en internet?".
          </p>
          <p>
            Esta es una de las confusiones más comunes y costosas en el marketing digital. Pensar que un sitio web y una landing page son intercambiables es como pensar que un martillo y un serrucho sirven para lo mismo. Ambos son herramientas, pero usarlas para el trabajo equivocado es una receta para el desastre (y la frustración).
          </p>
          <p>
            Vamos a terminar con este debate de una vez por todas. Entender la diferencia no es un detalle técnico, es la clave para una estrategia digital que realmente funcione.
          </p>
          
          <figure className="my-12">
            <img 
              src={headerImageUrl}
              alt="Diagrama comparando el flujo de un sitio web (múltiples caminos) con una landing page (un solo camino)"
              className="w-full h-auto rounded-xl shadow-2xl object-contain bg-gray-900"
              style={{ aspectRatio: '16/9' }}
            />
            <figcaption className="text-center text-sm text-gray-500 mt-4">
              Un sitio web fomenta la exploración. Una landing page exige una decisión.
            </figcaption>
          </figure>

          <h2>El Sitio Web: Tu "Tarjeta de Presentación" Digital</h2>
          <p>
            Piensa en tu sitio web completo (tu <code>www.tunegocio.com</code>) como tu <strong>oficina central o tu tienda insignia</strong>. Es el centro de tu universo digital.
          </p>
          <h3>El Objetivo del Sitio Web: Educar y Explorar</h3>
          <p>
            El propósito principal de un sitio web es servir a <strong>múltiples audiencias</strong> y cumplir <strong>múltiples objetivos</strong>. Un visitante puede llegar para:
          </p>
          <ul>
            <li>Saber quién eres (la página "Sobre Nosotros").</li>
            <li>Leer tus artículos (el "Blog").</li>
            <li>Ver todos tus productos o servicios.</li>
            <li>Encontrar tu información de contacto.</li>
            <li>Conocer tu cultura de empresa (la página de "Carreras").</li>
          </ul>
          <p>
            Un sitio web está diseñado para fomentar la <strong>exploración</strong>. Por eso tiene un menú de navegación, enlaces en el pie de página y múltiples llamadas a la acción. Es un destino generalista.
          </p>
          <blockquote>
            <p><strong>En resumen:</strong> Tu sitio web construye tu marca, establece tu credibilidad a largo plazo y sirve como un recurso completo sobre tu negocio.</p>
          </blockquote>

          <h2>La Landing Page: Tu "Vendedor Especialista"</h2>
          <p>
            Ahora, piensa en una landing page como un <Link to="/blog/landing-page-vendedor-digital"><strong>vendedor enfocado y altamente entrenado</strong></Link>, enviado a una misión específica. No se distrae, no habla de otra cosa. Solo tiene un objetivo en mente.
          </p>
          <h3>El Objetivo de la Landing Page: Convertir</h3>
          <p>
            El propósito de una landing page es servir a <strong>una única audiencia</strong> con <strong>un único objetivo</strong>. Es una página independiente, creada específicamente para una campaña de marketing. El visitante que llega aquí lo hace porque hizo clic en un anuncio, un email o un post que le prometía algo muy específico.
          </p>
          <p>
            Una landing page está diseñada para <strong>eliminar la exploración</strong> y fomentar la <strong>acción</strong>. No hay menú de navegación. No hay enlaces al blog. Solo hay información sobre la oferta específica y un claro llamado a la acción (CTA). Para entender sus componentes, puedes leer sobre la <Link to="/blog/anatomia-landing-page-convierte">anatomía de una landing page</Link>.
          </p>
          <blockquote>
            <p><strong>En resumen:</strong> Tu landing page es una máquina de conversión. Su único trabajo es convertir el tráfico de una campaña en leads o ventas.</p>
          </blockquote>

          <h2>La Pregunta Clave: ¿Cuándo Usar Cada Una?</h2>
          <p>Aquí es donde la estrategia entra en juego. La herramienta que elijas depende de la procedencia y la intención de tu tráfico.</p>
          
          <h3>Debes usar tu SITIO WEB cuando:</h3>
          <ul>
            <li>Un usuario busca tu marca directamente en Google.</li>
            <li>Quieres mostrar tu portfolio completo o la historia de tu empresa.</li>
            <li>El objetivo es que los usuarios descubran la amplitud de lo que ofreces.</li>
            <li>Estás construyendo tu SEO a través de un blog de contenido.</li>
          </ul>

          <h3>Debes usar una LANDING PAGE cuando:</h3>
          <ul>
            <li><strong>Estás pagando por tráfico (Google Ads, Facebook Ads, etc.):</strong> ¡Esta es la regla de oro! Cada centavo que inviertes en publicidad debe dirigirse a una página 100% optimizada para esa oferta.</li>
            <li><strong>Promocionas una oferta específica:</strong> Un ebook, un webinar, un descuento, una prueba gratuita. Cada oferta merece su propia landing page.</li>
            <li><strong>Quieres validar una idea de negocio:</strong> Antes de construir el producto, construye la landing page. Si la gente deja su email, tienes un negocio.</li>
            <li><strong>Buscas capturar leads de un canal específico:</strong> Como el <Link to="/blog/instagram-clientes-landing-page">"link en bio" de tu Instagram</Link> o un QR en un evento.</li>
          </ul>

          <h2>La Conclusión: No es una Batalla, es un Equipo</h2>
          <p>
            La pregunta nunca debería ser "¿Landing page O sitio web?". La pregunta correcta es "¿Cómo pueden mi landing page Y mi sitio web trabajar juntos?".
          </p>
          <p>
            La estrategia ganadora es tener un <strong>sitio web sólido como base de tu marca</strong>, y desplegar <strong>landing pages específicas para todas tus campañas de marketing activas</strong>.
          </p>
          <p>
            Tu sitio web es tu base de operaciones. Tus landing pages son tus fuerzas especiales, desplegadas para cumplir misiones críticas. Necesitas ambos para ganar la guerra de la atención y la conversión en el mundo digital. Deja de usar la herramienta equivocada y empieza a darle a cada objetivo la página que se merece.
          </p>
        </article>
        <div className="text-center mt-12 mb-8">
            <Link to="/blog" className="text-brand-accent hover:underline">
                &larr; Volver a todos los artículos
            </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogLpVsWeb;
