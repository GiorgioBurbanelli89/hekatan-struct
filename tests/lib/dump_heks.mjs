// Uso: node tests/lib/dump_heks.mjs modelo.heks salida.json
// Vuelca un .heks resuelto a JSON (nudos, elementos, nodeInputs, elementInputs, deformaciones)
import { writeFileSync } from "node:fs";
import { resolverHeks } from "./heks.mjs";
const r = await resolverHeks(process.argv[2]);
const plano = (o) => {
  if (o instanceof Map) return Object.fromEntries([...o].map(([k, v]) => [k, plano(v)]));
  if (Array.isArray(o)) return o.map(plano);
  if (o && typeof o === "object") return Object.fromEntries(Object.entries(o).map(([k, v]) => [k, plano(v)]));
  return o;
};
const d = r.deformOutputs;
writeFileSync(process.argv[3], JSON.stringify({
  nodes: r.nodes, elements: r.elements, nodeInputs: plano(r.nodeInputs), elementInputs: plano(r.elementInputs),
  deformations: plano(d.deformations ?? {}), reactions: plano(d.reactions ?? {}),
}));
const ei = r.elementInputs; console.log("elementInputs:", Object.keys(ei).map(k => k + "(" + (ei[k]?.size ?? (Array.isArray(ei[k]) ? ei[k].length : typeof ei[k])) + ")").join(" "));
console.log("nodeInputs:", Object.keys(r.nodeInputs).map(k => k + "(" + (r.nodeInputs[k]?.size ?? typeof r.nodeInputs[k]) + ")").join(" "));
console.log("nudos", r.nodes.length, "elementos", r.elements.length);
