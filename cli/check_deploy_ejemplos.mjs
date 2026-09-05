// Abre varios ejemplos del deploy PUBLICO, cuenta pageerror, comprueba que el visor y el panel
// existen y saca un PNG de cada uno (cli/shots/deploy/<id>.png). Hay que MIRAR los PNG.
//   node cli/check_deploy_ejemplos.mjs [id ...]
import puppeteer from "puppeteer";
import { mkdirSync } from "node:fs";
const ids = process.argv.slice(2).length ? process.argv.slice(2)
  : ["plantillas", "edificio-aporticado", "mezanine", "galpon", "zapata-aislada", "cli-modeler"];
mkdirSync("cli/shots/deploy", { recursive: true });
const nav = await puppeteer.launch({ headless: "new", args: ["--no-sandbox", "--disable-setuid-sandbox", "--enable-unsafe-swiftshader", "--use-angle=swiftshader"] });
const res = [];
for (const id of ids) {
  const p = await nav.newPage(); await p.setViewport({ width: 1500, height: 1000 });
  const errs = []; p.on("pageerror", (e) => errs.push(String(e.message).slice(0, 100)));
  const t0 = Date.now();
  try {
    await p.goto(`https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=${id}`, { waitUntil: "networkidle2", timeout: 120000 });
    await new Promise((r) => setTimeout(r, 9000));
    const info = await p.evaluate(() => {
      const labels = [...document.querySelectorAll(".tp-lblv_l")].map((e) => e.textContent.trim());
      const canvas = document.querySelector("canvas");
      const webgl = !document.body.innerText.includes("no pudo crear un contexto WebGL");
      const titulo = document.querySelector(".tp-rotv_t")?.textContent?.trim();
      return { titulo, nLabels: labels.length, comparar: labels.some((l) => l.startsWith("Comparar con")), canvas: !!canvas, webgl,
               texto: document.body.innerText.slice(0, 0) };
    });
    await p.screenshot({ path: `cli/shots/deploy/${id}.png` });
    res.push({ id, ok: errs.length === 0 && info.canvas, ms: Date.now() - t0, pageerror: errs.length, ...info, errs: errs.slice(0, 2) });
  } catch (e) { res.push({ id, ok: false, error: String(e).slice(0, 120) }); }
  await p.close();
}
await nav.close();
for (const r of res) console.log(JSON.stringify(r));
