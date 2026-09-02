#!/usr/bin/env node
/**
 * ¿Los MUROS llevan colormap? Captura los ejemplos con muros (plantilla Dual,
 * edificio-dual, edificio-con-muros, test-m-dual) con varios campos y desde un
 * ALZADO (los muros de canto no se ven en la iso), y mide en la propia app el
 * rango del campo en muros vs losas.
 *   node cli/shot_muros.mjs        → cli/shots/muros/<caso>_<campo>_<vista>.png + _informe.json
 */
import puppeteer from "puppeteer";
import { readFileSync, writeFileSync, existsSync, statSync, mkdirSync } from "node:fs";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join, extname } from "node:path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots", "muros"); mkdirSync(OUT, { recursive: true });
const BASE = "/hekatan-struct-lineal/"; const raiz = join(__dirname, "..", "website", "src", "examples");
const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".wasm": "application/wasm", ".png": "image/png", ".svg": "image/svg+xml" };
const srv = createServer((q, r) => {
  let p = decodeURIComponent((q.url || "/").split("?")[0]); if (p.startsWith(BASE)) p = p.slice(BASE.length - 1);
  let f = join(raiz, p); if (existsSync(f) && statSync(f).isDirectory()) f = join(f, "index.html");
  if (!existsSync(f)) { r.writeHead(404); return r.end("404"); }
  r.writeHead(200, { "content-type": MIME[extname(f)] || "application/octet-stream" }); r.end(readFileSync(f));
});
const PUERTO = +(process.env.PUERTO || 4717); await new Promise((r) => srv.listen(PUERTO, r));
const CASOS = [
  { tag: "plantilla-dual", id: "plantillas", params: { tipo: 6 } },
  { tag: "edificio-dual", id: "edificio-dual" },
  { tag: "edificio-con-muros", id: "edificio-con-muros" },
  { tag: "test-m-dual", id: "test-m-dual" },
];
const CAMPOS = ["membraneXX", "membraneYY", "membranePrincipalMin", "bendingXX", "vonMises", "displacementZ"];
const VISTAS = ["iso", "alzadoY", "alzadoX"];
const nav = await puppeteer.launch({ headless: "new", args: ["--no-sandbox", "--disable-setuid-sandbox", "--enable-unsafe-swiftshader", "--use-angle=swiftshader"] });
const pag = await nav.newPage(); await pag.setViewport({ width: 1500, height: 950 });
const errores = []; pag.on("pageerror", (e) => errores.push(String(e).slice(0, 200)));
const espera = (ms) => new Promise((r) => setTimeout(r, ms));
const informe = [];
const SOLO = process.argv.slice(2);
for (const c of CASOS) {
  if (SOLO.length && !SOLO.includes(c.tag)) continue;
  errores.length = 0;
  await pag.goto(`http://localhost:${PUERTO}${BASE}workspace/?t=${c.id}`, { waitUntil: "networkidle0", timeout: 120000 });
  await espera(4000);
  if (c.params) { for (const [k, v] of Object.entries(c.params)) await pag.evaluate((k, v) => window.__hekatanSetParam(k, v), k, v); await espera(6000); }
  // medir en la app: rango del campo en muros vs losas
  const medida = await pag.evaluate((campos) => {
    const st = window.__hekatanStates; const nodes = st.nodes.val, els = st.elements.val, ao = st.analyzeOutputs.val || {};
    const esVertical = (e) => { if (e.length !== 4) return false; const p = e.map((n) => nodes[n]); const a = [p[1][0]-p[0][0], p[1][1]-p[0][1], p[1][2]-p[0][2]], b = [p[3][0]-p[0][0], p[3][1]-p[0][1], p[3][2]-p[0][2]]; const nz = a[0]*b[1]-a[1]*b[0]; const n = Math.hypot(a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], nz); return Math.abs(nz)/n < 1e-6; };
    const muros = [], losas = []; els.forEach((e, i) => { if (e.length === 4) (esVertical(e) ? muros : losas).push(i); });
    const out = { muros: muros.length, losas: losas.length, campos: {} };
    for (const cpo of campos) {
      const m = ao[cpo]; if (!(m instanceof Map)) { out.campos[cpo] = "no existe"; continue; }
      const st2 = (idx) => { let mn = Infinity, mx = -Infinity, n = 0, nan = 0; for (const i of idx) { const v = m.get(i); if (!v) continue; n++; for (const x of v) { if (!Number.isFinite(x)) { nan++; continue; } mn = Math.min(mn, x); mx = Math.max(mx, x); } } return { con: n, de: idx.length, nan, min: +mn.toPrecision(4), max: +mx.toPrecision(4) }; };
      out.campos[cpo] = { muros: st2(muros), losas: st2(losas) };
    }
    return out;
  }, ["membraneXX", "membraneYY", "membraneXY", "bendingXX", "vonMises"]);
  console.log(c.tag, JSON.stringify(medida));
  const fila = { tag: c.tag, medida, capturas: [], errores: [] };
  for (const campo of CAMPOS) {
    await pag.evaluate((f) => { const s = window.__hekatanSettings(); s.shellResults.val = f; s.deformedShape.val = false; }, campo);
    await espera(1200);
    for (const vista of VISTAS) {
      await pag.evaluate((vista) => {
        const st = window.__hekatanStates; const ns = st.nodes.val; if (!ns.length) return;
        const mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity];
        for (const n of ns) for (let k = 0; k < 3; k++) { mn[k] = Math.min(mn[k], n[k]); mx[k] = Math.max(mx[k], n[k]); }
        const c = [(mn[0]+mx[0])/2, (mn[1]+mx[1])/2, (mn[2]+mx[2])/2]; const d = Math.max(mx[0]-mn[0], mx[1]-mn[1], mx[2]-mn[2]) || 1;
        const v = document.querySelector("#viewer") || [...document.querySelectorAll("div")].find((x) => x.__ctx); const ctx = v && v.__ctx; if (!ctx) return;
        const cam = ctx.camera; const L = d * 1.6;
        if (vista === "alzadoY") cam.position.set(c[0], c[1] - L, c[2] + d * 0.1);
        else if (vista === "alzadoX") cam.position.set(c[0] + L, c[1], c[2] + d * 0.1);
        else cam.position.set(c[0] + L * 0.6, c[1] - L * 0.6, c[2] + L * 0.5);
        cam.up.set(0, 0, 1); ctx.controls.target.set(c[0], c[1], c[2]); ctx.controls.update(); cam.lookAt(c[0], c[1], c[2]); ctx.render?.();
      }, vista);
      await espera(700);
      const legend = await pag.evaluate(() => (document.querySelector("#legend")?.innerText || "").replace(/\s+/g, " ").trim().slice(0, 120));
      const f = `${c.tag}_${campo}_${vista}.png`; await pag.screenshot({ path: join(OUT, f) });
      fila.capturas.push({ f, legend }); console.log(`  ${f}  [${legend}]`);
    }
  }
  fila.errores = [...errores]; informe.push(fila);
}
writeFileSync(join(OUT, "_informe.json"), JSON.stringify(informe, null, 1));
await nav.close(); srv.close(); console.log("listo:", OUT);
