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
    const mailtoLink = `mailto:contacto@evaautomatiza.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="max-w-xl w-full mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 mb-4 font-display">Contacto</h1>
          <p className="text-lg text-medium">
            ¿Tienes alguna pregunta, sugerencia o simplemente quieres saludar? Estaré encantada de escucharte.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-secondary p-8 rounded-2xl border border-slate-700">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-light mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-slate-700 border border-slate-600 text-light rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-light mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-slate-700 border border-slate-600 text-light rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-light mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full bg-slate-700 border border-slate-600 text-light rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 px-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>

        <div className="text-center mt-12 mb-8">
            <Link to="/" className="text-accent hover:underline font-semibold">
                &larr; Volver al Inicio
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
