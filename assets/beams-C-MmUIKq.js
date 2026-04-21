import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as t } from "./theme-CzzIlc4y.js";
import { a as S } from "./analyze-ClLKGn9k.js";
import { d as Y, m as z, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { g as E } from "./getViewer-DkrjKQ7d.js";
import { g as G } from "./getParameters-D_F_vOn_.js";
import { g as A } from "./styles-B8h3dtQW.js";
import { g as R, __tla as __tla_1 } from "./getCad3d-Crx29i4I.js";
import { c as k } from "./renderModalTable-29W4CuGz.js";
import "./pureFunctionsAny.generated-JAcEVsJ7.js";
import "./Text-CBH-tcJP.js";
import { __tla as __tla_2 } from "./getMesh-CUX4SIXA.js";
import "./__vite-browser-external-D7Ct-6yo.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })()
]).then(async () => {
  const m = 29500, H = 0.3, v = m / (2 * (1 + H)), L = 180, B = 114, J = 240, I = 490 / 1e3 / 12 ** 3 / 386.4, _ = 43, O = 5630, g = 391, x = 34.8, C = 24.7, $ = 928, h = 225, w = 5.9, T = 6, p = {
    storyH: {
      value: t.state(L),
      min: 100,
      max: 300,
      step: 10,
      label: "Story H (in)"
    },
    bayX: {
      value: t.state(B),
      min: 50,
      max: 300,
      step: 10,
      label: "Bay X (in)"
    },
    bayY: {
      value: t.state(J),
      min: 100,
      max: 400,
      step: 10,
      label: "Bay Y (in)"
    }
  }, o = t.state([]), e = t.state([]), n = t.state({}), r = t.state({}), u = t.state({}), y = t.state({}), c = k();
  t.derive(() => {
    const a = p.storyH.value.val, l = p.bayX.value.val, i = p.bayY.value.val;
    o.val = [
      [
        0,
        0,
        0
      ],
      [
        0,
        0,
        a
      ],
      [
        0,
        i,
        0
      ],
      [
        0,
        i,
        a
      ],
      [
        l,
        0,
        0
      ],
      [
        l,
        0,
        a
      ],
      [
        l,
        i,
        0
      ],
      [
        l,
        i,
        a
      ]
    ], e.val = [
      [
        0,
        1
      ],
      [
        2,
        3
      ],
      [
        4,
        5
      ],
      [
        6,
        7
      ],
      [
        1,
        5
      ],
      [
        3,
        7
      ],
      [
        1,
        3
      ],
      [
        5,
        7
      ]
    ], n.val = {
      supports: /* @__PURE__ */ new Map([
        [
          0,
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ],
        [
          2,
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ],
        [
          4,
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ],
        [
          6,
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ]
      ]),
      loads: /* @__PURE__ */ new Map([
        [
          3,
          [
            10,
            0,
            0,
            0,
            0,
            0
          ]
        ]
      ])
    };
    const s = (b, d) => new Map(e.val.map((X, f) => [
      f,
      f < 4 ? b : d
    ]));
    r.val = {
      elasticities: s(m, m),
      shearModuli: s(v, v),
      areas: s(_, C),
      momentsOfInertiaZ: s(g, h),
      momentsOfInertiaY: s(O, $),
      torsionalConstants: s(x, w),
      densities: new Map(e.val.map((b, d) => [
        d,
        I
      ]))
    }, u.val = Y(o.val, e.val, n.val, r.val), y.val = S(o.val, e.val, r.val, u.val);
    const M = z(o.val, e.val, n.val, r.val, T);
    c.render(M, {
      title: "Example 6.3 Space Frame",
      properties: [
        `E=${m} ksi, G=${v.toFixed(0)} ksi, \u03C1=${I.toExponential(3)} kip\xB7s\xB2/in\u2074`,
        `Cols: W24x146 (A=${_}, Iz=${O}, Iy=${g}, J=${x})`,
        `Girs: W14x84  (A=${C}, Iz=${$}, Iy=${h}, J=${w})`
      ]
    });
  });
  document.body.append(R({
    nodes: o,
    elements: e,
    nodeInputs: n,
    elementInputs: r,
    deformOutputs: u,
    analyzeOutputs: y
  }), G(p), E({
    mesh: {
      nodes: o,
      elements: e,
      nodeInputs: n,
      elementInputs: r,
      deformOutputs: u,
      analyzeOutputs: y
    },
    settingsObj: {
      deformedShape: true,
      gridSize: 300
    }
  }), A({
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/beams/main.ts",
    author: "https://www.linkedin.com/in/madil4/"
  }));
  document.body.appendChild(c.div);
  setTimeout(() => {
    const a = document.querySelector('[data-ex="edificio"]');
    a && a.click(), c.div && (c.div.style.display = "none");
  }, 200);
});
