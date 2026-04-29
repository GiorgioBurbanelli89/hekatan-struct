/**
 * Importador CSI — F2K (SAFE) / E2K (ETABS) / S2K (SAP2000)
 *
 * Ejemplo dedicado: carga un archivo de texto CSI y renderiza la geometría
 * en la escena (zapatas como shells, vigas como frames). Útil para inspeccionar
 * modelos exportados por Hekatan o por SAFE/ETABS/SAP nativos.
 *
 * El folder Tweakpane "📥 Importar archivo" con los 3 file-pickers se agrega
 * en `workspace/main.ts` cuando `currentExample.id === "csi-importer"`.
 */
import * as THREE from "three";
import type { Node, Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

export const csiImporter: ExampleDef = {
  id: "csi-importer",
  name: "Importar CSI (F2K/E2K/S2K)",
  category: "Importar",
  defaultShellResult: "none",
  availableShellResults: [],
  params: {},
  build(_p, states) {
    const imported = (window as any).__hekatanImportedCim;
    const nodes: Node[] = [];
    const elements: Element[] = [];
    const objects3D: THREE.Object3D[] = [];

    if (!imported || !imported.zapatas?.length) {
      // Escena vacía + texto guía via Object3D
      states.nodes.val = [];
      states.elements.val = [];
      states.nodeInputs.val = { supports: new Map(), loads: new Map() };
      states.elementInputs.val = {
        elasticities: new Map(), shearModuli: new Map(), areas: new Map(),
        momentsOfInertiaZ: new Map(), momentsOfInertiaY: new Map(),
        torsionalConstants: new Map(), densities: new Map(), poissonsRatios: new Map(),
      };
      states.objects3D.val = [];
      console.log("[CSI Importer] Sin archivo cargado. Usa el folder '📥 Importar archivo' del panel.");
      return;
    }

    // Render zapatas como shells horizontales semi-transparentes
    let nIdx = 0;
    const z0 = imported.Z ?? 0;
    for (const z of imported.zapatas) {
      const halfL = z.Lz / 2, halfB = z.Bz / 2;
      // 4 esquinas
      nodes.push([z.xC - halfL, z.yC - halfB, z0]); const n1 = nIdx++;
      nodes.push([z.xC + halfL, z.yC - halfB, z0]); const n2 = nIdx++;
      nodes.push([z.xC + halfL, z.yC + halfB, z0]); const n3 = nIdx++;
      nodes.push([z.xC - halfL, z.yC + halfB, z0]); const n4 = nIdx++;
      // Shell Q4 (4 nodos)
      elements.push([n1, n2, n3, n4]);
      // Pedestal column visual: una mini caja en el centro
      const colMesh = new THREE.Mesh(
        new THREE.BoxGeometry(z.bc, z.bc, 0.5),
        new THREE.MeshLambertMaterial({ color: 0x808080 }),
      );
      colMesh.position.set(z.xCol, z.yCol, z0 + 0.25);
      objects3D.push(colMesh);
    }

    // Render vigas de amarre como cilindros
    if (imported.vigasAmarre) {
      for (const v of imported.vigasAmarre) {
        const z = v.z ?? z0;
        const dx = v.x2 - v.x1, dy = v.y2 - v.y1;
        const len = Math.hypot(dx, dy);
        if (len < 1e-6) continue;
        const geom = new THREE.BoxGeometry(v.b, len, v.h);
        const mesh = new THREE.Mesh(geom, new THREE.MeshLambertMaterial({ color: 0x4a90e2 }));
        mesh.position.set((v.x1 + v.x2) / 2, (v.y1 + v.y2) / 2, z);
        mesh.rotateZ(Math.atan2(dy, dx) - Math.PI / 2);
        objects3D.push(mesh);
      }
    }

    // Setea estados (sin análisis — solo visualización)
    states.nodes.val = nodes;
    states.elements.val = elements;
    states.nodeInputs.val = { supports: new Map(), loads: new Map() };
    states.elementInputs.val = {
      elasticities: new Map(), shearModuli: new Map(), areas: new Map(),
      momentsOfInertiaZ: new Map(), momentsOfInertiaY: new Map(),
      torsionalConstants: new Map(), densities: new Map(), poissonsRatios: new Map(),
    };
    states.objects3D.val = objects3D;
    console.log(`[CSI Importer] Renderizadas ${imported.zapatas.length} zapatas + ${imported.vigasAmarre?.length ?? 0} vigas.`);
  },
};
