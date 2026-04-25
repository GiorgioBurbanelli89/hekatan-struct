import { e as s, __tla as __tla_0 } from "./edificioAporticado-DMmhNVXP.js";
let d;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const a = s.params, e = {
    ...a
  };
  e.nVanosX = {
    ...a.nVanosX,
    default: 3
  };
  e.nVanosY = {
    ...a.nVanosY,
    default: 3
  };
  e.nPisos = {
    ...a.nPisos,
    default: 3
  };
  e.spanX = {
    ...a.spanX,
    default: 5
  };
  e.spanY = {
    ...a.spanY,
    default: 5
  };
  e.hPiso = {
    ...a.hPiso,
    default: 3
  };
  e.fcConcr = {
    ...a.fcConcr,
    default: 210
  };
  e.colSize = {
    ...a.colSize,
    default: 0.4
  };
  e.vigaB = {
    ...a.vigaB,
    default: 0.3
  };
  e.vigaH = {
    ...a.vigaH,
    default: 0.4
  };
  e.matCol = {
    ...a.matCol,
    default: 0
  };
  e.matViga = {
    ...a.matViga,
    default: 0
  };
  e.slabT = {
    ...a.slabT,
    default: 0.15
  };
  e.slabOn = {
    ...a.slabOn,
    default: 0
  };
  d = {
    id: "edificio-validado-etabs",
    name: "Edificio Validado vs ETABS / OpenSeesPy",
    category: "Edificios",
    defaultShellResult: "vonMises",
    availableShellResults: [
      "vonMises",
      "bendingXX",
      "bendingYY",
      "displacementZ"
    ],
    hasModal: true,
    params: e,
    build: s.build,
    runModal: s.runModal,
    computedLabels: (l, i) => {
      var _a, _b;
      return {
        ...((_b = (_a = s).computedLabels) == null ? void 0 : _b.call(_a, l, i)) ?? {},
        "\u2500\u2500 \u{1F9EA} TEST \xB7 Comparaci\xF3n 5 solvers FEM \u2500\u2500": "",
        "\u2500\u2500\u2500\u2500 FRAME PURO (sin losa) \u2500\u2500\u2500\u2500": "",
        "Hekatan T\u2081": "0.3496 s",
        "OpenSeesPy T\u2081": "0.3383 s \xB7 \u0394 \u22123.2%",
        "OpenSees TCL T\u2081": "0.3383 s \xB7 \u0394 \u22123.2% (mismo motor)",
        "ETABS 22 T\u2081": "\u2248 0.34 s (esperado \xB7 TBD ejecutar)",
        "CalculiX T\u2081": "TBD ejecutar (.inp generado)",
        "Code Aster T\u2081": "TBD ejecutar (.comm generado)",
        "\u2500\u2500\u2500\u2500 + LOSA Membrane + Diaph Flex \u2500\u2500\u2500\u2500": "",
        "Hekatan T\u2081 (con losa)": "TBD (slabOn=On)",
        "OpenSeesPy ShellMITC4": "0.7437 s (full shell)",
        "ETABS Membrane Slab": "0.6718 s (referencia)",
        "ETABS ShellThin SemiR": "0.6179 s",
        "ETABS ShellThin Rigid": "0.6178 s",
        "\u2500\u2500\u2500\u2500 + MUROS ShellThick \u2500\u2500\u2500\u2500": "",
        "Hekatan + 2 muros": "TBD",
        "ETABS + 2 muros piers P1/P2": "0.4134 / T\u2082=0.1861",
        "ETABS + 1 muro Membrane": "0.4110 / T\u2082=0.3792",
        "\u2500\u2500\u2500\u2500 DICTAMEN \u2500\u2500\u2500\u2500": "",
        "\u2713 Frame puro": "Hekatan \u2194 OpenSees: 3% (validado)",
        "\u2713 ASCE 7-22 \xA712.9.1.1": "\u226590% \u03A3 MPF en X+Y al modo 6-8",
        "Bug fix masa W/g": "CSI Manual \xA74.12 aplicado \u2713"
      };
    },
    dynamicParams: s.dynamicParams
  };
});
export {
  __tla,
  d as e
};
