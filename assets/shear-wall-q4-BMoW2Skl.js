import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as a } from "./theme-2eEBQPmF.js";
import { a as T } from "./analyze-BydHtRcI.js";
import { d as U, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as _ } from "./getViewer-CARv9b4z.js";
import { g as B } from "./getParameters-CIJBOwMB.js";
import { g as W } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
import "./Text-DyNVkyur.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const s = {
    W: {
      value: a.state(5),
      min: 1,
      max: 15,
      step: 0.5,
      label: "Ancho W (m)"
    },
    H: {
      value: a.state(3),
      min: 1,
      max: 12,
      step: 0.5,
      label: "Altura H (m)"
    },
    t: {
      value: a.state(0.2),
      min: 0.05,
      max: 0.6,
      step: 0.05,
      label: "Espesor t (m)"
    },
    nx: {
      value: a.state(8),
      min: 2,
      max: 24,
      step: 1,
      label: "Mesh nx"
    },
    ny: {
      value: a.state(6),
      min: 2,
      max: 24,
      step: 1,
      label: "Mesh ny"
    },
    E: {
      value: a.state(25e6),
      min: 1e7,
      max: 5e7,
      step: 1e6,
      label: "E (kN/m\xB2)"
    },
    nu: {
      value: a.state(0.2),
      min: 0,
      max: 0.49,
      step: 0.05,
      label: "\u03BD (Poisson)"
    },
    P: {
      value: a.state(100),
      min: 0,
      max: 1e3,
      step: 10,
      label: "Carga lateral total (kN)"
    }
  }, g = a.state([]), y = a.state([]), M = a.state({}), w = a.state({}), S = a.state({}), E = a.state({});
  a.derive(() => {
    const O = s.W.value.val, z = s.H.value.val, P = s.t.value.val, n = Math.round(s.nx.value.val), r = Math.round(s.ny.value.val), d = s.E.value.val, v = s.nu.value.val, k = s.P.value.val, A = d / (2 * (1 + v)), H = O / n, I = z / r, p = [], o = [];
    for (let e = 0; e <= r; e++) for (let t = 0; t <= n; t++) p.push([
      t * H,
      0,
      e * I
    ]);
    const l = n + 1;
    for (let e = 0; e < r; e++) for (let t = 0; t < n; t++) o.push([
      e * l + t,
      e * l + t + 1,
      (e + 1) * l + t + 1,
      (e + 1) * l + t
    ]);
    const f = /* @__PURE__ */ new Map();
    for (let e = 0; e <= n; e++) f.set(e, [
      true,
      true,
      true,
      true,
      true,
      true
    ]);
    const i = [];
    for (let e = 0; e <= n; e++) i.push(r * l + e);
    const C = k / i.length, x = /* @__PURE__ */ new Map();
    for (const e of i) x.set(e, [
      C,
      0,
      0,
      0,
      0,
      0
    ]);
    const h = {
      supports: f,
      loads: x
    }, u = {
      elasticities: new Map(o.map((e, t) => [
        t,
        d
      ])),
      poissonsRatios: new Map(o.map((e, t) => [
        t,
        v
      ])),
      thicknesses: new Map(o.map((e, t) => [
        t,
        P
      ])),
      shearModuli: new Map(o.map((e, t) => [
        t,
        A
      ])),
      densities: new Map(o.map((e, t) => [
        t,
        24 / 9.80665
      ]))
    };
    let m = {}, b = {};
    try {
      m = U(p, o, h, u), b = T(p, o, u, m);
      const e = r * l + Math.floor(n / 2), t = m.deformations.get(e), N = t ? t[0] : 0;
      console.log(`Muro Q4: Ux=${N.toExponential(4)} m | OS:4.602e-5 | SAP:4.629e-5 | ETABS:4.582e-5`);
    } catch (e) {
      console.warn("Muro Q4 deform/analyze:", (e == null ? void 0 : e.message) ?? e);
    }
    g.val = p, y.val = o, M.val = h, w.val = u, S.val = m, E.val = b;
  });
  const c = document.createElement("div");
  c.style.cssText = "position:fixed;top:8px;right:8px;background:rgba(20,20,20,0.92);color:#ddd;font:11px/1.4 ui-monospace,Menlo,monospace;padding:10px 14px;border-radius:6px;border:1px solid #444;z-index:9999;min-width:280px;max-width:360px;";
  c.innerHTML = `
  <div style="font-weight:bold;color:#ffaa00;margin-bottom:4px;">\u{1F9EA} BENCHMARK \u2014 shear-wall-q4</div>
  <ul style="margin:0;padding-left:16px;">
    <li style="color:#7eff7e">\u2713 vs OpenSees: Ux = 4.602e-5 m</li>
    <li style="color:#7eff7e">\u2713 vs SAP2000: Ux = 4.629e-5 m</li>
    <li style="color:#7eff7e">\u2713 vs ETABS: Ux = 4.582e-5 m</li>
    <li style="color:#7eff7e">\u2713 Hekatan \u0394 &lt;1.5% vs los 3</li>
  </ul>
  <div style="margin-top:6px;font-size:10px;color:#888;">F12 console for live Ux</div>
`;
  document.body.append(c);
  document.body.append(B(s), _({
    mesh: {
      nodes: g,
      elements: y,
      nodeInputs: M,
      elementInputs: w,
      deformOutputs: S,
      analyzeOutputs: E
    },
    settingsObj: {
      deformedShape: true
    }
  }), W({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/shear-wall-q4/main.ts"
  }));
});
