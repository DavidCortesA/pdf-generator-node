// tests/pdfGenerator.test.js
import { generatePDF } from '../src/pdfGenerator.js';
import fs from 'fs';

// Nota: estos tests son básicos y no usan Jest ni framework, solo validan ejecución.
// Si luego quieres Jest, puedo convertirlos.

const run = async () => {
  console.log('Test: Generar PDF simple...');
  const data = {
    title: 'Test PDF',
    date: '2025-12-12',
    customer: 'Test User',
    items: [{ concept: 'Item Test', quantity: 1, total: '$100' }],
    total: '$100'
  };

  const pdfPath = await generatePDF('invoice', data, { outputDir: './tests/output' });

  if (fs.existsSync(pdfPath)) {
    console.log('✔ PDF generado correctamente:', pdfPath);
  } else {
    console.error('❌ No se generó el PDF.');
  }
};

run();