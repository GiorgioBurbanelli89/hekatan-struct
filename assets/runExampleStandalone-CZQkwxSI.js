import { v as c, P as _ } from "./theme-2eEBQPmF.js";
import { c as B, a as K, g as C } from "./getViewer-BrlnwplQ.js";
import { g as D } from "./styles-Cjdl64P4.js";
import { f as v, d as x, a as H, b as R, s as Y, c as X, m as J, e as q, t as A, g as G } from "./units-d0zQYQ9A.js";
c.derive(() => {
  B.val = v.val;
});
c.derive(() => {
  K.val = x.val;
});
function tt(p) {
  const S = c.state([]), T = c.state([]), P = c.state({}), O = c.state({}), U = c.state({}), k = c.state({}), $ = c.state([]), E = { nodes: S, elements: T, nodeInputs: P, elementInputs: O, deformOutputs: U, analyzeOutputs: k, objects3D: $ }, d = Object.fromEntries(Object.entries(p.params).map(([e, o]) => {
    const a = o.default;
    return o.unitType === "force" ? [e, H(a)] : o.unitType === "moment" ? [e, R(a)] : [e, a];
  })), N = () => {
    const e = { ...d };
    for (const [o, a] of Object.entries(p.params)) a.unitType === "force" && (e[o] = A(d[o])), a.unitType === "moment" && (e[o] = G(d[o]));
    return e;
  }, u = () => p.build(N(), E), n = document.createElement("div"), j = `hk_paneHostPos_${p.id}`, b = (() => {
    try {
      const e = localStorage.getItem(j);
      if (e) return JSON.parse(e);
    } catch {
    }
    return null;
  })();
  n.style.cssText = "position:fixed;" + (b ? `left:${b.left}px;top:${b.top}px;right:auto;` : "top:16px;right:16px;") + "width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:90vh;overflow-y:auto;font-size:12px;box-shadow:0 6px 24px rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.08);", document.body.appendChild(n);
  let y = null;
  const w = () => {
    y && y.dispose(), n.innerHTML = "";
    const e = new _({ container: n, title: p.name });
    y = e, setTimeout(() => {
      const s = n.querySelector(".tp-rotv_b, .tp-fldv_b");
      if (!s) return;
      s.style.cursor = "move", s.style.userSelect = "none";
      let t = false, r = 0, m = 0, i = 0, f = 0;
      s.addEventListener("mousedown", (l) => {
        t = true, r = l.clientX, m = l.clientY;
        const h = n.getBoundingClientRect();
        i = h.left, f = h.top, n.style.right = "auto", n.style.left = `${i}px`, n.style.top = `${f}px`, l.preventDefault();
      }), window.addEventListener("mousemove", (l) => {
        if (!t) return;
        const h = l.clientX - r, z = l.clientY - m, F = Math.max(0, Math.min(window.innerWidth - 40, i + h)), I = Math.max(0, Math.min(window.innerHeight - 40, f + z));
        n.style.left = `${F}px`, n.style.top = `${I}px`;
      }), window.addEventListener("mouseup", () => {
        if (t) {
          t = false;
          try {
            localStorage.setItem(j, JSON.stringify({ left: parseFloat(n.style.left), top: parseFloat(n.style.top) }));
          } catch {
          }
        }
      });
    }, 0);
    const o = e.addFolder({ title: "Unidades", expanded: false }), a = { force: v.val, disp: x.val };
    o.addBinding(a, "force", { label: "Fuerza", options: { kN: "kN", tonf: "tonf", kip: "kip" } }).on("change", (s) => {
      const t = v.val, r = s.value;
      if (t !== r) {
        const m = t === "kN" ? 1 : t === "tonf" ? 9.80665 : 4.4482216, i = r === "kN" ? 1 : r === "tonf" ? 9.80665 : 4.4482216;
        for (const [f, l] of Object.entries(p.params)) (l.unitType === "force" || l.unitType === "moment") && (d[f] = d[f] * m / i);
      }
      v.val = r, w(), u();
    }), o.addBinding(a, "disp", { label: "Desplazamiento", options: { mm: "mm", cm: "cm", m: "m", in: "in" } }).on("change", (s) => {
      x.val = s.value, w(), u();
    });
    const L = e.addFolder({ title: "Par\xE1metros" });
    let g = null;
    const M = () => {
      g !== null && clearTimeout(g), g = window.setTimeout(() => {
        g = null, u();
      }, 120);
    };
    for (const [s, t] of Object.entries(p.params)) {
      const r = Y(t.label ?? s), m = t.unitType === "force" ? ` ${X()}` : t.unitType === "moment" ? ` ${J()}` : t.unitType === "disp" ? ` ${q()}` : "", i = { label: r + m };
      t.options !== void 0 ? i.options = t.options : (t.min !== void 0 && (i.min = t.min), t.max !== void 0 && (i.max = t.max), t.step !== void 0 && (i.step = t.step)), L.addBinding(d, s, i).on("change", M);
    }
  };
  w(), document.body.append(C({ mesh: { nodes: S, elements: T, nodeInputs: P, elementInputs: O, deformOutputs: U, analyzeOutputs: k }, objects3D: $, settingsObj: { deformedShape: true, displayScale: -1.5, shellResults: p.defaultShellResult ?? "displacementZ", gridSize: 10, showCotas: true } }), D({ sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct", author: "https://www.linkedin.com/in/jorge-burbano-213741138/" })), u();
}
export {
  tt as r
};
