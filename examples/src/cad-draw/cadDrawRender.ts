/**
 * Renderizado del modelo CAD a Three.js objects3D.
 * Convierte el estado en spheres (nodos), lines (frames) y meshes (shells).
 */
import * as THREE from "three";
import { getState } from "./cadDrawState";

const NODE_COLOR = 0xfbbf24;       // amarillo dorado
const NODE_SELECTED = 0xef4444;    // rojo
const LINE_COLOR = 0x3b82f6;       // azul
const AREA_COLOR = 0x10b981;       // verde
const PENDING_COLOR = 0xa855f7;    // morado (mientras se construye)

const sphereGeo = new THREE.SphereGeometry(0.08);

/**
 * Construye el array de Object3D representando el modelo CAD actual.
 * Llamado por build() del ExampleDef en cada rebuild.
 */
export function renderCadModel(): THREE.Object3D[] {
  const st = getState();
  const out: THREE.Object3D[] = [];

  // Materials reutilizables
  const matNode = new THREE.MeshBasicMaterial({ color: NODE_COLOR });
  const matNodeSel = new THREE.MeshBasicMaterial({ color: NODE_SELECTED });
  const matLine = new THREE.LineBasicMaterial({ color: LINE_COLOR, linewidth: 2 });
  const matLinePending = new THREE.LineBasicMaterial({
    color: PENDING_COLOR, linewidth: 3,
  });
  const matAreaShell = new THREE.MeshBasicMaterial({
    color: AREA_COLOR, transparent: true, opacity: 0.35, side: THREE.DoubleSide,
  });
  const matAreaEdge = new THREE.LineBasicMaterial({ color: AREA_COLOR, linewidth: 2 });

  // 1) Nodos como esferas
  for (const n of st.model.nodes.values()) {
    const isPending = st.pendingNodes.includes(n.id);
    const mesh = new THREE.Mesh(sphereGeo, isPending ? matNodeSel : matNode);
    mesh.position.set(n.pos[0], n.pos[1], n.pos[2]);
    out.push(mesh);
  }

  // 2) Líneas (frames)
  for (const l of st.model.lines.values()) {
    const ni = st.model.nodes.get(l.nI);
    const nj = st.model.nodes.get(l.nJ);
    if (!ni || !nj) continue;
    const geom = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(...ni.pos),
      new THREE.Vector3(...nj.pos),
    ]);
    out.push(new THREE.Line(geom, matLine));
  }

  // 3) Areas (shells Q4 o triángulos)
  for (const a of st.model.areas.values()) {
    if (a.pts.length < 3) continue;
    const positions: number[] = [];
    for (const pid of a.pts) {
      const n = st.model.nodes.get(pid);
      if (!n) continue;
      positions.push(...n.pos);
    }
    if (positions.length < 9) continue;
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    if (a.pts.length === 3) {
      geom.setIndex([0, 1, 2]);
    } else if (a.pts.length === 4) {
      geom.setIndex([0, 1, 2, 0, 2, 3]);
    }
    geom.computeVertexNormals();
    out.push(new THREE.Mesh(geom, matAreaShell));
    // Edge wireframe
    const edgeGeom = new THREE.BufferGeometry();
    const edgePts: THREE.Vector3[] = [];
    for (let i = 0; i < a.pts.length; i++) {
      const ni = st.model.nodes.get(a.pts[i]);
      const nj = st.model.nodes.get(a.pts[(i + 1) % a.pts.length]);
      if (ni && nj) {
        edgePts.push(new THREE.Vector3(...ni.pos), new THREE.Vector3(...nj.pos));
      }
    }
    edgeGeom.setFromPoints(edgePts);
    out.push(new THREE.LineSegments(edgeGeom, matAreaEdge));
  }

  // 4) Pending preview — si hay 1 nodo pendiente y tool=line, mostrar línea
  // ghosting al primer punto (sin endpoint todavía). Aquí solo coloreamos
  // el nodo pendiente (ver punto 1).

  // 5) Plano de trabajo (semitransparente para guiar al usuario)
  const planeSize = 20;
  const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
  const planeMat = new THREE.MeshBasicMaterial({
    color: 0x334155, transparent: true, opacity: 0.05, side: THREE.DoubleSide,
  });
  const plane = new THREE.Mesh(planeGeo, planeMat);
  if (st.workPlane === "xy") {
    plane.position.set(0, 0, st.workZ);
  } else if (st.workPlane === "xz") {
    plane.rotation.x = -Math.PI / 2;
  } else {
    plane.rotation.y = Math.PI / 2;
  }
  out.push(plane);

  return out;
}
