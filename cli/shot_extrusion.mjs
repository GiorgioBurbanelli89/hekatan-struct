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

console.log("ejemplo               con forma  extruido  mallas  extruidas  debug");
console.log("-".repeat(70));
for (const id of IDS) {
  await pag.goto(`http://localhost:4710${BASE}workspace/?t=${id}`,
                 { waitUntil: "networkidle2", timeout: 120000 });
  await new Promise((r) => setTimeout(r, 11000));
  const info = await pag.evaluate(() => {
    // Los ganchos REALES del workspace: `__hekatanStates` es el OBJETO de
    // estados (no una funcion) y el contexto de three vive en el elemento del
    // viewer, no en `window`. Llamandolos mal se cazaba la excepcion y salia
    // -1 en las dos columnas: parecia una medida y no medía nada.
    const s = window.__hekatanSettings?.();
    if (!s) return { err: "sin settings" };
    const poner = (k, v) => { if (s[k] && "val" in s[k]) s[k].val = v; };
    poner("extruded", true);
    poner("sections", false);

    const st = window.__hekatanStates;
    const ei = st && st.elementInputs && st.elementInputs.val;
    const shp = ei && ei.sectionShapes;
    const esp = ei && ei.thicknesses;
    const conForma = shp && shp.size !== undefined ? shp.size : 0;
    const conEspesor = esp && esp.size !== undefined ? esp.size : 0;
    // Un ejemplo de las formas que hay, para ver si el `type` es de los que
    // `contornoDeSeccion` sabe dibujar.
    let muestra = "";
    if (shp && shp.size) { const v = shp.values().next().value;
      muestra = JSON.stringify(v).slice(0, 90); }

    const v = document.querySelector("#viewer") ||
              [...document.querySelectorAll("div")].find(d => d.__ctx);
    const ctx = v && v.__ctx;
    let mallas = -1;
    if (ctx && ctx.scene) { mallas = 0; ctx.scene.traverse(o => { if (o.isMesh) mallas++; }); }
    ctx && ctx.render && ctx.render();
    return { activo: s.extruded?.val, conForma, conEspesor, mallas, muestra };
  });
  // ⚠️ van.js corre los `derive` en un MICROTASK, no en el momento de asignar.
  // Leer el resultado en la misma llamada mide el estado ANTERIOR y hace creer
  // que el derive esta muerto. Hay que soltar el hilo antes de contar.
  await new Promise((r) => setTimeout(r, 2500));
  const post = await pag.evaluate(() => {
    const v = document.querySelector("#viewer") ||
              [...document.querySelectorAll("div")].find(d => d.__ctx);
    const ctx = v && v.__ctx;
    const g = ctx && ctx.scene && ctx.scene.getObjectByName("extrusion");
    ctx && ctx.render && ctx.render();
    return { extruidas: g ? g.children.length : -1, visible: g ? g.visible : null,
             dbg: JSON.stringify(window.__extrusionDebug || null) };
  });
  Object.assign(info, post);
  await new Promise((r) => setTimeout(r, 3500));
  await pag.screenshot({ path: join(OUT, id + ".png") });
  console.log(id.padEnd(22) + String(info.conForma ?? "?").padStart(8) +
    String(info.activo ?? info.err).padStart(10) + String(info.mallas ?? "?").padStart(8) + "  " +
    String(info.extruidas).padStart(9) + "  " + info.dbg);
}
console.log(`\npageerror: ${errs.length}\n-> ${OUT}   <- MIRAR los PNG`);
await nav.close(); srv.close();
