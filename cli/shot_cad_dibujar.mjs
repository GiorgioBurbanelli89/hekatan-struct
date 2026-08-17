#!/usr/bin/env node
/**
 * ¿Se puede dibujar una estructura desde CERO en el workspace?
 *
 * No se mira el .ts: se abre el bundle de verdad, se aprietan los botones del
 * panel CAD y se hacen CLICKS REALES sobre el canvas — el mismo camino que el
 * raycaster del usuario. La demo interna (`runCadDemo`) llama a
 * `__hekatanDrawAt(x,y,z)` con las coordenadas ya sabidas, y eso NO prueba lo
 * unico que puede fallar: que el clic del raton caiga donde el usuario cree.
 *
 * Al final se cuenta lo que quedo en el modelo y se saca el PNG.
 *
 *   node cli/shot_cad_dibujar.mjs [ejemplo]     # default new-blank
 */
import puppeteer from "puppeteer";
import { mkdirSync, writeFileSync, readFileSync, existsSync, statSync } from "fs";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots"); mkdirSync(OUT, { recursive: true });
const BASE = "/hekatan-struct-lineal/";
const raiz = join(__dirname, "..", "website", "src", "examples");
const EJ = process.argv[2] || "new-blank";
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
await new Promise((r) => srv.listen(4703, r));

const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox","--disable-setuid-sandbox","--enable-unsafe-swiftshader",
         "--use-angle=swiftshader","--window-size=1500,1000"] });
const pag = await nav.newPage();
await pag.setViewport({ width: 1500, height: 1000 });
const errores = [], consola = [];
pag.on("pageerror", (e) => errores.push(e.message));
pag.on("console", (m) => consola.push(`[${m.type()}] ${m.text()}`));

await pag.goto(`http://localhost:4703${BASE}workspace/?t=${EJ}`,
               { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 8000));

/** Aprieta un boton del Tweakpane por su texto. */
const boton = (txt) => pag.evaluate((t) => {
  const bs = Array.from(document.querySelectorAll("button.tp-btnv_b"));
  const b = bs.find((x) => (x.textContent || "").includes(t));
  if (!b) return false;
  b.click();
  return true;
}, txt);

/** Mundo -> pantalla, con la camara que hay puesta ahora mismo. */
const aPantalla = (x, y, z) => pag.evaluate((wx, wy, wz) => {
  const v = document.querySelector("#viewer");
  const ctx = v && v.__ctx;
  const cv = v && v.querySelector("canvas");
  if (!ctx || !cv) return null;
  const THREE = window.__THREE_for_shot || null;
  const cam = ctx.camera;
  // Proyeccion manual, sin depender de que THREE este expuesto en window.
  const p = { x: wx, y: wy, z: wz };
  const m = cam.projectionMatrix.elements, mv = cam.matrixWorldInverse.elements;
  const tx = mv[0]*p.x + mv[4]*p.y + mv[8]*p.z + mv[12];
  const ty = mv[1]*p.x + mv[5]*p.y + mv[9]*p.z + mv[13];
  const tz = mv[2]*p.x + mv[6]*p.y + mv[10]*p.z + mv[14];
  const tw = mv[3]*p.x + mv[7]*p.y + mv[11]*p.z + mv[15];
  const cx = m[0]*tx + m[4]*ty + m[8]*tz + m[12]*tw;
  const cy = m[1]*tx + m[5]*ty + m[9]*tz + m[13]*tw;
  const cw = m[3]*tx + m[7]*ty + m[11]*tz + m[15]*tw;
  if (!cw) return null;
  const r = cv.getBoundingClientRect();
  return { x: r.left + ((cx/cw)*0.5 + 0.5)*r.width,
           y: r.top  + ((-cy/cw)*0.5 + 0.5)*r.height };
}, x, y, z);

const paso = [];
const anota = (q, ok, det) => { paso.push({ q, ok, det }); console.log(`${ok?"  ok  ":"FALLA "} ${q}${det?"   "+det:""}`); };

// ── 1) Panel CAD ────────────────────────────────────────────────────────────
anota("abre el panel de Herramientas CAD", await boton("Herramientas CAD") ||
      await pag.evaluate(() => !!document.querySelector("button.tp-btnv_b")), "");

// ── 2) Plano de trabajo en planta ───────────────────────────────────────────
// OJO: hay DOS botones que empiezan igual, "Plano XY (reset horizontal)" entre
// las herramientas y "Plano XY (planta)" en la carpeta Plano de trabajo. Buscar
// "Plano XY" a secas agarra el primero, que NO pone la vista en planta: el
// rotulo de pantalla se queda en "Plano XZ" y los clics caen en otro plano.
anota("boton 'Plano XY (planta)'", await boton("Plano XY (planta)"), "");
await new Promise((r) => setTimeout(r, 2500));
const planoReal = await pag.evaluate(() => {
  const el = Array.from(document.querySelectorAll("div,span"))
    .find((e) => /^Plano (XY|XZ|YZ)$/.test((e.textContent || "").trim()));
  return el ? el.textContent.trim() : null;
});
const stPlano = await pag.evaluate(() => {
  const c = window.__hekatanCadState; const s = c && c.get && c.get(); return s ? s.workPlane : null;
});
anota("el rotulo de pantalla y el estado dicen lo mismo",
      (planoReal || "").toLowerCase().includes(String(stPlano)),
      `pantalla="${planoReal}" estado="${stPlano}"`);

// ── 3) Herramienta linea ────────────────────────────────────────────────────
const okLinea = await boton("Línea (frame)") || await boton("Linea (frame)");
anota("boton '／ Línea (frame)'", okLinea, "");
await new Promise((r) => setTimeout(r, 1200));

// ── 4) CLICKS REALES sobre el canvas ────────────────────────────────────────
// Un cuadrado 6x4 en planta. Se pide la proyeccion ANTES de cada clic porque
// la camara puede reencuadrar sola al aparecer el primer nudo.
const cuadro = [[0,0,0],[6,0,0],[6,4,0],[0,4,0],[0,0,0]];
let clicsOk = 0;
for (const [x, y, z] of cuadro) {
  const sp = await aPantalla(x, y, z);
  if (!sp) continue;
  await pag.mouse.click(sp.x, sp.y);
  clicsOk++;
  await new Promise((r) => setTimeout(r, 700));
}
anota("clics reales sobre el canvas", clicsOk === cuadro.length, `${clicsOk}/${cuadro.length}`);

// ── 4b) La VIA RAPIDA: la linea de comandos con coordenadas ────────────────
// Es lo que de verdad sirve para levantar una estructura desde cero: a escala
// de plano un pixel puede ser medio centimetro, y una luz de 6.00 m no se pone
// a ojo. La barra acepta `x,y,z` absoluto, `@dx,dy` relativo y `d<ang` polar.
await pag.evaluate(() => { window.__hekatanCadResetPending?.(); });
const teclear = async (txt) => {
  await pag.evaluate(() => {
    const i = document.getElementById("hk3-cmd-input");
    if (i) { i.value = ""; i.focus(); }
  });
  await pag.type("#hk3-cmd-input", txt, { delay: 12 });
  await pag.keyboard.press("Enter");
  await new Promise((r) => setTimeout(r, 450));
};
await teclear("line");
for (const c of ["0,0,0", "6,0,0", "6,4,0", "0,4,0", "0,0,0"]) await teclear(c);
await pag.keyboard.press("Escape");
await new Promise((r) => setTimeout(r, 1500));

// ── 5) Que quedo en el modelo ───────────────────────────────────────────────
await new Promise((r) => setTimeout(r, 2500));
const est = await pag.evaluate(() => {
  const g = (k) => { try { return window[k]; } catch { return undefined; } };
  const cad = g("__hekatanCadState");
  const st = cad && cad.get && cad.get();
  const script = g("__hekatanCliScript") || "";
  const cuenta = (c) => script.split(/\r?\n/).filter((l) => l.trim().split(/\s+/)[0] === c).length;
  const dp = g("__hekatanDrawingState");
  return {
    puntos: st && st.points ? st.points.length : null,
    nodosDibujados: dp && dp.points && dp.points.val ? dp.points.val.length : null,
    polilineas: dp && dp.polylines && dp.polylines.val
      ? dp.polylines.val.map((p) => p.length) : null,
    tool: st ? st.tool : null,
    plano: st ? st.workPlane : null,
    guionNodos: cuenta("node"),
    guionFrames: cuenta("frame"),
    guionLen: script.length,
    apis: ["__hekatanCadState","__hekatanDrawAt","__hekatanCliScript","__hekatanRebuild"]
            .filter((k) => g(k) !== undefined),
  };
});
console.log("\nEstado:", JSON.stringify(est, null, 2));

await pag.screenshot({ path: join(OUT, `cad_dibujar_${EJ}.png`) });
writeFileSync(join(OUT, `cad_dibujar_${EJ}.errores.txt`),
  ["== pageerror ==", ...errores, "", "== consola ==", ...consola.slice(-120)].join("\n"), "utf-8");
console.log(`\nPNG  -> cli/shots/cad_dibujar_${EJ}.png`);
console.log(`log  -> cli/shots/cad_dibujar_${EJ}.errores.txt   (${errores.length} pageerror)`);
await nav.close(); srv.close();
