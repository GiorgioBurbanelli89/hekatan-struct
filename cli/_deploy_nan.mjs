import puppeteer from "puppeteer";
const id = process.argv[2] ?? "estructura-mixta";
const nav = await puppeteer.launch({ headless: "new", args: ["--no-sandbox", "--disable-setuid-sandbox", "--enable-unsafe-swiftshader", "--use-angle=swiftshader"] });
const p = await nav.newPage(); await p.setViewport({ width: 1500, height: 1000 });
await p.goto(`https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=${id}`, { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 10000));
const r = await p.evaluate(() => { const s = window.__hekatanStates; const N = s.nodes.val, E = s.elements.val; const D = s.deformOutputs?.val?.deformations; let nan = 0, n = 0, maxU = 0; const nanNodes = [];
  if (D) for (const [i, u] of D) { n++; if (u.some((v) => !Number.isFinite(v))) { nan++; if (nanNodes.length < 5) nanNodes.push(i); } else maxU = Math.max(maxU, ...u.slice(0, 3).map(Math.abs)); }
  const deg = []; for (let k = 0; k < E.length; k++) { const e = E[k]; if (e.length === 4 && new Set(e).size < 4) deg.push(k); }
  const sinRig = []; const touched = new Set(); for (const e of E) for (const i of e) touched.add(i); for (let i = 0; i < N.length; i++) if (!touched.has(i)) sinRig.push(i);
  return { nudos: N.length, elem: E.length, deform: n, nan, nanNodes, maxU, q4colapsados: deg.length, ejemploColapsado: deg.slice(0, 3), nudosSueltos: sinRig.length, apoyos: s.nodeInputs.val.supports?.size }; });
console.log(JSON.stringify(r)); await nav.close();
