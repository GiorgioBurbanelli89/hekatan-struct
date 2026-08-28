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
import type { Node, Element, NodeInputs, ElementInputs, SectionShape } from "hekatan-fem";

export interface E2kGrid {
  label: string;   // "A", "B", "1", "2", etc.
  dir: "X" | "Y";
  coord: number;
}

export interface E2kModel {
  units: { force: string; length: string };
  stories: { name: string; height: number; elev: number }[];
  grids: E2kGrid[];
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
  /**  = las que hay en el fichero ·  = las que llegaron
   *  a ser elementos. Si no coinciden, algo se perdio por el camino. */
  info: { nNodes: number; nFrames: number; nAreas: number; nAreasMontadas?: number; title: string };
  /** Raw text blocks from original e2k for round-trip export */
  rawSections?: Map<string, string[]>;
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
  // ── LAS AREAS ────────────────────────────────────────────────────────
  // `areaConns` guardaba los puntos y NO SE USABA para nada mas que contar
  // (`info.nAreas`): el `.e2k` se escribia con sus 900 losas, el parser las
  // VEIA, y al releerlo salian CERO shells — sin espesor, sin tipo de cascara,
  // sin modificadores y sin un solo aviso. El ciclo
  // Hekatan → .e2k → ETABS → .e2k → Hekatan perdia la losa entera y lo unico
  // que se notaba era un modelo mas flojo. Medido el 2026-08-28 con las 4
  // plantillas que llevan area (`cli/roundtrip_areas.mjs`).
  //
  // `dz` son los numeros del final de cada linea AREA: el SALTO DE PLANTA de
  // cada punto (0 = la del assign, 1 = una arriba). Es lo que distingue un
  // PANEL de muro —dos puntos en planta y dos plantas, `1 1 0 0`— de un FLOOR,
  // que los lleva todos a 0.
  const areaConns: { name: string; tipo: string; pts: string[]; dz: number[] }[] = [];
  const areaAssigns = new Map<string, { story: string; section: string }>();
  /** SHELLPROP: espesor (m), material, tipo de cascara y los 8 modificadores. */
  const shellProps = new Map<string, {
    t: number; material: string; modeling: string; mods?: number[];
  }>();
  const restraints = new Map<string, string[]>(); // pointName+story → restrained DOFs
  const lineAssigns = new Map<string, { story: string; section: string; rigidZone: number; releases: string[]; angle: number }>(); // lineName+story → assignment
  const frameLoads: { line: string; story: string; type: string; dir: string; lc: string; val: number }[] = [];
  const grids: E2kGrid[] = [];
  let title = "";

  let currentSection = "";

  // Capture raw lines for sections we can't reconstruct perfectly
  const rawSections = new Map<string, string[]>();
  const capturedSectionNames = [
    "PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP",
    "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS",
    "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS",
    "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES",
    "LINE CONNECTIVITIES", "AREA CONNECTIVITIES",
    "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS",
    "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS",
    "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE",
    "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS",
  ];

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith("$")) {
      if (line.startsWith("$ ")) currentSection = line.substring(2).trim();
      continue;
    }
    // Capture raw line for current section
    if (currentSection) {
      if (!rawSections.has(currentSection)) rawSections.set(currentSection, []);
      rawSections.get(currentSection)!.push(rawLine);
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
      if (lam) {
        const entry: typeof lineAssigns extends Map<string, infer V> ? V : never = {
          story: lam[2], section: lam[3], rigidZone: 0, releases: [], angle: 0,
        };
        const rzm = line.match(/RIGIDZONE\s+([\d.eE+-]+)/);
        if (rzm) entry.rigidZone = parseFloat(rzm[1]);
        const relm = line.match(/RELEASE\s+"([^"]+)"/);
        if (relm) entry.releases = relm[1].split(/\s+/);
        const angm = line.match(/ANG\s+([-\d.eE+]+)/);
        if (angm) entry.angle = parseFloat(angm[1]);
        lineAssigns.set(`${lam[1]}@${lam[2]}`, entry);
      }
    }

    // ── GRIDS ──
    if (currentSection === "GRIDS") {
      const gm = line.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      if (gm) {
        grids.push({ label: gm[1], dir: gm[2] as "X" | "Y", coord: parseFloat(gm[3]) });
      }
    }

    // ── FRAME OBJECT LOADS ──
    if (currentSection === "FRAME OBJECT LOADS") {
      const flm = line.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      if (flm) {
        frameLoads.push({
          line: flm[1], story: flm[2], type: flm[3], dir: flm[4],
          lc: flm[5], val: parseFloat(flm[6]),
        });
      }
    }

    // ── AREA CONNECTIVITIES ──
    if (currentSection === "AREA CONNECTIVITIES") {
      // ETABS: AREA "F1" FLOOR 4 "1" "6" "7" "2" 0 0 0 0  (tipo FLOOR/PANEL/RAMP
      // OPCIONAL entre el nombre y el contador). El regex anterior exigía un dígito
      // justo tras el nombre → no matcheaba NINGÚN área con tipo (losas/muros reales).
      const am = line.match(/AREA\s+"([^"]+)"\s+(?:([A-Za-z]\w*)\s+)?\d+\s+(.+)/);
      if (am) {
        const pts = am[3].match(/"([^"]+)"/g)?.map(s => s.replace(/"/g, "")) || [];
        // Lo que queda DESPUES de las comillas son los saltos de planta, uno
        // por punto y en el mismo orden.
        const dz = (am[3].replace(/"[^"]*"/g, " ").trim().split(/\s+/)
          .filter(Boolean).map(Number).filter(v => Number.isFinite(v)));
        areaConns.push({ name: am[1], tipo: am[2] || "FLOOR", pts,
                         dz: dz.length === pts.length ? dz : pts.map(() => 0) });
      }
    }

    // ── AREA ASSIGNS: que SECCION lleva cada area, y en que planta ──
    if (currentSection === "AREA ASSIGNS") {
      const aa = line.match(/AREAASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+SECTION\s+"([^"]+)"/);
      if (aa) areaAssigns.set(aa[1], { story: aa[2], section: aa[3] });
    }

    // ── SHELLPROP: las propiedades de losa, muro y deck ──
    // Van en bloques distintos segun el tipo (`$ SLAB PROPERTIES`,
    // `$ WALL PROPERTIES`, `$ DECK PROPERTIES`), asi que se mira la LINEA, no
    // la seccion. Y ETABS escribe DOS lineas con el mismo nombre: la de la
    // propiedad y otra solo con los modificadores, que omite los que valen 1.
    if (line.startsWith("SHELLPROP")) {
      const nm = line.match(/SHELLPROP\s+"([^"]+)"/)?.[1];
      if (nm) {
        const num = (re: RegExp) => {
          const m = line.match(re); return m ? parseFloat(m[1]) : undefined;
        };
        const esp = num(/SLABTHICKNESS\s+([\d.eE+-]+)/) ??
                    num(/WALLTHICKNESS\s+([\d.eE+-]+)/) ??
                    // Un DECK relleno: el espesor TOTAL es la capa sobre el
                    // nervio mas el nervio (asi lo escribe el exportador).
                    ((num(/DECKSLABDEPTH\s+([\d.eE+-]+)/) ?? 0) +
                     (num(/DECKRIBDEPTH\s+([\d.eE+-]+)/) ?? 0) || undefined);
        const MODS = ["F11MOD", "F22MOD", "F12MOD", "M11MOD", "M22MOD",
                      "M12MOD", "V13MOD", "V23MOD"];
        const leidos = MODS.map(k => num(new RegExp(k + "\\s+([\\d.eE+-]+)")));
        const prev = shellProps.get(nm);
        if (leidos.some(v => v !== undefined)) {
          // Linea de modificadores: completa la propiedad ya leida.
          const mods = leidos.map(v => v ?? 1);
          shellProps.set(nm, { t: prev?.t ?? 0, material: prev?.material ?? "",
                               modeling: prev?.modeling ?? "ShellThin", mods });
        } else if (esp !== undefined) {
          shellProps.set(nm, {
            t: esp, mods: prev?.mods,
            material: line.match(/MATERIAL\s+"([^"]+)"/)?.[1] ??
                      line.match(/CONCMATERIAL\s+"([^"]+)"/)?.[1] ?? "",
            modeling: line.match(/MODELINGTYPE\s+"([^"]+)"/)?.[1] ??
                      (/PROPTYPE\s+"Deck"/.test(line) ? "Membrane" : "ShellThin"),
          });
        }
      }
    }
  }

  // ── Compute story elevations ──
  // Stories are listed top-to-bottom in the file. Each story's HEIGHT is
  // the floor-to-floor distance from the story below to this story.
  // The last story ("Base") has an absolute ELEV.
  // Elevation of story[i] = elevation of story[i+1] + height of story[i]
  const storyElevs = new Map<string, number>();
  if (stories.length > 0) {
    // Base story has its absolute elevation
    const baseIdx = stories.length - 1;
    storyElevs.set(stories[baseIdx].name, stories[baseIdx].elev);
    // Accumulate upward: each story's elev = story_below.elev + this_story.height
    for (let i = baseIdx - 1; i >= 0; i--) {
      const belowElev = storyElevs.get(stories[i + 1].name)!;
      const thisElev = belowElev + stories[i].height;
      stories[i].elev = thisElev;
      storyElevs.set(stories[i].name, thisElev);
    }
  }

  // ── Build 3D nodes & elements ──
  // ETABS POINT COORDINATES are 2D plan (X, Y). 3D position depends on story.
  // For COLUMN/BRACE at story S with nStories N:
  //   bottom node (pt1) at elevation of story N levels below S
  //   top node (pt2) at elevation of story S
  // For BEAM at story S: both nodes at elevation of story S
  const nodes: Node[] = [];
  const nodeNames: string[] = [];
  const nodeNameToIdx = new Map<string, number>();

  const nodeKey = (pt: string, story: string) => `${pt}@${story}`;
  const allNodeKeys = new Set<string>();

  // Build a lookup: line name → lineConn (for nStories access)
  const lineConnMap = new Map<string, typeof lineConns[0]>();
  for (const lc of lineConns) lineConnMap.set(lc.name, lc);

  // Collect all unique (point, story) pairs needed
  for (const lc of lineConns) {
    for (const [key, la] of lineAssigns) {
      if (!key.startsWith(lc.name + "@")) continue;
      const story = la.story;
      const storyIdx = stories.findIndex(s => s.name === story);
      if (storyIdx < 0) continue;

      if (lc.type === "COLUMN" || lc.type === "BRACE") {
        // Top node at this story's elevation
        allNodeKeys.add(nodeKey(lc.pt2, story));
        // Bottom node at nStories levels below this story
        const nSt = Math.max(lc.nStories, 1);
        const bottomIdx = Math.min(storyIdx + nSt, stories.length - 1);
        allNodeKeys.add(nodeKey(lc.pt1, stories[bottomIdx].name));
      } else {
        // BEAM: both nodes at this story's elevation
        allNodeKeys.add(nodeKey(lc.pt1, story));
        allNodeKeys.add(nodeKey(lc.pt2, story));
      }
    }
  }

  // Also from restraints
  for (const [key] of restraints) {
    allNodeKeys.add(key);
  }

  // ── Nudos de las AREAS ──
  // Cada punto del area vive en la planta del assign MAS su salto `dz`. Las
  // plantas van de arriba abajo en el fichero, asi que subir una planta es
  // RESTAR uno al indice.
  //
  // `dz` cuenta plantas HACIA ABAJO desde la del AREAASSIGN. MEDIDO, no
  // supuesto: el `.e2k` trae
  //     AREA "W901" PANEL 4 "1" "2" "2" "1"  1 1 0 0
  //     AREAASSIGN "W901" "Level_1"            (Level_1 esta en Z = 3.5)
  // y ETABS coloca ese muro entre **Z = 0.0 y 3.5**, o sea que los puntos con
  // `dz = 1` caen en la Base — una planta por DEBAJO.
  //
  // Como `stories` viene de arriba abajo, bajar es SUMAR al indice. Con el
  // signo cambiado los 10 muros de la ultima planta se salian del array y se
  // perdian, y los otros 30 se montaban una planta MAS ARRIBA de donde van.
  const storyDe = (story: string, dz: number) => {
    const i = stories.findIndex(s => s.name === story);
    if (i < 0) return undefined;
    const j = i + (dz || 0);
    if (j < 0 || j > stories.length - 1) return undefined;   // fuera del edificio
    return stories[j].name;
  };
  for (const ac of areaConns) {
    const aa = areaAssigns.get(ac.name);
    if (!aa) continue;
    ac.pts.forEach((pt, k) => {
      const st = storyDe(aa.story, ac.dz[k] ?? 0);
      if (st) allNodeKeys.add(nodeKey(pt, st));
    });
  }

  // Create nodes — deduplicate by (point, story) key
  for (const nk of allNodeKeys) {
    const [pt, story] = nk.split("@");
    const xy = pointCoords.get(pt);
    const elev = storyElevs.get(story);
    if (xy === undefined || elev === undefined) continue;
    nodes.push([xy[0], xy[1], elev]);
    nodeNames.push(nk);
    nodeNameToIdx.set(nk, nodes.length - 1);
  }

  // ── Build elements ──
  const elements: Element[] = [];
  const elementNames: string[] = [];
  const elementTypes: string[] = [];
  const elementStoriesArr: string[] = [];
  const elementSections = new Map<number, string>();
  // Declarados ANTES del loop: el loop los puebla (rigidZone/releases). Estaban
  // más abajo y daban TDZ "Cannot access 'rigidOffsets' before initialization"
  // al parsear cualquier e2k con brazos rígidos o liberaciones (ej. BARRIO CENTRAL).
  const rigidOffsets = new Map<number, [number, number]>();
  const momentReleases = new Map<number, boolean[]>();

  for (const lc of lineConns) {
    for (const [key, la] of lineAssigns) {
      if (!key.startsWith(lc.name + "@")) continue;
      const story = la.story;
      const storyIdx = stories.findIndex(s => s.name === story);
      if (storyIdx < 0) continue;

      let n1key: string, n2key: string;
      if (lc.type === "COLUMN" || lc.type === "BRACE") {
        // Top at this story, bottom at nStories below
        const nSt = Math.max(lc.nStories, 1);
        const bottomIdx = Math.min(storyIdx + nSt, stories.length - 1);
        n1key = nodeKey(lc.pt1, stories[bottomIdx].name); // bottom
        n2key = nodeKey(lc.pt2, story);                    // top
      } else {
        // BEAM: both at this story level
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

      // Store rigid zone factor for this element
      if (la.rigidZone > 0) {
        rigidOffsets.set(elemIdx, [la.rigidZone, la.rigidZone]);
      }
      // Store releases (12-flag: FxI,FyI,FzI,TI,M2I,M3I, FxJ,FyJ,FzJ,TJ,M2J,M3J)
      if (la.releases.length > 0) {
        const rel: boolean[] = new Array(12).fill(false);
        // ETABS release names → 12-flag index
        const releaseMap: Record<string, number> = {
          "PI": 0,  "V2I": 1,  "V3I": 2,  "TI": 3,  "M2I": 4,  "M3I": 5,
          "PJ": 6,  "V2J": 7,  "V3J": 8,  "TJ": 9,  "M2J": 10, "M3J": 11,
        };
        for (const r of la.releases) {
          const idx = releaseMap[r];
          if (idx !== undefined) rel[idx] = true;
        }
        momentReleases.set(elemIdx, rel);
      }
    }
  }

  // ── Build element inputs (properties) ──
  const elasticities = new Map<number, number>();
  const shearModuli = new Map<number, number>();
  const areas = new Map<number, number>();
  const shearAreasY = new Map<number, number>();
  const shearAreasZ = new Map<number, number>();
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
    let A = 0, Iz = 0, Iy = 0, J = 0, AsY = 0, AsZ = 0;
    let shapeType: SectionShape["type"] = "rect";

    switch (sec.shape) {
      case "Concrete Rectangular":
        A = D * B;
        Iz = B * D ** 3 / 12;
        Iy = D * B ** 3 / 12;
        J = (B * D ** 3) * (1/3 - 0.21 * (D/B) * (1 - D**4 / (12 * B**4)));
        AsY = AsZ = 5 / 6 * A; // rectangular shear area factor
        shapeType = "rect";
        break;
      case "Concrete Circle":
        A = Math.PI * D ** 2 / 4;
        Iz = Iy = Math.PI * D ** 4 / 64;
        J = Math.PI * D ** 4 / 32;
        AsY = AsZ = 0.9 * A; // circular shear area factor ~0.9
        shapeType = "circ";
        break;
      case "Steel I/Wide Flange":
        A = 2 * B * tf + (D - 2 * tf) * tw;
        Iz = (B * D ** 3 - (B - tw) * (D - 2 * tf) ** 3) / 12;
        Iy = (2 * tf * B ** 3 + (D - 2 * tf) * tw ** 3) / 12;
        J = (2 * B * tf ** 3 + (D - 2 * tf) * tw ** 3) / 3;
        AsY = (D - 2 * tf) * tw; // web area (shear in Y = strong axis bending)
        AsZ = 2 * B * tf * 5/6; // flange area (shear in Z = weak axis bending)
        shapeType = "I";
        break;
      case "Steel Tube":
        A = D * B - (D - 2 * tw) * (B - 2 * tw);
        Iz = (B * D ** 3 - (B - 2 * tw) * (D - 2 * tw) ** 3) / 12;
        Iy = (D * B ** 3 - (D - 2 * tw) * (B - 2 * tw) ** 3) / 12;
        J = 2 * tw * (D - tw) * (B - tw) * ((D - tw) * (B - tw)) / ((D - tw) + (B - tw));
        AsY = 2 * D * tw; // two webs
        AsZ = 2 * B * tw; // two flanges
        shapeType = "HSS";
        break;
      case "Filled Steel Tube":
        A = D * B;
        Iz = B * D ** 3 / 12;
        Iy = D * B ** 3 / 12;
        J = 2 * tw * (D - tw) * (B - tw) * ((D - tw) * (B - tw)) / ((D - tw) + (B - tw));
        AsY = 2 * D * tw + 5/6 * (D - 2*tw) * (B - 2*tw); // steel webs + concrete core
        AsZ = 2 * B * tw + 5/6 * (D - 2*tw) * (B - 2*tw);
        shapeType = "CFT";
        break;
      case "Steel Angle": {
        const t = tf || tw;
        A = t * (D + B - t);
        Iz = t * (D ** 3 + B * t ** 2 + t ** 2 * (D - t)) / 12;
        Iy = t * (B ** 3 + D * t ** 2 + t ** 2 * (B - t)) / 12;
        J = (D + B - t) * t ** 3 / 3;
        AsY = D * t; // vertical leg
        AsZ = B * t; // horizontal leg
        shapeType = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        A = 2 * B * tf + (D - 2 * tf) * tw;
        Iz = (tw * D ** 3 + 2 * B * tf * (D - tf) ** 2) / 12;
        Iy = (2 * tf * B ** 3 + (D - 2 * tf) * tw ** 3) / 12;
        J = (2 * B * tf ** 3 + (D - 2 * tf) * tw ** 3) / 3;
        AsY = (D - 2 * tf) * tw; // web
        AsZ = 2 * B * tf * 5/6; // flanges
        shapeType = sec.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        A = 2 * (2 * B * tf + (D - 2 * tf) * tw);
        Iz = 2 * (tw * D ** 3 + 2 * B * tf * (D - tf) ** 2) / 12;
        Iy = 2 * (2 * tf * B ** 3 + (D - 2 * tf) * tw ** 3) / 12;
        J = 2 * (2 * B * tf ** 3 + (D - 2 * tf) * tw ** 3) / 3;
        AsY = 2 * (D - 2 * tf) * tw; // two webs
        AsZ = 4 * B * tf * 5/6; // four flanges
        shapeType = "2C";
        break;
      default:
        if (D > 0 && B > 0) {
          A = D * B; Iz = B * D ** 3 / 12; Iy = D * B ** 3 / 12;
          J = Math.min(D, B) * Math.max(D, B) ** 3 / 3 * 0.3;
          AsY = AsZ = 5 / 6 * A;
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
    if (AsY > 0) shearAreasY.set(elemIdx, AsY);
    if (AsZ > 0) shearAreasZ.set(elemIdx, AsZ);

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

  // ── Convert LINELOAD to equivalent nodal loads ──
  // LINELOAD "B120" "N+13.00m" TYPE "UNIFF" DIR "GRAV" LC "SCP" FVAL 0.0148
  // UNIFF = uniform full length, w (force/length)
  // Equivalent nodal: F = w*L/2 at each end node, applied in gravity direction (-Z)
  // Combine all load cases (SCP + CV = total service load)
  const loads = new Map<number, [number, number, number, number, number, number]>();

  // Build element lookup: "lineName@story" → element index
  const elemLookup = new Map<string, number>();
  for (let ei = 0; ei < elementNames.length; ei++) {
    elemLookup.set(`${elementNames[ei]}@${elementStoriesArr[ei]}`, ei);
  }

  for (const fl of frameLoads) {
    const elemIdx = elemLookup.get(`${fl.line}@${fl.story}`);
    if (elemIdx === undefined) continue;

    const [n1, n2] = elements[elemIdx];
    const p1 = nodes[n1], p2 = nodes[n2];
    const L = Math.sqrt((p2[0]-p1[0])**2 + (p2[1]-p1[1])**2 + (p2[2]-p1[2])**2);
    if (L < 1e-10) continue;

    // Equivalent nodal force = w * L / 2 at each node
    const F = fl.val * L / 2;

    // Direction: GRAV = -Z, GRAVITY = -Z
    let fx = 0, fy = 0, fz = 0;
    if (fl.dir === "GRAV" || fl.dir === "GRAVITY") {
      fz = -F; // gravity = downward
    } else if (fl.dir === "X") {
      fx = F;
    } else if (fl.dir === "Y") {
      fy = F;
    } else if (fl.dir === "Z") {
      fz = -F;
    }

    // Accumulate on both nodes
    for (const ni of [n1, n2]) {
      const prev = loads.get(ni) || [0, 0, 0, 0, 0, 0] as [number, number, number, number, number, number];
      prev[0] += fx; prev[1] += fy; prev[2] += fz;
      loads.set(ni, prev);
    }
  }

  // ── Add material densities to element inputs ──
  const densities = new Map<number, number>();
  for (const [elemIdx, secName] of elementSections) {
    const sec = frameSections.get(secName);
    if (!sec) continue;
    const mat = materials.get(sec.material);
    if (mat?.density) densities.set(elemIdx, mat.density);
  }

  // ── ELEMENTOS DE AREA ────────────────────────────────────────────────
  // Se montan al final, DESPUES de las barras, para no tocar la numeracion
  // que ya usan `elementSections` y compania.
  //
  // `MODELINGTYPE` de ETABS → `plateFormulations` del motor:
  //   ShellThin  → 1  Kirchhoff        ShellThick → 0  Mindlin MITC4
  //   Membrane   → 0  y ademas se anulan los modificadores de FLEXION, que es
  //                lo que hace que no aporte rigidez fuera del plano. Un
  //                `Membrane` que entre como placa seria otra estructura.
  const thicknesses = new Map<number, number>();
  const poissonsRatios = new Map<number, number>();
  const plateFormulations = new Map<number, number>();
  const shellModifiers = new Map<number, number[]>();
  const areaNames: string[] = [];
  let nAreasSinResolver = 0;
  for (const ac of areaConns) {
    const aa = areaAssigns.get(ac.name);
    if (!aa) { nAreasSinResolver++; continue; }
    const idx = ac.pts.map((pt, k) => {
      const st = storyDe(aa.story, ac.dz[k] ?? 0);
      return st === undefined ? undefined : nodeNameToIdx.get(nodeKey(pt, st));
    });
    // Un area con un nudo sin resolver no es media area: es ninguna.
    if (idx.some(v => v === undefined)) { nAreasSinResolver++; continue; }
    // Un PANEL de muro se escribe con el punto repetido (pt1 pt2 pt2 pt1) y el
    // salto de planta 1 1 0 0: al resolverlo salen 4 nudos DISTINTOS. Si aun
    // asi quedan repetidos, el Q4 esta colapsado y no es un elemento definido.
    const unicos = [...new Set(idx as number[])];
    if (unicos.length < 3) { nAreasSinResolver++; continue; }
    const nodosArea = (unicos.length === 3 ? unicos : (idx as number[]).slice(0, 4));
    const ei = elements.length;
    elements.push(nodosArea as unknown as Element);
    elementNames.push(ac.name);
    elementTypes.push(ac.tipo);
    elementStoriesArr.push(aa.story);
    areaNames.push(ac.name);

    const sp = shellProps.get(aa.section);
    if (sp) {
      thicknesses.set(ei, sp.t);
      const mat = materials.get(sp.material);
      if (mat?.E) elasticities.set(ei, mat.E);
      if (mat?.G) shearModuli.set(ei, mat.G);
      if (mat?.nu !== undefined) poissonsRatios.set(ei, mat.nu);
      if (mat?.density) densities.set(ei, mat.density);
      const esMembrana = /membrane/i.test(sp.modeling);
      plateFormulations.set(ei, /thick/i.test(sp.modeling) || esMembrana ? 0 : 1);
      const m = sp.mods ? sp.mods.slice(0, 8) : [1, 1, 1, 1, 1, 1, 1, 1];
      if (esMembrana) { m[3] = 0; m[4] = 0; m[5] = 0; m[6] = 0; m[7] = 0; }
      if (sp.mods || esMembrana) shellModifiers.set(ei, m);
    }
  }
  if (nAreasSinResolver) {
    console.warn(`[e2kParser] ${nAreasSinResolver} de ${areaConns.length} areas no se ` +
      `pudieron montar (sin AREAASSIGN, sin planta o con nudos repetidos). ` +
      `Se pierden: el modelo sale mas flojo y sin avisar en la geometria.`);
  }

  // ── A LAS UNIDADES DEL MOTOR: kN y m ─────────────────────────────────
  //
  // ⚠️ El parser NO convertia NADA: devolvia los numeros tal cual venian del
  // fichero. Y un `.e2k` va en **N y MM** (ETABS ignora el header UNITS y
  // siempre escribe en sus unidades base), asi que un modelo importado entraba
  // con las cotas MIL VECES mas grandes: X de 0 a 18000 donde el modelo tiene
  // 18 m, espesores de 200, y el modulo en N/mm2. Medido el 2026-08-28
  // (`cli/roundtrip_areas.mjs`). No daba error: daba otro edificio.
  //
  // Cada magnitud lleva su potencia: una inercia va en L^4 y un modulo en
  // F/L^2. Convertir solo las coordenadas seria peor que no convertir nada —
  // quedaria un modelo con la geometria en metros y las secciones en mm.
  const FL: Record<string, number> = { MM: 1e-3, CM: 1e-2, M: 1, IN: 0.0254, FT: 0.3048 };
  const FF: Record<string, number> = { N: 1e-3, KN: 1, KGF: 9.80665e-3, TONF: 9.80665,
                                       LB: 4.44822e-3, KIP: 4.44822 };
  const L = FL[(units.length || "M").toUpperCase()] ?? 1;
  const F = FF[(units.force || "KN").toUpperCase()] ?? 1;
  if (L !== 1 || F !== 1) {
    const esc = (m: Map<number, number> | undefined, k: number) => {
      if (!m) return;
      for (const [i, v] of m) m.set(i, v * k);
    };
    for (const n of nodes) { n[0] *= L; n[1] *= L; n[2] *= L; }
    for (const s of stories) { s.height *= L; s.elev *= L; }
    for (const g of grids) g.coord *= L;
    esc(thicknesses, L);
    esc(areas, L * L);
    esc(shearAreasY, L * L); esc(shearAreasZ, L * L);
    esc(momentsOfInertiaY, L ** 4); esc(momentsOfInertiaZ, L ** 4);
    esc(torsionalConstants, L ** 4);
    esc(elasticities, F / (L * L)); esc(shearModuli, F / (L * L));
    esc(densities, F / (L ** 3));
    esc(rigidOffsets as Map<number, number>, L);
    // Cargas: las fuerzas en F y los momentos en F*L, en el mismo vector.
    for (const [i, v] of loads) {
      loads.set(i, v.map((x, k) => x * (k < 3 ? F : F * L)) as typeof v);
    }
    // Las cotas de la seccion dibujada tambien son longitudes.
    for (const [, sh] of sectionShapes) {
      for (const k of ["d", "b", "tf", "tw", "D", "B", "TF", "TW"]) {
        const o = sh as unknown as Record<string, number>;
        if (typeof o[k] === "number") o[k] *= L;
      }
    }
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
    nodeInputs: { supports, loads },
    elementInputs: {
      elasticities,
      shearModuli,
      areas,
      momentsOfInertiaZ,
      momentsOfInertiaY,
      torsionalConstants,
      shearAreasY,
      shearAreasZ,
      rigidOffsets,
      momentReleases,
      densities,
      sectionShapes,
      thicknesses,
      poissonsRatios,
      plateFormulations,
      shellModifiers,
    },
    sectionShapes,
    grids,
    info: {
      nNodes: nodes.length,
      nFrames: elements.length - areaNames.length,
      nAreas: areaConns.length,
      nAreasMontadas: areaNames.length,
      title,
    },
    rawSections,
  };
}
