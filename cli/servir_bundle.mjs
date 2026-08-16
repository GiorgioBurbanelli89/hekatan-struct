#!/usr/bin/env node
/**
 * Sirve el bundle YA COMPILADO (website/src/examples) en
 * http://localhost:4699/hekatan-struct-lineal/workspace/
 *
 * Es el mismo que se publica en GitHub Pages, con las rutas absolutas
 * /hekatan-struct-lineal/... por eso hace falta montarlo bajo ese prefijo y no
 * vale un `python -m http.server` a secas.
 */
import { createServer } from "http";
import { readFileSync, existsSync, statSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const RAIZ = join(__dirname, "..", "website", "src", "examples");
const BASE = "/hekatan-struct-lineal/";
const MIME = { ".html":"text/html", ".js":"text/javascript", ".css":"text/css",
  ".wasm":"application/wasm", ".json":"application/json", ".svg":"image/svg+xml",
  ".png":"image/png", ".jpg":"image/jpeg", ".ico":"image/x-icon", ".woff2":"font/woff2" };
createServer((req, res) => {
  let p = decodeURIComponent((req.url || "/").split("?")[0]);
  if (p.startsWith(BASE)) p = p.slice(BASE.length - 1);
  let f = join(RAIZ, p);
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, "index.html");
  if (!existsSync(f)) { res.writeHead(404); return res.end("404 " + p); }
  res.writeHead(200, { "content-type": MIME[extname(f)] || "application/octet-stream" });
  res.end(readFileSync(f));
}).listen(4699, () => console.log(`http://localhost:4699${BASE}workspace/`));
