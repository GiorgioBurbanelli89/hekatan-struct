/**
 * Ribbon CAD — el panel de dibujo empezado de cero, para comparar con el
 * Tweakpane. Se enciende con `?ribbon=1`; sin eso no aparece y todo sigue igual.
 *
 * POR QUE OTRO PANEL, y no seguir arreglando el que hay:
 *
 * El Tweakpane es una COLUMNA de botones de una línea cada uno. Con 19
 * herramientas + snaps + planos + ejes mide más que la pantalla, hay que
 * hacer scroll para llegar a "Borrar", y el ratón viaja de un lado al otro
 * de la pantalla entre el lienzo y el panel. Agrupar en carpetas lo acortó
 * pero añadió un clic para abrir el cajón: mejor, pero no cómodo.
 *
 * AutoCAD no se usa así. Se usa con la mano izquierda en el teclado y la
 * derecha en el ratón: se teclea `l` y ya estás dibujando. Los botones son
 * el respaldo, no el camino. Así que aquí:
 *
 *   1. Una FILA horizontal arriba, no una columna. Botones anchos con el
 *      icono y la LETRA del atajo a la vista, para aprenderse los atajos
 *      usándolos. La fila está pegada al lienzo, no al borde de la pantalla.
 *   2. La LETRA es la herramienta, como en AutoCAD: L línea · P polilínea ·
 *      R rectángulo · C círculo · A arco · Q área · K columna · M muro ·
 *      E borrar · S seleccionar · G rejilla. Sin Ctrl, sin Alt.
 *   3. Lo que NO se usa cada minuto (snaps finos, planos de referencia,
 *      niveles sueltos) no está: vive en el Tweakpane. Un panel de dibujo
 *      con TODO dentro es justo lo que hace que no quepa.
 *   4. La barra de estado dice qué se espera AHORA ("Línea — clic 1er
 *      punto"), que es el Dynamic Prompt de AutoCAD. Sin eso no se sabe si
 *      falta un clic o dos.
 *
 * La caja de comandos de abajo (`#hk3-cmdline`) ya existe y no se toca: es
 * la misma para los dos paneles.
 */

export interface RibbonHooks {
  /** Activa una herramienta ("line", "rect", "col", …). */
  setTool: (t: string) => void;
  /** Herramienta activa ahora, para pintar el botón encendido. */
  getTool: () => string | null;
  setView: (v: "plan" | "elevX" | "elevY" | "iso") => void;
  /** Plano de trabajo. */
  setPlane: (k: "xy" | "xz" | "yz") => void;
  /** Genera la rejilla completa (vanos X, vanos Y, alturas, columnas). */
  grid?: (vx: string, vy: string, vz: string, col: boolean) => void;
  /** Cierra el dibujo en curso (Esc). */
  finish?: () => void;
  undo?: () => void;
  clear?: () => void;
}

interface Herr {
  id: string; icono: string; nombre: string; tecla: string; ayuda: string;
}

/** Lo que se usa todo el rato. Lo demás NO entra aquí a propósito. */
const GRUPOS: Array<{ titulo: string; items: Herr[] }> = [
  {
    titulo: "Dibujar",
    items: [
      { id: "line",     icono: "／", nombre: "Línea",     tecla: "L", ayuda: "clic 1er punto, clic 2º. Sigue encadenando." },
      { id: "polyline", icono: "⌒", nombre: "Polilínea", tecla: "P", ayuda: "clics seguidos; Enter o clic derecho para terminar." },
      { id: "rect",     icono: "▭", nombre: "Rectáng.",  tecla: "R", ayuda: "clic 2 esquinas opuestas." },
      { id: "circle",   icono: "○", nombre: "Círculo",   tecla: "C", ayuda: "clic centro, clic radio (o teclea el radio)." },
      { id: "arc",      icono: "⌒", nombre: "Arco",      tecla: "A", ayuda: "clic inicio, medio y fin." },
    ],
  },
  {
    titulo: "Estructura",
    items: [
      { id: "col",  icono: "▌", nombre: "Columna", tecla: "K", ayuda: "teclea la altura + Enter, luego clic en la base." },
      { id: "wall", icono: "▥", nombre: "Muro",    tecla: "M", ayuda: "teclea la altura + Enter, luego 2 clics en la base." },
      { id: "area", icono: "▦", nombre: "Losa",    tecla: "Q", ayuda: "4 clics en orden, antihorario." },
    ],
  },
  {
    titulo: "Modificar",
    items: [
      { id: "select", icono: "🖱", nombre: "Selec.", tecla: "S", ayuda: "clic sobre un elemento. Ventana: arrastra." },
      { id: "delete", icono: "🗑", nombre: "Borrar", tecla: "E", ayuda: "pasa por encima (se pone rojo) y haz clic." },
    ],
  },
];

/** Monta el ribbon dentro de `host` (normalmente el contenedor del viewer). */
export function addCadRibbon(host: HTMLElement, hooks: RibbonHooks): HTMLElement {
  const barra = document.createElement("div");
  barra.id = "hk-ribbon";
  barra.style.cssText = [
    "position:absolute", "top:8px", "left:50%", "transform:translateX(-50%)",
    "z-index:60", "display:flex", "align-items:stretch", "gap:0",
    "background:rgba(15,23,42,.94)", "border:1px solid #1e3a4a",
    "border-radius:10px", "padding:5px", "backdrop-filter:blur(6px)",
    "box-shadow:0 6px 20px rgba(0,0,0,.45)",
    "font-family:system-ui,-apple-system,Segoe UI,sans-serif",
    "max-width:calc(100% - 24px)", "flex-wrap:wrap",
  ].join(";") + ";";

  const botones = new Map<string, HTMLButtonElement>();

  const pintarActivo = () => {
    const t = hooks.getTool();
    for (const [id, b] of botones) {
      const on = id === t;
      b.style.background = on ? "#0e7490" : "transparent";
      b.style.borderColor = on ? "#22d3ee" : "transparent";
      b.style.color = on ? "#ecfeff" : "#cbd5e1";
    }
  };

  const decir = (txt: string) => {
    const e = document.getElementById("hk-ribbon-estado");
    if (e) e.textContent = txt;
  };

  const usar = (h: Herr) => {
    hooks.setTool(h.id);
    pintarActivo();
    decir(`${h.nombre} — ${h.ayuda}`);
  };

  for (const g of GRUPOS) {
    const caja = document.createElement("div");
    caja.style.cssText = "display:flex;flex-direction:column;align-items:center;padding:0 7px;";
    const fila = document.createElement("div");
    fila.style.cssText = "display:flex;gap:3px;";
    for (const h of g.items) {
      const b = document.createElement("button");
      b.type = "button";
      b.title = `${h.nombre} (${h.tecla}) — ${h.ayuda}`;
      b.style.cssText = [
        "display:flex", "flex-direction:column", "align-items:center",
        "justify-content:center", "gap:1px",
        "width:52px", "height:46px", "cursor:pointer",
        "background:transparent", "border:1px solid transparent",
        "border-radius:7px", "color:#cbd5e1", "font-family:inherit",
        "transition:background .12s",
      ].join(";") + ";";
      b.innerHTML =
        `<span style="font-size:16px;line-height:1">${h.icono}</span>` +
        `<span style="font-size:10px;line-height:1.1">${h.nombre}</span>` +
        `<span style="font-size:8px;opacity:.55;line-height:1">${h.tecla}</span>`;
      b.addEventListener("click", () => usar(h));
      b.addEventListener("mouseenter", () => {
        if (hooks.getTool() !== h.id) b.style.background = "rgba(34,211,238,.13)";
      });
      b.addEventListener("mouseleave", pintarActivo);
      botones.set(h.id, b);
      fila.appendChild(b);
    }
    const rot = document.createElement("div");
    rot.textContent = g.titulo;
    rot.style.cssText = "font-size:9px;color:#64748b;margin-top:2px;letter-spacing:.4px";
    caja.appendChild(fila); caja.appendChild(rot);
    barra.appendChild(caja);

    const sep = document.createElement("div");
    sep.style.cssText = "width:1px;background:#1e3a4a;margin:4px 0;";
    barra.appendChild(sep);
  }

  // ── Rejilla: los tres campos y el botón, a la vista ────────────────────────
  // Es la forma rápida de arrancar una estructura desde cero, así que va en la
  // barra y no dentro de un cajón: escondida detrás de dos clics, no se usa.
  const cajaG = document.createElement("div");
  cajaG.style.cssText = "display:flex;flex-direction:column;align-items:center;padding:0 7px;";
  const filaG = document.createElement("div");
  filaG.style.cssText = "display:flex;gap:3px;align-items:center;";
  const campo = (ph: string, val: string, ancho: string) => {
    const i = document.createElement("input");
    i.type = "text"; i.value = val; i.placeholder = ph; i.title = ph;
    i.style.cssText = `width:${ancho};height:26px;background:#0a1622;border:1px solid #1e3a4a;` +
      "border-radius:5px;color:#cdeefb;font:12px Consolas,monospace;text-align:center;outline:none;";
    return i;
  };
  const inX = campo("Vanos en X, p.ej. 6,6,5 o 4x6", "4x6", "62px");
  const inY = campo("Vanos en Y", "3x5", "62px");
  const inZ = campo("Alturas de piso", "4x3", "56px");
  const bG = document.createElement("button");
  bG.type = "button";
  bG.textContent = "🏗 Rejilla";
  bG.title = "Genera ejes A,B,C… y 1,2,3…, los niveles y las columnas en los cruces (G)";
  bG.style.cssText = "height:26px;padding:0 10px;cursor:pointer;background:#0e7490;border:1px solid #22d3ee;" +
    "border-radius:6px;color:#ecfeff;font:600 11px inherit;";
  const lanzarGrid = () => {
    hooks.grid?.(inX.value, inY.value, inZ.value, true);
    decir(`Rejilla generada: X=${inX.value} · Y=${inY.value} · pisos=${inZ.value}`);
  };
  bG.addEventListener("click", lanzarGrid);
  for (const i of [inX, inY, inZ])
    i.addEventListener("keydown", (e) => { if (e.key === "Enter") lanzarGrid(); });
  filaG.append(inX, document.createTextNode("×"), inY, document.createTextNode("×"), inZ, bG);
  const rotG = document.createElement("div");
  rotG.textContent = "Rejilla  X × Y × pisos";
  rotG.style.cssText = "font-size:9px;color:#64748b;margin-top:2px;letter-spacing:.4px";
  cajaG.append(filaG, rotG);
  barra.appendChild(cajaG);

  const sep2 = document.createElement("div");
  sep2.style.cssText = "width:1px;background:#1e3a4a;margin:4px 0;";
  barra.appendChild(sep2);

  // ── Vistas ────────────────────────────────────────────────────────────────
  const cajaV = document.createElement("div");
  cajaV.style.cssText = "display:flex;flex-direction:column;align-items:center;padding:0 7px;";
  const filaV = document.createElement("div");
  filaV.style.cssText = "display:flex;gap:3px;";
  const VISTAS: Array<[string, string, string, () => void]> = [
    ["⬇", "Planta", "1", () => { hooks.setPlane("xy"); hooks.setView("plan"); }],
    ["➡", "Frente", "2", () => { hooks.setPlane("xz"); hooks.setView("elevX"); }],
    ["⬅", "Lado",   "3", () => { hooks.setPlane("yz"); hooks.setView("elevY"); }],
    ["🧊", "3D",     "4", () => hooks.setView("iso")],
  ];
  for (const [ic, nom, tecla, fn] of VISTAS) {
    const b = document.createElement("button");
    b.type = "button";
    b.title = `${nom} (${tecla})`;
    b.style.cssText = "display:flex;flex-direction:column;align-items:center;justify-content:center;" +
      "gap:1px;width:44px;height:46px;cursor:pointer;background:transparent;border:1px solid transparent;" +
      "border-radius:7px;color:#cbd5e1;font-family:inherit;";
    b.innerHTML = `<span style="font-size:15px;line-height:1">${ic}</span>` +
      `<span style="font-size:10px;line-height:1.1">${nom}</span>` +
      `<span style="font-size:8px;opacity:.55;line-height:1">${tecla}</span>`;
    b.addEventListener("click", () => { fn(); decir(`Vista: ${nom}`); });
    b.addEventListener("mouseenter", () => { b.style.background = "rgba(34,211,238,.13)"; });
    b.addEventListener("mouseleave", () => { b.style.background = "transparent"; });
    filaV.appendChild(b);
  }
  const rotV = document.createElement("div");
  rotV.textContent = "Vista";
  rotV.style.cssText = "font-size:9px;color:#64748b;margin-top:2px;letter-spacing:.4px";
  cajaV.append(filaV, rotV);
  barra.appendChild(cajaV);

  // ── Barra de estado: qué se espera AHORA (el Dynamic Prompt) ──────────────
  const estado = document.createElement("div");
  estado.id = "hk-ribbon-estado";
  estado.style.cssText = [
    "position:absolute", "top:74px", "left:50%", "transform:translateX(-50%)",
    "z-index:59", "padding:3px 12px", "border-radius:6px",
    "background:rgba(15,23,42,.9)", "border:1px solid #1e3a4a",
    "color:#94a3b8", "font:11px Consolas,monospace", "pointer-events:none",
    "white-space:nowrap",
  ].join(";") + ";";
  estado.textContent = "Teclea una letra o elige arriba — L línea · P polilínea · R rectángulo · K columna · G rejilla";

  if (getComputedStyle(host).position === "static") host.style.position = "relative";
  host.appendChild(barra);
  host.appendChild(estado);

  // ── Atajos de una tecla, como AutoCAD ─────────────────────────────────────
  // No se disparan si el foco está en una caja de texto: la de comandos de
  // abajo se queda enfocada a propósito, y sin esta guarda escribir "line"
  // activaría Losa con la L y Selección con la S mientras se teclea.
  const TECLA = new Map<string, Herr>();
  for (const g of GRUPOS) for (const h of g.items) TECLA.set(h.tecla.toLowerCase(), h);
  //
  // La caja de comandos de abajo se RE-ENFOCA sola cada 900 ms (para poder
  // teclear sin hacer clic). Si se descarta toda tecla que llegue con un campo
  // enfocado, funciona la primera y ninguna más: se probó y salían `l` sí,
  // `p`/`k`/`q` no, con la herramienta congelada en Línea.
  //
  // Se resuelve como en AutoCAD: con la caja de comandos VACÍA, una letra sola
  // ES el comando y actúa en el acto. En cuanto hay algo escrito, la letra es
  // texto y manda el Enter. Las demás cajas (los vanos de la rejilla) siempre
  // se respetan: ahí se escriben números.
  const CMD = "hk3-cmd-input";
  const enCampo = (e: EventTarget | null): boolean => {
    const n = e as HTMLElement | null;
    if (!n) return false;
    if (n.id === CMD) return (n as HTMLInputElement).value.trim().length > 0;
    return n.tagName === "INPUT" || n.tagName === "TEXTAREA" || n.tagName === "SELECT"
        || n.isContentEditable;
  };
  // Y hay que VACIAR la caja al consumir la tecla. `preventDefault()` no basta:
  // la caja de comandos tiene dos consolas sincronizadas que se escriben el
  // valor a mano, así que la letra entra igual. Medido: quedaba "l", "lp",
  // "lpk", "lpkq" — la primera tecla funcionaba y las demás las bloqueaba la
  // guarda de arriba al ver la caja con texto.
  const limpiarCmd = () => {
    for (const id of [CMD, "hk-dyn-input"]) {
      const i = document.getElementById(id) as HTMLInputElement | null;
      if (i) i.value = "";
    }
    const g = document.getElementById("hk3-cmd-ghost");
    if (g) g.innerHTML = "";
  };
  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.altKey || e.metaKey || enCampo(e.target)) return;
    const k = e.key.toLowerCase();
    const h = TECLA.get(k);
    if (h) { e.preventDefault(); usar(h); setTimeout(limpiarCmd, 0); return; }
    if (k === "g") { e.preventDefault(); lanzarGrid(); setTimeout(limpiarCmd, 0); return; }
    const v = ["1", "2", "3", "4"].indexOf(k);
    if (v >= 0) {
      e.preventDefault(); VISTAS[v][3](); decir(`Vista: ${VISTAS[v][1]}`);
      setTimeout(limpiarCmd, 0); return;
    }
    if (e.key === "Escape") { hooks.finish?.(); decir("Dibujo cerrado."); }
  }, true);

  (window as any).__hekatanRibbon = {
    usar: (id: string) => {
      for (const g of GRUPOS) for (const h of g.items) if (h.id === id) usar(h);
    },
    grid: lanzarGrid,
    estado: () => estado.textContent,
    herramientas: () => [...botones.keys()],
  };
  pintarActivo();
  return barra;
}
