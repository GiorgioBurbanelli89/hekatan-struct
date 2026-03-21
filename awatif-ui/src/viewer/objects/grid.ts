import * as THREE from "three";
import { getTheme } from "../../theme";

export function grid(gridSize: number): THREE.GridHelper {
  const t = getTheme();
  const grid = new THREE.GridHelper(gridSize, 20, t.grid, t.grid);

  grid.position.set(0.5 * gridSize, 0.5 * gridSize, 0);
  grid.rotateX(Math.PI / 2);

  return grid;
}
