import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { profiles } from '../data/profiles';

const ProfilePage: React.FC = () => {
  const { profileId } = useParams<{ profileId: string }>();
  const profile = profiles.find(p => p.id === profileId);

  const profileToGuideLink: { [key: string]: string } = {
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

  if (!profile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <h1 className="text-4xl font-bold text-red-500 mb-4 font-display">Perfil no encontrado</h1>
        <p className="text-lg text-medium mb-8">No pudimos encontrar el perfil que estás buscando.</p>
        <Link to="/" className="bg-accent hover:bg-accent-hover text-white font-bold py-2 px-6 rounded-lg">
          Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 mb-4 font-display">
            {profile.name}
          </h1>
          <p className="text-2xl md:text-3xl text-medium font-medium">
            {profile.description}
          </p>
        </header>

        <section className="space-y-10">
          <div className="bg-secondary border border-slate-700 rounded-2xl p-6 md:p-8 shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold font-display text-light mb-4 border-b-2 border-accent/50 pb-3">Modelo de Negocio: <span className="text-accent">{profile.mainBusinessModel}</span></h2>
            <div className="prose prose-invert lg:prose-xl max-w-none text-medium prose-p:text-lg prose-p:leading-relaxed">
              {profile.detailedGuide.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-accent/20 to-secondary border border-accent/50 rounded-2xl p-8 my-8 text-center shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-white !mt-0 font-display">¿Quieres la hoja de ruta completa?</h3>
            <p className="text-light mt-2 mb-6 text-lg">Hemos creado una guía definitiva, paso a paso, para que lances este modelo de negocio. Es tu plan de acción detallado.</p>
            <Link
              to={profileToGuideLink[profile.id]}
              className="inline-block bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-full shadow-md transform transition-transform duration-200 hover:scale-105"
            >
              Leer la Guía Definitiva GRATIS
            </Link>
          </div>

          <div className="bg-secondary border border-slate-700 rounded-2xl p-6 md:p-8 shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-bold font-display text-light mb-6">Herramientas Recomendadas</h2>
            <ul className="space-y-4">
              {profile.recommendedTools.map((tool, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 bg-accent/20 text-accent rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-lg text-light hover:text-accent transition-colors duration-300">
                    {tool.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        
        <div className="text-center mt-16 mb-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Link to="/" className="text-accent hover:underline font-semibold">
            &larr; Volver y hacer el test de nuevo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
