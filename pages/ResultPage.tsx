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
    portfolioIds: [8, 2], // Dentist, Gym Trainer
  },
  venta: {
    title: 'vender más',
    portfolioIds: [1, 4], // Marketing Consultant, Real Estate
  },
};

const methodologyItems = [
    {
        title: "Lanzamiento en 24 Horas",
        description: "Desde la confirmación, tu landing page estará online y lista para recibir clientes en un día. Agilidad es nuestra promesa."
    },
    {
        title: "Diseño 100% Personalizado",
        description: "Adaptamos la plantilla elegida a tu logo, colores y estilo para que refleje la identidad única de tu marca."
    },
    {
        title: "Optimizada para Google (SEO)",
        description: "Configuramos los títulos, descripciones y estructura para que los motores de búsqueda te encuentren desde el primer día."
    },
    {
        title: "Hosting y Dominio Incluidos",
        description: "Nos encargamos de toda la configuración técnica. Tu hosting está cubierto por 1 mes, para que te enfoques en tu negocio."
    },
];


const PortfolioShowcase = ({ item }: { item: typeof portfolioItems[0] | undefined }) => {
    if (!item) return null;
    return (
        <div className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-xl flex flex-col group transform transition-transform duration-300 hover:-translate-y-2">
            <img src={item.imageUrl} alt={item.title} className="w-full h-auto object-cover aspect-[16/10]" />
            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display group-hover:text-brand-accent transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-base flex-grow" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                 <Link
                    to={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center mt-auto border-2 border-brand-accent text-brand-accent font-bold py-3 px-6 rounded-lg transition-colors duration-300 hover:bg-brand-accent hover:text-white"
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
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-5xl w-full mx-auto">
        <header className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-display leading-tight">
            La Estrategia Perfecta para tu Objetivo
          </h1>
          <p className="text-xl text-gray-300" dangerouslySetInnerHTML={{__html: `Para <strong>${selectedData.title}</strong>, necesitas una página diseñada para eso. Estos diseños están probados para funcionar:` }} />
        </header>
        
        <main className="space-y-20 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-10">
              {portfolioItemsToShow.map(item => (
                <PortfolioShowcase key={item.id} item={item} />
              ))}
            </div>

            <section className="max-w-4xl mx-auto text-left">
                <h2 className="text-3xl font-bold text-white mb-10 font-display text-center">Todo Incluido para un Lanzamiento Exitoso</h2>
                <div className="grid sm:grid-cols-2 gap-8">
                    {methodologyItems.map(item => (
                        <div key={item.title} className="bg-gray-800 p-6 rounded-lg flex items-start">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center mr-4 mt-1">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-white mb-1">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            <div className="bg-white text-gray-800 rounded-xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto">
                <div className="text-center">
                    <p className="font-semibold text-indigo-600 uppercase tracking-wide">Inversión Única</p>
                    <h2 className="text-6xl md:text-7xl font-extrabold text-gray-900 my-2 font-display">
                        $150 <span className="text-3xl text-gray-500 font-medium align-middle">USD</span>
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        Incluye diseño, desarrollo, SEO básico y hosting por 1 mes. Tu negocio online, sin sorpresas ni costos ocultos.
                    </p>
                    
                    {!showForm && (
                        <button
                            onClick={() => setShowForm(true)}
                            className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-lg py-4 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                            aria-controls="contact-form-section"
                            aria-expanded="false"
                        >
                            Solicitar Muestra de Diseño GRATIS
                        </button>
                    )}

                    {showForm && (
                        <div id="contact-form-section" className="animate-fade-in text-left">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input type="text" name="name" value={formData.name} placeholder="Tu Nombre" required onChange={handleChange} className="w-full bg-gray-100 border border-gray-300 text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-accent"/>
                                <input type="tel" name="whatsapp" value={formData.whatsapp} placeholder="Tu WhatsApp (para enviar la muestra)" required onChange={handleChange} className="w-full bg-gray-100 border border-gray-300 text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-accent"/>
                                <input type="email" name="email" value={formData.email} placeholder="Tu Email (Opcional)" onChange={handleChange} className="w-full bg-gray-100 border border-gray-300 text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-accent"/>
                                <button type="submit" disabled={isSubmitting} className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-lg py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 disabled:bg-gray-600">
                                    {isSubmitting ? 'ENVIANDO...' : 'Recibir mi muestra gratuita'}
                                </button>
                                {status.message && !status.success && <p className="text-red-500 text-center mt-2">{status.message}</p>}
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </main>
      </div>
    </div>
  );
};

export default ResultPage;
