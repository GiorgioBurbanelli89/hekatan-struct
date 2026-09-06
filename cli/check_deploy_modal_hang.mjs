// Reproduce el cuelgue que vio Jorge (6-sep-2026): con el modal corriendo, subir pisos o vanos.
//   node cli/check_deploy_modal_hang.mjs [id] [modal=1|0]
import puppeteer from "puppeteer";
const id = process.argv[2] ?? "edificio-aporticado"; const conModal = (process.argv[3] ?? "1") === "1";
const nav = await puppeteer.launch({ headless: "new", args: ["--no-sandbox", "--disable-setuid-sandbox", "--enable-unsafe-swiftshader", "--use-angle=swiftshader"] });
const p = await nav.newPage(); await p.setViewport({ width: 1500, height: 1000 });
const errs = []; p.on("pageerror", (e) => errs.push(String(e.message).slice(0, 200)));
p.on("console", (m) => { if (m.type() === "error") errs.push("console: " + m.text().slice(0, 200)); }); p.on("requestfailed", (r) => errs.push("reqfail: " + r.url().slice(0, 120)));
await p.goto(`https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=${id}`, { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 8000));
const ping = async (ms = 60000) => { const t0 = Date.now(); const ok = await Promise.race([p.evaluate(() => 1).then(() => true), new Promise((r) => setTimeout(() => r(false), ms))]); return { ok, ms: Date.now() - t0 }; };
const clickTexto = async (txt) => p.evaluate((txt) => { const b = [...document.querySelectorAll("button, .tp-btnv_b")].find((e) => e.textContent.includes(txt)); if (b) { b.click(); return true; } return false; }, txt);
const setNum = async (label, val) => p.evaluate((label, val) => {
  const row = [...document.querySelectorAll(".tp-lblv")].find((e) => e.querySelector(".tp-lblv_l")?.textContent.trim() === label);
  if (!row) return "no encontrado: " + label;
  const inp = row.querySelector("input.tp-txtv_i, input"); if (!inp) return "sin input";
  inp.value = String(val); inp.dispatchEvent(new Event("change", { bubbles: true })); return "ok";
}, label, val);
const log = (o) => console.log(JSON.stringify(o));
if (conModal) { log({ paso: "correr modal", click: await clickTexto("Correr modal"), ...(await ping()) }); await new Promise((r) => setTimeout(r, 4000)); log({ paso: "modal corriendo", ...(await ping()), errs: errs.length }); }
for (const [label, val] of [["N. Pisos", 5], ["N. Pisos", 8], ["Vanos X", 4], ["Vanos X", 6]]) {
  const r = await setNum(label, val); const t0 = Date.now(); const pg = await ping(90000);
  await new Promise((r) => setTimeout(r, 1500));
  log({ paso: `${label} = ${val}`, set: r, respondio: pg.ok, ms: Date.now() - t0, errs: errs.slice(-2) });
  if (!pg.ok) break;
}
await p.screenshot({ path: `cli/shots/deploy/_hang_${id}_${conModal ? "modal" : "sinmodal"}.png` }).catch(() => {});
log({ fin: true, pageerrors: errs.length, ultimos: errs.slice(-3) });
await nav.close();
