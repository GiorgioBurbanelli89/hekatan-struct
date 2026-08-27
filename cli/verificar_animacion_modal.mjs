#!/usr/bin/env node
/**
 * ¿La animación modal mueve TODOS los pisos?
 *
 *   node cli/verificar_animacion_modal.mjs
 *
 * `animateMode` deforma la malla MOSTRADA indexando `shape[i*6]`. Si el modo se
 * calculó con otra malla, los índices que sobran leen `undefined`, el `|| 0` los
 * deja quietos y —como la numeración va por niveles— **solo se mueven los
 * primeros pisos**: una animación mentirosa, no una rota. Esto lo mide: muestrea
 * los nudos durante la animación y saca el desplazamiento máximo por cota.
 * En el modo 1 tiene que crecer con la altura y ser CERO en la base.
 */
import puppeteer from "puppeteer";
import { createServer } from "http";
import { readFileSync, existsSync, statSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = "/hekatan-struct-lineal/";
const raiz = join(__dirname, "..", "website", "src", "examples");
const MIME = { ".html":"text/html",".js":"text/javascript",".css":"text/css",".wasm":"application/wasm",
  ".json":"application/json",".svg":"image/svg+xml",".png":"image/png",".ico":"image/x-icon",".woff2":"font/woff2" };
const srv = createServer((req,res)=>{ let p=decodeURIComponent((req.url||"/").split("?")[0]);
  if(p.startsWith(BASE)) p=p.slice(BASE.length-1); let f=join(raiz,p);
  if(existsSync(f)&&statSync(f).isDirectory()) f=join(f,"index.html");
  if(!existsSync(f)){res.writeHead(404);return res.end("404");}
  res.writeHead(200,{"content-type":MIME[extname(f)]||"application/octet-stream"}); res.end(readFileSync(f)); });
await new Promise(r=>srv.listen(4719,r));
const nav = await puppeteer.launch({ headless:"new", protocolTimeout: 900000,
  args:["--no-sandbox","--disable-setuid-sandbox","--enable-unsafe-swiftshader","--use-angle=swiftshader","--window-size=1500,1000"] });
const pag = await nav.newPage();
await pag.setViewport({ width: 1500, height: 1000 });
const avisos = []; pag.on("console", m => { const t = m.text(); if (/animateMode|Plantillas/.test(t)) avisos.push(t); });
await pag.goto(`http://localhost:4719${BASE}workspace/?t=plantillas`, { waitUntil:"networkidle2", timeout:180000 });
await new Promise(r=>setTimeout(r,10000));
await pag.keyboard.press("Escape");
// elegir la plantilla DUAL
await pag.evaluate(() => {
  for (const s of Array.from(document.querySelectorAll("select"))) {
    const fila = s.closest(".tp-lblv") || s.parentElement?.parentElement;
    if (!fila || !(fila.textContent||"").includes("Plantilla")) continue;
    const op = Array.from(s.options).find(o => o.text.includes("muros (dual)"));
    if (op) { s.value = op.value; s.dispatchEvent(new Event("change", { bubbles: true })); return true; }
  }
});
await new Promise(r=>setTimeout(r,6000));
// bajar la malla de PANTALLA a 0.5 dejando la del modal en 1.25 -> remallado
await pag.evaluate(() => {
  for (const inp of Array.from(document.querySelectorAll("input"))) {
    const fila = inp.closest(".tp-lblv");
    if (!fila || !(fila.textContent||"").includes("malla máx.")) continue;
    inp.value = "0.5"; inp.dispatchEvent(new Event("change", { bubbles: true })); inp.blur(); return true;
  }
  return false;
});
await new Promise(r=>setTimeout(r,9000));
console.log("malla de pantalla bajada a 0.5 m ->", await pag.evaluate(() => window.__hekatanStates?.nodes?.val?.length), "nudos");
// correr modal + animar
const lanzado = await pag.evaluate(() => {
  if (typeof window.__hekatanRunModalAnimate === "function") { window.__hekatanRunModalAnimate(); return "api"; }
  const b = Array.from(document.querySelectorAll("button")).find(x => /Correr modal/i.test(x.textContent||""));
  if (b) { b.click(); return "boton"; }
  return null;
});
console.log("animación lanzada por:", lanzado);
await new Promise(r=>setTimeout(r,9000));
// muestrear la posición de los nudos a lo largo de la animación
const mov = await pag.evaluate(async () => {
  const S = () => window.__hekatanStates?.nodes?.val ?? [];
  const base = S().map(n => [...n]);
  const maxDes = new Array(base.length).fill(0);
  for (let k = 0; k < 40; k++) {
    await new Promise(r => requestAnimationFrame(r));
    const n = S();
    for (let i = 0; i < base.length && i < n.length; i++) {
      const dx = n[i][0]-base[i][0], dy = n[i][1]-base[i][1], dz = n[i][2]-base[i][2];
      const d = Math.hypot(dx, dy, dz);
      if (d > maxDes[i]) maxDes[i] = d;
    }
  }
  // agrupar por cota Z
  const porZ = new Map();
  for (let i = 0; i < base.length; i++) {
    const z = Math.round(base[i][2] * 10) / 10;
    const a = porZ.get(z) ?? { n: 0, max: 0 };
    a.n++; if (maxDes[i] > a.max) a.max = maxDes[i];
    porZ.set(z, a);
  }
  return { nudos: base.length, porZ: [...porZ.entries()].sort((a,b)=>a[0]-b[0]) };
});
console.log("\nmovimiento MÁXIMO por cota (modo 1) — " + mov.nudos + " nudos en pantalla");
for (const [z, a] of mov.porZ)
  console.log("   z = " + String(z).padStart(6) + " m   " + String(a.n).padStart(5) + " nudos   se mueven hasta " + a.max.toFixed(4) + " m");
console.log("\navisos de consola:", avisos.slice(0,3));
mkdirSync(join(__dirname,"shots","anim"), { recursive: true });
for (let i = 0; i < 3; i++) {
  await pag.screenshot({ path: join(__dirname,"shots","anim",`f${i}.png`) });
  await new Promise(r=>setTimeout(r,700));
}
await nav.close(); srv.close();
