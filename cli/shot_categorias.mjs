#!/usr/bin/env node
/**
 * Foto del desplegable "Categoria" del workspace: se abre el bundle de verdad,
 * se despliega el <select> y se leen sus opciones. Mirar el .ts no sirve: lo
 * que importa es lo que el usuario VE en la lista.
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
await new Promise((r) => srv.listen(4701, r));
const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox","--disable-setuid-sandbox","--enable-unsafe-swiftshader",
         "--use-angle=swiftshader","--window-size=1500,1000"] });
const pag = await nav.newPage();
await pag.setViewport({ width: 1500, height: 1000 });
const errores = [];
pag.on("pageerror", (e) => errores.push(e.message));
await pag.goto(`http://localhost:4701${BASE}workspace/?t=galpon`, { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 7000));

// El <select> de Tweakpane con las categorias: el que tenga las flechas ▸
const cats = await pag.evaluate(() => {
  const sels = Array.from(document.querySelectorAll("select"));
  const s = sels.find((x) => Array.from(x.options).some((o) => o.text.includes("▸")))
         || sels[0];
  return s ? Array.from(s.options).map((o) => o.text) : [];
});
console.log("opciones del desplegable Categoría:", cats.length);
for (const c of cats) console.log("  " + c);
writeFileSync(join(OUT, "categorias.txt"), cats.join("\n"), "utf-8");
await pag.screenshot({ path: join(OUT, "categorias.png") });
console.log("errores JS:", errores.length);
for (const e of errores.slice(0, 5)) console.log("  " + e);
await nav.close(); srv.close();
