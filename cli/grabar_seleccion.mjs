#!/usr/bin/env node
/**
 * La SELECCION con el raton, grabada: ventana y captura, como AutoCAD.
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
 *   node cli/grabar_seleccion.mjs
 */
import puppeteer from "puppeteer";
import { mkdirSync, readFileSync, existsSync, statSync, rmSync } from "fs";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";
import { execFileSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots");
const FR = join(OUT, "seleccion_raton");
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
await new Promise((r) => srv.listen(4718, r));
const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox","--disable-setuid-sandbox","--enable-unsafe-swiftshader",
         "--use-angle=swiftshader","--window-size=1500,1000"] });
const pag = await nav.newPage();
await pag.setViewport({ width: 1500, height: 1000 });
const errs = [];
pag.on("pageerror", (e) => errs.push(e.message));
await pag.goto(`http://localhost:4718${BASE}workspace/?t=new-blank`,
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

/**
 * ARRASTRE con el boton apretado, capturando por el camino. Es lo que hace
 * falta para ver la ventana de seleccion: si solo se captura antes y despues,
 * el rectangulo no sale en ningun fotograma y no hay forma de saber si existe.
 */
const arrastrar = async (x0, y0, x1, y1, pasos = 12) => {
  const ax = cv.x + cv.w * x0, ay = cv.y + cv.h * y0;
  const bx = cv.x + cv.w * x1, by = cv.y + cv.h * y1;
  await mover(ax, ay, 8);
  await pag.evaluate(() => window.__clic(true));
  await pag.mouse.down();
  await foto();
  for (let i = 1; i <= pasos; i++) {
    const t = i / pasos;
    const px = ax + (bx - ax) * t, py = ay + (by - ay) * t;
    await pag.evaluate((a, b) => window.__cur(a, b), px, py);
    await pag.mouse.move(px, py);
    await foto();
  }
  cx = bx; cy = by;
  await pag.mouse.up();
  await pag.evaluate(() => window.__clic(false));
  await new Promise((k) => setTimeout(k, 320));
  await foto(); await foto();
};
// ═══ SELECCION CON EL RATON, COMO AUTOCAD ══════════════════════════════════
//
// Es CLIC-CLIC, no arrastrar con el boton apretado: un clic en el vacio marca
// la primera esquina, el raton se mueve LIBRE (sin nada pulsado) y el segundo
// clic cierra. Es como funciona AutoCAD, y por eso el rectangulo se ve seguir
// al cursor entre los dos clics.
await decir("Se dibuja un portico en alzado para tener algo que seleccionar");
await foto(); await foto();
await boton("Frente");
await esperar(1400);
await boton("Línea");
for (const [dx, dy] of [[0.38,0.62],[0.38,0.38],[0.62,0.38],[0.62,0.62]]) await enLienzo(dx, dy);
await pag.keyboard.press("Escape");
await esperar(1000);

await decir("Esc suelta la herramienta: ya se puede seleccionar, sin apretar nada");
await esperar(1100);

/** Mueve el raton SIN pulsar, capturando: asi se ve el rectangulo seguir. */
const moverViendo = async (dx, dy, pasos = 10) => {
  const x1 = cv.x + cv.w * dx, y1 = cv.y + cv.h * dy;
  const x0 = cx, y0 = cy;
  for (let i = 1; i <= pasos; i++) {
    const t = i / pasos;
    const px = x0 + (x1 - x0) * t, py = y0 + (y1 - y0) * t;
    await pag.evaluate((a, b) => window.__cur(a, b), px, py);
    await pag.mouse.move(px, py);
    await foto();
  }
  cx = x1; cy = y1;
};
const cuantos = () => pag.evaluate(() => {
  const s = window.__hekatanSelection; return s ? s.size : 0; });

// ── IZQUIERDA → DERECHA = VENTANA: entra lo que queda ENTERO dentro ─────────
await decir("IZQUIERDA → DERECHA · clic 1 en el vacio (esquina)");
await enLienzo(0.26, 0.28);                    // clic 1
await decir("...el raton va LIBRE y el rectangulo azul lo sigue");
await moverViendo(0.50, 0.50);
await moverViendo(0.76, 0.76);
await decir("clic 2 · cierra la ventana");
await enLienzo(0.76, 0.76);                    // clic 2
{
  const n = await cuantos();
  await decir(`Ventana azul → ${n} objetos: el portico entero queda resaltado`);
}
await esperar(2200);

await pag.keyboard.press("Escape");
await esperar(900);

// ── DERECHA → IZQUIERDA = CAPTURA: basta con TOCARLO ────────────────────────
await decir("DERECHA → IZQUIERDA · clic 1 a la derecha de la columna");
await enLienzo(0.52, 0.48);                    // clic 1
await decir("...hacia la izquierda: el rectangulo se pinta VERDE a trazos");
await moverViendo(0.40, 0.52);
await moverViendo(0.30, 0.55);
await decir("clic 2 · captura: basta con TOCAR el objeto");
await enLienzo(0.30, 0.55);                    // clic 2
{
  const n = await cuantos();
  await decir(`Captura verde → ${n} objeto tocado, sin envolverlo entero`);
}
await esperar(2600);

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
    join(OUT, "seleccion_raton.gif")], { stdio: "pipe" });
  console.log(`GIF -> cli/shots/seleccion_raton.gif  (${nf} fotogramas a 11 fps)`);
} catch (e) { console.log("sin GIF:", String(e).slice(0, 140)); }
