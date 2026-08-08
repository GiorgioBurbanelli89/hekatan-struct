#!/usr/bin/env node
/**
 * ¿Hasta dónde aguanta el WASM en el NAVEGADOR (Chrome), que es lo que corre en el
 * deploy público? Nada de topes inventados: se sube el tamaño del modelo hasta que
 * el navegador falla de verdad, y se anota dónde y cómo.
 *
 * Corre en Chrome headless (puppeteer) el MISMO deform.wasm del bundle, con la misma
 * geometría de test-m-dual. Para cada tamaño mide, por separado:
 *   - deform  (estático, malla de display)
 *   - modal   (Eigen + Guyan, malla 1.0 m)
 * y registra heap WASM, tiempo y el error exacto si revienta.
 *
 * Cada caso corre en una PESTAÑA NUEVA: el heap de emscripten sólo crece, así que
 * reutilizar la pestaña contaminaría la medición del siguiente.
 *
 * Uso: node browser_limit_run.mjs [fase]     fase = deform | modal | ambas (default)
 */
import puppeteer from "puppeteer";
import { createServer } from "http";
import { readFileSync, existsSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "browser_limit");
const MIME = { ".html": "text/html", ".js": "text/javascript", ".wasm": "application/wasm" };

const server = createServer((req, res) => {
  const p = join(ROOT, (req.url || "/").split("?")[0] === "/" ? "index.html" : (req.url || "").slice(1));
  if (!existsSync(p)) { res.writeHead(404); return res.end("404"); }
  res.writeHead(200, { "Content-Type": MIME[extname(p)] || "application/octet-stream" });
  res.end(readFileSync(p));
});
await new Promise(r => server.listen(0, r));
const PORT = server.address().port;
const URL_ = `http://localhost:${PORT}/`;

const FASE = process.argv[2] || "ambas";
// Tamaños crecientes. ms=0.75 es el default del display; el modal usa 1.0 m.
const CASES = [
  [12,12,8,0.75],[16,16,8,0.75],[20,20,8,0.75],[16,16,8,0.5],
];

const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });

async function correr(nbx, nby, nF, ms, fase) {
  const page = await browser.newPage();
  const consola = [];
  page.on("console", m => consola.push(m.text()));
  page.on("pageerror", e => consola.push("PAGEERROR: " + e.message));
  let out;
  try {
    await page.goto(URL_, { waitUntil: "domcontentloaded" });
    await page.waitForFunction("window.__harnessReady === true", { timeout: 60000 });
    out = await page.evaluate(async ({ nbx, nby, nF, ms, fase }) => {
      const H = window.__harness;
      const MB = b => Math.round(b / 1048576);
      const p = { nbx, nby, nFloors: nF, ms, nWalls: 1, tWall: 0.25, tSlab: 0.20,
                  bCol: 0.40, bBeam: 0.30, hBeam: 0.50, q: 1.0 };
      const R = { nbx, nby, nF, ms, fase };
      try {
        const msUse = fase === "modal" ? 1.0 : ms;
        const d = H.buildEdificio({ ...p, ms: msUse }, { slab: true, walls: true });
        R.nodos = d.nodes.length; R.dof = d.nodes.length * 6;
        R.heapPrevio = MB(H.mod.HEAPU8.length);
        const t0 = performance.now();
        if (fase === "modal") {
          const eiMass = { ...d.ei, densities: new Map([...d.ei.densities].map(([k, v]) => [k, v / 9.80665])) };
          const o = H.modalAnalysis(d.nodes, d.elements, d.ni, eiMass, 24, 1);
          R.nFreq = o.frequencies.length;
          R.T1 = o.frequencies[0] > 0 ? +(1 / o.frequencies[0]).toFixed(4) : 0;
          const mp = o.massParticipation || [];
          R.sumUy = +(mp.reduce((s, r) => s + (r[1] || 0), 0) * 100).toFixed(1);
        } else {
          const o = H.deform(d.nodes, d.elements, d.ni, d.ei);
          R.nDef = o.deformations.size;
        }
        R.tms = Math.round(performance.now() - t0);   // tiempo; `ms` es el tamaño de malla
        R.heapPico = MB(H.mod.HEAPU8.length);
        R.ok = true;
      } catch (e) { R.ok = false; R.error = String(e && e.message || e).slice(0, 200); }
      return R;
    }, { nbx, nby, nF, ms, fase });
  } catch (e) {
    // La pestaña murió (OOM del renderer) → el navegador se cayó de verdad
    out = { nbx, nby, nF, ms, fase, ok: false, error: "PESTAÑA CAÍDA: " + String(e.message).slice(0, 160) };
  }
  const oom = consola.find(l => /Cannot enlarge memory|out of memory|Aborted/i.test(l));
  if (oom) out.consolaWasm = oom.slice(0, 160);
  try { await page.close(); } catch {}
  return out;
}

const fases = FASE === "ambas" ? ["deform", "modal"] : [FASE];
const results = [];
console.log(`Chrome headless · mismo deform.wasm del bundle · 24 modos`);
console.log("fase     caso          nodos     GDL   heapMB    t(ms)     T1    SumUy   estado");
console.log("-".repeat(96));
for (const fase of fases) {
  for (const [nbx, nby, nF, ms = 0.75] of CASES) {
    const r = await correr(nbx, nby, nF, ms, fase);
    results.push(r);
    const tag = `${nbx}x${nby}x${nF}@${ms}`;
    console.log(
      `${fase.padEnd(8)} ${tag.padEnd(12)} ${String(r.nodos ?? "-").padStart(7)} ${String(r.dof ?? "-").padStart(7)} ${String(r.heapPico ?? "-").padStart(7)} ${String(r.tms ?? "-").padStart(8)} ${String(r.T1 ?? "-").padStart(7)} ${String(r.sumUy ?? "-").padStart(7)}   ${r.ok ? "ok" : (r.error || "?")}${r.consolaWasm ? " | " + r.consolaWasm : ""}`
    );
    writeFileSync(join(__dirname, "browser_limit_results.json"), JSON.stringify(results, null, 1));
    if (!r.ok) console.log(`         └─ límite alcanzado en ${fase} con ${tag}`);
  }
}
await browser.close();
server.close();
console.log("\n→ cli/browser_limit_results.json");
