/**
 * Comparacion de fuerzas internas de barra contra ETABS.
 *
 * Traduccion de galpon-bodega-electoral/comparar_fuerzas.py. No se tantean
 * mapeos ni signos: se hacen las conversiones que de verdad separan a los dos
 * programas, cada una deducida del codigo o de la API.
 *
 * 1. EJES. Desde que la triada de Hekatan es la de CSI (eje1 = i->j, eje2 =
 *    plano vertical hacia arriba, eje3 = eje1 x eje2) NO hay que rotar nada:
 *    Struct y ETABS ya hablan de los mismos ejes locales.
 * 2. EXTREMO contra DIAGRAMA. analyze.ts hace f = k*u, o sea fuerzas de extremo
 *    del elemento. En el nudo i el diagrama es el negativo; en el j coincide.
 * 3. M2 lleva SIGNO CONTRARIO a la regla de la mano derecha: CSI dibuja M2 y M3
 *    los dos "positivo = sagging" en su plano, y en el plano 1-3 eso sale al
 *    reves del momento vectorial sobre el eje 2.
 *
 * Ojo con el modelo: la referencia de ETABS tiene que venir del MISMO caso de
 * carga y de la MISMA malla, con los brazos rigidos anulados.
 */
export const CAMPOS = ["P", "V2", "V3", "T", "M2", "M3"];

const r3 = (v) => v.map(x => Math.round(x * 1000) / 1000);

function clave(a, b) {
  const ra = r3(a), rb = r3(b);
  const menor = ra[0] < rb[0] || (ra[0] === rb[0] && (ra[1] < rb[1] ||
                (ra[1] === rb[1] && ra[2] <= rb[2])));
  return menor ? `${ra}|${rb}` : `${rb}|${ra}`;
}

/**
 * @param struct barras de fuerzasDeBarra() (fuerzas de extremo, ejes de Struct)
 * @param etabs  registros {i, j, P, V2, V3, T, M2, M3} de fuerzas_etabs.py
 * @returns {emparejadas, nStruct, nEtabs, campos: {campo: {pico, medio, max, maxAbs, peor}}}
 */
export function compararFuerzas(struct, etabs) {
  const porClave = new Map();
  for (const r of etabs) {
    const k = clave(r.i, r.j);
    if (!porClave.has(k)) porClave.set(k, r);
  }

  const filas = [];
  for (const s of struct) {
    const e = porClave.get(clave(s.i, s.j));
    if (!e) continue;
    const par = (campo, extremo) => (s[campo] ?? [0, 0])[extremo];
    // [P, V2, V3, T, M2, M3] en cada extremo, sin rotar
    const fz = [0, 1].map(t => [par("N", t), par("Vy", t), par("Vz", t),
                                par("T", t), par("My", t), par("Mz", t)]);
    // .cual de los dos extremos de Struct es el nudo i de ETABS?
    const mismo = String(r3(s.i)) === String(r3(e.i));
    const [ei, ej] = mismo ? [0, 1] : [1, 0];
    const diagI = fz[ei].map(v => -v);       // en el nudo i cambia de signo
    const diagJ = fz[ej].slice();
    diagI[4] = -diagI[4];                    // M2, convencion CSI
    diagJ[4] = -diagJ[4];
    const reg = {};
    CAMPOS.forEach((campo, c) => { reg[campo] = [[diagI[c], diagJ[c]], e[campo]]; });
    filas.push({ clave: clave(s.i, s.j), reg });
  }

  const campos = {};
  for (const campo of CAMPOS) {
    const pico = Math.max(...filas.map(f => Math.max(...f.reg[campo][1].map(Math.abs))));
    if (!(pico > 1e-9)) { campos[campo] = { pico: 0, medio: 0, max: 0, maxAbs: 0 }; continue; }
    let suma = 0, n = 0, peorRel = 0, peorAbs = 0, peor = null;
    for (const f of filas) {
      const [a, b] = f.reg[campo];
      for (const t of [0, 1]) {
        const d = Math.abs(a[t] - b[t]);
        const rel = d / pico * 100;
        suma += rel; n++;
        if (rel > peorRel) { peorRel = rel; peorAbs = d; peor = { barra: f.clave, extremo: t, struct: a[t], etabs: b[t] }; }
      }
    }
    campos[campo] = { pico, medio: suma / n, max: peorRel, maxAbs: peorAbs, peor };
  }
  return { emparejadas: filas.length, nStruct: struct.length, nEtabs: etabs.length, campos };
}
