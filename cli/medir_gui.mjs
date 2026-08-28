#!/usr/bin/env node
/**
 * ¿Por qué "archivo nuevo / plantillas" va más lento que abrir un ejemplo?
 * Medido DONDE se nota: en el navegador, con el sitio construido, contando el
 * tiempo de reloj desde que se pide el modelo hasta que está pintado.
 *
 *   node cli/medir_gui.mjs
 *
 * Se mide por separado lo que el Node no ve:
 *   modelo  — build + solver (states.nodes cambia)
 *   pintado — lo que tarda three.js en tener la escena lista (2 frames)
 */
import puppeteer from "puppeteer";
import { createServer } from "http";
import { readFileSync, existsSync, statSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = "/hekatan-struct-lineal/";
const raiz = join(__dirname, "..", "website", "src", "examples");
const MIME = { ".html":"text/html", ".js":"text/javascript", ".css":"text/css",
  ".wasm":"application/wasm", ".json":"application/json", ".svg":"image/svg+xml",
  ".png":"image/png", ".ico":"image/x-icon", ".woff2":"font/woff2" };
const srv = createServer((req, res) => {
  let p = decodeURIComponent((req.url || "/").split("?")[0]);
  if (p.startsWith(BASE)) p = p.slice(BASE.length - 1);
  let f = join(raiz, p);
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, "index.html");
  if (!existsSync(f)) { res.writeHead(404); return res.end("404"); }
  res.writeHead(200, { "content-type": MIME[extname(f)] || "application/octet-stream" });
  res.end(readFileSync(f));
});
await new Promise((r) => srv.listen(4713, r));
const nav = await puppeteer.launch({ headless: "new", protocolTimeout: 900000,
  args: ["--no-sandbox","--disable-setuid-sandbox","--enable-unsafe-swiftshader",
         "--use-angle=swiftshader","--window-size=1500,1000"] });

const pag = await nav.newPage();
await pag.setViewport({ width: 1500, height: 1000 });
await pag.goto(`http://localhost:4713${BASE}workspace/?t=plantillas`, { waitUntil: "networkidle2", timeout: 180000 });
await new Promise(r => setTimeout(r, 9000));
await pag.keyboard.press("Escape");

/** Elige un valor del <select> de una fila del Tweakpane por su etiqueta. */
const elegir = (lab, txt) => pag.evaluate((lab, txt) => {
  for (const s of Array.from(document.querySelectorAll("select"))) {
    const fila = s.closest(".tp-lblv") || s.parentElement?.parentElement;
    if (!fila || !(fila.textContent || "").includes(lab)) continue;
    const op = Array.from(s.options).find(o => o.text.includes(txt));
    if (!op) continue;
    s.value = op.value;
    s.dispatchEvent(new Event("change", { bubbles: true }));
    return op.text;
  }
  return null;
}, lab, txt);

/** Espera a que el modelo tenga OTRO tamaño y a que haya pintado dos frames. */
const esperar = (antes) => pag.evaluate(async (antes) => {
  const t = Date.now();
  while (Date.now() - t < 600000) {
    const st = window.__hekatanStates;
    const n = st?.nodes?.val?.length ?? 0, e = st?.elements?.val?.length ?? 0;
    if (n && (n + "/" + e) !== antes) break;
    await new Promise(r => setTimeout(r, 20));
  }
  const tModelo = Date.now() - t;           // build + solver
  const t2 = Date.now();
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  const tPintado = Date.now() - t2;         // three.js (headless = SwiftShader, va por software)
  const s = window.__hekatanStates;
  return { n: s?.nodes?.val?.length ?? -1, e: s?.elements?.val?.length ?? -1, tModelo, tPintado };
}, antes);

const TIPOS = ["Pórtico plano", "Pórtico 3D", "Pórtico + losa (aporte", "Solo rejilla",
               "Losa plana", "Losa con vigas", "muros (dual)", "arriostrado"];
console.log("CAMBIAR DE PLANTILLA con la app ya cargada - de clic a pintado");
console.log("");
console.log("  plantilla                     modelo   pintado    nudos    elem");
let prev = (await pag.evaluate(() => {
  const s = window.__hekatanStates;
  return (s?.nodes?.val?.length ?? 0) + "/" + (s?.elements?.val?.length ?? 0);
}));
for (const t of TIPOS) {
  const ok = await elegir("Plantilla", t);
  if (!ok) { console.log("  " + t.padEnd(28) + " (no encontré la opción)"); continue; }
  const r = await esperar(prev);
  prev = r.n + "/" + r.e;
  console.log("  " + t.padEnd(28) + String(r.tModelo).padStart(6) + " ms" +
    String(r.tPintado).padStart(7) + " ms" + String(r.n).padStart(8) + String(r.e).padStart(8));
}
await pag.close();
await nav.close(); srv.close();
process.exit(0);
