import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as t } from "./theme-CzzIlc4y.js";
import { g as i } from "./getViewer-DqPI0kta.js";
import { g as n } from "./getParameters-BvxkSzQ5.js";
import { g as p } from "./styles-BtnDi-1k.js";
import { g as d, __tla as __tla_0 } from "./getCad3d-B0yMjCJc.js";
import "./Text-Cin90tvN.js";
import { __tla as __tla_1 } from "./plateQ4Cpp-WQQsWWc3.js";
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
  const c = {}, e = t.state([]), s = t.state([]), o = t.state({}), m = t.state({}), a = t.state({}), r = t.state({}), l = {
    deformedShape: true,
    shellResults: "displacementZ",
    gridSize: 15
  };
  document.body.append(d({
    nodes: e,
    elements: s,
    nodeInputs: o,
    elementInputs: m,
    deformOutputs: a,
    analyzeOutputs: r
  }), n(c), i({
    mesh: {
      nodes: e,
      elements: s,
      nodeInputs: o,
      elementInputs: m,
      deformOutputs: a,
      analyzeOutputs: r
    },
    settingsObj: l
  }), p({
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/beams/main.ts",
    author: "https://www.linkedin.com/in/madil4/"
  }));
});
