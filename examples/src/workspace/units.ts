/**
 * Sistema de unidades global para el workspace Tweakpane.
 *
 * CONVENCIÓN INTERNA: Todos los cálculos y la API de awatif-fem usan
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

export const forceUnit: State<ForceUnit> = van.state(
  (localStorage.getItem("hk_forceUnit") as ForceUnit) || "kN"
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
