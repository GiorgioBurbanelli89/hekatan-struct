/**
 * Mezanine (1 piso acero con deck) — variante del edificio aporticado con defaults
 * específicos: acero, secundarias en dir corta, 1 solo piso.
 */
import type { ExampleDef } from "../workspace/exampleRegistry";
import { edificioAporticado } from "../edificio-aporticado/edificioAporticado";

const overrides: Record<string, number> = {
  nVanosX: 3, nVanosY: 2,
  nPisos:  1,
  spanX:   6, spanY: 5,
  hPiso:   4.5,  // altura más grande típica de mezanine
  matCol:  1, matViga: 1,    // acero W
  colSize: 0.25,
  vigaB:   0.20, vigaH: 0.40,
  vSecOn:  1, nVSec: 3, vSecDir: 1,   // secundarias en Y (dir corta)
  slabOn:  1, slabT: 0.08,            // deck + concreto
  nSubViga: 3,                         // mesh fino para losa
};

const cloneParams = (): typeof edificioAporticado.params => {
  const out: any = {};
  for (const [k, v] of Object.entries(edificioAporticado.params)) {
    out[k] = { ...v, default: (overrides as any)[k] ?? v.default };
  }
  return out;
};

export const mezanine: ExampleDef = {
  ...edificioAporticado,
  id: "mezanine",
  name: "Mezanine (1 piso acero + deck)",
  params: cloneParams(),
};
