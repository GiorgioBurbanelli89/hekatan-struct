import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as t } from "./theme-DNr3SX9M.js";
import { g as i } from "./getViewer-C-DuwBFX.js";
import { g as n } from "./getParameters-DuavtsRL.js";
import { g as p } from "./styles-kwcqhtUA.js";
import { g as d, __tla as __tla_0 } from "./getCad3d-jzFDKl8A.js";
import "./Text-BJMxMB48.js";
import "./analyze-C6GU_3Il.js";
import "./complex-i8qiIvCl.js";
import { __tla as __tla_1 } from "./plateQ4Cpp-keaLMavB.js";
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
