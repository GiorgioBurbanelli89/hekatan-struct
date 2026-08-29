#!/usr/bin/env node
/**
 * LA CUBIERTA del modelo importado, aislada, en Hekatan Struct Lineal.
 *
 *   node cli/shot_cubierta.mjs [cotaDesde]
 *
 * Se abre el ejemplo, se pone el corte Z del visor por debajo de la cubierta y
 * se mira de frente y en planta. El resto del edificio estorba: la cubierta es
 * lo que hay que ver.
 *
 * Sale en `cli/shots/cubierta/`. HAY QUE MIRAR LOS PNG — un modelo mal unido no
 * se distingue de uno bien unido en ningun numero, y esto va justo de eso.
 */
import puppeteer from "puppeteer";
import { readFileSync, existsSync, statSync, mkdirSync } from "node:fs";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join, extname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots", "cubierta");
mkdirSync(OUT, { recursive: true });
const BASE = "/hekatan-struct-lineal/";
const raiz = join(__dirname, "..", "website", "src", "examples");
const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
               ".json": "application/json", ".wasm": "application/wasm",
               ".png": "image/png", ".svg": "image/svg+xml" };

const srv = createServer((q, r) => {
  let p = decodeURIComponent((q.url || "/").split("?")[0]);
  if (p.startsWith(BASE)) p = p.slice(BASE.length - 1);
  let f = join(raiz, p);
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, "index.html");
  if (!existsSync(f)) { r.writeHead(404); return r.end("404"); }
  r.writeHead(200, { "content-type": MIME[extname(f)] || "application/octet-stream" });
  r.end(readFileSync(f));
});
const PUERTO = +(process.env.PUERTO || 4720);
await new Promise((r) => srv.listen(PUERTO, r));

const DESDE = process.argv[2] !== undefined ? +process.argv[2] : 10.5;

const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox",
         "--enable-unsafe-swiftshader", "--use-angle=swiftshader"] });
const pag = await nav.newPage();
await pag.setViewport({ width: 1600, height: 1000 });
const errs = [];
pag.on("pageerror", (e) => errs.push(e.message));

await pag.goto(`http://localhost:${PUERTO}${BASE}workspace/?t=estructura-mixta`,
               { waitUntil: "networkidle2", timeout: 180000 });
await new Promise((r) => setTimeout(r, 12000));

// El corte: dejar SOLO lo que esta por encima de `DESDE`.
const datos = await pag.evaluate((z) => {
  const w = window;
  const c = w.__hekatanClip;
  if (c) { c.enableZ = true; c.posZ = z; c.invertZ = true; w.__hekatanClipApply?.(); }
  const s = w.__hekatanSettings?.();
  if (s) {
    if (s.nodes) s.nodes.val = true;
    if (s.elements) s.elements.val = true;
    if (s.supports) s.supports.val = true;
    if (s.loads) s.loads.val = false;
    if (s.nodesIndexes) s.nodesIndexes.val = false;
  }
  // .Que hay ahi arriba? Las cotas y cuantos nudos por cota.
  const st = w.__hekatanStates;
  const N = st?.nodes?.val ?? [];
  const E = st?.elements?.val ?? [];
  const porZ = new Map();
  N.forEach((n, i) => { if (n[2] >= z) porZ.set(n[2].toFixed(3), (porZ.get(n[2].toFixed(3)) || 0) + 1); });
  // Las barras que CRUZAN la cota: son las que unen la cubierta con lo de abajo.
  let cruzan = 0, arriba = 0;
  for (const el of E) {
    if (el.length !== 2) continue;
    const a = N[el[0]], b = N[el[1]];
    if (!a || !b) continue;
    const A = a[2] >= z, B = b[2] >= z;
    if (A && B) arriba++;
    else if (A !== B) cruzan++;
  }
  return { cotas: [...porZ].sort((x, y) => +x[0] - +y[0]), arriba, cruzan };
}, DESDE);

await new Promise((r) => setTimeout(r, 2500));

/**
 * Encuadra la camara sobre lo que hay POR ENCIMA de la cota.
 *
 * `autoFitCamera` del workspace encuadra el modelo ENTERO, y entonces la
 * cubierta sale del tamano de un sello. Aqui se calcula la caja de lo que
 * queda arriba y se pone la camara a la distancia que la llena.
 */
async function encuadrar(z, dir) {
  await pag.evaluate((z, dir) => {
    const st = window.__hekatanStates;
    const N = (st?.nodes?.val ?? []).filter((n) => n[2] >= z);
    if (!N.length) return;
    const mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity];
    for (const n of N) for (let i = 0; i < 3; i++) {
      if (n[i] < mn[i]) mn[i] = n[i];
      if (n[i] > mx[i]) mx[i] = n[i];
    }
    const c = [(mn[0]+mx[0])/2, (mn[1]+mx[1])/2, (mn[2]+mx[2])/2];
    const d = Math.max(mx[0]-mn[0], mx[1]-mn[1], mx[2]-mn[2]) || 1;
    const v = document.querySelector("#viewer") ||
              [...document.querySelectorAll("div")].find((x) => x.__ctx);
    const ctx = v && v.__ctx;
    if (!ctx) return;
    const cam = ctx.camera;
    // 1.2 x el tamano: entra entero y sin margen de sobra.
    const L = d * 1.2;
    if (dir === "alzado") cam.position.set(c[0], c[1] - L, c[2] + d * 0.12);
    else if (dir === "planta") cam.position.set(c[0], c[1], c[2] + L);
    else cam.position.set(c[0] + L * 0.7, c[1] - L * 0.7, c[2] + L * 0.5);
    cam.up.set(0, 0, 1);
    cam.lookAt(c[0], c[1], c[2]);
    if (cam.isOrthographicCamera) { cam.zoom = 1; cam.updateProjectionMatrix(); }
    ctx.controls?.target?.set(c[0], c[1], c[2]);
    ctx.controls?.update?.();
    ctx.render();
  }, z, dir);
  await new Promise((r) => setTimeout(r, 1800));
}

async function vista(nombre, fn) {
  await pag.evaluate(fn);
  await new Promise((r) => setTimeout(r, 2000));
  await pag.screenshot({ path: join(OUT, nombre + ".png") });
}

// Alzado (mirando en -Y) y planta (desde arriba).
for (const [nombre, dir] of [["cubierta_alzado", "alzado"],
                             ["cubierta_planta", "planta"],
                             ["cubierta_iso", "iso"]]) {
  await encuadrar(DESDE, dir);
  await pag.screenshot({ path: join(OUT, nombre + ".png") });
}

console.log(`── la cubierta, por encima de z = ${DESDE} m ──`);
console.log(`  barras enteramente arriba .. ${datos.arriba}`);
console.log(`  barras que CRUZAN la cota .. ${datos.cruzan}   <- las que la unen con lo de abajo`);
console.log(`  cotas y nudos:`);
for (const [z, n] of datos.cotas) console.log(`    z = ${z}  ->  ${n} nudos`);
console.log(`\n  pageerror: ${errs.length}`);
console.log(`  -> ${OUT}   <- MIRAR los PNG`);
await nav.close(); srv.close();
