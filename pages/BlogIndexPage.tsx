
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-4">
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
                    className="block p-6 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition-colors duration-300 transform hover:-translate-y-1"
                >
                    <h2 className="text-2xl font-bold text-indigo-400 mb-2">{profile.name}</h2>
                    <p className="text-gray-400 font-medium mb-3">{profile.mainBusinessModel}</p>
                    <p className="text-gray-300 text-sm">{profile.description}</p>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogIndexPage;
