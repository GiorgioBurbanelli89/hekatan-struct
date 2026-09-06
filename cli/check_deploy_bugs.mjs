// Reproduce en el deploy PUBLICO lo que Jorge vio a mano (6-sep-2026): plantillas con muros sin
// colormap y cuelgue al subir pisos/vanos en modal. Captura pageerror + console.error + PNG.
//   node cli/check_deploy_bugs.mjs id [id ...]
import puppeteer from "puppeteer";
import { mkdirSync } from "node:fs";
const ids = process.argv.slice(2);
mkdirSync("cli/shots/deploy", { recursive: true });
const nav = await puppeteer.launch({ headless: "new", args: ["--no-sandbox", "--disable-setuid-sandbox", "--enable-unsafe-swiftshader", "--use-angle=swiftshader"] });
for (const id of ids) {
  const p = await nav.newPage(); await p.setViewport({ width: 1500, height: 1000 });
  const errs = [], cons = [];
  p.on("pageerror", (e) => errs.push(String(e.message).slice(0, 160)));
  p.on("console", (m) => { if (m.type() === "error" || m.type() === "warning") cons.push(m.type() + ": " + m.text().slice(0, 160)); });
  const t0 = Date.now();
  await p.goto(`https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=${id}`, { waitUntil: "networkidle2", timeout: 120000 });
  await new Promise((r) => setTimeout(r, 7000));
  const info = await p.evaluate(() => {
    const labels = [...document.querySelectorAll(".tp-lblv")].map((e) => e.querySelector(".tp-lblv_l")?.textContent.trim() + " = " + (e.querySelector("input,select")?.value ?? e.querySelector(".tp-lstv_s")?.value ?? ""));
    const folders = [...document.querySelectorAll(".tp-fldv_t")].map((e) => e.textContent.trim());
    return { titulo: document.querySelector(".tp-rotv_t")?.textContent?.trim(), folders, labels: labels.slice(0, 80), canvas: !!document.querySelector("canvas") };
  });
  await p.screenshot({ path: `cli/shots/deploy/${id}.png` });
  console.log(JSON.stringify({ id, ms: Date.now() - t0, pageerror: errs, console: cons.slice(0, 8), ...info }, null, 1));
  await p.close();
}
await nav.close();
