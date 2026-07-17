import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as e } from "./theme-Buj43zQ_.js";
import { g as r } from "./getViewer-DCSFfShx.js";
import { g as i } from "./getParameters-DisBC_G4.js";
import { g as n } from "./styles-B2mqimRv.js";
import { g as p, __tla as __tla_0 } from "./getMesh-B86_v1pL.js";
import "./Text-BaPYKrWi.js";
import "./tweakpane-BXg6ZhiP.js";
import "./__vite-browser-external-D7Ct-6yo.js";
import "./pureFunctionsAny.generated-cNLQlHDB.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const t = {
    boundary: {
      value: e.state(5),
      min: 1,
      max: 10,
      step: 0.1,
      label: "Boundary point"
    }
  }, o = e.state([]), m = e.state([]);
  e.derive(() => {
    const { nodes: a, elements: s } = p({
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
        [
          t.boundary.value.val,
          0,
          3
        ],
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
      ]
    });
    o.val = a, m.val = s;
  });
  document.body.append(i(t), r({
    mesh: {
      nodes: o,
      elements: m
    }
  }), n({
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/2d-mesh/main.ts",
    author: "https://www.linkedin.com/in/madil4/"
  }));
});
