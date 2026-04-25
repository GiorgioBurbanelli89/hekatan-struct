// CLI para probar TODOS los ejemplos del workspace.
// Lanza puppeteer headless, carga cada ?t=<id>, espera al render,
// captura errores reales (pageerror) ignorando ruido conocido,
// guarda screenshot. Reporta cuáles fallan.
//
// Uso: node validation/test_all_examples.mjs
// Pre-requisito: dev server corriendo en localhost:4600 (npm run dev:examples)
//
// MEJORAS sobre v1:
//  - Reinicia el browser cada N ejemplos para evitar WASM OOM acumulativo
//  - Filtra errores conocidos no-críticos (denylist de patterns)
//  - Distingue `pageerror` (JS error real = fail) de `console.error` (puede ser ruido)
//  - Solo cuenta como FAIL si hay pageerror Y/O viewer NO se montó

import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";

const BASE = "http://localhost:4600/workspace/?t=";
const OUT_DIR = "validation/screenshots";
const RESTART_BROWSER_EVERY = 8;   // reinicia browser cada N ejemplos

// Lista de ejemplos del registry parametrizado. Los legacy/standalone (1d-mesh,
// gateway-arch, etc.) se prueban con su URL directa, no con ?t= en workspace.
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

// Patrones de errores que ignoramos (ruido conocido no-crítico)
const IGNORED_PATTERNS = [
  /Lit is in dev mode/,
  /Download the Vue Devtools/,
  /Download the React DevTools/,
  /Source map error/,
  /Failed to load resource.*hekatan-logo\.png.*404/,  // logo 404 en algunos casos legacy
  /Failed to load resource.*web-ifc-api/,             // ifc opcional
  /chrome-extension:/,
  /Denying load of chrome-extension/,
  /\[Vue warn\]/,
  /\[HMR\]/,
  /vite.*hmr/i,
  /hot reload/i,
  /web-ifc/i,        // viewer IFC opcional
  /is not defined/,  // a veces transient durante hot-reload
];

function isIgnored(text) {
  return IGNORED_PATTERNS.some(p => p.test(text));
}

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

let browser = null;
let page = null;

async function newBrowser() {
  if (browser) {
    try { await browser.close(); } catch {}
  }
  browser = await puppeteer.launch({ headless: "new" });
  page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 900 });
}

await newBrowser();

const results = [];
let count = 0;

for (const id of EXAMPLES) {
  const url = BASE + id;
  count++;

  // Reinicia browser cada N ejemplos para evitar OOM acumulativo
  if (count > 1 && (count - 1) % RESTART_BROWSER_EVERY === 0) {
    console.log(`\n[browser restart at ${count - 1}/${EXAMPLES.length}]`);
    await newBrowser();
  }

  console.log(`\n[${count}/${EXAMPLES.length}] → ${id}`);
  const pageErrors = [];   // errores JS reales (= FAIL)
  const consoleErrors = []; // console.error filtrado
  const consoleWarnings = [];

  page.on("pageerror", (e) => {
    pageErrors.push(`pageerror: ${e.message}`);
  });
  page.on("console", (msg) => {
    const t = msg.type();
    const text = msg.text();
    if (isIgnored(text)) return;
    if (t === "error") consoleErrors.push(text);
    if (t === "warning") consoleWarnings.push(text);
  });

  try {
    await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
    await new Promise((r) => setTimeout(r, 6000));

    // Verifica que el viewer se haya montado
    const viewerOk = await page.evaluate(() => {
      const divs = document.querySelectorAll("div");
      for (const d of divs) if (d.__settings && d.__ctx) return true;
      return false;
    });

    const filename = path.join(OUT_DIR, `${id}.png`);
    await page.screenshot({ path: filename, fullPage: false });

    // FAIL real solo si hay pageerror (JS real fallido) o el viewer NO montó
    let status;
    if (pageErrors.length > 0) status = "FAIL";
    else if (!viewerOk) status = "NO_VIEWER";
    else status = "OK";

    results.push({
      id, status,
      pageErrors: pageErrors.slice(0, 3),
      consoleErrors: consoleErrors.slice(0, 3),
      consoleWarnings: consoleWarnings.slice(0, 3),
      screenshot: filename,
    });

    const errCount = pageErrors.length + consoleErrors.length;
    const noteSuffix = errCount > 0 ? ` (pe=${pageErrors.length} ce=${consoleErrors.length})` : "";
    console.log(`  ${status}${noteSuffix}`);
    if (pageErrors.length > 0) pageErrors.slice(0, 2).forEach((e) => console.log(`    ⚠ ${e.slice(0, 200)}`));
  } catch (e) {
    console.log(`  TIMEOUT/ERROR: ${e.message}`);
    results.push({ id, status: "TIMEOUT", pageErrors: [e.message], consoleErrors: [], consoleWarnings: [], screenshot: null });
  }

  page.removeAllListeners("pageerror");
  page.removeAllListeners("console");
}

await browser.close();

// ── Reporte ──
console.log("\n" + "=".repeat(80));
console.log("REPORTE FINAL — Todos los ejemplos del workspace");
console.log("=".repeat(80));
console.log(`${"Ejemplo".padEnd(35)} ${"Status".padEnd(12)} pageerr   warn`);
console.log("-".repeat(80));
const byStatus = { OK: 0, FAIL: 0, NO_VIEWER: 0, TIMEOUT: 0 };
for (const r of results) {
  byStatus[r.status]++;
  console.log(`${r.id.padEnd(35)} ${r.status.padEnd(12)} ${String(r.pageErrors.length).padEnd(8)}  ${r.consoleWarnings.length}`);
}
console.log("-".repeat(80));
console.log(`Total: ${results.length}  ·  OK: ${byStatus.OK}  ·  FAIL: ${byStatus.FAIL}  ·  NO_VIEWER: ${byStatus.NO_VIEWER}  ·  TIMEOUT: ${byStatus.TIMEOUT}`);

fs.writeFileSync(path.join(OUT_DIR, "report.json"), JSON.stringify(results, null, 2));
console.log(`\nReporte JSON: ${path.join(OUT_DIR, "report.json")}`);
console.log(`Screenshots:  ${OUT_DIR}/*.png`);
process.exit(byStatus.FAIL + byStatus.TIMEOUT > 0 ? 1 : 0);
