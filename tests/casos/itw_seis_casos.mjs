/**
 * Los seis casos ITW del deploy, vigilados: que corran, que den el número y que
 * CONVERJAN.
 *
 * Los ejemplos del workspace no los ve nadie hasta que alguien abre la página, y
 * para entonces un cambio en el elemento ya lleva semanas dentro. Este caso los
 * construye por CLI —el mismo `ExampleDef` que carga el navegador— y compara
 * contra la referencia de cada banco.
 *
 * ## Lo que se vigila, y por qué son tres cosas distintas
 *
 * 1. **Los tres bancos planos contra su referencia.** Test I tiene solución
 *    exacta (flexión pura), Test II y Cook tienen la del paper.
 * 2. **La CONVERGENCIA del hemisferio y de Cook.** Esto es lo importante: el
 *    elemento **bloquea** en malla gruesa (el *membrane locking* del §4 del
 *    paper) y en el hemisferio a 8×8 da −37 %. Ese número, solo, parece un
 *    error. Con la serie entera se ve que no lo es: baja monótonamente hasta
 *    −2.2 % a 20×20. Lo que hay que vigilar es **que siga bajando**, no que sea
 *    pequeño.
 * 3. **Que los dos muros resuelvan.** No tienen referencia externa, pero sí una
 *    comprobación interna que vale: en el muro+frame, el giro de la esquina por
 *    el vuelo de la viga más el voladizo puro tiene que dar la flecha de la
 *    punta. Si eso no cuadra, el momento no está entrando por el drilling.
 *
 * ## ⚠️ El hemisferio NO coincide con el `.cpd`, y está bien que no coincida
 *
 * El `.cpd` didáctico anota «Calcpad = MATLAB = Python (8×8 = 0.0894)», o sea
 * −5 % donde este motor da −37 %. La diferencia es la **cuadratura**: el `.cpd`
 * integra **2×2** y el motor **3×3**, que es la ec. (33) del paper.
 *
 * El 2×2 desbloquea, pero deja **4 modos de energía nula** — y se ve en el
 * propio `.cpd`, que antes de resolver tiene que parchear a mano las diagonales
 * casi nulas de la K (`si K(ii,ii) < 1e-9·dmx entonces súmale 0.001·dmx`). Ese
 * parche es la firma del mecanismo. Ya se probó el 2×2 aquí y se descartó por
 * eso mismo (ver `CLAUDE.md`, «Tres cosas que NO hay que volver a probar»).
 *
 * O sea: tres implementaciones de acuerdo **no** hacen bueno un número si las
 * tres integran igual y esa integración deja un mecanismo.
 */
import { empaquetar, R } from "../lib/bundle.mjs";

export const nombre = "itw-seis-casos";
export const descripcion =
  "los 6 casos ITW del deploy: referencia, convergencia y que los muros resuelvan";

// Medido 2026-08-20 con este mismo motor, malla por defecto de cada ejemplo.
const REF = {
  "itw-test-1-flexion-pura": { ref: 3.0,    lim: 0.5 },
  "itw-test-2-voladizo":     { ref: 0.3553, lim: 2.0 },
  "itw-test-3-cook":         { ref: 23.91,  lim: 6.0 },
};

const van = (v) => ({ val: v });
const estados = () => ({
  nodes: van([]), elements: van([]), nodeInputs: van({}), elementInputs: van({}),
  deformOutputs: van({}), analyzeOutputs: van({}), objects3D: van([]),
});
const porDefecto = (ex) =>
  Object.fromEntries(Object.entries(ex.params).map(([k, d]) => [k, d.default]));

function correrEj(ex, extra = {}) {
  const p = { ...porDefecto(ex), ...extra };
  const st = estados();
  ex.build(p, st);
  return { p, st, lab: ex.computedLabels ? ex.computedLabels(p, st) : {} };
}

const num = (s) => parseFloat(String(s).replace("%", "").trim());

export async function correr() {
  const { itwTodos } = await empaquetar(
    `export { itwTodos } from "${R}/examples/src/itw/itwTests";\n`, "itwcasos");
  const de = (id) => itwTodos.find((e) => e.id === id);
  const filas = [];

  // ── 1 · los tres bancos planos contra su referencia ────────────────────
  for (const [id, { ref, lim }] of Object.entries(REF)) {
    const { lab } = correrEj(de(id));
    const err = Math.abs(num(lab["error"]));
    filas.push({
      que: `${id} vs ${ref}`,
      medido: err, limite: lim, ok: err <= lim,
      detalle: `${lab["δ calculado"]} — ${lab["por qué"] ?? ""}`,
    });
  }

  // ── 2 · convergencia: lo que separa "bloquea" de "está roto" ───────────
  for (const [id, mallas, tope] of [["itw-test-4-hemisferio", [8, 12, 16, 20], 3.0],
                                    ["itw-test-3-cook", [4, 8, 16, 32], 0.5]]) {
    const ex = de(id);
    const errs = mallas.map((m) =>
      Math.abs(num(correrEj(ex, { na: m, nb: m }).lab["error"])));
    // Monotona: cada malla mas fina tiene que estar MAS cerca que la anterior.
    const baja = errs.every((e, i) => i === 0 || e < errs[i - 1] + 1e-9);
    filas.push({
      que: `${id} · el error BAJA al refinar`,
      medido: baja ? 1 : 0, limite: 1, ok: baja,
      detalle: mallas.map((m, i) => `${m}x${m}:${errs[i].toFixed(2)}%`).join("  "),
      crudo: true,
    });
    filas.push({
      que: `${id} · en la malla mas fina (${mallas.at(-1)}x${mallas.at(-1)})`,
      medido: errs.at(-1), limite: tope, ok: errs.at(-1) <= tope,
      detalle: "si esto sube, el elemento dejo de converger — no es que 'bloquee'",
    });
  }

  // ── 3 · los dos muros: que resuelvan y que el momento entre por rz ─────
  const acople = correrEj(de("itw-muro-acople"));
  const dxAcople = num(acople.lab["deriva de la cabeza (mm)"]);
  filas.push({
    que: "itw-muro-acople · resuelve y da deriva finita",
    medido: dxAcople, limite: 100, ok: Number.isFinite(dxAcople) && dxAcople > 0,
    detalle: `${dxAcople} mm — giro de la cabeza ${acople.lab["giro de la cabeza (drilling)"]}`,
    crudo: true,
  });

  const frame = correrEj(de("itw-muro-frame"));
  const p = frame.p;
  const dPunta = num(frame.lab["δ punta (mm)"]) / 1000;
  const soloViga = num(frame.lab["voladizo puro (mm)"]) / 1000;
  const giro = Math.abs(parseFloat(frame.lab["giro de la esquina (drilling)"]));
  // La comprobacion que de verdad prueba el drilling: la flecha de la punta
  // tiene que ser el voladizo puro MAS lo que aporta el giro de la esquina por
  // el vuelo. Si el momento no entrara por `rz`, el giro seria cero y esto no
  // cerraria — o el sistema seria singular y saldria NaN.
  const predicho = soloViga + giro * p.L_b;
  const dif = Math.abs(dPunta / predicho - 1) * 100;
  filas.push({
    que: "itw-muro-frame · δ punta = voladizo puro + giro·L (entra por el drilling)",
    medido: dif, limite: 5.0, ok: dif <= 5.0,
    detalle: `${(dPunta * 1000).toFixed(4)} mm vs ${(predicho * 1000).toFixed(4)} mm`
           + ` (voladizo ${(soloViga * 1000).toFixed(4)} + giro ${giro.toExponential(3)} x ${p.L_b})`,
  });

  return filas;
}
