/**
 * Escalón B del banco de cáscaras: losa + vigas + columnas, contra ETABS 22.
 *
 * El modelo viene de `edificios-slab/banco_shell.py`, que sube un escalón cada
 * vez (A: losa sola · B: losa + vigas + columnas · C: 3D) y corre cada uno con
 * los TRES tipos de cáscara de ETABS. Aquí se congela el escalón B, que es el
 * que mezcla barras y cáscaras y por tanto el que destapa los problemas de
 * acoplamiento — el drilling entre otros.
 *
 * La referencia son las flechas de ETABS 22 guardadas en el propio JSON
 * (`validation/03-cascaras-muros/banco_shell_escalonB_8x8.json`), medidas con la
 * MISMA malla nudo a nudo.
 *
 * ⚠️ POR QUÉ ESTE CASO EXISTE, y es una lección cara.
 *
 * El banco vivía fuera del repo y NINGUNA suite lo tocaba. El 19-ago-2026, al
 * revisarlo a mano, salió −7.47 % en Membrane y −13.46 % en Thick contra un
 * +0.08 % y un +2.68 % de agosto, y pareció una regresión gorda. Se bisecó el
 * motor de Python commit a commit buscando al culpable.
 *
 * No había ninguno: **estaba comparando 4×4 contra una referencia de 8×8**.
 * `banco_shell.py` tiene `NX, NY = 4, 4` por defecto y el JSON se generó con
 * `--malla=8`. Con la malla correcta:
 *
 *   |          | agosto   | hoy      |
 *   |----------|----------|----------|
 *   | Membrane | +0.082 % | −0.745 % |
 *   | Thin     | +0.153 % | −0.153 % |
 *   | Thick    | +2.684 % | −2.627 % |
 *
 * O sea: no se había movido nada. Y es EXACTAMENTE la trampa que la bitácora ya
 * tenía escrita desde agosto para `calibrar_shell.py` («pone 8×8 pero contrasta
 * con el ETABS guardado, generado con 4×4; daba un 0.02 % inexistente»). Estaba
 * documentada y aun así se repitió, porque el banco no estaba en ninguna suite.
 *
 * Por eso el JSON lleva la malla dentro (`nx`, `ny`) y este caso la comprueba
 * antes de comparar nada: si el modelo no es de la malla de la referencia, el
 * caso falla en vez de dar un número bonito y falso.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { empaquetar, R } from "../lib/bundle.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
const JSON_BANCO = join(AQUI, "..", "..", "validation", "03-cascaras-muros",
                        "banco_shell_escalonB_8x8.json");

// tipo de cáscara → plateFormulations (los números de la OAPI de CSI)
const FORM = { Thick: 0, Thin: 1, Membrane: 2 };

/**
 * Límite por tipo, en % contra ETABS 22. Son LOS MEDIDOS HOY con el WASM, que
 * es el motor del producto. Y hay una deuda escrita en ellos:
 *
 *   |          | WASM (producto) | Python   | ETABS       |
 *   |----------|-----------------|----------|-------------|
 *   | Membrane |  0.745 %        |  0.745 % |  1.855e-5   |
 *   | Thin     |  6.67 %         |  0.15 %  | -1.3139e-3  |
 *   | Thick    |  9.23 %         |  2.63 %  | -1.3139e-3  |
 *
 * La MEMBRANA está alineada entre los dos motores y cierra contra ETABS. La
 * FLEXIÓN no: el motor de Python usa MZC para Shell-Thin y su propia Mindlin
 * para Shell-Thick, y el WASM usa DKE y MITC4. Son placas distintas, y contra
 * ETABS gana la de Python.
 *
 * Que el WASM falle 6.7 % aquí y solo 0.74 % en `losas-tipos` (una losa sola)
 * apunta a que lo que se rompe es el ACOPLAMIENTO barra-cáscara, que es
 * justamente lo que este escalón añade sobre el A.
 *
 * ⚠️ Estos límites son la foto de hoy, no el objetivo. El objetivo es 1-2 %, y
 * el motor de Python ya lo cumple. Cuando se arregle la flexión del WASM hay que
 * BAJARLOS, nunca subirlos.
 */
const LIMITE = { Membrane: 1.5, Thin: 7.5, Thick: 10.0 };

export const nombre = "banco-shell-escalon-b";
export const descripcion =
  "losa + vigas + columnas (escalón B) con los 3 tipos de cáscara, contra ETABS 22";

export async function correr() {
  const m = JSON.parse(readFileSync(JSON_BANCO, "utf-8"));
  const { deform } = await empaquetar(
    `export { deform } from "${R}/hekatan-fem/src/index";\n`, "bancoB");

  const filas = [{
    que: "la malla es la de la referencia (8×8), no otra",
    medido: (m.nx === 8 && m.ny === 8) ? 0 : 1, limite: 0,
    ok: m.nx === 8 && m.ny === 8,
    detalle: `${m.nx}×${m.ny} · ${m.casos.flexion.nodos.length} nudos · ${m.casos.flexion.shells.length} cáscaras`
             + " — comparar contra otra malla fue lo que simuló una regresión que no existía",
    crudo: false,
  }];

  const secDe = (b, h) => ({ A: b*h, I22: h*b**3/12, I33: b*h**3/12, J: b*h**3/12 + h*b**3/12 });

  for (const tipo of ["Membrane", "Thin", "Thick"]) {
    // ⚠️ El caso Membrane NO es el mismo modelo con otra propiedad: lleva la
    // carga EN EL PLANO (`modelo(escalon, membrana=True)` en banco_shell.py),
    // mientras los otros dos cargan a gravedad. Montar el de flexión y leerle
    // el Ux da CERO, que es lo que pasó la primera vez.
    const c = m.casos[tipo === "Membrane" ? "membrana" : "flexion"];
    const nodes = c.nodos, elements = [...c.barras, ...c.shells];
    const supports = new Map(), loads = new Map();
    for (const [k, v] of Object.entries(c.apoyos)) supports.set(+k, v);
    for (const [k, v] of Object.entries(c.cargas)) loads.set(+k, v);
    const th=new Map(), el=new Map(), po=new Map(), de=new Map(), pf=new Map();
    const ar=new Map(), iy=new Map(), iz=new Map(), tc=new Map(), sm=new Map();
    // sin `orientations`: el banco de Python tampoco las fija, y forzar
    // [0,0,1] en una columna VERTICAL es degenerado (fue el segundo fallo).
    c.barras.forEach((_, k) => {
      const s = secDe(...(c.sec[k] === "COL" ? m.COL : m.VIG));
      el.set(k, m.E); po.set(k, m.nu); sm.set(k, m.E/(2*(1+m.nu))); de.set(k, 0);
      ar.set(k, s.A); iy.set(k, s.I22); iz.set(k, s.I33); tc.set(k, s.J);
    });
    c.shells.forEach((_, j) => {
      const k = c.barras.length + j;
      th.set(k, m.t); el.set(k, m.E); po.set(k, m.nu); de.set(k, 0);
      pf.set(k, FORM[tipo]);
    });
    const d = deform(nodes, elements, { supports, loads },
      { thicknesses: th, elasticities: el, poissonsRatios: po, densities: de,
        areas: ar, momentsOfInertiaY: iy, momentsOfInertiaZ: iz,
        torsionalConstants: tc, shearModuli: sm, plateFormulations: pf });
    // Membrane trabaja en su plano (Ux); las otras dos flectan (Uz)
    const comp = tipo === "Membrane" ? 0 : 2;
    const v = d.deformations?.get(c.centro)?.[comp] ?? NaN;
    const ref = m.etabs[tipo];
    const err = Math.abs(v / ref - 1) * 100;
    filas.push({
      que: `${tipo} — flecha del centro contra ETABS`,
      medido: err, limite: LIMITE[tipo], ok: err <= LIMITE[tipo],
      detalle: `Hekatan ${v.toExponential(6)} vs ETABS ${ref.toExponential(6)}`,
    });
  }
  return filas;
}
