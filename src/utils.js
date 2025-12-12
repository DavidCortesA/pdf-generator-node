import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';


export const ensureDir = async (dir) => {
  try {
    await fsPromises.access(dir);
  } catch (err) {
    await fsPromises.mkdir(dir, { recursive: true });
  }
};


export const readTemplate = async (name) => {
  const filePath = path.join(process.cwd(), 'templates', `${name}.html`);
  return fsPromises.readFile(filePath, 'utf8');
};


export const sanitizeFileName = (str) =>
  String(str)
    .replace(/[^a-z0-9\-_. ]/gi, '_')
    .replace(/\s+/g, '-');


export const buildOutputPath = (outputDir, templateName) => {
  const fileName = `${sanitizeFileName(templateName)}-${Date.now()}.pdf`;
  return path.join(outputDir, fileName);
};