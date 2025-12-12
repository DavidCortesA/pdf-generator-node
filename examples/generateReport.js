// examples/generateReport.js
import { generatePDF } from '../src/index.js';

const run = async () => {
  const data = {
    title: 'Reporte de Actividades',
    date: '2025-12-12',
    summary: 'Este reporte resume las tareas completadas durante la semana.',
    rows: [
      { concept: 'Deploy producción', quantity: '1', total: 'Completado' },
      { concept: 'Corrección de bugs', quantity: '5', total: 'Pendiente' },
      { concept: 'Revisión de PRs', quantity: '12', total: 'Completado' }
    ]
  };

  const pdfPath = await generatePDF('report', data);
  console.log('PDF generado:', pdfPath);
};

run();