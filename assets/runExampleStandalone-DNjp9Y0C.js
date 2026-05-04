import { _ as B } from "./preload-helper-DrUBW0xl.js";
import { v as k, P as et } from "./theme-2eEBQPmF.js";
import { c as at, a as nt, g as ot } from "./getViewer-DJJSYGo6.js";
import { g as st } from "./styles-Cjdl64P4.js";
import { f as P, d as F, a as it, b as rt, c as x, e as lt, s as O, g as U, h as j, l as C, i as ct, j as dt, m as mt, k as ft, t as pt, n as ut } from "./units-BHnVfatd.js";
let ht;
let __tla = (async () => {
  k.derive(() => {
    at.val = P.val;
  });
  k.derive(() => {
    nt.val = F.val;
  });
  ht = function(d) {
    const D = k.state([]), I = k.state([]), K = k.state({}), R = k.state({}), q = k.state({}), A = k.state({}), Z = k.state([]), M = {
      nodes: D,
      elements: I,
      nodeInputs: K,
      elementInputs: R,
      deformOutputs: q,
      analyzeOutputs: A,
      objects3D: Z
    }, r = Object.fromEntries(Object.entries(d.params).map(([i, l]) => {
      const p = l.default;
      return l.unitType === "force" ? [
        i,
        it(p)
      ] : l.unitType === "moment" ? [
        i,
        rt(p)
      ] : [
        i,
        p
      ];
    })), z = () => {
      const i = {
        ...r
      };
      for (const [l, p] of Object.entries(d.params)) p.unitType === "force" && (i[l] = pt(r[l])), p.unitType === "moment" && (i[l] = ut(r[l]));
      return i;
    };
    let _ = null, N = null;
    const u = () => {
      if (d.build(z(), M), d.computedLabels && _ && N) {
        const i = d.computedLabels(z(), M);
        for (const l of Object.keys(_)) l in i && (_[l] = i[l]);
        for (const l of Object.keys(i)) l in _ || (_[l] = i[l]);
        N.refresh();
      }
    }, m = document.createElement("div"), H = `hk_paneHostPos_${d.id}`, T = (() => {
      try {
        const i = localStorage.getItem(H);
        if (i) return JSON.parse(i);
      } catch {
      }
      return null;
    })();
    m.style.cssText = "position:fixed;" + (T ? `left:${T.left}px;top:${T.top}px;right:auto;` : "top:16px;right:16px;") + "width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:90vh;overflow-y:auto;font-size:12px;box-shadow:0 6px 24px rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.08);", document.body.appendChild(m);
    let L = null;
    const b = () => {
      L && L.dispose(), m.innerHTML = "";
      const i = new et({
        container: m,
        title: d.name
      });
      if (L = i, N = i, setTimeout(() => {
        const t = m.querySelector(".tp-rotv_b, .tp-fldv_b");
        if (!t) return;
        t.style.cursor = "move", t.style.userSelect = "none";
        let o = false, s = 0, a = 0, c = 0, e = 0;
        t.addEventListener("mousedown", (n) => {
          o = true, s = n.clientX, a = n.clientY;
          const f = m.getBoundingClientRect();
          c = f.left, e = f.top, m.style.right = "auto", m.style.left = `${c}px`, m.style.top = `${e}px`, n.preventDefault();
        }), window.addEventListener("mousemove", (n) => {
          if (!o) return;
          const f = n.clientX - s, y = n.clientY - a, v = Math.max(0, Math.min(window.innerWidth - 40, c + f)), E = Math.max(0, Math.min(window.innerHeight - 40, e + y));
          m.style.left = `${v}px`, m.style.top = `${E}px`;
        }), window.addEventListener("mouseup", () => {
          if (o) {
            o = false;
            try {
              localStorage.setItem(H, JSON.stringify({
                left: parseFloat(m.style.left),
                top: parseFloat(m.style.top)
              }));
            } catch {
            }
          }
        });
      }, 0), d.id.startsWith("zapata")) {
        const t = i.addFolder({
          title: "\u{1F4C4} SAFE F2K",
          expanded: false
        });
        t.addButton({
          title: "\u{1F4E4} Exportar a SAFE (.f2k)"
        }).on("click", async () => {
          try {
            const { downloadZapataF2k: s } = await B(async () => {
              const { downloadZapataF2k: tt } = await import("./f2kExporter-COIU6xYe.js");
              return {
                downloadZapataF2k: tt
              };
            }, []), a = r, c = a.ks_factor ?? 10.5, e = a.q_adm ?? 20, n = c * e * 9.80665, f = (a.useSimple ?? 1) >= 0.5, y = f ? (a.P_simple ?? 0) * 9.80665 : (a.P_D ?? 10) * 9.80665, v = f ? 0 : (a.P_L ?? 5) * 9.80665, E = f ? (a.Mx_simple ?? 0) * 9.80665 : (a.Mx_D ?? 0) * 9.80665, Q = f ? (a.My_simple ?? 0) * 9.80665 : (a.My_D ?? 0) * 9.80665;
            s({
              Lz: a.Lz ?? 1.5,
              Bz: a.Bz ?? 1.5,
              tz: a.tz ?? 0.3,
              bc: a.bc ?? 0.4,
              ks_kNm3: n,
              P_dead_kN: y,
              P_live_kN: v,
              Mx_dead_kNm: E,
              My_dead_kNm: Q
            }, `Zapata_Hekatan_${Date.now()}.f2k`), alert(`F2K descargado.
ks=${n.toFixed(0)} kN/m\xB3, P_dead=${y.toFixed(1)} kN.
Abrilo en SAFE: File \u2192 Import \u2192 SAFE Text File.`);
          } catch (s) {
            alert(`Error: ${(s == null ? void 0 : s.message) ?? s}`);
          }
        });
        const o = async (s, a) => {
          const { parseZapataF2k: c } = await B(async () => {
            const { parseZapataF2k: n } = await import("./f2kImporter-Cp9ARV1y.js");
            return {
              parseZapataF2k: n
            };
          }, []), e = c(s);
          return e.Lz != null && (r.Lz = e.Lz), e.Bz != null && (r.Bz = e.Bz), e.tz != null && (r.tz = e.tz), e.bc != null && (r.bc = e.bc), e.q_adm != null && (r.q_adm = e.q_adm), e.ks_factor != null && (r.ks_factor = e.ks_factor), e.ks_kNm3 != null && (r.ks = e.ks_kNm3), e.P_dead_tonf != null && (r.useSimple = 1, r.P_simple = e.P_dead_tonf, r.useD = 0, r.useL = 0, r.useS = 0), e.Mx_dead_tonfm != null && (r.Mx_simple = e.Mx_dead_tonfm), e.My_dead_tonfm != null && (r.My_simple = e.My_dead_tonfm), e.q_adm != null && e.ks_factor != null && (r.soilType = 0), b(), u(), e;
        };
        window.__hekatanImportF2kText = o, t.addButton({
          title: "\u{1F4E5} Importar F2K\u2026"
        }).on("click", () => {
          const s = document.createElement("input");
          s.type = "file", s.accept = ".f2k,.txt", s.onchange = async (a) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _i;
            const c = (_a = a.target.files) == null ? void 0 : _a[0];
            if (c) try {
              const e = await c.text(), n = await o(e, c.name);
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
            } catch (e) {
              alert(`Error: ${(e == null ? void 0 : e.message) ?? e}`);
            }
          }, s.click();
        }), t.addButton({
          title: "\u{1F40D} Exportar a OpenSeesPy (.py)"
        }).on("click", async () => {
          try {
            const { exportZapataOpsPy: s } = await B(async () => {
              const { exportZapataOpsPy: v } = await import("./opsPyExporter-caFBRJ-n.js");
              return {
                exportZapataOpsPy: v
              };
            }, []), a = r, c = (a.ks_factor ?? 10.5) * (a.q_adm ?? 20) * 9.80665, e = (a.useSimple ?? 1) >= 0.5, n = s({
              Lz: a.Lz ?? 1.5,
              Bz: a.Bz ?? 1.5,
              tz: a.tz ?? 0.3,
              bc: a.bc ?? 0.4,
              ks_kNm3: c,
              P_dead_kN: e ? (a.P_simple ?? 0) * 9.80665 : (a.P_D ?? 10) * 9.80665,
              P_live_kN: e ? 0 : (a.P_L ?? 5) * 9.80665
            }), f = new Blob([
              n
            ], {
              type: "text/x-python"
            }), y = document.createElement("a");
            y.href = URL.createObjectURL(f), y.download = `Zapata_Hekatan_${Date.now()}.py`, y.click(), alert(`OpenSeesPy script descargado.
Ejecutar: python -X utf8 <archivo>.py`);
          } catch (s) {
            alert(`Error: ${(s == null ? void 0 : s.message) ?? s}`);
          }
        });
      }
      const l = i.addFolder({
        title: "Unidades",
        expanded: false
      }), p = {
        force: P.val,
        disp: F.val
      };
      l.addBinding(p, "force", {
        label: "Fuerza",
        options: {
          kN: "kN",
          tonf: "tonf",
          kip: "kip"
        }
      }).on("change", (t) => {
        const o = P.val, s = t.value;
        if (o !== s) {
          const a = o === "kN" ? 1 : o === "tonf" ? 9.80665 : 4.4482216, c = s === "kN" ? 1 : s === "tonf" ? 9.80665 : 4.4482216;
          for (const [e, n] of Object.entries(d.params)) (n.unitType === "force" || n.unitType === "moment") && (r[e] = r[e] * a / c);
        }
        P.val = s, b(), u();
      }), l.addBinding(p, "disp", {
        label: "Desplazamiento",
        options: {
          mm: "mm",
          cm: "cm",
          m: "m",
          in: "in"
        }
      }).on("change", (t) => {
        F.val = t.value, b(), u();
      });
      const Y = l.addFolder({
        title: "\u{1F310} Sistema (preset)",
        expanded: true
      }), h = {
        sistema: x()
      };
      Y.addBinding(h, "sistema", {
        label: "Preset",
        options: {
          "Metric MKS (tonf, m, mm, kgf/cm\xB2)": "Metric MKS",
          "Metric SI (kN, m, mm, MPa)": "Metric SI",
          "U.S. Imperial (kip, ft, in, ksi)": "U.S. Imperial",
          "Custom (granular)": "Custom"
        }
      }).on("change", (t) => {
        t.value !== "Custom" && (lt(t.value), p.force = P.val, p.disp = F.val, g.stress = O.val, g.subgrade = U.val, g.stiffTrans = j.val, g.lengthSection = C.val, i.refresh(), b(), u());
      });
      const w = l.addFolder({
        title: "\u{1F4D0} Display Units (granular)",
        expanded: false
      }), g = {
        stress: O.val,
        subgrade: U.val,
        stiffTrans: j.val,
        lengthSection: C.val
      };
      w.addBinding(g, "stress", {
        label: "Stress",
        options: {
          "kN/m\xB2": "kN/m\xB2",
          kPa: "kPa",
          MPa: "MPa",
          GPa: "GPa",
          "kgf/cm\xB2": "kgf/cm\xB2",
          "tonf/m\xB2": "tonf/m\xB2",
          psi: "psi",
          ksi: "ksi",
          "kip/ft\xB2": "kip/ft\xB2"
        }
      }).on("change", (t) => {
        O.val = t.value, h.sistema = x(), i.refresh(), u();
      }), w.addBinding(g, "subgrade", {
        label: "Subgrade ks",
        options: {
          "kN/m\xB3": "kN/m\xB3",
          "tonf/m\xB3": "tonf/m\xB3",
          "kgf/cm\xB3": "kgf/cm\xB3",
          "kip/ft\xB3": "kip/ft\xB3",
          pci: "pci"
        }
      }).on("change", (t) => {
        U.val = t.value, h.sistema = x(), i.refresh(), u();
      }), w.addBinding(g, "stiffTrans", {
        label: "Stiffness K",
        options: {
          "kN/m": "kN/m",
          "tonf/m": "tonf/m",
          "kip/in": "kip/in",
          "kip/ft": "kip/ft",
          "N/mm": "N/mm"
        }
      }).on("change", (t) => {
        j.val = t.value, h.sistema = x(), i.refresh(), u();
      }), w.addBinding(g, "lengthSection", {
        label: "Length section",
        options: {
          mm: "mm",
          cm: "cm",
          m: "m",
          in: "in",
          ft: "ft"
        }
      }).on("change", (t) => {
        C.val = t.value, h.sistema = x(), i.refresh(), u();
      });
      const G = "Par\xE1metros", $ = /* @__PURE__ */ new Map(), J = (t) => t === G || /\bmodo\b/i.test(t) || /activar/i.test(t) || /combinaci/i.test(t), W = (t) => ($.has(t) || $.set(t, i.addFolder({
        title: t,
        expanded: J(t)
      })), $.get(t));
      let S = null;
      const V = () => {
        S !== null && clearTimeout(S), S = window.setTimeout(() => {
          S = null, u();
        }, 120);
      }, X = {};
      for (const [t, o] of Object.entries(d.params)) {
        const s = o.folder ?? G, a = W(s);
        if (o.boolean) {
          X[t] = r[t] >= 0.5, a.addBinding(X, t, {
            label: o.label ?? t
          }).on("change", (f) => {
            r[t] = f.value ? 1 : 0, d.onParamChange && (d.onParamChange(t, r), i.refresh()), V();
          });
          continue;
        }
        const c = ct(o.label ?? t), e = o.unitType === "force" ? ` ${dt()}` : o.unitType === "moment" ? ` ${mt()}` : o.unitType === "disp" ? ` ${ft()}` : "", n = {
          label: c + e
        };
        o.options !== void 0 ? n.options = o.options : (o.min !== void 0 && (n.min = o.min), o.max !== void 0 && (n.max = o.max), o.step !== void 0 && (n.step = o.step)), a.addBinding(r, t, n).on("change", () => {
          d.onParamChange && (d.onParamChange(t, r), i.refresh()), V();
        });
      }
      if (d.computedLabels) {
        const t = i.addFolder({
          title: "\u{1F4CA} Resultados",
          expanded: true
        }), o = d.computedLabels(z(), M);
        _ = _ ?? {};
        for (const s of Object.keys(o)) _[s] = o[s];
        for (const s of Object.keys(o)) t.addBinding(_, s, {
          readonly: true,
          view: "text",
          interval: 0
        });
      }
    };
    b(), document.body.append(ot({
      mesh: {
        nodes: D,
        elements: I,
        nodeInputs: K,
        elementInputs: R,
        deformOutputs: q,
        analyzeOutputs: A
      },
      objects3D: Z,
      settingsObj: {
        deformedShape: true,
        displayScale: -1.5,
        shellResults: d.defaultShellResult ?? "displacementZ",
        gridSize: 10,
        showCotas: true
      }
    }), st({
      sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
      author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
    })), u();
  };
})();
export {
  __tla,
  ht as r
};
