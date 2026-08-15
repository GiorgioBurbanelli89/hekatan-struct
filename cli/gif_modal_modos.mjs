#!/usr/bin/env node
/**
 * GIF del modal completo: la animacion, la PARTICIPACION DE MASA y los MODOS.
 *
 * `shot_modal_anim.mjs` solo probaba que el boton mueve el modelo. Esto ademas:
 *   · enciende "📋 Mostrar tabla" → sale el panel con la participacion de masa
 *     modo a modo y el acumulado (el criterio del 90 % de la NEC);
 *   · recorre los primeros N modos con el slider "Modo #", tomando varios
 *     cuadros de cada uno, para que en el GIF se vea CADA modo moviendose y no
 *     solo el primero.
 *
 *   node cli/gif_modal_modos.mjs [local|url] [ejemplo] [n_modos] [cuadros_por_modo]
 *
 * Salida: cli/shots/modos_MM_FF.png + cli/shots/modal_modos.gif
 *
 * Los controles se buscan por su ETIQUETA, no por clase de Tweakpane: las
 * clases cambian al actualizar la libreria y el texto no.
 */
import puppeteer from "puppeteer";
import { mkdirSync, writeFileSync, readFileSync, existsSync, statSync, readdirSync, unlinkSync } from "fs";
import { createServer } from "http";
import { execFileSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots");
mkdirSync(OUT, { recursive: true });
for (const f of readdirSync(OUT)) if (/^modos_/.test(f)) unlinkSync(join(OUT, f));

const BASE_PUB = "/hekatan-struct-lineal/";
let servidor = null;
async function servirLocal() {
  const raiz = join(__dirname, "..", "website", "src", "examples");
  if (!existsSync(raiz)) throw new Error("no hay bundle: corre el build primero");
  const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
                 ".wasm": "application/wasm", ".json": "application/json",
                 ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon" };
  servidor = createServer((req, res) => {
    let p = decodeURIComponent((req.url || "/").split("?")[0]);
    if (p.startsWith(BASE_PUB)) p = p.slice(BASE_PUB.length - 1);
    let f = join(raiz, p);
    if (existsSync(f) && statSync(f).isDirectory()) f = join(f, "index.html");
    if (!existsSync(f)) { res.writeHead(404); return res.end("404 " + p); }
    res.writeHead(200, { "content-type": MIME[extname(f)] || "application/octet-stream" });
    res.end(readFileSync(f));
  });
  await new Promise((r) => servidor.listen(4699, r));
  return `http://localhost:4699${BASE_PUB}workspace/`;
}

const arg = process.argv[2];
const URL_BASE = (!arg || arg === "local") ? await servirLocal() : arg;
const EJEMPLO = process.argv[3] || "test-m-dual";
const NMODOS = parseInt(process.argv[4] || "6", 10);
const XMODO = parseInt(process.argv[5] || "4", 10);
const url = `${URL_BASE}?t=${EJEMPLO}`;

const consola = [];
const espera = (ms) => new Promise((r) => setTimeout(r, ms));

// Chrome headless NO da WebGL sin --enable-unsafe-swiftshader: sin eso three.js
// se cae ANTES de armar el pane y parece que el boton de modal no existe.
const navegador = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox",
         "--enable-unsafe-swiftshader", "--use-angle=swiftshader",
         "--enable-webgl", "--ignore-gpu-blocklist", "--window-size=1600,1000"],
});
const pag = await navegador.newPage();
await pag.setViewport({ width: 1600, height: 1000 });
pag.on("console", (m) => consola.push(`[${m.type()}] ${m.text()}`));
pag.on("pageerror", (e) => consola.push(`[pageerror] ${e.message}`));

console.log("abriendo", url);
await pag.goto(url, { waitUntil: "networkidle2", timeout: 120000 });
await espera(6000);

// ── utilidades dentro de la pagina: buscar una fila del pane por su ETIQUETA ──
await pag.evaluate(() => {
  window.__fila = (txt) => Array.from(document.querySelectorAll(".tp-lblv"))
    .find((r) => ((r.querySelector(".tp-lblv_l") || {}).textContent || "").includes(txt));
  window.__boton = (txt) => Array.from(document.querySelectorAll(".tp-btnv_b, button"))
    .find((e) => (e.textContent || "").includes(txt));
});

// ── 1. correr el modal ──
const ok = await pag.evaluate(() => { const b = window.__boton("Correr modal"); if (b) { b.click(); return true; } return false; });
console.log("modal lanzado:", ok);
if (!ok) { await navegador.close(); servidor?.close(); process.exit(2); }
await espera(10000);

// ── 2. encender la TABLA de participacion de masa ──
const tabla = await pag.evaluate(() => {
  const f = window.__fila("Mostrar tabla");
  const c = f && f.querySelector('input[type="checkbox"]');
  if (!c) return "no se encontro el toggle";
  if (!c.checked) c.click();
  return c.checked ? "encendida" : "no se pudo encender";
});
console.log("tabla de participacion:", tabla);
await espera(1500);

// ── 3. recorrer los modos ──
// El slider "Modo #" es un input numerico de Tweakpane: hay que escribir el
// valor con el setter NATIVO y disparar `change`, porque Tweakpane escucha el
// evento, no la propiedad.
async function ponerModo(n) {
  return pag.evaluate((n) => {
    const f = window.__fila("Modo #");
    const i = f && f.querySelector("input");
    if (!i) return false;
    const set = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    set.call(i, String(n));
    i.dispatchEvent(new Event("input", { bubbles: true }));
    i.dispatchEvent(new Event("change", { bubbles: true }));
    i.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
    return true;
  }, n);
}
const leerEstado = () => pag.evaluate(() => {
  const v = (t) => {
    const f = window.__fila(t);
    const e = f && (f.querySelector("input") || f.querySelector(".tp-txtv_i"));
    return e ? e.value : "?";
  };
  return { modo: v("Modo"), f: v("Frecuencia"), T: v("Período"), dom: v("Dominante"), st: v("Estado") };
});

let k = 0;
for (let m = 1; m <= NMODOS; m++) {
  if (!(await ponerModo(m))) { console.log("no se pudo mover el slider de modo"); break; }
  await espera(900);
  const st = await leerEstado();
  console.log(`  modo ${m}: ${st.modo} · ${st.f} · ${st.T} · ${st.dom} · ${st.st}`);
  for (let c = 0; c < XMODO; c++) {
    await espera(300);
    await pag.screenshot({ path: join(OUT, `modos_${String(++k).padStart(3, "0")}.png`) });
  }
}

writeFileSync(join(OUT, "modos_consola.txt"), consola.join("\n"), "utf-8");
await navegador.close();
servidor?.close();

// ── 4. el GIF ──
console.log(`\n${k} cuadros → armando el GIF`);
execFileSync("ffmpeg", ["-y", "-framerate", "5", "-i", join(OUT, "modos_%03d.png"),
  "-vf", "scale=1000:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse",
  join(OUT, "modal_modos.gif")], { stdio: "pipe" });
const sz = statSync(join(OUT, "modal_modos.gif")).size;
console.log(`listo → cli/shots/modal_modos.gif  (${(sz / 1024).toFixed(0)} KB)`);
