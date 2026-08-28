#!/usr/bin/env node
/**
 * La VISTA EXTRUIDA en PNG: las barras con su seccion real.
 *
 *   node cli/shot_extrusion.mjs [id-de-ejemplo ...]
 *
 * ⚠️ Solo tiene algo que dibujar en los ejemplos que rellenan `sectionShapes`.
 * Un ejemplo que solo da A, I y J describe la RIGIDEZ de la barra pero no su
 * FORMA, y de ahi no se puede sacar un contorno sin inventarlo — mejor no
 * dibujar nada que dibujar una seccion que no es. Las plantillas estan en ese
 * caso, y por eso salen en lineas.
 *
 * Sale: cli/shots/extrusion/<id>.png   ← MIRARLOS
 */
import puppeteer from "puppeteer";
import { readFileSync, existsSync, statSync, mkdirSync } from "fs";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots", "extrusion");
mkdirSync(OUT, { recursive: true });
const BASE = "/hekatan-struct-lineal/";
const raiz = join(__dirname, "..", "website", "src", "examples");
const MIME = { ".html":"text/html", ".js":"text/javascript", ".css":"text/css",
  ".wasm":"application/wasm", ".json":"application/json", ".svg":"image/svg+xml",
  ".png":"image/png", ".ico":"image/x-icon", ".woff2":"font/woff2" };
const srv = createServer((q, r) => {
  let p = decodeURIComponent((q.url || "/").split("?")[0]);
  if (p.startsWith(BASE)) p = p.slice(BASE.length - 1);
  let f = join(raiz, p);
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, "index.html");
  if (!existsSync(f)) { r.writeHead(404); return r.end("404"); }
  r.writeHead(200, { "content-type": MIME[extname(f)] || "application/octet-stream" });
  r.end(readFileSync(f));
});
await new Promise((r) => srv.listen(4710, r));

const IDS = process.argv.slice(2).length ? process.argv.slice(2)
  : ["edificio-ladera", "mezanine", "galpon"];

const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox","--disable-setuid-sandbox","--enable-unsafe-swiftshader","--use-angle=swiftshader"] });
const pag = await nav.newPage();
await pag.setViewport({ width: 1400, height: 900 });
const errs = []; pag.on("pageerror", (e) => errs.push(e.message));

console.log("ejemplo               con forma  extruido  mallas  nota");
console.log("-".repeat(70));
for (const id of IDS) {
  await pag.goto(`http://localhost:4710${BASE}workspace/?t=${id}`,
                 { waitUntil: "networkidle2", timeout: 120000 });
  await new Promise((r) => setTimeout(r, 11000));
  const info = await pag.evaluate(() => {
    const s = window.__hekatanSettings?.();
    if (!s) return { err: "sin settings" };
    const poner = (k, v) => { if (s[k] && "val" in s[k]) s[k].val = v; else s[k] = v; };
    poner("extruded", true);
    poner("sections", false);
    // .cuantas barras traen FORMA? Sin eso no hay contorno que barrer.
    //  puede no existir en este build: se tolera.
    let conForma = 0;
    try {
      const st = window.__hekatanStates && window.__hekatanStates();
      const shp = st && st.elementInputs && st.elementInputs.val && st.elementInputs.val.sectionShapes;
      conForma = shp ? shp.size : 0;
    } catch (e) { conForma = -1; }
    // .cuantas mallas tiene el grupo de extrusion en la escena?
    let mallas = -1, gruposConHijos = [];
    try {
      const ctx = document.querySelector("canvas") && document.querySelector("canvas").parentElement;
      const c = window.__hekatanCtx && window.__hekatanCtx();
      const esc = (c && c.scene) || null;
      if (esc) { mallas = 0; esc.traverse(o => { if (o.isMesh) mallas++; }); }
    } catch (e) {}
    return { activo: s.extruded && "val" in s.extruded ? s.extruded.val : s.extruded, conForma, mallas };
  });
  await new Promise((r) => setTimeout(r, 3500));
  await pag.screenshot({ path: join(OUT, id + ".png") });
  console.log(id.padEnd(22) + String(info.conForma ?? "?").padStart(8) +
    String(info.activo ?? info.err).padStart(10) + String(info.mallas ?? "?").padStart(8) + "  " +
    (info.conForma ? "" : "sin sectionShapes: no hay contorno que barrer"));
}
console.log(`\npageerror: ${errs.length}\n-> ${OUT}   <- MIRAR los PNG`);
await nav.close(); srv.close();
