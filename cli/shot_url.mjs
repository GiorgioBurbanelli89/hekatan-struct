#!/usr/bin/env node
/** Captura una URL con puppeteer: node cli/shot_url.mjs <url> <salida.png> [ms de espera] */
import puppeteer from "puppeteer";
const [, , url, salida, esperaArg] = process.argv;
const nav = await puppeteer.launch({ headless: "new", args: ["--no-sandbox", "--disable-setuid-sandbox", "--enable-unsafe-swiftshader", "--use-angle=swiftshader"] });
const pag = await nav.newPage(); await pag.setViewport({ width: 1500, height: 1000 });
const errores = []; pag.on("pageerror", (e) => errores.push(String(e))); pag.on("console", (m) => { if (m.type() === "error") errores.push(m.text()); });
await pag.goto(url, { waitUntil: "networkidle0", timeout: 120000 });
await new Promise((r) => setTimeout(r, Number(esperaArg ?? 6000)));
await pag.screenshot({ path: salida });
console.log(JSON.stringify({ url, salida, errores: errores.slice(0, 5) }));
await nav.close();
