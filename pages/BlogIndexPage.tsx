import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    path: '/blog/landing-pages-convierten',
    title: 'Tu Web es un Balde con Agujeros',
    description: 'Descubre por qué las landing pages son la clave para dejar de tirar tu esfuerzo a la basura y empezar a convertir visitantes.',
    imageUrl: '/landing-pages-blog-card.jpeg',
    category: 'article'
  },
  {
    path: '/blog/5-errores-landing-page',
    title: '5 Errores Comunes en tu Landing Page que te Hacen Perder Ventas',
    description: 'Identifica y corrige los errores que están saboteando tus conversiones y empieza a ver resultados reales.',
    imageUrl: '/blog-errores-lp.jpeg',
    category: 'article'
  },
  {
    path: '/blog/landing-page-vs-sitio-web',
    title: 'Landing Page vs. Sitio Web: ¿Cuál necesitas?',
    description: 'Entiende la diferencia fundamental y aprende a usar la herramienta correcta para cada objetivo de tu negocio.',
    imageUrl: '/blog-lp-vs-web.jpeg',
    category: 'article'
  },
  {
    path: '/blog/anatomia-landing-page-convierte',
    title: 'La Anatomía de una Landing Page que Convierte (Guía paso a paso)',
    description: 'El plano exacto, sección por sección, para construir una página diseñada para la máxima conversión.',
    imageUrl: '/blog-anatomia-lp.jpeg',
    category: 'article'
  },
  {
    path: '/blog/landing-page-vendedor-digital',
    title: 'La Landing Page como tu Vendedor Digital 24/7',
    description: 'Cómo transformar una simple página en tu mejor vendedor, uno que nunca duerme y siempre cierra.',
    imageUrl: '/blog-vendedor-digital-lp.jpeg',
    category: 'article'
  },
  {
    path: '/blog/instagram-clientes-landing-page',
    title: 'Cómo Conseguir Clientes de Instagram con una Landing Page',
    description: 'Convierte seguidores en clientes. La estrategia exacta para usar el "link en bio" de forma inteligente.',
    imageUrl: '/blog-instagram-lp.jpeg',
    category: 'article'
  },
  {
    path: '/blog/guia-dropping-services',
    title: 'Guía Definitiva: Dropping Services',
    description: 'Para Gestores de Proyectos que quieren lanzar un negocio de servicios sin ser expertos técnicos.',
    profile: 'El Gestor de Proyectos',
    imageUrl: '/dropping-services.jpeg',
    category: 'guide'
  },
  {
    path: '/blog/guia-curador-estrategico',
    title: 'Guía Definitiva: Newsletter de Curación',
    description: 'Para Curadores Estratégicos que buscan monetizar su pasión por la información.',
    profile: 'El Curador Estratégico',
    imageUrl: '/newsletter-curation.jpeg',
    category: 'guide'
  },
  {
    path: '/blog/guia-arquitecto-digital',
    title: 'Guía Definitiva: SEO Programático',
    description: 'Para Arquitectos Digitales listos para construir imperios de ingresos pasivos.',
    profile: 'El Arquitecto Digital',
    imageUrl: '/programmatic-seo.jpeg',
    category: 'guide'
  },
  {
    path: '/blog/guia-conector-oportunidades',
    title: 'Guía Definitiva: Generación de Leads B2B',
    description: 'Para Conectores de Oportunidades que quieren monetizar su red de contactos.',
    profile: 'El Conector de Oportunidades',
    imageUrl: '/b2b-leads.jpeg',
    category: 'guide'
  },
  {
    path: '/blog/guia-mercader-digital',
    title: 'Guía Definitiva: Flipping de Activos Digitales',
    description: 'Para Mercaderes Digitales que buscan generar ganancias rápidas comprando y vendiendo webs.',
    profile: 'El Mercader Digital',
    imageUrl: '/digital-flipping.jpeg',
    category: 'guide'
  },
  {
    path: '/blog/guia-creador-soluciones',
    title: 'Guía Definitiva: Micro-Productos Digitales',
    description: 'Para Creadores de Soluciones que quieren empaquetar su conocimiento en productos vendibles.',
    profile: 'El Creador de Soluciones',
    imageUrl: '/micro-products.jpeg',
    category: 'guide'
  },
  {
    path: '/blog/guia-editor-ia',
    title: 'Guía Definitiva: Sitios de Nicho con IA',
    description: 'Para Editores con IA que quieren construir imperios de contenido a gran escala.',
    profile: 'El Editor con IA',
    imageUrl: '/ai-niche-sites.jpeg',
    category: 'guide'
  },
  {
    path: '/blog/guia-operador-ecommerce',
    title: 'Guía Definitiva: Amazon FBA / Mercado Libre',
    description: 'Para Operadores de E-commerce listos para construir una marca de productos físicos.',
    profile: 'El Operador de E-commerce',
    imageUrl: '/amazon-fba.jpeg',
    category: 'guide'
  },
  {
    path: '/blog/guia-consultor-especialista',
    title: 'Guía Definitiva: Freelancing de Alto Valor',
    description: 'Para Consultores Especialistas que quieren convertir su habilidad en un negocio premium.',
    profile: 'El Consultor Especialista',
    imageUrl: '/high-value-freelancing.jpeg',
    category: 'guide'
  },
  {
    path: '/blog/guia-moderador-comunidades',
    title: 'Guía Definitiva: Gestión de Comunidades Pagas',
    description: 'Para Moderadores de Comunidades que buscan un ingreso estable cuidando espacios digitales.',
    profile: 'El Moderador de Comunidades',
    imageUrl: '/community-management.jpeg',
    category: 'guide'
  },
];

const articles = blogPosts.filter(post => post.category === 'article');
const guides = blogPosts.filter(post => post.category === 'guide');

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => (
    <Link 
        to={post.path} 
        className="flex flex-col bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition-colors duration-300 transform hover:-translate-y-1 overflow-hidden group"
    >
        {post.imageUrl && (
            <div className="overflow-hidden aspect-[16/10] bg-gray-900">
                <img 
                    src={post.imageUrl} 
                    alt={`Imagen del artículo del blog: ${post.title}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
        )}
        <div className="flex-grow flex flex-col p-6">
            <div className="flex-grow">
                {post.profile && <p className="text-sm font-semibold text-indigo-400 mb-2">{post.profile}</p>}
                <h2 className="text-2xl font-bold text-white mb-3 font-display">{post.title}</h2>
                <p className="text-gray-400 text-base">{post.description}</p>
            </div>
            <span className="mt-4 inline-block text-brand-accent font-bold hover:underline">
                Leer artículo &rarr;
            </span>
        </div>
    </Link>
);


const BlogIndexPage: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-4 font-display">
                El Blog de Eva Automatiza
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Estrategias para atraer, convencer y convertir visitantes en clientes. Aprende a construir la presencia online que tu negocio necesita para crecer.
            </p>
        </header>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 font-display">Artículos de Estrategia</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.sort((a, b) => a.title.localeCompare(b.title)).map((post) => (
                    <BlogCard key={post.path} post={post} />
                ))}
            </div>
        </section>

        <section>
            <h2 className="text-3xl font-bold text-center mb-8 font-display">Guías Definitivas por Perfil</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {guides.sort((a, b) => a.title.localeCompare(b.title)).map((post) => (
                    <BlogCard key={post.path} post={post} />
                ))}
            </div>
        </section>
      </div>
    </div>
  );
};

export default BlogIndexPage;
