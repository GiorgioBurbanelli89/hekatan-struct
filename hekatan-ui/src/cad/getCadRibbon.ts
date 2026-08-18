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
    // ── Lo que convierte un DIBUJO en un MODELO ──────────────────────────────
    // Se podian dibujar las nueve herramientas y el modelo no se resolvia
    // nunca, porque no habia forma de poner un apoyo ni una carga sin salir
    // del ribbon: 145 nudos, 121 tramos y cero resultados
    // (`node cli/ctl_solo_botones.mjs`). Una estructura sin apoyos no tiene
    // solucion — la matriz es singular — y sin cargas no se mueve.
    titulo: "Analizar",
    items: [
      { id: "apoyo", icono: "▲", nombre: "Apoyo", tecla: "F",
        ayuda: "clic sobre un nudo: lo empotra. Sin apoyos no hay solucion." },
      { id: "carga", icono: "↓", nombre: "Carga", tecla: "W",
        ayuda: "clic sobre un nudo: le pone la carga vertical de la casilla." },
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
      // Apoyo y carga no son un tool del motor (van por seleccion), asi que su
      // boton se enciende con el modo, no con `getTool()`.
      const on = (id === "apoyo" || id === "carga") ? modoAplicar === id
               : (modoAplicar === null && id === t);
      b.style.background = on ? "#0e7490" : "transparent";
      b.style.borderColor = on ? "#22d3ee" : "transparent";
      b.style.color = on ? "#ecfeff" : "#cbd5e1";
    }
  };

  // ── La REFERENCIA, siempre visible ────────────────────────────────────────
  //
  // «Uso la línea y dónde me referencio, no sé.» Al dibujar en una pantalla 3D
  // un clic es un rayo, no un punto: hasta que no se sabe CONTRA QUÉ PLANO
  // choca y a QUÉ COTA, no se sabe dónde cae. El programa lo sabía —lo tenía en
  // `workPlane` y `workZ`— y no lo decía en ninguna parte.
  //
  // Así que la barra dice siempre las tres cosas, en este orden: en qué plano
  // se está dibujando, a qué cota, y qué se espera ahora. Es lo que hace la
  // línea de estado de AutoCAD.
  let prompt = "Elige una herramienta arriba, o teclea su letra.";
  const refrescar = () => {
    const e = document.getElementById("hk-ribbon-estado");
    if (!e) return;
    const st = (window as any).__hekatanCadState?.get?.();
    const plano = st?.workPlane ?? "xy";
    const nombre = plano === "xy" ? "PLANTA (X-Y)"
                 : plano === "xz" ? "ALZADO FRONTAL (X-Z)" : "ALZADO LATERAL (Y-Z)";
    const z = Number(st?.workZ ?? 0);
    // La cota solo manda en planta; en un alzado el plano es vertical y pasa
    // por el origen, así que anunciar "Z=0" allí despistaría.
    const cota = plano === "xy" ? ` · cota Z = ${z.toFixed(2)} m` : "";
    // El plano vertical se ancla al ultimo punto dibujado, asi que hay que
    // decir POR DONDE corta: "alzado frontal" a secas no dice nada si no se
    // sabe a que Y esta. Es la pregunta de «no se por donde dibujar».
    const r = (window as any).__hekatanPuntoRef as number[] | undefined;
    const corte = plano === "xz" && r ? ` · pasa por Y = ${r[1].toFixed(2)} m`
                : plano === "yz" && r ? ` · pasa por X = ${r[0].toFixed(2)} m` : "";
    e.innerHTML =
      `<b style="color:#22d3ee">Dibujando en ${nombre}</b>` +
      `<span style="color:#64748b">${cota}${corte}</span>` +
      `<span style="color:#334155"> │ </span><span>${prompt}</span>`;
  };
  const decir = (txt: string) => { prompt = txt; refrescar(); };
  // El plano y la cota cambian desde el Tweakpane y desde las teclas 1/2/3,
  // que no pasan por aquí: se relee en vez de intentar enterarse de cada sitio.
  setInterval(() => {
    refrescar();
    // Y se repinta el boton encendido: la herramienta tambien la sueltan Esc y
    // la caja de comandos, que no pasan por aqui. Sin esto el boton "Linea"
    // seguia iluminado despues de pulsar Esc, o sea que la barra decia que
    // estabas dibujando cuando ya podias seleccionar.
    pintarActivo();
  }, 600);

  // ── Apoyo y carga: se aplican al nudo que se clique ───────────────────────
  //
  // No son herramientas de dibujo, asi que no crean un tool nuevo en el motor:
  // encienden la SELECCION —que ya sabe encontrar el nudo bajo el cursor— y en
  // cuanto hay algo seleccionado le aplican la propiedad por el mismo evento
  // `hk:property-applied` que usa el panel de propiedades. Reusar ese camino
  // evita una segunda forma de poner apoyos que despues no coincida con la
  // primera.
  let modoAplicar: "apoyo" | "carga" | null = null;
  const cargaVert = { kN: -10 };
  const aplicarASeleccion = () => {
    if (!modoAplicar) return;
    const sel = (window as any).__hekatanSelection as Set<string> | undefined;
    if (!sel || sel.size === 0) return;
    const pts = [...sel].filter((s) => s.startsWith("pt:"));
    if (!pts.length) return;
    const detail = modoAplicar === "apoyo"
      ? { kind: "nodes", ids: pts, prop: "supports",
          value: [true, true, true, true, true, true] }
      : { kind: "nodes", ids: pts, prop: "loads",
          value: [0, 0, cargaVert.kN, 0, 0, 0] };
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail }));
    decir(modoAplicar === "apoyo"
      ? `Apoyo puesto en ${pts.length} nudo${pts.length === 1 ? "" : "s"}. Segui clicando.`
      : `Carga de ${cargaVert.kN} kN en ${pts.length} nudo${pts.length === 1 ? "" : "s"}.`);
    sel.clear();
    try { (window as any).__hekatanRefreshSelection?.(); } catch {}
    try { (window as any).__hekatanRebuild?.(); } catch {}
  };

  const usar = (h: Herr) => {
    if (h.id === "apoyo" || h.id === "carga") {
      modoAplicar = h.id as "apoyo" | "carga";
      hooks.setTool("select");
      // En apoyo/carga el arrastre NO debe abrir una ventana de seleccion: se
      // va nudo a nudo. Es el unico caso que la bloquea, y se marca con su
      // nombre para no confundirlo con el estado normal.
      (window as any).__hekatanBloquearVentana = true;
      pintarActivo();
      decir(`${h.nombre} — ${h.ayuda}`);
      return;
    }
    modoAplicar = null;
    (window as any).__hekatanBloquearVentana = false;
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

  // ── EN ALTURA: lo que permite trabajar en 3D sin cambiar de vista ─────────
  //
  // El plano de trabajo decide donde cae el clic, asi que sin esto hay que ir
  // saltando de planta a alzado para cada cosa. Las dos piezas existian —la
  // cota Z en el Tweakpane y `__hekatanReplicateSelection` sin boton— pero lo
  // que no se ve, no se usa.
  //
  //   Cota Z    : sigue dibujando en planta, pero a otra altura.
  //   Subir     : copia lo dibujado a los pisos de arriba, como el
  //               "Replicate Linear" de ETABS. Es lo que convierte una planta
  //               en un edificio sin volver a dibujarla.
  const cajaZ = document.createElement("div");
  cajaZ.style.cssText = "display:flex;flex-direction:column;align-items:center;padding:0 7px;";
  const filaZ = document.createElement("div");
  filaZ.style.cssText = "display:flex;gap:3px;align-items:center;";
  const campoZ = (val: string, ancho: string, ayuda: string) => {
    const i = document.createElement("input");
    i.type = "text"; i.value = val; i.title = ayuda;
    i.style.cssText = `width:${ancho};height:26px;background:#0a1622;border:1px solid #1e3a4a;` +
      "border-radius:5px;color:#cdeefb;font:12px Consolas,monospace;text-align:center;outline:none;";
    return i;
  };
  const inCotaZ = campoZ("0", "48px", "Cota Z del plano de planta, en metros");
  const inAltPiso = campoZ("3", "44px", "Altura de piso para subir la planta, en metros");
  const inNumPisos = campoZ("3", "36px", "Cuantos pisos subir");
  const ponerZ = () => {
    const z = parseFloat(inCotaZ.value);
    if (!isFinite(z)) { inCotaZ.value = "0"; return; }
    const st = (window as any).__hekatanCadState?.get?.();
    if (st) st.workZ = z;
    hooks.setPlane("xy");
    hooks.setView("plan");
    decir(`Plano de planta a la cota Z = ${z.toFixed(2)} m. Lo que dibujes cae ahi.`);
    refrescar();
  };
  inCotaZ.addEventListener("change", ponerZ);
  inCotaZ.addEventListener("keydown", (e) => { if (e.key === "Enter") ponerZ(); });
  const bSubir = document.createElement("button");
  bSubir.type = "button";
  bSubir.textContent = "⇈ Subir";
  bSubir.title = "Copia lo dibujado a los pisos de arriba (Replicate Linear de ETABS)";
  bSubir.style.cssText = "height:26px;padding:0 9px;cursor:pointer;background:#0e7490;" +
    "border:1px solid #22d3ee;border-radius:6px;color:#ecfeff;font:600 11px inherit;";
  bSubir.addEventListener("click", () => {
    const h = parseFloat(inAltPiso.value), n = Math.max(1, Math.round(parseFloat(inNumPisos.value) || 1));
    if (!isFinite(h) || h === 0) { decir("La altura de piso tiene que ser un numero distinto de 0."); return; }
    const w = window as any;
    const sel: Set<string> | undefined = w.__hekatanSelection;
    if (!sel) { decir("No se puede replicar: no hay seleccion disponible."); return; }
    // Sin nada seleccionado se sube TODO, que es lo que se quiere el 90 % de
    // las veces: "esta planta, a los pisos de arriba".
    if (sel.size === 0) {
      (w.__hekatanDrawingPoints?.val ?? []).forEach((_: any, i: number) => sel.add("pt:" + i));
      (w.__hekatanDrawingPolylines?.val ?? []).forEach((_: any, i: number) => sel.add("poly:" + i));
    }
    const hechas = w.__hekatanReplicateSelection?.(0, 0, h, n) ?? 0;
    sel.clear();
    try { w.__hekatanRefreshSelection?.(); } catch {}
    try { w.__hekatanRebuild?.(); } catch {}
    decir(`${hechas} copia${hechas === 1 ? "" : "s"} cada ${h} m. Ya hay ${n + 1} plantas.`);
  });
  filaZ.append(inCotaZ, bSubir, inAltPiso, document.createTextNode("×"), inNumPisos);
  const rotZ = document.createElement("div");
  rotZ.textContent = "Cota Z · subir alt × nº";
  rotZ.style.cssText = "font-size:9px;color:#64748b;margin-top:2px;letter-spacing:.4px";
  cajaZ.append(filaZ, rotZ);
  barra.appendChild(cajaZ);
  const sepZ = document.createElement("div");
  sepZ.style.cssText = "width:1px;background:#1e3a4a;margin:4px 0;";
  barra.appendChild(sepZ);

  // Cuanta carga pone el boton Carga. Sin la casilla habria que adivinar el
  // valor o irse al panel: la carga es un NUMERO, no un gesto.
  const cajaC = document.createElement("div");
  cajaC.style.cssText = "display:flex;flex-direction:column;align-items:center;padding:0 7px;";
  const inC = document.createElement("input");
  inC.type = "text"; inC.value = "-10";
  inC.title = "Carga vertical por nudo, en kN. Negativa = hacia abajo.";
  inC.style.cssText = "width:58px;height:26px;background:#0a1622;border:1px solid #1e3a4a;" +
    "border-radius:5px;color:#cdeefb;font:12px Consolas,monospace;text-align:center;outline:none;";
  inC.addEventListener("change", () => {
    const v = parseFloat(inC.value);
    if (isFinite(v)) cargaVert.kN = v; else inC.value = String(cargaVert.kN);
  });
  const rotC = document.createElement("div");
  rotC.textContent = "Carga (kN)";
  rotC.style.cssText = "font-size:9px;color:#64748b;margin-top:2px;letter-spacing:.4px";
  cajaC.append(inC, rotC);
  barra.appendChild(cajaC);

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

  // ── GUÍA dentro del programa (botón ? y F1) ───────────────────────────────
  //
  // Sin esto hay que adivinar: no se sabe por dónde empezar, ni que existen
  // los atajos, ni —lo más importante— que el clic cae SIEMPRE sobre el plano
  // de trabajo. Es la primera pregunta que hace cualquiera y no estaba escrita
  // en ningún sitio de la pantalla.
  const bAyuda = document.createElement("button");
  const guia = document.createElement("div");
  guia.id = "hk-ribbon-guia";
  guia.style.cssText = [
    "position:absolute", "top:50%", "left:50%", "transform:translate(-50%,-50%)",
    "z-index:70", "display:none", "max-width:640px", "padding:20px 24px",
    "background:rgba(10,18,32,.97)", "border:1px solid #22d3ee",
    "border-radius:12px", "box-shadow:0 10px 40px rgba(0,0,0,.6)",
    "color:#cbd5e1", "font:13px/1.65 system-ui,-apple-system,Segoe UI,sans-serif",
  ].join(";") + ";";
  guia.innerHTML = `
    <div style="font:600 16px inherit;color:#22d3ee;margin-bottom:2px">Cómo dibujar aquí</div>
    <div style="color:#64748b;font-size:11px;margin-bottom:14px">? o F1 para abrir y cerrar · Esc también cierra</div>

    <div style="color:#e2e8f0;font-weight:600;margin-bottom:4px">1 · Lo primero: el plano de trabajo</div>
    <p style="margin:0 0 12px">
      La pantalla es 3D, así que un clic no es un punto: es un rayo. Cae siempre
      sobre el <b style="color:#22d3ee">plano de trabajo</b>, que es el que dice
      la barra de abajo. Con <b>1</b> dibujas en planta a la cota Z que marque;
      con <b>2</b> y <b>3</b>, en los dos alzados. <b>4</b> gira a 3D para mirar
      —no para dibujar.
    </p>

    <div style="color:#e2e8f0;font-weight:600;margin-bottom:4px">2 · El camino corto: la rejilla</div>
    <p style="margin:0 0 12px">
      Escribe los vanos arriba —<code style="color:#22d3ee">4x6</code> son 4 de
      6 m, y <code style="color:#22d3ee">6,6,5</code> son tres vanos
      distintos— y aprieta <b>🏗 Rejilla</b>. Salen los ejes A,B,C… y 1,2,3…, los
      niveles y las columnas en cada cruce. Es la forma rápida de arrancar.
    </p>

    <div style="color:#e2e8f0;font-weight:600;margin-bottom:4px">3 · Dibujar a mano</div>
    <p style="margin:0 0 12px">
      Teclea <b>L</b> y haz clic: la línea <b>encadena</b>, cada clic sigue del
      anterior. <b>Esc</b> la corta. Para medidas exactas no uses el ojo:
      escribe en la caja de comandos de abajo
      <code style="color:#22d3ee">6,0,0</code> (punto exacto),
      <code style="color:#22d3ee">@6,0</code> (desde el último) o
      <code style="color:#22d3ee">@6&lt;45</code> (distancia y ángulo).
    </p>

    <div style="color:#e2e8f0;font-weight:600;margin-bottom:4px">Las teclas</div>
    <table style="border-collapse:collapse;font-size:12px">
      <tr><td style="padding:1px 14px 1px 0"><b>L</b> línea · <b>P</b> polilínea · <b>R</b> rectángulo</td>
          <td><b>K</b> columna · <b>M</b> muro · <b>Q</b> losa</td></tr>
      <tr><td style="padding:1px 14px 1px 0"><b>C</b> círculo · <b>A</b> arco · <b>S</b> seleccionar</td>
          <td><b>E</b> borrar · <b>G</b> rejilla · <b>Esc</b> terminar</td></tr>
      <tr><td style="padding:1px 14px 1px 0"><b>1</b> planta · <b>2</b> frente · <b>3</b> lado · <b>4</b> 3D</td>
          <td><b>F8</b> orto · <b>F9</b> imán · <b>Ctrl+Z</b> deshacer</td></tr>
    </table>
    <div style="margin-top:14px;color:#64748b;font-size:11px">
      El imán engancha a nudos y puntos medios. Si te roba el clic donde no
      quieres, apagalo con F9.
    </div>`;

  const verGuia = (v?: boolean) => {
    const on = v ?? (guia.style.display === "none");
    guia.style.display = on ? "block" : "none";
  };
  // Un clic en cualquier otro sitio la cierra. Sin esto la guia se abre sola
  // encima del lienzo y SE COME LOS CLICS: se intenta dibujar, no pasa nada, y
  // no hay forma evidente de quitarla. Lo cazó el test del panel viejo, que se
  // quedaba en 0 nudos.
  window.addEventListener("pointerdown", (e) => {
    if (guia.style.display === "none") return;
    if (guia.contains(e.target as Node) || bAyuda.contains(e.target as Node)) return;
    verGuia(false);
  }, true);

  bAyuda.type = "button";
  bAyuda.textContent = "?";
  bAyuda.title = "Cómo dibujar aquí (F1)";
  bAyuda.style.cssText = "width:26px;height:26px;margin-left:6px;cursor:pointer;" +
    "background:transparent;border:1px solid #22d3ee;border-radius:50%;color:#22d3ee;" +
    "font:600 13px inherit;align-self:center;";
  bAyuda.addEventListener("click", () => verGuia());
  barra.appendChild(bAyuda);

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

  // El motor selecciona DESPUES de procesar el clic, asi que se mira un
  // instante mas tarde. 120 ms basta y no se nota.
  host.addEventListener("click", (e) => {
    if (!modoAplicar) return;
    const t = e.target as HTMLElement | null;
    if (t && (t.closest("#hk-ribbon") || t.closest("#hk-ribbon-guia"))) return;
    setTimeout(aplicarASeleccion, 120);
  }, true);

  if (getComputedStyle(host).position === "static") host.style.position = "relative";
  host.appendChild(barra);
  host.appendChild(estado);
  host.appendChild(guia);
  // Se abre sola la PRIMERA vez y nunca mas: quien entra por primera vez no
  // sabe ni que existe la tecla ?, y quien ya la leyo no quiere volver a
  // cerrarla en cada carga.
  try {
    if (!localStorage.getItem("hk_guia_vista")) {
      verGuia(true);
      localStorage.setItem("hk_guia_vista", "1");
    }
  } catch { /* sin localStorage: no se abre sola */ }
  refrescar();

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
    // F1 y ? funcionan SIEMPRE, tambien escribiendo en la caja de comandos:
    // la ayuda es lo unico que hay que poder pedir estando perdido.
    if (e.key === "F1" || e.key === "?") { e.preventDefault(); verGuia(); return; }
    if (e.key === "Escape" && guia.style.display !== "none") {
      e.preventDefault(); verGuia(false); return;
    }
    if (e.ctrlKey || e.altKey || e.metaKey || enCampo(e.target)) return;
    const k = e.key.toLowerCase();
    const h = TECLA.get(k);
    if (h) { e.preventDefault(); usar(h); setTimeout(limpiarCmd, 0); return; }
    if (k === "g") { e.preventDefault(); lanzarGrid(); setTimeout(limpiarCmd, 0); return; }
    // ⚠️ Los DIGITOS no se capturan si el foco esta en la caja de comandos,
    // aunque este vacia. Alli un digito es el principio de una COORDENADA:
    // al escribir `4,0,6` el "4" cambiaba la vista a 3D y se lo comia, asi
    // que el punto acababa cayendo en el plano de trabajo y se perdia la Z.
    // Las letras si se capturan (una letra sola ES el comando, como AutoCAD);
    // los numeros, nunca.
    const enCmd = (e.target as HTMLElement | null)?.id === CMD;
    const v = enCmd ? -1 : ["1", "2", "3", "4"].indexOf(k);
    if (v >= 0) {
      e.preventDefault(); VISTAS[v][3](); decir(`Vista: ${VISTAS[v][1]}`);
      setTimeout(limpiarCmd, 0); return;
    }
    if (e.key === "Escape") { hooks.finish?.(); decir("Dibujo cerrado."); }
  }, true);

  (window as any).__hekatanRibbon = {
    guia: verGuia,
    modo: () => modoAplicar,
    aplicar: aplicarASeleccion,
    cargaKN: (v?: number) => { if (v !== undefined) { cargaVert.kN = v; inC.value = String(v); }
                               return cargaVert.kN; },
    guiaVisible: () => guia.style.display !== "none",
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
