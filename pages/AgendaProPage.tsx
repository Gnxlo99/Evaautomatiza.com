
import React, { useState, useEffect, useMemo } from 'react';

// --- CONFIGURACIÓN REQUERIDA ---
// 1. Ve a tu Google Sheet.
// 2. Haz clic en 'Archivo' > 'Compartir' > 'Publicar en la web'.
// 3. En el desplegable, selecciona la pestaña 'appointments'.
// 4. En el otro desplegable, selecciona 'Valores separados por comas (.csv)'.
// 5. Haz clic en 'Publicar' y copia el enlace generado aquí.
const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/1_mfGQviGJH8D1o4CMNCiEojYckDs7Zt7Reb30WV1YSc/pub?gid=1727940845&single=true&output=csv';
const MAKE_WEBHOOK_URL = 'https://hook.eu2.make.com/r6d6fb09vbgp2h27e8la9etmr9gu3bx2';

// Utility to parse CSV text into an array of objects
const parseCSV = (csvText: string): Record<string, string>[] => {
  const lines = csvText.trim().split('\n');
  if (lines.length < 2) return [];
  // Handles CSVs with or without carriage returns
  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
  return lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.trim().replace(/"/g, ''));
    return headers.reduce((obj, header, index) => {
      obj[header] = values[index];
      return obj;
    }, {} as Record<string, string>);
  });
};

// Utility to format date as YYYY-MM-DD
const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

const AgendaProPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    Nombre_Cliente: '',
    WhatsApp_Cliente: '',
    Servicio_Deseado: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  useEffect(() => {
    const fetchBookedSlots = async () => {
      setIsLoading(true);
      setError(null);
      // FIX: This check for a placeholder URL was commented out as the URL is now configured.
      // This resolves a static analysis error where the comparison would always be false.
      /*
      if (GOOGLE_SHEET_CSV_URL === 'YOUR_GOOGLE_SHEET_PUBLISHED_CSV_URL_HERE') {
        setError('Por favor, un desarrollador debe configurar la URL de Google Sheets en el código.');
        setIsLoading(false);
        setBookedSlots([]); 
        return;
      }
      */

      try {
        const response = await fetch(`${GOOGLE_SHEET_CSV_URL}&t=${new Date().getTime()}`); // Bust cache
        if (!response.ok) throw new Error('No se pudo cargar la disponibilidad.');
        
        const csvText = await response.text();
        const appointments = parseCSV(csvText);
        
        // Assuming your sheet has 'Fecha' (in YYYY-MM-DD), 'Hora' (in HH:MM) and 'Status' columns
        const confirmedSlots = appointments
          .filter(appt => (appt.Status || '').trim().toUpperCase() === 'CONFIRMADO')
          .map(appt => `${(appt.Fecha || '').trim()} ${(appt.Hora || '').trim()}`); 
        
        setBookedSlots(confirmedSlots);
      } catch (e) {
        console.error(e);
        setError('Error al cargar la disponibilidad. Por favor, intente más tarde.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookedSlots();
  }, []);

  const changeDay = (amount: number) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + amount);
      return newDate;
    });
  };

  const timeSlots = useMemo(() => {
    const slots: string[] = [];
    for (let hour = 9; hour <= 20; hour++) {
      slots.push(`${String(hour).padStart(2, '0')}:00`);
    }
    return slots;
  }, []);

  const handleSlotClick = (slot: string) => {
    setSelectedSlot(slot);
    setFormMessage(null);
    setFormData({
        Nombre_Cliente: '',
        WhatsApp_Cliente: '',
        Servicio_Deseado: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage(null);
    
    const payload = {
      ...formData,
      Fecha_Hora_Solicitada: `${formatDate(currentDate)} ${selectedSlot}`
    };

    try {
      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) throw new Error('Hubo un problema al enviar tu solicitud.');
      
      setFormMessage({type: 'success', text: '¡Solicitud enviada! Recibirás una confirmación por WhatsApp en breve para finalizar tu reserva.'});
      setTimeout(() => setSelectedSlot(null), 3000);
      
    } catch (err) {
      setFormMessage({type: 'error', text: 'Error al enviar la solicitud. Por favor, intenta de nuevo.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  const formattedCurrentDate = new Intl.DateTimeFormat('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(currentDate);

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-4 font-display">
            EVA-Agenda Pro
          </h1>
          <p className="text-xl text-gray-300">Consulta nuestra disponibilidad y solicita tu turno.</p>
        </header>

        <div className="bg-gray-800 rounded-xl shadow-2xl p-6 md:p-8">
          <div className="flex items-center justify-between mb-8 border-b border-gray-700 pb-4">
            <button onClick={() => changeDay(-1)} className="p-2 rounded-md hover:bg-gray-700 transition-colors">&larr; Día Anterior</button>
            <h2 className="text-xl md:text-2xl font-bold text-center capitalize font-display">{formattedCurrentDate}</h2>
            <button onClick={() => changeDay(1)} className="p-2 rounded-md hover:bg-gray-700 transition-colors">Día Siguiente &rarr;</button>
          </div>
          
          {isLoading ? (
            <div className="text-center py-10">Cargando disponibilidad...</div>
          ) : error ? (
            <div className="text-center py-10 text-red-400">{error}</div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {timeSlots.map(slot => {
                const isBooked = bookedSlots.includes(`${formatDate(currentDate)} ${slot}`);
                return (
                  <button 
                    key={slot}
                    disabled={isBooked}
                    onClick={() => handleSlotClick(slot)}
                    className={`p-4 rounded-lg font-semibold text-center transition-all duration-200 
                      ${isBooked 
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed line-through' 
                        : 'bg-brand-secondary text-white hover:bg-brand-accent hover:scale-105'
                      }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          )}
        </div>
        
        {/* FIX: This check for a placeholder URL was commented out as the URL is now configured.
            This resolves a static analysis error where the comparison would always be false. */}
        {/*
        {GOOGLE_SHEET_CSV_URL === 'YOUR_GOOGLE_SHEET_PUBLISHED_CSV_URL_HERE' && (
            <div className="mt-8 bg-yellow-900/50 border border-yellow-700 text-yellow-200 p-4 rounded-lg text-center">
                <h3 className="font-bold">Modo de Demostración</h3>
                <p>Para conectar tus horarios, un desarrollador debe reemplazar la URL <strong>GOOGLE_SHEET_CSV_URL</strong> en <code>pages/AgendaProPage.tsx</code> con la URL de tu Google Sheet publicado como CSV.</p>
            </div>
        )}
        */}
      </div>

      {selectedSlot && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-gray-800 rounded-xl shadow-2xl p-8 w-full max-w-md relative" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button onClick={() => setSelectedSlot(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl leading-none">&times;</button>
            <h3 id="modal-title" className="text-2xl font-bold font-display mb-2">Solicitar Reserva</h3>
            <p className="text-gray-400 mb-6">Estás solicitando para el <strong className="text-white">{formattedCurrentDate}</strong> a las <strong className="text-white">{selectedSlot}</strong>.</p>
            
            {!formMessage ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="Nombre_Cliente" className="block text-sm font-medium text-gray-300 mb-1">Tu Nombre</label>
                  <input type="text" id="Nombre_Cliente" value={formData.Nombre_Cliente} onChange={e => setFormData({...formData, Nombre_Cliente: e.target.value})} required className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-accent"/>
                </div>
                 <div>
                  <label htmlFor="WhatsApp_Cliente" className="block text-sm font-medium text-gray-300 mb-1">Tu WhatsApp (con cód. país)</label>
                  <input type="tel" id="WhatsApp_Cliente" value={formData.WhatsApp_Cliente} onChange={e => setFormData({...formData, WhatsApp_Cliente: e.target.value})} required placeholder="Ej: +5491123456789" className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-accent"/>
                </div>
                 <div>
                  <label htmlFor="Servicio_Deseado" className="block text-sm font-medium text-gray-300 mb-1">Servicio Deseado</label>
                  <input type="text" id="Servicio_Deseado" value={formData.Servicio_Deseado} onChange={e => setFormData({...formData, Servicio_Deseado: e.target.value})} required className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-accent"/>
                </div>
                <input type="hidden" name="Fecha_Hora_Solicitada" value={`${formatDate(currentDate)} ${selectedSlot}`} />
                <button type="submit" disabled={isSubmitting} className="w-full bg-brand-accent hover:bg-brand-accent-hover font-bold py-3 rounded-lg disabled:bg-gray-600 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Enviando...' : 'Solicitar Reserva'}
                </button>
              </form>
            ) : (
              <div className={`text-center py-4 px-4 rounded-lg ${formMessage.type === 'success' ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
                <p className="text-lg">{formMessage.text}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AgendaProPage;
