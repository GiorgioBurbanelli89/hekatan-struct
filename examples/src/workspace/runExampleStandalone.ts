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
import { getToolbar, getViewer, colorMapForceUnit, colorMapDispUnit } from "awatif-ui";
import type { ExampleDef, BuildStates } from "./exampleRegistry";
import {
  forceUnit, dispUnit, fromKn, toKn, fromKnm, toKnm,
  forceUnitSuffix, momentUnitSuffix, dispUnitSuffix, stripUnitSuffix,
} from "./units";

// Propagación unit → colormap legend del viewer (misma pipeline que el workspace)
van.derive(() => { colorMapForceUnit.val = forceUnit.val; });
van.derive(() => { colorMapDispUnit.val = dispUnit.val; });

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

  // currentParams en UNIDAD UI. Los p.default están en SI; convertir para display.
  const currentParams: Record<string, number> = Object.fromEntries(
    Object.entries(ex.params).map(([k, p]) => {
      const valSI = p.default;
      if (p.unitType === "force")  return [k, fromKn(valSI)];
      if (p.unitType === "moment") return [k, fromKnm(valSI)];
      return [k, valSI];
    }),
  );

  /** Convierte UI unit → SI para pasar a ex.build(). */
  const toSIParams = (): Record<string, number> => {
    const si: Record<string, number> = { ...currentParams };
    for (const [k, p] of Object.entries(ex.params)) {
      if (p.unitType === "force")  si[k] = toKn(currentParams[k]);
      if (p.unitType === "moment") si[k] = toKnm(currentParams[k]);
    }
    return si;
  };

  const rebuild = () => ex.build(toSIParams(), states);

  // ── Tweakpane panel (ARRASTRABLE, posición persistida) ─────────────
  const paneHost = document.createElement("div");
  const PANE_POS_KEY = `hk_paneHostPos_${ex.id}`;
  const savedPos = (() => {
    try {
      const raw = localStorage.getItem(PANE_POS_KEY);
      if (raw) return JSON.parse(raw) as { left: number; top: number };
    } catch {}
    return null;
  })();
  paneHost.style.cssText =
    "position:fixed;" +
    (savedPos ? `left:${savedPos.left}px;top:${savedPos.top}px;right:auto;` : "top:16px;right:16px;") +
    "width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;" +
    "max-height:90vh;overflow-y:auto;font-size:12px;" +
    "box-shadow:0 6px 24px rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.08);";
  document.body.appendChild(paneHost);

  // Función para construir (o reconstruir) el pane. Se reconstruye al cambiar
  // la unidad de fuerza/desplazamiento para que los labels/valores reflejen
  // la unidad actual.
  let currentPane: Pane | null = null;
  const buildPane = () => {
    if (currentPane) { currentPane.dispose(); }
    paneHost.innerHTML = "";
    const pane = new Pane({ container: paneHost, title: ex.name });
    currentPane = pane;

    // Hacer el pane arrastrable desde el title-bar.
    setTimeout(() => {
      const handle = paneHost.querySelector(".tp-rotv_b, .tp-fldv_b") as HTMLElement | null;
      if (!handle) return;
      handle.style.cursor = "move";
      handle.style.userSelect = "none";
      let dragging = false;
      let startX = 0, startY = 0, origLeft = 0, origTop = 0;
      handle.addEventListener("mousedown", (e) => {
        dragging = true;
        startX = e.clientX; startY = e.clientY;
        const r = paneHost.getBoundingClientRect();
        origLeft = r.left; origTop = r.top;
        paneHost.style.right = "auto";
        paneHost.style.left = `${origLeft}px`;
        paneHost.style.top = `${origTop}px`;
        e.preventDefault();
      });
      window.addEventListener("mousemove", (e) => {
        if (!dragging) return;
        const dx = e.clientX - startX, dy = e.clientY - startY;
        const newLeft = Math.max(0, Math.min(window.innerWidth - 40, origLeft + dx));
        const newTop = Math.max(0, Math.min(window.innerHeight - 40, origTop + dy));
        paneHost.style.left = `${newLeft}px`;
        paneHost.style.top = `${newTop}px`;
      });
      window.addEventListener("mouseup", () => {
        if (!dragging) return;
        dragging = false;
        try {
          localStorage.setItem(PANE_POS_KEY, JSON.stringify({
            left: parseFloat(paneHost.style.left),
            top: parseFloat(paneHost.style.top),
          }));
        } catch {}
      });
    }, 0);

    // ── Unidades ─────────────────────────────────────────────
    const fUnits = pane.addFolder({ title: "Unidades", expanded: false });
    const unitsProxy = { force: forceUnit.val, disp: dispUnit.val };
    fUnits.addBinding(unitsProxy, "force", {
      label: "Fuerza",
      options: { kN: "kN", tonf: "tonf", kip: "kip" },
    }).on("change", (e) => {
      const oldUnit = forceUnit.val;
      const newUnit = e.value as any;
      if (oldUnit !== newUnit) {
        const fOld = oldUnit === "kN" ? 1 : oldUnit === "tonf" ? 9.80665 : 4.4482216;
        const fNew = newUnit === "kN" ? 1 : newUnit === "tonf" ? 9.80665 : 4.4482216;
        for (const [k, p] of Object.entries(ex.params)) {
          if (p.unitType === "force" || p.unitType === "moment") {
            currentParams[k] = (currentParams[k] * fOld) / fNew;
          }
        }
      }
      forceUnit.val = newUnit;
      buildPane();
      rebuild();
    });
    fUnits.addBinding(unitsProxy, "disp", {
      label: "Desplazamiento",
      options: { mm: "mm", cm: "cm", m: "m", in: "in" },
    }).on("change", (e) => {
      dispUnit.val = e.value as any;
      buildPane();
      rebuild();
    });

    // ── Parámetros ───────────────────────────────────────────
    const fParams = pane.addFolder({ title: "Parámetros" });
    let timer: number | null = null;
    const scheduleRebuild = () => {
      if (timer !== null) clearTimeout(timer);
      timer = window.setTimeout(() => { timer = null; rebuild(); }, 120);
    };
    for (const [key, p] of Object.entries(ex.params)) {
      const baseLabel = stripUnitSuffix(p.label ?? key);
      const unitSuffix = p.unitType === "force"  ? ` ${forceUnitSuffix()}` :
                         p.unitType === "moment" ? ` ${momentUnitSuffix()}` :
                         p.unitType === "disp"   ? ` ${dispUnitSuffix()}` :
                         "";
      const opts: any = { label: baseLabel + unitSuffix };
      if (p.options !== undefined) {
        opts.options = p.options;
      } else {
        if (p.min !== undefined) opts.min = p.min;
        if (p.max !== undefined) opts.max = p.max;
        if (p.step !== undefined) opts.step = p.step;
      }
      fParams.addBinding(currentParams, key, opts).on("change", scheduleRebuild);
    }
  };

  buildPane();

  // ── 3D viewer ────────────────────────────────────────────
  document.body.append(
    getViewer({
      mesh: { nodes, elements, nodeInputs, elementInputs, deformOutputs, analyzeOutputs },
      objects3D,
      settingsObj: {
        deformedShape: true,
        displayScale: -2,    // markers y flechas a 0.5× (no tapan el modelo)
        shellResults: (ex as any).defaultShellResult ?? "displacementZ",
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
