function f(t) {
  const e = t.querySelector(":scope > .tp-rotv_b");
  if (!e || e.dataset.dragInit === "1") return;
  e.dataset.dragInit = "1", e.style.cursor = "move", e.style.userSelect = "none";
  let r = 0, s = 0, l = 0, i = 0, a = false, c = false;
  const y = (n) => {
    if (n.button !== 0) return;
    a = true, c = false, r = n.clientX, s = n.clientY;
    const o = t.getBoundingClientRect();
    l = o.left, i = o.top;
  }, h = (n) => {
    if (!a) return;
    const o = n.clientX - r, m = n.clientY - s;
    if (!c) {
      if (Math.abs(o) + Math.abs(m) < 3) return;
      c = true, t.style.position = "fixed", t.style.left = `${l}px`, t.style.top = `${i}px`, t.style.right = "auto", t.style.bottom = "auto", t.style.zIndex = "10000", t.style.margin = "0";
    }
    let u = l + o, d = i + m;
    const g = t.offsetWidth;
    u = Math.max(-g + 50, Math.min(window.innerWidth - 50, u)), d = Math.max(0, Math.min(window.innerHeight - 30, d)), t.style.left = `${u}px`, t.style.top = `${d}px`, n.preventDefault();
  }, b = () => {
    a = false;
  };
  e.addEventListener("mousedown", y), document.addEventListener("mousemove", h), document.addEventListener("mouseup", b);
}
function v() {
  document.querySelectorAll(".tp-rotv").forEach(f), new MutationObserver((e) => {
    for (const r of e) r.addedNodes.forEach((s) => {
      var _a, _b;
      s instanceof HTMLElement && (((_a = s.classList) == null ? void 0 : _a.contains("tp-rotv")) && f(s), (_b = s.querySelectorAll) == null ? void 0 : _b.call(s, ".tp-rotv").forEach(f));
    });
  }).observe(document.body, { childList: true, subtree: true });
}
export {
  v as e
};
