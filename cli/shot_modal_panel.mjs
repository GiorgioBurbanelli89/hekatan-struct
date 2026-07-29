#!/usr/bin/env node
/**
 * Captura del panel modal REAL (renderModalTable) para revisarlo antes de publicar.
 * Renderiza los 3 estados que importan:
 *   1. ok        — masa ≥90 %: aviso verde + tabla, sin resumen de texto
 *   2. faltan    — masa <90 %: aviso técnico naranja/rojo diciendo cuánto falta
 *   3. no-corrio — sin modos: motivo técnico visible (antes era un "no results" mudo)
 * Salida: cli/shots/panel_*.png
 */
import puppeteer from "puppeteer";
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "fs";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";
import { execSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots");
mkdirSync(OUT, { recursive: true });

// Compilar el .ts del panel a un ESM que el navegador pueda cargar
const TMP = join(__dirname, "browser_limit");
const src = join(__dirname, "..", "examples", "src", "shared", "renderModalTable.ts");
execSync(`npx esbuild "${src}" --bundle --format=esm --outfile="${join(TMP, "panel.js")}" --external:hekatan-fem`,
  { cwd: join(__dirname, ".."), stdio: "inherit" });

writeFileSync(join(TMP, "panel_page.html"), `<!doctype html><html><head><meta charset="utf-8">
<style>body{background:#1a1a1a;margin:0;height:100vh}</style></head><body>
<script type="module">
import { createModalPanel } from "./panel.js";
const p = createModalPanel();
document.body.appendChild(p.div);
window.__render = (m, c) => p.render(m, c);
window.__listo = true;
</script></body></html>`);

const MIME = { ".html": "text/html", ".js": "text/javascript", ".wasm": "application/wasm" };
const server = createServer((req, res) => {
  const f = join(TMP, (req.url || "/").split("?")[0].slice(1) || "panel_page.html");
  if (!existsSync(f)) { res.writeHead(404); return res.end("404"); }
  res.writeHead(200, { "Content-Type": MIME[extname(f)] || "application/octet-stream" });
  res.end(readFileSync(f));
});
await new Promise(r => server.listen(0, r));
const URL_ = `http://localhost:${server.address().port}/panel_page.html`;

// Datos sintéticos con la forma real de ModalOutputs
const mk = (freqs, mp) => ({ frequencies: freqs, modeShapes: [], massParticipation: mp });
const propsLargas = [
  "Modal tipo ETABS (masa solo lateral, condensación) en malla ms=1m (3270 GDL).",
  "── SÍSMICO NEC-15 ──  Z=0.4 · suelo E · Costa (η=1.8) · R=8 · I=1",
  "T₁=0.483s → Sa(T₁)=1.44g · Cs=0.18 · W=2100kN",
  "── DERIVAS Y CORTANTE POR PISO ──",
];
const casos = {
  // ΣUy ≈ 97 % → cumple
  ok: [mk([2.07, 2.32, 6.5, 7.0], [[0.62,0.01,0,0,0,0.02],[0.01,0.60,0,0,0,0.03],[0.20,0.02,0,0,0,0.01],[0.02,0.31,0,0,0,0.05]]),
       { title: "Test M — Dual (pórtico+losa+muros)", properties: propsLargas }],
  // ΣUy ≈ 63 % → faltan modos en Y
  faltan: [mk([1.37, 1.52, 4.1, 5.2], [[0.70,0.01,0,0,0,0.02],[0.01,0.42,0,0,0,0.03],[0.21,0.02,0,0,0,0.01],[0.01,0.18,0,0,0,0.04]]),
       { title: "Test M — Dual (2×2 vanos, 6 pisos)", properties: propsLargas }],
  // sin modos → debe explicar POR QUÉ
  "no-corrio": [mk([], []),
       { title: "Test M — Dual (6×6 vanos, 8 pisos)",
         properties: ["Sin memoria en el solver WASM con 181596 GDL (30266 nudos, ms=0.5 m). El techo de WebAssembly 32-bit son 2 GB; medido en Chrome, el análisis estático llega hasta ~157 600 GDL. Bajá vanos/pisos o subí «Malla shell [m]»."] }],
};

const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 1100, height: 700, deviceScaleFactor: 2 });
await page.goto(URL_, { waitUntil: "domcontentloaded" });
await page.waitForFunction("window.__listo === true", { timeout: 30000 });

for (const [nombre, [m, c]] of Object.entries(casos)) {
  await page.evaluate((m, c) => window.__render(m, c), m, c);
  await new Promise(r => setTimeout(r, 200));
  const el = await page.$("#modal-results");
  const f = join(OUT, `panel_${nombre}.png`);
  await el.screenshot({ path: f });
  const txt = await page.$eval("#modal-results", n => n.innerText);
  console.log(`\n=== ${nombre} → ${f}`);
  console.log(txt.split("\n").slice(0, 8).join("\n"));
}
await browser.close();
server.close();
