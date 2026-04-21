/**
 * Runner standalone — cada example folder (`plate-thin/main.ts`, etc.) lo llama
 * con su propio ExampleDef. Crea el viewer, Tweakpane, toolbar.
 * La misma función de construcción se puede cargar desde workspace o standalone.
 */
import van, { State } from "vanjs-core";
import * as THREE from "three";
import { Pane } from "tweakpane";
import {
  Node, Element, NodeInputs, ElementInputs,
  DeformOutputs, AnalyzeOutputs,
} from "awatif-fem";
import { getToolbar, getViewer } from "awatif-ui";
import type { ExampleDef, BuildStates } from "./exampleRegistry";
import { forceUnit, dispUnit } from "./units";

export function runExampleStandalone(ex: ExampleDef) {
  const nodes: State<Node[]> = van.state([]);
  const elements: State<Element[]> = van.state([]);
  const nodeInputs: State<NodeInputs> = van.state({});
  const elementInputs: State<ElementInputs> = van.state({});
  const deformOutputs: State<DeformOutputs> = van.state({});
  const analyzeOutputs: State<AnalyzeOutputs> = van.state({});
  const objects3D: State<THREE.Object3D[]> = van.state([]);

  const states: BuildStates = {
    nodes, elements, nodeInputs, elementInputs,
    deformOutputs, analyzeOutputs, objects3D,
  };

  const currentParams: Record<string, number> = Object.fromEntries(
    Object.entries(ex.params).map(([k, p]) => [k, p.default])
  );

  const rebuild = () => ex.build(currentParams, states);

  // ── Tweakpane panel ──
  const paneHost = document.createElement("div");
  paneHost.style.cssText = "position:fixed;top:16px;right:16px;width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:90vh;overflow-y:auto;font-size:12px";
  document.body.appendChild(paneHost);

  const pane = new Pane({ container: paneHost, title: ex.name });

  // Unidades
  const fUnits = pane.addFolder({ title: "Unidades", expanded: false });
  const unitsProxy = { force: forceUnit.val, disp: dispUnit.val };
  fUnits.addBinding(unitsProxy, "force", {
    label: "Fuerza",
    options: { kN: "kN", tonf: "tonf", kip: "kip" },
  }).on("change", (e) => { forceUnit.val = e.value as any; rebuild(); });
  fUnits.addBinding(unitsProxy, "disp", {
    label: "Desplazamiento",
    options: { mm: "mm", cm: "cm", "µm": "µm" },
  }).on("change", (e) => { dispUnit.val = e.value as any; rebuild(); });

  // Parámetros
  const fParams = pane.addFolder({ title: "Parámetros" });
  let timer: number | null = null;
  const scheduleRebuild = () => {
    if (timer !== null) clearTimeout(timer);
    timer = window.setTimeout(() => { timer = null; rebuild(); }, 120);
  };
  for (const [key, p] of Object.entries(ex.params)) {
    const opts: any = { label: p.label ?? key };
    if (p.options !== undefined) {
      opts.options = p.options;
    } else {
      if (p.min !== undefined) opts.min = p.min;
      if (p.max !== undefined) opts.max = p.max;
      if (p.step !== undefined) opts.step = p.step;
    }
    fParams.addBinding(currentParams, key, opts).on("change", scheduleRebuild);
  }

  // ── 3D viewer ──
  document.body.append(
    getViewer({
      mesh: { nodes, elements, nodeInputs, elementInputs, deformOutputs, analyzeOutputs },
      objects3D,
      settingsObj: {
        deformedShape: true,
        displayScale: -1,    // escala 1:1 real de deformada
        shellResults: "displacementZ",
        gridSize: 10,
        showCotas: true,
      },
    }),
    getToolbar({
      sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
      author: "https://www.linkedin.com/in/jorge-burbano-213741138/",
    })
  );

  rebuild();
}
