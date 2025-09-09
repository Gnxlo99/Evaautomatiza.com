import React from 'react';
import { Link } from 'react-router-dom';
import { profiles } from '../data/profiles';

const BlogLandingPages: React.FC = () => {
  // Use a relevant profile for the header image
  const profile = profiles.find(p => p.id === 'creador-de-soluciones');

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <article className="
          [&_p]:text-lg [&_p]:text-gray-300 [&_p]:leading-relaxed [&_p]:mb-6
          [&_h2]:text-3xl [&_h2]:md:text-4xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:text-indigo-300 [&_h2]:border-b-2 [&_h2]:border-indigo-500 [&_h2]:pb-4 [&_h2]:font-display
          [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:text-gray-100 [&_h3]:font-display
          [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:mt-6 [&_h4]:mb-3 [&_h4]:text-gray-200 [&_h4]:font-display
          [&_h5]:text-lg [&_h5]:font-semibold [&_h5]:mt-5 [&_h5]:mb-2 [&_h5]:text-gray-200 [&_h5]:font-display
          [&_ul]:list-disc [&_ul]:list-outside [&_ul]:pl-6 [&_ul]:space-y-3 [&_ul]:mb-6 [&_ul]:text-lg [&_ul]:text-gray-300 [&_ul]:leading-relaxed
          [&_ol]:list-decimal [&_ol]:list-outside [&_ol]:pl-6 [&_ol]:space-y-3 [&_ol]:mb-6 [&_ol]:text-lg [&_ol]:text-gray-300 [&_ol]:leading-relaxed
          [&_a]:text-brand-accent [&_a:hover]:underline
          [&_strong]:font-semibold [&_strong]:text-white
          [&_code]:bg-gray-700 [&_code]:text-indigo-300 [&_code]:font-mono [&_code]:rounded-md [&_code]:px-2 [&_code]:py-1 [&_code]:text-base
          [&_blockquote]:border-l-4 [&_blockquote]:border-indigo-500 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:my-6 [&_blockquote]:py-2 [&_blockquote]:bg-gray-800/50
          [&_blockquote_p]:mb-2 [&_blockquote_p]:text-gray-400
        ">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-8 leading-relaxed font-display">
            Tu Web es un Balde con Agujeros. Esta es la Herramienta para Taparlos.
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Conoces la historia. Te rompes la cabeza creando contenido para TikTok, optimizas tu web, inviertes tiempo y energía para atraer visitantes. Y funciona, consigues algo de tráfico. Pero la realidad golpea: nadie te contacta. Nadie se suscribe. Nadie compra.
          </p>
          <p>
            <strong>Tu web es un balde con agujeros.</strong> Viertes tráfico valioso por arriba y se escapa por las grietas de una estrategia de conversión que no funciona.
          </p>
          <p>
            El problema no es tu tráfico. El problema es a dónde lo estás enviando.
          </p>
          <p>
            La solución es una de las herramientas más potentes y malentendidas del marketing digital: la <strong>landing page</strong> (o página de aterrizaje). No es una página más. Es tu mejor vendedor. Y hoy vas a entender por qué es la clave para que dejes de tirar tu esfuerzo a la basura.
          </p>
          
          {profile?.headerImageUrl && (
            <figure className="my-12">
              <img 
                src={profile.headerImageUrl} 
                alt="Representación visual de una landing page convirtiendo tráfico"
                className="w-full h-auto rounded-xl shadow-2xl object-cover"
                style={{ aspectRatio: '16/9' }}
              />
              <figcaption className="text-center text-sm text-gray-500 mt-4">
                Una landing page enfoca todo el tráfico en una única acción, maximizando la conversión.
              </figcaption>
            </figure>
          )}

          <h2>Qué es una Landing Page (y por qué NO es tu página de inicio)</h2>
          <p>
            Confundir tu página de inicio (homepage) con una landing page es el error #1. Es como intentar clavar un clavo con un destornillador.
          </p>
          <p>
            Tu <strong>Homepage</strong> es el <strong>RECEPCIONISTA</strong> de un hotel. Su trabajo es saludar y señalar en 10 direcciones distintas: "el bar está por allá, los ascensores a la izquierda, el blog al fondo..." Su objetivo es que el visitante explore.
          </p>
          <p>
            Una <strong>Landing Page</strong> es el <strong>MEJOR VENDEDOR</strong> de tu equipo, encerrado en una habitación con un cliente y un único contrato sobre la mesa. Su objetivo es cerrar ESE trato.
          </p>
          <blockquote>
            <p>Una landing page es una página independiente, diseñada con un único y obsesivo objetivo: la conversión. No tiene menú de navegación, no tiene enlaces a otras partes de tu web. Solo tiene dos opciones para el visitante: hacer la acción que le pides, o irse.</p>
          </blockquote>
          <p>
            Esta eliminación de distracciones es una táctica brutalmente efectiva. Guía al usuario por un túnel enfocado en una sola decisión, haciendo que convertir sea el camino más fácil.
          </p>

          <h2>Los 7 Superpoderes de una Landing Page (Por qué la necesitas AHORA)</h2>
          <ul>
            <li><strong>Dispara tus Conversiones:</strong> Al eliminar las distracciones y enfocarse en una sola acción, la probabilidad de que un visitante se convierta en lead o cliente se multiplica. Es la forma más directa de obtener más resultados con el mismo tráfico.</li>
            <li><strong>Genera Leads de Alta Calidad:</strong> Es la máquina perfecta para capturar emails. Ofreces algo de valor (una guía, una consulta) a cambio de su contacto. No obtienes un email cualquiera, obtienes el de alguien que está activamente interesado en lo que ofreces.</li>
            <li><strong>Maximiza el Retorno de tu Publicidad:</strong> Cada clic de un anuncio cuesta plata. Enviar ese clic a una landing page específica para esa oferta (en lugar de a tu homepage genérica) asegura que cada peso invertido tenga la máxima probabilidad de generar un retorno. Reduce tu costo por cliente y hace que la publicidad sea rentable.</li>
            <li><strong>Valida Ideas de Negocio (Barato y Rápido):</strong> ¿Tienes una idea para un nuevo producto o servicio? No pases 6 meses construyéndolo. Crea una landing page en un fin de semana, invierte $50 USD en anuncios y mide si la gente deja su email. Es la forma más rápida y barata de probar si tu idea le interesa a alguien en el mundo real.</li>
            <li><strong>Permite Hacer Pruebas Científicas (Test A/B):</strong> Como solo tiene un objetivo, es muy fácil de medir. Puedes crear dos versiones de la página cambiando solo el título y ver cuál funciona mejor. Esto convierte tu marketing en una ciencia, no en un juego de adivinanzas.</li>
            <li><strong>Construye Confianza y Credibilidad:</strong> Es el lugar perfecto para poner tus "señales de confianza": testimonios de clientes, logos de empresas con las que has trabajado, casos de éxito. Le demuestras al visitante que eres una opción segura y profesional.</li>
            <li><strong>Permite la Hiper-Segmentación:</strong> Puedes crear una landing page diferente para cada tipo de cliente. Una para abogados, una para dentistas, una para startups. Hablarle directamente a cada segmento con un mensaje personalizado aumenta drásticamente la conexión y la conversión.</li>
          </ul>
          
          <h2>Anatomía de una Landing Page que Vende: Los 10 Elementos Clave</h2>
          <p>
            Crear una landing page efectiva es seguir un plano. Estos son los 10 bloques que no te pueden faltar.
          </p>
          <ol>
            <li><strong>Título que Engancha:</strong> Claro, corto y enfocado en el beneficio principal. Debe responder a la pregunta: "¿Qué hay aquí para mí?".</li>
            <li><strong>Subtítulo que Persuade:</strong> Expande la idea del título y da un poco más de contexto.</li>
            <li><strong>Propuesta de Valor Única (PVU):</strong> La combinación de tu título y subtítulo debe dejar clarísimo qué ofreces y por qué eres la mejor opción.</li>
            <li><strong>Una Imagen o Video de Impacto:</strong> Muestra tu producto o el resultado de tu servicio. Una imagen vale más que mil palabras.</li>
            <li><strong>Texto Persuasivo (Copy):</strong> Párrafos cortos. Listas. Negritas. Haz que el texto sea fácil de escanear. Enfócate siempre en los beneficios, no en las características.</li>
            <li><strong>Prueba Social Irrefutable:</strong> Testimonios reales con nombres y fotos. Reseñas. Logos de clientes. Demuéstrale al visitante que otros ya han confiado en ti y han ganado.</li>
            <li><strong>Llamada a la Acción (CTA) Imposible de Ignorar:</strong> Un botón grande, con un color que contraste y un texto que incite a la acción. En lugar de "Enviar", usa "Obtener mi Guía Gratuita" o "Empezar mi Prueba Ahora".</li>
            <li><strong>Formulario Simple:</strong> Pide la menor cantidad de información posible. Cada campo extra que añades es una razón más para que alguien abandone. Para un newsletter, solo el email.</li>
            <li><strong>Diseño sin Distracciones:</strong> ¡Quita el menú de navegación principal! El único camino para salir de la página debe ser a través de tu botón de CTA.</li>
            <li><strong>Carga Rápida y Adaptable a Móviles:</strong> Si tarda más de 3 segundos en cargar o no se ve bien en un celular, has perdido la venta.</li>
          </ol>

          <h2>¿Y esto qué tiene que ver con mi Perfil?</h2>
          <p>
            Si tu resultado en el IA-Navegador fue "El Gestor de Proyectos", "El Conector de Oportunidades" o "El Creador de Soluciones", la landing page no es una opción: es tu herramienta de trabajo principal. Es la página que usarás para presentar tus paquetes de servicios, para capturar leads para tus clientes o para vender tu micro-producto digital.
          </p>
          <p>
            <strong>Dominar la creación de landing pages es una de las habilidades más rentables que puedes aprender.</strong>
          </p>
          
          <h2>Conclusión: Tu Próximo Paso</h2>
          <p>
            El mensaje es claro: deja de enviar tráfico a tu página de inicio.
          </p>
          <p>
            Tu misión no es rediseñar toda tu web. Es adoptar un enfoque quirúrgico. Elige UNA oferta o servicio que quieras potenciar y comprométete a construir UNA landing page dedicada solo a eso.
          </p>
          <p>
            Aplica estos principios, mide los resultados y verás cómo ese balde con agujeros empieza a retener cada vez más agua.
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

export default BlogLandingPages;
