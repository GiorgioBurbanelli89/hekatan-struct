import puppeteer from "puppeteer";
const id = process.argv[2] ?? "edificio-dual", campo = process.argv[3] ?? "vonMises";
const nav = await puppeteer.launch({ headless: "new", args: ["--no-sandbox", "--disable-setuid-sandbox", "--enable-unsafe-swiftshader", "--use-angle=swiftshader"] });
const p = await nav.newPage(); await p.setViewport({ width: 1500, height: 1000 });
await p.goto(`https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=${id}`, { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 8000));
const r = await p.evaluate((campo) => {
  const s = window.__hekatanSettings?.(); if (s?.shellResults) s.shellResults.val = campo;
  const ctx = [...document.querySelectorAll("div")].map(d => d.__ctx).find(Boolean); ctx.render?.();
  const N = window.__hekatanStates.nodes.val; const xL = Math.max(...N.map(n => n[0])), yL = Math.max(...N.map(n => n[1]));
  let cm = null; ctx.scene.traverse((o) => { if (o.name === "__hekatan_shell_colormap") cm = o; });
  const S = cm.geometry.attributes.scalar; const g = { y0: [], yL: [], x0: [], xL: [], losa: [] };
  for (let i = 0; i < Math.min(S.count, N.length); i++) { const [x, y, z] = N[i]; if (z < 0.5) continue; const v = S.getX(i);
    if (Math.abs(y) < 1e-6) g.y0.push(v); else if (Math.abs(y - yL) < 1e-6) g.yL.push(v); else if (Math.abs(x) < 1e-6) g.x0.push(v); else if (Math.abs(x - xL) < 1e-6) g.xL.push(v); else g.losa.push(v); }
  const hist = (a) => { const h = [0, 0, 0, 0, 0, 0]; for (const v of a) { if (v < 0) h[5]++; else h[Math.min(4, Math.floor(v * 5))]++; } return { n: a.length, "0-.2": h[0], ".2-.4": h[1], ".4-.6": h[2], ".6-.8": h[3], ".8-1": h[4], nan: h[5] }; };
  return { verts: S.count, nudos: N.length, y0: hist(g.y0), yL: hist(g.yL), x0: hist(g.x0), xL: hist(g.xL), losa: hist(g.losa) };
}, campo);
console.log(JSON.stringify(r)); await nav.close();
