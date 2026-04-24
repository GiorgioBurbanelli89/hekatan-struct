/**
 * =============================================================================
 *  animateMode — Animación visual de modos de vibración (modal analysis)
 * =============================================================================
 *
 *  Helper reutilizable extraído de la lógica original de `getCad3d.ts` que
 *  anima sinusoidalmente el modo seleccionado. Funciona con cualquier ejemplo
 *  que expone un `ModalOutputs` (frequencies, modeShapes, massParticipation).
 *
 *  Uso típico desde el workspace:
 *    const anim = createModalAnimator({ mesh, viewerElm });
 *    anim.setResults(modalOut);
 *    anim.setMode(0);      // modo 1 (0-indexed)
 *    anim.play();
 *    // ...
 *    anim.stop();
 *
 *  El helper también renderiza un BADGE flotante con "Modo X — f = Y Hz"
 *  para que el usuario vea qué modo se está animando.
 * =============================================================================
 */
import type { State } from "vanjs-core";
import * as THREE from "three";
import type { Node, Element, ModalOutputs } from "awatif-fem";

export interface ModalAnimatorConfig {
  /** Reactive mesh del viewer (nodes + elements + deformOutputs del workspace) */
  mesh: {
    nodes: State<Node[]>;
    elements: State<Element[]>;
    deformOutputs?: State<any>;
    analyzeOutputs?: State<any>;
  };
  /** El <div> del viewer (tiene __ctx.scene, __ctx.camera, __ctx.render) */
  viewerElm: HTMLElement;
  /** Amplitud visual como % del diagonal del modelo. Default 5%. */
  scalePercent?: number;
  /** Factor de tiempo para que la animación sea visualmente agradable (no la
   *  frecuencia REAL que a veces es muy alta o muy baja). Default: escalar
   *  frecuencia a [0.5, 3] Hz para oscilación clara. */
  visFrequencyRange?: [number, number];
}

export interface ModalAnimator {
  /** Carga nuevos resultados modales (modo oscila hasta que se llame setMode()) */
  setResults(out: ModalOutputs): void;
  /** Selecciona el modo a animar (0-indexed). Si se está reproduciendo, se
   *  reinicia el animation loop con el nuevo modo. */
  setMode(i: number): void;
  /** Inicia la animación del modo actual (no-op si ya está corriendo) */
  play(): void;
  /** Detiene la animación y restaura nodos a posiciones originales */
  stop(): void;
  /** True si la animación está corriendo */
  isPlaying(): boolean;
  /** Número actual de modos disponibles */
  modeCount(): number;
  /** Modo actualmente seleccionado (0-indexed) */
  currentMode(): number;
  /** Frecuencia del modo actual en Hz (0 si no hay results) */
  currentFreq(): number;
  /** Remueve el badge y limpia todos los recursos */
  dispose(): void;
}

/**
 * Crea un animador modal para el viewer. El viewer debe tener un `__ctx` en
 * su DOM element (getViewer de awatif-ui lo expone). El badge se anexa al
 * `document.body` y se muestra/oculta según el estado de reproducción.
 */
export function createModalAnimator(cfg: ModalAnimatorConfig): ModalAnimator {
  const { mesh, viewerElm } = cfg;
  const scalePct = cfg.scalePercent ?? 5;
  const [visMin, visMax] = cfg.visFrequencyRange ?? [0.5, 3];

  // ── State ──────────────────────────────────────────────────────────
  let results: ModalOutputs | null = null;
  let mode = 0;
  let rafId = 0;
  let originalNodes: Node[] = [];

  // Badge flotante (abajo a la derecha) mostrando modo + frecuencia
  const badge = document.createElement("div");
  badge.id = "modal-animation-badge";
  badge.style.cssText = `
    position: fixed; bottom: 16px; right: 16px; z-index: 9999;
    background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 100%);
    color: #fff; font-family: monospace; font-size: 13px; font-weight: 700;
    padding: 10px 16px; border-radius: 8px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.45);
    display: none; pointer-events: none;
    border: 1px solid rgba(255,255,255,0.25);
    letter-spacing: 0.3px;
  `;
  badge.innerHTML = "⚡ Modal";
  document.body.appendChild(badge);

  function updateBadge() {
    if (!results || !results.frequencies || results.frequencies.length === 0) {
      badge.style.display = "none";
      return;
    }
    const freq = results.frequencies[mode] ?? 0;
    const T = freq > 0 ? 1 / freq : 0;
    const mp = results.massParticipation?.[mode];
    const dirs = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"];
    let domDir = "—";
    if (mp) {
      let maxV = 0, maxI = 0;
      for (let i = 0; i < 6; i++) if (Math.abs(mp[i]) > maxV) { maxV = Math.abs(mp[i]); maxI = i; }
      domDir = `${dirs[maxI]} (${(maxV * 100).toFixed(0)}%)`;
    }
    badge.innerHTML = `⚡ Modo ${mode + 1} / ${results.frequencies.length} <br>` +
                      `<span style="color:#fde047">f = ${freq.toFixed(3)} Hz</span> · ` +
                      `<span style="color:#a5f3fc">T = ${T.toFixed(3)} s</span> <br>` +
                      `<span style="color:#86efac;font-size:11px">Dominante: ${domDir}</span>`;
    badge.style.display = "block";
  }

  // ── Core animation loop ────────────────────────────────────────────
  function getCtx() {
    return (viewerElm as any).__ctx as undefined | {
      scene: THREE.Scene;
      camera: THREE.Camera;
      render: () => void;
    };
  }

  function stopInternal(restore: boolean) {
    if (rafId) { cancelAnimationFrame(rafId); rafId = 0; }
    if (restore && originalNodes.length > 0) {
      mesh.nodes.val = originalNodes.map((n) => [...n] as Node);
    }
    badge.style.display = "none";
  }

  function startInternal() {
    if (!results || !results.modeShapes || results.modeShapes.length === 0) return;
    if (!results.modeShapes[mode]) return;
    stopInternal(false);

    const shape = results.modeShapes[mode];
    const freq = results.frequencies?.[mode] || 1;
    // Mapear frecuencia REAL → frecuencia VISIBLE: la primera frecuencia se
    // renderiza a 1 Hz; frecuencias mayores se aceleran pero con cap en visMax.
    const baseFreq = results.frequencies?.[0] || 1;
    const visFreq = Math.max(visMin, Math.min(visMax, (freq / baseFreq)));

    originalNodes = mesh.nodes.rawVal.map((n) => [...n] as Node);
    const nNodes = originalNodes.length;

    // Calcular escala para que la deformación visible sea scalePct% del modelo
    let xMin = Infinity, yMin = Infinity, zMin = Infinity;
    let xMax = -Infinity, yMax = -Infinity, zMax = -Infinity;
    for (const n of originalNodes) {
      if (n[0] < xMin) xMin = n[0]; if (n[0] > xMax) xMax = n[0];
      if (n[1] < yMin) yMin = n[1]; if (n[1] > yMax) yMax = n[1];
      if (n[2] < zMin) zMin = n[2]; if (n[2] > zMax) zMax = n[2];
    }
    const extent = Math.sqrt((xMax - xMin) ** 2 + (yMax - yMin) ** 2 + (zMax - zMin) ** 2) || 1;
    let maxDisp = 0;
    for (let i = 0; i < nNodes; i++) {
      const dx = shape[i * 6] || 0, dy = shape[i * 6 + 1] || 0, dz = shape[i * 6 + 2] || 0;
      const m = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (m > maxDisp) maxDisp = m;
    }
    const mScale = maxDisp > 1e-12 ? (extent * scalePct / 100) / maxDisp : 1;

    updateBadge();

    const t0 = performance.now();
    const tick = () => {
      const t = (performance.now() - t0) / 1000;
      const amp = Math.sin(2 * Math.PI * visFreq * t) * mScale;
      const newNodes: Node[] = new Array(nNodes);
      for (let i = 0; i < nNodes; i++) {
        const o = originalNodes[i];
        newNodes[i] = [
          o[0] + (shape[i * 6] || 0) * amp,
          o[1] + (shape[i * 6 + 1] || 0) * amp,
          o[2] + (shape[i * 6 + 2] || 0) * amp,
        ];
      }
      mesh.nodes.val = newNodes;
      // Forzar un render inmediato (sin esperar el debounce reactivo de van.derive)
      getCtx()?.render();
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
  }

  return {
    setResults(out) {
      results = out;
      if (mode >= (out?.frequencies?.length ?? 0)) mode = 0;
      updateBadge();
    },
    setMode(i) {
      if (!results) return;
      const n = results.frequencies?.length ?? 0;
      mode = Math.max(0, Math.min(n - 1, i));
      if (rafId !== 0) startInternal();  // reanimar con nuevo modo
      else updateBadge();
    },
    play() {
      if (!results) return;
      if (rafId === 0) startInternal();
    },
    stop() {
      stopInternal(true);
    },
    isPlaying() { return rafId !== 0; },
    modeCount() { return results?.frequencies?.length ?? 0; },
    currentMode() { return mode; },
    currentFreq() { return results?.frequencies?.[mode] ?? 0; },
    dispose() {
      stopInternal(true);
      badge.remove();
      results = null;
    },
  };
}
