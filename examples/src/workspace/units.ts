/**
 * Sistema de unidades global para el workspace Tweakpane.
 *
 * CONVENCIÓN INTERNA: Todos los cálculos y la API de hekatan-fem usan
 * SI estructural: fuerza en kN, momento en kN·m, longitud/desplazamiento
 * en metros. Lo que el usuario ve y ajusta en los sliders se convierte
 * on-the-fly a/desde estas unidades base.
 *
 * Cuando un ParamDef declara `unitType: "force"` (o "moment", "disp"):
 *   - `currentParams[key]` almacena el valor en la unidad SI base.
 *   - El slider de Tweakpane muestra/recibe el valor en la unidad UI elegida.
 *   - Al cambiar forceUnit/dispUnit, los sliders se reescalan (las mismas
 *     fuerzas físicas, expresadas en la nueva unidad).
 */
import van, { State } from "vanjs-core";

export type ForceUnit = "kN" | "tonf" | "kip";
export type DispUnit = "mm" | "cm" | "m" | "in";

// Defaults: tonf y mm (preferencia del usuario para cimentaciones/concreto).
// Se persisten en localStorage; al cambiar via Tweakpane se actualizan.
export const forceUnit: State<ForceUnit> = van.state(
  (localStorage.getItem("hk_forceUnit") as ForceUnit) || "tonf"
);
export const dispUnit: State<DispUnit> = van.state(
  (localStorage.getItem("hk_dispUnit") as DispUnit) || "mm"
);

// Persistir preferencias
van.derive(() => {
  localStorage.setItem("hk_forceUnit", forceUnit.val);
});
van.derive(() => {
  localStorage.setItem("hk_dispUnit", dispUnit.val);
});

// ── Conversión de FUERZA ──────────────────────────────────────────
// SI base: kN
export const forceFactors: Record<ForceUnit, number> = {
  kN: 1,
  tonf: 9.80665,       // 1 tonf (metric) = 9.80665 kN
  kip: 4.4482216,      // 1 kip = 4.4482216 kN
};

/** Convierte valor UI → kN */
export function toKn(valUI: number, unit?: ForceUnit): number {
  return valUI * forceFactors[unit ?? forceUnit.val];
}
/** Convierte kN → valor UI */
export function fromKn(valKn: number, unit?: ForceUnit): number {
  return valKn / forceFactors[unit ?? forceUnit.val];
}

// ── Conversión de MOMENTO ─────────────────────────────────────────
// SI base: kN·m. kip·ft ≈ 1.3558179 kN·m
export const momentFactors: Record<ForceUnit, number> = {
  kN: 1,               // kN·m
  tonf: 9.80665,       // tonf·m → kN·m (mismo factor que fuerza × m)
  kip: 1.3558179,      // kip·ft → kN·m
};
export function toKnm(valUI: number, unit?: ForceUnit): number {
  return valUI * momentFactors[unit ?? forceUnit.val];
}
export function fromKnm(valKnm: number, unit?: ForceUnit): number {
  return valKnm / momentFactors[unit ?? forceUnit.val];
}

// ── Conversión de DESPLAZAMIENTO ──────────────────────────────────
// SI base: m. Unidades estándar para ingeniería estructural:
//   mm (más común para flechas), cm, m (modelos grandes), in (imperial).
export const dispFactors: Record<DispUnit, number> = {
  mm: 1000,          // 1 m = 1000 mm
  cm: 100,           // 1 m = 100 cm
  m: 1,              // 1 m = 1 m (base)
  in: 39.3700787402, // 1 m = 39.3700787 in
};

/** Convierte m → unidad UI */
export function mToDisp(valM: number, unit?: DispUnit): number {
  return valM * dispFactors[unit ?? dispUnit.val];
}
/** Convierte unidad UI → m */
export function dispToM(valUI: number, unit?: DispUnit): number {
  return valUI / dispFactors[unit ?? dispUnit.val];
}

export function formatDisp(valM: number): string {
  const u = dispUnit.val;
  return `${mToDisp(valM, u).toFixed(2)} ${u}`;
}

export function formatForce(valKn: number): string {
  const u = forceUnit.val;
  return `${fromKn(valKn, u).toFixed(2)} ${u}`;
}
export function formatMoment(valKnm: number): string {
  const u = forceUnit.val;
  const label = u === "kip" ? "kip·ft" : `${u}·m`;
  return `${fromKnm(valKnm, u).toFixed(2)} ${label}`;
}

// ── Helpers UI: label con sufijo de unidad dinámico ───────────────
/** Sufijo de unidad actual: "(kN)", "(tonf)", "(kip)" */
export function forceUnitSuffix(): string {
  return `(${forceUnit.val})`;
}
/** Sufijo momento actual: "(kN·m)", "(tonf·m)", "(kip·ft)" */
export function momentUnitSuffix(): string {
  return forceUnit.val === "kip" ? "(kip·ft)" : `(${forceUnit.val}·m)`;
}
/** Sufijo desplazamiento actual */
export function dispUnitSuffix(): string {
  return `(${dispUnit.val})`;
}

/**
 * Remueve cualquier sufijo "(kN)", "(tonf)", "(kip)", "(kN·m)", etc. de un
 * label para luego re-anexar el sufijo correcto según la unidad actual.
 * Útil para actualizar dinámicamente los labels cuando el usuario switchea
 * la unidad desde el folder "Unidades".
 */
export function stripUnitSuffix(label: string): string {
  return label
    .replace(/\s*\((kN|tonf|kip)(·m|·ft)?\)\s*$/i, "")
    .replace(/\s*\((mm|cm|m|in|µm|um)\)\s*$/i, "")
    .trim();
}

// ============================================================================
// EXTENSION SAFE-style: unidades granulares por categoría + presets
// ============================================================================
// Modelo basado en SAFE Display Units form. Cada categoría almacena su unit
// de display independiente. Internamente todo sigue siendo SI base (kN, m).
//
// Para cambiar todo coherentemente: applyConsistentUnits("Metric MKS").
// Para cambiar individual: stressUnit.val = "MPa", etc.
// ============================================================================

export type StressUnit = "kN/m²" | "kPa" | "MPa" | "GPa" | "kgf/cm²" | "tonf/m²" | "psi" | "ksi" | "kip/ft²";
export type SubgradeUnit = "kN/m³" | "tonf/m³" | "kgf/cm³" | "kip/ft³" | "pci";
export type StiffTransUnit = "kN/m" | "tonf/m" | "kip/in" | "kip/ft" | "N/mm";
export type LengthSectionUnit = "mm" | "cm" | "m" | "in" | "ft";

const G = 9.80665; // gravedad / conversión tonf↔kN

// ── Stress (Force/Area). SI base: kN/m² = kPa ──
export const stressFactors: Record<StressUnit, number> = {
  "kN/m²":   1,
  "kPa":     1,
  "MPa":     1 / 1000,
  "GPa":     1 / 1e6,
  "kgf/cm²": 1 / 98.0665,
  "tonf/m²": 1 / G,
  "psi":     1 / 6.89476,
  "ksi":     1 / 6894.76,
  "kip/ft²": 1 / 47.88026,
};
export const stressUnit: State<StressUnit> = van.state(
  (localStorage.getItem("hk_stressUnit") as StressUnit) || "tonf/m²"
);
van.derive(() => { localStorage.setItem("hk_stressUnit", stressUnit.val); });

/** kN/m² → unidad UI */
export function fromKnPm2(valKnPm2: number, u?: StressUnit): number {
  return valKnPm2 * stressFactors[u ?? stressUnit.val];
}

// ── Subgrade modulus (Force/Length³). SI base: kN/m³ ──
export const subgradeFactors: Record<SubgradeUnit, number> = {
  "kN/m³":   1,
  "tonf/m³": 1 / G,
  "kgf/cm³": 1 / 9806.65,
  "kip/ft³": 1 / 157.0875,
  "pci":     1 / 271.4471,        // pound per cubic inch
};
export const subgradeUnit: State<SubgradeUnit> = van.state(
  (localStorage.getItem("hk_subgradeUnit") as SubgradeUnit) || "tonf/m³"
);
van.derive(() => { localStorage.setItem("hk_subgradeUnit", subgradeUnit.val); });
export function fromKnPm3(val: number, u?: SubgradeUnit): number {
  return val * subgradeFactors[u ?? subgradeUnit.val];
}

// ── Stiffness translational (Force/Length). SI base: kN/m ──
export const stiffTransFactors: Record<StiffTransUnit, number> = {
  "kN/m":  1,
  "tonf/m": 1 / G,
  "kip/in": 1 / 175.1268,
  "kip/ft": 1 / 14.5939,
  "N/mm":  1,                     // 1 kN/m = 1 N/mm
};
export const stiffTransUnit: State<StiffTransUnit> = van.state(
  (localStorage.getItem("hk_stiffTransUnit") as StiffTransUnit) || "tonf/m"
);
van.derive(() => { localStorage.setItem("hk_stiffTransUnit", stiffTransUnit.val); });

// ── Section length (mm/cm para sección, distinto al lengthStructure m). ──
export const sectionLengthFactors: Record<LengthSectionUnit, number> = {
  mm: 1000, cm: 100, m: 1, in: 39.3700787402, ft: 3.2808399,
};
export const lengthSectionUnit: State<LengthSectionUnit> = van.state(
  (localStorage.getItem("hk_lengthSectionUnit") as LengthSectionUnit) || "mm"
);
van.derive(() => { localStorage.setItem("hk_lengthSectionUnit", lengthSectionUnit.val); });

// ── Length structure (m/ft para Lz, Bz, Hp). ──
// Reuso DispUnit type pero conceptualmente puede ser m o ft.
export const lengthStructureUnit: State<DispUnit> = van.state(
  (localStorage.getItem("hk_lengthStructureUnit") as DispUnit) || "m"
);
van.derive(() => { localStorage.setItem("hk_lengthStructureUnit", lengthStructureUnit.val); });

// ============================================================================
// PRESETS "Consistent Units" — un click setea todo
// ============================================================================

export type UnitsPresetName = "Metric MKS" | "Metric SI" | "U.S. Imperial" | "Custom";

export interface UnitsPreset {
  force: ForceUnit;
  disp: DispUnit;
  stress: StressUnit;
  subgrade: SubgradeUnit;
  stiffTrans: StiffTransUnit;
  lengthSection: LengthSectionUnit;
  lengthStructure: DispUnit;
}

export const UNITS_PRESETS: Record<Exclude<UnitsPresetName, "Custom">, UnitsPreset> = {
  // Sudamérica/concreto/zapatas — el default actual
  "Metric MKS": {
    force: "tonf",   disp: "mm",   stress: "kgf/cm²", subgrade: "tonf/m³",
    stiffTrans: "tonf/m", lengthSection: "cm", lengthStructure: "m",
  },
  // Académico/ACI/Eurocódigo
  "Metric SI": {
    force: "kN",     disp: "mm",   stress: "MPa",     subgrade: "kN/m³",
    stiffTrans: "kN/m",  lengthSection: "mm", lengthStructure: "m",
  },
  // Imperial U.S. (AISC, ACI 318 imperial)
  "U.S. Imperial": {
    force: "kip",    disp: "in",   stress: "ksi",     subgrade: "kip/ft³",
    stiffTrans: "kip/in", lengthSection: "in", lengthStructure: "ft" as DispUnit,
  },
};

/**
 * Aplica un preset coherente. Setea las 7 unidades de display de un golpe.
 * Útil al inicio del workspace o cuando el usuario quiere "todo SI" o
 * "todo Imperial" sin configurar item por item.
 */
export function applyConsistentUnits(name: Exclude<UnitsPresetName, "Custom">) {
  const p = UNITS_PRESETS[name];
  forceUnit.val = p.force;
  dispUnit.val = p.disp;
  stressUnit.val = p.stress;
  subgradeUnit.val = p.subgrade;
  stiffTransUnit.val = p.stiffTrans;
  lengthSectionUnit.val = p.lengthSection;
  lengthStructureUnit.val = p.lengthStructure;
  localStorage.setItem("hk_unitsPreset", name);
}

/**
 * Detecta cuál preset corresponde a la combinación actual de units, o
 * "Custom" si no matchea ninguno.
 */
export function detectCurrentPreset(): UnitsPresetName {
  for (const [name, p] of Object.entries(UNITS_PRESETS)) {
    if (
      p.force === forceUnit.val && p.disp === dispUnit.val &&
      p.stress === stressUnit.val && p.subgrade === subgradeUnit.val &&
      p.stiffTrans === stiffTransUnit.val &&
      p.lengthSection === lengthSectionUnit.val &&
      p.lengthStructure === lengthStructureUnit.val
    ) return name as UnitsPresetName;
  }
  return "Custom";
}

