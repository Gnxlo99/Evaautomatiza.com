
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contacto desde IA-Navegador de ${name}`;
    const body = `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`;
    // Replace with your actual email address
    const mailtoLink = `mailto:tuemail@ejemplo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="max-w-xl w-full mx-auto">
        <article className="prose prose-invert lg:prose-xl max-w-none prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-r prose-h1:from-indigo-400 prose-h1:to-purple-500 prose-a:text-brand-accent hover:prose-a:text-indigo-400">
          <h1>Contacto</h1>
          <p>
            ¿Tienes alguna pregunta, sugerencia o simplemente quieres saludar? Rellena el formulario y me pondré en contacto contigo lo antes posible.
          </p>
        </article>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-3 px-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>

        <div className="text-center mt-12 mb-8">
            <Link to="/" className="text-brand-accent hover:underline">
                &larr; Volver al Inicio
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;