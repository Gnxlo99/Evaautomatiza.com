import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-invert lg:prose-2xl max-w-none prose-h1:font-display prose-h2:font-display prose-h2:text-indigo-300 prose-h2:border-b prose-h2:border-indigo-600 prose-h2:pb-3 prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-r prose-h1:from-indigo-400 prose-h1:to-purple-500 prose-a:text-brand-accent hover:prose-a:text-indigo-400 prose-strong:text-indigo-300 prose-strong:font-semibold">
            <h1>Sobre Eva: Claridad en el Caos</h1>
            <p className="lead">
              Me llamo Eva. Y creé esta herramienta por una razón muy simple: <strong>estaba harta</strong>.
            </p>
            <p>
              Harta de tener veintipico, un trabajo que pagaba las cuentas pero me comía el alma, y mil pestañas abiertas con "ideas de negocio" que nunca empezaba. Estaba atrapada en un bucle: investigar, abrumarme con opciones, no hacer nada. Y al día siguiente, el mismo problema otra vez.
            </p>
            <p>
              Vivimos en la era de la <strong>"parálisis por análisis"</strong>. Gurús vendiendo humo, modelos de negocio que suenan a estafa y la presión constante de ser un "creador". Pero ¿qué pasa si no quieres ser un influencer? ¿Qué pasa si tu fortaleza está en construir sistemas, en conectar ideas o en gestionar proyectos?
            </p>
            <h2>El Antídoto: 10 Caminos Reales</h2>
            <p>
              Esta herramienta es mi respuesta. Es <strong>un filtro, no un motor de ideas</strong>. En lugar de darte 100 opciones genéricas, he analizado y destilado 10 arquetipos de emprendedores digitales reales y sostenibles. No son ideas millonarias, son perfiles basados en fortalezas concretas. Cada uno con un modelo de negocio, herramientas y una hoja de ruta clara.
            </p>
            <p>
              Mi misión no es darte más para pensar. Es darte un punto de partida claro y accionable. Usamos un análisis simple para conectar tus habilidades innatas con un camino que <strong>SÍ</strong> puedes empezar. Para que <strong>dejes de buscar y, de una vez por todas, empieces a construir</strong>.
            </p>
        </article>
        <div className="text-center mt-12 mb-8">
            <Link to="/generador" className="text-brand-accent hover:underline">
                &larr; Volver al test
            </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;