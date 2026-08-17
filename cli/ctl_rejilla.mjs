#!/usr/bin/env node
/**
 * La rejilla estilo Revit: tres campos y un boton tienen que dejar la
 * estructura levantada. Se aprieta el BOTON del panel y se cuenta lo que
 * quedo en el modelo, no lo que dice la barra de estado.
 *
 *   node cli/ctl_rejilla.mjs
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
await new Promise((r) => srv.listen(4708, r));
const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox","--disable-setuid-sandbox","--enable-unsafe-swiftshader",
         "--use-angle=swiftshader","--window-size=1500,1000"] });
const pag = await nav.newPage();
await pag.setViewport({ width: 1500, height: 1000 });
const errs = [];
pag.on("pageerror", (e) => errs.push(e.message));
await pag.goto(`http://localhost:4708${BASE}workspace/?t=new-blank`, { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 8000));

const filas = [];
const anota = (q, ok, det) => { filas.push({ ok });
  console.log(`${ok ? "  ok  " : "FALLA "} ${q}${det ? "   " + det : ""}`); };

// 4 vanos de 6 m en X, 3 de 5 en Y, 4 pisos de 3 → 5x4 ejes, 5 niveles,
// 5*4*4 = 80 tramos de columna.
const r = await pag.evaluate(() =>
  window.__hekatanGenerarRejilla ? window.__hekatanGenerarRejilla("4x6", "3x5", "4x3", true) : null);
anota("la rejilla se genera desde el panel", !!r, JSON.stringify(r));

const m = await pag.evaluate(() => {
  const g = (k) => { const v = window[k]; return v && v.val ? v.val : []; };
  const ejes = window.__hekatanAxisGrids || [];
  const niv = window.__hekatanLevels || [];
  const pts = g("__hekatanDrawingPoints");
  const pls = g("__hekatanDrawingPolylines");
  // `polylines` son INDICES a `points`. Si se guardan coordenadas se dibujan
  // los nudos y ninguna linea, y el test no lo nota si compara con el mismo
  // formato equivocado que escribio.
  const soloIndices = pls.every((p) => p.every((v) => typeof v === "number"));
  const vert = pls.filter((p) => {
    if (p.length !== 2) return false;
    const a = pts[p[0]], b = pts[p[1]];
    if (!a || !b) return false;
    return Math.abs(a[0]-b[0]) < 1e-9 && Math.abs(a[1]-b[1]) < 1e-9 && Math.abs(a[2]-b[2]) > 1e-9;
  });
  // Nudos repetidos: la cabeza de una columna tiene que SER la base de la de
  // arriba, no otro nudo en el mismo sitio.
  const claves = new Set(pts.map((p) => `${p[0]},${p[1]},${p[2]}`));
  return {
    ejes: ejes.length, etiquetas: ejes.map((e) => e.label).join(" "),
    niveles: niv.length, cotas: niv.map((n) => n.z).join(" "),
    columnas: vert.length, soloIndices,
    nudos: pts.length, nudosUnicos: claves.size,
    largoEje: ejes.length ? +Math.hypot(ejes[0].end[0]-ejes[0].start[0],
                                        ejes[0].end[1]-ejes[0].start[1]).toFixed(2) : null,
  };
});
anota("ejes: 5 de letra + 4 de número", m.ejes === 9, `${m.ejes} → ${m.etiquetas}`);
anota("niveles: 0,3,6,9,12", m.niveles === 5, `${m.niveles} → ${m.cotas}`);
anota("las polilineas son INDICES, no coordenadas", m.soloIndices,
      m.soloIndices ? "se dibujan como lineas" : "se dibujarian solo los nudos");
anota("columnas partidas piso a piso (5·4·4)", m.columnas === 80, `${m.columnas} tramos`);
anota("un solo nudo por posicion (5·4·5)", m.nudos === m.nudosUnicos && m.nudos === 100,
      `${m.nudos} nudos, ${m.nudosUnicos} posiciones distintas`);
anota("el eje cruza toda la planta (3 vanos de 5 = 15 m)", Math.abs(m.largoEje - 15) < 1e-6,
      `${m.largoEje} m`);

await pag.evaluate(() => { window.__hekatanAutoFit?.(); });
await new Promise((r) => setTimeout(r, 1200));
const bs = Array.from(["Vista isométrica"]);
for (const t of bs) {
  await pag.evaluate((x) => {
    const b = Array.from(document.querySelectorAll("button.tp-btnv_b"))
      .find((e) => (e.textContent || "").includes(x));
    b && b.click();
  }, t);
  await new Promise((r) => setTimeout(r, 1500));
}
await pag.evaluate(() => { window.__hekatanAutoFit?.(); });
await new Promise((r) => setTimeout(r, 1200));
await pag.screenshot({ path: join(OUT, "ctl_rejilla.png") });
console.log(`\nPNG -> cli/shots/ctl_rejilla.png   (${errs.length} pageerror)`);
if (errs.length) console.log(errs.slice(0, 3));
await nav.close(); srv.close();
const malas = filas.filter((f) => !f.ok).length;
console.log(malas ? `FALLA: ${filas.length - malas}/${filas.length}` : `OK: ${filas.length}/${filas.length}`);
process.exit(malas ? 1 : 0);
