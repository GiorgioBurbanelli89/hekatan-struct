#!/usr/bin/env node
/**
 * Quien es el plano cian que tapa el modelo.
 *
 * Se enumera la escena de Three.js con el TAMANO real de cada objeto (bounding
 * box en el mundo) y su color/opacidad. Adivinar cual era costo dos builds:
 * se apago el candidato, se reconstruyo, y el plano seguia ahi.
 */
import puppeteer from "puppeteer";
import { readFileSync, existsSync, statSync } from "fs";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
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
await new Promise((r) => srv.listen(4706, r));
const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox","--disable-setuid-sandbox","--enable-unsafe-swiftshader","--use-angle=swiftshader"] });
const pag = await nav.newPage();
await pag.setViewport({ width: 1500, height: 1000 });
await pag.goto(`http://localhost:4706${BASE}workspace/?t=new-blank`, { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 8000));

// Dibujar algo para que aparezcan los planos que salen "durante el rubber band"
const boton = (t) => pag.evaluate((x) => {
  const b = Array.from(document.querySelectorAll("button.tp-btnv_b"))
    .find((e) => (e.textContent || "").includes(x));
  if (!b || !b.getBoundingClientRect().width) return false;
  b.click(); return true;
}, t);
await boton("Plano XY (planta)");
await new Promise((r) => setTimeout(r, 1500));
await boton("Línea (frame)");
const cv = await pag.evaluate(() => {
  const c = document.querySelector("#viewer canvas"); const r = c.getBoundingClientRect();
  return { x: r.left, y: r.top, w: r.width, h: r.height };
});
for (const [dx, dy] of [[0.35,0.40],[0.55,0.40],[0.55,0.60]]) {
  await pag.mouse.move(cv.x + cv.w*dx, cv.y + cv.h*dy);
  await new Promise((r) => setTimeout(r, 200));
  await pag.mouse.click(cv.x + cv.w*dx, cv.y + cv.h*dy);
  await new Promise((r) => setTimeout(r, 400));
}
await boton("Vista isométrica");
await new Promise((r) => setTimeout(r, 1500));

const objs = await pag.evaluate(() => {
  const v = document.querySelector("#viewer");
  const ctx = v && v.__ctx;
  if (!ctx) return { error: "sin __ctx" };
  const out = [];
  const THREE = ctx.THREE || (window).THREE;
  ctx.scene.traverse((o) => {
    if (!o.visible) return;
    const m = o.material;
    if (!m && !o.geometry) return;
    let tam = null;
    try {
      if (o.geometry) {
        o.geometry.computeBoundingBox();
        const b = o.geometry.boundingBox;
        if (b) {
          const s = o.getWorldScale ? o.getWorldScale({ x:1,y:1,z:1 }) : { x:1,y:1,z:1 };
          tam = [ (b.max.x-b.min.x) * (s.x||1),
                  (b.max.y-b.min.y) * (s.y||1),
                  (b.max.z-b.min.z) * (s.z||1) ].map((n) => +n.toFixed(1));
        }
      }
    } catch {}
    const mm = Array.isArray(m) ? m[0] : m;
    out.push({
      nombre: o.name || "(sin nombre)",
      tipo: o.type,
      tam,
      diag: tam ? +Math.hypot(...tam).toFixed(1) : null,
      color: mm && mm.color ? "#" + mm.color.getHexString() : null,
      opacidad: mm ? mm.opacity : null,
      transparente: mm ? !!mm.transparent : null,
    });
  });
  // Detalle de los objetos CIAN: el que tapa es una rejilla densa que de lejos
  // se ve como un plano solido.
  const cian = [];
  ctx.scene.traverse((o) => {
    const mm = Array.isArray(o.material) ? o.material[0] : o.material;
    if (!mm || !mm.color) return;
    const hex = mm.color.getHexString();
    if (!/22d3ee|00ffff|06b6d4|67e8f9/i.test(hex)) return;
    const g = o.geometry;
    const pos = g && g.attributes && g.attributes.position;
    let ext = null;
    if (pos) {
      const a = pos.array; let mn = [1e9,1e9,1e9], mx = [-1e9,-1e9,-1e9];
      for (let i = 0; i < a.length; i += 3)
        for (let k = 0; k < 3; k++) { if (a[i+k] < mn[k]) mn[k] = a[i+k]; if (a[i+k] > mx[k]) mx[k] = a[i+k]; }
      ext = mn.map((v, k) => +(mx[k] - v).toFixed(1));
    }
    cian.push({ tipo: o.type, visible: o.visible, hex,
      vertices: pos ? pos.count : 0, extension: ext,
      opacidad: mm.opacity, padre: o.parent && o.parent.name });
  });
  window.__cian = cian;

  // Los mas GRANDES primero: el que tapa la pantalla es el mayor.
  return out.filter((o) => o.diag !== null).sort((a, b) => b.diag - a.diag).slice(0, 14);
});
const cian = await pag.evaluate(() => window.__cian);
console.log("== objetos CIAN ==");
console.log(JSON.stringify(cian, null, 1));
await nav.close(); srv.close();
