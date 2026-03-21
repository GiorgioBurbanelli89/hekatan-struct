import van from "vanjs-core";
import type { CadState, GridSystem } from "./types";

const emptyGrid: GridSystem = {
  x: { label: "X", axes: [] },
  y: { label: "Y", axes: [] },
  stories: [],
};

export function createCadState(): CadState {
  return {
    grid: van.state(emptyGrid),
    nodes: van.state([]),
    frames: van.state([]),
    areas: van.state([]),
    // View
    viewMode: van.state("3d"),
    activeStory: van.state(""),
    activeAxis: van.state(""),
    sectionPosition: van.state(0),
    // Visibility
    showGrid: van.state(true),
    showLabels: van.state(true),
    showNodes: van.state(true),
    showFrames: van.state(true),
    showAreas: van.state(true),
  };
}

// --- Grid mutations ---
let nextNodeId = 0;
let nextFrameId = 0;

export function addGridDirection(
  state: CadState,
  direction: "X" | "Y",
  positions: number[],
  names?: string[]
) {
  const grid = { ...state.grid.val };
  const autoNames =
    direction === "X"
      ? positions.map((_, i) => names?.[i] ?? String(i + 1))
      : positions.map((_, i) => names?.[i] ?? String.fromCharCode(65 + i));

  const axes = positions.map((pos, i) => ({
    name: autoNames[i],
    position: pos,
  }));

  if (direction === "X") {
    grid.x = { label: "X", axes };
  } else {
    grid.y = { label: "Y", axes };
  }
  state.grid.val = grid;
}

export function addStory(state: CadState, name: string, elevation: number) {
  const grid = { ...state.grid.val };
  grid.stories = [...grid.stories, { name, elevation }].sort(
    (a, b) => a.elevation - b.elevation
  );
  state.grid.val = grid;
}

export function getGridIntersections(
  grid: GridSystem,
  storyName?: string
): [number, number, number][] {
  const points: [number, number, number][] = [];
  const stories = storyName
    ? grid.stories.filter((s) => s.name === storyName)
    : grid.stories;

  for (const story of stories) {
    for (const xAxis of grid.x.axes) {
      for (const yAxis of grid.y.axes) {
        points.push([xAxis.position, yAxis.position, story.elevation]);
      }
    }
  }
  return points;
}

// --- Node mutations ---
export function addNode(
  state: CadState,
  x: number,
  y: number,
  z: number
): number {
  const id = nextNodeId++;
  state.nodes.val = [...state.nodes.val, { id, position: [x, y, z] }];
  return id;
}

export function addNodeAtGrid(
  state: CadState,
  xAxisName: string,
  yAxisName: string,
  storyName: string
): number {
  const grid = state.grid.val;
  const xAxis = grid.x.axes.find((a) => a.name === xAxisName);
  const yAxis = grid.y.axes.find((a) => a.name === yAxisName);
  const story = grid.stories.find((s) => s.name === storyName);

  if (!xAxis || !yAxis || !story) {
    console.error(
      `Grid ref not found: X=${xAxisName}, Y=${yAxisName}, Story=${storyName}`
    );
    return -1;
  }
  return addNode(state, xAxis.position, yAxis.position, story.elevation);
}

export function addNodesAtGrid(state: CadState, storyName: string): number[] {
  const intersections = getGridIntersections(state.grid.val, storyName);
  return intersections.map(([x, y, z]) => addNode(state, x, y, z));
}

export function removeNode(state: CadState, id: number) {
  state.nodes.val = state.nodes.val.filter((n) => n.id !== id);
  // Also remove frames connected to this node
  state.frames.val = state.frames.val.filter(
    (f) => f.nodeI !== id && f.nodeJ !== id
  );
}

// --- Frame mutations ---
export function addFrame(
  state: CadState,
  nodeI: number,
  nodeJ: number
): number {
  const id = nextFrameId++;
  state.frames.val = [...state.frames.val, { id, nodeI, nodeJ }];
  return id;
}

export function removeFrame(state: CadState, id: number) {
  state.frames.val = state.frames.val.filter((f) => f.id !== id);
}

export function addColumnsAtLevel(
  state: CadState,
  storyName: string
): number[] {
  const grid = state.grid.val;
  const storyIdx = grid.stories.findIndex((s) => s.name === storyName);
  if (storyIdx <= 0) {
    console.error(
      `Cannot add columns: story "${storyName}" not found or is the base level`
    );
    return [];
  }
  const lowerStory = grid.stories[storyIdx - 1];
  const upperStory = grid.stories[storyIdx];
  const frameIds: number[] = [];

  for (const xAxis of grid.x.axes) {
    for (const yAxis of grid.y.axes) {
      // Find or create nodes at lower and upper intersections
      const lowerNode = findOrCreateNode(
        state,
        xAxis.position,
        yAxis.position,
        lowerStory.elevation
      );
      const upperNode = findOrCreateNode(
        state,
        xAxis.position,
        yAxis.position,
        upperStory.elevation
      );
      frameIds.push(addFrame(state, lowerNode, upperNode));
    }
  }
  return frameIds;
}

function findOrCreateNode(
  state: CadState,
  x: number,
  y: number,
  z: number
): number {
  const tol = 1e-6;
  const existing = state.nodes.val.find(
    (n) =>
      Math.abs(n.position[0] - x) < tol &&
      Math.abs(n.position[1] - y) < tol &&
      Math.abs(n.position[2] - z) < tol
  );
  if (existing) return existing.id;
  return addNode(state, x, y, z);
}

export function clearAll(state: CadState) {
  state.grid.val = {
    x: { label: "X", axes: [] },
    y: { label: "Y", axes: [] },
    stories: [],
  };
  state.nodes.val = [];
  state.frames.val = [];
  state.areas.val = [];
  nextNodeId = 0;
  nextFrameId = 0;
}
