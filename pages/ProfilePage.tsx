
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { profiles } from '../data/profiles';

const ProfilePage: React.FC = () => {
  const { profileId } = useParams<{ profileId: string }>();
  const profile = profiles.find(p => p.id === profileId);

  if (!profile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Perfil no encontrado</h1>
        <p className="text-lg text-gray-300 mb-8">No pudimos encontrar el perfil que estás buscando.</p>
        <Link to="/" className="bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-2 px-6 rounded-lg">
          Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-invert lg:prose-xl max-w-none prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-r prose-h1:from-indigo-400 prose-h1:to-purple-500 prose-a:text-brand-accent hover:prose-a:text-indigo-400">
          <h1>{profile.name}</h1>
          <p className="lead text-xl text-gray-400">{profile.description}</p>

          <div className="bg-gray-800 rounded-xl p-6 my-8">
            <h2 className="!mt-0">Modelo de Negocio Principal: {profile.mainBusinessModel}</h2>
            <p className="whitespace-pre-wrap font-light text-gray-300">{profile.detailedGuide}</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 my-8">
            <h2>Herramientas Recomendadas</h2>
            <ul className="list-disc pl-5">
              {profile.recommendedTools.map((tool, index) => (
                <li key={index}>
                  <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer" className="font-semibold">
                    {tool.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center bg-gradient-to-r from-brand-accent to-purple-600 rounded-xl p-8 my-8 shadow-2xl">
            <h2 className="!text-white !mt-0 text-3xl font-bold">{profile.microProductTitle}</h2>
            <p className="text-indigo-200 mt-2 mb-6">Tu atajo para empezar a construir hoy mismo. Todo lo que necesitas en un solo lugar.</p>
            <a 
                href={profile.microProductUrl}
                className="inline-block bg-white text-brand-accent font-bold text-lg py-3 px-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
                [ QUIERO EL ACCESO ]
            </a>
          </div>
        </article>
         <div className="text-center mt-12 mb-8">
            <Link to="/" className="text-brand-accent hover:underline">
                &larr; Volver y hacer el test de nuevo
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
