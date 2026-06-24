import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as e } from "./theme-N6TOO4-G.js";
import { d as p, g as l, e as c } from "./getViewer-LvfBniPc.js";
import { g as d } from "./getParameters-DHsPbgw3.js";
import { g } from "./styles-C91QLG29.js";
import { g as u, __tla as __tla_0 } from "./getMesh-BksPag0G.js";
import { n as b, s as v } from "./pureFunctionsAny.generated-DeJSBP3k.js";
import "./Text-RdOEoJ2D.js";
import "./tweakpane-BXg6ZhiP.js";
import "./__vite-browser-external-D7Ct-6yo.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const i = {
    boundary: {
      value: e.state(10),
      min: 1,
      max: 10,
      step: 0.1,
      label: "Boundary point"
    }
  }, o = e.state([]), r = e.state([]), n = e.state([]), m = e.state([
    p(o, r, n)
  ]);
  e.derive(() => {
    const t = [
      i.boundary.value.val,
      0,
      3
    ], { nodes: a, elements: s } = u({
      points: [
        [
          0,
          0,
          0
        ],
        [
          5,
          0,
          0
        ],
        t,
        [
          8,
          0,
          7
        ],
        [
          15,
          0,
          5
        ],
        [
          15,
          0,
          0
        ],
        [
          20,
          0,
          0
        ],
        [
          20,
          0,
          10
        ],
        [
          0,
          0,
          10
        ],
        [
          0,
          0,
          0
        ]
      ],
      polygon: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      maxMeshSize: 1
    });
    o.val = a, r.val = s, n.val = h(t, o.val), m.val = [
      ...m.rawVal
    ];
  });
  document.body.append(d(i), l({
    mesh: {
      nodes: o,
      elements: r
    },
    objects3D: m
  }), c(n), g({
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/color-map/main.ts",
    author: "https://www.linkedin.com/in/siu-kai-cheung/"
  }));
  function h(t, a) {
    return a.map((s) => b(v(s, t)));
  }
});
