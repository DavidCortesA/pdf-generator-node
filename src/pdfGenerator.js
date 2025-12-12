import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { DEFAULT_OPTIONS } from './config.js';
import { ensureDir, buildOutputPath } from './utils.js';
import { renderTemplate } from './renderer.js';


/**
* Genera un PDF a partir de un template y un objeto de datos.
* @param {string} templateName - Nombre del template (sin .html)
* @param {object} data - Datos para reemplazar en el template
* @param {object} opts - Opciones que sobrescriben DEFAULT_OPTIONS
* @returns {string} ruta del PDF generado
*/
export const generatePDF = async (templateName, data = {}, opts = {}) => {
  const options = {
    ...DEFAULT_OPTIONS,
    ...opts,
    margin: opts.margin ?? DEFAULT_OPTIONS.margin,
    puppeteer: { ...DEFAULT_OPTIONS.puppeteer, ...(opts.puppeteer || {}) }
  };


  const outputDir = options.outputDir;
  await ensureDir(outputDir);


  const html = await renderTemplate(templateName, data);


  // Lanzar Puppeteer
  const browser = await puppeteer.launch(options.puppeteer);
  const page = await browser.newPage();


  // Establecer contenido y esperar que cargue recursos
  await page.setContent(html, { waitUntil: 'networkidle0' });


  const pdfPath = buildOutputPath(outputDir, templateName);


  await page.pdf({
    path: pdfPath,
    format: options.format,
    landscape: options.landscape,
    printBackground: options.printBackground,
    margin: options.margin
  });


  await browser.close();


  // Verificar que el archivo fue creado
  await fs.access(pdfPath);


  return pdfPath;
};