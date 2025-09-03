import { Profile } from '../types';

export const profiles: Profile[] = [
  {
    id: 'gestor-de-proyectos',
    name: 'El Gestor de Proyectos',
    description: 'Tu fortaleza es la organización y la ejecución. Conectas las piezas para que las cosas sucedan.',
    mainBusinessModel: 'Dropping Services',
    imageUrl: '/dropping-services.jpeg',
    headerImageUrl: '/dropping-services-header.jpeg',
    detailedGuide: `El "Dropping Services" es como el dropshipping, pero con servicios. Tu rol es ser el intermediario de confianza. Identificas una necesidad del mercado (ej: edición de video para YouTubers), encontrás clientes dispuestos a pagar por una solución de calidad, y subcontratás a freelancers expertos para ejecutar el trabajo. Tu valor no está en hacer el trabajo técnico, sino en la gestión del proyecto, la comunicación con el cliente y el control de calidad.
    
    Tu día a día consiste en prospectar clientes, entender sus necesidades, preparar propuestas y coordinar al equipo de freelancers. La clave es construir un sistema robusto y una red de profesionales fiables. Empiezas con márgenes más pequeños, pero a medida que optimizas el proceso y consigues clientes recurrentes, la rentabilidad aumenta significativamente. Este modelo es ideal para quienes aman la gestión y son excelentes comunicadores, permitiéndote escalar un negocio sin necesidad de ser un experto técnico en todas las áreas.`,
    recommendedTools: [
      { name: 'Trello o Asana', affiliateUrl: '#' },
      { name: 'Fiverr Pro', affiliateUrl: 'https://go.fiverr.com/visit/?bta=1143127&brand=fp' },
      { name: 'Stripe para pagos', affiliateUrl: '#' },
    ],
  },
  {
    id: 'curador-estrategico',
    name: 'El Curador Estratégico',
    description: 'Disfrutas analizando información, encontrando patrones y compartiendo conocimiento valioso.',
    mainBusinessModel: 'Newsletter de Curación',
    imageUrl: '/newsletter-curation.jpeg',
    headerImageUrl: '/newsletter-curation-header.jpeg',
    detailedGuide: `En un mundo saturado de información, la curación es un servicio de alto valor. Tu negocio consiste en crear una newsletter de nicho que ahorre tiempo a tus suscriptores. Eliges un tema que te apasione y donde haya una audiencia profesional (ej: IA para marketing, el futuro del trabajo remoto, biohacking), y cada semana envías un resumen con los 5 enlaces, noticias o herramientas más importantes, junto con un breve análisis tuyo.
    
    El modelo se monetiza a través de suscripciones premium (para contenido exclusivo), patrocinios de marcas que quieren llegar a tu audiencia, o marketing de afiliados de productos que recomiendas. El desafío inicial es construir la lista de suscriptores, lo cual requiere constancia y promoción en redes como Twitter o LinkedIn. Sin embargo, una vez que tienes una audiencia fiel, has construido un activo digital increíblemente valioso y una relación directa con tu comunidad.`,
    recommendedTools: [
      { name: 'Beehiiv (para newsletters)', affiliateUrl: 'https://www.beehiiv.com?via=Gonzalo-Navarro' },
      { name: 'Twitter / X', affiliateUrl: '#' },
      { name: 'Canva para gráficos', affiliateUrl: '#' },
    ],
  },
  {
    id: 'arquitecto-digital',
    name: 'El Arquitecto Digital',
    description: 'Te encanta construir sistemas, automatizar procesos y ver cómo la tecnología trabaja para ti.',
    mainBusinessModel: 'SEO Programático / Automatizaciones',
    imageUrl: '/programmatic-seo.jpeg',
    headerImageUrl: '/programmatic-seo-header.jpeg',
    detailedGuide: `El SEO Programático (pSEO) es la creación de cientos o miles de páginas optimizadas para SEO a partir de una base de datos y plantillas. Por ejemplo, podrías crear un sitio que compare "El mejor software de [categoría] para [industria]" y generar páginas para cada combinación posible. Esto te permite apuntar a miles de palabras clave de "long tail" con un esfuerzo inicial de configuración.
    
    Tu trabajo es identificar un nicho con datos estructurados, conseguir la base de datos (vía scraping o APIs), diseñar una plantilla de página efectiva y lanzar el sitio. La monetización viene principalmente de marketing de afiliados o publicidad. Es un modelo técnico que requiere una mentalidad de sistemas, pero una vez que está funcionando, puede generar ingresos pasivos con un mantenimiento mínimo. Es la máxima expresión de "trabajar inteligentemente, no duramente".`,
    recommendedTools: [
      { name: 'Airtable o Google Sheets', affiliateUrl: '#' },
      { name: 'Webflow o Framer con CMS', affiliateUrl: '#' },
      { name: 'Ahrefs o SEMrush', affiliateUrl: '#' },
    ],
  },
  {
    id: 'conector-de-oportunidades',
    name: 'El Conector de Oportunidades',
    description: 'Eres un networker nato. Disfrutas la conversación uno a uno y conectando gente con soluciones.',
    mainBusinessModel: 'Generación de Leads B2B',
    imageUrl: '/b2b-leads.jpeg',
    headerImageUrl: '/b2b-leads-header.jpeg',
    detailedGuide: `Muchas empresas B2B (que venden a otras empresas) tienen un gran producto pero les cuesta conseguir reuniones con clientes potenciales. Ahí es donde entras tú. Te especializas en un nicho (ej: agencias de marketing, empresas de software SaaS) y ofreces un servicio de generación de leads. Tu trabajo es identificar a los tomadores de decisiones, contactarlos de forma personalizada (vía email o LinkedIn) y agendar una reunión para tu cliente.
    
    Este modelo se suele cobrar con un fijo mensual más una comisión por cada reunión agendada o contrato cerrado. Requiere habilidades de comunicación, persuasión y mucha resiliencia, ya que te enfrentarás a muchos "no". Sin embargo, es un servicio con una demanda altísima y resultados muy medibles, lo que lo hace fácil de vender. Si no te da miedo el contacto en frío y eres bueno construyendo relaciones, puedes generar ingresos muy altos.`,
    recommendedTools: [
      { name: 'LinkedIn Sales Navigator', affiliateUrl: '#' },
      { name: 'Apollo.io o Lemlist', affiliateUrl: '#' },
      { name: 'HubSpot CRM (Gratis)', affiliateUrl: '#' },
    ],
  },
  {
    id: 'mercader-digital',
    name: 'El Mercader Digital',
    description: 'Tienes ojo para el valor y te sientes cómodo con la compra-venta y la negociación.',
    mainBusinessModel: 'Flipping de Dominios/Webs',
    imageUrl: '/digital-flipping.jpeg',
    headerImageUrl: '/digital-flipping-header.jpeg',
    detailedGuide: `El "flipping" es el arte de comprar activos digitales a bajo precio, mejorarlos y venderlos por un beneficio. Esto puede aplicarse a nombres de dominio (comprar dominios expirados con buen historial de SEO y revenderlos) o a sitios web completos. El proceso implica encontrar oportunidades infravaloradas en mercados como Flippa o grupos de Facebook, realizar una auditoría rápida para evaluar su potencial, y luego hacer una oferta.
    
    Una vez adquirido el activo, puedes hacerle mejoras rápidas (rediseño, optimización de contenido, mejora de la monetización) para aumentar su valor y luego ponerlo de nuevo a la venta. Es un modelo que combina habilidades de análisis, negociación y marketing. Requiere capital inicial y tolerancia al riesgo, pero las ganancias pueden ser muy rápidas y sustanciales. Es como la especulación inmobiliaria, pero en el mundo digital.`,
    recommendedTools: [
      { name: 'Flippa o Empire Flippers', affiliateUrl: '#' },
      { name: 'GoDaddy Auctions', affiliateUrl: '#' },
      { name: 'Fiverr Marketplace (para mejorar activos)', affiliateUrl: 'https://go.fiverr.com/visit/?bta=1143127&brand=fiverrmarketplace' },
      { name: 'Google Analytics', affiliateUrl: '#' },
    ],
  },
  {
    id: 'creador-de-soluciones',
    name: 'El Creador de Soluciones',
    description: 'Te gusta crear productos que resuelven problemas específicos, empaquetarlos y venderlos.',
    mainBusinessModel: 'Venta de Micro-Productos Digitales',
    imageUrl: '/micro-products.jpeg',
    headerImageUrl: '/micro-products-header.jpeg',
    detailedGuide: `Un micro-producto digital es una solución específica para un problema específico, vendido a un precio accesible (generalmente menos de $100). Pueden ser plantillas de Notion, bases de datos de Airtable, presets de Lightroom, un ebook muy práctico, o un mini-curso en video. La clave es la especificidad. No vendes "una guía de marketing", vendes "100 prompts de ChatGPT para crear anuncios de Facebook que convierten".
    
    Este modelo te permite crear un producto una vez y venderlo infinitas veces, generando ingresos pasivos. El desafío está en la distribución y el marketing. Necesitas construir una pequeña audiencia en una plataforma (Twitter, TikTok, un blog) para dirigir tráfico a tu producto. Es un modelo excelente para empezar porque te fuerza a aprender sobre marketing, copywriting y ventas a una escala manejable.`,
    recommendedTools: [
      { name: 'Gumroad o Lemon Squeezy', affiliateUrl: '#' },
      { name: 'Notion o Airtable', affiliateUrl: '#' },
      { name: 'Canva para el diseño', affiliateUrl: '#' },
    ],
  },
  {
    id: 'editor-con-ia',
    name: 'El Editor con IA',
    description: 'Entiendes el poder del contenido y cómo la IA puede escalar su creación de forma masiva.',
    mainBusinessModel: 'Sitios de Nicho con IA',
    imageUrl: '/ai-niche-sites.jpeg',
    headerImageUrl: '/ai-niche-sites-header.jpeg',
    detailedGuide: `Este modelo consiste en crear un blog o sitio web enfocado en un nicho muy específico (ej: "cuidados para la planta monstera", "accesorios para el coche eléctrico X") y utilizar herramientas de IA para generar la mayor parte del contenido. Tu rol no es el de un escritor, sino el de un editor y estratega de SEO. Defines la estructura del sitio, investigas las palabras clave y usas la IA para producir borradores de artículos.
    
    Luego, tu trabajo humano de alto valor es verificar la información, editar el texto para darle un toque personal y optimizarlo para los motores de búsqueda. La monetización se logra a través de marketing de afiliados (recomendando productos) y publicidad display. Es un juego de volumen y SEO. Con la IA, puedes crear un sitio con cientos de artículos en cuestión de meses, algo que antes tomaba años.`,
    recommendedTools: [
      { name: 'ChatGPT-4o o Claude 3', affiliateUrl: '#' },
      { name: 'SurferSEO o Frase.io', affiliateUrl: '#' },
      { name: 'WordPress con un tema rápido', affiliateUrl: '#' },
    ],
  },
  {
    id: 'operador-de-ecommerce',
    name: 'El Operador de E-commerce',
    description: 'Te interesa el mundo de los productos físicos, la logística y la construcción de una marca.',
    mainBusinessModel: 'Amazon FBA / Mercado Libre',
    imageUrl: '/amazon-fba.jpeg',
    headerImageUrl: '/amazon-fba-header.jpeg',
    detailedGuide: `Vender en grandes marketplaces como Amazon (con el programa FBA - Fulfillment by Amazon) o Mercado Libre te permite aprovechar su gigantesca base de clientes y su red logística. El modelo FBA, por ejemplo, consiste en encontrar un producto de alta demanda y baja competencia (generalmente en plataformas como Alibaba), importarlo, y enviarlo a los almacenes de Amazon. Ellos se encargan del almacenamiento, el empaquetado, el envío y el servicio al cliente.
    
    Tu trabajo se centra en la investigación de productos, la gestión de proveedores, la optimización de tus listados (fotos, texto, palabras clave) y el marketing dentro de la plataforma. Es un negocio que requiere una inversión inicial significativa para el inventario y tiene una curva de aprendizaje importante, pero el potencial de escala es enorme, pudiendo construir una marca de millones de dólares desde tu casa.`,
    recommendedTools: [
      { name: 'Helium 10 o Jungle Scout', affiliateUrl: '#' },
      { name: 'Alibaba para proveedores', affiliateUrl: '#' },
      { name: 'Fiverr Marketplace (para logos y fotos)', affiliateUrl: 'https://go.fiverr.com/visit/?bta=1143127&brand=fiverrmarketplace' },
      { name: 'Canva para imágenes de producto', affiliateUrl: '#' },
    ],
  },
  {
    id: 'consultor-especialista',
    name: 'El Consultor Especialista',
    description: 'Tienes una habilidad específica de alto valor y prefieres trabajar en profundidad con pocos clientes.',
    mainBusinessModel: 'Freelancing de Alto Valor',
    imageUrl: '/high-value-freelancing.jpeg',
    headerImageUrl: '/high-value-freelancing-header.jpeg',
    detailedGuide: `En lugar de competir por precio en plataformas de freelancers, te posicionas como un experto en un área muy específica y cobras tarifas premium. No eres "un diseñador web", eres "el especialista que optimiza la velocidad de sitios WooCommerce para mejorar la conversión". La clave es la especialización extrema.
    
    Este modelo se basa en construir una marca personal y una reputación sólida. En lugar de buscar trabajo activamente, los clientes vienen a ti. Esto se logra compartiendo tu conocimiento en LinkedIn o un blog, mostrando casos de estudio y haciendo networking estratégico. Requiere tiempo para construir la autoridad, pero te permite trabajar en proyectos más interesantes, con mejores clientes y ganar significativamente más por hora, dándote más libertad y control.`,
    recommendedTools: [
      { name: 'LinkedIn / Twitter', affiliateUrl: '#' },
      { name: 'Web personal (portfolio)', affiliateUrl: '#' },
      { name: 'Calendly para agendar reuniones', affiliateUrl: '#' },
    ],
  },
  {
    id: 'moderador-de-comunidades',
    name: 'El Moderador de Comunidades',
    description: 'Disfrutas creando espacios seguros, fomentando la conversación y conectando a personas con intereses comunes.',
    mainBusinessModel: 'Gestión de Comunidades Pagas',
    imageUrl: '/community-management.jpeg',
    headerImageUrl: '/community-management-header.jpeg',
    detailedGuide: `Cada vez más creadores, coaches y empresas están lanzando comunidades de pago (en plataformas como Discord, Circle o Skool) como parte central de su negocio. Pero gestionar una comunidad activa es un trabajo a tiempo completo. Ahí es donde ofreces tus servicios. Te encargas de dar la bienvenida a nuevos miembros, iniciar conversaciones, organizar eventos online, moderar el contenido y recoger feedback.
    
    Tu rol es esencial para mantener la retención de los miembros, lo que impacta directamente en los ingresos recurrentes del negocio. Puedes empezar ofreciendo tus servicios a un creador que sigas y admires. A medida que ganas experiencia, puedes gestionar varias comunidades a la vez. Es un rol perfecto para personas empáticas, organizadas y que genuinamente disfrutan ayudando a otros a conectar y crecer.`,
    recommendedTools: [
      { name: 'Discord, Circle.so o Skool', affiliateUrl: '#' },
      { name: 'Canva para anuncios de eventos', affiliateUrl: '#' },
      { name: 'Notion para planificación', affiliateUrl: '#' },
    ],
  }
];