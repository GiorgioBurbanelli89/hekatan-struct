import van, { State } from "vanjs-core";
import { fixedColorMapRange, colorMapUnit } from "../viewer/getViewer";
import { colorMapPalette, legendGradientCss } from "./getColorMap";

import "./styles.css";

export function getLegend(
  values: State<number[]>,
  numMarkerIntervals: number = 8
): HTMLDivElement {
  const legendElm = document.createElement("div");
  legendElm.id = "legend";
  // Nº de intervalos → CSS var, para que los markers se espacien contra la
  // ALTURA REAL de la barra (--legend-h, que cambia en móvil) y no contra un
  // 50vh hardcodeado. Ver styles.css.
  legendElm.style.setProperty("--legend-n", String(numMarkerIntervals));
  // La barra de color usa la PALETA ACTIVA (no el gradiente hardcodeado del CSS) y se
  // actualiza al cambiar la paleta desde Settings — así la leyenda coincide con la malla.
  setTimeout(() => {
    van.derive(() => { void colorMapPalette.val; legendElm.style.background = legendGradientCss(); });
  });

  // Etiqueta de unidad arriba del legend (mm, kN/m², etc.).
  const unitLabel = document.createElement("div");
  unitLabel.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace";
  legendElm.appendChild(unitLabel);
  // setTimeout evita TDZ por import circular con getViewer (colorMapUnit aún no inicializado).
  setTimeout(() => {
    van.derive(() => { unitLabel.textContent = colorMapUnit.val ? `[${colorMapUnit.val}]` : ""; });
  });

  const markerRatios = Array.from(
    { length: numMarkerIntervals + 1 },
    (_, i) => i / numMarkerIntervals
  ).reverse();

  let markerElem: HTMLElement;
  let markerText: HTMLElement;
  markerRatios.forEach((_, i) => {
    markerElem = document.createElement("div");
    markerElem.id = `marker-${i}`;
    markerElem.className = "marker";
    markerElem.style.marginTop =
      i == 0 ? `0px` : `calc(var(--legend-h) / var(--legend-n) - 1px)`;

    markerText = document.createElement("p");
    markerText.id = `marker-text-${i}`;

    markerElem.append(markerText);
    legendElm.append(markerElem);
  });

  // Collect text elements for direct reference (avoid getElementById collisions)
  const textElements: HTMLElement[] = [];
  legendElm.querySelectorAll("p").forEach((p) => textElements.push(p as HTMLElement));

  // update marker values
  setTimeout(() => {
    van.derive(() => {
      // ensure update is done after all DOM elements are created
      markerRatios.forEach((ratio, i) => {
        const el = textElements[i];
        if (el) el.innerText = getMarkerValue(values.val, ratio).toString();
      });
    });
  });

  return legendElm;
}

// Utils
function getMarkerValue(values: number[], ratio: number) {
  // Si hay override fijo (ej. zapata: [0, 1.5×q_adm]), usarlo para el legend también
  const rng = fixedColorMapRange.val;
  if (rng) {
    return (rng[0] + ratio * (rng[1] - rng[0])).toPrecision(3);
  }
  const valid = values.filter((v) => Number.isFinite(v));
  if (valid.length === 0) return "0";
  let vMin = Math.min(...valid);
  const vMax = Math.max(...valid);
  if (vMin >= 0 && vMax > 0) vMin = 0;
  return (vMin + ratio * (vMax - vMin)).toPrecision(3);
}
