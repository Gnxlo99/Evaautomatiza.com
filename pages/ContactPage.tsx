import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [objective, setObjective] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ status: 'idle' | 'success' | 'error'; message: string }>({ status: 'idle', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ status: 'idle', message: '' });

    // ID del grupo de MailerLite para interesados en Landing Pages
    const ID_GRUPO_CONTACTO_LP = '165141147050304595'; 

    try {
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          name: name,
          groupId: ID_GRUPO_CONTACTO_LP,
          fields: {
            objetivo_de_tu_proyecto: objective,
            mensaje_adicional: message,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.');
      }
      
      setFormStatus({ status: 'success', message: '¡Gracias! Tu mensaje ha sido enviado. Te responderé en menos de 24 horas.' });
      // Limpiar formulario
      setName('');
      setEmail('');
      setObjective('');
      setMessage('');

    } catch (error: any) {
      setFormStatus({ status: 'error', message: error.message || 'Algo salió mal. Por favor, intenta de nuevo más tarde.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="max-w-xl w-full mx-auto">
        <article className="prose prose-invert lg:prose-xl max-w-none prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-r prose-h1:from-indigo-400 prose-h1:to-purple-500 prose-a:text-brand-accent hover:prose-a:text-indigo-400">
          <h1>Empecemos a Crear tu Landing Page</h1>
          <p>
            Completa el formulario y te responderé por email en menos de 24 horas para que empecemos a definir los detalles y dar vida a tu proyecto.
          </p>
        </article>

        {formStatus.status === 'success' ? (
          <div className="mt-8 text-center bg-green-900/50 border border-green-700 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold font-display mb-2">¡Mensaje Enviado!</h3>
            <p>{formStatus.message}</p>
          </div>
        ) : (
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
                disabled={isSubmitting}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-accent disabled:opacity-50"
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
                disabled={isSubmitting}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-accent disabled:opacity-50"
              />
            </div>
            <div>
              <label htmlFor="objective" className="block text-sm font-medium text-gray-300 mb-2">
                Objetivo de tu proyecto
              </label>
              <textarea
                id="objective"
                name="objective"
                rows={3}
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                required
                disabled={isSubmitting}
                placeholder="Ej: Validar una idea, capturar leads para mi servicio, vender un producto, etc."
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-accent disabled:opacity-50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Mensaje adicional (Opcional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSubmitting}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-accent disabled:opacity-50"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-3 px-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100"
              >
                {isSubmitting ? 'ENVIANDO...' : 'Quiero Lanzar mi Landing Page'}
              </button>
            </div>
            {formStatus.status === 'error' && (
              <p className="text-red-400 text-center">{formStatus.message}</p>
            )}
          </form>
        )}
        
        <div className="mt-12">
            <blockquote className="bg-gray-800 p-6 rounded-lg border-l-4 border-indigo-500">
                <p className="text-gray-300 italic">"Eva entendió mi visión al instante y entregó una landing page de alta calidad en menos de 48 horas. Los resultados fueron inmediatos. ¡100% recomendada!"</p>
                <cite className="block text-right text-gray-400 text-sm mt-3 not-italic font-semibold">- Carlos G., Consultor B2B</cite>
            </blockquote>
        </div>

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
