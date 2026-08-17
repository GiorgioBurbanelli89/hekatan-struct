#!/usr/bin/env node
/**
 * Quien pinta el cian que tapa el modelo — por ELIMINACION, no por teoria.
 *
 * Se oculta un objeto de la escena a la vez y se vuelve a mirar el color del
 * lienzo. El que al ocultarse quita el cian es el culpable.
 *
 * ⚠️ El color se lee del SCREENSHOT, no del canvas. El canvas es WebGL sin
 * `preserveDrawingBuffer`: un `drawImage` sobre el devuelve el buffer ya
 * limpiado — daba (26,27,34), el color de fondo, con la pantalla llena de
 * cian. Medir mal es peor que no medir: dijo "no hay cian" y lo habia.
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
await new Promise((r) => srv.listen(4707, r));
const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox","--disable-setuid-sandbox","--enable-unsafe-swiftshader","--use-angle=swiftshader"] });
const pag = await nav.newPage();
await pag.setViewport({ width: 1500, height: 1000 });
await pag.goto(`http://localhost:4707${BASE}workspace/?t=new-blank`, { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 8000));

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
  await new Promise((r) => setTimeout(r, 180));
  await pag.mouse.click(cv.x + cv.w*dx, cv.y + cv.h*dy);
  await new Promise((r) => setTimeout(r, 380));
}
await boton("Vista isométrica");
await new Promise((r) => setTimeout(r, 1800));

/** Color medio de un recorte del lienzo, leido del screenshot compuesto. */
const color = async () => {
  const clip = { x: Math.round(cv.x + cv.w * 0.10), y: Math.round(cv.y + cv.h * 0.30),
                 width: 160, height: 160 };
  const b64 = await pag.screenshot({ encoding: "base64", clip });
  return pag.evaluate((s) => new Promise((res) => {
    const im = new Image();
    im.onload = () => {
      const c = document.createElement("canvas");
      c.width = im.width; c.height = im.height;
      const g = c.getContext("2d"); g.drawImage(im, 0, 0);
      const d = g.getImageData(0, 0, im.width, im.height).data;
      let r = 0, v = 0, a = 0, n = 0;
      for (let i = 0; i < d.length; i += 4) { r += d[i]; v += d[i+1]; a += d[i+2]; n++; }
      res([Math.round(r/n), Math.round(v/n), Math.round(a/n)]);
    };
    im.src = "data:image/png;base64," + s;
  }), b64);
};
const esCian = (p) => p[2] > 90 && p[1] > 80 && p[0] < p[2] - 25;

const base = await color();
console.log("color del lienzo:", base, esCian(base) ? "→ CIAN" : "→ no es cian");
if (!esCian(base)) { await nav.close(); srv.close(); process.exit(0); }

// Candidatos, del mas grande al mas chico: el que tapa la pantalla es grande.
const cand = await pag.evaluate(() => {
  const ctx = document.querySelector("#viewer").__ctx;
  const l = [];
  ctx.scene.traverse((o) => {
    if (!o.visible || !o.geometry) return;
    let d = 0;
    try { o.geometry.computeBoundingBox(); const b = o.geometry.boundingBox;
      d = Math.hypot(b.max.x-b.min.x, b.max.y-b.min.y, b.max.z-b.min.z); } catch {}
    l.push({ id: o.id, nombre: o.name || "(sin nombre)", tipo: o.type, diag: +d.toFixed(1) });
  });
  l.sort((a, b) => b.diag - a.diag);
  window.__cand = l;
  return l.slice(0, 40);
});
console.log(`${cand.length} candidatos, del mas grande al mas chico\n`);

for (const c of cand) {
  await pag.evaluate((id) => {
    const ctx = document.querySelector("#viewer").__ctx;
    ctx.scene.traverse((o) => { if (o.id === id) o.visible = false; });
    ctx.render && ctx.render();
  }, c.id);
  const p = await color();
  if (!esCian(p)) {
    const det = await pag.evaluate((id) => {
      const ctx = document.querySelector("#viewer").__ctx;
      let r = null;
      ctx.scene.traverse((o) => {
        if (o.id !== id) return;
        const m = Array.isArray(o.material) ? o.material[0] : o.material;
        r = { nombre: o.name || "(sin nombre)", tipo: o.type,
              color: m && m.color ? "#" + m.color.getHexString() : null,
              opacidad: m ? m.opacity : null, lado: m ? m.side : null,
              padre: o.parent ? (o.parent.name || o.parent.type) : null,
              pos: o.position ? [o.position.x, o.position.y, o.position.z].map((n) => +n.toFixed(2)) : null };
      });
      return r;
    }, c.id);
    console.log("CULPABLE:", JSON.stringify({ ...c, ...det, colorSinEl: p }, null, 1));
    break;
  }
  // No era: se vuelve a encender y se sigue.
  await pag.evaluate((id) => {
    const ctx = document.querySelector("#viewer").__ctx;
    ctx.scene.traverse((o) => { if (o.id === id) o.visible = true; });
  }, c.id);
}
await nav.close(); srv.close();
