#!/usr/bin/env node
/**
 * El selector «Case results» (Dead / Live) de Hekatan, probado desde la GUI.
 *
 * Antes solo apagaba el peso propio: las cargas no pertenecian a ningun patron
 * y se aplicaban en TODOS los casos, asi que poner Live dejaba el modelo casi
 * vacio en vez de mostrar la sobrecarga. Ahora las cargas declaran su patron.
 *
 * Lo que se mide es el MODELO: cuantas cargas quedan aplicadas en cada caso.
 *
 *   node cli/ctl_live.mjs
 */
import puppeteer from "puppeteer";
import { mkdirSync, readFileSync, existsSync, statSync, rmSync } from "fs";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots");
const FR = join(OUT, "live");
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
await new Promise((r) => srv.listen(4711, r));
const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox","--disable-setuid-sandbox","--enable-unsafe-swiftshader",
         "--use-angle=swiftshader","--window-size=1500,1000"] });
const pag = await nav.newPage();
await pag.setViewport({ width: 1500, height: 1000 });
const errs = [];
pag.on("pageerror", (e) => errs.push(e.message));
await pag.goto(`http://localhost:4711${BASE}workspace/?t=new-blank`,
               { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 8000));
await pag.keyboard.press("Escape");
await new Promise((r) => setTimeout(r, 500));

const filas = [];
const anota = (q, ok, det) => { filas.push({ ok });
  console.log(`${ok ? "  ok  " : "FALLA "} ${q}${det ? "   " + det : ""}`); };
let nf = 0;
const foto = () => pag.screenshot({ path: join(FR, `frame_${String(nf++).padStart(2, "0")}.png`) });

// Estructura de partida, desde el boton del ribbon.
await pag.evaluate(() => {
  const b = Array.from(document.querySelectorAll("#hk-ribbon button"))
    .find((x) => (x.textContent || "").includes("Rejilla"));
  b && b.click();
});
await new Promise((r) => setTimeout(r, 2500));
await pag.evaluate(() => window.__hekatanAutoFit?.());
await new Promise((r) => setTimeout(r, 1000));
await foto();

/** Elige un valor en un <select> del Tweakpane por su texto. */
const elegir = async (etiqueta, texto) => pag.evaluate((lab, txt) => {
  const sels = Array.from(document.querySelectorAll("select"));
  for (const s of sels) {
    const fila = s.closest(".tp-lblv") || s.parentElement?.parentElement;
    if (!fila || !(fila.textContent || "").includes(lab)) continue;
    const op = Array.from(s.options).find((o) => o.text.includes(txt));
    if (!op) continue;
    s.value = op.value;
    s.dispatchEvent(new Event("change", { bubbles: true }));
    return true;
  }
  return false;
}, etiqueta, texto);

/** Cuantas cargas quedan aplicadas al modelo FEM. */
const cargas = () => pag.evaluate(() => {
  const ni = window.__hekatanStates?.nodeInputs?.val
          ?? window.__hekatanNodeInputs?.val ?? null;
  const l = ni && ni.loads;
  return { cargas: l ? (l.size ?? 0) : -1,
           caso: window.__hekatanActiveCase ?? null };
});

// Las cargas automaticas vienen apagadas: se encienden, que es lo que haria
// cualquiera antes de mirar resultados.
anota("se pueden encender las cargas automaticas",
      await elegir("Aplicar cargas auto", "S"), "");
await new Promise((r) => setTimeout(r, 1800));

// ── Las cargas del modelo pertenecen a Dead (por defecto) ───────────────────
anota("selector 'Pertenecen al patron' existe",
      await elegir("Pertenecen al patron", "Dead"), "");
await new Promise((r) => setTimeout(r, 1600));
const dead = await cargas();
anota("con caso Dead y cargas de Dead, se aplican", dead.cargas > 0,
      `caso=${dead.caso} · ${dead.cargas} cargas`);
await foto();

// ── Se cambia el caso a Live: las cargas de Dead NO deben actuar ────────────
anota("selector 'Case results' cambia a Live",
      await elegir("Case results", "Live"), "");
await new Promise((r) => setTimeout(r, 2000));
const liveConDead = await cargas();
anota("con caso Live, las cargas de Dead NO actuan", liveConDead.cargas === 0,
      `caso=${liveConDead.caso} · ${liveConDead.cargas} cargas`);
await foto();

// ── Y ahora las cargas SI son de Live ───────────────────────────────────────
await elegir("Pertenecen al patron", "Live");
await new Promise((r) => setTimeout(r, 2000));
const liveConLive = await cargas();
anota("con caso Live y cargas de Live, se aplican", liveConLive.cargas > 0,
      `caso=${liveConLive.caso} · ${liveConLive.cargas} cargas`);
await pag.evaluate(() => window.__hekatanAutoFit?.());
await new Promise((r) => setTimeout(r, 900));
await foto();

console.log(`\n${errs.length} pageerror`);
if (errs.length) console.log(errs.slice(0, 3));
await nav.close(); srv.close();
const malas = filas.filter((f) => !f.ok).length;
console.log(malas ? `FALLA: ${filas.length - malas}/${filas.length}` : `OK: ${filas.length}/${filas.length}`);
process.exit(malas ? 1 : 0);
