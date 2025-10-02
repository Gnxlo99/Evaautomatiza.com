import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const objectives = [
  "Quiero una landing page para capturar leads",
  "Necesito validar una nueva idea de negocio",
  "Quiero vender un producto o servicio específico",
  "Otro (lo describo en el mensaje)"
];

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    objective: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ status: 'idle' | 'success' | 'error'; message: string }>({ status: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.objective) {
      setFormStatus({ status: 'error', message: 'Por favor, selecciona un objetivo para tu proyecto.' });
      return;
    }
    setIsSubmitting(true);
    setFormStatus({ status: 'idle', message: '' });

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => {
        setFormStatus({ status: 'success', message: '¡Gracias! Tu mensaje ha sido enviado. Te responderé en menos de 24 horas.' });
        setFormData({ name: '', email: '', objective: '', message: '' });
      })
      .catch(error => {
        setFormStatus({ status: 'error', message: 'Algo salió mal. Por favor, intenta de nuevo más tarde.' });
      })
      .finally(() => setIsSubmitting(false));
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
          <form 
            name="contact" 
            method="POST"
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit} 
            className="mt-8 space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                No llenar si eres humano: <input name="bot-field" />
              </label>
            </p>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-accent disabled:opacity-50"
              />
            </div>
            
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Objetivo de tu proyecto</label>
                <div className="space-y-3">
                    {objectives.map((obj) => (
                        <label key={obj} className="flex items-center bg-gray-700 border border-gray-600 rounded-lg p-3 has-[:checked]:bg-brand-accent has-[:checked]:border-brand-accent transition-colors">
                            <input
                                type="radio"
                                name="objective"
                                value={obj}
                                checked={formData.objective === obj}
                                onChange={handleChange}
                                className="h-4 w-4 text-brand-accent-hover bg-gray-600 border-gray-500 focus:ring-brand-accent-hover"
                            />
                            <span className="ml-3 text-white">{obj}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Mensaje adicional (Opcional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder="Añade aquí cualquier detalle que consideres importante."
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
