import React from 'react';
import { Link } from 'react-router-dom';

const BlogErroresLandingPage: React.FC = () => {
  const headerImageUrl = '/blog-errores-lp.jpeg';

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
            5 Errores en tu Landing Page que Están Destruyendo tus Ventas (y Cómo Solucionarlos)
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Has hecho el trabajo duro. Has creado una oferta, has montado una campaña de anuncios y el tráfico está llegando a tu landing page. Pero hay un problema: suena el grillo. Nadie convierte. Sientes que estás quemando dinero.
          </p>
          <p>
            La buena noticia es que no tienes que rediseñar todo desde cero. Lo más probable es que estés cometiendo uno de los cinco errores capitales que sabotean el 90% de las landing pages.
          </p>
          <p>
            Hoy vamos a diagnosticar tu página. Identifica estos errores, corrígelos, y verás cómo tu tasa de conversión empieza a despegar. Si quieres el plano completo de cómo construirla bien desde el principio, consulta nuestra guía sobre la <Link to="/blog/anatomia-landing-page-convierte">anatomía de una landing page que convierte</Link>.
          </p>
          
          <figure className="my-12">
            <img 
              src={headerImageUrl}
              alt="Diagrama mostrando fugas de conversión en una landing page"
              className="w-full h-auto rounded-xl shadow-2xl object-contain bg-gray-900"
              style={{ aspectRatio: '16/9' }}
            />
            <figcaption className="text-center text-sm text-gray-500 mt-4">
              Cada error es un agujero por donde se escapan tus clientes potenciales.
            </figcaption>
          </figure>

          <h2>Error 1: Tu Título es Confuso o Irrelevante</h2>
          <p>
            El título (o H1) es la primera —y a veces la única— cosa que un visitante leerá. Tienes 3 segundos para convencerlo de que está en el lugar correcto. Si tu título es vago, ingenioso pero no claro, o no coincide con el anuncio que lo trajo aquí, el visitante pulsará el botón de "atrás" sin piedad.
          </p>
          <h3>La Solución: El Título "Claro como el Agua"</h3>
          <ul>
            <li><strong>Enfócate en el Beneficio, no en la Característica:</strong> Nadie compra un "taladro de 1/4 de pulgada". Compran un "agujero de 1/4 de pulgada".</li>
            <li><strong>Sé Específico:</strong> "Aumenta tus Ventas" es débil. "Duplica tus Leads de Instagram en 30 Días" es poderoso.</li>
            <li><strong>Coherencia Anuncio-Página:</strong> El mensaje de tu anuncio y el de tu título deben ser casi idénticos. Si el anuncio promete "Clases de Guitarra para Principiantes", el título no puede ser "Desata tu Estrella de Rock Interior".</li>
          </ul>
          <blockquote>
            <p><strong>Mal Título:</strong> "Bienvenido a nuestra plataforma de sinergias innovadoras".</p>
            <p><strong>Buen Título:</strong> "Gestiona todos tus Proyectos en un solo Lugar y Ahorra 10 Horas a la Semana".</p>
          </blockquote>

          <h2>Error 2: Ofreces un Buffet Libre de Opciones (Múltiples CTAs)</h2>
          <p>
            Este es el asesino silencioso de las conversiones. Pones un botón para "Comprar Ahora", otro para "Saber Más", un enlace al blog, iconos de redes sociales, y el menú de navegación completo de tu web. Crees que estás dando opciones, pero en realidad estás causando parálisis por análisis. Este error se deriva de confundir una <Link to="/blog/landing-page-vs-sitio-web">landing page con un sitio web</Link>.
          </p>
          <h3>La Solución: El Objetivo Único y Obsesivo</h3>
          <ul>
            <li><strong>Una Página, un Objetivo:</strong> Decide UNA ÚNICA acción que quieres que el usuario realice y elimina todo lo demás.</li>
            <li><strong>Elimina el Menú de Navegación:</strong> Es la distracción número uno. En una landing page, los únicos caminos son "convertir" o "irse".</li>
            <li><strong>Un Botón Principal:</strong> Ten un único Call-to-Action (CTA) principal. Puedes repetirlo a lo largo de la página, pero todos los botones deben llevar a la misma acción.</li>
          </ul>

          <h2>Error 3: No le das a Nadie una Razón para Confiar en Ti (Cero Prueba Social)</h2>
          <p>
            Internet está lleno de promesas vacías. ¿Por qué un extraño debería confiar en ti con su dinero o su email? Si no muestras pruebas de que eres legítimo y de que tu solución funciona, estás pidiendo un acto de fe que la mayoría de la gente no está dispuesta a hacer.
          </p>
          <h3>La Solución: Construye una Fortaleza de Confianza</h3>
          <ul>
            <li><strong>Testimonios con Nombre y Foto:</strong> Un testimonio anónimo no vale nada. Uno con nombre completo, empresa y una foto real es oro puro.</li>
            <li><strong>Logos de Clientes o Medios:</strong> Si has trabajado con empresas conocidas o has aparecido en prensa, presume de ello. Es un atajo a la credibilidad.</li>
            <li><strong>Reseñas y Calificaciones:</strong> Muestra tus estrellas de Google, Capterra o la plataforma que sea.</li>
            <li><strong>Estudios de Caso:</strong> Muestra resultados reales y cuantificables. "Aumentamos las ventas del Cliente X en un 250%".</li>
          </ul>

          <h2>Error 4: Tu Formulario Parece un Interrogatorio</h2>
          <p>
            Has convencido al usuario. Hace clic en tu CTA y se encuentra con un formulario que pide su nombre, apellido, email, teléfono, empresa, cargo, número de empleados y su tipo de sangre. Cada campo extra que pides es un obstáculo que reduce drásticamente la probabilidad de que lo completen.
          </p>
          <h3>La Solución: Pide lo Mínimo Indispensable</h3>
          <ul>
            <li><strong>La Regla de Oro:</strong> Pide solo la información que necesitas para el siguiente paso de tu proceso.</li>
            <li><strong>Para un Newsletter o Lead Magnet:</strong> Solo el email. Nada más. Puedes pedir el nombre en un paso posterior si es necesario.</li>
            <li><strong>Para una Consulta de Ventas:</strong> Email, nombre y quizás un campo para que describan su problema. Pide el teléfono en el email de confirmación, no en el primer contacto.</li>
            <li><strong>Menos es Más:</strong> Reducir de 4 a 3 campos puede aumentar tus conversiones en un 25%.</li>
          </ul>

          <h2>Error 5: Tu Página es un Desastre en el Móvil</h2>
          <p>
            Más del 60% de tu tráfico probablemente viene de dispositivos móviles. Si tu página tarda una eternidad en cargar en un celular, si el texto es diminuto o si los botones son imposibles de pulsar con un pulgar, estás tirando la mayoría de tu dinero a la basura. Es especialmente crítico si usas tu landing page para captar <Link to="/blog/instagram-clientes-landing-page">clientes desde Instagram</Link>.
          </p>
          <h3>La Solución: Piensa en "Mobile-First"</h3>
          <ul>
            <li><strong>Diseña para el Pulgar:</strong> Asegúrate de que los botones y enlaces sean grandes y fáciles de pulsar.</li>
            <li><strong>Optimiza la Velocidad:</strong> Comprime tus imágenes. Usa herramientas como Google PageSpeed Insights para diagnosticar y arreglar problemas de carga. Cada segundo cuenta.</li>
            <li><strong>Prueba en un Teléfono Real:</strong> No te fíes solo del emulador de tu computadora. Abre la página en tu propio celular y navega por ella. ¿Es una experiencia agradable o frustrante?</li>
          </ul>
          
          <h2>Conclusión: De Auditor a Optimizador</h2>
          <p>
            Una landing page no es una obra de arte que se crea una vez y se olvida. Es una máquina que necesita ser ajustada.
          </p>
          <p>
            Usa esta lista como una checklist. Abre tu landing page ahora mismo y haz una auditoría honesta. Arregla un solo de estos errores hoy y estarás un paso más cerca de tener una página que no solo atrae visitantes, sino que los convierte en clientes.
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

export default BlogErroresLandingPage;
