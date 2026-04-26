/**
 * Hace cualquier Tweakpane desplazable por su título (.tp-rotv_t).
 *
 * Estrategia: hacer que el .tp-rotv (root view) tenga position:fixed cuando
 * el usuario empieza a arrastrar. Esto despega el pane del flujo normal y
 * permite moverlo libre. Su posición inicial se calcula a partir del
 * boundingClientRect actual para que no salte visualmente.
 *
 * NO se previene el click: si el usuario hace click sin mover, Tweakpane
 * sigue colapsando/expandiendo el folder normalmente. Sólo si hay movimiento
 * mayor a 3px se considera drag.
 */

const DRAG_THRESHOLD = 3; // px

function attachDragToPane(paneRoot: HTMLElement): void {
  // Tweakpane v4 estructura: .tp-rotv > <button.tp-rotv_b> > .tp-rotv_t (texto)
  // El handle de drag es el <button> entero (todo el título es clickable).
  const titleBar = paneRoot.querySelector(":scope > .tp-rotv_b") as HTMLElement | null;
  if (!titleBar) return;
  if (titleBar.dataset.dragInit === "1") return;
  titleBar.dataset.dragInit = "1";

  // Cursor visual
  titleBar.style.cursor = "move";
  titleBar.style.userSelect = "none";

  let mouseDownX = 0;
  let mouseDownY = 0;
  let startLeft = 0;
  let startTop = 0;
  let isDown = false;
  let isDragging = false;

  const onMouseDown = (e: MouseEvent) => {
    if (e.button !== 0) return;
    isDown = true;
    isDragging = false;
    mouseDownX = e.clientX;
    mouseDownY = e.clientY;
    const rect = paneRoot.getBoundingClientRect();
    startLeft = rect.left;
    startTop = rect.top;
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDown) return;
    const dx = e.clientX - mouseDownX;
    const dy = e.clientY - mouseDownY;
    if (!isDragging) {
      // Iniciar drag sólo si el usuario realmente movió el mouse > threshold.
      // Esto preserva el click-to-collapse de Tweakpane si no hubo movimiento.
      if (Math.abs(dx) + Math.abs(dy) < DRAG_THRESHOLD) return;
      isDragging = true;
      // Despegar el pane: position fixed + coordenadas absolutas iniciales.
      paneRoot.style.position = "fixed";
      paneRoot.style.left = `${startLeft}px`;
      paneRoot.style.top = `${startTop}px`;
      paneRoot.style.right = "auto";
      paneRoot.style.bottom = "auto";
      paneRoot.style.zIndex = "10000";
      paneRoot.style.margin = "0";  // anula márgenes del flow normal
    }
    // Drag activo: actualizar posición.
    let newLeft = startLeft + dx;
    let newTop = startTop + dy;
    // Clamp dentro de viewport (deja al menos 50px visibles)
    const w = paneRoot.offsetWidth;
    newLeft = Math.max(-w + 50, Math.min(window.innerWidth - 50, newLeft));
    newTop = Math.max(0, Math.min(window.innerHeight - 30, newTop));
    paneRoot.style.left = `${newLeft}px`;
    paneRoot.style.top = `${newTop}px`;
    e.preventDefault();
  };

  const onMouseUp = () => {
    isDown = false;
    // No reseteamos isDragging acá — el siguiente mousedown lo hace.
  };

  // mousedown sólo en el título, mousemove/up en document para que funcione
  // aún si el cursor sale del título.
  titleBar.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
}

/**
 * Aplica drag a un Tweakpane específico (por su container DOM).
 */
export function makeDraggablePane(container: HTMLElement): void {
  const tryAttach = () => {
    const paneRoot = container.classList?.contains("tp-rotv")
      ? container
      : container.querySelector(".tp-rotv") as HTMLElement | null;
    if (!paneRoot) return false;
    attachDragToPane(paneRoot);
    return true;
  };
  if (tryAttach()) return;
  let attempts = 0;
  const interval = setInterval(() => {
    attempts++;
    if (tryAttach() || attempts > 30) clearInterval(interval);
  }, 100);
}

/**
 * Aplica drag a TODOS los Tweakpanes detectados (existentes y futuros).
 * Llamar una vez al cargar la página después de que los panes estén montados.
 */
export function enableDraggableAllPanes(): void {
  // Initial scan
  document.querySelectorAll<HTMLElement>(".tp-rotv").forEach(attachDragToPane);

  // Observe future
  const obs = new MutationObserver((muts) => {
    for (const m of muts) {
      m.addedNodes.forEach((n) => {
        if (!(n instanceof HTMLElement)) return;
        if (n.classList?.contains("tp-rotv")) {
          attachDragToPane(n);
        }
        n.querySelectorAll?.<HTMLElement>(".tp-rotv").forEach(attachDragToPane);
      });
    }
  });
  obs.observe(document.body, { childList: true, subtree: true });
}
