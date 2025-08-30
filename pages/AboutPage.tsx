
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-invert lg:prose-xl max-w-none prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-r prose-h1:from-indigo-400 prose-h1:to-purple-500 prose-a:text-brand-accent hover:prose-a:text-indigo-400">
            <h1>Nuestra Misión: Claridad en el Caos</h1>
            <p>
              Eva Automatiza nació de una frustración real y personal. La de tener veintipico, un trabajo que no te llena y la convicción de que internet ofrece un camino diferente, pero sentirse completamente abrumado por el exceso de información.
            </p>
            <p>
              Vivimos en la era de la "parálisis por análisis". Hay miles de "gurús" vendiendo ideas millonarias, cientos de modelos de negocio compitiendo por tu atención y una presión constante por convertirte en una marca personal y crear contenido sin parar. Para muchos de nosotros, ese no es el camino.
            </p>
            <p>
              Esta plataforma fue creada como un antídoto a ese ruido. Es una herramienta, un filtro diseñado para gente como nosotros: personas que disfrutan construyendo sistemas, que creen en la tecnología y que buscan un camino de emprendimiento digital auténtico, sin humo y adaptado a sus fortalezas reales.
            </p>
            <p>
              Nuestra misión no es darte más ideas. Es darte claridad. Usamos la lógica y el análisis para ayudarte a romper el bucle de la indecisión y a enfocar tu energía en construir algo real.
            </p>
        </article>
        <div className="text-center mt-12 mb-8">
            <Link to="/" className="text-brand-accent hover:underline">
                &larr; Volver al Inicio
            </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;