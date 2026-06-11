import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as e } from "./theme-BUyDDEHW.js";
import { d as l, g as p, e as c } from "./getViewer-BNf7Ym52.js";
import { g as d } from "./getParameters-CD9MeSfL.js";
import { g } from "./styles-tOu98xnK.js";
import { g as u, __tla as __tla_0 } from "./getMesh-BksPag0G.js";
import { n as b, s as v } from "./pureFunctionsAny.generated-DeJSBP3k.js";
import "./Text-DR6pe57W.js";
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
  }, o = e.state([]), n = e.state([]), r = e.state([]), m = e.state([
    l(o, n, r)
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
    o.val = a, n.val = s, r.val = h(t, o.val), m.val = [
      ...m.rawVal
    ];
  });
  document.body.append(d(i), p({
    mesh: {
      nodes: o,
      elements: n
    },
    objects3D: m
  }), c(r), g({
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/color-map/main.ts",
    author: "https://www.linkedin.com/in/siu-kai-cheung/"
  }));
  function h(t, a) {
    return a.map((s) => b(v(s, t)));
  }
});
