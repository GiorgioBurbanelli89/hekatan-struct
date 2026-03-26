/**
 * IFC Analytical Model Parser
 * Generates FEM analytical model from IFC geometric model
 *
 * IFC geométrico → Modelo analítico:
 *   IFCCOLUMN → frame (línea centroide, 2 nodos)
 *   IFCBEAM   → frame (línea centroide, 2 nodos)
 *   IFCSLAB   → shells Q4 (plano medio)
 *   IFCWALL   → shells Q4 (plano medio)
 *   IFCRECTANGLEPROFILEDEF → A, Iz, Iy, J
 */

// ═══════════════════════════════════════════
// Types
// ═══════════════════════════════════════════

export interface IfcAnalyticalNode {
  id: number;
  x: number; y: number; z: number;
}

export interface IfcAnalyticalElement {
  id: number;
  type: "frame" | "shell";
  nodeIds: number[];      // 2 for frame, 4 for shell
  category: string;       // "column", "beam", "slab", "wall"
  sectionName: string;
  b: number; h: number;   // section dimensions (m)
  material: string;
  expressID: number;      // original IFC entity
}

export interface IfcAnalyticalModel {
  nodes: IfcAnalyticalNode[];
  elements: IfcAnalyticalElement[];
  materials: Map<string, { E: number; nu: number; rho: number }>;
  levels: { name: string; elevation: number }[];
  projectName: string;
  schema: string;
}

// ═══════════════════════════════════════════
// IFC Text Parser (ISO-10303-21)
// ═══════════════════════════════════════════

interface IfcEntity {
  id: number;
  type: string;
  args: string;
}

interface ParsedIfc {
  entities: Record<number, IfcEntity>;
  typeIndex: Record<string, number[]>;
  meta: { schema: string; project: string; app: string };
}

function splitArgs(args: string): string[] {
  const result: string[] = [];
  let depth = 0, inQ = false, cur = "";
  for (let i = 0; i < args.length; i++) {
    const c = args[i];
    if (c === "'" && (i === 0 || args[i - 1] !== "\\")) { inQ = !inQ; cur += c; continue; }
    if (inQ) { cur += c; continue; }
    if (c === "(") { depth++; cur += c; continue; }
    if (c === ")") { depth--; cur += c; continue; }
    if (c === "," && depth === 0) { result.push(cur.trim()); cur = ""; continue; }
    cur += c;
  }
  if (cur.trim()) result.push(cur.trim());
  return result;
}

function field(args: string, idx: number): string | null {
  const fields = splitArgs(args);
  if (idx < fields.length) {
    let v = fields[idx].trim();
    if (v.startsWith("'") && v.endsWith("'")) v = v.slice(1, -1);
    return v === "$" ? null : v;
  }
  return null;
}

function parseIfcText(text: string): ParsedIfc {
  const meta = { schema: "", project: "", app: "" };
  const entities: Record<number, IfcEntity> = {};
  const typeIndex: Record<string, number[]> = {};

  const schemaM = text.match(/FILE_SCHEMA\s*\(\s*\(\s*'([^']*)'/i);
  if (schemaM) meta.schema = schemaM[1];

  const entRe = /^#(\d+)\s*=\s*([A-Z][A-Z0-9_]*)\s*\(([\s\S]*?)\)\s*;\s*$/gm;
  let m: RegExpExecArray | null;
  while ((m = entRe.exec(text)) !== null) {
    const id = parseInt(m[1]);
    const type = m[2].toUpperCase();
    entities[id] = { id, type, args: m[3] };
    if (!typeIndex[type]) typeIndex[type] = [];
    typeIndex[type].push(id);
  }

  if (typeIndex["IFCPROJECT"]) {
    const pe = entities[typeIndex["IFCPROJECT"][0]];
    if (pe) { const n = field(pe.args, 2); if (n) meta.project = n; }
  }

  return { meta, entities, typeIndex };
}

// ═══════════════════════════════════════════
// Geometry extraction helpers
// ═══════════════════════════════════════════

function resolveRef(entities: Record<number, IfcEntity>, refStr: string): IfcEntity | null {
  const m = refStr.match(/#(\d+)/);
  return m ? entities[parseInt(m[1])] || null : null;
}

/** Resolve IFCAXIS2PLACEMENT3D → { origin, dirZ, dirX } */
function getPlacement3D(entities: Record<number, IfcEntity>, entity: IfcEntity): { origin: number[]; dirZ: number[]; dirX: number[] } {
  const f = splitArgs(entity.args);
  // f[0] = location (#ref), f[1] = axis (#ref or $), f[2] = refDirection (#ref or $)
  const locE = resolveRef(entities, f[0]);
  const origin = locE ? getCartesianPoint(entities, locE) : [0, 0, 0];

  let dirZ = [0, 0, 1];
  let dirX = [1, 0, 0];
  if (f[1] && f[1] !== "$") {
    const axE = resolveRef(entities, f[1]);
    if (axE) dirZ = getDirection(entities, axE);
  }
  if (f[2] && f[2] !== "$") {
    const rdE = resolveRef(entities, f[2]);
    if (rdE) dirX = getDirection(entities, rdE);
  }
  return { origin, dirZ, dirX };
}

/** Get coordinates from IFCCARTESIANPOINT */
function getCartesianPoint(entities: Record<number, IfcEntity>, entity: IfcEntity): number[] {
  const args = entity.args.replace(/[()]/g, "");
  return args.split(",").map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
}

/** Get direction from IFCDIRECTION */
function getDirection(entities: Record<number, IfcEntity>, entity: IfcEntity): number[] {
  const args = entity.args.replace(/[()]/g, "");
  return args.split(",").map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
}

/** Resolve IFCLOCALPLACEMENT chain → world transform */
function resolveLocalPlacement(
  entities: Record<number, IfcEntity>,
  placementEntity: IfcEntity
): { origin: number[]; dirZ: number[]; dirX: number[] } {
  const f = splitArgs(placementEntity.args);
  // f[0] = PlacementRelTo (#ref or $), f[1] = RelativePlacement (#ref)

  const relPlacementE = resolveRef(entities, f[1]);
  let local = { origin: [0, 0, 0], dirZ: [0, 0, 1], dirX: [1, 0, 0] };
  if (relPlacementE) {
    local = getPlacement3D(entities, relPlacementE);
  }

  // If has parent placement, compose
  if (f[0] && f[0] !== "$") {
    const parentE = resolveRef(entities, f[0]);
    if (parentE && parentE.type === "IFCLOCALPLACEMENT") {
      const parent = resolveLocalPlacement(entities, parentE);
      // Transform: world = parent.origin + parent.rotation * local.origin
      const rotated = rotatePoint(local.origin, parent.dirX, crossProduct(parent.dirZ, parent.dirX), parent.dirZ);
      local.origin = [
        parent.origin[0] + rotated[0],
        parent.origin[1] + rotated[1],
        parent.origin[2] + rotated[2],
      ];
      // Compose rotations (simplified: just compose Z directions)
      local.dirZ = rotatePoint(local.dirZ, parent.dirX, crossProduct(parent.dirZ, parent.dirX), parent.dirZ);
      local.dirX = rotatePoint(local.dirX, parent.dirX, crossProduct(parent.dirZ, parent.dirX), parent.dirZ);
    }
  }

  return local;
}

function crossProduct(a: number[], b: number[]): number[] {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}

function rotatePoint(p: number[], xAxis: number[], yAxis: number[], zAxis: number[]): number[] {
  return [
    p[0] * xAxis[0] + p[1] * yAxis[0] + p[2] * zAxis[0],
    p[0] * xAxis[1] + p[1] * yAxis[1] + p[2] * zAxis[1],
    p[0] * xAxis[2] + p[1] * yAxis[2] + p[2] * zAxis[2],
  ];
}

// ═══════════════════════════════════════════
// Main: IFC → Analytical Model
// ═══════════════════════════════════════════

const NODE_MERGE_TOL = 0.01; // 1cm tolerance for node merging

export function parseIfcToAnalytical(ifcText: string): IfcAnalyticalModel {
  const parsed = parseIfcText(ifcText);
  const { entities, typeIndex } = parsed;

  const nodes: IfcAnalyticalNode[] = [];
  const elements: IfcAnalyticalElement[] = [];
  const materials = new Map<string, { E: number; nu: number; rho: number }>();

  // Default concrete material
  materials.set("Hormigon", { E: 21328887.92, nu: 0.2, rho: 2.4 });
  materials.set("Acero", { E: 200000000, nu: 0.3, rho: 7.85 });

  let nodeId = 0;
  let elemId = 0;

  // Helper: find or create node at (x,y,z) with tolerance
  function findOrCreateNode(x: number, y: number, z: number): number {
    for (const n of nodes) {
      const dx = n.x - x, dy = n.y - y, dz = n.z - z;
      if (Math.sqrt(dx * dx + dy * dy + dz * dz) < NODE_MERGE_TOL) return n.id;
    }
    nodes.push({ id: nodeId, x, y, z });
    return nodeId++;
  }

  // Get section dimensions from IFCRECTANGLEPROFILEDEF linked to element
  function getSectionForElement(elemEntity: IfcEntity): { b: number; h: number; name: string } {
    // Walk: element → RelAssociatesMaterial → MaterialProfileSet → Profile → RectangleProfileDef
    // Simplified: search IFCRECTANGLEPROFILEDEF by matching expressIDs
    // For now, try to find section from element name (Revit pattern: "Type:Section")
    const name = field(elemEntity.args, 2) || "";

    // Try to find associated profile via IFCRELASSOCIATESMATERIAL
    const relMatIds = typeIndex["IFCRELASSOCIATESMATERIAL"] || [];
    for (const rmId of relMatIds) {
      const rm = entities[rmId];
      if (!rm) continue;
      const rmArgs = splitArgs(rm.args);
      // Check if this element is in the RelatedObjects list
      const relatedStr = rmArgs[4] || rmArgs[3] || "";
      if (relatedStr.includes(`#${elemEntity.id}`)) {
        // Found material association → follow to profile
        const matRef = rmArgs[5] || rmArgs[4] || "";
        const matE = resolveRef(entities, matRef);
        if (matE) {
          // Could be IFCMATERIALPROFILESETUSAGE → IFCMATERIALPROFILESET → IFCMATERIALPROFILE → IFCRECTANGLEPROFILEDEF
          return traceProfileFromMaterial(matE);
        }
      }
    }

    // Fallback: try to extract from name (e.g., "C1:Rectangular 40x40")
    const sizeMatch = name.match(/(\d+)\s*[xX×]\s*(\d+)/);
    if (sizeMatch) {
      return { b: parseFloat(sizeMatch[1]) / 100, h: parseFloat(sizeMatch[2]) / 100, name };
    }

    return { b: 0.3, h: 0.3, name: name || "Default" }; // fallback
  }

  function traceProfileFromMaterial(matEntity: IfcEntity): { b: number; h: number; name: string } {
    const type = matEntity.type;

    if (type === "IFCRECTANGLEPROFILEDEF") {
      const f = splitArgs(matEntity.args);
      const profileName = (f[1] || "").replace(/'/g, "");
      const w = parseFloat(f[3]) || 0.3; // XDim
      const h = parseFloat(f[4]) || 0.3; // YDim
      return { b: w, h, name: profileName };
    }

    if (type === "IFCMATERIALPROFILE") {
      const f = splitArgs(matEntity.args);
      const profRef = f[2] || f[1] || "";
      const profE = resolveRef(entities, profRef);
      if (profE) return traceProfileFromMaterial(profE);
    }

    if (type === "IFCMATERIALPROFILESET") {
      const f = splitArgs(matEntity.args);
      // MaterialProfiles is a list
      const listStr = f[2] || f[1] || "";
      const firstRef = listStr.match(/#(\d+)/);
      if (firstRef) {
        const profE = entities[parseInt(firstRef[1])];
        if (profE) return traceProfileFromMaterial(profE);
      }
    }

    if (type === "IFCMATERIALPROFILESETUSAGE") {
      const f = splitArgs(matEntity.args);
      const setRef = f[0];
      const setE = resolveRef(entities, setRef);
      if (setE) return traceProfileFromMaterial(setE);
    }

    return { b: 0.3, h: 0.3, name: "Unknown" };
  }

  // ─── Generic frame element processor ───
  // Vertical elements (columns, piles): extrude along dirZ
  // Horizontal elements (beams, members, diagonals): extrude along dirX
  function processFrameType(
    ifcType: string,
    category: string,
    extrudeDir: "Z" | "X",
    defaultLength: number
  ) {
    const ids = typeIndex[ifcType] || [];
    for (const eId of ids) {
      const ent = entities[eId];
      if (!ent) continue;

      const args = splitArgs(ent.args);
      const placementRef = args[5] || args[4] || "";
      const placementE = resolveRef(entities, placementRef);
      if (!placementE) continue;

      const placement = resolveLocalPlacement(entities, placementE);
      const sec = getSectionForElement(ent);

      let depth = defaultLength;
      let extOrigin: number[] | null = null;
      let extDir: number[] | null = null;
      const reprRef = args[6] || args[5] || "";
      const reprE = resolveRef(entities, reprRef);
      if (reprE) {
        const extInfo = findExtrusionInfo(entities, reprE);
        if (extInfo) {
          depth = extInfo.depth || defaultLength;
          extOrigin = extInfo.origin;
          extDir = extInfo.direction;
        }
      }

      // Use extrusion origin if available (Revit stores real XY position there)
      // Otherwise fallback to placement origin
      const x = extOrigin ? extOrigin[0] : placement.origin[0];
      const y = extOrigin ? extOrigin[1] : placement.origin[1];
      const z = extOrigin ? extOrigin[2] : placement.origin[2];

      // Use extrusion direction if available, otherwise use placement dir
      const dir = extDir || (extrudeDir === "Z" ? placement.dirZ : placement.dirX);
      const nI = findOrCreateNode(x, y, z);
      const nJ = findOrCreateNode(
        x + dir[0] * depth,
        y + dir[1] * depth,
        z + dir[2] * depth
      );

      elements.push({
        id: elemId++, type: "frame", nodeIds: [nI, nJ],
        category, sectionName: sec.name,
        b: sec.b, h: sec.h, material: "Hormigon",
        expressID: eId,
      });
    }
  }

  // ─── Structural frame elements ───
  processFrameType("IFCCOLUMN", "column", "Z", 3.0);
  processFrameType("IFCBEAM", "beam", "X", 5.0);
  processFrameType("IFCMEMBER", "diagonal", "X", 4.0);       // riostras, diagonales, puntales
  processFrameType("IFCPILE", "pile", "Z", 10.0);             // pilotes
  processFrameType("IFCSTAIRFLIGHT", "stair", "X", 3.0);      // tramos de escalera (hormigón = estructural)
  processFrameType("IFCRAMPFLIGHT", "ramp", "X", 4.0);        // rampas estructurales

  // ─── Generic shell/area element processor ───
  function processShellType(ifcType: string, category: string, defaultThickness: number) {
    const ids = typeIndex[ifcType] || [];
    for (const sId of ids) {
      const ent = entities[sId];
      if (!ent) continue;

      const args = splitArgs(ent.args);
      const placementRef = args[5] || args[4] || "";
      const placementE = resolveRef(entities, placementRef);
      if (!placementE) continue;

      let thickness = defaultThickness;
      const reprRef = args[6] || args[5] || "";
      const reprE = resolveRef(entities, reprRef);
      if (reprE) thickness = findExtrusionDepth(entities, reprE) || defaultThickness;

      const label = category === "slab" ? `Losa e=${(thickness * 100).toFixed(0)}cm`
        : category === "wall" ? `Muro e=${(thickness * 100).toFixed(0)}cm`
        : category === "footing" ? `Zapata e=${(thickness * 100).toFixed(0)}cm`
        : `${category} e=${(thickness * 100).toFixed(0)}cm`;

      elements.push({
        id: elemId++, type: "shell", nodeIds: [], // needs mesh generation
        category, sectionName: label,
        b: thickness, h: thickness, material: "Hormigon",
        expressID: sId,
      });
    }
  }

  // ─── Structural shell/area elements ───
  processShellType("IFCSLAB", "slab", 0.15);                    // losas
  processShellType("IFCWALL", "wall", 0.20);                    // muros de corte
  processShellType("IFCWALLSTANDARDCASE", "wall", 0.20);        // muros estándar
  processShellType("IFCFOOTING", "footing", 0.50);              // zapatas
  processShellType("IFCROOF", "slab", 0.12);                    // cubierta (como losa)

  // ─── Extract levels ───
  const levels: { name: string; elevation: number }[] = [];
  const storyIds = typeIndex["IFCBUILDINGSTOREY"] || [];
  for (const sId of storyIds) {
    const story = entities[sId];
    if (!story) continue;
    const f = splitArgs(story.args);
    const name = (f[2] || "").replace(/'/g, "");
    const elevation = parseFloat(f[9]) || 0;
    levels.push({ name, elevation });
  }
  levels.sort((a, b) => a.elevation - b.elevation);

  return {
    nodes,
    elements,
    materials,
    levels,
    projectName: parsed.meta.project,
    schema: parsed.meta.schema,
  };
}

/** Find extrusion depth from IFCPRODUCTDEFINITIONSHAPE → IFCEXTRUDEDAREASOLID */
interface ExtrusionInfo {
  depth: number;
  origin: number[];  // XYZ position from IFCEXTRUDEDAREASOLID placement
  direction: number[]; // extrusion direction
}

function findExtrusionInfo(entities: Record<number, IfcEntity>, reprEntity: IfcEntity): ExtrusionInfo | null {
  // reprEntity is IFCPRODUCTDEFINITIONSHAPE
  // → Representations list → IFCSHAPEREPRESENTATION → Items → IFCEXTRUDEDAREASOLID
  const f = splitArgs(reprEntity.args);

  for (const arg of f) {
    const refs = arg.match(/#(\d+)/g) || [];
    for (const ref of refs) {
      const id = parseInt(ref.replace("#", ""));
      const e = entities[id];
      if (!e) continue;

      if (e.type === "IFCEXTRUDEDAREASOLID") {
        // args: Profile, Position, ExtrudedDirection, Depth
        const ef = splitArgs(e.args);
        const depth = parseFloat(ef[3]) || 0;
        // Get position (IFCAXIS2PLACEMENT3D)
        const posE = resolveRef(entities, ef[1]);
        let origin = [0, 0, 0];
        if (posE) {
          const pl = getPlacement3D(entities, posE);
          origin = pl.origin;
        }
        // Get extrusion direction
        const dirE = resolveRef(entities, ef[2]);
        let direction = [0, 0, 1];
        if (dirE && dirE.type === "IFCDIRECTION") {
          const nums = dirE.args.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
          if (nums && nums.length >= 3) direction = nums.map(Number);
        }
        return { depth, origin, direction };
      }

      if (e.type === "IFCSHAPEREPRESENTATION") {
        const info = findExtrusionInfo(entities, e);
        if (info) return info;
      }

      // Handle IFCMAPPEDITEM (Revit uses these for type instances)
      if (e.type === "IFCMAPPEDITEM") {
        const mf = splitArgs(e.args);
        // MappingSource (#ref), MappingTarget (#ref)
        const sourceE = resolveRef(entities, mf[0]);
        if (sourceE && sourceE.type === "IFCREPRESENTATIONMAP") {
          const sf = splitArgs(sourceE.args);
          // MappingOrigin, MappedRepresentation
          const mappedReprE = resolveRef(entities, sf[1]);
          if (mappedReprE) {
            const info = findExtrusionInfo(entities, mappedReprE);
            if (info) return info;
          }
        }
      }
    }
  }

  return null;
}

// Legacy compat
function findExtrusionDepth(entities: Record<number, IfcEntity>, reprEntity: IfcEntity): number | null {
  const info = findExtrusionInfo(entities, reprEntity);
  return info ? info.depth : null;
}
