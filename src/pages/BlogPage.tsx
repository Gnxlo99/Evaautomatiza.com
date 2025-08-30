import React from 'react';
import { Link } from 'react-router-dom';
import { profiles } from '../../data/profiles';
import { Profile } from '../../types';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-4">
                Nuestra Biblioteca de Hojas de Ruta
            </h1>
            <p className="text-xl text-gray-300">
                Explora cada perfil de emprendedor digital para descubrir los diferentes modelos de negocio y encontrar el que mejor se adapte a ti.
            </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
            {profiles.map((profile: Profile) => (
                <Link 
                    key={profile.id}
                    to={`/perfil/${profile.id}`} 
                    className="flex flex-col p-6 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition-colors duration-300 transform hover:-translate-y-1"
                >
                    <div className="flex-grow">
                      <h2 className="text-2xl font-bold text-indigo-400 mb-2">{profile.name}</h2>
                      <p className="text-gray-300 text-sm">{profile.description}</p>
                    </div>
                    <span className="mt-4 inline-block text-brand-accent font-bold hover:underline">
                        Leer la Guía Completa &rarr;
                    </span>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;