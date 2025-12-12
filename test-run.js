import { generatePDF } from "./src/index.js";

const run = async () => {
  try {
    const data = {
      title: "Prueba de Generación",
      invoiceNumber: "TEST-001",
      date: new Date().toISOString().split("T")[0],
      customer: "Cliente de Prueba",
      items: [
        { concept: "Servicio A", quantity: 1, total: "$500" },
        { concept: "Servicio B", quantity: 2, total: "$300" }
      ],
      total: "1,100"
    };

    const pdfPath = await generatePDF("invoice", data, {
      outputDir: "./pruebas"
    });

    console.log("✔ PDF generado correctamente:");
    console.log(pdfPath);
  } catch (error) {
    console.error("❌ Error al generar PDF:", error);
  }
};

run();
