// examples/generateInvoice.js
import { generatePDF } from '../src/index.js';

const run = async () => {
  const data = {
    title: 'Factura de Servicio',
    invoiceNumber: 'F-2025-001',
    date: '2025-12-12',
    customer: 'Juan Pérez',
    items: [
      { concept: 'Desarrollo Web', quantity: 1, total: '$8,500 MXN' },
      { concept: 'Hosting 1 año', quantity: 1, total: '$1,200 MXN' }
    ],
    total: '9,700 MXN'
  };

  const pdfPath = await generatePDF('invoice', data);
  console.log('PDF generado:', pdfPath);
};

run();