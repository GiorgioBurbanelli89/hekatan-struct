import { State } from "vanjs-core";
import { Node, Element } from "awatif-fem";
import * as THREE from "three";

/**
 * Element picker using Three.js raycaster.
 * Uses viewerEl.__ctx to access scene, camera, renderer.
 */
export function setupElementPicker(
  ctx: { scene: THREE.Scene; camera: THREE.Camera; renderer: THREE.WebGLRenderer; render: () => void },
  nodes: State<Node[]>,
  elements: State<Element[]>,
  selectedElement: State<number>
) {
  const canvas = ctx.renderer.domElement;
  const raycaster = new THREE.Raycaster();
  raycaster.params.Line = { threshold: 20 };

  let highlightMesh: THREE.LineSegments | null = null;
  let pointerDownPos: [number, number] | null = null;

  canvas.addEventListener("pointerdown", (e) => {
    pointerDownPos = [e.clientX, e.clientY];
  });

  canvas.addEventListener("pointerup", (e) => {
    if (!pointerDownPos) return;
    const dx = e.clientX - pointerDownPos[0];
    const dy = e.clientY - pointerDownPos[1];
    if (Math.sqrt(dx * dx + dy * dy) > 5) return; // skip drag

    const rect = canvas.getBoundingClientRect();
    const mouse = new THREE.Vector2(
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      -((e.clientY - rect.top) / rect.height) * 2 + 1
    );

    raycaster.setFromCamera(mouse, ctx.camera);

    // Collect all line objects from the scene
    const lineObjects: THREE.Object3D[] = [];
    ctx.scene.traverse((obj: THREE.Object3D) => {
      if (
        (obj instanceof THREE.LineSegments || obj instanceof THREE.Line) &&
        obj.visible &&
        obj !== highlightMesh
      ) {
        lineObjects.push(obj);
      }
    });

    const intersects = raycaster.intersectObjects(lineObjects, false);

    if (intersects.length > 0) {
      // Find closest element by comparing hit point to element midpoints
      const hitPoint = intersects[0].point;
      const n = nodes.val;
      const el = elements.val;
      let closestIdx = -1;
      let closestDist = Infinity;

      for (let i = 0; i < el.length; i++) {
        const n0 = n[el[i][0]];
        const n1 = n[el[i][1]];
        if (!n0 || !n1) continue;
        const mid = new THREE.Vector3(
          (n0[0] + n1[0]) / 2,
          (n0[1] + n1[1]) / 2,
          (n0[2] + n1[2]) / 2
        );
        const d = hitPoint.distanceTo(mid);
        if (d < closestDist) {
          closestDist = d;
          closestIdx = i;
        }
      }

      if (closestIdx >= 0) {
        highlightElement(closestIdx, n, el, ctx);
        selectedElement.val = closestIdx;
      }
    }
  });

  function highlightElement(
    idx: number,
    n: Node[],
    el: Element[],
    ctx: { scene: THREE.Scene; render: () => void }
  ) {
    // Remove old highlight
    if (highlightMesh) {
      ctx.scene.remove(highlightMesh);
      highlightMesh.geometry.dispose();
      (highlightMesh.material as THREE.Material).dispose();
      highlightMesh = null;
    }

    const e = el[idx];
    const n0 = n[e[0]];
    const n1 = n[e[1]];
    if (!n0 || !n1) return;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array([
      n0[0], n0[1], n0[2],
      n1[0], n1[1], n1[2],
    ]);
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.LineBasicMaterial({
      color: 0xffff00,
      linewidth: 3,
      depthTest: false,
    });

    highlightMesh = new THREE.LineSegments(geometry, material);
    highlightMesh.renderOrder = 999;
    ctx.scene.add(highlightMesh);
    ctx.render();
  }
}
