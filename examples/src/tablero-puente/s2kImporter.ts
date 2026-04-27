/**
 * SAP2000 .s2k Importer — parsea archivo SAP2000 v24+ y extrae el modelo
 * para reconstruirlo en Hekatan. Hermano del f2kImporter (SAFE) — el formato
 * .s2k tiene la MISMA estructura "TABLE: name" + key=value, solo cambian los
 * nombres de tablas.
 *
 * Tablas que parsea:
 *   - PROGRAM CONTROL                        → CurrUnits
 *   - MATERIAL PROPERTIES 02 - BASIC...      → E, nu, density por material
 *   - FRAME SECTION PROPERTIES 01 - GENERAL  → secciones I (t3, t2, tf, tw, A, I33)
 *   - AREA SECTION PROPERTIES                → secciones de losa (Thickness, Material)
 *   - JOINT COORDINATES                      → nodos (GlobalX, Y, Z)
 *   - CONNECTIVITY - FRAME                   → frames (JointI, JointJ)
 *   - CONNECTIVITY - AREA                    → shells (Joint1..Joint4)
 *   - JOINT RESTRAINT ASSIGNMENTS            → apoyos (U1, U2, U3, R1, R2, R3)
 *   - FRAME SECTION ASSIGNMENTS              → asigna seccion a cada frame
 *   - AREA LOADS - UNIFORM                   → cargas distribuidas en areas
 *   - JOINT LOADS - FORCE                    → cargas puntuales en nodos
 */

export interface S2kMaterial {
  name: string;
  E?: number;       // kN/m²
  nu?: number;
  density?: number; // kN/m³ (UnitWeight)
  type?: "concrete" | "steel" | "other";
}

export interface S2kFrameSection {
  name: string;
  material?: string;
  shape?: string;     // "I/Wide Flange", "Rectangular", "Pipe", etc.
  /** Total height (in/iz) o lado mayor */
  t3?: number;
  /** Top flange width o lado menor */
  t2?: number;
  tf?: number;
  tw?: number;
  /** Bottom flange width (cuando difiere de t2) */
  t2b?: number;
  tfb?: number;
  /** Area total */
  A?: number;
  /** Iz mayor (about 3-axis, fuerte) */
  I33?: number;
  /** Iy menor (about 2-axis, debil) */
  I22?: number;
}

export interface S2kAreaSection {
  name: string;
  material?: string;
  type?: string;       // "Shell-Thin", "Shell-Thick", "Membrane", "Plate"
  thickness?: number;  // m
  bendThick?: number;
}

export interface S2kJoint {
  id: string;
  x: number; y: number; z: number;
}

export interface S2kFrame {
  id: string;
  jointI: string;
  jointJ: string;
  section?: string;
}

export interface S2kArea {
  id: string;
  joints: string[];
  section?: string;
}

export interface S2kRestraint {
  joint: string;
  /** [U1, U2, U3, R1, R2, R3] — true = restringido */
  dof: [boolean, boolean, boolean, boolean, boolean, boolean];
}

export interface S2kAreaLoad {
  area: string;
  pattern: string;
  dir: string;     // "Gravity" | "X" | "Y" | "Z" | "Local 1/2/3"
  value: number;   // sign del archivo (en SAP "Gravity" + valor positivo = abajo)
}

export interface S2kJointLoad {
  joint: string;
  pattern: string;
  /** [F1, F2, F3, M1, M2, M3] */
  values: [number, number, number, number, number, number];
}

export interface ImportedS2kModel {
  units: { force: string; length: string };
  materials: Map<string, S2kMaterial>;
  frameSections: Map<string, S2kFrameSection>;
  areaSections: Map<string, S2kAreaSection>;
  joints: Map<string, S2kJoint>;
  frames: Map<string, S2kFrame>;
  areas: Map<string, S2kArea>;
  restraints: S2kRestraint[];
  areaLoads: S2kAreaLoad[];
  jointLoads: S2kJointLoad[];
  /** Bounding box derivado de joints (m) */
  bbox?: { xmin: number; xmax: number; ymin: number; ymax: number; zmin: number; zmax: number };
}

/** Helper: extrae 'Key=Value' de una linea s2k. Maneja Value entre comillas. */
function extract(line: string, key: string): string | null {
  const re = new RegExp(`\\b${key}\\s*=\\s*("[^"]*"|[^\\s]+)`, "i");
  const m = line.match(re);
  if (!m) return null;
  return m[1].replace(/^"|"$/g, "");
}

function num(s: string | null): number | null {
  if (s == null) return null;
  const v = parseFloat(s);
  return Number.isFinite(v) ? v : null;
}

/** Convierte unit_force, unit_length → factor para llevar a kN, m. */
function unitFactors(force: string, length: string) {
  const F: Record<string, number> = { KN: 1, kN: 1, kn: 1, tonf: 9.80665, kip: 4.4482216, lb: 4.4482216e-3, N: 1e-3, kgf: 9.80665e-3 };
  const L: Record<string, number> = { m: 1, M: 1, mm: 1e-3, cm: 1e-2, ft: 0.3048, in: 0.0254 };
  return {
    forceToKN: F[force] ?? 1,
    lengthToM: L[length] ?? 1,
  };
}

export function parseS2k(text: string): ImportedS2kModel {
  const lines = text.split(/\r?\n/);

  // ── Detectar CurrUnits del header ──
  let unitForce = "kN", unitLength = "m";
  const cuMatch = text.match(/CurrUnits\s*=\s*"([^"]+)"/i);
  if (cuMatch) {
    const parts = cuMatch[1].split(",").map((s) => s.trim());
    unitForce = parts[0] ?? "kN";
    unitLength = parts[1] ?? "m";
  }
  const { forceToKN, lengthToM } = unitFactors(unitForce, unitLength);

  const out: ImportedS2kModel = {
    units: { force: unitForce, length: unitLength },
    materials: new Map(),
    frameSections: new Map(),
    areaSections: new Map(),
    joints: new Map(),
    frames: new Map(),
    areas: new Map(),
    restraints: [],
    areaLoads: [],
    jointLoads: [],
  };

  let table = "";
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;
    if (line.startsWith("TABLE:")) {
      const m = line.match(/TABLE:\s*"([^"]+)"/);
      table = m ? m[1] : "";
      continue;
    }

    // === MATERIALES ===
    if (table === "MATERIAL PROPERTIES 01 - GENERAL") {
      const name = extract(line, "Material");
      if (name) {
        const t = (extract(line, "Type") || "").toLowerCase();
        const matType: "concrete" | "steel" | "other" =
          t.includes("concrete") ? "concrete" :
          t.includes("steel") ? "steel" : "other";
        out.materials.set(name, { name, type: matType });
      }
    }
    if (table === "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES") {
      const name = extract(line, "Material");
      if (name) {
        const m = out.materials.get(name) ?? { name };
        const E = num(extract(line, "E1"));
        const nu = num(extract(line, "U12"));
        const w = num(extract(line, "UnitWeight"));
        if (E != null) m.E = E * forceToKN / (lengthToM * lengthToM);  // kN/m²
        if (nu != null) m.nu = nu;
        if (w != null) m.density = w * forceToKN / (lengthToM * lengthToM * lengthToM);  // kN/m³
        out.materials.set(name, m);
      }
    }

    // === SECCIONES DE FRAME ===
    if (table === "FRAME SECTION PROPERTIES 01 - GENERAL") {
      const name = extract(line, "SectionName");
      if (name) {
        const sec: S2kFrameSection = { name };
        sec.material = extract(line, "Material") ?? undefined;
        sec.shape = extract(line, "Shape") ?? undefined;
        const t3 = num(extract(line, "t3"));
        const t2 = num(extract(line, "t2"));
        const tf = num(extract(line, "tf"));
        const tw = num(extract(line, "tw"));
        const t2b = num(extract(line, "t2b"));
        const tfb = num(extract(line, "tfb"));
        const A = num(extract(line, "Area"));
        const I33 = num(extract(line, "I33"));
        const I22 = num(extract(line, "I22"));
        if (t3 != null) sec.t3 = t3 * lengthToM;
        if (t2 != null) sec.t2 = t2 * lengthToM;
        if (tf != null) sec.tf = tf * lengthToM;
        if (tw != null) sec.tw = tw * lengthToM;
        if (t2b != null) sec.t2b = t2b * lengthToM;
        if (tfb != null) sec.tfb = tfb * lengthToM;
        if (A != null) sec.A = A * lengthToM * lengthToM;
        if (I33 != null) sec.I33 = I33 * Math.pow(lengthToM, 4);
        if (I22 != null) sec.I22 = I22 * Math.pow(lengthToM, 4);
        out.frameSections.set(name, sec);
      }
    }

    // === SECCIONES DE AREA ===
    if (table === "AREA SECTION PROPERTIES") {
      const name = extract(line, "Section");
      if (name) {
        const sec: S2kAreaSection = { name };
        sec.material = extract(line, "Material") ?? undefined;
        sec.type = extract(line, "Type") ?? undefined;
        const t = num(extract(line, "Thickness"));
        const tb = num(extract(line, "BendThick"));
        if (t != null) sec.thickness = t * lengthToM;
        if (tb != null) sec.bendThick = tb * lengthToM;
        out.areaSections.set(name, sec);
      }
    }

    // === JOINT COORDINATES ===
    if (table === "JOINT COORDINATES") {
      const id = extract(line, "Joint");
      const x = num(extract(line, "GlobalX") ?? extract(line, "XorR"));
      const y = num(extract(line, "GlobalY") ?? extract(line, "Y"));
      const z = num(extract(line, "GlobalZ") ?? extract(line, "Z"));
      if (id && x != null && y != null && z != null) {
        out.joints.set(id, {
          id,
          x: x * lengthToM,
          y: y * lengthToM,
          z: z * lengthToM,
        });
      }
    }

    // === CONNECTIVITY - FRAME ===
    if (table === "CONNECTIVITY - FRAME") {
      const id = extract(line, "Frame");
      const jI = extract(line, "JointI");
      const jJ = extract(line, "JointJ");
      if (id && jI && jJ) {
        out.frames.set(id, { id, jointI: jI, jointJ: jJ });
      }
    }

    // === CONNECTIVITY - AREA ===
    if (table === "CONNECTIVITY - AREA") {
      const id = extract(line, "Area");
      const n = num(extract(line, "NumJoints")) ?? 4;
      if (id) {
        const joints: string[] = [];
        for (let k = 1; k <= n; k++) {
          const j = extract(line, `Joint${k}`);
          if (j) joints.push(j);
        }
        if (joints.length >= 3) out.areas.set(id, { id, joints });
      }
    }

    // === JOINT RESTRAINTS ===
    if (table === "JOINT RESTRAINT ASSIGNMENTS") {
      const j = extract(line, "Joint");
      if (j) {
        const yes = (k: string) => (extract(line, k) || "").toLowerCase() === "yes";
        out.restraints.push({
          joint: j,
          dof: [yes("U1"), yes("U2"), yes("U3"), yes("R1"), yes("R2"), yes("R3")],
        });
      }
    }

    // === FRAME SECTION ASSIGNMENTS ===
    if (table === "FRAME SECTION ASSIGNMENTS") {
      const f = extract(line, "Frame");
      const sec = extract(line, "AnalSect") ?? extract(line, "DesignSect") ?? extract(line, "Section");
      if (f && sec) {
        const fr = out.frames.get(f);
        if (fr) fr.section = sec;
      }
    }

    // === AREA SECTION ASSIGNMENTS ===
    if (table === "AREA SECTION ASSIGNMENTS") {
      const a = extract(line, "Area");
      const sec = extract(line, "Section");
      if (a && sec) {
        const ar = out.areas.get(a);
        if (ar) ar.section = sec;
      }
    }

    // === AREA LOADS - UNIFORM ===
    if (table === "AREA LOADS - UNIFORM") {
      const a = extract(line, "Area");
      const pat = extract(line, "LoadPat");
      const dir = extract(line, "Dir");
      const val = num(extract(line, "UnifLoad"));
      if (a && pat && dir != null && val != null) {
        out.areaLoads.push({
          area: a, pattern: pat, dir,
          value: val * forceToKN / (lengthToM * lengthToM),  // kN/m²
        });
      }
    }

    // === JOINT LOADS - FORCE ===
    if (table.includes("JOINT LOADS")) {
      const j = extract(line, "Joint");
      const pat = extract(line, "LoadPat");
      if (j && pat) {
        const F1 = num(extract(line, "F1")) ?? 0;
        const F2 = num(extract(line, "F2")) ?? 0;
        const F3 = num(extract(line, "F3")) ?? 0;
        const M1 = num(extract(line, "M1")) ?? 0;
        const M2 = num(extract(line, "M2")) ?? 0;
        const M3 = num(extract(line, "M3")) ?? 0;
        const fk = forceToKN, mk = forceToKN * lengthToM;
        out.jointLoads.push({
          joint: j, pattern: pat,
          values: [F1*fk, F2*fk, F3*fk, M1*mk, M2*mk, M3*mk],
        });
      }
    }
  }

  // BBox de joints
  let xmin = Infinity, xmax = -Infinity, ymin = Infinity, ymax = -Infinity, zmin = Infinity, zmax = -Infinity;
  for (const j of out.joints.values()) {
    if (j.x < xmin) xmin = j.x; if (j.x > xmax) xmax = j.x;
    if (j.y < ymin) ymin = j.y; if (j.y > ymax) ymax = j.y;
    if (j.z < zmin) zmin = j.z; if (j.z > zmax) zmax = j.z;
  }
  if (Number.isFinite(xmin)) {
    out.bbox = { xmin, xmax, ymin, ymax, zmin, zmax };
  }

  return out;
}

/** Resumen del modelo importado, util para debugging y display. */
export function s2kSummary(m: ImportedS2kModel): string {
  const lines: string[] = [];
  lines.push(`SAP2000 .s2k import — units: ${m.units.force}, ${m.units.length}`);
  lines.push(`  Materials: ${m.materials.size}`);
  for (const mat of m.materials.values()) {
    lines.push(`    ${mat.name} (${mat.type ?? "?"}): E=${mat.E?.toExponential(2) ?? "?"} kN/m²`);
  }
  lines.push(`  Frame sections: ${m.frameSections.size}`);
  for (const s of m.frameSections.values()) {
    lines.push(`    ${s.name} ${s.shape ?? "?"}: A=${s.A?.toExponential(2)}, I33=${s.I33?.toExponential(2)}`);
  }
  lines.push(`  Area sections: ${m.areaSections.size}`);
  for (const s of m.areaSections.values()) {
    lines.push(`    ${s.name} (${s.type ?? "?"}): t=${s.thickness ?? "?"} m`);
  }
  lines.push(`  Joints: ${m.joints.size}`);
  lines.push(`  Frames: ${m.frames.size}`);
  lines.push(`  Areas: ${m.areas.size}`);
  lines.push(`  Restraints: ${m.restraints.length}`);
  lines.push(`  Area loads: ${m.areaLoads.length}`);
  lines.push(`  Joint loads: ${m.jointLoads.length}`);
  if (m.bbox) {
    lines.push(`  BBox: X[${m.bbox.xmin.toFixed(2)}..${m.bbox.xmax.toFixed(2)}] Y[${m.bbox.ymin.toFixed(2)}..${m.bbox.ymax.toFixed(2)}] Z[${m.bbox.zmin.toFixed(2)}..${m.bbox.zmax.toFixed(2)}]`);
  }
  return lines.join("\n");
}
