#!/usr/bin/env node
/**
 * .QUE GDL de giro no los sujeta NADIE?
 *
 *   node cli/gdl_sin_rigidez.mjs <modelo.e2k>
 *
 * Un modelo que resuelve y devuelve 1e15 mm no esta desconectado: tiene un
 * MECANISMO. Y el sospechoso son los releases: una barra con `M2I M2J M3I M3J`
 * no transmite momento por ninguna de sus dos caras, o sea que **no aporta
 * rigidez de giro a sus nudos**. Si a un nudo solo llegan barras asi, sus tres
 * giros quedan libres.
 *
 * Aqui se cuenta eso, nudo a nudo y giro a giro, SIN tocar el solver: se mira
 * quien aporta rigidez de flexion/torsion a cada nudo.
 *
 *   · una CASCARA aporta los dos giros de su plano (y el normal si lleva
 *     drilling, que el ITW si lo lleva)
 *   · una BARRA aporta los giros de la cara que NO tiene liberada
 *   · un APOYO con el giro coartado lo aporta todo
 *
 * Es la misma idea que `getZerosIndices` de `deform.cpp`, pero contada por
 * elemento en vez de por diagonal de la K: asi se puede decir QUE barra y QUE
 * release lo provoca, que es lo que hace falta para arreglarlo.
 */
import { readFileSync } from "node:fs";
import { empaquetar, R } from "../tests/lib/bundle.mjs";

const mod = await empaquetar(`
const g = globalThis; g.window = g;
g.document = { createElement: () => ({ style:{}, getContext:()=>null }), body:{}, head:{},
  querySelector:()=>null, querySelectorAll:()=>[], addEventListener(){}, getElementById:()=>null };
g.localStorage = { getItem:()=>null, setItem(){}, removeItem(){} };
g.addEventListener = () => {}; g.matchMedia = () => ({ matches:false, addEventListener(){} });
const { parseE2k } = await import("${R}/examples/src/shared/e2kParser");
const { coserModelo } = await import("${R}/examples/src/shared/e2kCoser");

export function mirar(t) {
  const m = parseE2k(t);
  coserModelo(m);
  const N = m.nodes, els = m.elements;
  const rel = m.elementInputs.momentReleases ?? new Map();
  const sup = m.nodeInputs.supports ?? new Map();

  // giroSujeto[nudo] = [rx, ry, rz] — .aporta ALGUIEN rigidez a ese giro?
  const giro = new Map();
  const marca = (n, i) => { if (!giro.has(n)) giro.set(n, [false,false,false]); giro.get(n)[i] = true; };
  const marcaTodos = (n) => { marca(n,0); marca(n,1); marca(n,2); };

  for (const [n, v] of sup) for (let i = 0; i < 3; i++) if (v[3+i]) marca(n, i);

  els.forEach((el, e) => {
    if (el.length > 2) { for (const n of el) marcaTodos(n); return; }  // cascara: drilling incluido
    const r = rel.get(e);
    const a = N[el[0]], b = N[el[1]];
    if (!a || !b) return;
    if (!r) { marcaTodos(el[0]); marcaTodos(el[1]); return; }
    // Los ejes locales de CSI: 1 = i->j, 2 = en el plano vertical hacia arriba,
    // 3 = 1x2. Se necesitan porque un release es LOCAL y el GDL es global.
    const L = Math.hypot(b[0]-a[0], b[1]-a[1], b[2]-a[2]) || 1;
    const e1 = [(b[0]-a[0])/L, (b[1]-a[1])/L, (b[2]-a[2])/L];
    const D = Math.hypot(e1[0], e1[1]);
    const e2 = D < 1e-9 ? [1,0,0] : [-e1[1]/D, e1[0]/D, 0];
    const e3 = D < 1e-9 ? [0,1,0] : [-e1[0]*e1[2]/D, -e1[1]*e1[2]/D, D];
    const ejes = [e1, e2, e3];
    // .Que aporta esta barra, y a que cara?
    //
    // ⚠️ LA TORSION ES DISTINTA: liberada en UNA cara, la barra se queda sin
    // rigidez torsional en LAS DOS (es un eje libre por un extremo). La flexion
    // no: con M2 liberado en I la barra sigue dando rigidez en J, que es una
    // viga apoyada-empotrada. Contarlas igual fue mi primer error y daba CERO
    // nudos sueltos donde si los hay.
    const torsion = !(r[3] || r[9]);
    const aporta = (cara) => {         // cara 0 = I, 1 = J
      const o = cara * 6;
      return [torsion, !r[o+4], !r[o+5]];   // local 1, 2, 3
    };
    for (const cara of [0, 1]) {
      const n = el[cara];
      const ap = aporta(cara);
      for (let k = 0; k < 3; k++) {
        if (!ap[k]) continue;
        // Un eje local sujeta los GDL globales sobre los que proyecta.
        for (let gI = 0; gI < 3; gI++)
          if (Math.abs(ejes[k][gI]) > 1e-6) marca(n, gI);
      }
    }
  });

  const usado = new Set(); for (const el of els) for (const n of el) usado.add(n);
  const sueltos = [];
  for (const n of usado) {
    const gsx = giro.get(n) ?? [false,false,false];
    const libres = gsx.map((v,i)=>v?null:i).filter(v=>v!==null);
    if (libres.length) sueltos.push({ n, libres, nombre: m.nodeNames?.[n] ?? String(n) });
  }
  // .Que barras son las culpables?
  const culpables = new Map();
  els.forEach((el, e) => {
    if (el.length !== 2) return;
    const r = rel.get(e); if (!r) return;
    const torsion = !(r[3] || r[9]);
    const nada = !torsion && r[4] && r[5] && r[10] && r[11];
    if (!nada) return;
    const nom = (m.elementNames?.[e] ?? String(e)).replace(/-\\d+$/, "");
    culpables.set(nom, (culpables.get(nom) || 0) + 1);
  });
  return { nudos: usado.size, sueltos: sueltos.length,
           muestra: sueltos.slice(0, 8),
           barrasSinGiro: [...culpables.values()].reduce((a,b)=>a+b,0),
           objetos: culpables.size };
}`, "gdl-sin-rigidez");

const r = mod.mirar(readFileSync(process.argv[2], "utf-8"));
console.log(`nudos usados ................ ${r.nudos}`);
console.log(`nudos con algun GIRO LIBRE .. ${r.sueltos}   <- cada uno es un mecanismo`);
console.log(`barras que no aportan giro .. ${r.barrasSinGiro}  (${r.objetos} objetos del .e2k)`);
console.log(`   (una barra con T/M2/M3 liberados en LAS DOS caras no transmite momento)`);
for (const s of r.muestra)
  console.log(`   ${String(s.nombre).padEnd(22)} giros libres: ${s.libres.map(i => "RXRYRZ".slice(i*2, i*2+2)).join(" ")}`);
