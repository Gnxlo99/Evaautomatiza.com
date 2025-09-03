import React from 'react';
import { Link } from 'react-router-dom';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-invert lg:prose-xl max-w-none prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-r prose-h1:from-indigo-400 prose-h1:to-purple-500 prose-a:text-brand-accent hover:prose-a:text-indigo-400">
            <h1>Política de Cookies</h1>
            <h2>Última actualización: 30 de agosto de 2025</h2>
            <p>
              Esta Política de Cookies explica qué son las cookies y cómo las utilizamos. Debes leer esta política para comprender qué tipo de cookies utilizamos, la información que recopilamos mediante cookies y cómo se utiliza esa información.
            </p>
            <p>
              Las cookies no suelen contener ninguna información que identifique personalmente a un usuario, pero la información personal que almacenamos sobre ti puede estar vinculada a la información almacenada y obtenida de las cookies. Para obtener más información sobre cómo usamos, almacenamos y mantenemos seguros tus datos personales, consulta nuestra Política de Privacidad.
            </p>
            <h3>Tipos de Cookies que Utilizamos</h3>
            <p>
              Las cookies pueden ser "Persistentes" o de "Sesión". Las cookies persistentes permanecen en tu ordenador personal o dispositivo móvil cuando te desconectas, mientras que las cookies de sesión se eliminan tan pronto como cierras tu navegador web. Utilizamos tanto cookies de sesión como persistentes para los fines que se detallan a continuación:
            </p>
            <ul>
                <li><strong>Cookies Esenciales / Necesarias:</strong> Estas cookies son esenciales para proporcionarte los servicios disponibles a través del sitio web y para permitirte utilizar algunas de sus funciones. Ayudan a autenticar a los usuarios y a prevenir el uso fraudulento de las cuentas de usuario.</li>
                <li><strong>Cookies de Funcionalidad:</strong> Estas cookies nos permiten recordar las elecciones que haces cuando usas el sitio web, como recordar tus datos de inicio de sesión o tu preferencia de idioma. El propósito de estas cookies es proporcionarte una experiencia más personal y evitar que tengas que volver a introducir tus preferencias cada vez que usas el sitio web.</li>
            </ul>
             <h3>Tus opciones con respecto a las cookies</h3>
            <p>
                Si prefieres evitar el uso de cookies en el sitio web, primero debes deshabilitar el uso de cookies en tu navegador y luego eliminar las cookies guardadas en tu navegador asociadas con este sitio web. Puedes usar esta opción para prevenir el uso de cookies en cualquier momento.
            </p>
             <p>
                Si no aceptas nuestras cookies, puedes experimentar algunos inconvenientes en tu uso del sitio web y algunas funciones pueden no funcionar correctamente.
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

export default CookiePolicyPage;