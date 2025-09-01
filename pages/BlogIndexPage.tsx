
import React from 'react';
import { Link } from 'react-router-dom';
import { profiles } from '../data/profiles';

const blogLinks: { [key: string]: string } = {
  'gestor-de-proyectos': '/blog/guia-dropping-services',
  'curador-estrategico': '/blog/guia-curador-estrategico',
  'arquitecto-digital': '/blog/guia-arquitecto-digital',
  'conector-de-oportunidades': '/blog/guia-conector-oportunidades',
  'mercader-digital': '/blog/guia-mercader-digital',
  'creador-de-soluciones': '/blog/guia-creador-soluciones',
  'editor-con-ia': '/blog/guia-editor-ia',
  'operador-de-ecommerce': '/blog/guia-operador-ecommerce',
  'consultor-especialista': '/blog/guia-consultor-especialista',
  'moderador-de-comunidades': '/blog/guia-moderador-comunidades',
};

const BlogIndexPage: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-6 leading-relaxed font-display">
                El Blog de Eva
            </h1>
            <p className="text-xl text-gray-300">
                Hojas de ruta detalladas para cada perfil de emprendedor digital. Encuentra tu arquetipo y sigue el plan de acción paso a paso.
            </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
            {profiles.map((profile) => (
                <Link 
                    key={profile.id}
                    to={blogLinks[profile.id]} 
                    className="group relative block bg-black rounded-xl shadow-lg overflow-hidden aspect-[4/5]"
                >
                    {profile.imageUrl && (
                        <img 
                            src={profile.imageUrl} 
                            alt={`Imagen para ${profile.name}`} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
                    <div className="relative p-6 h-full flex flex-col justify-end">
                        <h2 className="text-2xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-indigo-300 font-display">{profile.name}</h2>
                        <p className="text-indigo-200 font-semibold mb-3">{profile.mainBusinessModel}</p>
                        <p className="text-gray-300 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-h-0 group-hover:max-h-full">
                            {profile.description}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogIndexPage;
