import { State } from "vanjs-core";
import { html, render, TemplateResult } from "lit-html";
import { getThemeName, toggleTheme, onThemeChange } from "../theme";

import "./styles.css";

export function getToolbar({
  buttons,
  clickedButton,
  author,
  sourceCode,
}: {
  buttons?: string[];
  clickedButton?: State<string>;
  author?: string;
  sourceCode?: string;
}): HTMLElement {
  // Init
  const element = document.createElement("div");

  function themeLabel() {
    return getThemeName() === "dark" ? "\u2600" : "\u263E"; // sun / moon
  }

  const template = html`
    <div class="buttons-container">
      ${buttons?.map(
        (button) =>
          html`<button class="btn btn-text" @click=${onButtonClick}>
            ${button}
          </button>`
      )}
      <button class="btn btn-text btn-theme" @click=${onThemeClick} title="Toggle light/dark theme">
        ${themeLabel()}
      </button>
      <button class="btn btn-icon" @click=${onIconClick}>
        ${getAwatifSvg()}
      </button>
    </div>

    <div id="dropdown-menu" style="display: none;">
      <a
        href="${sourceCode ? sourceCode : "https://github.com/madil4/awatif"}"
        class="dropdown-link"
        >Source Code</a
      >
      ${author
        ? html`<a href="${author}" class="dropdown-link">Message Author</a>`
        : ""}
      <a href="https://awatif.co/examples" class="dropdown-link"
        >More Examples</a
      >
    </div>
  `;

  // Update
  element.id = "toolbar";

  render(template, element);

  // Keep theme button label in sync
  onThemeChange((name) => {
    const btn = element.querySelector(".btn-theme") as HTMLButtonElement;
    if (btn) btn.textContent = name === "dark" ? "\u2600" : "\u263E";
  });

  // Events
  // On button click set clickedButton value
  function onButtonClick(e: Event) {
    const button = e.target as HTMLButtonElement;
    clickedButton.val = ""; // A hack to trigger vanjs update
    setTimeout(() => (clickedButton.val = button.innerText));
  }

  // onThemeClick toggle dark/light
  function onThemeClick() {
    toggleTheme();
  }

  // onIconClick toggle dropdown menu
  function onIconClick(e: Event) {
    const dropdown = document.getElementById("dropdown-menu");
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  }

  return element;
}

// Utils
function getAwatifSvg(): TemplateResult {
  const base = window.location.pathname.replace(/\/[^/]*$/, '/');
  return html`<img src="${base}img/hekatan-logo.png" alt="Hekatan" style="width:22px;height:22px;border-radius:4px;">`;
}
