import * as THREE from "three";
import van, { State } from "vanjs-core";
import { Node, Structure, SectionShape } from "awatif-fem";
import { Settings } from "../settings/getSettings";
import { getTransformationMatrixBeam } from "./utils/getTransformationMatrixBeam";
import { Text } from "./Text";

/**
 * Draws filled cross-sections at the midpoint of each beam element.
 * Uses sectionShapes from elementInputs for accurate geometry:
 *   - "rect": filled rectangle b × h (cyan)
 *   - "circ": filled circle with diameter d (cyan)
 *   - "I": I-beam with flanges and web (orange)
 */
function getSectionLabel(shape: SectionShape): string {
  if (shape.name) return shape.name; // e.g. "W14x82"
  if (shape.type === "rect") {
    const b = (shape.b! * 100).toFixed(0);
    const h = (shape.h! * 100).toFixed(0);
    return `${b}x${h}`;
  }
  if (shape.type === "circ") {
    return `D${(shape.d! * 100).toFixed(0)}`;
  }
  return "";
}

export function sections(
  structure: Structure,
  settings: Settings,
  derivedNodes: State<Node[]>,
  derivedDisplayScale?: State<number>
): THREE.Group {
  const group = new THREE.Group();

  // ── Shape builders: return { fill: BufferGeometry, outline: BufferGeometry } ──

  function makeRect(b: number, h: number) {
    const hb = b / 2, hh = h / 2;

    // Filled quad (two triangles)
    const fillVerts = new Float32Array([
      0, -hb, -hh,  0,  hb, -hh,  0,  hb,  hh,
      0, -hb, -hh,  0,  hb,  hh,  0, -hb,  hh,
    ]);
    const fill = new THREE.BufferGeometry();
    fill.setAttribute("position", new THREE.BufferAttribute(fillVerts, 3));

    // Outline
    const outVerts = new Float32Array([
      0, -hb, -hh,  0,  hb, -hh,  0,  hb,  hh,  0, -hb,  hh,  0, -hb, -hh,
    ]);
    const outline = new THREE.BufferGeometry();
    outline.setAttribute("position", new THREE.BufferAttribute(outVerts, 3));

    return { fill, outline };
  }

  function makeCirc(d: number, seg = 24) {
    const r = d / 2;

    // Filled fan (triangles from center)
    const fv = new Float32Array(seg * 9);
    for (let i = 0; i < seg; i++) {
      const a0 = (i / seg) * Math.PI * 2;
      const a1 = ((i + 1) / seg) * Math.PI * 2;
      fv[i * 9]     = 0; fv[i * 9 + 1] = 0;             fv[i * 9 + 2] = 0;
      fv[i * 9 + 3] = 0; fv[i * 9 + 4] = r * Math.cos(a0); fv[i * 9 + 5] = r * Math.sin(a0);
      fv[i * 9 + 6] = 0; fv[i * 9 + 7] = r * Math.cos(a1); fv[i * 9 + 8] = r * Math.sin(a1);
    }
    const fill = new THREE.BufferGeometry();
    fill.setAttribute("position", new THREE.BufferAttribute(fv, 3));

    // Outline
    const ov = new Float32Array((seg + 1) * 3);
    for (let i = 0; i <= seg; i++) {
      const a = (i / seg) * Math.PI * 2;
      ov[i * 3] = 0; ov[i * 3 + 1] = r * Math.cos(a); ov[i * 3 + 2] = r * Math.sin(a);
    }
    const outline = new THREE.BufferGeometry();
    outline.setAttribute("position", new THREE.BufferAttribute(ov, 3));

    return { fill, outline };
  }

  function makeI(bf: number, d: number, tfIn?: number, twIn?: number) {
    const tf = tfIn ?? d * 0.08;
    const tw = twIn ?? bf * 0.07;
    const hb = bf / 2, hd = d / 2;
    const hweb = hd - tf;
    const htw = tw / 2;

    // I-shape as 3 filled rectangles: top flange, web, bottom flange
    const quads: number[] = [];
    function addQuad(y0: number, z0: number, y1: number, z1: number) {
      quads.push(0, y0, z0,  0, y1, z0,  0, y1, z1,  0, y0, z0,  0, y1, z1,  0, y0, z1);
    }
    // Bottom flange
    addQuad(-hb, -hd, hb, -hweb);
    // Web
    addQuad(-htw, -hweb, htw, hweb);
    // Top flange
    addQuad(-hb, hweb, hb, hd);

    const fill = new THREE.BufferGeometry();
    fill.setAttribute("position", new THREE.BufferAttribute(new Float32Array(quads), 3));

    // I-beam outline
    const outVerts = new Float32Array([
      // Bottom flange
      0, -hb, -hd,   0,  hb, -hd,   0,  hb, -hweb,
      // Web right side up
      0,  htw, -hweb,  0,  htw,  hweb,
      // Top flange
      0,  hb,  hweb,  0,  hb,  hd,   0, -hb,  hd,
      // Top flange left
      0, -hb,  hweb,
      // Web left side down
      0, -htw,  hweb,  0, -htw, -hweb,
      // Bottom flange left
      0, -hb, -hweb,  0, -hb, -hd,
    ]);
    const outline = new THREE.BufferGeometry();
    outline.setAttribute("position", new THREE.BufferAttribute(outVerts, 3));

    return { fill, outline };
  }

  /** Hollow rectangular section (HSS / tubular) */
  function makeHSS(b: number, h: number, t: number) {
    const hb = b / 2, hh = h / 2;
    const bi = hb - t, hi = hh - t;

    // Outer rect - inner rect = hollow shape (4 quads: top, bottom, left, right walls)
    const quads: number[] = [];
    function addQuad(y0: number, z0: number, y1: number, z1: number) {
      quads.push(0, y0, z0, 0, y1, z0, 0, y1, z1, 0, y0, z0, 0, y1, z1, 0, y0, z1);
    }
    // Bottom wall
    addQuad(-hb, -hh, hb, -hi);
    // Top wall
    addQuad(-hb, hi, hb, hh);
    // Left wall
    addQuad(-hb, -hi, -bi, hi);
    // Right wall
    addQuad(bi, -hi, hb, hi);

    const fill = new THREE.BufferGeometry();
    fill.setAttribute("position", new THREE.BufferAttribute(new Float32Array(quads), 3));

    // Outline: outer + inner rectangles
    const ov = new Float32Array([
      // Outer
      0, -hb, -hh, 0, hb, -hh, 0, hb, -hh, 0, hb, hh,
      0, hb, hh, 0, -hb, hh, 0, -hb, hh, 0, -hb, -hh,
      // Inner
      0, -bi, -hi, 0, bi, -hi, 0, bi, -hi, 0, bi, hi,
      0, bi, hi, 0, -bi, hi, 0, -bi, hi, 0, -bi, -hi,
    ]);
    const outline = new THREE.BufferGeometry();
    outline.setAttribute("position", new THREE.BufferAttribute(ov, 3));

    return { fill, outline };
  }

  /** CFT: steel tube outline + concrete fill inside */
  function makeCFT(b: number, h: number, t: number) {
    const hb = b / 2, hh = h / 2;
    const bi = hb - t, hi = hh - t;

    // Concrete fill (inner rectangle)
    const concFill = new THREE.BufferGeometry();
    const cv = new Float32Array([
      0, -bi, -hi, 0, bi, -hi, 0, bi, hi,
      0, -bi, -hi, 0, bi, hi, 0, -bi, hi,
    ]);
    concFill.setAttribute("position", new THREE.BufferAttribute(cv, 3));

    // Steel walls (4 quads)
    const quads: number[] = [];
    function addQuad(y0: number, z0: number, y1: number, z1: number) {
      quads.push(0, y0, z0, 0, y1, z0, 0, y1, z1, 0, y0, z0, 0, y1, z1, 0, y0, z1);
    }
    addQuad(-hb, -hh, hb, -hi); // bottom wall
    addQuad(-hb, hi, hb, hh);   // top wall
    addQuad(-hb, -hi, -bi, hi); // left wall
    addQuad(bi, -hi, hb, hi);   // right wall

    const steelFillGeom = new THREE.BufferGeometry();
    steelFillGeom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(quads), 3));

    // Outline: outer + inner
    const ov = new Float32Array([
      0, -hb, -hh, 0, hb, -hh, 0, hb, -hh, 0, hb, hh,
      0, hb, hh, 0, -hb, hh, 0, -hb, hh, 0, -hb, -hh,
      0, -bi, -hi, 0, bi, -hi, 0, bi, -hi, 0, bi, hi,
      0, bi, hi, 0, -bi, hi, 0, -bi, hi, 0, -bi, -hi,
    ]);
    const outline = new THREE.BufferGeometry();
    outline.setAttribute("position", new THREE.BufferAttribute(ov, 3));

    return { concFill, steelFillGeom, outline };
  }

  // ── Materials ──
  const concreteFill = new THREE.MeshBasicMaterial({
    color: 0x00ccff, transparent: true, opacity: 0.35,
    side: THREE.DoubleSide, depthWrite: false,
  });
  const concreteLine = new THREE.LineBasicMaterial({ color: 0x00ccff });
  const steelFill = new THREE.MeshBasicMaterial({
    color: 0xff9900, transparent: true, opacity: 0.4,
    side: THREE.DoubleSide, depthWrite: false,
  });
  const steelLine = new THREE.LineBasicMaterial({ color: 0xff9900 });

  // Helper: detect if element is vertical (column) based on node positions
  function isColumnElement(n1: Node, n2: Node): boolean {
    const dx = Math.abs(n2[0] - n1[0]);
    const dy = Math.abs(n2[1] - n1[1]);
    const dz = Math.abs(n2[2] - n1[2]);
    // Vertical if Z-displacement dominates (Y-up: use index 2 for Z in awatif)
    // In awatif Y-up: vertical elements go along Y axis
    // Z is vertical for edificio, Y is vertical for beams/3d examples
    return (dz > dx && dz > dy) || (dy > dx && dy > dz);
  }

  // ── Rebuild on change ──
  van.derive(() => {
    settings.deformedShape.val;
    settings.secColumns.val;
    settings.secBeams.val;
    settings.secFloor.val;

    const showCols = settings.secColumns.rawVal;
    const showBeams = settings.secBeams.rawVal;
    if (!showCols && !showBeams) { group.children.forEach((c) => { if (c instanceof Text) (c as Text).dispose(); }); group.clear(); return; }

    group.children.forEach((c) => { if (c instanceof Text) (c as Text).dispose(); });
    group.clear();

    const elems = structure.elements?.val;
    const inputs = structure.elementInputs?.val;
    if (!elems || !inputs) return;

    const shapes = inputs.sectionShapes;
    const floorFilter = settings.secFloor.rawVal; // -1 = all

    elems.forEach((element, idx) => {
      if (element.length !== 2) return;

      const node1 = derivedNodes.rawVal[element[0]];
      const node2 = derivedNodes.rawVal[element[1]];
      if (!node1 || !node2) return;

      // Filter by column/beam
      const isCol = isColumnElement(node1, node2);
      if (isCol && !showCols) return;
      if (!isCol && !showBeams) return;

      // Filter by floor (approximate: use min Y of element to determine floor)
      if (floorFilter >= 0) {
        const minY = Math.min(node1[1], node2[1]);
        const maxY = Math.max(node1[1], node2[1]);
        // Estimate floor height from grid (use gridSize as proxy)
        const gs = settings.gridSize.rawVal || 3;
        const floorIdx = Math.floor(minY / gs + 0.01);
        if (floorIdx !== floorFilter) return;
      }

      const shape = shapes?.get(idx);
      if (!shape) return;

      const mid: [number, number, number] = [
        (node1[0] + node2[0]) / 2,
        (node1[1] + node2[1]) / 2,
        (node1[2] + node2[2]) / 2,
      ];
      const rotMatrix = getTransformationMatrixBeam(node1, node2);

      if (shape.type === "CFT") {
        // CFT: concrete fill + steel tube walls + outline
        const cft = makeCFT(shape.b!, shape.h!, shape.tw ?? shape.b! * 0.05);
        // Concrete core
        const concMesh = new THREE.Mesh(cft.concFill, concreteFill);
        concMesh.position.set(...mid);
        concMesh.rotation.setFromRotationMatrix(rotMatrix);
        group.add(concMesh);
        // Steel walls
        const steelMesh = new THREE.Mesh(cft.steelFillGeom, steelFill);
        steelMesh.position.set(...mid);
        steelMesh.rotation.setFromRotationMatrix(rotMatrix);
        group.add(steelMesh);
        // Outline
        const line = new THREE.Line(cft.outline, steelLine);
        line.position.set(...mid);
        line.rotation.setFromRotationMatrix(rotMatrix);
        group.add(line);
      } else {
        let geom: { fill: THREE.BufferGeometry; outline: THREE.BufferGeometry };
        let fillMat: THREE.MeshBasicMaterial;
        let lineMat: THREE.LineBasicMaterial;

        switch (shape.type) {
          case "rect":
            geom = makeRect(shape.b!, shape.h!);
            fillMat = concreteFill; lineMat = concreteLine;
            break;
          case "circ":
            geom = makeCirc(shape.d!);
            fillMat = concreteFill; lineMat = concreteLine;
            break;
          case "I":
            geom = makeI(shape.b!, shape.h!, shape.tf, shape.tw);
            fillMat = steelFill; lineMat = steelLine;
            break;
          case "HSS":
            geom = makeHSS(shape.b!, shape.h!, shape.tw ?? shape.b! * 0.05);
            fillMat = steelFill; lineMat = steelLine;
            break;
          default:
            return;
        }

        // Filled face
        const meshObj = new THREE.Mesh(geom.fill, fillMat);
        meshObj.position.set(...mid);
        meshObj.rotation.setFromRotationMatrix(rotMatrix);
        group.add(meshObj);

        // Outline
        const line = new THREE.Line(geom.outline, lineMat);
        line.position.set(...mid);
        line.rotation.setFromRotationMatrix(rotMatrix);
        group.add(line);
      }

      // Label
      const label = getSectionLabel(shape);
      if (label) {
        const color = (shape.type === "I" || shape.type === "HSS" || shape.type === "CFT") ? "#ff9900" : "#00ccff";
        const text = new Text(label, color, "transparent");
        text.position.set(mid[0], mid[1], mid[2]);
        const size = 0.05 * settings.gridSize.rawVal * 0.5;
        text.updateScale(size * (derivedDisplayScale?.rawVal ?? 1));
        group.add(text);
      }
    });
  });

  // on derivedDisplayScale change update label sizes
  if (derivedDisplayScale) {
    van.derive(() => {
      derivedDisplayScale.val;
      if (!settings.sections.rawVal) return;
      const size = 0.05 * settings.gridSize.val * 0.5;
      group.children.forEach((c) => {
        if (c instanceof Text) (c as Text).updateScale(size * derivedDisplayScale.rawVal);
      });
    });
  }

  van.derive(() => {
    group.visible = settings.sections.val;
  });

  return group;
}
