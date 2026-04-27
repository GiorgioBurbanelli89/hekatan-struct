/**
 * ETABS .e2k Importer — parsea archivos ETABS v22+ texto.
 *
 * Formato .e2k es DIFERENTE al .s2k de SAP2000:
 *   - .s2k: TABLE: "name" + filas key=value
 *   - .e2k: secciones con $ HEADER + filas KEYWORD "name" KEY1 "val1" KEY2 val2
 *
 * Secciones que parsea:
 *   $ MATERIAL PROPERTIES   → MATERIAL "..." TYPE ... E ... U ...
 *   $ FRAME SECTIONS        → FRAMESECTION "..." MATERIAL ... SHAPE ... D ... B ...
 *   $ SLAB PROPERTIES       → SHELLPROP "..." MODELINGTYPE ... SLABTHICKNESS ...
 *   $ POINT COORDINATES     → POINT "id" X Y Z
 *   $ LINE CONNECTIVITIES   → LINE "id" "BEAM" "ptI" "ptJ"
 *   $ AREA CONNECTIVITIES   → AREA "id" SHELL "p1" "p2" "p3" "p4"
 *   $ POINT ASSIGNS         → POINTASSIGN "id" "story" RESTRAINT "UX UY UZ"
 *   $ LINE ASSIGNS          → LINEASSIGN "id" "story" SECTION "..."
 *   $ AREA ASSIGNS          → AREAASSIGN "id" "story" SECTION "..."
 *   $ SHELL OBJECT LOADS    → AREALOAD "id" "story" TYPE "..." LC "..." VALUE
 */

export interface E2kMaterial {
  name: string;
  type?: "Concrete" | "Steel" | "Other";
  E?: number;       // kN/m²
  nu?: number;
  density?: number; // kN/m³
}

export interface E2kFrameSection {
  name: string;
  material?: string;
  shape?: string;
  /** Depth */
  D?: number;
  /** Width */
  B?: number;
  TF?: number;
  TW?: number;
}

export interface E2kShellProp {
  name: string;
  propType?: string;        // "Slab", "Wall", "Deck"
  material?: string;
  modelingType?: string;    // "ShellThin", "ShellThick", "Membrane"
  thickness?: number;
}

export interface E2kPoint {
  id: string;
  x: number; y: number; z: number;
}

export interface E2kLine {
  id: string;
  type: string;             // "BEAM", "COLUMN", "BRACE"
  ptI: string;
  ptJ: string;
  story?: string;
  section?: string;
}

export interface E2kArea {
  id: string;
  type: string;             // "SHELL", "PANEL"
  pts: string[];
  story?: string;
  section?: string;
}

export interface E2kRestraint {
  point: string;
  /** [Ux, Uy, Uz, Rx, Ry, Rz] */
  dof: [boolean, boolean, boolean, boolean, boolean, boolean];
}

export interface E2kAreaLoad {
  area: string;
  loadCase: string;
  type?: string;            // "UNIFLOAD", "GRAVITY", "LOAD"
  value: number;
  dir?: string;             // "Gravity", "Z", "Local 3"
}

export interface ImportedE2kModel {
  units?: { force: string; length: string };
  materials: Map<string, E2kMaterial>;
  frameSections: Map<string, E2kFrameSection>;
  shellProps: Map<string, E2kShellProp>;
  points: Map<string, E2kPoint>;
  lines: Map<string, E2kLine>;
  areas: Map<string, E2kArea>;
  restraints: E2kRestraint[];
  areaLoads: E2kAreaLoad[];
  bbox?: { xmin: number; xmax: number; ymin: number; ymax: number; zmin: number; zmax: number };
}

/** Tokenize una línea .e2k respetando strings entre comillas. */
function tokenize(line: string): string[] {
  const out: string[] = [];
  let cur = ""; let inStr = false;
  for (const ch of line) {
    if (ch === '"') {
      inStr = !inStr;
      if (!inStr && cur.length === 0) out.push("");  // empty string token
      else if (inStr && cur.length > 0) { out.push(cur); cur = ""; }
    } else if ((ch === " " || ch === "\t") && !inStr) {
      if (cur.length > 0) { out.push(cur); cur = ""; }
    } else {
      cur += ch;
    }
  }
  if (cur.length > 0) out.push(cur);
  return out.filter(t => t.length > 0);
}

/** Encuentra valor para una key (siguiente token después). */
function findVal(tokens: string[], key: string): string | null {
  const i = tokens.indexOf(key);
  if (i < 0 || i >= tokens.length - 1) return null;
  return tokens[i + 1];
}

function num(s: string | null): number | null {
  if (s == null) return null;
  const v = parseFloat(s);
  return Number.isFinite(v) ? v : null;
}

export function parseE2k(text: string): ImportedE2kModel {
  const lines = text.split(/\r?\n/);
  const out: ImportedE2kModel = {
    materials: new Map(),
    frameSections: new Map(),
    shellProps: new Map(),
    points: new Map(),
    lines: new Map(),
    areas: new Map(),
    restraints: [],
    areaLoads: [],
  };

  let section = "";
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    // Sección headers ($ MATERIAL PROPERTIES, $ FRAME SECTIONS, etc.)
    if (line.startsWith("$ ")) {
      section = line.substring(2).trim();
      continue;
    }
    if (line.startsWith("$")) {
      section = line.substring(1).trim();
      continue;
    }

    const tokens = tokenize(line);
    if (tokens.length < 2) continue;

    const keyword = tokens[0];

    // === MATERIAL PROPERTIES ===
    if (section === "MATERIAL PROPERTIES" && keyword === "MATERIAL") {
      const name = tokens[1];
      const m = out.materials.get(name) ?? { name };
      const t = (findVal(tokens, "TYPE") || "").toLowerCase();
      if (t.includes("concrete")) m.type = "Concrete";
      else if (t.includes("steel")) m.type = "Steel";
      else if (t) m.type = "Other";
      const E = num(findVal(tokens, "E"));
      const nu = num(findVal(tokens, "U"));
      const w = num(findVal(tokens, "W"));
      if (E != null) m.E = E;
      if (nu != null) m.nu = nu;
      if (w != null) m.density = w;
      out.materials.set(name, m);
    }

    // === FRAME SECTIONS ===
    if (section === "FRAME SECTIONS" && keyword === "FRAMESECTION") {
      const name = tokens[1];
      const sec: E2kFrameSection = { name };
      sec.material = findVal(tokens, "MATERIAL") ?? undefined;
      sec.shape = findVal(tokens, "SHAPE") ?? undefined;
      const D = num(findVal(tokens, "D")); if (D != null) sec.D = D;
      const B = num(findVal(tokens, "B")); if (B != null) sec.B = B;
      const TF = num(findVal(tokens, "TF")); if (TF != null) sec.TF = TF;
      const TW = num(findVal(tokens, "TW")); if (TW != null) sec.TW = TW;
      out.frameSections.set(name, sec);
    }

    // === SLAB PROPERTIES ===
    if (section === "SLAB PROPERTIES" && keyword === "SHELLPROP") {
      const name = tokens[1];
      const sp: E2kShellProp = { name };
      sp.propType = findVal(tokens, "PROPTYPE") ?? undefined;
      sp.material = findVal(tokens, "MATERIAL") ?? undefined;
      sp.modelingType = findVal(tokens, "MODELINGTYPE") ?? undefined;
      const t = num(findVal(tokens, "SLABTHICKNESS")) ?? num(findVal(tokens, "WALLTHICKNESS"));
      if (t != null) sp.thickness = t;
      out.shellProps.set(name, sp);
    }

    // === POINT COORDINATES ===
    // POINT  "1"  0  0  0
    if (section === "POINT COORDINATES" && keyword === "POINT") {
      const id = tokens[1];
      const x = num(tokens[2]); const y = num(tokens[3]); const z = num(tokens[4]);
      if (id && x != null && y != null && z != null) {
        out.points.set(id, { id, x, y, z });
      }
    }

    // === LINE CONNECTIVITIES ===
    // LINE  "B1"  "BEAM"  "1"  "2"  0
    if (section === "LINE CONNECTIVITIES" && keyword === "LINE") {
      const id = tokens[1];
      const type = tokens[2];
      const pi = tokens[3]; const pj = tokens[4];
      if (id && type && pi && pj) out.lines.set(id, { id, type, ptI: pi, ptJ: pj });
    }

    // === AREA CONNECTIVITIES ===
    // AREA  "F1"  SHELL  4  "p1"  "p2"  "p3"  "p4"  0 ...
    if (section === "AREA CONNECTIVITIES" && keyword === "AREA") {
      const id = tokens[1];
      const type = tokens[2];
      const npts = num(tokens[3]) ?? 4;
      const pts: string[] = [];
      for (let k = 0; k < npts; k++) {
        const p = tokens[4 + k];
        if (p) pts.push(p);
      }
      if (id && pts.length >= 3) out.areas.set(id, { id, type, pts });
    }

    // === POINT ASSIGNS — RESTRAINT ===
    if (section === "POINT ASSIGNS" && keyword === "POINTASSIGN") {
      const id = tokens[1];
      const r = findVal(tokens, "RESTRAINT");
      if (r) {
        const codes = r.toUpperCase();
        out.restraints.push({
          point: id,
          dof: [
            codes.includes("UX"), codes.includes("UY"), codes.includes("UZ"),
            codes.includes("RX"), codes.includes("RY"), codes.includes("RZ"),
          ],
        });
      }
    }

    // === LINE ASSIGNS — section assignment ===
    if (section === "LINE ASSIGNS" && keyword === "LINEASSIGN") {
      const id = tokens[1];
      const story = tokens[2];
      const sec = findVal(tokens, "SECTION");
      const ln = out.lines.get(id);
      if (ln) {
        if (story) ln.story = story;
        if (sec) ln.section = sec;
      }
    }

    // === AREA ASSIGNS — section assignment ===
    if (section === "AREA ASSIGNS" && keyword === "AREAASSIGN") {
      const id = tokens[1];
      const story = tokens[2];
      const sec = findVal(tokens, "SECTION");
      const ar = out.areas.get(id);
      if (ar) {
        if (story) ar.story = story;
        if (sec) ar.section = sec;
      }
    }

    // === SHELL OBJECT LOADS ===
    // AREALOAD  "F1"  "Base"  TYPE  "UNIFLOADSET"  LC  "Dead"  FX 0  FY 0  FZ -15  ...
    if (section === "SHELL OBJECT LOADS" && (keyword === "AREALOAD" || keyword === "SHELLLOAD")) {
      const id = tokens[1];
      const lc = findVal(tokens, "LC") ?? "DEAD";
      const fz = num(findVal(tokens, "FZ"));
      const dir = findVal(tokens, "DIR");
      if (id && fz != null) {
        out.areaLoads.push({ area: id, loadCase: lc, value: fz, dir: dir ?? undefined });
      }
    }
  }

  // BBox
  let xmin = Infinity, xmax = -Infinity, ymin = Infinity, ymax = -Infinity, zmin = Infinity, zmax = -Infinity;
  for (const p of out.points.values()) {
    if (p.x < xmin) xmin = p.x; if (p.x > xmax) xmax = p.x;
    if (p.y < ymin) ymin = p.y; if (p.y > ymax) ymax = p.y;
    if (p.z < zmin) zmin = p.z; if (p.z > zmax) zmax = p.z;
  }
  if (Number.isFinite(xmin)) {
    out.bbox = { xmin, xmax, ymin, ymax, zmin, zmax };
  }

  return out;
}

export function e2kSummary(m: ImportedE2kModel): string {
  const lines: string[] = [];
  lines.push("ETABS .e2k import");
  lines.push(`  Materials: ${m.materials.size}`);
  for (const mat of m.materials.values()) lines.push(`    ${mat.name} (${mat.type ?? "?"})`);
  lines.push(`  Frame sections: ${m.frameSections.size}`);
  for (const s of m.frameSections.values()) lines.push(`    ${s.name} ${s.shape ?? "?"} D=${s.D} B=${s.B}`);
  lines.push(`  Shell props: ${m.shellProps.size}`);
  for (const s of m.shellProps.values()) lines.push(`    ${s.name} (${s.modelingType ?? "?"}): t=${s.thickness}`);
  lines.push(`  Points: ${m.points.size}`);
  lines.push(`  Lines: ${m.lines.size}`);
  lines.push(`  Areas: ${m.areas.size}`);
  lines.push(`  Restraints: ${m.restraints.length}`);
  lines.push(`  Area loads: ${m.areaLoads.length}`);
  if (m.bbox) lines.push(`  BBox: X[${m.bbox.xmin.toFixed(2)}..${m.bbox.xmax.toFixed(2)}] Y[${m.bbox.ymin.toFixed(2)}..${m.bbox.ymax.toFixed(2)}]`);
  return lines.join("\n");
}
