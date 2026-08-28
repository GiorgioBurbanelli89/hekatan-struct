#!/usr/bin/env node
/**
 * Foto del GALPON cargado en el workspace del servidor de desarrollo.
 *
 *   node cli/shot_galpon_dev.mjs [url] [salida.png]
 *
 * Mirar el HTML no dice si el modelo se DIBUJO: eso solo se ve en el PNG.
 */
import puppeteer from "puppeteer";
import { mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const URL = process.argv[2] || "http://localhost:4600/workspace/index.html?heks=/galpon_bodega.heks";
const OUT = process.argv[3] || join(__dirname, "shots", "galpon_dev.png");
mkdirSync(dirname(OUT), { recursive: true });
const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--enable-unsafe-swiftshader",
         "--use-angle=swiftshader", "--window-size=1600,1000"] });
const p = await nav.newPage();
await p.setViewport({ width: 1600, height: 1000 });
const errores = [];
p.on("pageerror", (e) => errores.push("pageerror: " + e.message));
p.on("console", (m) => { if (m.type() === "error") errores.push("console: " + m.text()); });
await p.goto(URL, { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 12000));
const info = await p.evaluate(() => {
  const c = document.querySelector("canvas");
  const velo = [...document.querySelectorAll("div")].find(d => /Cargando modelo/.test(d.textContent || ""));
  return { canvas: !!c, w: c?.width, h: c?.height, velo: !!velo,
           titulo: document.title, texto: (document.body.innerText || "").slice(0, 400) };
});
writeFileSync(OUT, await p.screenshot({ fullPage: false }));
console.log(JSON.stringify(info, null, 1));
console.log("errores:", errores.slice(0, 8));
console.log("PNG ->", OUT);
await nav.close();
