import { readFileSync } from "node:fs";
import { empaquetar, R } from "../tests/lib/bundle.mjs";
const [, , fich, dumpJson] = process.argv;
const mod = await empaquetar(`export { parseE2k } from "${R}/examples/src/shared/e2kParser"; export { parseS2k } from "${R}/examples/src/shared/s2kParser";`, "diff-parse");
const m = /\.s2k$/i.test(fich) ? mod.parseS2k(readFileSync(fich, "utf-8")) : mod.parseE2k(readFileSync(fich, "utf-8"));
const H = JSON.parse(readFileSync(dumpJson, "utf-8"));
const ei = m.elementInputs, eh = H.elementInputs;
const keys = new Set([...Object.keys(eh), ...Object.keys(ei)]);
const norm = (o) => o instanceof Map ? o : (o && typeof o === "object" ? new Map(Object.entries(o).map(([k, v]) => [+k, v])) : new Map());
for (const k of [...keys].sort()) {
  const a = norm(eh[k]), b = norm(ei[k]);
  if (!a.size && !b.size) continue;
  const ej = [...a.keys()].slice(0, 1).map(i => `${JSON.stringify(a.get(i))} vs ${JSON.stringify(b.get(i))}`)[0] ?? "";
  // valores distintos
  let dif = 0; for (const [i, v] of a) { const w = b.get(i); if (JSON.stringify(v) !== JSON.stringify(w)) dif++; }
  console.log(k.padEnd(22), "heks", String(a.size).padStart(5), "parse", String(b.size).padStart(5), "distintos", String(dif).padStart(5), " ej:", ej.slice(0, 90));
}
// nudos: mismas coordenadas?
let dn = 0; for (let i = 0; i < H.nodes.length; i++) { const p = m.nodes[i]; if (!p || Math.hypot(p[0]-H.nodes[i][0], p[1]-H.nodes[i][1], p[2]-H.nodes[i][2]) > 1e-6) dn++; }
console.log("nudos con otra coordenada:", dn, "| supports", Object.keys(H.nodeInputs.supports).length, "vs", m.nodeInputs.supports?.size);
