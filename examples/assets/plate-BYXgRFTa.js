import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as t } from "./theme-CzzIlc4y.js";
import { a as l } from "./analyze-ClLKGn9k.js";
import { d as i, __tla as __tla_0 } from "./didacticCpp-BGUxSkhs.js";
import { g as r } from "./getViewer-ByNJVriV.js";
import { g as u } from "./getParameters-D_F_vOn_.js";
import { g as d } from "./styles-B8h3dtQW.js";
import { g as v, __tla as __tla_1 } from "./getMesh-B1dmlgUt.js";
import "./pureFunctionsAny.generated-JAcEVsJ7.js";
import "./Text-CBH-tcJP.js";
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
  })()
]).then(async () => {
  const m = {
    xPosition: {
      value: t.state(15),
      min: 5,
      max: 20
    },
    Ex: {
      value: t.state(100),
      min: 50,
      max: 500
    },
    Ey: {
      value: t.state(100),
      min: 50,
      max: 500
    },
    load: {
      value: t.state(-3),
      min: -10,
      max: 10,
      step: 1
    }
  }, a = {
    nodes: t.state([]),
    elements: t.state([]),
    nodeInputs: t.state({}),
    elementInputs: t.state({}),
    deformOutputs: t.state({}),
    analyzeOutputs: t.state({})
  };
  t.derive(() => {
    const { nodes: n, elements: s, boundaryIndices: p } = v({
      points: [
        [
          0,
          0,
          0
        ],
        [
          15,
          0,
          0
        ],
        [
          m.xPosition.value.val,
          10,
          0
        ],
        [
          0,
          5,
          0
        ]
      ],
      polygon: [
        0,
        1,
        2,
        3
      ],
      maxMeshSize: 0.5
    });
    a.nodeInputs.val = {
      supports: new Map(p.map((o) => [
        o,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])),
      loads: new Map(n.map((o, e) => [
        e,
        [
          0,
          0,
          m.load.value.val,
          0,
          0,
          0
        ]
      ]))
    }, a.nodes.val = n, a.elements.val = s, a.elementInputs.val = {
      elasticities: new Map(s.map((o, e) => [
        e,
        m.Ex.value.val
      ])),
      elasticitiesOrthogonal: new Map(s.map((o, e) => [
        e,
        m.Ey.value.val
      ])),
      thicknesses: new Map(s.map((o, e) => [
        e,
        1
      ])),
      poissonsRatios: new Map(s.map((o, e) => [
        e,
        0.3
      ])),
      shearModuli: new Map(s.map((o, e) => [
        e,
        100
      ]))
    }, a.deformOutputs.val = i(n, s, a.nodeInputs.val, a.elementInputs.val), a.analyzeOutputs.val = l(n, s, a.elementInputs.val, a.deformOutputs.val);
  });
  document.body.append(u(m), r({
    mesh: a,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), d({
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/plate/main.ts",
    author: "https://www.linkedin.com/in/mahjoubmusaab/"
  }));
});
