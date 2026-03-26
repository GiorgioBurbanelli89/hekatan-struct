/**
 * Draw3DIfc.ts - Carga archivos IFC y genera geometria Three.js
 * Usa web-ifc IIFE build (global WebIFC) para parsear IFC y extraer meshes.
 * El IIFE se carga via <script> tag en index.html.
 */
import * as THREE from "three";

/* ── Categorias IFC granulares (numeros estandar IFC2x3/IFC4) ── */
const TYPE_MAP: Array<[number, IfcDetailCategory]> = [
  [843113511,  "column"],    // IFCCOLUMN
  [753842376,  "beam"],      // IFCBEAM
  [1529196076, "slab"],      // IFCSLAB
  [900683007,  "footing"],   // IFCFOOTING
  [1687234759, "footing"],   // IFCPILE
  [979691226,  "rebar"],     // IFCREINFORCINGBAR
  [2320036040, "rebar"],     // IFCREINFORCINGMESH
  [3171933400, "plate"],     // IFCPLATE
  [1073191201, "member"],    // IFCMEMBER
  [377706215,  "fastener"],  // IFCMECHANICALFASTENER
  [2391406946, "wall"],      // IFCWALL
  [3512223829, "wall"],      // IFCWALLSTANDARDCASE
  [3304561284, "opening"],   // IFCWINDOW
  [395920057,  "opening"],   // IFCDOOR
];

/** Categorias detalladas para filtrado fino */
export type IfcDetailCategory =
  | "column" | "beam" | "slab" | "footing" | "rebar"
  | "plate" | "member" | "fastener"
  | "wall" | "opening" | "other";

/** Categorias simplificadas (compatibilidad) */
export type IfcCategory = "structural" | "wall" | "opening" | "other";

const ALL_DETAIL_CATS: IfcDetailCategory[] = [
  "column", "beam", "slab", "footing", "rebar",
  "plate", "member", "fastener",
  "wall", "opening", "other",
];

/** Mapeo de tipo IFC → categoria detallada */
const typeToDetail = new Map<number, IfcDetailCategory>();
for (const [id, cat] of TYPE_MAP) typeToDetail.set(id, cat);

function classifyType(typeId: number): IfcDetailCategory {
  return typeToDetail.get(typeId) ?? "other";
}

/** Preset de filtro: visibilidad + opacidad por categoria */
export interface FilterPreset {
  visible: Set<IfcDetailCategory>;
  /** Opacidad override por categoria (0..1). Si no aparece, se usa 1.0 */
  opacity?: Partial<Record<IfcDetailCategory, number>>;
}

export const IFC_FILTER_PRESETS: Record<string, FilterPreset> = {
  all:         { visible: new Set(ALL_DETAIL_CATS) },
  structural:  { visible: new Set(["column", "beam", "slab", "footing", "rebar", "plate", "member", "fastener"]) },
  columns:     { visible: new Set(["column"]) },
  beams:       { visible: new Set(["beam"]) },
  slabs:       { visible: new Set(["slab"]) },
  rebar:       { visible: new Set(["rebar"]) },
  plates:      { visible: new Set(["plate"]) },
  members:     { visible: new Set(["member"]) },
  fasteners:   { visible: new Set(["fastener"]) },
  connections: {
    visible: new Set(["column", "plate", "rebar", "member", "fastener"]),
    opacity: { column: 0.25 },  // columnas transparentes para ver interior
  },
  walls:       { visible: new Set(["wall"]) },
  openings:    { visible: new Set(["opening"]) },
};

/** Info de un elemento IFC para picking */
export interface IfcElementInfo {
  expressID: number;
  category: IfcDetailCategory;
  name: string;
  typeName: string;
}

/** Resultado extendido con categorias detalladas */
export interface IfcLoadResult {
  meshCount: number;
  bbox: THREE.Box3;
  detailCategories: Map<IfcDetailCategory, THREE.Group>;
  /** Map expressID → info del elemento */
  elementInfo: Map<number, IfcElementInfo>;
}

/** Carga un archivo IFC (ArrayBuffer) y retorna meshes agrupados por categoria detallada */
export async function loadIfcToScene(
  scene: THREE.Scene,
  data: ArrayBuffer,
): Promise<IfcLoadResult> {
  const WIF = (window as any).WebIFC;
  if (!WIF) {
    throw new Error("web-ifc no disponible. Verifica que web-ifc-api-iife.js se cargó.");
  }

  const api = new WIF.IfcAPI();
  const base = window.location.pathname.replace(/\/[^/]*$/, '/');
  api.SetWasmPath(base);
  await api.Init();
  const modelID = api.OpenModel(new Uint8Array(data));

  // Pre-clasificar expressIDs por tipo IFC detallado y extraer nombres
  const idToCategory = new Map<number, IfcDetailCategory>();
  const elementInfo = new Map<number, IfcElementInfo>();

  // Nombres de tipo IFC legibles
  const typeNames: Record<number, string> = {
    843113511: "Columna", 753842376: "Viga", 1529196076: "Losa",
    900683007: "Zapata", 1687234759: "Pilote", 979691226: "Barra Refuerzo",
    2320036040: "Malla Refuerzo", 3171933400: "Placa", 1073191201: "Miembro",
    377706215: "Perno/Anclaje", 2391406946: "Muro", 3512223829: "Muro",
    3304561284: "Ventana", 395920057: "Puerta",
  };

  for (const [typeId] of TYPE_MAP) {
    const cat = classifyType(typeId);
    try {
      const ids = api.GetLineIDsWithType(modelID, typeId);
      for (let i = 0; i < ids.size(); i++) {
        const eid = ids.get(i);
        idToCategory.set(eid, cat);
        // Extraer nombre del elemento
        let name = "";
        try {
          const props = api.GetLine(modelID, eid);
          name = props?.Name?.value || props?.Description?.value || "";
        } catch { /* sin propiedades */ }
        elementInfo.set(eid, {
          expressID: eid,
          category: cat,
          name,
          typeName: typeNames[typeId] || "Otro",
        });
      }
    } catch { /* tipo no presente en modelo */ }
  }

  // Grupos por categoria detallada
  const groups = new Map<IfcDetailCategory, THREE.Group>();
  for (const cat of ALL_DETAIL_CATS) {
    const g = new THREE.Group();
    g.name = `ifc-${cat}`;
    scene.add(g);
    groups.set(cat, g);
  }

  const bbox = new THREE.Box3();
  let meshCount = 0;

  const defaultMat = new THREE.MeshStandardMaterial({
    color: 0xcccccc, transparent: true, opacity: 0.9, side: THREE.DoubleSide,
  });

  api.StreamAllMeshes(modelID, (mesh: any) => {
    const cat = idToCategory.get(mesh.expressID) ?? "other";
    const group = groups.get(cat)!;
    const placedGeom = mesh.geometries;

    for (let i = 0; i < placedGeom.size(); i++) {
      const pg = placedGeom.get(i);
      const geomData = api.GetGeometry(modelID, pg.geometryExpressID);

      const vData = api.GetVertexArray(geomData.GetVertexData(), geomData.GetVertexDataSize());
      const iData = api.GetIndexArray(geomData.GetIndexData(), geomData.GetIndexDataSize());

      const geo = new THREE.BufferGeometry();
      const positions = new Float32Array(vData.length / 2);
      const normals = new Float32Array(vData.length / 2);
      for (let j = 0; j < vData.length; j += 6) {
        const k = j / 2;
        positions[k] = vData[j];
        positions[k + 1] = vData[j + 1];
        positions[k + 2] = vData[j + 2];
        normals[k] = vData[j + 3];
        normals[k + 1] = vData[j + 4];
        normals[k + 2] = vData[j + 5];
      }
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geo.setAttribute("normal", new THREE.BufferAttribute(normals, 3));
      geo.setIndex(new THREE.BufferAttribute(new Uint32Array(iData), 1));

      const mat4 = new THREE.Matrix4();
      mat4.fromArray(pg.flatTransformation);

      let mat: THREE.MeshStandardMaterial;
      const c = pg.color;
      if (c && (c.x !== 1 || c.y !== 1 || c.z !== 1)) {
        mat = new THREE.MeshStandardMaterial({
          color: new THREE.Color(c.x, c.y, c.z),
          transparent: c.w < 1, opacity: c.w, side: THREE.DoubleSide,
        });
      } else {
        mat = defaultMat;
      }

      // Guardar opacidad original para restaurar despues de filtros
      (mat as any)._origOpacity = mat.opacity;

      const mesh3 = new THREE.Mesh(geo, mat);
      mesh3.applyMatrix4(mat4);
      // Guardar expressID para picking
      mesh3.userData.expressID = mesh.expressID;
      mesh3.userData.category = cat;
      group.add(mesh3);
      bbox.expandByObject(mesh3);
      meshCount++;

      geomData.delete();
    }
  });

  api.CloseModel(modelID);

  return { meshCount, bbox, detailCategories: groups, elementInfo };
}

/** Filtra visibilidad y opacidad usando preset */
export function filterIfcByPreset(
  detailCategories: Map<IfcDetailCategory, THREE.Group>,
  presetName: string,
) {
  const preset = IFC_FILTER_PRESETS[presetName] || IFC_FILTER_PRESETS.all;
  for (const [cat, group] of detailCategories) {
    group.visible = preset.visible.has(cat);
    // Aplicar opacidad si el preset lo define
    const opVal = preset.opacity?.[cat];
    for (const child of group.children) {
      const mesh = child as THREE.Mesh;
      const mat = mesh.material as THREE.MeshStandardMaterial;
      if (!mat) continue;
      if (opVal !== undefined && opVal < 1) {
        mat.transparent = true;
        mat.opacity = opVal;
        mat.depthWrite = false; // mejor render de transparencia
      } else {
        // Restaurar opacidad original (guardada o 1.0)
        const orig = (mat as any)._origOpacity;
        if (orig !== undefined) {
          mat.opacity = orig;
          mat.transparent = orig < 1;
          mat.depthWrite = true;
        } else {
          mat.opacity = 1;
          mat.transparent = false;
          mat.depthWrite = true;
        }
      }
      mat.needsUpdate = true;
    }
  }
}

/** Obtiene conteos por categoria detallada */
export function getDetailCounts(
  detailCategories: Map<IfcDetailCategory, THREE.Group>,
): Record<IfcDetailCategory, number> {
  const counts = {} as Record<IfcDetailCategory, number>;
  for (const [cat, group] of detailCategories) {
    counts[cat] = group.children.length;
  }
  return counts;
}

/** Auto-centra camara en el bounding box del modelo */
export function fitCameraToBBox(
  camera: THREE.PerspectiveCamera,
  controls: any,
  bbox: THREE.Box3,
) {
  const center = new THREE.Vector3();
  const size = new THREE.Vector3();
  bbox.getCenter(center);
  bbox.getSize(size);

  const maxDim = Math.max(size.x, size.y, size.z);
  const dist = maxDim * 1.5;

  camera.position.set(center.x + dist * 0.6, center.y + dist * 0.5, center.z + dist * 0.6);
  camera.lookAt(center);
  controls.target.copy(center);
  controls.update();
}

/** Resultado de picking */
export interface IfcPickResult {
  expressID: number;
  category: IfcDetailCategory;
  info: IfcElementInfo | undefined;
  mesh: THREE.Mesh;
}

/**
 * Configura picking por click en el visor IFC.
 * Al hacer click, resalta el mesh seleccionado y llama onPick con la info.
 */
export function setupIfcPicking(
  container: HTMLElement,
  camera: THREE.PerspectiveCamera,
  scene: THREE.Scene,
  elementInfo: Map<number, IfcElementInfo>,
  onPick: (result: IfcPickResult | null) => void,
) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  let selectedMesh: THREE.Mesh | null = null;
  let selectedOrigMat: THREE.Material | null = null;

  const highlightMat = new THREE.MeshStandardMaterial({
    color: 0xff6600, emissive: 0xff3300, emissiveIntensity: 0.4,
    transparent: true, opacity: 0.85, side: THREE.DoubleSide,
  });

  container.addEventListener("click", (e) => {
    const rect = container.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    // Recoger todos los meshes visibles de la escena
    const meshes: THREE.Mesh[] = [];
    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh && obj.visible) {
        // Solo incluir si el padre (group) es visible
        if (obj.parent && obj.parent.visible) meshes.push(obj as THREE.Mesh);
      }
    });

    const hits = raycaster.intersectObjects(meshes, false);

    // Restaurar mesh anterior
    if (selectedMesh && selectedOrigMat) {
      selectedMesh.material = selectedOrigMat;
      selectedMesh = null;
      selectedOrigMat = null;
    }

    if (hits.length > 0) {
      const hit = hits[0].object as THREE.Mesh;
      const eid = hit.userData.expressID as number | undefined;
      const cat = (hit.userData.category as IfcDetailCategory) || "other";

      // Resaltar
      selectedOrigMat = hit.material as THREE.Material;
      selectedMesh = hit;
      hit.material = highlightMat;

      const info = eid ? elementInfo.get(eid) : undefined;
      onPick({
        expressID: eid || 0,
        category: cat,
        info,
        mesh: hit,
      });
    } else {
      onPick(null);
    }
  });
}
