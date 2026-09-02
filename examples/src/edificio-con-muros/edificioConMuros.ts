/**
 * Edificio con Muros de corte (shear walls).
 *
 * Variante de edificio-aporticado con:
 *   - slabOn = ON (losa Q4 por piso)
 *   - murosMode = 3: muros de corte de CASCARA (Q4 verticales) en el primer
 *     vano de las dos fachadas X y de las dos fachadas Y, de la base a la
 *     cubierta, cosidos a vigas y columnas (2026-09-02). Hasta entonces eran
 *     diagonales 1D y el colormap de "muros" no tenia nada que pintar.
 *
 * Representa edificio dual — pórtico + muros de corte.
 * Típico en edificios altos (≥6 pisos) NEC-SE-DS.
 */
import { edificioAporticado } from "../edificio-aporticado/edificioAporticado";
import type { ExampleDef } from "../workspace/exampleRegistry";

const baseParams = edificioAporticado.params;
const params = { ...baseParams };

// Defaults edificio dual
params.slabOn     = { ...baseParams.slabOn,     default: 1 };      // losa ON
params.bracesMode = { ...baseParams.bracesMode, default: 0 };      // sin diagonales: los muros son de verdad
params.murosMode  = { ...baseParams.murosMode,  default: 3 };      // muros Q4 en X e Y (primer vano, dos fachadas)
params.tMuro      = { ...baseParams.tMuro,      default: 0.25 };
params.slabT      = { ...baseParams.slabT,      default: 0.15 };
// Edificio dual es más rígido — puede tener más pisos por default
params.nPisos     = { ...baseParams.nPisos,     default: 6 };

export const edificioConMuros: ExampleDef = {
  id: "edificio-con-muros",
  name: "Edificio con Muros de corte",
  category: "4️⃣ Mixtos · 🏢 Edificios",
  defaultShellResult: "bendingXX",
  availableShellResults: ["bendingXX", "bendingYY", "bendingXY", "membraneXX", "membraneYY", "membranePrincipalMin", "membranePrincipalMax", "displacementZ", "vonMises"],
  hasModal: true,
  params,
  build: edificioAporticado.build,
  runModal: edificioAporticado.runModal,
  computedLabels: edificioAporticado.computedLabels,  // reacciones → zapata
};
