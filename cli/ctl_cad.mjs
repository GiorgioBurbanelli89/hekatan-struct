#!/usr/bin/env node
/**
 * `--ctl` del workspace: probar la INTERFAZ desde la terminal.
 *
 * Es el equivalente web del canal `--ctl` de las ventanas WPF. Abre el bundle
 * de verdad, aprieta los BOTONES del Tweakpane (no llama a funciones internas)
 * y hace clics reales sobre el lienzo. Deja:
 *
 *   cli/shots/ctl_cad/frame_XX.png   los fotogramas, uno por paso
 *   cli/shots/ctl_cad.gif            el GIF para mirar como quedo
 *   cli/shots/ctl_cad.errores.txt    consola y errores de pagina
 *
 * Se mira el MODELO, no el mensaje de la barra de estado: un panel puede decir
 * "Linea activa" y no haber dibujado nada.
 *
 *   node cli/ctl_cad.mjs [ejemplo]        # default new-blank
 */
import puppeteer from "puppeteer";
import { mkdirSync, writeFileSync, readFileSync, existsSync, statSync, rmSync } from "fs";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";
import { execFileSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots");
const FR = join(OUT, "ctl_cad");
rmSync(FR, { recursive: true, force: true });
mkdirSync(FR, { recursive: true });
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
await new Promise((r) => srv.listen(4705, r));

const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox","--disable-setuid-sandbox","--enable-unsafe-swiftshader",
         "--use-angle=swiftshader","--window-size=1500,1000"] });
const pag = await nav.newPage();
await pag.setViewport({ width: 1500, height: 1000 });
const errores = [], consola = [];
pag.on("pageerror", (e) => errores.push(e.message));
pag.on("console", (m) => consola.push(`[${m.type()}] ${m.text()}`));
await pag.goto(`http://localhost:4705${BASE}workspace/?t=${EJ}`,
               { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 8000));

// ── Cursor pintado: ni captureStream ni la captura traen el puntero real,
//    y sin verlo el GIF no dice DONDE se hizo clic. ─────────────────────────
await pag.evaluate(() => {
  const c = document.createElement("div");
  c.id = "ctl-cursor";
  c.style.cssText = "position:fixed;width:16px;height:16px;pointer-events:none;" +
    "z-index:99999;border:2px solid #fbbf24;border-radius:50%;transform:translate(-50%,-50%);" +
    "background:radial-gradient(circle,#ef4444 30%,transparent 65%);box-shadow:0 0 8px #ef4444;" +
    "left:-50px;top:-50px";
  document.body.appendChild(c);
  const t = document.createElement("div");
  t.id = "ctl-paso";
  t.style.cssText = "position:fixed;top:10px;left:50%;transform:translateX(-50%);padding:6px 14px;" +
    "background:rgba(15,23,42,.95);color:#22d3ee;border:1px solid #22d3ee;border-radius:8px;" +
    "font:13px Consolas,monospace;z-index:99998";
  document.body.appendChild(t);
  window.__ctlAt = (x, y) => { const e = document.getElementById("ctl-cursor");
    if (e) { e.style.left = x + "px"; e.style.top = y + "px"; } };
  window.__ctlPaso = (s) => { const e = document.getElementById("ctl-paso");
    if (e) e.textContent = "▶ " + s; };
});

let nf = 0;
const foto = async (txt) => {
  if (txt) await pag.evaluate((t) => window.__ctlPaso(t), txt);
  await pag.screenshot({ path: join(FR, `frame_${String(nf++).padStart(2, "0")}.png`) });
};
const filas = [];
const anota = (q, ok, det) => { filas.push({ q, ok, det });
  console.log(`${ok ? "  ok  " : "FALLA "} ${q}${det ? "   " + det : ""}`); };

/** Aprieta un boton del Tweakpane por su texto, moviendo el cursor pintado. */
const boton = async (txt) => {
  const r = await pag.evaluate((t) => {
    const bs = Array.from(document.querySelectorAll("button.tp-btnv_b"));
    const b = bs.find((x) => (x.textContent || "").includes(t));
    if (!b) return null;
    const q = b.getBoundingClientRect();
    if (!q.width) return null;
    return { x: q.left + q.width / 2, y: q.top + q.height / 2 };
  }, txt);
  if (!r) return false;
  await pag.evaluate((x, y) => window.__ctlAt(x, y), r.x, r.y);
  await new Promise((k) => setTimeout(k, 260));
  await pag.mouse.click(r.x, r.y);
  await new Promise((k) => setTimeout(k, 500));
  return true;
};

/** Abre una carpeta del Tweakpane por su titulo (si esta cerrada). */
const carpeta = async (txt) => {
  const r = await pag.evaluate((t) => {
    const bs = Array.from(document.querySelectorAll("button.tp-fldv_b"));
    const b = bs.find((x) => (x.textContent || "").includes(t));
    if (!b) return null;
    const q = b.getBoundingClientRect();
    if (!q.width) return null;
    // Ya abierta? el contenedor lleva la clase de expandido.
    const cont = b.closest(".tp-fldv");
    const abierta = cont && cont.classList.contains("tp-fldv-expanded");
    if (abierta) return { ya: true };
    return { x: q.left + q.width / 2, y: q.top + q.height / 2 };
  }, txt);
  if (!r) return false;
  if (r.ya) return true;
  await pag.evaluate((x, y) => window.__ctlAt(x, y), r.x, r.y);
  await new Promise((k) => setTimeout(k, 240));
  await pag.mouse.click(r.x, r.y);
  await new Promise((k) => setTimeout(k, 520));
  return true;
};

/** Lee lo DIBUJADO: los van.state del workspace, que es lo que se pinta. */
const modelo = () => pag.evaluate(() => {
  const g = (k) => { const v = window[k]; return v && v.val ? v.val : []; };
  const pts = g("__hekatanDrawingPoints");
  const pls = g("__hekatanDrawingPolylines");
  const ars = g("__hekatanDrawingAreas");
  return { nodos: pts.length, polilineas: pls.map((p) => p.length),
           tramos: pls.reduce((s, p) => s + Math.max(0, p.length - 1), 0),
           areas: ars.length, puntos: pts.slice(0, 12) };
});

await foto("workspace abierto — lienzo vacio");
const m0 = await modelo();

// ── 1) Panel CAD y plano de trabajo ─────────────────────────────────────────
anota("boton 'Plano XY (planta)'", await boton("Plano XY (planta)"), "");
await new Promise((r) => setTimeout(r, 2200));
await foto("Plano XY (planta)");

// ── 2) Herramienta linea, por boton ─────────────────────────────────────────
anota("carpeta '✏ Dibujar' visible", await carpeta("Dibujar"), "");
anota("boton '／ Línea (frame)'", await boton("Línea (frame)"), "");
await foto("herramienta Linea activa");

// ── 3) Clics reales sobre el lienzo ─────────────────────────────────────────
// Un rectangulo en planta, en pixeles del lienzo: lo que hace el usuario.
const cv = await pag.evaluate(() => {
  const c = document.querySelector("#viewer canvas");
  if (!c) return null;
  const r = c.getBoundingClientRect();
  return { x: r.left, y: r.top, w: r.width, h: r.height };
});
const esq = [[0.34,0.38],[0.56,0.38],[0.56,0.62],[0.34,0.62],[0.34,0.38]];
let n = 0;
for (const [dx, dy] of esq) {
  const x = cv.x + cv.w * dx, y = cv.y + cv.h * dy;
  await pag.evaluate((a, b) => window.__ctlAt(a, b), x, y);
  await pag.mouse.move(x, y);
  await new Promise((r) => setTimeout(r, 220));
  await pag.mouse.click(x, y);
  n++;
  await new Promise((r) => setTimeout(r, 480));
  await foto(`clic ${n} de ${esq.length}`);
}
// Esc cierra el dibujo, como en AutoCAD.
await pag.keyboard.press("Escape");
await new Promise((r) => setTimeout(r, 700));
const m1 = await modelo();
anota("los clics crean nudos", m1.nodos > m0.nodos, `${m0.nodos} -> ${m1.nodos}`);
// La herramienta Linea ENCADENA: 5 clics = UNA polilinea de 5 puntos y 4
// tramos. Antes cortaba cada 2 clics y daba [2],[2],[1] — un rectangulo
// costaba 8 clics repitiendo cada esquina, y quedaba una huerfana de 1 punto.
const utiles = m1.polilineas.filter((n) => n >= 2);
anota("la Linea encadena: 5 clics = 1 polilinea de 5 puntos",
      utiles.length === 1 && utiles[0] === 5,
      `polilineas utiles = [${utiles}]`);
anota("4 tramos, no 2", m1.tramos === 4, `${m1.tramos} tramos`);
anota("sin polilineas huerfanas de 1 punto",
      !m1.polilineas.some((n) => n === 1), `[${m1.polilineas}]`);

// ── 4) Columnas: subir a 3D con la herramienta de columna ───────────────────
await carpeta("En 3D");
await foto("carpeta 'En 3D' abierta");
if (await boton("Columna 3D")) {
  await foto("herramienta Columna 3D");
  for (const [dx, dy] of esq.slice(0, 4)) {
    const x = cv.x + cv.w * dx, y = cv.y + cv.h * dy;
    await pag.evaluate((a, b) => window.__ctlAt(a, b), x, y);
    await pag.mouse.move(x, y);
    await new Promise((r) => setTimeout(r, 200));
    await pag.mouse.click(x, y);
    await new Promise((r) => setTimeout(r, 450));
  }
  await foto("4 columnas");
}
const m2 = await modelo();
anota("las columnas suben el modelo", m2.nodos > m1.nodos, `${m1.nodos} -> ${m2.nodos} nudos`);

// ── 5) Isometrica para verlo en 3D ──────────────────────────────────────────
if (await boton("Vista isométrica")) {
  await new Promise((r) => setTimeout(r, 1600));
  await foto("vista isometrica");
  // Reencuadrar DESPUES de la iso: la vista isometrica reposiciona la camara
  // pero conserva el zoom de la planta, y con el modelo de 3 m de alto la
  // camara queda pegada al plano de trabajo, que llena la pantalla y tapa lo
  // dibujado. El encuadre tiene que ir al final o no sirve.
  await pag.evaluate(() => { window.__hekatanAutoFit?.(); });
  await new Promise((r) => setTimeout(r, 1400));
  await foto("encuadrado — la estructura dibujada");
  await foto("");
}

console.log("\nModelo dibujado:", JSON.stringify(m2, null, 2));
writeFileSync(join(OUT, "ctl_cad.errores.txt"),
  ["== pageerror ==", ...errores, "", "== consola ==", ...consola.slice(-150)].join("\n"), "utf-8");
await nav.close(); srv.close();

// ── GIF ─────────────────────────────────────────────────────────────────────
try {
  execFileSync("magick", ["-delay", "90", "-loop", "0",
    join(FR, "frame_*.png"), join(OUT, "ctl_cad.gif")], { stdio: "pipe" });
  console.log(`\nGIF -> cli/shots/ctl_cad.gif   (${nf} fotogramas)`);
} catch {
  try {
    execFileSync("ffmpeg", ["-y", "-framerate", "1.2", "-i", join(FR, "frame_%02d.png"),
      "-vf", "scale=1100:-1:flags=lanczos", join(OUT, "ctl_cad.gif")], { stdio: "pipe" });
    console.log(`\nGIF -> cli/shots/ctl_cad.gif   (${nf} fotogramas, ffmpeg)`);
  } catch (e) {
    console.log(`\n(sin GIF: no hay ImageMagick ni ffmpeg) — quedan ${nf} PNG en cli/shots/ctl_cad/`);
  }
}
const malas = filas.filter((f) => !f.ok).length;
console.log(malas ? `\nFALLA: ${filas.length - malas}/${filas.length}` : `\nOK: ${filas.length}/${filas.length}`);
process.exit(malas ? 1 : 0);
