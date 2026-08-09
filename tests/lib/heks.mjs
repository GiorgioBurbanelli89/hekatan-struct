/**
 * Resuelve un .heks sin navegador, por el MISMO camino que la app: se empaqueta
 * `cliModeler` con esbuild y se le pasa el guion por `window.__hekatanCliScript`.
 *
 * Va por cliModeler a proposito, no llamando al solver a pelo: asi el test
 * cubre tambien el lector del .heks y el armado del modelo, que es donde vive
 * el cruce I22/I33 de la convencion CSI.
 */
import { readFileSync } from "node:fs";
import { empaquetar, R } from "./bundle.mjs";

const cargarCliModeler = async () =>
  (await empaquetar(`export { cliModeler } from "${R}/examples/src/cli-modeler/cliModeler";\n`,
                    "cliModeler")).cliModeler;

/** Devuelve { nodes, elements, deformOutputs, analyzeOutputs }. */
export async function resolverHeks(rutaHeks) {
  const cliModeler = await cargarCliModeler();
  globalThis.window = { __hekatanCliScript: readFileSync(rutaHeks, "utf-8") };
  const st = (v) => ({ val: v });
  const states = {
    nodes: st([]), elements: st([]), nodeInputs: st({}), elementInputs: st({}),
    deformOutputs: st({}), analyzeOutputs: st({}), objects3D: st([]),
  };
  cliModeler.build({}, states);
  return {
    nodes: states.nodes.val,
    elements: states.elements.val,
    nodeInputs: states.nodeInputs.val,
    deformOutputs: states.deformOutputs.val ?? {},
    analyzeOutputs: states.analyzeOutputs.val ?? {},
  };
}

/** Fuerzas de extremo por barra, con las coordenadas de sus dos nudos. */
export function fuerzasDeBarra({ nodes, elements, analyzeOutputs: a }) {
  const campos = { N: a.normals, Vy: a.shearsY, Vz: a.shearsZ,
                   T: a.torsions, My: a.bendingsY, Mz: a.bendingsZ };
  const out = [];
  elements.forEach((el, i) => {
    if (el.length !== 2) return;                 // barras; los shells no
    const reg = { i: nodes[el[0]], j: nodes[el[1]] };
    let algo = false;
    for (const [k, m] of Object.entries(campos)) {
      const v = m?.get?.(i);
      if (v) { reg[k] = [v[0], v[1]]; algo = true; }
    }
    if (algo) out.push(reg);
  });
  return out;
}
