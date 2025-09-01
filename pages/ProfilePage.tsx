
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { profiles } from '../data/profiles';

const ProfilePage: React.FC = () => {
  const { profileId } = useParams<{ profileId: string }>();
  const profile = profiles.find(p => p.id === profileId);

  if (!profile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <h1 className="text-4xl font-bold text-red-500 mb-4 font-display">Perfil no encontrado</h1>
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
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-4 font-display">
            {profile.name}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-medium">
            {profile.description}
          </p>
        </header>

        <article className="prose prose-invert lg:prose-xl max-w-none prose-h2:font-display prose-h3:font-display prose-a:text-brand-accent hover:prose-a:text-indigo-400">
          <div className="bg-gray-800 rounded-xl p-6 my-8">
            <h2 className="!mt-0">Modelo de Negocio Principal: {profile.mainBusinessModel}</h2>
            {profile.detailedGuide.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-300 leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
          
          {profile.id === 'gestor-de-proyectos' && (
            <div className="bg-indigo-900/50 border border-indigo-700 rounded-xl p-6 my-8 text-center">
              <h3 className="text-xl font-bold text-white !mt-0">¿Quieres profundizar?</h3>
              <p className="text-indigo-200 mt-2 mb-4">Hemos creado una guía completa, paso a paso, para que lances tu negocio de Dropping Services. Es el plan de proyecto definitivo.</p>
              <Link
                to="/blog/guia-dropping-services"
                className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-2 px-6 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105"
              >
                Leer la Guía Definitiva
              </Link>
            </div>
          )}

          {profile.id === 'curador-estrategico' && (
            <div className="bg-indigo-900/50 border border-indigo-700 rounded-xl p-6 my-8 text-center">
              <h3 className="text-xl font-bold text-white !mt-0">¿Quieres profundizar?</h3>
              <p className="text-indigo-200 mt-2 mb-4">Descubre cómo transformar tu habilidad para filtrar información en un negocio rentable con nuestra guía completa para crear una newsletter de éxito.</p>
              <Link
                to="/blog/guia-curador-estrategico"
                className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-2 px-6 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105"
              >
                Leer la Guía Definitiva
              </Link>
            </div>
          )}

          {profile.id === 'arquitecto-digital' && (
            <div className="bg-indigo-900/50 border border-indigo-700 rounded-xl p-6 my-8 text-center">
              <h3 className="text-xl font-bold text-white !mt-0">¿Quieres profundizar?</h3>
              <p className="text-indigo-200 mt-2 mb-4">Descubre el plano exacto para construir sitios web que generan ingresos pasivos con nuestra guía completa de SEO Programático.</p>
              <Link
                to="/blog/guia-arquitecto-digital"
                className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-2 px-6 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105"
              >
                Leer la Guía Definitiva
              </Link>
            </div>
          )}

          {profile.id === 'conector-de-oportunidades' && (
            <div className="bg-indigo-900/50 border border-indigo-700 rounded-xl p-6 my-8 text-center">
              <h3 className="text-xl font-bold text-white !mt-0">¿Quieres profundizar?</h3>
              <p className="text-indigo-200 mt-2 mb-4">Aprende a monetizar tu red de contactos con nuestra guía completa para vender leads de alto valor a empresas B2B.</p>
              <Link
                to="/blog/guia-conector-oportunidades"
                className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-2 px-6 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105"
              >
                Leer la Guía Definitiva
              </Link>
            </div>
          )}

          {profile.id === 'mercader-digital' && (
            <div className="bg-indigo-900/50 border border-indigo-700 rounded-xl p-6 my-8 text-center">
              <h3 className="text-xl font-bold text-white !mt-0">¿Quieres profundizar?</h3>
              <p className="text-indigo-200 mt-2 mb-4">Aprende a comprar y vender activos digitales con nuestra guía completa sobre el Flipping de Dominios y Sitios Web.</p>
              <Link
                to="/blog/guia-mercader-digital"
                className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-2 px-6 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105"
              >
                Leer la Guía Definitiva
              </Link>
            </div>
          )}

          {profile.id === 'creador-de-soluciones' && (
            <div className="bg-indigo-900/50 border border-indigo-700 rounded-xl p-6 my-8 text-center">
              <h3 className="text-xl font-bold text-white !mt-0">¿Quieres profundizar?</h3>
              <p className="text-indigo-200 mt-2 mb-4">Aprende a empaquetar tu conocimiento en activos digitales con nuestra guía completa para crear y vender micro-productos.</p>
              <Link
                to="/blog/guia-creador-soluciones"
                className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-2 px-6 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105"
              >
                Leer la Guía Definitiva
              </Link>
            </div>
          )}

          {profile.id === 'editor-con-ia' && (
            <div className="bg-indigo-900/50 border border-indigo-700 rounded-xl p-6 my-8 text-center">
              <h3 className="text-xl font-bold text-white !mt-0">¿Quieres profundizar?</h3>
              <p className="text-indigo-200 mt-2 mb-4">Descubre el sistema para escalar la creación de contenido con nuestra guía completa para construir Sitios de Nicho con IA.</p>
              <Link
                to="/blog/guia-editor-ia"
                className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-2 px-6 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105"
              >
                Leer la Guía Definitiva
              </Link>
            </div>
          )}

          {profile.id === 'operador-de-ecommerce' && (
            <div className="bg-indigo-900/50 border border-indigo-700 rounded-xl p-6 my-8 text-center">
              <h3 className="text-xl font-bold text-white !mt-0">¿Quieres profundizar?</h3>
              <p className="text-indigo-200 mt-2 mb-4">Descubre el sistema para construir una marca rentable en marketplaces con nuestra guía completa de Amazon FBA / Mercado Libre.</p>
              <Link
                to="/blog/guia-operador-ecommerce"
                className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-2 px-6 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105"
              >
                Leer la Guía Definitiva
              </Link>
            </div>
          )}
          
          {profile.id === 'consultor-especialista' && (
            <div className="bg-indigo-900/50 border border-indigo-700 rounded-xl p-6 my-8 text-center">
              <h3 className="text-xl font-bold text-white !mt-0">¿Quieres profundizar?</h3>
              <p className="text-indigo-200 mt-2 mb-4">Descubre el sistema para posicionarte como una autoridad y atraer clientes que paguen por tu experiencia con nuestra guía de Freelancing de Alto Valor.</p>
              <Link
                to="/blog/guia-consultor-especialista"
                className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-2 px-6 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105"
              >
                Leer la Guía Definitiva
              </Link>
            </div>
          )}

          {profile.id === 'moderador-de-comunidades' && (
            <div className="bg-indigo-900/50 border border-indigo-700 rounded-xl p-6 my-8 text-center">
              <h3 className="text-xl font-bold text-white !mt-0">¿Quieres profundizar?</h3>
              <p className="text-indigo-200 mt-2 mb-4">Aprende a convertir tu empatía en un negocio estable con nuestra guía completa para gestionar comunidades de pago.</p>
              <Link
                to="/blog/guia-moderador-comunidades"
                className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-2 px-6 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105"
              >
                Leer la Guía Definitiva
              </Link>
            </div>
          )}

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
