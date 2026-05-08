/**
 * Derivación matemática FEM por elemento — render KaTeX.
 *
 * Renderiza con KaTeX cargado dinámicamente desde CDN (sin bundlear KaTeX
 * en hekatan-ui — el usuario solo lo paga si abre el panel Matemática).
 */
import type { InspectElementData } from "./getInspectPanel";
import type { FrameMatrices } from "./elementMath";

// Cache singleton de KaTeX cargado
let katexLoaded: Promise<any> | null = null;
function loadKatex(): Promise<any> {
  if (katexLoaded) return katexLoaded;
  katexLoaded = new Promise((resolve, reject) => {
    if ((window as any).katex) {
      resolve((window as any).katex);
      return;
    }
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css";
    document.head.appendChild(css);
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js";
    s.onload = () => resolve((window as any).katex);
    s.onerror = () => reject(new Error("Failed to load KaTeX"));
    document.head.appendChild(s);
  });
  return katexLoaded;
}

/** Renderiza la derivación FEM completa de un frame element en `target`.
 *  Usa KaTeX para fórmulas. Si KaTeX falla, muestra texto plano fallback. */
export async function renderElementMath(
  target: HTMLElement,
  data: InspectElementData,
  m: FrameMatrices,
): Promise<void> {
  target.innerHTML = "";

  // Header informativo (siempre visible incluso sin KaTeX)
  const ni = data.nodes[0], nj = data.nodes[1];
  const sections: Array<{ title: string; content: string[] }> = [
    {
      title: "1. Geometría del elemento",
      content: [
        `Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:`,
        `\\text{DOFs} = [u_x, u_y, u_z, \\theta_x, \\theta_y, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}`,
        `\\text{Nodo } i = (${ni[0].toFixed(2)}, ${ni[1].toFixed(2)}, ${ni[2].toFixed(2)})`,
        `\\text{Nodo } j = (${nj[0].toFixed(2)}, ${nj[1].toFixed(2)}, ${nj[2].toFixed(2)})`,
        `L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = ${m.L.toFixed(3)}`,
      ],
    },
    {
      title: "2. Funciones de forma",
      content: [
        `\\text{La viga usa } \\textbf{interpolación lineal} \\text{ para axial y torsión, } \\textbf{polinomios cúbicos de Hermite} \\text{ para flexión.}`,
        `\\textbf{2.1 Axial y Torsión (lineal)}`,
        `N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\xi = \\frac{x}{L} \\in [0,1]`,
        `\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1`,
        `\\textbf{2.2 Flexión (Hermite cúbicos)}`,
        `H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\quad \\text{(desplazamiento nodo } i\\text{)}`,
        `H_2(\\xi) = L\\,\\xi(1-\\xi)^2 \\quad \\text{(rotación nodo } i\\text{)}`,
        `H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\quad \\text{(desplazamiento nodo } j\\text{)}`,
        `H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\quad \\text{(rotación nodo } j\\text{)}`,
        `\\text{Curvatura: } \\kappa = \\frac{d^2 v}{dx^2} = \\frac{1}{L^2}\\sum_{i=1}^{4} \\frac{d^2 H_i}{d\\xi^2}\\,q_i`,
      ],
    },
    {
      title: "3. Matriz de rigidez local (12×12)",
      content: [
        `\\textbf{3.1 Bloque axial (DOFs } u_1, u_2\\text{):}`,
        `K_{a} = \\frac{EA}{L} \\begin{bmatrix} 1 & -1 \\\\ -1 & 1 \\end{bmatrix} = \\frac{${data.frameProps!.E.toExponential(2)} \\cdot ${data.frameProps!.A.toFixed(4)}}{${m.L.toFixed(3)}}`,
        `\\textbf{3.2 Bloque torsión (DOFs } \\theta_{x1}, \\theta_{x2}\\text{):}`,
        `K_{t} = \\frac{GJ}{L} \\begin{bmatrix} 1 & -1 \\\\ -1 & 1 \\end{bmatrix} = ${(data.frameProps!.G * data.frameProps!.J / m.L).toExponential(3)}`,
        `\\textbf{3.3 Bloque flexión plano xy (}I_z\\text{, DOFs } v, \\theta_z\\text{):}`,
        `K_{by} = \\frac{EI_z}{L^3} \\begin{bmatrix} 12 & 6L & -12 & 6L \\\\ 6L & 4L^2 & -6L & 2L^2 \\\\ -12 & -6L & 12 & -6L \\\\ 6L & 2L^2 & -6L & 4L^2 \\end{bmatrix}`,
        `\\textbf{3.4 Bloque flexión plano xz (}I_y\\text{, DOFs } w, \\theta_y\\text{):}`,
        `K_{bz} = \\frac{EI_y}{L^3} \\begin{bmatrix} 12 & -6L & -12 & -6L \\\\ -6L & 4L^2 & 6L & 2L^2 \\\\ -12 & 6L & 12 & 6L \\\\ -6L & 2L^2 & 6L & 4L^2 \\end{bmatrix}`,
      ],
    },
    {
      title: "4. Transformación local → global",
      content: [
        `\\textbf{T} \\text{ es block-diagonal con la matriz de rotación } R_{3 \\times 3} \\text{ repetida 4 veces:}`,
        `T_{12 \\times 12} = \\begin{bmatrix} R & 0 & 0 & 0 \\\\ 0 & R & 0 & 0 \\\\ 0 & 0 & R & 0 \\\\ 0 & 0 & 0 & R \\end{bmatrix}`,
        `\\text{Cosenos directores } R \\text{ del elemento (filas = ejes locales en globales):}`,
        `R = \\begin{bmatrix} ${m.R[0].map((v) => v.toFixed(3)).join(" & ")} \\\\ ${m.R[1].map((v) => v.toFixed(3)).join(" & ")} \\\\ ${m.R[2].map((v) => v.toFixed(3)).join(" & ")} \\end{bmatrix}`,
      ],
    },
    {
      title: "5. Ensamblaje a coordenadas globales",
      content: [
        `K_{\\text{global}}^e = T^T \\cdot K_{\\text{local}} \\cdot T \\quad (12 \\times 12)`,
        `\\text{Esta es la contribución del elemento al sistema global. Se ensambla:}`,
        `K_{\\text{sys}} = \\sum_e A_e^T \\cdot K_{\\text{global}}^e \\cdot A_e`,
        `\\text{donde } A_e \\text{ es la matriz de ensamblaje (gdofs locales → globales).}`,
      ],
    },
  ];

  // Render con fallback a texto plano si KaTeX falla
  let katex: any = null;
  try { katex = await loadKatex(); } catch (e) { console.warn("[Inspect] KaTeX no disponible:", e); }

  for (const sec of sections) {
    const secEl = document.createElement("div");
    Object.assign(secEl.style, { marginBottom: "18px" });
    const titleEl = document.createElement("div");
    titleEl.textContent = sec.title;
    Object.assign(titleEl.style, {
      fontWeight: "600", color: "#a5b4fc",
      marginBottom: "8px", fontSize: "12px",
    });
    secEl.appendChild(titleEl);

    for (const line of sec.content) {
      const lineEl = document.createElement("div");
      Object.assign(lineEl.style, {
        padding: "6px 10px", marginBottom: "4px",
        background: "rgba(255,255,255,0.04)", borderRadius: "4px",
        fontSize: "12px", lineHeight: "1.7",
      });
      if (katex) {
        try {
          katex.render(line, lineEl, { throwOnError: false, displayMode: true });
        } catch {
          lineEl.textContent = line;
        }
      } else {
        // Fallback: texto plano (sin LaTeX rendering)
        lineEl.textContent = line.replace(/\\\\/g, " | ").replace(/\\[a-zA-Z]+/g, "");
        lineEl.style.fontFamily = "ui-monospace, Menlo, monospace";
      }
      secEl.appendChild(lineEl);
    }
    target.appendChild(secEl);
  }
}
