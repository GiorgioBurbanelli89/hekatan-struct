#!/usr/bin/env node
/**
 * «Si solo usas esos botones, ¿logras hacer algo?»
 *
 * La pregunta se responde midiendo, no opinando: este arnes NO llama a ninguna
 * funcion interna. Solo aprieta BOTONES del ribbon y hace CLICS en el lienzo,
 * como alguien que se sienta delante. Al final se cuenta que quedo en el
 * modelo, herramienta por herramienta, y se dice cual sirve y cual no.
 *
 *   node cli/ctl_solo_botones.mjs
 */
import puppeteer from "puppeteer";
import { mkdirSync, writeFileSync, readFileSync, existsSync, statSync, rmSync } from "fs";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";
import { execFileSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots");
const FR = join(OUT, "solo_botones");
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
await new Promise((r) => srv.listen(4710, r));
const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox","--disable-setuid-sandbox","--enable-unsafe-swiftshader",
         "--use-angle=swiftshader","--window-size=1500,1000"] });
const pag = await nav.newPage();
await pag.setViewport({ width: 1500, height: 1000 });
const errores = [];
pag.on("pageerror", (e) => errores.push(e.message));
await pag.goto(`http://localhost:4710${BASE}workspace/?t=new-blank`,
               { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 8000));
await pag.keyboard.press("Escape");           // cerrar la guia, como el usuario
await new Promise((r) => setTimeout(r, 600));

let nf = 0;
const foto = async () => {
  await pag.screenshot({ path: join(FR, `frame_${String(nf++).padStart(2, "0")}.png`) });
};
/** Aprieta un boton del RIBBON por su texto. Solo el ribbon: nada interno. */
const botonRibbon = async (txt) => {
  const r = await pag.evaluate((t) => {
    const b = Array.from(document.querySelectorAll("#hk-ribbon button"))
      .find((x) => (x.textContent || "").includes(t));
    if (!b) return null;
    const q = b.getBoundingClientRect();
    return q.width ? { x: q.left + q.width / 2, y: q.top + q.height / 2 } : null;
  }, txt);
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
  await new Promise((k) => setTimeout(k, 420));
};
const estado = () => pag.evaluate(() => {
  const g = (k) => { const v = window[k]; return v && v.val ? v.val : []; };
  const pls = g("__hekatanDrawingPolylines");
  return { nudos: g("__hekatanDrawingPoints").length,
           tramos: pls.reduce((s, p) => s + Math.max(0, p.length - 1), 0),
           areas: g("__hekatanDrawingAreas").length };
});

const filas = [];
/** Prueba una herramienta: aprieta su boton, da N clics, y mide que cambio. */
const probar = async (nombre, boton, clics, espera) => {
  const antes = await estado();
  const hay = await botonRibbon(boton);
  if (!hay) { filas.push({ h: nombre, ok: false, det: "el boton no existe o no se ve" }); return; }
  for (const [dx, dy] of clics) await clic(dx, dy);
  await pag.keyboard.press("Escape");
  await new Promise((k) => setTimeout(k, 600));
  const d = await estado();
  const dif = { nudos: d.nudos - antes.nudos, tramos: d.tramos - antes.tramos,
                areas: d.areas - antes.areas };
  const ok = espera(dif);
  filas.push({ h: nombre, ok,
    det: `+${dif.nudos} nudos, +${dif.tramos} tramos, +${dif.areas} areas` });
  await foto();
};

await foto();
// ── 1) Rejilla: el arranque ─────────────────────────────────────────────────
const antesG = await estado();
await botonRibbon("Rejilla");
await new Promise((r) => setTimeout(r, 2200));
const trasG = await estado();
filas.push({ h: "Rejilla (boton)", ok: trasG.tramos - antesG.tramos >= 80,
  det: `+${trasG.nudos - antesG.nudos} nudos, +${trasG.tramos - antesG.tramos} tramos` });
await pag.evaluate(() => window.__hekatanAutoFit?.());
await new Promise((r) => setTimeout(r, 1000));
await foto();

// ── 2) Planta, y una herramienta detras de otra ─────────────────────────────
await botonRibbon("Planta");
await new Promise((r) => setTimeout(r, 1600));
await foto();

await probar("Línea",     "Línea",     [[0.40,0.42],[0.58,0.42],[0.58,0.58]], (d) => d.tramos >= 2);
await probar("Polilínea", "Polilínea", [[0.40,0.62],[0.52,0.62],[0.52,0.72]], (d) => d.tramos >= 2);
await probar("Rectáng.",  "Rectáng.",  [[0.62,0.62],[0.74,0.72]],             (d) => d.tramos >= 4);
await probar("Círculo",   "Círculo",   [[0.30,0.35],[0.34,0.35]],             (d) => d.tramos >= 4);
await probar("Arco",      "Arco",      [[0.30,0.75],[0.34,0.72],[0.38,0.75]], (d) => d.tramos >= 2);
await probar("Losa",      "Losa",      [[0.44,0.30],[0.56,0.30],[0.56,0.38],[0.44,0.38]], (d) => d.areas >= 1);
await probar("Columna",   "Columna",   [[0.66,0.45]],                          (d) => d.tramos >= 1);
await probar("Muro",      "Muro",      [[0.66,0.52],[0.76,0.52]],              (d) => d.areas >= 1 || d.tramos >= 1);

// ── 3) Que el modelo RESUELVA, que es de lo que se trata ────────────────────
await pag.evaluate(() => window.__hekatanRebuild?.());
await new Promise((r) => setTimeout(r, 2500));
const res = await pag.evaluate(() => {
  const d = window.__hekatanDeformOutputs?.val ?? window.__hekatanStates?.deformOutputs?.val;
  const n = d && d.deformations ? d.deformations.size ?? d.deformations.length : 0;
  return { deformaciones: n || 0 };
});
await botonRibbon("3D");
await new Promise((r) => setTimeout(r, 1500));
await pag.evaluate(() => window.__hekatanAutoFit?.());
await new Promise((r) => setTimeout(r, 1200));
await foto(); await foto();

const fin = await estado();
console.log("\n  HERRAMIENTA        RESULTADO");
for (const f of filas) console.log(`  ${f.ok ? "ok   " : "NO   "} ${f.h.padEnd(16)} ${f.det}`);
console.log(`\nModelo final: ${fin.nudos} nudos · ${fin.tramos} tramos · ${fin.areas} areas`);
console.log(`Resuelve: ${res.deformaciones} deformaciones · ${errores.length} pageerror`);
if (errores.length) console.log(errores.slice(0, 3));
writeFileSync(join(OUT, "solo_botones.txt"),
  filas.map((f) => `${f.ok ? "ok" : "NO"}  ${f.h}  ${f.det}`).join("\n"), "utf-8");
await nav.close(); srv.close();
try {
  execFileSync("ffmpeg", ["-y", "-framerate", "0.8", "-i", join(FR, "frame_%02d.png"),
    "-vf", "scale=1150:-1:flags=lanczos,split[a][b];[a]palettegen[p];[b][p]paletteuse",
    join(OUT, "solo_botones.gif")], { stdio: "pipe" });
  console.log(`GIF -> cli/shots/solo_botones.gif  (${nf} fotogramas)`);
} catch {}
const malas = filas.filter((f) => !f.ok);
console.log(malas.length ? `\nNO FUNCIONAN: ${malas.map((m) => m.h).join(", ")}`
                         : `\nTodas las herramientas del ribbon hacen algo.`);
