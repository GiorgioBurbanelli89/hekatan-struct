/**
 * Barra de navegación compartida entre todas las diapositivas.
 *
 * Uso: cada slide HTML carga `<script src="./shared/nav.js"></script>` al final
 * del <body>. El script inserta una nav-bar fixed en bottom-center con prev/home/next.
 *
 * Detecta el slide actual por window.location.pathname.
 */
(function() {
  const SLIDES = [
    { file: "00_portada.html",                       title: "Portada" },
    { file: "01_fundamentos_fem.html",               title: "1. Fundamentos FEM" },
    { file: "02_intro_fem.html",                     title: "2. Discretización" },
    { file: "03_funciones_forma.html",               title: "3. Funciones de forma" },
    { file: "04_jacobiano_natural.html",             title: "4. Jacobiano · ξ" },
    { file: "05_matriz_rigidez_paso.html",           title: "5. K_e paso a paso" },
    { file: "06_matriz_masa_dinamica.html",          title: "6. M_e + dinámico" },
    { file: "07_cuadratura_gauss.html",              title: "7. Gauss" },
    { file: "08_loops_fem.html",                     title: "8. Loops FEM" },
    { file: "09_cpp_vs_matlab.html",                 title: "9. C++ vs MATLAB" },
    { file: "10_matematica_dada.html",               title: "10. Historia FEM" },
    { file: "11_arquitectura_hekatan.html",          title: "11. Arquitectura" },
    { file: "11b_estructura_e2k.html",               title: "11b. .e2k (ETABS)" },
    { file: "11c_estructura_f2k.html",               title: "11c. .f2k (SAFE)" },
    { file: "11d_estructura_s2k.html",               title: "11d. .s2k (SAP2000)" },
    { file: "12_paz_kim_6_3.html",                   title: "12. Paz & Kim 6.3" },
    { file: "12b_paz_13_1_space_frame.html",         title: "12b. Paz 13.1 Space" },
    { file: "13_analisis_estatico_dinamico.html",    title: "13. Análisis Hekatan" },
    { file: "14_modal_participacion_masa.html",      title: "14. Modal + masa partic." },
    { file: "15_diafragma_centros_pendiente.html",   title: "15. Diafragma + CM/CR" },
    { file: "16_validacion_cruzada.html",            title: "16. Validación" },
    { file: "17_hekatan_lab.html",                   title: "17. Hekatan Lab" },
    { file: "18_vista_workspace.html",               title: "18. Vista 2D/3D" },
  ];

  const path = window.location.pathname;
  const fname = path.split("/").pop() || "index.html";
  const idx = SLIDES.findIndex(s => s.file === fname);

  const bar = document.createElement("div");
  bar.className = "nav-bar";

  // Home
  const home = document.createElement("a");
  home.href = "./index.html";
  home.className = "nav-home";
  home.textContent = "⌂ índice";
  bar.appendChild(home);

  if (idx > 0) {
    const prev = document.createElement("a");
    prev.href = "./" + SLIDES[idx - 1].file;
    prev.className = "nav-prev";
    prev.textContent = "anterior";
    bar.appendChild(prev);
  }

  // Indicador de slide actual
  if (idx >= 0) {
    const curr = document.createElement("a");
    curr.className = "current";
    curr.textContent = `${idx + 1} / ${SLIDES.length}`;
    bar.appendChild(curr);
  }

  if (idx >= 0 && idx < SLIDES.length - 1) {
    const next = document.createElement("a");
    next.href = "./" + SLIDES[idx + 1].file;
    next.className = "nav-next";
    next.textContent = "siguiente";
    bar.appendChild(next);
  }

  document.body.appendChild(bar);

  // Atajos de teclado: ← / →
  document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight" && idx >= 0 && idx < SLIDES.length - 1) {
      window.location.href = "./" + SLIDES[idx + 1].file;
    } else if (e.key === "ArrowLeft" && idx > 0) {
      window.location.href = "./" + SLIDES[idx - 1].file;
    } else if (e.key === "h" || e.key === "H") {
      window.location.href = "./index.html";
    }
  });
})();
