import van, { State } from "vanjs-core";
import { fixedColorMapRange } from "../viewer/getViewer";

import "./styles.css";

export function getLegend(
  values: State<number[]>,
  numMarkerIntervals: number = 8
): HTMLDivElement {
  const legendElm = document.createElement("div");
  legendElm.id = "legend";

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
      i == 0 ? `0px` : `calc(${50 / numMarkerIntervals}vh - 1px)`;

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
