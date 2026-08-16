import { deform, analyze, modalAnalysis, type Node, type Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";
import { NODOS, BARRAS, SEC, PROPS, APOYOS,
         NODOS_ENTREPISO, NODOS_CUBIERTA } from "./galponDatos";

// Galpon metalico de 2 plantas, 26.63 x 14.74 m (bodega de paquetes electorales).
// El modelo sale de las capas ANALITICO-* del DWG, asi que es EL MISMO que se
// exporta a ETABS: la comparacion es entre solvers, no entre modelos parecidos.
const Es = 200000000, nu = 0.3, Gs = Es / (2 * (1 + nu)), rho = 7.951070336391437;
let ultimoError = "";

export const galponBodega: ExampleDef = {
  id: "galpon-bodega",
  name: "Galpon bodega 2 plantas (analitico del DWG)",
  category: "1️⃣ Frames · 🎯 n GDL Sistemas",
  defaultShellResult: "none",
  availableShellResults: [],
  hasModal: true,
  params: {
    qEntrepiso: { default: 9.30, min: 0, max: 20, step: 0.1,
                  label: "D+L entrepiso (kN/m2)", folder: "Cargas" },
    qCubierta:  { default: 1.10, min: 0, max: 5, step: 0.05,
                  label: "D+L cubierta (kN/m2)", folder: "Cargas" },
  },
  build(p, states) {
    const nodes: Node[] = NODOS.map(q => [q[0], q[1], q[2]]);
    const elements: Element[] = BARRAS.map(b => [b[0], b[1]]);

    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
    for (const i of APOYOS) supports.set(i, [true,true,true,true,true,true]);

    // El area en planta se reparte entre los nodos de cada nivel.
    const A = 26.63 * 14.74;
    const loads = new Map<number, [number,number,number,number,number,number]>();
    const pEnt = -p.qEntrepiso * A / Math.max(1, NODOS_ENTREPISO.length);
    const pCub = -p.qCubierta  * A / Math.max(1, NODOS_CUBIERTA.length);
    for (const i of NODOS_ENTREPISO) loads.set(i, [0,0,pEnt,0,0,0]);
    for (const i of NODOS_CUBIERTA)  loads.set(i, [0,0,pCub,0,0,0]);

    const elasticities = new Map<number, number>();
    const shearModuli  = new Map<number, number>();
    const areas        = new Map<number, number>();
    const Iz           = new Map<number, number>();
    const Iy           = new Map<number, number>();
    const J            = new Map<number, number>();
    const densities    = new Map<number, number>();
    const poissons     = new Map<number, number>();
    for (let e = 0; e < elements.length; e++) {
      const [a, iy, iz, j] = PROPS[SEC[e]];
      elasticities.set(e, Es); shearModuli.set(e, Gs); poissons.set(e, nu);
      densities.set(e, rho);
      areas.set(e, a); Iy.set(e, iy); Iz.set(e, iz); J.set(e, j);
    }

    states.nodes.val = nodes;
    states.elements.val = elements;
    states.nodeInputs.val = { supports, loads };
    states.elementInputs.val = {
      elasticities, shearModuli, areas,
      momentsOfInertiaY: Iz, momentsOfInertiaZ: Iy, torsionalConstants: J,
      densities, poissonsRatios: poissons,
    };
    // El error del solver se guarda para poder mostrarlo en el panel: si
    // deform() falla, el workspace se queda callado y solo se ve la geometria.
    try {
      const out = deform(nodes, elements, states.nodeInputs.val, states.elementInputs.val);
      states.deformOutputs.val = out;
      states.analyzeOutputs.val = analyze(nodes, elements, states.elementInputs.val, out);
      ultimoError = out?.deformations?.size ? "" : "deform() devolvio vacio";
    } catch (e: any) {
      ultimoError = String(e?.message || e).slice(0, 90);
      console.error("galpon-bodega deform:", e);
    }
    states.objects3D.val = [];
  },
  // OJO: el workspace fija las CLAVES en la primera llamada
  // (main.ts: for (const key of Object.keys(computedObj))). Si aqui se
  // devuelve un objeto VACIO cuando aun no hay resultados, la carpeta queda
  // vacia PARA SIEMPRE. Hay que devolver siempre las mismas claves.
  computedLabels(p, states) {
    const out = {
      "Nodos": String(NODOS.length),
      "Barras": String(BARRAS.length),
      "Uz max (mm)": "-",
      "Ux max (mm)": "-",
      "en el nodo": "-",
      "Suma Rz (kN)": "-",
      "Estado": ultimoError || "ok",
    };
    // OJO: `deformations` es un Map<nodo, [ux,uy,uz,rx,ry,rz]>, NO un array
    // (hekatan-fem/src/data-model.ts). Con d.length siempre da undefined.
    const d = states.deformOutputs.val?.deformations;
    if (!d || !d.size) return out;
    let uz = 0, ux = 0, nodo = -1;
    for (const [i, v] of d) {
      if (Math.abs(v[2]) > Math.abs(uz)) { uz = v[2]; nodo = i; }
      if (Math.abs(v[0]) > Math.abs(ux)) ux = v[0];
    }
    out["Uz max (mm)"] = (uz * 1000).toFixed(2);
    out["Ux max (mm)"] = (ux * 1000).toFixed(2);
    out["en el nodo"] = String(nodo);
    const R = states.deformOutputs.val?.reactions;
    if (R) {
      let rz = 0;
      for (const [, v] of R) rz += v[2] || 0;
      out["Suma Rz (kN)"] = rz.toFixed(1);
    }
    return out;
  },
  runModal(p, states, modalPanel) {
    const { nodes, elements, nodeInputs: ni, elementInputs: ei } = {
      nodes: states.nodes.val, elements: states.elements.val,
      nodeInputs: states.nodeInputs.val, elementInputs: states.elementInputs.val,
    };
    if (!nodes.length || !ni.supports?.size) return;
    try {
      const out = modalAnalysis(nodes, elements, ni, ei, 12);
      // Dejar los periodos a mano para poder compararlos con ETABS/SAP sin
      // tener que leer la tabla del panel. modalAnalysis devuelve
      // frequencies (rad/s o Hz segun el motor): T = 1/f o 2*PI/w.
      (window as any).__galponModal = {
        frequencies: Array.from(out.frequencies ?? []),
        masa: out.massParticipation ? "ok" : "-",
      };
      modalPanel.render(out, {
        title: "Galpon bodega 2 plantas",
        properties: [`${NODOS.length} nodos, ${BARRAS.length} barras, acero A36/A500`],
      });
    } catch (e: any) { console.warn("Modal galpon:", e.message); }
  },
};
