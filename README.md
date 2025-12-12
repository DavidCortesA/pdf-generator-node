# 📄 PDF Generator for Node.js

Un generador de **PDFs dinámicos con Node.js**, usando **Puppeteer + HTML templates**.

Genera fácilmente:

* 🧾 Facturas
* 🎟️ Tickets
* 📜 Certificados
* 📊 Reportes
* 📘 Recibos

Solo necesitas un template HTML y un objeto JSON con datos.

---

## 🚀 Características

* ✔️ Render HTML → PDF con estilos modernos
* ✔️ Placeholders dinámicos: `{{name}}`, `{{total}}`, etc.
* ✔️ Templates listos para usar
* ✔️ API simple: `generatePDF(template, data)`
* ✔️ Exportación automática a carpeta `/output`
* ✔️ Configurable (márgenes, formato, calidad)

---

## 📦 Instalación

```bash
npm install
```

Si usas Puppeteer por primera vez:

```bash
npm install puppeteer
```

---

## 🧠 Uso básico

Ejemplo para generar una factura:

```js
import { generatePDF } from "./src/pdfGenerator.js";

const data = {
  name: "David Cortez",
  total: "1,250.00",
  date: "2025-12-12"
};

await generatePDF("invoice", data);
```

Esto generará un PDF en la carpeta `/output`.

---

## 🧩 Templates disponibles

Los siguientes archivos están en `/templates`:

| Template    | Archivo            | Uso                       |
| ----------- | ------------------ | ------------------------- |
| Factura     | `invoice.html`     | Datos de cliente y total  |
| Ticket      | `ticket.html`      | Confirmaciones / entradas |
| Certificado | `certificate.html` | Reconocimientos           |
| Reporte     | `report.html`      | Tablas / estadísticas     |

También puedes crear tus propios templates.

---

## ⚙️ Opciones avanzadas

Puedes enviar opciones adicionales:

```js
await generatePDF("invoice", data, {
  output: "./my-pdfs",
  format: "A4",
  landscape: false,
  margin: "20px"
});
```

---

## 📁 Estructura del proyecto

```
/pdf-generator-node
├── templates/
├── src/
│   ├── index.js
│   ├── pdfGenerator.js
│   ├── renderer.js
│   └── utils.js
├── examples/
├── output/
├── tests/
├── README.md
└── package.json
```

---

## 🧪 Ejemplos

Ejecuta los ejemplos incluidos:

```bash
node examples/generateInvoice.js
```

---

## 🛠️ Scripts útiles

```bash
npm run start      # Arranca un ejemplo
npm run build      # Compila el proyecto
npm run test       # Corre tests
```

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas!

1. Haz un fork del repo
2. Crea una rama nueva: `git checkout -b feature/nueva-funcion`
3. Haz commit: `git commit -m "Agrega nueva opción"`
4. Push: `git push origin feature/nueva-funcion`
5. Crea un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

---

## 🌟 Si este proyecto te ayuda

Considera darle una ⭐ en GitHub y compartirlo.

---