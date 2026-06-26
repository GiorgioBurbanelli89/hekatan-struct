import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as t } from "./theme-Cr2LU0HL.js";
import { a as S } from "./analyze-DoaxThCI.js";
import { d as Y, m as z, __tla as __tla_0 } from "./didacticCpp-DDG05360.js";
import { g as E } from "./getViewer-BTj4y80d.js";
import { g as G } from "./getParameters-BZyLCfI_.js";
import { g as A } from "./styles-ChEEn6BP.js";
import { g as R, __tla as __tla_1 } from "./getCad3d-Dy6gR9K7.js";
import { c as k } from "./e2kExporter-F_8dhN0c.js";
import "./pureFunctionsAny.generated-cNLQlHDB.js";
import { __tla as __tla_2 } from "./deform-BeOgLxmb.js";
import "./preload-helper-DrUBW0xl.js";
import "./Text-BbGxMO8j.js";
import "./tweakpane-BXg6ZhiP.js";
import "./exampleVersion-D1A_5i59.js";
import { __tla as __tla_3 } from "./getMesh-B5zl1JtK.js";
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
  })(),
  (() => {
    try {
      return __tla_3;
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
  }, s = t.state([]), e = t.state([]), n = t.state({}), r = t.state({}), u = t.state({}), y = t.state({}), c = k();
  t.derive(() => {
    const a = p.storyH.value.val, i = p.bayX.value.val, l = p.bayY.value.val;
    s.val = [
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
        l,
        0
      ],
      [
        0,
        l,
        a
      ],
      [
        i,
        0,
        0
      ],
      [
        i,
        0,
        a
      ],
      [
        i,
        l,
        0
      ],
      [
        i,
        l,
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
    const o = (b, d) => new Map(e.val.map((X, f) => [
      f,
      f < 4 ? b : d
    ]));
    r.val = {
      elasticities: o(m, m),
      shearModuli: o(v, v),
      areas: o(_, C),
      momentsOfInertiaZ: o(g, h),
      momentsOfInertiaY: o(O, $),
      torsionalConstants: o(x, w),
      densities: new Map(e.val.map((b, d) => [
        d,
        I
      ]))
    }, u.val = Y(s.val, e.val, n.val, r.val), y.val = S(s.val, e.val, r.val, u.val);
    const M = z(s.val, e.val, n.val, r.val, T);
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
    nodes: s,
    elements: e,
    nodeInputs: n,
    elementInputs: r,
    deformOutputs: u,
    analyzeOutputs: y
  }), G(p), E({
    mesh: {
      nodes: s,
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
