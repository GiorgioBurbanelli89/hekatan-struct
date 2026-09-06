// Comprueba en una URL (deploy publico por defecto) que el tooltip del hover atribuye la cara bajo el
// cursor al elemento CORRECTO: el «Punto cursor» tiene que caer dentro de la caja de los nudos que lista
// (6-sep-2026: en el dual decia «Nodo 420» del piso 2 con el cursor en la azotea, porque hacia faceIdx/2
// sobre un array con barras intercaladas).
//   node cli/check_deploy_hover.mjs [id] [url-base] [dump.json de cli/dump_ejemplo.mjs: da las coordenadas de los nudos]
import puppeteer from "puppeteer";
import { mkdirSync, readFileSync } from "node:fs";
const id = process.argv[2] || "test-m-dual";
const base = process.argv[3] || "https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/";
mkdirSync("cli/shots/deploy", { recursive: true });
const nav = await puppeteer.launch({ headless: "new", args: ["--no-sandbox", "--enable-unsafe-swiftshader", "--use-angle=swiftshader"] });
const p = await nav.newPage(); await p.setViewport({ width: 1500, height: 1000 });
await p.goto(`${base}?t=${id}`, { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 8000));
// Deformada tal como abre (escalada): el punto del tooltip tiene que ser el SIN deformar (baricentricas),
// asi que debe caer en la caja del elemento aunque la malla dibujada este desplazada. Con `nodef` en
// argv se apaga (para comparar con el comportamiento viejo).
if (process.argv.includes("nodef")) {
  await p.evaluate(() => { const s = window.__hekatanSettings?.(); if (s?.deformedShape) s.deformedShape.val = false; });
  await new Promise((r) => setTimeout(r, 800));
}
const canvasBox = await p.evaluate(() => { const c = document.querySelector("canvas"); const r = c.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
const dump = process.argv[4] ? JSON.parse(readFileSync(process.argv[4], "utf-8")) : null;
const nodes = dump?.nodes ?? null, elements = dump?.elements ?? null;
let ok = 0, mal = 0, sin = 0; const filas = [];
for (let gy = 0.25; gy <= 0.75; gy += 0.05) for (let gx = 0.3; gx <= 0.7; gx += 0.05) {
  const x = canvasBox.x + gx * canvasBox.w, y = canvasBox.y + gy * canvasBox.h;
  await p.mouse.move(x, y); await new Promise((r) => setTimeout(r, 60));
  const txt = await p.evaluate(() => { const t = document.getElementById("shell-hover-tooltip"); return t && t.style.display !== "none" ? t.innerText : null; });
  if (!txt) { sin++; continue; }
  const mp = txt.match(/Punto cursor: \(([-\d.]+), ([-\d.]+), ([-\d.]+)\)/);
  const mn = txt.match(/nodos: \[([\d, ]+)\]/); const me = txt.match(/Elem #(\d+)/);
  if (!mp || (!mn && !me)) { sin++; continue; }
  const pt = [+mp[1], +mp[2], +mp[3]];
  const ids = mn ? mn[1].split(",").map((s) => +s.trim()) : (elements?.[+me[1]] ?? []);
  const veredicto = { pt, elem: me ? +me[1] : null, ids };
  // «Valor» interpolado vs las esquinas: tiene que estar entre el min y el max de las 4 esquinas
  // (el tooltip solo imprime la esquina mas cercana; se usa como cota blanda).
  const mv = txt.match(/Valor: ([-\d.eE+]+)/); const mc = txt.match(/Esquina (\d): ([-\d.eE+]+)/);
  if (mv && mc) veredicto.valor = { v: +mv[1], esquina: +mc[1], vEsq: +mc[2] };
  if (nodes && ids.length) {
    const ns = ids.map((i) => nodes[i]).filter(Boolean);
    const tol = 0.05;   // el punto sin deformar cae DENTRO del elemento (5 cm de holgura numerica)
    const dentro = [0, 1, 2].every((k) => pt[k] >= Math.min(...ns.map((n) => n[k])) - tol && pt[k] <= Math.max(...ns.map((n) => n[k])) + tol);
    veredicto.dentro = dentro; dentro ? ok++ : mal++;
  }
  filas.push(veredicto);
}
console.log(JSON.stringify({ id, tieneNodos: !!nodes, ok, mal, sinTooltip: sin, muestra: filas.slice(0, 6) }, null, 1));
await p.screenshot({ path: `cli/shots/deploy/hover_${id}.png` });
await nav.close();
process.exit(mal > 0 ? 1 : 0);
