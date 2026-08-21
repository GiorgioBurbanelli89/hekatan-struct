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
  // ── El mallado, como lo hace ETABS ───────────────────────────────────────
  //
  // Leído de las propias cadenas de ayuda de `ETABS.exe`:
  //
  //   «Determines how the floor is meshed. Default behavior is auto COOKIE CUT
  //    at beams and walls if membrane, auto rectangle mesh if shell/plate.»
  //   «Indicates if the elements that are cookie cut are to be further meshed
  //    to a MAX ELEMENT SIZE.»
  //
  // O sea DOS etapas: (1) cortar la losa por cada línea de viga y de muro, y
  // (2) volver a mallar cada trozo hasta un tamaño máximo. Aquí los ejes SON las
  // líneas de viga, así que la etapa 1 sale sola; esta caja es la etapa 2, y va
  // en METROS como en ETABS (`SetAutoMesh` con `MeshType = 3 · MaxSize`), no en
  // «divisiones por vano».
  //
  // ⚠️ No es un detalle de precisión: con 2 divisiones en un vano de 6 m salen
  // elementos de 3 metros y la losa se deforma a saltos — se ve en pantalla
  // antes que en ningún número. Por defecto 0.5 m, que es lo que usa la
  // referencia de ETABS de `test-m-dual` (`FLOOR_MESH = 0.5`).
  ms: { default: 0.5, min: 0.15, max: 3, step: 0.05,
        label: "malla máx. (m) — como ETABS", folder: "📐 Rejilla (planta)" },
};

export const plantillas: ExampleDef = {
  id: "plantillas",
  name: "📐 Plantillas — nuevo modelo (pórtico 2D / 3D / con losa)",
  category: "🧪 Utilidades",
  // El color por defecto es el DESPLAZAMIENTO, no von Mises. En una losa el von
  // Mises sale moteado de por sí —tiene picos en las líneas de viga y en el
  // centro de cada paño— y se lee como si la deformada estuviera mal. Con el
  // desplazamiento se ven los paños hundiéndose entre vigas, que es lo que hay
  // que ver al abrir una plantilla.
  defaultShellResult: "displacementZ",
  availableShellResults: ["displacementZ", "bendingXX", "bendingYY", "vonMises"],
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
    // Etapa 2 de ETABS: cada vano se parte en tantos trozos como haga falta
    // para que ninguno pase del tamaño máximo. Se toma el vano más corto para
    // que la malla sea uniforme y los nudos de vanos contiguos coincidan — si
    // cada vano se partiera por su cuenta, dos vanos distintos no compartirían
    // nudo en la línea que los separa y la losa quedaría cosida a medias.
    const luzMin = Math.min(
      ...X.slice(1).map((v, i) => v - X[i]),
      ...(Y.length > 1 ? Y.slice(1).map((v, i) => v - Y[i]) : [Infinity]));
    const D = Math.max(1, Math.min(24, Math.ceil(luzMin / Math.max(0.05, p.ms))));
    const fx = finos(X, D);
    const fy = Y.length > 1 ? finos(Y, D) : { c: [0], eje: [true] };
    const XF = fx.c, YF = fy.c;

    // ── Nudos: la malla fina repetida en cada nivel ─────────────────────────
    //
    // ⚠️ SIN LOSA solo se crean los nudos que van a tener algo colgando: los de
    // las líneas de eje (por donde corren vigas y columnas). Antes se creaba la
    // malla entera siempre, así que un «Pórtico 3D» salía con 6845 nudos y 1216
    // elementos — más de cinco mil nudos HUÉRFANOS, sin un solo elemento que los
    // tocara. No dan error (el solver saca los GDL sin rigidez), pero se dibujan,
    // engordan el modelo y falsean cualquier cuenta que mire «nudos».
    const hayLosaAqui = conLosa && YF.length > 1;
    /**
     * ¿Va a colgar algo de este nudo? Es lo único que decide si existe.
     *
     *  · un **cruce de ejes** siempre: ahí nace una columna;
     *  · un nudo de una **línea de eje** solo por encima de la base, y solo si
     *    hay vigas: es un tramo de viga;
     *  · cualquier otro solo si hay **losa** que lo sujete, y tampoco en la base.
     *
     * En la BASE solo viven los cruces. Antes se creaba la malla fina completa
     * en todos los niveles, así que la planta de cimentación entera —1353 nudos
     * en «Pórtico + losa»— se quedaba sin un solo elemento.
     */
    // ⚠️ Los MUROS y las DIAGONALES arrancan en la base, así que sus nudos
    // tienen que existir tambien en k = 0 aunque no sean cruce de ejes. Sin
    // esto, `N(i, j, 0)` devolvía `undefined` para los nudos intermedios del
    // muro, el elemento salía con un nudo inexistente y `analyze` reventaba en
    // `computeQ4ShellStresses` — el `deform` en cambio seguía y daba un número.
    const hastaMuro = Math.min(D, XF.length - 1);
    const medioD = D % 2 === 0 ? D / 2 : -1;
    // ⚠️ El MURO ocupa toda la banda, así que necesita todos sus nudos. Las
    // DIAGONALES en cambio solo tocan tres columnas —los dos extremos del vano y
    // el centro de la viga—, y mantener viva la banda entera dejaba 22 nudos
    // huérfanos en el arriostrado. Cada uno pide lo suyo, ni más ni menos.
    const enMuro = (i: number, j: number, k: number) => {
      if (j !== 0 && j !== YF.length - 1) return false;
      if (conMuros) return i <= hastaMuro;                // el muro ocupa la banda entera
      if (!conDiagonales) return false;
      // La V invertida arranca en las ESQUINAS de abajo y sube al centro de la
      // viga de arriba: el nudo del centro solo hace falta de la primera planta
      // para arriba. Mantenerlo vivo en la base dejaba 2 huérfanos.
      if (i === 0 || i === hastaMuro) return true;
      return medioD > 0 && i === medioD && k > 0;
    };
    const vive = (i: number, j: number, k: number) => {
      const cruce = fx.eje[i] && fy.eje[j];
      if (cruce) return true;
      if (enMuro(i, j, k)) return true;                // muro o diagonal: hasta abajo
      if (k === 0) return false;                       // la base: solo columnas
      if (hayLosaAqui) return true;                    // la losa sujeta todo
      if (conVigas && (fx.eje[i] || fy.eje[j])) return true;   // tramo de viga
      return false;
    };
    const nodes: Node[] = [];
    const idx = new Map<string, number>();
    for (let k = 0; k < Z.length; k++)
      for (let j = 0; j < YF.length; j++)
        for (let i = 0; i < XF.length; i++) {
          if (!vive(i, j, k)) continue;
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
    // ⚠️ Aquí el pórtico plano llevaba una atadura fuera-de-plano en TODOS los
    // nudos, puesta «por si acaso» contra una singularidad. Sobraba y encima
    // engañaba: el visor dibuja un marcador de apoyo por cada nudo restringido,
    // así que el pórtico salía con un triángulo azul en cada junta y parecía
    // apoyado entero. Lo cazó Jorge mirando la pantalla — *«¿qué es ese
    // triángulo? ya hay nodos blancos, ¿qué es eso?»*.
    //
    // No hacía falta: las barras son vigas 3D con rigidez en los seis GDL y las
    // bases están empotradas, así que el pórtico no se cae fuera de su plano.
    // Medido: 35/35 nudos con apoyo -> 7/35, y la flecha sale IDÉNTICA
    // (3.2266 mm) sin un solo NaN.
    //
    // La regla: una atadura «por si acaso» no es gratis. Cambia lo que el
    // usuario ve y, si de verdad hiciera falta, taparía el fallo en vez de
    // enseñarlo.

    // ── Cargas: la de piso, repartida donde toque ───────────────────────────
    const loads = new Map<number, [number, number, number, number, number, number]>();
    const addZ = (n: number, fz: number) => {
      const c = loads.get(n) ?? [0, 0, 0, 0, 0, 0] as any;
      c[2] -= fz; loads.set(n, c);
    };
    // ⚠️ Mandato: la suma de lo aplicado tiene que ser `q · A_planta · nº pisos`,
    // salga por donde salga. Antes no cuadraba y nadie lo veía:
    //   · con vigas y sin losa se cargaban las de X y las de Y, CADA UNA con
    //     medio ancho tributario — y eso no es una partición del área: sale un
    //     33 % de más;
    //   · «solo rejilla» repartía `q·sx·sy/4` por nudo sin mirar si el nudo era
    //     de esquina, de borde o interior: un 56 % de MENOS.
    // Ahora se reparte PAÑO a PAÑO, que es lo único que garantiza el total.
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
        // Sin losa, cada PAÑO reparte su carga entre las cuatro vigas que lo
        // rodean —la mitad a las dos de X y la mitad a las dos de Y— y dentro de
        // cada viga se extiende por sus tramos. Así el total es exactamente
        // `q · A_paño` y no depende de cuántas veces se subdivida.
        const ejeX: number[] = [], ejeY: number[] = [];
        XF.forEach((_, i) => { if (fx.eje[i]) ejeX.push(i); });
        YF.forEach((_, j) => { if (fy.eje[j]) ejeY.push(j); });
        const enTramo = (a: number, b: number, k: number, fila: number, dirX: boolean, F: number) => {
          // reparto uniforme sobre los sub-nudos del tramo (media a cada extremo
          // de cada trocito, o sea trapecio de nudos: extremos F/2n, interiores F/n)
          const n = b - a;
          for (let t = a; t < b; t++) {
            const n1 = dirX ? N(t, fila, k) : N(fila, t, k);
            const n2 = dirX ? N(t + 1, fila, k) : N(fila, t + 1, k);
            addZ(n1, F / n / 2); addZ(n2, F / n / 2);
          }
        };
        const pisos2 = Z.length - 1;
        if (tipo !== T_PORTICO_2D)
        for (let k = 1; k <= pisos2; k++)
          for (let jj = 0; jj < ejeY.length - 1; jj++)
            for (let ii = 0; ii < ejeX.length - 1; ii++) {
              const i0 = ejeX[ii], i1 = ejeX[ii + 1], j0 = ejeY[jj], j1 = ejeY[jj + 1];
              const A = (XF[i1] - XF[i0]) * (YF[j1] - YF[j0]);
              const F = p.q * A;                       // lo que pesa el paño
              enTramo(i0, i1, k, j0, true, F / 4);     // viga X de abajo
              enTramo(i0, i1, k, j1, true, F / 4);     // viga X de arriba
              enTramo(j0, j1, k, i0, false, F / 4);    // viga Y de la izquierda
              enTramo(j0, j1, k, i1, false, F / 4);    // viga Y de la derecha
            }
        // El pórtico plano no tiene paños: es una sola fila de vanos, y su ancho
        // tributario es el de la crujía que representa.
        if (tipo === T_PORTICO_2D)
          for (let k = 1; k <= pisos2; k++)
            for (let ii = 0; ii < ejeX.length - 1; ii++) {
              const i0 = ejeX[ii], i1 = ejeX[ii + 1];
              enTramo(i0, i1, k, 0, true, p.q * (XF[i1] - XF[i0]) * p.sy);
            }
      } else {
        // Solo rejilla: no hay dónde meterla más que en los nudos de cada nivel.
        // Solo rejilla: no hay vigas ni losa, así que la carga del paño va a sus
        // cuatro esquinas. Un nudo interior recibe cuarto de los cuatro paños
        // que toca (= un paño entero) y uno de esquina solo un cuarto — que es
        // justo su área tributaria, y el total vuelve a ser `q·A`.
        const ejeX: number[] = [], ejeY: number[] = [];
        XF.forEach((_, i) => { if (fx.eje[i]) ejeX.push(i); });
        YF.forEach((_, j) => { if (fy.eje[j]) ejeY.push(j); });
        for (let k = 1; k < Z.length; k++)
          for (let jj = 0; jj < ejeY.length - 1; jj++)
            for (let ii = 0; ii < ejeX.length - 1; ii++) {
              const i0 = ejeX[ii], i1 = ejeX[ii + 1], j0 = ejeY[jj], j1 = ejeY[jj + 1];
              const F = p.q * (XF[i1] - XF[i0]) * (YF[j1] - YF[j0]) / 4;
              addZ(N(i0, j0, k), F); addZ(N(i1, j0, k), F);
              addZ(N(i1, j1, k), F); addZ(N(i0, j1, k), F);
            }
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
      "malla": (() => {
        const XX = ejes((p as any).ejesX, p.nx, p.sx);
        const YY = ejes((p as any).ejesY, p.ny, p.sy);
        const luz = Math.min(...XX.slice(1).map((v, i) => v - XX[i]),
                             ...YY.slice(1).map((v, i) => v - YY[i]));
        const d = Math.max(1, Math.min(24, Math.ceil(luz / Math.max(0.05, p.ms))));
        return `${d} div/vano · elemento ${(luz / d).toFixed(2)} m (tope ${p.ms} m)`;
      })(),
      "para comparar": "cambia solo la Plantilla y mira cuánto aporta la losa / los muros",
    };
  },
};
