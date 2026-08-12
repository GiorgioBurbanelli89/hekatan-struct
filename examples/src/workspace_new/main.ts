/**
 * PLANTILLA DE MODELO NUEVO — `/workspace_new/`
 *
 * Jorge, 2026-08-12: *"las plantillas son nuevo y existente, y de pronto otro
 * que se me ocurra"* — y *"ya hay un workspace, ese no debe ser una plantilla
 * nueva"*.
 *
 * O sea: `/workspace/` se queda como está (es el de los EJEMPLOS, con su
 * selector Categoría → Ejemplo y sus sliders paramétricos), y las plantillas
 * son otra cosa, montadas aparte:
 *
 *   /workspace_new/            → empezar un modelo de cero        (esta)
 *   /workspace_existent/?heks=…    → abrir uno que ya existe
 *
 * Las dos comparten motor: el mismo `cliModeler` que lee los comandos, el mismo
 * solver y los mismos resultados. Lo único que cambia es el panel — que era el
 * problema: el workspace arrastra una UI pensada para ejemplos que a quien
 * modela no le sirve.
 *
 * Esta arranca con un modelo MÍNIMO que ya resuelve (un cantilever), para que
 * el lienzo no salga vacío y se vea de entrada cómo se escribe un modelo. Se
 * borra y se escribe encima desde el folder de comandos.
 */
import { cliModeler } from "../cli-modeler/cliModeler";
import { runExampleStandalone } from "../workspace/runExampleStandalone";
import type { ExampleDef } from "../workspace/exampleRegistry";

const CLAVE_LS = "hekatan.nuevo.borrador";

/** Modelo de arranque: una ménsula de 5 m con carga en la punta. */
const PLANTILLA = [
  "# Modelo nuevo — escribí encima. Comandos:",
  "#   node ID x y z            frame ID nI nJ E A Iz Iy J nu rho",
  "#   support ID fixed|pinned  load ID FX FY FZ MX MY MZ",
  "#   frameload ID wx wy wz    shell ID n1 n2 n3 n4 t E",
  "#   ang ID grados            solve",
  "",
  "node 1 0 0 0",
  "node 2 5 0 0",
  "support 1 fixed",
  "frame 1 1 2 200e6 0.0029 3.11e-5 1.78e-6 4.67e-8 0.3 7.85   # VA-250",
  "load 2 0 0 -10",
  "solve",
].join("\n");

// Se recupera el borrador de la última sesión: recargar la pestaña no debería
// costar el trabajo hecho.
let script = PLANTILLA;
try {
  const guardado = localStorage.getItem(CLAVE_LS);
  if (guardado && guardado.trim()) script = guardado;
} catch { /* sin localStorage: se arranca con la plantilla */ }
(window as any).__hekatanCliScript = script;

// Guardar lo que se vaya escribiendo (el CLI deja el último script aquí).
setInterval(() => {
  try {
    const s = (window as any).__hekatanCliLastScript;
    if (s && s.trim()) localStorage.setItem(CLAVE_LS, s);
  } catch { /* cuota llena */ }
}, 4000);

const def: ExampleDef = {
  ...cliModeler,
  id: "nuevo",
  name: "Modelo nuevo",
  category: "📐 Nuevo",
  // Sin parámetros: la geometría se escribe, no se mueve con sliders.
  params: {},
};

runExampleStandalone(def);
