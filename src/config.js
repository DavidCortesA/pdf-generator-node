export const DEFAULT_OPTIONS = {
  format: 'A4',
  landscape: false,
  printBackground: true,
  margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' },
  outputDir: './output',
  puppeteer: {
    // argumentos seguros para ejecución en CI / contenedores
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
};