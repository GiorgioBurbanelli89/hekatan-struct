#!/usr/bin/env node
/**
 * CAPTURA COMPLETA de cada ejemplo del workspace (el sitio construido en
 * website/src/examples), para MIRARLAS: deformada, colormap, paneles.
 *   node cli/shot_todos.mjs [id ...]        → cli/shots/todos/<id>.png + _informe.json
 * Lista de ids: la del propio workspace (window.__hekatanExamples).
 */
import puppeteer from "puppeteer";
import { readFileSync, writeFileSync, existsSync, statSync, mkdirSync } from "node:fs";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join, extname } from "node:path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots", "todos"); mkdirSync(OUT, { recursive: true });
const BASE = "/hekatan-struct-lineal/"; const raiz = join(__dirname, "..", "website", "src", "examples");
const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".wasm": "application/wasm", ".png": "image/png", ".svg": "image/svg+xml" };
const srv = createServer((q, r) => {
  let p = decodeURIComponent((q.url || "/").split("?")[0]); if (p.startsWith(BASE)) p = p.slice(BASE.length - 1);
  let f = join(raiz, p); if (existsSync(f) && statSync(f).isDirectory()) f = join(f, "index.html");
  if (!existsSync(f)) { r.writeHead(404); return r.end("404"); }
  r.writeHead(200, { "content-type": MIME[extname(f)] || "application/octet-stream" }); r.end(readFileSync(f));
});
const PUERTO = +(process.env.PUERTO || 4715); await new Promise((r) => srv.listen(PUERTO, r));
const nav = await puppeteer.launch({ headless: "new", args: ["--no-sandbox", "--disable-setuid-sandbox", "--enable-unsafe-swiftshader", "--use-angle=swiftshader"] });
const pag = await nav.newPage(); await pag.setViewport({ width: 1500, height: 950 });
const errores = []; pag.on("pageerror", (e) => errores.push(String(e).slice(0, 200)));
await pag.goto(`http://localhost:${PUERTO}${BASE}workspace/?t=plantillas`, { waitUntil: "networkidle0", timeout: 120000 });
await new Promise((r) => setTimeout(r, 5000));
const todos = await pag.evaluate(() => (window.__hekatanExamples ?? []).map((e) => e.id));
const IDS = process.argv.slice(2).length ? process.argv.slice(2) : todos;
const informe = [];
for (const id of IDS) {
  errores.length = 0; const t0 = Date.now();
  try {
    await pag.goto(`http://localhost:${PUERTO}${BASE}workspace/?t=${id}`, { waitUntil: "networkidle0", timeout: 120000 });
    await new Promise((r) => setTimeout(r, 4000));
    const info = await pag.evaluate(() => { const s = window.__hekatanSettings?.(); return { shell: s?.shellResults?.val, solid: s?.solidResults?.val, deformada: s?.deformedShape?.val }; });
    await pag.screenshot({ path: join(OUT, `${id}.png`) });
    informe.push({ id, ms: Date.now() - t0, ...info, errores: [...errores] });
    console.log(`${id.padEnd(30)} ${String(Date.now() - t0).padStart(6)} ms  shell=${info.shell} solid=${info.solid} ${errores.length ? "ERRORES: " + errores[0] : ""}`);
  } catch (e) { informe.push({ id, error: String(e).slice(0, 200) }); console.log(`${id.padEnd(30)} FALLO ${String(e).slice(0, 120)}`); }
}
writeFileSync(join(OUT, "_informe.json"), JSON.stringify(informe, null, 1));
await nav.close(); srv.close();
console.log(`${IDS.length} capturas en ${OUT}`);
