/**
 * Edificio de Acero — variante del edificio aporticado:
 * columnas y vigas W de acero, con vigas secundarias + losa colaborante.
 * Reutiliza el build() del edificio-aporticado con defaults modificados.
 */
import type { ExampleDef } from "../workspace/exampleRegistry";
import { edificioAporticado } from "../edificio-aporticado/edificioAporticado";

// Override de defaults que caracterizan "edificio de acero"
const overrides: Record<string, number> = {
  matCol:  1,    // Acero W
  matViga: 1,    // Acero W
  colSize: 0.30, // perfil cuadrado HSS equivalente 30×30 cm
  vigaB:   0.20, // ala de W típica
  vigaH:   0.45, // canto W típica
  vSecOn:  1,    // vigas secundarias ON
  nVSec:   2,
  vSecDir: 0,    // en X
  slabOn:  1,    // losa colaborante (deck)
  slabT:   0.08, // 8 cm losa colaborante
};

// Clonar params del edificio base y sobrescribir los defaults
const cloneParams = (): typeof edificioAporticado.params => {
  const out: any = {};
  for (const [k, v] of Object.entries(edificioAporticado.params)) {
    out[k] = { ...v, default: (overrides as any)[k] ?? v.default };
  }
  return out;
};

export const edifAcero: ExampleDef = {
  ...edificioAporticado,
  id: "edif-acero",
  name: "Edificio de Acero (W + deck)",
  params: cloneParams(),
};
