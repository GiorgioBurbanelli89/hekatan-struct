/**
 * 💻 CLI Panel — terminal flotante para ejecutar comandos `cad.*`.
 *
 *  Estilo terminal clásica: input con prompt, output histórico arriba.
 *  Soporta:
 *    - Histórico con flechas ↑/↓
 *    - Auto-completar (Tab) sobre `cad.<method>`
 *    - Ctrl+L para limpiar
 *    - help / ? para ver comandos
 */
import { evalCliLine, getCliHelp, type CadApi } from "./cliCommands";

export interface CliPanelOptions {
  cad: CadApi;
  position?: { top?: number; right?: number; left?: number; bottom?: number };
  initiallyVisible?: boolean;
}

export interface CliPanelApi {
  el: HTMLDivElement;
  show(): void;
  hide(): void;
  toggle(): void;
  /** Ejecuta una línea programáticamente */
  exec(line: string): void;
  /** Imprime una línea de log (para feedback de operaciones del workspace) */
  log(msg: string, type?: "info" | "warn" | "error"): void;
  destroy(): void;
}

export function createCliPanel(opts: CliPanelOptions): CliPanelApi {
  const el = document.createElement("div");
  el.className = "hekatan-cli-panel";
  Object.assign(el.style, {
    position: "fixed",
    bottom: opts.position?.bottom != null ? `${opts.position.bottom}px` : "12px",
    right: opts.position?.right != null ? `${opts.position.right}px` : "12px",
    left: opts.position?.left != null ? `${opts.position.left}px` : "auto",
    width: "640px", height: "300px",
    background: "rgba(10,12,16,0.96)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "8px",
    boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
    color: "#86efac",
    fontFamily: "ui-monospace, Menlo, Consolas, monospace",
    fontSize: "12px",
    zIndex: "100",
    backdropFilter: "blur(6px)",
    display: opts.initiallyVisible ? "flex" : "none",
    flexDirection: "column",
    overflow: "hidden",
  });

  // Header
  const header = document.createElement("div");
  Object.assign(header.style, {
    display: "flex", alignItems: "center", gap: "8px",
    padding: "6px 10px", borderBottom: "1px solid rgba(255,255,255,0.1)",
    cursor: "move", userSelect: "none",
    background: "rgba(255,255,255,0.03)",
    color: "#a5b4fc", fontWeight: "600", fontSize: "12px",
  });
  const title = document.createElement("span");
  title.textContent = "💻 CLI";
  Object.assign(title.style, { flex: "1" });
  header.appendChild(title);
  const clearBtn = document.createElement("button");
  clearBtn.textContent = "Clear";
  Object.assign(clearBtn.style, {
    background: "transparent", border: "1px solid rgba(165,180,252,0.3)",
    color: "#a5b4fc", padding: "2px 8px", borderRadius: "3px",
    cursor: "pointer", fontSize: "10.5px",
  });
  clearBtn.onclick = () => { history.innerHTML = ""; };
  header.appendChild(clearBtn);
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "×";
  Object.assign(closeBtn.style, {
    background: "transparent", border: "none", color: "#e2e8f0",
    fontSize: "18px", cursor: "pointer", padding: "0 4px", lineHeight: "1",
  });
  closeBtn.onclick = () => api.hide();
  header.appendChild(closeBtn);
  el.appendChild(header);

  // History (output area)
  const history = document.createElement("div");
  Object.assign(history.style, {
    flex: "1", overflow: "auto", padding: "8px 12px",
    background: "rgba(0,0,0,0.4)",
  });
  el.appendChild(history);

  // Input row
  const inputRow = document.createElement("div");
  Object.assign(inputRow.style, {
    display: "flex", alignItems: "center",
    padding: "6px 12px", borderTop: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.02)",
  });
  const prompt = document.createElement("span");
  prompt.textContent = "› ";
  Object.assign(prompt.style, { color: "#fde68a", marginRight: "6px", fontWeight: "600" });
  inputRow.appendChild(prompt);
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "cad.addNode(0,0,0)  ·  type 'help'";
  Object.assign(input.style, {
    flex: "1", border: "none", background: "transparent",
    color: "#e2e8f0", outline: "none",
    fontFamily: "inherit", fontSize: "12px",
  });
  inputRow.appendChild(input);
  el.appendChild(inputRow);

  // Drag
  let dragOff: { x: number; y: number } | null = null;
  header.addEventListener("mousedown", (e) => {
    if (e.target !== header && e.target !== title) return;
    const r = el.getBoundingClientRect();
    dragOff = { x: e.clientX - r.left, y: e.clientY - r.top };
    e.preventDefault();
  });
  window.addEventListener("mousemove", (e) => {
    if (!dragOff) return;
    el.style.left = `${e.clientX - dragOff.x}px`;
    el.style.top = `${e.clientY - dragOff.y}px`;
    el.style.right = "auto"; el.style.bottom = "auto";
  });
  window.addEventListener("mouseup", () => { dragOff = null; });

  // History manager
  const hist: string[] = [];
  let histIdx = 0;

  function addLog(line: string, type: "info" | "warn" | "error" | "result" | "input" = "info") {
    const div = document.createElement("div");
    Object.assign(div.style, {
      padding: "1px 0", whiteSpace: "pre-wrap", wordBreak: "break-all",
    });
    if (type === "input") {
      div.innerHTML = `<span style="color:#fde68a">› </span><span style="color:#e2e8f0">${escapeHtml(line)}</span>`;
    } else if (type === "error") {
      Object.assign(div.style, { color: "#f87171" });
      div.textContent = `❌ ${line}`;
    } else if (type === "warn") {
      Object.assign(div.style, { color: "#fcd34d" });
      div.textContent = `⚠ ${line}`;
    } else if (type === "result") {
      Object.assign(div.style, { color: "#86efac" });
      div.textContent = `← ${line}`;
    } else {
      Object.assign(div.style, { color: "#cbd5e1" });
      div.textContent = line;
    }
    history.appendChild(div);
    history.scrollTop = history.scrollHeight;
  }

  function execLine(line: string) {
    if (!line.trim()) return;
    addLog(line, "input");
    hist.push(line); histIdx = hist.length;
    const res = evalCliLine(line, opts.cad);
    if (res.ok) {
      if (res.result !== undefined) {
        const repr = typeof res.result === "object"
          ? JSON.stringify(res.result, null, 2)
          : String(res.result);
        addLog(repr, "result");
      }
    } else {
      addLog(res.error ?? "unknown error", "error");
    }
  }

  // Greeting
  addLog(getCliHelp(), "info");

  // Input handling
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      execLine(input.value);
      input.value = "";
    } else if (e.key === "ArrowUp") {
      if (histIdx > 0) { histIdx--; input.value = hist[histIdx]; e.preventDefault(); }
    } else if (e.key === "ArrowDown") {
      if (histIdx < hist.length - 1) { histIdx++; input.value = hist[histIdx]; }
      else { histIdx = hist.length; input.value = ""; }
      e.preventDefault();
    } else if (e.key === "l" && e.ctrlKey) {
      history.innerHTML = "";
      e.preventDefault();
    } else if (e.key === "Tab") {
      // Simple autocomplete on cad.<method>
      const v = input.value;
      const m = v.match(/cad\.(\w*)$/);
      if (m) {
        const methods = Object.keys(opts.cad).filter((k) => typeof (opts.cad as any)[k] === "function");
        const matches = methods.filter((k) => k.startsWith(m[1]));
        if (matches.length === 1) {
          input.value = v.slice(0, -m[1].length) + matches[0] + "(";
        } else if (matches.length > 1) {
          addLog(matches.join("  "), "info");
        }
      }
      e.preventDefault();
    }
  });

  // Append to DOM (no se hacía antes y el panel nunca aparecía)
  document.body.appendChild(el);

  const api: CliPanelApi = {
    el,
    show() { el.style.display = "flex"; setTimeout(() => input.focus(), 50); },
    hide() { el.style.display = "none"; },
    toggle() { el.style.display === "none" ? api.show() : api.hide(); },
    exec(line) { execLine(line); },
    log(msg, type = "info") { addLog(msg, type); },
    destroy() { el.remove(); },
  };
  return api;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}
