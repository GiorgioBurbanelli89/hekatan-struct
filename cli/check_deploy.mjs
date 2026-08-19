import puppeteer from "puppeteer";
const nav = await puppeteer.launch({ headless: "new",
  args: ["--no-sandbox","--disable-setuid-sandbox","--enable-unsafe-swiftshader","--use-angle=swiftshader"] });
const p = await nav.newPage();
await p.setViewport({ width: 1500, height: 1000 });
const errs = [];
p.on("pageerror", (e) => errs.push(e.message));
await p.goto("https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=new-blank",
             { waitUntil: "networkidle2", timeout: 120000 });
await new Promise(r => setTimeout(r, 9000));
const r = await p.evaluate(() => {
  const rb = document.getElementById("hk-ribbon");
  const t = rb ? rb.textContent : "";
  return {
    ribbon: !!rb,
    apoyo: t.includes("Apoyo"), carga: t.includes("Carga"),
    rejilla: t.includes("Rejilla"), subir: /Subir/.test(t),
    guia: !!document.getElementById("hk-ribbon-guia"),
    lienzoVacio: (window.__hekatanDrawingPoints?.val ?? []).length === 0,
  };
});
console.log(JSON.stringify(r, null, 1));
console.log("pageerror:", errs.length, errs.slice(0,2));
await p.screenshot({ path: "cli/shots/deploy_publico.png" });
await nav.close();
