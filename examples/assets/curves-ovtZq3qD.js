import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as t } from "./theme-CzzIlc4y.js";
import { Q as x, V as p } from "./Text-Cin90tvN.js";
import { g as Y } from "./getViewer-DqPI0kta.js";
import { g as O } from "./getParameters-BvxkSzQ5.js";
import { g as I } from "./styles-BtnDi-1k.js";
import { a as X, g as D, __tla as __tla_0 } from "./getCad3d-Bgi9b0nt.js";
import { __tla as __tla_1 } from "./plateQ4Cpp-Duau68tz.js";
import "./analyze-B6dp1uvy.js";
import "./pureFunctionsAny.generated-BHh0zpCc.js";
import { __tla as __tla_2 } from "./getMesh-Ch3239Ot.js";
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
  const n = {
    xSpan: {
      value: t.state(16),
      min: 1,
      max: 20,
      step: 0.1,
      label: "xSpan (m)"
    },
    xDivisions: {
      value: t.state(14),
      min: 5,
      max: 20,
      step: 1
    },
    ySpan: {
      value: t.state(5),
      min: 1,
      max: 10,
      step: 0.1,
      label: "ySpan (m)"
    },
    yDivisions: {
      value: t.state(3),
      min: 1,
      max: 5,
      step: 1
    },
    height: {
      value: t.state(9),
      min: 0,
      max: 15,
      step: 0.1,
      label: "height (m)"
    },
    heightOffset: {
      value: t.state(0),
      min: -10,
      max: 10,
      step: 0.1,
      label: "height offset (m)"
    }
  }, i = t.state([]), m = t.state([]), u = t.state({}), c = t.state({}), d = t.state({
    deformations: /* @__PURE__ */ new Map(),
    reactions: /* @__PURE__ */ new Map()
  }), h = t.state({
    normals: /* @__PURE__ */ new Map(),
    shearsY: /* @__PURE__ */ new Map(),
    shearsZ: /* @__PURE__ */ new Map(),
    torsions: /* @__PURE__ */ new Map(),
    bendingsY: /* @__PURE__ */ new Map(),
    bendingsZ: /* @__PURE__ */ new Map(),
    bendingXX: /* @__PURE__ */ new Map(),
    bendingYY: /* @__PURE__ */ new Map(),
    bendingXY: /* @__PURE__ */ new Map(),
    membraneXX: /* @__PURE__ */ new Map(),
    membraneYY: /* @__PURE__ */ new Map(),
    membraneXY: /* @__PURE__ */ new Map(),
    tranverseShearX: /* @__PURE__ */ new Map(),
    tranverseShearY: /* @__PURE__ */ new Map()
  });
  t.derive(() => {
    if (X.val) return;
    const l = n.xSpan.value.val, s = n.xDivisions.value.val, w = n.ySpan.value.val, r = n.yDivisions.value.val, f = n.height.value.val, g = n.heightOffset.value.val, y = new x(new p(0, 0, 0), new p(0 + l / 2 + g, 0, f), new p(0 + l, 0, 0)), v = [], o = [];
    for (let e = 0; e <= r; e++) v.push(...y.getPoints(s).map((a) => (a.setY(0 + e * (w / r)), a.toArray())));
    for (let e = 0; e <= (r + 1) * s; e += s + 1) for (let a = 0; a < s; a++) o.push([
      e + a,
      e + a + 1
    ]);
    for (let e = 0; e < r * (s + 1); e += s + 1) for (let a = 0; a < s + 1; a++) o.push([
      a + e,
      a + s + 1 + e
    ]);
    const S = [
      ...Array(r + 1).keys()
    ].map((e) => (s + 1) * e), b = [
      ...Array(r + 1).keys()
    ].map((e) => (s + 1) * e + s), M = {
      supports: new Map([
        ...S.map((e) => [
          e,
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ]),
        ...b.map((e) => [
          e,
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ])
      ])
    };
    i.val = v, m.val = o, u.val = M;
  });
  document.body.append(D({
    nodes: i,
    elements: m,
    nodeInputs: u,
    elementInputs: c,
    deformOutputs: d,
    analyzeOutputs: h
  }), O(n), Y({
    mesh: {
      nodes: i,
      elements: m,
      nodeInputs: u,
      elementInputs: c,
      deformOutputs: d,
      analyzeOutputs: h
    }
  }), I({
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/curves/main.ts",
    author: "https://www.linkedin.com/in/madil4/"
  }));
});
