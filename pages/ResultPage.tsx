import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { portfolioItems } from '../data/portfolio';

const painPointData: { [key: string]: { title: string; portfolioIds: number[] } } = {
  autoridad: {
    title: 'verte más profesional',
    portfolioIds: [5, 7], // Business Coach, Lawyer
  },
  automatizacion: {
    title: 'automatizar tus citas',
    portfolioIds: [6, 2], // Manicurist, Gym Trainer
  },
  venta: {
    title: 'vender más',
    portfolioIds: [1, 4], // Marketing Consultant, Real Estate
  },
};

const PortfolioShowcase = ({ item }: { item: typeof portfolioItems[0] | undefined }) => {
    if (!item) return null;
    return (
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-indigo-500/30 flex flex-col">
            <img src={item.imageUrl} alt={item.title} className="w-full h-auto object-cover aspect-[16/10]" />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-indigo-300 mb-3 font-display">{item.title}</h3>
                <p className="text-gray-400 text-base flex-grow" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                 <Link
                    to={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center mt-auto bg-brand-secondary hover:bg-brand-accent text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                    Ver Ejemplo en Vivo
                </Link>
            </div>
        </div>
    )
}

const ResultPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { painPoint } = location.state || { painPoint: 'venta' }; 

  const [formData, setFormData] = useState({ name: '', whatsapp: '', email: '' });
  const [status, setStatus] = useState({ success: false, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const selectedData = painPointData[painPoint];
  const portfolioItemsToShow = portfolioItems.filter(p => selectedData.portfolioIds.includes(p.id));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const encode = (data: { [key: string]: any }) => {
        return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    }

    try {
        await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "vendedor-automatico-contact", ...formData })
        });
        navigate('/gracias');
    } catch (error) {
        setStatus({ success: false, message: 'Hubo un error al enviar. Por favor, intenta de nuevo.' });
        setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto">
        <header className="text-center mb-10 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-display leading-tight">
            Entendido. Tu objetivo es claro.
          </h1>
          <p className="text-xl text-gray-300" dangerouslySetInnerHTML={{__html: `Para <strong>${selectedData.title}</strong>, necesitas una página diseñada para eso. Aquí tienes un par de ejemplos ideales:` }} />
        </header>
        
        <main className="space-y-12 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioItemsToShow.map(item => (
                <PortfolioShowcase key={item.id} item={item} />
              ))}
            </div>

            <div className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700 max-w-2xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-4 font-display">Ya viste que podemos resolverlo.</h2>
                    <p className="text-gray-300 mb-6">Ahora, déjanos demostrarte nuestra velocidad. Si te gusta lo que ves, podemos crear una muestra de diseño GRATUITA y personalizada para tu marca.</p>
                </div>
                
                {!showForm && (
                  <div className="text-center mt-6">
                    <button
                      onClick={() => setShowForm(true)}
                      className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-lg py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                      aria-controls="contact-form-section"
                      aria-expanded="false"
                    >
                      ¡Sí, Quiero Mi Muestra de Diseño GRATUITA!
                    </button>
                  </div>
                )}

                {showForm && (
                  <div id="contact-form-section" className="animate-fade-in">
                    <p className="text-center text-gray-400 mb-4 mt-6">¡Excelente! Solo necesitamos unos pocos datos para empezar.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" name="name" value={formData.name} placeholder="Tu Nombre" required onChange={handleChange} className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-accent"/>
                        <input type="tel" name="whatsapp" value={formData.whatsapp} placeholder="Tu WhatsApp (para enviar la muestra)" required onChange={handleChange} className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-accent"/>
                        <input type="email" name="email" value={formData.email} placeholder="Tu Email (Opcional)" onChange={handleChange} className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-accent"/>
                        <button type="submit" disabled={isSubmitting} className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-lg py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 disabled:bg-gray-600">
                            {isSubmitting ? 'ENVIANDO...' : '¡Recibir mi muestra gratuita en WhatsApp!'}
                        </button>
                        {status.message && !status.success && <p className="text-red-400 text-center">{status.message}</p>}
                    </form>
                  </div>
                )}
            </div>
        </main>
      </div>
    </div>
  );
};

export default ResultPage;
