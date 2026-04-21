/**
 * Sistema de unidades global para el workspace Tweakpane.
 * Internamente TODO se calcula en kN, m, m³ (SI estructural).
 * La UI muestra y recibe valores en las unidades seleccionadas por el usuario.
 */
import van, { State } from "vanjs-core";

export type ForceUnit = "kN" | "tonf" | "kip";
export type DispUnit = "mm" | "cm" | "µm";

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

// ── Conversión de FUERZA ──
// SI base: kN
export const forceFactors: Record<ForceUnit, number> = {
  kN: 1,
  tonf: 9.80665,       // 1 tonf = 9.80665 kN
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

// ── Conversión de DESPLAZAMIENTO ──
// SI base: m
export const dispFactors: Record<DispUnit, number> = {
  mm: 1000,       // 1 m = 1000 mm
  cm: 100,
  "µm": 1e6,
};

/** Convierte m → unidad UI */
export function mToDisp(valM: number, unit?: DispUnit): number {
  return valM * dispFactors[unit ?? dispUnit.val];
}

export function formatDisp(valM: number): string {
  const u = dispUnit.val;
  return `${mToDisp(valM, u).toFixed(2)} ${u}`;
}

export function formatForce(valKn: number): string {
  const u = forceUnit.val;
  return `${fromKn(valKn, u).toFixed(2)} ${u}`;
}
