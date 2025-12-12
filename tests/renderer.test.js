// tests/renderer.test.js
import { renderTemplate } from '../src/renderer.js';

const testRenderer = async () => {
  console.log('Test: RenderTemplate...');

  const html = await renderTemplate('invoice', {
    title: 'Título Test',
    invoiceNumber: 'INV-1234',
    date: '2025-12-12',
    customer: 'Luis',
    total: '$150'
  });

  if (html.includes('Título Test') && html.includes('Luis')) {
    console.log('✔ RenderTemplate sustituyó valores exitosamente');
  } else {
    console.error('❌ Error en sustitución de valores');
  }
};

testRenderer();

// tests/utils.test.js
import { sanitizeFileName } from '../src/utils.js';

console.log('Test: sanitizeFileName...');

const input = 'Factura #1 / Cliente';
const output = sanitizeFileName(input);

if (output.includes('_') || output.includes('-')) {
  console.log('✔ sanitizeFileName generó un nombre seguro:', output);
} else {
  console.error('❌ sanitizeFileName no funcionó correctamente');
}
