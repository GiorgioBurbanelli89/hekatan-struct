import * as THREE from "three";
import van from "vanjs-core";
import { Text } from "hekatan-ui/src/viewer/objects/Text";
import type { CadState, ViewerContext } from "./types";
import { getGridBounds } from "./gridSystem";

/**
 * Creates and manages the 3D grid lines + axis labels.
 * Reactively updates when grid state changes.
 */
export function setupGridRenderer(state: CadState, ctx: ViewerContext) {
  const gridGroup = new THREE.Group();
  gridGroup.name = "cad-grid";
  const labelsGroup = new THREE.Group();
  labelsGroup.name = "cad-labels";

  ctx.scene.add(gridGroup);
  ctx.scene.add(labelsGroup);

  // React to grid changes
  van.derive(() => {
    const grid = state.grid.val;
    const showGrid = state.showGrid.val;
    const showLabels = state.showLabels.val;

    // Clear previous
    disposeGroup(gridGroup);
    disposeGroup(labelsGroup);

    gridGroup.visible = showGrid;
    labelsGroup.visible = showLabels;

    if (!showGrid && !showLabels) {
      ctx.render();
      return;
    }

    const bounds = getGridBounds(grid);
    const extend = 1.5; // Extend gridlines beyond grid for visual context
    const labelOffset = 1.0; // Distance of label from grid edge

    // --- Draw gridlines for each story level ---
    for (const story of grid.stories) {
      const z = story.elevation;

      // X-direction gridlines (run along Y at each X position)
      for (const xAxis of grid.x.axes) {
        const x = xAxis.position;
        const lineGeo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(x, bounds.minY - extend, z),
          new THREE.Vector3(x, bounds.maxY + extend, z),
        ]);
        const lineMat = new THREE.LineBasicMaterial({
          color: 0x444444,
          transparent: true,
          opacity: 0.6,
        });
        gridGroup.add(new THREE.Line(lineGeo, lineMat));
      }

      // Y-direction gridlines (run along X at each Y position)
      for (const yAxis of grid.y.axes) {
        const y = yAxis.position;
        const lineGeo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(bounds.minX - extend, y, z),
          new THREE.Vector3(bounds.maxX + extend, y, z),
        ]);
        const lineMat = new THREE.LineBasicMaterial({
          color: 0x444444,
          transparent: true,
          opacity: 0.6,
        });
        gridGroup.add(new THREE.Line(lineGeo, lineMat));
      }
    }

    // --- Vertical gridlines (columns between stories) ---
    if (grid.stories.length > 1) {
      const zMin = Math.min(...grid.stories.map((s) => s.elevation));
      const zMax = Math.max(...grid.stories.map((s) => s.elevation));

      for (const xAxis of grid.x.axes) {
        for (const yAxis of grid.y.axes) {
          const lineGeo = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(xAxis.position, yAxis.position, zMin),
            new THREE.Vector3(xAxis.position, yAxis.position, zMax),
          ]);
          const lineMat = new THREE.LineBasicMaterial({
            color: 0x333333,
            transparent: true,
            opacity: 0.3,
          });
          gridGroup.add(new THREE.Line(lineGeo, lineMat));
        }
      }
    }

    // --- Labels for X axes (numbers: 1, 2, 3...) ---
    for (const xAxis of grid.x.axes) {
      const label = new Text(xAxis.name, "#ff6644", "transparent");
      label.position.set(
        xAxis.position,
        bounds.minY - extend - labelOffset,
        grid.stories[0]?.elevation ?? 0
      );
      label.updateScale(0.8);
      labelsGroup.add(label);
    }

    // --- Labels for Y axes (letters: A, B, C...) ---
    for (const yAxis of grid.y.axes) {
      const label = new Text(yAxis.name, "#4488ff", "transparent");
      label.position.set(
        bounds.minX - extend - labelOffset,
        yAxis.position,
        grid.stories[0]?.elevation ?? 0
      );
      label.updateScale(0.8);
      labelsGroup.add(label);
    }

    // --- Labels for stories ---
    for (const story of grid.stories) {
      const label = new Text(story.name, "#44ff88", "transparent");
      label.position.set(
        bounds.minX - extend - labelOffset,
        bounds.minY - extend - labelOffset,
        story.elevation
      );
      label.updateScale(0.6);
      labelsGroup.add(label);
    }

    ctx.render();
  });

  // React to node/frame rendering
  van.derive(() => {
    const nodes = state.nodes.val;
    const frames = state.frames.val;
    const showNodes = state.showNodes.val;
    const showFrames = state.showFrames.val;

    // Remove previous model objects
    const oldNodes = ctx.scene.getObjectByName("cad-nodes");
    const oldFrames = ctx.scene.getObjectByName("cad-frames");
    if (oldNodes) {
      ctx.scene.remove(oldNodes);
      disposeObj(oldNodes);
    }
    if (oldFrames) {
      ctx.scene.remove(oldFrames);
      disposeObj(oldFrames);
    }

    // --- Render nodes as small spheres ---
    if (showNodes && nodes.length > 0) {
      const nodesGroup = new THREE.Group();
      nodesGroup.name = "cad-nodes";
      const sphereGeo = new THREE.SphereGeometry(0.15, 8, 8);
      const sphereMat = new THREE.MeshBasicMaterial({ color: 0xff8800 });

      for (const node of nodes) {
        const mesh = new THREE.Mesh(sphereGeo, sphereMat);
        mesh.position.set(...node.position);
        nodesGroup.add(mesh);
      }
      ctx.scene.add(nodesGroup);
    }

    // --- Render frames as lines ---
    if (showFrames && frames.length > 0) {
      const framesGroup = new THREE.Group();
      framesGroup.name = "cad-frames";

      const positions: number[] = [];
      for (const frame of frames) {
        const nI = nodes.find((n) => n.id === frame.nodeI);
        const nJ = nodes.find((n) => n.id === frame.nodeJ);
        if (nI && nJ) {
          positions.push(...nI.position, ...nJ.position);
        }
      }

      if (positions.length > 0) {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(positions, 3)
        );
        const mat = new THREE.LineBasicMaterial({
          color: 0x00ccff,
          linewidth: 2,
        });
        framesGroup.add(new THREE.LineSegments(geo, mat));
      }
      ctx.scene.add(framesGroup);
    }

    ctx.render();
  });
}

function disposeGroup(group: THREE.Group) {
  while (group.children.length > 0) {
    const child = group.children[0];
    group.remove(child);
    disposeObj(child);
  }
}

function disposeObj(obj: THREE.Object3D) {
  if ((obj as any).geometry) (obj as any).geometry.dispose();
  if ((obj as any).material) {
    const mat = (obj as any).material;
    if (mat.map) mat.map.dispose();
    mat.dispose();
  }
  if ((obj as any).dispose) (obj as any).dispose();
  obj.children?.forEach(disposeObj);
}
