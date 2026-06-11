import { _ as st } from "./preload-helper-DrUBW0xl.js";
import { m as bt, s as xt, V as $, t as wt, B as mt, L as ut, a as _t, u as $t, v as U, P as Lt } from "./theme-BUyDDEHW.js";
import { c as zt, a as Et, g as Mt } from "./getViewer-BNf7Ym52.js";
import { g as Tt } from "./styles-tOu98xnK.js";
import { c as W, d as et, e as Pt, g as St, h as Q, i as It, s as nt, j as at, k as ot, l as it, m as Nt, n as Ft, o as Dt, p as Ot, t as Bt, q as Ct } from "./units-DXgS9gy0.js";
let Kt;
let __tla = (async () => {
  const l = (u, E = 4) => u == null || !isFinite(u) ? "\u2014" : Math.abs(u) === 0 ? "0" : Math.abs(u) < 1e-3 || Math.abs(u) > 1e5 ? u.toExponential(E) : u.toFixed(E);
  function Yt(u, E) {
    if (!document.getElementById("hk-inspect-styles")) {
      const p = document.createElement("style");
      p.id = "hk-inspect-styles", p.textContent = `
      .hk-inspect-btn {
        /* Top-center del viewer: no choca con Settings panel (top-left) ni con
         * el Tweakpane principal del ejemplo (top-right). */
        position: absolute; top: 8px; left: 50%; transform: translateX(-50%);
        z-index: 100;
        background: rgba(34,85,136,0.92); color: #fff;
        border: 1px solid #336699; border-radius: 4px;
        padding: 4px 10px; font-size: 11px;
        cursor: pointer; font-family: system-ui, sans-serif;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        backdrop-filter: blur(2px);
      }
      .hk-inspect-btn:hover { background: rgba(51,102,153,0.96); }
      .hk-inspect-btn.active { background: #ff4444; border-color: #ff4444; }
      .hk-inspect-panel {
        /* Posici\xF3n central-derecha del viewer (lejos del Settings panel a la
         * izquierda y del Tweakpane principal a la derecha). Arrastrable. */
        position: fixed; top: 60px; left: 260px; z-index: 9999;
        background: rgba(20,24,32,0.96); color: #e8e8e8;
        border: 1px solid #336699; border-radius: 8px;
        padding: 12px; min-width: 320px; max-width: 460px; max-height: 80vh;
        overflow-y: auto; font-family: monospace; font-size: 12px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.6);
      }
      .hk-inspect-panel h3 { cursor: move; user-select: none; }
      .hk-inspect-panel h3 {
        margin: 0 0 8px 0; color: #ffaa44; font-size: 14px;
        display: flex; justify-content: space-between; align-items: center;
        font-family: system-ui, sans-serif;
      }
      .hk-inspect-panel .close-btn {
        background: none; border: none; color: #ff8888; cursor: pointer;
        font-size: 16px; padding: 0 4px;
      }
      .hk-inspect-panel .section {
        margin-top: 10px; border-top: 1px solid #444; padding-top: 8px;
      }
      .hk-inspect-panel .section-title {
        color: #ffaa44; font-size: 11px; font-weight: bold;
        text-transform: uppercase; margin-bottom: 4px;
      }
      .hk-inspect-panel .prop-row {
        display: flex; justify-content: space-between; padding: 2px 0;
      }
      .hk-inspect-panel .prop-key { color: #88ccff; }
      .hk-inspect-panel .prop-val { color: #ffeebb; font-weight: bold; }
      .hk-inspect-panel table {
        border-collapse: collapse; width: 100%;
        margin-top: 4px; font-size: 11px;
      }
      .hk-inspect-panel td {
        border: 1px solid #444; padding: 3px 6px; text-align: right;
        color: #cce; white-space: nowrap;
      }
      .hk-inspect-panel td.header {
        color: #ffaa44; font-weight: bold; background: #1a2030;
        text-align: center;
      }
      .hk-inspect-panel .hint {
        color: #888; font-size: 10px; font-family: system-ui, sans-serif;
        margin-top: 6px; font-style: italic;
      }
    `, document.head.appendChild(p);
    }
    const Y = () => u.__ctx || null;
    let G = false, b = null, A = null;
    const O = document.createElement("button");
    O.className = "hk-inspect-btn", O.textContent = "\u{1F50D} Inspect", O.title = "Click para inspeccionar elementos. Clicke\xE1 un elemento para ver sus propiedades.", getComputedStyle(u).position === "static" && (u.style.position = "relative"), u.appendChild(O);
    const R = (p) => {
      var _a;
      const y = Y();
      if (!y) return -1;
      const o = y.renderer.domElement.getBoundingClientRect(), d = new bt((p.clientX - o.left) / o.width * 2 - 1, -((p.clientY - o.top) / o.height) * 2 + 1), k = new xt();
      k.setFromCamera(d, ((_a = y.controls) == null ? void 0 : _a.object) || y.camera), k.params.Line = {
        threshold: 0.5
      };
      const x = E.nodes.val || [], P = E.elements.val || [];
      if (x.length === 0 || P.length === 0) return -1;
      let D = 1 / 0, I = -1, N = 1 / 0, _ = -1;
      const g = k.ray;
      for (let c = 0; c < P.length; c++) {
        const t = P[c];
        if (t.length === 2) {
          const s = new $(...x[t[0]]), n = new $(...x[t[1]]), r = new wt(s, n), i = new $(), e = new $();
          g.closestPointToPoint(r.getCenter(new $()), i), r.closestPointToPoint(i, true, e);
          const a = i.distanceTo(e);
          a < D && (D = a, I = c);
        } else if (t.length === 3) {
          const s = new $(...x[t[0]]), n = new $(...x[t[1]]), r = new $(...x[t[2]]), i = new $();
          let e = g.intersectTriangle(s, n, r, false, i);
          if (e || (e = g.intersectTriangle(s, r, n, false, i)), e) {
            const a = g.origin.distanceTo(i);
            a < N && (N = a, _ = c);
          }
        } else if (t.length === 4) {
          const s = new $(...x[t[0]]), n = new $(...x[t[1]]), r = new $(...x[t[2]]), i = new $(...x[t[3]]), e = new $();
          let a = g.intersectTriangle(s, n, r, false, e);
          if (a || (a = g.intersectTriangle(s, r, n, false, e)), a) {
            const f = g.origin.distanceTo(e);
            f < N && (N = f, _ = c);
          }
          if (a = g.intersectTriangle(s, r, i, false, e), a || (a = g.intersectTriangle(s, i, r, false, e)), a) {
            const f = g.origin.distanceTo(e);
            f < N && (N = f, _ = c);
          }
        } else if (t.length === 8) {
          const s = t.map((i) => new $(...x[i])), n = new $(), r = [
            [
              0,
              1,
              2,
              3
            ],
            [
              4,
              5,
              6,
              7
            ],
            [
              0,
              1,
              5,
              4
            ],
            [
              2,
              3,
              7,
              6
            ],
            [
              0,
              3,
              7,
              4
            ],
            [
              1,
              2,
              6,
              5
            ]
          ];
          for (const i of r) {
            let e = g.intersectTriangle(s[i[0]], s[i[1]], s[i[2]], false, n);
            if (e || (e = g.intersectTriangle(s[i[0]], s[i[2]], s[i[1]], false, n)), e) {
              const a = g.origin.distanceTo(n);
              a < N && (N = a, _ = c);
            }
            if (e = g.intersectTriangle(s[i[0]], s[i[2]], s[i[3]], false, n), e || (e = g.intersectTriangle(s[i[0]], s[i[3]], s[i[2]], false, n)), e) {
              const a = g.origin.distanceTo(n);
              a < N && (N = a, _ = c);
            }
          }
        }
      }
      if (_ >= 0) return _;
      const z = x.reduce((c, t) => [
        Math.min(c[0], t[0]),
        Math.min(c[1], t[1]),
        Math.min(c[2], t[2])
      ], [
        1 / 0,
        1 / 0,
        1 / 0
      ]), C = x.reduce((c, t) => [
        Math.max(c[0], t[0]),
        Math.max(c[1], t[1]),
        Math.max(c[2], t[2])
      ], [
        -1 / 0,
        -1 / 0,
        -1 / 0
      ]), m = Math.max(C[0] - z[0], C[1] - z[1], C[2] - z[2], 1);
      return D < m * 0.05 ? I : -1;
    }, X = () => {
      const p = Y();
      A && p && (p.scene.remove(A), A = null, p.render());
    }, v = (p) => {
      X();
      const y = Y();
      if (!y) return;
      const w = E.elements.val[p], o = E.nodes.val;
      if (w.length === 2) {
        const d = new mt().setFromPoints([
          new $(...o[w[0]]),
          new $(...o[w[1]])
        ]), k = new ut({
          color: 16729156,
          linewidth: 4
        });
        A = new _t(d, k);
      } else {
        const d = w.map((P) => new $(...o[P]));
        d.push(d[0]);
        const k = new mt().setFromPoints(d), x = new ut({
          color: 16729156,
          linewidth: 4
        });
        A = new $t(k, x);
      }
      y.scene.add(A), y.render();
    }, H = (p) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
      b && b.remove();
      const y = E.elements.val, w = E.nodes.val, o = y[p], d = E.elementInputs.val || {}, k = (_a = E.deformOutputs) == null ? void 0 : _a.val, x = o.length === 2, P = o.length === 3, D = o.length === 4, I = o.length === 8;
      let _ = `
      <div class="prop-row"><span class="prop-key">Tipo</span><span class="prop-val">${x ? "Frame (2 nodos)" : P ? "Shell triangular (3 nodos)" : D ? "Shell Q4 (4 nodos)" : I ? "Solid Hex8 (8 nodos)" : `Element (${o.length} nodos)`}</span></div>
      <div class="prop-row"><span class="prop-key">Element idx</span><span class="prop-val">${p}</span></div>
      <div class="prop-row"><span class="prop-key">Nodos</span><span class="prop-val">${o.join(", ")}</span></div>
    `;
      if (x) {
        const m = w[o[0]], c = w[o[1]], t = Math.sqrt((c[0] - m[0]) ** 2 + (c[1] - m[1]) ** 2 + (c[2] - m[2]) ** 2), s = ((_b = d.elasticities) == null ? void 0 : _b.get(p)) || 0, n = ((_c = d.areas) == null ? void 0 : _c.get(p)) || 0, r = ((_d = d.momentsOfInertiaZ) == null ? void 0 : _d.get(p)) || 0, i = ((_e = d.momentsOfInertiaY) == null ? void 0 : _e.get(p)) || 0, e = ((_f = d.shearModuli) == null ? void 0 : _f.get(p)) || 0, a = ((_g = d.torsionalConstants) == null ? void 0 : _g.get(p)) || 0, f = (_h = d.shearAreasY) == null ? void 0 : _h.get(p), h = (_i = d.shearAreasZ) == null ? void 0 : _i.get(p), S = (_j = d.densities) == null ? void 0 : _j.get(p), T = f != null && f < 0 || h != null && h < 0, q = T ? "Bernoulli (As=\u22121)" : f != null && f > 0 || h != null && h > 0 ? "Timoshenko (As expl\xEDcito)" : "Timoshenko (5/6\xB7A default)", K = T ? 0 : (f ?? 0) > 0 ? f : 5 / 6 * n, V = T ? 0 : (h ?? 0) > 0 ? h : 5 / 6 * n, j = !T && K > 0 && e > 0 ? 12 * s * i / (e * K * t * t) : 0, Z = !T && V > 0 && e > 0 ? 12 * s * r / (e * V * t * t) : 0, rt = s * n / t, lt = e * a / t, ct = 12 * s * r / (t * t * t) / (1 + Z), vt = 6 * s * r / (t * t) / (1 + Z), dt = 4 * s * r / t * (1 + Z / 4) / (1 + Z), ht = 2 * s * r / t * (1 - Z / 2) / (1 + Z), pt = 12 * s * i / (t * t * t) / (1 + j), yt = 6 * s * i / (t * t) / (1 + j), ft = 4 * s * i / t * (1 + j / 4) / (1 + j), gt = 2 * s * i / t * (1 - j / 2) / (1 + j), kt = 2 * (rt + lt + ct + pt + ft + dt);
        _ += `
        <div class="section">
          <div class="section-title">Geometr\xEDa</div>
          <div class="prop-row"><span class="prop-key">L</span><span class="prop-val">${l(t)} m</span></div>
        </div>
        <div class="section">
          <div class="section-title">Material</div>
          <div class="prop-row"><span class="prop-key">E</span><span class="prop-val">${l(s)}</span></div>
          <div class="prop-row"><span class="prop-key">G</span><span class="prop-val">${l(e)}</span></div>
          ${S != null ? `<div class="prop-row"><span class="prop-key">\u03C1</span><span class="prop-val">${l(S)}</span></div>` : ""}
        </div>
        <div class="section">
          <div class="section-title">Secci\xF3n</div>
          <div class="prop-row"><span class="prop-key">A</span><span class="prop-val">${l(n)}</span></div>
          <div class="prop-row"><span class="prop-key">Iz (weak)</span><span class="prop-val">${l(r)}</span></div>
          <div class="prop-row"><span class="prop-key">Iy (strong)</span><span class="prop-val">${l(i)}</span></div>
          <div class="prop-row"><span class="prop-key">J</span><span class="prop-val">${l(a)}</span></div>
        </div>
        <div class="section">
          <div class="section-title">Beam Theory</div>
          <div class="prop-row"><span class="prop-key">Tipo</span><span class="prop-val">${q}</span></div>
          <div class="prop-row"><span class="prop-key">AsY (efectiva)</span><span class="prop-val">${l(K)}</span></div>
          <div class="prop-row"><span class="prop-key">AsZ (efectiva)</span><span class="prop-val">${l(V)}</span></div>
          <div class="prop-row"><span class="prop-key">\u03C6Y = 12\xB7E\xB7Iy/(G\xB7AsY\xB7L\xB2)</span><span class="prop-val">${l(j, 4)}</span></div>
          <div class="prop-row"><span class="prop-key">\u03C6Z = 12\xB7E\xB7Iz/(G\xB7AsZ\xB7L\xB2)</span><span class="prop-val">${l(Z, 4)}</span></div>
        </div>

        <div class="section">
          <div class="section-title">Matriz K local 12\xD712 \u2014 coeficientes</div>
          <div class="prop-row"><span class="prop-key">EA/L (axial)</span><span class="prop-val">${l(rt)}</span></div>
          <div class="prop-row"><span class="prop-key">GJ/L (torsi\xF3n)</span><span class="prop-val">${l(lt)}</span></div>
          <table>
            <tr><td class="header">eje Z (Iz)</td><td class="header">tz=12EIz/L\xB3/(1+\u03C6Z)</td><td class="header">bz=6EIz/L\xB2/(1+\u03C6Z)</td><td class="header">kz=4EIz/L\xB7\u03BA\u207A/(1+\u03C6Z)</td><td class="header">az=2EIz/L\xB7\u03BA\u207B/(1+\u03C6Z)</td></tr>
            <tr><td class="header">valor</td><td>${l(ct)}</td><td>${l(vt)}</td><td>${l(dt)}</td><td>${l(ht)}</td></tr>
            <tr><td class="header">eje Y (Iy)</td><td class="header">ty=12EIy/L\xB3/(1+\u03C6Y)</td><td class="header">by=6EIy/L\xB2/(1+\u03C6Y)</td><td class="header">ky=4EIy/L\xB7\u03BA\u207A/(1+\u03C6Y)</td><td class="header">ay=2EIy/L\xB7\u03BA\u207B/(1+\u03C6Y)</td></tr>
            <tr><td class="header">valor</td><td>${l(pt)}</td><td>${l(yt)}</td><td>${l(ft)}</td><td>${l(gt)}</td></tr>
          </table>
          <div class="hint">\u03BA\u207A = (1+\u03C6/4),  \u03BA\u207B = (1\u2212\u03C6/2). Bernoulli \u21D2 \u03C6=0 \u21D2 \u03BA\u207A=\u03BA\u207B=1.</div>
        </div>

        <div class="section">
          <div class="section-title">Trazas (invariantes)</div>
          <div class="prop-row"><span class="prop-key">tr(K_local)</span><span class="prop-val">${l(kt)}</span></div>
          <div class="prop-row"><span class="prop-key">  = 2(EA/L + GJ/L + tz + ty + kz + ky)</span><span class="prop-val"></span></div>
          <div class="prop-row"><span class="prop-key">det(K_local)</span><span class="prop-val">0 (rank 6, 6 rigid body modes)</span></div>
        </div>
      `;
      } else if (P || D) {
        const m = ((_k = d.elasticities) == null ? void 0 : _k.get(p)) || 0, c = ((_l = d.thicknesses) == null ? void 0 : _l.get(p)) || 0, t = ((_m = d.poissonsRatios) == null ? void 0 : _m.get(p)) || 0, n = ((_n = d.shearModuli) == null ? void 0 : _n.get(p)) || m / (2 * (1 + t)), r = 5 / 6, i = m * c ** 3 / (12 * (1 - t * t)), e = i * 1, a = i * t, f = i * (1 - t) / 2, h = r * n * c, S = m / (1 - t * t), T = S * 1, q = S * t, K = S * (1 - t) / 2, V = e + e + f, j = 2 * h, Z = T + T + K;
        _ += `
        <div class="section">
          <div class="section-title">Material</div>
          <div class="prop-row"><span class="prop-key">E</span><span class="prop-val">${l(m)}</span></div>
          <div class="prop-row"><span class="prop-key">G</span><span class="prop-val">${l(n)}</span></div>
          <div class="prop-row"><span class="prop-key">\u03BD</span><span class="prop-val">${l(t)}</span></div>
        </div>
        <div class="section">
          <div class="section-title">Shell</div>
          <div class="prop-row"><span class="prop-key">t</span><span class="prop-val">${l(c)} m</span></div>
          <div class="prop-row"><span class="prop-key">k_s (shear corr.)</span><span class="prop-val">5/6 = ${l(r, 4)}</span></div>
        </div>

        <div class="section">
          <div class="section-title">D_bending \u2014 Et\xB3/(12(1\u2212\u03BD\xB2)) \xB7 K_b</div>
          <div class="prop-row"><span class="prop-key">factor = Et\xB3/(12(1\u2212\u03BD\xB2))</span><span class="prop-val">${l(i)}</span></div>
          <table>
            <tr><td class="header"></td><td class="header">\u03BAxx</td><td class="header">\u03BAyy</td><td class="header">\u03BAxy</td></tr>
            <tr><td class="header">Mxx</td><td>${l(e)}</td><td>${l(a)}</td><td>0</td></tr>
            <tr><td class="header">Myy</td><td>${l(a)}</td><td>${l(e)}</td><td>0</td></tr>
            <tr><td class="header">Mxy</td><td>0</td><td>0</td><td>${l(f)}</td></tr>
          </table>
          <div class="prop-row"><span class="prop-key">tr(D_b)</span><span class="prop-val">${l(V)}</span></div>
        </div>

        <div class="section">
          <div class="section-title">D_shear \u2014 k_s\xB7G\xB7t \xB7 I\u2082</div>
          <table>
            <tr><td class="header"></td><td class="header">\u03B3xz</td><td class="header">\u03B3yz</td></tr>
            <tr><td class="header">Qx</td><td>${l(h)}</td><td>0</td></tr>
            <tr><td class="header">Qy</td><td>0</td><td>${l(h)}</td></tr>
          </table>
          <div class="prop-row"><span class="prop-key">tr(D_s)</span><span class="prop-val">${l(j)}</span></div>
        </div>

        <div class="section">
          <div class="section-title">D_membrane \u2014 E/(1\u2212\u03BD\xB2) \xB7 K_m</div>
          <div class="prop-row"><span class="prop-key">factor = E/(1\u2212\u03BD\xB2)</span><span class="prop-val">${l(S)}</span></div>
          <table>
            <tr><td class="header"></td><td class="header">\u03B5xx</td><td class="header">\u03B5yy</td><td class="header">\u03B3xy</td></tr>
            <tr><td class="header">Nxx</td><td>${l(T)}</td><td>${l(q)}</td><td>0</td></tr>
            <tr><td class="header">Nyy</td><td>${l(q)}</td><td>${l(T)}</td><td>0</td></tr>
            <tr><td class="header">Nxy</td><td>0</td><td>0</td><td>${l(K)}</td></tr>
          </table>
          <div class="prop-row"><span class="prop-key">tr(D_m)</span><span class="prop-val">${l(Z)}</span></div>
        </div>
      `;
      } else if (I) {
        const m = (_o = d.elasticities) == null ? void 0 : _o.get(p), c = (_p = d.poissonsRatios) == null ? void 0 : _p.get(p);
        _ += `
        <div class="section">
          <div class="section-title">Material</div>
          <div class="prop-row"><span class="prop-key">E</span><span class="prop-val">${l(m)}</span></div>
          <div class="prop-row"><span class="prop-key">\u03BD</span><span class="prop-val">${l(c)}</span></div>
        </div>
      `;
      }
      let g = '<table><tr><td class="header">Nodo</td><td class="header">X</td><td class="header">Y</td><td class="header">Z</td>';
      (k == null ? void 0 : k.deformations) && (g += '<td class="header">uX</td><td class="header">uY</td><td class="header">uZ</td>'), g += "</tr>";
      for (const m of o) {
        const c = w[m];
        if (g += `<tr><td class="header">${m}</td><td>${l(c[0])}</td><td>${l(c[1])}</td><td>${l(c[2])}</td>`, k == null ? void 0 : k.deformations) {
          const t = k.deformations.get(m);
          t ? g += `<td>${l(t[0] * 1e3, 3)}</td><td>${l(t[1] * 1e3, 3)}</td><td>${l(t[2] * 1e3, 3)}</td>` : g += "<td>\u2014</td><td>\u2014</td><td>\u2014</td>";
        }
        g += "</tr>";
      }
      g += "</table>", (k == null ? void 0 : k.deformations) && (g += '<div class="hint">Desplazamientos en mm.</div>'), _ += `
      <div class="section">
        <div class="section-title">Nodos & Desplazamientos</div>
        ${g}
      </div>
    `;
      const z = (_q = E.analyzeOutputs) == null ? void 0 : _q.val;
      if (z && (D || P)) {
        const m = [
          [
            "\u03C3 pressure",
            z.pressure,
            "kN/m\xB2"
          ],
          [
            "bending Mxx",
            z.bendingXX,
            "kN\xB7m/m"
          ],
          [
            "bending Myy",
            z.bendingYY,
            "kN\xB7m/m"
          ],
          [
            "bending Mxy",
            z.bendingXY,
            "kN\xB7m/m"
          ],
          [
            "membrane Nxx",
            z.membraneXX,
            "kN/m"
          ],
          [
            "membrane Nyy",
            z.membraneYY,
            "kN/m"
          ],
          [
            "membrane Nxy",
            z.membraneXY,
            "kN/m"
          ],
          [
            "shear Qx",
            z.shearX,
            "kN/m"
          ],
          [
            "shear Qy",
            z.shearY,
            "kN/m"
          ],
          [
            "von Mises",
            z.vonMises,
            "kN/m\xB2"
          ]
        ].filter(([c, t]) => t && t.size > 0);
        if (m.length > 0) {
          let c = '<table><tr><td class="header">campo</td>';
          for (let t = 0; t < o.length; t++) c += `<td class="header">n${o[t]}</td>`;
          c += '<td class="header">prom</td><td class="header">unid</td></tr>';
          for (const [t, s, n] of m) {
            const r = s.get(p);
            if (!r) continue;
            c += `<tr><td class="header">${t}</td>`;
            let i = 0, e = 0;
            for (let f = 0; f < o.length; f++) {
              const h = r[f];
              h != null && (i += h, e++), c += `<td>${l(h, 3)}</td>`;
            }
            const a = e > 0 ? i / e : NaN;
            c += `<td>${l(a, 3)}</td><td style="text-align:left">${n}</td></tr>`;
          }
          c += "</table>", _ += `
          <div class="section">
            <div class="section-title">Resultados an\xE1lisis (por nodo del elemento)</div>
            ${c}
            <div class="hint">Valores por nodo del elemento (interpolados desde Gauss).</div>
          </div>
        `;
        }
      }
      if (x && (k == null ? void 0 : k.deformations)) {
        const m = k.deformations.get(o[0]), c = k.deformations.get(o[1]);
        if (m && c) {
          const t = w[o[0]], s = w[o[1]], n = s[0] - t[0], r = s[1] - t[1], i = s[2] - t[2], e = Math.sqrt(n * n + r * r + i * i), a = [
            n / e,
            r / e,
            i / e
          ], f = [
            c[0] - m[0],
            c[1] - m[1],
            c[2] - m[2]
          ], h = f[0] * a[0] + f[1] * a[1] + f[2] * a[2], S = h / e, T = Math.sqrt((f[0] - h * a[0]) ** 2 + (f[1] - h * a[1]) ** 2 + (f[2] - h * a[2]) ** 2);
          _ += `
          <div class="section">
            <div class="section-title">Deformaci\xF3n del elemento</div>
            <div class="prop-row"><span class="prop-key">\u0394u axial (j\u2212i)\xB7\xEA</span><span class="prop-val">${l(h * 1e3, 4)} mm</span></div>
            <div class="prop-row"><span class="prop-key">\u03B5 axial</span><span class="prop-val">${l(S, 6)}</span></div>
            <div class="prop-row"><span class="prop-key">|\u0394u transversal|</span><span class="prop-val">${l(T * 1e3, 4)} mm</span></div>
          </div>
        `;
        }
      }
      b = document.createElement("div"), b.className = "hk-inspect-panel", b.innerHTML = `
      <h3>
        <span>\u{1F50D} Inspect \u2014 Element ${p}</span>
        <button class="close-btn" title="Cerrar">\u2715</button>
      </h3>
      ${_}
      <div class="hint">Click otro elemento para inspeccionarlo. Click X o "Inspect" para cerrar.<br/>Arrastr\xE1 del t\xEDtulo para mover el panel.</div>
    `, (_r = b.querySelector(".close-btn")) == null ? void 0 : _r.addEventListener("click", () => {
        F();
      });
      try {
        const m = localStorage.getItem("hk_inspect_panel_pos");
        if (m) {
          const { left: c, top: t } = JSON.parse(m);
          typeof c == "number" && typeof t == "number" && (b.style.left = `${c}px`, b.style.top = `${t}px`);
        }
      } catch {
      }
      const C = b.querySelector("h3");
      if (C) {
        let m = false, c = 0, t = 0, s = 0, n = 0;
        C.addEventListener("mousedown", (r) => {
          if (r.target.classList.contains("close-btn")) return;
          m = true, c = r.clientX, t = r.clientY;
          const i = b.getBoundingClientRect();
          s = i.left, n = i.top, b.style.left = `${s}px`, b.style.top = `${n}px`, r.preventDefault();
        }), window.addEventListener("mousemove", (r) => {
          if (!m || !b) return;
          const i = r.clientX - c, e = r.clientY - t, a = Math.max(0, Math.min(window.innerWidth - 100, s + i)), f = Math.max(0, Math.min(window.innerHeight - 50, n + e));
          b.style.left = `${a}px`, b.style.top = `${f}px`;
        }), window.addEventListener("mouseup", () => {
          if (!(!m || !b)) {
            m = false;
            try {
              localStorage.setItem("hk_inspect_panel_pos", JSON.stringify({
                left: parseFloat(b.style.left),
                top: parseFloat(b.style.top)
              }));
            } catch {
            }
          }
        });
      }
      document.body.appendChild(b);
    }, F = () => {
      b && (b.remove(), b = null), X();
    };
    let B = null, M = null;
    const L = (p) => {
      const y = Y();
      if (!y) return false;
      const w = y.renderer.domElement;
      return p.target === w || w.contains(p.target);
    }, tt = () => {
      const p = Y();
      if (!p) {
        console.warn("[Inspect] viewer ctx not ready yet");
        return;
      }
      const y = p.renderer.domElement;
      B = (o) => {
        if (!L(o)) return;
        const d = R(o);
        d >= 0 && (o.preventDefault(), o.stopImmediatePropagation(), v(d), H(d));
      };
      const w = (o) => {
        if (!L(o)) return;
        R(o) >= 0 && (o.preventDefault(), o.stopImmediatePropagation());
      };
      M = (o) => {
        if (!L(o)) return;
        const d = R(o);
        y.style.cursor = d >= 0 ? "pointer" : "default";
      }, window.addEventListener("click", B, true), window.addEventListener("mousedown", w, true), y.addEventListener("mousemove", M), B.__mousedownPair = w;
    }, J = () => {
      const p = Y();
      if (B) {
        window.removeEventListener("click", B, true);
        const y = B.__mousedownPair;
        y && window.removeEventListener("mousedown", y, true);
      }
      if (p && M) {
        const y = p.renderer.domElement;
        y.removeEventListener("mousemove", M), y.style.cursor = "default";
      }
      B = null, M = null, F();
    };
    O.addEventListener("click", () => {
      G = !G, O.classList.toggle("active", G), O.textContent = G ? "\u{1F50D} Inspect (ON)" : "\u{1F50D} Inspect", G ? setTimeout(tt, 50) : J();
    });
  }
  U.derive(() => {
    zt.val = W.val;
  });
  U.derive(() => {
    Et.val = et.val;
  });
  Kt = function(u) {
    const E = U.state([]), Y = U.state([]), G = U.state({}), b = U.state({}), A = U.state({}), O = U.state({}), R = U.state([]), X = {
      nodes: E,
      elements: Y,
      nodeInputs: G,
      elementInputs: b,
      deformOutputs: A,
      analyzeOutputs: O,
      objects3D: R
    }, v = Object.fromEntries(Object.entries(u.params).map(([o, d]) => {
      const k = d.default;
      return d.unitType === "force" ? [
        o,
        Pt(k)
      ] : d.unitType === "moment" ? [
        o,
        St(k)
      ] : [
        o,
        k
      ];
    })), H = () => {
      const o = {
        ...v
      };
      for (const [d, k] of Object.entries(u.params)) k.unitType === "force" && (o[d] = Bt(v[d])), k.unitType === "moment" && (o[d] = Ct(v[d]));
      return o;
    };
    let F = null, B = null;
    const M = () => {
      if (u.build(H(), X), u.computedLabels && F && B) {
        const o = u.computedLabels(H(), X);
        for (const d of Object.keys(F)) d in o && (F[d] = o[d]);
        for (const d of Object.keys(o)) d in F || (F[d] = o[d]);
        B.refresh();
      }
    }, L = document.createElement("div"), tt = `hk_paneHostPos_${u.id}`, J = (() => {
      try {
        const o = localStorage.getItem(tt);
        if (o) return JSON.parse(o);
      } catch {
      }
      return null;
    })();
    L.style.cssText = "position:fixed;" + (J ? `left:${J.left}px;top:${J.top}px;right:auto;` : "top:16px;right:16px;") + "width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:90vh;overflow-y:auto;font-size:12px;box-shadow:0 6px 24px rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.08);", document.body.appendChild(L);
    let p = null;
    const y = () => {
      p && p.dispose(), L.innerHTML = "";
      const o = new Lt({
        container: L,
        title: u.name
      });
      if (p = o, B = o, setTimeout(() => {
        const t = L.querySelector(".tp-rotv_b, .tp-fldv_b");
        if (!t) return;
        t.style.cursor = "move", t.style.userSelect = "none";
        let s = false, n = 0, r = 0, i = 0, e = 0;
        t.addEventListener("mousedown", (a) => {
          s = true, n = a.clientX, r = a.clientY;
          const f = L.getBoundingClientRect();
          i = f.left, e = f.top, L.style.right = "auto", L.style.left = `${i}px`, L.style.top = `${e}px`, a.preventDefault();
        }), window.addEventListener("mousemove", (a) => {
          if (!s) return;
          const f = a.clientX - n, h = a.clientY - r, S = Math.max(0, Math.min(window.innerWidth - 40, i + f)), T = Math.max(0, Math.min(window.innerHeight - 40, e + h));
          L.style.left = `${S}px`, L.style.top = `${T}px`;
        }), window.addEventListener("mouseup", () => {
          if (s) {
            s = false;
            try {
              localStorage.setItem(tt, JSON.stringify({
                left: parseFloat(L.style.left),
                top: parseFloat(L.style.top)
              }));
            } catch {
            }
          }
        });
      }, 0), /^(zapata|guerra-ej|safe-bench-)/.test(u.id)) {
        const t = o.addFolder({
          title: "\u{1F4C4} SAFE F2K",
          expanded: false
        });
        t.addButton({
          title: "\u{1F4E4} Exportar a SAFE (.f2k)"
        }).on("click", async () => {
          try {
            const n = v;
            if (typeof u.exportF2k == "function") {
              u.exportF2k(n);
              return;
            }
            const { downloadZapataF2k: r } = await st(async () => {
              const { downloadZapataF2k: K } = await import("./f2kExporter-COIU6xYe.js");
              return {
                downloadZapataF2k: K
              };
            }, []), i = n.ks_factor ?? 10.5, e = n.q_adm ?? 20, a = i * e * 9.80665, f = (n.useSimple ?? 1) >= 0.5, h = f ? (n.P_simple ?? 0) * 9.80665 : (n.P_D ?? 10) * 9.80665, S = f ? 0 : (n.P_L ?? 5) * 9.80665, T = f ? (n.Mx_simple ?? 0) * 9.80665 : (n.Mx_D ?? 0) * 9.80665, q = f ? (n.My_simple ?? 0) * 9.80665 : (n.My_D ?? 0) * 9.80665;
            r({
              Lz: n.Lz ?? 1.5,
              Bz: n.Bz ?? 1.5,
              tz: n.tz ?? 0.3,
              bc: n.bc ?? 0.4,
              ks_kNm3: a,
              P_dead_kN: h,
              P_live_kN: S,
              Mx_dead_kNm: T,
              My_dead_kNm: q
            }, `Zapata_Hekatan_${Date.now()}.f2k`), alert(`F2K descargado.
ks=${a.toFixed(0)} kN/m\xB3, P_dead=${h.toFixed(1)} kN.
Abrilo en SAFE: File \u2192 Import \u2192 SAFE Text File.`);
          } catch (n) {
            alert(`Error: ${(n == null ? void 0 : n.message) ?? n}`);
          }
        });
        const s = async (n, r) => {
          const { parseZapataF2k: i } = await st(async () => {
            const { parseZapataF2k: a } = await import("./f2kImporter-Cp9ARV1y.js");
            return {
              parseZapataF2k: a
            };
          }, []), e = i(n);
          return e.Lz != null && (v.Lz = e.Lz), e.Bz != null && (v.Bz = e.Bz), e.tz != null && (v.tz = e.tz), e.bc != null && (v.bc = e.bc), e.q_adm != null && (v.q_adm = e.q_adm), e.ks_factor != null && (v.ks_factor = e.ks_factor), e.ks_kNm3 != null && (v.ks = e.ks_kNm3), e.P_dead_tonf != null && (v.useSimple = 1, v.P_simple = e.P_dead_tonf, v.useD = 0, v.useL = 0, v.useS = 0), e.Mx_dead_tonfm != null && (v.Mx_simple = e.Mx_dead_tonfm), e.My_dead_tonfm != null && (v.My_simple = e.My_dead_tonfm), e.q_adm != null && e.ks_factor != null && (v.soilType = 0), y(), M(), e;
        };
        window.__hekatanImportF2kText = s, t.addButton({
          title: "\u{1F4E5} Importar F2K\u2026"
        }).on("click", () => {
          const n = document.createElement("input");
          n.type = "file", n.accept = ".f2k,.txt", n.onchange = async (r) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _i;
            const i = (_a = r.target.files) == null ? void 0 : _a[0];
            if (i) try {
              const e = await i.text(), a = await s(e, i.name);
              alert(`F2K importado: ${i.name}

Geometr\xEDa:
  Lz = ${(_b = a.Lz) == null ? void 0 : _b.toFixed(2)} m, Bz = ${(_c = a.Bz) == null ? void 0 : _c.toFixed(2)} m, tz = ${(_d = a.tz) == null ? void 0 : _d.toFixed(2)} m
  Columna = ${(_e = a.bc) == null ? void 0 : _e.toFixed(2)} m

Suelo:
  ks = ${(_f = a.ks_kNm3) == null ? void 0 : _f.toFixed(0)} kN/m\xB3
  q_adm = ${(_g = a.q_adm) == null ? void 0 : _g.toFixed(1)} tonf/m\xB2  ks_factor = ${(_h = a.ks_factor) == null ? void 0 : _h.toFixed(1)}

Cargas (modo Simple):
  P = ${(_i = a.P_dead_tonf) == null ? void 0 : _i.toFixed(2)} tonf
  Mx = ${(a.Mx_dead_tonfm ?? 0).toFixed(2)} tonf\xB7m
  My = ${(a.My_dead_tonfm ?? 0).toFixed(2)} tonf\xB7m

\u2713 Los sliders del Tweakpane se actualizaron.`);
            } catch (e) {
              alert(`Error: ${(e == null ? void 0 : e.message) ?? e}`);
            }
          }, n.click();
        }), t.addButton({
          title: "\u{1F40D} Exportar a OpenSeesPy (.py)"
        }).on("click", async () => {
          try {
            const { exportZapataOpsPy: n } = await st(async () => {
              const { exportZapataOpsPy: S } = await import("./opsPyExporter-caFBRJ-n.js");
              return {
                exportZapataOpsPy: S
              };
            }, []), r = v, i = (r.ks_factor ?? 10.5) * (r.q_adm ?? 20) * 9.80665, e = (r.useSimple ?? 1) >= 0.5, a = n({
              Lz: r.Lz ?? 1.5,
              Bz: r.Bz ?? 1.5,
              tz: r.tz ?? 0.3,
              bc: r.bc ?? 0.4,
              ks_kNm3: i,
              P_dead_kN: e ? (r.P_simple ?? 0) * 9.80665 : (r.P_D ?? 10) * 9.80665,
              P_live_kN: e ? 0 : (r.P_L ?? 5) * 9.80665
            }), f = new Blob([
              a
            ], {
              type: "text/x-python"
            }), h = document.createElement("a");
            h.href = URL.createObjectURL(f), h.download = `Zapata_Hekatan_${Date.now()}.py`, h.click(), alert(`OpenSeesPy script descargado.
Ejecutar: python -X utf8 <archivo>.py`);
          } catch (n) {
            alert(`Error: ${(n == null ? void 0 : n.message) ?? n}`);
          }
        });
      }
      const d = o.addFolder({
        title: "Unidades",
        expanded: false
      }), k = {
        force: W.val,
        disp: et.val
      };
      d.addBinding(k, "force", {
        label: "Fuerza",
        options: {
          kN: "kN",
          tonf: "tonf",
          kip: "kip"
        }
      }).on("change", (t) => {
        const s = W.val, n = t.value;
        if (s !== n) {
          const r = s === "kN" ? 1 : s === "tonf" ? 9.80665 : 4.4482216, i = n === "kN" ? 1 : n === "tonf" ? 9.80665 : 4.4482216;
          for (const [e, a] of Object.entries(u.params)) (a.unitType === "force" || a.unitType === "moment") && (v[e] = v[e] * r / i);
        }
        W.val = n, y(), M();
      }), d.addBinding(k, "disp", {
        label: "Desplazamiento",
        options: {
          mm: "mm",
          cm: "cm",
          m: "m",
          in: "in"
        }
      }).on("change", (t) => {
        et.val = t.value, y(), M();
      });
      const x = d.addFolder({
        title: "\u{1F310} Sistema (preset)",
        expanded: true
      }), P = {
        sistema: Q()
      };
      x.addBinding(P, "sistema", {
        label: "Preset",
        options: {
          "Metric MKS (tonf, m, mm, kgf/cm\xB2)": "Metric MKS",
          "Metric SI (kN, m, mm, MPa)": "Metric SI",
          "U.S. Imperial (kip, ft, in, ksi)": "U.S. Imperial",
          "Custom (granular)": "Custom"
        }
      }).on("change", (t) => {
        t.value !== "Custom" && (It(t.value), k.force = W.val, k.disp = et.val, I.stress = nt.val, I.subgrade = at.val, I.stiffTrans = ot.val, I.lengthSection = it.val, o.refresh(), y(), M());
      });
      const D = d.addFolder({
        title: "\u{1F4D0} Display Units (granular)",
        expanded: false
      }), I = {
        stress: nt.val,
        subgrade: at.val,
        stiffTrans: ot.val,
        lengthSection: it.val
      };
      D.addBinding(I, "stress", {
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
        nt.val = t.value, P.sistema = Q(), o.refresh(), M();
      }), D.addBinding(I, "subgrade", {
        label: "Subgrade ks",
        options: {
          "kN/m\xB3": "kN/m\xB3",
          "tonf/m\xB3": "tonf/m\xB3",
          "kgf/cm\xB3": "kgf/cm\xB3",
          "kip/ft\xB3": "kip/ft\xB3",
          pci: "pci"
        }
      }).on("change", (t) => {
        at.val = t.value, P.sistema = Q(), o.refresh(), M();
      }), D.addBinding(I, "stiffTrans", {
        label: "Stiffness K",
        options: {
          "kN/m": "kN/m",
          "tonf/m": "tonf/m",
          "kip/in": "kip/in",
          "kip/ft": "kip/ft",
          "N/mm": "N/mm"
        }
      }).on("change", (t) => {
        ot.val = t.value, P.sistema = Q(), o.refresh(), M();
      }), D.addBinding(I, "lengthSection", {
        label: "Length section",
        options: {
          mm: "mm",
          cm: "cm",
          m: "m",
          in: "in",
          ft: "ft"
        }
      }).on("change", (t) => {
        it.val = t.value, P.sistema = Q(), o.refresh(), M();
      });
      const N = "Par\xE1metros", _ = /* @__PURE__ */ new Map(), g = (t) => t === N || /\bmodo\b/i.test(t) || /activar/i.test(t) || /combinaci/i.test(t), z = (t) => (_.has(t) || _.set(t, o.addFolder({
        title: t,
        expanded: g(t)
      })), _.get(t));
      let C = null;
      const m = () => {
        C !== null && clearTimeout(C), C = window.setTimeout(() => {
          C = null, M();
        }, 120);
      }, c = {};
      for (const [t, s] of Object.entries(u.params)) {
        const n = s.folder ?? N, r = z(n);
        if (s.boolean) {
          c[t] = v[t] >= 0.5, r.addBinding(c, t, {
            label: s.label ?? t
          }).on("change", (f) => {
            v[t] = f.value ? 1 : 0, u.onParamChange && (u.onParamChange(t, v), o.refresh()), m();
          });
          continue;
        }
        const i = Nt(s.label ?? t), e = s.unitType === "force" ? ` ${Ft()}` : s.unitType === "moment" ? ` ${Dt()}` : s.unitType === "disp" ? ` ${Ot()}` : "", a = {
          label: i + e
        };
        s.options !== void 0 ? a.options = s.options : (s.min !== void 0 && (a.min = s.min), s.max !== void 0 && (a.max = s.max), s.step !== void 0 && (a.step = s.step)), r.addBinding(v, t, a).on("change", () => {
          u.onParamChange && (u.onParamChange(t, v), o.refresh()), m();
        });
      }
      if (u.computedLabels) {
        const t = o.addFolder({
          title: "\u{1F4CA} Resultados",
          expanded: true
        }), s = u.computedLabels(H(), X);
        F = F ?? {};
        for (const n of Object.keys(s)) F[n] = s[n];
        for (const n of Object.keys(s)) t.addBinding(F, n, {
          readonly: true,
          view: "text",
          interval: 0
        });
      }
    };
    y();
    const w = Mt({
      mesh: {
        nodes: E,
        elements: Y,
        nodeInputs: G,
        elementInputs: b,
        deformOutputs: A,
        analyzeOutputs: O
      },
      objects3D: R,
      settingsObj: {
        deformedShape: true,
        displayScale: -1.5,
        shellResults: u.defaultShellResult ?? "displacementZ",
        gridSize: 10,
        showCotas: true
      }
    });
    document.body.append(w, Tt({
      sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
      author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
    })), Yt(w, {
      nodes: E,
      elements: Y,
      elementInputs: b,
      deformOutputs: A,
      analyzeOutputs: O
    }), M();
  };
})();
export {
  __tla,
  Kt as r
};
