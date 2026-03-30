/**
 * Animated Help Tour — Interactive guided walkthrough
 * Highlights each UI element with a pulsing animation and tooltip.
 */

interface TourStep {
  selector: string;       // CSS selector of the element to highlight
  title: string;
  description: string;
  position?: "top" | "bottom" | "left" | "right";
  waitMs?: number;        // auto-advance delay (0 = manual click only)
}

const TOUR_STEPS: TourStep[] = [
  {
    selector: "#cad3d-panel",
    title: "FEM Studio",
    description: "Panel principal. Aqui controlas todo: ejemplos, vistas, herramientas de analisis.",
    position: "right",
  },
  {
    selector: '[data-ex="edificio"]',
    title: "Ejemplos Predefinidos",
    description: "Haz click en cualquier boton para cargar una estructura: Cercha, Portico, Torre, Edificio, etc.",
    position: "right",
  },
  {
    selector: '[data-view="3d"]',
    title: "Vistas",
    description: "Cambia entre vista 3D, Planta (Plan), Elevacion X (EX), Elevacion Y (EY).",
    position: "bottom",
  },
  {
    selector: "#cad3d-select",
    title: "Select (Seleccionar)",
    description: "Activa el modo seleccion. Haz click en elementos del modelo 3D para seleccionarlos. Ctrl+click para seleccion multiple.",
    position: "bottom",
  },
  {
    selector: "#cad3d-draw",
    title: "Draw (Dibujar)",
    description: "Dibuja nuevos elementos: lineas, arcos, nodos. Usa snap a grilla, nodos y puntos medios.",
    position: "bottom",
  },
  {
    selector: "#cad3d-inspect",
    title: "Inspect (Inspeccionar)",
    description: "Haz click en un elemento para ver su reporte FEM completo: 3 pestanas (Tabla, Matematica Explicada, Resumen) con funciones de forma, K local, transformacion T, fuerzas internas.",
    position: "bottom",
  },
  {
    selector: "#cad3d-export",
    title: "Export",
    description: "Exporta coordenadas, propiedades y resultados del modelo en formato texto/JSON.",
    position: "bottom",
  },
  {
    selector: '[data-preset="MKS"]',
    title: "Sistema de Unidades",
    description: "MKS (tonf, m), SI (kN, m), US (kip, in). Cambia las unidades de todo el modelo.",
    position: "bottom",
  },
  {
    selector: "#cad3d-modal",
    title: "Modal (Analisis Modal)",
    description: "Calcula frecuencias naturales, modos de vibracion y participacion de masa. Anima los modos con flechas de navegacion.",
    position: "bottom",
  },
  {
    selector: "#cad3d-fem-solver",
    title: "Report Explained",
    description: "Genera un reporte academico completo tipo libro de texto: funciones de forma, matrices B, D, K, transformacion, ensamblaje y solucion paso a paso.",
    position: "bottom",
  },
  {
    selector: "#cad3d-pushover",
    title: "Pushover",
    description: "Analisis pushover ciclico con histeresis. Visualiza curvas fuerza-desplazamiento.",
    position: "bottom",
  },
  {
    selector: "#cad3d-nonlinear",
    title: "Nonlinear",
    description: "Analisis no-lineal dinamico con material Steel02 (Menegotto-Pinto). Para BRBs y elementos con comportamiento histeretico.",
    position: "bottom",
  },
  {
    selector: "#cad3d-cmd",
    title: "Linea de Comandos",
    description: "Escribe comandos directamente: cad.galpon(12,20,6,3), cad.edificio(3,3,3,3), cad.help() para ver todos los comandos.",
    position: "top",
  },
  {
    selector: ".tp-dfwv", // Tweakpane settings panel
    title: "Settings (Configuracion)",
    description: "Controla la visualizacion: nodos, elementos, secciones, resultados de analisis, forma deformada, colores de esfuerzos.",
    position: "left",
  },
];

let tourActive = false;
let currentStep = 0;
let overlay: HTMLDivElement | null = null;
let spotlight: HTMLDivElement | null = null;
let tooltip: HTMLDivElement | null = null;
let helpBtn: HTMLButtonElement | null = null;

export function createHelpButton(): HTMLButtonElement {
  helpBtn = document.createElement("button");
  helpBtn.id = "help-tour-btn";
  helpBtn.innerHTML = "?";
  helpBtn.title = "Ayuda interactiva — Tour guiado";
  let minimized = false;
  const setStyle = (min: boolean) => {
    helpBtn!.style.cssText = min
      ? `position:fixed;bottom:5px;right:5px;z-index:9999999;width:20px;height:20px;border-radius:50%;background:#555;color:#aaa;border:1px solid #777;font-size:10px;cursor:pointer;opacity:0.5;transition:all 0.2s;`
      : `position:fixed;bottom:20px;right:20px;z-index:9999999;width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:2px solid rgba(255,255,255,0.3);font-size:18px;font-weight:bold;cursor:pointer;box-shadow:0 2px 10px rgba(0,102,204,0.3);transition:all 0.2s;font-family:'Arial Nova',sans-serif;`;
  };
  setStyle(false);

  // Right-click to minimize/restore
  helpBtn.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    minimized = !minimized;
    setStyle(minimized);
    helpBtn!.innerHTML = minimized ? "?" : "?";
  });

  helpBtn.addEventListener("mouseenter", () => {
    helpBtn!.style.transform = "scale(1.15)";
    helpBtn!.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
  });
  helpBtn.addEventListener("mouseleave", () => {
    helpBtn!.style.transform = "scale(1)";
    helpBtn!.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
  });

  helpBtn.addEventListener("click", () => {
    if (tourActive) {
      endTour();
    } else {
      startTour();
    }
  });

  // Add animation styles
  const style = document.createElement("style");
  style.textContent = `
    @keyframes helpPulse {
      0%, 100% { box-shadow: 0 4px 15px rgba(0,102,204,0.4); }
      50% { box-shadow: 0 4px 25px rgba(0,102,204,0.7), 0 0 0 8px rgba(0,102,204,0.1); }
    }
    @keyframes spotlightPulse {
      0%, 100% { box-shadow: 0 0 0 4px rgba(0,153,255,0.6), 0 0 0 9999px rgba(0,0,0,0.65); }
      50% { box-shadow: 0 0 0 8px rgba(0,153,255,0.3), 0 0 0 9999px rgba(0,0,0,0.65); }
    }
    @keyframes tooltipSlideIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes handPoint {
      0%, 100% { transform: translate(0, 0) rotate(-15deg); }
      50% { transform: translate(-5px, -8px) rotate(-15deg); }
    }
    .tour-hand {
      display: inline-block;
      font-size: 28px;
      animation: handPoint 1s ease-in-out infinite;
      margin-right: 6px;
    }
  `;
  document.head.appendChild(style);

  return helpBtn;
}

function startTour() {
  tourActive = true;
  currentStep = 0;
  if (helpBtn) {
    helpBtn.innerHTML = "✕";
    helpBtn.style.background = "linear-gradient(135deg, #cc3333, #ff4444)";
    helpBtn.style.animation = "none";
  }

  // Create overlay
  overlay = document.createElement("div");
  overlay.id = "tour-overlay";
  overlay.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `;
  document.body.appendChild(overlay);

  showStep(0);
}

function endTour() {
  tourActive = false;
  if (helpBtn) {
    helpBtn.innerHTML = "?";
    helpBtn.style.background = "linear-gradient(135deg, #0066cc, #0099ff)";
    helpBtn.style.animation = "helpPulse 2s infinite";
  }
  if (spotlight) { spotlight.remove(); spotlight = null; }
  if (tooltip) { tooltip.remove(); tooltip = null; }
  if (overlay) { overlay.remove(); overlay = null; }
}

function showStep(stepIndex: number) {
  if (stepIndex >= TOUR_STEPS.length) {
    showFinalMessage();
    return;
  }

  currentStep = stepIndex;
  const step = TOUR_STEPS[stepIndex];

  const target = document.querySelector(step.selector) as HTMLElement;
  if (!target) {
    showStep(stepIndex + 1);
    return;
  }

  // Scroll target into view if needed
  target.scrollIntoView({ behavior: "smooth", block: "nearest" });

  if (spotlight) spotlight.remove();
  if (tooltip) tooltip.remove();

  const rect = target.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const tooltipWidth = 320;
  const tooltipHeight = 180; // estimated

  // Create spotlight
  spotlight = document.createElement("div");
  spotlight.style.cssText = `
    position: fixed;
    left: ${rect.left - 6}px; top: ${rect.top - 6}px;
    width: ${rect.width + 12}px; height: ${rect.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `;
  document.body.appendChild(spotlight);

  // ── Dynamic tooltip positioning ──
  // Calculate available space in each direction
  const spaceRight = vw - rect.right;
  const spaceLeft = rect.left;
  const spaceBelow = vh - rect.bottom;
  const spaceAbove = rect.top;

  // Pick best position automatically (override hint if not enough space)
  let bestPos = step.position || "bottom";
  if (bestPos === "bottom" && spaceBelow < tooltipHeight + 20) bestPos = "top";
  if (bestPos === "top" && spaceAbove < tooltipHeight + 20) bestPos = "right";
  if (bestPos === "right" && spaceRight < tooltipWidth + 20) bestPos = "left";
  if (bestPos === "left" && spaceLeft < tooltipWidth + 20) bestPos = "bottom";

  let tooltipLeft: number, tooltipTop: number;
  let arrowCSS = "";

  switch (bestPos) {
    case "bottom":
      tooltipLeft = rect.left + rect.width / 2 - tooltipWidth / 2;
      tooltipTop = rect.bottom + 14;
      arrowCSS = `position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;`;
      break;
    case "top":
      tooltipLeft = rect.left + rect.width / 2 - tooltipWidth / 2;
      tooltipTop = rect.top - tooltipHeight - 14;
      arrowCSS = `position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;`;
      break;
    case "right":
      tooltipLeft = rect.right + 14;
      tooltipTop = rect.top + rect.height / 2 - tooltipHeight / 2;
      arrowCSS = `position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;`;
      break;
    case "left":
      tooltipLeft = rect.left - tooltipWidth - 14;
      tooltipTop = rect.top + rect.height / 2 - tooltipHeight / 2;
      arrowCSS = `position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;`;
      break;
  }

  // Clamp within viewport
  tooltipLeft = Math.max(10, Math.min(tooltipLeft, vw - tooltipWidth - 10));
  tooltipTop = Math.max(10, Math.min(tooltipTop, vh - tooltipHeight - 10));

  // Create tooltip div
  tooltip = document.createElement("div");
  tooltip.style.cssText = `
    position: fixed;
    left: ${tooltipLeft}px; top: ${tooltipTop}px;
    width: ${tooltipWidth}px;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    color: #e0e0e0;
    border: 2px solid #0099ff;
    border-radius: 12px;
    padding: 16px 18px;
    z-index: 9999992;
    pointer-events: auto;
    animation: tooltipSlideIn 0.3s ease-out;
    box-shadow: 0 8px 30px rgba(0,0,0,0.5);
    font-family: 'Segoe UI', sans-serif;
  `;

  tooltip.innerHTML = `
    <div style="${arrowCSS}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">👆</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${step.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${stepIndex + 1}/${TOUR_STEPS.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${step.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${stepIndex > 0 ? `<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">◀ Anterior</button>` : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${stepIndex < TOUR_STEPS.length - 1 ? "Siguiente ▶" : "Finalizar ✓"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${TOUR_STEPS.map((_, i) => `<div style="width:${i === stepIndex ? "16px" : "6px"};height:6px;border-radius:3px;background:${i === stepIndex ? "#0099ff" : i < stepIndex ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `;

  document.body.appendChild(tooltip);

  // Event handlers
  tooltip.querySelector("#tour-next")?.addEventListener("click", () => {
    showStep(stepIndex + 1);
  });
  tooltip.querySelector("#tour-prev")?.addEventListener("click", () => {
    showStep(stepIndex - 1);
  });

  // Keyboard navigation
  const keyHandler = (e: KeyboardEvent) => {
    if (!tourActive) { document.removeEventListener("keydown", keyHandler); return; }
    if (e.key === "ArrowRight" || e.key === "Enter") { showStep(stepIndex + 1); document.removeEventListener("keydown", keyHandler); }
    if (e.key === "ArrowLeft") { showStep(Math.max(0, stepIndex - 1)); document.removeEventListener("keydown", keyHandler); }
    if (e.key === "Escape") { endTour(); document.removeEventListener("keydown", keyHandler); }
  };
  document.addEventListener("keydown", keyHandler);
}

function showFinalMessage() {
  if (spotlight) { spotlight.remove(); spotlight = null; }
  if (tooltip) { tooltip.remove(); tooltip = null; }

  tooltip = document.createElement("div");
  tooltip.style.cssText = `
    position: fixed;
    left: 50%; top: 50%; transform: translate(-50%, -50%);
    width: 400px;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    color: #e0e0e0;
    border: 2px solid #00cc66;
    border-radius: 16px;
    padding: 30px;
    z-index: 9999992;
    pointer-events: auto;
    animation: tooltipSlideIn 0.3s ease-out;
    box-shadow: 0 8px 40px rgba(0,0,0,0.6);
    font-family: 'Segoe UI', sans-serif;
    text-align: center;
  `;
  tooltip.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">🎓</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `;
  document.body.appendChild(tooltip);

  tooltip.querySelector("#tour-done")?.addEventListener("click", () => endTour());
}
