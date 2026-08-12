/**
 * PLANTILLA DE MODELO EXISTENTE — `/workspace_existent/`
 *
 * Jorge, 2026-08-12: *"el existente viene con las propiedades de un e2k que uno
 * importa o exporta"*, y antes *"ya hay un workspace, ese no debe ser una
 * plantilla nueva"*.
 *
 * La diferencia de fondo, que ya está escrita en `csi-importer/csiImporter.ts`:
 * **un archivo existente NO lleva las configuraciones del nuevo**. Trae SUS
 * secciones, SUS materiales, SUS apoyos y SUS cargas, y eso es lo que hay que
 * enseñar — no los valores por defecto de un modelo en blanco.
 *
 * Por eso esta plantilla se monta sobre `csiImporter`, no sobre `cliModeler`:
 *
 *   .e2k / .$et  →  parseE2k  →  el modelo ENTERO (secciones, plantas, apoyos,
 *                                cargas) →  csiImporter lo muestra tal cual
 *   .heks        →  cliModeler (el formato propio, también admitido)
 *
 * Uso:
 *   /workspace_existent/?e2k=/galpon_bodega.e2k
 *   /workspace_existent/?heks=/galpon_validado.heks
 *   /workspace_existent/                       → botón para abrir el archivo
 */
import { csiImporter } from "../csi-importer/csiImporter";
import { cliModeler } from "../cli-modeler/cliModeler";
import { parseE2k } from "../shared/e2kParser";
import { runExampleStandalone } from "../workspace/runExampleStandalone";
import type { ExampleDef } from "../workspace/exampleRegistry";

const qs = new URLSearchParams(window.location.search);

function velo(txt: string): HTMLDivElement {
  const d = document.createElement("div");
  d.textContent = txt;
  d.style.cssText = [
    "position:fixed", "inset:0", "z-index:9000", "display:flex",
    "align-items:center", "justify-content:center", "background:#1b1e24",
    "color:#7f8a9a", "font:13px ui-monospace,Consolas,monospace",
    "pointer-events:none",
  ].join(";");
  document.body.appendChild(d);
  return d;
}

/** Deja el modelo del e2k donde `csiImporter` lo espera, ENTERO. */
function cargarE2k(texto: string, archivo: string) {
  const model = parseE2k(texto);
  const ei: Record<string, [number, number][]> = {};
  for (const [k, v] of Object.entries(model.elementInputs ?? {})) {
    if (v instanceof Map) ei[k] = [...v.entries()] as [number, number][];
  }
  (window as any).__hekatanImportedModel = {
    fuente: "E2K",
    archivo,
    nodes: model.nodes,
    elements: model.elements,
    tipos: model.elements.map((e: number[], i: number) =>
      e.length === 4 ? "AREA" : (model.elementTypes?.[i] ?? "BEAM")),
    secciones: model.elements.map((_e: number[], i: number) =>
      model.elementSections?.get(i) ?? "—"),
    plantas: model.elementStories ?? [],
    supports: [...((model.nodeInputs?.supports as Map<number, boolean[]>) ?? new Map()).entries()],
    loads: [...((model.nodeInputs?.loads as Map<number, number[]>) ?? new Map()).entries()],
    elementInputs: ei,
    info: model.info,
  };
  const nSec = new Set(model.elements.map((_e: number[], i: number) =>
    model.elementSections?.get(i))).size;
  return { n: model.nodes.length, e: model.elements.length, s: nSec };
}

/** Botón para abrir el archivo a mano cuando no viene por URL. */
function botonAbrir() {
  const b = document.createElement("button");
  b.textContent = "📂 Abrir .e2k / .heks";
  b.style.cssText = [
    "position:fixed", "top:12px", "left:50%", "transform:translateX(-50%)",
    "z-index:9100", "padding:8px 16px", "border-radius:6px",
    "border:1px solid #3a4150", "background:#242a35", "color:#cfd6e0",
    "font:13px ui-monospace,Consolas,monospace", "cursor:pointer",
  ].join(";");
  b.onclick = () => {
    const inp = document.createElement("input");
    inp.type = "file";
    inp.accept = ".e2k,.$et,.heks,.txt";
    inp.onchange = async (ev: any) => {
      const f = ev.target.files?.[0];
      if (!f) return;
      const txt = await f.text();
      if (/\.heks$/i.test(f.name)) (window as any).__hekatanCliScript = txt;
      else cargarE2k(txt, f.name);
      window.location.reload();
    };
    inp.click();
  };
  document.body.appendChild(b);
}

async function arrancar() {
  const urlE2k = qs.get("e2k");
  const urlHeks = qs.get("heks");
  let base: ExampleDef = csiImporter;
  let titulo = "Modelo existente";

  if (urlE2k) {
    const v = velo("Importando e2k…");
    try {
      const r = await fetch(urlE2k, { cache: "no-store" });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const nom = urlE2k.split("/").pop() || urlE2k;
      const c = cargarE2k(await r.text(), nom);
      titulo = `${nom} — ${c.n} nudos · ${c.e} elementos · ${c.s} secciones`;
    } catch (e: any) {
      v.textContent = `No se pudo importar ${urlE2k} — ${e?.message ?? e}`;
      setTimeout(() => v.remove(), 5000);
    } finally {
      setTimeout(() => v.remove(), 300);
    }
  } else if (urlHeks) {
    // El formato propio también vale: mismo lector que el workspace.
    base = cliModeler;
    const v = velo("Cargando modelo…");
    try {
      const r = await fetch(urlHeks, { cache: "no-store" });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const txt = await r.text();
      (window as any).__hekatanCliScript = txt;
      const nom = urlHeks.split("/").pop() || urlHeks;
      const n = (txt.match(/^\s*node\s+/gm) ?? []).length;
      const f = (txt.match(/^\s*frame\s+/gm) ?? []).length;
      const s = (txt.match(/^\s*shell\s+/gm) ?? []).length;
      titulo = `${nom} — ${n} nudos · ${f} barras · ${s} shells`;
    } catch (e: any) {
      v.textContent = `No se pudo cargar ${urlHeks} — ${e?.message ?? e}`;
      setTimeout(() => v.remove(), 5000);
    } finally {
      setTimeout(() => v.remove(), 300);
    }
  } else if ((window as any).__hekatanImportedModel) {
    const m = (window as any).__hekatanImportedModel;
    titulo = `${m.archivo} — ${m.nodes?.length ?? 0} nudos · ${m.elements?.length ?? 0} elementos`;
  } else if ((window as any).__hekatanCliScript) {
    base = cliModeler;
  } else {
    botonAbrir();
  }

  const def: ExampleDef = {
    ...base,
    id: "workspace_existent",
    name: titulo,
    category: "📂 Existente",
    // Un archivo existente trae su geometría hecha: no hay sliders que la
    // redefinan. Los del panel son para EDITAR lo importado, no para
    // reconstruirlo.
    params: base === csiImporter ? base.params : {},
  };
  runExampleStandalone(def);
}

arrancar();
