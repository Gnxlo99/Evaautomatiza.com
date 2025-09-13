// Contenido para: netlify/functions/subscribe.ts

import type { Handler, HandlerEvent } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { email, groupId, name, fields } = JSON.parse(event.body || '{}');

    if (!email || !groupId) {
      return { statusCode: 400, body: 'Email y groupId son requeridos.' };
    }

    const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
    if (!MAILERLITE_API_KEY) {
      console.error("Error CRÍTICO: La variable MAILERLITE_API_KEY no se encontró en Netlify.");
      return { statusCode: 500, body: 'Error de configuración del servidor.' };
    }

    const MAILERLITE_API_URL = `https://connect.mailerlite.com/api/subscribers`;
    
    const payload: {
        email: string;
        groups: string[];
        name?: string;
        fields?: object;
    } = {
        email,
        groups: [groupId],
    };

    if (name) {
        payload.name = name;
    }

    if (fields) {
        payload.fields = fields;
    }

    const response = await fetch(MAILERLITE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`
      },
      body: JSON.stringify(payload)
    });

    const responseBody = await response.json();

    if (!response.ok) {
      console.error('Respuesta de error de MailerLite:', responseBody);
      return { statusCode: response.status, body: JSON.stringify(responseBody) };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Suscripción procesada!", data: responseBody }),
    };

  } catch (error) {
    console.error('Error catastrófico en la función:', error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Hubo un problema con la suscripción.' }) };
  }
};

export { handler };
