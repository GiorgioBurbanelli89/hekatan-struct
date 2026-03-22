/**
 * ETABS .e2k File Parser
 * Converts ETABS text model files into awatif mesh data.
 *
 * Supported sections:
 *   CONTROLS (units), STORIES, MATERIAL PROPERTIES, FRAME SECTIONS,
 *   POINT COORDINATES, LINE CONNECTIVITIES, AREA CONNECTIVITIES,
 *   POINT ASSIGNS (restraints), LINE ASSIGNS (section assignment),
 *   FRAME OBJECT LOADS
 */
import type { Node, Element, NodeInputs, ElementInputs, SectionShape } from "awatif-fem";

export interface E2kModel {
  units: { force: string; length: string };
  stories: { name: string; height: number; elev: number }[];
  materials: Map<string, { type: string; E: number; G: number; nu: number; fy?: number; fc?: number; density?: number }>;
  frameSections: Map<string, { material: string; shape: string; D: number; B: number; TF: number; TW: number; R?: number; fillMaterial?: string; modI2?: number; modI3?: number }>;
  nodes: Node[];
  nodeNames: string[];           // e2k point name → index in nodes[]
  nodeNameToIdx: Map<string, number>;
  elements: Element[];
  elementNames: string[];
  elementTypes: string[];        // "COLUMN" | "BEAM" | "BRACE"
  elementStories: string[];
  elementSections: Map<number, string>;  // elemIdx → section name
  nodeInputs: NodeInputs;
  elementInputs: ElementInputs;
  sectionShapes: Map<number, SectionShape>;
  info: { nNodes: number; nFrames: number; nAreas: number; title: string };
}

export function parseE2k(text: string): E2kModel {
  const lines = text.split(/\r?\n/);

  // State
  const units = { force: "TONF", length: "M" };
  const stories: E2kModel["stories"] = [];
  const materials: E2kModel["materials"] = new Map();
  const frameSections: E2kModel["frameSections"] = new Map();
  const pointCoords = new Map<string, [number, number]>(); // name → [x, y] (plan coords)
  const lineConns: { name: string; type: string; pt1: string; pt2: string; nStories: number }[] = [];
  const areaConns: { name: string; pts: string[]; nStories: number }[] = [];
  const restraints = new Map<string, string[]>(); // pointName+story → restrained DOFs
  const lineAssigns = new Map<string, { story: string; section: string }>(); // lineName+story → section
  const frameLoads: { line: string; story: string; type: string; dir: string; val: number }[] = [];
  let title = "";

  let currentSection = "";

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith("$")) {
      if (line.startsWith("$ ")) currentSection = line.substring(2).trim();
      continue;
    }

    // ── CONTROLS ──
    if (currentSection === "CONTROLS") {
      const um = line.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      if (um) { units.force = um[1]; units.length = um[2]; }
      const tm = line.match(/TITLE2\s+"([^"]+)"/);
      if (tm) title = tm[1];
    }

    // ── STORIES ──
    if (currentSection === "STORIES - IN SEQUENCE FROM TOP") {
      const sm = line.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (sm) {
        const name = sm[1];
        const height = sm[2] ? parseFloat(sm[2]) : 0;
        const elev = sm[3] ? parseFloat(sm[3]) : undefined;
        stories.push({ name, height, elev: elev ?? 0 });
      }
    }

    // ── MATERIAL PROPERTIES ──
    if (currentSection === "MATERIAL PROPERTIES") {
      const mm = line.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
      if (mm) {
        const name = mm[1];
        if (!materials.has(name)) materials.set(name, { type: mm[2] || "", E: 0, G: 0, nu: 0 });
        const mat = materials.get(name)!;
        if (mm[2]) mat.type = mm[2];
        const eMatch = line.match(/\bE\s+([\d.eE+-]+)/);
        if (eMatch) mat.E = parseFloat(eMatch[1]);
        const uMatch = line.match(/\bU\s+([\d.eE+-]+)/);
        if (uMatch) { mat.nu = parseFloat(uMatch[1]); mat.G = mat.E / (2 * (1 + mat.nu)); }
        const fyMatch = line.match(/\bFY\s+([\d.eE+-]+)/);
        if (fyMatch) mat.fy = parseFloat(fyMatch[1]);
        const fcMatch = line.match(/\bFC\s+([\d.eE+-]+)/);
        if (fcMatch) mat.fc = parseFloat(fcMatch[1]);
        const wMatch = line.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
        if (wMatch) mat.density = parseFloat(wMatch[1]);
      }
    }

    // ── FRAME SECTIONS ──
    if (currentSection === "FRAME SECTIONS") {
      const fsm = line.match(/FRAMESECTION\s+"([^"]+)"/);
      if (fsm) {
        const name = fsm[1];
        if (!frameSections.has(name)) frameSections.set(name, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const sec = frameSections.get(name)!;
        const matM = line.match(/MATERIAL\s+"([^"]+)"/);
        if (matM) sec.material = matM[1];
        const shM = line.match(/SHAPE\s+"([^"]+)"/);
        if (shM) sec.shape = shM[1];
        const dM = line.match(/\bD\s+([\d.eE+-]+)/);
        if (dM) sec.D = parseFloat(dM[1]);
        const bM = line.match(/\bB\s+([\d.eE+-]+)/);
        if (bM) sec.B = parseFloat(bM[1]);
        const tfM = line.match(/\bTF\s+([\d.eE+-]+)/);
        if (tfM) sec.TF = parseFloat(tfM[1]);
        const twM = line.match(/\bTW\s+([\d.eE+-]+)/);
        if (twM) sec.TW = parseFloat(twM[1]);
        const rM = line.match(/\bR\s+([\d.eE+-]+)/);
        if (rM) sec.R = parseFloat(rM[1]);
        const fillM = line.match(/FILLMATERIAL\s+"([^"]+)"/);
        if (fillM) sec.fillMaterial = fillM[1];
        const i2M = line.match(/I2MOD\s+([\d.eE+-]+)/);
        if (i2M) sec.modI2 = parseFloat(i2M[1]);
        const i3M = line.match(/I3MOD\s+([\d.eE+-]+)/);
        if (i3M) sec.modI3 = parseFloat(i3M[1]);
      }
    }

    // ── POINT COORDINATES ──
    if (currentSection === "POINT COORDINATES") {
      const pm = line.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
      if (pm) pointCoords.set(pm[1], [parseFloat(pm[2]), parseFloat(pm[3])]);
    }

    // ── LINE CONNECTIVITIES ──
    if (currentSection === "LINE CONNECTIVITIES") {
      const lm = line.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
      if (lm) lineConns.push({ name: lm[1], type: lm[2], pt1: lm[3], pt2: lm[4], nStories: parseInt(lm[5]) });
    }

    // ── POINT ASSIGNS ──
    if (currentSection === "POINT ASSIGNS") {
      const rm = line.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
      if (rm) restraints.set(`${rm[1]}@${rm[2]}`, rm[3].split(/\s+/));
    }

    // ── LINE ASSIGNS ──
    if (currentSection === "LINE ASSIGNS") {
      const lam = line.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
      if (lam) lineAssigns.set(`${lam[1]}@${lam[2]}`, { story: lam[2], section: lam[3] });
    }
  }

  // ── Compute story elevations ──
  // Stories are listed top to bottom; compute elevations bottom-up
  const storyElevs = new Map<string, number>();
  if (stories.length > 0) {
    // Last story has ELEV
    let elev = stories[stories.length - 1].elev;
    storyElevs.set(stories[stories.length - 1].name, elev);
    for (let i = stories.length - 2; i >= 0; i--) {
      elev += stories[i + 1].height;
      stories[i].elev = elev;
      storyElevs.set(stories[i].name, elev);
    }
    // Top story
    const topElev = stories[0].elev + stories[0].height;
    // Recalculate: stories go top-down, heights are from below
    // Actually in ETABS: story "Base" ELEV -1, then each story HEIGHT is the height of that story
    // Elev of story = elev of story below + height of current story
    // Let me recalculate properly
    let runElev = stories[stories.length - 1].elev; // Base elev
    storyElevs.set(stories[stories.length - 1].name, runElev);
    for (let i = stories.length - 2; i >= 0; i--) {
      runElev += stories[i + 1].height;
      storyElevs.set(stories[i].name, runElev);
      stories[i].elev = runElev;
    }
  }

  // ── Build 3D nodes ──
  // In ETABS, POINT COORDINATES are 2D plan (X, Y). Each point exists at multiple stories.
  // For columns: same XY at different Z (story elevations)
  // For beams: same Z within a story
  const nodes: Node[] = [];
  const nodeNames: string[] = [];
  const nodeNameToIdx = new Map<string, number>();

  // Create nodes for each point at each story it appears
  // First, find which stories each point appears at from LINE CONNECTIVITIES
  const pointStories = new Map<string, Set<string>>();

  for (const lc of lineConns) {
    // A column spans nStories stories starting from bottom
    // Columns: pt1=pt2 (same plan point), connect vertically
    // Beams: different plan points at same story
    if (lc.type === "COLUMN") {
      // Column connects pt at story N to pt at story N+1, spanning nStories
      // We need to figure out which stories
      for (const [storyName] of storyElevs) {
        const key = `${lc.name}@${storyName}`;
        if (lineAssigns.has(key)) {
          if (!pointStories.has(lc.pt1)) pointStories.set(lc.pt1, new Set());
          pointStories.get(lc.pt1)!.add(storyName);
          // Column top is at the story above
          const stIdx = stories.findIndex(s => s.name === storyName);
          if (stIdx > 0) {
            pointStories.get(lc.pt1)!.add(stories[stIdx - 1].name);
          }
        }
      }
    }
  }

  // Simpler approach: create a node for every (point, story) combination that's referenced
  // First pass: collect all unique (point, story) pairs
  const nodeKey = (pt: string, story: string) => `${pt}@${story}`;
  const allNodeKeys = new Set<string>();

  // From line assigns, determine which stories each line exists at
  for (const lc of lineConns) {
    for (const [key, la] of lineAssigns) {
      if (key.startsWith(lc.name + "@")) {
        const story = la.story;
        const storyIdx = stories.findIndex(s => s.name === story);
        if (storyIdx < 0) continue;

        if (lc.type === "COLUMN") {
          // Column bottom at this story, top at story above
          allNodeKeys.add(nodeKey(lc.pt1, story));
          if (storyIdx > 0) allNodeKeys.add(nodeKey(lc.pt1, stories[storyIdx - 1].name));
          if (lc.pt2 !== lc.pt1) {
            allNodeKeys.add(nodeKey(lc.pt2, story));
            if (storyIdx > 0) allNodeKeys.add(nodeKey(lc.pt2, stories[storyIdx - 1].name));
          }
        } else {
          // Beam/Brace at this story elevation
          allNodeKeys.add(nodeKey(lc.pt1, story));
          allNodeKeys.add(nodeKey(lc.pt2, story));
        }
      }
    }
  }

  // Also from restraints
  for (const [key] of restraints) {
    allNodeKeys.add(key);
  }

  // Create nodes
  for (const nk of allNodeKeys) {
    const [pt, story] = nk.split("@");
    const xy = pointCoords.get(pt);
    const elev = storyElevs.get(story);
    if (xy === undefined || elev === undefined) continue;
    const idx = nodes.length;
    // ETABS: X=plan-X, Y=plan-Y. In awatif Y-up: X=plan-X, Z=plan-Y, Y=elev (vertical)
    // Actually awatif uses Z-up for buildings: X=plan-X, Y=plan-Y, Z=elev
    nodes.push([xy[0], xy[1], elev]);
    nodeNames.push(nk);
    nodeNameToIdx.set(nk, idx);
  }

  // ── Build elements ──
  const elements: Element[] = [];
  const elementNames: string[] = [];
  const elementTypes: string[] = [];
  const elementStoriesArr: string[] = [];
  const elementSections = new Map<number, string>();

  for (const lc of lineConns) {
    for (const [key, la] of lineAssigns) {
      if (!key.startsWith(lc.name + "@")) continue;
      const story = la.story;
      const storyIdx = stories.findIndex(s => s.name === story);
      if (storyIdx < 0) continue;

      let n1key: string, n2key: string;
      if (lc.type === "COLUMN") {
        n1key = nodeKey(lc.pt1, story);
        n2key = storyIdx > 0 ? nodeKey(lc.pt1, stories[storyIdx - 1].name) : nodeKey(lc.pt1, story);
        if (lc.pt2 !== lc.pt1) {
          n1key = nodeKey(lc.pt1, story);
          n2key = nodeKey(lc.pt2, storyIdx > 0 ? stories[storyIdx - 1].name : story);
        }
      } else {
        n1key = nodeKey(lc.pt1, story);
        n2key = nodeKey(lc.pt2, story);
      }

      const i1 = nodeNameToIdx.get(n1key);
      const i2 = nodeNameToIdx.get(n2key);
      if (i1 === undefined || i2 === undefined || i1 === i2) continue;

      const elemIdx = elements.length;
      elements.push([i1, i2]);
      elementNames.push(lc.name);
      elementTypes.push(lc.type);
      elementStoriesArr.push(story);
      elementSections.set(elemIdx, la.section);
    }
  }

  // ── Build element inputs (properties) ──
  const elasticities = new Map<number, number>();
  const shearModuli = new Map<number, number>();
  const areas = new Map<number, number>();
  const momentsOfInertiaZ = new Map<number, number>();
  const momentsOfInertiaY = new Map<number, number>();
  const torsionalConstants = new Map<number, number>();
  const sectionShapes = new Map<number, SectionShape>();

  for (const [elemIdx, secName] of elementSections) {
    const sec = frameSections.get(secName);
    if (!sec) continue;
    const mat = materials.get(sec.material);
    if (mat) {
      elasticities.set(elemIdx, mat.E);
      shearModuli.set(elemIdx, mat.G);
    }

    // Compute section properties from dimensions
    const D = sec.D, B = sec.B, tf = sec.TF, tw = sec.TW;
    let A = 0, Iz = 0, Iy = 0, J = 0;
    let shapeType: SectionShape["type"] = "rect";

    switch (sec.shape) {
      case "Concrete Rectangular":
        A = D * B;
        Iz = B * D ** 3 / 12;
        Iy = D * B ** 3 / 12;
        J = (B * D ** 3) * (1/3 - 0.21 * (D/B) * (1 - D**4 / (12 * B**4)));
        shapeType = "rect";
        break;
      case "Concrete Circle":
        A = Math.PI * D ** 2 / 4;
        Iz = Iy = Math.PI * D ** 4 / 64;
        J = Math.PI * D ** 4 / 32;
        shapeType = "circ";
        break;
      case "Steel I/Wide Flange":
        A = 2 * B * tf + (D - 2 * tf) * tw;
        Iz = (B * D ** 3 - (B - tw) * (D - 2 * tf) ** 3) / 12;
        Iy = (2 * tf * B ** 3 + (D - 2 * tf) * tw ** 3) / 12;
        J = (2 * B * tf ** 3 + (D - 2 * tf) * tw ** 3) / 3;
        shapeType = "I";
        break;
      case "Steel Tube":
        A = D * B - (D - 2 * tw) * (B - 2 * tw);
        Iz = (B * D ** 3 - (B - 2 * tw) * (D - 2 * tw) ** 3) / 12;
        Iy = (D * B ** 3 - (D - 2 * tw) * (B - 2 * tw) ** 3) / 12;
        J = 2 * tw * (D - tw) * (B - tw) * ((D - tw) * (B - tw)) / ((D - tw) + (B - tw));
        shapeType = "HSS";
        break;
      case "Filled Steel Tube":
        A = D * B; // total area including concrete
        Iz = B * D ** 3 / 12;
        Iy = D * B ** 3 / 12;
        J = 2 * tw * (D - tw) * (B - tw) * ((D - tw) * (B - tw)) / ((D - tw) + (B - tw));
        shapeType = "CFT";
        break;
      case "Steel Angle": {
        const t = tf || tw;
        A = t * (D + B - t);
        // Approximate for equal leg
        Iz = t * (D ** 3 + B * t ** 2 + t ** 2 * (D - t)) / 12;
        Iy = t * (B ** 3 + D * t ** 2 + t ** 2 * (B - t)) / 12;
        J = (D + B - t) * t ** 3 / 3;
        shapeType = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        A = 2 * B * tf + (D - 2 * tf) * tw;
        Iz = (tw * D ** 3 + 2 * B * tf * (D - tf) ** 2) / 12; // approximate
        Iy = (2 * tf * B ** 3 + (D - 2 * tf) * tw ** 3) / 12;
        J = (2 * B * tf ** 3 + (D - 2 * tf) * tw ** 3) / 3;
        shapeType = sec.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        A = 2 * (2 * B * tf + (D - 2 * tf) * tw);
        Iz = 2 * (tw * D ** 3 + 2 * B * tf * (D - tf) ** 2) / 12;
        Iy = 2 * (2 * tf * B ** 3 + (D - 2 * tf) * tw ** 3) / 12;
        J = 2 * (2 * B * tf ** 3 + (D - 2 * tf) * tw ** 3) / 3;
        shapeType = "2C";
        break;
      default:
        // Unknown shape — use rectangular approximation
        if (D > 0 && B > 0) {
          A = D * B; Iz = B * D ** 3 / 12; Iy = D * B ** 3 / 12;
          J = Math.min(D, B) * Math.max(D, B) ** 3 / 3 * 0.3;
        }
        break;
    }

    // Apply modifiers
    if (sec.modI2) Iy *= sec.modI2;
    if (sec.modI3) Iz *= sec.modI3;

    areas.set(elemIdx, A);
    momentsOfInertiaZ.set(elemIdx, Iz);
    momentsOfInertiaY.set(elemIdx, Iy);
    torsionalConstants.set(elemIdx, J);

    sectionShapes.set(elemIdx, {
      type: shapeType,
      b: B || undefined,
      h: D || undefined,
      d: (shapeType === "circ" || shapeType === "pipe") ? D : undefined,
      tw: tw || undefined,
      tf: tf || undefined,
      r: sec.R,
      name: secName,
    });
  }

  // ── Build node inputs (supports) ──
  const supports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();
  for (const [key, dofs] of restraints) {
    const nodeIdx = nodeNameToIdx.get(key);
    if (nodeIdx === undefined) continue;
    const fix: [boolean, boolean, boolean, boolean, boolean, boolean] = [false, false, false, false, false, false];
    for (const d of dofs) {
      if (d === "UX") fix[0] = true;
      if (d === "UY") fix[1] = true;
      if (d === "UZ") fix[2] = true;
      if (d === "RX") fix[3] = true;
      if (d === "RY") fix[4] = true;
      if (d === "RZ") fix[5] = true;
    }
    supports.set(nodeIdx, fix);
  }

  return {
    units,
    stories: stories.reverse(), // bottom to top
    materials,
    frameSections,
    nodes,
    nodeNames,
    nodeNameToIdx,
    elements,
    elementNames,
    elementTypes: elementTypes,
    elementStories: elementStoriesArr,
    elementSections,
    nodeInputs: { supports, loads: new Map() },
    elementInputs: {
      elasticities,
      shearModuli,
      areas,
      momentsOfInertiaZ,
      momentsOfInertiaY,
      torsionalConstants,
      sectionShapes,
    },
    sectionShapes,
    info: {
      nNodes: nodes.length,
      nFrames: elements.length,
      nAreas: areaConns.length,
      title,
    },
  };
}
