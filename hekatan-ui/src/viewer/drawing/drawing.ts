import * as THREE from "three";
import van, { State } from "vanjs-core";

// Todo: refactor isInPlane to a function

export type Drawing = {
  points?: State<[number, number, number][]>;
  polylines?: State<number[][]>;
  gridTarget?: State<{
    position: [number, number, number];
    rotation: [number, number, number];
  }>;
};

export function drawing({
  drawingObj,
  gridObj,
  scene,
  camera,
  controls,
  gridSize,
  derivedDisplayScale,
  rendererElm,
  viewerRender,
}: {
  drawingObj: Drawing;
  gridObj: THREE.GridHelper;
  scene: THREE.Scene;
  camera: THREE.Camera;
  controls: THREE.Controls<any>;
  gridSize: number;
  derivedDisplayScale: State<number>;
  rendererElm: HTMLCanvasElement;
  viewerRender: () => void;
}) {
  // Init
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(gridSize, gridSize),
    new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,        // invisible visualmente
      depthWrite: false, // no escribe al z-buffer
    })
  );
  plane.visible = true;       // pero "visible" en el grafo (intersectObject lo respeta)
  plane.frustumCulled = false; // siempre evaluable por raycaster
  // CRITICAL: el plano DEBE estar en la escena para que raycaster.intersectObject
  // resuelva correctamente su matrixWorld. Sin esto, los clicks sintéticos
  // (y a veces los reales tras transforms) fallaban silenciosamente al no
  // intersectar nada → drawingPoints jamás se actualizaba.
  scene.add(plane);
  const points = new THREE.Points(
    new THREE.BufferGeometry(),
    new THREE.PointsMaterial()
  );

  const indicationPoint = new THREE.Points(
    new THREE.BufferGeometry(),
    new THREE.PointsMaterial({ color: "gray" })
  );

  const activePoints = new THREE.Points(
    new THREE.BufferGeometry(),
    new THREE.PointsMaterial({ color: "orange", size: 0.8 })
  );
  scene.add(activePoints);

  // ── DIMENSION LABEL EN RUBBER BAND (sólo mientras se dibuja) ──
  // Sprite UNA SOLA vez con la longitud de la línea pendiente (último
  // punto → cursor). NO se persisten labels en segmentos ya confirmados.
  // El usuario los ve mientras prolonga, una vez click fijado se quita
  // (la coord readout sigue mostrando coords del cursor).
  const rubberLabel = (() => {
    const cv = document.createElement("canvas");
    cv.width = 96; cv.height = 32;
    const tex = new THREE.CanvasTexture(cv);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    const sp = new THREE.Sprite(mat);
    sp.scale.set(1.0, 0.33, 1);
    sp.renderOrder = 999;
    sp.visible = false;
    sp.frustumCulled = false;
    scene.add(sp);
    return { sprite: sp, canvas: cv, texture: tex };
  })();
  const updateRubberLabel = (ax: number, ay: number, az: number, bx: number, by: number, bz: number) => {
    const dL = Math.hypot(bx-ax, by-ay, bz-az);
    if (dL < 0.01) { rubberLabel.sprite.visible = false; return; }
    const cc = rubberLabel.canvas.getContext("2d")!;
    cc.clearRect(0, 0, 96, 32);
    cc.fillStyle = "rgba(15,23,42,0.92)";
    cc.fillRect(0, 0, 96, 32);
    cc.strokeStyle = "#22d3ee"; cc.lineWidth = 2;
    cc.strokeRect(1, 1, 94, 30);
    cc.fillStyle = "#22d3ee";
    cc.font = "bold 16px Consolas, monospace";
    cc.textAlign = "center";
    cc.fillText(`${dL.toFixed(2)} m`, 48, 22);
    rubberLabel.texture.needsUpdate = true;
    rubberLabel.sprite.position.set((ax+bx)/2, (ay+by)/2, (az+bz)/2);
    rubberLabel.sprite.visible = true;
  };
  const hideRubberLabel = () => { rubberLabel.sprite.visible = false; };

  // ── COORD READOUT — texto flotante con coord del cursor (X, Y, Z) ──
  const coordReadout = document.createElement("div");
  coordReadout.id = "hk-coord-readout";
  coordReadout.style.cssText = [
    "position:fixed", "pointer-events:none", "z-index:99997",
    "padding:4px 8px", "background:rgba(15,23,42,0.92)",
    "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px",
    "font-family:Consolas,monospace", "font-size:11px",
    "transform:translate(12px,-22px)", "white-space:nowrap",
    "display:none",
  ].join(";") + ";";
  coordReadout.textContent = "X=0.00  Y=0.00  Z=0.00";
  document.body.appendChild(coordReadout);

  // ── RUBBER BAND — línea de preview/prolongación cursor → último punto ──
  // Mientras el usuario mueve el mouse con tool "line"/"polyline" activa,
  // se ve una línea cyan dashed desde el último punto dibujado hasta la
  // posición actual del cursor. Visible en cualquier vista (planta/iso/elev).
  const rubberBand = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0),
    ]),
    new THREE.LineDashedMaterial({
      color: 0x22d3ee, dashSize: 0.2, gapSize: 0.1,
      transparent: true, opacity: 0.85, linewidth: 2,
    })
  );
  rubberBand.frustumCulled = false;
  rubberBand.visible = false;
  scene.add(rubberBand);

  // ── EJES DE PROLONGACIÓN (Ortho/Polar tracking) ──
  // Líneas dashed desde el último punto en direcciones X/Y/Z + diagonales
  // 45°. Aparecen cuando el cursor está cerca de uno de esos ángulos.
  const polarLines = new THREE.Group();
  polarLines.frustumCulled = false;
  polarLines.visible = false;
  scene.add(polarLines);
  const mkPolarLine = (col: number) => {
    const geo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0),
    ]);
    const mat = new THREE.LineDashedMaterial({
      color: col, dashSize: 0.15, gapSize: 0.08,
      transparent: true, opacity: 0.5, linewidth: 1,
    });
    return new THREE.Line(geo, mat);
  };
  const polarX = mkPolarLine(0xff0000);  // rojo X
  const polarY = mkPolarLine(0x00ff00);  // verde Y
  const polarZ = mkPolarLine(0x0088ff);  // azul Z
  polarLines.add(polarX, polarY, polarZ);

  // Update
  points.geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(drawingObj.points.rawVal.flat(), 3)
  );
  points.geometry.computeBoundingSphere();
  points.frustumCulled = false;

  indicationPoint.frustumCulled = false;
  scene.add(indicationPoint);

  // Match initial grid position and rotation
  plane.position.set(0.5 * gridSize, 0.5 * gridSize, 0);
  plane.rotateX(Math.PI / 2);
  plane.geometry.rotateX(Math.PI / 2);
  plane.updateMatrixWorld(); // to fix intersect object

  // To start with an empty polyline and keep the provided ones
  if (drawingObj.polylines)
    drawingObj.polylines.val = [...drawingObj.polylines.rawVal, []];

  // ── API pública para dibujar programáticamente ──
  // Util para tests/scripts/demos: agrega un punto en coords mundiales
  // (saltando el raycaster). Equivalente a un click real en la posición
  // (x, y, z) sobre el plano.
  (window as any).__hekatanDrawAt = (x: number, y: number, z: number) => {
    drawingObj.points.val = [...drawingObj.points.rawVal, [x, y, z]];
    if (drawingObj.polylines) {
      const polys = drawingObj.polylines.rawVal;
      const last = polys.length ? polys[polys.length - 1] : [];
      drawingObj.polylines.val = [
        ...polys.slice(0, -1),
        [...last, drawingObj.points.rawVal.length - 1],
      ];
    }
  };
  // Empezar nueva polilínea (equivalente a right-click)
  (window as any).__hekatanDrawNewPoly = () => {
    if (!drawingObj.polylines) return;
    const polys = drawingObj.polylines.rawVal;
    if (polys[polys.length - 1]?.length === 0) return;
    drawingObj.polylines.val = [...polys, []];
  };
  // ── Discretización de elementos no-lineales ──
  // Círculo en plano XY (centro cx,cy,cz; radio r). Se discretiza en N
  // segmentos rectos formando un polígono regular cerrado.
  (window as any).__hekatanDrawCircle = (
    cx: number, cy: number, cz: number, r: number,
    segs: number = (window as any).__hekatanArcSegs ?? 12,
    plane: "xy" | "xz" | "yz" = "xy",
  ) => {
    const N = Math.max(4, Math.round(segs));
    const baseIdx = drawingObj.points.rawVal.length;
    const newPts: [number, number, number][] = [];
    for (let i = 0; i < N; i++) {
      const ang = (2 * Math.PI * i) / N;
      const dx = r * Math.cos(ang), dy = r * Math.sin(ang);
      let p: [number, number, number];
      if (plane === "xy")      p = [cx + dx, cy + dy, cz];
      else if (plane === "xz") p = [cx + dx, cy, cz + dy];
      else                     p = [cx, cy + dx, cz + dy];
      newPts.push(p);
    }
    drawingObj.points.val = [...drawingObj.points.rawVal, ...newPts];
    if (drawingObj.polylines) {
      // Polilínea cerrada (vuelve al primer punto)
      const closed = [...newPts.map((_, i) => baseIdx + i), baseIdx];
      const polys = drawingObj.polylines.rawVal;
      // Cerrar polilínea actual si tiene puntos, abrir nueva con el círculo
      if (polys[polys.length - 1]?.length > 0) {
        drawingObj.polylines.val = [...polys, closed, []];
      } else {
        drawingObj.polylines.val = [...polys.slice(0, -1), closed, []];
      }
    }
  };
  // Arco por 3 puntos (start - mid - end). Discretiza en N segmentos.
  (window as any).__hekatanDrawArc = (
    p1: [number, number, number],
    p2: [number, number, number],
    p3: [number, number, number],
    segs: number = (window as any).__hekatanArcSegs ?? 12,
  ) => {
    const N = Math.max(4, Math.round(segs));
    // Calcular el centro y radio del arco que pasa por 3 puntos
    // Asumimos que los 3 puntos están aproximadamente en un mismo plano.
    // Para simplicidad: arco circular en el plano definido por p1-p2-p3.
    const v1 = new THREE.Vector3(...p1);
    const v2 = new THREE.Vector3(...p2);
    const v3 = new THREE.Vector3(...p3);
    // Normal del plano que contiene los 3 puntos
    const a = new THREE.Vector3().subVectors(v2, v1);
    const b = new THREE.Vector3().subVectors(v3, v1);
    const normal = new THREE.Vector3().crossVectors(a, b).normalize();
    // Centro del círculo: intersección de mediatrices de p1p2 y p2p3 en el plano
    const m12 = new THREE.Vector3().addVectors(v1, v2).multiplyScalar(0.5);
    const m23 = new THREE.Vector3().addVectors(v2, v3).multiplyScalar(0.5);
    const dir12 = new THREE.Vector3().crossVectors(a, normal).normalize();
    const dir23 = new THREE.Vector3().crossVectors(new THREE.Vector3().subVectors(v3, v2), normal).normalize();
    // Resolver m12 + t * dir12 = m23 + s * dir23 (proyectado)
    const w = new THREE.Vector3().subVectors(m23, m12);
    const denom = dir12.x * dir23.y - dir12.y * dir23.x;
    let center: THREE.Vector3;
    if (Math.abs(denom) > 1e-9) {
      const t = (w.x * dir23.y - w.y * dir23.x) / denom;
      center = new THREE.Vector3().addVectors(m12, dir12.clone().multiplyScalar(t));
    } else {
      // Caso degenerado: usar el punto medio
      center = m12.clone();
    }
    const radius = v1.distanceTo(center);
    const startVec = new THREE.Vector3().subVectors(v1, center);
    const endVec = new THREE.Vector3().subVectors(v3, center);
    const angle = Math.acos(Math.max(-1, Math.min(1, startVec.dot(endVec) / (radius * radius))));
    // Generar N+1 puntos a lo largo del arco
    const baseIdx = drawingObj.points.rawVal.length;
    const newPts: [number, number, number][] = [];
    const axis = normal.clone();
    // Asegurar dirección correcta del arco (que pase cerca de p2)
    for (let i = 0; i <= N; i++) {
      const t = i / N;
      const ang = angle * t;
      const q = new THREE.Quaternion().setFromAxisAngle(axis, ang);
      const v = startVec.clone().applyQuaternion(q).add(center);
      newPts.push([v.x, v.y, v.z]);
    }
    drawingObj.points.val = [...drawingObj.points.rawVal, ...newPts];
    if (drawingObj.polylines) {
      const arcPoly = newPts.map((_, i) => baseIdx + i);
      const polys = drawingObj.polylines.rawVal;
      drawingObj.polylines.val = [...polys.slice(0, -1), arcPoly, []];
    }
  };
  // ── Losa rectangular con chaflanes (esquinas redondeadas) ──
  // 2 clicks: esquinas opuestas de la bounding box. Genera 4 lados rectos
  // + 4 cuartos de círculo en las esquinas. Pensado para volados curvos
  // arquitectónicos (balcones, fachadas redondeadas, losas de piscina).
  (window as any).__hekatanDrawSlabChaflan = (
    p1: [number, number, number],
    p2: [number, number, number],
    chaflanRadius: number = 1.0,
    segArc: number = 6,
    segStr: number = 6,
  ) => {
    const xMin = Math.min(p1[0], p2[0]);
    const xMax = Math.max(p1[0], p2[0]);
    const yMin = Math.min(p1[1], p2[1]);
    const yMax = Math.max(p1[1], p2[1]);
    const z = (p1[2] + p2[2]) / 2;
    const Lx = xMax - xMin;
    const Ly = yMax - yMin;
    const r = Math.min(chaflanRadius, Lx / 2 - 0.01, Ly / 2 - 0.01);
    if (r <= 0) return;
    const baseIdx = drawingObj.points.rawVal.length;
    const newPts: [number, number, number][] = [];
    const polyIdx: number[] = [];
    const addPt = (x: number, y: number) => {
      newPts.push([x, y, z]);
      polyIdx.push(baseIdx + newPts.length - 1);
    };
    // Borde inferior (y=yMin): de (xMin+r, yMin) a (xMax-r, yMin)
    for (let i = 0; i <= segStr; i++) addPt(xMin + r + (Lx - 2*r) * i / segStr, yMin);
    // Chaflán BR
    for (let i = 1; i <= segArc; i++) {
      const ang = -Math.PI/2 + (Math.PI/2) * i / segArc;
      addPt((xMax - r) + r * Math.cos(ang), (yMin + r) + r * Math.sin(ang));
    }
    // Borde derecho
    for (let i = 1; i <= segStr; i++) addPt(xMax, yMin + r + (Ly - 2*r) * i / segStr);
    // Chaflán TR
    for (let i = 1; i <= segArc; i++) {
      const ang = 0 + (Math.PI/2) * i / segArc;
      addPt((xMax - r) + r * Math.cos(ang), (yMax - r) + r * Math.sin(ang));
    }
    // Borde superior
    for (let i = 1; i <= segStr; i++) addPt(xMax - r - (Lx - 2*r) * i / segStr, yMax);
    // Chaflán TL
    for (let i = 1; i <= segArc; i++) {
      const ang = Math.PI/2 + (Math.PI/2) * i / segArc;
      addPt((xMin + r) + r * Math.cos(ang), (yMax - r) + r * Math.sin(ang));
    }
    // Borde izquierdo
    for (let i = 1; i <= segStr; i++) addPt(xMin, yMax - r - (Ly - 2*r) * i / segStr);
    // Chaflán BL
    for (let i = 1; i <= segArc; i++) {
      const ang = Math.PI + (Math.PI/2) * i / segArc;
      addPt((xMin + r) + r * Math.cos(ang), (yMin + r) + r * Math.sin(ang));
    }
    // Cerrar
    polyIdx.push(baseIdx);
    drawingObj.points.val = [...drawingObj.points.rawVal, ...newPts];
    if (drawingObj.polylines) {
      const polys = drawingObj.polylines.rawVal;
      drawingObj.polylines.val = [...polys.slice(0, -1), polyIdx, []];
    }
  };

  // Rectángulo por 2 esquinas en plano XY o XZ
  (window as any).__hekatanDrawRect = (
    p1: [number, number, number],
    p2: [number, number, number],
  ) => {
    const baseIdx = drawingObj.points.rawVal.length;
    // 4 esquinas (asumiendo que los 2 puntos definen una diagonal en un plano)
    const x1 = p1[0], y1 = p1[1], z1 = p1[2];
    const x2 = p2[0], y2 = p2[1], z2 = p2[2];
    let pts: [number, number, number][];
    if (Math.abs(z1 - z2) < 1e-6) {
      // Plano XY (Z constante)
      pts = [[x1, y1, z1], [x2, y1, z1], [x2, y2, z1], [x1, y2, z1]];
    } else if (Math.abs(y1 - y2) < 1e-6) {
      // Plano XZ (Y constante)
      pts = [[x1, y1, z1], [x2, y1, z1], [x2, y1, z2], [x1, y1, z2]];
    } else {
      // Plano YZ (X constante)
      pts = [[x1, y1, z1], [x1, y2, z1], [x1, y2, z2], [x1, y1, z2]];
    }
    drawingObj.points.val = [...drawingObj.points.rawVal, ...pts];
    if (drawingObj.polylines) {
      const rectPoly = [baseIdx, baseIdx + 1, baseIdx + 2, baseIdx + 3, baseIdx];
      const polys = drawingObj.polylines.rawVal;
      drawingObj.polylines.val = [...polys.slice(0, -1), rectPoly, []];
    }
  };

  // ── Ejes A/B/C + 1/2/3 estilo CAD/FEM Studio ──
  // Dibuja líneas verticales en X=xs[i] (etiquetadas A, B, C...) y
  // líneas horizontales en Y=ys[i] (etiquetadas 1, 2, 3...). Útil para
  // ubicarse en planta y cruzar referencias entre modelo y planos.
  const axesGroup = new THREE.Group();
  axesGroup.visible = false;
  scene.add(axesGroup);
  (window as any).__hekatanShowAxes = (
    xs: number[],
    ys: number[],
    zMax: number = 12,
    extentExtra: number = 2,
  ) => {
    while (axesGroup.children.length) {
      const c = axesGroup.children.pop()!;
      (c as any).geometry?.dispose();
      (c as any).material?.dispose();
    }
    if (!xs.length || !ys.length) return;
    const yMin = Math.min(...ys) - extentExtra;
    const yMax = Math.max(...ys) + extentExtra;
    const xMin = Math.min(...xs) - extentExtra;
    const xMax = Math.max(...xs) + extentExtra;
    const labelLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const mkLabel = (txt: string, x: number, y: number, z: number, color: string) => {
      const c = document.createElement("canvas");
      c.width = 64; c.height = 32;
      const cc = c.getContext("2d")!;
      cc.fillStyle = color;
      cc.font = "bold 22px sans-serif";
      cc.textAlign = "center";
      cc.fillText(txt, 32, 26);
      const tex = new THREE.CanvasTexture(c);
      const m = new THREE.SpriteMaterial({ map: tex, transparent: true });
      const s = new THREE.Sprite(m);
      s.position.set(x, y, z);
      s.scale.set(1.2, 0.6, 1);
      return s;
    };
    // Ejes en X (A, B, C...) — líneas paralelas al eje Y a cada x_i
    xs.forEach((x, i) => {
      const lbl = i < labelLetters.length ? labelLetters[i] : `X${i}`;
      const geo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x, yMin, 0),
        new THREE.Vector3(x, yMax, 0),
        new THREE.Vector3(x, yMin, 0),
        new THREE.Vector3(x, yMin, zMax),
      ]);
      const mat = new THREE.LineDashedMaterial({
        color: 0x60a5fa, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6,
      });
      const ln = new THREE.LineSegments(geo, mat);
      ln.computeLineDistances();
      axesGroup.add(ln);
      // Etiqueta en ambos extremos
      axesGroup.add(mkLabel(lbl, x, yMin - 0.5, 0, "#60a5fa"));
      axesGroup.add(mkLabel(lbl, x, yMax + 0.5, 0, "#60a5fa"));
    });
    // Ejes en Y (1, 2, 3...) — líneas paralelas al eje X a cada y_i
    ys.forEach((y, i) => {
      const lbl = `${i + 1}`;
      const geo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(xMin, y, 0),
        new THREE.Vector3(xMax, y, 0),
        new THREE.Vector3(xMin, y, 0),
        new THREE.Vector3(xMin, y, zMax),
      ]);
      const mat = new THREE.LineDashedMaterial({
        color: 0xfb7185, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6,
      });
      const ln = new THREE.LineSegments(geo, mat);
      ln.computeLineDistances();
      axesGroup.add(ln);
      axesGroup.add(mkLabel(lbl, xMin - 0.5, y, 0, "#fb7185"));
      axesGroup.add(mkLabel(lbl, xMax + 0.5, y, 0, "#fb7185"));
    });
    axesGroup.visible = true;
    viewerRender();
  };
  (window as any).__hekatanHideAxes = () => {
    axesGroup.visible = false;
    viewerRender();
  };

  // ── Planos de referencia visibles ──
  // Líneas semitransparentes en X-Y a Z=0,3,6,9,12 m que sirven de guía
  // al dibujar (ej. niveles de pisos). El usuario activa/desactiva con
  // window.__hekatanShowRefPlanes(zArray, gridSizeM).
  const refPlanesGroup = new THREE.Group();
  refPlanesGroup.visible = false;
  scene.add(refPlanesGroup);
  (window as any).__hekatanShowRefPlanes = (
    zLevels: number[] = [0, 3, 6, 9, 12],
    sizeM: number = 20,
    centerX: number = 10,
    centerY: number = 10,
  ) => {
    // Limpiar viejos
    while (refPlanesGroup.children.length) {
      const c = refPlanesGroup.children.pop()!;
      (c as any).geometry?.dispose();
      (c as any).material?.dispose();
    }
    const colors = [0x60a5fa, 0x34d399, 0xfbbf24, 0xfb7185, 0xc084fc, 0x22d3ee];
    zLevels.forEach((z, i) => {
      const col = colors[i % colors.length];
      // Borde rectangular del plano
      const half = sizeM / 2;
      const pts = [
        new THREE.Vector3(centerX - half, centerY - half, z),
        new THREE.Vector3(centerX + half, centerY - half, z),
        new THREE.Vector3(centerX + half, centerY + half, z),
        new THREE.Vector3(centerX - half, centerY + half, z),
        new THREE.Vector3(centerX - half, centerY - half, z),
      ];
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.55 });
      refPlanesGroup.add(new THREE.Line(geo, mat));
      // Label "Z=X m" como Sprite simple usando texto canvas
      const canvas2 = document.createElement('canvas');
      canvas2.width = 128; canvas2.height = 32;
      const cctx = canvas2.getContext('2d')!;
      cctx.fillStyle = `#${col.toString(16).padStart(6, '0')}`;
      cctx.font = 'bold 18px sans-serif';
      cctx.fillText(`Z = ${z} m`, 4, 22);
      const tex = new THREE.CanvasTexture(canvas2);
      const sprMat = new THREE.SpriteMaterial({ map: tex, transparent: true });
      const spr = new THREE.Sprite(sprMat);
      spr.position.set(centerX - half - 1.5, centerY - half - 1.5, z);
      spr.scale.set(2.5, 0.6, 1);
      refPlanesGroup.add(spr);
    });
    refPlanesGroup.visible = true;
    viewerRender();
  };
  (window as any).__hekatanHideRefPlanes = () => {
    refPlanesGroup.visible = false;
    viewerRender();
  };

  // ── Snap 3D Indicator ──
  // Tamaño FIJO — consistente con node markers (~20 cm) y support boxes
  // (~50 cm). Sin auto-escalado para evitar inconsistencia: si bajás
  // displayScale los nodos/cargas no cambian, así que el snap tampoco
  // debería. Sphere 5 cm + halo 10 cm + cruz 0.4 m → claramente visible
  // pero sin dominar la pantalla.
  const snapMarker = new THREE.Group();
  const snapSphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.05, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0xff3344, transparent: true, opacity: 0.95 }),
  );
  const snapHalo = new THREE.Mesh(
    new THREE.SphereGeometry(0.10, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.25, depthWrite: false }),
  );
  snapMarker.add(snapSphere, snapHalo);
  // Cruz de ejes 0.4 m — más larga que un node marker para diferenciarse
  const axisLen = 0.4;
  const mkLine = (a: [number, number, number], b: [number, number, number], col: number) => {
    const g = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(...a), new THREE.Vector3(...b),
    ]);
    return new THREE.Line(g, new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.7 }));
  };
  snapMarker.add(mkLine([-axisLen, 0, 0], [axisLen, 0, 0], 0xff0000)); // X rojo
  snapMarker.add(mkLine([0, -axisLen, 0], [0, axisLen, 0], 0x00ff00)); // Y verde
  snapMarker.add(mkLine([0, 0, -axisLen], [0, 0, axisLen], 0x0088ff)); // Z azul
  snapMarker.visible = false;
  snapMarker.frustumCulled = false;
  scene.add(snapMarker);
  // API pública para mover el snap marker (útil para demos + debug)
  (window as any).__hekatanShowSnap = (x: number, y: number, z: number) => {
    snapMarker.position.set(x, y, z);
    snapMarker.visible = true;
    viewerRender();
  };
  (window as any).__hekatanHideSnap = () => {
    snapMarker.visible = false;
    viewerRender();
  };
  // Auto-update el snap marker cuando se mueve el mouse sobre el plano
  // Prioridad: OSNAP (Endpoint/Midpoint/etc.) > grid snap 2D
  // ADEMÁS: rubber band desde último punto al cursor + polar tracking
  rendererElm.addEventListener("pointermove", (event: PointerEvent) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObject(plane);
    if (hit.length) {
      const p = hit[0].point;
      const osnapTol = ((window as any).__hekatanSnap2D ?? 0.5) * 1.2;
      const osnap = (window as any).__hekatanOsnapCompute?.(p.x, p.y, p.z, osnapTol);
      if (osnap) {
        showOsnap(osnap.type, osnap.x, osnap.y, osnap.z);
        snapMarker.position.set(osnap.x, osnap.y, osnap.z);
        snapMarker.visible = true;
        p.set(osnap.x, osnap.y, osnap.z);
      } else {
        hideOsnap();
        const snap = (window as any).__hekatanSnap2D ?? 0.5;
        if (snap > 0) {
          p.x = Math.round(p.x / snap) * snap;
          p.y = Math.round(p.y / snap) * snap;
          p.z = Math.round(p.z / snap) * snap;
        }
        snapMarker.position.copy(p);
        snapMarker.visible = true;
      }
      // ── COORD READOUT: texto al lado del cursor con X, Y, Z + ΔL si rubber band
      coordReadout.style.left = event.clientX + "px";
      coordReadout.style.top = event.clientY + "px";
      coordReadout.style.display = "block";
      // ── RUBBER BAND: línea desde el último punto de la polilínea actual
      // hasta el cursor. Solo visible si hay al menos 1 punto previo en la
      // polilínea activa. Da feedback constante "voy a dibujar desde aquí".
      const polys = drawingObj.polylines?.rawVal ?? [];
      const lastPoly = polys[polys.length - 1] ?? [];
      const allPts = drawingObj.points.rawVal ?? [];
      if (lastPoly.length > 0 && allPts[lastPoly[lastPoly.length - 1]]) {
        const lastIdx = lastPoly[lastPoly.length - 1];
        const lastPt = allPts[lastIdx];
        const dL = Math.hypot(p.x - lastPt[0], p.y - lastPt[1], p.z - lastPt[2]);
        const ang = Math.atan2(p.y - lastPt[1], p.x - lastPt[0]) * 180 / Math.PI;
        coordReadout.textContent = `X=${p.x.toFixed(2)} Y=${p.y.toFixed(2)} Z=${p.z.toFixed(2)} | ΔL=${dL.toFixed(2)}m ${ang.toFixed(0)}°`;
        rubberBand.geometry.setFromPoints([
          new THREE.Vector3(lastPt[0], lastPt[1], lastPt[2]),
          new THREE.Vector3(p.x, p.y, p.z),
        ]);
        (rubberBand as any).computeLineDistances?.();
        rubberBand.visible = true;
        // Dim label en midpoint del rubber band (referencial mientras se dibuja)
        updateRubberLabel(lastPt[0], lastPt[1], lastPt[2], p.x, p.y, p.z);
        // ── Polar tracking — líneas X/Y/Z extendidas desde el último punto
        // hasta los bordes del modelo (longitud 5m por dirección, ajustable)
        const ext = 8;
        polarX.geometry.setFromPoints([
          new THREE.Vector3(lastPt[0] - ext, lastPt[1], lastPt[2]),
          new THREE.Vector3(lastPt[0] + ext, lastPt[1], lastPt[2]),
        ]);
        (polarX as any).computeLineDistances?.();
        polarY.geometry.setFromPoints([
          new THREE.Vector3(lastPt[0], lastPt[1] - ext, lastPt[2]),
          new THREE.Vector3(lastPt[0], lastPt[1] + ext, lastPt[2]),
        ]);
        (polarY as any).computeLineDistances?.();
        polarZ.geometry.setFromPoints([
          new THREE.Vector3(lastPt[0], lastPt[1], lastPt[2] - ext),
          new THREE.Vector3(lastPt[0], lastPt[1], lastPt[2] + ext),
        ]);
        (polarZ as any).computeLineDistances?.();
        polarLines.visible = true;
      } else {
        // Sin punto previo: solo mostrar coords del cursor
        coordReadout.textContent = `X=${p.x.toFixed(2)} Y=${p.y.toFixed(2)} Z=${p.z.toFixed(2)}`;
        rubberBand.visible = false;
        polarLines.visible = false;
        hideRubberLabel();
      }
      viewerRender();
    } else {
      hideOsnap();
      coordReadout.style.display = "none";
      snapMarker.visible = false;
      rubberBand.visible = false;
      polarLines.visible = false;
      hideRubberLabel();
      viewerRender();
    }
  });

  // Events
  // On gridTarget change, interpolate grid and update plane position and rotation
  van.derive(() => {
    if (!drawingObj.gridTarget) return;

    interpolate(
      gridObj,
      {
        position: new THREE.Vector3(...drawingObj.gridTarget.val.position),
        quaternion: new THREE.Quaternion().setFromEuler(
          new THREE.Euler(...drawingObj.gridTarget.val.rotation)
        ),
      },
      viewerRender
    );

    plane.position.set(...drawingObj.gridTarget.val.position);
    plane.quaternion.setFromEuler(
      new THREE.Euler(...drawingObj.gridTarget.val.rotation)
    );
    plane.updateMatrixWorld(); // to fix intersect object
  });

  // On points change, update points positions for intersections
  van.derive(() => {
    points.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(drawingObj.points.val.flat(), 3)
    );
    points.geometry.computeBoundingSphere();
  });

  // On derivedDisplayScale update indicationPoint size and point threshold
  van.derive(() => {
    const size = 0.05 * gridSize * 0.5 * derivedDisplayScale.val;

    indicationPoint.material.size = size;
    raycaster.params.Points.threshold = 0.4 * size;
  });

  van.derive(() => {
    const allPoints = drawingObj.points.val ?? [];
    const polylines = drawingObj.polylines?.val ?? [];
    const lastPolyline = polylines.at(-1) ?? [];
  
    const posArray: number[] = [];
  
    for (const i of lastPolyline) {
      const [x, y, z] = allPoints[i];
      posArray.push(x, y, z);
    }
  
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(posArray, 3)
    );
  
    activePoints.geometry.dispose();
    activePoints.geometry = geometry;
  });

  // Pointer events
  let pointerdown = false;
  let pointerDownAndMovedCount = 0;

  // Compute pointerDownAndMovedCount (dragging)
  rendererElm.addEventListener("pointerdown", () => {
    pointerdown = true;
  });

  rendererElm.addEventListener("pointerup", () => {
    pointerdown = false;
  });

  rendererElm.addEventListener("pointermove", () => {
    if (pointerdown) pointerDownAndMovedCount++;
  });

  // On pointer click, add a point and polyline
  // ════════════════════════════════════════════════════════════════════
  // OBJECT SNAP (OSNAP) — estilo AutoCAD
  // ════════════════════════════════════════════════════════════════════
  // Snaps soportados:
  //   - END (Endpoint): extremos de polilíneas/segmentos
  //   - MID (Midpoint): punto medio de un segmento
  //   - NODE: cualquier punto/nodo existente
  //   - CEN (Center): centro de un círculo/arco discretizado
  //   - PER (Perpendicular): proyección perpendicular sobre un segmento
  //   - NEA (Nearest): punto más cercano sobre un segmento
  //   - INT (Intersection): intersección de 2 segmentos
  // El usuario activa cada snap via window.__hekatanOsnap[type] = true
  (window as any).__hekatanOsnap = (window as any).__hekatanOsnap ?? {
    end: true, mid: true, node: true, cen: true,
    per: false, nea: false, int: false,
  };
  // Snap marker visual (cuadrado coloreado por tipo + label)
  const osnapMarker = new THREE.Group();
  osnapMarker.visible = false;
  osnapMarker.frustumCulled = false;
  scene.add(osnapMarker);
  const osnapColors: Record<string, number> = {
    end: 0xff3344, mid: 0xfbbf24, node: 0x60a5fa, cen: 0x34d399,
    per: 0xc084fc, nea: 0xff7eb6, int: 0xff8800,
  };
  const showOsnap = (type: string, x: number, y: number, z: number) => {
    while (osnapMarker.children.length) {
      const c = osnapMarker.children.pop()!;
      (c as any).geometry?.dispose?.();
      (c as any).material?.dispose?.();
    }
    const col = osnapColors[type] ?? 0xffffff;
    // Cuadrado pequeño + label
    const s = 0.12;
    const sqGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(x-s, y-s, z), new THREE.Vector3(x+s, y-s, z),
      new THREE.Vector3(x+s, y-s, z), new THREE.Vector3(x+s, y+s, z),
      new THREE.Vector3(x+s, y+s, z), new THREE.Vector3(x-s, y+s, z),
      new THREE.Vector3(x-s, y+s, z), new THREE.Vector3(x-s, y-s, z),
    ]);
    osnapMarker.add(new THREE.LineSegments(sqGeo, new THREE.LineBasicMaterial({ color: col, linewidth: 2 })));
    osnapMarker.position.set(0, 0, 0);
    osnapMarker.visible = true;
  };
  const hideOsnap = () => { osnapMarker.visible = false; };
  // Compute closest snap for current cursor world point
  const computeOsnap = (px: number, py: number, pz: number, tol: number): { type: string; x: number; y: number; z: number } | null => {
    const opts = (window as any).__hekatanOsnap as Record<string, boolean>;
    const pts = drawingObj.points.rawVal as [number,number,number][];
    const polys = drawingObj.polylines?.rawVal ?? [];
    let best: { type: string; x: number; y: number; z: number; d: number } | null = null;
    const consider = (type: string, x: number, y: number, z: number) => {
      const d = Math.hypot(x - px, y - py, z - pz);
      if (d > tol) return;
      if (!best || d < best.d) best = { type, x, y, z, d };
    };
    // NODE: cada punto existente
    if (opts.node || opts.end) {
      pts.forEach(p => {
        if (opts.node) consider("node", p[0], p[1], p[2]);
      });
    }
    // ENDPOINT + MIDPOINT + NEAREST + PERPENDICULAR sobre segmentos de polilíneas
    for (const poly of polys) {
      if (poly.length < 2) continue;
      for (let i = 0; i < poly.length - 1; i++) {
        const a = pts[poly[i]], b = pts[poly[i+1]];
        if (!a || !b) continue;
        if (opts.end) {
          consider("end", a[0], a[1], a[2]);
          consider("end", b[0], b[1], b[2]);
        }
        if (opts.mid) {
          consider("mid", (a[0]+b[0])/2, (a[1]+b[1])/2, (a[2]+b[2])/2);
        }
        if (opts.nea || opts.per) {
          const dx = b[0]-a[0], dy = b[1]-a[1], dz = b[2]-a[2];
          const len2 = dx*dx + dy*dy + dz*dz;
          if (len2 < 1e-12) continue;
          const t = Math.max(0, Math.min(1, ((px-a[0])*dx + (py-a[1])*dy + (pz-a[2])*dz) / len2));
          const sx = a[0] + t*dx, sy = a[1] + t*dy, sz = a[2] + t*dz;
          if (opts.nea) consider("nea", sx, sy, sz);
          if (opts.per) consider("per", sx, sy, sz);
        }
      }
    }
    return best ? { type: best.type, x: best.x, y: best.y, z: best.z } : null;
  };
  (window as any).__hekatanOsnapCompute = computeOsnap;
  (window as any).__hekatanOsnapShow = showOsnap;
  (window as any).__hekatanOsnapHide = hideOsnap;

  // ── Buffer de clicks pendientes para tools multi-click ──
  // Círculo: 2 clicks (centro + radio) → __hekatanDrawCircle
  // Arco: 3 clicks (start + mid + end) → __hekatanDrawArc
  // Rectángulo: 2 clicks (esquina A + B) → __hekatanDrawRect
  let pendingClicks: [number, number, number][] = [];
  // ── Crear status bar HTML siempre visible debajo del viewer ──
  // Muestra: tool activa + paso actual + última acción.
  const statusBar = document.createElement("div");
  statusBar.id = "hk-cad-status";
  statusBar.style.cssText = [
    "position:fixed",
    "bottom:8px",
    "left:50%",
    "transform:translateX(-50%)",
    "padding:6px 14px",
    "background:rgba(15, 23, 42, 0.92)",
    "color:#22d3ee",
    "border:1px solid rgba(34, 211, 238, 0.5)",
    "border-radius:6px",
    "font-family:Consolas, monospace",
    "font-size:12px",
    "z-index:90",
    "pointer-events:none",
    "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)",
    "max-width:90vw",
    "white-space:nowrap",
    "overflow:hidden",
    "text-overflow:ellipsis",
  ].join(";") + ";";
  statusBar.textContent = "🛠 CAD listo — seleccioná un tool y hacé click en el viewer";
  document.body.appendChild(statusBar);

  // Helper de status — el usuario VE en pantalla qué paso del tool va
  const updateStatus = (txt: string) => {
    statusBar.textContent = txt;
    (window as any).__hekatanCadStatusText = txt;
  };
  // Reset pendingClicks cuando el usuario cambia de tool
  (window as any).__hekatanCadResetPending = () => {
    pendingClicks = [];
    updateStatus("🛠 Tool cambiado — clicks pendientes limpiados");
  };

  rendererElm.addEventListener("click", (event: PointerEvent) => {
    // Ignorar click que viene de drag (rotación)
    if (pointerDownAndMovedCount > 5) {
      pointerDownAndMovedCount = 0;
      return;
    }
    pointerDownAndMovedCount = 0;

    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const intersect = raycaster.intersectObject(plane);
    if (!intersect.length) return;

    let point = intersect[0].point;
    if (event.ctrlKey || event.metaKey) {
      point = new THREE.Vector3(
        Math.round(intersect[0].point.x),
        Math.round(intersect[0].point.y),
        Math.round(intersect[0].point.z)
      );
    }
    // OSNAP primero (prioridad sobre grid snap)
    const osnapTol = ((window as any).__hekatanSnap2D ?? 0.5) * 1.2;
    const osnap = (window as any).__hekatanOsnapCompute?.(point.x, point.y, point.z, osnapTol);
    if (osnap) {
      point = new THREE.Vector3(osnap.x, osnap.y, osnap.z);
      updateStatus(`🎯 Snap [${osnap.type.toUpperCase()}] → (${point.x.toFixed(2)}, ${point.y.toFixed(2)}, ${point.z.toFixed(2)})`);
    } else {
      // Si no hay osnap, aplicar grid snap 2D
      const snap = (window as any).__hekatanSnap2D ?? 0;
      if (snap > 0) {
        point = new THREE.Vector3(
          Math.round(point.x / snap) * snap,
          Math.round(point.y / snap) * snap,
          Math.round(point.z / snap) * snap,
        );
      }
    }

    // ── Tool dispatcher ──
    const tool = ((window as any).__hekatanCadState?.get?.() as any)?.tool ?? "node";

    if (tool === "circle") {
      // 2 clicks: centro + punto en el radio
      pendingClicks.push([point.x, point.y, point.z]);
      if (pendingClicks.length === 1) {
        updateStatus(`○ Círculo — click 1/2 OK (centro). Ahora marcá el radio.`);
        return;
      }
      // 2 clicks recolectados → calcular radio + plano + dibujar
      const [c, p2] = pendingClicks;
      const r = Math.hypot(p2[0] - c[0], p2[1] - c[1], p2[2] - c[2]);
      // Detectar plano según componente con menor variación
      const dx = Math.abs(p2[0] - c[0]);
      const dy = Math.abs(p2[1] - c[1]);
      const dz = Math.abs(p2[2] - c[2]);
      const planeKind: "xy" | "xz" | "yz" = dz < 1e-3 ? "xy" : (dy < 1e-3 ? "xz" : "yz");
      const segs = (window as any).__hekatanArcSegs ?? 12;
      (window as any).__hekatanDrawCircle?.(c[0], c[1], c[2], r, segs, planeKind);
      updateStatus(`✓ Círculo dibujado en ${planeKind.toUpperCase()} — r=${r.toFixed(2)}m, ${segs} segmentos`);
      pendingClicks = [];
      try { (window as any).__hekatanRebuild?.(); } catch {}
      return;
    }
    if (tool === "arc") {
      // 3 clicks: start + mid + end
      pendingClicks.push([point.x, point.y, point.z]);
      if (pendingClicks.length === 1) { updateStatus(`⌒ Arco — click 1/3 OK (inicio). Marcá el punto medio.`); return; }
      if (pendingClicks.length === 2) { updateStatus(`⌒ Arco — click 2/3 OK (medio). Marcá el final.`); return; }
      const [p1, pm, pe] = pendingClicks;
      const segs = (window as any).__hekatanArcSegs ?? 12;
      (window as any).__hekatanDrawArc?.(p1, pm, pe, segs);
      updateStatus(`✓ Arco dibujado — ${segs} segmentos`);
      pendingClicks = [];
      try { (window as any).__hekatanRebuild?.(); } catch {}
      return;
    }
    if (tool === "rect") {
      // 2 clicks: esquina A + esquina opuesta
      pendingClicks.push([point.x, point.y, point.z]);
      if (pendingClicks.length === 1) {
        updateStatus(`▭ Rectángulo — click 1/2 OK (esquina). Marcá la esquina opuesta.`);
        return;
      }
      const [a, b] = pendingClicks;
      (window as any).__hekatanDrawRect?.(a, b);
      updateStatus(`✓ Rectángulo dibujado — (${a[0].toFixed(1)},${a[1].toFixed(1)}) → (${b[0].toFixed(1)},${b[1].toFixed(1)})`);
      pendingClicks = [];
      try { (window as any).__hekatanRebuild?.(); } catch {}
      return;
    }
    if (tool === "chaflan") {
      // 2 clicks: esquinas opuestas. El radio se lee de window.__hekatanChaflanR
      pendingClicks.push([point.x, point.y, point.z]);
      if (pendingClicks.length === 1) {
        updateStatus(`▱ Losa con chaflanes — click 1/2 OK (esquina). Marcá la esquina opuesta.`);
        return;
      }
      const [a, b] = pendingClicks;
      const rad = (window as any).__hekatanChaflanR ?? 1.0;
      const segArc = Math.max(3, (window as any).__hekatanArcSegs ?? 6);
      (window as any).__hekatanDrawSlabChaflan?.(a, b, rad, segArc, 6);
      const dx = Math.abs(b[0] - a[0]).toFixed(1);
      const dy = Math.abs(b[1] - a[1]).toFixed(1);
      updateStatus(`✓ Losa con chaflanes dibujada — ${dx}×${dy}m, r=${rad}m, ${segArc} seg/chaflán`);
      pendingClicks = [];
      try { (window as any).__hekatanRebuild?.(); } catch {}
      return;
    }

    // ── Default behavior: tools "select", "node", "line", "polyline", "area" ──
    // Click agrega punto + extiende polilínea actual
    drawingObj.points.val = [...drawingObj.points.rawVal, point.toArray()];
    if (drawingObj.polylines) {
      drawingObj.polylines.val = [
        ...drawingObj.polylines.rawVal.slice(0, -1),
        [
          ...(drawingObj.polylines.rawVal.length
            ? drawingObj.polylines.rawVal.pop()
            : []),
          drawingObj.points.rawVal.length - 1,
        ],
      ];
    }
    if (tool === "node") updateStatus(`● Nodo creado en (${point.x.toFixed(2)}, ${point.y.toFixed(2)}, ${point.z.toFixed(2)})`);
    else if (tool === "line") updateStatus(`／ Línea — punto agregado. Continuá clickeando para extender, right-click para terminar.`);
  });

  // On contextmenu, add a new empty polyline
  rendererElm.addEventListener("contextmenu", () => {
    if (
      !drawingObj.polylines ||
      drawingObj.polylines.rawVal[drawingObj.polylines.rawVal.length - 1]
        .length === 0
    )
      return;

    drawingObj.polylines.val = [...drawingObj.polylines.rawVal, []];
  });

  // On pointer move and intersection with plan, show indication point
  rendererElm.addEventListener("pointermove", (event: PointerEvent) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const intersect = raycaster.intersectObject(plane);

    indicationPoint.geometry.deleteAttribute("position"); // delete point if not intersection

    if (intersect.length) {
      let point = intersect[0].point;

      if (event.ctrlKey || event.metaKey) {
        point = new THREE.Vector3(
          Math.round(intersect[0].point.x),
          Math.round(intersect[0].point.y),
          Math.round(intersect[0].point.z)
        );
      }

      indicationPoint.geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(point.toArray(), 3)
      );
    }

    viewerRender();
  });

  // On pointer move and intersection with a point, hide indication point
  rendererElm.addEventListener("pointermove", (event: PointerEvent) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);

    // Check if point in the plane
    let isPointInPlane = false;
    const intersectWithPoints = raycaster.intersectObject(points);
    const intersectWithPlane = raycaster.intersectObject(plane);
    if (intersectWithPoints.length && intersectWithPlane.length) {
      const point = new THREE.Vector3(
        ...drawingObj.points.rawVal[intersectWithPoints[0].index]
      );
      const planePoint = new THREE.Vector3(...intersectWithPlane[0].point);
      const planeToPoint = point.sub(planePoint);
      const planeNormal = intersectWithPlane[0].face?.normal;
      planeNormal.transformDirection(plane.matrixWorld);
      if (Math.abs(planeToPoint.dot(planeNormal)) < 1e-4) isPointInPlane = true;
    }

    indicationPoint.visible = isPointInPlane ? false : true;
  });

  // On pointer drag and intersection with a point and plane, update point position
  let isPointInPlaneWithoutControl = false;
  let pointIndex: number | undefined;
  rendererElm.addEventListener("pointermove", (event: PointerEvent) => {
    if (!pointerDownAndMovedCount) return;

    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);

    // Check if point in the plane
    let isPointInPlane = false;
    const intersectWithPoints = raycaster.intersectObject(points);
    const intersectWithPlane = raycaster.intersectObject(plane);
    if (intersectWithPoints.length && intersectWithPlane.length) {
      const point = new THREE.Vector3(
        ...drawingObj.points.rawVal[intersectWithPoints[0].index]
      );
      const planePoint = new THREE.Vector3(...intersectWithPlane[0].point);
      const planeToPoint = point.sub(planePoint);
      const planeNormal = intersectWithPlane[0].face?.normal;
      planeNormal.transformDirection(plane.matrixWorld);
      if (Math.abs(planeToPoint.dot(planeNormal)) < 1e-4) isPointInPlane = true;
    }

    // < 5 to not trigger with rotation
    if (isPointInPlane && pointerDownAndMovedCount < 5) {
      isPointInPlaneWithoutControl = true;
      controls.enabled = false;
      pointIndex = intersectWithPoints[0].index;
    }

    if (!isPointInPlaneWithoutControl) return;

    if (pointerDownAndMovedCount % 2 !== 0) return; // slow movements for (parametric) performance opt 5

    const newPoints = [...drawingObj.points.rawVal];
    if (pointIndex !== undefined) {
      let newPosition = intersectWithPlane[0].point;

      if (event.ctrlKey || event.metaKey) {
        newPosition = new THREE.Vector3(
          Math.round(newPosition.x),
          Math.round(newPosition.y),
          Math.round(newPosition.z)
        );
      }

      newPoints[pointIndex] = newPosition.toArray();
      // newPoints[pointIndex] = intersectWithPlane[0].point.toArray();
    }
    drawingObj.points.val = newPoints;
  });

  rendererElm.addEventListener("pointerup", () => {
    controls.enabled = true;
    isPointInPlaneWithoutControl = false;
  });

  // On contextmenu move and point in the plane, delete the point and update polyline
  rendererElm.addEventListener("contextmenu", (event: PointerEvent) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);

    // Check if point in the plane
    let isPointInPlane = false;
    const intersectWithPoints = raycaster.intersectObject(points);
    const intersectWithPlane = raycaster.intersectObject(plane);
    if (intersectWithPoints.length && intersectWithPlane.length) {
      const point = new THREE.Vector3(
        ...drawingObj.points.rawVal[intersectWithPoints[0].index]
      );
      const planePoint = new THREE.Vector3(...intersectWithPlane[0].point);
      const planeToPoint = point.sub(planePoint);
      const planeNormal = intersectWithPlane[0].face?.normal;
      planeNormal.transformDirection(plane.matrixWorld);
      if (Math.abs(planeToPoint.dot(planeNormal)) < 1e-4) isPointInPlane = true;
    }

    if (!isPointInPlane) return;

    const newPoints = [...drawingObj.points.rawVal];
    newPoints.splice(intersectWithPoints[0].index, 1);
    drawingObj.points.val = newPoints;

    if (!drawingObj.polylines) return;

    const newPolylines = drawingObj.polylines.rawVal
      .map((polyline) =>
        polyline.filter((i) => i !== intersectWithPoints[0].index)
      ) // remove point index from polyline
      .map((polyline) =>
        polyline.map((i) => (i > intersectWithPoints[0].index ? i - 1 : i))
      ) // update polyline indices
      .filter((polyline) => polyline.length); // remove empty polylines

    newPolylines.push([]); // add new empty polyline

    drawingObj.polylines.val = newPolylines;
  });
}

// Utils
function interpolate(
  object3D: THREE.Object3D,
  target: { position: THREE.Vector3; quaternion: THREE.Quaternion },
  onAnimate?: () => void
) {
  const duration = 500; // In milliseconds
  const fps = 30; // Frames per second
  const steps = Math.round(duration / (1000 / fps));
  const origin = {
    position: object3D.position.clone(),
    quaternion: object3D.quaternion.clone(),
  };
  const animationID = setInterval(animate, 1000 / fps);

  let step = 0;
  function animate() {
    step++;

    const t = step / steps;
    object3D.position.lerpVectors(origin.position, target.position, t);
    object3D.quaternion.slerpQuaternions(
      origin.quaternion,
      target.quaternion,
      t
    );

    if (onAnimate) onAnimate();

    if (step == steps) clearInterval(animationID);
  }
}
