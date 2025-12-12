import { readTemplate } from './utils.js';


/**
* Renderiza un template sustituyendo placeholders {{key}} por valores del objeto data.
* Soporta un placeholder especial {{rows}} que espera data.rows = [{concept, qty, total}, ...]
*/
export const renderTemplate = async (templateName, data = {}) => {
  let html = await readTemplate(templateName);


  // Si rows está presente, generamos el HTML de filas (útil para report.html)
  if (Array.isArray(data.rows)) {
    const rowsHtml = data.rows
      .map((r) => ` <tr>\n <td>${r.concept ?? ''}</td>\n <td>${r.quantity ?? ''}</td>\n <td>${r.total ?? ''}</td>\n </tr>`)
      .join('\n');
    html = html.replace('{{rows}}', rowsHtml);
  }


  // Reemplazo simple de placeholders {{key}}
  html = html.replace(/{{\s*([a-zA-Z0-9_\.]+)\s*}}/g, (_, key) => {
    // soporte para propiedades anidadas como user.name
    const value = key.split('.').reduce((obj, k) => (obj ? obj[k] : undefined), data);
    return value !== undefined && value !== null ? String(value) : '';
  });


  return html;
};