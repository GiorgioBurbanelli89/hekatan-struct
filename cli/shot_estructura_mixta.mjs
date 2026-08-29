#!/usr/bin/env node
/**
 * .DA LA APP LO MISMO QUE EL CLI?
 *
 *   node cli/shot_estructura_mixta.mjs
 *
 * Los numeros de `cli/riochico_dos_modelos.mjs` salen del motor, si — pero por
 * un camino que monta el propio CLI. Hekatan Struct Lineal es OTRA cosa: el
 * ejemplo del workspace, con su `build()`, sus ajustes y su viewer. Que los dos
 * usen el mismo `deform` no garantiza que hagan los mismos pasos, y si no los
 * hacen, el usuario ve un numero distinto del que yo reporto.
 *
 * Esto abre el ejemplo en el navegador de verdad, lo resuelve y lee el
 * desplazamiento maximo. Si no coincide con el CLI, es que la APP no esta
 * haciendo lo mismo — y lo que hay que arreglar es la app, no el numero.
 */
import puppeteer from "puppeteer";
import { readFileSync, existsSync, statSync, mkdirSync } from "node:fs";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join, extname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots", "estructura-mixta");
mkdirSync(OUT, { recursive: true });
const BASE = "/hekatan-struct-lineal/";
const raiz = join(__dirname, "..", "website", "src", "examples");
const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
               ".json": "application/json", ".wasm": "application/wasm",
               ".png": "image/png", ".svg": "image/svg+xml" };

const srv = createServer((q, r) => {
  let p = decodeURIComponent((q.url || "/").split("?")[0]);
  if (p.startsWith(BASE)) p = p.slice(BASE.length - 1);
  let f = join(raiz, p);
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, "index.html");
  if (!existsSync(f)) { r.writeHead(404); return r.end("404"); }
  r.writeHead(200, { "content-type": MIME[extname(f)] || "application/octet-stream" });
  r.end(readFileSync(f));
});
const PUERTO = +(process.env.PUERTO || 4718);
await new Promise((r) => srv.listen(PUERTO, r));

const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox",
         "--enable-unsafe-swiftshader", "--use-angle=swiftshader"] });
const pag = await nav.newPage();
await pag.setViewport({ width: 1500, height: 950 });
const consola = [];
pag.on("console", (m) => { const t = m.text(); if (/Estructura mixta|e2kParser/.test(t)) consola.push(t); });
const errs = [];
pag.on("pageerror", (e) => errs.push(e.message));

await pag.goto(`http://localhost:${PUERTO}${BASE}workspace/?t=estructura-mixta`,
               { waitUntil: "networkidle2", timeout: 180000 });
await new Promise((r) => setTimeout(r, 12000));

// Encender el analisis: el ejemplo arranca en «Solo el modelo» a proposito.
// Se hace por el MISMO camino que el usuario — el panel de parametros—, no
// llamando al motor por dentro: lo que se quiere medir es lo que ve el usuario.
async function correrCon(cimentacion) {
  await pag.evaluate((cim) => {
    const w = window;
    if (w.__hekatanSetParam) { w.__hekatanSetParam("resolver", 1); w.__hekatanSetParam("cimentacion", cim); }
  }, cimentacion);
  await new Promise((r) => setTimeout(r, 9000));
  return pag.evaluate(() => {
    const st = window.__hekatanStates;
    const o = { nudos: 0, barras: 0, shells: 0, nDef: 0, uz: 0, ux: 0, uy: 0, inf: null };
    const els = st?.elements?.val ?? [];
    o.nudos = (st?.nodes?.val ?? []).length;
    o.barras = els.filter((e) => e.length === 2).length;
    o.shells = els.length - o.barras;
    const m = st?.deformOutputs?.val?.deformations;
    if (m && m.size) {
      o.nDef = m.size;
      for (const [, v] of m) {
        if (Math.abs(v[2]) > Math.abs(o.uz)) o.uz = v[2];
        if (Math.abs(v[0]) > Math.abs(o.ux)) o.ux = v[0];
        if (Math.abs(v[1]) > Math.abs(o.uy)) o.uy = v[1];
      }
    }
    const i = st?.__informeMixta;
    if (i) o.inf = { cargaZ: i.cargaZ, apoyos: i.apoyos, muelles: i.muelles,
                     dif: i.dif, podados: i.podados, deMecanismos: i.deMecanismos,
                     nApoyos: i.apoyos, empotrados: i.empotrados };
    return o;
  });
}

const A = await correrCon(0);   // con cimentacion
await pag.screenshot({ path: join(OUT, "con_cimentacion.png") });
const B = await correrCon(1);   // sin cimentacion, empotrado en z=0

await pag.screenshot({ path: join(OUT, "sin_cimentacion.png") });
console.log("== lo que da la APP (Hekatan Struct Lineal) ==");
console.log("modelo                  nudos  barras  shells   Uz [mm]   equilibrio  apartados");
console.log("-".repeat(86));
for (const [t, r] of [["A - CON cimentacion", A], ["B - SIN cimentacion", B]]) {
  if (!r.nDef) { console.log("  " + t.padEnd(22) + "  NO RESUELVE"); continue; }
  const i = r.inf || {};
  console.log("  " + t.padEnd(22) + String(r.nudos).padStart(5) +
    String(r.barras).padStart(8) + String(r.shells).padStart(8) +
    (r.uz * 1000).toFixed(2).padStart(10) +
    (i.dif !== undefined ? (i.dif.toFixed(2) + " %").padStart(12) : "".padStart(12)) +
    "   " + ((i.podados ?? 0) + " sueltos + " + (i.deMecanismos ?? 0) + " mec."));
}
console.log("\n  lo que dijo por consola:");
for (const c of consola.slice(0, 8)) console.log("    " + c.slice(0, 150));
console.log(`\n  pageerror: ${errs.length}`);
console.log(`  -> ${join(OUT, "estructura-mixta.png")}   <- MIRARLO`);
await nav.close(); srv.close();
