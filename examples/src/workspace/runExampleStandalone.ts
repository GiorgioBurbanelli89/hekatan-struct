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
} from "hekatan-fem";
import { getToolbar, getViewer, colorMapForceUnit, colorMapDispUnit } from "hekatan-ui";
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

  // computedObj backea el folder "📊 Resultados". Se rellena con
  // ex.computedLabels() y se refresca tras cada rebuild() vía pane.refresh().
  let computedObj: Record<string, string> | null = null;
  let currentPaneRef: Pane | null = null;

  const rebuild = () => {
    ex.build(toSIParams(), states);
    // Refrescar valores calculados después del build (lecturas de outputs)
    if (ex.computedLabels && computedObj && currentPaneRef) {
      const latest = ex.computedLabels(toSIParams(), states);
      for (const key of Object.keys(computedObj)) {
        if (key in latest) computedObj[key] = latest[key];
      }
      // Agregar nuevas keys que no estaban en el initial
      for (const key of Object.keys(latest)) {
        if (!(key in computedObj)) computedObj[key] = latest[key];
      }
      currentPaneRef.refresh();
    }
  };

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
    currentPaneRef = pane;

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

    // ── SAFE F2K Export/Import (solo zapatas) ─────────────────
    // Mismo behavior que el workspace: roundtrip Hekatan ↔ SAFE para validación.
    if (ex.id.startsWith("zapata")) {
      const fF2K = pane.addFolder({ title: "📄 SAFE F2K", expanded: false });
      fF2K.addButton({ title: "📤 Exportar a SAFE (.f2k)" }).on("click", async () => {
        try {
          const { downloadZapataF2k } = await import("../zapata-aislada/f2kExporter");
          const p = currentParams;
          const ks_factor = p.ks_factor ?? 10.5;
          const q_adm_tonf = p.q_adm ?? 20;
          const ks_kNm3 = ks_factor * q_adm_tonf * 9.80665;
          const useSimple = (p.useSimple ?? 1) >= 0.5;
          const P_dead_kN = useSimple ? (p.P_simple ?? 0) * 9.80665 : (p.P_D ?? 10) * 9.80665;
          const P_live_kN = useSimple ? 0 : (p.P_L ?? 5) * 9.80665;
          const Mx_dead = useSimple ? (p.Mx_simple ?? 0) * 9.80665 : (p.Mx_D ?? 0) * 9.80665;
          const My_dead = useSimple ? (p.My_simple ?? 0) * 9.80665 : (p.My_D ?? 0) * 9.80665;
          downloadZapataF2k({
            Lz: p.Lz ?? 1.5,
            Bz: p.Bz ?? 1.5,
            tz: p.tz ?? 0.30,
            bc: p.bc ?? 0.4,
            ks_kNm3, P_dead_kN, P_live_kN,
            Mx_dead_kNm: Mx_dead, My_dead_kNm: My_dead,
          }, `Zapata_Hekatan_${Date.now()}.f2k`);
          alert(`F2K descargado.\nks=${ks_kNm3.toFixed(0)} kN/m³, P_dead=${P_dead_kN.toFixed(1)} kN.\nAbrilo en SAFE: File → Import → SAFE Text File.`);
        } catch (e: any) {
          alert(`Error: ${e?.message ?? e}`);
        }
      });
      // Función reutilizable para aplicar un F2K text (también expuesta en window
      // como `__hekatanImportF2kText` para testing programático del flujo).
      const applyF2kText = async (text: string, sourceName: string) => {
        const { parseZapataF2k } = await import("../zapata-aislada/f2kImporter");
        const p = parseZapataF2k(text);
        if (p.Lz != null) currentParams.Lz = p.Lz;
        if (p.Bz != null) currentParams.Bz = p.Bz;
        if (p.tz != null) currentParams.tz = p.tz;
        if (p.bc != null) currentParams.bc = p.bc;
        if (p.q_adm != null) currentParams.q_adm = p.q_adm;
        if (p.ks_factor != null) currentParams.ks_factor = p.ks_factor;
        // CRÍTICO: ks (kN/m³) es el valor REAL que usa el solver, no q_adm × ks_factor.
        // Sin este line, el slider ks queda en default (2059) aunque el F2K traía
        // 19,999 kN/m³ (= 2,039 tonf/m³ que muestra SAFE).
        if (p.ks_kNm3 != null) currentParams.ks = p.ks_kNm3;
        if (p.P_dead_tonf != null) {
          currentParams.useSimple = 1;
          currentParams.P_simple = p.P_dead_tonf;
          currentParams.useD = 0;
          currentParams.useL = 0;
          currentParams.useS = 0;
        }
        if (p.Mx_dead_tonfm != null) currentParams.Mx_simple = p.Mx_dead_tonfm;
        if (p.My_dead_tonfm != null) currentParams.My_simple = p.My_dead_tonfm;
        if (p.q_adm != null && p.ks_factor != null) {
          currentParams.soilType = 0;
        }
        buildPane();
        rebuild();
        return p;
      };
      // Exponer para testing CLI / DOM scripts
      (window as any).__hekatanImportF2kText = applyF2kText;

      fF2K.addButton({ title: "📥 Importar F2K…" }).on("click", () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".f2k,.txt";
        input.onchange = async (ev: any) => {
          const file = ev.target.files?.[0];
          if (!file) return;
          try {
            const text = await file.text();
            const p = await applyF2kText(text, file.name);
            alert(
              `F2K importado: ${file.name}\n` +
              `\nGeometría:` +
              `\n  Lz = ${p.Lz?.toFixed(2)} m, Bz = ${p.Bz?.toFixed(2)} m, tz = ${p.tz?.toFixed(2)} m` +
              `\n  Columna = ${p.bc?.toFixed(2)} m` +
              `\n\nSuelo:` +
              `\n  ks = ${p.ks_kNm3?.toFixed(0)} kN/m³` +
              `\n  q_adm = ${p.q_adm?.toFixed(1)} tonf/m²  ks_factor = ${p.ks_factor?.toFixed(1)}` +
              `\n\nCargas (modo Simple):` +
              `\n  P = ${p.P_dead_tonf?.toFixed(2)} tonf` +
              `\n  Mx = ${(p.Mx_dead_tonfm ?? 0).toFixed(2)} tonf·m` +
              `\n  My = ${(p.My_dead_tonfm ?? 0).toFixed(2)} tonf·m` +
              `\n\n✓ Los sliders del Tweakpane se actualizaron.`
            );
          } catch (e: any) {
            alert(`Error: ${e?.message ?? e}`);
          }
        };
        input.click();
      });
      // OpenSeesPy + TCL exporters (bonus)
      fF2K.addButton({ title: "🐍 Exportar a OpenSeesPy (.py)" }).on("click", async () => {
        try {
          const { exportZapataOpsPy } = await import("../zapata-aislada/opsPyExporter");
          const p = currentParams;
          const ks_kNm3 = (p.ks_factor ?? 10.5) * (p.q_adm ?? 20) * 9.80665;
          const useSimple = (p.useSimple ?? 1) >= 0.5;
          const text = exportZapataOpsPy({
            Lz: p.Lz ?? 1.5, Bz: p.Bz ?? 1.5, tz: p.tz ?? 0.30, bc: p.bc ?? 0.4,
            ks_kNm3,
            P_dead_kN: useSimple ? (p.P_simple ?? 0) * 9.80665 : (p.P_D ?? 10) * 9.80665,
            P_live_kN: useSimple ? 0 : (p.P_L ?? 5) * 9.80665,
          });
          const blob = new Blob([text], { type: "text/x-python" });
          const a = document.createElement("a");
          a.href = URL.createObjectURL(blob);
          a.download = `Zapata_Hekatan_${Date.now()}.py`;
          a.click();
          alert(`OpenSeesPy script descargado.\nEjecutar: python -X utf8 <archivo>.py`);
        } catch (e: any) { alert(`Error: ${e?.message ?? e}`); }
      });
    }

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

    // ── Parámetros — agrupados en folders según ParamDef.folder ──
    // Mismo comportamiento que el workspace pane builder: si un param tiene
    // `folder: "Cargas — Patrón D"`, se mete bajo ese folder. Sin folder → root "Parámetros".
    const defaultFolderTitle = "Parámetros";
    const folderMap = new Map<string, any>();
    const isExpandedByDefault = (title: string) =>
      title === defaultFolderTitle ||
      /\bmodo\b/i.test(title) ||
      /activar/i.test(title) ||
      /combinaci/i.test(title);
    const getFolder = (title: string) => {
      if (!folderMap.has(title)) {
        folderMap.set(title, pane.addFolder({ title, expanded: isExpandedByDefault(title) }));
      }
      return folderMap.get(title);
    };
    let timer: number | null = null;
    const scheduleRebuild = () => {
      if (timer !== null) clearTimeout(timer);
      timer = window.setTimeout(() => { timer = null; rebuild(); }, 120);
    };
    // Proxy para checkboxes (p.boolean=true) — Tweakpane requiere true/false nativo
    const boolProxy: Record<string, boolean> = {};
    for (const [key, p] of Object.entries(ex.params)) {
      const folderTitle = p.folder ?? defaultFolderTitle;
      const fTarget = getFolder(folderTitle);
      // Boolean → checkbox
      if (p.boolean) {
        boolProxy[key] = currentParams[key] >= 0.5;
        fTarget.addBinding(boolProxy, key, { label: p.label ?? key }).on("change", (e: any) => {
          currentParams[key] = e.value ? 1 : 0;
          if (ex.onParamChange) {
            ex.onParamChange(key, currentParams);
            pane.refresh();  // sync UI con currentParams modificado en onParamChange
          }
          scheduleRebuild();
        });
        continue;
      }
      // Slider / dropdown / number input
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
      fTarget.addBinding(currentParams, key, opts).on("change", () => {
        if (ex.onParamChange) {
          ex.onParamChange(key, currentParams);
          pane.refresh();  // sync UI con currentParams modificado en onParamChange
        }
        scheduleRebuild();
      });
    }

    // ── Folder "📊 Resultados" (read-only) — valores derivados del análisis ──
    // Solo se muestra si el ejemplo exporta computedLabels(). Se pobla en el
    // primer build (después del buildPane inicial) y se refresca tras cada
    // rebuild() vía pane.refresh() — ver el override de rebuild() arriba.
    if (ex.computedLabels) {
      const fResults = pane.addFolder({ title: "📊 Resultados", expanded: true });
      // Llamar computedLabels con los params actuales — states puede estar vacío
      // en el primer build, pero la función debe manejar eso (ej: q_max=0).
      const initial = ex.computedLabels(toSIParams(), states);
      computedObj = computedObj ?? {};
      for (const key of Object.keys(initial)) {
        computedObj[key] = initial[key];
      }
      for (const key of Object.keys(initial)) {
        fResults.addBinding(computedObj, key, {
          readonly: true,
          view: "text",
          interval: 0,
        } as any);
      }
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
        displayScale: -1.5,    // markers y flechas a 0.5× (no tapan el modelo)
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
