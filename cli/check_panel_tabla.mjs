#!/usr/bin/env node
/**
 * Comprueba las tres cosas que Jorge pidió del panel de la tabla modal:
 *   1. que se pueda AGRANDAR (antes `resize: both` estaba capado por
 *      `max-width: 760px; max-height: 60vh`, así que solo achicaba),
 *   2. que se pueda MOVER arrastrando la cabecera,
 *   3. que el botón COPIAR ponga la tabla en el portapapeles en columnas.
 *
 * No se comprueba mirando el CSS: se mide el rectángulo del panel antes y
 * después, y se LEE el portapapeles de verdad.
 *
 *   node cli/check_panel_tabla.mjs [local|url] [ejemplo]
 */
import puppeteer from "puppeteer";
import { mkdirSync, writeFileSync, readFileSync, existsSync, statSync } from "fs";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots");
mkdirSync(OUT, { recursive: true });

const BASE_PUB = "/hekatan-struct-lineal/";
let servidor = null;
async function servirLocal() {
  const raiz = join(__dirname, "..", "website", "src", "examples");
  const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
                 ".wasm": "application/wasm", ".json": "application/json",
                 ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon" };
  servidor = createServer((req, res) => {
    let p = decodeURIComponent((req.url || "/").split("?")[0]);
    if (p.startsWith(BASE_PUB)) p = p.slice(BASE_PUB.length - 1);
    let f = join(raiz, p);
    if (existsSync(f) && statSync(f).isDirectory()) f = join(f, "index.html");
    if (!existsSync(f)) { res.writeHead(404); return res.end("404"); }
    res.writeHead(200, { "content-type": MIME[extname(f)] || "application/octet-stream" });
    res.end(readFileSync(f));
  });
  await new Promise((r) => servidor.listen(4699, r));
  return `http://localhost:4699${BASE_PUB}workspace/`;
}

const arg = process.argv[2];
const URL_BASE = (!arg || arg === "local") ? await servirLocal() : arg;
const EJ = process.argv[3] || "test-m-dual";
const espera = (ms) => new Promise((r) => setTimeout(r, ms));

const nav = await puppeteer.launch({
  headless: "new",
  protocolTimeout: 120000,
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--enable-unsafe-swiftshader",
         "--use-angle=swiftshader", "--enable-webgl", "--ignore-gpu-blocklist"],
});
// NO se pide permiso de "clipboard-read": en headless deja la API colgada y
// puppeteer muere con "Runtime.callFunctionOn timed out". Aca se stubea
// navigator.clipboard, asi que el permiso no hace falta.
const pag = await nav.newPage();
await pag.setViewport({ width: 1600, height: 1000 });
// El portapapeles se intercepta ANTES de cargar la pagina. Redefinir
// `navigator.clipboard` en caliente CUELGA el evaluate (puppeteer muere con
// "Runtime.callFunctionOn timed out"); puesto en el documento nuevo, el sitio
// ve el stub desde el primer momento y no hay getter vivo que pisar.
// Y no se lee el portapapeles del sistema a proposito: lo que hay que
// comprobar es lo que ESCRIBE nuestro codigo, no el portapapeles de Windows.
await pag.evaluateOnNewDocument(() => {
  window.__copiado = ""; window.__copiadoHtml = "";
  // Tambien se stubea `ClipboardItem`: sobre un item CONSTRUIDO (no leido del
  // portapapeles) Chrome deja `getType()` pendiente para siempre, y eso colgaba
  // el evaluate siguiente. Con una clase propia que guarda el diccionario, los
  // Blob se leen con .text() y no hay promesa colgada.
  const Orig = window.ClipboardItem;
  window.ClipboardItem = class {
    constructor(d) { this.__d = d || {}; this.types = Object.keys(this.__d); }
  };
  void Orig;
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: {
      writeText: async (x) => { window.__copiado = String(x); },
      write: async (items) => {
        for (const it of items) {
          const d = it.__d || {};
          if (d["text/plain"]) window.__copiado = await d["text/plain"].text();
          if (d["text/html"]) window.__copiadoHtml = await d["text/html"].text();
        }
      },
    },
  });
});
await pag.goto(`${URL_BASE}?t=${EJ}`, { waitUntil: "networkidle2", timeout: 120000 });
await espera(7000);

const clic = (txt) => pag.evaluate((t) => {
  const b = Array.from(document.querySelectorAll(".tp-btnv_b, button"))
    .find((e) => (e.textContent || "").includes(t));
  if (b) { b.click(); return true; } return false;
}, txt);
const rect = () => pag.evaluate(() => {
  const d = document.getElementById("modal-results");
  if (!d) return null;
  const r = d.getBoundingClientRect();
  return { w: Math.round(r.width), h: Math.round(r.height),
           x: Math.round(r.left), y: Math.round(r.top) };
});

await clic("Correr modal");
await espera(9000);
await pag.evaluate(() => {
  const f = Array.from(document.querySelectorAll(".tp-lblv"))
    .find((x) => ((x.querySelector(".tp-lblv_l") || {}).textContent || "").includes("Tabla de modos"));
  const c = f && f.querySelector('input[type="checkbox"]');
  if (c && !c.checked) c.click();
});
await espera(1200);

let malos = 0;
const chk = (que, ok, detalle) => {
  console.log(`  ${ok ? "ok  " : "FALLA"}  ${que.padEnd(34)} ${detalle}`);
  if (!ok) malos++;
};

// ── 1. tamaño ──
const r0 = await rect();
console.log(`\npanel inicial: ${r0.w} x ${r0.h} px  en (${r0.x}, ${r0.y})`);
await pag.screenshot({ path: join(OUT, "panel_1_inicial.png") });

await clic("⤢ Ancho");
await espera(700);
const r1 = await rect();
chk("se puede AGRANDAR", r1.w > r0.w + 100 && r1.h > r0.h,
    `${r0.w}x${r0.h} → ${r1.w}x${r1.h}`);
await pag.screenshot({ path: join(OUT, "panel_2_ancho.png") });

// arrastre de la esquina (el resize nativo del navegador)
await clic("⤡ Reducir");
await espera(600);
const r2 = await rect();
await pag.mouse.move(r2.x + r2.w - 4, r2.y + r2.h - 4);
await pag.mouse.down();
await pag.mouse.move(r2.x + r2.w + 260, r2.y + r2.h + 160, { steps: 12 });
await pag.mouse.up();
await espera(400);
const r3 = await rect();
chk("la ESQUINA agranda", r3.w > r2.w + 100, `${r2.w}x${r2.h} → ${r3.w}x${r3.h}`);
await pag.screenshot({ path: join(OUT, "panel_3_esquina.png") });

// ── 2. mover ──
const antes = await rect();
await pag.mouse.move(antes.x + 120, antes.y + 12);
await pag.mouse.down();
await pag.mouse.move(antes.x + 420, antes.y - 180, { steps: 14 });
await pag.mouse.up();
await espera(300);
const desp = await rect();
chk("se puede MOVER", Math.abs(desp.x - antes.x) > 150,
    `(${antes.x}, ${antes.y}) → (${desp.x}, ${desp.y})`);
await pag.screenshot({ path: join(OUT, "panel_4_movido.png") });

// ── 3. copiar ──
// `navigator.clipboard.readText()` se CUELGA en headless (el permiso se
// concede pero la lectura nunca resuelve, y puppeteer muere con
// "Runtime.callFunctionOn timed out"). Asi que en vez de leer el portapapeles
// del sistema se intercepta lo que la PAGINA escribe, que es justo lo que hay
// que comprobar: nuestro codigo, no el portapapeles de Windows.
// El clic se AGENDA con setTimeout y el evaluate vuelve al instante. Llamando
// b.click() dentro del evaluate, puppeteer se quedaba esperando >120 s: el
// handler arranca una promesa de portapapeles y el protocolo no volvia.
// Agendado, el navegador lo ejecuta solo y aca se espera al resultado leyendo
// una variable, que es lo unico que interesa.
await pag.evaluate(() => {
  const b = Array.from(document.querySelectorAll("button"))
    .find((e) => (e.textContent || "").includes("Copiar"));
  window.__hayBoton = !!b;
  if (b) setTimeout(() => b.click(), 0);
});
let porta = "", portaHtml = "";
for (let i = 0; i < 25 && !porta; i++) {
  await espera(200);
  porta = await pag.evaluate(() => window.__copiado || "");
}
portaHtml = await pag.evaluate(() => window.__copiadoHtml || "");
const lineas = porta.split("\n");
const conTab = lineas.filter((l) => l.includes("\t")).length;
chk("COPIA al portapapeles", porta.length > 200 && !porta.startsWith("ERROR"),
    `${porta.length} caracteres, ${lineas.length} lineas`);
chk("en COLUMNAS (tabuladas)", conTab >= 10, `${conTab} lineas con TAB`);
const numerica = lineas.find((l) => /^\d+\t/.test(l));
chk("numeros SIN el simbolo %", !!numerica && !numerica.includes("%"),
    numerica ? numerica.slice(0, 60).replace(/\t/g, " | ") : "no hay fila numerica");
writeFileSync(join(OUT, "panel_portapapeles.txt"), porta, "utf-8");
await pag.screenshot({ path: join(OUT, "panel_5_copiado.png") });

console.log(`\n${malos ? "FALLAN " + malos : "las 5 comprobaciones OK"}`);
console.log("portapapeles → cli/shots/panel_portapapeles.txt");
await nav.close();
servidor?.close();
process.exit(malos ? 1 : 0);
