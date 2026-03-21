import { State } from "vanjs-core";

// --- Grid System (ETABS-style) ---
export interface GridAxis {
  name: string;
  position: number;
}

export interface GridDirection {
  label: "X" | "Y";
  axes: GridAxis[];
}

export interface StoryLevel {
  name: string;
  elevation: number;
}

export interface GridSystem {
  x: GridDirection;
  y: GridDirection;
  stories: StoryLevel[];
}

// --- Structural Model ---
export interface CadNode {
  id: number;
  position: [number, number, number];
}

export interface FrameElement {
  id: number;
  nodeI: number;
  nodeJ: number;
}

export interface AreaElement {
  id: number;
  nodes: number[]; // 3 o 4 indices
}

// --- View modes ---
export type ViewMode = "3d" | "plan" | "elevationX" | "elevationY" | "section";

// --- Editor State ---
export interface CadState {
  grid: State<GridSystem>;
  nodes: State<CadNode[]>;
  frames: State<FrameElement[]>;
  areas: State<AreaElement[]>;
  // View
  viewMode: State<ViewMode>;
  activeStory: State<string>;
  activeAxis: State<string>;
  sectionPosition: State<number>;
  // Visibility toggles
  showGrid: State<boolean>;
  showLabels: State<boolean>;
  showNodes: State<boolean>;
  showFrames: State<boolean>;
  showAreas: State<boolean>;
}

// --- Viewer context (for passing around) ---
export interface ViewerContext {
  scene: THREE.Scene;
  perspCamera: THREE.PerspectiveCamera;
  orthoCamera: THREE.OrthographicCamera;
  controls: any; // OrbitControls
  renderer: THREE.WebGLRenderer;
  render: () => void;
}
