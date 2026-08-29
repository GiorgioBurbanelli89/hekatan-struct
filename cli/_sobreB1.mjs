import { readFileSync } from "node:fs";
import { empaquetar, R } from "../tests/lib/bundle.mjs";
const mod = await empaquetar(`
const g=globalThis; g.window=g;
g.document={createElement:()=>({style:{},getContext:()=>null}),body:{},head:{},querySelector:()=>null,querySelectorAll:()=>[],addEventListener(){},getElementById:()=>null};
g.localStorage={getItem:()=>null,setItem(){},removeItem(){}}; g.addEventListener=()=>{}; g.matchMedia=()=>({matches:false,addEventListener(){}});
const { parseE2k } = await import("${R}/examples/src/shared/e2kParser");
const { coserModelo } = await import("${R}/examples/src/shared/e2kCoser");
export function mirar(t, nombres) {
  const m = parseE2k(t); coserModelo(m);
  const N = m.nodes;
  const out = [];
  for (const nom of nombres) {
    const i = (m.elementNames??[]).findIndex(x => x === nom);
    if (i < 0) { out.push({ nom, err: "no esta" }); continue; }
    const el = m.elements[i];
    const a = N[el[0]], b = N[el[1]];
    const d = [b[0]-a[0], b[1]-a[1], b[2]-a[2]];
    const L2 = d[0]**2+d[1]**2+d[2]**2;
    const cerca = [];
    for (let k=0;k<N.length;k++){
      if (k===el[0]||k===el[1]) continue;
      const p=N[k], w=[p[0]-a[0],p[1]-a[1],p[2]-a[2]];
      const s=(w[0]*d[0]+w[1]*d[1]+w[2]*d[2])/L2;
      if (s<=1e-6||s>=1-1e-6) continue;
      const q=[a[0]+s*d[0],a[1]+s*d[1],a[2]+s*d[2]];
      const dist=Math.hypot(p[0]-q[0],p[1]-q[1],p[2]-q[2]);
      if (dist<0.60) cerca.push({ nombre:m.nodeNames?.[k], dist:+dist.toFixed(4), s:+s.toFixed(3),
                                  p:p.map(v=>+v.toFixed(3)) });
    }
    cerca.sort((x,y)=>x.dist-y.dist);
    out.push({ nom, L:+Math.sqrt(L2).toFixed(2), a:a.map(v=>+v.toFixed(2)), b:b.map(v=>+v.toFixed(2)),
               nCerca:cerca.length, cerca:cerca.slice(0,10) });
  }
  return out;
}`,"sobreB1");
const r = mod.mirar(readFileSync(process.argv[2],"utf-8"), ["B1","B4","B364"]);
for (const x of r) {
  console.log("\n== " + x.nom + " ==");
  if (x.err) { console.log("  " + x.err); continue; }
  console.log("  L=" + x.L + " m  de (" + x.a + ") a (" + x.b + ")");
  console.log("  nudos a menos de 60 cm de su eje: " + x.nCerca);
  for (const c of x.cerca) console.log("    " + String(c.nombre).padEnd(16) + " d=" + c.dist + " m  t=" + c.s + "  " + c.p);
}
