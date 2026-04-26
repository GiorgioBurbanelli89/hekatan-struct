import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as e } from "./Text-CSfbf1xJ.js";
import { a as y } from "./analyze-BydHtRcI.js";
import { d as z, __tla as __tla_0 } from "./didacticCpp-B5f-GyHC.js";
import { g as I, b as S } from "./styles-CXNYye6A.js";
import { g as O } from "./getParameters-DsthXvNv.js";
import { g as M, __tla as __tla_1 } from "./getCad3d-DPiETcmE.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
import { __tla as __tla_2 } from "./deform-CGyu4ATa.js";
import "./exampleVersion-D1A_5i59.js";
import { __tla as __tla_3 } from "./getMesh-CMOA6JCi.js";
import "./__vite-browser-external-D7Ct-6yo.js";
import "./renderModalTable-H-0rlxOz.js";
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
  const o = {
    dx: {
      value: e.state(2),
      min: 1,
      max: 5,
      step: 0.1,
      label: "dx (m)"
    },
    dy: {
      value: e.state(2),
      min: 1,
      max: 5,
      step: 0.1,
      label: "dy (m)"
    },
    dz: {
      value: e.state(2),
      min: 1,
      max: 5,
      step: 0.1,
      label: "dz (m)"
    },
    divisions: {
      value: e.state(4),
      min: 1,
      max: 10,
      step: 1
    },
    load: {
      value: e.state(30),
      min: 1,
      max: 50,
      step: 0.5,
      label: "load (kN)"
    }
  }, u = e.state([]), i = e.state([]), d = e.state({}), v = e.state({}), g = e.state({}), x = e.state({});
  e.derive(() => {
    const c = o.dx.value.val, f = o.dy.value.val, n = o.dz.value.val, l = o.divisions.value.val;
    let s = [], a = [];
    for (let t = 0; t <= l; t++) s.push([
      0,
      0,
      n * t
    ], [
      c,
      0,
      n * t
    ], [
      c,
      f,
      n * t
    ], [
      0,
      f,
      n * t
    ]);
    s = s.map((t) => [
      6 + t[0],
      6 + t[1],
      t[2]
    ]);
    for (let t = 0; t < l * 4; ) t += 4, a.push([
      t,
      t + 1
    ], [
      t + 1,
      t + 2
    ], [
      t + 2,
      t + 3
    ], [
      t + 3,
      t
    ]), a.push([
      t,
      t + 2
    ]);
    for (let t = 0; t < l * 4; t++) a.push([
      t,
      t + 4
    ]);
    for (let t = 0; t < l * 4; t += 4) a.push([
      t,
      t + 5
    ], [
      t + 3,
      t + 6
    ]), a.push([
      t,
      t + 7
    ], [
      t + 1,
      t + 6
    ]);
    const m = [
      true,
      true,
      true,
      true,
      true,
      true
    ], h = {
      supports: /* @__PURE__ */ new Map([
        [
          0,
          m
        ],
        [
          1,
          m
        ],
        [
          2,
          m
        ],
        [
          3,
          m
        ]
      ]),
      loads: /* @__PURE__ */ new Map([
        [
          s.length - 2,
          [
            o.load.value.val,
            0,
            0,
            0,
            0,
            0
          ]
        ]
      ])
    }, p = {
      elasticities: new Map(a.map((t, r) => [
        r,
        100
      ])),
      areas: new Map(a.map((t, r) => [
        r,
        10
      ]))
    }, b = z(s, a, h, p), w = y(s, a, p, b);
    u.val = s, i.val = a, d.val = h, v.val = p, g.val = b, x.val = w;
  });
  document.body.append(M({
    nodes: u,
    elements: i,
    nodeInputs: d,
    elementInputs: v
  }), O(o), I({
    mesh: {
      nodes: u,
      elements: i,
      nodeInputs: d,
      elementInputs: v,
      deformOutputs: g,
      analyzeOutputs: x
    },
    settingsObj: {
      deformedShape: true,
      gridSize: 15
    }
  }), S({
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/3d-structure/main.ts",
    author: "https://www.linkedin.com/in/madil4/"
  }));
});
