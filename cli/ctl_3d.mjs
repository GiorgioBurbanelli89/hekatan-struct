#!/usr/bin/env node
/**
 * ¿Como se dibuja en 3D, aparte de ir cambiando de vista?
 *
 * El plano de trabajo decide en que plano cae el clic, asi que ir saltando de
 * planta a alzado es lento. Se miden las vias que NO obligan a cambiar de
 * vista, y se dice cual funciona:
 *
 *   1. Herramientas con altura: Columna y Muro suben en Z desde la planta.
 *   2. Coordenadas por teclado: `x,y,z` y `@dx,dy,dz` en la caja de comandos.
 *   3. Cota Z del plano: seguir en planta pero a otra altura.
 *   4. Replicar (estilo ETABS): subir lo dibujado a las demas plantas.
 *
 *   node cli/ctl_3d.mjs
 */
import puppeteer from "puppeteer";
import { mkdirSync, readFileSync, existsSync, statSync, rmSync } from "fs";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots");
const FR = join(OUT, "tres_d");
rmSync(FR, { recursive: true, force: true });
mkdirSync(FR, { recursive: true });
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
await new Promise((r) => srv.listen(4714, r));
const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox","--disable-setuid-sandbox","--enable-unsafe-swiftshader",
         "--use-angle=swiftshader","--window-size=1500,1000"] });
const pag = await nav.newPage();
await pag.setViewport({ width: 1500, height: 1000 });
const errs = [];
pag.on("pageerror", (e) => errs.push(e.message));
await pag.goto(`http://localhost:4714${BASE}workspace/?t=new-blank`,
               { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 8000));
await pag.keyboard.press("Escape");
await new Promise((r) => setTimeout(r, 500));

const filas = [];
const anota = (q, ok, det) => { filas.push({ ok });
  console.log(`${ok ? "  ok  " : "NO   "} ${q}${det ? "   " + det : ""}`); };
let nf = 0;
const foto = () => pag.screenshot({ path: join(FR, `f_${String(nf++).padStart(2, "0")}.png`) });
const boton = async (t) => {
  const r = await pag.evaluate((x) => {
    const b = Array.from(document.querySelectorAll("#hk-ribbon button"))
      .find((e) => (e.textContent || "").includes(x));
    if (!b) return null;
    const q = b.getBoundingClientRect();
    return q.width ? { x: q.left + q.width / 2, y: q.top + q.height / 2 } : null;
  }, t);
  if (!r) return false;
  await pag.mouse.click(r.x, r.y);
  await new Promise((k) => setTimeout(k, 450));
  return true;
};
const cv = await pag.evaluate(() => {
  const c = document.querySelector("#viewer canvas"); const r = c.getBoundingClientRect();
  return { x: r.left, y: r.top, w: r.width, h: r.height };
});
const clic = async (dx, dy) => {
  const x = cv.x + cv.w * dx, y = cv.y + cv.h * dy;
  await pag.mouse.move(x, y);
  await new Promise((k) => setTimeout(k, 180));
  await pag.mouse.click(x, y);
  await new Promise((k) => setTimeout(k, 450));
};
/** Cotas Z distintas del modelo: es lo que dice si hay 3D de verdad. */
const cotas = () => pag.evaluate(() => {
  const p = window.__hekatanDrawingPoints?.val ?? [];
  const z = [...new Set(p.map((q) => +q[2].toFixed(2)))].sort((a, b) => a - b);
  return { nudos: p.length, cotas: z, alturas: z.length };
});
const teclear = async (txt) => {
  await pag.evaluate(() => {
    const i = document.getElementById("hk3-cmd-input");
    if (i) { i.value = ""; i.focus(); }
  });
  await pag.type("#hk3-cmd-input", txt, { delay: 12 });
  await pag.keyboard.press("Enter");
  await new Promise((r) => setTimeout(r, 450));
};

await boton("Planta");
await new Promise((r) => setTimeout(r, 1400));

// ── 1) Columna: 1 clic en planta y sube en Z ────────────────────────────────
{
  const a = await cotas();
  await boton("Columna");
  await clic(0.42, 0.45);
  await clic(0.58, 0.45);
  await pag.keyboard.press("Escape");
  await new Promise((r) => setTimeout(r, 700));
  const d = await cotas();
  anota("Columna sube en Z desde la planta", d.alturas > a.alturas,
        `cotas Z: ${JSON.stringify(d.cotas)}`);
  await foto();
}

// ── 2) Muro: 2 clics en planta + altura ─────────────────────────────────────
{
  const a = await cotas();
  await boton("Muro");
  await clic(0.42, 0.58);
  await clic(0.58, 0.58);
  await pag.keyboard.press("Escape");
  await new Promise((r) => setTimeout(r, 800));
  const d = await cotas();
  anota("Muro levanta un plano vertical", d.nudos > a.nudos,
        `+${d.nudos - a.nudos} nudos · cotas ${JSON.stringify(d.cotas)}`);
  await foto();
}

// ── 3) Coordenadas por teclado con la Z puesta a mano ───────────────────────
{
  const a = await cotas();
  await boton("Línea");
  await teclear("0,0,0");
  await teclear("4,0,6");
  await pag.keyboard.press("Escape");
  await new Promise((r) => setTimeout(r, 700));
  const d = await cotas();
  anota("coordenadas `x,y,z` por teclado", d.nudos > a.nudos,
        `${a.nudos} -> ${d.nudos} nudos · cotas ${JSON.stringify(d.cotas)}`);
  await foto();
}

// ── 4) Replicar en Z (estilo ETABS: subir la planta a los demas pisos) ──────
{
  const a = await cotas();
  const n = await pag.evaluate(() => {
    // Seleccionar TODO y replicarlo 3 veces cada 3 m en Z.
    const pts = window.__hekatanDrawingPoints?.val ?? [];
    const sel = window.__hekatanSelection;
    if (!sel) return -1;
    sel.clear();
    pts.forEach((_, i) => sel.add("pt:" + i));
    (window.__hekatanDrawingPolylines?.val ?? []).forEach((_, i) => sel.add("poly:" + i));
    return window.__hekatanReplicateSelection?.(0, 0, 3, 3) ?? -1;
  });
  await new Promise((r) => setTimeout(r, 900));
  const d = await cotas();
  anota("Replicar en Z (subir la planta a los demas pisos)", d.alturas > a.alturas,
        `${a.alturas} -> ${d.alturas} cotas distintas · devolvio ${n}`);
  await foto();
}

// ── ¿Esta en la barra? Lo que existe pero no se ve, no se usa ───────────────
const enBarra = await pag.evaluate(() => {
  const t = (document.getElementById("hk-ribbon")?.textContent || "");
  return { columna: t.includes("Columna"), muro: t.includes("Muro"),
           cotaZ: /Cota Z|Z =/.test(t), replicar: /Replicar|Subir/i.test(t) };
});
anota("Columna y Muro estan en la barra", enBarra.columna && enBarra.muro, "");
anota("subir a los pisos de arriba, desde la barra", enBarra.replicar,
      enBarra.replicar ? "" : "solo en el panel lateral: existe pero no se ve");
anota("la cota Z se puede cambiar desde la barra", enBarra.cotaZ,
      enBarra.cotaZ ? "" : "hay que ir al Tweakpane");

await boton("3D");
await new Promise((r) => setTimeout(r, 1300));
await pag.evaluate(() => window.__hekatanAutoFit?.());
await new Promise((r) => setTimeout(r, 1100));
await foto();
const fin = await cotas();
console.log(`\nModelo: ${fin.nudos} nudos en ${fin.alturas} cotas ${JSON.stringify(fin.cotas)}`);
console.log(`${errs.length} pageerror`);
await nav.close(); srv.close();
const malas = filas.filter((f) => !f.ok).length;
console.log(malas ? `\n${filas.length - malas}/${filas.length}` : `\nOK: ${filas.length}/${filas.length}`);
