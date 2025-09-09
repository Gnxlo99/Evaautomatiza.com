import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    path: '/blog/landing-pages-convierten',
    title: 'Tu Web es un Balde con Agujeros',
    description: 'Descubre por qué las landing pages son la clave para dejar de tirar tu esfuerzo a la basura y empezar a convertir visitantes.',
    imageUrl: '/micro-products-header.jpeg',
    featured: true,
  },
  {
    path: '/blog/guia-dropping-services',
    title: 'Guía Definitiva: Dropping Services',
    description: 'Para Gestores de Proyectos que quieren lanzar un negocio de servicios sin ser expertos técnicos.',
    profile: 'El Gestor de Proyectos',
    imageUrl: '/dropping-services-header.jpeg',
  },
  {
    path: '/blog/guia-curador-estrategico',
    title: 'Guía Definitiva: Newsletter de Curación',
    description: 'Para Curadores Estratégicos que buscan monetizar su pasión por la información.',
    profile: 'El Curador Estratégico',
    imageUrl: '/newsletter-curation-header.jpeg',
  },
  {
    path: '/blog/guia-arquitecto-digital',
    title: 'Guía Definitiva: SEO Programático',
    description: 'Para Arquitectos Digitales listos para construir imperios de ingresos pasivos.',
    profile: 'El Arquitecto Digital',
    imageUrl: '/programmatic-seo-header.jpeg',
  },
  {
    path: '/blog/guia-conector-oportunidades',
    title: 'Guía Definitiva: Generación de Leads B2B',
    description: 'Para Conectores de Oportunidades que quieren monetizar su red de contactos.',
    profile: 'El Conector de Oportunidades',
    imageUrl: '/b2b-leads-header.jpeg',
  },
  {
    path: '/blog/guia-mercader-digital',
    title: 'Guía Definitiva: Flipping de Activos Digitales',
    description: 'Para Mercaderes Digitales que buscan generar ganancias rápidas comprando y vendiendo webs.',
    profile: 'El Mercader Digital',
    imageUrl: '/digital-flipping-header.jpeg',
  },
  {
    path: '/blog/guia-creador-soluciones',
    title: 'Guía Definitiva: Micro-Productos Digitales',
    description: 'Para Creadores de Soluciones que quieren empaquetar su conocimiento en productos vendibles.',
    profile: 'El Creador de Soluciones',
    imageUrl: '/micro-products-header.jpeg',
  },
  {
    path: '/blog/guia-editor-ia',
    title: 'Guía Definitiva: Sitios de Nicho con IA',
    description: 'Para Editores con IA que quieren construir imperios de contenido a gran escala.',
    profile: 'El Editor con IA',
    imageUrl: '/ai-niche-sites-header.jpeg',
  },
  {
    path: '/blog/guia-operador-ecommerce',
    title: 'Guía Definitiva: Amazon FBA / Mercado Libre',
    description: 'Para Operadores de E-commerce listos para construir una marca de productos físicos.',
    profile: 'El Operador de E-commerce',
    imageUrl: '/amazon-fba-header.jpeg',
  },
  {
    path: '/blog/guia-consultor-especialista',
    title: 'Guía Definitiva: Freelancing de Alto Valor',
    description: 'Para Consultores Especialistas que quieren convertir su habilidad en un negocio premium.',
    profile: 'El Consultor Especialista',
    imageUrl: '/high-value-freelancing-header.jpeg',
  },
  {
    path: '/blog/guia-moderador-comunidades',
    title: 'Guía Definitiva: Gestión de Comunidades Pagas',
    description: 'Para Moderadores de Comunidades que buscan un ingreso estable cuidando espacios digitales.',
    profile: 'El Moderador de Comunidades',
    imageUrl: '/community-management-header.jpeg',
  },
];

const featuredPost = blogPosts.find(post => post.featured);
const otherPosts = blogPosts.filter(post => !post.featured);

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => (
    <Link 
        to={post.path} 
        className="flex flex-col bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition-colors duration-300 transform hover:-translate-y-1 overflow-hidden group"
    >
        {post.imageUrl && (
            <div className="overflow-hidden h-48">
                <img 
                    src={post.imageUrl} 
                    alt={post.title} 
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
                Leer la Guía &rarr;
            </span>
        </div>
    </Link>
);


const BlogIndexPage: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-4 font-display">
                El Blog de Eva Automatiza
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Guías prácticas y hojas de ruta detalladas para construir tu negocio digital. Sin humo, solo estrategias accionables.
            </p>
        </header>

        {featuredPost && (
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8 font-display">Artículo Destacado</h2>
                <Link to={featuredPost.path} className="block bg-gray-800 rounded-xl shadow-2xl overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 border border-indigo-500/50">
                    <div className="md:flex">
                        <div className="md:w-1/3">
                            <img className="h-full w-full object-cover" src={featuredPost.imageUrl} alt={featuredPost.title} />
                        </div>
                        <div className="p-8 flex flex-col justify-center md:w-2/3">
                            <div className="uppercase tracking-wide text-sm text-indigo-400 font-semibold">Lectura Esencial</div>
                            <h3 className="block mt-1 text-3xl leading-tight font-extrabold text-white font-display group-hover:text-indigo-300">{featuredPost.title}</h3>
                            <p className="mt-4 text-gray-400 text-lg">{featuredPost.description}</p>
                        </div>
                    </div>
                </Link>
            </section>
        )}

        <section>
            <h2 className="text-3xl font-bold text-center mb-8 font-display">Todas las Guías</h2>
            <div className="grid gap-8 md:grid-cols-2">
                {otherPosts.map((post) => (
                    <BlogCard key={post.path} post={post} />
                ))}
            </div>
        </section>
      </div>
    </div>
  );
};

export default BlogIndexPage;
