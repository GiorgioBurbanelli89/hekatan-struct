/**
 * PLANTILLAS — el «New Model Quick Templates» de Hekatan Struct.
 *
 * Jorge: *"una cosa son ejemplos y otra Plantillas. Haz uno de plantillas donde
 * uno decida si es pórtico plano, pórtico 3D, pórtico con aporte de la losa…
 * cuando se pone nuevo modelo… dentro de nuevo modelo, en sub categorías"*.
 *
 * ## Ejemplo ≠ Plantilla
 *
 * Un **ejemplo** es un caso cerrado: la zapata de Guerra, el Cook, el Test M.
 * Se abre para MIRAR cómo se resuelve algo, y sus números están arbitrados
 * contra otro programa.
 *
 * Una **plantilla** es un punto de partida: se elige la tipología, se dan las
 * luces y los pisos, y sale un modelo **ya montado y resuelto** sobre el que se
 * empieza a trabajar. Es lo que hace ETABS en `File → New Model`, y por eso las
 * cajas de aquí son las mismas que las suyas: rejilla en planta (nº de líneas y
 * separación en X e Y) y pisos (nº, altura típica y altura del primer piso).
 *
 * ## Las tipologías, y qué cambia de una a otra
 *
 * | plantilla | qué monta | para qué |
 * |---|---|---|
 * | **Pórtico plano (2D)** | un solo eje: columnas + vigas en X | el caso de clase, el que se puede comprobar a mano |
 * | **Pórtico 3D** | todos los ejes, vigas en X **y** en Y | el edificio desnudo, sin losa |
 * | **Pórtico + losa** | lo anterior **más la losa** como cáscara | ver el APORTE de la losa: cuánto rigidiza |
 * | **Solo rejilla** | nudos y columnas, sin vigas | arrancar y dibujar encima |
 * | **Losa plana** | solo la losa sobre columnas (sin vigas) | flat slab |
 * | **Losa con vigas de borde** | losa + vigas solo en el perímetro | el caso intermedio |
 *
 * Las tres primeras son la pregunta que hizo Jorge, y juntas responden la que
 * está detrás: **cuánto aporta la losa**. Se abre `Pórtico 3D`, se anota la
 * flecha o el periodo, se cambia a `Pórtico + losa` con los MISMOS parámetros y
 * se compara. Esa es la gracia de que sea un selector y no seis ejemplos
 * sueltos: lo único que cambia entre pasada y pasada es lo que se quiere medir.
 *
 * ## Rejilla: uniforme o a mano
 *
 * Por defecto es uniforme, como el `Uniform Grid Spacing` de ETABS. Si se
 * escriben ordenadas en `ejes X (m)` / `ejes Y (m)` —`0, 6, 12, 18`— mandan
 * esas, que es el `Custom Grid Spacing` de su segunda ventana. Igual con los
 * niveles: `alturas (m)` gana sobre `nº de pisos` + `altura típica`.
 *
 * Se escriben como texto y no como tabla a propósito: una tabla de ordenadas
 * necesita un widget entero, y `0, 6, 12, 18` se teclea más rápido de lo que se
 * rellena una tabla.
 */
import { deform, analyze, modalAnalysis, type Node, type Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

const G = 9.80665;

/** Tipologías. El número es lo que viaja en el parámetro `tipo`. */
const T_PORTICO_2D = 0;
const T_PORTICO_3D = 1;
const T_PORTICO_LOSA = 2;
const T_SOLO_REJILLA = 3;
const T_LOSA_PLANA = 4;
const T_LOSA_VIGAS_BORDE = 5;
const T_DUAL = 6;              // pórtico + losa + MUROS de corte
const T_ARRIOSTRADO = 7;       // pórtico con diagonales — el `Braced Frame
                               // [Concentric]` de SAP2000, leído del binario

/**
 * Lee ordenadas escritas a mano (`"0, 6, 12"`). Devuelve `null` si el texto no
 * sirve, y entonces manda la rejilla uniforme — nunca a medias: una lista con un
 * número mal escrito daría un modelo con un eje fuera de sitio y nadie lo vería.
 */
function ordenadas(txt: unknown): number[] | null {
  if (typeof txt !== "string") return null;
  const t = txt.trim();
  if (!t) return null;
  const v = t.split(/[,;\s]+/).filter(Boolean).map(Number);
  if (v.length < 2 || v.some((x) => !Number.isFinite(x))) return null;
  return [...new Set(v)].sort((a, b) => a - b);
}

/** Los ejes de un lado: los escritos a mano, o `n` líneas cada `s` metros. */
function ejes(txt: unknown, n: number, s: number): number[] {
  const dado = ordenadas(txt);
  if (dado) return dado;
  const k = Math.max(2, Math.round(n));
  return Array.from({ length: k }, (_, i) => i * s);
}

/** El último de una lista. `Array.at()` pide es2022 y aquí el target es menor. */
const ult = (v: number[]) => (v.length ? v[v.length - 1] : 0);

/** Los niveles, contando que el primer piso puede tener otra altura. */
function niveles(txt: unknown, pisos: number, h: number, h1: number): number[] {
  const dado = ordenadas(txt);
  if (dado) return dado[0] === 0 ? dado : [0, ...dado];
  const n = Math.max(1, Math.round(pisos));
  const z = [0, h1];
  for (let i = 1; i < n; i++) z.push(h1 + i * h);
  return z;
}

const PARAMS = {
  tipo: {
    default: T_PORTICO_3D,
    options: {
      "▦ Pórtico plano (2D)": T_PORTICO_2D,
      "🏗 Pórtico 3D": T_PORTICO_3D,
      "🧱 Pórtico + losa (aporte de losa)": T_PORTICO_LOSA,
      "⬚ Solo rejilla (nudos + columnas)": T_SOLO_REJILLA,
      "▭ Losa plana sobre columnas": T_LOSA_PLANA,
      "▣ Losa con vigas de borde": T_LOSA_VIGAS_BORDE,
      "🧱🧱 Pórtico + losa + muros (dual)": T_DUAL,
      "⟋ Pórtico arriostrado (CBF)": T_ARRIOSTRADO,
    },
    label: "Plantilla",
  },

  // ── Rejilla en planta — el «Grid Dimensions (Plan)» de ETABS ──────────────
  nx: { default: 4, min: 2, max: 12, step: 1, label: "líneas en X", folder: "📐 Rejilla (planta)" },
  ny: { default: 4, min: 2, max: 12, step: 1, label: "líneas en Y", folder: "📐 Rejilla (planta)" },
  sx: { default: 6, min: 2, max: 15, step: 0.5, label: "separación X (m)", folder: "📐 Rejilla (planta)" },
  sy: { default: 6, min: 2, max: 15, step: 0.5, label: "separación Y (m)", folder: "📐 Rejilla (planta)" },

  // ── Pisos — el «Story Dimensions» ────────────────────────────────────────
  pisos: { default: 4, min: 1, max: 20, step: 1, label: "nº de pisos", folder: "🏢 Pisos" },
  h: { default: 3.0, min: 2, max: 6, step: 0.1, label: "altura típica (m)", folder: "🏢 Pisos" },
  h1: { default: 3.5, min: 2, max: 8, step: 0.1, label: "altura 1er piso (m)", folder: "🏢 Pisos" },

  // ── Material ─────────────────────────────────────────────────────────────
  material: {
    default: 0,
    options: { "🧱 Hormigón armado": 0, "⚙ Acero": 1 },
    label: "Material del pórtico",
    folder: "🔩 Secciones",
  },

  // ── Secciones y cargas ───────────────────────────────────────────────────
  bcol: { default: 0.40, min: 0.2, max: 1.2, step: 0.05, label: "columna, lado (m)", folder: "🔩 Secciones" },
  bviga: { default: 0.30, min: 0.15, max: 0.8, step: 0.05, label: "viga, ancho (m)", folder: "🔩 Secciones" },
  hviga: { default: 0.50, min: 0.2, max: 1.2, step: 0.05, label: "viga, canto (m)", folder: "🔩 Secciones" },
  tlosa: { default: 0.20, min: 0.08, max: 0.6, step: 0.01, label: "losa, espesor (m)", folder: "🔩 Secciones" },
  tmuro: { default: 0.25, min: 0.15, max: 0.6, step: 0.05, label: "muro, espesor (m)", folder: "🔩 Secciones" },
  bdiag: { default: 0.15, min: 0.05, max: 0.4, step: 0.01, label: "diagonal, lado (m)", folder: "🔩 Secciones" },
  fc: { default: 240, min: 180, max: 500, step: 10, label: "f'c (kg/cm²)", folder: "🔩 Secciones" },
  q: { default: 5.0, min: 0, max: 20, step: 0.5, label: "carga de piso (kN/m²)", folder: "⬇ Cargas" },
  // ⚠️ Sin subdividir, cada vano es UN elemento y no hay nudo en el centro: la
  // «flecha máxima» que se lee es solo el acortamiento de las columnas, y la
  // losa parece no aportar nada. Con 2 divisiones ya hay centro de vano y la
  // comparación pórtico/pórtico+losa mide lo que se quiere medir.
  div: { default: 2, min: 1, max: 6, step: 1, label: "divisiones por vano", folder: "📐 Rejilla (planta)" },
};

export const plantillas: ExampleDef = {
  id: "plantillas",
  name: "📐 Plantillas — nuevo modelo (pórtico 2D / 3D / con losa)",
  category: "🧪 Utilidades",
  defaultShellResult: "vonMises",
  availableShellResults: ["vonMises", "bendingXX", "bendingYY", "displacementZ"],
  hasModal: true,
  params: PARAMS,

  build(p, states) {
    const tipo = Math.round(p.tipo);
    const X = ejes((p as any).ejesX, p.nx, p.sx);
    const Y = tipo === T_PORTICO_2D ? [0] : ejes((p as any).ejesY, p.ny, p.sy);
    const Z = niveles((p as any).alturas, p.pisos, p.h, p.h1);

    const conVigas = tipo !== T_SOLO_REJILLA && tipo !== T_LOSA_PLANA;
    const soloBorde = tipo === T_LOSA_VIGAS_BORDE;
    const conLosa = tipo === T_PORTICO_LOSA || tipo === T_LOSA_PLANA
                 || tipo === T_LOSA_VIGAS_BORDE || tipo === T_DUAL;
    const conMuros = tipo === T_DUAL;
    const conDiagonales = tipo === T_ARRIOSTRADO;

    // ── La malla fina ───────────────────────────────────────────────────────
    // Los EJES son donde van las columnas; entre eje y eje se meten `div-1`
    // nudos más para que las vigas y la losa tengan puntos intermedios. Sin eso
    // no hay centro de vano y la flecha que se lee no es la del vano.
    const finos = (v: number[], d: number) => {
      const out: number[] = [], esEje: boolean[] = [];
      for (let i = 0; i < v.length - 1; i++)
        for (let s = 0; s < d; s++) {
          out.push(v[i] + (v[i + 1] - v[i]) * s / d);
          esEje.push(s === 0);
        }
      out.push(v[v.length - 1]); esEje.push(true);
      return { c: out, eje: esEje };
    };
    const D = Math.max(1, Math.round(p.div));
    const fx = finos(X, D);
    const fy = Y.length > 1 ? finos(Y, D) : { c: [0], eje: [true] };
    const XF = fx.c, YF = fy.c;

    // ── Nudos: la malla fina repetida en cada nivel ─────────────────────────
    const nodes: Node[] = [];
    const idx = new Map<string, number>();
    for (let k = 0; k < Z.length; k++)
      for (let j = 0; j < YF.length; j++)
        for (let i = 0; i < XF.length; i++) {
          idx.set(`${i},${j},${k}`, nodes.length);
          nodes.push([XF[i], YF[j], Z[k]]);
        }
    const N = (i: number, j: number, k: number) => idx.get(`${i},${j},${k}`)!;

    const elements: Element[] = [];
    const clase: ("col" | "viga" | "losa" | "muro" | "diag")[] = [];
    const push = (e: number[], c: "col" | "viga" | "losa" | "muro" | "diag") => {
      elements.push(e as unknown as Element); clase.push(c);
    };

    // ── Columnas: en cada cruce de ejes, entre niveles ──────────────────────
    for (let k = 0; k < Z.length - 1; k++)
      for (let j = 0; j < YF.length; j++)
        for (let i = 0; i < XF.length; i++)
          if (fx.eje[i] && fy.eje[j]) push([N(i, j, k), N(i, j, k + 1)], "col");

    // ── Vigas: en los niveles por encima de la base ─────────────────────────
    // En «losa con vigas de borde» solo van las del perímetro; ese es justo el
    // caso intermedio entre la losa plana y el pórtico completo.
    const bordeX = (j: number) => j === 0 || j === YF.length - 1;
    const bordeY = (i: number) => i === 0 || i === XF.length - 1;
    if (conVigas)
      for (let k = 1; k < Z.length; k++) {
        // vigas en X: van por las líneas donde hay eje en Y
        for (let j = 0; j < YF.length; j++) {
          if (!fy.eje[j]) continue;
          if (soloBorde && !bordeX(j)) continue;
          for (let i = 0; i < XF.length - 1; i++) push([N(i, j, k), N(i + 1, j, k)], "viga");
        }
        // vigas en Y: por las líneas donde hay eje en X
        if (YF.length > 1)
          for (let i = 0; i < XF.length; i++) {
            if (!fx.eje[i]) continue;
            if (soloBorde && !bordeY(i)) continue;
            for (let j = 0; j < YF.length - 1; j++) push([N(i, j, k), N(i, j + 1, k)], "viga");
          }
      }

    // ── Losa: un Q4 por paño, en cada nivel ─────────────────────────────────
    if (conLosa && YF.length > 1)
      for (let k = 1; k < Z.length; k++)
        for (let j = 0; j < YF.length - 1; j++)
          for (let i = 0; i < XF.length - 1; i++)
            push([N(i, j, k), N(i + 1, j, k), N(i + 1, j + 1, k), N(i, j + 1, k)], "losa");

    // ── Diagonales (CBF) ────────────────────────────────────────────────────
    // En «V invertida» (chevron) sobre el PRIMER vano de cada fachada en X: de
    // las dos bases del vano al centro de la viga de arriba. Necesita que haya
    // nudo en el centro del vano, o sea `divisiones por vano` par — con D impar
    // no hay centro y se cae a la diagonal simple de esquina a esquina.
    if (conDiagonales) {
      const hastaX = Math.min(D, XF.length - 1);
      const medio = D % 2 === 0 ? D / 2 : -1;
      for (let j = 0; j < YF.length; j++) {
        if (!fy.eje[j]) continue;
        for (let k = 0; k < Z.length - 1; k++) {
          if (medio > 0) {
            push([N(0, j, k), N(medio, j, k + 1)], "diag");
            push([N(hastaX, j, k), N(medio, j, k + 1)], "diag");
          } else {
            push([N(0, j, k), N(hastaX, j, k + 1)], "diag");
          }
        }
      }
    }

    // ── Muros de corte (sistema DUAL) ───────────────────────────────────────
    // Van en el PRIMER vano de X, en las dos fachadas de Y, y suben toda la
    // altura. Es la disposición más común y la que hace de verdad un sistema
    // dual: el pórtico toma la gravedad y los muros la mayor parte del corte.
    if (conMuros && YF.length > 1) {
      const hastaX = Math.min(D, XF.length - 1);   // un vano, de eje a eje
      for (const j of [0, YF.length - 1])
        for (let k = 0; k < Z.length - 1; k++)
          for (let i = 0; i < hastaX; i++)
            push([N(i, j, k), N(i + 1, j, k), N(i + 1, j, k + 1), N(i, j, k + 1)], "muro");
    }

    // ── Material y secciones ────────────────────────────────────────────────
    //
    // Hormigón: E por el ACI (15100·raíz(f'c) en kg/cm² -> kN/m²), secciones
    // MACIZAS.
    //
    // Acero: E = 200 GPa, y las secciones NO pueden ser macizas — una columna de
    // acero de 40×40 cm llena pesaría 1.26 t/m y no existe. Se toman los
    // perfiles que de verdad se usan, sacados de las MISMAS dimensiones que da
    // el usuario:
    //   · columna = TUBO cuadrado de pared b/25   (un HSS típico)
    //   · viga    = perfil I, alas h/20 y alma h/40
    // Así «pórtico de acero» y «pórtico de hormigón» se comparan con la misma
    // geometría sin que uno de los dos sea un disparate.
    const acero = Math.round(p.material) === 1;
    const E = acero ? 200e6 : 15100 * Math.sqrt(p.fc) * 98.0665;
    const NU = acero ? 0.30 : 0.20;
    const Gm = E / (2 * (1 + NU));
    const RHO = (acero ? 78.5 : 24) / G;

    let Ac: number, Ic: number, Jc: number, Av: number, I33: number, I22: number, Jv: number;
    if (acero) {
      const b = p.bcol, t = b / 25, bi = b - 2 * t;
      Ac = b * b - bi * bi;
      Ic = (Math.pow(b, 4) - Math.pow(bi, 4)) / 12;
      // Bredt para sección cerrada de pared delgada: J = 4·Am²·t / perímetro.
      const Am = Math.pow(b - t, 2);
      Jc = 4 * Am * Am * t / (4 * (b - t));
      const h = p.hviga, bf = p.bviga, tf = h / 20, tw = h / 40, hw = h - 2 * tf;
      Av = 2 * bf * tf + hw * tw;
      I33 = (bf * Math.pow(h, 3) - (bf - tw) * Math.pow(hw, 3)) / 12;
      I22 = (2 * tf * Math.pow(bf, 3) + hw * Math.pow(tw, 3)) / 12;
      Jv = (2 * bf * Math.pow(tf, 3) + hw * Math.pow(tw, 3)) / 3;   // abierta
    } else {
      Ac = p.bcol * p.bcol; Ic = Math.pow(p.bcol, 4) / 12; Jc = 0.141 * Math.pow(p.bcol, 4);
      Av = p.bviga * p.hviga;
      I33 = p.bviga * Math.pow(p.hviga, 3) / 12;   // plano del CANTO (fuerte)
      I22 = p.hviga * Math.pow(p.bviga, 3) / 12;
      Jv = I33 + I22;
    }

    const m = <T,>() => new Map<number, T>();
    const elasticities = m<number>(), poissonsRatios = m<number>(), shearModuli = m<number>(),
      densities = m<number>(), areas = m<number>(), momentsOfInertiaY = m<number>(),
      momentsOfInertiaZ = m<number>(), torsionalConstants = m<number>(),
      thicknesses = m<number>(), shearAreasY = m<number>(), shearAreasZ = m<number>();
    // La losa y los muros son de HORMIGÓN aunque el pórtico sea de acero: eso es
    // un edificio mixto de verdad, no un edificio de chapa.
    const Eh = 15100 * Math.sqrt(p.fc) * 98.0665, NUh = 0.20, RHOh = 24 / G;
    clase.forEach((c, e) => {
      if (c === "losa" || c === "muro") {
        elasticities.set(e, Eh); poissonsRatios.set(e, NUh);
        shearModuli.set(e, Eh / (2 * (1 + NUh))); densities.set(e, RHOh);
        thicknesses.set(e, c === "muro" ? p.tmuro : p.tlosa);
        return;
      }
      elasticities.set(e, E); poissonsRatios.set(e, NU);
      shearModuli.set(e, Gm); densities.set(e, RHO);
      if (c === "diag") {
        // La diagonal trabaja a AXIL; se deja cuadrada maciza (o tubo si el
        // pórtico es de acero) y con su inercia real, no articulada: articularla
        // pediría releases y eso es otra cosa.
        const b = p.bdiag;
        const t = acero ? b / 20 : b, bi = acero ? b - 2 * t : 0;
        const Ad = b * b - bi * bi, Id = (Math.pow(b, 4) - Math.pow(bi, 4)) / 12;
        areas.set(e, Ad);
        momentsOfInertiaZ.set(e, Id); momentsOfInertiaY.set(e, Id);
        torsionalConstants.set(e, 2 * Id);
        shearAreasY.set(e, 5 / 6 * Ad); shearAreasZ.set(e, 5 / 6 * Ad);
        return;
      }
      const A = c === "col" ? Ac : Av;
      areas.set(e, A);
      // ⚠️ Convención CSI: `momentsOfInertiaZ` es I33 (el plano del canto, el
      // eje fuerte de una viga) y `momentsOfInertiaY` es I22. Cruzarlos deja la
      // viga flexionando por el eje débil y la flecha sale varias veces mayor,
      // sin que nada avise.
      momentsOfInertiaZ.set(e, c === "col" ? Ic : I33);
      momentsOfInertiaY.set(e, c === "col" ? Ic : I22);
      torsionalConstants.set(e, c === "col" ? Jc : Jv);
      shearAreasY.set(e, 5 / 6 * A); shearAreasZ.set(e, 5 / 6 * A);
    });

    // ── Apoyos: empotrados en la base ───────────────────────────────────────
    const supports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();
    nodes.forEach((pt, i) => {
      if (Math.abs(pt[2]) < 1e-9) supports.set(i, [true, true, true, true, true, true]);
    });
    // El pórtico plano vive en el plano X-Z: sin atar el fuera-de-plano el
    // sistema es singular, y el fallo saldría como NaN y no como aviso.
    if (tipo === T_PORTICO_2D)
      for (let n = 0; n < nodes.length; n++)
        if (!supports.has(n)) supports.set(n, [false, true, false, true, false, true]);

    // ── Cargas: la de piso, repartida donde toque ───────────────────────────
    const loads = new Map<number, [number, number, number, number, number, number]>();
    const addZ = (n: number, fz: number) => {
      const c = loads.get(n) ?? [0, 0, 0, 0, 0, 0] as any;
      c[2] -= fz; loads.set(n, c);
    };
    if (p.q > 0) {
      if (conLosa) {
        // Sobre la losa, el vector consistente del Q4: q·A/4 por esquina.
        clase.forEach((c, e) => {
          if (c !== "losa") return;
          const P = (elements[e] as unknown as number[]).map((n) => nodes[n]);
          const a = Math.hypot(P[1][0] - P[0][0], P[1][1] - P[0][1]);
          const b = Math.hypot(P[3][0] - P[0][0], P[3][1] - P[0][1]);
          for (const n of elements[e] as unknown as number[]) addZ(n, p.q * a * b / 4);
        });
      } else if (conVigas) {
        // Sin losa la carga entra por las vigas, con su ancho tributario.
        clase.forEach((c, e) => {
          if (c !== "viga") return;
          const [a, b] = elements[e] as unknown as number[];
          const L = Math.hypot(nodes[b][0] - nodes[a][0], nodes[b][1] - nodes[a][1]);
          const trib = tipo === T_PORTICO_2D ? p.sy : p.sy / 2;
          addZ(a, p.q * trib * L / 2); addZ(b, p.q * trib * L / 2);
        });
      } else {
        // Solo rejilla: no hay dónde meterla más que en los nudos de cada nivel.
        for (let k = 1; k < Z.length; k++)
          for (let j = 0; j < YF.length; j++)
            for (let i = 0; i < XF.length; i++)
              if (fx.eje[i] && fy.eje[j]) addZ(N(i, j, k), p.q * p.sx * p.sy / 4);
      }
    }

    states.nodes.val = nodes;
    states.elements.val = elements;
    states.nodeInputs.val = { supports, loads };
    states.elementInputs.val = {
      elasticities, poissonsRatios, shearModuli, densities, areas,
      momentsOfInertiaY, momentsOfInertiaZ, torsionalConstants,
      thicknesses, shearAreasY, shearAreasZ,
    };
    states.objects3D.val = [];

    try {
      states.deformOutputs.val = deform(nodes, elements, states.nodeInputs.val,
                                        states.elementInputs.val);
      states.analyzeOutputs.val = analyze(nodes, elements, states.elementInputs.val,
                                          states.deformOutputs.val);
    } catch (e) {
      console.error("[Plantillas] el solver no cerró:", e);
    }
  },

  /**
   * El modal es LA medida del aporte de la losa.
   *
   * La flecha vertical cambia poco entre `Pórtico 3D` y `Pórtico + losa` porque
   * las dos cuelgan de las mismas columnas. El PERIODO no: la losa amarra los
   * nudos de cada planta en su plano y el edificio se vuelve otra cosa. Es la
   * comparación que hay que hacer, y por eso la plantilla trae modal.
   *
   * ⚠️ Masa, no peso. `densities` guarda `24/g` en t/m³; si se pasara el peso
   * específico las frecuencias saldrían √9.81 = 3.13 veces mal.
   */
  runModal(p, states, modalPanel) {
    const nodes = states.nodes.val, elements = states.elements.val;
    const ni = states.nodeInputs.val, ei = states.elementInputs.val;
    if (!nodes?.length || !elements?.length || !ni?.supports?.size || !ei?.densities?.size) return;
    try {
      // Masa solo lateral (el `INCLUDEVERTICALMASS "No"` del mass source de
      // ETABS): sin eso los modos verticales roban cupos y ΣUx/ΣUy no llegan.
      const out = modalAnalysis(nodes, elements, ni, ei, 12, 1);
      const NOM = ["Pórtico plano (2D)", "Pórtico 3D", "Pórtico + losa",
                   "Solo rejilla", "Losa plana", "Losa con vigas de borde",
                   "Pórtico + losa + muros (dual)", "Pórtico arriostrado (CBF)"];
      const T1 = out.frequencies?.[0] ? 1 / out.frequencies[0] : NaN;
      modalPanel.render(out, {
        title: `Plantilla · ${NOM[Math.round(p.tipo)] ?? ""}`,
        properties: [
          `${nodes.length} nudos · ${elements.length} elementos`,
          `T₁ = ${T1.toFixed(4)} s   (f₁ = ${out.frequencies?.[0]?.toFixed(4)} Hz)`,
          "Compará T₁ entre «Pórtico 3D» y «Pórtico + losa»: ahí se ve el aporte",
        ],
      });
    } catch (e: any) {
      console.warn("[Plantillas] modal:", e?.message);
    }
  },

  computedLabels(p, states) {
    const tipo = Math.round(p.tipo);
    const nodes = states.nodes?.val ?? [];
    const cls = states.elements?.val ?? [];
    const d = states.deformOutputs?.val?.deformations;
    let peor = 0;
    if (d) for (const v of d.values()) peor = Math.max(peor, Math.abs(v?.[2] ?? 0));
    const X = ejes((p as any).ejesX, p.nx, p.sx);
    const Z = niveles((p as any).alturas, p.pisos, p.h, p.h1);
    return {
      "nudos / elementos": `${nodes.length} / ${cls.length}`,
      "planta (m)": `${ult(X).toFixed(1)} × ${tipo === T_PORTICO_2D ? 0
        : ult(ejes((p as any).ejesY, p.ny, p.sy)).toFixed(1)}`,
      "altura total (m)": ult(Z).toFixed(2),
      "flecha máx. (mm)": (peor * 1000).toFixed(3),
      "material": Math.round(p.material) === 1 ? "acero (tubo + perfil I)" : "hormigón",
      "para comparar": "cambia solo la Plantilla y mira cuánto aporta la losa / los muros",
    };
  },
};
