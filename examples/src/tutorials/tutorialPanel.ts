/**
 * tutorialPanel.ts — Tutorial panel integration with the calc editor
 *
 * Opens the calc panel and adds a tutorial selector dropdown.
 * Each tutorial loads its code into the editor and auto-runs it.
 */

import { currentLang } from "../shared/i18n";
import type { Tutorial } from "./tutorialContent";

/**
 * Open the calc panel with tutorial selector.
 * Dynamically imports calcPanel and tutorialContent to avoid circular deps.
 */
export function openTutorialPanel(modelData: any) {
  Promise.all([
    import("../calc-editor/calcPanel"),
    import("./tutorialContent"),
  ]).then(([{ openCalcPanel }, { TUTORIALS }]) => {
    // Open the calc panel first
    openCalcPanel(modelData);

    // Wait for panel to render, then add tutorial UI
    setTimeout(() => {
      addTutorialSelector(TUTORIALS);
      // Load the first tutorial by default
      loadTutorial(TUTORIALS[0]);
    }, 100);
  });
}

/**
 * Add a tutorial dropdown selector to the calc toolbar.
 */
function addTutorialSelector(tutorials: Tutorial[]) {
  const toolbar = document.querySelector(".calc-toolbar-left");
  if (!toolbar || document.querySelector("#tutorial-selector")) return;

  const lang = currentLang();

  // Create container
  const container = document.createElement("span");
  container.style.cssText =
    "display:inline-flex;align-items:center;gap:4px;margin-left:8px;";

  // Label
  const label = document.createElement("span");
  label.textContent = lang === "es" ? "Tutorial:" : "Tutorial:";
  label.style.cssText = "color:#aaa;font-size:11px;white-space:nowrap;";
  container.appendChild(label);

  // Dropdown
  const select = document.createElement("select");
  select.id = "tutorial-selector";
  select.style.cssText = [
    "background:#2a2a2a",
    "color:#e0e0e0",
    "border:1px solid #555",
    "border-radius:3px",
    "padding:3px 6px",
    "font-size:11px",
    "max-width:220px",
    "cursor:pointer",
    "outline:none",
  ].join(";");

  // Placeholder option
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent =
    lang === "es" ? "-- Seleccionar tutorial --" : "-- Select tutorial --";
  placeholder.disabled = true;
  select.appendChild(placeholder);

  // Tutorial options
  tutorials.forEach((t, i) => {
    const opt = document.createElement("option");
    opt.value = String(i);
    opt.textContent = `${i + 1}. ${t.title[lang]}`;
    select.appendChild(opt);
  });

  // Select first tutorial
  select.value = "0";

  select.addEventListener("change", () => {
    const idx = parseInt(select.value);
    if (!isNaN(idx) && tutorials[idx]) {
      loadTutorial(tutorials[idx]);
    }
  });

  container.appendChild(select);
  toolbar.appendChild(container);
}

/**
 * Load a tutorial into the calc editor and auto-run it.
 */
function loadTutorial(tutorial: Tutorial) {
  const lang = currentLang();
  const editor = document.querySelector("#calc-editor") as HTMLTextAreaElement;
  if (!editor) return;

  // Set the code
  editor.value = tutorial.code[lang];

  // Trigger input event so the editor picks up the change
  editor.dispatchEvent(new Event("input", { bubbles: true }));

  // Auto-run after a short delay to let the editor process the input
  setTimeout(() => {
    const runBtn = document.querySelector("#calc-run") as HTMLButtonElement;
    if (runBtn) runBtn.click();
  }, 50);
}

/**
 * Remove the tutorial selector (cleanup).
 */
export function removeTutorialSelector() {
  const sel = document.querySelector("#tutorial-selector");
  if (sel && sel.parentElement) {
    sel.parentElement.remove();
  }
}
