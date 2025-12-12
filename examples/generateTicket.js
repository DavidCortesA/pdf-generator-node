// examples/generateTicket.js
import { generatePDF } from '../src/index.js';

const run = async () => {
  const data = {
    businessName: 'Taquería El Primo',
    date: '2025-12-12 18:32',
    items: [
      { concept: 'Tacos al pastor', quantity: 5, total: '$150.00' },
      { concept: 'Refresco', quantity: 2, total: '$40.00' }
    ],
    total: '190.00',
    thanksMessage: '¡Gracias por su compra!'
  };

  data.rows = data.items;

  const pdfPath = await generatePDF('receipt', data);
  console.log('PDF generado:', pdfPath);
};

run();