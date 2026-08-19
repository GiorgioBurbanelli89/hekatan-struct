/**
 * SAP2000 .s2k File Exporter (v24 TABLE format)
 * Format matches SAP2000 v24.1.0 native .$2k export exactly.
 *
 * Soporta:
 *  - Frames + shells homogeneos (Shell-Thin / Shell-Thick)
 *  - Shell-Layered: pasar `layeredSection` con array de capas y este modulo
 *    genera la tabla "AREA SECTION PROPERTY LAYERS" que SAP parsea
 *    correctamente al hacer File.OpenFile(*.s2k) (workaround del bug
 *    SetShellLayer_1 en COM/PowerShell).
 *  - Area loads uniformes (q presion sobre placa)
 */
import type { Node, Element, NodeInputs, ElementInputs } from "hekatan-fem";

/** Capa de un Shell-Layered. */
export interface S2kLayer {
  name: string;
  distance: number;     // desde mid-plane (m). + = arriba, - = abajo
  thickness: number;    // m
  material: string;     // nombre material (debe estar en `materials`)
  angle?: number;       // rad, default 0
  numIntPts?: number;   // Gauss thru-thickness, default 3
}

export interface S2kLayeredSection {
  name: string;          // ej. "BIMETAL"
  totalThickness: number;
  layers: S2kLayer[];
  /** Materiales con E/nu propios (ademas de los implicitos en elementInputs) */
  materials?: Array<{ name: string; E: number; nu: number; rho?: number }>;
}

export interface S2kAreaLoad {
  /** Indice del elemento Q4 (0-based en hekatan) */
  elementIdx: number;
  loadPattern: string;   // "DEAD", "Q", etc.
  value: number;         // kN/m² (positivo = aplicacion, signo segun Dir)
  dir?: number;          // 10 = Gravity, 6 = +Z proyect, default 10
}

export interface S2kExportInput {
  nodes: Node[];
  elements: Element[];
  nodeInputs: NodeInputs;
  elementInputs: ElementInputs;
  title?: string;
  units?: { force: string; length: string };
  /**
   * Si se provee, los elementos shell usaran esta seccion layered en lugar
   * de la seccion homogenea derivada de `elementInputs.thicknesses`.
   * Aplica a TODOS los shells (mismo laminado).
   */
  layeredSection?: S2kLayeredSection;
  /** Cargas uniformes sobre areas (q presion). */
  areaLoads?: S2kAreaLoad[];
  /** Multiplicador de peso propio del LoadPat DEAD. Default 1 (SAP convencional). */
  selfWtMult?: number;
}

export function exportS2k(input: S2kExportInput): string {
  const { nodes, elements, nodeInputs, elementInputs } = input;
  const units = input.units || { force: "KN", length: "m" };
  const title = input.title || "Awatif Model";
  const L: string[] = [];

  const push = (s: string) => L.push(s);
  const blank = () => L.push(" ");

  // Header (same as SAP2000)
  push(`File ${title}.$2k was saved on m/d/yy at h:mm:ss`);
  blank();

  // ── ACTIVE DEGREES OF FREEDOM ──
  push(`TABLE:  "ACTIVE DEGREES OF FREEDOM"`);
  push(`   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes`);
  blank();

  // ── Separate frames and shells ──
  const frameIdx: number[] = [];
  /**
   * Clave e identidad del material de un elemento. Una sola funcion para que
   * las tres partes del fichero (barras, cascaras y la tabla de materiales)
   * nombren el material IGUAL — si no, el .s2k referencia un material que no
   * existe y SAP lo sustituye en silencio por el suyo por defecto.
   *
   * El Poisson sale de `poissonsRatios` (que es donde lo ponen las cascaras) y
   * solo se deduce de `shearModuli` cuando no esta declarado (las barras).
   */
  const matDe = (i: number) => {
    const E = elementInputs.elasticities?.get(i) || 0;
    const nuDecl = elementInputs.poissonsRatios?.get(i);
    const Gdecl = elementInputs.shearModuli?.get(i) || 0;
    const nu = nuDecl !== undefined ? nuDecl
             : (E > 0 && Gdecl > 0 ? Math.max(0, Math.min(0.5, E / (2 * Gdecl) - 1)) : 0.2);
    const G = Gdecl > 0 ? Gdecl : (E > 0 ? E / (2 * (1 + nu)) : 0);
    const rho = elementInputs.densities?.get(i) || 0;
    return { E, nu, G, rho, key: `MAT_${Math.round(E)}_n${nu.toFixed(4)}` };
  };

  const shellIdx: number[] = [];
  elements.forEach((el, i) => {
    if (el.length === 2) frameIdx.push(i);
    else shellIdx.push(i);
  });

  // ── CONNECTIVITY - FRAME ──
  if (frameIdx.length > 0) {
    push(`TABLE:  "CONNECTIVITY - FRAME"`);
    for (const i of frameIdx) {
      const el = elements[i];
      push(`   Frame=${i + 1}   JointI=${el[0] + 1}   JointJ=${el[1] + 1}   IsCurved=No`);
    }
    blank();
  }

  // ── CONNECTIVITY - AREA ──
  if (shellIdx.length > 0) {
    push(`TABLE:  "CONNECTIVITY - AREA"`);
    for (const i of shellIdx) {
      const el = elements[i];
      const jParts = el.map((n, j) => `Joint${j + 1}=${n + 1}`).join("   ");
      push(`   Area=${i + 1}   NumJoints=${el.length}   ${jParts}`);
    }
    blank();
  }

  // ── COORDINATE SYSTEMS ──
  push(`TABLE:  "COORDINATE SYSTEMS"`);
  push(`   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0`);
  blank();

  // ── DATABASE FORMAT TYPES ──
  push(`TABLE:  "DATABASE FORMAT TYPES"`);
  push(`   UnitsCurr=Yes   OverrideE=No`);
  blank();

  // ── Collect unique frame sections ──
  const frameSecs = new Map<string, { A: number; Iz: number; Iy: number; J: number; b: number; h: number; matKey: string; As2: number; As3: number }>();
  const elemToFrameSec = new Map<number, string>();
  for (const i of frameIdx) {
    const A = elementInputs.areas?.get(i) || 0;
    const Iz = elementInputs.momentsOfInertiaZ?.get(i) || 0;
    const Iy = elementInputs.momentsOfInertiaY?.get(i) || 0;
    const J = elementInputs.torsionalConstants?.get(i) || 0;
    const E = elementInputs.elasticities?.get(i) || 0;
    const matKey = matDe(i).key;
    // ⚠️ Las AREAS DE CORTANTE entran en la CLAVE de la seccion. Dos perfiles
    // con la misma A e Iz pero distinta alma NO son la misma seccion, y si se
    // funden se pierde el dato que mas ablanda.
    const As2r = elementInputs.shearAreasZ?.get(i) ?? 0;   // As2 -> V2 (con I33)
    const As3r = elementInputs.shearAreasY?.get(i) ?? 0;   // As3 -> V3 (con I22)
    const key = `A${A.toPrecision(6)}_Iz${Iz.toPrecision(6)}_s${As2r.toPrecision(6)}_${As3r.toPrecision(6)}`;
    if (!frameSecs.has(key)) {
      let h = 0.3, b = 0.3;
      if (A > 0 && Iz > 0) { h = Math.sqrt(12 * Iz / A); b = A / h; }
      frameSecs.set(key, { A, Iz, Iy, J, b, h, matKey,
                           As2: As2r > 0 ? As2r : A * 5 / 6,
                           As3: As3r > 0 ? As3r : A * 5 / 6 });
    }
    const secIdx = [...frameSecs.keys()].indexOf(key) + 1;
    elemToFrameSec.set(i, `SEC${secIdx}`);
  }

  // ── FRAME SECTION ASSIGNMENTS ──
  if (frameIdx.length > 0) {
    push(`TABLE:  "FRAME SECTION ASSIGNMENTS"`);
    for (const i of frameIdx) {
      const sec = elemToFrameSec.get(i) || "SEC1";
      push(`   Frame=${i + 1}   AutoSelect=N.A.   AnalSect=${sec}   MatProp=Default`);
    }
    blank();
  }

  // ── FRAME SECTION PROPERTIES 01 - GENERAL ──
  if (frameSecs.size > 0) {
    push(`TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"`);
    let idx = 0;
    for (const [, sec] of frameSecs) {
      idx++;
      // Las areas de cortante REALES, no 5/6·A. Sin esto el alma de un perfil
      // I se sustituye por cinco sextos de TODA la seccion — el doble o mas —
      // y el modelo sale sistematicamente mas rigido. Es el mismo dato que en
      // el .heks costaba un 20 % de flecha en el galpon.
      // ⚠️ Shape=General, NO Rectangular.
      //
      // Con `Shape=Rectangular` SAP2000 trata la seccion como PARAMETRICA y
      // **recalcula** I22 y TorsConst desde t3/t2, tirando los valores
      // escritos. Como el t3/t2 que se emite es un rectangulo EQUIVALENTE
      // ajustado para clavar A e I33, el resultado es que A e I33 salen
      // exactos y I22 y J salen los del rectangulo — que para un perfil no
      // tienen nada que ver. Medido en el galpon (COL-CFT):
      //     Area  0.00978997 -> 0.00978997  OK
      //     I33   4.81008e-5 -> 4.81008e-5  OK
      //     I22   4.81008e-5 -> 1.32620e-…  MAL
      //     J     5.66231e-5 -> 4.74992e-…  MAL
      // y la flecha del modelo reimportado se iba un 6.55 %.
      //
      // Con `Shape=General` SAP2000 respeta las ocho propiedades tal cual.
      push(`   SectionName=SEC${idx}   Material=${sec.matKey}   Shape=General   t3=${fmt(sec.h)}   t2=${fmt(sec.b)}   Area=${fmt(sec.A)}   TorsConst=${fmt(sec.J)}   I33=${fmt(sec.Iz)}   I22=${fmt(sec.Iy)}   I23=0   AS2=${fmt(sec.As2)}   AS3=${fmt(sec.As3)} _`);
      push(`        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1`);
    }
    blank();
  }

  // ── FRAME LOCAL AXES ASSIGNMENTS ──
  // El "local axis angle" de CSI. Sin el, una C 200×50 girada 90° se calcula
  // con la inercia del eje que no es: once veces mas rigida. El galpon lleva
  // 156 barras giradas, asi que no es un detalle.
  {
    const conAng = frameIdx.filter(i => {
      const a = elementInputs.localAngles?.get(i);
      return a !== undefined && isFinite(a) && Math.abs(a) > 1e-9;
    });
    if (conAng.length > 0) {
      push(`TABLE:  "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL"`);
      for (const i of conAng) {
        push(`   Frame=${i + 1}   Angle=${fmt(elementInputs.localAngles!.get(i)!)}   AdvanceAxes=No`);
      }
      blank();
    }
  }

  // ── LAYERED SHELL: si se provee, todos los shells usan la misma seccion ──
  const isLayered = !!input.layeredSection && shellIdx.length > 0;
  const layeredSec = input.layeredSection;

  // ── Collect unique shell sections (homogeneo) ──
  // La FORMULACION entra en la clave: dos paños del mismo espesor pero uno
  // membrana y otro cáscara son DOS secciones distintas para SAP, no una.
  const shellSecs = new Map<string, { t: number; matKey: string; formulacion: number }>();
  const elemToShellSec = new Map<number, string>();
  if (!isLayered) {
    for (const i of shellIdx) {
      const t = elementInputs.thicknesses?.get(i) || 0.1;
      const E = elementInputs.elasticities?.get(i) || 0;
      const matKey = matDe(i).key;
      const formulacion = (elementInputs as any).plateFormulations?.get(i) ?? 0;
      const key = `t${t.toPrecision(6)}_f${formulacion}`;
      if (!shellSecs.has(key)) shellSecs.set(key, { t, matKey, formulacion });
      const secIdx = [...shellSecs.keys()].indexOf(key) + 1;
      elemToShellSec.set(i, `SSEC${secIdx}`);
    }
  }

  // ── AREA SECTION ASSIGNMENTS ──
  if (shellIdx.length > 0) {
    push(`TABLE:  "AREA SECTION ASSIGNMENTS"`);
    for (const i of shellIdx) {
      const sec = isLayered ? layeredSec!.name : (elemToShellSec.get(i) || "SSEC1");
      push(`   Area=${i + 1}   Section=${sec}   MatProp=Default`);
    }
    blank();

    push(`TABLE:  "AREA SECTION PROPERTIES"`);
    if (isLayered) {
      const sec = layeredSec!;
      const matBase = sec.layers[0]?.material || "MAT_DEFAULT";
      push(`   Section=${sec.name}   Material=${matBase}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${fmt(sec.totalThickness)}   BendThick=${fmt(sec.totalThickness)}   Color=Magenta`);
    } else {
      let idx = 0;
      for (const [, sec] of shellSecs) {
        idx++;
        // ⚠️ `Shell-Thin` con GUION, y el tipo el que tenga el modelo. Antes iba
        // `Type=ShellThin` fijo (sin guion y sin mirar el modelo). SAP escribe
        // `Shell-Thin` / `Shell-Thick` / `Membrane` — verificado pidiendole a
        // SAP que exportara su propio .s2k de cada tipo
        // (galpon-bodega-electoral/tipos_cascara_export.py).
        const tipoS2k = sec.formulacion === 2 ? "Membrane"
                      : sec.formulacion === 1 ? "Shell-Thin" : "Shell-Thick";
        push(`   Section=SSEC${idx}   Material=${sec.matKey}   MatAngle=0   AreaType=Shell   Type=${tipoS2k}   DrillDOF=Yes   Thickness=${fmt(sec.t)}   BendThick=${fmt(sec.t)}   Color=Cyan`);
      }
    }
    blank();

    // ── AREA SECTION PROPERTY LAYERS (solo si layered) ──
    if (isLayered) {
      push(`TABLE:  "AREA SECTION PROPERTY LAYERS"`);
      const sec = layeredSec!;
      for (const L0 of sec.layers) {
        const ang = L0.angle ?? 0;
        const np = L0.numIntPts ?? 3;
        push(`   Section=${sec.name}   LayerName=${L0.name}   Distance=${fmt(L0.distance)}   Thickness=${fmt(L0.thickness)}   Type=Shell   NumIntPts=${np}   Material=${L0.material}   MatAngle=${fmt(ang * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      blank();
    }
  }

  // ── JOINT COORDINATES ──
  push(`TABLE:  "JOINT COORDINATES"`);
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    push(`   Joint=${i + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${fmt(n[0])}   Y=${fmt(n[1])}   Z=${fmt(n[2])}   SpecialJt=No`);
  }
  blank();

  // ── JOINT RESTRAINT ASSIGNMENTS ──
  if (nodeInputs.supports && nodeInputs.supports.size > 0) {
    push(`TABLE:  "JOINT RESTRAINT ASSIGNMENTS"`);
    for (const [idx, sup] of nodeInputs.supports) {
      if (!sup.some(s => s)) continue;
      const yn = (b: boolean) => b ? "Yes" : "No";
      push(`   Joint=${idx + 1}   U1=${yn(sup[0])}   U2=${yn(sup[1])}   U3=${yn(sup[2])}   R1=${yn(sup[3])}   R2=${yn(sup[4])}   R3=${yn(sup[5])}`);
    }
    blank();
  }

  // ── LOAD PATTERN DEFINITIONS ──
  const selfWtMult = input.selfWtMult ?? 1;
  push(`TABLE:  "LOAD PATTERN DEFINITIONS"`);
  push(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${selfWtMult}`);
  blank();

  // ── LOAD CASE DEFINITIONS ──
  push(`TABLE:  "LOAD CASE DEFINITIONS"`);
  push(`   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes`);
  blank();

  // ── CASE - STATIC 1 - LOAD ASSIGNMENTS ──
  push(`TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"`);
  push(`   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1`);
  blank();

  // ── JOINT LOADS - FORCE ──
  // ⚠️ Esto leia `nodeInputs.forces`, que NO EXISTE en el modelo de datos: el
  // campo es `loads` (ver hekatan-fem/src/data-model.ts). Como el objeto era
  // `undefined`, el `if` nunca entraba y el .s2k salia SIN NINGUNA carga nodal
  // — y SAP no protesta: abre el modelo, resuelve y da todo cero. No se habia
  // notado porque el galpon, que es con lo que se valido el exportador, carga
  // por `frameload` y no tiene ni una fuerza nodal.
  const cargasNodales = nodeInputs.loads;
  if (cargasNodales && cargasNodales.size > 0) {
    push(`TABLE:  "JOINT LOADS - FORCE"`);
    for (const [idx, force] of cargasNodales) {
      if (!force.some(v => Math.abs(v) > 1e-12)) continue;
      push(`   Joint=${idx + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${fmt(force[0])}   F2=${fmt(force[1])}   F3=${fmt(force[2])}   M1=${fmt(force[3])}   M2=${fmt(force[4])}   M3=${fmt(force[5])}`);
    }
    blank();
  }

  // ── FRAME LOADS - DISTRIBUTED ──
  // Sin esta tabla el .s2k salia SIN CARGA en cuanto el modelo cargaba por
  // `frameload` en vez de por fuerzas nodales: el galpon tiene 195 frameload y
  // 0 force, o sea que se perdian los 4078 kN enteros y SAP abria el modelo con
  // cero carga. Y no da error: da un modelo que resuelve y sale todo a cero.
  //
  // `elementInputs.frameLoads` viene en GLOBALES (kN/m), que es como lo guarda
  // el cliModeler, asi que se escribe una fila por componente no nula con
  // CoordSys=GLOBAL y Dir=X/Y/Z. La carga es uniforme (FOverLA = FOverLB) y va
  // de extremo a extremo, que es lo que genera el comando `frameload`.
  const fLoads: Map<number, [number, number, number]> | undefined =
    (elementInputs as any).frameLoads;
  if (fLoads && fLoads.size > 0) {
    push(`TABLE:  "FRAME LOADS - DISTRIBUTED"`);
    for (const [idx, w] of fLoads) {
      const el = elements[idx];
      if (!el || el.length !== 2) continue;
      const a = nodes[el[0]], b = nodes[el[1]];
      const L = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      // Numeracion de SAP: el Frame=N de CONNECTIVITY - FRAME es el indice del
      // elemento +1, el mismo que ya usa FRAME SECTION ASSIGNMENTS.
      (["X", "Y", "Z"] as const).forEach((dir, k) => {
        if (Math.abs(w[k]) < 1e-12) return;
        push(`   Frame=${idx + 1}   LoadPat=DEAD   CoordSys=GLOBAL   Type=Force   Dir=${dir}` +
             `   DistType=RelDist   RelDistA=0   RelDistB=1` +
             `   AbsDistA=0   AbsDistB=${fmt(L)}` +
             `   FOverLA=${fmt(w[k])}   FOverLB=${fmt(w[k])}`);
      });
    }
    blank();
  }

  // ── Collect unique materials ──
  const matSet = new Map<string, { E: number; nu: number; G: number; rho: number }>();
  for (let i = 0; i < elements.length; i++) {
    // ⚠️ El Poisson se leia SOLO deduciendolo de `shearModuli`, y ese mapa lo
    // llenan las BARRAS, no las cascaras. Para un modelo de cascaras el `nu`
    // real (`poissonsRatios`) se ignoraba y salia el 0.2 por defecto. No es
    // cosmetico: en el patch test del ITW, con nu = 0, SAP daba 1.491651 en
    // vez de 1.500000 — y ese 0.5 % parecia del exportador de geometria o del
    // tipo de cascara, cuando era el MATERIAL. Ahora manda el declarado.
    const { E, nu, G, rho, key } = matDe(i);
    if (!matSet.has(key)) matSet.set(key, { E, nu, G, rho });
  }

  // ── MATERIAL PROPERTIES 01 ──
  push(`TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"`);
  for (const [name] of matSet) {
    push(`   Material=${name}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  }
  blank();

  // ── MATERIAL PROPERTIES 02 ──
  push(`TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"`);
  for (const [name, mat] of matSet) {
    push(`   Material=${name}   UnitWeight=${fmt(mat.rho * 9.81)}   UnitMass=${fmt(mat.rho)}   E1=${fmt(mat.E)}   G12=${fmt(mat.G)}   U12=${fmt(mat.nu)}   A1=9.9E-06`);
  }
  blank();

  // ── MATERIAL PROPERTIES 03B ──
  push(`TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"`);
  for (const [name] of matSet) {
    push(`   Material=${name}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  }
  blank();

  // ── PROGRAM CONTROL (at end, like SAP2000 does) ──
  push(`TABLE:  "PROGRAM CONTROL"`);
  push(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${units.force}, ${units.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`);
  blank();

  push(`END TABLE DATA`);
  push("");

  return L.join("\r\n");
}

function fmt(v: number): string {
  if (v === 0 || Math.abs(v) < 1e-15) return "0";
  if (Math.abs(v) >= 1e6 || (Math.abs(v) < 1e-3 && Math.abs(v) > 0)) {
    return v.toExponential(8);
  }
  return parseFloat(v.toPrecision(10)).toString();
}
