#!/usr/bin/env node
/**
 * ¿Funciona de verdad el boton "▶ Correr modal + animar" del Tweakpane?
 *
 * Mirar el HTML no sirve: la animacion la dibuja Three.js sobre un <canvas>, y
 * en el DOM no se ve si el modelo se esta MOVIENDO. Asi que se abre el
 * workspace con un navegador de verdad, se aprieta el boton y se sacan FRAMES
 * del canvas, uno cada pocos cientos de ms. Si los frames son distintos entre
 * si, el modo se anima; si son identicos, el boton no hizo nada.
 *
 *   node cli/shot_modal_anim.mjs [url] [id_ejemplo] [n_frames]
 *
 * Por defecto va contra el deploy publico y el ejemplo `test-m-dual`.
 * Salida: cli/shots/anim_NN.png + anim_consola.txt (errores de JS) y un
 * resumen de cuanto cambia cada frame respecto del anterior.
 *
 * Frames PNG a proposito y no un GIF: un GIF no se puede revisar cuadro a
 * cuadro ni comparar numericamente, y el objetivo aqui es MEDIR si se movio.
 */
import puppeteer from "puppeteer";
import { mkdirSync, writeFileSync, readFileSync, existsSync, statSync } from "fs";
import { createServer } from "http";
import { createHash } from "crypto";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots");
mkdirSync(OUT, { recursive: true });

// `local` sirve el bundle compilado (website/src/examples) desde un servidor de
// aqui mismo. Contra el deploy de GitHub Pages la captura salia en blanco por
// la red del navegador —un 503 del CDN, y despues ERR_CERT_VERIFIER_CHANGED en
// media docena de assets—, y eso no dice nada del programa. En local se prueba
// EXACTAMENTE el mismo bundle que se publica, sin red de por medio.
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
const URL_BASE = (!arg || arg === "local") ? await servirLocal()
  : arg;
const EJEMPLO = process.argv[3] || "test-m-dual";
const NFRAMES = parseInt(process.argv[4] || "8", 10);
const url = `${URL_BASE}?t=${EJEMPLO}`;

const consola = [];
const espera = (ms) => new Promise((r) => setTimeout(r, ms));

// WebGL en headless: Chrome moderno NO da contexto WebGL por software si no se
// le pide explicitamente con `--enable-unsafe-swiftshader`. Sin esa bandera
// three.js tira "Could not create a WebGL context" y el visor se cae ANTES de
// armar el Tweakpane — el pane sale con dos botones (⚙ 🛠) y parece que el de
// modal "no existe", cuando lo que fallo es el canvas.
const navegador = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox",
         "--enable-unsafe-swiftshader", "--use-angle=swiftshader",
         "--enable-webgl", "--ignore-gpu-blocklist",
         "--window-size=1600,1000"],
});
const pag = await navegador.newPage();
await pag.setViewport({ width: 1600, height: 1000 });
pag.on("console", (m) => consola.push(`[${m.type()}] ${m.text()}`));
pag.on("pageerror", (e) => consola.push(`[pageerror] ${e.message}`));
pag.on("requestfailed", (r) => consola.push(`[requestfailed] ${r.url()} ${r.failure()?.errorText}`));

console.log("abriendo", url);
await pag.goto(url, { waitUntil: "networkidle2", timeout: 120000 });
await espera(6000);   // que el WASM cargue y el ejemplo se arme

// ── 1. encontrar el boton por su TEXTO, no por una clase que puede cambiar ──
const botones = await pag.$$eval(".tp-btnv_b, button", (els) =>
  els.map((e) => (e.textContent || "").trim()).filter(Boolean));
writeFileSync(join(OUT, "anim_botones.txt"), botones.join("\n"), "utf-8");
console.log(`botones en el pane: ${botones.length}`);
const tieneModal = botones.some((t) => t.includes("Correr modal"));
console.log(tieneModal ? "  ✓ esta el boton 'Correr modal + animar'"
                       : "  ✗ NO aparece el boton de modal");

await pag.screenshot({ path: join(OUT, "anim_00_antes.png") });

if (!tieneModal) {
  writeFileSync(join(OUT, "anim_consola.txt"), consola.join("\n"), "utf-8");
  console.log("\nNO se pudo probar la animacion: el boton no esta en el pane.");
  await navegador.close();
  servidor?.close();
  process.exit(2);
}

// ── 2. apretarlo ──
const apretado = await pag.evaluate(() => {
  const els = Array.from(document.querySelectorAll(".tp-btnv_b, button"));
  const b = els.find((e) => (e.textContent || "").includes("Correr modal"));
  if (!b) return false;
  b.click();
  return true;
});
console.log("boton apretado:", apretado);

// ── 3. frames del canvas, uno cada 400 ms ──
const hashes = [];
for (let i = 1; i <= NFRAMES; i++) {
  await espera(i === 1 ? 8000 : 400);   // el primero espera a que resuelva
  const f = join(OUT, `anim_${String(i).padStart(2, "0")}.png`);
  await pag.screenshot({ path: f });
  const h = createHash("md5").update(readFileSync(f)).digest("hex");
  hashes.push(h);
  console.log(`  frame ${i}: ${h.slice(0, 12)}`);
}

// ── 4. ¿se movio? ──
const distintos = new Set(hashes).size;
console.log(`\n${distintos} frames distintos de ${NFRAMES}`);
console.log(distintos > 1
  ? "✓ EL MODELO SE ANIMA (los frames cambian)"
  : "✗ NO se mueve nada: todos los frames son identicos");

// texto del panel modal, si salio
const panel = await pag.evaluate(() => {
  const d = Array.from(document.querySelectorAll("div"))
    .find((e) => /modo|Modo|periodo|Periodo|T \(s\)/.test(e.textContent || "") &&
                 (e.textContent || "").length < 4000 && e.children.length > 0);
  return d ? (d.textContent || "").slice(0, 600) : null;
});
writeFileSync(join(OUT, "anim_panel.txt"), panel || "(no se encontro panel modal)", "utf-8");
writeFileSync(join(OUT, "anim_consola.txt"), consola.join("\n"), "utf-8");
console.log("\npanel modal:", panel ? panel.slice(0, 200).replace(/\s+/g, " ") : "(no aparecio)");
console.log(`\nerrores/avisos de consola: ${consola.length} → cli/shots/anim_consola.txt`);
for (const l of consola.filter((c) => /error|Error|failed/.test(c)).slice(0, 8)) console.log("  " + l);

await navegador.close();
servidor?.close();
process.exit(distintos > 1 ? 0 : 1);
