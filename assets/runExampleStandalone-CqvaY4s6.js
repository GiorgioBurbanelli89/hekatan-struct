import { _ as T, __tla as __tla_0 } from "./deform-CGyu4ATa.js";
import { v as _, P as H } from "./theme-2eEBQPmF.js";
import { c as V, a as X, g as Y } from "./getViewer-Cvb8t1A3.js";
import { g as G } from "./styles-Cjdl64P4.js";
import { f as g, d as $, a as J, b as W, s as Q, c as tt, m as et, e as ot, t as nt, g as at } from "./units-d0zQYQ9A.js";
let dt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  _.derive(() => {
    V.val = g.val;
  });
  _.derive(() => {
    X.val = $.val;
  });
  dt = function(d) {
    const E = _.state([]), M = _.state([]), O = _.state({}), N = _.state({}), B = _.state({}), j = _.state({}), D = _.state([]), w = {
      nodes: E,
      elements: M,
      nodeInputs: O,
      elementInputs: N,
      deformOutputs: B,
      analyzeOutputs: j,
      objects3D: D
    }, i = Object.fromEntries(Object.entries(d.params).map(([r, l]) => {
      const u = l.default;
      return l.unitType === "force" ? [
        r,
        J(u)
      ] : l.unitType === "moment" ? [
        r,
        W(u)
      ] : [
        r,
        u
      ];
    })), v = () => {
      const r = {
        ...i
      };
      for (const [l, u] of Object.entries(d.params)) u.unitType === "force" && (r[l] = nt(i[l])), u.unitType === "moment" && (r[l] = at(i[l]));
      return r;
    };
    let f = null, P = null;
    const k = () => {
      if (d.build(v(), w), d.computedLabels && f && P) {
        const r = d.computedLabels(v(), w);
        for (const l of Object.keys(f)) l in r && (f[l] = r[l]);
        for (const l of Object.keys(r)) l in f || (f[l] = r[l]);
        P.refresh();
      }
    }, p = document.createElement("div"), U = `hk_paneHostPos_${d.id}`, F = (() => {
      try {
        const r = localStorage.getItem(U);
        if (r) return JSON.parse(r);
      } catch {
      }
      return null;
    })();
    p.style.cssText = "position:fixed;" + (F ? `left:${F.left}px;top:${F.top}px;right:auto;` : "top:16px;right:16px;") + "width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:90vh;overflow-y:auto;font-size:12px;box-shadow:0 6px 24px rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.08);", document.body.appendChild(p);
    let z = null;
    const x = () => {
      z && z.dispose(), p.innerHTML = "";
      const r = new H({
        container: p,
        title: d.name
      });
      if (z = r, P = r, setTimeout(() => {
        const o = p.querySelector(".tp-rotv_b, .tp-fldv_b");
        if (!o) return;
        o.style.cursor = "move", o.style.userSelect = "none";
        let a = false, s = 0, e = 0, c = 0, t = 0;
        o.addEventListener("mousedown", (n) => {
          a = true, s = n.clientX, e = n.clientY;
          const m = p.getBoundingClientRect();
          c = m.left, t = m.top, p.style.right = "auto", p.style.left = `${c}px`, p.style.top = `${t}px`, n.preventDefault();
        }), window.addEventListener("mousemove", (n) => {
          if (!a) return;
          const m = n.clientX - s, y = n.clientY - e, b = Math.max(0, Math.min(window.innerWidth - 40, c + m)), L = Math.max(0, Math.min(window.innerHeight - 40, t + y));
          p.style.left = `${b}px`, p.style.top = `${L}px`;
        }), window.addEventListener("mouseup", () => {
          if (a) {
            a = false;
            try {
              localStorage.setItem(U, JSON.stringify({
                left: parseFloat(p.style.left),
                top: parseFloat(p.style.top)
              }));
            } catch {
            }
          }
        });
      }, 0), d.id.startsWith("zapata")) {
        const o = r.addFolder({
          title: "\u{1F4C4} SAFE F2K",
          expanded: false
        });
        o.addButton({
          title: "\u{1F4E4} Exportar a SAFE (.f2k)"
        }).on("click", async () => {
          try {
            const { downloadZapataF2k: s } = await T(async () => {
              const { downloadZapataF2k: Z } = await import("./f2kExporter-COIU6xYe.js");
              return {
                downloadZapataF2k: Z
              };
            }, []), e = i, c = e.ks_factor ?? 10.5, t = e.q_adm ?? 20, n = c * t * 9.80665, m = (e.useSimple ?? 1) >= 0.5, y = m ? (e.P_simple ?? 0) * 9.80665 : (e.P_D ?? 10) * 9.80665, b = m ? 0 : (e.P_L ?? 5) * 9.80665, L = m ? (e.Mx_simple ?? 0) * 9.80665 : (e.Mx_D ?? 0) * 9.80665, A = m ? (e.My_simple ?? 0) * 9.80665 : (e.My_D ?? 0) * 9.80665;
            s({
              Lz: e.Lz ?? 1.5,
              Bz: e.Bz ?? 1.5,
              tz: e.tz ?? 0.3,
              bc: e.bc ?? 0.4,
              ks_kNm3: n,
              P_dead_kN: y,
              P_live_kN: b,
              Mx_dead_kNm: L,
              My_dead_kNm: A
            }, `Zapata_Hekatan_${Date.now()}.f2k`), alert(`F2K descargado.
ks=${n.toFixed(0)} kN/m\xB3, P_dead=${y.toFixed(1)} kN.
Abrilo en SAFE: File \u2192 Import \u2192 SAFE Text File.`);
          } catch (s) {
            alert(`Error: ${(s == null ? void 0 : s.message) ?? s}`);
          }
        });
        const a = async (s, e) => {
          const { parseZapataF2k: c } = await T(async () => {
            const { parseZapataF2k: n } = await import("./f2kImporter-Cp9ARV1y.js");
            return {
              parseZapataF2k: n
            };
          }, []), t = c(s);
          return t.Lz != null && (i.Lz = t.Lz), t.Bz != null && (i.Bz = t.Bz), t.tz != null && (i.tz = t.tz), t.bc != null && (i.bc = t.bc), t.q_adm != null && (i.q_adm = t.q_adm), t.ks_factor != null && (i.ks_factor = t.ks_factor), t.ks_kNm3 != null && (i.ks = t.ks_kNm3), t.P_dead_tonf != null && (i.useSimple = 1, i.P_simple = t.P_dead_tonf, i.useD = 0, i.useL = 0, i.useS = 0), t.Mx_dead_tonfm != null && (i.Mx_simple = t.Mx_dead_tonfm), t.My_dead_tonfm != null && (i.My_simple = t.My_dead_tonfm), t.q_adm != null && t.ks_factor != null && (i.soilType = 0), x(), k(), t;
        };
        window.__hekatanImportF2kText = a, o.addButton({
          title: "\u{1F4E5} Importar F2K\u2026"
        }).on("click", () => {
          const s = document.createElement("input");
          s.type = "file", s.accept = ".f2k,.txt", s.onchange = async (e) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _i;
            const c = (_a = e.target.files) == null ? void 0 : _a[0];
            if (c) try {
              const t = await c.text(), n = await a(t, c.name);
              alert(`F2K importado: ${c.name}

Geometr\xEDa:
  Lz = ${(_b = n.Lz) == null ? void 0 : _b.toFixed(2)} m, Bz = ${(_c = n.Bz) == null ? void 0 : _c.toFixed(2)} m, tz = ${(_d = n.tz) == null ? void 0 : _d.toFixed(2)} m
  Columna = ${(_e = n.bc) == null ? void 0 : _e.toFixed(2)} m

Suelo:
  ks = ${(_f = n.ks_kNm3) == null ? void 0 : _f.toFixed(0)} kN/m\xB3
  q_adm = ${(_g = n.q_adm) == null ? void 0 : _g.toFixed(1)} tonf/m\xB2  ks_factor = ${(_h = n.ks_factor) == null ? void 0 : _h.toFixed(1)}

Cargas (modo Simple):
  P = ${(_i = n.P_dead_tonf) == null ? void 0 : _i.toFixed(2)} tonf
  Mx = ${(n.Mx_dead_tonfm ?? 0).toFixed(2)} tonf\xB7m
  My = ${(n.My_dead_tonfm ?? 0).toFixed(2)} tonf\xB7m

\u2713 Los sliders del Tweakpane se actualizaron.`);
            } catch (t) {
              alert(`Error: ${(t == null ? void 0 : t.message) ?? t}`);
            }
          }, s.click();
        }), o.addButton({
          title: "\u{1F40D} Exportar a OpenSeesPy (.py)"
        }).on("click", async () => {
          try {
            const { exportZapataOpsPy: s } = await T(async () => {
              const { exportZapataOpsPy: b } = await import("./opsPyExporter-caFBRJ-n.js");
              return {
                exportZapataOpsPy: b
              };
            }, []), e = i, c = (e.ks_factor ?? 10.5) * (e.q_adm ?? 20) * 9.80665, t = (e.useSimple ?? 1) >= 0.5, n = s({
              Lz: e.Lz ?? 1.5,
              Bz: e.Bz ?? 1.5,
              tz: e.tz ?? 0.3,
              bc: e.bc ?? 0.4,
              ks_kNm3: c,
              P_dead_kN: t ? (e.P_simple ?? 0) * 9.80665 : (e.P_D ?? 10) * 9.80665,
              P_live_kN: t ? 0 : (e.P_L ?? 5) * 9.80665
            }), m = new Blob([
              n
            ], {
              type: "text/x-python"
            }), y = document.createElement("a");
            y.href = URL.createObjectURL(m), y.download = `Zapata_Hekatan_${Date.now()}.py`, y.click(), alert(`OpenSeesPy script descargado.
Ejecutar: python -X utf8 <archivo>.py`);
          } catch (s) {
            alert(`Error: ${(s == null ? void 0 : s.message) ?? s}`);
          }
        });
      }
      const l = r.addFolder({
        title: "Unidades",
        expanded: false
      }), u = {
        force: g.val,
        disp: $.val
      };
      l.addBinding(u, "force", {
        label: "Fuerza",
        options: {
          kN: "kN",
          tonf: "tonf",
          kip: "kip"
        }
      }).on("change", (o) => {
        const a = g.val, s = o.value;
        if (a !== s) {
          const e = a === "kN" ? 1 : a === "tonf" ? 9.80665 : 4.4482216, c = s === "kN" ? 1 : s === "tonf" ? 9.80665 : 4.4482216;
          for (const [t, n] of Object.entries(d.params)) (n.unitType === "force" || n.unitType === "moment") && (i[t] = i[t] * e / c);
        }
        g.val = s, x(), k();
      }), l.addBinding(u, "disp", {
        label: "Desplazamiento",
        options: {
          mm: "mm",
          cm: "cm",
          m: "m",
          in: "in"
        }
      }).on("change", (o) => {
        $.val = o.value, x(), k();
      });
      const I = "Par\xE1metros", S = /* @__PURE__ */ new Map(), C = (o) => o === I || /\bmodo\b/i.test(o) || /activar/i.test(o) || /combinaci/i.test(o), K = (o) => (S.has(o) || S.set(o, r.addFolder({
        title: o,
        expanded: C(o)
      })), S.get(o));
      let h = null;
      const R = () => {
        h !== null && clearTimeout(h), h = window.setTimeout(() => {
          h = null, k();
        }, 120);
      }, q = {};
      for (const [o, a] of Object.entries(d.params)) {
        const s = a.folder ?? I, e = K(s);
        if (a.boolean) {
          q[o] = i[o] >= 0.5, e.addBinding(q, o, {
            label: a.label ?? o
          }).on("change", (m) => {
            i[o] = m.value ? 1 : 0, d.onParamChange && (d.onParamChange(o, i), r.refresh()), R();
          });
          continue;
        }
        const c = Q(a.label ?? o), t = a.unitType === "force" ? ` ${tt()}` : a.unitType === "moment" ? ` ${et()}` : a.unitType === "disp" ? ` ${ot()}` : "", n = {
          label: c + t
        };
        a.options !== void 0 ? n.options = a.options : (a.min !== void 0 && (n.min = a.min), a.max !== void 0 && (n.max = a.max), a.step !== void 0 && (n.step = a.step)), e.addBinding(i, o, n).on("change", () => {
          d.onParamChange && (d.onParamChange(o, i), r.refresh()), R();
        });
      }
      if (d.computedLabels) {
        const o = r.addFolder({
          title: "\u{1F4CA} Resultados",
          expanded: true
        }), a = d.computedLabels(v(), w);
        f = f ?? {};
        for (const s of Object.keys(a)) f[s] = a[s];
        for (const s of Object.keys(a)) o.addBinding(f, s, {
          readonly: true,
          view: "text",
          interval: 0
        });
      }
    };
    x(), document.body.append(Y({
      mesh: {
        nodes: E,
        elements: M,
        nodeInputs: O,
        elementInputs: N,
        deformOutputs: B,
        analyzeOutputs: j
      },
      objects3D: D,
      settingsObj: {
        deformedShape: true,
        displayScale: -1.5,
        shellResults: d.defaultShellResult ?? "displacementZ",
        gridSize: 10,
        showCotas: true
      }
    }), G({
      sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
      author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
    })), k();
  };
});
export {
  __tla,
  dt as r
};
