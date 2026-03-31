import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as t } from "./theme-CzzIlc4y.js";
import { g as i } from "./getViewer-DAYUXN9p.js";
import { g as n } from "./getParameters-D_F_vOn_.js";
import { g as p } from "./styles-B8h3dtQW.js";
import { g as c, __tla as __tla_0 } from "./getCad3d-BbRh4WxH.js";
import "./Text-CBH-tcJP.js";
import { __tla as __tla_1 } from "./didacticCpp-BGUxSkhs.js";
import "./analyze-ClLKGn9k.js";
import "./pureFunctionsAny.generated-JAcEVsJ7.js";
import { __tla as __tla_2 } from "./getMesh-B1dmlgUt.js";
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
  const d = {}, e = t.state([]), o = t.state([]), s = t.state({}), r = t.state({}), a = t.state({}), m = t.state({}), u = {
    deformedShape: true,
    shellResults: "displacementZ",
    gridSize: 15
  };
  document.body.append(c({
    nodes: e,
    elements: o,
    nodeInputs: s,
    elementInputs: r,
    deformOutputs: a,
    analyzeOutputs: m
  }), n(d), i({
    mesh: {
      nodes: e,
      elements: o,
      nodeInputs: s,
      elementInputs: r,
      deformOutputs: a,
      analyzeOutputs: m
    },
    settingsObj: u
  }), p({
    sourceCode: "https://github.com/GiorgioBurbanelli89/awatif-workspace",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
});
