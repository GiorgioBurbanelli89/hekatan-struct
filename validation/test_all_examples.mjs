// CLI para probar TODOS los ejemplos del workspace.
// Lanza puppeteer headless, carga cada ?t=<id>, espera al render,
// captura errores de consola y guarda screenshot. Reporta cuáles fallan.
//
// Uso: node validation/test_all_examples.mjs
// Pre-requisito: dev server corriendo en localhost:4600 (npm run dev:examples)

import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";

const BASE = "http://localhost:4600/workspace/?t=";
const OUT_DIR = "validation/screenshots";

// Lista de ejemplos del registry (extraído de exampleRegistry.ts)
const EXAMPLES = [
  // Frames 1D
  "barra-axial",
  "truss-gen",
  "portico-2d",
  "tower-3d",
  "galpon",
  // Columnas
  "columna-cft",
  // Conexiones AISC 358-22
  "conexion-rbs",        // §5
  "conexion-bfp",        // §7
  "conexion-end-plate",  // §6
  "placa-base",
  // Edificios
  "edificio-aporticado",
  "edificio-comparativa-fem",
  "edificio-hormigon",
  "edificio-acero-v2",
  "edificio-mixto",
  "edificio-muros",
  "edificio-dual",
  "edificio-con-losa",
  "edificio-con-muros",
  "edif-acero",
  "mezanine",
  // Placas / cáscaras
  "plate-thin",
  "plate-thick",
  "triangular-plate",
  "membrana-pstress",
  "membrana-csi",
  "plane",
  "shell-thin",
  "shell-thick",
  // Cimentaciones
  "zapata-aislada",
  "zapata-aislada-validacion",
  "zapata-viga-amarre",
];

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();
await page.setViewport({ width: 1600, height: 900 });

const results = [];

for (const id of EXAMPLES) {
  const url = BASE + id;
  console.log(`\n→ ${id}`);
  const errors = [];
  const warnings = [];
  page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
  page.on("console", (msg) => {
    const t = msg.type();
    const text = msg.text();
    if (t === "error" && !text.includes("Lit is in dev mode")) errors.push(`console.error: ${text}`);
    if (t === "warning" && text.includes("solver")) warnings.push(text);
  });

  try {
    await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
    // Esperar hasta que aparezca el viewer o pasen 8 s
    await new Promise((r) => setTimeout(r, 8000));

    const ok = await page.evaluate(() => {
      const divs = document.querySelectorAll("div");
      for (const d of divs) if (d.__settings && d.__ctx) return true;
      return false;
    });

    const filename = path.join(OUT_DIR, `${id}.png`);
    await page.screenshot({ path: filename, fullPage: false });

    const status = errors.length === 0 && ok ? "OK" : errors.length > 0 ? "FAIL" : "NO_VIEWER";
    results.push({ id, status, errors, warnings, screenshot: filename });
    console.log(`  ${status} · errors=${errors.length} · warnings=${warnings.length}`);
    if (errors.length > 0) errors.slice(0, 3).forEach((e) => console.log(`    ${e}`));
  } catch (e) {
    console.log(`  TIMEOUT/ERROR: ${e.message}`);
    results.push({ id, status: "TIMEOUT", errors: [e.message], warnings: [], screenshot: null });
  }

  // Limpiar listeners
  page.removeAllListeners("pageerror");
  page.removeAllListeners("console");
}

await browser.close();

// Reporte
console.log("\n" + "=".repeat(80));
console.log("REPORTE FINAL — Todos los ejemplos del workspace");
console.log("=".repeat(80));
console.log(`${"Ejemplo".padEnd(35)} ${"Status".padEnd(12)} Errores`);
console.log("-".repeat(80));
const byStatus = { OK: 0, FAIL: 0, NO_VIEWER: 0, TIMEOUT: 0 };
for (const r of results) {
  byStatus[r.status]++;
  console.log(`${r.id.padEnd(35)} ${r.status.padEnd(12)} ${r.errors.length}`);
}
console.log("-".repeat(80));
console.log(`Total: ${results.length}  ·  OK: ${byStatus.OK}  ·  FAIL: ${byStatus.FAIL}  ·  NO_VIEWER: ${byStatus.NO_VIEWER}  ·  TIMEOUT: ${byStatus.TIMEOUT}`);

fs.writeFileSync(path.join(OUT_DIR, "report.json"), JSON.stringify(results, null, 2));
console.log(`\nReporte JSON: ${path.join(OUT_DIR, "report.json")}`);
console.log(`Screenshots:  ${OUT_DIR}/*.png`);
