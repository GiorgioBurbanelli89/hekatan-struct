/**
 * SAP2000 .s2k Exporter — convierte un modelo Hekatan (3 vigas frame + losa
 * shell + apoyos + cargas) al formato texto SAP2000 .s2k. Hermano del
 * f2kExporter (SAFE).
 *
 * Genera las tablas mínimas necesarias para que SAP2000 pueda abrir el modelo
 * via "File → Import → SAP2000 .s2k Text File":
 *
 *   - PROGRAM CONTROL                        (header con CurrUnits)
 *   - MATERIAL PROPERTIES 01 - GENERAL       (CONC24, ACERO_A36)
 *   - MATERIAL PROPERTIES 02 - BASIC...      (E, nu, density)
 *   - FRAME SECTION PROPERTIES 01 - GENERAL  (perfil I)
 *   - AREA SECTION PROPERTIES                (Shell-Thin con DrillDOF)
 *   - LOAD PATTERN DEFINITIONS               (DEAD)
 *   - LOAD CASE DEFINITIONS                  (DEAD linear static)
 *   - JOINT COORDINATES
 *   - CONNECTIVITY - FRAME / AREA
 *   - JOINT RESTRAINT ASSIGNMENTS
 *   - FRAME SECTION ASSIGNMENTS / AREA SECTION ASSIGNMENTS
 *   - AREA LOADS - UNIFORM (Dir=Gravity, val=POSITIVO = abajo)
 *   - JOINT LOADS - FORCE (si hay)
 */

export interface ExportedFrameSection {
  name: string;
  material: string;
  /** I-section: shape="I/Wide Flange" con t3, t2, tf, tw */
  shape?: "I/Wide Flange" | "Rectangular" | "Pipe" | "Box";
  t3?: number;   // height
  t2?: number;   // top flange width
  tf?: number;
  tw?: number;
  t2b?: number;  // bottom flange width (default = t2)
  tfb?: number;
}

export interface ExportedAreaSection {
  name: string;
  material: string;
  type?: "Shell-Thin" | "Shell-Thick" | "Membrane" | "Plate";
  thickness: number;
  /** Activar DrillDOF para mejor coupling shell↔frame (recomendado) */
  drillDof?: boolean;
}

export interface ExportedMaterial {
  name: string;
  type: "Concrete" | "Steel";
  E: number;        // kN/m²
  nu: number;
  density: number;  // kN/m³
  fc?: number;      // kN/m² (concreto)
  fy?: number;      // kN/m² (acero)
}

export interface S2kModel {
  /** Nombres de unidades para CurrUnits header. Default "KN, m, C". */
  unitsForce?: string;
  unitsLength?: string;
  materials: ExportedMaterial[];
  frameSections: ExportedFrameSection[];
  areaSections: ExportedAreaSection[];
  /** Nodes con id 1-based: [x, y, z] en m */
  joints: { id: number; x: number; y: number; z: number }[];
  /** Frames: [{id, jointI, jointJ, section}] (ids 1-based) */
  frames: { id: number; jointI: number; jointJ: number; section: string }[];
  /** Areas Q4: [{id, joints[4], section}] (ids 1-based) */
  areas: { id: number; joints: number[]; section: string }[];
  restraints: { joint: number; dof: [boolean, boolean, boolean, boolean, boolean, boolean] }[];
  /** Cargas distribuidas en area: value POSITIVO con Dir=Gravity = abajo */
  areaLoads?: { area: number; pattern: string; value: number; dir?: string }[];
  /** Cargas puntuales en joints: [F1, F2, F3, M1, M2, M3] */
  jointLoads?: { joint: number; pattern: string; values: [number, number, number, number, number, number] }[];
}

/** Number formatter — preserva precisión SAP-compatible. */
function n(v: number): string {
  if (v === 0) return "0";
  if (Math.abs(v) < 1e-12) return "0";
  return v.toString();
}

function guid(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function exportS2k(model: S2kModel): string {
  const force = model.unitsForce ?? "KN";
  const length = model.unitsLength ?? "m";
  const ts = new Date().toLocaleString();
  const lines: string[] = [];

  // ── HEADER ──
  lines.push(`File Hekatan_export.s2k generated on ${ts}`);
  lines.push(" ");
  lines.push(`TABLE:  "PROGRAM CONTROL"`);
  lines.push(`   ProgramName=SAP2000   Version=24.1.0   ProgLevel=Ultimate   CurrUnits="${force}, ${length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"`);
  lines.push(" ");

  lines.push(`TABLE:  "ACTIVE DEGREES OF FREEDOM"`);
  lines.push(`   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes`);
  lines.push(" ");

  lines.push(`TABLE:  "ANALYSIS OPTIONS"`);
  lines.push(`   Solver=Advanced   SolverProc=Auto   Force32Bit=No   StiffCase=None   GeomMod=None   HingeOpt="In Elements"`);
  lines.push(" ");

  lines.push(`TABLE:  "COORDINATE SYSTEMS"`);
  lines.push(`   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0`);
  lines.push(" ");

  // ── MATERIALES ──
  if (model.materials.length > 0) {
    lines.push(`TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"`);
    for (const m of model.materials) {
      lines.push(`   Material=${m.name}   Type=${m.type}   SymType=Isotropic   TempDepend=No   Color=${m.type === "Steel" ? "Yellow" : "Magenta"}   GUID=${guid()}`);
    }
    lines.push(" ");

    lines.push(`TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"`);
    for (const m of model.materials) {
      const G = m.E / (2 * (1 + m.nu));
      const alpha = m.type === "Steel" ? 1.2e-5 : 1e-5;
      lines.push(`   Material=${m.name}   UnitWeight=${n(m.density)}   UnitMass=${n(m.density / 9.80665)}   E1=${n(m.E)}   G12=${n(G)}   U12=${n(m.nu)}   A1=${n(alpha)}`);
    }
    lines.push(" ");
  }

  // ── SECCIONES FRAME ──
  if (model.frameSections.length > 0) {
    lines.push(`TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"`);
    for (const s of model.frameSections) {
      const shape = s.shape ?? "I/Wide Flange";
      // Calcular A, I33, I22 de la I (cuando aplica)
      let A = 0, I33 = 0, I22 = 0;
      if (shape === "I/Wide Flange" && s.t3 != null && s.t2 != null && s.tf != null && s.tw != null) {
        const t2b = s.t2b ?? s.t2;
        const tfb = s.tfb ?? s.tf;
        const hw = s.t3 - s.tf - tfb;
        // Section: top flange (t2 × tf) + web (tw × hw) + bottom flange (t2b × tfb)
        A = s.t2 * s.tf + s.tw * hw + t2b * tfb;
        // Centroid from bottom (z̄)
        const zbar = (t2b * tfb * (tfb / 2) + s.tw * hw * (tfb + hw / 2) + s.t2 * s.tf * (s.t3 - s.tf / 2)) / A;
        // I33 (about strong axis = 3, horizontal)
        I33 = (s.t2 * Math.pow(s.tf, 3) / 12 + s.t2 * s.tf * Math.pow(s.t3 - s.tf / 2 - zbar, 2))
            + (s.tw * Math.pow(hw, 3) / 12 + s.tw * hw * Math.pow(tfb + hw / 2 - zbar, 2))
            + (t2b * Math.pow(tfb, 3) / 12 + t2b * tfb * Math.pow(zbar - tfb / 2, 2));
        // I22 (weak axis)
        I22 = s.t2 * Math.pow(s.t2, 3) / 12 * (s.tf / s.t3)
            + hw * Math.pow(s.tw, 3) / 12
            + t2b * Math.pow(t2b, 3) / 12 * (tfb / s.t3);
      }
      lines.push(`   SectionName=${s.name}   Material=${s.material}   Shape="${shape}"   t3=${n(s.t3 ?? 0)}   t2=${n(s.t2 ?? 0)}   tf=${n(s.tf ?? 0)}   tw=${n(s.tw ?? 0)}   t2b=${n(s.t2b ?? s.t2 ?? 0)}   tfb=${n(s.tfb ?? s.tf ?? 0)}   FilletRadius=0   Area=${n(A)}   I33=${n(I33)}   I22=${n(I22)}   Color=Gray8Dark`);
    }
    lines.push(" ");
  }

  // ── SECCIONES AREA ──
  if (model.areaSections.length > 0) {
    lines.push(`TABLE:  "AREA SECTION PROPERTIES"`);
    for (const s of model.areaSections) {
      const type = s.type ?? "Shell-Thin";
      const drill = s.drillDof ? "Yes" : "No";
      lines.push(`   Section=${s.name}   Material=${s.material}   MatAngle=0   AreaType=Shell   Type=${type}   DrillDOF=${drill}   Thickness=${n(s.thickness)}   BendThick=${n(s.thickness)}   Color=Blue   F11Mod=1   F22Mod=1   F12Mod=1   M11Mod=1   M22Mod=1   M12Mod=1   V13Mod=1   V23Mod=1   MMod=1   WMod=1`);
    }
    lines.push(" ");
  }

  // ── LOAD PATTERN ──
  // Asumimos al menos DEAD existe (se crea por defecto en SAP)
  lines.push(`TABLE:  "LOAD PATTERN DEFINITIONS"`);
  lines.push(`   LoadPat=DEAD   DesignType=DEAD   SelfWtMult=0`);
  lines.push(" ");

  lines.push(`TABLE:  "LOAD CASE DEFINITIONS"`);
  lines.push(`   Case=DEAD   Type=LinStatic   InitialCond=Zero   ModalCase=MODAL   DesType="Program Determined"   AutoType=None   RunCase=Yes   CaseStatus="Not Run"   GUID=${guid()}`);
  lines.push(" ");

  lines.push(`TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"`);
  lines.push(`   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1`);
  lines.push(" ");

  // ── JOINT COORDINATES ──
  lines.push(`TABLE:  "JOINT COORDINATES"`);
  for (const j of model.joints) {
    lines.push(`   Joint=${j.id}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${n(j.x)}   Y=${n(j.y)}   Z=${n(j.z)}   SpecialJt=Yes   GlobalX=${n(j.x)}   GlobalY=${n(j.y)}   GlobalZ=${n(j.z)}   GUID=${guid()}`);
  }
  lines.push(" ");

  // ── CONNECTIVITY - FRAME ──
  if (model.frames.length > 0) {
    lines.push(`TABLE:  "CONNECTIVITY - FRAME"`);
    for (const f of model.frames) {
      const j1 = model.joints.find((j) => j.id === f.jointI)!;
      const j2 = model.joints.find((j) => j.id === f.jointJ)!;
      const len = Math.sqrt((j2.x - j1.x) ** 2 + (j2.y - j1.y) ** 2 + (j2.z - j1.z) ** 2);
      const cx = (j1.x + j2.x) / 2, cy = (j1.y + j2.y) / 2, cz = (j1.z + j2.z) / 2;
      lines.push(`   Frame=${f.id}   JointI=${f.jointI}   JointJ=${f.jointJ}   IsCurved=No   Length=${n(len)}   CentroidX=${n(cx)}   CentroidY=${n(cy)}   CentroidZ=${n(cz)}   GUID=${guid()}`);
    }
    lines.push(" ");
  }

  // ── CONNECTIVITY - AREA ──
  if (model.areas.length > 0) {
    lines.push(`TABLE:  "CONNECTIVITY - AREA"`);
    for (const a of model.areas) {
      const jStr = a.joints.map((jid, i) => `Joint${i + 1}=${jid}`).join("   ");
      lines.push(`   Area=${a.id}   NumJoints=${a.joints.length}   ${jStr}   GUID=${guid()}`);
    }
    lines.push(" ");
  }

  // ── RESTRAINTS ──
  if (model.restraints.length > 0) {
    lines.push(`TABLE:  "JOINT RESTRAINT ASSIGNMENTS"`);
    for (const r of model.restraints) {
      const yn = (b: boolean) => (b ? "Yes" : "No");
      lines.push(`   Joint=${r.joint}   U1=${yn(r.dof[0])}   U2=${yn(r.dof[1])}   U3=${yn(r.dof[2])}   R1=${yn(r.dof[3])}   R2=${yn(r.dof[4])}   R3=${yn(r.dof[5])}`);
    }
    lines.push(" ");
  }

  // ── FRAME SECTION ASSIGNMENTS ──
  if (model.frames.length > 0) {
    lines.push(`TABLE:  "FRAME SECTION ASSIGNMENTS"`);
    for (const f of model.frames) {
      lines.push(`   Frame=${f.id}   AutoSelect=N.A.   AnalSect=${f.section}   DesignSect=${f.section}   MatProp=Default`);
    }
    lines.push(" ");
  }

  // ── AREA SECTION ASSIGNMENTS ──
  if (model.areas.length > 0) {
    lines.push(`TABLE:  "AREA SECTION ASSIGNMENTS"`);
    for (const a of model.areas) {
      lines.push(`   Area=${a.id}   Section=${a.section}   MatProp=Default`);
    }
    lines.push(" ");
  }

  // ── AREA LOADS - UNIFORM ──
  if (model.areaLoads && model.areaLoads.length > 0) {
    lines.push(`TABLE:  "AREA LOADS - UNIFORM"`);
    for (const al of model.areaLoads) {
      const dir = al.dir ?? "Gravity";
      lines.push(`   Area=${al.area}   LoadPat=${al.pattern}   CoordSys=GLOBAL   Dir=${dir}   UnifLoad=${n(al.value)}`);
    }
    lines.push(" ");
  }

  // ── JOINT LOADS - FORCE ──
  if (model.jointLoads && model.jointLoads.length > 0) {
    lines.push(`TABLE:  "JOINT LOADS - FORCE"`);
    for (const jl of model.jointLoads) {
      const [F1, F2, F3, M1, M2, M3] = jl.values;
      lines.push(`   Joint=${jl.joint}   LoadPat=${jl.pattern}   CoordSys=GLOBAL   F1=${n(F1)}   F2=${n(F2)}   F3=${n(F3)}   M1=${n(M1)}   M2=${n(M2)}   M3=${n(M3)}`);
    }
    lines.push(" ");
  }

  lines.push("END TABLE DATA");

  return lines.join("\r\n");
}

/** Helper: dispara descarga del archivo .s2k en el browser (vía Blob + <a>). */
export function downloadS2k(model: S2kModel, filename: string = "Hekatan_export.s2k"): void {
  const text = exportS2k(model);
  const blob = new Blob([text], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(a.href);
}
