import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Text } from "awatif-ui/src/viewer/objects/Text";
import type { ViewerContext } from "./types";

/**
 * Creates the Three.js scene with dual cameras (perspective + orthographic),
 * OrbitControls, lighting, and render loop.
 * Returns the container element and a ViewerContext for external use.
 */
export function createViewer(): { element: HTMLDivElement; ctx: ViewerContext } {
  // Z-up coordinate system (structural engineering convention)
  THREE.Object3D.DEFAULT_UP = new THREE.Vector3(0, 0, 1);

  const container = document.createElement("div");
  container.id = "cad-viewport";

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0d0d0d);

  // --- Cameras ---
  const perspCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 2e6);
  perspCamera.position.set(15, -20, 12);

  // Orthographic camera (frustum will be updated on resize)
  const orthoCamera = new THREE.OrthographicCamera(-10, 10, 10, -10, 0.1, 2e6);
  orthoCamera.position.set(15, -20, 12);

  // --- Renderer ---
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x0d0d0d, 1);
  renderer.localClippingEnabled = true; // For section cuts
  container.appendChild(renderer.domElement);

  // --- Controls ---
  const controls = new OrbitControls(perspCamera, renderer.domElement);
  controls.target.set(5, 5, 0);
  controls.minDistance = 0.5;
  controls.maxDistance = 500;
  controls.zoomSpeed = 5;
  controls.enableDamping = false;
  controls.update();

  // --- Lighting ---
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
  dirLight.position.set(30, -20, 40);
  scene.add(ambient, dirLight);

  // --- Axes helper (awatif style: arrows + colored labels) ---
  const axesGroup = new THREE.Group();
  const axisSize = 1;

  const xArrow = new THREE.ArrowHelper(
    new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 0, 0),
    axisSize, 0x666666, 0.2, 0.2
  );
  const yArrow = new THREE.ArrowHelper(
    new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0),
    axisSize, 0x666666, 0.2, 0.2
  );
  const zArrow = new THREE.ArrowHelper(
    new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, 0),
    axisSize, 0x666666, 0.2, 0.2
  );

  const xLabel = new Text("X", "red", "transparent");
  const yLabel = new Text("Y", "green", "transparent");
  const zLabel = new Text("Z", "blue", "transparent");

  xLabel.position.set(1.3 * axisSize, 0, 0);
  yLabel.position.set(0, 1.3 * axisSize, 0);
  zLabel.position.set(0, 0, 1.3 * axisSize);
  xLabel.updateScale(0.4 * axisSize);
  yLabel.updateScale(0.4 * axisSize);
  zLabel.updateScale(0.4 * axisSize);

  xArrow.scale.set(axisSize, axisSize, axisSize);
  yArrow.scale.set(axisSize, axisSize, axisSize);
  zArrow.scale.set(axisSize, axisSize, axisSize);

  axesGroup.add(xArrow, yArrow, zArrow, xLabel, yLabel, zLabel);
  scene.add(axesGroup);

  // --- Base ground grid (subtle) ---
  const baseGrid = new THREE.GridHelper(100, 100, 0x333333, 0x222222);
  baseGrid.rotation.x = Math.PI / 2; // XY plane (Z-up)
  baseGrid.position.set(50, 50, 0);
  scene.add(baseGrid);

  // Active camera reference
  let activeCamera: THREE.Camera = perspCamera;

  function render() {
    renderer.render(scene, activeCamera);
  }

  // Resize handling
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const w = entry.target.clientWidth;
      const h = entry.target.clientHeight;
      if (w === 0 || h === 0) continue;

      perspCamera.aspect = w / h;
      perspCamera.updateProjectionMatrix();

      const aspect = w / h;
      const frustumHalf = orthoCamera.top;
      orthoCamera.left = -frustumHalf * aspect;
      orthoCamera.right = frustumHalf * aspect;
      orthoCamera.updateProjectionMatrix();

      renderer.setSize(w, h);
      render();
    }
  });
  resizeObserver.observe(container);

  controls.addEventListener("change", render);

  // Initial resize after DOM mount (ResizeObserver may not fire immediately)
  requestAnimationFrame(() => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (w > 0 && h > 0) {
      perspCamera.aspect = w / h;
      perspCamera.updateProjectionMatrix();
      const aspect = w / h;
      orthoCamera.left = -10 * aspect;
      orthoCamera.right = 10 * aspect;
      orthoCamera.updateProjectionMatrix();
      renderer.setSize(w, h);
      render();
    }
  });

  const ctx: ViewerContext = {
    scene,
    perspCamera,
    orthoCamera,
    controls,
    renderer,
    render,
  };

  // Expose camera switching
  (ctx as any).setActiveCamera = (cam: THREE.Camera) => {
    activeCamera = cam;
    controls.object = cam;
    controls.update();
    render();
  };

  (ctx as any).getActiveCamera = () => activeCamera;

  return { element: container, ctx };
}

/**
 * Switch to perspective camera (3D view)
 */
export function setPerspectiveView(
  ctx: ViewerContext,
  target: THREE.Vector3,
  distance: number
) {
  const cam = ctx.perspCamera;
  cam.position.set(
    target.x + distance * 0.5,
    target.y - distance * 0.8,
    target.z + distance * 0.5
  );
  ctx.controls.target.copy(target);
  (ctx as any).setActiveCamera(cam);
}

/**
 * Switch to orthographic plan view (top-down, looking -Z)
 */
export function setPlanView(
  ctx: ViewerContext,
  target: THREE.Vector3,
  extent: number
) {
  const cam = ctx.orthoCamera;
  const halfExt = extent * 0.6;
  const aspect =
    ctx.renderer.domElement.clientWidth /
    (ctx.renderer.domElement.clientHeight || 1);

  cam.left = -halfExt * aspect;
  cam.right = halfExt * aspect;
  cam.top = halfExt;
  cam.bottom = -halfExt;
  cam.near = -1000;
  cam.far = 1000;
  cam.updateProjectionMatrix();

  cam.position.set(target.x, target.y, target.z + extent);
  cam.up.set(0, 1, 0); // Y is up on screen for plan view
  ctx.controls.target.copy(target);
  (ctx as any).setActiveCamera(cam);
}

/**
 * Switch to orthographic elevation view looking along -X (sees Y-Z plane)
 * Used for elevation along a Y-axis (e.g., axis "A")
 */
export function setElevationXView(
  ctx: ViewerContext,
  target: THREE.Vector3,
  extent: number
) {
  const cam = ctx.orthoCamera;
  const halfExt = extent * 0.6;
  const aspect =
    ctx.renderer.domElement.clientWidth /
    (ctx.renderer.domElement.clientHeight || 1);

  cam.left = -halfExt * aspect;
  cam.right = halfExt * aspect;
  cam.top = halfExt;
  cam.bottom = -halfExt;
  cam.near = -1000;
  cam.far = 1000;
  cam.updateProjectionMatrix();

  cam.position.set(target.x + extent, target.y, target.z);
  cam.up.set(0, 0, 1); // Z is up
  ctx.controls.target.copy(target);
  (ctx as any).setActiveCamera(cam);
}

/**
 * Switch to orthographic elevation view looking along -Y (sees X-Z plane)
 * Used for elevation along an X-axis (e.g., axis "1")
 */
export function setElevationYView(
  ctx: ViewerContext,
  target: THREE.Vector3,
  extent: number
) {
  const cam = ctx.orthoCamera;
  const halfExt = extent * 0.6;
  const aspect =
    ctx.renderer.domElement.clientWidth /
    (ctx.renderer.domElement.clientHeight || 1);

  cam.left = -halfExt * aspect;
  cam.right = halfExt * aspect;
  cam.top = halfExt;
  cam.bottom = -halfExt;
  cam.near = -1000;
  cam.far = 1000;
  cam.updateProjectionMatrix();

  cam.position.set(target.x, target.y - extent, target.z);
  cam.up.set(0, 0, 1); // Z is up
  ctx.controls.target.copy(target);
  (ctx as any).setActiveCamera(cam);
}
