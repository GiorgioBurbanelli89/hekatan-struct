/**
 * PLANTILLA DE MODELO EXISTENTE — `/modelo/?heks=...`
 *
 * Jorge, 2026-08-12: *"debemos usar otro workspace, es una plantilla de modelo
 * existente"*, y antes: *"para modelos ya existentes no debe ir tanta cosa,
 * sino lo que uno necesita para cambiar rápido"*.
 *
 * El `/workspace/` está pensado para EJEMPLOS PARAMÉTRICOS: su panel arranca
 * con el selector Categoría → Ejemplo y con los sliders que reconstruyen la
 * geometría. Para un `.heks` que ya trae su geometría hecha, esos sliders no
 * tocan nada y el selector solo sirve para perder el modelo. Por eso esto es
 * una página aparte y no un modo del workspace.
 *
 * Qué hace:
 *   1. Lee el modelo de la URL (`?heks=/galpon_validado.heks`) o del último
 *      cargado, y lo deja en `window.__hekatanCliScript`.
 *   2. Lo construye con el MISMO `cliModeler` del workspace — mismo lector de
 *      .heks, mismo solver, mismos resultados.
 *   3. Lo monta con `runExampleStandalone`, que trae viewer + Tweakpane + barra
 *      SIN el selector de ejemplos ni el panel de parámetros.
 *
 * Uso:
 *   /modelo/?heks=/galpon_validado.heks
 *   /modelo/                              → abre vacío y se arrastra un .heks
 */
import { cliModeler } from "../cli-modeler/cliModeler";
import { runExampleStandalone } from "../workspace/runExampleStandalone";
import type { ExampleDef } from "../workspace/exampleRegistry";

const qs = new URLSearchParams(window.location.search);
const CLAVE_LS = "hekatan.modelo.ultimo";

/** De dónde sale el .heks: `?heks=<ruta>` o `?m=<codigo>` (carpeta publicada). */
function urlDelModelo(): string | null {
  const cod = qs.get("m");
  if (cod) {
    return `${import.meta.env.BASE_URL}m/${encodeURIComponent(cod)}/modelo.heks`
      .replace(/([^:])\/\//g, "$1/");
  }
  return qs.get("heks");
}

/** Velo de carga: sin esto se ve el lienzo vacío antes de que llegue el modelo. */
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

async function arrancar() {
  const url = urlDelModelo();
  let script: string | null = null;
  let nombre = "(vacío)";

  if (url) {
    const v = velo("Cargando modelo…");
    try {
      const r = await fetch(url, { cache: "no-store" });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      script = await r.text();
      nombre = url.split("/").pop() || url;
      try { localStorage.setItem(CLAVE_LS, script); } catch { /* cuota */ }
    } catch (e: any) {
      v.textContent = `No se pudo cargar ${url} — ${e?.message ?? e}`;
      setTimeout(() => v.remove(), 4000);
    } finally {
      setTimeout(() => v.remove(), 300);
    }
  }
  // sin URL: se reabre el último que se vio, para no perder el trabajo al
  // recargar la pestaña
  if (!script) {
    try {
      script = localStorage.getItem(CLAVE_LS);
      if (script) nombre = "(último cargado)";
    } catch { /* no-op */ }
  }
  if (script) (window as any).__hekatanCliScript = script;

  // Cuenta rápida de lo que trae, para el título del panel
  const cuenta = (re: RegExp) =>
    script ? (script.match(re) ?? []).length : 0;
  const nNodos = cuenta(/^\s*node\s+/gm);
  const nBarras = cuenta(/^\s*frame\s+/gm);
  const nShells = cuenta(/^\s*shell\s+/gm);

  const def: ExampleDef = {
    ...cliModeler,
    id: "modelo",
    name: nNodos
      ? `${nombre} — ${nNodos} nudos · ${nBarras} barras · ${nShells} shells`
      : "Modelo (arrastrá un .heks)",
    category: "📂 Modelo",
    // Un modelo cargado no tiene parámetros que mover: su geometría ya está
    // hecha. Sin esto el panel abriría con sliders que no cambian nada.
    params: {},
  };
  runExampleStandalone(def);
}

arrancar();
