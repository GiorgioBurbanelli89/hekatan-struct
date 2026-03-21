import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as t } from "./theme-DNr3SX9M.js";
import { a as Y } from "./analyze-C6GU_3Il.js";
import { d as z, m as E, __tla as __tla_0 } from "./plateQ4Cpp-keaLMavB.js";
import { g as G } from "./getViewer-C-DuwBFX.js";
import { g as S } from "./getParameters-DuavtsRL.js";
import { g as A } from "./styles-kwcqhtUA.js";
import { c as R, g as H, __tla as __tla_1 } from "./getCad3d-jzFDKl8A.js";
import "./complex-i8qiIvCl.js";
import "./Text-BJMxMB48.js";
import { __tla as __tla_2 } from "./getMesh-C8P43tpY.js";
import "./__vite-browser-external-D7Ct-6yo.js";
import "./pureFunctionsAny.generated-BKcodEQ5.js";
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
  const i = 29500, L = 0.3, v = i / (2 * (1 + L)), k = 180, B = 114, J = 240, I = 490 / 1e3 / 12 ** 3 / 386.4, _ = 43, f = 5630, O = 391, g = 34.8, C = 24.7, $ = 928, x = 225, h = 5.9, X = 6, p = {
    storyH: {
      value: t.state(k),
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
  }, s = t.state([]), e = t.state([]), r = t.state({}), o = t.state({}), u = t.state({}), d = t.state({}), w = R();
  t.derive(() => {
    const n = p.storyH.value.val, l = p.bayX.value.val, m = p.bayY.value.val;
    s.val = [
      [
        0,
        0,
        0
      ],
      [
        0,
        0,
        n
      ],
      [
        0,
        m,
        0
      ],
      [
        0,
        m,
        n
      ],
      [
        l,
        0,
        0
      ],
      [
        l,
        0,
        n
      ],
      [
        l,
        m,
        0
      ],
      [
        l,
        m,
        n
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
    ], r.val = {
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
    const a = (y, c) => new Map(e.val.map((P, b) => [
      b,
      b < 4 ? y : c
    ]));
    o.val = {
      elasticities: a(i, i),
      shearModuli: a(v, v),
      areas: a(_, C),
      momentsOfInertiaZ: a(O, x),
      momentsOfInertiaY: a(f, $),
      torsionalConstants: a(g, h),
      densities: new Map(e.val.map((y, c) => [
        c,
        I
      ]))
    }, u.val = z(s.val, e.val, r.val, o.val), d.val = Y(s.val, e.val, o.val, u.val);
    const M = E(s.val, e.val, r.val, o.val, X);
    w.render(M, {
      title: "Example 6.3 Space Frame",
      properties: [
        `E=${i} ksi, G=${v.toFixed(0)} ksi, \u03C1=${I.toExponential(3)} kip\xB7s\xB2/in\u2074`,
        `Cols: W24x146 (A=${_}, Iz=${f}, Iy=${O}, J=${g})`,
        `Girs: W14x84  (A=${C}, Iz=${$}, Iy=${x}, J=${h})`
      ]
    });
  });
  document.body.append(H({
    nodes: s,
    elements: e,
    nodeInputs: r,
    elementInputs: o,
    deformOutputs: u,
    analyzeOutputs: d
  }), S(p), G({
    mesh: {
      nodes: s,
      elements: e,
      nodeInputs: r,
      elementInputs: o,
      deformOutputs: u,
      analyzeOutputs: d
    },
    settingsObj: {
      deformedShape: true,
      gridSize: 300
    }
  }), A({
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/beams/main.ts",
    author: "https://www.linkedin.com/in/madil4/"
  }));
  document.body.appendChild(w.div);
});
