#!/usr/bin/env node
/**
 * ¿Se puede SELECCIONAR con el raton? Se dibuja un portico, se aprieta el
 * boton Selec. y se hace clic sobre un nudo y sobre una barra.
 *
 *   node cli/ctl_seleccion.mjs
 */
import puppeteer from "puppeteer";
import { mkdirSync, readFileSync, existsSync, statSync, rmSync } from "fs";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots");
const FR = join(OUT, "seleccion");
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
await new Promise((r) => srv.listen(4713, r));
const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox","--disable-setuid-sandbox","--enable-unsafe-swiftshader",
         "--use-angle=swiftshader","--window-size=1500,1000"] });
const pag = await nav.newPage();
await pag.setViewport({ width: 1500, height: 1000 });
const errs = [];
pag.on("pageerror", (e) => errs.push(e.message));
await pag.goto(`http://localhost:4713${BASE}workspace/?t=new-blank`,
               { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 8000));
await pag.keyboard.press("Escape");
await new Promise((r) => setTimeout(r, 500));

const filas = [];
const anota = (q, ok, det) => { filas.push({ ok });
  console.log(`${ok ? "  ok  " : "FALLA "} ${q}${det ? "   " + det : ""}`); };
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
  await new Promise((k) => setTimeout(k, 200));
  await pag.mouse.click(x, y);
  await new Promise((k) => setTimeout(k, 500));
};
const sel = () => pag.evaluate(() => {
  const s = window.__hekatanSelection;
  return { n: s ? s.size : -1, ids: s ? [...s].slice(0, 4) : [],
           tool: window.__hekatanCadState?.get?.()?.tool ?? null,
           rectExplicit: window.__hekatanRectSelectExplicit ?? null };
});

// ── Portico a mano, con la herramienta Linea ────────────────────────────────
await boton("Planta");
await new Promise((r) => setTimeout(r, 1500));
await boton("Línea");
const P = [[0.40, 0.62], [0.40, 0.40], [0.60, 0.40], [0.60, 0.62]];
for (const [dx, dy] of P) await clic(dx, dy);
await pag.keyboard.press("Escape");
await new Promise((r) => setTimeout(r, 800));
const m = await pag.evaluate(() => {
  const g = (k) => { const v = window[k]; return v && v.val ? v.val : []; };
  const pls = g("__hekatanDrawingPolylines");
  return { nudos: g("__hekatanDrawingPoints").length,
           tramos: pls.reduce((s, p) => s + Math.max(0, p.length - 1), 0) };
});
anota("hay un portico dibujado", m.nudos === 4 && m.tramos === 3,
      `${m.nudos} nudos, ${m.tramos} tramos`);
await foto();

// ── Seleccionar un NUDO ─────────────────────────────────────────────────────
anota("el boton Selec. existe", await boton("Selec"), "");
const s0 = await sel();
anota("al apretarlo queda el tool 'select'", s0.tool === "select",
      `tool=${s0.tool} · rectSelectExplicit=${s0.rectExplicit}`);
await clic(...P[0]);
const s1 = await sel();
anota("un clic sobre un NUDO lo selecciona", s1.n > 0,
      `${s1.n} seleccionados · ${JSON.stringify(s1.ids)}`);
await foto();

// ── Seleccionar una BARRA (punto medio de la columna izquierda) ─────────────
await pag.keyboard.press("Escape");
await new Promise((r) => setTimeout(r, 500));
await clic(0.40, 0.51);
const s2 = await sel();
anota("un clic sobre una BARRA la selecciona", s2.n > 0,
      `${s2.n} seleccionados · ${JSON.stringify(s2.ids)}`);
await foto();

// ── SELECCION POR VENTANA, en los DOS sentidos (como AutoCAD) ──────────────
// Izquierda -> derecha = VENTANA: entra solo lo que queda ENTERO dentro.
// Derecha -> izquierda = CAPTURA: basta con TOCARLO.
const arrastrar = async (x0, y0, x1, y1) => {
  await pag.keyboard.press("Escape");
  await new Promise((r) => setTimeout(r, 400));
  await pag.mouse.move(cv.x + cv.w * x0, cv.y + cv.h * y0);
  await pag.mouse.down();
  // En varios pasos: con un solo salto el `pointermove` no llega a marcar el
  // arrastre como activo y se queda en un clic suelto.
  for (let i = 1; i <= 6; i++) {
    await pag.mouse.move(cv.x + cv.w * (x0 + (x1 - x0) * i / 6),
                         cv.y + cv.h * (y0 + (y1 - y0) * i / 6));
    await new Promise((r) => setTimeout(r, 90));
  }
  await pag.mouse.up();
  await new Promise((r) => setTimeout(r, 600));
  return (await sel()).n;
};
{
  // A PROPOSITO no se aprieta "Selec." antes: arrastrar sobre el vacio tiene
  // que abrir la ventana de seleccion sin activar nada, como en AutoCAD.
  // El portico ocupa x 0.40..0.60, y 0.40..0.62. Una ventana que lo envuelve
  // entero de izquierda a derecha tiene que cogerlo todo.
  const nVent = await arrastrar(0.30, 0.32, 0.72, 0.72);
  anota("ventana izquierda->derecha (envolviendo el portico)", nVent > 0,
        `${nVent} seleccionados`);
  await foto();
  // Y una captura de derecha a izquierda que solo TOCA una columna.
  const nCap = await arrastrar(0.50, 0.50, 0.35, 0.55);
  anota("captura derecha->izquierda (solo tocando)", nCap > 0,
        `${nCap} seleccionados`);
  await foto();
}

// ── MODIFICAR: el panel de propiedades NO debe tapar el lienzo ni el ribbon.
// El fallo era ese: se abria centrado arriba, tapaba el modelo Y los botones,
// y el clic siguiente caia en el panel en vez de en el lienzo. Parecia que la
// seleccion estaba rota y solo estaba tapada.
{
  const tapa = await pag.evaluate(() => {
    const p = document.getElementById("hk-properties-pane");
    if (!p || p.style.display === "none") return "no visible";
    const q = p.getBoundingClientRect();
    const c = document.querySelector("#viewer canvas").getBoundingClientRect();
    const cx = c.left + c.width / 2, cy = c.top + c.height / 2;
    const sobreCentro = cx > q.left && cx < q.right && cy > q.top && cy < q.bottom;
    const r = document.getElementById("hk-ribbon")?.getBoundingClientRect();
    const sobreRibbon = !!r && !(q.right < r.left || q.left > r.right ||
                                 q.bottom < r.top || q.top > r.bottom);
    return { sobreCentro, sobreRibbon, esquina: [Math.round(q.left), Math.round(q.top)] };
  });
  anota("el panel de propiedades no tapa el centro del lienzo",
        !!tapa && tapa.sobreCentro === false, JSON.stringify(tapa));
  anota("ni tapa el ribbon", !!tapa && tapa.sobreRibbon === false, "");
}

// ── ELIMINAR ────────────────────────────────────────────────────────────────
{
  const cuenta = () => pag.evaluate(() => {
    const v = window.__hekatanDrawingPolylines?.val ?? [];
    return v.reduce((s, p) => s + Math.max(0, p.length - 1), 0);
  });
  const antes = await cuenta();
  await pag.keyboard.press("Escape");
  await new Promise((r) => setTimeout(r, 400));
  anota("el boton Borrar existe", await boton("Borrar"), "");
  // Borrar es hover + clic: hay que pasar por encima para que se resalte.
  const x = cv.x + cv.w * 0.40, y = cv.y + cv.h * 0.51;
  await pag.mouse.move(x, y);
  await new Promise((r) => setTimeout(r, 500));
  await pag.mouse.move(x + 1, y);
  await new Promise((r) => setTimeout(r, 400));
  await pag.mouse.click(x, y);
  await new Promise((r) => setTimeout(r, 900));
  const desp = await cuenta();
  anota("Borrar quita la barra sobre la que se hace clic", desp < antes,
        `${antes} -> ${desp} tramos`);
  await foto();
}

console.log(`\n${errs.length} pageerror`);
if (errs.length) console.log(errs.slice(0, 4));
await nav.close(); srv.close();
const malas = filas.filter((f) => !f.ok).length;
console.log(malas ? `FALLA: ${filas.length - malas}/${filas.length}` : `OK: ${filas.length}/${filas.length}`);
process.exit(malas ? 1 : 0);
