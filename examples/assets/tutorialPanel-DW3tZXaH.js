const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./calcPanel-BcV0bfdm.js","./getMesh-B1dmlgUt.js","./__vite-browser-external-D7Ct-6yo.js","./pureFunctionsAny.generated-JAcEVsJ7.js","./analyze-ClLKGn9k.js","./didacticCpp-BGUxSkhs.js"])))=>i.map(i=>d[i]);
import { _ as d, __tla as __tla_0 } from "./didacticCpp-BGUxSkhs.js";
import { c as s } from "./i18n-B_HPMgm2.js";
let E;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  E = function(o) {
    Promise.all([
      d(() => import("./calcPanel-BcV0bfdm.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), __vite__mapDeps([0,1,2,3,4,5]), import.meta.url),
      d(() => import("./tutorialContent-D8uVwmxV.js"), [], import.meta.url)
    ]).then(([{ openCalcPanel: r }, { TUTORIALS: e }]) => {
      r(o), setTimeout(() => {
        m(e), p(e[0]);
      }, 100);
    });
  };
  function m(o) {
    const r = document.querySelector(".calc-toolbar-left");
    if (!r || document.querySelector("#tutorial-selector")) return;
    const e = s(), n = document.createElement("span");
    n.style.cssText = "display:inline-flex;align-items:center;gap:4px;margin-left:8px;";
    const c = document.createElement("span");
    c.textContent = "Tutorial:", c.style.cssText = "color:#aaa;font-size:11px;white-space:nowrap;", n.appendChild(c);
    const t = document.createElement("select");
    t.id = "tutorial-selector", t.style.cssText = [
      "background:#2a2a2a",
      "color:#e0e0e0",
      "border:1px solid #555",
      "border-radius:3px",
      "padding:3px 6px",
      "font-size:11px",
      "max-width:220px",
      "cursor:pointer",
      "outline:none"
    ].join(";");
    const l = document.createElement("option");
    l.value = "", l.textContent = e === "es" ? "-- Seleccionar tutorial --" : "-- Select tutorial --", l.disabled = true, t.appendChild(l), o.forEach((a, u) => {
      const i = document.createElement("option");
      i.value = String(u), i.textContent = `${u + 1}. ${a.title[e]}`, t.appendChild(i);
    }), t.value = "0", t.addEventListener("change", () => {
      const a = parseInt(t.value);
      !isNaN(a) && o[a] && p(o[a]);
    }), n.appendChild(t), r.appendChild(n);
  }
  function p(o) {
    const r = s(), e = document.querySelector("#calc-editor");
    e && (e.value = o.code[r], e.dispatchEvent(new Event("input", {
      bubbles: true
    })), setTimeout(() => {
      const n = document.querySelector("#calc-run");
      n && n.click();
    }, 50));
  }
});
export {
  __tla,
  E as openTutorialPanel
};
