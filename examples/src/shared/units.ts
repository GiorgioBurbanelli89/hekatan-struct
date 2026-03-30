/**
 * Unit system with INDEPENDENT force & length selection.
 * Any combination is valid: tonf+mm, kgf+m, kip+cm, etc.
 * Material properties auto-convert from base SI (kN, m).
 */

// ── Force units ──────────────────────────────────────────
export type ForceUnitId = "kN" | "tonf" | "kgf" | "kip" | "lb" | "N";
export const FORCE_UNITS: { id: ForceUnitId; label: string; toKN: number }[] = [
  { id: "kN",   label: "kN",   toKN: 1 },
  { id: "tonf", label: "tonf", toKN: 9.80665 },
  { id: "kgf",  label: "kgf",  toKN: 0.00980665 },
  { id: "kip",  label: "kip",  toKN: 4.44822 },
  { id: "lb",   label: "lb",   toKN: 0.00444822 },
  { id: "N",    label: "N",    toKN: 0.001 },
];

// ── Length units ─────────────────────────────────────────
export type LengthUnitId = "m" | "cm" | "mm" | "in" | "ft";
export const LENGTH_UNITS: {
  id: LengthUnitId; label: string; toM: number;
  spanRange: [number, number, number];
  heightRange: [number, number, number];
  defaultSpan: number; defaultHeight: number;
  galponSpan: number; galponLength: number; galponHeight: number; galponRise: number;
}[] = [
  { id: "m",  label: "m",  toM: 1,      spanRange: [2, 15, 0.5],     heightRange: [2, 6, 0.5],     defaultSpan: 5,    defaultHeight: 3,   galponSpan: 12,   galponLength: 20,   galponHeight: 6,   galponRise: 3 },
  { id: "cm", label: "cm", toM: 0.01,   spanRange: [200, 1500, 50],  heightRange: [200, 600, 50],  defaultSpan: 500,  defaultHeight: 300, galponSpan: 1200, galponLength: 2000, galponHeight: 600, galponRise: 300 },
  { id: "mm", label: "mm", toM: 0.001,  spanRange: [2000, 15000, 500], heightRange: [2000, 6000, 500], defaultSpan: 5000, defaultHeight: 3000, galponSpan: 12000, galponLength: 20000, galponHeight: 6000, galponRise: 3000 },
  { id: "in", label: "in", toM: 0.0254, spanRange: [60, 480, 12],    heightRange: [96, 240, 12],   defaultSpan: 240,  defaultHeight: 144, galponSpan: 480,  galponLength: 720,  galponHeight: 240, galponRise: 120 },
  { id: "ft", label: "ft", toM: 0.3048, spanRange: [5, 40, 1],       heightRange: [8, 20, 1],      defaultSpan: 20,   defaultHeight: 12,  galponSpan: 40,   galponLength: 60,   galponHeight: 20,  galponRise: 10 },
];

// ── Stress label for common combinations ─────────────────
function stressLabel(f: ForceUnitId, l: LengthUnitId): string {
  if (f === "kN"  && l === "m")  return "kPa";
  if (f === "kN"  && l === "mm") return "MPa";   // kN/mm² = GPa? No, 1 kN/mm² = 1000 MPa = 1 GPa
  if (f === "N"   && l === "mm") return "MPa";
  if (f === "N"   && l === "m")  return "Pa";
  if (f === "kip" && l === "in") return "ksi";
  if (f === "kip" && l === "ft") return "ksf";
  return `${f}/${l}²`;
}

// ── UnitSystem interface ─────────────────────────────────
export type UnitSystemId = string;  // e.g. "kN-m", "tonf-mm"

export interface UnitSystem {
  id: UnitSystemId;
  label: string;
  force: string;
  length: string;
  stress: string;
  moment: string;
  E: number;
  G: number;
  A: number;
  Iz: number;
  Iy: number;
  J: number;
  rho: number;
  spanRange: [number, number, number];
  heightRange: [number, number, number];
  defaultSpan: number;
  defaultHeight: number;
  defaultForce: number;
  forceRange: [number, number, number];
  galponSpan: number;
  galponLength: number;
  galponHeight: number;
  galponRise: number;
}

// ── Base SI steel properties (kN, m) ─────────────────────
const BASE = {
  E:   200e6,       // kN/m²  (200 GPa)
  G:   77e6,        // kN/m²
  A:   0.01,        // m²     (100 cm²)
  Iz:  8.33e-5,     // m⁴
  Iy:  8.33e-5,     // m⁴
  J:   1.41e-4,     // m⁴
  rho: 7.85,        // kN·s²/m⁴ (7850 kg/m³)
};

/**
 * Build a UnitSystem from any force + length combination.
 * Converts all properties from base SI (kN, m) using dimensional analysis:
 *   Q_new = Q_SI / (fF^a * fL^b)  where [Q] = F^a * L^b
 */
export function buildUnitSystem(forceId: ForceUnitId, lengthId: LengthUnitId): UnitSystem {
  const fu = FORCE_UNITS.find(u => u.id === forceId)!;
  const lu = LENGTH_UNITS.find(u => u.id === lengthId)!;
  const fF = fu.toKN;   // kN per 1 force unit
  const fL = lu.toM;    // m  per 1 length unit

  // Dimensional conversions: Q_new = Q_SI / (fF^a * fL^b)
  const cvt = (a: number, b: number, val: number) => val / (Math.pow(fF, a) * Math.pow(fL, b));

  // Force range defaults (reasonable for each force unit)
  let defaultForce: number, forceRange: [number, number, number];
  switch (forceId) {
    case "kN":   defaultForce = 10;    forceRange = [-100, 100, 1]; break;
    case "tonf": defaultForce = 1;     forceRange = [-20, 20, 0.5]; break;
    case "kgf":  defaultForce = 1000;  forceRange = [-10000, 10000, 100]; break;
    case "kip":  defaultForce = 10;    forceRange = [-200, 200, 5]; break;
    case "lb":   defaultForce = 5000;  forceRange = [-50000, 50000, 500]; break;
    case "N":    defaultForce = 10000; forceRange = [-100000, 100000, 1000]; break;
  }

  return {
    id: `${forceId}-${lengthId}`,
    label: `${fu.label}, ${lu.label}`,
    force: fu.label,
    length: lu.label,
    stress: stressLabel(forceId, lengthId),
    moment: `${fu.label}·${lu.label}`,
    // Material: stress = F/L² (a=1, b=-2)
    E:   cvt(1, -2, BASE.E),
    G:   cvt(1, -2, BASE.G),
    // Geometry: area = L² (a=0, b=2), inertia = L⁴ (a=0, b=4)
    A:   cvt(0, 2, BASE.A),
    Iz:  cvt(0, 4, BASE.Iz),
    Iy:  cvt(0, 4, BASE.Iy),
    J:   cvt(0, 4, BASE.J),
    // Density: F·s²/L⁴ (a=1, b=-4)
    rho: cvt(1, -4, BASE.rho),
    // Dimensional defaults from length unit
    spanRange: lu.spanRange,
    heightRange: lu.heightRange,
    defaultSpan: lu.defaultSpan,
    defaultHeight: lu.defaultHeight,
    defaultForce,
    forceRange,
    galponSpan: lu.galponSpan,
    galponLength: lu.galponLength,
    galponHeight: lu.galponHeight,
    galponRise: lu.galponRise,
  };
}

// ── Prebuilt common systems for backward compat ──────────
export const UNIT_SYSTEMS: Record<string, UnitSystem> = {
  "SI": buildUnitSystem("kN", "m"),
  "US": buildUnitSystem("kip", "in"),
};

/**
 * Support type options per generator.
 */
export type SupportOption = { label: string; dofs: [boolean,boolean,boolean,boolean,boolean,boolean] };

export function getSupportOptions(): Record<string, SupportOption[]> {
  return {
    truss: [
      { label: "Empotrado",       dofs: [true,true,true,true,true,true] },
      { label: "Articulado",      dofs: [true,true,true,false,false,false] },
      { label: "Roller Z",        dofs: [false,false,true,false,false,false] },
    ],
    beams: [
      { label: "Empotrado",       dofs: [true,true,true,true,true,true] },
      { label: "Articulado",      dofs: [true,true,true,false,false,false] },
    ],
    "3d": [
      { label: "Empotrado",       dofs: [true,true,true,true,true,true] },
      { label: "Articulado",      dofs: [true,true,true,false,false,false] },
    ],
    frame: [
      { label: "Empotrado",       dofs: [true,true,true,true,true,true] },
      { label: "Articulado",      dofs: [true,true,true,false,false,false] },
    ],
    edificio: [
      { label: "Empotrado",       dofs: [true,true,true,true,true,true] },
      { label: "Articulado",      dofs: [true,true,true,false,false,false] },
    ],
    galpon: [
      { label: "Empotrado",       dofs: [true,true,true,true,true,true] },
      { label: "Articulado",      dofs: [true,true,true,false,false,false] },
    ],
    barra: [
      { label: "Emp-Libre",       dofs: [true,true,true,true,true,true] },
      { label: "Emp-Emp",         dofs: [true,true,true,true,true,true] },
      { label: "Emp-Art",         dofs: [true,true,true,false,false,false] },
    ],
    "placa-3q": [
      { label: "Simply Supported", dofs: [true,true,true,true,true,true] },
      { label: "Empotrado",        dofs: [true,true,true,true,true,true] },
    ],
    "placa-q4": [
      { label: "Simply Supported", dofs: [true,true,true,true,true,true] },
      { label: "Empotrado",        dofs: [true,true,true,true,true,true] },
    ],
    "losa-rect": [
      { label: "Simply Supported", dofs: [true,true,true,true,true,true] },
      { label: "Empotrado",        dofs: [true,true,true,true,true,true] },
    ],
    "losa-plana": [
      { label: "Pin (w=0)",        dofs: [false,false,true,false,false,false] },
      { label: "Empotrado",        dofs: [true,true,true,true,true,true] },
    ],
    "viga-alta": [
      { label: "Empotrado",        dofs: [true,true,true,true,true,true] },
      { label: "Articulado",       dofs: [true,true,true,false,false,false] },
    ],
    "muro-contencion": [
      { label: "Rankine (Ka)",     dofs: [true,true,true,true,true,true] },
      { label: "Suelo continuo",   dofs: [true,true,true,true,true,true] },
      { label: "Interfaz",         dofs: [true,true,true,true,true,true] },
      { label: "Presion agua",     dofs: [true,true,true,true,true,true] },
    ],
    "zapata": [
      { label: "Winkler (k)",      dofs: [false,false,true,false,false,false] },
    ],
    "placa-orificios": [
      { label: "Simplemente apoyado", dofs: [true,true,true,false,false,false] },
      { label: "Empotrado",           dofs: [true,true,true,true,true,true] },
    ],
    "col-placa": [
      { label: "Pernos empotrados", dofs: [true,true,true,true,true,true] },
    ],
    "eiffel": [{ label: "Empotrado", dofs: [true,true,true,true,true,true] }],
    "arco": [{ label: "Empotrado", dofs: [true,true,true,true,true,true] }],
    "puente": [{ label: "Empotrado", dofs: [true,true,true,true,true,true] }],
    "twisted": [{ label: "Empotrado", dofs: [true,true,true,true,true,true] }],
    "burj": [{ label: "Empotrado", dofs: [true,true,true,true,true,true] }],
    "opera": [{ label: "Empotrado", dofs: [true,true,true,true,true,true] }],
    "diagrid": [{ label: "Empotrado", dofs: [true,true,true,true,true,true] }],
    "talud": [
      { label: "Empotrado",        dofs: [true,true,true,true,true,true] },
    ],
  };
}

/** Get default generator params for a given unit system */
export function getGeneratorParams(u: UnitSystem) {
  return {
    truss: [
      { key: "span",      val: u.defaultSpan, min: u.spanRange[0], max: u.spanRange[1], step: u.spanRange[2], label: `Luz (${u.length})` },
      { key: "divisions", val: 5, min: 2, max: 20, step: 1, label: "Divisiones" },
      { key: "height",    val: u.defaultHeight * 0.5, min: u.heightRange[0] * 0.3, max: u.heightRange[1], step: u.heightRange[2], label: `Altura (${u.length})` },
    ],
    beams: [
      { key: "width",  val: u.defaultSpan,   min: u.spanRange[0],   max: u.spanRange[1],   step: u.spanRange[2],   label: `Luz (${u.length})` },
      { key: "height", val: u.defaultHeight, min: u.heightRange[0], max: u.heightRange[1], step: u.heightRange[2], label: `Altura (${u.length})` },
      { key: "nSub",   val: 4,               min: 1,                max: 10,               step: 1,                label: "Discretización" },
    ],
    "3d": [
      { key: "dx",      val: u.defaultSpan,   min: u.spanRange[0],   max: u.spanRange[1],   step: u.spanRange[2],   label: `Dx (${u.length})` },
      { key: "dy",      val: u.defaultSpan * 0.8, min: u.spanRange[0], max: u.spanRange[1], step: u.spanRange[2],   label: `Dy (${u.length})` },
      { key: "dz",      val: u.defaultHeight, min: u.heightRange[0], max: u.heightRange[1], step: u.heightRange[2], label: `Dz (${u.length})` },
      { key: "stories", val: 2,               min: 1,                max: 10,               step: 1,                label: "Pisos" },
      { key: "nSub",    val: 3,               min: 1,                max: 8,                step: 1,                label: "Discretización" },
    ],
    frame: [
      { key: "nVanos",  val: 3, min: 1, max: 10, step: 1,                label: "N. Vanos" },
      { key: "spanV",   val: u.defaultSpan, min: u.spanRange[0], max: u.spanRange[1], step: u.spanRange[2], label: `Luz vano (${u.length})` },
      { key: "nPisos",  val: 3, min: 1, max: 20, step: 1,                label: "N. Pisos" },
      { key: "hPiso",   val: u.defaultHeight, min: u.heightRange[0], max: u.heightRange[1], step: u.heightRange[2], label: `h piso (${u.length})` },
    ],
    edificio: [
      { key: "nVanosX", val: 2, min: 1, max: 8,  step: 1,                label: "Vanos X" },
      { key: "nVanosY", val: 2, min: 1, max: 8,  step: 1,                label: "Vanos Y" },
      { key: "nPisos",  val: 3, min: 1, max: 20, step: 1,                label: "N. Pisos" },
      { key: "hPiso",   val: u.defaultHeight, min: u.heightRange[0], max: u.heightRange[1], step: u.heightRange[2], label: `h piso (${u.length})` },
      { key: "nSubViga", val: 1, min: 1, max: 8,  step: 1,               label: "Div. Vigas" },
      { key: "nSubCol",  val: 1, min: 1, max: 8,  step: 1,               label: "Div. Columnas" },
      { key: "Lvix",    val: 0, min: 0, max: u.spanRange[1] * 0.5, step: u.spanRange[2], label: `Lvix (${u.length})` },
      { key: "Lvdx",    val: 0, min: 0, max: u.spanRange[1] * 0.5, step: u.spanRange[2], label: `Lvdx (${u.length})` },
      { key: "Lviy",    val: 0, min: 0, max: u.spanRange[1] * 0.5, step: u.spanRange[2], label: `Lviy (${u.length})` },
      { key: "Lvdy",    val: 0, min: 0, max: u.spanRange[1] * 0.5, step: u.spanRange[2], label: `Lvdy (${u.length})` },
    ],
    galpon: [
      { key: "span",     val: u.galponSpan,   min: u.spanRange[0],      max: u.spanRange[1] * 3,   step: u.spanRange[2], label: `Luz (${u.length})` },
      { key: "length",   val: u.galponLength,  min: u.spanRange[0],      max: u.spanRange[1] * 4,   step: u.spanRange[2], label: `Largo (${u.length})` },
      { key: "height",   val: u.galponHeight,  min: u.heightRange[0],    max: u.heightRange[1],     step: u.heightRange[2], label: `Altura col (${u.length})` },
      { key: "archRise", val: u.galponRise,    min: u.heightRange[2],    max: u.heightRange[1],     step: u.heightRange[2], label: `Flecha arco (${u.length})` },
      { key: "xDiv",     val: 8,  min: 4,  max: 20, step: 1, label: "Div. X" },
      { key: "yDiv",     val: 4,  min: 2,  max: 12, step: 1, label: "Div. Y" },
    ],
    barra: [
      { key: "L",     val: u.defaultSpan,  min: u.spanRange[0], max: u.spanRange[1], step: u.spanRange[2], label: `L total (${u.length})` },
      { key: "nElem", val: 3,   min: 1,  max: 10, step: 1,   label: "Num elementos" },
      { key: "F",     val: u.defaultForce * 10, min: u.forceRange[0], max: u.forceRange[1] * 10, step: Math.abs(u.forceRange[2]) * 10, label: `F axial (${u.force})` },
    ],
    "placa-3q": [
      { key: "Lx",       val: 15,   min: 2,  max: 30,  step: 1,    label: `Lx (${u.length})` },
      { key: "Ly",       val: 10,   min: 2,  max: 30,  step: 1,    label: `Ly (${u.length})` },
      { key: "meshSize", val: 0.5,  min: 0.1, max: 3,  step: 0.1,  label: `Mesh size (${u.length})` },
      { key: "t",        val: 1.0,  min: 0.05, max: 5, step: 0.05, label: `t (${u.length})` },
      { key: "E",        val: u.E * 30e6 / 200e6, min: 10, max: 1e12, step: 1000, label: `E (${u.stress})` },
      { key: "nu",       val: 0.3,  min: 0.0, max: 0.49, step: 0.01, label: `v` },
      { key: "q",        val: -3,   min: -50, max: 0,  step: 1,    label: `q (${u.force}/${u.length}²)` },
    ],
    "placa-q4": [
      { key: "Lx",  val: 10,   min: 1,  max: 30,  step: 1,    label: `Lx (${u.length})` },
      { key: "Ly",  val: 10,   min: 1,  max: 30,  step: 1,    label: `Ly (${u.length})` },
      { key: "nx",  val: 16,   min: 2,  max: 64,  step: 2,    label: "nx elem" },
      { key: "ny",  val: 16,   min: 2,  max: 64,  step: 2,    label: "ny elem" },
      { key: "t",   val: 0.20, min: 0.05, max: 2, step: 0.05, label: `t (${u.length})` },
      { key: "E",   val: u.E * 30e6 / 200e6, min: 10, max: 1e12, step: 1000, label: `E (${u.stress})` },
      { key: "nu",  val: 0.3,  min: 0.0, max: 0.49, step: 0.01, label: `v` },
      { key: "q",   val: -10,  min: -50, max: 0,  step: 1,    label: `q (${u.force}/${u.length}²)` },
    ],
    "losa-rect": [
      { key: "a",   val: 6,    min: 1,  max: 20,  step: 0.5,  label: `a (${u.length})` },
      { key: "b",   val: 4,    min: 1,  max: 20,  step: 0.5,  label: `b (${u.length})` },
      { key: "nx",  val: 12,   min: 4,  max: 40,  step: 2,    label: "nx elem" },
      { key: "ny",  val: 8,    min: 4,  max: 40,  step: 2,    label: "ny elem" },
      { key: "t",   val: 0.10, min: 0.05, max: 1, step: 0.01, label: `t (${u.length})` },
      { key: "E",   val: u.E * 35e6 / 200e6, min: 10, max: 1e12, step: 1000, label: `E (${u.stress})` },
      { key: "nu",  val: 0.15, min: 0.0, max: 0.49, step: 0.01, label: `v` },
      { key: "q",   val: -10,  min: -50, max: 0,  step: 1,    label: `q (${u.force}/${u.length}²)` },
    ],
    "losa-plana": [
      { key: "t",        val: 0.20, min: 0.05, max: 1,  step: 0.01, label: `t (${u.length})` },
      { key: "meshSize", val: 0.6,  min: 0.3,  max: 2,  step: 0.1,  label: `Mesh (${u.length})` },
      { key: "E",        val: u.E * 35e6 / 200e6, min: 10, max: 1e12, step: 1000, label: `E (${u.stress})` },
      { key: "nu",       val: 0.2,  min: 0.0,  max: 0.49, step: 0.01, label: `v` },
      { key: "q",        val: -10,  min: -50,  max: 0,  step: 1,    label: `q (${u.force}/${u.length}²)` },
    ],
    "viga-alta": [
      { key: "L",        val: 4,    min: 1,  max: 20,  step: 0.5,  label: `L (${u.length})` },
      { key: "H",        val: 2,    min: 0.5, max: 10, step: 0.5,  label: `H (${u.length})` },
      { key: "meshSize", val: 0.2,  min: 0.05, max: 1, step: 0.05, label: `Mesh (${u.length})` },
      { key: "t",        val: 0.10, min: 0.05, max: 1, step: 0.01, label: `t (${u.length})` },
      { key: "E",        val: u.E * 20e6 / 200e6, min: 10, max: 1e12, step: 1000, label: `E (${u.stress})` },
      { key: "nu",       val: 0.2,  min: 0.0, max: 0.49, step: 0.01, label: `v` },
      { key: "q",        val: -100, min: -500, max: 0, step: 10,   label: `q (${u.force}/${u.length})` },
      { key: "b",        val: 0.8,  min: 0.2, max: 4, step: 0.1,   label: `Ancho carga (${u.length})` },
    ],
    "muro-contencion": [
      { key: "H",        val: 4,    min: 1,  max: 10, step: 0.5,  label: `H (${u.length})` },
      { key: "B",        val: 3,    min: 1,  max: 8,  step: 0.5,  label: `B base (${u.length})` },
      { key: "tw",       val: 0.3,  min: 0.1, max: 1, step: 0.05, label: `t muro (${u.length})` },
      { key: "tb",       val: 0.4,  min: 0.1, max: 1, step: 0.05, label: `t base (${u.length})` },
      { key: "meshSize", val: 0.2,  min: 0.05, max: 1, step: 0.05, label: `Mesh (${u.length})` },
      { key: "E",        val: u.E * 25e6 / 200e6, min: 10, max: 1e12, step: 1000, label: `E concreto (${u.stress})` },
      { key: "nu",       val: 0.2,  min: 0.0, max: 0.49, step: 0.01, label: `v concreto` },
      { key: "gamma",    val: 18,   min: 5,  max: 30, step: 1,    label: `gamma suelo (${u.force}/${u.length}³)` },
      { key: "Ka",       val: 0.33, min: 0.1, max: 0.6, step: 0.01, label: `Ka` },
      { key: "qs",       val: 0,    min: 0,  max: 100, step: 5,   label: `q sobrecarga (${u.stress})` },
      { key: "Es",       val: 50000, min: 100, max: 1e6, step: 1000, label: `E suelo (${u.stress})` },
      { key: "nus",      val: 0.3,  min: 0.1, max: 0.49, step: 0.01, label: `v suelo` },
      { key: "kn",       val: 1e6,  min: 1e3, max: 1e9, step: 1e4, label: `kn interfaz (${u.force}/${u.length}³)` },
      { key: "ks",       val: 1e4,  min: 100, max: 1e7, step: 1e3, label: `ks interfaz (${u.force}/${u.length}³)` },
      { key: "gammaW",  val: 9.81, min: 5, max: 15, step: 0.1,   label: `gamma agua (${u.force}/${u.length}³)` },
      { key: "Hw",      val: 3.5,  min: 0.5, max: 10, step: 0.5, label: `H agua (${u.length})` },
    ],
    "zapata": [
      { key: "Lx",   val: 2.0,  min: 0.5, max: 6,  step: 0.1,  label: `Lx zapata (${u.length})` },
      { key: "Ly",   val: 2.0,  min: 0.5, max: 6,  step: 0.1,  label: `Ly zapata (${u.length})` },
      { key: "t",    val: 0.5,  min: 0.1, max: 2,  step: 0.05, label: `t zapata (${u.length})` },
      { key: "colA", val: 0.40, min: 0.15, max: 1.5, step: 0.05, label: `a columna (${u.length})` },
      { key: "colH", val: 1.5,  min: 0.5, max: 5,  step: 0.5,  label: `h pedestal (${u.length})` },
      { key: "nx",   val: 8,    min: 4,   max: 20, step: 2,    label: "nx elem" },
      { key: "ny",   val: 8,    min: 4,   max: 20, step: 2,    label: "ny elem" },
      { key: "E",    val: u.E * 25e6 / 200e6, min: 10, max: 1e12, step: 1000, label: `E (${u.stress})` },
      { key: "nu",   val: 0.2,  min: 0.0, max: 0.49, step: 0.01, label: `v` },
      { key: "P",    val: -500, min: -5000, max: 0,  step: 50,  label: `P axial (${u.force})` },
      { key: "Mx",   val: 0,    min: -500, max: 500, step: 10,  label: `Mx (${u.force}·${u.length})` },
      { key: "My",   val: 0,    min: -500, max: 500, step: 10,  label: `My (${u.force}·${u.length})` },
      { key: "ks",   val: 20000, min: 1000, max: 200000, step: 1000, label: `ks (${u.force}/${u.length}³)` },
    ],
    "placa-orificios": [
      { key: "Lx",       val: 0.40, min: 0.15, max: 1.0, step: 0.05, label: `Placa Lx (${u.length})` },
      { key: "Ly",       val: 0.40, min: 0.15, max: 1.0, step: 0.05, label: `Placa Ly (${u.length})` },
      { key: "t",        val: 0.025, min: 0.01, max: 0.10, step: 0.005, label: `Espesor t (${u.length})` },
      { key: "dBolt",    val: 0.022, min: 0.01, max: 0.05, step: 0.002, label: `d perno (${u.length})` },
      { key: "sx",       val: 0.28, min: 0.08, max: 0.8, step: 0.02, label: `Sep. pernos X (${u.length})` },
      { key: "sy",       val: 0.28, min: 0.08, max: 0.8, step: 0.02, label: `Sep. pernos Y (${u.length})` },
      { key: "colA",     val: 0.20, min: 0.10, max: 0.50, step: 0.02, label: `Col a (${u.length})` },
      { key: "meshSize", val: 0.008, min: 0.003, max: 0.03, step: 0.001, label: `Mesh (${u.length})` },
      { key: "E",        val: u.E, min: 10, max: 1e12, step: 1000, label: `E acero (${u.stress})` },
      { key: "nu",       val: 0.30, min: 0.0, max: 0.49, step: 0.01, label: `v` },
      { key: "P",        val: -200, min: -2000, max: 0, step: 10,   label: `P axial (${u.force})` },
      { key: "nBolts",   val: 4,   min: 2, max: 8, step: 2,         label: `N pernos` },
    ],
    "col-placa": [
      { key: "colB",     val: 0.30, min: 0.10, max: 0.60, step: 0.02, label: `Col b (${u.length})` },
      { key: "colH",     val: 0.30, min: 0.10, max: 0.60, step: 0.02, label: `Col h (${u.length})` },
      { key: "colT",     val: 0.008, min: 0.004, max: 0.025, step: 0.002, label: `Col t (${u.length})` },
      { key: "colLen",   val: 1.50, min: 0.50, max: 4.0, step: 0.25, label: `Col altura (${u.length})` },
      { key: "Lx",       val: 0.45, min: 0.20, max: 1.0, step: 0.05, label: `Placa Lx (${u.length})` },
      { key: "Ly",       val: 0.45, min: 0.20, max: 1.0, step: 0.05, label: `Placa Ly (${u.length})` },
      { key: "tPlaca",   val: 0.025, min: 0.010, max: 0.060, step: 0.005, label: `Placa t (${u.length})` },
      { key: "dBolt",    val: 0.022, min: 0.012, max: 0.040, step: 0.002, label: `d perno (${u.length})` },
      { key: "sx",       val: 0.32, min: 0.10, max: 0.80, step: 0.02, label: `Sep pernos X (${u.length})` },
      { key: "sy",       val: 0.32, min: 0.10, max: 0.80, step: 0.02, label: `Sep pernos Y (${u.length})` },
      { key: "nSubColV", val: 6, min: 2, max: 12, step: 1,           label: `Col subdiv V` },
      { key: "nSubColH", val: 4, min: 2, max: 8, step: 1,            label: `Col subdiv H` },
      { key: "nSubPlaca",val: 10, min: 4, max: 20, step: 2,           label: `Placa subdiv` },
      { key: "E",        val: u.E, min: 10, max: 1e12, step: 1000, label: `E acero (${u.stress})` },
      { key: "nu",       val: 0.30, min: 0.0, max: 0.49, step: 0.01, label: `v` },
      { key: "P",        val: -300, min: -3000, max: 0, step: 25,   label: `P axial (${u.force})` },
    ],
    "muro-q4": [
      { key: "W",  val: 5.0,  min: 1,  max: 20,  step: 0.5, label: `Ancho W (${u.length})` },
      { key: "H",  val: 3.0,  min: 1,  max: 15,  step: 0.5, label: `Alto H (${u.length})` },
      { key: "t",  val: 0.2,  min: 0.05, max: 1.0, step: 0.05, label: `Espesor t (${u.length})` },
      { key: "nx", val: 8,    min: 2,  max: 20,  step: 1,   label: `Mesh nx` },
      { key: "ny", val: 6,    min: 2,  max: 20,  step: 1,   label: `Mesh ny` },
      { key: "E",  val: u.E * 25e6 / 200e6, min: 1e4, max: 1e9, step: 1e5, label: `E concreto (${u.stress})` },
      { key: "nu", val: 0.2,  min: 0.0, max: 0.49, step: 0.01, label: `v` },
      { key: "P",  val: u.defaultForce * 10, min: 1, max: u.forceRange[1] * 50, step: u.forceRange[2] * 5, label: `P lateral (${u.force})` },
    ],
    "viga-q4": [
      { key: "L",  val: 6.0,  min: 1,  max: 20,  step: 0.5, label: `Luz L (${u.length})` },
      { key: "h",  val: 0.5,  min: 0.1, max: 3.0, step: 0.1, label: `Peralte h (${u.length})` },
      { key: "t",  val: 0.2,  min: 0.05, max: 1.0, step: 0.05, label: `Espesor t (${u.length})` },
      { key: "nx", val: 12,   min: 2,  max: 30,  step: 1,   label: `Mesh nx` },
      { key: "ny", val: 4,    min: 2,  max: 15,  step: 1,   label: `Mesh ny` },
      { key: "E",  val: u.E * 25e6 / 200e6, min: 1e4, max: 1e9, step: 1e5, label: `E concreto (${u.stress})` },
      { key: "nu", val: 0.2,  min: 0.0, max: 0.49, step: 0.01, label: `v` },
      { key: "P",  val: u.defaultForce * 5, min: 1, max: u.forceRange[1] * 50, step: u.forceRange[2] * 2, label: `P puntual (${u.force})` },
    ],
    "placa-xy": [
      { key: "Lx", val: 4.0,  min: 1,  max: 15,  step: 0.5, label: `Lx (${u.length})` },
      { key: "Ly", val: 2.0,  min: 0.5, max: 10,  step: 0.5, label: `Ly (${u.length})` },
      { key: "t",  val: 0.15, min: 0.05, max: 0.5, step: 0.05, label: `Espesor t (${u.length})` },
      { key: "nx", val: 8,    min: 2,  max: 20,  step: 1,   label: `Mesh nx` },
      { key: "ny", val: 4,    min: 2,  max: 15,  step: 1,   label: `Mesh ny` },
      { key: "E",  val: u.E * 25e6 / 200e6, min: 1e4, max: 1e9, step: 1e5, label: `E concreto (${u.stress})` },
      { key: "nu", val: 0.2,  min: 0.0, max: 0.49, step: 0.01, label: `v` },
      { key: "P",  val: u.defaultForce * 2, min: 1, max: u.forceRange[1] * 20, step: u.forceRange[2], label: `P borde (${u.force})` },
    ],
    "eiffel": [], "arco": [], "puente": [], "twisted": [],
    "burj": [], "opera": [], "diagrid": [],
    "talud": [
      { key: "H",        val: 6,    min: 2,  max: 15, step: 0.5,  label: `H (${u.length})` },
      { key: "angle",    val: 45,   min: 20, max: 70, step: 5,    label: `Angulo (deg)` },
      { key: "bTop",     val: 3,    min: 1,  max: 10, step: 0.5,  label: `b top (${u.length})` },
      { key: "bBot",     val: 3,    min: 1,  max: 10, step: 0.5,  label: `b base (${u.length})` },
      { key: "meshSize", val: 0.8,  min: 0.3, max: 3, step: 0.1,  label: `Mesh (${u.length})` },
      { key: "E",        val: u.E * 50000 / 200e6, min: 100, max: 1e12, step: 1000, label: `E (${u.stress})` },
      { key: "nu",       val: 0.3,  min: 0.0, max: 0.49, step: 0.01, label: `v` },
      { key: "gamma",    val: 18,   min: 5,  max: 30, step: 1,    label: `gamma (${u.force}/${u.length}³)` },
      { key: "c",        val: 15,   min: 0,  max: 100, step: 1,   label: `Cohesion c (${u.stress})` },
      { key: "phi",      val: 30,   min: 0,  max: 45, step: 1,    label: `Friccion φ (deg)` },
      { key: "qs",       val: 0,    min: 0,  max: 100, step: 5,   label: `Sobrecarga (${u.stress})` },
    ],
  };
}

/** Get default load params for a given unit system */
export function getLoadParams(u: UnitSystem) {
  const f = u.force;
  const [fmin, fmax, fstep] = u.forceRange;
  return {
    truss: [
      { key: "CM", val: -u.defaultForce, min: fmin, max: 0,    step: fstep, label: `CM (${f})` },
      { key: "CV", val: 0,                min: fmin, max: 0,    step: fstep, label: `CV (${f})` },
    ],
    beams: [
      { key: "CM", val: 0,               min: fmin, max: 0,    step: fstep, label: `CM (${f})` },
      { key: "CV", val: 0,               min: fmin, max: 0,    step: fstep, label: `CV (${f})` },
      { key: "Ex", val: u.defaultForce,  min: fmin, max: fmax, step: fstep, label: `Ex sismo (${f})` },
    ],
    "3d": [
      { key: "CM", val: 0,                  min: fmin, max: 0,    step: fstep, label: `CM (${f})` },
      { key: "CV", val: 0,                  min: fmin, max: 0,    step: fstep, label: `CV (${f})` },
      { key: "Ex", val: u.defaultForce * 3, min: fmin, max: fmax, step: fstep, label: `Ex sismo (${f})` },
    ],
    frame: [
      { key: "CM", val: -u.defaultForce, min: fmin, max: 0,    step: fstep, label: `CM (${f})` },
      { key: "CV", val: 0,                min: fmin, max: 0,    step: fstep, label: `CV (${f})` },
      { key: "Ex", val: 0,                min: fmin, max: fmax, step: fstep, label: `Ex sismo (${f})` },
    ],
    edificio: [
      { key: "CM", val: -u.defaultForce, min: fmin, max: 0,    step: fstep, label: `CM (${f})` },
      { key: "CV", val: 0,                min: fmin, max: 0,    step: fstep, label: `CV (${f})` },
      { key: "Ex", val: 0,                min: fmin, max: fmax, step: fstep, label: `Ex sismo (${f})` },
      { key: "Ey", val: 0,                min: fmin, max: fmax, step: fstep, label: `Ey sismo (${f})` },
    ],
    galpon: [
      { key: "CM", val: -u.defaultForce, min: fmin, max: 0,    step: fstep, label: `CM (${f})` },
      { key: "CV", val: 0,                min: fmin, max: 0,    step: fstep, label: `CV (${f})` },
    ],
    barra: [
      { key: "F",  val: u.defaultForce * 10, min: u.forceRange[0] * 10, max: u.forceRange[1] * 10, step: Math.abs(u.forceRange[2]) * 5, label: `F axial (${f})` },
    ],
    "placa-3q": [
      { key: "CM", val: 0, min: fmin, max: 0, step: fstep, label: `CM (${f})` },
    ],
    "placa-q4": [
      { key: "CM", val: 0, min: fmin, max: 0, step: fstep, label: `CM (${f})` },
    ],
    "losa-rect": [],
    "losa-plana": [],
    "viga-alta": [],
    "muro-contencion": [],
    "zapata": [],
    "placa-orificios": [],
    "col-placa": [],
    "talud": [],
    "muro-q4": [],
    "viga-q4": [],
    "placa-xy": [],
    "eiffel": [], "arco": [], "puente": [], "twisted": [],
    "burj": [], "opera": [], "diagrid": [],
  };
}
