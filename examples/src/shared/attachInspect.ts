/**
 * attachInspect.ts — utilidad standalone que agrega el botón "🔍 Inspect" a
 * cualquier viewer (independiente de getCad3d). Permite clickear sobre un
 * elemento y ver:
 *   - Propiedades de la sección (E, A, Iy, Iz, J, G, t, ν)
 *   - Coordenadas de los nodos
 *   - Reactions / desplazamientos del elemento
 *   - Resultados de análisis (membrane, bending, etc. para shells)
 *
 * Uso:
 *   import { attachInspect } from "../shared/attachInspect";
 *   const viewerElm = getViewer({ ... });
 *   attachInspect(viewerElm, mesh);
 *
 * No depende de:
 *   - getCad3d (no se necesita el panel CAD)
 *   - SectionShape avanzado (sólo lee mesh.elementInputs)
 *   - Modal panel
 *
 * Solo necesita:
 *   - viewer DOM element (para poder pegar el botón sobre él)
 *   - mesh: { nodes, elements, elementInputs, deformOutputs, analyzeOutputs }
 *     (todos State<T> de vanjs-core, accedidos via .val)
 */
import * as THREE from "three";
import type { State } from "vanjs-core";
import type {
  Node, Element, ElementInputs, NodeInputs,
  DeformOutputs, AnalyzeOutputs,
} from "hekatan-fem";

interface InspectMesh {
  nodes: State<Node[]>;
  elements: State<Element[]>;
  nodeInputs?: State<NodeInputs>;
  elementInputs: State<ElementInputs>;
  deformOutputs?: State<DeformOutputs>;
  analyzeOutputs?: State<AnalyzeOutputs>;
}

interface ViewerCtx {
  renderer: { domElement: HTMLCanvasElement };
  controls: { object: THREE.Camera };
  scene: THREE.Scene;
  camera: THREE.Camera;
  render: () => void;
}

const fmt = (v: number | undefined, digits = 4): string => {
  if (v === undefined || v === null || !isFinite(v)) return "—";
  if (Math.abs(v) === 0) return "0";
  if (Math.abs(v) < 1e-3 || Math.abs(v) > 1e5) return v.toExponential(digits);
  return v.toFixed(digits);
};

export function attachInspect(viewerElm: HTMLElement, mesh: InspectMesh): void {
  // ── Inject minimal CSS (one-shot) ─────────────────────────────
  if (!document.getElementById("hk-inspect-styles")) {
    const style = document.createElement("style");
    style.id = "hk-inspect-styles";
    style.textContent = `
      .hk-inspect-btn {
        /* Top-center del viewer: no choca con Settings panel (top-left) ni con
         * el Tweakpane principal del ejemplo (top-right). */
        position: absolute; top: 8px; left: 50%; transform: translateX(-50%);
        z-index: 100;
        background: rgba(34,85,136,0.92); color: #fff;
        border: 1px solid #336699; border-radius: 4px;
        padding: 4px 10px; font-size: 11px;
        cursor: pointer; font-family: system-ui, sans-serif;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        backdrop-filter: blur(2px);
      }
      .hk-inspect-btn:hover { background: rgba(51,102,153,0.96); }
      .hk-inspect-btn.active { background: #ff4444; border-color: #ff4444; }
      .hk-inspect-panel {
        /* Posición central-derecha del viewer (lejos del Settings panel a la
         * izquierda y del Tweakpane principal a la derecha). Arrastrable. */
        position: fixed; top: 60px; left: 260px; z-index: 9999;
        background: rgba(20,24,32,0.96); color: #e8e8e8;
        border: 1px solid #336699; border-radius: 8px;
        padding: 12px; min-width: 320px; max-width: 460px; max-height: 80vh;
        overflow-y: auto; font-family: monospace; font-size: 12px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.6);
      }
      .hk-inspect-panel h3 { cursor: move; user-select: none; }
      .hk-inspect-panel h3 {
        margin: 0 0 8px 0; color: #ffaa44; font-size: 14px;
        display: flex; justify-content: space-between; align-items: center;
        font-family: system-ui, sans-serif;
      }
      .hk-inspect-panel .close-btn {
        background: none; border: none; color: #ff8888; cursor: pointer;
        font-size: 16px; padding: 0 4px;
      }
      .hk-inspect-panel .section {
        margin-top: 10px; border-top: 1px solid #444; padding-top: 8px;
      }
      .hk-inspect-panel .section-title {
        color: #ffaa44; font-size: 11px; font-weight: bold;
        text-transform: uppercase; margin-bottom: 4px;
      }
      .hk-inspect-panel .prop-row {
        display: flex; justify-content: space-between; padding: 2px 0;
      }
      .hk-inspect-panel .prop-key { color: #88ccff; }
      .hk-inspect-panel .prop-val { color: #ffeebb; font-weight: bold; }
      .hk-inspect-panel table {
        border-collapse: collapse; width: 100%;
        margin-top: 4px; font-size: 11px;
      }
      .hk-inspect-panel td {
        border: 1px solid #444; padding: 3px 6px; text-align: right;
        color: #cce; white-space: nowrap;
      }
      .hk-inspect-panel td.header {
        color: #ffaa44; font-weight: bold; background: #1a2030;
        text-align: center;
      }
      .hk-inspect-panel .hint {
        color: #888; font-size: 10px; font-family: system-ui, sans-serif;
        margin-top: 6px; font-style: italic;
      }
    `;
    document.head.appendChild(style);
  }

  // ── Get viewer ctx (Three.js scene/camera/renderer/controls) ──
  // El viewer expuesto por hekatan-ui guarda __ctx en el elemento DOM.
  const getCtx = (): ViewerCtx | null => {
    return (viewerElm as any).__ctx || null;
  };

  let inspectMode = false;
  let panel: HTMLDivElement | null = null;
  let highlightObj: THREE.Object3D | null = null;

  // ── Floating button (pos abs sobre el viewer) ─────────────────
  const btn = document.createElement("button");
  btn.className = "hk-inspect-btn";
  btn.textContent = "🔍 Inspect";
  btn.title = "Click para inspeccionar elementos. Clickeá un elemento para ver sus propiedades.";
  // Asegurar que el viewer tenga position:relative
  if (getComputedStyle(viewerElm).position === "static") {
    viewerElm.style.position = "relative";
  }
  viewerElm.appendChild(btn);

  // ── Pick element from mouse coords ────────────────────────────
  const pickElement = (ev: MouseEvent): number => {
    const ctx = getCtx();
    if (!ctx) return -1;
    const canvas = ctx.renderer.domElement;
    const rect = canvas.getBoundingClientRect();
    const mouse = new THREE.Vector2(
      ((ev.clientX - rect.left) / rect.width) * 2 - 1,
      -((ev.clientY - rect.top) / rect.height) * 2 + 1
    );

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, (ctx.controls?.object || ctx.camera) as THREE.Camera);
    raycaster.params.Line = { threshold: 0.5 };

    const nodes = mesh.nodes.val || [];
    const elements = mesh.elements.val || [];
    if (nodes.length === 0 || elements.length === 0) return -1;

    // Track frames separately (line proximity, threshold-based) vs surfaces
    // (true ray-triangle hits, no threshold). Si hay surface hit, gana.
    let bestFrameDist = Infinity, bestFrameIdx = -1;
    let bestSurfDist = Infinity, bestSurfIdx = -1;
    const ray = raycaster.ray;

    for (let i = 0; i < elements.length; i++) {
      const elem = elements[i];
      if (elem.length === 2) {
        const a = new THREE.Vector3(...nodes[elem[0]]);
        const b = new THREE.Vector3(...nodes[elem[1]]);
        const line = new THREE.Line3(a, b);
        const closestOnRay = new THREE.Vector3();
        const closestOnLine = new THREE.Vector3();
        ray.closestPointToPoint(line.getCenter(new THREE.Vector3()), closestOnRay);
        line.closestPointToPoint(closestOnRay, true, closestOnLine);
        const d = closestOnRay.distanceTo(closestOnLine);
        if (d < bestFrameDist) { bestFrameDist = d; bestFrameIdx = i; }
      } else if (elem.length === 3) {
        const a = new THREE.Vector3(...nodes[elem[0]]);
        const b = new THREE.Vector3(...nodes[elem[1]]);
        const c = new THREE.Vector3(...nodes[elem[2]]);
        const target = new THREE.Vector3();
        // doubleSided: backface también cuenta (losa puede mirar abajo)
        let hit = ray.intersectTriangle(a, b, c, false, target);
        if (!hit) hit = ray.intersectTriangle(a, c, b, false, target);
        if (hit) {
          const d = ray.origin.distanceTo(target);
          if (d < bestSurfDist) { bestSurfDist = d; bestSurfIdx = i; }
        }
      } else if (elem.length === 4) {
        const a = new THREE.Vector3(...nodes[elem[0]]);
        const b = new THREE.Vector3(...nodes[elem[1]]);
        const c = new THREE.Vector3(...nodes[elem[2]]);
        const d_node = new THREE.Vector3(...nodes[elem[3]]);
        const target = new THREE.Vector3();
        // Triangle 1: a-b-c (front + back)
        let hit = ray.intersectTriangle(a, b, c, false, target);
        if (!hit) hit = ray.intersectTriangle(a, c, b, false, target);
        if (hit) {
          const d = ray.origin.distanceTo(target);
          if (d < bestSurfDist) { bestSurfDist = d; bestSurfIdx = i; }
        }
        // Triangle 2: a-c-d (front + back)
        hit = ray.intersectTriangle(a, c, d_node, false, target);
        if (!hit) hit = ray.intersectTriangle(a, d_node, c, false, target);
        if (hit) {
          const d = ray.origin.distanceTo(target);
          if (d < bestSurfDist) { bestSurfDist = d; bestSurfIdx = i; }
        }
      } else if (elem.length === 8) {
        // H8 hexahedron: test 6 faces (bottom/top each as 2 triangles)
        const v = elem.map(ni => new THREE.Vector3(...nodes[ni]));
        const target = new THREE.Vector3();
        const faces = [
          [0,1,2,3], [4,5,6,7], [0,1,5,4], [2,3,7,6], [0,3,7,4], [1,2,6,5],
        ];
        for (const f of faces) {
          let hit = ray.intersectTriangle(v[f[0]], v[f[1]], v[f[2]], false, target);
          if (!hit) hit = ray.intersectTriangle(v[f[0]], v[f[2]], v[f[1]], false, target);
          if (hit) {
            const d = ray.origin.distanceTo(target);
            if (d < bestSurfDist) { bestSurfDist = d; bestSurfIdx = i; }
          }
          hit = ray.intersectTriangle(v[f[0]], v[f[2]], v[f[3]], false, target);
          if (!hit) hit = ray.intersectTriangle(v[f[0]], v[f[3]], v[f[2]], false, target);
          if (hit) {
            const d = ray.origin.distanceTo(target);
            if (d < bestSurfDist) { bestSurfDist = d; bestSurfIdx = i; }
          }
        }
      }
    }

    // Surface hit always wins (verdadero ray-triangle intersection).
    if (bestSurfIdx >= 0) return bestSurfIdx;
    // Frame: aplicar threshold proximidad al ray (extent * 0.05)
    const minPt = nodes.reduce<[number, number, number]>(
      (acc, n) => [Math.min(acc[0], n[0]), Math.min(acc[1], n[1]), Math.min(acc[2], n[2])],
      [Infinity, Infinity, Infinity]
    );
    const maxPt = nodes.reduce<[number, number, number]>(
      (acc, n) => [Math.max(acc[0], n[0]), Math.max(acc[1], n[1]), Math.max(acc[2], n[2])],
      [-Infinity, -Infinity, -Infinity]
    );
    const extent = Math.max(maxPt[0]-minPt[0], maxPt[1]-minPt[1], maxPt[2]-minPt[2], 1);
    return bestFrameDist < extent * 0.05 ? bestFrameIdx : -1;
  };

  // ── Highlight element en escena ───────────────────────────────
  const removeHighlight = () => {
    const ctx = getCtx();
    if (highlightObj && ctx) {
      ctx.scene.remove(highlightObj);
      highlightObj = null;
      ctx.render();
    }
  };
  const highlightElement = (idx: number) => {
    removeHighlight();
    const ctx = getCtx();
    if (!ctx) return;
    const elem = mesh.elements.val[idx];
    const nodes = mesh.nodes.val;
    if (elem.length === 2) {
      const geom = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(...nodes[elem[0]]),
        new THREE.Vector3(...nodes[elem[1]]),
      ]);
      const mat = new THREE.LineBasicMaterial({ color: 0xff4444, linewidth: 4 });
      highlightObj = new THREE.Line(geom, mat);
    } else {
      const pts = elem.map(ni => new THREE.Vector3(...nodes[ni]));
      pts.push(pts[0]);
      const geom = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({ color: 0xff4444, linewidth: 4 });
      highlightObj = new THREE.LineLoop(geom, mat);
    }
    ctx.scene.add(highlightObj);
    ctx.render();
  };

  // ── Build inspect panel HTML ──────────────────────────────────
  const showPanel = (idx: number) => {
    if (panel) panel.remove();
    const elements = mesh.elements.val;
    const nodes = mesh.nodes.val;
    const elem = elements[idx];
    const ei = mesh.elementInputs.val || {};
    const dOut = mesh.deformOutputs?.val;

    const isFrame = elem.length === 2;
    const isTri = elem.length === 3;
    const isQ4 = elem.length === 4;
    const isHex = elem.length === 8;
    const elemType = isFrame ? "Frame (2 nodos)" :
                      isTri ? "Shell triangular (3 nodos)" :
                      isQ4 ? "Shell Q4 (4 nodos)" :
                      isHex ? "Solid Hex8 (8 nodos)" :
                      `Element (${elem.length} nodos)`;

    let propsHTML = `
      <div class="prop-row"><span class="prop-key">Tipo</span><span class="prop-val">${elemType}</span></div>
      <div class="prop-row"><span class="prop-key">Element idx</span><span class="prop-val">${idx}</span></div>
      <div class="prop-row"><span class="prop-key">Nodos</span><span class="prop-val">${elem.join(", ")}</span></div>
    `;

    if (isFrame) {
      const a = nodes[elem[0]], b = nodes[elem[1]];
      const L = Math.sqrt((b[0]-a[0])**2 + (b[1]-a[1])**2 + (b[2]-a[2])**2);
      const E = ei.elasticities?.get(idx) || 0;
      const A = ei.areas?.get(idx) || 0;
      const Iz = ei.momentsOfInertiaZ?.get(idx) || 0;
      const Iy = ei.momentsOfInertiaY?.get(idx) || 0;
      const G = ei.shearModuli?.get(idx) || 0;
      const J = ei.torsionalConstants?.get(idx) || 0;
      const AsY_input = (ei as any).shearAreasY?.get(idx);
      const AsZ_input = (ei as any).shearAreasZ?.get(idx);
      const dens = (ei as any).densities?.get(idx);
      const bernoulli = (AsY_input != null && AsY_input < 0) || (AsZ_input != null && AsZ_input < 0);
      const beamTheory = bernoulli
        ? "Bernoulli (As=−1)"
        : (AsY_input != null && AsY_input > 0) || (AsZ_input != null && AsZ_input > 0)
        ? "Timoshenko (As explícito)"
        : "Timoshenko (5/6·A default)";

      // Effective shear areas (replicando getLocalStiffnessMatrix.cpp)
      const AsY_eff = bernoulli ? 0 : (AsY_input ?? 0) > 0 ? AsY_input : (5/6) * A;
      const AsZ_eff = bernoulli ? 0 : (AsZ_input ?? 0) > 0 ? AsZ_input : (5/6) * A;
      const phiY = (!bernoulli && AsY_eff > 0 && G > 0) ? (12 * E * Iy) / (G * AsY_eff * L * L) : 0;
      const phiZ = (!bernoulli && AsZ_eff > 0 && G > 0) ? (12 * E * Iz) / (G * AsZ_eff * L * L) : 0;

      // K local coefficients (matching getLocalStiffnessMatrix.cpp lines 181-193)
      const EA_L = E * A / L;
      const GJ_L = G * J / L;
      const tz = (12 * E * Iz / (L*L*L)) / (1 + phiZ);
      const bz = (6  * E * Iz / (L*L))   / (1 + phiZ);
      const kz = (4  * E * Iz / L)       * (1 + phiZ/4) / (1 + phiZ);
      const az = (2  * E * Iz / L)       * (1 - phiZ/2) / (1 + phiZ);
      const ty = (12 * E * Iy / (L*L*L)) / (1 + phiY);
      const by = (6  * E * Iy / (L*L))   / (1 + phiY);
      const ky = (4  * E * Iy / L)       * (1 + phiY/4) / (1 + phiY);
      const ay = (2  * E * Iy / L)       * (1 - phiY/2) / (1 + phiY);

      // Trace(K_local) = 2·(EA/L) + 2·tz + 2·ty + 2·GJ/L + 2·ky + 2·kz
      const trK = 2*(EA_L + GJ_L + tz + ty + ky + kz);

      propsHTML += `
        <div class="section">
          <div class="section-title">Geometría</div>
          <div class="prop-row"><span class="prop-key">L</span><span class="prop-val">${fmt(L)} m</span></div>
        </div>
        <div class="section">
          <div class="section-title">Material</div>
          <div class="prop-row"><span class="prop-key">E</span><span class="prop-val">${fmt(E)}</span></div>
          <div class="prop-row"><span class="prop-key">G</span><span class="prop-val">${fmt(G)}</span></div>
          ${dens != null ? `<div class="prop-row"><span class="prop-key">ρ</span><span class="prop-val">${fmt(dens)}</span></div>` : ""}
        </div>
        <div class="section">
          <div class="section-title">Sección</div>
          <div class="prop-row"><span class="prop-key">A</span><span class="prop-val">${fmt(A)}</span></div>
          <div class="prop-row"><span class="prop-key">Iz (weak)</span><span class="prop-val">${fmt(Iz)}</span></div>
          <div class="prop-row"><span class="prop-key">Iy (strong)</span><span class="prop-val">${fmt(Iy)}</span></div>
          <div class="prop-row"><span class="prop-key">J</span><span class="prop-val">${fmt(J)}</span></div>
        </div>
        <div class="section">
          <div class="section-title">Beam Theory</div>
          <div class="prop-row"><span class="prop-key">Tipo</span><span class="prop-val">${beamTheory}</span></div>
          <div class="prop-row"><span class="prop-key">AsY (efectiva)</span><span class="prop-val">${fmt(AsY_eff)}</span></div>
          <div class="prop-row"><span class="prop-key">AsZ (efectiva)</span><span class="prop-val">${fmt(AsZ_eff)}</span></div>
          <div class="prop-row"><span class="prop-key">φY = 12·E·Iy/(G·AsY·L²)</span><span class="prop-val">${fmt(phiY, 4)}</span></div>
          <div class="prop-row"><span class="prop-key">φZ = 12·E·Iz/(G·AsZ·L²)</span><span class="prop-val">${fmt(phiZ, 4)}</span></div>
        </div>

        <div class="section">
          <div class="section-title">Matriz K local 12×12 — coeficientes</div>
          <div class="prop-row"><span class="prop-key">EA/L (axial)</span><span class="prop-val">${fmt(EA_L)}</span></div>
          <div class="prop-row"><span class="prop-key">GJ/L (torsión)</span><span class="prop-val">${fmt(GJ_L)}</span></div>
          <table>
            <tr><td class="header">eje Z (Iz)</td><td class="header">tz=12EIz/L³/(1+φZ)</td><td class="header">bz=6EIz/L²/(1+φZ)</td><td class="header">kz=4EIz/L·κ⁺/(1+φZ)</td><td class="header">az=2EIz/L·κ⁻/(1+φZ)</td></tr>
            <tr><td class="header">valor</td><td>${fmt(tz)}</td><td>${fmt(bz)}</td><td>${fmt(kz)}</td><td>${fmt(az)}</td></tr>
            <tr><td class="header">eje Y (Iy)</td><td class="header">ty=12EIy/L³/(1+φY)</td><td class="header">by=6EIy/L²/(1+φY)</td><td class="header">ky=4EIy/L·κ⁺/(1+φY)</td><td class="header">ay=2EIy/L·κ⁻/(1+φY)</td></tr>
            <tr><td class="header">valor</td><td>${fmt(ty)}</td><td>${fmt(by)}</td><td>${fmt(ky)}</td><td>${fmt(ay)}</td></tr>
          </table>
          <div class="hint">κ⁺ = (1+φ/4),  κ⁻ = (1−φ/2). Bernoulli ⇒ φ=0 ⇒ κ⁺=κ⁻=1.</div>
        </div>

        <div class="section">
          <div class="section-title">Trazas (invariantes)</div>
          <div class="prop-row"><span class="prop-key">tr(K_local)</span><span class="prop-val">${fmt(trK)}</span></div>
          <div class="prop-row"><span class="prop-key">  = 2(EA/L + GJ/L + tz + ty + kz + ky)</span><span class="prop-val"></span></div>
          <div class="prop-row"><span class="prop-key">det(K_local)</span><span class="prop-val">0 (rank 6, 6 rigid body modes)</span></div>
        </div>
      `;
    } else if (isTri || isQ4) {
      const E = ei.elasticities?.get(idx) || 0;
      const t = ei.thicknesses?.get(idx) || 0;
      const nu = ei.poissonsRatios?.get(idx) || 0;
      const G_in = ei.shearModuli?.get(idx);
      const G = G_in || E / (2 * (1 + nu));
      const k_s = 5/6;     // Mindlin shear correction factor (rectangular)

      // D_bending (3x3) = E·t³/(12·(1−ν²)) · [[1,ν,0],[ν,1,0],[0,0,(1−ν)/2]]
      // Replica buildIsoDb (getLocalStiffnessMatrix.cpp:212-225)
      const D_b_factor = (E * t**3) / (12 * (1 - nu*nu));
      const Db00 = D_b_factor * 1;
      const Db01 = D_b_factor * nu;
      const Db22 = D_b_factor * (1 - nu) / 2;

      // D_shear (2x2) = k_s·G·t·I (matriz diagonal 2x2)
      // Replica buildIsoDs (getLocalStiffnessMatrix.cpp:227-235)
      const Ds_diag = k_s * G * t;

      // D_membrane (3x3) = E/(1−ν²) · [[1,ν,0],[ν,1,0],[0,0,(1−ν)/2]] (constitutiva in-plane)
      // Replica getIsotropicInPlaneConstitutiveMatrix (líneas 442-449)
      const D_m_factor = E / (1 - nu*nu);
      const Dm00 = D_m_factor * 1;
      const Dm01 = D_m_factor * nu;
      const Dm22 = D_m_factor * (1 - nu) / 2;

      // Trazas
      const trDb = Db00 + Db00 + Db22;        // 2·D_b_factor + D_b_factor·(1−ν)/2
      const trDs = 2 * Ds_diag;
      const trDm = Dm00 + Dm00 + Dm22;

      propsHTML += `
        <div class="section">
          <div class="section-title">Material</div>
          <div class="prop-row"><span class="prop-key">E</span><span class="prop-val">${fmt(E)}</span></div>
          <div class="prop-row"><span class="prop-key">G</span><span class="prop-val">${fmt(G)}</span></div>
          <div class="prop-row"><span class="prop-key">ν</span><span class="prop-val">${fmt(nu)}</span></div>
        </div>
        <div class="section">
          <div class="section-title">Shell</div>
          <div class="prop-row"><span class="prop-key">t</span><span class="prop-val">${fmt(t)} m</span></div>
          <div class="prop-row"><span class="prop-key">k_s (shear corr.)</span><span class="prop-val">5/6 = ${fmt(k_s, 4)}</span></div>
        </div>

        <div class="section">
          <div class="section-title">D_bending — Et³/(12(1−ν²)) · K_b</div>
          <div class="prop-row"><span class="prop-key">factor = Et³/(12(1−ν²))</span><span class="prop-val">${fmt(D_b_factor)}</span></div>
          <table>
            <tr><td class="header"></td><td class="header">κxx</td><td class="header">κyy</td><td class="header">κxy</td></tr>
            <tr><td class="header">Mxx</td><td>${fmt(Db00)}</td><td>${fmt(Db01)}</td><td>0</td></tr>
            <tr><td class="header">Myy</td><td>${fmt(Db01)}</td><td>${fmt(Db00)}</td><td>0</td></tr>
            <tr><td class="header">Mxy</td><td>0</td><td>0</td><td>${fmt(Db22)}</td></tr>
          </table>
          <div class="prop-row"><span class="prop-key">tr(D_b)</span><span class="prop-val">${fmt(trDb)}</span></div>
        </div>

        <div class="section">
          <div class="section-title">D_shear — k_s·G·t · I₂</div>
          <table>
            <tr><td class="header"></td><td class="header">γxz</td><td class="header">γyz</td></tr>
            <tr><td class="header">Qx</td><td>${fmt(Ds_diag)}</td><td>0</td></tr>
            <tr><td class="header">Qy</td><td>0</td><td>${fmt(Ds_diag)}</td></tr>
          </table>
          <div class="prop-row"><span class="prop-key">tr(D_s)</span><span class="prop-val">${fmt(trDs)}</span></div>
        </div>

        <div class="section">
          <div class="section-title">D_membrane — E/(1−ν²) · K_m</div>
          <div class="prop-row"><span class="prop-key">factor = E/(1−ν²)</span><span class="prop-val">${fmt(D_m_factor)}</span></div>
          <table>
            <tr><td class="header"></td><td class="header">εxx</td><td class="header">εyy</td><td class="header">γxy</td></tr>
            <tr><td class="header">Nxx</td><td>${fmt(Dm00)}</td><td>${fmt(Dm01)}</td><td>0</td></tr>
            <tr><td class="header">Nyy</td><td>${fmt(Dm01)}</td><td>${fmt(Dm00)}</td><td>0</td></tr>
            <tr><td class="header">Nxy</td><td>0</td><td>0</td><td>${fmt(Dm22)}</td></tr>
          </table>
          <div class="prop-row"><span class="prop-key">tr(D_m)</span><span class="prop-val">${fmt(trDm)}</span></div>
        </div>
      `;
    } else if (isHex) {
      const E = ei.elasticities?.get(idx);
      const nu = ei.poissonsRatios?.get(idx);
      propsHTML += `
        <div class="section">
          <div class="section-title">Material</div>
          <div class="prop-row"><span class="prop-key">E</span><span class="prop-val">${fmt(E)}</span></div>
          <div class="prop-row"><span class="prop-key">ν</span><span class="prop-val">${fmt(nu)}</span></div>
        </div>
      `;
    }

    // Coordenadas de los nodos (todos)
    let nodesTable = `<table><tr><td class="header">Nodo</td><td class="header">X</td><td class="header">Y</td><td class="header">Z</td>`;
    if (dOut?.deformations) {
      nodesTable += `<td class="header">uX</td><td class="header">uY</td><td class="header">uZ</td>`;
    }
    nodesTable += `</tr>`;
    for (const ni of elem) {
      const p = nodes[ni];
      nodesTable += `<tr><td class="header">${ni}</td><td>${fmt(p[0])}</td><td>${fmt(p[1])}</td><td>${fmt(p[2])}</td>`;
      if (dOut?.deformations) {
        const u = dOut.deformations.get(ni);
        if (u) {
          nodesTable += `<td>${fmt(u[0]*1000, 3)}</td><td>${fmt(u[1]*1000, 3)}</td><td>${fmt(u[2]*1000, 3)}</td>`;
        } else {
          nodesTable += `<td>—</td><td>—</td><td>—</td>`;
        }
      }
      nodesTable += `</tr>`;
    }
    nodesTable += `</table>`;
    if (dOut?.deformations) {
      nodesTable += `<div class="hint">Desplazamientos en mm.</div>`;
    }

    propsHTML += `
      <div class="section">
        <div class="section-title">Nodos & Desplazamientos</div>
        ${nodesTable}
      </div>
    `;

    // ── Resultados de análisis (analyze) si disponibles ──
    const aOut = mesh.analyzeOutputs?.val;
    if (aOut && (isQ4 || isTri)) {
      const fields: Array<[string, Map<number, number[]> | undefined, string]> = [
        ["σ pressure", (aOut as any).pressure, "kN/m²"],
        ["bending Mxx", (aOut as any).bendingXX, "kN·m/m"],
        ["bending Myy", (aOut as any).bendingYY, "kN·m/m"],
        ["bending Mxy", (aOut as any).bendingXY, "kN·m/m"],
        ["membrane Nxx", (aOut as any).membraneXX, "kN/m"],
        ["membrane Nyy", (aOut as any).membraneYY, "kN/m"],
        ["membrane Nxy", (aOut as any).membraneXY, "kN/m"],
        ["shear Qx", (aOut as any).shearX, "kN/m"],
        ["shear Qy", (aOut as any).shearY, "kN/m"],
        ["von Mises", (aOut as any).vonMises, "kN/m²"],
      ].filter(([_, m]) => m && m.size > 0);
      if (fields.length > 0) {
        let analyzeTable = `<table><tr><td class="header">campo</td>`;
        for (let i = 0; i < elem.length; i++) {
          analyzeTable += `<td class="header">n${elem[i]}</td>`;
        }
        analyzeTable += `<td class="header">prom</td><td class="header">unid</td></tr>`;
        for (const [label, map, unit] of fields) {
          const vals = map!.get(idx);
          if (!vals) continue;
          analyzeTable += `<tr><td class="header">${label}</td>`;
          let sum = 0, n = 0;
          for (let i = 0; i < elem.length; i++) {
            const v = vals[i];
            if (v != null) { sum += v; n++; }
            analyzeTable += `<td>${fmt(v, 3)}</td>`;
          }
          const avg = n > 0 ? sum / n : NaN;
          analyzeTable += `<td>${fmt(avg, 3)}</td><td style="text-align:left">${unit}</td></tr>`;
        }
        analyzeTable += `</table>`;
        propsHTML += `
          <div class="section">
            <div class="section-title">Resultados análisis (por nodo del elemento)</div>
            ${analyzeTable}
            <div class="hint">Valores por nodo del elemento (interpolados desde Gauss).</div>
          </div>
        `;
      }
    }

    // Para frames, mostrar deformaciones eje-relativas (axial extension, etc.)
    if (isFrame && dOut?.deformations) {
      const u0 = dOut.deformations.get(elem[0]);
      const u1 = dOut.deformations.get(elem[1]);
      if (u0 && u1) {
        const a_n = nodes[elem[0]], b_n = nodes[elem[1]];
        const dxL = b_n[0]-a_n[0], dyL = b_n[1]-a_n[1], dzL = b_n[2]-a_n[2];
        const Lf = Math.sqrt(dxL*dxL + dyL*dyL + dzL*dzL);
        const ex = [dxL/Lf, dyL/Lf, dzL/Lf];
        const du = [u1[0]-u0[0], u1[1]-u0[1], u1[2]-u0[2]];
        const axial_du = du[0]*ex[0] + du[1]*ex[1] + du[2]*ex[2];
        const axial_strain = axial_du / Lf;
        const transv = Math.sqrt((du[0]-axial_du*ex[0])**2 + (du[1]-axial_du*ex[1])**2 + (du[2]-axial_du*ex[2])**2);
        propsHTML += `
          <div class="section">
            <div class="section-title">Deformación del elemento</div>
            <div class="prop-row"><span class="prop-key">Δu axial (j−i)·ê</span><span class="prop-val">${fmt(axial_du * 1000, 4)} mm</span></div>
            <div class="prop-row"><span class="prop-key">ε axial</span><span class="prop-val">${fmt(axial_strain, 6)}</span></div>
            <div class="prop-row"><span class="prop-key">|Δu transversal|</span><span class="prop-val">${fmt(transv * 1000, 4)} mm</span></div>
          </div>
        `;
      }
    }

    panel = document.createElement("div");
    panel.className = "hk-inspect-panel";
    panel.innerHTML = `
      <h3>
        <span>🔍 Inspect — Element ${idx}</span>
        <button class="close-btn" title="Cerrar">✕</button>
      </h3>
      ${propsHTML}
      <div class="hint">Click otro elemento para inspeccionarlo. Click X o "Inspect" para cerrar.<br/>Arrastrá del título para mover el panel.</div>
    `;
    panel.querySelector(".close-btn")?.addEventListener("click", () => {
      cleanup();
    });
    // Restaurar posición guardada del panel (si existe)
    try {
      const savedPos = localStorage.getItem("hk_inspect_panel_pos");
      if (savedPos) {
        const { left, top } = JSON.parse(savedPos);
        if (typeof left === "number" && typeof top === "number") {
          panel.style.left = `${left}px`;
          panel.style.top = `${top}px`;
        }
      }
    } catch {}
    // Hacer arrastrable desde el header h3
    const header = panel.querySelector("h3") as HTMLElement | null;
    if (header) {
      let dragging = false;
      let startX = 0, startY = 0, origLeft = 0, origTop = 0;
      header.addEventListener("mousedown", (e: MouseEvent) => {
        // Ignorar clicks en el botón X
        if ((e.target as HTMLElement).classList.contains("close-btn")) return;
        dragging = true;
        startX = e.clientX; startY = e.clientY;
        const r = panel!.getBoundingClientRect();
        origLeft = r.left; origTop = r.top;
        panel!.style.left = `${origLeft}px`;
        panel!.style.top = `${origTop}px`;
        e.preventDefault();
      });
      window.addEventListener("mousemove", (e: MouseEvent) => {
        if (!dragging || !panel) return;
        const dx = e.clientX - startX, dy = e.clientY - startY;
        const newLeft = Math.max(0, Math.min(window.innerWidth - 100, origLeft + dx));
        const newTop = Math.max(0, Math.min(window.innerHeight - 50, origTop + dy));
        panel.style.left = `${newLeft}px`;
        panel.style.top = `${newTop}px`;
      });
      window.addEventListener("mouseup", () => {
        if (!dragging || !panel) return;
        dragging = false;
        try {
          localStorage.setItem("hk_inspect_panel_pos", JSON.stringify({
            left: parseFloat(panel.style.left),
            top: parseFloat(panel.style.top),
          }));
        } catch {}
      });
    }
    document.body.appendChild(panel);
  };

  const cleanup = () => {
    if (panel) { panel.remove(); panel = null; }
    removeHighlight();
  };

  // ── Click handler en canvas ───────────────────────────────────
  let canvasListener: ((ev: MouseEvent) => void) | null = null;
  let canvasMoveListener: ((ev: MouseEvent) => void) | null = null;

  // Listeners pegados a window con capture:true → corren ANTES de cualquier
  // listener en canvas/div del workspace. Si pickElement detecta un elemento,
  // stopImmediatePropagation evita que el workspace ejecute su drawing/selection.
  const isOverCanvas = (ev: MouseEvent): boolean => {
    const ctx = getCtx();
    if (!ctx) return false;
    const canvas = ctx.renderer.domElement;
    return ev.target === canvas || canvas.contains(ev.target as Node);
  };

  const enableInspect = () => {
    const ctx = getCtx();
    if (!ctx) {
      console.warn("[Inspect] viewer ctx not ready yet");
      return;
    }
    const canvas = ctx.renderer.domElement;
    // Click handler: pickea, muestra panel, stop propagation
    canvasListener = (ev: MouseEvent) => {
      if (!isOverCanvas(ev)) return;
      const idx = pickElement(ev);
      if (idx >= 0) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        highlightElement(idx);
        showPanel(idx);
      }
    };
    // Mousedown handler: stop propagation también para evitar que el workspace
    // entre en modo drag/selection-rect.
    const mousedownListener = (ev: MouseEvent) => {
      if (!isOverCanvas(ev)) return;
      const idx = pickElement(ev);
      if (idx >= 0) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
      }
    };
    canvasMoveListener = (ev: MouseEvent) => {
      if (!isOverCanvas(ev)) return;
      const idx = pickElement(ev);
      canvas.style.cursor = idx >= 0 ? "pointer" : "default";
    };
    // Window-level capture phase = beats todos los handlers del workspace
    window.addEventListener("click", canvasListener, true);
    window.addEventListener("mousedown", mousedownListener as any, true);
    canvas.addEventListener("mousemove", canvasMoveListener);
    // Guardar mousedownListener para poder removerlo en disableInspect
    (canvasListener as any).__mousedownPair = mousedownListener;
  };
  const disableInspect = () => {
    const ctx = getCtx();
    if (canvasListener) {
      window.removeEventListener("click", canvasListener, true);
      const md = (canvasListener as any).__mousedownPair;
      if (md) window.removeEventListener("mousedown", md, true);
    }
    if (ctx && canvasMoveListener) {
      const canvas = ctx.renderer.domElement;
      canvas.removeEventListener("mousemove", canvasMoveListener);
      canvas.style.cursor = "default";
    }
    canvasListener = null;
    canvasMoveListener = null;
    cleanup();
  };

  btn.addEventListener("click", () => {
    inspectMode = !inspectMode;
    btn.classList.toggle("active", inspectMode);
    btn.textContent = inspectMode ? "🔍 Inspect (ON)" : "🔍 Inspect";
    if (inspectMode) {
      // Defer en case viewer ctx no está listo aún
      setTimeout(enableInspect, 50);
    } else {
      disableInspect();
    }
  });
}
