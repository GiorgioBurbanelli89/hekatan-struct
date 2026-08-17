#!/usr/bin/env node
/** Que APIs de dibujo expone de verdad el workspace, y cual responde. */
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
await new Promise((r) => srv.listen(4704, r));
const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox","--disable-setuid-sandbox","--enable-unsafe-swiftshader","--use-angle=swiftshader"] });
const pag = await nav.newPage();
await pag.setViewport({ width: 1500, height: 1000 });
const errs = [];
pag.on("pageerror", (e) => errs.push(e.message));
await pag.goto(`http://localhost:4704${BASE}workspace/?t=new-blank`, { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 8000));

console.log("globals __hekatan*:");
console.log(await pag.evaluate(() => Object.keys(window).filter((k) => k.startsWith("__hekatan")).sort()));

// Dibujar por la via mas directa que exista, y ver si sube al guion.
const r = await pag.evaluate(() => {
  const out = { typeCoord: [], drawAt: null, antes: 0, despues: 0, script: "" };
  const st = window.__hekatanCadState;
  st?.setTool?.("line");
  out.antes = (window.__hekatanCliScript || "").length;
  for (const c of ["0,0,0", "6,0,0", "6,4,0", "0,4,0"]) {
    let v = null;
    try { v = window.__hekatanTypeCoord ? window.__hekatanTypeCoord(c) : "no existe"; } catch (e) { v = "throw: " + e.message; }
    out.typeCoord.push(`${c} -> ${v}`);
  }
  try { window.__hekatanDrawAt?.(9, 9, 0); out.drawAt = "llamado"; } catch (e) { out.drawAt = "throw: " + e.message; }
  const s = window.__hekatanCadState?.get?.();
  const tam = (v) => Array.isArray(v) ? v.length : (v && v.size !== undefined ? v.size : typeof v);
  out.estado = s ? { tool: s.tool, plano: s.workPlane,
                     pendientes: tam(s.pendingNodes), nextNodeId: s.nextNodeId,
                     nextLineId: s.nextLineId,
                     modelo: s.model ? Object.fromEntries(
                       Object.keys(s.model).map((k) => [k, tam(s.model[k])])) : null,
                     claves: Object.keys(s) } : null;
  // Nodos y barras con sus coordenadas, para ver si cayeron donde se pidio.
  try {
    const m = s && s.model;
    const arr = (v) => Array.isArray(v) ? v : (v && v.values ? Array.from(v.values()) : []);
    out.nodos = arr(m && (m.nodes || m.nodos)).slice(0, 8);
    out.barras = arr(m && (m.lines || m.frames || m.lineas)).slice(0, 8);
  } catch (e) { out.nodos = "throw: " + e.message; }
  out.despues = (window.__hekatanCliScript || "").length;
  out.script = (window.__hekatanCliScript || "").slice(0, 400);
  return out;
});
console.log("\n", JSON.stringify(r, null, 2));

// ── Clics CRUDOS sobre el lienzo, sin proyectar nada ────────────────────────
// Si con esto el modelo crece, lo roto es solo la entrada por coordenadas.
const cv = await pag.evaluate(() => {
  const c = document.querySelector("#viewer canvas");
  if (!c) return null;
  const r = c.getBoundingClientRect();
  return { x: r.left, y: r.top, w: r.width, h: r.height };
});
console.log("\ncanvas:", cv);
if (cv) {
  for (const [dx, dy] of [[0.35,0.40],[0.55,0.40],[0.55,0.60],[0.35,0.60]]) {
    await pag.mouse.move(cv.x + cv.w*dx, cv.y + cv.h*dy);
    await new Promise((r) => setTimeout(r, 200));
    await pag.mouse.click(cv.x + cv.w*dx, cv.y + cv.h*dy);
    await new Promise((r) => setTimeout(r, 500));
  }
}
const r2 = await pag.evaluate(() => {
  const s = window.__hekatanCadState?.get?.();
  const m = s && s.model;
  const arr = (v) => !v ? [] : (Array.isArray(v) ? v : (v.values ? Array.from(v.values()) : []));
  const n = arr(m && m.nodes), l = arr(m && m.lines);
  return { nodes: n.length, lines: l.length, nextNodeId: s ? s.nextNodeId : null,
           coords: n.slice(0, 6), barras: l.slice(0, 4) };
});
console.log("tras 4 clics crudos:", JSON.stringify(r2));
console.log("\npageerror:", errs.length, errs.slice(0, 3));
await nav.close(); srv.close();
