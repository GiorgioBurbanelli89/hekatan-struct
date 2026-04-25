/**
 * Animación de carga cíclica AISC 341 App. K3 — replica el modo abaqus de
 * mostrar el modelo deformándose progresivamente bajo el protocolo de drift.
 *
 * Usa el mismo patrón que `animateMode` (modal) pero con la historia drift K3
 * en vez de oscilación sinusoidal. El factor de amplificación pulsa con
 * el drift relativo (drift_step / drift_max).
 *
 * USO en una conexión (RBS / BFP / End Plate):
 *
 *   import { startK3Animation, stopK3Animation } from "../shared/animateK3Cyclic";
 *
 *   if (p.animate_k3 > 0.5) {
 *     stopK3Animation();
 *     startK3Animation({
 *       driftHistory: thetaHistory,
 *       periodMs: p.animate_k3 < 1.5 ? 25 : 100,
 *       ampFactor: p.anim_amp,
 *       windowKey: "__bfpK3Anim",  // único por conexión
 *     });
 *   } else {
 *     stopK3Animation();
 *   }
 */

export interface K3AnimationConfig {
  /** Historia de drift (rad) generada por aiscK3StrainHistory(...) */
  driftHistory: number[];
  /** Período de cada frame en ms (25 ms = 40 Hz, 100 ms = 10 Hz) */
  periodMs: number;
  /** Factor de amplificación visual (default 30) */
  ampFactor: number;
  /** Key única en window para guardar el interval id (uno por tipo de conexión) */
  windowKey: string;
}

/** Detiene cualquier animación K3 previa con la mismo windowKey. */
export function stopK3Animation(windowKey?: string): void {
  if (windowKey) {
    const prev = (window as any)[windowKey];
    if (prev) {
      clearInterval(prev);
      (window as any)[windowKey] = null;
    }
  } else {
    // Si no se pasa windowKey, limpiar todos los conocidos
    for (const k of ["__rbsK3Anim", "__bfpK3Anim", "__endPlateK3Anim"]) {
      const prev = (window as any)[k];
      if (prev) {
        clearInterval(prev);
        (window as any)[k] = null;
      }
    }
  }
}

/**
 * Inicia animación cíclica K3. Espera a que el viewer esté en DOM (600ms),
 * luego pulsa `deformScale` siguiendo la historia de drift.
 */
export function startK3Animation(cfg: K3AnimationConfig): void {
  // Limpiar animación previa con la misma key
  stopK3Animation(cfg.windowKey);

  if (!cfg.driftHistory || cfg.driftHistory.length < 2) return;

  const driftMax = Math.max(...cfg.driftHistory.map((d) => Math.abs(d)));
  if (driftMax < 1e-9) return;

  let step = 0;
  setTimeout(() => {
    const findViewer = (): any => {
      const divs = document.querySelectorAll("div");
      for (const d of divs) if ((d as any).__settings && (d as any).__ctx) return d;
      return null;
    };
    const viewerEl = findViewer();
    if (!viewerEl) return;
    const settings = viewerEl.__settings;
    const ctx = viewerEl.__ctx;
    if (!settings?.deformScale || !ctx?.render) return;

    if (settings.deformedShape) settings.deformedShape.val = true;

    const id = setInterval(() => {
      const driftNow = cfg.driftHistory[step] ?? 0;
      const scale = (driftNow / driftMax) * cfg.ampFactor;
      settings.deformScale.val = scale;
      ctx.render?.();
      step = (step + 1) % cfg.driftHistory.length;
    }, cfg.periodMs);
    (window as any)[cfg.windowKey] = id;
  }, 600);
}
