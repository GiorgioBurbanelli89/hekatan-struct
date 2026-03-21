import type { GridSystem } from "./types";

/**
 * Get bounding box of the grid system
 */
export function getGridBounds(grid: GridSystem) {
  const xPositions = grid.x.axes.map((a) => a.position);
  const yPositions = grid.y.axes.map((a) => a.position);
  const zPositions = grid.stories.map((s) => s.elevation);

  if (!xPositions.length || !yPositions.length || !zPositions.length) {
    return {
      minX: 0, maxX: 10,
      minY: 0, maxY: 10,
      minZ: 0, maxZ: 5,
      centerX: 5, centerY: 5, centerZ: 2.5,
      sizeX: 10, sizeY: 10, sizeZ: 5,
      maxDim: 10,
    };
  }

  const minX = Math.min(...xPositions);
  const maxX = Math.max(...xPositions);
  const minY = Math.min(...yPositions);
  const maxY = Math.max(...yPositions);
  const minZ = Math.min(...zPositions);
  const maxZ = Math.max(...zPositions);

  const sizeX = maxX - minX || 1;
  const sizeY = maxY - minY || 1;
  const sizeZ = maxZ - minZ || 1;

  return {
    minX, maxX,
    minY, maxY,
    minZ, maxZ,
    centerX: (minX + maxX) / 2,
    centerY: (minY + maxY) / 2,
    centerZ: (minZ + maxZ) / 2,
    sizeX, sizeY, sizeZ,
    maxDim: Math.max(sizeX, sizeY, sizeZ),
  };
}

/**
 * Get story names for dropdown options
 */
export function getStoryOptions(grid: GridSystem): Record<string, string> {
  const opts: Record<string, string> = {};
  for (const s of grid.stories) {
    opts[s.name] = s.name;
  }
  return opts;
}

/**
 * Get axis names for a direction (for dropdown options)
 */
export function getAxisOptions(
  grid: GridSystem,
  direction: "X" | "Y"
): Record<string, string> {
  const opts: Record<string, string> = {};
  const axes = direction === "X" ? grid.x.axes : grid.y.axes;
  for (const a of axes) {
    opts[a.name] = a.name;
  }
  return opts;
}
