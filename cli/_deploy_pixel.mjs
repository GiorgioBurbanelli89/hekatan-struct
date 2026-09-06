import puppeteer from "puppeteer";
const id = "edificio-dual", campo = process.argv[2] ?? "vonMises";
const nav = await puppeteer.launch({ headless: "new", args: ["--no-sandbox", "--disable-setuid-sandbox", "--enable-unsafe-swiftshader", "--use-angle=swiftshader"] });
const p = await nav.newPage(); await p.setViewport({ width: 1500, height: 1000 });
await p.goto(`https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=${id}`, { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 8000));
const r = await p.evaluate((campo) => {
  const s = window.__hekatanSettings?.(); if (s?.shellResults) s.shellResults.val = campo;
  const ctx = [...document.querySelectorAll("div")].map(d => d.__ctx).find(Boolean); ctx.render?.();
  const N = window.__hekatanStates.nodes.val; let cm = null; ctx.scene.traverse((o) => { if (o.name === "__hekatan_shell_colormap") cm = o; });
  const S = cm.geometry.attributes.scalar, P = cm.geometry.attributes.position; const cam = ctx.camera; const el = cm; const W = innerWidth, H = innerHeight;
  const pick = (f) => { let best = -1, bd = 1e9; for (let i = 0; i < N.length; i++) { const d = f(N[i]); if (d !== null && d < bd) { bd = d; best = i; } } return best; };
  const targets = { muroY0: pick(([x, y, z]) => Math.abs(y) < 1e-6 ? Math.hypot(x - 2.5, z - 12) : null), muroXL: pick(([x, y, z]) => Math.abs(x - 10) < 1e-6 ? Math.hypot(y - 2.5, z - 12) : null), losaTop: pick(([x, y, z]) => Math.hypot(x - 5, y - 5, z - 24)) };
  const out = {}; for (const [k, i] of Object.entries(targets)) { const v = new THREE_Vector3(P.getX(i), P.getY(i), P.getZ(i)); v.project(cam); out[k] = { i, xyz: N[i].map(a => +a.toFixed(2)), scalar: +S.getX(i).toFixed(3), px: [Math.round((v.x + 1) / 2 * W), Math.round((1 - v.y) / 2 * H)] }; }
  function THREE_Vector3(x, y, z) { this.x = x; this.y = y; this.z = z; this.project = function (c) { const m = c.matrixWorldInverse.clone().premultiply(c.projectionMatrix); const e = m.elements; const w = 1 / (e[3] * this.x + e[7] * this.y + e[11] * this.z + e[15]); const X = (e[0] * this.x + e[4] * this.y + e[8] * this.z + e[12]) * w, Y = (e[1] * this.x + e[5] * this.y + e[9] * this.z + e[13]) * w; this.x = X; this.y = Y; return this; }; }
  cam.updateMatrixWorld(); return { W, H, out, dropdown: document.querySelector("#settings select, select")?.value };
}, campo);
await new Promise((r) => setTimeout(r, 1500)); await p.screenshot({ path: "cli/shots/deploy/_pixel.png" });
console.log(JSON.stringify(r)); await nav.close();
