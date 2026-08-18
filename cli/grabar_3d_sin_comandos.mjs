#!/usr/bin/env node
/**
 * Dibujar en 3D SOLO CON EL RATON: planta, cota Z y el boton de subir plantas.
 *
 * La diferencia con los arneses anteriores: alli el cursor SALTABA de un sitio
 * al siguiente porque solo se capturaba un fotograma por paso. Aqui el
 * recorrido entre dos puntos se interpola y se captura DURANTE el movimiento,
 * asi que en el GIF se ve la mano yendo del boton al lienzo, no apareciendo ya
 * puesta. El raton del sistema no sale en las capturas, asi que se pinta uno.
 *
 * Y no llama a ninguna funcion interna para modelar: aprieta botones y hace
 * clics. Lo que se ve es lo que hay.
 *
 *   node cli/grabar_3d_sin_comandos.mjs
 */
import puppeteer from "puppeteer";
import { mkdirSync, readFileSync, existsSync, statSync, rmSync } from "fs";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";
import { execFileSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots");
const FR = join(OUT, "tresd_raton");
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
await new Promise((r) => srv.listen(4715, r));
const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox","--disable-setuid-sandbox","--enable-unsafe-swiftshader",
         "--use-angle=swiftshader","--window-size=1500,1000"] });
const pag = await nav.newPage();
await pag.setViewport({ width: 1500, height: 1000 });
const errs = [];
pag.on("pageerror", (e) => errs.push(e.message));
await pag.goto(`http://localhost:4715${BASE}workspace/?t=new-blank`,
               { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 8000));
await pag.keyboard.press("Escape");
await new Promise((r) => setTimeout(r, 500));

// Cursor pintado + cartel del paso.
await pag.evaluate(() => {
  const c = document.createElement("div");
  c.id = "cur";
  c.style.cssText = "position:fixed;width:0;height:0;pointer-events:none;z-index:99999;left:-99px;top:-99px";
  c.innerHTML = `<svg width="26" height="34" viewBox="0 0 26 34" style="position:absolute;left:-2px;top:-2px;
      filter:drop-shadow(0 2px 3px rgba(0,0,0,.8))">
      <path d="M2 2 L2 24 L8 18.5 L12 27 L16 25 L12 17 L20 17 Z"
            fill="#f8fafc" stroke="#0f172a" stroke-width="1.6" stroke-linejoin="round"/></svg>
    <div id="curhalo" style="position:absolute;left:0;top:0;width:34px;height:34px;margin:-17px 0 0 -17px;
      border-radius:50%;background:radial-gradient(circle,rgba(34,211,238,.55),transparent 65%);
      opacity:0;transition:opacity .12s"></div>`;
  document.body.appendChild(c);
  const t = document.createElement("div");
  t.id = "paso";
  t.style.cssText = "position:fixed;bottom:54px;left:50%;transform:translateX(-50%);padding:7px 18px;" +
    "background:rgba(15,23,42,.96);color:#22d3ee;border:1px solid #22d3ee;border-radius:9px;" +
    "font:14px Consolas,monospace;z-index:99998;white-space:nowrap";
  document.body.appendChild(t);
  window.__cur = (x, y) => { const e = document.getElementById("cur");
    if (e) { e.style.left = x + "px"; e.style.top = y + "px"; } };
  window.__clic = (on) => { const h = document.getElementById("curhalo");
    if (h) h.style.opacity = on ? "1" : "0"; };
  window.__paso = (s) => { const e = document.getElementById("paso"); if (e) e.textContent = s; };
});

let nf = 0;
const foto = async () => {
  await pag.screenshot({ path: join(FR, `f_${String(nf++).padStart(4, "0")}.png`) });
};
const decir = (s) => pag.evaluate((t) => window.__paso(t), s);

let cx = 750, cy = 980;              // de donde parte la mano
/**
 * Mueve el cursor hasta (x,y) EN VARIOS PASOS, capturando por el camino.
 * `suavizar` es un ease-in-out: arranca y frena, como una mano.
 */
const mover = async (x, y, pasos = 9) => {
  const x0 = cx, y0 = cy;
  for (let i = 1; i <= pasos; i++) {
    const t = i / pasos;
    const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    const px = x0 + (x - x0) * e, py = y0 + (y - y0) * e;
    await pag.evaluate((a, b) => window.__cur(a, b), px, py);
    await pag.mouse.move(px, py);
    await foto();
  }
  cx = x; cy = y;
};
/** Clic con destello, y un par de fotogramas para que se vea. */
const pulsar = async () => {
  await pag.evaluate(() => window.__clic(true));
  await foto();
  await pag.mouse.click(cx, cy);
  await new Promise((r) => setTimeout(r, 260));
  await foto();
  await pag.evaluate(() => window.__clic(false));
  await new Promise((r) => setTimeout(r, 200));
  await foto();
};
/** Va al boton del ribbon y lo pulsa. */
const boton = async (txt) => {
  const r = await pag.evaluate((t) => {
    const b = Array.from(document.querySelectorAll("#hk-ribbon button"))
      .find((x) => (x.textContent || "").includes(t));
    if (!b) return null;
    const q = b.getBoundingClientRect();
    return q.width ? { x: q.left + q.width / 2, y: q.top + q.height / 2 } : null;
  }, txt);
  if (!r) { console.log(`  (no esta el boton "${txt}")`); return false; }
  await mover(r.x, r.y);
  await pulsar();
  return true;
};
const cv = await pag.evaluate(() => {
  const c = document.querySelector("#viewer canvas"); const r = c.getBoundingClientRect();
  return { x: r.left, y: r.top, w: r.width, h: r.height };
});
const enLienzo = async (dx, dy) => {
  await mover(cv.x + cv.w * dx, cv.y + cv.h * dy, 7);
  await pulsar();
};
const esperar = async (ms) => {
  const n = Math.max(1, Math.round(ms / 260));
  for (let i = 0; i < n; i++) { await new Promise((r) => setTimeout(r, 260)); await foto(); }
};

// ── El ciclo COMPLETO sobre un portico, que es lo que se puede cerrar solo
// con la barra: dibujar -> apoyar -> cargar -> resolver. Se hace sobre un
// portico y no sobre la rejilla entera porque las columnas de la rejilla se
// quedarian sin apoyo y la matriz sale singular igual: un modelo a medias no
// se resuelve por muchos nudos que tenga.

/** Escribe en la caja de comandos con el cursor encima, letra a letra. */
const teclearVisible = async (txt) => {
  const r = await pag.evaluate(() => {
    const i = document.getElementById("hk3-cmd-input");
    if (!i) return null;
    i.value = ""; i.focus();
    const q = i.getBoundingClientRect();
    return { x: q.left + q.width / 2, y: q.top + q.height / 2 };
  });
  if (r) await mover(r.x, r.y, 5);
  for (const ch of txt) {
    await pag.keyboard.type(ch);
    await foto();
  }
  await pag.keyboard.press("Enter");
  await new Promise((k) => setTimeout(k, 260));
  await foto(); await foto();
};
/** Escribe en la casilla n-esima de la barra (0=vanosX … 2=pisos). */
const escribirEn = async (idx, txt) => {
  const r = await pag.evaluate((n) => {
    const ins = Array.from(document.querySelectorAll("#hk-ribbon input"));
    const i = ins[n]; if (!i) return null;
    const q = i.getBoundingClientRect();
    return { x: q.left + q.width / 2, y: q.top + q.height / 2 };
  }, idx);
  if (!r) return;
  await mover(r.x, r.y, 5);
  await pulsar();
  await pag.evaluate((n) => {
    const i = Array.from(document.querySelectorAll("#hk-ribbon input"))[n];
    if (i) { i.value = ""; i.focus(); }
  }, idx);
  for (const ch of txt) { await pag.keyboard.type(ch); await foto(); }
  await pag.keyboard.press("Enter");
  await new Promise((k) => setTimeout(k, 240));
};
// ═══ EN VISTA 3D, SOLO CON EL RATON ════════════════════════════════════════
// Nada de teclado. Se trabaja en planta a la cota que toque y se sube con el
// boton: es la via para quien no quiere escribir.
await decir("Solo raton · 1 · Planta a cota Z = 0");
await foto(); await foto();
await boton("Planta");
await esperar(1200);

await decir("2 · Rectangulo: la planta de un piso, a clics");
await boton("Rectáng.");
await enLienzo(0.42, 0.42);
await enLienzo(0.58, 0.58);
await pag.keyboard.press("Escape");
await esperar(900);

// Las columnas suben en Z desde la planta: un clic y 3 m de altura.
await decir("3 · Columna: un clic en planta y sube 3 m en Z");
await boton("Columna");
for (const [dx, dy] of [[0.42,0.42],[0.58,0.42],[0.58,0.58],[0.42,0.58]]) await enLienzo(dx, dy);
await pag.keyboard.press("Escape");
await esperar(900);

// Y la planta entera se copia a los pisos de arriba.
await decir("4 · ⇈ Subir: copia lo dibujado a 2 pisos mas, cada 3 m");
await escribirEn(2, "2");                       // nº de pisos
await boton("⇈ Subir");
await esperar(1500);

await decir("5 · A 3D a verlo");
await boton("3D");
await esperar(1200);
await pag.evaluate(() => window.__hekatanAutoFit?.());
await esperar(1500);

const fin = await pag.evaluate(() => {
  const st = window.__hekatanStates;
  const ni = st?.nodeInputs?.val ?? {};
  const g = (k) => { const v = window[k]; return v && v.val ? v.val : []; };
  const pls = g("__hekatanDrawingPolylines");
  const d = st?.deformOutputs?.val;
  const pts = g("__hekatanDrawingPoints");
  // Un portico DE VERDAD tiene sus nudos a cotas Z distintas.
  const zs = pts.map((p) => +p[2].toFixed(2));
  return { cotasZ: [...new Set(zs)].sort((a, b) => a - b),
           alturaZ: zs.length ? +(Math.max(...zs) - Math.min(...zs)).toFixed(2) : 0,
           nudos: pts.length,
           tramos: pls.reduce((s, p) => s + Math.max(0, p.length - 1), 0),
           apoyos: ni.supports ? ni.supports.size : 0,
           cargas: ni.loads ? ni.loads.size : 0,
           deform: d && d.deformations ? (d.deformations.size ?? d.deformations.length ?? 0) : 0 };
});
await decir(`${fin.nudos} nudos · ${fin.tramos} tramos · ${fin.apoyos} apoyos · ` +
            `${fin.cargas} cargas · ${fin.deform} deformaciones`);
await esperar(2200);
console.log("\n", JSON.stringify(fin, null, 1));
console.log(`${errs.length} pageerror`);
if (errs.length) console.log(errs.slice(0, 3));
await nav.close(); srv.close();

try {
  execFileSync("ffmpeg", ["-y", "-framerate", "11", "-i", join(FR, "f_%04d.png"),
    "-vf", "scale=1000:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=128[p];[b][p]paletteuse",
    join(OUT, "tresd_raton.gif")], { stdio: "pipe" });
  console.log(`GIF -> cli/shots/tresd_raton.gif  (${nf} fotogramas a 11 fps)`);
} catch (e) { console.log("sin GIF:", String(e).slice(0, 140)); }
