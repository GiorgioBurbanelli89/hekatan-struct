/**
 * SAFE .f2k Importer — CIMENTACIÓN COMPLETA del edificio (N zapatas en 1 archivo)
 *
 * Inverso de `f2kCimentacionCompleta.ts`. Parsea un F2K que contiene N zapatas
 * (cada una como par Footing(i)/Stiff(i) en POINT/FLOOR OBJECT CONNECTIVITY)
 * y opcionalmente vigas de amarre (LINE OBJECT CONNECTIVITY) y devuelve los
 * datos en la misma forma que `F2kCimentacionData` del exporter, listos para
 * pasar a `exportEdificioCimentacionF2k` (roundtrip) o renderizar.
 */
import type {
  ZapataItem,
  VigaAmarreItem,
  F2kCimentacionData,
} from "./f2kCimentacionCompleta";

const TONF_TO_KN = 9.80665;

interface Joint {
  uid: number;
  x: number;
  y: number;
  z: number;
  isSpecial: boolean;
}

interface FloorObj {
  name: string;
  pts: number[];
  area: number;
}

interface JointLoad {
  joint: number;
  pattern: string;
  fz: number;
  mx: number;
  my: number;
}

interface AreaSpring {
  area: string | number;
  spring: string;
}

interface SpringProp {
  name: string;
  ks: number;
}

interface LineObj {
  name: string;
  ptI: number;
  ptJ: number;
}

interface SlabProp {
  name: string;
  thickness: number;
}

interface SectionAssignment {
  area: string | number;
  section: string;
}

/** Lee la unidad declarada en PROGRAM CONTROL. */
function detectUnits(text: string): { ksUnitFactor: number; momentToKnm: number; forceToKn: number; lengthToM: number } {
  let unitForce: keyof typeof FORCE_TO_KN = "tonf";
  let unitLength: keyof typeof LENGTH_TO_M = "m";
  const m = text.match(/CurrUnits\s*=\s*"([^"]+)"/);
  if (m) {
    const parts = m[1].split(",").map((s) => s.trim().toLowerCase());
    const f = parts[0];
    const L = parts[1];
    if (f === "tonf" || f === "kn" || f === "kip" || f === "lb" || f === "n") {
      unitForce = (f === "kn" ? "kN" : f) as any;
    }
    if (L === "m" || L === "mm" || L === "cm" || L === "ft" || L === "in") {
      unitLength = L as any;
    }
  }
  const FORCE_TO_KN_ = FORCE_TO_KN[unitForce];
  const LENGTH_TO_M_ = LENGTH_TO_M[unitLength];
  return {
    forceToKn: FORCE_TO_KN_,
    lengthToM: LENGTH_TO_M_,
    ksUnitFactor: FORCE_TO_KN_ / Math.pow(LENGTH_TO_M_, 3),
    momentToKnm: FORCE_TO_KN_ * LENGTH_TO_M_,
  };
}
const FORCE_TO_KN = { tonf: 9.80665, kN: 1, kip: 4.4482216, lb: 4.4482216e-3, N: 1e-3 } as const;
const LENGTH_TO_M = { m: 1, mm: 1e-3, cm: 1e-2, ft: 0.3048, in: 0.0254 } as const;

/** Parser util: extrae el bloque entre `TABLE:  "X"` y la próxima línea TABLE/END. */
function getTableBlock(text: string, name: string): string[] {
  const lines = text.split(/\r?\n/);
  const out: string[] = [];
  let inside = false;
  const re = new RegExp(`^TABLE:\\s+"${name.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}"\\s*$`);
  for (const line of lines) {
    if (re.test(line.trim())) { inside = true; continue; }
    if (inside) {
      if (/^TABLE:/.test(line.trim()) || /^END\s+TABLE/.test(line.trim())) break;
      const t = line.trim();
      if (t.length === 0) continue;
      out.push(t);
    }
  }
  return out;
}

/** Parser de pares "key=value" o `"quoted key"=value`, tolerante a espacios. */
function parseRow(row: string): Record<string, string> {
  const out: Record<string, string> = {};
  // Tokens: ("quoted key" | bareKey) = (quoted | bareValue)
  const re = /(?:"([^"]+)"|([A-Za-z][A-Za-z0-9 _\-?]*?))\s*=\s*(?:"([^"]*)"|(\S+))/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(row)) !== null) {
    const key = (m[1] ?? m[2] ?? "").trim();
    const val = (m[3] ?? m[4] ?? "").trim();
    if (key) out[key] = val;
  }
  return out;
}

const num = (s: string | undefined): number => {
  if (s == null) return NaN;
  // SAFE F2K may use comma decimal in some locales (e.g., "1,2" → 1.2)
  const cleaned = s.replace(/,(?=\d)/g, ".");
  return parseFloat(cleaned);
};

export interface ImportedCimentacion extends F2kCimentacionData {
  /** Mapeo Footing(i) → ZapataItem index, útil para debugging. */
  _zapataNames?: string[];
  /** Mensajes de diagnóstico. */
  _warnings?: string[];
}

/**
 * Parsea F2K con N zapatas (estructura Footing(i) + Stiff(i)) y vigas de amarre.
 * Devuelve la misma forma que `F2kCimentacionData` del exporter.
 */
export function parseEdificioCimentacionF2k(text: string): ImportedCimentacion {
  const warnings: string[] = [];
  const u = detectUnits(text);

  // ── 1. POINT OBJECT CONNECTIVITY → joints ──
  const joints = new Map<number, Joint>();
  for (const row of getTableBlock(text, "POINT OBJECT CONNECTIVITY")) {
    const r = parseRow(row);
    const uid = parseInt(r["UniqueName"], 10);
    if (!isFinite(uid)) continue;
    joints.set(uid, {
      uid,
      x: num(r["X"]) * u.lengthToM,
      y: num(r["Y"]) * u.lengthToM,
      z: num(r["Z"]) * u.lengthToM,
      isSpecial: (r["IsSpecial"] ?? "No").toLowerCase() === "yes",
    });
  }

  // ── 2. FLOOR OBJECT CONNECTIVITY → áreas (zapatas + stiff patches) ──
  const floors = new Map<string, FloorObj>();
  for (const row of getTableBlock(text, "FLOOR OBJECT CONNECTIVITY")) {
    const r = parseRow(row);
    const name = r["Unique Name"] ?? r["UniqueName"];
    if (!name) continue;
    const pts: number[] = [];
    for (let i = 1; i <= 8; i++) {
      const p = parseInt(r[`UniquePt${i}`], 10);
      if (isFinite(p)) pts.push(p);
    }
    const area = num(r["Area"]);
    floors.set(name, { name, pts, area: isFinite(area) ? area * u.lengthToM * u.lengthToM : 0 });
  }

  // ── 3. SLAB PROPERTY DEFINITIONS → thickness por nombre ──
  const slabProps = new Map<string, SlabProp>();
  for (const row of getTableBlock(text, "SLAB PROPERTY DEFINITIONS")) {
    const r = parseRow(row);
    const name = r["Name"];
    if (!name) continue;
    slabProps.set(name, { name, thickness: num(r["Slab Thickness"]) * u.lengthToM });
  }

  // ── 4. AREA ASSIGNMENTS - SECTION PROPERTIES → area name → section ──
  const areaSection = new Map<string, string>();
  for (const row of getTableBlock(text, "AREA ASSIGNMENTS - SECTION PROPERTIES")) {
    const r = parseRow(row);
    const a = r["UniqueName"];
    const sec = r["Section Property"];
    if (a && sec) areaSection.set(a, sec);
  }
  // Fallback: AREA ASSIGNMENTS - SUMMARY si no hay SECTION PROPERTIES
  if (areaSection.size === 0) {
    for (const row of getTableBlock(text, "AREA ASSIGNMENTS - SUMMARY")) {
      const r = parseRow(row);
      const a = r["UniqueName"];
      const sec = r["Section Property"];
      if (a && sec) areaSection.set(a, sec);
    }
  }

  // ── 5. SPRING PROPERTY DEFINITIONS - AREA SPRINGS → ks por nombre ──
  const areaSprings = new Map<string, number>();
  for (const row of getTableBlock(text, "SPRING PROPERTY DEFINITIONS - AREA SPRINGS")) {
    const r = parseRow(row);
    const name = r["Name"];
    const ks = num(r["Subgrade Modulus"]);
    if (name && isFinite(ks)) areaSprings.set(name, ks * u.ksUnitFactor);
  }

  // ── 6. AREA ASSIGNMENTS - AREA SPRINGS → area → spring name ──
  const areaSpringMap = new Map<string, string>();
  for (const row of getTableBlock(text, "AREA ASSIGNMENTS - AREA SPRINGS")) {
    const r = parseRow(row);
    const a = r["UniqueName"];
    const s = r["Spring Property"];
    if (a && s) areaSpringMap.set(a, s);
  }

  // ── 7. JOINT LOADS ASSIGNMENTS - FORCE → cargas por joint Y patrón ──
  // Un mismo joint tiene filas SEPARADAS Dead y Live (SAFE las lista en filas
  // distintas con el mismo UniqueName). Indexar solo por joint pisaba Dead con
  // Live → se perdía la carga muerta (BUG). Indexamos por (joint, patrón).
  const jointLoadsByPattern = new Map<number, Map<string, JointLoad>>();
  for (const row of getTableBlock(text, "JOINT LOADS ASSIGNMENTS - FORCE")) {
    const r = parseRow(row);
    const uid = parseInt(r["UniqueName"], 10);
    if (!isFinite(uid)) continue;
    const pattern = r["Load Pattern"] ?? "Dead";
    if (!jointLoadsByPattern.has(uid)) jointLoadsByPattern.set(uid, new Map());
    jointLoadsByPattern.get(uid)!.set(pattern, {
      joint: uid, pattern,
      fz: num(r["FZ"]), mx: num(r["MX"]), my: num(r["MY"]),
    });
  }

  // ── 8. RECONSTRUIR ZAPATAS: pareo Footing(i) + Stiff(i) ──
  // Los Footing son áreas con `Property Type=Footing` (o nombre que empieza con "Footing"
  // o `Section Property=Footing*`). Stiff es el patch chico.
  // Estrategia: agrupar por proximidad de centroides (los pares Footing/Stiff
  // tienen el mismo centro de columna).
  const zapatasFromFooting: Array<{
    footingArea: string;
    stiffArea?: string;
    pts: Joint[];
    stiffPts?: Joint[];
    centerJoint?: Joint;
  }> = [];

  // Identificar áreas Footing y Stiff por nombre de section
  const footingAreas: string[] = [];
  const stiffAreas: string[] = [];
  for (const [areaName, sec] of areaSection.entries()) {
    if (/^Footing/i.test(sec)) footingAreas.push(areaName);
    else if (/^Stiff/i.test(sec)) stiffAreas.push(areaName);
  }
  // Fallback: si no detectamos por nombre de section, usar nombre de área:
  // Footings son áreas numéricas (1, 2, ...), Stiff son LOAD1, LOAD2, ...
  if (footingAreas.length === 0 && stiffAreas.length === 0) {
    for (const fname of floors.keys()) {
      if (/^LOAD\d+/i.test(fname)) stiffAreas.push(fname);
      else if (/^\d+$/.test(fname)) footingAreas.push(fname);
    }
  }

  // Asociar cada Stiff a su Footing por proximidad de centroide (xy)
  const centroid = (pts: Joint[]): { x: number; y: number } => {
    let sx = 0, sy = 0;
    for (const p of pts) { sx += p.x; sy += p.y; }
    return { x: sx / pts.length, y: sy / pts.length };
  };

  const stiffData = stiffAreas.map((sa) => {
    const f = floors.get(sa);
    if (!f) return null;
    const pts = f.pts.map((u) => joints.get(u)!).filter(Boolean);
    return { area: sa, pts, ctr: centroid(pts) };
  }).filter(Boolean) as Array<{ area: string; pts: Joint[]; ctr: { x: number; y: number } }>;

  for (const fa of footingAreas) {
    const f = floors.get(fa);
    if (!f) continue;
    const pts = f.pts.map((u) => joints.get(u)!).filter(Boolean);
    if (pts.length < 4) continue;
    const ctr = centroid(pts);
    // Encontrar el Stiff más cercano (debe estar dentro de la zapata)
    let best: typeof stiffData[0] | undefined;
    let bestD = Infinity;
    for (const s of stiffData) {
      const dx = s.ctr.x - ctr.x;
      const dy = s.ctr.y - ctr.y;
      const d = Math.hypot(dx, dy);
      if (d < bestD) { bestD = d; best = s; }
    }
    // Centro joint = joint isSpecial dentro o cerca del centroide del Stiff
    let cj: Joint | undefined;
    if (best) {
      // El centro de columna es típicamente joint #9 del bloque (offset+9), special=Yes,
      // ubicado en el centro del Stiff patch.
      const candidates = Array.from(joints.values()).filter((j) =>
        j.isSpecial && Math.hypot(j.x - best!.ctr.x, j.y - best!.ctr.y) < 0.1
      );
      cj = candidates[0];
      if (!cj) {
        // Fallback: cualquier joint isSpecial cerca del centroide de Footing
        const c2 = Array.from(joints.values()).filter((j) =>
          j.isSpecial && Math.hypot(j.x - ctr.x, j.y - ctr.y) < Math.max(...pts.map(p => Math.hypot(p.x - ctr.x, p.y - ctr.y))) * 0.6
        );
        cj = c2[0];
      }
    }
    zapatasFromFooting.push({
      footingArea: fa,
      stiffArea: best?.area,
      pts,
      stiffPts: best?.pts,
      centerJoint: cj,
    });
  }

  // ── 9. CONSTRUIR ZapataItem[] ──
  // Filtrado: si la "zapata" tiene Lz o Bz > umbral (ej. 5m), es una
  // cimentación corrida o losa, no una zapata aislada. Las clasificamos
  // como vigas T invertida (las dejamos como zapata pero con flag).
  const ZAPATA_MAX_DIM_M = 8.0;  // arriba de eso, sospecha cimentación corrida
  const zapatas: ZapataItem[] = [];
  // Array de vigas de amarre — se popula tanto desde strip footings (acá)
  // como desde BEAM OBJECT CONNECTIVITY (más abajo).
  const vigasAmarre: VigaAmarreItem[] = [];
  const vigasAmarrePush = (v: VigaAmarreItem) => vigasAmarre.push(v);
  let nStripFootings = 0;
  let ks_kNm3 = 0;
  let ksCount = 0;
  for (const z of zapatasFromFooting) {
    const xs = z.pts.map((p) => p.x);
    const ys = z.pts.map((p) => p.y);
    const Lz = Math.max(...xs) - Math.min(...xs);
    const Bz = Math.max(...ys) - Math.min(...ys);
    const xC = (Math.min(...xs) + Math.max(...xs)) / 2;
    const yC = (Math.min(...ys) + Math.max(...ys)) / 2;
    // Detectar strip footing: una dimensión >> que la otra (relación >5:1)
    // o cualquiera > umbral
    const aspectRatio = Math.max(Lz, Bz) / Math.max(Math.min(Lz, Bz), 0.01);
    const isStrip = aspectRatio > 5 || Math.max(Lz, Bz) > ZAPATA_MAX_DIM_M;
    if (isStrip) {
      nStripFootings++;
      // Si Lz>>Bz, convertir a viga de amarre (línea por el centroide en X)
      if (Lz > Bz) {
        vigasAmarrePush({
          x1: Math.min(...xs), y1: yC, x2: Math.max(...xs), y2: yC,
          h: 0.6, b: Bz, z: z.pts[0]?.z ?? 0,
        });
      } else {
        vigasAmarrePush({
          x1: xC, y1: Math.min(...ys), x2: xC, y2: Math.max(...ys),
          h: 0.6, b: Lz, z: z.pts[0]?.z ?? 0,
        });
      }
      continue; // saltar — no es zapata aislada
    }
    let bc = 0.4;
    let xCol = xC, yCol = yC;
    if (z.stiffPts && z.stiffPts.length >= 4) {
      const sxs = z.stiffPts.map((p) => p.x);
      const sys = z.stiffPts.map((p) => p.y);
      bc = Math.max(...sxs) - Math.min(...sxs);
      xCol = (Math.min(...sxs) + Math.max(...sxs)) / 2;
      yCol = (Math.min(...sys) + Math.max(...sys)) / 2;
    }
    // Espesor: del SLAB PROPERTY del section asignado al Footing
    let tz = 0.3;
    const sec = areaSection.get(z.footingArea);
    if (sec && slabProps.has(sec)) tz = slabProps.get(sec)!.thickness;

    // Cargas: del joint center, separando Dead y Live por patrón.
    let P_dead_kN = 0, Mx_dead_kNm = 0, My_dead_kNm = 0;
    let P_live_kN = 0, Mx_live_kNm = 0, My_live_kNm = 0;
    if (z.centerJoint && jointLoadsByPattern.has(z.centerJoint.uid)) {
      for (const [pat, jl] of jointLoadsByPattern.get(z.centerJoint.uid)!) {
        const P = Math.abs(jl.fz) * u.forceToKn;
        const Mx = (jl.mx || 0) * u.momentToKnm;
        const My = (jl.my || 0) * u.momentToKnm;
        if (/live/i.test(pat)) { P_live_kN += P; Mx_live_kNm += Mx; My_live_kNm += My; }
        else { P_dead_kN += P; Mx_dead_kNm += Mx; My_dead_kNm += My; }
      }
    }

    // ks: del area spring asignado
    const springName = areaSpringMap.get(z.footingArea);
    if (springName && areaSprings.has(springName)) {
      ks_kNm3 += areaSprings.get(springName)!;
      ksCount++;
    }

    zapatas.push({
      xC, yC, xCol, yCol, Lz, Bz, tz, bc,
      P_dead_kN, Mx_dead_kNm, My_dead_kNm,
      P_live_kN, Mx_live_kNm, My_live_kNm,
      label: z.footingArea,
    });
  }

  if (ksCount > 0) ks_kNm3 = ks_kNm3 / ksCount;
  else {
    // Fallback: primer area spring
    const firstKs = Array.from(areaSprings.values())[0];
    if (firstKs) {
      ks_kNm3 = firstKs;
      warnings.push("ks no asignado a áreas — usando primer SPRING PROPERTY definido.");
    } else {
      warnings.push("No se encontró ningún Subgrade Modulus en el F2K.");
    }
  }

  // ── 10. VIGAS DE AMARRE: SAFE usa BEAM OBJECT CONNECTIVITY (no LINE).
  // Verificado contra Cimentacion de Edificaciones.f2k y Riochico.f2k:
  //   TABLE: "BEAM OBJECT CONNECTIVITY"
  //     "Unique Name"=N (con comillas), UniquePtI=N, UniquePtJ=N, Length, GUID
  //   TABLE: "FRAME SECTION PROPERTY DEFINITIONS - SUMMARY"
  //     Name=X, Material=Y, Shape="Concrete Rectangular", Area, J, I33, I22, ...
  //   TABLE: "FRAME SECTION PROPERTY DEFINITIONS - CONCRETE RECTANGULAR"
  //     Name=X, Depth=h, Width=b, "Section Type"=Beam/Column
  //   TABLE: "FRAME ASSIGNMENTS - SECTION PROPERTIES"
  //     UniqueName=N, "Section Property"=X
  // Mantenemos compatibilidad con LINE OBJECT CONNECTIVITY (formato antiguo
  // Hekatan) como fallback.
  const lines: LineObj[] = [];
  // Primero BEAM (formato real SAFE)
  for (const row of getTableBlock(text, "BEAM OBJECT CONNECTIVITY")) {
    const r = parseRow(row);
    const name = r["Unique Name"] ?? r["UniqueName"];
    const ptI = parseInt(r["UniquePtI"], 10);
    const ptJ = parseInt(r["UniquePtJ"], 10);
    if (name && isFinite(ptI) && isFinite(ptJ)) lines.push({ name, ptI, ptJ });
  }
  // Fallback LINE OBJECT CONNECTIVITY (formato Hekatan antiguo)
  if (lines.length === 0) {
    for (const row of getTableBlock(text, "LINE OBJECT CONNECTIVITY")) {
      const r = parseRow(row);
      const name = r["Unique Name"] ?? r["UniqueName"];
      const ptI = parseInt(r["UniquePtI"], 10);
      const ptJ = parseInt(r["UniquePtJ"], 10);
      if (name && isFinite(ptI) && isFinite(ptJ)) lines.push({ name, ptI, ptJ });
    }
  }

  // Secciones — primero el formato real SAFE (FRAME SECTION PROPERTY DEFINITIONS)
  const frameSec = new Map<string, { h: number; b: number; type?: string }>();
  // Width/Depth desde CONCRETE RECTANGULAR (más confiable)
  for (const row of getTableBlock(text, "FRAME SECTION PROPERTY DEFINITIONS - CONCRETE RECTANGULAR")) {
    const r = parseRow(row);
    const name = r["Name"];
    if (!name) continue;
    frameSec.set(name, {
      h: num(r["Depth"]) * u.lengthToM,
      b: num(r["Width"]) * u.lengthToM,
      type: r["Section Type"], // "Beam" | "Column"
    });
  }
  // Si no encontramos en CONCRETE RECTANGULAR, leer de SUMMARY (puede tener Area pero no Width/Depth)
  if (frameSec.size === 0) {
    for (const row of getTableBlock(text, "FRAME SECTION PROPERTY DEFINITIONS - SUMMARY")) {
      const r = parseRow(row);
      const name = r["Name"];
      if (!name) continue;
      // Intentar reconstruir b,h de Area + I33 (rectangular: I33=b·h³/12)
      const A = num(r["Area"]);
      const I33 = num(r["I33"]);
      if (isFinite(A) && isFinite(I33) && A > 0) {
        // h² = 12·I33/A → h = sqrt(12·I33/A)
        const h = Math.sqrt(12 * I33 / A);
        const b = A / h;
        frameSec.set(name, { h: h * u.lengthToM, b: b * u.lengthToM });
      }
    }
  }
  // Fallback formato antiguo Hekatan (FRAME SECTION PROPERTIES - GENERAL con t3=h, t2=b)
  if (frameSec.size === 0) {
    for (const row of getTableBlock(text, "FRAME SECTION PROPERTIES - GENERAL")) {
      const r = parseRow(row);
      const name = r["SectionName"];
      if (!name) continue;
      frameSec.set(name, { h: num(r["t3"]) * u.lengthToM, b: num(r["t2"]) * u.lengthToM });
    }
  }

  // Shape de cada sección (Concrete Rectangular vs Steel I/Wide Flange...) para
  // descartar frames de acero (columnas) que NO son vigas de amarre de hormigón.
  const sectionShape = new Map<string, string>();
  for (const row of getTableBlock(text, "FRAME SECTION PROPERTY DEFINITIONS - SUMMARY")) {
    const r = parseRow(row);
    const name = r["Name"];
    if (name && r["Shape"]) sectionShape.set(name, r["Shape"]);
  }

  // Asignación frame → section: primero FRAME ASSIGNMENTS (real SAFE)
  const lineSec = new Map<string, string>();
  for (const row of getTableBlock(text, "FRAME ASSIGNMENTS - SECTION PROPERTIES")) {
    const r = parseRow(row);
    const a = r["UniqueName"];
    const sec = r["Section Property"];
    if (a && sec) lineSec.set(a, sec);
  }
  // Fallback LINE ASSIGNMENTS
  if (lineSec.size === 0) {
    for (const row of getTableBlock(text, "LINE ASSIGNMENTS - SECTION PROPERTIES")) {
      const r = parseRow(row);
      const a = r["UniqueName"];
      const sec = r["Section Property"];
      if (a && sec) lineSec.set(a, sec);
    }
  }

  // (vigasAmarre ya está declarado arriba; aquí solo agregamos las BEAMs)
  let nVigasIgnoradasColumna = 0;
  for (const ln of lines) {
    const j1 = joints.get(ln.ptI);
    const j2 = joints.get(ln.ptJ);
    if (!j1 || !j2) continue;
    const secName = lineSec.get(ln.name);
    const dim = secName ? frameSec.get(secName) : undefined;
    const dx = j2.x - j1.x, dy = j2.y - j1.y, dz = j2.z - j1.z;
    const isVertical = Math.abs(dz) > Math.max(Math.abs(dx), Math.abs(dy));
    // Viga de amarre = frame HORIZONTAL con sección de HORMIGÓN rectangular (dim
    // leído de CONCRETE RECTANGULAR). SAFE marca las vigas de cimentación como
    // Section Type=Column → NO se filtra por eso (antes descartaba la viga real).
    // Las columnas reales son verticales; los frames de ACERO (Steel I/Wide
    // Flange...) se descartan en vez de aceptarse con dims default (antes la
    // columna de acero se colaba como viga 0.25×0.4).
    const shape = secName ? (sectionShape.get(secName) ?? "") : "";
    const isSteel = /steel|flange|angle|channel|\bpipe\b|\btube\b/i.test(shape);
    if (isVertical || isSteel || !dim) {
      nVigasIgnoradasColumna++;
      continue;
    }
    vigasAmarrePush({
      x1: j1.x, y1: j1.y, x2: j2.x, y2: j2.y,
      h: dim.h,
      b: dim.b,
      z: j1.z,
    });
  }
  if (nVigasIgnoradasColumna > 0) {
    warnings.push(`${nVigasIgnoradasColumna} BEAMs verticales/Column ignoradas (no son vigas de amarre)`);
  }
  if (nStripFootings > 0) {
    warnings.push(`${nStripFootings} cimentaciones corridas/strip footings convertidas a vigas (Lz×Bz > ${ZAPATA_MAX_DIM_M}m o aspect>5)`);
  }

  // ── 11. Cota Z: del primer joint
  const Z = joints.size > 0 ? Array.from(joints.values())[0].z : 0;

  return {
    zapatas,
    vigasAmarre: vigasAmarre.length ? vigasAmarre : undefined,
    ks_kNm3,
    Z,
    _zapataNames: zapatasFromFooting.map((z) => z.footingArea),
    _warnings: warnings,
  };
}
