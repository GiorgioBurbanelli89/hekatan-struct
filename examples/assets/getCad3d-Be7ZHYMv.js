const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./calcPanel-CToQkEkn.js","./getMesh-B1dmlgUt.js","./__vite-browser-external-D7Ct-6yo.js","./pureFunctionsAny.generated-JAcEVsJ7.js","./analyze-ClLKGn9k.js","./didacticCpp-BGUxSkhs.js","./cyclicPushoverCpp-Xwxa7wee.js"])))=>i.map(i=>d[i]);
import { d as Pt, _ as va, p as cs, m as gl, s as hl, __tla as __tla_0 } from "./didacticCpp-BGUxSkhs.js";
import { v as on, P as mn, g as bl, a as xl, o as vl } from "./theme-CzzIlc4y.js";
import { G as hn, b as yl, M as ya, D as $a, B as co, c as Cn, d as $l, C as Ml, e as Ta, V as qe, P as Fo, R as Ma, f as wa, g as Qo, h as en, i as wl, S as El, j as Sl, F as _o, a as tn, L as Bo, k as Il, l as kl, A as En, T as ds, m as Sn, n as In, o as Tl, p as zl } from "./Text-CBH-tcJP.js";
import { g as Pn, b as Fn, a as Eo } from "./analyze-ClLKGn9k.js";
import { g as Io, __tla as __tla_1 } from "./getMesh-B1dmlgUt.js";
import { n as jo, s as ko, m as uo, t as bs } from "./pureFunctionsAny.generated-JAcEVsJ7.js";
let ka, Nl, wi;
let __tla = Promise.all([
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
  let za = typeof localStorage < "u" && localStorage.getItem("hk_lang") || "es";
  function Ll(e) {
    za = e, typeof localStorage < "u" && localStorage.setItem("hk_lang", e);
  }
  const Al = {
    Settings: [
      "Configuraci\xF3n",
      "Settings"
    ],
    "Display scale": [
      "Escala visual",
      "Display scale"
    ],
    Nodes: [
      "Nodos",
      "Nodes"
    ],
    Elements: [
      "Elementos",
      "Elements"
    ],
    Columnas: [
      "Columnas",
      "Columns"
    ],
    Vigas: [
      "Vigas",
      "Beams"
    ],
    "Nodes indexes": [
      "\xCDndices nodos",
      "Node indexes"
    ],
    "Elements indexes": [
      "\xCDndices elem.",
      "Element indexes"
    ],
    "FEM Studio": [
      "FEM Studio",
      "FEM Studio"
    ],
    Cercha: [
      "Cercha",
      "Truss"
    ],
    Portico: [
      "P\xF3rtico",
      "Portal Frame"
    ],
    Torre: [
      "Torre",
      "Tower"
    ],
    Galpon: [
      "Galp\xF3n",
      "Warehouse"
    ],
    Edificio: [
      "Edificio",
      "Building"
    ],
    "Edif. Muros": [
      "Edif. Muros",
      "Bldg. Walls"
    ],
    "Edif. Acero": [
      "Edif. Acero",
      "Steel Bldg."
    ],
    "Acero+Diag": [
      "Acero+Diag",
      "Steel+Brace"
    ],
    "Edif. Mixto": [
      "Edif. Mixto",
      "Mixed Bldg."
    ],
    Mezanine: [
      "Mezanine",
      "Mezzanine"
    ],
    Barra: [
      "Barra",
      "Bar"
    ],
    "Placa 3Q": [
      "Placa 3Q",
      "Plate 3Q"
    ],
    "Placa Q4": [
      "Placa Q4",
      "Plate Q4"
    ],
    "Losa Rect": [
      "Losa Rect",
      "Rect. Slab"
    ],
    "Losa Plana": [
      "Losa Plana",
      "Flat Slab"
    ],
    "Viga Alta": [
      "Viga Alta",
      "Deep Beam"
    ],
    "Muro Cont.": [
      "Muro Cont.",
      "Ret. Wall"
    ],
    Zapata: [
      "Zapata",
      "Footing"
    ],
    "Placa Base": [
      "Placa Base",
      "Base Plate"
    ],
    "Col+Placa 3D": [
      "Col+Placa 3D",
      "Col+Plate 3D"
    ],
    Talud: [
      "Talud",
      "Slope"
    ],
    Eiffel: [
      "Eiffel",
      "Eiffel"
    ],
    Arco: [
      "Arco",
      "Arch"
    ],
    Puente: [
      "Puente",
      "Bridge"
    ],
    Twist: [
      "Twist",
      "Twist"
    ],
    Burj: [
      "Burj",
      "Burj"
    ],
    Opera: [
      "Opera",
      "Opera"
    ],
    Diagrid: [
      "Diagrid",
      "Diagrid"
    ],
    "Muro Q4": [
      "Muro Q4",
      "Wall Q4"
    ],
    "Viga Q4": [
      "Viga Q4",
      "Beam Q4"
    ],
    "Placa XZ": [
      "Placa XZ",
      "Plate XZ"
    ],
    P\u00E9rgola: [
      "P\xE9rgola",
      "Pergola"
    ],
    Select: [
      "Seleccionar",
      "Select"
    ],
    Draw: [
      "Dibujar",
      "Draw"
    ],
    Inspect: [
      "Inspeccionar",
      "Inspect"
    ],
    New: [
      "Nuevo",
      "New"
    ],
    Export: [
      "Exportar",
      "Export"
    ],
    "3D": [
      "3D",
      "3D"
    ],
    Plan: [
      "Planta",
      "Plan"
    ],
    EX: [
      "EX",
      "EX"
    ],
    EY: [
      "EY",
      "EY"
    ],
    Modal: [
      "Modal",
      "Modal"
    ],
    Nonlinear: [
      "No-lineal",
      "Nonlinear"
    ],
    Pushover: [
      "Pushover",
      "Pushover"
    ],
    "Report Explained": [
      "Reporte FEM",
      "FEM Report"
    ],
    C\u00E1lculo: [
      "C\xE1lculo",
      "Calc"
    ],
    Log: [
      "Log",
      "Log"
    ],
    CLI: [
      "CLI",
      "CLI"
    ],
    "I/O": [
      "I/O",
      "I/O"
    ],
    Tests: [
      "Tests",
      "Tests"
    ],
    Clear: [
      "Limpiar",
      "Clear"
    ],
    MKS: [
      "MKS",
      "MKS"
    ],
    SI: [
      "SI",
      "SI"
    ],
    US: [
      "US",
      "US"
    ],
    "Pantalla completa": [
      "Pantalla completa",
      "Fullscreen"
    ],
    "Ayuda interactiva": [
      "Ayuda interactiva \u2014 Tour guiado",
      "Interactive help \u2014 Guided tour"
    ],
    "Nuevo modelo vac\xEDo": [
      "Nuevo modelo vac\xEDo",
      "New empty model"
    ],
    "Exportar coordenadas": [
      "Exportar coordenadas y datos del modelo",
      "Export model coordinates and data"
    ],
    "An\xE1lisis modal": [
      "An\xE1lisis modal (frecuencias y modos)",
      "Modal analysis (frequencies and modes)"
    ],
    "An\xE1lisis no-lineal": [
      "An\xE1lisis no-lineal din\xE1mico (BRB + sismo)",
      "Nonlinear dynamic analysis (BRB + earthquake)"
    ],
    "Pushover c\xEDclico": [
      "Pushover c\xEDclico con hist\xE9resis",
      "Cyclic pushover with hysteresis"
    ],
    "Report derivaci\xF3n": [
      "Report Explained: derivaci\xF3n FEM paso a paso",
      "Report Explained: step-by-step FEM derivation"
    ],
    "Calculadora FEM": [
      "Calculadora FEM: editor MATLAB + output KaTeX",
      "FEM Calculator: MATLAB editor + KaTeX output"
    ],
    "Ver log": [
      "Ver log del solver",
      "View solver log"
    ],
    "CLI toggle": [
      "Abrir/cerrar consola CLI",
      "Open/close CLI console"
    ],
    "Asignar secci\xF3n": [
      "Asignar secci\xF3n",
      "Assign section"
    ],
    "Info del elemento": [
      "Info del elemento",
      "Element info"
    ],
    "Ocultar seleccionados": [
      "Ocultar seleccionados",
      "Hide selected"
    ],
    Aislar: [
      "Aislar (mostrar solo seleccionados)",
      "Isolate (show selected only)"
    ],
    "Mostrar todo": [
      "Mostrar todo",
      "Show all"
    ],
    "Eliminar seleccionados": [
      "Eliminar seleccionados",
      "Delete selected"
    ],
    "Limpiar selecci\xF3n": [
      "Limpiar selecci\xF3n",
      "Clear selection"
    ],
    Luz: [
      "Luz",
      "Span"
    ],
    Altura: [
      "Altura",
      "Height"
    ],
    Divisiones: [
      "Divisiones",
      "Divisions"
    ],
    Discretizaci\u00F3n: [
      "Discretizaci\xF3n",
      "Discretization"
    ],
    Pisos: [
      "Pisos",
      "Stories"
    ],
    "N. Vanos": [
      "N. Vanos",
      "N. Spans"
    ],
    "Luz vano": [
      "Luz vano",
      "Span length"
    ],
    "N. Pisos": [
      "N. Pisos",
      "N. Stories"
    ],
    "h piso": [
      "h piso",
      "Story h"
    ],
    "Vanos X": [
      "Vanos X",
      "Spans X"
    ],
    "Vanos Y": [
      "Vanos Y",
      "Spans Y"
    ],
    "Div. Vigas": [
      "Div. Vigas",
      "Beam Div."
    ],
    "Div. Columnas": [
      "Div. Columnas",
      "Col. Div."
    ],
    Largo: [
      "Largo",
      "Length"
    ],
    "Altura col": [
      "Altura col",
      "Col. height"
    ],
    "Flecha arco": [
      "Flecha arco",
      "Arch rise"
    ],
    "Div. X": [
      "Div. X",
      "Div. X"
    ],
    "Div. Y": [
      "Div. Y",
      "Div. Y"
    ],
    "L total": [
      "L total",
      "Total L"
    ],
    "Num elementos": [
      "Num elementos",
      "Num elements"
    ],
    "Mesh size": [
      "Mesh",
      "Mesh size"
    ],
    "Ancho Lx": [
      "Ancho Lx",
      "Width Lx"
    ],
    "Largo Ly": [
      "Largo Ly",
      "Length Ly"
    ],
    "H bajo": [
      "H bajo",
      "H low"
    ],
    "H alto": [
      "H alto",
      "H high"
    ],
    "Columnas/p\xF3rtico": [
      "Columnas/p\xF3rtico",
      "Columns/portal"
    ],
    Correas: [
      "Correas",
      "Purlins"
    ],
    "E acero": [
      "E acero",
      "E steel"
    ],
    "E concreto": [
      "E concreto",
      "E concrete"
    ],
    "t panel": [
      "t panel",
      "Panel t"
    ],
    "q carga": [
      "q carga",
      "q load"
    ],
    "Espesor t": [
      "Espesor t",
      "Thickness t"
    ],
    "Mesh nx": [
      "Mesh nx",
      "Mesh nx"
    ],
    "Mesh ny": [
      "Mesh ny",
      "Mesh ny"
    ],
    "P lateral": [
      "P lateral",
      "Lateral P"
    ],
    "Ancho W": [
      "Ancho W",
      "Width W"
    ],
    "Alto H": [
      "Alto H",
      "Height H"
    ],
    "Ancho carga": [
      "Ancho carga",
      "Load width"
    ],
    "B base": [
      "B base",
      "Base B"
    ],
    "t muro": [
      "t muro",
      "Wall t"
    ],
    "t base": [
      "t base",
      "Base t"
    ],
    "gamma suelo": [
      "\u03B3 suelo",
      "\u03B3 soil"
    ],
    "q sobrecarga": [
      "q sobrecarga",
      "q surcharge"
    ],
    "E suelo": [
      "E suelo",
      "E soil"
    ],
    "v suelo": [
      "\u03BD suelo",
      "\u03BD soil"
    ],
    "v concreto": [
      "\u03BD concreto",
      "\u03BD concrete"
    ],
    "kn interfaz": [
      "kn interfaz",
      "kn interface"
    ],
    "ks interfaz": [
      "ks interfaz",
      "ks interface"
    ],
    "gamma agua": [
      "\u03B3 agua",
      "\u03B3 water"
    ],
    "H agua": [
      "H agua",
      "Water H"
    ],
    "Lx zapata": [
      "Lx zapata",
      "Footing Lx"
    ],
    "Ly zapata": [
      "Ly zapata",
      "Footing Ly"
    ],
    "t zapata": [
      "t zapata",
      "Footing t"
    ],
    "a columna": [
      "a columna",
      "Col. width"
    ],
    "h pedestal": [
      "h pedestal",
      "Pedestal h"
    ],
    "P axial": [
      "P axial",
      "Axial P"
    ],
    ks: [
      "ks",
      "ks"
    ],
    "N pernos": [
      "N pernos",
      "N bolts"
    ],
    "d perno": [
      "d perno",
      "Bolt d"
    ],
    "Sep. pernos X": [
      "Sep. pernos X",
      "Bolt spacing X"
    ],
    "Sep. pernos Y": [
      "Sep. pernos Y",
      "Bolt spacing Y"
    ],
    "Col a": [
      "Col a",
      "Col a"
    ],
    "Col b": [
      "Col b",
      "Col b"
    ],
    "Col h": [
      "Col h",
      "Col h"
    ],
    "Col t": [
      "Col t",
      "Col t"
    ],
    "Col altura": [
      "Col altura",
      "Col height"
    ],
    "Placa Lx": [
      "Placa Lx",
      "Plate Lx"
    ],
    "Placa Ly": [
      "Placa Ly",
      "Plate Ly"
    ],
    "Placa t": [
      "Placa t",
      "Plate t"
    ],
    "Col subdiv V": [
      "Col subdiv V",
      "Col subdiv V"
    ],
    "Col subdiv H": [
      "Col subdiv H",
      "Col subdiv H"
    ],
    "Placa subdiv": [
      "Placa subdiv",
      "Plate subdiv"
    ],
    "Peralte h": [
      "Peralte h",
      "Depth h"
    ],
    "Luz L": [
      "Luz L",
      "Span L"
    ],
    "Col d": [
      "Col d",
      "Col d"
    ],
    "Col bf": [
      "Col bf",
      "Col bf"
    ],
    "Col tf": [
      "Col tf",
      "Col tf"
    ],
    "Col tw": [
      "Col tw",
      "Col tw"
    ],
    "Vig d": [
      "Vig d",
      "Beam d"
    ],
    "Vig bf": [
      "Vig bf",
      "Beam bf"
    ],
    "Vig tf": [
      "Vig tf",
      "Beam tf"
    ],
    "Vig tw": [
      "Vig tw",
      "Beam tw"
    ],
    "Corr b": [
      "Corr b",
      "Purlin b"
    ],
    "Corr t": [
      "Corr t",
      "Purlin t"
    ],
    "F axial": [
      "F axial",
      "Axial F"
    ],
    "nx elem": [
      "nx elem",
      "nx elem"
    ],
    "ny elem": [
      "ny elem",
      "ny elem"
    ],
    "Mesh nz": [
      "Mesh nz",
      "Mesh nz"
    ],
    "Sep pernos X": [
      "Sep pernos X",
      "Bolt spacing X"
    ],
    "Sep pernos Y": [
      "Sep pernos Y",
      "Bolt spacing Y"
    ],
    Angulo: [
      "\xC1ngulo",
      "Angle"
    ],
    "b top": [
      "b top",
      "Top b"
    ],
    "b base": [
      "b base",
      "Base b"
    ],
    "Cohesion c": [
      "Cohesi\xF3n c",
      "Cohesion c"
    ],
    "Friccion \u03C6": [
      "Fricci\xF3n \u03C6",
      "Friction \u03C6"
    ],
    Sobrecarga: [
      "Sobrecarga",
      "Surcharge"
    ],
    "P puntual": [
      "P puntual",
      "Point P"
    ],
    CM: [
      "CM",
      "DL"
    ],
    CV: [
      "CV",
      "LL"
    ],
    "Ex sismo": [
      "Ex sismo",
      "Ex seismic"
    ],
    "Ey sismo": [
      "Ey sismo",
      "Ey seismic"
    ],
    "P borde": [
      "P borde",
      "Edge P"
    ],
    Empotrado: [
      "Empotrado",
      "Fixed"
    ],
    Articulado: [
      "Articulado",
      "Pinned"
    ],
    "Roller Z": [
      "Roller Z",
      "Roller Z"
    ],
    "Simply Supported": [
      "Simplemente apoyado",
      "Simply Supported"
    ],
    "Winkler (k)": [
      "Winkler (k)",
      "Winkler (k)"
    ],
    "Emp-Libre": [
      "Emp-Libre",
      "Fixed-Free"
    ],
    "Emp-Emp": [
      "Emp-Emp",
      "Fixed-Fixed"
    ],
    "Emp-Art": [
      "Emp-Art",
      "Fixed-Pinned"
    ],
    "Rankine (Ka)": [
      "Rankine (Ka)",
      "Rankine (Ka)"
    ],
    "Suelo continuo": [
      "Suelo continuo",
      "Continuous soil"
    ],
    Interfaz: [
      "Interfaz",
      "Interface"
    ],
    "Presion agua": [
      "Presi\xF3n agua",
      "Water pressure"
    ],
    "Pin (w=0)": [
      "Pin (w=0)",
      "Pin (w=0)"
    ],
    "Simplemente apoyado": [
      "Simplemente apoyado",
      "Simply Supported"
    ],
    "Pernos empotrados": [
      "Pernos empotrados",
      "Fixed bolts"
    ],
    Losas: [
      "Losas",
      "Slabs"
    ],
    Zapatas: [
      "Zapatas",
      "Footings"
    ],
    Diagonales: [
      "Diagonales",
      "Braces"
    ],
    Muros: [
      "Muros",
      "Walls"
    ],
    Aberturas: [
      "Aberturas",
      "Openings"
    ],
    Refuerzo: [
      "Refuerzo",
      "Reinforcement"
    ],
    Placas: [
      "Placas",
      "Plates"
    ],
    Pernos: [
      "Pernos",
      "Bolts"
    ],
    Otros: [
      "Otros",
      "Others"
    ],
    Piso: [
      "Piso",
      "Floor"
    ],
    "Vigas X": [
      "Vigas X",
      "Beams X"
    ],
    "Vigas Y": [
      "Vigas Y",
      "Beams Y"
    ],
    "Vigas Secundarias": [
      "Vigas Secundarias",
      "Secondary Beams"
    ],
    "Losas de Piso": [
      "Losas de Piso",
      "Floor Slabs"
    ],
    "Muros de Corte": [
      "Muros de Corte",
      "Shear Walls"
    ],
    Rangos: [
      "Rangos",
      "Ranges"
    ],
    "Luces X": [
      "Luces X",
      "Spans X"
    ],
    "Luces Y": [
      "Luces Y",
      "Spans Y"
    ],
    "Alturas por Piso": [
      "Alturas por Piso",
      "Heights per Floor"
    ],
    Parameters: [
      "Par\xE1metros",
      "Parameters"
    ]
  };
  function V(e) {
    const h = Al[e];
    return h ? za === "es" ? h[0] : h[1] : e;
  }
  function Cl() {
    document.querySelectorAll("[data-i18n]").forEach((e) => {
      const h = e.dataset.i18n, R = V(h);
      e.tagName === "INPUT" || e.tagName === "SELECT" ? e.placeholder = R : e.textContent = R;
    }), document.querySelectorAll("[data-i18n-title]").forEach((e) => {
      const h = e.dataset.i18nTitle;
      e.title = V(h);
    });
  }
  const hs = [
    {
      id: "kN",
      label: "kN",
      toKN: 1
    },
    {
      id: "tonf",
      label: "tonf",
      toKN: 9.80665
    },
    {
      id: "kgf",
      label: "kgf",
      toKN: 980665e-8
    },
    {
      id: "kip",
      label: "kip",
      toKN: 4.44822
    },
    {
      id: "lb",
      label: "lb",
      toKN: 444822e-8
    },
    {
      id: "N",
      label: "N",
      toKN: 1e-3
    }
  ], nn = [
    {
      id: "m",
      label: "m",
      toM: 1,
      spanRange: [
        2,
        15,
        0.5
      ],
      heightRange: [
        2,
        6,
        0.5
      ],
      defaultSpan: 5,
      defaultHeight: 3,
      galponSpan: 12,
      galponLength: 20,
      galponHeight: 6,
      galponRise: 3
    },
    {
      id: "cm",
      label: "cm",
      toM: 0.01,
      spanRange: [
        200,
        1500,
        50
      ],
      heightRange: [
        200,
        600,
        50
      ],
      defaultSpan: 500,
      defaultHeight: 300,
      galponSpan: 1200,
      galponLength: 2e3,
      galponHeight: 600,
      galponRise: 300
    },
    {
      id: "mm",
      label: "mm",
      toM: 1e-3,
      spanRange: [
        2e3,
        15e3,
        500
      ],
      heightRange: [
        2e3,
        6e3,
        500
      ],
      defaultSpan: 5e3,
      defaultHeight: 3e3,
      galponSpan: 12e3,
      galponLength: 2e4,
      galponHeight: 6e3,
      galponRise: 3e3
    },
    {
      id: "in",
      label: "in",
      toM: 0.0254,
      spanRange: [
        60,
        480,
        12
      ],
      heightRange: [
        96,
        240,
        12
      ],
      defaultSpan: 240,
      defaultHeight: 144,
      galponSpan: 480,
      galponLength: 720,
      galponHeight: 240,
      galponRise: 120
    },
    {
      id: "ft",
      label: "ft",
      toM: 0.3048,
      spanRange: [
        5,
        40,
        1
      ],
      heightRange: [
        8,
        20,
        1
      ],
      defaultSpan: 20,
      defaultHeight: 12,
      galponSpan: 40,
      galponLength: 60,
      galponHeight: 20,
      galponRise: 10
    }
  ];
  function Pl(e, h) {
    return e === "kN" && h === "m" ? "kPa" : e === "kN" && h === "mm" || e === "N" && h === "mm" ? "MPa" : e === "N" && h === "m" ? "Pa" : e === "kip" && h === "in" ? "ksi" : e === "kip" && h === "ft" ? "ksf" : `${e}/${h}\xB2`;
  }
  const Do = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function Ho(e, h) {
    const R = hs.find((j) => j.id === e), M = nn.find((j) => j.id === h), X = R.toKN, D = M.toM, Z = (j, be, T) => T / (Math.pow(X, j) * Math.pow(D, be));
    let J, H;
    switch (e) {
      case "kN":
        J = 10, H = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        J = 1, H = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        J = 1e3, H = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        J = 10, H = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        J = 5e3, H = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        J = 1e4, H = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${e}-${h}`,
      label: `${R.label}, ${M.label}`,
      force: R.label,
      length: M.label,
      stress: Pl(e, h),
      moment: `${R.label}\xB7${M.label}`,
      E: Z(1, -2, Do.E),
      G: Z(1, -2, Do.G),
      A: Z(0, 2, Do.A),
      Iz: Z(0, 4, Do.Iz),
      Iy: Z(0, 4, Do.Iy),
      J: Z(0, 4, Do.J),
      rho: Z(1, -4, Do.rho),
      spanRange: M.spanRange,
      heightRange: M.heightRange,
      defaultSpan: M.defaultSpan,
      defaultHeight: M.defaultHeight,
      defaultForce: J,
      forceRange: H,
      galponSpan: M.galponSpan,
      galponLength: M.galponLength,
      galponHeight: M.galponHeight,
      galponRise: M.galponRise
    };
  }
  Ho("kN", "m"), Ho("kip", "in");
  function kn() {
    return {
      truss: [
        {
          label: V("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: V("Articulado"),
          dofs: [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        },
        {
          label: V("Roller Z"),
          dofs: [
            false,
            false,
            true,
            false,
            false,
            false
          ]
        }
      ],
      beams: [
        {
          label: V("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: V("Articulado"),
          dofs: [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        }
      ],
      "3d": [
        {
          label: V("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: V("Articulado"),
          dofs: [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        }
      ],
      frame: [
        {
          label: V("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: V("Articulado"),
          dofs: [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        }
      ],
      edificio: [
        {
          label: V("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: V("Articulado"),
          dofs: [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        }
      ],
      galpon: [
        {
          label: V("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: V("Articulado"),
          dofs: [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        }
      ],
      barra: [
        {
          label: V("Emp-Libre"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: V("Emp-Emp"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: V("Emp-Art"),
          dofs: [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        }
      ],
      "placa-3q": [
        {
          label: V("Simply Supported"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: V("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      "placa-q4": [
        {
          label: V("Simply Supported"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: V("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      "losa-rect": [
        {
          label: V("Simply Supported"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: V("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      "losa-plana": [
        {
          label: V("Pin (w=0)"),
          dofs: [
            false,
            false,
            true,
            false,
            false,
            false
          ]
        },
        {
          label: V("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      "viga-alta": [
        {
          label: V("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: V("Articulado"),
          dofs: [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        }
      ],
      "muro-contencion": [
        {
          label: V("Rankine (Ka)"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: V("Suelo continuo"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: V("Interfaz"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: V("Presion agua"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      zapata: [
        {
          label: V("Winkler (k)"),
          dofs: [
            false,
            false,
            true,
            false,
            false,
            false
          ]
        }
      ],
      "placa-orificios": [
        {
          label: V("Simplemente apoyado"),
          dofs: [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        },
        {
          label: V("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      "col-placa": [
        {
          label: V("Pernos empotrados"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      eiffel: [
        {
          label: V("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      arco: [
        {
          label: V("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      puente: [
        {
          label: V("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      twisted: [
        {
          label: V("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      burj: [
        {
          label: V("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      opera: [
        {
          label: V("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      diagrid: [
        {
          label: V("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      talud: [
        {
          label: V("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ]
    };
  }
  function Fl(e) {
    return {
      truss: [
        {
          key: "span",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `${V("Luz")} (${e.length})`
        },
        {
          key: "divisions",
          val: 5,
          min: 2,
          max: 20,
          step: 1,
          label: V("Divisiones")
        },
        {
          key: "height",
          val: e.defaultHeight * 0.5,
          min: e.heightRange[0] * 0.3,
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `${V("Altura")} (${e.length})`
        }
      ],
      beams: [
        {
          key: "width",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `${V("Luz")} (${e.length})`
        },
        {
          key: "height",
          val: e.defaultHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `${V("Altura")} (${e.length})`
        },
        {
          key: "nSub",
          val: 4,
          min: 1,
          max: 10,
          step: 1,
          label: V("Discretizaci\xF3n")
        }
      ],
      "3d": [
        {
          key: "dx",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `Dx (${e.length})`
        },
        {
          key: "dy",
          val: e.defaultSpan * 0.8,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `Dy (${e.length})`
        },
        {
          key: "dz",
          val: e.defaultHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `Dz (${e.length})`
        },
        {
          key: "stories",
          val: 2,
          min: 1,
          max: 10,
          step: 1,
          label: V("Pisos")
        },
        {
          key: "nSub",
          val: 3,
          min: 1,
          max: 8,
          step: 1,
          label: V("Discretizaci\xF3n")
        }
      ],
      frame: [
        {
          key: "nVanos",
          val: 3,
          min: 1,
          max: 10,
          step: 1,
          label: V("N. Vanos")
        },
        {
          key: "spanV",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `${V("Luz vano")} (${e.length})`
        },
        {
          key: "nPisos",
          val: 3,
          min: 1,
          max: 20,
          step: 1,
          label: V("N. Pisos")
        },
        {
          key: "hPiso",
          val: e.defaultHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `${V("h piso")} (${e.length})`
        }
      ],
      edificio: [
        {
          key: "nVanosX",
          val: 2,
          min: 1,
          max: 8,
          step: 1,
          label: V("Vanos X")
        },
        {
          key: "nVanosY",
          val: 2,
          min: 1,
          max: 8,
          step: 1,
          label: V("Vanos Y")
        },
        {
          key: "nPisos",
          val: 3,
          min: 1,
          max: 20,
          step: 1,
          label: V("N. Pisos")
        },
        {
          key: "hPiso",
          val: e.defaultHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `${V("h piso")} (${e.length})`
        },
        {
          key: "nSubViga",
          val: 1,
          min: 1,
          max: 8,
          step: 1,
          label: V("Div. Vigas")
        },
        {
          key: "nSubCol",
          val: 1,
          min: 1,
          max: 8,
          step: 1,
          label: V("Div. Columnas")
        },
        {
          key: "Lvix",
          val: 0,
          min: 0,
          max: e.spanRange[1] * 0.5,
          step: e.spanRange[2],
          label: `Lvix (${e.length})`
        },
        {
          key: "Lvdx",
          val: 0,
          min: 0,
          max: e.spanRange[1] * 0.5,
          step: e.spanRange[2],
          label: `Lvdx (${e.length})`
        },
        {
          key: "Lviy",
          val: 0,
          min: 0,
          max: e.spanRange[1] * 0.5,
          step: e.spanRange[2],
          label: `Lviy (${e.length})`
        },
        {
          key: "Lvdy",
          val: 0,
          min: 0,
          max: e.spanRange[1] * 0.5,
          step: e.spanRange[2],
          label: `Lvdy (${e.length})`
        }
      ],
      galpon: [
        {
          key: "span",
          val: e.galponSpan,
          min: e.spanRange[0],
          max: e.spanRange[1] * 3,
          step: e.spanRange[2],
          label: `${V("Luz")} (${e.length})`
        },
        {
          key: "length",
          val: e.galponLength,
          min: e.spanRange[0],
          max: e.spanRange[1] * 4,
          step: e.spanRange[2],
          label: `${V("Largo")} (${e.length})`
        },
        {
          key: "height",
          val: e.galponHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `${V("Altura col")} (${e.length})`
        },
        {
          key: "archRise",
          val: e.galponRise,
          min: e.heightRange[2],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `${V("Flecha arco")} (${e.length})`
        },
        {
          key: "xDiv",
          val: 8,
          min: 4,
          max: 20,
          step: 1,
          label: V("Div. X")
        },
        {
          key: "yDiv",
          val: 4,
          min: 2,
          max: 12,
          step: 1,
          label: V("Div. Y")
        }
      ],
      barra: [
        {
          key: "L",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `${V("L total")} (${e.length})`
        },
        {
          key: "nElem",
          val: 3,
          min: 1,
          max: 10,
          step: 1,
          label: V("Num elementos")
        },
        {
          key: "F",
          val: e.defaultForce * 10,
          min: e.forceRange[0],
          max: e.forceRange[1] * 10,
          step: Math.abs(e.forceRange[2]) * 10,
          label: `${V("F axial")} (${e.force})`
        }
      ],
      "placa-3q": [
        {
          key: "Lx",
          val: 15,
          min: 2,
          max: 30,
          step: 1,
          label: `Lx (${e.length})`
        },
        {
          key: "Ly",
          val: 10,
          min: 2,
          max: 30,
          step: 1,
          label: `Ly (${e.length})`
        },
        {
          key: "meshSize",
          val: 0.5,
          min: 0.1,
          max: 3,
          step: 0.1,
          label: `${V("Mesh size")} (${e.length})`
        },
        {
          key: "t",
          val: 1,
          min: 0.05,
          max: 5,
          step: 0.05,
          label: `t (${e.length})`
        },
        {
          key: "E",
          val: e.E * 3e7 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E (${e.stress})`
        },
        {
          key: "nu",
          val: 0.3,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "q",
          val: -3,
          min: -50,
          max: 0,
          step: 1,
          label: `q (${e.force}/${e.length}\xB2)`
        }
      ],
      "placa-q4": [
        {
          key: "Lx",
          val: 10,
          min: 1,
          max: 30,
          step: 1,
          label: `Lx (${e.length})`
        },
        {
          key: "Ly",
          val: 10,
          min: 1,
          max: 30,
          step: 1,
          label: `Ly (${e.length})`
        },
        {
          key: "nx",
          val: 16,
          min: 2,
          max: 64,
          step: 2,
          label: V("nx elem")
        },
        {
          key: "ny",
          val: 16,
          min: 2,
          max: 64,
          step: 2,
          label: V("ny elem")
        },
        {
          key: "t",
          val: 0.2,
          min: 0.05,
          max: 2,
          step: 0.05,
          label: `t (${e.length})`
        },
        {
          key: "E",
          val: e.E * 3e7 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E (${e.stress})`
        },
        {
          key: "nu",
          val: 0.3,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "q",
          val: -10,
          min: -50,
          max: 0,
          step: 1,
          label: `q (${e.force}/${e.length}\xB2)`
        }
      ],
      "losa-rect": [
        {
          key: "a",
          val: 6,
          min: 1,
          max: 20,
          step: 0.5,
          label: `a (${e.length})`
        },
        {
          key: "b",
          val: 4,
          min: 1,
          max: 20,
          step: 0.5,
          label: `b (${e.length})`
        },
        {
          key: "nx",
          val: 12,
          min: 4,
          max: 40,
          step: 2,
          label: V("nx elem")
        },
        {
          key: "ny",
          val: 8,
          min: 4,
          max: 40,
          step: 2,
          label: V("ny elem")
        },
        {
          key: "t",
          val: 0.1,
          min: 0.05,
          max: 1,
          step: 0.01,
          label: `t (${e.length})`
        },
        {
          key: "E",
          val: e.E * 35e6 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E (${e.stress})`
        },
        {
          key: "nu",
          val: 0.15,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "q",
          val: -10,
          min: -50,
          max: 0,
          step: 1,
          label: `q (${e.force}/${e.length}\xB2)`
        }
      ],
      "losa-plana": [
        {
          key: "t",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.01,
          label: `t (${e.length})`
        },
        {
          key: "meshSize",
          val: 0.6,
          min: 0.3,
          max: 2,
          step: 0.1,
          label: `${V("Mesh size")} (${e.length})`
        },
        {
          key: "E",
          val: e.E * 35e6 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E (${e.stress})`
        },
        {
          key: "nu",
          val: 0.2,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "q",
          val: -10,
          min: -50,
          max: 0,
          step: 1,
          label: `q (${e.force}/${e.length}\xB2)`
        }
      ],
      "viga-alta": [
        {
          key: "L",
          val: 4,
          min: 1,
          max: 20,
          step: 0.5,
          label: `L (${e.length})`
        },
        {
          key: "H",
          val: 2,
          min: 0.5,
          max: 10,
          step: 0.5,
          label: `H (${e.length})`
        },
        {
          key: "meshSize",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.05,
          label: `${V("Mesh size")} (${e.length})`
        },
        {
          key: "t",
          val: 0.1,
          min: 0.05,
          max: 1,
          step: 0.01,
          label: `t (${e.length})`
        },
        {
          key: "E",
          val: e.E * 2e7 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E (${e.stress})`
        },
        {
          key: "nu",
          val: 0.2,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "q",
          val: -100,
          min: -500,
          max: 0,
          step: 10,
          label: `q (${e.force}/${e.length})`
        },
        {
          key: "b",
          val: 0.8,
          min: 0.2,
          max: 4,
          step: 0.1,
          label: `${V("Ancho carga")} (${e.length})`
        }
      ],
      "muro-contencion": [
        {
          key: "H",
          val: 4,
          min: 1,
          max: 10,
          step: 0.5,
          label: `H (${e.length})`
        },
        {
          key: "B",
          val: 3,
          min: 1,
          max: 8,
          step: 0.5,
          label: `${V("B base")} (${e.length})`
        },
        {
          key: "tw",
          val: 0.3,
          min: 0.1,
          max: 1,
          step: 0.05,
          label: `${V("t muro")} (${e.length})`
        },
        {
          key: "tb",
          val: 0.4,
          min: 0.1,
          max: 1,
          step: 0.05,
          label: `${V("t base")} (${e.length})`
        },
        {
          key: "meshSize",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.05,
          label: `${V("Mesh size")} (${e.length})`
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `${V("E concreto")} (${e.stress})`
        },
        {
          key: "nu",
          val: 0.2,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: V("v concreto")
        },
        {
          key: "gamma",
          val: 18,
          min: 5,
          max: 30,
          step: 1,
          label: `${V("gamma suelo")} (${e.force}/${e.length}\xB3)`
        },
        {
          key: "Ka",
          val: 0.33,
          min: 0.1,
          max: 0.6,
          step: 0.01,
          label: "Ka"
        },
        {
          key: "qs",
          val: 0,
          min: 0,
          max: 100,
          step: 5,
          label: `${V("q sobrecarga")} (${e.stress})`
        },
        {
          key: "Es",
          val: 5e4,
          min: 100,
          max: 1e6,
          step: 1e3,
          label: `${V("E suelo")} (${e.stress})`
        },
        {
          key: "nus",
          val: 0.3,
          min: 0.1,
          max: 0.49,
          step: 0.01,
          label: V("v suelo")
        },
        {
          key: "kn",
          val: 1e6,
          min: 1e3,
          max: 1e9,
          step: 1e4,
          label: `${V("kn interfaz")} (${e.force}/${e.length}\xB3)`
        },
        {
          key: "ks",
          val: 1e4,
          min: 100,
          max: 1e7,
          step: 1e3,
          label: `${V("ks interfaz")} (${e.force}/${e.length}\xB3)`
        },
        {
          key: "gammaW",
          val: 9.81,
          min: 5,
          max: 15,
          step: 0.1,
          label: `${V("gamma agua")} (${e.force}/${e.length}\xB3)`
        },
        {
          key: "Hw",
          val: 3.5,
          min: 0.5,
          max: 10,
          step: 0.5,
          label: `${V("H agua")} (${e.length})`
        }
      ],
      zapata: [
        {
          key: "Lx",
          val: 2,
          min: 0.5,
          max: 6,
          step: 0.1,
          label: `${V("Lx zapata")} (${e.length})`
        },
        {
          key: "Ly",
          val: 2,
          min: 0.5,
          max: 6,
          step: 0.1,
          label: `${V("Ly zapata")} (${e.length})`
        },
        {
          key: "t",
          val: 0.5,
          min: 0.1,
          max: 2,
          step: 0.05,
          label: `${V("t zapata")} (${e.length})`
        },
        {
          key: "colA",
          val: 0.4,
          min: 0.15,
          max: 1.5,
          step: 0.05,
          label: `${V("a columna")} (${e.length})`
        },
        {
          key: "colH",
          val: 1.5,
          min: 0.5,
          max: 5,
          step: 0.5,
          label: `${V("h pedestal")} (${e.length})`
        },
        {
          key: "nx",
          val: 8,
          min: 4,
          max: 20,
          step: 2,
          label: V("nx elem")
        },
        {
          key: "ny",
          val: 8,
          min: 4,
          max: 20,
          step: 2,
          label: V("ny elem")
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E (${e.stress})`
        },
        {
          key: "nu",
          val: 0.2,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "P",
          val: -500,
          min: -5e3,
          max: 0,
          step: 50,
          label: `${V("P axial")} (${e.force})`
        },
        {
          key: "Mx",
          val: 0,
          min: -500,
          max: 500,
          step: 10,
          label: `Mx (${e.force}\xB7${e.length})`
        },
        {
          key: "My",
          val: 0,
          min: -500,
          max: 500,
          step: 10,
          label: `My (${e.force}\xB7${e.length})`
        },
        {
          key: "ks",
          val: 2e4,
          min: 1e3,
          max: 2e5,
          step: 1e3,
          label: `ks (${e.force}/${e.length}\xB3)`
        }
      ],
      "placa-orificios": [
        {
          key: "Lx",
          val: 0.4,
          min: 0.15,
          max: 1,
          step: 0.05,
          label: `${V("Placa Lx")} (${e.length})`
        },
        {
          key: "Ly",
          val: 0.4,
          min: 0.15,
          max: 1,
          step: 0.05,
          label: `${V("Placa Ly")} (${e.length})`
        },
        {
          key: "t",
          val: 0.025,
          min: 0.01,
          max: 0.1,
          step: 5e-3,
          label: `${V("Espesor t")} (${e.length})`
        },
        {
          key: "dBolt",
          val: 0.022,
          min: 0.01,
          max: 0.05,
          step: 2e-3,
          label: `${V("d perno")} (${e.length})`
        },
        {
          key: "sx",
          val: 0.28,
          min: 0.08,
          max: 0.8,
          step: 0.02,
          label: `${V("Sep. pernos X")} (${e.length})`
        },
        {
          key: "sy",
          val: 0.28,
          min: 0.08,
          max: 0.8,
          step: 0.02,
          label: `${V("Sep. pernos Y")} (${e.length})`
        },
        {
          key: "colA",
          val: 0.2,
          min: 0.1,
          max: 0.5,
          step: 0.02,
          label: `${V("Col a")} (${e.length})`
        },
        {
          key: "meshSize",
          val: 8e-3,
          min: 3e-3,
          max: 0.03,
          step: 1e-3,
          label: `${V("Mesh size")} (${e.length})`
        },
        {
          key: "E",
          val: e.E,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `${V("E acero")} (${e.stress})`
        },
        {
          key: "nu",
          val: 0.3,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "P",
          val: -200,
          min: -2e3,
          max: 0,
          step: 10,
          label: `${V("P axial")} (${e.force})`
        },
        {
          key: "nBolts",
          val: 4,
          min: 2,
          max: 8,
          step: 2,
          label: V("N pernos")
        }
      ],
      "col-placa": [
        {
          key: "colB",
          val: 0.3,
          min: 0.1,
          max: 0.6,
          step: 0.02,
          label: `${V("Col b")} (${e.length})`
        },
        {
          key: "colH",
          val: 0.3,
          min: 0.1,
          max: 0.6,
          step: 0.02,
          label: `${V("Col h")} (${e.length})`
        },
        {
          key: "colT",
          val: 8e-3,
          min: 4e-3,
          max: 0.025,
          step: 2e-3,
          label: `${V("Col t")} (${e.length})`
        },
        {
          key: "colLen",
          val: 1.5,
          min: 0.5,
          max: 4,
          step: 0.25,
          label: `${V("Col altura")} (${e.length})`
        },
        {
          key: "Lx",
          val: 0.45,
          min: 0.2,
          max: 1,
          step: 0.05,
          label: `${V("Placa Lx")} (${e.length})`
        },
        {
          key: "Ly",
          val: 0.45,
          min: 0.2,
          max: 1,
          step: 0.05,
          label: `${V("Placa Ly")} (${e.length})`
        },
        {
          key: "tPlaca",
          val: 0.025,
          min: 0.01,
          max: 0.06,
          step: 5e-3,
          label: `${V("Placa t")} (${e.length})`
        },
        {
          key: "dBolt",
          val: 0.022,
          min: 0.012,
          max: 0.04,
          step: 2e-3,
          label: `${V("d perno")} (${e.length})`
        },
        {
          key: "sx",
          val: 0.32,
          min: 0.1,
          max: 0.8,
          step: 0.02,
          label: `${V("Sep pernos X")} (${e.length})`
        },
        {
          key: "sy",
          val: 0.32,
          min: 0.1,
          max: 0.8,
          step: 0.02,
          label: `${V("Sep pernos Y")} (${e.length})`
        },
        {
          key: "nSubColV",
          val: 6,
          min: 2,
          max: 12,
          step: 1,
          label: V("Col subdiv V")
        },
        {
          key: "nSubColH",
          val: 4,
          min: 2,
          max: 8,
          step: 1,
          label: V("Col subdiv H")
        },
        {
          key: "nSubPlaca",
          val: 10,
          min: 4,
          max: 20,
          step: 2,
          label: V("Placa subdiv")
        },
        {
          key: "E",
          val: e.E,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `${V("E acero")} (${e.stress})`
        },
        {
          key: "nu",
          val: 0.3,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "P",
          val: -300,
          min: -3e3,
          max: 0,
          step: 25,
          label: `${V("P axial")} (${e.force})`
        }
      ],
      "muro-q4": [
        {
          key: "W",
          val: 5,
          min: 1,
          max: 20,
          step: 0.5,
          label: `${V("Ancho W")} (${e.length})`
        },
        {
          key: "H",
          val: 3,
          min: 1,
          max: 15,
          step: 0.5,
          label: `${V("Alto H")} (${e.length})`
        },
        {
          key: "t",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.05,
          label: `${V("Espesor t")} (${e.length})`
        },
        {
          key: "nx",
          val: 8,
          min: 2,
          max: 20,
          step: 1,
          label: V("Mesh nx")
        },
        {
          key: "ny",
          val: 6,
          min: 2,
          max: 20,
          step: 1,
          label: V("Mesh ny")
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 1e4,
          max: 1e9,
          step: 1e5,
          label: `${V("E concreto")} (${e.stress})`
        },
        {
          key: "nu",
          val: 0.2,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "P",
          val: e.defaultForce * 10,
          min: 1,
          max: e.forceRange[1] * 50,
          step: e.forceRange[2] * 5,
          label: `${V("P lateral")} (${e.force})`
        }
      ],
      "viga-q4": [
        {
          key: "L",
          val: 6,
          min: 1,
          max: 20,
          step: 0.5,
          label: `${V("Luz L")} (${e.length})`
        },
        {
          key: "h",
          val: 0.5,
          min: 0.1,
          max: 3,
          step: 0.1,
          label: `${V("Peralte h")} (${e.length})`
        },
        {
          key: "t",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.05,
          label: `${V("Espesor t")} (${e.length})`
        },
        {
          key: "nx",
          val: 12,
          min: 2,
          max: 30,
          step: 1,
          label: V("Mesh nx")
        },
        {
          key: "ny",
          val: 4,
          min: 2,
          max: 15,
          step: 1,
          label: V("Mesh ny")
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 1e4,
          max: 1e9,
          step: 1e5,
          label: `${V("E concreto")} (${e.stress})`
        },
        {
          key: "nu",
          val: 0.2,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "P",
          val: e.defaultForce * 5,
          min: 1,
          max: e.forceRange[1] * 50,
          step: e.forceRange[2] * 2,
          label: `${V("P puntual")} (${e.force})`
        }
      ],
      "placa-xz": [
        {
          key: "Lx",
          val: 4,
          min: 1,
          max: 15,
          step: 0.5,
          label: `Lx (${e.length})`
        },
        {
          key: "Lz",
          val: 2,
          min: 0.5,
          max: 10,
          step: 0.5,
          label: `Lz (${e.length})`
        },
        {
          key: "t",
          val: 0.15,
          min: 0.05,
          max: 0.5,
          step: 0.05,
          label: `${V("Espesor t")} (${e.length})`
        },
        {
          key: "nx",
          val: 8,
          min: 2,
          max: 20,
          step: 1,
          label: V("Mesh nx")
        },
        {
          key: "nz",
          val: 4,
          min: 2,
          max: 15,
          step: 1,
          label: V("Mesh nz")
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 1e4,
          max: 1e9,
          step: 1e5,
          label: `${V("E concreto")} (${e.stress})`
        },
        {
          key: "nu",
          val: 0.2,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "P",
          val: e.defaultForce * 2,
          min: 1,
          max: e.forceRange[1] * 20,
          step: e.forceRange[2],
          label: `${V("P borde")} (${e.force})`
        }
      ],
      pergola: [
        {
          key: "Lx",
          val: 6,
          min: 2,
          max: 20,
          step: 0.5,
          label: `${V("Ancho Lx")} (${e.length})`
        },
        {
          key: "Ly",
          val: 8,
          min: 3,
          max: 30,
          step: 0.5,
          label: `${V("Largo Ly")} (${e.length})`
        },
        {
          key: "H1",
          val: 3,
          min: 1,
          max: 8,
          step: 0.25,
          label: `${V("H bajo")} (${e.length})`
        },
        {
          key: "H2",
          val: 4.5,
          min: 1,
          max: 10,
          step: 0.25,
          label: `${V("H alto")} (${e.length})`
        },
        {
          key: "nCol",
          val: 4,
          min: 2,
          max: 8,
          step: 1,
          label: V("Columnas/p\xF3rtico")
        },
        {
          key: "nCorr",
          val: 8,
          min: 3,
          max: 20,
          step: 1,
          label: V("Correas")
        },
        {
          key: "E",
          val: e.E,
          min: 1e4,
          max: 1e9,
          step: 1e5,
          label: `${V("E acero")} (${e.stress})`
        },
        {
          key: "t",
          val: 5e-4,
          min: 3e-4,
          max: 3e-3,
          step: 1e-4,
          label: `${V("t panel")} (${e.length})`
        },
        {
          key: "q",
          val: e.defaultForce * 0.5,
          min: 0.1,
          max: e.forceRange[1] * 5,
          step: e.forceRange[2] * 0.1,
          label: `${V("q carga")} (${e.force}/${e.length}\xB2)`
        },
        {
          key: "colD",
          val: 0.16,
          min: 0.05,
          max: 0.6,
          step: 0.01,
          label: `${V("Col d")} (${e.length})`
        },
        {
          key: "colBf",
          val: 0.16,
          min: 0.05,
          max: 0.4,
          step: 0.01,
          label: `${V("Col bf")} (${e.length})`
        },
        {
          key: "colTf",
          val: 0.013,
          min: 4e-3,
          max: 0.04,
          step: 1e-3,
          label: `${V("Col tf")} (${e.length})`
        },
        {
          key: "colTw",
          val: 8e-3,
          min: 3e-3,
          max: 0.03,
          step: 1e-3,
          label: `${V("Col tw")} (${e.length})`
        },
        {
          key: "vigD",
          val: 0.2,
          min: 0.1,
          max: 0.6,
          step: 0.01,
          label: `${V("Vig d")} (${e.length})`
        },
        {
          key: "vigBf",
          val: 0.1,
          min: 0.05,
          max: 0.3,
          step: 0.01,
          label: `${V("Vig bf")} (${e.length})`
        },
        {
          key: "vigTf",
          val: 85e-4,
          min: 4e-3,
          max: 0.03,
          step: 1e-3,
          label: `${V("Vig tf")} (${e.length})`
        },
        {
          key: "vigTw",
          val: 56e-4,
          min: 3e-3,
          max: 0.02,
          step: 1e-3,
          label: `${V("Vig tw")} (${e.length})`
        },
        {
          key: "corrB",
          val: 0.06,
          min: 0.03,
          max: 0.2,
          step: 0.01,
          label: `${V("Corr b")} (${e.length})`
        },
        {
          key: "corrT",
          val: 4e-3,
          min: 2e-3,
          max: 0.01,
          step: 1e-3,
          label: `${V("Corr t")} (${e.length})`
        }
      ],
      eiffel: [],
      arco: [],
      puente: [],
      twisted: [],
      burj: [],
      opera: [],
      diagrid: [],
      talud: [
        {
          key: "H",
          val: 6,
          min: 2,
          max: 15,
          step: 0.5,
          label: `H (${e.length})`
        },
        {
          key: "angle",
          val: 45,
          min: 20,
          max: 70,
          step: 5,
          label: `${V("Angulo")} (deg)`
        },
        {
          key: "bTop",
          val: 3,
          min: 1,
          max: 10,
          step: 0.5,
          label: `${V("b top")} (${e.length})`
        },
        {
          key: "bBot",
          val: 3,
          min: 1,
          max: 10,
          step: 0.5,
          label: `${V("b base")} (${e.length})`
        },
        {
          key: "meshSize",
          val: 0.8,
          min: 0.3,
          max: 3,
          step: 0.1,
          label: `${V("Mesh size")} (${e.length})`
        },
        {
          key: "E",
          val: e.E * 5e4 / 2e8,
          min: 100,
          max: 1e12,
          step: 1e3,
          label: `E (${e.stress})`
        },
        {
          key: "nu",
          val: 0.3,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "gamma",
          val: 18,
          min: 5,
          max: 30,
          step: 1,
          label: `gamma (${e.force}/${e.length}\xB3)`
        },
        {
          key: "c",
          val: 15,
          min: 0,
          max: 100,
          step: 1,
          label: `${V("Cohesion c")} (${e.stress})`
        },
        {
          key: "phi",
          val: 30,
          min: 0,
          max: 45,
          step: 1,
          label: `${V("Friccion \u03C6")} (deg)`
        },
        {
          key: "qs",
          val: 0,
          min: 0,
          max: 100,
          step: 5,
          label: `${V("Sobrecarga")} (${e.stress})`
        }
      ]
    };
  }
  function Rl(e) {
    const h = e.force, [R, M, X] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: R,
          max: 0,
          step: X,
          label: `${V("CM")} (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: X,
          label: `${V("CV")} (${h})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: R,
          max: 0,
          step: X,
          label: `${V("CM")} (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: X,
          label: `${V("CV")} (${h})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: R,
          max: M,
          step: X,
          label: `${V("Ex sismo")} (${h})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: R,
          max: 0,
          step: X,
          label: `${V("CM")} (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: X,
          label: `${V("CV")} (${h})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: R,
          max: M,
          step: X,
          label: `${V("Ex sismo")} (${h})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: R,
          max: 0,
          step: X,
          label: `${V("CM")} (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: X,
          label: `${V("CV")} (${h})`
        },
        {
          key: "Ex",
          val: 0,
          min: R,
          max: M,
          step: X,
          label: `${V("Ex sismo")} (${h})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: R,
          max: 0,
          step: X,
          label: `${V("CM")} (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: X,
          label: `${V("CV")} (${h})`
        },
        {
          key: "Ex",
          val: 0,
          min: R,
          max: M,
          step: X,
          label: `${V("Ex sismo")} (${h})`
        },
        {
          key: "Ey",
          val: 0,
          min: R,
          max: M,
          step: X,
          label: `${V("Ey sismo")} (${h})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: R,
          max: 0,
          step: X,
          label: `${V("CM")} (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: X,
          label: `${V("CV")} (${h})`
        }
      ],
      barra: [
        {
          key: "F",
          val: e.defaultForce * 10,
          min: e.forceRange[0] * 10,
          max: e.forceRange[1] * 10,
          step: Math.abs(e.forceRange[2]) * 5,
          label: `${V("F axial")} (${h})`
        }
      ],
      "placa-3q": [
        {
          key: "CM",
          val: 0,
          min: R,
          max: 0,
          step: X,
          label: `${V("CM")} (${h})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: R,
          max: 0,
          step: X,
          label: `${V("CM")} (${h})`
        }
      ],
      "losa-rect": [],
      "losa-plana": [],
      "viga-alta": [],
      "muro-contencion": [],
      zapata: [],
      "placa-orificios": [],
      "col-placa": [],
      talud: [],
      "muro-q4": [],
      "viga-q4": [],
      "placa-xz": [],
      pergola: [],
      eiffel: [],
      arco: [],
      puente: [],
      twisted: [],
      burj: [],
      opera: [],
      diagrid: []
    };
  }
  Nl = function() {
    const e = document.createElement("div");
    e.id = "modal-results", e.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; max-height: 60vh; overflow: auto; pointer-events: auto;
    border: 1px solid #0f03; resize: both;
  `;
    let h = false;
    function R(M, X) {
      var _a, _b;
      if (!M.frequencies || M.frequencies.length === 0) {
        e.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
        return;
      }
      const D = [
        "Ux",
        "Uy",
        "Uz",
        "Rx",
        "Ry",
        "Rz"
      ], Z = [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let J = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:move; position:sticky; top:0; background:rgba(0,0,0,0.95); z-index:1;">
  <b style="color:#ff0">MODAL \u2014 ${X.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (J += '<div id="modal-body" style="padding:0 12px 10px 12px;">', X.properties) for (const j of X.properties) J += `<span style="color:#888">${j}</span>
`;
      J += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03; position:sticky; top:36px; background:rgba(0,0,0,0.95); z-index:1;">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">f (Hz)</th>
  <th style="padding:2px 6px">T (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const j of D) J += `<th style="padding:2px 5px">${j}</th>`;
      if (J += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, M.frequencies.forEach((j, be) => {
        var _a2;
        const T = j > 0 ? 1 / j : 0, G = j * 2 * Math.PI, $e = ((_a2 = M.massParticipation) == null ? void 0 : _a2[be]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let fe = 0; fe < 6; fe++) Z[fe] += $e[fe];
        J += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${be + 1}</td>
  <td style="padding:2px 6px; text-align:right">${j.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${T.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${G.toFixed(2)}</td>`;
        for (let fe = 0; fe < 6; fe++) {
          const re = ($e[fe] * 100).toFixed(1), ne = $e[fe] > 0.5 ? "#f00" : $e[fe] > 0.1 ? "#ff0" : "#0f0";
          J += `<td style="padding:2px 5px; text-align:right; color:${ne}">${re}%</td>`;
        }
        J += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(Z[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(Z[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(Z[5] * 100).toFixed(1)}%</td></tr>`;
      }), J += "</table></div>", e.innerHTML = J, h) {
        const j = e.querySelector("#modal-body"), be = e.querySelector("#modal-minimize");
        j && (j.style.display = "none"), be && (be.textContent = "\u25A2", be.title = "Restaurar");
      }
      (_a = e.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
        h = !h;
        const j = e.querySelector("#modal-body"), be = e.querySelector("#modal-minimize");
        h ? (j.style.display = "none", be.textContent = "\u25A2", be.title = "Restaurar") : (j.style.display = "block", be.textContent = "\u25AC", be.title = "Minimizar");
      });
      const H = e.querySelector("#modal-header");
      if (H) {
        let j = false, be = 0, T = 0, G = 0, $e = 0;
        H.addEventListener("mousedown", (fe) => {
          if (fe.target.tagName === "BUTTON") return;
          j = true, be = fe.clientX, T = fe.clientY;
          const re = e.getBoundingClientRect();
          G = re.left, $e = re.top, fe.preventDefault();
        }), document.addEventListener("mousemove", (fe) => {
          if (!j) return;
          const re = fe.clientX - be, ne = fe.clientY - T;
          e.style.left = G + re + "px", e.style.top = $e + ne + "px", e.style.bottom = "auto", e.style.right = "auto";
        }), document.addEventListener("mouseup", () => {
          j = false;
        });
      }
      (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const j = [];
        j.push(`Modal Analysis \u2014 ${X.title}`);
        const be = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${D.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        j.push(be), j.push("-".repeat(be.length));
        const T = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        M.frequencies.forEach(($e, fe) => {
          var _a2;
          const re = $e > 0 ? 1 / $e : 0, ne = $e * 2 * Math.PI, _ = ((_a2 = M.massParticipation) == null ? void 0 : _a2[fe]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let Y = 0; Y < 6; Y++) T[Y] += _[Y];
          const B = _.map((Y) => ((Y * 100).toFixed(1) + "%").padStart(6)).join(" ");
          j.push(`${String(fe + 1).padStart(4)}  ${$e.toFixed(4).padStart(9)}  ${re.toFixed(4).padStart(9)}  ${ne.toFixed(2).padStart(9)}  ${B}  ${(T[0] * 100).toFixed(1).padStart(5)}%  ${(T[1] * 100).toFixed(1).padStart(5)}%  ${(T[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(j.join(`
`));
        const G = e.querySelector("#modal-copy");
        G.textContent = "\u2713", setTimeout(() => G.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: R
    };
  };
  const Ne = 64516e-8, q = 416231e-12, ae = 0.0254, Ro = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * Ne,
      Iz: 16.4 * q,
      Iy: 2.2 * q,
      J: 0.0405 * q,
      d: 5.9 * ae,
      bf: 3.94 * ae
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * Ne,
      Iz: 29.1 * q,
      Iy: 9.32 * q,
      J: 0.103 * q,
      d: 5.99 * ae,
      bf: 5.99 * ae
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * Ne,
      Iz: 41.4 * q,
      Iy: 13.3 * q,
      J: 0.204 * q,
      d: 6.2 * ae,
      bf: 6.02 * ae
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * Ne,
      Iz: 30.8 * q,
      Iy: 2.09 * q,
      J: 0.0426 * q,
      d: 7.89 * ae,
      bf: 3.94 * ae
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * Ne,
      Iz: 61.9 * q,
      Iy: 7.97 * q,
      J: 0.172 * q,
      d: 8.14 * ae,
      bf: 5.25 * ae
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * Ne,
      Iz: 82.7 * q,
      Iy: 18.3 * q,
      J: 0.346 * q,
      d: 7.93 * ae,
      bf: 6.5 * ae
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * Ne,
      Iz: 110 * q,
      Iy: 37.1 * q,
      J: 0.536 * q,
      d: 8 * ae,
      bf: 7.995 * ae
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * Ne,
      Iz: 146 * q,
      Iy: 49.1 * q,
      J: 0.871 * q,
      d: 8.25 * ae,
      bf: 8.07 * ae
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * Ne,
      Iz: 184 * q,
      Iy: 60.9 * q,
      J: 1.45 * q,
      d: 8.5 * ae,
      bf: 8.11 * ae
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * Ne,
      Iz: 272 * q,
      Iy: 88.6 * q,
      J: 3.54 * q,
      d: 9 * ae,
      bf: 8.28 * ae
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * Ne,
      Iz: 53.8 * q,
      Iy: 2.18 * q,
      J: 0.0547 * q,
      d: 9.87 * ae,
      bf: 3.96 * ae
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * Ne,
      Iz: 118 * q,
      Iy: 11.4 * q,
      J: 0.239 * q,
      d: 10.17 * ae,
      bf: 5.75 * ae
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * Ne,
      Iz: 171 * q,
      Iy: 36.6 * q,
      J: 0.583 * q,
      d: 9.73 * ae,
      bf: 7.96 * ae
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * Ne,
      Iz: 272 * q,
      Iy: 93.4 * q,
      J: 1.39 * q,
      d: 9.98 * ae,
      bf: 10 * ae
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * Ne,
      Iz: 394 * q,
      Iy: 134 * q,
      J: 3.56 * q,
      d: 10.4 * ae,
      bf: 10.13 * ae
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * Ne,
      Iz: 623 * q,
      Iy: 207 * q,
      J: 10.9 * q,
      d: 11.1 * ae,
      bf: 10.34 * ae
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * Ne,
      Iz: 88.6 * q,
      Iy: 2.36 * q,
      J: 0.0704 * q,
      d: 11.91 * ae,
      bf: 3.97 * ae
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * Ne,
      Iz: 156 * q,
      Iy: 4.66 * q,
      J: 0.293 * q,
      d: 12.31 * ae,
      bf: 4.03 * ae
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * Ne,
      Iz: 204 * q,
      Iy: 17.3 * q,
      J: 0.3 * q,
      d: 12.22 * ae,
      bf: 6.49 * ae
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * Ne,
      Iz: 310 * q,
      Iy: 44.1 * q,
      J: 0.906 * q,
      d: 11.94 * ae,
      bf: 8.01 * ae
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * Ne,
      Iz: 425 * q,
      Iy: 95.8 * q,
      J: 1.58 * q,
      d: 12.06 * ae,
      bf: 9.99 * ae
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * Ne,
      Iz: 597 * q,
      Iy: 195 * q,
      J: 4.05 * q,
      d: 12.25 * ae,
      bf: 12.04 * ae
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * Ne,
      Iz: 833 * q,
      Iy: 270 * q,
      J: 8.44 * q,
      d: 12.71 * ae,
      bf: 12.16 * ae
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * Ne,
      Iz: 1070 * q,
      Iy: 345 * q,
      J: 16 * q,
      d: 13.12 * ae,
      bf: 12.32 * ae
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * Ne,
      Iz: 199 * q,
      Iy: 7 * q,
      J: 0.208 * q,
      d: 13.74 * ae,
      bf: 5 * ae
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * Ne,
      Iz: 291 * q,
      Iy: 19.6 * q,
      J: 0.38 * q,
      d: 13.84 * ae,
      bf: 6.73 * ae
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * Ne,
      Iz: 385 * q,
      Iy: 26.7 * q,
      J: 0.798 * q,
      d: 14.1 * ae,
      bf: 6.77 * ae
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * Ne,
      Iz: 485 * q,
      Iy: 51.4 * q,
      J: 1.45 * q,
      d: 13.79 * ae,
      bf: 8.03 * ae
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * Ne,
      Iz: 640 * q,
      Iy: 107 * q,
      J: 2.19 * q,
      d: 13.89 * ae,
      bf: 9.99 * ae
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * Ne,
      Iz: 882 * q,
      Iy: 148 * q,
      J: 5.07 * q,
      d: 14.31 * ae,
      bf: 10.13 * ae
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * Ne,
      Iz: 1240 * q,
      Iy: 447 * q,
      J: 7.12 * q,
      d: 14.32 * ae,
      bf: 14.61 * ae
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * Ne,
      Iz: 1530 * q,
      Iy: 548 * q,
      J: 12.3 * q,
      d: 14.66 * ae,
      bf: 14.73 * ae
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * Ne,
      Iz: 2140 * q,
      Iy: 838 * q,
      J: 23.7 * q,
      d: 15.22 * ae,
      bf: 15.65 * ae
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * Ne,
      Iz: 301 * q,
      Iy: 9.59 * q,
      J: 0.262 * q,
      d: 15.69 * ae,
      bf: 5.5 * ae
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * Ne,
      Iz: 448 * q,
      Iy: 24.5 * q,
      J: 0.545 * q,
      d: 15.86 * ae,
      bf: 6.99 * ae
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * Ne,
      Iz: 659 * q,
      Iy: 37.2 * q,
      J: 1.52 * q,
      d: 16.26 * ae,
      bf: 7.07 * ae
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * Ne,
      Iz: 954 * q,
      Iy: 119 * q,
      J: 2.39 * q,
      d: 16.33 * ae,
      bf: 10.24 * ae
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * Ne,
      Iz: 1300 * q,
      Iy: 163 * q,
      J: 5.45 * q,
      d: 16.75 * ae,
      bf: 10.37 * ae
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * Ne,
      Iz: 510 * q,
      Iy: 15.3 * q,
      J: 0.506 * q,
      d: 17.7 * ae,
      bf: 6 * ae
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * Ne,
      Iz: 800 * q,
      Iy: 40.1 * q,
      J: 1.24 * q,
      d: 17.99 * ae,
      bf: 7.5 * ae
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * Ne,
      Iz: 1170 * q,
      Iy: 60.3 * q,
      J: 3.49 * q,
      d: 18.47 * ae,
      bf: 7.64 * ae
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * Ne,
      Iz: 1750 * q,
      Iy: 201 * q,
      J: 5.86 * q,
      d: 18.59 * ae,
      bf: 11.15 * ae
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * Ne,
      Iz: 843 * q,
      Iy: 20.7 * q,
      J: 0.77 * q,
      d: 20.66 * ae,
      bf: 6.5 * ae
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * Ne,
      Iz: 1330 * q,
      Iy: 57.5 * q,
      J: 1.83 * q,
      d: 20.99 * ae,
      bf: 8.24 * ae
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * Ne,
      Iz: 1830 * q,
      Iy: 81.4 * q,
      J: 4.34 * q,
      d: 21.43 * ae,
      bf: 8.36 * ae
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * Ne,
      Iz: 2670 * q,
      Iy: 274 * q,
      J: 6.83 * q,
      d: 21.51 * ae,
      bf: 12.34 * ae
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * Ne,
      Iz: 1350 * q,
      Iy: 29.1 * q,
      J: 1.18 * q,
      d: 23.57 * ae,
      bf: 7.01 * ae
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * Ne,
      Iz: 2100 * q,
      Iy: 82.5 * q,
      J: 2.68 * q,
      d: 23.92 * ae,
      bf: 8.99 * ae
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * Ne,
      Iz: 3100 * q,
      Iy: 259 * q,
      J: 4.72 * q,
      d: 24.06 * ae,
      bf: 12.75 * ae
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * Ne,
      Iz: 4020 * q,
      Iy: 340 * q,
      J: 9.5 * q,
      d: 24.48 * ae,
      bf: 12.86 * ae
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * Ne,
      Iz: 4580 * q,
      Iy: 391 * q,
      J: 12.6 * q,
      d: 24.74 * ae,
      bf: 12.9 * ae
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * Ne,
      Iz: 5680 * q,
      Iy: 479 * q,
      J: 21.2 * q,
      d: 25.24 * ae,
      bf: 12.9 * ae
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * Ne,
      Iz: 2850 * q,
      Iy: 106 * q,
      J: 2.81 * q,
      d: 26.71 * ae,
      bf: 9.96 * ae
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * Ne,
      Iz: 4090 * q,
      Iy: 159 * q,
      J: 6.77 * q,
      d: 27.29 * ae,
      bf: 10.07 * ae
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * Ne,
      Iz: 3610 * q,
      Iy: 115 * q,
      J: 3.06 * q,
      d: 29.53 * ae,
      bf: 10.4 * ae
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * Ne,
      Iz: 4930 * q,
      Iy: 164 * q,
      J: 6.43 * q,
      d: 30.01 * ae,
      bf: 10.5 * ae
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * Ne,
      Iz: 5900 * q,
      Iy: 187 * q,
      J: 5.3 * q,
      d: 32.86 * ae,
      bf: 11.48 * ae
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * Ne,
      Iz: 7800 * q,
      Iy: 225 * q,
      J: 7 * q,
      d: 35.55 * ae,
      bf: 11.95 * ae
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * Ne,
      Iz: 8.22 * q,
      Iy: 8.22 * q,
      J: 13.4 * q,
      d: 4 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * Ne,
      Iz: 10.7 * q,
      Iy: 10.7 * q,
      J: 17.9 * q,
      d: 4 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * Ne,
      Iz: 12.3 * q,
      Iy: 12.3 * q,
      J: 21 * q,
      d: 4 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * Ne,
      Iz: 30.3 * q,
      Iy: 30.3 * q,
      J: 48.3 * q,
      d: 6 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * Ne,
      Iz: 41.1 * q,
      Iy: 41.1 * q,
      J: 66.9 * q,
      d: 6 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * Ne,
      Iz: 49.6 * q,
      Iy: 49.6 * q,
      J: 82.2 * q,
      d: 6 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * Ne,
      Iz: 70.7 * q,
      Iy: 70.7 * q,
      J: 112 * q,
      d: 8 * ae,
      bf: 8 * ae
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * Ne,
      Iz: 98 * q,
      Iy: 98 * q,
      J: 158 * q,
      d: 8 * ae,
      bf: 8 * ae
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * Ne,
      Iz: 122 * q,
      Iy: 122 * q,
      J: 199 * q,
      d: 8 * ae,
      bf: 8 * ae
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * Ne,
      Iz: 202 * q,
      Iy: 202 * q,
      J: 323 * q,
      d: 10 * ae,
      bf: 10 * ae
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * Ne,
      Iz: 254 * q,
      Iy: 254 * q,
      J: 412 * q,
      d: 10 * ae,
      bf: 10 * ae
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * Ne,
      Iz: 355 * q,
      Iy: 355 * q,
      J: 564 * q,
      d: 12 * ae,
      bf: 12 * ae
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * Ne,
      Iz: 452 * q,
      Iy: 452 * q,
      J: 724 * q,
      d: 12 * ae,
      bf: 12 * ae
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * Ne,
      Iz: 18 * q,
      Iy: 9.58 * q,
      J: 22.6 * q,
      d: 6 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * Ne,
      Iz: 23.8 * q,
      Iy: 12.3 * q,
      J: 30.3 * q,
      d: 6 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * Ne,
      Iz: 33.6 * q,
      Iy: 11.8 * q,
      J: 33 * q,
      d: 8 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * Ne,
      Iz: 45.1 * q,
      Iy: 15 * q,
      J: 44.5 * q,
      d: 8 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * Ne,
      Iz: 46.1 * q,
      Iy: 28.2 * q,
      J: 61.3 * q,
      d: 8 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * Ne,
      Iz: 63 * q,
      Iy: 37.5 * q,
      J: 84.6 * q,
      d: 8 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * Ne,
      Iz: 103 * q,
      Iy: 47.1 * q,
      J: 115 * q,
      d: 10 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * Ne,
      Iz: 196 * q,
      Iy: 102 * q,
      J: 249 * q,
      d: 12 * ae,
      bf: 8 * ae
    }
  ];
  function Tn() {
    const e = {};
    return Ro.forEach((h, R) => {
      h.type === "W" && (e[h.name] = R);
    }), e;
  }
  function zn() {
    const e = {};
    return Ro.forEach((h, R) => {
      h.type === "HSS" && (e[h.name] = R);
    }), e;
  }
  function Ol(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: h, elements: R, elementInputs: M, nodeInputs: X, deformOutputs: D } = e, Z = h.length * 6, J = R.length, H = R.filter((re) => re.length === 2).length, j = R.filter((re) => re.length >= 3).length, be = document.createElement("div");
    be.className = "rpt-overlay";
    let T = "";
    T += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', T += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", T += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', T += '<hr class="rpt-sep"/>', T += "<h2>1. Input Data</h2>", T += '<table class="rpt-info"><tbody>', T += `<tr><td>Number of nodes</td><td class="val">${h.length}</td></tr>`, T += `<tr><td>Number of elements</td><td class="val">${J} (${H} frames, ${j} shells)</td></tr>`, T += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', T += `<tr><td>Total DOFs</td><td class="val">${Z}</td></tr>`, T += "</tbody></table>", T += "<h3>1.1 Node Coordinates</h3>", T += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', h.forEach((re, ne) => {
      T += `<tr><td>${ne}</td><td>${rt(re[0])}</td><td>${rt(re[1])}</td><td>${rt(re[2])}</td></tr>`;
    }), T += "</tbody></table>", T += "<h3>1.2 Element Connectivity</h3>", T += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', R.forEach((re, ne) => {
      var _a2, _b2, _c2, _d2;
      const _ = re.length === 2, B = re.map((ye) => h[ye]), Y = _ ? jo(ko(B[1], B[0])) : 0, ue = ((_a2 = M.elasticities) == null ? void 0 : _a2.get(ne)) ?? 0, Me = ((_b2 = M.areas) == null ? void 0 : _b2.get(ne)) ?? 0, Le = ((_c2 = M.momentsOfInertiaZ) == null ? void 0 : _c2.get(ne)) ?? 0, Ke = ((_d2 = M.momentsOfInertiaY) == null ? void 0 : _d2.get(ne)) ?? 0;
      T += `<tr><td>${ne}</td><td>${_ ? "Frame" : "Shell"}</td><td>${re.join(" \u2192 ")}</td>`, T += `<td>${rt(Y)}</td><td>${rt(ue)}</td><td>${rt(Me)}</td><td>${rt(Le)}</td><td>${rt(Ke)}</td></tr>`;
    }), T += "</tbody></table>", T += "<h2>2. Element Formulation</h2>", H > 0 && (T += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", T += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", T += "<h4>2.1.1 Shape Functions</h4>", T += "<p><b>Axial</b> (linear interpolation):</p>", T += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', T += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", T += '<table class="rpt-eq-table"><tbody>', T += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', T += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', T += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', T += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', T += "</tbody></table>", T += _l(), T += "<p><b>Torsion</b> (linear): same as axial.</p>", T += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", T += "<p>The B matrix relates nodal displacements to internal strains:</p>", T += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', T += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', T += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', T += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', T += "<h4>2.1.3 Constitutive Relations D</h4>", T += '<table class="rpt-eq-table"><tbody>', T += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', T += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', T += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', T += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', T += "</tbody></table>", T += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", T += "<p>Obtained by analytical integration:</p>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', T += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", T += '<div class="rpt-eq-small">', T += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", T += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", T += "</div>", T += "<h4>2.1.5 Transformation Matrix T</h4>", T += "<p>Direction cosines of element axis:</p>", T += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', T += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', T += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', T += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", T += "<h4>2.1.6 Global Stiffness Matrix</h4>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), T += "<h2>3. Numerical Results per Element</h2>", T += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let re = 0; re < J; re++) {
      const ne = R[re], _ = ne.map((dt) => h[dt]);
      if (!(ne.length === 2)) continue;
      const Y = jo(ko(_[1], _[0])), ue = ((_a = M.elasticities) == null ? void 0 : _a.get(re)) ?? 0, Me = ((_b = M.areas) == null ? void 0 : _b.get(re)) ?? 0, Le = ((_c = M.momentsOfInertiaZ) == null ? void 0 : _c.get(re)) ?? 0, Ke = ((_d = M.momentsOfInertiaY) == null ? void 0 : _d.get(re)) ?? 0, ye = ((_e = M.shearModuli) == null ? void 0 : _e.get(re)) ?? 0, Ye = ((_f = M.torsionalConstants) == null ? void 0 : _f.get(re)) ?? 0;
      let Ge = null, he = null, Te = null;
      try {
        Ge = Pn(_, M, re), he = Fn(_), Te = uo(bs(he), uo(Ge, he));
      } catch {
        continue;
      }
      const Ce = ko(_[1], _[0]), Ue = Ce[0] / Y, ct = Ce[1] / Y, Ze = Ce[2] / Y;
      T += '<div class="rpt-elem-block">', T += `<h3 class="rpt-elem-title" data-toggle="elem${re}">\u25B6 Element ${re} \u2014 Nodes ${ne[0]} \u2192 ${ne[1]}, L = ${rt(Y)}</h3>`, T += `<div id="rpt-elem${re}" class="rpt-elem-body" style="display:none">`, T += "<h4>Properties (numerical substitution)</h4>", T += '<div class="rpt-eq-small">', T += `E = ${rt(ue)} &nbsp;&nbsp; A = ${rt(Me)} &nbsp;&nbsp; I<sub>z</sub> = ${rt(Le)} &nbsp;&nbsp; I<sub>y</sub> = ${rt(Ke)} &nbsp;&nbsp; G = ${rt(ye)} &nbsp;&nbsp; J = ${rt(Ye)}<br/>`, T += `EA/L = ${rt(ue)}\xB7${rt(Me)}/${rt(Y)} = <b>${rt(ue * Me / Y)}</b><br/>`, T += `12EI<sub>z</sub>/L\xB3 = 12\xB7${rt(ue)}\xB7${rt(Le)}/${rt(Y)}\xB3 = <b>${rt(12 * ue * Le / Y ** 3)}</b><br/>`, T += `12EI<sub>y</sub>/L\xB3 = 12\xB7${rt(ue)}\xB7${rt(Ke)}/${rt(Y)}\xB3 = <b>${rt(12 * ue * Ke / Y ** 3)}</b><br/>`, T += `GJ/L = ${rt(ye)}\xB7${rt(Ye)}/${rt(Y)} = <b>${rt(ye * Ye / Y)}</b>`, T += "</div>", T += "<h4>Direction cosines</h4>", T += `<div class="rpt-eq-small">l = ${Ln(Ue)}, m = ${Ln(ct)}, n = ${Ln(Ze)}, D = ${Ln(Math.sqrt(Ue ** 2 + ct ** 2))}</div>`, T += "<h4>K<sub>local</sub> (12\xD712)</h4>", T += ps(Ge, 12), T += "<h4>T \u2014 Transformation (12\xD712)</h4>", T += ps(he, 12), T += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", T += ps(Te, 12), T += "<h4>Assembly</h4>", T += `<div class="rpt-eq-small">Global DOFs: node ${ne[0]} \u2192 [${ne[0] * 6}..${ne[0] * 6 + 5}], node ${ne[1]} \u2192 [${ne[1] * 6}..${ne[1] * 6 + 5}]</div>`, T += "</div></div>";
    }
    T += "<h2>4. Global Assembly</h2>", T += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${J - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, T += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", T += Bl(R, h.length), T += "<h2>5. Boundary Conditions</h2>";
    const G = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], $e = [];
    if (T += "<h3>5.1 Supports (fixed DOFs)</h3>", X.supports && X.supports.size > 0) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const re of G) T += `<th>${re}</th>`;
      T += "</tr></thead><tbody>", X.supports.forEach((re, ne) => {
        T += `<tr><td>${ne}</td>`, re.forEach((_, B) => {
          _ && $e.push(ne * 6 + B), T += `<td class="${_ ? "fixed" : ""}">${_ ? "Fixed" : "Free"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += `<div class="rpt-eq-small">Fixed DOFs: [${$e.join(", ")}] \u2192 ${$e.length} constraints<br/>`, T += `Free DOFs: ${Z} \u2212 ${$e.length} = <b>${Z - $e.length}</b></div>`, T += "<h3>5.2 Applied Loads</h3>", X.loads && X.loads.size > 0) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const re = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const ne of re) T += `<th>${ne}</th>`;
      T += "</tr></thead><tbody>", X.loads.forEach((ne, _) => {
        T += `<tr><td>${_}</td>`, ne.forEach((B) => {
          const Y = Math.abs(B) > 1e-10;
          T += `<td class="${Y ? "nz" : ""}">${Y ? rt(B) : "0"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h2>6. Solution</h2>", T += "<p>After removing fixed DOFs, the reduced system is:</p>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', T += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", T += "<h3>6.1 Nodal Displacements</h3>", D == null ? void 0 : D.deformations) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const re of G) T += `<th>${re}</th>`;
      T += "</tr></thead><tbody>", D.deformations.forEach((re, ne) => {
        T += `<tr><td>${ne}</td>`, re.forEach((_) => {
          const B = Math.abs(_) > 1e-10;
          T += `<td class="${B ? "nz" : ""}">${rt(_, 6)}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h3>6.2 Reactions</h3>", T += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', D == null ? void 0 : D.reactions) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const re of G) T += `<th>${re}</th>`;
      T += "</tr></thead><tbody>", D.reactions.forEach((re, ne) => {
        T += `<tr><td>${ne}</td>`, re.forEach((_) => {
          const B = Math.abs(_) > 1e-10;
          T += `<td class="${B ? "nz-react" : ""}">${B ? rt(_, 4) : "0"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h2>7. Internal Forces</h2>", T += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", T += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', T += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', D == null ? void 0 : D.deformations) {
      const re = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      T += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const ne of re) T += `<th>${ne}<sub>i</sub></th>`;
      for (const ne of re) T += `<th>${ne}<sub>j</sub></th>`;
      T += "</tr></thead><tbody>";
      for (let ne = 0; ne < J; ne++) {
        const _ = R[ne];
        if (_.length !== 2) continue;
        const B = _.map((Y) => h[Y]);
        try {
          const Y = Pn(B, M, ne), ue = Fn(B), Me = [];
          for (const ye of _) {
            const Ye = ((_g = D.deformations) == null ? void 0 : _g.get(ye)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Me.push(...Ye);
          }
          const Le = uo(ue, Me), Ke = uo(Y, Le);
          T += `<tr><td>${ne}</td><td>${_.join("\u2192")}</td>`;
          for (let ye = 0; ye < 12; ye++) {
            const Ye = Math.abs(Ke[ye]) > 1e-10;
            T += `<td class="${Ye ? "nz" : ""}">${rt(Ke[ye], 2)}</td>`;
          }
          T += "</tr>";
        } catch {
        }
      }
      T += "</tbody></table>";
    }
    const fe = `
    <style>
      .rpt-overlay {
        position: fixed; inset: 0; z-index: 9999999;
        background: #fff; color: #222;
        overflow-y: auto; padding: 30px 50px;
        font-family: 'Georgia Pro', 'Century Schoolbook', 'Times New Roman', serif;
        font-size: 12pt; line-height: 160%;
        max-width: 1000px; margin: 0 auto;
      }
      .rpt-overlay h1 { font-family: 'Arial Nova', Helvetica, sans-serif; font-size: 22pt; color: #003366; margin: 0 0 4px 0; }
      .rpt-overlay h2 { font-family: 'Arial Nova', Helvetica, sans-serif; font-size: 16pt; color: #003366; margin: 28px 0 12px 0; border-bottom: 2px solid #003366; padding-bottom: 4px; }
      .rpt-overlay h3 { font-family: 'Arial Nova', Helvetica, sans-serif; font-size: 13pt; color: #005599; margin: 20px 0 8px 0; }
      .rpt-overlay h4 { font-family: 'Arial Nova', Helvetica, sans-serif; font-size: 11pt; color: #666; margin: 14px 0 6px 0; }
      .rpt-overlay p { margin: 6px 0; }
      .rpt-subtitle { color: #666; font-style: italic; margin-bottom: 8px; }
      .rpt-sep { border: none; border-top: 1px solid #ccc; margin: 16px 0; }

      .rpt-close { position: fixed; top: 12px; right: 20px; background: #003366; color: #fff; border: none; border-radius: 4px; padding: 8px 16px; cursor: pointer; font-size: 13px; z-index: 10000000; }
      .rpt-close:hover { background: #005599; }

      .rpt-info { border-collapse: collapse; margin: 8px 0; font-family: 'Segoe UI', sans-serif; font-size: 11pt; }
      .rpt-info td { padding: 3px 16px 3px 0; }
      .rpt-info .val { color: #06d; font-weight: bold; }

      .rpt-data { border-collapse: collapse; margin: 8px 0; font-family: 'Consolas', monospace; font-size: 10pt; width: 100%; }
      .rpt-data th { background: #f0f4f8; color: #003366; padding: 4px 8px; border: 1px solid #ccc; text-align: center; font-size: 9pt; }
      .rpt-data td { padding: 3px 8px; border: 1px solid #ddd; text-align: right; }
      .rpt-data td.nz { color: #06d; font-weight: bold; }
      .rpt-data td.nz-react { color: #c44; font-weight: bold; }
      .rpt-data td.fixed { color: #c44; font-weight: bold; background: #fff0f0; }

      .rpt-eq { background: #f8f9fb; border-left: 3px solid #06d; padding: 8px 14px; margin: 8px 0; font-family: 'Georgia Pro', serif; font-size: 12pt; color: #06d; }
      .rpt-eq-highlight { background: #eef6ff; border-left: 4px solid #003366; font-weight: bold; }
      .rpt-eq-small { background: #fafafa; border-left: 2px solid #ccc; padding: 6px 12px; margin: 6px 0; font-family: 'Consolas', monospace; font-size: 10pt; color: #333; line-height: 180%; }

      .rpt-eq-table { border-collapse: collapse; margin: 6px 0; }
      .rpt-eq-table td { padding: 3px 12px; vertical-align: top; }
      .rpt-eq-table .eq-name { color: #06d; font-weight: bold; font-family: serif; }
      .rpt-eq-table .eq-desc { color: #888; font-style: italic; font-size: 10pt; }

      .rpt-mtx { border-collapse: collapse; font-family: 'Consolas', monospace; font-size: 9pt; margin: 6px 0; }
      .rpt-mtx td { padding: 2px 6px; text-align: right; border: 1px solid #e0e0e0; min-width: 55px; }
      .rpt-mtx td.z { color: #ccc; }
      .rpt-mtx td.diag { background: #eef6ff; color: #06d; font-weight: bold; }

      .rpt-elem-block { margin: 4px 0; border-left: 3px solid #e0e0e0; padding-left: 12px; }
      .rpt-elem-title { cursor: pointer; color: #005599; }
      .rpt-elem-title:hover { color: #08d; }
      .rpt-elem-body { margin: 4px 0 16px 0; }

      .rpt-assembly-map { border-collapse: collapse; margin: 8px 0; }
      .rpt-assembly-map td { width: 16px; height: 16px; text-align: center; font-size: 8px; padding: 0; border: 1px solid #eee; }

      @media print {
        .rpt-close { display: none; }
        .rpt-overlay { position: static; padding: 10mm; }
      }
    </style>
  `;
    return be.innerHTML = fe + T, (_h = be.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => be.remove()), be.querySelectorAll("[data-toggle]").forEach((re) => {
      re.addEventListener("click", () => {
        const ne = re.dataset.toggle, _ = be.querySelector(`#rpt-${ne}`);
        if (_) {
          const B = _.style.display !== "none";
          _.style.display = B ? "none" : "", re.textContent = re.textContent.replace(/^[▼▶]/, B ? "\u25B6" : "\u25BC");
        }
      });
    }), be;
  }
  function rt(e, h = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(h) : e.toFixed(h);
  }
  function Ln(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function ps(e, h) {
    var _a;
    const R = Math.min(h, 12);
    let M = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let X = 0; X < R; X++) {
      M += "<tr>";
      for (let D = 0; D < R; D++) {
        const Z = ((_a = e[X]) == null ? void 0 : _a[D]) ?? 0, J = Math.abs(Z) < 1e-10;
        M += `<td class="${J ? "z" : ""} ${X === D && !J ? "diag" : ""}">${J ? "0" : ql(Z)}</td>`;
      }
      M += "</tr>";
    }
    return M += "</table>", h > R && (M += `<div style="color:#888;font-size:9pt">(showing ${R}\xD7${R} of ${h}\xD7${h})</div>`), M += "</div>", M;
  }
  function ql(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function _l() {
    const Z = [
      {
        name: "H\u2081",
        color: "#c44",
        fn: (H) => 1 - 3 * H ** 2 + 2 * H ** 3
      },
      {
        name: "H\u2082/L",
        color: "#2a9d8f",
        fn: (H) => H * (1 - H) ** 2
      },
      {
        name: "H\u2083",
        color: "#264653",
        fn: (H) => 3 * H ** 2 - 2 * H ** 3
      },
      {
        name: "H\u2084/L",
        color: "#e9c46a",
        fn: (H) => H ** 2 * (H - 1)
      }
    ];
    let J = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    J += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, J += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', J += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, J += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, J += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const H of Z) {
      let j = "";
      for (let $e = 0; $e <= 80; $e++) {
        const fe = $e / 80, re = 30 + fe * 540, ne = 180 / 2 - H.fn(fe) * 60;
        j += ($e === 0 ? "M" : "L") + `${re.toFixed(1)},${ne.toFixed(1)}`;
      }
      J += `<path d="${j}" fill="none" stroke="${H.color}" stroke-width="2.5"/>`;
      const be = 0.75, T = 30 + be * 540 + 8, G = 180 / 2 - H.fn(be) * 60 - 6;
      J += `<text x="${T}" y="${G}" fill="${H.color}" font-size="11" font-weight="bold" font-family="sans-serif">${H.name}</text>`;
    }
    return J += "</svg>", J;
  }
  function Bl(e, h) {
    const R = h * 6, M = Math.min(R, 30);
    let X = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    X += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', X += "<tr><td></td>";
    for (let Z = 0; Z < M; Z++) X += `<td style="color:#003366;font-weight:bold;font-size:7px">${Z}</td>`;
    X += "</tr>";
    const D = Array.from({
      length: M
    }, () => Array(M).fill(0));
    for (let Z = 0; Z < e.length; Z++) {
      const J = e[Z].map((H) => H * 6);
      for (const H of J) for (const j of J) for (let be = 0; be < 6; be++) for (let T = 0; T < 6; T++) {
        const G = H + be, $e = j + T;
        G < M && $e < M && D[G][$e]++;
      }
    }
    for (let Z = 0; Z < M; Z++) {
      X += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${Z}</td>`;
      for (let J = 0; J < M; J++) {
        const H = D[Z][J], j = H === 0 ? "#fff" : H === 1 ? "#e8f0fe" : H === 2 ? "#c6dcf5" : "#a0c4e8", be = H === 0 ? "" : H.toString();
        X += `<td style="background:${j};color:#003366">${be}</td>`;
      }
      X += "</tr>";
    }
    return X += "</table></div>", R > M && (X += `<div style="color:#888;font-size:9pt">(showing ${M}\xD7${M} of ${R}\xD7${R})</div>`), X;
  }
  let fs = false;
  function Dl(e) {
    if (fs || window.katex) {
      fs = true, e();
      return;
    }
    const h = document.createElement("link");
    h.rel = "stylesheet", h.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(h);
    const R = document.createElement("script");
    R.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", R.onload = () => {
      fs = true, e();
    }, document.head.appendChild(R);
  }
  function Ea(e, h = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: h,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function Hl(e, h, R, M, X, D) {
    var _a, _b, _c, _d, _e, _f;
    const Z = R[e], J = Z.map((he) => h[he]), H = Z.length === 2, j = H ? jo(ko(J[1], J[0])) : 0, be = ((_a = M.elasticities) == null ? void 0 : _a.get(e)) ?? 0, T = ((_b = M.areas) == null ? void 0 : _b.get(e)) ?? 0, G = ((_c = M.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, $e = ((_d = M.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, fe = ((_e = M.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, re = ((_f = M.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let ne = null, _ = null, B = null;
    try {
      ne = Pn(J, M, e), _ = Fn(J), B = uo(bs(_), uo(ne, _));
    } catch {
    }
    const Y = H ? ko(J[1], J[0]) : [
      0,
      0,
      0
    ], ue = j > 0 ? Y[0] / j : 0, Me = j > 0 ? Y[1] / j : 0, Le = j > 0 ? Y[2] / j : 0, Ke = Math.sqrt(ue ** 2 + Me ** 2), ye = [];
    if ((X == null ? void 0 : X.deformations) && H) for (const he of Z) {
      const Te = X.deformations.get(he) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      ye.push(...Te);
    }
    let Ye = [], Ge = [];
    if (ye.length === 12 && _ && ne) {
      try {
        Ye = uo(_, ye);
      } catch {
        Ye = Array(12).fill(0);
      }
      try {
        Ge = uo(ne, Ye);
      } catch {
        Ge = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: Z,
      elmNodes: J,
      isFrame: H,
      L: j,
      E: be,
      A: T,
      Iz: G,
      Iy: $e,
      G: fe,
      J: re,
      kLocal: ne,
      T: _,
      kGlobal: B,
      l: ue,
      m: Me,
      n: Le,
      D: Ke,
      uGlobal: ye,
      uLocal: Ye,
      fLocal: Ge,
      dOut: X,
      aOut: D,
      totalNodes: h.length
    };
  }
  function jl(e, h, R, M, X, D) {
    var _a, _b;
    const Z = Hl(e, h, R, M, X, D), J = document.createElement("div");
    return J.className = "er-panel", J.innerHTML = Vl + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${Z.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${Z.elem.join(" \u2192 ")} \u2014 L = ${Xe(Z.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${Wl(Z)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${Sa(Z)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${Yl(Z)}</div>
  `, J.querySelectorAll(".er-tab").forEach((H) => {
      H.addEventListener("click", () => {
        J.querySelectorAll(".er-tab").forEach((be) => be.classList.remove("active")), H.classList.add("active");
        const j = H.dataset.tab;
        J.querySelectorAll(".er-body").forEach((be) => be.style.display = "none"), J.querySelector(`#er-body-${j}`).style.display = "";
      });
    }), (_a = J.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => J.remove()), (_b = J.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const H = J.classList.toggle("er-fullscreen-mode"), j = J.querySelector("#er-fullscreen");
      j && (j.textContent = H ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const H = J.querySelector("#er-sf-canvas");
      H && us(H);
      const j = J.querySelector("#er-sf-canvas-math");
      j && us(j);
    }, 50), Dl(() => {
      const H = J.querySelector("#er-body-math");
      H && (H.innerHTML = Sa(Z)), setTimeout(() => {
        const j = J.querySelector("#er-sf-canvas-math");
        j && us(j);
      }, 50), J.querySelectorAll(".er-deriv-header").forEach((j) => {
        j.addEventListener("click", () => {
          const be = j.dataset.toggle, T = J.querySelector(`#er-${be}`);
          T && (T.style.display = T.style.display === "none" ? "" : "none");
        });
      });
    }), J;
  }
  function Wl(e) {
    let h = "";
    if (h += '<div class="er-section-title">1. Propiedades</div>', h += '<table class="er-props">', h += `<tr><td>E</td><td>${Xe(e.E)}</td><td>A</td><td>${Xe(e.A)}</td></tr>`, h += `<tr><td>I<sub>z</sub></td><td>${Xe(e.Iz)}</td><td>I<sub>y</sub></td><td>${Xe(e.Iy)}</td></tr>`, h += `<tr><td>G</td><td>${Xe(e.G)}</td><td>J</td><td>${Xe(e.J)}</td></tr>`, h += "</table>", e.kLocal && (h += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, h += bn(e.kLocal)), e.T && (h += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', h += bn(e.T)), e.kGlobal && (h += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', h += bn(e.kGlobal)), h += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const R = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let M = 0; M < e.elem.length; M++) {
        h += `<div class="er-sub">Nodo ${e.elem[M]}: `;
        for (let X = 0; X < 6; X++) {
          const D = e.uGlobal[M * 6 + X];
          h += `${R[X]}=<span class="${Math.abs(D) > 1e-10 ? "nz" : ""}">${Xe(D, 6)}</span> `;
        }
        h += "</div>";
      }
    } else h += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (h += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((R) => R !== 0)) {
      const R = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th></th>';
      for (const M of R) h += `<th>${M}</th>`;
      h += "</tr>", h += "<tr><td>Nodo i</td>";
      for (let M = 0; M < 6; M++) h += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Xe(e.fLocal[M], 3)}</td>`;
      h += "</tr><tr><td>Nodo j</td>";
      for (let M = 6; M < 12; M++) h += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Xe(e.fLocal[M], 3)}</td>`;
      h += "</tr></table>";
    } else h += '<div class="er-sub">Sin an\xE1lisis</div>';
    return h;
  }
  function Sa(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let h = "";
    const R = (be) => Ea(be), M = (be) => Ea(be, true);
    h += '<div class="er-section-title">1. Geometria del elemento</div>', h += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", h += `<div class="er-eq">${M("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, h += '<div class="er-eq-num">', h += `${R("\\text{Nodo } i")} = (${e.elmNodes[0].map((be) => Xe(be)).join(", ")})<br/>`, h += `${R("\\text{Nodo } j")} = (${e.elmNodes[1].map((be) => Xe(be)).join(", ")})<br/>`, h += `${M(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Xe(e.L)}}`)}`, h += "</div>", h += '<div class="er-section-title">2. Funciones de forma</div>', h += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", h += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', h += `<div class="er-eq">${M("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, h += "<p>Primera derivada:</p>", h += `<div class="er-eq">${M("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, h += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', h += `<p>Las funciones de Hermite garantizan continuidad ${R("C^1")} (desplazamiento y pendiente continuos):</p>`, h += `<div class="er-eq">${M("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, h += `<div class="er-eq">${M("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, h += `<div class="er-eq">${M("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, h += `<div class="er-eq">${M("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, h += `<div class="er-subsec">Derivadas segunda (curvatura ${R("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, h += `<div class="er-eq">${M("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, h += `<div class="er-eq">${M("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, h += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', h += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', h += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", h += `<div class="er-eq">${M("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, h += '<div class="er-subsec">3.1 Deformacion axial</div>', h += `<div class="er-eq">${M("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, h += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${R("I_z")})</div>`, h += `<div class="er-eq">${M("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, h += `<div class="er-eq">${M("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, h += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${R("I_y")})</div>`, h += `<div class="er-eq">${M("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, h += '<div class="er-subsec">3.4 Torsion</div>', h += `<div class="er-eq">${M("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, h += '<div class="er-section-title">4. Relaciones constitutivas D</div>', h += "<p>Cada modo de deformacion tiene su rigidez material:</p>", h += `<div class="er-eq">${M(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Xe(e.E)} \\times ${Xe(e.A)} = \\mathbf{${Xe(e.E * e.A)}}`)}</div>`, h += `<div class="er-eq">${M(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Xe(e.E)} \\times ${Xe(e.Iz)} = \\mathbf{${Xe(e.E * e.Iz)}}`)}</div>`, h += `<div class="er-eq">${M(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Xe(e.E)} \\times ${Xe(e.Iy)} = \\mathbf{${Xe(e.E * e.Iy)}}`)}</div>`, h += `<div class="er-eq">${M(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Xe(e.G)} \\times ${Xe(e.J)} = \\mathbf{${Xe(e.G * e.J)}}`)}</div>`, h += `<div class="er-section-title">5. Integracion \u2192 ${R("\\mathbf{K}_{local}")}</div>`, h += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", h += `<div class="er-eq er-eq-main">${M("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const X = e.E * e.A / e.L, D = e.E * e.Iz / e.L ** 3, Z = e.E * e.Iy / e.L ** 3, J = e.G * e.J / e.L;
    if (h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', h += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', h += "<p><b>Paso 1:</b> Funcion de forma axial</p>", h += `<div class="er-eq">${M("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, h += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", h += `<div class="er-eq">${M("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, h += `<div class="er-eq">${M("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, h += `<p><b>Paso 3:</b> Integracion ${R("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, h += `<div class="er-eq">${M("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, h += `<div class="er-eq">${M("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, h += `<div class="er-eq er-eq-main">${M(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Xe(e.E)}\\times${Xe(e.A)}}{${Xe(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, h += `<div class="er-eq">${M(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Xe(X)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', h += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', h += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${R("v(\\xi)")}</p>`, h += `<div class="er-eq">${M("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, h += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", h += `<div class="er-eq">${M("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, h += `<div class="er-eq">${M("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, h += `<div class="er-eq">${M("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, h += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${R("v_i \\cdot v_i")})</p>`, h += `<div class="er-eq">${M("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, h += `<p>Expandimos: ${R("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, h += `<div class="er-eq">${M("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, h += `<div class="er-eq er-eq-main">${M(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Xe(e.E)} \\times ${Xe(e.Iz)}}{${Xe(e.L)}^3} = \\mathbf{${Xe(12 * D)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', h += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', h += `<p>Mismo proceso que axial pero con ${R("\\theta_x")} y ${R("GJ")}:</p>`, h += `<div class="er-eq">${M(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Xe(e.G)}\\times${Xe(e.J)}}{${Xe(e.L)}} = \\mathbf{${Xe(J)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', h += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', h += `<p>Termino cruzado ${R("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, h += `<div class="er-eq">${M("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, h += `<div class="er-eq">${M("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, h += `<div class="er-eq">${M("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, h += `<div class="er-eq er-eq-main">${M(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Xe(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, h += "</div></div>", h += '<div class="er-subsec">Resumen de coeficientes:</div>', h += `<div class="er-eq">${M(`\\frac{EA}{L} = \\mathbf{${Xe(X)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Xe(12 * D)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Xe(12 * Z)}}`)}</div>`, h += `<div class="er-eq">${M(`\\frac{GJ}{L} = \\mathbf{${Xe(J)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Xe(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Xe(4 * e.E * e.Iz / e.L)}}`)}</div>`, h += `<div class="er-eq">${M(`\\frac{6EI_z}{L^2} = \\mathbf{${Xe(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Xe(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (h += `<div class="er-subsec">Resultado: ${R("\\mathbf{K}_{local}")} (12x12)</div>`, h += bn(e.kLocal)), h += '<div class="er-section-title">6. Transformacion de coordenadas</div>', h += "<p>Los cosenos directores del eje del elemento:</p>", h += `<div class="er-eq">${M(`l = \\frac{x_j - x_i}{L} = ${An(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${An(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${An(e.n)}`)}</div>`, h += `<div class="er-eq">${M(`D = \\sqrt{l^2 + m^2} = ${An(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      h += `<p>Caso especial: elemento vertical (${R(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const be = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      h += `<div class="er-eq">${M(be)}</div>`;
    } else h += `<div class="er-eq">${M("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    h += `<div class="er-eq er-eq-main">${M("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, h += `<div class="er-section-title">7. ${R("\\mathbf{K}_{global}")} = ${R("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, h += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", h += `<div class="er-eq er-eq-main">${M("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (h += bn(e.kGlobal)), h += '<div class="er-section-title">8. Ensamblaje</div>';
    const H = e.elem[0] * 6, j = e.elem[1] * 6;
    if (h += `<div class="er-eq">${M(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${H} \\ldots ${H + 5}]`)}</div>`, h += `<div class="er-eq">${M(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${j} \\ldots ${j + 5}]`)}</div>`, h += `<div class="er-eq">${M("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, h += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', h += `<div class="er-eq">${M("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, h += `<div class="er-eq er-eq-main">${M("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((be) => be !== 0)) {
      const be = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th></th>';
      for (const T of be) h += `<th>${T}</th>`;
      h += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let T = 0; T < 6; T++) h += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${Xe(e.fLocal[T], 3)}</td>`;
      h += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let T = 6; T < 12; T++) h += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${Xe(e.fLocal[T], 3)}</td>`;
      h += "</tr></table>";
    }
    return h;
  }
  function Yl(e) {
    let h = "";
    if (h += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, h += '<table class="er-props">', h += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, h += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, h += `<tr><td>Longitud</td><td><b>${Xe(e.L)}</b></td></tr>`, h += `<tr><td>E</td><td>${Xe(e.E)}</td></tr>`, h += `<tr><td>A</td><td>${Xe(e.A)}</td></tr>`, h += "</table>", e.uGlobal.length > 0) {
      h += '<div class="er-section-title">Desplazamientos</div>';
      const R = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const M of R) h += `<th>${M}</th>`;
      h += "</tr>";
      for (let M = 0; M < e.elem.length; M++) {
        h += `<tr><td>${e.elem[M]}</td>`;
        for (let X = 0; X < 6; X++) {
          const D = e.uGlobal[M * 6 + X];
          h += `<td class="${Math.abs(D) > 1e-10 ? "nz" : ""}">${Xe(D, 6)}</td>`;
        }
        h += "</tr>";
      }
      h += "</table>";
    }
    if (e.fLocal.length > 0 && e.fLocal.some((R) => R !== 0)) {
      h += '<div class="er-section-title">Fuerzas internas</div>';
      const R = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th></th>';
      for (const M of R) h += `<th>${M}</th>`;
      h += "</tr><tr><td>Nodo i</td>";
      for (let M = 0; M < 6; M++) h += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Xe(e.fLocal[M], 3)}</td>`;
      h += "</tr><tr><td>Nodo j</td>";
      for (let M = 6; M < 12; M++) h += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Xe(e.fLocal[M], 3)}</td>`;
      h += "</tr></table>";
    }
    return h;
  }
  function Xe(e, h = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(h) : e.toFixed(h);
  }
  function An(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function bn(e) {
    var _a;
    const h = e.length, R = Math.min(h, 12);
    let M = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let X = 0; X < R; X++) {
      M += "<tr>";
      for (let D = 0; D < R; D++) {
        const Z = ((_a = e[X]) == null ? void 0 : _a[D]) ?? 0, J = Math.abs(Z) < 1e-10;
        M += `<td class="${J ? "z" : ""} ${X === D && !J ? "diag" : ""}">${J ? "0" : Gl(Z)}</td>`;
      }
      M += "</tr>";
    }
    return M += "</table>", h > R && (M += `<div style="color:var(--fem-label);font-size:9px">(${R}\xD7${R} de ${h}\xD7${h})</div>`), M += "</div>", M;
  }
  function Gl(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function us(e) {
    const h = e.getContext("2d");
    if (!h) return;
    const R = e.width, M = e.height, X = 30, D = R - 2 * X, Z = (M - 3 * X) / 2;
    h.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", h.fillRect(0, 0, R, M);
    const J = (H, j, be) => {
      h.strokeStyle = "#333", h.lineWidth = 1, h.strokeRect(X, H, D, Z), h.strokeStyle = "#444", h.beginPath(), h.moveTo(X, H + Z / 2), h.lineTo(X + D, H + Z / 2), h.stroke(), h.fillStyle = "#888", h.font = "11px sans-serif", h.fillText(j, X + 4, H + 14);
      for (const G of be) {
        h.strokeStyle = G.color, h.lineWidth = 2.5, h.beginPath();
        for (let $e = 0; $e <= 100; $e++) {
          const fe = $e / 100, re = X + fe * D, ne = H + Z / 2 - G.fn(fe) * (Z / 2 * 0.85);
          $e === 0 ? h.moveTo(re, ne) : h.lineTo(re, ne);
        }
        h.stroke();
      }
      let T = X + D - 90;
      for (const G of be) h.fillStyle = G.color, h.font = "bold 10px sans-serif", h.fillText(G.label, T, H + Z - 6), T += 36;
      h.fillStyle = "#666", h.font = "9px monospace", h.fillText("0", X, H + Z + 12), h.fillText("1", X + D - 6, H + Z + 12), h.fillText("\u03BE", X + D / 2, H + Z + 12);
    };
    J(X, "Axial (lineal)", [
      {
        fn: (H) => 1 - H,
        color: "#ff6600",
        label: "N\u2081"
      },
      {
        fn: (H) => H,
        color: "#00ccff",
        label: "N\u2082"
      }
    ]), J(X + Z + X, "Flexi\xF3n (Hermite c\xFAbicos)", [
      {
        fn: (H) => 1 - 3 * H * H + 2 * H * H * H,
        color: "#ff6600",
        label: "H\u2081"
      },
      {
        fn: (H) => H * (1 - H) * (1 - H),
        color: "#ffcc00",
        label: "H\u2082"
      },
      {
        fn: (H) => 3 * H * H - 2 * H * H * H,
        color: "#00ccff",
        label: "H\u2083"
      },
      {
        fn: (H) => H * H * (H - 1),
        color: "#00ff66",
        label: "H\u2084"
      }
    ]);
  }
  const Vl = `<style>
  .er-panel {
    position: fixed; right: 0; top: 0; width: 560px; height: 100vh;
    background: var(--fem-bg, #111); color: var(--fem-text, #ddd);
    overflow-y: auto; z-index: 9999990; padding: 12px 16px;
    box-sizing: border-box; border-left: 3px solid var(--fem-accent, #0f3460);
    font-family: 'Segoe UI', sans-serif; font-size: 12px; line-height: 1.5;
    box-shadow: -4px 0 20px rgba(0,0,0,0.5);
  }
  .er-header { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; flex-wrap: wrap; }
  .er-badge { background: var(--fem-section-title, #e94560); color: #fff; padding: 2px 10px; border-radius: 12px; font-weight: bold; font-size: 13px; }
  .er-type { color: var(--fem-label, #888); font-size: 12px; }
  .er-fullscreen { background: transparent; border: 1px solid var(--fem-border, #333); color: var(--fem-text, #ddd); padding: 2px 8px; border-radius: 4px; cursor: pointer; font-size: 16px; margin-left: auto; }
  .er-fullscreen:hover { background: var(--fem-btn-hover, #222); }
  .er-close { background: transparent; border: 1px solid var(--fem-border, #333); color: var(--fem-text, #ddd); padding: 2px 8px; border-radius: 4px; cursor: pointer; font-size: 14px; }
  .er-close:hover { background: var(--fem-btn-hover, #222); }

  /* Fullscreen mode */
  .er-panel.er-fullscreen-mode {
    width: 100vw !important; left: 0 !important; right: 0 !important;
    max-width: none !important; border-left: none !important;
    padding: 20px 40px !important;
  }
  .er-panel.er-fullscreen-mode .er-matrix td { min-width: 65px; font-size: 10px; }
  .er-panel.er-fullscreen-mode .er-eq { font-size: 14px; }
  .er-panel.er-fullscreen-mode .katex { font-size: 1.1em; }

  .er-tabs { display: flex; gap: 0; margin-bottom: 10px; border-bottom: 2px solid var(--fem-border, #333); }
  .er-tab { background: transparent; border: none; color: var(--fem-label, #888); padding: 6px 16px; cursor: pointer; font-size: 12px; font-weight: bold; border-bottom: 2px solid transparent; margin-bottom: -2px; }
  .er-tab.active { color: var(--fem-section-title, #e94560); border-bottom-color: var(--fem-section-title, #e94560); }
  .er-tab:hover { color: var(--fem-text, #ddd); }

  .er-body { padding: 4px 0; }
  .er-section-title { color: var(--fem-section-title, #e94560); font-weight: bold; font-size: 13px; margin: 14px 0 6px 0; border-bottom: 1px solid var(--fem-border, #333); padding-bottom: 3px; }
  .er-subsec { color: var(--fem-label, #aaa); font-weight: bold; font-size: 11px; margin: 10px 0 4px 0; }
  .er-sub { color: var(--fem-label, #888); font-size: 11px; margin: 2px 0; }
  .er-sub .nz { color: var(--fem-nonzero, #7bed9f); font-weight: bold; }

  .er-eq { background: var(--fem-section-bg, #1a1a2e); border-left: 3px solid var(--fem-accent, #0f3460); padding: 6px 12px; margin: 6px 0; font-family: serif; font-size: 13px; color: var(--fem-eq-var, #58a6ff); }
  .er-eq-main { border-left: 4px solid var(--fem-section-title, #e94560); font-weight: bold; font-size: 14px; }
  .er-eq-num { background: var(--fem-section-bg, #16213e); border-left: 2px solid var(--fem-border, #444); padding: 6px 12px; margin: 4px 0; font-family: monospace; font-size: 11px; color: var(--fem-text, #ccc); line-height: 180%; }
  .er-eq-table { border-collapse: collapse; margin: 4px 0; font-size: 12px; }
  .er-eq-table td { padding: 2px 10px; vertical-align: top; }
  .er-eq-table .fn-name { color: var(--fem-eq-var, #58a6ff); font-weight: bold; font-family: serif; }
  .er-eq-table .fn-desc { color: var(--fem-label, #888); font-style: italic; font-size: 10px; }

  .er-coeff { border-collapse: collapse; margin: 6px 0; font-family: monospace; font-size: 11px; }
  .er-coeff td { padding: 3px 8px; border-bottom: 1px solid var(--fem-border, #222); }
  .er-coeff b { color: var(--fem-nonzero, #7bed9f); }

  .er-props { border-collapse: collapse; margin: 4px 0; font-size: 12px; }
  .er-props td { padding: 2px 12px 2px 0; }
  .er-props td:nth-child(even) { color: var(--fem-eq-var, #58a6ff); font-weight: bold; }

  .er-forces { border-collapse: collapse; margin: 4px 0; font-family: monospace; font-size: 11px; }
  .er-forces th { background: var(--fem-header-bg, #1a1a2e); color: var(--fem-section-title, #e94560); padding: 3px 8px; border: 1px solid var(--fem-border, #333); text-align: center; font-size: 10px; }
  .er-forces td { padding: 3px 8px; border: 1px solid var(--fem-border, #333); text-align: right; }
  .er-forces .nz { color: var(--fem-nonzero, #7bed9f); font-weight: bold; }

  .er-matrix { border-collapse: collapse; font-family: monospace; font-size: 9px; margin: 4px 0; }
  .er-matrix td { padding: 2px 5px; text-align: right; border: 1px solid var(--fem-border-cell, #222); min-width: 50px; white-space: nowrap; }
  .er-matrix td.z { color: var(--fem-eq-dots, #444); }
  .er-matrix td.diag { background: var(--fem-diag-bg, #0a1a30); color: var(--fem-eq-var, #58a6ff); font-weight: bold; }

  .er-panel p { margin: 4px 0; color: var(--fem-text, #bbb); font-size: 11px; }

  /* Derivation blocks (expandible) */
  .er-deriv-block { margin: 6px 0; border: 1px solid var(--fem-border, #333); border-radius: 4px; overflow: hidden; }
  .er-deriv-header { padding: 6px 10px; cursor: pointer; color: var(--fem-eq-var, #58a6ff); font-size: 12px; background: var(--fem-section-bg, #161b22); }
  .er-deriv-header:hover { background: var(--fem-diag-bg, #0a2a4a); }
  .er-deriv-header i { color: var(--fem-label, #666); font-size: 10px; }
  .er-deriv-body { padding: 8px 12px; background: var(--fem-bg, #0d1117); border-top: 1px solid var(--fem-border, #333); }

  .er-panel::-webkit-scrollbar { width: 6px; }
  .er-panel::-webkit-scrollbar-track { background: var(--fem-bg, #111); }
  .er-panel::-webkit-scrollbar-thumb { background: var(--fem-accent, #0f3460); border-radius: 3px; }
</style>`, gn = [
    {
      selector: "#cad3d-panel",
      title: "FEM Studio",
      description: "Panel principal. Aqui controlas todo: ejemplos, vistas, herramientas de analisis.",
      position: "right"
    },
    {
      selector: '[data-ex="edificio"]',
      title: "Ejemplos Predefinidos",
      description: "Haz click en cualquier boton para cargar una estructura: Cercha, Portico, Torre, Edificio, etc.",
      position: "right"
    },
    {
      selector: '[data-view="3d"]',
      title: "Vistas",
      description: "Cambia entre vista 3D, Planta (Plan), Elevacion X (EX), Elevacion Y (EY).",
      position: "bottom"
    },
    {
      selector: "#cad3d-select",
      title: "Select (Seleccionar)",
      description: "Activa el modo seleccion. Haz click en elementos del modelo 3D para seleccionarlos. Ctrl+click para seleccion multiple.",
      position: "bottom"
    },
    {
      selector: "#cad3d-draw",
      title: "Draw (Dibujar)",
      description: "Dibuja nuevos elementos: lineas, arcos, nodos. Usa snap a grilla, nodos y puntos medios.",
      position: "bottom"
    },
    {
      selector: "#cad3d-inspect",
      title: "Inspect (Inspeccionar)",
      description: "Haz click en un elemento para ver su reporte FEM completo: 3 pestanas (Tabla, Matematica Explicada, Resumen) con funciones de forma, K local, transformacion T, fuerzas internas.",
      position: "bottom"
    },
    {
      selector: "#cad3d-export",
      title: "Export",
      description: "Exporta coordenadas, propiedades y resultados del modelo en formato texto/JSON.",
      position: "bottom"
    },
    {
      selector: '[data-preset="MKS"]',
      title: "Sistema de Unidades",
      description: "MKS (tonf, m), SI (kN, m), US (kip, in). Cambia las unidades de todo el modelo.",
      position: "bottom"
    },
    {
      selector: "#cad3d-modal",
      title: "Modal (Analisis Modal)",
      description: "Calcula frecuencias naturales, modos de vibracion y participacion de masa. Anima los modos con flechas de navegacion.",
      position: "bottom"
    },
    {
      selector: "#cad3d-fem-solver",
      title: "Report Explained",
      description: "Genera un reporte academico completo tipo libro de texto: funciones de forma, matrices B, D, K, transformacion, ensamblaje y solucion paso a paso.",
      position: "bottom"
    },
    {
      selector: "#cad3d-pushover",
      title: "Pushover",
      description: "Analisis pushover ciclico con histeresis. Visualiza curvas fuerza-desplazamiento.",
      position: "bottom"
    },
    {
      selector: "#cad3d-nonlinear",
      title: "Nonlinear",
      description: "Analisis no-lineal dinamico con material Steel02 (Menegotto-Pinto). Para BRBs y elementos con comportamiento histeretico.",
      position: "bottom"
    },
    {
      selector: "#cad3d-cmd",
      title: "Linea de Comandos",
      description: "Escribe comandos directamente: cad.galpon(12,20,6,3), cad.edificio(3,3,3,3), cad.help() para ver todos los comandos.",
      position: "top"
    },
    {
      selector: ".tp-dfwv",
      title: "Settings (Configuracion)",
      description: "Controla la visualizacion: nodos, elementos, secciones, resultados de analisis, forma deformada, colores de esfuerzos.",
      position: "left"
    }
  ];
  let Nn = false, Wo = null, ho = null, Gt = null, Nt = null;
  function Jl() {
    Nt = document.createElement("button"), Nt.id = "help-tour-btn", Nt.innerHTML = "?", Nt.title = "Ayuda interactiva \u2014 Tour guiado";
    let e = false;
    const h = (M) => {
      Nt.style.cssText = M ? "width:20px;height:20px;border-radius:50%;background:#555;color:#aaa;border:1px solid #777;font-size:10px;cursor:pointer;opacity:0.5;transition:all 0.2s;" : "width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:2px solid rgba(255,255,255,0.3);font-size:18px;font-weight:bold;cursor:pointer;box-shadow:0 2px 10px rgba(0,102,204,0.3);transition:all 0.2s;font-family:'Arial Nova',sans-serif;";
    };
    h(false), Nt.addEventListener("contextmenu", (M) => {
      M.preventDefault(), e = !e, h(e), Nt.innerHTML = "?";
    }), Nt.addEventListener("mouseenter", () => {
      Nt.style.transform = "scale(1.15)", Nt.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), Nt.addEventListener("mouseleave", () => {
      Nt.style.transform = "scale(1)", Nt.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), Nt.addEventListener("click", () => {
      Nn ? xs() : Xl();
    });
    const R = document.createElement("style");
    return R.textContent = `
    @keyframes helpPulse {
      0%, 100% { box-shadow: 0 4px 15px rgba(0,102,204,0.4); }
      50% { box-shadow: 0 4px 25px rgba(0,102,204,0.7), 0 0 0 8px rgba(0,102,204,0.1); }
    }
    @keyframes spotlightPulse {
      0%, 100% { box-shadow: 0 0 0 4px rgba(0,153,255,0.6), 0 0 0 9999px rgba(0,0,0,0.65); }
      50% { box-shadow: 0 0 0 8px rgba(0,153,255,0.3), 0 0 0 9999px rgba(0,0,0,0.65); }
    }
    @keyframes tooltipSlideIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes handPoint {
      0%, 100% { transform: translate(0, 0) rotate(-15deg); }
      50% { transform: translate(-5px, -8px) rotate(-15deg); }
    }
    .tour-hand {
      display: inline-block;
      font-size: 28px;
      animation: handPoint 1s ease-in-out infinite;
      margin-right: 6px;
    }
  `, document.head.appendChild(R), Nt;
  }
  function Xl() {
    Nn = true, Nt && (Nt.innerHTML = "\u2715", Nt.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", Nt.style.animation = "none"), Wo = document.createElement("div"), Wo.id = "tour-overlay", Wo.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(Wo), sn(0);
  }
  function xs() {
    Nn = false, Nt && (Nt.innerHTML = "?", Nt.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", Nt.style.animation = "helpPulse 2s infinite"), ho && (ho.remove(), ho = null), Gt && (Gt.remove(), Gt = null), Wo && (Wo.remove(), Wo = null);
  }
  function sn(e) {
    var _a, _b;
    if (e >= gn.length) {
      Ul();
      return;
    }
    const h = gn[e], R = document.querySelector(h.selector);
    if (!R) {
      sn(e + 1);
      return;
    }
    R.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), ho && ho.remove(), Gt && Gt.remove();
    const M = R.getBoundingClientRect(), X = window.innerWidth, D = window.innerHeight, Z = 320, J = 180;
    ho = document.createElement("div"), ho.style.cssText = `
    position: fixed;
    left: ${M.left - 6}px; top: ${M.top - 6}px;
    width: ${M.width + 12}px; height: ${M.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(ho);
    const H = X - M.right, j = M.left, be = D - M.bottom, T = M.top;
    let G = h.position || "bottom";
    G === "bottom" && be < J + 20 && (G = "top"), G === "top" && T < J + 20 && (G = "right"), G === "right" && H < Z + 20 && (G = "left"), G === "left" && j < Z + 20 && (G = "bottom");
    let $e, fe, re = "";
    switch (G) {
      case "bottom":
        $e = M.left + M.width / 2 - Z / 2, fe = M.bottom + 14, re = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        $e = M.left + M.width / 2 - Z / 2, fe = M.top - J - 14, re = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        $e = M.right + 14, fe = M.top + M.height / 2 - J / 2, re = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        $e = M.left - Z - 14, fe = M.top + M.height / 2 - J / 2, re = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    $e = Math.max(10, Math.min($e, X - Z - 10)), fe = Math.max(10, Math.min(fe, D - J - 10)), Gt = document.createElement("div"), Gt.style.cssText = `
    position: fixed;
    left: ${$e}px; top: ${fe}px;
    width: ${Z}px;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    color: #e0e0e0;
    border: 2px solid #0099ff;
    border-radius: 12px;
    padding: 16px 18px;
    z-index: 9999992;
    pointer-events: auto;
    animation: tooltipSlideIn 0.3s ease-out;
    box-shadow: 0 8px 30px rgba(0,0,0,0.5);
    font-family: 'Segoe UI', sans-serif;
  `, Gt.innerHTML = `
    <div style="${re}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${h.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${gn.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${h.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < gn.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${gn.map((_, B) => `<div style="width:${B === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${B === e ? "#0099ff" : B < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Gt), (_a = Gt.querySelector("#tour-next")) == null ? void 0 : _a.addEventListener("click", () => {
      sn(e + 1);
    }), (_b = Gt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      sn(e - 1);
    });
    const ne = (_) => {
      if (!Nn) {
        document.removeEventListener("keydown", ne);
        return;
      }
      (_.key === "ArrowRight" || _.key === "Enter") && (sn(e + 1), document.removeEventListener("keydown", ne)), _.key === "ArrowLeft" && (sn(Math.max(0, e - 1)), document.removeEventListener("keydown", ne)), _.key === "Escape" && (xs(), document.removeEventListener("keydown", ne));
    };
    document.addEventListener("keydown", ne);
  }
  function Ul() {
    var _a;
    ho && (ho.remove(), ho = null), Gt && (Gt.remove(), Gt = null), Gt = document.createElement("div"), Gt.style.cssText = `
    position: fixed;
    left: 50%; top: 50%; transform: translate(-50%, -50%);
    width: 400px;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    color: #e0e0e0;
    border: 2px solid #00cc66;
    border-radius: 16px;
    padding: 30px;
    z-index: 9999992;
    pointer-events: auto;
    animation: tooltipSlideIn 0.3s ease-out;
    box-shadow: 0 8px 40px rgba(0,0,0,0.6);
    font-family: 'Segoe UI', sans-serif;
    text-align: center;
  `, Gt.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(Gt), (_a = Gt.querySelector("#tour-done")) == null ? void 0 : _a.addEventListener("click", () => xs());
  }
  function Kl(e) {
    var _a;
    const h = e.split(/\r?\n/), R = {
      force: "TONF",
      length: "M"
    }, M = [], X = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), J = [], H = [], j = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), T = [], G = [];
    let $e = "", fe = "";
    const re = /* @__PURE__ */ new Map();
    for (const Fe of h) {
      const Be = Fe.trim();
      if (!Be || Be.startsWith("$")) {
        Be.startsWith("$ ") && (fe = Be.substring(2).trim());
        continue;
      }
      if (fe && (re.has(fe) || re.set(fe, []), re.get(fe).push(Fe)), fe === "CONTROLS") {
        const xe = Be.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        xe && (R.force = xe[1], R.length = xe[2]);
        const Pe = Be.match(/TITLE2\s+"([^"]+)"/);
        Pe && ($e = Pe[1]);
      }
      if (fe === "STORIES - IN SEQUENCE FROM TOP") {
        const xe = Be.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (xe) {
          const Pe = xe[1], ve = xe[2] ? parseFloat(xe[2]) : 0, ze = xe[3] ? parseFloat(xe[3]) : void 0;
          M.push({
            name: Pe,
            height: ve,
            elev: ze ?? 0
          });
        }
      }
      if (fe === "MATERIAL PROPERTIES") {
        const xe = Be.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (xe) {
          const Pe = xe[1];
          X.has(Pe) || X.set(Pe, {
            type: xe[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const ve = X.get(Pe);
          xe[2] && (ve.type = xe[2]);
          const ze = Be.match(/\bE\s+([\d.eE+-]+)/);
          ze && (ve.E = parseFloat(ze[1]));
          const Je = Be.match(/\bU\s+([\d.eE+-]+)/);
          Je && (ve.nu = parseFloat(Je[1]), ve.G = ve.E / (2 * (1 + ve.nu)));
          const He = Be.match(/\bFY\s+([\d.eE+-]+)/);
          He && (ve.fy = parseFloat(He[1]));
          const ft = Be.match(/\bFC\s+([\d.eE+-]+)/);
          ft && (ve.fc = parseFloat(ft[1]));
          const bt = Be.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          bt && (ve.density = parseFloat(bt[1]));
        }
      }
      if (fe === "FRAME SECTIONS") {
        const xe = Be.match(/FRAMESECTION\s+"([^"]+)"/);
        if (xe) {
          const Pe = xe[1];
          D.has(Pe) || D.set(Pe, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const ve = D.get(Pe), ze = Be.match(/MATERIAL\s+"([^"]+)"/);
          ze && (ve.material = ze[1]);
          const Je = Be.match(/SHAPE\s+"([^"]+)"/);
          Je && (ve.shape = Je[1]);
          const He = Be.match(/\bD\s+([\d.eE+-]+)/);
          He && (ve.D = parseFloat(He[1]));
          const ft = Be.match(/\bB\s+([\d.eE+-]+)/);
          ft && (ve.B = parseFloat(ft[1]));
          const bt = Be.match(/\bTF\s+([\d.eE+-]+)/);
          bt && (ve.TF = parseFloat(bt[1]));
          const Ve = Be.match(/\bTW\s+([\d.eE+-]+)/);
          Ve && (ve.TW = parseFloat(Ve[1]));
          const Qe = Be.match(/\bR\s+([\d.eE+-]+)/);
          Qe && (ve.R = parseFloat(Qe[1]));
          const mt = Be.match(/FILLMATERIAL\s+"([^"]+)"/);
          mt && (ve.fillMaterial = mt[1]);
          const pt = Be.match(/I2MOD\s+([\d.eE+-]+)/);
          pt && (ve.modI2 = parseFloat(pt[1]));
          const xt = Be.match(/I3MOD\s+([\d.eE+-]+)/);
          xt && (ve.modI3 = parseFloat(xt[1]));
        }
      }
      if (fe === "POINT COORDINATES") {
        const xe = Be.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        xe && Z.set(xe[1], [
          parseFloat(xe[2]),
          parseFloat(xe[3])
        ]);
      }
      if (fe === "LINE CONNECTIVITIES") {
        const xe = Be.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        xe && J.push({
          name: xe[1],
          type: xe[2],
          pt1: xe[3],
          pt2: xe[4],
          nStories: parseInt(xe[5])
        });
      }
      if (fe === "POINT ASSIGNS") {
        const xe = Be.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        xe && j.set(`${xe[1]}@${xe[2]}`, xe[3].split(/\s+/));
      }
      if (fe === "LINE ASSIGNS") {
        const xe = Be.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (xe) {
          const Pe = {
            story: xe[2],
            section: xe[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, ve = Be.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          ve && (Pe.rigidZone = parseFloat(ve[1]));
          const ze = Be.match(/RELEASE\s+"([^"]+)"/);
          ze && (Pe.releases = ze[1].split(/\s+/));
          const Je = Be.match(/ANG\s+([-\d.eE+]+)/);
          Je && (Pe.angle = parseFloat(Je[1])), be.set(`${xe[1]}@${xe[2]}`, Pe);
        }
      }
      if (fe === "GRIDS") {
        const xe = Be.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        xe && G.push({
          label: xe[1],
          dir: xe[2],
          coord: parseFloat(xe[3])
        });
      }
      if (fe === "FRAME OBJECT LOADS") {
        const xe = Be.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        xe && T.push({
          line: xe[1],
          story: xe[2],
          type: xe[3],
          dir: xe[4],
          lc: xe[5],
          val: parseFloat(xe[6])
        });
      }
      if (fe === "AREA CONNECTIVITIES") {
        const xe = Be.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (xe) {
          const Pe = ((_a = xe[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((ve) => ve.replace(/"/g, ""))) || [];
          H.push({
            name: xe[1],
            pts: Pe,
            nStories: 0
          });
        }
      }
    }
    const ne = /* @__PURE__ */ new Map();
    if (M.length > 0) {
      const Fe = M.length - 1;
      ne.set(M[Fe].name, M[Fe].elev);
      for (let Be = Fe - 1; Be >= 0; Be--) {
        const Pe = ne.get(M[Be + 1].name) + M[Be].height;
        M[Be].elev = Pe, ne.set(M[Be].name, Pe);
      }
    }
    const _ = [], B = [], Y = /* @__PURE__ */ new Map(), ue = (Fe, Be) => `${Fe}@${Be}`, Me = /* @__PURE__ */ new Set(), Le = /* @__PURE__ */ new Map();
    for (const Fe of J) Le.set(Fe.name, Fe);
    for (const Fe of J) for (const [Be, xe] of be) {
      if (!Be.startsWith(Fe.name + "@")) continue;
      const Pe = xe.story, ve = M.findIndex((ze) => ze.name === Pe);
      if (!(ve < 0)) if (Fe.type === "COLUMN" || Fe.type === "BRACE") {
        Me.add(ue(Fe.pt2, Pe));
        const ze = Math.max(Fe.nStories, 1), Je = Math.min(ve + ze, M.length - 1);
        Me.add(ue(Fe.pt1, M[Je].name));
      } else Me.add(ue(Fe.pt1, Pe)), Me.add(ue(Fe.pt2, Pe));
    }
    for (const [Fe] of j) Me.add(Fe);
    for (const Fe of Me) {
      const [Be, xe] = Fe.split("@"), Pe = Z.get(Be), ve = ne.get(xe);
      Pe === void 0 || ve === void 0 || (_.push([
        Pe[0],
        Pe[1],
        ve
      ]), B.push(Fe), Y.set(Fe, _.length - 1));
    }
    const Ke = [], ye = [], Ye = [], Ge = [], he = /* @__PURE__ */ new Map();
    for (const Fe of J) for (const [Be, xe] of be) {
      if (!Be.startsWith(Fe.name + "@")) continue;
      const Pe = xe.story, ve = M.findIndex((Ve) => Ve.name === Pe);
      if (ve < 0) continue;
      let ze, Je;
      if (Fe.type === "COLUMN" || Fe.type === "BRACE") {
        const Ve = Math.max(Fe.nStories, 1), Qe = Math.min(ve + Ve, M.length - 1);
        ze = ue(Fe.pt1, M[Qe].name), Je = ue(Fe.pt2, Pe);
      } else ze = ue(Fe.pt1, Pe), Je = ue(Fe.pt2, Pe);
      const He = Y.get(ze), ft = Y.get(Je);
      if (He === void 0 || ft === void 0 || He === ft) continue;
      const bt = Ke.length;
      if (Ke.push([
        He,
        ft
      ]), ye.push(Fe.name), Ye.push(Fe.type), Ge.push(Pe), he.set(bt, xe.section), xe.rigidZone > 0 && dt.set(bt, [
        xe.rigidZone,
        xe.rigidZone
      ]), xe.releases.length > 0) {
        const Ve = new Array(12).fill(false), Qe = {
          PI: 0,
          V2I: 1,
          V3I: 2,
          TI: 3,
          M2I: 4,
          M3I: 5,
          PJ: 6,
          V2J: 7,
          V3J: 8,
          TJ: 9,
          M2J: 10,
          M3J: 11
        };
        for (const mt of xe.releases) {
          const pt = Qe[mt];
          pt !== void 0 && (Ve[pt] = true);
        }
        ut.set(bt, Ve);
      }
    }
    const Te = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), Ze = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new Map(), Dt = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map();
    for (const [Fe, Be] of he) {
      const xe = D.get(Be);
      if (!xe) continue;
      const Pe = X.get(xe.material);
      Pe && (Te.set(Fe, Pe.E), Ce.set(Fe, Pe.G));
      const ve = xe.D, ze = xe.B, Je = xe.TF, He = xe.TW;
      let ft = 0, bt = 0, Ve = 0, Qe = 0, mt = 0, pt = 0, xt = "rect";
      switch (xe.shape) {
        case "Concrete Rectangular":
          ft = ve * ze, bt = ze * ve ** 3 / 12, Ve = ve * ze ** 3 / 12, Qe = ze * ve ** 3 * (1 / 3 - 0.21 * (ve / ze) * (1 - ve ** 4 / (12 * ze ** 4))), mt = pt = 5 / 6 * ft, xt = "rect";
          break;
        case "Concrete Circle":
          ft = Math.PI * ve ** 2 / 4, bt = Ve = Math.PI * ve ** 4 / 64, Qe = Math.PI * ve ** 4 / 32, mt = pt = 0.9 * ft, xt = "circ";
          break;
        case "Steel I/Wide Flange":
          ft = 2 * ze * Je + (ve - 2 * Je) * He, bt = (ze * ve ** 3 - (ze - He) * (ve - 2 * Je) ** 3) / 12, Ve = (2 * Je * ze ** 3 + (ve - 2 * Je) * He ** 3) / 12, Qe = (2 * ze * Je ** 3 + (ve - 2 * Je) * He ** 3) / 3, mt = (ve - 2 * Je) * He, pt = 2 * ze * Je * 5 / 6, xt = "I";
          break;
        case "Steel Tube":
          ft = ve * ze - (ve - 2 * He) * (ze - 2 * He), bt = (ze * ve ** 3 - (ze - 2 * He) * (ve - 2 * He) ** 3) / 12, Ve = (ve * ze ** 3 - (ve - 2 * He) * (ze - 2 * He) ** 3) / 12, Qe = 2 * He * (ve - He) * (ze - He) * ((ve - He) * (ze - He)) / (ve - He + (ze - He)), mt = 2 * ve * He, pt = 2 * ze * He, xt = "HSS";
          break;
        case "Filled Steel Tube":
          ft = ve * ze, bt = ze * ve ** 3 / 12, Ve = ve * ze ** 3 / 12, Qe = 2 * He * (ve - He) * (ze - He) * ((ve - He) * (ze - He)) / (ve - He + (ze - He)), mt = 2 * ve * He + 5 / 6 * (ve - 2 * He) * (ze - 2 * He), pt = 2 * ze * He + 5 / 6 * (ve - 2 * He) * (ze - 2 * He), xt = "CFT";
          break;
        case "Steel Angle": {
          const Vt = Je || He;
          ft = Vt * (ve + ze - Vt), bt = Vt * (ve ** 3 + ze * Vt ** 2 + Vt ** 2 * (ve - Vt)) / 12, Ve = Vt * (ze ** 3 + ve * Vt ** 2 + Vt ** 2 * (ze - Vt)) / 12, Qe = (ve + ze - Vt) * Vt ** 3 / 3, mt = ve * Vt, pt = ze * Vt, xt = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          ft = 2 * ze * Je + (ve - 2 * Je) * He, bt = (He * ve ** 3 + 2 * ze * Je * (ve - Je) ** 2) / 12, Ve = (2 * Je * ze ** 3 + (ve - 2 * Je) * He ** 3) / 12, Qe = (2 * ze * Je ** 3 + (ve - 2 * Je) * He ** 3) / 3, mt = (ve - 2 * Je) * He, pt = 2 * ze * Je * 5 / 6, xt = xe.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          ft = 2 * (2 * ze * Je + (ve - 2 * Je) * He), bt = 2 * (He * ve ** 3 + 2 * ze * Je * (ve - Je) ** 2) / 12, Ve = 2 * (2 * Je * ze ** 3 + (ve - 2 * Je) * He ** 3) / 12, Qe = 2 * (2 * ze * Je ** 3 + (ve - 2 * Je) * He ** 3) / 3, mt = 2 * (ve - 2 * Je) * He, pt = 4 * ze * Je * 5 / 6, xt = "2C";
          break;
        default:
          ve > 0 && ze > 0 && (ft = ve * ze, bt = ze * ve ** 3 / 12, Ve = ve * ze ** 3 / 12, Qe = Math.min(ve, ze) * Math.max(ve, ze) ** 3 / 3 * 0.3, mt = pt = 5 / 6 * ft);
          break;
      }
      xe.modI2 && (Ve *= xe.modI2), xe.modI3 && (bt *= xe.modI3), Ue.set(Fe, ft), Tt.set(Fe, bt), Ot.set(Fe, Ve), Dt.set(Fe, Qe), mt > 0 && ct.set(Fe, mt), pt > 0 && Ze.set(Fe, pt), Mt.set(Fe, {
        type: xt,
        b: ze || void 0,
        h: ve || void 0,
        d: xt === "circ" || xt === "pipe" ? ve : void 0,
        tw: He || void 0,
        tf: Je || void 0,
        r: xe.R,
        name: Be
      });
    }
    const ht = /* @__PURE__ */ new Map();
    for (const [Fe, Be] of j) {
      const xe = Y.get(Fe);
      if (xe === void 0) continue;
      const Pe = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const ve of Be) ve === "UX" && (Pe[0] = true), ve === "UY" && (Pe[1] = true), ve === "UZ" && (Pe[2] = true), ve === "RX" && (Pe[3] = true), ve === "RY" && (Pe[4] = true), ve === "RZ" && (Pe[5] = true);
      ht.set(xe, Pe);
    }
    const bo = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map();
    for (let Fe = 0; Fe < ye.length; Fe++) _e.set(`${ye[Fe]}@${Ge[Fe]}`, Fe);
    for (const Fe of T) {
      const Be = _e.get(`${Fe.line}@${Fe.story}`);
      if (Be === void 0) continue;
      const [xe, Pe] = Ke[Be], ve = _[xe], ze = _[Pe], Je = Math.sqrt((ze[0] - ve[0]) ** 2 + (ze[1] - ve[1]) ** 2 + (ze[2] - ve[2]) ** 2);
      if (Je < 1e-10) continue;
      const He = Fe.val * Je / 2;
      let ft = 0, bt = 0, Ve = 0;
      Fe.dir === "GRAV" || Fe.dir === "GRAVITY" ? Ve = -He : Fe.dir === "X" ? ft = He : Fe.dir === "Y" ? bt = He : Fe.dir === "Z" && (Ve = -He);
      for (const Qe of [
        xe,
        Pe
      ]) {
        const mt = bo.get(Qe) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        mt[0] += ft, mt[1] += bt, mt[2] += Ve, bo.set(Qe, mt);
      }
    }
    const St = /* @__PURE__ */ new Map();
    for (const [Fe, Be] of he) {
      const xe = D.get(Be);
      if (!xe) continue;
      const Pe = X.get(xe.material);
      (Pe == null ? void 0 : Pe.density) && St.set(Fe, Pe.density);
    }
    return {
      units: R,
      stories: M.reverse(),
      materials: X,
      frameSections: D,
      nodes: _,
      nodeNames: B,
      nodeNameToIdx: Y,
      elements: Ke,
      elementNames: ye,
      elementTypes: Ye,
      elementStories: Ge,
      elementSections: he,
      nodeInputs: {
        supports: ht,
        loads: bo
      },
      elementInputs: {
        elasticities: Te,
        shearModuli: Ce,
        areas: Ue,
        momentsOfInertiaZ: Tt,
        momentsOfInertiaY: Ot,
        torsionalConstants: Dt,
        shearAreasY: ct,
        shearAreasZ: Ze,
        rigidOffsets: dt,
        momentReleases: ut,
        densities: St,
        sectionShapes: Mt
      },
      sectionShapes: Mt,
      grids: G,
      info: {
        nNodes: _.length,
        nFrames: Ke.length,
        nAreas: H.length,
        title: $e
      },
      rawSections: re
    };
  }
  function it(e) {
    return e && parseFloat(e) || 0;
  }
  function La(e) {
    const h = /* @__PURE__ */ new Map(), R = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
    let M;
    for (; (M = R.exec(e)) !== null; ) h.set(M[1], M[2] !== void 0 ? M[2] : M[3]);
    return h;
  }
  function Zl(e) {
    const h = e.split(/\r?\n/);
    return h.some((M) => M.trim().startsWith("TABLE:")) ? Ql(h) : ei(h);
  }
  function Ql(e) {
    var _a, _b, _c, _d, _e, _f;
    const h = [];
    let R = "";
    for (const ne of e) {
      const _ = ne.trimEnd();
      _.endsWith("_") ? R += _.slice(0, -1) + " " : (R += _, h.push(R), R = "");
    }
    R && h.push(R);
    const M = {
      force: "KN",
      length: "m"
    };
    let X = "UX,UY,UZ,RX,RY,RZ";
    const D = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), j = [], be = [], T = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map(), fe = [];
    let re = "";
    for (const ne of h) {
      const _ = ne.trim();
      if (!_ || _.startsWith(";") || _.startsWith("File ")) continue;
      if (_.startsWith("TABLE:")) {
        const Y = _.match(/TABLE:\s+"(.+?)"/);
        re = Y ? Y[1].toUpperCase() : "";
        continue;
      }
      if (_ === "END TABLE DATA") {
        re = "";
        continue;
      }
      const B = La(_);
      switch (re) {
        case "PROGRAM CONTROL": {
          const Y = B.get("CurrUnits");
          if (Y) {
            const ue = Y.split(",").map((Me) => Me.trim());
            ue[0] && (M.force = ue[0]), ue[1] && (M.length = ue[1]);
          }
          break;
        }
        case "MATERIAL PROPERTIES 01 - GENERAL": {
          const Y = B.get("Material");
          Y && !D.has(Y) && D.set(Y, {
            E: 0,
            nu: 0,
            G: 0
          });
          break;
        }
        case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
          const Y = B.get("Material");
          if (Y) {
            const ue = D.get(Y) || {
              E: 0,
              nu: 0,
              G: 0
            };
            ue.E = it(B.get("E1")), ue.G = it(B.get("G12")), ue.nu = it(B.get("U12")), ue.density = it(B.get("UnitMass")), D.set(Y, ue);
          }
          break;
        }
        case "MATERIAL PROPERTIES 03A - STEEL DATA": {
          const Y = B.get("Material");
          Y && D.has(Y) && (D.get(Y).fy = it(B.get("Fy")));
          break;
        }
        case "FRAME SECTION PROPERTIES 01 - GENERAL": {
          const Y = B.get("SectionName");
          Y && Z.set(Y, {
            material: B.get("Material") || "",
            shape: B.get("Shape") || "Rectangular",
            D: it(B.get("t3")),
            B: it(B.get("t2")),
            TF: it(B.get("tf")),
            TW: it(B.get("tw")),
            A: it(B.get("Area")),
            Iz: it(B.get("I33")),
            Iy: it(B.get("I22")),
            J: it(B.get("TorsConst"))
          });
          break;
        }
        case "AREA SECTION PROPERTIES": {
          const Y = B.get("Section");
          Y && J.set(Y, {
            material: B.get("Material") || "",
            type: B.get("Type") || "Shell",
            thickness: it(B.get("Thickness"))
          });
          break;
        }
        case "JOINT COORDINATES": {
          const Y = B.get("Joint");
          if (Y) {
            const ue = it(B.get("XorR")), Me = it(B.get("Y")), Le = it(B.get("Z"));
            H.set(Y, [
              ue,
              Me,
              Le
            ]);
          }
          break;
        }
        case "CONNECTIVITY - FRAME": {
          const Y = B.get("Frame"), ue = B.get("JointI"), Me = B.get("JointJ");
          Y && ue && Me && j.push({
            name: Y,
            j1: ue,
            j2: Me
          });
          break;
        }
        case "CONNECTIVITY - AREA": {
          const Y = B.get("Area");
          if (Y) {
            const ue = parseInt(B.get("NumJoints") || "4"), Me = [];
            for (let Le = 1; Le <= ue; Le++) {
              const Ke = B.get(`Joint${Le}`);
              Ke && Me.push(Ke);
            }
            Me.length >= 3 && be.push({
              name: Y,
              joints: Me
            });
          }
          break;
        }
        case "JOINT RESTRAINT ASSIGNMENTS": {
          const Y = B.get("Joint");
          if (Y) {
            const ue = [
              ((_a = B.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes",
              ((_b = B.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes",
              ((_c = B.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes",
              ((_d = B.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes",
              ((_e = B.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes",
              ((_f = B.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"
            ];
            T.set(Y, ue);
          }
          break;
        }
        case "FRAME SECTION ASSIGNMENTS": {
          const Y = B.get("Frame"), ue = B.get("AnalSect");
          Y && ue && G.set(Y, ue);
          break;
        }
        case "AREA SECTION ASSIGNMENTS": {
          const Y = B.get("Area"), ue = B.get("Section");
          Y && ue && $e.set(Y, ue);
          break;
        }
        case "JOINT LOADS - FORCE": {
          const Y = B.get("Joint");
          Y && fe.push({
            joint: Y,
            fx: it(B.get("F1")),
            fy: it(B.get("F2")),
            fz: it(B.get("F3")),
            mx: it(B.get("M1")),
            my: it(B.get("M2")),
            mz: it(B.get("M3"))
          });
          break;
        }
      }
    }
    return Aa(M, X, D, Z, J, H, j, be, T, G, $e, fe);
  }
  function ei(e) {
    const h = {
      force: "KN",
      length: "m"
    };
    let R = "UX,UY,UZ,RX,RY,RZ";
    const M = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), J = [], H = [], j = /* @__PURE__ */ new Map(), be = [];
    let T = "", G = "";
    for (const re of e) {
      const ne = re.trim();
      if (!ne || ne.startsWith(";")) continue;
      if (!re.startsWith(" ") && !re.startsWith("	")) {
        const Y = ne.toUpperCase();
        if (Y === "END") break;
        Y.startsWith("SHELL SECTION") ? T = "SHELL SECTION" : Y.startsWith("FRAME SECTION") ? T = "FRAME SECTION" : T = Y.split(/\s+/)[0];
        continue;
      }
      const _ = La(ne), B = ne.split(/\s+/);
      switch (T) {
        case "SYSTEM": {
          const Y = _.get("DOF");
          Y && (R = Y);
          const ue = _.get("LENGTH");
          ue && (h.length = ue);
          const Me = _.get("FORCE");
          Me && (h.force = Me);
          break;
        }
        case "JOINT": {
          const Y = B[0];
          Z.set(Y, [
            it(_.get("X")),
            it(_.get("Y")),
            it(_.get("Z"))
          ]);
          break;
        }
        case "RESTRAINT": {
          const Y = _.get("ADD"), ue = _.get("DOF");
          if (Y && ue) {
            const Me = ue.split(","), Le = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            for (const Ke of Me) {
              const ye = Ke.toUpperCase();
              (ye === "UX" || ye === "U1") && (Le[0] = true), (ye === "UY" || ye === "U2") && (Le[1] = true), (ye === "UZ" || ye === "U3") && (Le[2] = true), (ye === "RX" || ye === "R1") && (Le[3] = true), (ye === "RY" || ye === "R2") && (Le[4] = true), (ye === "RZ" || ye === "R3") && (Le[5] = true);
            }
            j.set(Y, Le);
          }
          break;
        }
        case "MATERIAL": {
          const Y = _.get("NAME");
          if (Y) G = Y, M.set(Y, {
            E: 0,
            nu: 0,
            G: 0
          });
          else if (G) {
            const ue = M.get(G), Me = _.get("E");
            Me && (ue.E = it(Me));
            const Le = _.get("U");
            Le && (ue.nu = it(Le)), ue.G = ue.E / (2 * (1 + ue.nu));
            const Ke = _.get("M");
            Ke && (ue.density = it(Ke));
          }
          break;
        }
        case "SHELL": {
          const Y = B[0], ue = _.get("J");
          _.get("SEC"), ue && H.push({
            name: Y,
            joints: ue.split(",")
          });
          break;
        }
        case "SHELL SECTION": {
          const Y = _.get("NAME");
          Y && D.set(Y, {
            material: _.get("MAT") || "",
            type: _.get("TYPE") || "Shell",
            thickness: it(_.get("TH"))
          });
          break;
        }
        case "FRAME": {
          const Y = B[0], ue = _.get("J");
          if (ue) {
            const Me = ue.split(",");
            Me.length >= 2 && J.push({
              name: Y,
              j1: Me[0],
              j2: Me[1]
            });
          }
          break;
        }
        case "LOAD": {
          const Y = _.get("ADD");
          Y && be.push({
            joint: Y,
            fx: it(_.get("UX")),
            fy: it(_.get("UY")),
            fz: it(_.get("UZ")),
            mx: it(_.get("MX")),
            my: it(_.get("MY")),
            mz: it(_.get("MZ"))
          });
          break;
        }
      }
    }
    return Aa(h, R, M, X, D, Z, J, H, j, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), be);
  }
  function Aa(e, h, R, M, X, D, Z, J, H, j, be, T) {
    var _a;
    const G = [], $e = /* @__PURE__ */ new Map(), fe = [];
    for (const [ye, Ye] of D) $e.set(ye, fe.length), G.push(ye), fe.push(Ye);
    const re = [], ne = [], _ = /* @__PURE__ */ new Map();
    for (const ye of Z) {
      const Ye = $e.get(ye.j1), Ge = $e.get(ye.j2);
      if (Ye !== void 0 && Ge !== void 0) {
        const he = re.length;
        re.push([
          Ye,
          Ge
        ]), ne.push(ye.name);
        const Te = j.get(ye.name);
        Te && _.set(he, Te);
      }
    }
    const B = re.length;
    for (const ye of J) {
      const Ye = ye.joints.map((Ge) => $e.get(Ge)).filter((Ge) => Ge !== void 0);
      if (Ye.length >= 3) {
        const Ge = re.length;
        re.push(Ye), ne.push(ye.name);
        const he = be.get(ye.name);
        he && _.set(Ge, he);
      }
    }
    const Y = re.length - B, ue = {
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map(),
      thicknesses: /* @__PURE__ */ new Map(),
      poissonsRatios: /* @__PURE__ */ new Map()
    }, Me = /* @__PURE__ */ new Map(), Le = R.values().next().value || {
      E: 29e3,
      nu: 0.3,
      G: 11153
    };
    for (let ye = 0; ye < re.length; ye++) {
      const Ye = _.get(ye), Ge = Ye ? M.get(Ye) : null, he = Ye ? X.get(Ye) : null;
      if (Ge || re[ye].length === 2) {
        const Te = Ge || {
          material: "",
          A: 0,
          Iz: 0,
          Iy: 0,
          J: 0,
          D: 0.3,
          B: 0.3,
          shape: "Rectangular"
        }, Ce = R.get(Te.material) || Le, Ue = Ce.E || Le.E, ct = Ce.nu || 0.3, Ze = Ce.G || Ue / (2 * (1 + ct));
        ue.elasticities.set(ye, Ue), ue.shearModuli.set(ye, Ze), ue.areas.set(ye, Te.A || Te.D * Te.B), ue.momentsOfInertiaZ.set(ye, Te.Iz || Te.B * Te.D ** 3 / 12), ue.momentsOfInertiaY.set(ye, Te.Iy || Te.D * Te.B ** 3 / 12), ue.torsionalConstants.set(ye, Te.J || 0), ue.densities.set(ye, Ce.density || 0), ((_a = Te.shape) == null ? void 0 : _a.includes("Wide Flange")) || Te.shape === "I" ? Me.set(ye, {
          type: "I",
          b: Te.B,
          h: Te.D,
          name: Ye || "I-section"
        }) : Me.set(ye, {
          type: "rect",
          b: Te.B,
          h: Te.D
        });
      } else if (he) {
        const Te = R.get(he.material) || Le, Ce = Te.E || Le.E, Ue = Te.nu || 0.2, ct = Te.G || Ce / (2 * (1 + Ue));
        ue.elasticities.set(ye, Ce), ue.shearModuli.set(ye, ct), ue.thicknesses.set(ye, he.thickness), ue.poissonsRatios.set(ye, Ue), ue.densities.set(ye, Te.density || 0);
      }
    }
    const Ke = {
      supports: /* @__PURE__ */ new Map(),
      forces: /* @__PURE__ */ new Map()
    };
    for (const [ye, Ye] of H) {
      const Ge = $e.get(ye);
      Ge !== void 0 && Ke.supports.set(Ge, Ye);
    }
    for (const ye of T) {
      const Ye = $e.get(ye.joint);
      if (Ye !== void 0) {
        const Ge = Ke.forces.get(Ye) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        Ge[0] += ye.fx, Ge[1] += ye.fy, Ge[2] += ye.fz, Ge[3] += ye.mx, Ge[4] += ye.my, Ge[5] += ye.mz, Ke.forces.set(Ye, Ge);
      }
    }
    return {
      units: e,
      dof: h,
      materials: R,
      frameSections: M,
      shellSections: X,
      nodes: fe,
      nodeNames: G,
      nodeNameToIdx: $e,
      elements: re,
      elementNames: ne,
      elementSections: _,
      nodeInputs: Ke,
      elementInputs: ue,
      sectionShapes: Me,
      info: {
        nNodes: fe.length,
        nFrames: B,
        nShells: Y,
        title: `SAP2000 (${B} frames, ${Y} shells)`
      }
    };
  }
  function ti(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const { nodes: h, elements: R, nodeInputs: M, elementInputs: X } = e, D = e.units || {
      force: "KN",
      length: "m"
    }, Z = e.title || "Awatif Model", J = [], H = (_) => J.push(_), j = () => J.push(" ");
    H(`File ${Z}.$2k was saved on m/d/yy at h:mm:ss`), j(), H('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), H("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), j();
    const be = [], T = [];
    if (R.forEach((_, B) => {
      _.length === 2 ? be.push(B) : T.push(B);
    }), be.length > 0) {
      H('TABLE:  "CONNECTIVITY - FRAME"');
      for (const _ of be) {
        const B = R[_];
        H(`   Frame=${_ + 1}   JointI=${B[0] + 1}   JointJ=${B[1] + 1}   IsCurved=No`);
      }
      j();
    }
    if (T.length > 0) {
      H('TABLE:  "CONNECTIVITY - AREA"');
      for (const _ of T) {
        const B = R[_], Y = B.map((ue, Me) => `Joint${Me + 1}=${ue + 1}`).join("   ");
        H(`   Area=${_ + 1}   NumJoints=${B.length}   ${Y}`);
      }
      j();
    }
    H('TABLE:  "COORDINATE SYSTEMS"'), H("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), j(), H('TABLE:  "DATABASE FORMAT TYPES"'), H("   UnitsCurr=Yes   OverrideE=No"), j();
    const G = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map();
    for (const _ of be) {
      const B = ((_a = X.areas) == null ? void 0 : _a.get(_)) || 0, Y = ((_b = X.momentsOfInertiaZ) == null ? void 0 : _b.get(_)) || 0, ue = ((_c = X.momentsOfInertiaY) == null ? void 0 : _c.get(_)) || 0, Me = ((_d = X.torsionalConstants) == null ? void 0 : _d.get(_)) || 0, Le = ((_e = X.elasticities) == null ? void 0 : _e.get(_)) || 0, Ke = `MAT_${Math.round(Le)}`, ye = `A${B.toPrecision(6)}_Iz${Y.toPrecision(6)}`;
      if (!G.has(ye)) {
        let Ge = 0.3, he = 0.3;
        B > 0 && Y > 0 && (Ge = Math.sqrt(12 * Y / B), he = B / Ge), G.set(ye, {
          A: B,
          Iz: Y,
          Iy: ue,
          J: Me,
          b: he,
          h: Ge,
          matKey: Ke
        });
      }
      const Ye = [
        ...G.keys()
      ].indexOf(ye) + 1;
      $e.set(_, `SEC${Ye}`);
    }
    if (be.length > 0) {
      H('TABLE:  "FRAME SECTION ASSIGNMENTS"');
      for (const _ of be) {
        const B = $e.get(_) || "SEC1";
        H(`   Frame=${_ + 1}   AutoSelect=N.A.   AnalSect=${B}   MatProp=Default`);
      }
      j();
    }
    if (G.size > 0) {
      H('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
      let _ = 0;
      for (const [, B] of G) {
        _++;
        const Y = B.A * 5 / 6;
        H(`   SectionName=SEC${_}   Material=${B.matKey}   Shape=Rectangular   t3=${Ft(B.h)}   t2=${Ft(B.b)}   Area=${Ft(B.A)}   TorsConst=${Ft(B.J)}   I33=${Ft(B.Iz)}   I22=${Ft(B.Iy)}   I23=0   AS2=${Ft(Y)}   AS3=${Ft(Y)} _`), H("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
      }
      j();
    }
    const fe = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map();
    for (const _ of T) {
      const B = ((_f = X.thicknesses) == null ? void 0 : _f.get(_)) || 0.1, Y = ((_g = X.elasticities) == null ? void 0 : _g.get(_)) || 0, ue = `MAT_${Math.round(Y)}`, Me = `t${B.toPrecision(6)}`;
      fe.has(Me) || fe.set(Me, {
        t: B,
        matKey: ue
      });
      const Le = [
        ...fe.keys()
      ].indexOf(Me) + 1;
      re.set(_, `SSEC${Le}`);
    }
    if (T.length > 0) {
      H('TABLE:  "AREA SECTION ASSIGNMENTS"');
      for (const B of T) {
        const Y = re.get(B) || "SSEC1";
        H(`   Area=${B + 1}   Section=${Y}   MatProp=Default`);
      }
      j(), H('TABLE:  "AREA SECTION PROPERTIES"');
      let _ = 0;
      for (const [, B] of fe) _++, H(`   Section=SSEC${_}   Material=${B.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${Ft(B.t)}   BendThick=${Ft(B.t)}   Color=Cyan`);
      j();
    }
    H('TABLE:  "JOINT COORDINATES"');
    for (let _ = 0; _ < h.length; _++) {
      const B = h[_];
      H(`   Joint=${_ + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${Ft(B[0])}   Y=${Ft(B[1])}   Z=${Ft(B[2])}   SpecialJt=No`);
    }
    if (j(), M.supports && M.supports.size > 0) {
      H('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
      for (const [_, B] of M.supports) {
        if (!B.some((ue) => ue)) continue;
        const Y = (ue) => ue ? "Yes" : "No";
        H(`   Joint=${_ + 1}   U1=${Y(B[0])}   U2=${Y(B[1])}   U3=${Y(B[2])}   R1=${Y(B[3])}   R2=${Y(B[4])}   R3=${Y(B[5])}`);
      }
      j();
    }
    if (H('TABLE:  "LOAD PATTERN DEFINITIONS"'), H("   LoadPat=DEAD   DesignType=Dead   SelfWtMult=0"), j(), H('TABLE:  "LOAD CASE DEFINITIONS"'), H('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), j(), H('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), H('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), j(), M.forces && M.forces.size > 0) {
      H('TABLE:  "JOINT LOADS - FORCE"');
      for (const [_, B] of M.forces) B.some((Y) => Math.abs(Y) > 1e-12) && H(`   Joint=${_ + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${Ft(B[0])}   F2=${Ft(B[1])}   F3=${Ft(B[2])}   M1=${Ft(B[3])}   M2=${Ft(B[4])}   M3=${Ft(B[5])}`);
      j();
    }
    const ne = /* @__PURE__ */ new Map();
    for (let _ = 0; _ < R.length; _++) {
      const B = ((_h = X.elasticities) == null ? void 0 : _h.get(_)) || 0, Y = ((_i = X.shearModuli) == null ? void 0 : _i.get(_)) || 0, ue = B > 0 && Y > 0 ? Math.max(0, Math.min(0.5, B / (2 * Y) - 1)) : 0.2, Me = ((_j = X.densities) == null ? void 0 : _j.get(_)) || 0, Le = `MAT_${Math.round(B)}`;
      ne.has(Le) || ne.set(Le, {
        E: B,
        nu: ue,
        G: Y,
        rho: Me
      });
    }
    H('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
    for (const [_] of ne) H(`   Material=${_}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
    j(), H('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
    for (const [_, B] of ne) H(`   Material=${_}   UnitWeight=${Ft(B.rho * 9.81)}   UnitMass=${Ft(B.rho)}   E1=${Ft(B.E)}   G12=${Ft(B.G)}   U12=${Ft(B.nu)}   A1=9.9E-06`);
    j(), H('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
    for (const [_] of ne) H(`   Material=${_}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
    return j(), H('TABLE:  "PROGRAM CONTROL"'), H(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${D.force}, ${D.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), j(), H("END TABLE DATA"), H(""), J.join(`\r
`);
  }
  function Ft(e) {
    return e === 0 || Math.abs(e) < 1e-15 ? "0" : Math.abs(e) >= 1e6 || Math.abs(e) < 1e-3 && Math.abs(e) > 0 ? e.toExponential(8) : parseFloat(e.toPrecision(10)).toString();
  }
  function oi(e) {
    const { e2kModel: h } = e, R = h == null ? void 0 : h.rawSections;
    return R && R.size > 0 ? ni(R) : si(e);
  }
  function ni(e, h) {
    const R = [], M = [
      "PROGRAM INFORMATION",
      "CONTROLS",
      "STORIES - IN SEQUENCE FROM TOP",
      "GRIDS",
      "DIAPHRAGM NAMES",
      "MATERIAL PROPERTIES",
      "REBAR DEFINITIONS",
      "FRAME SECTIONS",
      "AUTO SELECT SECTION LISTS",
      "CONCRETE SECTIONS",
      "WALL/SLAB/DECK SECTIONS",
      "POINT COORDINATES",
      "LINE CONNECTIVITIES",
      "AREA CONNECTIVITIES",
      "POINT ASSIGNS",
      "LINE ASSIGNS",
      "AREA ASSIGNS",
      "LOAD PATTERNS",
      "POINT OBJECT LOADS",
      "FRAME OBJECT LOADS",
      "SHELL OBJECT LOADS",
      "ANALYSIS OPTIONS",
      "MASS SOURCE",
      "FUNCTIONS",
      "LOAD CASES",
      "LOAD COMBINATIONS"
    ];
    R.push("$ File exported from Awatif FEM Studio (round-trip)"), R.push("");
    for (const X of M) {
      const D = e.get(X);
      if (!(!D || D.length === 0)) {
        R.push(`$ ${X}`);
        for (const Z of D) R.push(Z);
        R.push("");
      }
    }
    for (const [X, D] of e) if (!M.includes(X) && D.length !== 0) {
      R.push(`$ ${X}`);
      for (const Z of D) R.push(Z);
      R.push("");
    }
    return R.push("  END"), R.push("$ END OF MODEL FILE"), R.join(`\r
`);
  }
  function si(e) {
    var _a, _b, _c, _d;
    const { nodes: h, elements: R, nodeInputs: M, elementInputs: X, title: D, units: Z } = e, J = (Z == null ? void 0 : Z.force) || "TONF", H = (Z == null ? void 0 : Z.length) || "M", j = [], be = (he) => Math.round(he * 1e4) / 1e4;
    j.push("$ File exported from Awatif FEM Studio"), j.push(""), j.push("$ PROGRAM INFORMATION"), j.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), j.push(""), j.push("$ CONTROLS"), j.push(`  UNITS  "${J}"  "${H}"  "C"  `), D && j.push(`  TITLE2  "${D}"  `), j.push("");
    const T = /* @__PURE__ */ new Set();
    h.forEach((he) => T.add(be(he[1])));
    const G = [
      ...T
    ].sort((he, Te) => he - Te), $e = [], fe = /* @__PURE__ */ new Map();
    $e.push("Base"), fe.set(G[0], "Base");
    for (let he = 1; he < G.length; he++) {
      const Te = `Level_${he}`;
      $e.push(Te), fe.set(G[he], Te);
    }
    j.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let he = G.length - 1; he >= 1; he--) j.push(`  STORY "${$e[he]}"  HEIGHT ${be(G[he] - G[he - 1])} MASTERSTORY "Yes"  `);
    G.length > 0 && j.push(`  STORY "Base"  ELEV ${G[0]} `), j.push(""), R.some((he) => he.length === 4) && (j.push("$ DIAPHRAGM NAMES"), j.push('  DIAPHRAGM "D1"    TYPE RIGID'), j.push("")), j.push("$ MATERIAL PROPERTIES");
    const ne = /* @__PURE__ */ new Set();
    (_a = X.elasticities) == null ? void 0 : _a.forEach((he) => ne.add(he));
    const _ = /* @__PURE__ */ new Map();
    let B = 0;
    for (const he of ne) {
      const Te = `Mat_${++B}`;
      _.set(he, Te), j.push(`  MATERIAL  "${Te}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), j.push(`  MATERIAL  "${Te}"    SYMTYPE "Isotropic"  E ${he}  U 0.2  A 1E-05`);
    }
    j.push(""), j.push("$ FRAME SECTIONS");
    const Y = /* @__PURE__ */ new Set(), ue = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map();
    R.forEach((he, Te) => {
      var _a2, _b2;
      if (he.length !== 2) return;
      const Ce = (_a2 = X.sectionShapes) == null ? void 0 : _a2.get(Te), Ue = ((_b2 = X.elasticities) == null ? void 0 : _b2.get(Te)) ?? 0, ct = _.get(Ue) || "Mat_1", Ze = (Ce == null ? void 0 : Ce.h) ?? 0, dt = (Ce == null ? void 0 : Ce.b) ?? 0, ut = (Ce == null ? void 0 : Ce.d) ?? 0, Tt = (Ce == null ? void 0 : Ce.tf) ?? 0, Ot = (Ce == null ? void 0 : Ce.tw) ?? 0, Dt = (Ce == null ? void 0 : Ce.type) || "rect", Mt = `${Dt}_${Ze}_${dt}_${ut}_${Tt}_${Ot}`;
      (Ce == null ? void 0 : Ce.name) && !Me.has(Mt) && Me.set(Mt, Ce.name);
      let ht = Me.get(Mt);
      if (ht || (Dt === "rect" ? ht = `R${be(dt * 100)}x${be(Ze * 100)}` : Dt === "circ" ? ht = `C_D${be(ut * 100)}` : Dt === "I" ? ht = `I_${be(Ze * 100)}` : ht = `Sec_${Y.size + 1}`, Me.set(Mt, ht)), ue.set(Te, ht), Y.has(ht)) return;
      Y.add(ht);
      const _e = {
        rect: "Concrete Rectangular",
        circ: "Concrete Circle",
        I: "Steel I/Wide Flange",
        HSS: "Steel Tube",
        pipe: "Steel Pipe",
        L: "Steel Angle",
        C: "Steel Channel",
        "2C": "Steel Double Channel"
      }[Dt] || "Concrete Rectangular";
      let St = `  FRAMESECTION  "${ht}"  MATERIAL "${ct}"  SHAPE "${_e}"`;
      Ze && (St += `  D ${Ze}`), dt && (St += `  B ${dt}`), ut && !Ze && (St += `  D ${ut}`), Tt && (St += `  TF ${Tt}`), Ot && (St += `  TW ${Ot}`), j.push(St);
    }), j.push("");
    const Le = /* @__PURE__ */ new Map();
    let Ke = 0;
    h.forEach((he) => {
      const Te = `${be(he[0])},${be(he[2])}`;
      Le.has(Te) || Le.set(Te, `${++Ke}`);
    }), j.push("$ POINT COORDINATES");
    for (const [he, Te] of Le) {
      const [Ce, Ue] = he.split(",").map(Number);
      j.push(`  POINT "${Te}"  ${Ce} ${Ue} `);
    }
    j.push("");
    const ye = (he) => {
      const Te = h[he], Ce = `${be(Te[0])},${be(Te[2])}`;
      return {
        pt: Le.get(Ce) || "1",
        story: fe.get(be(Te[1])) || "Base"
      };
    };
    j.push("$ LINE CONNECTIVITIES");
    const Ye = [];
    R.forEach((he, Te) => {
      if (he.length !== 2) return;
      const Ce = ai(h, he), Ue = ue.get(Te) || `Sec_${Te}`;
      if (Ce === "BEAM") {
        const ct = ye(he[0]), Ze = ye(he[1]);
        j.push(`  LINE  "E${Te + 1}"  BEAM  "${ct.pt}"  "${Ze.pt}"  0`), Ye.push(`  LINEASSIGN  "E${Te + 1}"  "${ct.story}"  SECTION "${Ue}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const ct = h[he[0]][1] <= h[he[1]][1] ? he[0] : he[1], Ze = h[he[0]][1] <= h[he[1]][1] ? he[1] : he[0];
        ye(ct);
        const dt = ye(Ze), ut = be(h[ct][1]), Tt = be(h[Ze][1]), Ot = G.indexOf(ut), Dt = G.indexOf(Tt), Mt = Math.max(1, Dt >= 0 && Ot >= 0 ? Dt - Ot : 1);
        j.push(`  LINE  "E${Te + 1}"  ${Ce}  "${dt.pt}"  "${dt.pt}"  ${Mt}`);
        for (let ht = 0; ht < Mt; ht++) {
          const bo = Dt - ht;
          bo >= 0 && bo < $e.length && Ye.push(`  LINEASSIGN  "E${Te + 1}"  "${$e[bo]}"  SECTION "${Ue}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), j.push(""), j.push("$ POINT ASSIGNS"), (_b = M.supports) == null ? void 0 : _b.forEach((he, Te) => {
      const Ce = [];
      if (he[0] && Ce.push("UX"), he[1] && Ce.push("UY"), he[2] && Ce.push("UZ"), he[3] && Ce.push("RX"), he[4] && Ce.push("RY"), he[5] && Ce.push("RZ"), Ce.length > 0) {
        const Ue = ye(Te);
        j.push(`  POINTASSIGN  "${Ue.pt}"  "${Ue.story}"  RESTRAINT "${Ce.join(" ")}"  `);
      }
    }), j.push(""), j.push("$ LINE ASSIGNS"), Ye.forEach((he) => j.push(he)), j.push("");
    const Ge = [];
    if (R.forEach((he, Te) => {
      if (he.length === 4) {
        const Ce = h[he[0]], Ue = h[he[1]], ct = h[he[2]], Ze = [
          Ue[0] - Ce[0],
          Ue[1] - Ce[1],
          Ue[2] - Ce[2]
        ], dt = [
          ct[0] - Ce[0],
          ct[1] - Ce[1],
          ct[2] - Ce[2]
        ], ut = Math.abs(Ze[2] * dt[0] - Ze[0] * dt[2]), Tt = Math.sqrt((Ze[1] * dt[2] - Ze[2] * dt[1]) ** 2 + ut ** 2 + (Ze[0] * dt[1] - Ze[1] * dt[0]) ** 2), Ot = Tt > 1e-10 && ut / Tt < 0.5;
        Ge.push({
          idx: Te,
          el: he,
          isWall: Ot
        });
      }
    }), Ge.some((he) => !he.isWall)) {
      j.push("$ SLAB PROPERTIES");
      const he = ((_c = X.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      j.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${_.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${he} `), j.push("");
    }
    if (Ge.some((he) => he.isWall)) {
      j.push("$ WALL PROPERTIES");
      const he = ((_d = X.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      j.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${_.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${he} `), j.push("");
    }
    if (Ge.length > 0) {
      j.push("$ AREA CONNECTIVITIES");
      const he = [];
      Ge.forEach((Te, Ce) => {
        const { el: Ue, isWall: ct } = Te, Ze = ct ? `W${Ce + 1}` : `F${Ce + 1}`, dt = ct ? "PANEL" : "FLOOR", ut = Ue.map((Tt) => ye(Tt));
        if (ct) {
          const Tt = h[Ue[0]][1] <= h[Ue[2]][1] ? 0 : 2, Ot = h[Ue[1]][1] <= h[Ue[3]][1] ? 1 : 3;
          j.push(`  AREA "${Ze}"  ${dt}  4  "${ut[Tt].pt}"  "${ut[Ot].pt}"  "${ut[Ot].pt}"  "${ut[Tt].pt}"  1  1  0  0  `);
          const Dt = ut[Tt === 0 ? 2 : 0].story;
          he.push(`  AREAASSIGN  "${Ze}"  "${Dt}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        } else j.push(`  AREA "${Ze}"  ${dt}  4  "${ut[0].pt}"  "${ut[1].pt}"  "${ut[2].pt}"  "${ut[3].pt}"  0  0  0  0  `), he.push(`  AREAASSIGN  "${Ze}"  "${ut[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }), j.push(""), j.push("$ AREA ASSIGNS"), he.forEach((Te) => j.push(Te)), j.push("");
    }
    return j.push("$ LOAD PATTERNS"), j.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), j.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), j.push(""), M.loads && M.loads.size > 0 && (j.push("$ POINT OBJECT LOADS"), M.loads.forEach((he, Te) => {
      const [Ce, Ue, ct] = he, Ze = ye(Te);
      Math.abs(Ce) > 1e-10 && j.push(`  POINTLOAD  "${Ze.pt}"  "${Ze.story}"  "Dead"  TYPE "FORCE"  FX ${Ce}`), Math.abs(Ue) > 1e-10 && j.push(`  POINTLOAD  "${Ze.pt}"  "${Ze.story}"  "Dead"  TYPE "FORCE"  FY ${Ue}`), Math.abs(ct) > 1e-10 && j.push(`  POINTLOAD  "${Ze.pt}"  "${Ze.story}"  "Dead"  TYPE "FORCE"  FZ ${ct}`);
    }), j.push("")), j.push("  END"), j.push("$ END OF MODEL FILE"), j.join(`\r
`);
  }
  function ai(e, h) {
    const R = e[h[0]], M = e[h[1]], X = Math.abs(M[1] - R[1]), D = Math.sqrt((M[0] - R[0]) ** 2 + (M[2] - R[2]) ** 2), Z = X > D * 0.5;
    return Z && D > 0.01 ? "BRACE" : Z ? "COLUMN" : "BEAM";
  }
  function li(e) {
    var _a, _b;
    const { nodes: h, elements: R, nodeInputs: M, elementInputs: X } = e, D = [];
    return D.push("# OpenSeesPy model exported from Awatif FEM Studio"), D.push(`# ${h.length} nodes, ${R.length} elements`), D.push(""), D.push("import openseespy.opensees as ops"), D.push(""), D.push("ops.wipe()"), D.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), D.push(""), D.push("# --- Nodes ---"), h.forEach((Z, J) => {
      D.push(`ops.node(${J + 1}, ${Z[0]}, ${Z[1]}, ${Z[2]})`);
    }), D.push(""), D.push("# --- Boundary Conditions ---"), (_a = M.supports) == null ? void 0 : _a.forEach((Z, J) => {
      const H = Z.map((j) => j ? 1 : 0).join(", ");
      D.push(`ops.fix(${J + 1}, ${H})`);
    }), D.push(""), D.push("# --- Geometric Transformations ---"), D.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), D.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), D.push(""), D.push("# --- Elements (elasticBeamColumn) ---"), R.forEach((Z, J) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (Z.length !== 2) return;
      const H = h[Z[0]], j = h[Z[1]], T = Math.abs(j[2] - H[2]) > Math.max(Math.abs(j[0] - H[0]), Math.abs(j[1] - H[1])) ? 2 : 1, G = ((_a2 = X.areas) == null ? void 0 : _a2.get(J)) ?? 1, $e = ((_b2 = X.elasticities) == null ? void 0 : _b2.get(J)) ?? 2e5, fe = ((_c = X.shearModuli) == null ? void 0 : _c.get(J)) ?? 8e4, re = ((_d = X.torsionalConstants) == null ? void 0 : _d.get(J)) ?? 1, ne = ((_e = X.momentsOfInertiaY) == null ? void 0 : _e.get(J)) ?? 1, _ = ((_f = X.momentsOfInertiaZ) == null ? void 0 : _f.get(J)) ?? 1;
      D.push(`ops.element('elasticBeamColumn', ${J + 1}, ${Z[0] + 1}, ${Z[1] + 1}, ${G}, ${$e}, ${fe}, ${re}, ${ne}, ${_}, ${T})`);
    }), D.push(""), M.loads && M.loads.size > 0 && (D.push("# --- Loads ---"), D.push("ops.timeSeries('Linear', 1)"), D.push("ops.pattern('Plain', 1, 1)"), M.loads.forEach((Z, J) => {
      const H = Z.map((j) => j).join(", ");
      D.push(`ops.load(${J + 1}, ${H})`);
    }), D.push("")), D.push("# --- Analysis ---"), D.push("ops.system('BandGeneral')"), D.push("ops.numberer('RCM')"), D.push("ops.constraints('Plain')"), D.push("ops.integrator('LoadControl', 1.0)"), D.push("ops.algorithm('Linear')"), D.push("ops.analysis('Static')"), D.push("ops.analyze(1)"), D.push(""), D.push("# --- Results ---"), D.push('print("\\n=== Displacements ===")'), h.forEach((Z, J) => {
      D.push(`print(f"Node {${J + 1}}: {ops.nodeDisp(${J + 1})}")`);
    }), D.push(""), D.push('print("\\n=== Reactions ===")'), D.push("ops.reactions()"), (_b = M.supports) == null ? void 0 : _b.forEach((Z, J) => {
      D.push(`print(f"Node {${J + 1}}: {ops.nodeReaction(${J + 1})}")`);
    }), D.join(`
`);
  }
  function ii(e) {
    var _a, _b;
    const { nodes: h, elements: R, nodeInputs: M, elementInputs: X } = e, D = [];
    return D.push("# OpenSees Tcl model exported from Awatif FEM Studio"), D.push(`# ${h.length} nodes, ${R.length} elements`), D.push(""), D.push("wipe"), D.push("model basic -ndm 3 -ndf 6"), D.push(""), D.push("# --- Nodes ---"), h.forEach((Z, J) => {
      D.push(`node ${J + 1} ${Z[0]} ${Z[1]} ${Z[2]}`);
    }), D.push(""), D.push("# --- Boundary Conditions ---"), (_a = M.supports) == null ? void 0 : _a.forEach((Z, J) => {
      const H = Z.map((j) => j ? 1 : 0).join(" ");
      D.push(`fix ${J + 1} ${H}`);
    }), D.push(""), D.push("# --- Geometric Transformations ---"), D.push("geomTransf Linear 1 0.0 0.0 1.0"), D.push("geomTransf Linear 2 -1.0 0.0 0.0"), D.push(""), D.push("# --- Elements ---"), R.forEach((Z, J) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (Z.length !== 2) return;
      const H = h[Z[0]], j = h[Z[1]], T = Math.abs(j[2] - H[2]) > Math.max(Math.abs(j[0] - H[0]), Math.abs(j[1] - H[1])) ? 2 : 1, G = ((_a2 = X.areas) == null ? void 0 : _a2.get(J)) ?? 1, $e = ((_b2 = X.elasticities) == null ? void 0 : _b2.get(J)) ?? 2e5, fe = ((_c = X.shearModuli) == null ? void 0 : _c.get(J)) ?? 8e4, re = ((_d = X.torsionalConstants) == null ? void 0 : _d.get(J)) ?? 1, ne = ((_e = X.momentsOfInertiaY) == null ? void 0 : _e.get(J)) ?? 1, _ = ((_f = X.momentsOfInertiaZ) == null ? void 0 : _f.get(J)) ?? 1;
      D.push(`element elasticBeamColumn ${J + 1} ${Z[0] + 1} ${Z[1] + 1} ${G} ${$e} ${fe} ${re} ${ne} ${_} ${T}`);
    }), D.push(""), M.loads && M.loads.size > 0 && (D.push("# --- Loads ---"), D.push("timeSeries Linear 1"), D.push("pattern Plain 1 1 {"), M.loads.forEach((Z, J) => {
      const H = Z.map((j) => j).join(" ");
      D.push(`  load ${J + 1} ${H}`);
    }), D.push("}"), D.push("")), D.push("# --- Analysis ---"), D.push("system BandGeneral"), D.push("numberer RCM"), D.push("constraints Plain"), D.push("integrator LoadControl 1.0"), D.push("algorithm Linear"), D.push("analysis Static"), D.push("analyze 1"), D.push(""), D.push("# --- Results ---"), D.push('puts "\\n=== Displacements ==="'), h.forEach((Z, J) => {
      D.push(`puts "Node ${J + 1}: [nodeDisp ${J + 1}]"`);
    }), D.push('puts "\\n=== Reactions ==="'), D.push("reactions"), (_b = M.supports) == null ? void 0 : _b.forEach((Z, J) => {
      D.push(`puts "Node ${J + 1}: [nodeReaction ${J + 1}]"`);
    }), D.join(`
`);
  }
  function ri(e) {
    const h = [], R = [], M = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map();
    for (const $e of e.split(/\r?\n/)) {
      const fe = $e.trim(), re = fe.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (re) {
        const Y = parseInt(re[1]), ue = h.length;
        h.push([
          parseFloat(re[2]),
          parseFloat(re[3]),
          parseFloat(re[4])
        ]), T.set(Y, ue);
        continue;
      }
      const ne = fe.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (ne) {
        const Y = parseInt(ne[1]), ue = T.get(Y);
        ue !== void 0 && M.set(ue, [
          ne[2] === "1",
          ne[3] === "1",
          ne[4] === "1",
          ne[5] === "1",
          ne[6] === "1",
          ne[7] === "1"
        ]);
        continue;
      }
      const _ = fe.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (_) {
        const Y = parseInt(_[1]), ue = T.get(parseInt(_[2])), Me = T.get(parseInt(_[3]));
        if (ue !== void 0 && Me !== void 0) {
          const Le = R.length;
          R.push([
            ue,
            Me
          ]), G.set(Y, Le), J.set(Le, parseFloat(_[4])), D.set(Le, parseFloat(_[5])), Z.set(Le, parseFloat(_[6])), be.set(Le, parseFloat(_[7])), H.set(Le, parseFloat(_[8])), j.set(Le, parseFloat(_[9]));
        }
        continue;
      }
      const B = fe.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (B) {
        const Y = T.get(parseInt(B[1]));
        Y !== void 0 && X.set(Y, [
          parseFloat(B[2]),
          parseFloat(B[3]),
          parseFloat(B[4]),
          parseFloat(B[5]),
          parseFloat(B[6]),
          parseFloat(B[7])
        ]);
      }
    }
    return {
      nodes: h,
      elements: R,
      nodeInputs: {
        supports: M,
        loads: X
      },
      elementInputs: {
        elasticities: D,
        shearModuli: Z,
        areas: J,
        momentsOfInertiaY: H,
        momentsOfInertiaZ: j,
        torsionalConstants: be
      }
    };
  }
  function ci(e) {
    const h = [], R = [], M = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
    for (const G of e.split(/\r?\n/)) {
      const $e = G.trim();
      if ($e.startsWith("#") || $e.startsWith("//")) continue;
      const fe = $e.split(/\s+/);
      if (fe[0] === "node" && fe.length >= 5) {
        const re = parseInt(fe[1]), ne = h.length;
        h.push([
          parseFloat(fe[2]),
          parseFloat(fe[3]),
          parseFloat(fe[4])
        ]), T.set(re, ne);
        continue;
      }
      if (fe[0] === "fix" && fe.length >= 8) {
        const re = T.get(parseInt(fe[1]));
        re !== void 0 && M.set(re, [
          fe[2] === "1",
          fe[3] === "1",
          fe[4] === "1",
          fe[5] === "1",
          fe[6] === "1",
          fe[7] === "1"
        ]);
        continue;
      }
      if (fe[0] === "element" && fe[1] === "elasticBeamColumn" && fe.length >= 12) {
        const re = T.get(parseInt(fe[3])), ne = T.get(parseInt(fe[4]));
        if (re !== void 0 && ne !== void 0) {
          const _ = R.length;
          R.push([
            re,
            ne
          ]), J.set(_, parseFloat(fe[5])), D.set(_, parseFloat(fe[6])), Z.set(_, parseFloat(fe[7])), be.set(_, parseFloat(fe[8])), H.set(_, parseFloat(fe[9])), j.set(_, parseFloat(fe[10]));
        }
        continue;
      }
      if (fe[0] === "load" && fe.length >= 8) {
        const re = T.get(parseInt(fe[1]));
        re !== void 0 && X.set(re, [
          parseFloat(fe[2]),
          parseFloat(fe[3]),
          parseFloat(fe[4]),
          parseFloat(fe[5]),
          parseFloat(fe[6]),
          parseFloat(fe[7])
        ]);
      }
    }
    return {
      nodes: h,
      elements: R,
      nodeInputs: {
        supports: M,
        loads: X
      },
      elementInputs: {
        elasticities: D,
        shearModuli: Z,
        areas: J,
        momentsOfInertiaY: H,
        momentsOfInertiaZ: j,
        torsionalConstants: be
      }
    };
  }
  function no(e) {
    const h = [];
    let R = 0, M = false, X = "";
    for (let D = 0; D < e.length; D++) {
      const Z = e[D];
      if (Z === "'" && (D === 0 || e[D - 1] !== "\\")) {
        M = !M, X += Z;
        continue;
      }
      if (M) {
        X += Z;
        continue;
      }
      if (Z === "(") {
        R++, X += Z;
        continue;
      }
      if (Z === ")") {
        R--, X += Z;
        continue;
      }
      if (Z === "," && R === 0) {
        h.push(X.trim()), X = "";
        continue;
      }
      X += Z;
    }
    return X.trim() && h.push(X.trim()), h;
  }
  function Ca(e, h) {
    const R = no(e);
    if (h < R.length) {
      let M = R[h].trim();
      return M.startsWith("'") && M.endsWith("'") && (M = M.slice(1, -1)), M === "$" ? null : M;
    }
    return null;
  }
  function di(e) {
    const h = {
      schema: "",
      project: "",
      app: ""
    }, R = {}, M = {}, X = e.match(/FILE_SCHEMA\s*\(\s*\(\s*'([^']*)'/i);
    X && (h.schema = X[1]);
    const D = /^#(\d+)\s*=\s*([A-Z][A-Z0-9_]*)\s*\(([\s\S]*?)\)\s*;\s*$/gm;
    let Z;
    for (; (Z = D.exec(e)) !== null; ) {
      const J = parseInt(Z[1]), H = Z[2].toUpperCase();
      R[J] = {
        id: J,
        type: H,
        args: Z[3]
      }, M[H] || (M[H] = []), M[H].push(J);
    }
    if (M.IFCPROJECT) {
      const J = R[M.IFCPROJECT[0]];
      if (J) {
        const H = Ca(J.args, 2);
        H && (h.project = H);
      }
    }
    return {
      meta: h,
      entities: R,
      typeIndex: M
    };
  }
  function Zt(e, h) {
    const R = h.match(/#(\d+)/);
    return R && e[parseInt(R[1])] || null;
  }
  function Pa(e, h) {
    const R = no(h.args), M = Zt(e, R[0]), X = M ? pi(e, M) : [
      0,
      0,
      0
    ];
    let D = [
      0,
      0,
      1
    ], Z = [
      1,
      0,
      0
    ];
    if (R[1] && R[1] !== "$") {
      const J = Zt(e, R[1]);
      J && (D = Ia(e, J));
    }
    if (R[2] && R[2] !== "$") {
      const J = Zt(e, R[2]);
      J && (Z = Ia(e, J));
    }
    return {
      origin: X,
      dirZ: D,
      dirX: Z
    };
  }
  function pi(e, h) {
    return h.args.replace(/[()]/g, "").split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M));
  }
  function Ia(e, h) {
    return h.args.replace(/[()]/g, "").split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M));
  }
  function Fa(e, h) {
    const R = no(h.args), M = Zt(e, R[1]);
    let X = {
      origin: [
        0,
        0,
        0
      ],
      dirZ: [
        0,
        0,
        1
      ],
      dirX: [
        1,
        0,
        0
      ]
    };
    if (M && (X = Pa(e, M)), R[0] && R[0] !== "$") {
      const D = Zt(e, R[0]);
      if (D && D.type === "IFCLOCALPLACEMENT") {
        const Z = Fa(e, D), J = gs(X.origin, Z.dirX, ms(Z.dirZ, Z.dirX), Z.dirZ);
        X.origin = [
          Z.origin[0] + J[0],
          Z.origin[1] + J[1],
          Z.origin[2] + J[2]
        ], X.dirZ = gs(X.dirZ, Z.dirX, ms(Z.dirZ, Z.dirX), Z.dirZ), X.dirX = gs(X.dirX, Z.dirX, ms(Z.dirZ, Z.dirX), Z.dirZ);
      }
    }
    return X;
  }
  function ms(e, h) {
    return [
      e[1] * h[2] - e[2] * h[1],
      e[2] * h[0] - e[0] * h[2],
      e[0] * h[1] - e[1] * h[0]
    ];
  }
  function gs(e, h, R, M) {
    return [
      e[0] * h[0] + e[1] * R[0] + e[2] * M[0],
      e[0] * h[1] + e[1] * R[1] + e[2] * M[1],
      e[0] * h[2] + e[1] * R[2] + e[2] * M[2]
    ];
  }
  const fi = 0.01;
  function ui(e) {
    const h = di(e), { entities: R, typeIndex: M } = h, X = [], D = [], Z = /* @__PURE__ */ new Map();
    Z.set("Hormigon", {
      E: 2132888792e-2,
      nu: 0.2,
      rho: 2.4
    }), Z.set("Acero", {
      E: 2e8,
      nu: 0.3,
      rho: 7.85
    });
    let J = 0, H = 0;
    function j(ne, _, B) {
      for (const Y of X) {
        const ue = Y.x - ne, Me = Y.y - _, Le = Y.z - B;
        if (Math.sqrt(ue * ue + Me * Me + Le * Le) < fi) return Y.id;
      }
      return X.push({
        id: J,
        x: ne,
        y: _,
        z: B
      }), J++;
    }
    function be(ne) {
      const _ = Ca(ne.args, 2) || "", B = M.IFCRELASSOCIATESMATERIAL || [];
      for (const ue of B) {
        const Me = R[ue];
        if (!Me) continue;
        const Le = no(Me.args);
        if ((Le[4] || Le[3] || "").includes(`#${ne.id}`)) {
          const ye = Le[5] || Le[4] || "", Ye = Zt(R, ye);
          if (Ye) return T(Ye);
        }
      }
      const Y = _.match(/(\d+)\s*[xX×]\s*(\d+)/);
      return Y ? {
        b: parseFloat(Y[1]) / 100,
        h: parseFloat(Y[2]) / 100,
        name: _
      } : {
        b: 0.3,
        h: 0.3,
        name: _ || "Default"
      };
    }
    function T(ne) {
      const _ = ne.type;
      if (_ === "IFCRECTANGLEPROFILEDEF") {
        const B = no(ne.args), Y = (B[1] || "").replace(/'/g, ""), ue = parseFloat(B[3]) || 0.3, Me = parseFloat(B[4]) || 0.3;
        return {
          b: ue,
          h: Me,
          name: Y
        };
      }
      if (_ === "IFCMATERIALPROFILE") {
        const B = no(ne.args), Y = B[2] || B[1] || "", ue = Zt(R, Y);
        if (ue) return T(ue);
      }
      if (_ === "IFCMATERIALPROFILESET") {
        const B = no(ne.args), ue = (B[2] || B[1] || "").match(/#(\d+)/);
        if (ue) {
          const Me = R[parseInt(ue[1])];
          if (Me) return T(Me);
        }
      }
      if (_ === "IFCMATERIALPROFILESETUSAGE") {
        const Y = no(ne.args)[0], ue = Zt(R, Y);
        if (ue) return T(ue);
      }
      return {
        b: 0.3,
        h: 0.3,
        name: "Unknown"
      };
    }
    function G(ne, _, B, Y) {
      const ue = M[ne] || [];
      for (const Me of ue) {
        const Le = R[Me];
        if (!Le) continue;
        const Ke = no(Le.args), ye = Ke[5] || Ke[4] || "", Ye = Zt(R, ye);
        if (!Ye) continue;
        const Ge = Fa(R, Ye), he = be(Le);
        let Te = Y, Ce = null, Ue = null;
        const ct = Ke[6] || Ke[5] || "", Ze = Zt(R, ct);
        if (Ze) {
          const ht = Rn(R, Ze);
          ht && (Te = ht.depth || Y, Ce = ht.origin, Ue = ht.direction);
        }
        const dt = Ce ? Ce[0] : Ge.origin[0], ut = Ce ? Ce[1] : Ge.origin[1], Tt = Ce ? Ce[2] : Ge.origin[2], Ot = Ue || (B === "Z" ? Ge.dirZ : Ge.dirX), Dt = j(dt, ut, Tt), Mt = j(dt + Ot[0] * Te, ut + Ot[1] * Te, Tt + Ot[2] * Te);
        D.push({
          id: H++,
          type: "frame",
          nodeIds: [
            Dt,
            Mt
          ],
          category: _,
          sectionName: he.name,
          b: he.b,
          h: he.h,
          material: "Hormigon",
          expressID: Me
        });
      }
    }
    G("IFCCOLUMN", "column", "Z", 3), G("IFCBEAM", "beam", "X", 5), G("IFCMEMBER", "diagonal", "X", 4), G("IFCPILE", "pile", "Z", 10), G("IFCSTAIRFLIGHT", "stair", "X", 3), G("IFCRAMPFLIGHT", "ramp", "X", 4);
    function $e(ne, _, B) {
      const Y = M[ne] || [];
      for (const ue of Y) {
        const Me = R[ue];
        if (!Me) continue;
        const Le = no(Me.args), Ke = Le[5] || Le[4] || "";
        if (!Zt(R, Ke)) continue;
        let Ye = B;
        const Ge = Le[6] || Le[5] || "", he = Zt(R, Ge);
        he && (Ye = mi(R, he) || B);
        const Te = _ === "slab" ? `Losa e=${(Ye * 100).toFixed(0)}cm` : _ === "wall" ? `Muro e=${(Ye * 100).toFixed(0)}cm` : _ === "footing" ? `Zapata e=${(Ye * 100).toFixed(0)}cm` : `${_} e=${(Ye * 100).toFixed(0)}cm`;
        D.push({
          id: H++,
          type: "shell",
          nodeIds: [],
          category: _,
          sectionName: Te,
          b: Ye,
          h: Ye,
          material: "Hormigon",
          expressID: ue
        });
      }
    }
    $e("IFCSLAB", "slab", 0.15), $e("IFCWALL", "wall", 0.2), $e("IFCWALLSTANDARDCASE", "wall", 0.2), $e("IFCFOOTING", "footing", 0.5), $e("IFCROOF", "slab", 0.12);
    const fe = [], re = M.IFCBUILDINGSTOREY || [];
    for (const ne of re) {
      const _ = R[ne];
      if (!_) continue;
      const B = no(_.args), Y = (B[2] || "").replace(/'/g, ""), ue = parseFloat(B[9]) || 0;
      fe.push({
        name: Y,
        elevation: ue
      });
    }
    return fe.sort((ne, _) => ne.elevation - _.elevation), {
      nodes: X,
      elements: D,
      materials: Z,
      levels: fe,
      projectName: h.meta.project,
      schema: h.meta.schema
    };
  }
  function Rn(e, h) {
    const R = no(h.args);
    for (const M of R) {
      const X = M.match(/#(\d+)/g) || [];
      for (const D of X) {
        const Z = parseInt(D.replace("#", "")), J = e[Z];
        if (J) {
          if (J.type === "IFCEXTRUDEDAREASOLID") {
            const H = no(J.args), j = parseFloat(H[3]) || 0, be = Zt(e, H[1]);
            let T = [
              0,
              0,
              0
            ];
            be && (T = Pa(e, be).origin);
            const G = Zt(e, H[2]);
            let $e = [
              0,
              0,
              1
            ];
            if (G && G.type === "IFCDIRECTION") {
              const fe = G.args.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
              fe && fe.length >= 3 && ($e = fe.map(Number));
            }
            return {
              depth: j,
              origin: T,
              direction: $e
            };
          }
          if (J.type === "IFCSHAPEREPRESENTATION") {
            const H = Rn(e, J);
            if (H) return H;
          }
          if (J.type === "IFCMAPPEDITEM") {
            const H = no(J.args), j = Zt(e, H[0]);
            if (j && j.type === "IFCREPRESENTATIONMAP") {
              const be = no(j.args), T = Zt(e, be[1]);
              if (T) {
                const G = Rn(e, T);
                if (G) return G;
              }
            }
          }
        }
      }
    }
    return null;
  }
  function mi(e, h) {
    const R = Rn(e, h);
    return R ? R.depth : null;
  }
  const Ra = [
    [
      843113511,
      "column"
    ],
    [
      753842376,
      "beam"
    ],
    [
      1529196076,
      "slab"
    ],
    [
      900683007,
      "footing"
    ],
    [
      1687234759,
      "footing"
    ],
    [
      979691226,
      "rebar"
    ],
    [
      2320036040,
      "rebar"
    ],
    [
      3171933400,
      "plate"
    ],
    [
      1073191201,
      "member"
    ],
    [
      377706215,
      "fastener"
    ],
    [
      2391406946,
      "wall"
    ],
    [
      3512223829,
      "wall"
    ],
    [
      3304561284,
      "opening"
    ],
    [
      395920057,
      "opening"
    ]
  ], Na = [
    "column",
    "beam",
    "slab",
    "footing",
    "rebar",
    "plate",
    "member",
    "fastener",
    "wall",
    "opening",
    "other"
  ], Oa = /* @__PURE__ */ new Map();
  for (const [e, h] of Ra) Oa.set(e, h);
  function gi(e) {
    return Oa.get(e) ?? "other";
  }
  new Set(Na);
  async function hi(e, h) {
    var _a, _b;
    const R = window.WebIFC;
    if (!R) throw new Error("web-ifc no disponible. Verifica que web-ifc-api-iife.js se carg\xF3.");
    const M = new R.IfcAPI(), X = window.location.pathname.replace(/\/[^/]*$/, "/");
    M.SetWasmPath(X), await M.Init();
    const D = M.OpenModel(new Uint8Array(h)), Z = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), H = {
      843113511: "Columna",
      753842376: "Viga",
      1529196076: "Losa",
      900683007: "Zapata",
      1687234759: "Pilote",
      979691226: "Barra Refuerzo",
      2320036040: "Malla Refuerzo",
      3171933400: "Placa",
      1073191201: "Miembro",
      377706215: "Perno/Anclaje",
      2391406946: "Muro",
      3512223829: "Muro",
      3304561284: "Ventana",
      395920057: "Puerta"
    };
    for (const [$e] of Ra) {
      const fe = gi($e);
      try {
        const re = M.GetLineIDsWithType(D, $e);
        for (let ne = 0; ne < re.size(); ne++) {
          const _ = re.get(ne);
          Z.set(_, fe);
          let B = "";
          try {
            const Y = M.GetLine(D, _);
            B = ((_a = Y == null ? void 0 : Y.Name) == null ? void 0 : _a.value) || ((_b = Y == null ? void 0 : Y.Description) == null ? void 0 : _b.value) || "";
          } catch {
          }
          J.set(_, {
            expressID: _,
            category: fe,
            name: B,
            typeName: H[$e] || "Otro"
          });
        }
      } catch {
      }
    }
    const j = /* @__PURE__ */ new Map();
    for (const $e of Na) {
      const fe = new hn();
      fe.name = `ifc-${$e}`, e.add(fe), j.set($e, fe);
    }
    const be = new yl();
    let T = 0;
    const G = new ya({
      color: 13421772,
      transparent: true,
      opacity: 0.9,
      side: $a
    });
    return M.StreamAllMeshes(D, ($e) => {
      const fe = Z.get($e.expressID) ?? "other", re = j.get(fe), ne = $e.geometries;
      for (let _ = 0; _ < ne.size(); _++) {
        const B = ne.get(_), Y = M.GetGeometry(D, B.geometryExpressID), ue = M.GetVertexArray(Y.GetVertexData(), Y.GetVertexDataSize()), Me = M.GetIndexArray(Y.GetIndexData(), Y.GetIndexDataSize()), Le = new co(), Ke = new Float32Array(ue.length / 2), ye = new Float32Array(ue.length / 2);
        for (let Ce = 0; Ce < ue.length; Ce += 6) {
          const Ue = Ce / 2;
          Ke[Ue] = ue[Ce], Ke[Ue + 1] = ue[Ce + 1], Ke[Ue + 2] = ue[Ce + 2], ye[Ue] = ue[Ce + 3], ye[Ue + 1] = ue[Ce + 4], ye[Ue + 2] = ue[Ce + 5];
        }
        Le.setAttribute("position", new Cn(Ke, 3)), Le.setAttribute("normal", new Cn(ye, 3)), Le.setIndex(new Cn(new Uint32Array(Me), 1));
        const Ye = new $l();
        Ye.fromArray(B.flatTransformation);
        let Ge;
        const he = B.color;
        he && (he.x !== 1 || he.y !== 1 || he.z !== 1) ? Ge = new ya({
          color: new Ml(he.x, he.y, he.z),
          transparent: he.w < 1,
          opacity: he.w,
          side: $a
        }) : Ge = G, Ge._origOpacity = Ge.opacity;
        const Te = new Ta(Le, Ge);
        Te.applyMatrix4(Ye), Te.userData.expressID = $e.expressID, Te.userData.category = fe, re.add(Te), be.expandByObject(Te), T++, Y.delete();
      }
    }), M.CloseModel(D), {
      meshCount: T,
      bbox: be,
      detailCategories: j,
      elementInfo: J
    };
  }
  ka = on.state(false);
  wi = function(e) {
    e.nodeInputs || (e.nodeInputs = on.state({})), e.elementInputs || (e.elementInputs = on.state({})), e.deformOutputs || (e.deformOutputs = on.state({})), e.analyzeOutputs || (e.analyzeOutputs = on.state({}));
    let h = "tonf", R = "m", M = Ho(h, R), X = {
      forceId: "kgf",
      lengthId: "cm",
      label: "kgf/cm\xB2"
    };
    const D = {
      MKS: {
        force: "tonf",
        length: "m",
        stress: {
          forceId: "kgf",
          lengthId: "cm",
          label: "kgf/cm\xB2"
        }
      },
      SI: {
        force: "kN",
        length: "m",
        stress: {
          forceId: "kN",
          lengthId: "m",
          label: "kPa"
        }
      },
      US: {
        force: "kip",
        length: "in",
        stress: {
          forceId: "kip",
          lengthId: "in",
          label: "ksi"
        }
      }
    }, Z = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set();
    let H = false;
    const j = /* @__PURE__ */ new Set(), be = /* @__PURE__ */ new Map();
    let T = "", G = {}, $e = null, fe = "", re = [], ne = [], _ = [], B = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), ue = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), Ke = null, ye = [], Ye = 0.2, Ge = 2, he = 2, Te = false, Ce = 2, Ue = "x", ct = /* @__PURE__ */ new Set(), Ze = true, dt = 0.15, ut = 2, Tt = 2, Ot = /* @__PURE__ */ new Set(), Dt = false, Mt = "perimeter";
    const ht = () => ({
      b: 0.3,
      h: 0.4,
      profileIdx: 0,
      secType: 0,
      bf: 0.2,
      hf: 0.4,
      tf: 0.015,
      tw: 0.01,
      hc: 0.3,
      bc: 0.2,
      t: 8e-3
    }), bo = (t, o) => ({
      bCol: 0.4,
      hCol: 0.4,
      dCol: 0.4,
      colProfileIdx: 0,
      colSecType: 0,
      colBf: 0.3,
      colHf: 0.3,
      colTf: 0.02,
      colTw: 0.012,
      colHc: 0.3,
      colBc: 0.3,
      colT: 0.01,
      colFc: 20594,
      colEs: 2e8,
      colNuS: 0.3,
      colNuC: 0.2,
      vigasX: Array.from({
        length: t
      }, ht),
      vigasY: Array.from({
        length: o
      }, ht)
    }), _e = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let St = 0, Fe = 3, Be = false, xe = 0, Pe = null, ve = 0, ze = [], Je = 1, He = true;
    const ft = Nl();
    ft.div.style.display = "none";
    function bt() {
      const t = kn()[T];
      return t && t[St] ? t[St].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let Ve = [], Qe = [], mt = 0, pt = [], xt = null;
    function Vt() {
      if (!xt) return;
      const t = tt();
      t && t.scene.remove(xt), xt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), xt = null;
    }
    function vs(t, o, n, l, a) {
      Vt();
      const c = tt();
      if (!c) return;
      xt = new hn(), xt.name = "refGrid";
      const s = Math.min(...t), i = Math.max(...t), p = Math.min(...o), r = Math.max(...o), d = Math.max(...n), g = i - s || 1, S = r - p || 1, $ = 3359829, y = 2241348;
      for (const b of n) {
        for (const I of o) {
          const L = new co().setFromPoints([
            new qe(s, b, I),
            new qe(i, b, I)
          ]), z = new Qo({
            color: $,
            dashSize: g * 0.015,
            gapSize: g * 0.01,
            transparent: true,
            opacity: 0.25
          }), F = new Bo(L, z);
          F.computeLineDistances(), F.renderOrder = -10, xt.add(F);
        }
        for (const I of t) {
          const L = new co().setFromPoints([
            new qe(I, b, p),
            new qe(I, b, r)
          ]), z = new Qo({
            color: $,
            dashSize: S * 0.015,
            gapSize: S * 0.01,
            transparent: true,
            opacity: 0.25
          }), F = new Bo(L, z);
          F.computeLineDistances(), F.renderOrder = -10, xt.add(F);
        }
      }
      for (const b of t) for (const I of o) {
        const L = new co().setFromPoints([
          new qe(b, 0, I),
          new qe(b, d, I)
        ]), z = new Qo({
          color: y,
          dashSize: d * 0.01,
          gapSize: d * 8e-3,
          transparent: true,
          opacity: 0.15
        }), F = new Bo(L, z);
        F.computeLineDistances(), F.renderOrder = -10, xt.add(F);
      }
      const f = Math.min(g, S) * 0.015;
      for (const b of n) for (const I of t) for (const L of o) {
        const z = [
          new qe(I - f, b, L),
          new qe(I + f, b, L),
          new qe(I, b, L - f),
          new qe(I, b, L + f)
        ], F = new co().setFromPoints(z), k = new tn({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), m = new en(F, k);
        m.renderOrder = -5, xt.add(m);
      }
      xt.traverse((b) => {
        b.material && (Array.isArray(b.material) ? b.material.forEach((I) => {
          I.clippingPlanes = [];
        }) : b.material.clippingPlanes = []);
      }), c.scene.add(xt), c.render();
    }
    let Ht = null;
    function ys() {
      if (!Ht) return;
      const t = tt();
      t && t.scene.remove(Ht), Ht.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Ht = null;
    }
    function an(t, o, n, l, a) {
      ys();
      const c = tt();
      if (!c) return;
      Ht = new hn(), Ht.name = "gridAxes";
      const s = Math.min(...t), i = Math.max(...t), p = Math.min(...o), r = Math.max(...o), d = i - s || 1, g = r - p || 1, S = Math.max(d, g), $ = S * 0.08, y = l || t.map((m, u) => String.fromCharCode(65 + u)), f = a || o.map((m, u) => String(u + 1)), b = S * 0.018, I = o.length <= 1, L = 8947848;
      for (let m = 0; m < t.length; m++) {
        const u = t[m];
        if (I) {
          const E = -$ - b * 1.5;
          Bn(u, 0, 0, u, 0, E + b, L, Ht), Dn(y[m] || `${m}`, u, 0, E, b, Ht);
        } else {
          const E = p - $ - b * 1.5;
          Bn(u, p, 0, u, E + b, 0, L, Ht), Dn(y[m] || `${m}`, u, E, 0, b, Ht);
        }
      }
      if (!I) for (let m = 0; m < o.length; m++) {
        const u = o[m], E = s - $ - b * 1.5;
        Bn(s, u, 0, E + b, u, 0, L, Ht), Dn(f[m] || `${m}`, E, u, 0, b, Ht);
      }
      const z = b * 1.8, F = $ * 1.2, k = $ * 1.2;
      for (let m = 0; m < t.length - 1; m++) {
        const u = t[m], E = t[m + 1], A = Math.abs(E - u), N = (u + E) / 2, W = `${A.toFixed(2)} m`;
        I ? (qn(W, N, 0, -F, z, Ht), _n(u, 0, -F * 0.7, E, 0, -F * 0.7, 16763904, Ht)) : (qn(W, N, p - k, 0, z, Ht), _n(u, p - k * 0.7, 0, E, p - k * 0.7, 0, 16763904, Ht));
      }
      if (!I) for (let m = 0; m < o.length - 1; m++) {
        const u = o[m], E = o[m + 1], A = Math.abs(E - u), N = (u + E) / 2, W = `${A.toFixed(2)} m`;
        qn(W, s - F, N, 0, z, Ht), _n(s - F * 0.7, u, 0, s - F * 0.7, E, 0, 16763904, Ht);
      }
      Ht.traverse((m) => {
        m.material && (Array.isArray(m.material) ? m.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : m.material.clippingPlanes = []);
      }), c.scene.add(Ht), c.render();
    }
    let Qt = null;
    function $s() {
      if (!Qt) return;
      const t = tt();
      t && t.scene.remove(Qt), Qt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Qt = null;
    }
    function On(t, o, n) {
      if ($s(), t.length === 0) return;
      const l = tt();
      if (!l) return;
      Qt = new hn(), Qt.name = "storyLevels";
      const a = Math.min(...o), c = Math.max(...o), s = Math.min(...n), i = Math.max(...n), p = c - a || 1, r = i - s || 1, d = Math.max(p, r), g = d * 0.06, S = n.length <= 1, $ = 4491519, y = d * 0.015;
      for (const f of t) {
        const b = f.elev;
        S ? (ln(a - g, 0, b, c + g, 0, b, $, Qt), Ms(f.name, c + g * 1.5, 0, b, y, Qt)) : (ln(a, s, b, c, s, b, $, Qt), ln(c, s, b, c, i, b, $, Qt), ln(c, i, b, a, i, b, $, Qt), ln(a, i, b, a, s, b, $, Qt), Ms(f.name, a - g * 1.5, s, b, y, Qt));
      }
      Qt.traverse((f) => {
        f.material && (Array.isArray(f.material) ? f.material.forEach((b) => {
          b.clippingPlanes = [];
        }) : f.material.clippingPlanes = []);
      }), l.scene.add(Qt), l.render();
    }
    function ln(t, o, n, l, a, c, s, i) {
      const p = Math.sqrt((l - t) ** 2 + (a - o) ** 2 + (c - n) ** 2) || 1, r = new co().setFromPoints([
        new qe(t, o, n),
        new qe(l, a, c)
      ]), d = new Qo({
        color: s,
        dashSize: p * 0.02,
        gapSize: p * 0.01,
        transparent: true,
        opacity: 0.5
      }), g = new Bo(r, d);
      g.computeLineDistances(), g.renderOrder = 50, i.add(g);
    }
    function Ms(t, o, n, l, a, c) {
      const s = document.createElement("canvas"), i = 512, p = 64;
      s.width = i, s.height = p;
      const r = s.getContext("2d");
      r.fillStyle = "rgba(30,60,120,0.8)";
      const d = 8;
      r.beginPath(), r.moveTo(d, 0), r.lineTo(i - d, 0), r.quadraticCurveTo(i, 0, i, d), r.lineTo(i, p - d), r.quadraticCurveTo(i, p, i - d, p), r.lineTo(d, p), r.quadraticCurveTo(0, p, 0, p - d), r.lineTo(0, d), r.quadraticCurveTo(0, 0, d, 0), r.closePath(), r.fill(), r.fillStyle = "#88bbff", r.font = "bold 38px monospace", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t, i / 2, p / 2);
      const g = new ds(s);
      g.needsUpdate = true;
      const S = new In({
        map: g,
        depthTest: false,
        transparent: true
      }), $ = new Sn(S);
      $.position.set(o, n, l), $.scale.set(a * 8, a, 1), $.renderOrder = 101, c.add($);
    }
    function qn(t, o, n, l, a, c) {
      const s = document.createElement("canvas"), i = 256, p = 64;
      s.width = i, s.height = p;
      const r = s.getContext("2d");
      r.fillStyle = "rgba(0,0,0,0.75)";
      const d = 8;
      r.beginPath(), r.moveTo(d, 0), r.lineTo(i - d, 0), r.quadraticCurveTo(i, 0, i, d), r.lineTo(i, p - d), r.quadraticCurveTo(i, p, i - d, p), r.lineTo(d, p), r.quadraticCurveTo(0, p, 0, p - d), r.lineTo(0, d), r.quadraticCurveTo(0, 0, d, 0), r.closePath(), r.fill(), r.fillStyle = "#ffcc00", r.font = "bold 36px monospace", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t, i / 2, p / 2);
      const g = new Tl(s);
      g.minFilter = zl;
      const S = new In({
        map: g,
        transparent: true,
        depthTest: false
      }), $ = new Sn(S);
      $.position.set(o, n, l);
      const y = i / p;
      $.scale.set(a * y, a, 1), $.renderOrder = 999, c.add($);
    }
    function _n(t, o, n, l, a, c, s, i) {
      const p = [
        new qe(t, o, n),
        new qe(l, a, c)
      ], r = new co().setFromPoints(p), d = new tn({
        color: s,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), g = new Bo(r, d);
      g.renderOrder = 998, i.add(g);
    }
    function Bn(t, o, n, l, a, c, s, i) {
      const p = new co().setFromPoints([
        new qe(t, o, n),
        new qe(l, a, c)
      ]), r = new Qo({
        color: s,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(a - o), Math.abs(c - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(a - o), Math.abs(c - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), d = new Bo(p, r);
      d.computeLineDistances(), i.add(d);
    }
    function Dn(t, o, n, l, a, c) {
      const s = document.createElement("canvas"), i = 128;
      s.width = i, s.height = i;
      const p = s.getContext("2d");
      p.beginPath(), p.arc(i / 2, i / 2, i * 0.42, 0, Math.PI * 2), p.fillStyle = "rgba(255,255,255,0.9)", p.fill(), p.lineWidth = i * 0.04, p.strokeStyle = "#555", p.stroke(), p.fillStyle = "#222", p.font = `bold ${i * 0.45}px Arial`, p.textAlign = "center", p.textBaseline = "middle", p.fillText(t, i / 2, i / 2 + i * 0.02);
      const r = new ds(s);
      r.needsUpdate = true;
      const d = new In({
        map: r,
        depthTest: false,
        transparent: true
      }), g = new Sn(d);
      g.position.set(o, n, l);
      const S = a * 2;
      g.scale.set(S, S, 1), g.renderOrder = 100, c.add(g);
    }
    const ot = {
      addNode(t, o, n) {
        const l = [
          ...e.nodes.val
        ], a = l.length;
        return l.push([
          t,
          o,
          n
        ]), e.nodes.val = l, console.log(`Node ${a} at (${t}, ${o}, ${n})`), nt(), a;
      },
      removeNode(t) {
        const o = [
          ...e.nodes.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Node ${t} not found`);
          return;
        }
        o.splice(t, 1);
        const n = e.elements.val.map(([l, a]) => {
          const c = l > t ? l - 1 : l, s = a > t ? a - 1 : a;
          return l === t || a === t ? null : [
            c,
            s
          ];
        }).filter((l) => l !== null);
        e.nodes.val = o, e.elements.val = n, console.log(`Node ${t} removed`), nt();
      },
      listNodes() {
        const t = e.nodes.val;
        return console.table(t.map((o, n) => ({
          id: n,
          x: o[0],
          y: o[1],
          z: o[2]
        }))), t;
      },
      addFrame(t, o) {
        const n = [
          ...e.elements.val
        ], l = n.length;
        return n.push([
          t,
          o
        ]), e.elements.val = n, console.log(`Element ${l}: node ${t} -> node ${o}`), nt(), l;
      },
      removeFrame(t) {
        const o = [
          ...e.elements.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        o.splice(t, 1), e.elements.val = o, console.log(`Element ${t} removed`), nt();
      },
      listFrames() {
        const t = e.elements.val;
        return console.table(t.map((o, n) => ({
          id: n,
          nodeI: o[0],
          nodeJ: o[1]
        }))), t;
      },
      addSupport(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, l = new Map(n.supports || []);
        l.set(t, o || [
          true,
          true,
          true,
          true,
          true,
          true
        ]), n.supports = l, e.nodeInputs.val = n, console.log(`Support added at node ${t}`), nt();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(t), o.supports = n, e.nodeInputs.val = o, console.log(`Support removed from node ${t}`), nt();
      },
      addLoad(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(t, o), n.loads = l, e.nodeInputs.val = n, console.log(`Load added at node ${t}: [${o.join(", ")}]`), nt();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(t), o.loads = n, e.nodeInputs.val = o, console.log(`Load removed from node ${t}`), nt();
      },
      listSupports() {
        if (!e.nodeInputs) return;
        const t = e.nodeInputs.val.supports;
        if (!t || t.size === 0) {
          console.log("No supports");
          return;
        }
        const o = [];
        return t.forEach((n, l) => o.push({
          node: l,
          dof: n.map((a) => a ? 1 : 0).join("")
        })), console.table(o), t;
      },
      listLoads() {
        if (!e.nodeInputs) return;
        const t = e.nodeInputs.val.loads;
        if (!t || t.size === 0) {
          console.log("No loads");
          return;
        }
        const o = [];
        return t.forEach((n, l) => o.push({
          node: l,
          Fx: n[0],
          Fy: n[1],
          Fz: n[2]
        })), console.table(o), t;
      },
      info() {
        var _a2, _b, _c, _d, _e2, _f;
        const t = e.nodes.val.length, o = e.elements.val.length, n = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0, l = ((_f = (_e2 = (_d = e.nodeInputs) == null ? void 0 : _d.val) == null ? void 0 : _e2.loads) == null ? void 0 : _f.size) || 0;
        return console.log(`Model: ${t} nodes, ${o} elements, ${n} supports, ${l} loads`), {
          nodes: t,
          elements: o,
          supports: n,
          loads: l
        };
      },
      set(t, o) {
        var _a2, _b, _c, _d;
        const n = Ae.querySelectorAll("input[type=checkbox]");
        for (const l of n) {
          const a = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || "", c = l.id || "";
          if (a.toLowerCase().includes(t.toLowerCase()) || c.toLowerCase().includes(t.toLowerCase())) {
            const s = l;
            return s.checked = o !== void 0 ? o : !s.checked, s.dispatchEvent(new Event("change", {
              bubbles: true
            })), console.log(`${a || c}: ${s.checked}`), s.checked;
          }
        }
        console.log(`Setting "${t}" not found. Use cad.settings() to list.`);
      },
      settings() {
        const t = Ae.querySelectorAll("input[type=checkbox]"), o = {};
        return t.forEach((n) => {
          var _a2, _b, _c, _d;
          const l = n, a = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || l.id || "?";
          o[a] = l.checked;
        }), console.table(o), o;
      },
      param(t, o) {
        const n = window.__cad;
        if (n == null ? void 0 : n.setParam) return n.setParam(t, o), console.log(`${t} = ${o}`), o;
        console.log("Parameters not available");
      },
      params() {
        const t = window.__cad;
        if (t == null ? void 0 : t.getParams) {
          const o = t.getParams();
          return console.table(o), o;
        }
        console.log("Parameters not available");
      },
      use(t) {
        const o = window.__cad;
        if (o == null ? void 0 : o.setGenerator) return o.setGenerator(t), console.log(`Generator: ${t}`), t;
      },
      panel(t, o, n) {
        const l = window.__cad;
        if (l == null ? void 0 : l.createCustomPanel) return l.createCustomPanel(t, o, n);
        console.log("Custom panels not available");
      },
      removePanel(t) {
        const o = window.__cad;
        (o == null ? void 0 : o.removeCustomPanel) && (o.removeCustomPanel(t), console.log(`Panel "${t}" removed`));
      },
      refgrid(t, o, n) {
        if (!t) {
          Vt(), console.log("Reference grid cleared");
          return;
        }
        const l = [
          0
        ];
        for (const s of t) l.push(l[l.length - 1] + s);
        const a = [
          0
        ];
        for (const s of o || [
          0
        ]) a.push(a[a.length - 1] + s);
        const c = [
          0
        ];
        for (const s of n || [
          3
        ]) c.push(c[c.length - 1] + s);
        vs(l, a, c), Ve = l.map((s, i) => ({
          label: String.fromCharCode(65 + i),
          coord: s
        })), Qe = a.map((s, i) => ({
          label: `${i + 1}`,
          coord: s
        })), mt = c[c.length - 1], pt = c.map((s, i) => ({
          label: i === 0 ? "Base" : `P${i}`,
          elev: s
        })), an(Ve.map((s) => s.coord), Qe.map((s) => s.coord), mt, Ve.map((s) => s.label), Qe.map((s) => s.label));
        {
          const s = c.map((i, p) => ({
            name: p === 0 ? "Base" : `P${p}`,
            height: p > 0 ? i - c[p - 1] : 0,
            elev: i
          }));
          On(s, Ve.map((i) => i.coord), Qe.map((i) => i.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${a}] Y=[${c}]`), {
          xCoords: l,
          zCoords: a,
          yLevels: c
        };
      },
      build(t) {
        var _a2;
        if (Ve.length === 0 || pt.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const o = (t == null ? void 0 : t.col) || "40x40", n = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [a, c] = o.split("x").map((O) => parseFloat(O) / 100), [s, i] = n.split("x").map((O) => parseFloat(O) / 100), p = Ve.map((O) => O.coord), r = Qe.map((O) => O.coord), d = pt.map((O) => O.elev), g = p.length, S = r.length, $ = d.length, y = $ - 1, f = [], b = {};
        for (let O = 0; O < $; O++) for (let ce = 0; ce < S; ce++) for (let oe = 0; oe < g; oe++) b[`${oe},${ce},${O}`] = f.length, f.push([
          p[oe],
          r[ce],
          d[O]
        ]);
        const I = [], L = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Map();
        for (let O = 0; O < y; O++) for (let ce = 0; ce < S; ce++) for (let oe = 0; oe < g; oe++) {
          const pe = I.length;
          I.push([
            b[`${oe},${ce},${O}`],
            b[`${oe},${ce},${O + 1}`]
          ]), L.add(pe), F.set(pe, O);
        }
        for (let O = 1; O < $; O++) for (let ce = 0; ce < S; ce++) for (let oe = 0; oe < g - 1; oe++) {
          const pe = I.length;
          I.push([
            b[`${oe},${ce},${O}`],
            b[`${oe + 1},${ce},${O}`]
          ]), z.add(pe), F.set(pe, O - 1);
        }
        for (let O = 1; O < $; O++) for (let ce = 0; ce < g; ce++) for (let oe = 0; oe < S - 1; oe++) {
          const pe = I.length;
          I.push([
            b[`${ce},${oe},${O}`],
            b[`${ce},${oe + 1},${O}`]
          ]), z.add(pe), F.set(pe, O - 1);
        }
        const k = ((_a2 = t == null ? void 0 : t.braces) == null ? void 0 : _a2.toLowerCase()) || "", m = /* @__PURE__ */ new Set();
        if (k) {
          const O = k === "all" || k === "x" || k === "perimeter", ce = k === "all" || k === "y" || k === "perimeter";
          for (let oe = 0; oe < y; oe++) {
            if (O) for (let pe = 0; pe < S; pe++) {
              if (k === "perimeter" && pe !== 0 && pe !== S - 1) continue;
              const ee = Math.floor((g - 1) / 2);
              for (let ge = 0; ge < g - 1; ge++) {
                if (k === "perimeter" && ge !== ee) continue;
                const Ie = I.length;
                I.push([
                  b[`${ge},${pe},${oe}`],
                  b[`${ge + 1},${pe},${oe + 1}`]
                ]), m.add(Ie), F.set(Ie, oe);
                const se = I.length;
                I.push([
                  b[`${ge + 1},${pe},${oe}`],
                  b[`${ge},${pe},${oe + 1}`]
                ]), m.add(se), F.set(se, oe);
              }
            }
            if (ce) for (let pe = 0; pe < g; pe++) {
              if (k === "perimeter" && pe !== 0 && pe !== g - 1) continue;
              const ee = Math.floor((S - 1) / 2);
              for (let ge = 0; ge < S - 1; ge++) {
                if (k === "perimeter" && ge !== ee) continue;
                const Ie = I.length;
                I.push([
                  b[`${pe},${ge},${oe}`],
                  b[`${pe},${ge + 1},${oe + 1}`]
                ]), m.add(Ie), F.set(Ie, oe);
                const se = I.length;
                I.push([
                  b[`${pe},${ge + 1},${oe}`],
                  b[`${pe},${ge},${oe + 1}`]
                ]), m.add(se), F.set(se, oe);
              }
            }
          }
        }
        const u = 15100 * Math.sqrt(l) * 10, E = u / (2 * (1 + 0.2)), A = a * c, N = a * c ** 3 / 12, W = c * a ** 3 / 12, x = a * c * (a ** 2 + c ** 2) / 12, w = s * i, v = s * i ** 3 / 12, P = i * s ** 3 / 12, K = s * i * (s ** 2 + i ** 2) / 12, U = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map();
        for (let O = 0; O < I.length; O++) U.set(O, u), le.set(O, E), L.has(O) ? (te.set(O, A), Q.set(O, N), me.set(O, W), de.set(O, x), ke.set(O, {
          type: "rect",
          b: a,
          h: c,
          name: `COL${o}`
        })) : m.has(O) ? (te.set(O, A), Q.set(O, N), me.set(O, W), de.set(O, x), ke.set(O, {
          type: "rect",
          b: a,
          h: c,
          name: `BR${o}`
        })) : (te.set(O, w), Q.set(O, v), me.set(O, P), de.set(O, K), ke.set(O, {
          type: "rect",
          b: s,
          h: i,
          name: `V${n}`
        }));
        const Re = /* @__PURE__ */ new Map();
        for (let O = 0; O < S; O++) for (let ce = 0; ce < g; ce++) Re.set(b[`${ce},${O},0`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        return e.nodes.val = f, e.elements.val = I, e.nodeInputs.val = {
          supports: Re,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: U,
          shearModuli: le,
          areas: te,
          momentsOfInertiaZ: Q,
          momentsOfInertiaY: me,
          torsionalConstants: de,
          sectionShapes: ke
        }, B = L, Y = z, Me = F, console.log(`Built: ${f.length} nodes, ${I.length} elements (${L.size} cols, ${z.size} beams, ${m.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${k ? `, braces=${k}` : ""}`), {
          nodes: f.length,
          elements: I.length
        };
      },
      addCol(t, o, n) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = Ve.findIndex((y) => y.label === t), a = Qe.findIndex((y) => y.label === o);
        if (l < 0) {
          console.log(`Axis "${t}" not found. Available: ${Ve.map((y) => y.label)}`);
          return;
        }
        if (a < 0) {
          console.log(`Axis "${o}" not found. Available: ${Qe.map((y) => y.label)}`);
          return;
        }
        const c = Ve[l].coord, s = Qe[a].coord, i = [
          ...e.nodes.val
        ], p = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ];
        (_b = e.elementInputs) == null ? void 0 : _b.val;
        const r = (y) => {
          const f = i.findIndex((b) => Math.abs(b[0] - c) < 1e-3 && Math.abs(b[1] - s) < 1e-3 && Math.abs(b[2] - y) < 1e-3);
          return f >= 0 ? f : (i.push([
            c,
            s,
            y
          ]), i.length - 1);
        }, d = n ? [
          pt.findIndex((y) => y.label === n)
        ] : Array.from({
          length: pt.length - 1
        }, (y, f) => f + 1), g = new Map(((_d = (_c = e.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), S = r(pt[0].elev);
        g.has(S) || g.set(S, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        let $ = 0;
        for (const y of d) {
          if (y < 1 || y >= pt.length) continue;
          const f = r(pt[y - 1].elev), b = r(pt[y].elev);
          p.push([
            f,
            b
          ]), B.add(p.length - 1), Me.set(p.length - 1, y - 1), $++;
        }
        return e.nodes.val = i, e.elements.val = p, e.nodeInputs.val = {
          ...e.nodeInputs.val,
          supports: g,
          loads: ((_f = (_e2 = e.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${$} column(s) at ${t}-${o}${n ? ` story ${n}` : ""}`), $;
      },
      addBeam(t, o, n, l, a) {
        var _a2;
        const c = Ve.findIndex((F) => F.label === t), s = Qe.findIndex((F) => F.label === o), i = Ve.findIndex((F) => F.label === n), p = Qe.findIndex((F) => F.label === l), r = pt.findIndex((F) => F.label === a);
        if (c < 0 || s < 0 || i < 0 || p < 0) {
          console.log("Axis not found");
          return;
        }
        if (r < 1) {
          console.log(`Story "${a}" not found. Available: ${pt.filter((F) => F.label !== "Base").map((F) => F.label)}`);
          return;
        }
        const d = Ve[c].coord, g = Qe[s].coord, S = Ve[i].coord, $ = Qe[p].coord, y = pt[r].elev, f = [
          ...e.nodes.val
        ], b = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], I = (F, k, m) => {
          const u = f.findIndex((E) => Math.abs(E[0] - F) < 1e-3 && Math.abs(E[1] - k) < 1e-3 && Math.abs(E[2] - m) < 1e-3);
          return u >= 0 ? u : (f.push([
            F,
            k,
            m
          ]), f.length - 1);
        }, L = I(d, g, y), z = I(S, $, y);
        return b.push([
          L,
          z
        ]), Y.add(b.length - 1), Me.set(b.length - 1, r - 1), e.nodes.val = f, e.elements.val = b, console.log(`Added beam ${t}-${o} \u2192 ${n}-${l} at ${a}`), b.length - 1;
      },
      addBrace(t, o, n, l, a, c) {
        var _a2;
        const s = Ve.findIndex((u) => u.label === t), i = Qe.findIndex((u) => u.label === o), p = pt.findIndex((u) => u.label === n), r = Ve.findIndex((u) => u.label === l), d = Qe.findIndex((u) => u.label === a), g = pt.findIndex((u) => u.label === c);
        if (s < 0 || i < 0 || p < 0) {
          console.log(`Point 1 not found: ${t}-${o}@${n}`);
          return;
        }
        if (r < 0 || d < 0 || g < 0) {
          console.log(`Point 2 not found: ${l}-${a}@${c}`);
          return;
        }
        const S = Ve[s].coord, $ = Qe[i].coord, y = pt[p].elev, f = Ve[r].coord, b = Qe[d].coord, I = pt[g].elev, L = [
          ...e.nodes.val
        ], z = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], F = (u, E, A) => {
          const N = L.findIndex((W) => Math.abs(W[0] - u) < 1e-3 && Math.abs(W[1] - E) < 1e-3 && Math.abs(W[2] - A) < 1e-3);
          return N >= 0 ? N : (L.push([
            u,
            E,
            A
          ]), L.length - 1);
        }, k = F(S, $, y), m = F(f, b, I);
        return z.push([
          k,
          m
        ]), Me.set(z.length - 1, Math.min(p, g)), e.nodes.val = L, e.elements.val = z, console.log(`Added brace ${t}-${o}@${n} \u2192 ${l}-${a}@${c}`), z.length - 1;
      },
      help() {
        return `=== CLI Commands ===
MODEL:
  cad.clear()                    New empty model
  cad.info()                     Model summary
  cad.addNode(x, y, z)          Add node (Y-up)
  cad.addFrame(i, j)            Add frame element
  cad.removeNode(i)             Remove node
  cad.removeFrame(i)            Remove element
  cad.listNodes()               List all nodes
  cad.listFrames()              List all elements

BOUNDARY:
  cad.addSupport(n)             Fixed support at node n
  cad.addSupport(n, [1,1,1,0,0,0])  Custom DOFs
  cad.removeSupport(n)          Remove support
  cad.addLoad(n, [fx,fy,fz,mx,my,mz])
  cad.removeLoad(n)
  cad.listSupports()            List supports
  cad.listLoads()               List loads

GENERATORS:
  cad.model3d()                 3D building (default 2x2, 3 floors)
  cad.model3d({bx:[5,6], bz:[4], h:[3.5,3], col:"40x40", viga:"25x30", fc:210})
  cad.use("Edificio")           Switch to parametric generator
  cad.frame([5,5], [3,3])       2D portal frame
  cad.building([5,5],[4],[3])   3D building (parametric)
  cad.galpon(12, 20, 6, 3)     Galpon/warehouse

REFERENCE GRID:
  cad.refgrid([5,5],[4,4],[3.5,3])  Construction grid lines
  cad.refgrid()                     Clear reference grid

SETTINGS & PARAMS:
  cad.settings()                List all settings
  cad.set("nodes", true)        Toggle setting on/off
  cad.set("deform")             Toggle setting
  cad.params()                  List all parameters
  cad.param("Vanos X", 3)       Set parameter value

CUSTOM PANELS (create your own Tweakpane):
  cad.panel("Grilla", {
    svx: { value: [2,3,4], label: "Vanos X" },
    svy: { value: [3.44,4,5], label: "Vanos Y" },
    sp:  { value: [3.5,3,3], label: "Alturas" },
    fc:  { value: 210, min:100, max:500, label: "f'c" },
    col: { value: "40x40", options:["30x30","40x40"], label: "Col" },
  }, (p) => { cad.refgrid(p.svx, p.svy, p.sp); })
  cad.removePanel("Grilla")     Remove custom panel

VIEW:
  cad.view("3d")                3D view
  cad.view("plan")              Plan view
  cad.view("ex")                X elevation
  cad.view("ey")                Y elevation
`;
      },
      model3d(t) {
        ot.clear();
        const o = (t == null ? void 0 : t.bx) || [
          5,
          5
        ], n = (t == null ? void 0 : t.bz) || [
          4,
          4
        ], l = (t == null ? void 0 : t.h) || [
          3.5,
          3,
          3
        ], a = (t == null ? void 0 : t.col) || "40x40", c = (t == null ? void 0 : t.viga) || "30x40", s = (t == null ? void 0 : t.fc) || 210, [i, p] = a.split("x").map((ee) => parseFloat(ee) / 100), [r, d] = c.split("x").map((ee) => parseFloat(ee) / 100), g = [
          0
        ];
        for (const ee of o) g.push(g[g.length - 1] + ee);
        const S = [
          0
        ];
        for (const ee of n) S.push(S[S.length - 1] + ee);
        const $ = [
          0
        ];
        for (const ee of l) $.push($[$.length - 1] + ee);
        const y = g.length, f = S.length, b = $.length, I = l.length, L = [], z = {};
        for (let ee = 0; ee < b; ee++) for (let ge = 0; ge < f; ge++) for (let Ie = 0; Ie < y; Ie++) z[`${Ie},${ee},${ge}`] = L.length, L.push([
          g[Ie],
          $[ee],
          S[ge]
        ]);
        const F = [], k = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < I; ee++) for (let ge = 0; ge < f; ge++) for (let Ie = 0; Ie < y; Ie++) {
          const se = F.length;
          F.push([
            z[`${Ie},${ee},${ge}`],
            z[`${Ie},${ee + 1},${ge}`]
          ]), k.add(se), u.set(se, ee);
        }
        for (let ee = 1; ee < b; ee++) for (let ge = 0; ge < f; ge++) for (let Ie = 0; Ie < y - 1; Ie++) {
          const se = F.length;
          F.push([
            z[`${Ie},${ee},${ge}`],
            z[`${Ie + 1},${ee},${ge}`]
          ]), m.add(se), u.set(se, ee - 1);
        }
        for (let ee = 1; ee < b; ee++) for (let ge = 0; ge < y; ge++) for (let Ie = 0; Ie < f - 1; Ie++) {
          const se = F.length;
          F.push([
            z[`${ge},${ee},${Ie}`],
            z[`${ge},${ee},${Ie + 1}`]
          ]), m.add(se), u.set(se, ee - 1);
        }
        const A = 15100 * Math.sqrt(s) * 10, N = A / (2 * (1 + 0.2)), W = i * p, x = i * p ** 3 / 12, w = p * i ** 3 / 12, v = i * p * (i ** 2 + p ** 2) / 12, P = r * d, K = r * d ** 3 / 12, U = d * r ** 3 / 12, le = r * d * (r ** 2 + d ** 2) / 12, te = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < F.length; ee++) te.set(ee, A), Q.set(ee, N), k.has(ee) ? (me.set(ee, W), de.set(ee, x), ke.set(ee, w), Re.set(ee, v), O.set(ee, {
          type: "rect",
          b: i,
          h: p,
          name: `COL${a}`
        })) : (me.set(ee, P), de.set(ee, K), ke.set(ee, U), Re.set(ee, le), O.set(ee, {
          type: "rect",
          b: r,
          h: d,
          name: `V${c}`
        }));
        const ce = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < f; ee++) for (let ge = 0; ge < y; ge++) ce.set(z[`${ge},0,${ee}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        e.nodes.val = L, e.elements.val = F, e.nodeInputs.val = {
          supports: ce,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: te,
          shearModuli: Q,
          areas: me,
          momentsOfInertiaZ: de,
          momentsOfInertiaY: ke,
          torsionalConstants: Re,
          sectionShapes: O
        }, B = k, Y = m, Me = u, Ve = g.map((ee, ge) => ({
          label: String.fromCharCode(65 + ge),
          coord: ee
        })), Qe = S.map((ee, ge) => ({
          label: `${ge + 1}`,
          coord: ee
        })), mt = $[$.length - 1], an(Ve.map((ee) => ee.coord), Qe.map((ee) => ee.coord), mt, Ve.map((ee) => ee.label), Qe.map((ee) => ee.label));
        {
          const ee = $.map((ge, Ie) => ({
            name: Ie === 0 ? "Base" : `P${Ie}`,
            height: Ie > 0 ? ge - $[Ie - 1] : 0,
            elev: ge
          }));
          On(ee, g, S);
        }
        const oe = Ae.querySelector("#cad3d-axis-buttons");
        if (oe) {
          oe.style.display = "flex";
          const ee = Ve.map((Ie) => Ie.label), ge = Qe.map((Ie) => Ie.label);
          oe.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const Ie of ee) oe.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${Ie}">${Ie}</button>`;
          oe.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const Ie of ge) oe.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${Ie}">${Ie}</button>`;
        }
        const pe = Ae.querySelector("#cad3d-floor-buttons");
        if (pe) {
          pe.style.display = "flex", pe.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let ee = 0; ee < I; ee++) pe.innerHTML += `<button class="floor-btn" data-floor="${ee}">P${ee + 1}</button>`;
        }
        return vs(g, S, $), nt(), console.log(`Model3D: ${L.length}n ${F.length}e | ${y}x${f} grid, ${I} floors | COL${a} V${c} f'c=${s}`), {
          nodes: L.length,
          elements: F.length,
          columns: k.size,
          beams: m.size
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), B = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), Ve = [], Qe = [], mt = 0, ys(), $s(), Vt();
        const t = Ae.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), nt();
      },
      frame(t, o, n = 0, l = 0) {
        ot.clear();
        const a = [];
        n > 0 && a.push(-n);
        let c = 0;
        a.push(c);
        for (const y of t) c += y, a.push(c);
        l > 0 && a.push(c + l);
        const s = [
          0
        ];
        let i = 0;
        for (const y of o) i += y, s.push(i);
        const p = (y) => n > 0 && y === 0 || l > 0 && y === a.length - 1, r = {}, d = [];
        for (let y = 0; y < s.length; y++) for (let f = 0; f < a.length; f++) y === 0 && p(f) || (r[`${f},${y}`] = d.length, d.push([
          a[f],
          0,
          s[y]
        ]));
        const g = [];
        B = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set();
        for (let y = 0; y < s.length - 1; y++) for (let f = 0; f < a.length; f++) p(f) || (B.add(g.length), g.push([
          r[`${f},${y}`],
          r[`${f},${y + 1}`]
        ]));
        for (let y = 1; y < s.length; y++) for (let f = 0; f < a.length - 1; f++) Y.add(g.length), g.push([
          r[`${f},${y}`],
          r[`${f + 1},${y}`]
        ]);
        const S = /* @__PURE__ */ new Map(), $ = bt();
        for (let y = 0; y < a.length; y++) {
          if (p(y)) continue;
          const f = `${y},0`;
          r[f] !== void 0 && S.set(r[f], [
            ...$
          ]);
        }
        return e.nodes.val = d, e.elements.val = g, e.nodeInputs && (e.nodeInputs.val = {
          supports: S
        }), Ve = [
          ...a
        ], Qe = [
          0
        ], mt = s[s.length - 1] || 0, setTimeout(() => {
          It(), an(a, [
            0
          ]), Kn(), Zn();
        }, 50), nt(), {
          nodes: d.length,
          elements: g.length
        };
      },
      building(t, o, n, l = 3, a = 0, c = 0, s = 0, i = 0, p = 1) {
        ot.clear();
        const r = [];
        a > 0 && r.push(-a), r.push(0);
        for (const u of t) r.push(r[r.length - 1] + u);
        c > 0 && r.push(r[r.length - 1] + c);
        const d = [];
        s > 0 && d.push(-s), d.push(0);
        for (const u of o) d.push(d[d.length - 1] + u);
        i > 0 && d.push(d[d.length - 1] + i);
        const g = [
          0
        ];
        for (const u of n) g.push(g[g.length - 1] + u);
        const S = (u) => a > 0 && u === 0 || c > 0 && u === r.length - 1, $ = (u) => s > 0 && u === 0 || i > 0 && u === d.length - 1, y = (u, E) => S(u) || $(E), f = [], b = {};
        for (let u = 0; u < g.length; u++) for (let E = 0; E < d.length; E++) for (let A = 0; A < r.length; A++) u === 0 && y(A, E) || (b[`${A},${E},${u}`] = f.length, f.push([
          r[A],
          d[E],
          g[u]
        ]));
        const I = f.length, L = [];
        B = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map();
        const z = [];
        for (let u = 0; u < g.length - 1; u++) for (let E = 0; E < d.length; E++) for (let A = 0; A < r.length; A++) y(A, E) || z.push({
          el: [
            b[`${A},${E},${u}`],
            b[`${A},${E},${u + 1}`]
          ],
          floor: u
        });
        for (const { el: [u, E], floor: A } of z) {
          if (p <= 1) {
            B.add(L.length), Me.set(L.length, A), L.push([
              u,
              E
            ]);
            continue;
          }
          const N = f[u], W = f[E];
          let x = u;
          for (let w = 1; w < p; w++) {
            const v = w / p, P = f.length;
            f.push([
              N[0] + (W[0] - N[0]) * v,
              N[1] + (W[1] - N[1]) * v,
              N[2] + (W[2] - N[2]) * v
            ]), B.add(L.length), Me.set(L.length, A), L.push([
              x,
              P
            ]), x = P;
          }
          B.add(L.length), Me.set(L.length, A), L.push([
            x,
            E
          ]);
        }
        Le = /* @__PURE__ */ new Map();
        const F = [];
        for (let u = 1; u < g.length; u++) for (let E = 0; E < d.length; E++) for (let A = 0; A < r.length - 1; A++) F.push({
          el: [
            b[`${A},${E},${u}`],
            b[`${A + 1},${E},${u}`]
          ],
          floor: u - 1,
          dir: "x",
          bay: A
        });
        for (let u = 1; u < g.length; u++) for (let E = 0; E < r.length; E++) for (let A = 0; A < d.length - 1; A++) F.push({
          el: [
            b[`${E},${A},${u}`],
            b[`${E},${A + 1},${u}`]
          ],
          floor: u - 1,
          dir: "y",
          bay: A
        });
        for (const { el: [u, E], floor: A, dir: N, bay: W } of F) {
          const x = f[u], w = f[E];
          let v = u;
          for (let K = 1; K < l; K++) {
            const U = K / l, le = f.length;
            f.push([
              x[0] + (w[0] - x[0]) * U,
              x[1] + (w[1] - x[1]) * U,
              x[2] + (w[2] - x[2]) * U
            ]);
            const te = L.length;
            Y.add(te), Me.set(te, A), Le.set(te, {
              dir: N,
              bay: W
            }), L.push([
              v,
              le
            ]), v = le;
          }
          const P = L.length;
          Y.add(P), Me.set(P, A), Le.set(P, {
            dir: N,
            bay: W
          }), L.push([
            v,
            E
          ]);
        }
        if (ct = /* @__PURE__ */ new Set(), Te && Ce > 0) {
          const u = (E, A, N) => {
            for (let x = 0; x < f.length; x++) if (Math.abs(f[x][0] - E) < 1e-6 && Math.abs(f[x][1] - A) < 1e-6 && Math.abs(f[x][2] - N) < 1e-6) return x;
            const W = f.length;
            return f.push([
              E,
              A,
              N
            ]), W;
          };
          for (let E = 1; E < g.length; E++) if (Ue === "x") for (let A = 0; A < d.length - 1; A++) {
            const N = d[A], W = d[A + 1];
            for (let x = 1; x <= Ce; x++) {
              const w = N + x / (Ce + 1) * (W - N), v = [];
              for (let P = 0; P < r.length; P++) v.push(u(r[P], w, g[E]));
              for (let P = 0; P < r.length - 1; P++) {
                const K = L.length;
                ct.add(K), Y.add(K), Me.set(K, E - 1), Le.set(K, {
                  dir: "x",
                  bay: P
                }), L.push([
                  v[P],
                  v[P + 1]
                ]);
              }
            }
          }
          else for (let A = 0; A < r.length - 1; A++) {
            const N = r[A], W = r[A + 1];
            for (let x = 1; x <= Ce; x++) {
              const w = N + x / (Ce + 1) * (W - N), v = [];
              for (let P = 0; P < d.length; P++) v.push(u(w, d[P], g[E]));
              for (let P = 0; P < d.length - 1; P++) {
                const K = L.length;
                ct.add(K), Y.add(K), Me.set(K, E - 1), Le.set(K, {
                  dir: "y",
                  bay: P
                }), L.push([
                  v[P],
                  v[P + 1]
                ]);
              }
            }
          }
        }
        const k = /* @__PURE__ */ new Map(), m = bt();
        for (let u = 0; u < d.length; u++) for (let E = 0; E < r.length; E++) y(E, u) || k.set(b[`${E},${u},0`], [
          ...m
        ]);
        ue = /* @__PURE__ */ new Set();
        for (const u of ye) {
          const E = g.length - 1, A = u.floors.includes(-1) ? Array.from({
            length: E
          }, (N, W) => W) : u.floors.filter((N) => N < E);
          for (const N of A) {
            let W, x, w, v;
            u.dir === "x" ? (W = u.bay, w = u.bay + 1, x = u.axisIdx, v = u.axisIdx) : (W = u.axisIdx, w = u.axisIdx, x = u.bay, v = u.bay + 1);
            const P = b[`${W},${x},${N}`], K = b[`${W},${x},${N + 1}`];
            let U, le;
            if (u.dir === "x" ? (U = b[`${w},${v},${N}`], le = b[`${w},${v},${N + 1}`]) : (U = b[`${w},${v},${N}`], le = b[`${w},${v},${N + 1}`]), P === void 0 || U === void 0 || K === void 0 || le === void 0) continue;
            const te = he, Q = Ge, me = f[P], de = f[U], ke = f[K], Re = f[le], O = [];
            for (let ce = 0; ce <= Q; ce++) {
              const oe = [], pe = ce / Q;
              for (let ee = 0; ee <= te; ee++) {
                const ge = ee / te, Ie = (1 - pe) * ((1 - ge) * me[0] + ge * de[0]) + pe * ((1 - ge) * ke[0] + ge * Re[0]), se = (1 - pe) * ((1 - ge) * me[1] + ge * de[1]) + pe * ((1 - ge) * ke[1] + ge * Re[1]), we = (1 - pe) * ((1 - ge) * me[2] + ge * de[2]) + pe * ((1 - ge) * ke[2] + ge * Re[2]);
                ce === 0 && ee === 0 ? oe.push(P) : ce === 0 && ee === te ? oe.push(U) : ce === Q && ee === 0 ? oe.push(K) : ce === Q && ee === te ? oe.push(le) : (oe.push(f.length), f.push([
                  Ie,
                  se,
                  we
                ]));
              }
              O.push(oe);
            }
            for (let ce = 0; ce < Q; ce++) for (let oe = 0; oe < te; oe++) {
              const pe = O[ce][oe], ee = O[ce][oe + 1], ge = O[ce + 1][oe + 1], Ie = O[ce + 1][oe], se = L.length;
              ue.add(se), Me.set(se, N), L.push([
                pe,
                ee,
                ge,
                Ie
              ]);
            }
            if (N === 0) for (let ce = 0; ce <= te; ce++) {
              const oe = O[0][ce];
              oe >= I && k.set(oe, [
                ...m
              ]);
            }
          }
        }
        if (Ot = /* @__PURE__ */ new Set(), Ze) {
          const u = l, E = l, A = /* @__PURE__ */ new Map(), N = (W, x, w) => `${Math.round(W * 1e4)},${Math.round(x * 1e4)},${Math.round(w * 1e4)}`;
          for (let W = 0; W < f.length; W++) A.set(N(f[W][0], f[W][1], f[W][2]), W);
          for (let W = 1; W < g.length; W++) {
            const x = g[W];
            for (let w = 0; w < r.length - 1; w++) for (let v = 0; v < d.length - 1; v++) {
              const P = r[w], K = r[w + 1], U = d[v], le = d[v + 1], te = [];
              for (let Q = 0; Q <= E; Q++) {
                const me = [];
                for (let de = 0; de <= u; de++) {
                  const ke = P + de / u * (K - P), Re = U + Q / E * (le - U);
                  if (Q === 0 && de === 0) me.push(b[`${w},${v},${W}`]);
                  else if (Q === 0 && de === u) me.push(b[`${w + 1},${v},${W}`]);
                  else if (Q === E && de === 0) me.push(b[`${w},${v + 1},${W}`]);
                  else if (Q === E && de === u) me.push(b[`${w + 1},${v + 1},${W}`]);
                  else {
                    const O = N(ke, Re, x), ce = A.get(O);
                    if (ce !== void 0) me.push(ce);
                    else {
                      const oe = f.length;
                      f.push([
                        ke,
                        Re,
                        x
                      ]), A.set(O, oe), me.push(oe);
                    }
                  }
                }
                te.push(me);
              }
              for (let Q = 0; Q < E; Q++) for (let me = 0; me < u; me++) {
                const de = te[Q][me], ke = te[Q][me + 1], Re = te[Q + 1][me + 1], O = te[Q + 1][me], ce = L.length;
                Ot.add(ce), Me.set(ce, W - 1), L.push([
                  de,
                  ke,
                  Re,
                  O
                ]);
              }
            }
          }
        }
        if (Dt && Mt) {
          const u = Mt === "all" || Mt === "x" || Mt === "perimeter", E = Mt === "all" || Mt === "y" || Mt === "perimeter", A = g.length - 1;
          for (let N = 0; N < A; N++) {
            if (u) for (let W = 0; W < d.length; W++) {
              if (Mt === "perimeter" && W !== 0 && W !== d.length - 1) continue;
              const x = Math.floor((r.length - 1) / 2);
              for (let w = 0; w < r.length - 1; w++) {
                if (Mt === "perimeter" && w !== x || y(w, W) || y(w + 1, W)) continue;
                const v = b[`${w},${W},${N}`], P = b[`${w + 1},${W},${N + 1}`], K = b[`${w + 1},${W},${N}`], U = b[`${w},${W},${N + 1}`];
                v !== void 0 && P !== void 0 && (L.push([
                  v,
                  P
                ]), Me.set(L.length - 1, N)), K !== void 0 && U !== void 0 && (L.push([
                  K,
                  U
                ]), Me.set(L.length - 1, N));
              }
            }
            if (E) for (let W = 0; W < r.length; W++) {
              if (Mt === "perimeter" && W !== 0 && W !== r.length - 1) continue;
              const x = Math.floor((d.length - 1) / 2);
              for (let w = 0; w < d.length - 1; w++) {
                if (Mt === "perimeter" && w !== x || y(W, w) || y(W, w + 1)) continue;
                const v = b[`${W},${w},${N}`], P = b[`${W},${w + 1},${N + 1}`], K = b[`${W},${w + 1},${N}`], U = b[`${W},${w},${N + 1}`];
                v !== void 0 && P !== void 0 && (L.push([
                  v,
                  P
                ]), Me.set(L.length - 1, N)), K !== void 0 && U !== void 0 && (L.push([
                  K,
                  U
                ]), Me.set(L.length - 1, N));
              }
            }
          }
        }
        return e.nodes.val = f, e.elements.val = L, e.nodeInputs && (e.nodeInputs.val = {
          supports: k
        }), Ve = [
          ...r
        ], Qe = [
          ...d
        ], mt = g[g.length - 1] || 0, setTimeout(() => {
          It(), an(r, d), Kn(), Zn();
        }, 50), nt(), {
          nodes: f.length,
          elements: L.length,
          nJointNodes: I
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, a = 8, c = 4) {
        ot.clear();
        const s = [], i = [], p = ($) => n + l * (1 - Math.pow(2 * $ / t - 1, 2)), r = [], d = c + 1;
        for (let $ = 0; $ < d; $++) {
          const y = [], f = o / c * $;
          y.push(s.length), s.push([
            0,
            f,
            0
          ]), y.push(s.length), s.push([
            t,
            f,
            0
          ]), y.push(s.length), s.push([
            0,
            f,
            n
          ]);
          for (let b = 1; b < a; b++) {
            const I = t / a * b;
            y.push(s.length), s.push([
              I,
              f,
              p(I)
            ]);
          }
          y.push(s.length), s.push([
            t,
            f,
            n
          ]), r.push(y);
        }
        for (let $ = 0; $ < d; $++) {
          const y = r[$];
          i.push([
            y[0],
            y[2]
          ]), i.push([
            y[1],
            y[y.length - 1]
          ]);
          for (let f = 2; f < y.length - 1; f++) i.push([
            y[f],
            y[f + 1]
          ]);
        }
        for (let $ = 0; $ < c; $++) for (let y = 2; y < r[0].length; y++) i.push([
          r[$][y],
          r[$ + 1][y]
        ]);
        for (let $ = 0; $ < c; $++) for (let y = 2; y < r[0].length - 1; y += 2) i.push([
          r[$][y],
          r[$ + 1][y + 1]
        ]);
        const g = /* @__PURE__ */ new Map(), S = bt();
        for (let $ = 0; $ < d; $++) g.set(r[$][0], [
          ...S
        ]), g.set(r[$][1], [
          ...S
        ]);
        return e.nodes.val = s, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
          supports: g
        }), nt(), {
          nodes: s.length,
          elements: i.length
        };
      },
      example(t) {
        var _a2, _b, _c, _d;
        if (!t) {
          console.log("Ejemplos: truss, beams, 3d, portico, edificio, galpon");
          return;
        }
        switch (t) {
          case "truss": {
            _e.colMat = 1, _e.vigaMat = 1, ot.clear(), at("truss"), Ss();
            break;
          }
          case "beams": {
            _e.colMat = 0, _e.vigaMat = 0, _e.colShape = 0, ot.clear(), at("beams"), Is();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            _e.colMat = 1, _e.vigaMat = 1, ot.clear(), at("3d"), ks();
            break;
          }
          case "portico": {
            _e.colMat = 0, _e.vigaMat = 0, _e.colShape = 0, at("frame"), Oe();
            break;
          }
          case "edificio": {
            at("edificio"), _e.colMat = 0, _e.vigaMat = 0, _e.colShape = 0, ye = [], Ze = false, Te = false, Dt = false, Oe();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            at("edificio"), _e.colMat = 1, _e.vigaMat = 1, _e.steelColType = 0, _e.steelVigaType = 0, ye = [], Te = true, Ce = 2;
            const o = re.reduce((l, a) => l + a, 0) / re.length, n = ne.reduce((l, a) => l + a, 0) / ne.length;
            Ue = o >= n ? "y" : "x", Ze = true, dt = 0.08, Dt = false, Oe();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            at("edificio"), _e.colMat = 1, _e.vigaMat = 1, _e.steelColType = 0, _e.steelVigaType = 0, ye = [], Te = true, Ce = 2;
            const o = re.reduce((l, a) => l + a, 0) / re.length, n = ne.reduce((l, a) => l + a, 0) / ne.length;
            Ue = o >= n ? "y" : "x", Ze = true, dt = 0.08, Dt = true, Mt = "perimeter", Oe();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            at("edificio"), _e.colMat = 0, _e.vigaMat = 0, _e.colShape = 0, Te = false;
            const o = Math.round(((_a2 = G.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = G.nVanosY) == null ? void 0 : _b.val) ?? 2);
            ye = [
              {
                dir: "x",
                bay: 0,
                axisIdx: 0,
                floors: [
                  -1
                ]
              },
              {
                dir: "x",
                bay: o - 1,
                axisIdx: n,
                floors: [
                  -1
                ]
              },
              {
                dir: "y",
                bay: 0,
                axisIdx: 0,
                floors: [
                  -1
                ]
              },
              {
                dir: "y",
                bay: n - 1,
                axisIdx: o,
                floors: [
                  -1
                ]
              }
            ], Ze = true, dt = 0.15, Oe();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            at("edificio"), _e.colMat = 2, _e.vigaMat = 0, Te = false;
            const o = Math.round(((_c = G.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = G.nVanosY) == null ? void 0 : _d.val) ?? 2);
            ye = [
              {
                dir: "x",
                bay: 0,
                axisIdx: 0,
                floors: [
                  -1
                ]
              },
              {
                dir: "x",
                bay: o - 1,
                axisIdx: n,
                floors: [
                  -1
                ]
              }
            ], Ze = true, dt = 0.12, Oe();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            at("edificio"), G.nPisos && (G.nPisos.val = 1), G.hPiso && (G.hPiso.val = 4.5), G.nVanosX && (G.nVanosX.val = 3), G.nVanosY && (G.nVanosY.val = 2), G.nSubViga && (G.nSubViga.val = 3), re = [
              6,
              6,
              6
            ], ne = [
              5,
              5
            ], _e.colMat = 1, _e.vigaMat = 1, _e.steelColType = 0, _e.steelVigaType = 0, ye = [], Te = true, Ce = 2, Ue = re[0] >= ne[0] ? "y" : "x", Ze = true, dt = 0.08, ut = 3, Tt = 3, Oe();
            break;
          }
          case "galpon": {
            at("galpon"), _e.colMat = 1, _e.vigaMat = 1, Oe();
            break;
          }
          case "barra": {
            at("barra"), Oe();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            ot.clear(), at("placa-3q"), Ts();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            ot.clear(), at("placa-q4"), zs();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            ot.clear(), at("losa-rect"), Ls();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            ot.clear(), at("losa-plana"), As();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            ot.clear(), at("viga-alta"), Cs();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            ot.clear(), at("muro-contencion"), Ps();
            break;
          }
          case "zapata":
          case "footing": {
            ot.clear(), at("zapata"), Fs();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            ot.clear(), at("placa-orificios"), Rs();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            ot.clear(), at("col-placa"), Ns();
            break;
          }
          case "talud":
          case "slope": {
            ot.clear(), at("talud"), Os();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            ot.clear(), at("eiffel"), Qs();
            break;
          }
          case "arco":
          case "arco-gateway": {
            ot.clear(), at("arco"), ea();
            break;
          }
          case "puente":
          case "puente-colgante": {
            ot.clear(), at("puente"), ta();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            ot.clear(), at("twisted"), oa();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            ot.clear(), at("burj"), na();
            break;
          }
          case "opera":
          case "sydney-opera": {
            ot.clear(), at("opera"), sa();
            break;
          }
          case "diagrid":
          case "gherkin": {
            ot.clear(), at("diagrid"), aa();
            break;
          }
          case "muro-q4":
          case "shear-wall":
          case "muro-cantilever": {
            ot.clear(), at("muro-q4"), rs();
            break;
          }
          case "viga-q4":
          case "cantilever-beam":
          case "viga-cantilever": {
            ot.clear(), at("viga-q4"), la();
            break;
          }
          case "placa-xz":
          case "placa-cantilever":
          case "losa-cantilever": {
            ot.clear(), at("placa-xz"), ia();
            break;
          }
          case "pergola":
          case "cubierta": {
            ot.clear(), at("pergola"), ra();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, o = 10, n = 16, l = 16, a = "simply-supported", c = -10, s = 0.2, i = 3e7, p = 0.3, r = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][r]}]: ${t}\xD7${o}, ${n}\xD7${l} elem, BC=${a}, q=${c}, t=${s}`);
        const g = performance.now(), S = cs({
          E: i,
          nu: p,
          thickness: s,
          meshLx: t,
          meshLy: o,
          meshNx: n,
          meshNy: l,
          bcType: a,
          pressure: c,
          theoryType: r
        }), $ = performance.now() - g;
        console.log(`Solved in ${$.toFixed(1)} ms`), console.log(`w_max = ${S.maxW.toExponential(6)}`), console.log(`w_center = ${(S.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${S.maxMxx.toExponential(4)}, Myy_max = ${S.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${S.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${S.maxQx.toExponential(4)}, Qy_max = ${S.maxQy.toExponential(4)}`);
        const y = S.nodeResults.map((z) => [
          z.x,
          z.y,
          0
        ]), f = S.elementResults.map((z) => [
          ...z.nodes
        ]);
        e.nodes.val = y, e.elements.val = f;
        const b = /* @__PURE__ */ new Map();
        S.nodeResults.forEach((z, F) => {
          b.set(F, [
            0,
            0,
            z.w,
            z.bx,
            z.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: b
        });
        const I = /* @__PURE__ */ new Map();
        S.nodeResults.forEach((z, F) => {
          (z.x < 1e-10 || z.x > t - 1e-10 || z.y < 1e-10 || z.y > o - 1e-10) && I.set(F, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        });
        const L = /* @__PURE__ */ new Map();
        if (Math.abs(c) > 1e-30) {
          const z = c * t * o / y.length;
          y.forEach((F, k) => {
            I.has(k) || L.set(k, [
              0,
              0,
              z,
              0,
              0,
              0
            ]);
          });
        }
        if (e.nodeInputs && (e.nodeInputs.val = {
          supports: I,
          loads: L
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const z = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
          S.elementResults.forEach((m, u) => {
            z.set(u, [
              m.Mxx,
              m.Mxx,
              m.Mxx
            ]), F.set(u, [
              m.Myy,
              m.Myy,
              m.Myy
            ]), k.set(u, [
              m.Mxy,
              m.Mxy,
              m.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: z,
            bendingYY: F,
            bendingXY: k
          };
        }
        return setTimeout(() => It(), 50), nt(), S;
      },
      set(t, o) {
        G[t] ? (G[t].val = o, console.log(`${t} = ${o}`), mo(), Oe()) : gt[t] ? (gt[t].val = o, console.log(`${t} = ${o}`), mo(), Oe()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...G,
          ...gt
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in G) o[l] = G[l].val;
          for (const l in gt) o[l] = gt[l].val;
          o.plateTheory = Fe, o.supportType = St;
          const n = kn()[T];
          return n && n[St] && (o.supportLabel = n[St].label), console.table(o), o;
        }
        if (G[t]) return G[t].val;
        if (gt[t]) return gt[t].val;
        console.error(`Par\xE1metro "${t}" no encontrado.`);
      },
      setTheory(t) {
        typeof t == "string" && (t = {
          membrana: 1,
          membrane: 1,
          kirchhoff: 2,
          delgada: 2,
          thin: 2,
          mindlin: 3,
          gruesa: 3,
          thick: 3
        }[t.toLowerCase()] || 3), Fe = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[Fe] || Fe}`), T.includes("placa") && (mo(), Oe());
      },
      setBc(t) {
        const o = kn()[T];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        St = t, St >= o.length && (St = 0), console.log(`Apoyo: ${o[St].label} \u2192 DOFs: [${o[St].dofs.map((n) => n ? "1" : "0").join(",")}]`), mo(), Oe();
      },
      help() {
        console.log(`
=== FEM Studio CLI ===
Nodos:    cad.addNode(x,y,z)  cad.removeNode(i)  cad.listNodes()
Elem:     cad.addFrame(n1,n2) cad.removeFrame(i)  cad.listFrames()
BC:       cad.addSupport(n)   cad.addLoad(n,[Fx,Fy,Fz,Mx,My,Mz])
Genera:   cad.frame(sv,sp)    cad.building(svX,svY,sp)
          cad.galpon(span,length,height,archRise,xDiv,yDiv)
Ejemplos: cad.example('truss') | 'beams' | '3d' | 'portico' | 'edificio' | 'galpon' | 'barra' | 'placa'
Placa Q4: cad.plateQ4(Lx, Ly, nx, ny, bcType, pressure, thickness, E, nu)
Params:   cad.set('Lx', 15)  cad.get()  cad.get('Lx')
Placa:    cad.setTheory('mindlin'|'kirchhoff'|'membrana')  cad.setBc('ss'|'empotrado')
Modal:    cad.modal()  cad.modal(true/false)  cad.setMode(0)  \u2014 an\xE1lisis modal + animaci\xF3n
Unidades: cad.units('SI'|'US')  \u2014 cambia sistema de unidades
Util:     cad.info()  cad.clear()  cad.help()
      `);
      },
      units(t, o) {
        t && (h = t), o && (R = o), M = Ho(h, R);
        const n = Ae.querySelector("#cad3d-force-unit"), l = Ae.querySelector("#cad3d-length-unit");
        return n && (n.textContent = h), l && (l.textContent = R), T && at(T), console.log(`Unidades: ${M.label} | E=${M.E.toExponential(3)} ${M.stress}`), M.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function ws() {
      return Fl(M);
    }
    function Es() {
      return Rl(M);
    }
    let gt = {};
    function at(t) {
      var _a2, _b, _c, _d;
      T = t, ka.val = true, St = 0, ve && Gn(), G = {};
      const o = ws()[t];
      if (o) for (const l of o) G[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      gt = {};
      const n = Es()[t];
      if (n) for (const l of n) gt[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a2 = G.nVanosX) == null ? void 0 : _a2.val) ?? 2), a = Math.round(((_b = G.nVanosY) == null ? void 0 : _b.val) ?? 2);
        re = Array(l).fill(M.defaultSpan), ne = Array(a).fill(M.defaultSpan * 0.8);
        const c = Math.round(((_c = G.nPisos) == null ? void 0 : _c.val) ?? 3), s = ((_d = G.hPiso) == null ? void 0 : _d.val) ?? 3;
        _ = Array(c).fill(s);
      }
      mo(), setTimeout(() => {
        Va(), Oe();
      }, 50);
    }
    function ie(t) {
      var _a2, _b;
      return ((_a2 = G[t]) == null ? void 0 : _a2.val) ?? ((_b = gt[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function Oe() {
      var _a2;
      switch (T) {
        case "truss":
          Ss();
          break;
        case "beams":
          Is();
          break;
        case "3d":
          ks();
          break;
        case "frame": {
          const o = Math.round(ie("nVanos")), n = ie("spanV"), l = Math.round(ie("nPisos")), a = ie("hPiso");
          ot.frame(Array(o).fill(n), Array(l).fill(a));
          break;
        }
        case "edificio": {
          const o = ie("Lvix") || 0, n = ie("Lvdx") || 0, l = ie("Lviy") || 0, a = ie("Lvdy") || 0, c = Math.max(1, Math.round(ie("nSubViga") || 3)), s = Math.max(1, Math.round(ie("nSubCol") || 1)), i = ie("hPiso"), p = _.length > 0 ? [
            ..._
          ] : Array(Math.round(ie("nPisos"))).fill(i);
          ot.building([
            ...re
          ], [
            ...ne
          ], p, c, o, n, l, a, s);
          break;
        }
        case "galpon":
          ot.galpon(ie("span"), ie("length"), ie("height"), ie("archRise"), Math.round(ie("xDiv")), Math.round(ie("yDiv")));
          break;
        case "barra":
          qa();
          break;
        case "placa-3q":
          Ts();
          break;
        case "placa-q4":
          zs();
          break;
        case "losa-rect":
          Ls();
          break;
        case "losa-plana":
          As();
          break;
        case "viga-alta":
          Cs();
          break;
        case "muro-contencion":
          Ps();
          break;
        case "zapata":
          Fs();
          break;
        case "placa-orificios":
          Rs();
          break;
        case "col-placa":
          Ns();
          break;
        case "talud":
          Os();
          break;
        case "eiffel":
          Qs();
          break;
        case "arco":
          ea();
          break;
        case "puente":
          ta();
          break;
        case "twisted":
          oa();
          break;
        case "burj":
          na();
          break;
        case "opera":
          sa();
          break;
        case "diagrid":
          aa();
          break;
        case "muro-q4":
          rs();
          break;
        case "viga-q4":
          la();
          break;
        case "placa-xz":
          ia();
          break;
        case "pergola":
          ra();
          break;
      }
      if ((T === "frame" || T === "edificio" || T === "galpon") && e.nodeInputs) {
        const o = e.nodeInputs.val;
        o.supports && (e.nodeInputs.val = {
          supports: o.supports
        });
      }
      if (![
        "placa-q4",
        "placa-3q",
        "losa-rect",
        "losa-plana",
        "viga-alta",
        "muro-contencion",
        "zapata",
        "placa-orificios",
        "col-placa",
        "talud",
        "eiffel",
        "arco",
        "puente",
        "twisted",
        "burj",
        "opera",
        "diagrid",
        "muro-q4",
        "viga-q4",
        "placa-xz",
        "pergola"
      ].includes(T)) {
        if (Z.size > 0 || J.size > 0 || H) {
          const o = e.elements.val, n = o.filter((l, a) => !(Z.has(a) || J.has(a) || H && !j.has(a)));
          if (n.length !== o.length) {
            const l = /* @__PURE__ */ new Set();
            n.forEach((c) => c.forEach((s) => l.add(s)));
            const a = e.nodes.val;
            if (l.size < a.length) {
              const c = [
                ...l
              ].sort((p, r) => p - r), s = /* @__PURE__ */ new Map();
              c.forEach((p, r) => s.set(p, r)), e.nodes.val = c.map((p) => a[p]), n.forEach((p, r) => {
                n[r] = p.map((d) => s.get(d) ?? d);
              });
              const i = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val;
              if (i == null ? void 0 : i.supports) {
                const p = /* @__PURE__ */ new Map();
                i.supports.forEach((r, d) => {
                  s.has(d) && p.set(s.get(d), r);
                }), i.supports = p;
              }
              if (i == null ? void 0 : i.loads) {
                const p = /* @__PURE__ */ new Map();
                i.loads.forEach((r, d) => {
                  s.has(d) && p.set(s.get(d), r);
                }), i.loads = p;
              }
              i && (e.nodeInputs.val = i);
            }
            e.elements.val = n;
          }
        }
        setTimeout(() => {
          To(), Vn();
        }, 30);
      }
    }
    function Ss() {
      const t = ie("span"), o = Math.round(ie("divisions")), n = ie("height"), l = t / o, a = [], c = [];
      for (let d = 0; d <= o; d++) a.push([
        l * d,
        0,
        0
      ]);
      for (let d = 0; d <= o; d++) a.push([
        l * d,
        0,
        n
      ]);
      const s = o + 1;
      for (let d = 0; d < o; d++) c.push([
        d,
        d + 1
      ]);
      for (let d = 0; d < o; d++) c.push([
        s + d,
        s + d + 1
      ]);
      for (let d = 0; d <= o; d++) c.push([
        d,
        s + d
      ]);
      for (let d = 0; d < o; d++) d < o / 2 ? c.push([
        d,
        s + d + 1
      ]) : c.push([
        s + d,
        d + 1
      ]);
      const i = /* @__PURE__ */ new Map([
        [
          0,
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ],
        [
          Math.round(o),
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ]
      ]), p = (ie("CM") ?? 0) + (ie("CV") ?? 0), r = /* @__PURE__ */ new Map();
      if (p !== 0) for (let d = 0; d <= o; d++) r.set(d, [
        0,
        0,
        p,
        0,
        0,
        0
      ]);
      e.nodes.val = a, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: r
      }), nt();
    }
    function Is() {
      const t = ie("width"), o = ie("height"), n = ie("Ex") ?? 0, l = (ie("CM") ?? 0) + (ie("CV") ?? 0), a = Math.max(1, Math.round(ie("nSub") || 4)), c = [
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          o
        ],
        [
          t,
          0,
          o
        ],
        [
          t,
          0,
          0
        ]
      ], s = [];
      s.push([
        0,
        1
      ], [
        2,
        3
      ]);
      const i = [
        0,
        0,
        o
      ], p = [
        t,
        0,
        o
      ];
      let r = 1;
      for (let g = 1; g < a; g++) {
        const S = g / a, $ = c.length;
        c.push([
          i[0] + (p[0] - i[0]) * S,
          i[1] + (p[1] - i[1]) * S,
          i[2] + (p[2] - i[2]) * S
        ]), s.push([
          r,
          $
        ]), r = $;
      }
      s.push([
        r,
        2
      ]);
      const d = /* @__PURE__ */ new Map();
      if (n !== 0 && l === 0) d.set(2, [
        n,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (l !== 0 && n === 0) for (let g = 1; g < c.length; g++) g === 0 || g === 3 || d.set(g, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (n !== 0 && l !== 0) for (let g = 1; g < c.length; g++) g === 0 || g === 3 || d.set(g, [
        g === 2 ? n : 0,
        0,
        l,
        0,
        0,
        0
      ]);
      e.nodes.val = c, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map([
          [
            0,
            [
              true,
              true,
              true,
              true,
              true,
              true
            ]
          ],
          [
            3,
            [
              true,
              true,
              true,
              true,
              true,
              true
            ]
          ]
        ]),
        loads: d
      }), nt();
    }
    function ks() {
      const t = ie("dx"), o = ie("dy"), n = ie("dz"), l = Math.round(ie("stories")), a = Math.max(1, Math.round(ie("nSub") || 3)), c = [];
      for (let f = 0; f <= l; f++) c.push([
        0,
        0,
        n * f
      ], [
        t,
        0,
        n * f
      ], [
        t,
        o,
        n * f
      ], [
        0,
        o,
        n * f
      ]);
      const s = c.length, i = [
        ...c
      ], p = [];
      for (let f = 0; f < l; f++) for (let b = 0; b < 4; b++) p.push([
        f * 4 + b,
        (f + 1) * 4 + b
      ]);
      for (let f = 0; f < l; f++) {
        const b = f * 4;
        p.push([
          b,
          b + 5
        ], [
          b + 3,
          b + 6
        ], [
          b,
          b + 7
        ], [
          b + 1,
          b + 6
        ]);
      }
      const r = [];
      for (let f = 1; f <= l; f++) {
        const b = f * 4;
        r.push([
          b,
          b + 1
        ], [
          b + 1,
          b + 2
        ], [
          b + 2,
          b + 3
        ], [
          b + 3,
          b
        ], [
          b,
          b + 2
        ]);
      }
      for (const [f, b] of r) {
        const I = c[f], L = c[b];
        let z = f;
        for (let F = 1; F < a; F++) {
          const k = F / a, m = i.length;
          i.push([
            I[0] + (L[0] - I[0]) * k,
            I[1] + (L[1] - I[1]) * k,
            I[2] + (L[2] - I[2]) * k
          ]), p.push([
            z,
            m
          ]), z = m;
        }
        p.push([
          z,
          b
        ]);
      }
      const d = /* @__PURE__ */ new Map();
      for (let f = 0; f < 4; f++) d.set(f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const g = ie("Ex") ?? 0, S = (ie("CM") ?? 0) + (ie("CV") ?? 0), $ = s - 2, y = /* @__PURE__ */ new Map();
      if (g !== 0 && S === 0) y.set($, [
        g,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (S !== 0 && g === 0) for (let f = 0; f < i.length; f++) d.has(f) || y.set(f, [
        0,
        0,
        S,
        0,
        0,
        0
      ]);
      else if (g !== 0 && S !== 0) for (let f = 0; f < i.length; f++) d.has(f) || y.set(f, [
        f === $ ? g : 0,
        0,
        S,
        0,
        0,
        0
      ]);
      e.nodes.val = i, e.elements.val = p, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: y
      }), nt();
    }
    function qa() {
      const t = ie("L"), o = Math.round(ie("nElem")), n = ie("F"), l = t / o, a = [], c = [];
      for (let p = 0; p <= o; p++) a.push([
        l * p,
        0,
        0
      ]);
      for (let p = 0; p < o; p++) c.push([
        p,
        p + 1
      ]);
      const s = /* @__PURE__ */ new Map([
        [
          0,
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ]
      ]), i = /* @__PURE__ */ new Map([
        [
          o,
          [
            n,
            0,
            0,
            0,
            0,
            0
          ]
        ]
      ]);
      e.nodes.val = a, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: i
      }), nt();
    }
    function Ts() {
      const t = ie("Lx") || 15, o = ie("Ly") || 10, n = ie("meshSize") || 0.5, l = ie("q") || -3, a = ie("t") || 1, c = ie("E") || 3e7, s = ie("nu") || 0.3, i = c / (2 * (1 + s)), p = Fe === 1 ? "Membrana" : Fe === 2 ? "Kirchhoff" : "Mindlin", { nodes: r, elements: d, boundaryIndices: g } = Io({
        points: [
          [
            0,
            0,
            0
          ],
          [
            t,
            0,
            0
          ],
          [
            t,
            o,
            0
          ],
          [
            0,
            o,
            0
          ]
        ],
        polygon: [
          0,
          1,
          2,
          3
        ],
        maxMeshSize: n
      }), S = t * o, $ = l * S / r.length, y = new Map(g.map((b) => [
        b,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), f = new Map(r.map((b, I) => [
        I,
        [
          0,
          0,
          $,
          0,
          0,
          0
        ]
      ]));
      e.nodes.val = r, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: f
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(d.map((b, I) => [
          I,
          c
        ])),
        elasticitiesOrthogonal: new Map(d.map((b, I) => [
          I,
          c
        ])),
        thicknesses: new Map(d.map((b, I) => [
          I,
          a
        ])),
        poissonsRatios: new Map(d.map((b, I) => [
          I,
          s
        ])),
        shearModuli: new Map(d.map((b, I) => [
          I,
          i
        ]))
      });
      try {
        const b = Pt(r, d, e.nodeInputs.val, e.elementInputs.val);
        b && e.deformOutputs && (e.deformOutputs.val = b);
        const I = Eo(r, d, e.elementInputs.val, b);
        I && e.analyzeOutputs && (e.analyzeOutputs.val = I), console.log(`Plate 3Q [${p}]: ${r.length} nodes, ${d.length} triangles, t=${a}, E=${c}, \u03BD=${s}`);
      } catch (b) {
        console.warn("Plate 3Q analysis failed:", b.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function zs() {
      const t = ie("Lx") || 10, o = ie("Ly") || 10, n = Math.round(ie("nx") || 16), l = Math.round(ie("ny") || 16), a = ie("t") || 0.2, c = ie("q") || -10, s = ie("E") || 3e7, i = ie("nu") || 0.3, p = St === 1 ? "clamped" : "simply-supported", d = {
        1: 2,
        2: 1,
        3: 0
      }[Fe] ?? 0;
      return ot.plateQ4(t, o, n, l, p, c, a, s, i, d);
    }
    function Ls() {
      const t = ie("a") || 6, o = ie("b") || 4, n = Math.round(ie("nx") || 12), l = Math.round(ie("ny") || 8), a = ie("t") || 0.1, c = ie("q") || -10, s = ie("E") || 35e6, i = ie("nu") || 0.15, r = {
        1: 2,
        2: 1,
        3: 0
      }[Fe] ?? 0, d = ot.plateQ4(t, o, n, l, "simply-supported", c, a, s, i, r), g = s * a * a * a / (12 * (1 - i * i));
      let S = 0;
      for (let $ = 1; $ <= 19; $ += 2) for (let y = 1; y <= 19; y += 2) {
        const f = $ * $ / (t * t) + y * y / (o * o);
        S += 1 / ($ * y * f * f);
      }
      if (S *= 16 * Math.abs(c) / (Math.PI ** 6 * g), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${S.toExponential(6)}`), d) {
        const $ = Math.abs((Math.abs(d.centerW || 0) - S) / S * 100);
        console.log(`   WASM w_center = ${(d.centerW || 0).toExponential(6)}, error = ${$.toFixed(2)}%`);
      }
      return d;
    }
    function As() {
      const t = ie("t") || 0.2, o = ie("q") || -10, n = ie("E") || 35e6, l = ie("nu") || 0.2, a = ie("meshSize") || 0.6, c = [
        3.6,
        4.2,
        4.2,
        3.6
      ], s = [
        3,
        3.6,
        3
      ], i = c.reduce((x, w) => x + w, 0), p = s.reduce((x, w) => x + w, 0), r = [
        0
      ];
      for (const x of c) r.push(r[r.length - 1] + x);
      const d = [
        0
      ];
      for (const x of s) d.push(d[d.length - 1] + x);
      const g = Math.max(2, Math.round(i / a)), S = Math.max(2, Math.round(p / a)), $ = i / g, y = p / S, f = [];
      for (let x = 0; x <= S; x++) for (let w = 0; w <= g; w++) f.push([
        w * $,
        x * y
      ]);
      const b = [], I = /* @__PURE__ */ new Set();
      for (const x of r) for (const w of d) {
        let v = 1 / 0, P = 0;
        for (let K = 0; K < f.length; K++) {
          const U = Math.hypot(f[K][0] - x, f[K][1] - w);
          U < v && (v = U, P = K);
        }
        I.has(P) || (I.add(P), b.push({
          node: P,
          dof: 0,
          k: 1e15
        }));
      }
      const z = {
        1: 2,
        2: 1,
        3: 0
      }[Fe] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][z]}]: ${i}\xD7${p}m, ${g}\xD7${S} elem, ${I.size} columnas`);
      const F = performance.now(), k = cs({
        E: n,
        nu: l,
        thickness: t,
        meshLx: i,
        meshLy: p,
        meshNx: g,
        meshNy: S,
        bcType: "none",
        pressure: o,
        theoryType: z,
        springs: b
      }), m = performance.now() - F;
      console.log(`Solved in ${m.toFixed(1)} ms, w_max = ${k.maxW.toExponential(4)}`);
      const u = k.nodeResults.map((x) => [
        x.x,
        x.y,
        0
      ]), E = k.elementResults.map((x) => [
        ...x.nodes
      ]);
      e.nodes.val = u, e.elements.val = E;
      const A = /* @__PURE__ */ new Map();
      k.nodeResults.forEach((x, w) => {
        A.set(w, [
          0,
          0,
          x.w,
          x.bx,
          x.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: A
      });
      const N = /* @__PURE__ */ new Map();
      for (const x of I) N.set(x, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const W = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const x = o * i * p / u.length;
        u.forEach((w, v) => {
          N.has(v) || W.set(v, [
            0,
            0,
            x,
            0,
            0,
            0
          ]);
        });
      }
      if (e.nodeInputs && (e.nodeInputs.val = {
        supports: N,
        loads: W
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const x = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
        k.elementResults.forEach((P, K) => {
          x.set(K, [
            P.Mxx,
            P.Mxx,
            P.Mxx
          ]), w.set(K, [
            P.Myy,
            P.Myy,
            P.Myy
          ]), v.set(K, [
            P.Mxy,
            P.Mxy,
            P.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: x,
          bendingYY: w,
          bendingXY: v
        };
      }
      setTimeout(() => It(), 50), nt();
    }
    function Cs() {
      const t = ie("L") || 4, o = ie("H") || 2, n = ie("t") || 0.1, l = ie("E") || 2e7, a = ie("nu") || 0.2, c = l / (2 * (1 + a)), s = ie("q") || -100, i = ie("b") || 0.8, p = ie("meshSize") || 0.2, { nodes: r, elements: d, boundaryIndices: g } = Io({
        points: [
          [
            0,
            0,
            0
          ],
          [
            t,
            0,
            0
          ],
          [
            t,
            o,
            0
          ],
          [
            0,
            o,
            0
          ]
        ],
        polygon: [
          0,
          1,
          2,
          3
        ],
        maxMeshSize: p
      }), S = r, $ = 0.4, y = /* @__PURE__ */ new Map();
      for (let m = 0; m < S.length; m++) {
        const u = S[m][0], E = S[m][1];
        Math.abs(E) < 1e-6 && (u <= $ + 1e-6 || u >= t - $ - 1e-6) && y.set(m, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const f = (t - i) / 2, b = f + i, I = [];
      for (let m = 0; m < S.length; m++) if (Math.abs(S[m][1] - o) < 1e-6) {
        const u = S[m][0];
        u >= f - 1e-6 && u <= b + 1e-6 && I.push(m);
      }
      const L = s * i / Math.max(I.length, 1), z = /* @__PURE__ */ new Map();
      for (const m of I) z.set(m, [
        0,
        L,
        0,
        0,
        0,
        0
      ]);
      const F = {
        elasticities: new Map(d.map((m, u) => [
          u,
          l
        ])),
        elasticitiesOrthogonal: new Map(d.map((m, u) => [
          u,
          l
        ])),
        thicknesses: new Map(d.map((m, u) => [
          u,
          n
        ])),
        poissonsRatios: new Map(d.map((m, u) => [
          u,
          a
        ])),
        shearModuli: new Map(d.map((m, u) => [
          u,
          c
        ]))
      }, k = {
        supports: y,
        loads: z
      };
      try {
        const m = Pt(S, d, k, F), u = Eo(S, d, F, m), E = S.map((N) => [
          N[0],
          0,
          N[1]
        ]);
        if (e.nodes.val = E, e.elements.val = d, m && m.deformations) {
          const N = /* @__PURE__ */ new Map();
          m.deformations.forEach((W, x) => {
            N.set(x, [
              W[0],
              W[2],
              W[1],
              W[3],
              W[5],
              W[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: N
          });
        }
        if (e.nodeInputs) {
          const N = /* @__PURE__ */ new Map();
          y.forEach((x, w) => N.set(w, x));
          const W = /* @__PURE__ */ new Map();
          z.forEach((x, w) => W.set(w, [
            x[0],
            x[2],
            x[1],
            x[3],
            x[5],
            x[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: N,
            loads: W
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let A = 0;
        m && m.deformations && m.deformations.forEach((N) => {
          const W = Math.sqrt(N[0] * N[0] + N[1] * N[1] + N[2] * N[2]);
          A = Math.max(A, W);
        }), console.log(`Viga Alta: ${S.length} nodos, ${d.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${a}`), console.log(`  Carga: q=${s} kN/m sobre ${i}m central`), console.log(`  max|u| = ${A.toExponential(4)}`);
      } catch (m) {
        console.warn("Viga Alta analysis failed:", m.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function Ps() {
      const t = ie("H") || 4, o = ie("B") || 3, n = ie("tw") || 0.3, l = ie("tb") || 0.4, a = ie("meshSize") || 0.2, c = ie("E") || 25e6, s = ie("nu") || 0.2, i = c / (2 * (1 + s)), p = ie("gamma") || 18, r = ie("Ka") || 0.33, d = ie("Es") || 5e4, g = ie("nus") || 0.3, S = d / (2 * (1 + g)), $ = ie("kn") || 1e6, y = ie("ks") || 1e4, f = ie("gammaW") || 9.81, b = ie("Hw") || 3.5, I = ie("qs") || 0, L = St, z = o * 0.3, F = o * 0.7, k = [
        [
          -z,
          0,
          0
        ],
        [
          F,
          0,
          0
        ],
        [
          F,
          l,
          0
        ],
        [
          n,
          l,
          0
        ],
        [
          n,
          l + t,
          0
        ],
        [
          0,
          l + t,
          0
        ],
        [
          0,
          l,
          0
        ],
        [
          -z,
          l,
          0
        ]
      ];
      let m = [], u = [], E = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), N;
      if (L === 0) {
        const w = Io({
          points: k,
          polygon: [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7
          ],
          maxMeshSize: a
        });
        m = w.nodes, u = w.elements;
        for (let P = 0; P < m.length; P++) Math.abs(m[P][1]) < 1e-6 && E.set(P, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = [];
        for (let P = 0; P < m.length; P++) {
          const K = m[P][0], U = m[P][1];
          Math.abs(K - n) < a * 0.6 && U >= l - 1e-6 && v.push({
            idx: P,
            y: U
          });
        }
        v.sort((P, K) => P.y - K.y);
        for (let P = 0; P < v.length; P++) {
          const { idx: K, y: U } = v[P], le = l + t - U, te = r * p * le + r * I;
          let Q = a;
          P > 0 && P < v.length - 1 ? Q = (v[P + 1].y - v[P - 1].y) / 2 : P === 0 && v.length > 1 ? Q = (v[1].y - v[0].y) / 2 : P === v.length - 1 && v.length > 1 && (Q = (v[P].y - v[P - 1].y) / 2);
          const me = te * Q;
          Math.abs(me) > 1e-10 && A.set(K, [
            me,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        N = {
          elasticities: new Map(u.map((P, K) => [
            K,
            c
          ])),
          elasticitiesOrthogonal: new Map(u.map((P, K) => [
            K,
            c
          ])),
          thicknesses: new Map(u.map((P, K) => [
            K,
            n
          ])),
          poissonsRatios: new Map(u.map((P, K) => [
            K,
            s
          ])),
          shearModuli: new Map(u.map((P, K) => [
            K,
            i
          ]))
        };
      } else if (L === 1 || L === 2) {
        const w = F, v = l + t;
        if (L === 2) {
          const P = [
            [
              -z,
              0,
              0
            ],
            [
              w,
              0,
              0
            ],
            [
              w,
              v,
              0
            ],
            [
              n,
              v,
              0
            ],
            [
              0,
              v,
              0
            ],
            [
              0,
              l,
              0
            ],
            [
              -z,
              l,
              0
            ]
          ], K = Math.max(3, Math.ceil((v - l) / a)), U = [];
          for (let se = 0; se <= K; se++) U.push([
            n,
            l + se * (v - l) / K,
            0
          ]);
          const le = Io({
            points: [
              ...P,
              ...U
            ],
            polygon: [
              0,
              1,
              2,
              3,
              4,
              5,
              6
            ],
            maxMeshSize: a
          });
          m = le.nodes, u = le.elements;
          const te = a * 0.4, Q = [];
          for (let se = 0; se < m.length; se++) {
            const we = m[se][0], De = m[se][1];
            Math.abs(we - n) < te && De >= l - te && Q.push(se);
          }
          Q.sort((se, we) => m[se][1] - m[we][1]);
          const me = [
            Q[0]
          ];
          for (let se = 1; se < Q.length; se++) {
            const we = m[Q[se]][1] - m[me[me.length - 1]][1];
            Math.abs(we) > a * 0.05 && me.push(Q[se]);
          }
          Q.length = 0, Q.push(...me);
          const de = /* @__PURE__ */ new Map();
          for (const se of Q) {
            const we = m.length;
            m.push([
              m[se][0],
              m[se][1],
              m[se][2]
            ]), de.set(se, we);
          }
          const ke = u.length, Re = [];
          for (let se = 0; se < ke; se++) {
            const we = u[se], De = (m[we[0]][0] + m[we[1]][0] + m[we[2]][0]) / 3, lt = (m[we[0]][1] + m[we[1]][1] + m[we[2]][1]) / 3, et = De >= -z && De <= F && lt >= 0 && lt <= l, vt = De >= 0 && De <= n && lt >= l && lt <= l + t, Bt = et || vt;
            if (Re.push(!Bt), !Bt) for (let yt = 0; yt < we.length; yt++) {
              const Ct = de.get(we[yt]);
              Ct !== void 0 && (we[yt] = Ct);
            }
          }
          const O = u.length;
          for (let se = 0; se < Q.length - 1; se++) {
            const we = Q[se], De = Q[se + 1], lt = de.get(we), et = de.get(De);
            u.push([
              De,
              we,
              lt,
              et
            ]);
          }
          const ce = u.length - O, oe = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map();
          for (let se = 0; se < ke; se++) Re[se] ? (oe.set(se, d), pe.set(se, d), ge.set(se, g), Ie.set(se, S), ee.set(se, 1)) : (oe.set(se, c), pe.set(se, c), ge.set(se, s), Ie.set(se, i), ee.set(se, 1));
          for (let se = O; se < u.length; se++) oe.set(se, $), pe.set(se, 0), ge.set(se, 0), Ie.set(se, y), ee.set(se, 0);
          N = {
            elasticities: oe,
            elasticitiesOrthogonal: pe,
            thicknesses: ee,
            poissonsRatios: ge,
            shearModuli: Ie
          };
          for (let se = 0; se < m.length; se++) {
            const we = m[se][0], De = m[se][1];
            Math.abs(De) < 1e-6 ? E.set(se, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(we - w) < a * 0.1 && E.set(se, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let se = 0; se < ke; se++) {
            if (!Re[se]) continue;
            const we = u[se], De = m[we[0]], lt = m[we[1]], et = m[we[2]], vt = Math.abs((lt[0] - De[0]) * (et[1] - De[1]) - (et[0] - De[0]) * (lt[1] - De[1])) / 2, Bt = -p * vt / 3;
            for (const yt of we) {
              const Ct = A.get(yt) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ct[1] += Bt, A.set(yt, Ct);
            }
          }
          if (I > 0) {
            const se = [];
            for (let we = 0; we < m.length; we++) {
              const De = m[we][0], lt = m[we][1];
              Math.abs(lt - v) < a * 0.1 && De > n - 1e-6 && se.push({
                idx: we,
                x: De
              });
            }
            se.sort((we, De) => we.x - De.x);
            for (let we = 0; we < se.length; we++) {
              let De = a;
              we > 0 && we < se.length - 1 ? De = (se[we + 1].x - se[we - 1].x) / 2 : we === 0 && se.length > 1 ? De = (se[1].x - se[0].x) / 2 : we === se.length - 1 && se.length > 1 && (De = (se[we].x - se[we - 1].x) / 2);
              const lt = -I * De, et = A.get(se[we].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              et[1] += lt, A.set(se[we].idx, et);
            }
          }
          console.log(`  Interfaz Goodman: ${Q.length} nodos interfaz, ${ce} elem interfaz, kn=${$}, ks=${y}`);
        } else {
          const P = [
            [
              -z,
              0,
              0
            ],
            [
              w,
              0,
              0
            ],
            [
              w,
              v,
              0
            ],
            [
              n,
              v,
              0
            ],
            [
              0,
              v,
              0
            ],
            [
              0,
              l,
              0
            ],
            [
              -z,
              l,
              0
            ]
          ], K = [
            [
              n,
              l,
              0
            ]
          ], U = Io({
            points: [
              ...P,
              ...K
            ],
            polygon: [
              0,
              1,
              2,
              3,
              4,
              5,
              6
            ],
            maxMeshSize: a
          });
          m = U.nodes, u = U.elements;
          const le = (O) => {
            const ce = (m[O[0]][0] + m[O[1]][0] + m[O[2]][0]) / 3, oe = (m[O[0]][1] + m[O[1]][1] + m[O[2]][1]) / 3, pe = ce >= -z && ce <= F && oe >= 0 && oe <= l, ee = ce >= 0 && ce <= n && oe >= l && oe <= l + t;
            return pe || ee;
          }, te = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), Re = [];
          for (let O = 0; O < u.length; O++) {
            const ce = le(u[O]);
            Re.push(!ce), ce ? (te.set(O, c), Q.set(O, c), de.set(O, s), ke.set(O, i), me.set(O, 1)) : (te.set(O, d), Q.set(O, d), de.set(O, g), ke.set(O, S), me.set(O, 1));
          }
          N = {
            elasticities: te,
            elasticitiesOrthogonal: Q,
            thicknesses: me,
            poissonsRatios: de,
            shearModuli: ke
          };
          for (let O = 0; O < m.length; O++) {
            const ce = m[O][0], oe = m[O][1];
            Math.abs(oe) < 1e-6 ? E.set(O, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(ce - w) < a * 0.1 && E.set(O, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let O = 0; O < u.length; O++) {
            if (!Re[O]) continue;
            const ce = u[O], oe = m[ce[0]], pe = m[ce[1]], ee = m[ce[2]], ge = Math.abs((pe[0] - oe[0]) * (ee[1] - oe[1]) - (ee[0] - oe[0]) * (pe[1] - oe[1])) / 2, Ie = -p * ge / 3;
            for (const se of ce) {
              const we = A.get(se) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              we[1] += Ie, A.set(se, we);
            }
          }
          if (I > 0) {
            const O = [];
            for (let ce = 0; ce < m.length; ce++) {
              const oe = m[ce][0], pe = m[ce][1];
              Math.abs(pe - v) < a * 0.1 && oe > n - 1e-6 && O.push({
                idx: ce,
                x: oe
              });
            }
            O.sort((ce, oe) => ce.x - oe.x);
            for (let ce = 0; ce < O.length; ce++) {
              let oe = a;
              ce > 0 && ce < O.length - 1 ? oe = (O[ce + 1].x - O[ce - 1].x) / 2 : ce === 0 && O.length > 1 ? oe = (O[1].x - O[0].x) / 2 : ce === O.length - 1 && O.length > 1 && (oe = (O[ce].x - O[ce - 1].x) / 2);
              const pe = -I * oe, ee = A.get(O[ce].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ee[1] += pe, A.set(O[ce].idx, ee);
            }
          }
        }
      }
      if (L === 3) {
        const w = Io({
          points: k,
          polygon: [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7
          ],
          maxMeshSize: a
        });
        m = w.nodes, u = w.elements;
        for (let le = 0; le < m.length; le++) Math.abs(m[le][1]) < 1e-6 && E.set(le, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = l + t, P = Math.min(b, t), K = v - P, U = [];
        for (let le = 0; le < m.length; le++) {
          const te = m[le][0], Q = m[le][1];
          Math.abs(te - n) < a * 0.6 && Q >= l - 1e-6 && U.push({
            idx: le,
            y: Q
          });
        }
        U.sort((le, te) => le.y - te.y);
        for (let le = 0; le < U.length; le++) {
          const { idx: te, y: Q } = U[le], me = Math.max(0, v - Q);
          if (me <= 0 || Q < K - 1e-6) continue;
          const de = Math.min(me, P), ke = f * de;
          let Re = a;
          le > 0 && le < U.length - 1 ? Re = (U[le + 1].y - U[le - 1].y) / 2 : le === 0 && U.length > 1 ? Re = (U[1].y - U[0].y) / 2 : le === U.length - 1 && U.length > 1 && (Re = (U[le].y - U[le - 1].y) / 2);
          const O = ke * Re;
          Math.abs(O) > 1e-10 && A.set(te, [
            O,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        N = {
          elasticities: new Map(u.map((le, te) => [
            te,
            c
          ])),
          elasticitiesOrthogonal: new Map(u.map((le, te) => [
            te,
            c
          ])),
          thicknesses: new Map(u.map((le, te) => [
            te,
            n
          ])),
          poissonsRatios: new Map(u.map((le, te) => [
            te,
            s
          ])),
          shearModuli: new Map(u.map((le, te) => [
            te,
            i
          ]))
        };
      }
      const W = {
        supports: E,
        loads: A
      }, x = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const w = Pt(m, u, W, N), v = u.filter((me) => me.length === 3), P = {};
        for (const me of Object.keys(N)) {
          const de = N[me];
          if (de && de instanceof Map) {
            const ke = /* @__PURE__ */ new Map();
            let Re = 0;
            for (let O = 0; O < u.length; O++) u[O].length === 3 && (de.has(O) && ke.set(Re, de.get(O)), Re++);
            P[me] = ke;
          }
        }
        const K = Eo(m, v, P, w), U = m.map((me) => [
          me[0],
          0,
          me[1]
        ]);
        if (e.nodes.val = U, e.elements.val = v, w && w.deformations) {
          const me = /* @__PURE__ */ new Map();
          w.deformations.forEach((de, ke) => {
            me.set(ke, [
              de[0],
              de[2],
              de[1],
              de[3],
              de[5],
              de[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: me
          });
        }
        const le = /* @__PURE__ */ new Map();
        E.forEach((me, de) => le.set(de, me));
        const te = /* @__PURE__ */ new Map();
        A.forEach((me, de) => te.set(de, [
          me[0],
          me[2],
          me[1],
          me[3],
          me[5],
          me[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: le,
          loads: te
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let Q = 0;
        w && w.deformations && w.deformations.forEach((me) => {
          const de = Math.sqrt(me[0] * me[0] + me[1] * me[1] + me[2] * me[2]);
          Q = Math.max(Q, de);
        }), console.log(`Muro Contencion [${x[L]}]: ${m.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${r}, gamma=${p}, qs=${I}`), L === 1 && console.log(`  Es=${d}, nus=${g}`), L === 2 && console.log(`  Es=${d}, nus=${g}, kn=${$}, ks=${y}`), L === 3 && console.log(`  gammaW=${f}, Hw=${b}`), console.log(`  max|u| = ${Q.toExponential(4)}`);
      } catch (w) {
        console.warn("Muro Contencion failed:", w.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function Fs() {
      const t = ie("Lx") || 2, o = ie("Ly") || 2, n = ie("t") || 0.5, l = ie("colA") || 0.4, a = ie("colH") || 1.5, c = Math.round(ie("nx") || 8), s = Math.round(ie("ny") || 8), i = ie("E") || 25e6, p = ie("nu") || 0.2, r = ie("P") || -500, d = ie("Mx") || 0, g = ie("My") || 0, S = ie("ks") || 2e4, $ = t / c, y = o / s, f = t / 2, b = o / 2, I = l / 2, L = [];
      for (let E = 0; E <= s; E++) for (let A = 0; A <= c; A++) {
        const N = E * (c + 1) + A;
        let W = $, x = y;
        (A === 0 || A === c) && (W = $ / 2), (E === 0 || E === s) && (x = y / 2), L.push({
          node: N,
          dof: 0,
          k: S * W * x
        });
      }
      let z = 0;
      for (let E = 0; E <= s; E++) for (let A = 0; A <= c; A++) Math.abs(A * $ - f) <= I + 1e-6 && Math.abs(E * y - b) <= I + 1e-6 && z++;
      const F = r / Math.max(z, 1), k = [];
      for (let E = 0; E <= s; E++) for (let A = 0; A <= c; A++) {
        const N = A * $, W = E * y;
        Math.abs(N - f) <= I + 1e-6 && Math.abs(W - b) <= I + 1e-6 && k.push({
          node: E * (c + 1) + A,
          dof: 0,
          value: F
        });
      }
      if (Math.abs(d) > 1e-6) {
        const E = I > 1e-6 ? I : y, A = d / E;
        for (let N = 0; N <= s; N++) for (let W = 0; W <= c; W++) {
          const x = W * $, w = N * y;
          if (Math.abs(x - f) <= I + 1e-6 && Math.abs(w - b) <= I + 1e-6) {
            const v = w - b;
            if (Math.abs(v) > 1e-6) {
              const P = v > 0 ? 1 : -1;
              k.push({
                node: N * (c + 1) + W,
                dof: 0,
                value: P * A / z * 2
              });
            }
          }
        }
      }
      if (Math.abs(g) > 1e-6) {
        const E = I > 1e-6 ? I : $, A = g / E;
        for (let N = 0; N <= s; N++) for (let W = 0; W <= c; W++) {
          const x = W * $, w = N * y;
          if (Math.abs(x - f) <= I + 1e-6 && Math.abs(w - b) <= I + 1e-6) {
            const v = x - f;
            if (Math.abs(v) > 1e-6) {
              const P = v > 0 ? 1 : -1;
              k.push({
                node: N * (c + 1) + W,
                dof: 0,
                value: P * A / z * 2
              });
            }
          }
        }
      }
      const u = {
        1: 2,
        2: 1,
        3: 0
      }[Fe] ?? 1;
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${c}x${s} elem`), console.log(`  col=${l}m, P=${r}, Mx=${d}, My=${g}, ks=${S}`);
      try {
        const E = cs({
          E: i,
          nu: p,
          thickness: n,
          meshLx: t,
          meshLy: o,
          meshNx: c,
          meshNy: s,
          bcType: "none",
          pressure: 0,
          theoryType: u,
          springs: L,
          pointLoads: k
        });
        console.log(`  Solved: w_max = ${E.maxW.toExponential(4)}`);
        const A = E.nodeResults.map((K) => [
          K.x,
          K.y,
          0
        ]), N = A.length;
        A.push([
          f - I,
          b - I,
          0
        ]), A.push([
          f + I,
          b - I,
          0
        ]), A.push([
          f + I,
          b + I,
          0
        ]), A.push([
          f - I,
          b + I,
          0
        ]), A.push([
          f - I,
          b - I,
          a
        ]), A.push([
          f + I,
          b - I,
          a
        ]), A.push([
          f + I,
          b + I,
          a
        ]), A.push([
          f - I,
          b + I,
          a
        ]);
        const W = E.elementResults.map((K) => [
          ...K.nodes
        ]);
        W.push([
          N,
          N + 4
        ]), W.push([
          N + 1,
          N + 5
        ]), W.push([
          N + 2,
          N + 6
        ]), W.push([
          N + 3,
          N + 7
        ]), W.push([
          N + 4,
          N + 5
        ]), W.push([
          N + 5,
          N + 6
        ]), W.push([
          N + 6,
          N + 7
        ]), W.push([
          N + 7,
          N + 4
        ]), W.push([
          N,
          N + 1
        ]), W.push([
          N + 1,
          N + 2
        ]), W.push([
          N + 2,
          N + 3
        ]), W.push([
          N + 3,
          N
        ]), e.nodes.val = A, e.elements.val = W;
        const x = /* @__PURE__ */ new Map();
        E.nodeResults.forEach((K, U) => {
          x.set(U, [
            0,
            0,
            K.w,
            K.bx,
            K.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: x
        });
        const w = /* @__PURE__ */ new Map();
        E.nodeResults.forEach((K, U) => {
          const le = K.x, te = K.y;
          (le < 1e-6 || le > t - 1e-6 || te < 1e-6 || te > o - 1e-6) && w.set(U, [
            false,
            false,
            true,
            false,
            false,
            false
          ]);
        });
        const v = /* @__PURE__ */ new Map();
        if (v.set(N + 4, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), v.set(N + 5, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), v.set(N + 6, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), v.set(N + 7, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), e.nodeInputs && (e.nodeInputs.val = {
          supports: w,
          loads: v
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const K = E.elementResults.length, U = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map();
          E.elementResults.forEach((Q, me) => {
            U.set(me, [
              Q.Mxx,
              Q.Mxx,
              Q.Mxx
            ]), le.set(me, [
              Q.Myy,
              Q.Myy,
              Q.Myy
            ]), te.set(me, [
              Q.Mxy,
              Q.Mxy,
              Q.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: U,
            bendingYY: le,
            bendingXY: te
          };
        }
        const P = tt();
        P && (P.settings.shellResults.val = "bendingXX");
      } catch (E) {
        console.warn("Zapata solver failed:", E.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function Rs() {
      const t = ie("Lx") || 0.4, o = ie("Ly") || 0.4, n = ie("t") || 0.025, l = ie("dBolt") || 0.022, a = ie("sx") || 0.28, c = ie("sy") || 0.28, s = ie("colA") || 0.2, i = ie("meshSize") || 8e-3, p = ie("E") || 2e8, r = ie("nu") || 0.3, d = p / (2 * (1 + r)), g = ie("P") || -200, S = Math.round(ie("nBolts") || 4), $ = t / 2, y = o / 2, f = l / 2, b = s / 2, I = [];
      S >= 4 && (I.push([
        $ - a / 2,
        y - c / 2
      ]), I.push([
        $ + a / 2,
        y - c / 2
      ]), I.push([
        $ + a / 2,
        y + c / 2
      ]), I.push([
        $ - a / 2,
        y + c / 2
      ])), S >= 6 && (I.push([
        $,
        y - c / 2
      ]), I.push([
        $,
        y + c / 2
      ])), S >= 8 && (I.push([
        $ - a / 2,
        y
      ]), I.push([
        $ + a / 2,
        y
      ]));
      const { nodes: L, elements: z } = Io({
        points: [
          [
            0,
            0,
            0
          ],
          [
            t,
            0,
            0
          ],
          [
            t,
            o,
            0
          ],
          [
            0,
            o,
            0
          ]
        ],
        polygon: [
          0,
          1,
          2,
          3
        ],
        maxMeshSize: i
      }), F = (x, w) => {
        for (const [v, P] of I) if ((x - v) * (x - v) + (w - P) * (w - P) < f * f) return true;
        return false;
      }, k = z.filter((x) => {
        const w = (L[x[0]][0] + L[x[1]][0] + L[x[2]][0]) / 3, v = (L[x[0]][1] + L[x[1]][1] + L[x[2]][1]) / 3;
        return !F(w, v);
      }), m = L, u = /* @__PURE__ */ new Map();
      for (let x = 0; x < m.length; x++) {
        const w = m[x][0], v = m[x][1];
        for (const [P, K] of I) {
          const U = Math.sqrt((w - P) * (w - P) + (v - K) * (v - K));
          U >= f * 0.7 && U <= f * 1.5 && u.set(x, [
            true,
            true,
            true,
            false,
            false,
            false
          ]);
        }
      }
      const E = /* @__PURE__ */ new Map();
      let A = 0;
      for (let x = 0; x < m.length; x++) {
        const w = m[x][0], v = m[x][1];
        Math.abs(w - $) <= b && Math.abs(v - y) <= b && A++;
      }
      const N = g / Math.max(A, 1);
      for (let x = 0; x < m.length; x++) {
        const w = m[x][0], v = m[x][1];
        if (Math.abs(w - $) <= b && Math.abs(v - y) <= b) {
          const P = E.get(x) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          P[2] += N, E.set(x, P);
        }
      }
      const W = {
        elasticities: new Map(k.map((x, w) => [
          w,
          p
        ])),
        elasticitiesOrthogonal: new Map(k.map((x, w) => [
          w,
          p
        ])),
        thicknesses: new Map(k.map((x, w) => [
          w,
          n
        ])),
        poissonsRatios: new Map(k.map((x, w) => [
          w,
          r
        ])),
        shearModuli: new Map(k.map((x, w) => [
          w,
          d
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${S} pernos d=${l * 1e3}mm`), console.log(`  P=${g} kN, col=${s * 1e3}mm, mesh=${i * 1e3}mm`), console.log(`  ${k.length} triangulos, ${m.length} nodos`);
      try {
        const x = Pt(m, k, {
          supports: u,
          loads: E
        }, W), w = Eo(m, k, W, x);
        e.nodes.val = m, e.elements.val = k, x && e.deformOutputs && (e.deformOutputs.val = x), e.nodeInputs && (e.nodeInputs.val = {
          supports: u,
          loads: E
        }), e.elementInputs && (e.elementInputs.val = {}), w && e.analyzeOutputs && (e.analyzeOutputs.val = w);
        let v = 0;
        x && x.deformations && x.deformations.forEach((P) => {
          const K = Math.sqrt(P[0] * P[0] + P[1] * P[1] + P[2] * P[2]);
          v = Math.max(v, K);
        }), console.log(`  max|u| = ${v.toExponential(4)}`);
      } catch (x) {
        console.warn("Placa Base failed:", x.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function Ns() {
      const t = ie("colB") || 0.3, o = ie("colH") || 0.3, n = ie("colT") || 8e-3, l = ie("colLen") || 1.5, a = ie("Lx") || 0.45, c = ie("Ly") || 0.45, s = ie("tPlaca") || 0.025, i = ie("dBolt") || 0.022, p = ie("sx") || 0.32, r = ie("sy") || 0.32, d = Math.round(ie("nSubColV") || 6), g = Math.round(ie("nSubColH") || 4), S = Math.round(ie("nSubPlaca") || 10), $ = ie("E") || 2e8, y = ie("nu") || 0.3, f = $ / (2 * (1 + y)), b = ie("P") || -300, I = a / 2, L = c / 2, z = i / 2, F = t / 2, k = o / 2, m = [], u = [], E = S, A = a / E, N = c / E, W = (pe, ee) => ee * (E + 1) + pe;
      for (let pe = 0; pe <= E; pe++) for (let ee = 0; ee <= E; ee++) m.push([
        ee * A,
        pe * N,
        0
      ]);
      const x = [
        [
          I - p / 2,
          L - r / 2
        ],
        [
          I + p / 2,
          L - r / 2
        ],
        [
          I + p / 2,
          L + r / 2
        ],
        [
          I - p / 2,
          L + r / 2
        ]
      ], w = (pe, ee) => {
        for (const [ge, Ie] of x) if ((pe - ge) * (pe - ge) + (ee - Ie) * (ee - Ie) < z * z) return true;
        return false;
      }, v = u.length;
      for (let pe = 0; pe < E; pe++) for (let ee = 0; ee < E; ee++) {
        const ge = (ee + 0.5) * A, Ie = (pe + 0.5) * N;
        w(ge, Ie) || u.push([
          W(ee, pe),
          W(ee + 1, pe),
          W(ee + 1, pe + 1),
          W(ee, pe + 1)
        ]);
      }
      const P = u.length - v, K = d, U = g, le = [
        [
          I - F,
          L - k
        ],
        [
          I + F,
          L - k
        ],
        [
          I + F,
          L + k
        ],
        [
          I - F,
          L + k
        ]
      ], te = u.length, Q = [
        [
          0,
          1
        ],
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          0
        ]
      ], me = (pe, ee) => {
        for (let ge = 0; ge < (E + 1) * (E + 1); ge++) if (Math.abs(m[ge][0] - pe) < A * 0.3 && Math.abs(m[ge][1] - ee) < N * 0.3 && Math.abs(m[ge][2]) < 1e-6) return ge;
        return -1;
      };
      for (const [pe, ee] of Q) {
        const [ge, Ie] = le[pe], [se, we] = le[ee], De = [];
        for (let lt = 0; lt <= K; lt++) {
          const et = [], vt = lt / K * l;
          for (let Bt = 0; Bt <= U; Bt++) {
            const yt = Bt / U, Ct = ge + yt * (se - ge), go = Ie + yt * (we - Ie);
            if (lt === 0) {
              const jt = me(Ct, go);
              if (jt >= 0) {
                et.push(jt);
                continue;
              }
            }
            let Kt = -1;
            for (let jt = 0; jt < m.length; jt++) if (Math.abs(m[jt][0] - Ct) < 1e-6 && Math.abs(m[jt][1] - go) < 1e-6 && Math.abs(m[jt][2] - vt) < 1e-6) {
              Kt = jt;
              break;
            }
            Kt >= 0 ? et.push(Kt) : (et.push(m.length), m.push([
              Ct,
              go,
              vt
            ]));
          }
          De.push(et);
        }
        for (let lt = 0; lt < K; lt++) for (let et = 0; et < U; et++) u.push([
          De[lt][et],
          De[lt][et + 1],
          De[lt + 1][et + 1],
          De[lt + 1][et]
        ]);
      }
      const de = u.length - te, ke = /* @__PURE__ */ new Map();
      for (let pe = 0; pe < (E + 1) * (E + 1); pe++) {
        const ee = m[pe][0], ge = m[pe][1];
        for (const [Ie, se] of x) {
          const we = Math.sqrt((ee - Ie) * (ee - Ie) + (ge - se) * (ge - se));
          we >= z * 0.5 && we <= z * 2 && ke.set(pe, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Re = /* @__PURE__ */ new Map(), O = [];
      for (let pe = 0; pe < m.length; pe++) Math.abs(m[pe][2] - l) < 1e-6 && O.push(pe);
      const ce = b / Math.max(O.length, 1);
      for (const pe of O) Re.set(pe, [
        0,
        0,
        ce,
        0,
        0,
        0
      ]);
      const oe = {
        elasticities: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map()
      };
      for (let pe = v; pe < v + P; pe++) oe.elasticities.set(pe, $), oe.poissonsRatios.set(pe, y), oe.thicknesses.set(pe, s), oe.shearModuli.set(pe, f);
      for (let pe = te; pe < te + de; pe++) oe.elasticities.set(pe, $), oe.poissonsRatios.set(pe, y), oe.thicknesses.set(pe, n), oe.shearModuli.set(pe, f);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${a * 1e3}x${c * 1e3}mm, t=${s * 1e3}mm, 4 pernos d=${i * 1e3}mm`), console.log(`  ${P} Q4 placa + ${de} Q4 columna = ${u.length} total`), console.log(`  ${m.length} nodos, P=${b} kN`);
      try {
        const pe = Pt(m, u, {
          supports: ke,
          loads: Re
        }, oe), ee = Eo(m, u, oe, pe);
        e.nodes.val = m, e.elements.val = u, pe && e.deformOutputs && (e.deformOutputs.val = pe), e.nodeInputs && (e.nodeInputs.val = {
          supports: ke,
          loads: Re
        }), e.elementInputs && (e.elementInputs.val = oe), ee && e.analyzeOutputs && (e.analyzeOutputs.val = ee);
        let ge = 0;
        (pe == null ? void 0 : pe.deformations) && pe.deformations.forEach((Ie) => {
          const se = Math.sqrt(Ie[0] * Ie[0] + Ie[1] * Ie[1] + Ie[2] * Ie[2]);
          ge = Math.max(ge, se);
        }), console.log(`  max|u| = ${ge.toExponential(4)}`);
      } catch (pe) {
        console.warn("Col+Placa failed:", pe.message), e.nodes.val = m, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
          supports: ke,
          loads: Re
        });
      }
      setTimeout(() => It(), 50), nt();
    }
    function Os() {
      const t = ie("H") || 6, o = ie("angle") || 45, n = ie("bTop") || 3, l = ie("bBot") || 3, a = ie("meshSize") || 2, c = ie("E") || 5e4, s = ie("nu") || 0.3, i = ie("gamma") || 18, p = ie("c") || 15, r = ie("phi") || 30, d = ie("qs") || 0, g = t / Math.tan(o * Math.PI / 180), S = l + g + n, $ = t, y = [
        [
          0,
          -$,
          0
        ],
        [
          S,
          -$,
          0
        ],
        [
          S,
          t,
          0
        ],
        [
          l + g,
          t,
          0
        ],
        [
          l,
          0,
          0
        ],
        [
          0,
          0,
          0
        ]
      ], { nodes: f, elements: b } = Io({
        points: y,
        polygon: [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        maxMeshSize: a
      }), I = f, L = [], z = /* @__PURE__ */ new Map();
      for (let k = 0; k < I.length; k++) {
        const m = I[k][0], u = I[k][1];
        Math.abs(u + $) < 1e-6 ? (L.push({
          node: k,
          fixX: true,
          fixY: true
        }), z.set(k, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(m) < 1e-6 || Math.abs(m - S) < 1e-6) && (L.push({
          node: k,
          fixX: true,
          fixY: false
        }), z.set(k, [
          true,
          false,
          true,
          true,
          true,
          true
        ]));
      }
      const F = t - a * 0.3;
      try {
        const k = I.map((w) => [
          w[0],
          w[1]
        ]), m = b.map((w) => [
          w[0],
          w[1],
          w[2]
        ]), u = hl({
          nodes: k,
          elements: m,
          E: c,
          nu: s,
          gamma: i,
          c: p,
          phi: r,
          thickness: 1,
          supports: L,
          surcharge: d,
          surfaceYThreshold: F
        }), E = I.map((w) => [
          w[0],
          0,
          w[1]
        ]);
        e.nodes.val = E, e.elements.val = b;
        const A = /* @__PURE__ */ new Map();
        for (let w = 0; w < u.displacements.length; w++) {
          const [v, P] = u.displacements[w];
          A.set(w, [
            v,
            0,
            P,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: A
        }), e.nodeInputs && (e.nodeInputs.val = {
          supports: z
        }), e.elementInputs && (e.elementInputs.val = {});
        const N = /* @__PURE__ */ new Map();
        for (let w = 0; w < u.plasticStrain.length; w++) {
          const v = u.plasticStrain[w];
          N.set(w, [
            v,
            v,
            v
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: N
        });
        let W = 0;
        for (const [w, v] of u.displacements) {
          const P = Math.sqrt(w * w + v * v);
          W = Math.max(W, P);
        }
        let x = 0;
        for (const w of u.plasticStrain) x = Math.max(x, w);
        console.log(`Talud SRM: ${I.length} nodos, ${b.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${p} kPa, \u03C6=${r}\xB0, \u03B3=${i}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${u.fos.toFixed(3)}`), console.log(`  max|u| = ${W.toExponential(4)}`), console.log(`  max \u03B5_pl = ${x.toExponential(4)}`), u.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : u.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (k) {
        console.warn("Talud SRM failed:", k.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    let xo = null, qt = null, vo = null;
    function _a() {
      let t = document.getElementById("sections");
      if (!t) {
        t = document.createElement("div"), t.id = "sections";
        const o = document.getElementById("parameters");
        let n = document.getElementById("right-panels-wrapper");
        if (!n && o) {
          n = document.createElement("div"), n.id = "right-panels-wrapper", n.style.cssText = "position:absolute;bottom:0;right:0;z-index:3;max-height:95vh;display:flex;flex-direction:row;gap:0;align-items:flex-end;pointer-events:none;";
          let l = document.getElementById("luces-panel");
          l || (l = document.createElement("div"), l.id = "luces-panel", l.style.cssText = "width:180px;max-height:90vh;overflow-y:auto;pointer-events:auto;"), o.style.cssText = "width:240px;position:static;max-height:90vh;overflow-y:auto;pointer-events:auto;";
          const a = o.parentElement;
          a.removeChild(o), n.appendChild(t), n.appendChild(l), n.appendChild(o), a.appendChild(n);
        }
        n ? t.style.cssText = "width:200px;max-height:90vh;overflow-y:auto;pointer-events:auto;" : (t.style.cssText = "position:absolute;bottom:0;right:316px;width:250px;z-index:3;max-height:80vh;overflow-y:auto;", document.body.appendChild(t));
      }
      return t;
    }
    function zt(t) {
      const o = nn.find((n) => n.id === R);
      return t / o.toM;
    }
    function Lt(t) {
      const o = nn.find((n) => n.id === R);
      return t * o.toM;
    }
    function No(t) {
      const o = hs.find((l) => l.id === X.forceId), n = nn.find((l) => l.id === X.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function Hn(t) {
      const o = hs.find((l) => l.id === X.forceId), n = nn.find((l) => l.id === X.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function jn() {
      return X.label;
    }
    function Ba() {
      switch (nn.find((o) => o.id === R).id) {
        case "m":
          return [
            0.1,
            2,
            0.05
          ];
        case "cm":
          return [
            10,
            200,
            5
          ];
        case "mm":
          return [
            100,
            2e3,
            50
          ];
        case "in":
          return [
            4,
            80,
            1
          ];
        case "ft":
          return [
            0.3,
            6,
            0.1
          ];
      }
    }
    function Da() {
      const t = No(20594), o = No(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function qs(t, o, n, l, a) {
      const c = _e.steelVigaType, s = c === 0 ? Tn() : zn();
      if (_e.vigaMat === 0) {
        for (let i = 0; i < o.length; i++) {
          const p = o[i], r = `b${n}${i}`, d = `h${n}${i}`, g = {};
          g[r] = +zt(p.b).toFixed(2), g[d] = +zt(p.h).toFixed(2), t.addBinding(g, r, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${i + 1}`
          }), t.addBinding(g, d, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${i + 1}`
          });
        }
        t.on("change", (i) => {
          var _a2;
          const p = (_a2 = i.target) == null ? void 0 : _a2.key, r = p == null ? void 0 : p.match(new RegExp(`^b${n}(\\d+)$`)), d = p == null ? void 0 : p.match(new RegExp(`^h${n}(\\d+)$`));
          r && (o[parseInt(r[1])].b = Lt(i.value), Oe()), d && (o[parseInt(d[1])].h = Lt(i.value), Oe());
        });
      } else if (c <= 1) {
        for (let i = 0; i < o.length; i++) {
          const p = {};
          p[`p${n}${i}`] = o[i].profileIdx ?? 0, t.addBinding(p, `p${n}${i}`, {
            label: `sv${n}${i + 1}`,
            options: s
          });
        }
        t.on("change", (i) => {
          var _a2, _b;
          const r = (_b = (_a2 = i.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          r && (o[parseInt(r[1])].profileIdx = i.value, Oe());
        });
      } else if (c === 2) {
        for (let i = 0; i < o.length; i++) {
          const p = o[i], r = {}, d = `${n}${i}`;
          r[`bf${d}`] = +zt(p.bf ?? 0.2).toFixed(3), r[`h${d}`] = +zt(p.hf ?? 0.4).toFixed(3), r[`tf${d}`] = +zt(p.tf ?? 0.015).toFixed(3), r[`tw${d}`] = +zt(p.tw ?? 0.01).toFixed(3), t.addBinding(r, `bf${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${n}${i + 1}`
          }), t.addBinding(r, `h${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${i + 1}`
          }), t.addBinding(r, `tf${d}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `tf sv${n}${i + 1}`
          }), t.addBinding(r, `tw${d}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `tw sv${n}${i + 1}`
          });
        }
        t.on("change", (i) => {
          var _a2;
          const p = (_a2 = i.target) == null ? void 0 : _a2.key;
          for (let r = 0; r < o.length; r++) {
            const d = `${n}${r}`;
            p === `bf${d}` && (o[r].bf = Lt(i.value), Oe()), p === `h${d}` && (o[r].hf = Lt(i.value), Oe()), p === `tf${d}` && (o[r].tf = Lt(i.value), Oe()), p === `tw${d}` && (o[r].tw = Lt(i.value), Oe());
          }
        });
      } else {
        for (let i = 0; i < o.length; i++) {
          const p = o[i], r = {}, d = `${n}${i}`;
          r[`bc${d}`] = +zt(p.bc ?? 0.2).toFixed(3), r[`hc${d}`] = +zt(p.hc ?? 0.3).toFixed(3), r[`t${d}`] = +zt(p.t ?? 8e-3).toFixed(3), t.addBinding(r, `bc${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${i + 1}`
          }), t.addBinding(r, `hc${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${i + 1}`
          }), t.addBinding(r, `t${d}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `t sv${n}${i + 1}`
          });
        }
        t.on("change", (i) => {
          var _a2;
          const p = (_a2 = i.target) == null ? void 0 : _a2.key;
          for (let r = 0; r < o.length; r++) {
            const d = `${n}${r}`;
            p === `bc${d}` && (o[r].bc = Lt(i.value), Oe()), p === `hc${d}` && (o[r].hc = Lt(i.value), Oe()), p === `t${d}` && (o[r].t = Lt(i.value), Oe());
          }
        });
      }
    }
    function Yo() {
      var _a2;
      if (qt) {
        try {
          qt.dispose();
        } catch {
        }
        qt = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), T !== "edificio" && T !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = _a();
      if (!o) return;
      o.style.display = "";
      const n = M, l = Math.round(((_a2 = G.nPisos) == null ? void 0 : _a2.val) ?? 3), a = Ba(), c = Da(), s = re.length || 1, i = ne.length || 1;
      for (; _e.perFloor.length < l; ) {
        const m = _e.perFloor.length > 0 ? JSON.parse(JSON.stringify(_e.perFloor[_e.perFloor.length - 1])) : bo(s, i);
        _e.perFloor.push(m);
      }
      _e.perFloor.length > l && (_e.perFloor.length = l);
      for (const m of _e.perFloor) {
        for (; m.vigasX.length < s; ) m.vigasX.push(m.vigasX.length > 0 ? {
          ...m.vigasX[m.vigasX.length - 1]
        } : ht());
        for (m.vigasX.length > s && (m.vigasX.length = s); m.vigasY.length < i; ) m.vigasY.push(m.vigasY.length > 0 ? {
          ...m.vigasY[m.vigasY.length - 1]
        } : ht());
        m.vigasY.length > i && (m.vigasY.length = i);
      }
      qt = new mn({
        title: `Sections (${n.label})`,
        container: o
      });
      const p = {
        colMat: _e.colMat
      };
      if (qt.addBinding(p, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (m) => {
        _e.colMat = m.value, Yo(), Oe();
      }), _e.colMat === 0) {
        const m = {
          forma: _e.colShape
        };
        qt.addBinding(m, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (E) => {
          _e.colShape = E.value, Yo(), Oe();
        });
        const u = {
          fc: +No(_e.fc).toFixed(1)
        };
        qt.addBinding(u, "fc", {
          min: c[0],
          max: c[1],
          step: c[2],
          label: `f'c col (${jn()})`
        }), qt.on("change", (E) => {
          var _a3;
          ((_a3 = E.target) == null ? void 0 : _a3.key) === "fc" && (_e.fc = Hn(E.value), Oe());
        });
      } else if (_e.colMat === 1) {
        const m = {
          colType: _e.steelColType
        };
        qt.addBinding(m, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          _e.steelColType = u.value, Yo(), Oe();
        });
      }
      qt.addBlade({
        view: "separator"
      });
      const r = {
        vigaMat: _e.vigaMat
      };
      if (qt.addBinding(r, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (m) => {
        _e.vigaMat = m.value, Yo(), Oe();
      }), _e.vigaMat === 1) {
        const m = {
          vigaType: _e.steelVigaType
        };
        qt.addBinding(m, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          _e.steelVigaType = u.value, Yo(), Oe();
        });
      }
      const d = _e.steelColType === 0 ? Tn() : zn();
      _e.steelVigaType === 0 ? Tn() : zn();
      const g = R === "m" ? [
        5e-3,
        0.1,
        1e-3
      ] : R === "cm" ? [
        0.5,
        10,
        0.1
      ] : R === "mm" ? [
        5,
        100,
        1
      ] : R === "in" ? [
        0.2,
        4,
        0.05
      ] : [
        0.01,
        0.5,
        5e-3
      ];
      for (let m = 0; m < l; m++) {
        const u = _e.perFloor[m], E = qt.addFolder({
          title: `Piso ${m + 1}`,
          expanded: m < 2
        });
        if (_e.colMat === 0) if (_e.colShape === 1) {
          const A = {
            dCol: +zt(u.dCol).toFixed(2)
          };
          E.addBinding(A, "dCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "d col"
          }), E.on("change", (N) => {
            var _a3;
            ((_a3 = N.target) == null ? void 0 : _a3.key) === "dCol" && (u.dCol = Lt(N.value), Oe());
          });
        } else {
          const A = {
            bCol: +zt(u.bCol).toFixed(2),
            hCol: +zt(u.hCol).toFixed(2)
          };
          E.addBinding(A, "bCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "b col"
          }), E.addBinding(A, "hCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "h col"
          }), E.on("change", (N) => {
            var _a3, _b;
            ((_a3 = N.target) == null ? void 0 : _a3.key) === "bCol" && (u.bCol = Lt(N.value), Oe()), ((_b = N.target) == null ? void 0 : _b.key) === "hCol" && (u.hCol = Lt(N.value), Oe());
          });
        }
        else if (_e.colMat === 1) if (_e.steelColType <= 1) {
          const A = {
            col: u.colProfileIdx
          };
          E.addBinding(A, "col", {
            label: "Columna",
            options: d
          }).on("change", (N) => {
            u.colProfileIdx = N.value, Oe();
          });
        } else if (_e.steelColType === 2) {
          const A = {
            bf: +zt(u.colBf ?? 0.3).toFixed(3),
            h: +zt(u.colHf ?? 0.3).toFixed(3),
            tf: +zt(u.colTf ?? 0.02).toFixed(3),
            tw: +zt(u.colTw ?? 0.012).toFixed(3)
          };
          E.addBinding(A, "bf", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col bf"
          }), E.addBinding(A, "h", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), E.addBinding(A, "tf", {
            min: g[0],
            max: g[1],
            step: g[2],
            label: "Col tf"
          }), E.addBinding(A, "tw", {
            min: g[0],
            max: g[1],
            step: g[2],
            label: "Col tw"
          }), E.on("change", (N) => {
            var _a3, _b, _c, _d;
            ((_a3 = N.target) == null ? void 0 : _a3.key) === "bf" && (u.colBf = Lt(N.value), Oe()), ((_b = N.target) == null ? void 0 : _b.key) === "h" && (u.colHf = Lt(N.value), Oe()), ((_c = N.target) == null ? void 0 : _c.key) === "tf" && (u.colTf = Lt(N.value), Oe()), ((_d = N.target) == null ? void 0 : _d.key) === "tw" && (u.colTw = Lt(N.value), Oe());
          });
        } else {
          const A = {
            bc: +zt(u.colBc ?? 0.3).toFixed(3),
            hc: +zt(u.colHc ?? 0.3).toFixed(3),
            t: +zt(u.colT ?? 0.01).toFixed(3)
          };
          E.addBinding(A, "bc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col b"
          }), E.addBinding(A, "hc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), E.addBinding(A, "t", {
            min: g[0],
            max: g[1],
            step: g[2],
            label: "Col t"
          }), E.on("change", (N) => {
            var _a3, _b, _c;
            ((_a3 = N.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = Lt(N.value), Oe()), ((_b = N.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = Lt(N.value), Oe()), ((_c = N.target) == null ? void 0 : _c.key) === "t" && (u.colT = Lt(N.value), Oe());
          });
        }
        else {
          const A = {
            bc: +zt(u.colBc ?? 0.3).toFixed(3),
            hc: +zt(u.colHc ?? 0.3).toFixed(3),
            t: +zt(u.colT ?? 0.01).toFixed(3),
            Es: +No(u.colEs ?? 2e8).toFixed(0),
            nuS: u.colNuS ?? 0.3,
            fc: +No(u.colFc ?? 28e3).toFixed(1),
            nuC: u.colNuC ?? 0.2
          };
          E.addBinding(A, "bc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col b"
          }), E.addBinding(A, "hc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), E.addBinding(A, "t", {
            min: g[0],
            max: g[1],
            step: g[2],
            label: "Col t"
          }), E.addBlade({
            view: "separator"
          });
          const N = +No(1e8).toFixed(0), W = +No(3e8).toFixed(0), x = Math.max(1, Math.round((W - N) / 200));
          E.addBinding(A, "Es", {
            min: N,
            max: W,
            step: x,
            label: `Es (${jn()})`
          }), E.addBinding(A, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), E.addBinding(A, "fc", {
            min: c[0],
            max: c[1],
            step: c[2],
            label: `f'c (${jn()})`
          }), E.addBinding(A, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), E.on("change", (w) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = w.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = Lt(w.value), Oe()), ((_b = w.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = Lt(w.value), Oe()), ((_c = w.target) == null ? void 0 : _c.key) === "t" && (u.colT = Lt(w.value), Oe()), ((_d = w.target) == null ? void 0 : _d.key) === "Es" && (u.colEs = Hn(w.value), Oe()), ((_e2 = w.target) == null ? void 0 : _e2.key) === "nuS" && (u.colNuS = w.value, Oe()), ((_f = w.target) == null ? void 0 : _f.key) === "fc" && (u.colFc = Hn(w.value), Oe()), ((_g = w.target) == null ? void 0 : _g.key) === "nuC" && (u.colNuC = w.value, Oe());
          });
        }
        if (u.vigasX.length > 0) {
          const A = E.addFolder({
            title: `Vigas X (${u.vigasX.length})`,
            expanded: false
          });
          qs(A, u.vigasX, "x", a, g);
        }
        if (u.vigasY.length > 0) {
          const A = E.addFolder({
            title: `Vigas Y (${u.vigasY.length})`,
            expanded: false
          });
          qs(A, u.vigasY, "y", a, g);
        }
      }
      qt.addBlade({
        view: "separator"
      });
      const S = qt.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), $ = {
        activar: Te,
        direccion: Ue === "x" ? 0 : 1,
        cantidad: Ce
      };
      S.addBinding($, "activar", {
        label: "Activar"
      }), S.addBinding($, "direccion", {
        label: "Corren en",
        options: {
          "X (entre ejes Y)": 0,
          "Y (entre ejes X)": 1
        }
      }), S.addBinding($, "cantidad", {
        min: 1,
        max: 5,
        step: 1,
        label: "Cantidad/vano"
      }), S.on("change", (m) => {
        var _a3, _b, _c;
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (Te = m.value, Oe()), ((_b = m.target) == null ? void 0 : _b.key) === "direccion" && (Ue = m.value === 0 ? "x" : "y", Oe()), ((_c = m.target) == null ? void 0 : _c.key) === "cantidad" && (Ce = Math.round(m.value), Oe());
      }), qt.addBlade({
        view: "separator"
      });
      const y = qt.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), f = {
        activar: Ze,
        espesor: +zt(dt).toFixed(3),
        subdivX: ut,
        subdivY: Tt
      };
      y.addBinding(f, "activar", {
        label: "Activar losas"
      }), y.addBinding(f, "espesor", {
        min: a[0],
        max: a[1] * 0.3,
        step: a[2],
        label: `Espesor (${n.length})`
      }), y.addBinding(f, "subdivX", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. X"
      }), y.addBinding(f, "subdivY", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. Y"
      }), y.on("change", (m) => {
        var _a3, _b, _c, _d;
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (Ze = m.value, Oe()), ((_b = m.target) == null ? void 0 : _b.key) === "espesor" && (dt = Lt(m.value), Oe()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivX" && (ut = Math.round(m.value), Oe()), ((_d = m.target) == null ? void 0 : _d.key) === "subdivY" && (Tt = Math.round(m.value), Oe());
      }), qt.addBlade({
        view: "separator"
      });
      const b = qt.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), I = {
        espesor: +zt(Ye).toFixed(3),
        subdivH: Ge,
        subdivW: he
      };
      b.addBinding(I, "espesor", {
        min: a[0],
        max: a[1],
        step: a[2],
        label: `Espesor (${n.length})`
      }), b.addBinding(I, "subdivH", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. V"
      }), b.addBinding(I, "subdivW", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. H"
      }), b.on("change", (m) => {
        var _a3, _b, _c;
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "espesor" && (Ye = Lt(m.value), Oe()), ((_b = m.target) == null ? void 0 : _b.key) === "subdivH" && (Ge = Math.round(m.value), Oe()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivW" && (he = Math.round(m.value), Oe());
      });
      const L = re.length || 1, z = ne.length || 1, F = L + 1, k = z + 1;
      if (L > 0) {
        const m = b.addFolder({
          title: `Muros dir X (${L} vanos)`,
          expanded: false
        });
        for (let u = 0; u < L; u++) for (let E = 0; E < k; E++) {
          const A = `wx_${u}_${E}`, N = ye.some((w) => w.dir === "x" && w.bay === u && w.axisIdx === E), W = {};
          W[A] = N;
          const x = `Vano X${u + 1} / Eje Y${String.fromCharCode(65 + E)}`;
          m.addBinding(W, A, {
            label: x
          }).on("change", (w) => {
            w.value ? ye.push({
              dir: "x",
              bay: u,
              axisIdx: E,
              floors: [
                -1
              ]
            }) : ye = ye.filter((v) => !(v.dir === "x" && v.bay === u && v.axisIdx === E)), Oe();
          });
        }
      }
      if (z > 0) {
        const m = b.addFolder({
          title: `Muros dir Y (${z} vanos)`,
          expanded: false
        });
        for (let u = 0; u < z; u++) for (let E = 0; E < F; E++) {
          const A = `wy_${u}_${E}`, N = ye.some((w) => w.dir === "y" && w.bay === u && w.axisIdx === E), W = {};
          W[A] = N;
          const x = `Vano Y${u + 1} / Eje X${E + 1}`;
          m.addBinding(W, A, {
            label: x
          }).on("change", (w) => {
            w.value ? ye.push({
              dir: "y",
              bay: u,
              axisIdx: E,
              floors: [
                -1
              ]
            }) : ye = ye.filter((v) => !(v.dir === "y" && v.bay === u && v.axisIdx === E)), Oe();
          });
        }
      }
      if (ye.length > 0) {
        b.addBlade({
          view: "separator"
        });
        const m = {
          muros: `${ye.length} ubicaciones`
        };
        b.addBinding(m, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function mo() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (fe || (fe = t.innerHTML), $e) {
        try {
          $e.dispose();
        } catch {
        }
        $e = null;
      }
      if (xo) {
        try {
          xo.dispose();
        } catch {
        }
        xo = null;
      }
      t.innerHTML = "";
      const o = T.charAt(0).toUpperCase() + T.slice(1);
      $e = new mn({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = ws()[T];
      if (n) {
        const a = {};
        for (const s of n) a[s.key] = G[s.key].val;
        for (const s of n) $e.addBinding(a, s.key, {
          min: G[s.key].min,
          max: G[s.key].max,
          step: G[s.key].step,
          label: G[s.key].label
        });
        const c = $e.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const s of n) {
          const i = {
            min: G[s.key].min,
            max: G[s.key].max
          };
          c.addBinding(i, "min", {
            label: `${s.key} min`,
            step: s.step
          }), c.addBinding(i, "max", {
            label: `${s.key} max`,
            step: s.step
          }), c.on("change", () => {
            G[s.key] && (G[s.key].min = i.min, G[s.key].max = i.max, G[s.key].val < i.min && (G[s.key].val = i.min), G[s.key].val > i.max && (G[s.key].val = i.max)), mo(), Oe();
          });
        }
        $e.on("change", (s) => {
          var _a2, _b;
          const i = (_a2 = s.target) == null ? void 0 : _a2.key;
          if (i && G[i]) {
            if (G[i].val = s.value, T === "edificio" && (i === "nVanosX" || i === "nVanosY" || i === "nPisos")) {
              if (i === "nVanosX" || i === "nVanosY") {
                const p = Math.round(G.nVanosX.val), r = Math.round(G.nVanosY.val);
                for (; re.length < p; ) re.push(re[re.length - 1] ?? M.defaultSpan);
                for (re.length > p && (re.length = p); ne.length < r; ) ne.push(ne[ne.length - 1] ?? M.defaultSpan * 0.8);
                ne.length > r && (ne.length = r);
              }
              if (i === "nPisos" || i === "hPiso") {
                const p = Math.round(G.nPisos.val), r = ((_b = G.hPiso) == null ? void 0 : _b.val) ?? 3;
                for (; _.length < p; ) _.push(_[_.length - 1] ?? r);
                _.length > p && (_.length = p);
              }
              mo();
            }
            Oe();
          }
        });
      }
      if (T === "edificio") {
        if (vo) {
          try {
            vo.dispose();
          } catch {
          }
          vo = null;
        }
        const a = document.getElementById("luces-panel");
        if (a) {
          let c = function() {
            var _a2, _b, _c, _d;
            const p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", r = ((_a2 = G.Lvix) == null ? void 0 : _a2.val) || 0, d = ((_b = G.Lvdx) == null ? void 0 : _b.val) || 0, g = ((_c = G.Lviy) == null ? void 0 : _c.val) || 0, S = ((_d = G.Lvdy) == null ? void 0 : _d.val) || 0;
            let $ = "X: ";
            r > 0 && ($ += `\u251C${r.toFixed(1)}\u2524`);
            for (let b = 0; b < re.length; b++) $ += `[${p[b + (r > 0 ? 1 : 0)]}]\u2500\u2500${re[b].toFixed(1)}\u2500\u2500`;
            $ += `[${p[re.length + (r > 0 ? 1 : 0)]}]`, d > 0 && ($ += `\u251C${d.toFixed(1)}\u2524`);
            let y = "Y: ";
            g > 0 && (y += `\u251C${g.toFixed(1)}\u2524`);
            for (let b = 0; b < ne.length; b++) y += `[${b + 1 + (g > 0 ? 1 : 0)}]\u2500\u2500${ne[b].toFixed(1)}\u2500\u2500`;
            y += `[${ne.length + 1 + (g > 0 ? 1 : 0)}]`, S > 0 && (y += `\u251C${S.toFixed(1)}\u2524`);
            let f = "Z: ";
            for (let b = 0; b < _.length; b++) f += `P${b + 1}=${_[b].toFixed(1)} `;
            i.textContent = $ + `
` + y + `
` + f;
          };
          a.innerHTML = "";
          const s = M;
          try {
            vo = new mn({
              title: `Luces (${s.length})`,
              container: a
            });
            const p = vo.addFolder({
              title: "Luces X",
              expanded: true
            });
            for (let d = 0; d < re.length; d++) {
              const g = d, S = {
                v: re[d]
              };
              p.addBinding(S, "v", {
                min: s.spanRange[0],
                max: s.spanRange[1],
                step: s.spanRange[2],
                label: `svx${d + 1}`
              }).on("change", ($) => {
                re[g] = $.value, Oe();
              });
            }
            const r = vo.addFolder({
              title: "Luces Y",
              expanded: true
            });
            for (let d = 0; d < ne.length; d++) {
              const g = d, S = {
                v: ne[d]
              };
              r.addBinding(S, "v", {
                min: s.spanRange[0],
                max: s.spanRange[1],
                step: s.spanRange[2],
                label: `svy${d + 1}`
              }).on("change", ($) => {
                ne[g] = $.value, Oe();
              });
            }
            if (_.length > 0) {
              const d = vo.addFolder({
                title: "Alturas por Piso",
                expanded: true
              });
              for (let g = 0; g < _.length; g++) {
                const S = g, $ = {
                  v: _[g]
                };
                d.addBinding($, "v", {
                  min: s.heightRange[0],
                  max: s.heightRange[1],
                  step: s.heightRange[2],
                  label: `Piso ${g + 1}`
                }).on("change", (y) => {
                  _[S] = y.value, Oe();
                });
              }
            }
          } catch (p) {
            console.error("Luces Tweakpane error:", p);
          }
          const i = document.createElement("div");
          i.style.cssText = "font-family:monospace;font-size:10px;color:#aaa;padding:6px;background:#1a1a2e;border-radius:4px;margin-top:6px;line-height:1.6;white-space:pre;overflow-x:auto;", c(), a.appendChild(i);
        }
      }
      if (Yo(), $e) {
        $e.addBlade({
          view: "separator"
        });
        const a = kn()[T];
        if (a && a.length > 0) {
          const c = {};
          a.forEach((i, p) => {
            c[i.label] = p;
          });
          const s = {
            apoyo: St
          };
          $e.addBinding(s, "apoyo", {
            label: "Apoyo",
            options: c
          }).on("change", (i) => {
            St = i.value, Oe();
          });
        }
        if (T === "placa-3q" || T === "placa-q4") {
          const c = {
            teoria: Fe
          };
          $e.addBinding(c, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (s) => {
            Fe = s.value, Oe();
          });
        }
      }
      const l = Es()[T];
      if (l && l.length > 0) {
        xo = new mn({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const a = {};
        for (const s of l) a[s.key] = gt[s.key].val;
        for (const s of l) xo.addBinding(a, s.key, {
          min: gt[s.key].min,
          max: gt[s.key].max,
          step: gt[s.key].step,
          label: gt[s.key].label
        });
        const c = xo.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const s of l) {
          const i = {
            min: gt[s.key].min,
            max: gt[s.key].max
          };
          c.addBinding(i, "min", {
            label: `${s.key} min`,
            step: s.step
          }), c.addBinding(i, "max", {
            label: `${s.key} max`,
            step: s.step
          }), c.on("change", () => {
            gt[s.key] && (gt[s.key].min = i.min, gt[s.key].max = i.max, gt[s.key].val < i.min && (gt[s.key].val = i.min), gt[s.key].val > i.max && (gt[s.key].val = i.max)), mo(), Oe();
          });
        }
        xo.on("change", (s) => {
          var _a2;
          const i = (_a2 = s.target) == null ? void 0 : _a2.key;
          if (i && gt[i]) {
            if (gt[i].val = s.value, e.nodeInputs) {
              const p = e.nodeInputs.val;
              p.supports && (e.nodeInputs.val = {
                supports: p.supports
              });
            }
            setTimeout(() => Vn(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (a, c) => {
          if (G[a]) G[a].val = c, Oe(), mo();
          else if (gt[a]) {
            if (gt[a].val = c, e.nodeInputs) {
              const s = e.nodeInputs.val;
              s.supports && (e.nodeInputs.val = {
                supports: s.supports
              });
            }
            setTimeout(() => {
              Vn(), mo();
            }, 30);
          }
        },
        getParams: () => {
          const a = {};
          for (const c in G) a[c] = G[c].val;
          for (const c in gt) a[c] = gt[c].val;
          return a;
        },
        setGenerator: at,
        createCustomPanel: (a, c, s) => Ha(a, c, s),
        removeCustomPanel: (a) => {
          _s(a);
        }
      };
    }
    const Wn = /* @__PURE__ */ new Map();
    function Ha(t, o, n) {
      var _a2;
      _s(t);
      let l = document.querySelector("#cad3d-custom-panels");
      if (!l) {
        l = document.createElement("div"), l.id = "cad3d-custom-panels";
        const i = document.querySelector("#parameters");
        i ? (_a2 = i.parentElement) == null ? void 0 : _a2.insertBefore(l, i.nextSibling) : document.body.appendChild(l);
      }
      const a = document.createElement("div");
      a.className = "cad3d-custom-panel", a.style.marginBottom = "4px", l.appendChild(a);
      const c = new mn({
        title: t,
        container: a
      }), s = {};
      for (const [i, p] of Object.entries(o)) {
        const r = p.label || i;
        if (Array.isArray(p.value)) {
          s[i] = p.value;
          const d = {
            [i]: p.value.join(", ")
          };
          c.addBinding(d, i, {
            label: r
          }).on("change", (g) => {
            s[i] = g.value.split(",").map((S) => parseFloat(S.trim())).filter((S) => !isNaN(S)), n && n({
              ...s
            });
          });
        } else if (p.options) {
          s[i] = p.value;
          const d = {
            [i]: p.value
          }, g = {};
          for (const S of p.options) g[S] = S;
          c.addBinding(d, i, {
            label: r,
            options: g
          }).on("change", (S) => {
            s[i] = S.value, n && n({
              ...s
            });
          });
        } else if (typeof p.value == "boolean") {
          s[i] = p.value;
          const d = {
            [i]: p.value
          };
          c.addBinding(d, i, {
            label: r
          }).on("change", (g) => {
            s[i] = g.value, n && n({
              ...s
            });
          });
        } else if (typeof p.value == "string") {
          s[i] = p.value;
          const d = {
            [i]: p.value
          };
          c.addBinding(d, i, {
            label: r
          }).on("change", (g) => {
            s[i] = g.value, n && n({
              ...s
            });
          });
        } else {
          s[i] = p.value;
          const d = {
            [i]: p.value
          }, g = {
            label: r
          };
          p.min !== void 0 && (g.min = p.min), p.max !== void 0 && (g.max = p.max), p.step !== void 0 && (g.step = p.step), c.addBinding(d, i, g).on("change", (S) => {
            s[i] = S.value, n && n({
              ...s
            });
          });
        }
      }
      return n && c.addButton({
        title: "Aplicar"
      }).on("click", () => {
        n({
          ...s
        });
      }), Wn.set(t, {
        pane: c,
        values: s
      }), console.log(`Panel "${t}" created with ${Object.keys(o).length} params`), s;
    }
    function _s(t) {
      const o = Wn.get(t);
      if (o) {
        try {
          o.pane.dispose();
        } catch {
        }
        Wn.delete(t);
      }
    }
    function ja() {
      if ($e) {
        try {
          $e.dispose();
        } catch {
        }
        $e = null;
      }
      if (xo) {
        try {
          xo.dispose();
        } catch {
        }
        xo = null;
      }
      if (qt) {
        try {
          qt.dispose();
        } catch {
        }
        qt = null;
      }
      if (vo) {
        try {
          vo.dispose();
        } catch {
        }
        vo = null;
      }
      const t = document.getElementById("sections");
      t && t.remove();
      const o = document.getElementById("right-panels-wrapper"), n = document.getElementById("parameters");
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && fe && (n.innerHTML = fe);
    }
    const Ae = document.createElement("div");
    Ae.id = "cad3d-panel";
    const Bs = document.createElement("style");
    Bs.textContent = `
    /* \u2500\u2500 CSS Custom Properties (Dark = default) \u2500\u2500 */
    :root {
      --fem-bg: rgba(20,20,28,0.97);
      --fem-text: #ccc;
      --fem-border: #555;
      --fem-border-light: #444;
      --fem-border-cell: #333;
      --fem-shadow: rgba(0,0,0,0.6);
      --fem-heading: #0a84ff;
      --fem-section-title: #ee9b00;
      --fem-close: #888;
      --fem-close-hover: #fff;
      --fem-key: #aaa;
      --fem-val: #fff;
      --fem-label: #888;
      --fem-cell-text: #ddd;
      --fem-nonzero: #0f0;
      --fem-header-bg: #222;
      --fem-eq-text: #e8e8ff;
      --fem-eq-var: #7cb3ff;
      --fem-eq-op: #ccc;
      --fem-eq-sub: #aaa;
      --fem-eq-border: #888;
      --fem-eq-dots: #666;
      --fem-eq-box-bg: rgba(255,255,255,0.05);
      --fem-eq-box-border: #444;
      --fem-overlay-bg: rgba(10,10,15,0.97);
      --fem-section-bg: rgba(30,30,50,0.8);
      --fem-coeff-bg: rgba(40,35,20,0.8);
      --fem-numeric-bg: rgba(30,40,30,0.8);
      --fem-step-bg: rgba(255,255,255,0.03);
      --fem-coeff-item-bg: rgba(255,255,255,0.04);
      --fem-btn-bg: #333;
      --fem-btn-hover: #444;
      --fem-btn-text: #0a84ff;
      --fem-btn-hover-text: #fff;
      --fem-frac-border: #999;
      --fem-sym-cell: #aad;
      --fem-sym-nz: #7cb3ff;
      --fem-diag-bg: rgba(255,255,0,0.06);
      --fem-vec-inline: #ccc;
      --fem-full-close-bg: #444;
      --fem-full-close-border: #666;
      /* FEM Studio panel */
      --cad-bg: rgba(30,30,36,0.95);
      --cad-text: #ccc;
      --cad-border: #555;
      --cad-shadow: rgba(0,0,0,0.5);
      --cad-heading: #ee9b00;
      --cad-info: #888;
      --cad-btn-bg: #444;
      --cad-btn-text: #ddd;
      --cad-btn-border: #666;
      --cad-btn-hover-bg: #555;
      --cad-btn-hover-text: #fff;
      --cad-input-bg: #222;
      --cad-input-text: #0f0;
      --cad-input-border: #555;
      --cad-input-placeholder: #666;
      --cad-toggle-text: #888;
      --cad-toggle-hover: #fff;
    }
    /* \u2500\u2500 Light theme overrides \u2500\u2500 */
    :root.awatif-light {
      --fem-bg: rgba(250,250,252,0.97);
      --fem-text: #333;
      --fem-border: #bbb;
      --fem-border-light: #ccc;
      --fem-border-cell: #ccc;
      --fem-shadow: rgba(0,0,0,0.15);
      --fem-heading: #0066cc;
      --fem-section-title: #b87800;
      --fem-close: #888;
      --fem-close-hover: #000;
      --fem-key: #666;
      --fem-val: #111;
      --fem-label: #888;
      --fem-cell-text: #333;
      --fem-nonzero: #006600;
      --fem-header-bg: #e8e8e8;
      --fem-eq-text: #222;
      --fem-eq-var: #0055aa;
      --fem-eq-op: #555;
      --fem-eq-sub: #777;
      --fem-eq-border: #999;
      --fem-eq-dots: #aaa;
      --fem-eq-box-bg: rgba(0,0,0,0.03);
      --fem-eq-box-border: #ccc;
      --fem-overlay-bg: rgba(245,245,248,0.97);
      --fem-section-bg: rgba(240,240,250,0.9);
      --fem-coeff-bg: rgba(255,248,230,0.9);
      --fem-numeric-bg: rgba(240,250,240,0.9);
      --fem-step-bg: rgba(0,0,0,0.02);
      --fem-coeff-item-bg: rgba(0,0,0,0.03);
      --fem-btn-bg: #e0e0e0;
      --fem-btn-hover: #ccc;
      --fem-btn-text: #0066cc;
      --fem-btn-hover-text: #000;
      --fem-frac-border: #888;
      --fem-sym-cell: #336;
      --fem-sym-nz: #0055aa;
      --fem-diag-bg: rgba(255,255,0,0.08);
      --fem-vec-inline: #444;
      --fem-full-close-bg: #ddd;
      --fem-full-close-border: #aaa;
      /* FEM Studio panel light */
      --cad-bg: rgba(248,248,250,0.95);
      --cad-text: #333;
      --cad-border: #bbb;
      --cad-shadow: rgba(0,0,0,0.15);
      --cad-heading: #b87800;
      --cad-info: #888;
      --cad-btn-bg: #e0e0e0;
      --cad-btn-text: #333;
      --cad-btn-border: #bbb;
      --cad-btn-hover-bg: #ccc;
      --cad-btn-hover-text: #000;
      --cad-input-bg: #f0f0f0;
      --cad-input-text: #006600;
      --cad-input-border: #bbb;
      --cad-input-placeholder: #aaa;
      --cad-toggle-text: #888;
      --cad-toggle-hover: #000;
    }
    #cad3d-panel {
      position: fixed; bottom: 10px; left: 10px;
      background: var(--cad-bg); color: var(--cad-text);
      border: 1px solid var(--cad-border); border-radius: 6px;
      padding: 12px 14px; font-family: monospace; font-size: 12px;
      z-index: 999999; width: 200px; box-sizing: border-box;
      max-height: calc(100vh - 20px); overflow-y: auto; overflow-x: hidden;
      user-select: none; cursor: move;
      box-shadow: 0 4px 16px var(--cad-shadow); pointer-events: auto;
      height: auto;
    }
    #cad3d-panel::-webkit-scrollbar { width: 6px; }
    #cad3d-panel::-webkit-scrollbar-track { background: transparent; }
    #cad3d-panel::-webkit-scrollbar-thumb { background: var(--cad-border); border-radius: 3px; }
    #cad3d-panel::-webkit-scrollbar-thumb:hover { background: var(--cad-heading); }
    #cad3d-panel h3 { margin: 0 0 6px 0; color: var(--cad-heading); font-size: 13px; cursor: move; display: flex; justify-content: space-between; align-items: center; }
    #cad3d-panel .info-row { display: flex; justify-content: space-between; padding: 2px 0; }
    #cad3d-panel .info-val { color: var(--fem-val); font-weight: bold; }
    #cad3d-panel .btn-row { display: flex; gap: 4px; flex-wrap: wrap; margin-top: 4px; }
    #cad3d-panel button { background: var(--cad-btn-bg); color: var(--cad-btn-text); border: 1px solid var(--cad-btn-border); border-radius: 3px; padding: 3px 8px; font-family: monospace; font-size: 11px; cursor: pointer; }
    #cad3d-panel button:hover { background: var(--cad-btn-hover-bg); color: var(--cad-btn-hover-text); }
    #cad3d-panel button.active { background: var(--cad-heading); color: #000; border-color: var(--cad-heading); }
    #cad3d-panel button.view-active { background: var(--fem-heading); color: #fff; border-color: var(--fem-heading); }
    #cad3d-panel .cmd-input { width: 100%; box-sizing: border-box; margin-top: 8px; background: var(--cad-input-bg); color: var(--cad-input-text); border: 1px solid var(--cad-input-border); border-radius: 3px; padding: 4px 6px; font-family: monospace; font-size: 11px; cursor: text; }
    #cad3d-panel .cmd-input::placeholder { color: var(--cad-input-placeholder); }
    #cad3d-panel .section-label { color: var(--cad-info); font-size: 10px; margin-top: 8px; margin-bottom: 3px; text-transform: uppercase; letter-spacing: 1px; }
    /* Collapsed: hide everything except the toggle button */
    #cad3d-panel.collapsed { width: auto; padding: 4px 6px; border-radius: 4px; overflow: hidden; }
    #cad3d-panel.collapsed h3 { display: none; }
    #cad3d-panel.collapsed .panel-body { display: none; }
    #cad3d-panel.collapsed .toggle-btn-collapsed { display: inline-block; }
    #cad3d-panel .toggle-btn-collapsed { display: none; background: var(--cad-heading); color: #000; border: none; border-radius: 3px; padding: 3px 8px; font-family: monospace; font-size: 11px; cursor: pointer; font-weight: bold; }
    #cad3d-panel .toggle-btn-collapsed:hover { background: #ffb300; }
    #cad3d-panel .toggle-btn { background: none; border: none; color: var(--cad-toggle-text); cursor: pointer; font-size: 14px; padding: 0; line-height: 1; }
    #cad3d-panel .toggle-btn:hover { color: var(--cad-toggle-hover); }
    /* \u2500\u2500 Mobile: hamburger toggle \u2500\u2500 */
    #mobile-menu-btn {
      display: none;
      position: fixed; top: 10px; left: 10px; z-index: 1000001;
      width: 40px; height: 40px; border-radius: 8px;
      background: rgba(30,30,30,0.9); color: #fff; border: 1px solid #555;
      font-size: 22px; cursor: pointer;
      align-items: center; justify-content: center;
      backdrop-filter: blur(4px);
    }
    /* \u2500\u2500 Mobile portrait: FEM Studio panel \u2500\u2500 */
    @media (max-width: 600px) {
      #mobile-menu-btn { display: flex; }
      #cad3d-panel {
        width: 170px; padding: 8px 10px; font-size: 11px;
        max-height: calc(100vh - 20px); top: 10px; bottom: auto; left: 5px;
        overflow-y: auto;
        display: none;
      }
      #cad3d-panel.mobile-open { display: block; }
      #cad3d-panel button { padding: 2px 5px; font-size: 10px; }
      #cad3d-panel .btn-row { gap: 2px; margin-top: 2px; }
      #cad3d-panel h3 { font-size: 11px; margin-bottom: 4px; }
      #cad3d-panel .cmd-input { font-size: 10px; padding: 3px 4px; margin-top: 4px; }
      #cad3d-panel .section-label { font-size: 9px; margin-top: 4px; }
      #fem-inspect-panel { width: calc(100% - 10px) !important; right: 5px !important; left: 5px !important; top: auto !important; bottom: 5px !important; max-height: 50vh; }
    }
    /* \u2500\u2500 Mobile landscape: short height \u2500\u2500 */
    @media (max-height: 500px) and (orientation: landscape) {
      #cad3d-panel {
        width: 140px; padding: 4px 6px; font-size: 10px;
        max-height: calc(100vh - 10px); bottom: 5px; left: 5px;
        top: 5px; overflow-y: auto;
      }
      #cad3d-panel h3 { font-size: 10px; margin-bottom: 2px; }
      #cad3d-panel button { padding: 1px 4px; font-size: 9px; }
      #cad3d-panel .btn-row { gap: 1px; margin-top: 1px; }
      #cad3d-panel .section-label { font-size: 8px; margin-top: 2px; }
      #cad3d-panel .cmd-input { font-size: 9px; padding: 2px 3px; margin-top: 2px; }
      /* Collapse sections panel on landscape mobile */
      .cad3d-sections-panel { display: none !important; }
      .cad3d-params-panel { display: none !important; }
      /* Make 3D viewer use full width minus CLI panel */
      canvas { position: fixed !important; top: 0 !important; left: 150px !important; width: calc(100vw - 150px) !important; height: 100vh !important; }
    }
    /* \u2500\u2500 Small mobile (< 400px width) \u2500\u2500 */
    @media (max-width: 400px) {
      #cad3d-panel {
        width: 130px; padding: 4px 6px; font-size: 9px;
        max-height: 50vh;
      }
      #cad3d-panel button { padding: 1px 3px; font-size: 8px; min-width: 0; }
    }
    #fem-inspect-panel {
      position: fixed; top: 10px; right: 10px;
      background: var(--fem-bg); color: var(--fem-text);
      border: 1px solid var(--fem-border); border-radius: 8px;
      padding: 14px 16px; font-family: monospace; font-size: 11px;
      z-index: 999999; width: 420px; max-height: calc(100vh - 20px);
      overflow-y: auto; box-shadow: 0 4px 20px var(--fem-shadow);
      pointer-events: auto;
    }
    #fem-inspect-panel h3 { margin: 0 0 8px 0; color: var(--fem-heading); font-size: 14px; display: flex; justify-content: space-between; }
    #fem-inspect-panel .close-btn { background: none; border: none; color: var(--fem-close); cursor: pointer; font-size: 16px; }
    #fem-inspect-panel .close-btn:hover { color: var(--fem-close-hover); }
    #fem-inspect-panel .section { margin-top: 10px; border-top: 1px solid var(--fem-border-light); padding-top: 8px; }
    #fem-inspect-panel .section-title { color: var(--fem-section-title); font-size: 12px; font-weight: bold; margin-bottom: 4px; }
    #fem-inspect-panel .prop-row { display: flex; justify-content: space-between; padding: 1px 0; }
    #fem-inspect-panel .prop-key { color: var(--fem-key); }
    #fem-inspect-panel .prop-val { color: var(--fem-val); font-weight: bold; }
    #fem-inspect-panel .matrix-label { color: var(--fem-label); font-size: 10px; margin-top: 6px; }
    #fem-inspect-panel table { border-collapse: collapse; width: 100%; margin-top: 4px; font-size: 10px; }
    #fem-inspect-panel td { border: 1px solid var(--fem-border-cell); padding: 2px 4px; text-align: right; color: var(--fem-cell-text); white-space: nowrap; }
    #fem-inspect-panel td.nonzero { color: var(--fem-nonzero); }
    #fem-inspect-panel td.header { color: var(--fem-section-title); font-weight: bold; background: var(--fem-header-bg); text-align: center; }
    #fem-inspect-panel .result-val { font-size: 13px; color: var(--fem-nonzero); font-weight: bold; }
    #fem-inspect-panel .dof-labels { color: var(--fem-label); font-size: 9px; }
    button.inspect-active { background: #ff4444 !important; color: #fff !important; border-color: #ff4444 !important; }
    /* Math formula rendering */
    .fem-eq { font-family: 'STIX Two Math','Cambria Math','Times New Roman',serif; font-size: 13px; color: var(--fem-eq-text); line-height: 1.6; margin: 6px 0 8px 0; text-align: center; }
    .fem-eq .var { color: var(--fem-eq-var); font-style: italic; }
    .fem-eq .op { color: var(--fem-eq-op); padding: 0 2px; }
    .fem-eq .frac { display: inline-flex; flex-direction: column; align-items: center; vertical-align: middle; margin: 0 2px; }
    .fem-eq .frac-num { border-bottom: 1px solid var(--fem-frac-border); padding: 0 4px 1px; font-size: 11px; }
    .fem-eq .frac-den { padding: 1px 4px 0; font-size: 11px; }
    .fem-eq sub { font-size: 0.75em; vertical-align: sub; color: var(--fem-eq-sub); }
    .fem-eq sup { font-size: 0.75em; vertical-align: super; }
    .fem-eq .mat-sym { display: inline-grid; border-left: 2px solid var(--fem-eq-border); border-right: 2px solid var(--fem-eq-border); padding: 2px 6px; margin: 0 4px; vertical-align: middle; gap: 1px 8px; font-size: 11px; }
    .fem-eq .mat-sym .cell { text-align: center; }
    .fem-eq .mat-sym .dots { color: var(--fem-eq-dots); }
    .fem-eq .highlight { color: var(--fem-nonzero); font-weight: bold; }
    .fem-eq .eq-box { background: var(--fem-eq-box-bg); border: 1px solid var(--fem-eq-box-border); border-radius: 4px; padding: 6px 10px; margin: 4px 0; }
    /* Full matrix overlay */
    .fem-full-overlay { position: fixed; inset: 0; background: var(--fem-overlay-bg); z-index: 9999999; overflow: auto; padding: 20px; }
    .fem-full-overlay .close-full { position: fixed; top: 12px; right: 16px; background: var(--fem-full-close-bg); color: var(--fem-val); border: 1px solid var(--fem-full-close-border); border-radius: 4px; padding: 6px 14px; cursor: pointer; font-size: 13px; z-index: 10000000; }
    .fem-full-overlay .close-full:hover { background: var(--fem-btn-hover); }
    .fem-full-overlay h2 { color: var(--fem-section-title); margin: 0 0 16px 0; font-size: 18px; font-family: monospace; }
    .fem-full-sections { display: flex; flex-direction: column; gap: 20px; }
    .fem-full-sections .full-section { background: var(--fem-section-bg); border: 1px solid var(--fem-border); border-radius: 6px; padding: 16px; overflow-x: auto; }
    .fem-full-sections .full-section.coeff { background: var(--fem-coeff-bg); }
    .fem-full-sections .full-section.numeric { background: var(--fem-numeric-bg); }
    .fem-full-sections .side-title { font-size: 13px; color: var(--fem-label); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
    .fem-full-sections table { border-collapse: collapse; font-family: monospace; font-size: 11px; }
    .fem-full-sections td { border: 1px solid var(--fem-border-cell); padding: 3px 6px; text-align: right; color: var(--fem-cell-text); white-space: nowrap; }
    .fem-full-sections td.nz { color: var(--fem-nonzero); }
    .fem-full-sections td.hdr { color: var(--fem-section-title); font-weight: bold; background: var(--fem-header-bg); text-align: center; }
    .fem-full-sections td.diag { background: var(--fem-diag-bg); }
    .fem-full-sections .coeff-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 8px; }

    /* Report Explained (FEM Solver) overlay */
    .fem-solver-overlay { position: fixed; inset: 0; background: #0d1117; z-index: 9999999; overflow: auto; padding: 20px 30px; color: #c9d1d9; font-family: 'Segoe UI', monospace, sans-serif; font-size: 13px; }
    .fem-solver-overlay h2 { color: #58a6ff; margin: 0 0 12px 0; font-size: 20px; }
    .fem-solver-overlay h3 { color: #f0883e; margin: 16px 0 6px 0; font-size: 15px; cursor: pointer; border-bottom: 1px solid #30363d; padding-bottom: 4px; }
    .fem-solver-overlay h3:hover { color: #ffa657; }
    .fem-solver-overlay h4 { color: #7ee787; margin: 8px 0 4px 0; font-size: 13px; cursor: pointer; }
    .fem-solver-overlay h4:hover { color: #a5f3c0; }
    .fem-rpt-close { position: fixed; top: 12px; right: 20px; background: #21262d; color: #c9d1d9; border: 1px solid #30363d; border-radius: 4px; padding: 6px 14px; cursor: pointer; font-size: 14px; z-index: 10000000; }
    .fem-rpt-close:hover { background: #30363d; }
    .fem-rpt-summary { display: flex; gap: 20px; margin-bottom: 12px; color: #8b949e; font-size: 13px; }
    .fem-rpt-summary b { color: #58a6ff; }
    .fem-rpt-body { margin-left: 8px; }
    .fem-rpt-elem { margin: 4px 0; border-left: 2px solid #21262d; padding-left: 8px; }
    .fem-rpt-elem-body { margin: 4px 0 8px 0; }
    .fem-rpt-props { color: #8b949e; font-size: 11px; margin: 2px 0; }
    .fem-rpt-mtx-title { color: #f78166; font-size: 11px; font-weight: bold; margin: 6px 0 2px 0; }
    .fem-rpt-matrix { border-collapse: collapse; font-family: 'Consolas', monospace; font-size: 10px; }
    .fem-rpt-matrix td { padding: 1px 5px; text-align: right; border: 1px solid #21262d; white-space: nowrap; }
    .fem-rpt-matrix .fem-hdr { color: #58a6ff; font-weight: bold; text-align: center; background: #161b22; font-size: 9px; }
    .fem-full-sections .coeff-item { background: var(--fem-coeff-item-bg); border: 1px solid var(--fem-eq-box-border); border-radius: 4px; padding: 8px 12px; font-family: 'STIX Two Math','Cambria Math','Times New Roman',serif; font-size: 13px; color: var(--fem-eq-text); line-height: 1.6; }
    .fem-full-sections .coeff-item .var { color: var(--fem-eq-var); font-style: italic; }
    .fem-full-sections .coeff-item .frac { display: inline-flex; flex-direction: column; align-items: center; vertical-align: middle; margin: 0 2px; }
    .fem-full-sections .coeff-item .frac-num { border-bottom: 1px solid var(--fem-frac-border); padding: 0 4px 1px; font-size: 11px; }
    .fem-full-sections .coeff-item .frac-den { padding: 1px 4px 0; font-size: 11px; }
    .fem-full-sections .coeff-item .highlight { color: var(--fem-nonzero); font-weight: bold; }
    .fem-full-sections .coeff-item sub { font-size: 0.75em; vertical-align: sub; color: var(--fem-eq-sub); }
    .fem-full-sections .coeff-item sup { font-size: 0.75em; vertical-align: super; }
    /* Step-by-step force recovery */
    .fem-step { background: var(--fem-step-bg); border: 1px solid var(--fem-eq-box-border); border-radius: 4px; padding: 8px 12px; margin: 6px 0; font-family: 'STIX Two Math','Cambria Math','Times New Roman',serif; font-size: 12px; color: var(--fem-eq-text); overflow-x: auto; }
    .fem-step .step-title { color: var(--fem-section-title); font-weight: bold; font-size: 11px; margin-bottom: 4px; font-family: monospace; }
    .fem-step .step-eq { margin: 4px 0; }
    .fem-step .var { color: var(--fem-eq-var); font-style: italic; }
    .fem-step .highlight { color: var(--fem-nonzero); font-weight: bold; }
    .fem-step .vec-inline { color: var(--fem-vec-inline); font-family: monospace; font-size: 11px; }
    .fem-step sub { font-size: 0.75em; vertical-align: sub; color: var(--fem-eq-sub); }
    .fem-step .frac { display: inline-flex; flex-direction: column; align-items: center; vertical-align: middle; margin: 0 2px; }
    .fem-step .frac-num { border-bottom: 1px solid var(--fem-frac-border); padding: 0 4px 1px; font-size: 10px; }
    .fem-step .frac-den { padding: 1px 4px 0; font-size: 10px; }
    .fem-full-sym { font-family: 'STIX Two Math','Cambria Math','Times New Roman',serif; }
    .fem-full-sym table { font-family: 'STIX Two Math','Cambria Math',serif; font-size: 13px; }
    .fem-full-sym td { border: 1px solid var(--fem-eq-box-border); padding: 4px 8px; text-align: center; color: var(--fem-sym-cell); vertical-align: middle; }
    .fem-full-sym td.nz { color: var(--fem-sym-nz); }
    .fem-full-sym .frac { display: inline-flex; flex-direction: column; align-items: center; vertical-align: middle; margin: 0 1px; line-height: 1.2; }
    .fem-full-sym .frac-num { border-bottom: 1px solid var(--fem-eq-border); padding: 0 3px 1px; font-size: 11px; white-space: nowrap; }
    .fem-full-sym .frac-den { padding: 1px 3px 0; font-size: 11px; white-space: nowrap; }
    .fem-full-sym .var { color: var(--fem-sym-nz); font-style: italic; }
    .fem-full-sym sub { font-size: 0.7em; vertical-align: sub; color: var(--fem-eq-sub); }
    .fem-expand-btn { background: var(--fem-btn-bg); color: var(--fem-btn-text); border: 1px solid var(--fem-border); border-radius: 3px; padding: 2px 8px; cursor: pointer; font-size: 10px; margin-left: 8px; }
    .fem-expand-btn:hover { background: var(--fem-btn-hover); color: var(--fem-btn-hover-text); }
  `, document.head.appendChild(Bs), xl() === "light" && document.documentElement.classList.add("awatif-light"), vl((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), T && It(true);
    }), Ae.innerHTML = `
    <button class="toggle-btn-collapsed" id="cad3d-expand">FEM Studio</button>
    <h3>FEM Studio <span style="font-size:10px;color:var(--cad-info);margin-left:6px" id="cad3d-info">0n 0e</span><button class="toggle-btn" id="cad3d-toggle">_</button></h3>
    <div class="panel-body">
      <div class="btn-row">
        <button data-ex="truss" data-i18n="Cercha">Cercha</button>
        <button data-ex="beams" data-i18n="Portico">Portico</button>
        <button data-ex="3d" data-i18n="Torre">Torre</button>
        <button data-ex="galpon" data-i18n="Galpon">Galpon</button>
        <button data-ex="edificio" data-i18n="Edificio">Edificio</button>
        <button data-ex="edif-muros" data-i18n="Edif. Muros">Edif. Muros</button>
        <button data-ex="edif-acero" data-i18n="Edif. Acero">Edif. Acero</button>
        <button data-ex="edif-acero-diag" data-i18n="Acero+Diag">Acero+Diag</button>
        <button data-ex="edif-mixto" data-i18n="Edif. Mixto">Edif. Mixto</button>
        <button data-ex="mezanine" data-i18n="Mezanine">Mezanine</button>
        <button data-ex="barra" data-i18n="Barra">Barra</button>
        <button data-ex="placa3q" data-i18n="Placa 3Q">Placa 3Q</button>
        <button data-ex="placa" data-i18n="Placa Q4">Placa Q4</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button data-ex="losa-rect" data-i18n="Losa Rect">Losa Rect</button>
        <button data-ex="losa-plana" data-i18n="Losa Plana">Losa Plana</button>
        <button data-ex="viga-alta" data-i18n="Viga Alta">Viga Alta</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button data-ex="muro-contencion" data-i18n="Muro Cont.">Muro Cont.</button>
        <button data-ex="zapata" data-i18n="Zapata">Zapata</button>
        <button data-ex="placa-orificios" data-i18n="Placa Base">Placa Base</button>
        <button data-ex="col-placa" data-i18n="Col+Placa 3D">Col+Placa 3D</button>
        <button data-ex="talud" data-i18n="Talud">Talud</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button data-ex="eiffel" data-i18n="Eiffel">Eiffel</button>
        <button data-ex="arco" data-i18n="Arco">Arco</button>
        <button data-ex="puente" data-i18n="Puente">Puente</button>
        <button data-ex="twisted" data-i18n="Twist">Twist</button>
        <button data-ex="burj" data-i18n="Burj">Burj</button>
        <button data-ex="opera" data-i18n="Opera">Opera</button>
        <button data-ex="diagrid" data-i18n="Diagrid">Diagrid</button>
        <button data-ex="muro-q4" data-i18n="Muro Q4">Muro Q4</button>
        <button data-ex="viga-q4" data-i18n="Viga Q4">Viga Q4</button>
        <button data-ex="placa-xz" data-i18n="Placa XZ">Placa XZ</button>
        <button data-ex="pergola" data-i18n="P\xE9rgola">P\xE9rgola</button>
      </div>
      <div class="btn-row" style="margin-top:4px">
        <button data-view="3d" class="view-active">3D</button>
        <button data-view="plan">Plan</button>
        <button data-view="elevX">EX</button>
        <button data-view="elevY">EY</button>
        <button id="cad3d-select" data-i18n="Select">Select</button>
        <button id="cad3d-draw" data-i18n="Draw">Draw</button>
        <button id="cad3d-inspect" data-i18n="Inspect">Inspect</button>
      </div>
      <div class="btn-row" id="cad3d-axis-buttons" style="margin-top:2px;display:none"></div>
      <div class="btn-row" id="cad3d-floor-buttons" style="margin-top:2px;display:none"></div>
      <div class="btn-row" style="margin-top:2px">
        <button id="cad3d-new-model" title="Nuevo modelo vac\xEDo" data-i18n="New" data-i18n-title="Nuevo modelo vac\xEDo">\u{1F195} New</button>
        <button id="cad3d-export" title="Exportar coordenadas y datos del modelo" data-i18n="Export" data-i18n-title="Exportar coordenadas y datos del modelo">\u{1F4CB} Export</button>
        <select id="cad3d-io-menu" title="Import/Export modelos" data-i18n-title="Import/Export modelos" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);padding:2px 4px;font-size:11px;cursor:pointer;">
          <option value="">\u{1F4C2} I/O</option>
          <option value="import-e2k">\u{1F4E5} Import E2K (ETABS)</option>
          <option value="import-s2k">\u{1F4E5} Import S2K (SAP2000)</option>
          <option value="import-ifc">\u{1F4E5} Import IFC (Revit/ArchiCAD)</option>
          <option value="export-e2k">\u{1F4E4} Export E2K (ETABS)</option>
          <option value="export-s2k">\u{1F4E4} Export S2K (SAP2000)</option>
          <option value="import-py">\u{1F4E5} Import OpenSeesPy</option>
          <option value="export-py">\u{1F4E4} Export OpenSeesPy</option>
          <option value="import-tcl">\u{1F4E5} Import OpenSees Tcl</option>
          <option value="export-tcl">\u{1F4E4} Export OpenSees Tcl</option>
        </select>
        <input type="file" id="cad3d-io-file" accept=".e2k,.E2K,.s2k,.S2K,.py,.tcl,.ifc,.IFC" style="display:none">
        <select id="cad3d-tests-menu" title="Validation tests vs ETABS" data-i18n-title="Validation tests vs ETABS" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);padding:2px 4px;font-size:11px;cursor:pointer;">
          <option value="">\u{1F9EA} Tests</option>
          <option value="test-cantilever">1. Cantilever (Exact)</option>
          <option value="test-portal-1p">2. Portal 1-Story (ETABS)</option>
          <option value="test-portal-2p">3. Portal 2-Story (ETABS)</option>
          <option value="test-wall-only">4. Wall Q4 Only (ETABS)</option>
          <option value="test-portal-wall">5. Portal + Wall (ETABS)</option>
          <option value="test-wilson-beam">6. Wilson Cantilever Q4 (incomp.)</option>
          <!-- Scordelis-Lo requires MITC4 for curved shells - not yet implemented -->
          <option value="test-all">\u25B6 Run All Tests</option>
        </select>
        <select id="cad3d-force-unit" title="Unidad de fuerza" data-i18n-title="Unidad de fuerza" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);padding:2px 4px;font-size:11px;cursor:pointer;">
          <option value="tonf">tonf</option><option value="kN">kN</option><option value="kgf">kgf</option>
          <option value="kip">kip</option><option value="lb">lb</option><option value="N">N</option>
        </select>
        <select id="cad3d-length-unit" title="Unidad de longitud" data-i18n-title="Unidad de longitud" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);padding:2px 4px;font-size:11px;cursor:pointer;">
          <option value="m">m</option><option value="cm">cm</option><option value="mm">mm</option>
          <option value="ft">ft</option><option value="in">in</option>
        </select>
        <button id="cad3d-btn-clear" style="margin-left:auto" data-i18n="Clear">Clear</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button data-preset="MKS" class="active" title="tonf+m, esfuerzos kgf/cm\xB2" data-i18n-title="tonf+m, esfuerzos kgf/cm\xB2">MKS</button>
        <button data-preset="SI" title="kN+m, esfuerzos kPa" data-i18n-title="kN+m, esfuerzos kPa">SI</button>
        <button data-preset="US" title="kip+in, esfuerzos ksi" data-i18n-title="kip+in, esfuerzos ksi">US</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button data-lang="es" class="active" style="font-size:10px">ES</button>
        <button data-lang="en" style="font-size:10px">EN</button>
      </div>
      <div class="btn-row" style="margin-top:4px">
        <button id="cad3d-modal" title="An\xE1lisis modal (frecuencias y modos)" data-i18n="Modal" data-i18n-title="An\xE1lisis modal (frecuencias y modos)">\u26A1 Modal</button>
        <button id="cad3d-mode-prev" style="display:none" title="Modo anterior" data-i18n-title="Modo anterior">\u25C0</button>
        <button id="cad3d-mode-next" style="display:none" title="Modo siguiente" data-i18n-title="Modo siguiente">\u25B6</button>
        <input id="cad3d-modal-scale" type="number" min="0.1" max="100" step="0.5" value="15" style="display:none;width:40px;font-size:10px;padding:1px 3px;background:var(--cad-bg);color:var(--cad-heading);border:1px solid var(--cad-border);border-radius:3px;text-align:center" title="Escala de animacion (% del modelo)" />
      </div>
      <div id="cad3d-mode-label" style="display:none;color:var(--cad-heading);font-size:10px;line-height:16px;padding:2px 4px;white-space:nowrap;overflow-x:auto">Modo 1</div>
      <div class="btn-row" style="margin-top:2px">
        <button id="cad3d-nonlinear" title="An\xE1lisis no-lineal din\xE1mico (BRB + sismo)" data-i18n="Nonlinear" data-i18n-title="An\xE1lisis no-lineal din\xE1mico (BRB + sismo)">\u{1F525} Nonlinear</button>
        <button id="cad3d-pushover" title="Pushover c\xEDclico con hist\xE9resis" data-i18n="Pushover" data-i18n-title="Pushover c\xEDclico con hist\xE9resis">\u{1F4CA} Pushover</button>
        <button id="cad3d-fem-solver" title="Report Explained: derivaci\xF3n FEM paso a paso de todos los elementos" data-i18n="Report Explained" data-i18n-title="Report Explained: derivaci\xF3n FEM paso a paso de todos los elementos">\u{1F4D0} Report Explained</button>
        <button id="cad3d-calc" title="Calculadora FEM: editor MATLAB + output KaTeX" data-i18n="C\xE1lculo" data-i18n-title="Calculadora FEM: editor MATLAB + output KaTeX">\u{1F9EE} C\xE1lculo</button>
        <button id="cad3d-log" title="Ver log del solver" data-i18n="Log" data-i18n-title="Ver log del solver">\u{1F4CB} Log</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button id="cad3d-cli-toggle" title="Abrir/cerrar consola CLI" data-i18n="CLI" data-i18n-title="Abrir/cerrar consola CLI">\u2328 CLI</button>
      </div>
      <div id="cad3d-cli-panel" style="display:none;margin-top:2px;background:rgba(0,0,0,0.8);border:1px solid #444;border-radius:4px;padding:4px;max-height:200px;overflow-y:auto">
        <div id="cad3d-cli-output" style="font-family:monospace;font-size:10px;color:#0f0;white-space:pre-wrap;max-height:140px;overflow-y:auto;margin-bottom:4px"></div>
        <input class="cmd-input" id="cad3d-cmd" placeholder="cad.addNode(0,0,0) | cad.building([5,5],[4],3) | cad.info()" style="width:100%;font-family:monospace" />
      </div>
    </div>
  `;
    let _t = null;
    function Wa() {
      var _a2, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, a = R, c = h, s = [];
      if (s.push("# Awatif FEM \u2014 Model Export"), s.push(`# Generator: ${T || "custom"}`), s.push(`# Units: ${c}, ${a}`), s.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), s.push(""), s.push(`## NODES (${t.length})`), s.push("# idx     X          Y          Z"), t.forEach((r, d) => {
        s.push(`  ${String(d).padStart(4)}  ${r[0].toFixed(4).padStart(10)}  ${r[1].toFixed(4).padStart(10)}  ${r[2].toFixed(4).padStart(10)}`);
      }), s.push(""), s.push(`## ELEMENTS (${o.length})`), s.push("# idx    nodeI  nodeJ"), o.forEach((r, d) => {
        const g = r.map((S) => String(S).padStart(6)).join("");
        s.push(`  ${String(d).padStart(4)}  ${g}`);
      }), s.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (s.push(`## SUPPORTS (${n.supports.size})`), s.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((r, d) => {
        const g = r.map((S) => S ? "  1" : "  0").join("");
        s.push(`  ${String(d).padStart(4)} ${g}`);
      }), s.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (s.push(`## LOADS (${n.loads.size})`), s.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((r, d) => {
        const g = r.map((S) => S.toFixed(3).padStart(11)).join(" ");
        s.push(`  ${String(d).padStart(4)}  ${g}`);
      }), s.push("")), l) {
        s.push("## ELEMENT PROPERTIES");
        const r = [
          {
            name: "E",
            map: l.elasticities
          },
          {
            name: "A",
            map: l.areas
          },
          {
            name: "Iz",
            map: l.momentsOfInertiaZ
          },
          {
            name: "Iy",
            map: l.momentsOfInertiaY
          },
          {
            name: "G",
            map: l.shearModuli
          },
          {
            name: "J",
            map: l.torsionalConstants
          },
          {
            name: "rho",
            map: l.densities
          }
        ], d = "# elem  " + r.map((g) => g.name.padStart(12)).join(" ");
        s.push(d);
        for (let g = 0; g < o.length; g++) {
          const S = r.map(($) => {
            var _a3;
            const y = (_a3 = $.map) == null ? void 0 : _a3.get(g);
            return y !== void 0 ? y.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          s.push(`  ${String(g).padStart(4)}  ${S}`);
        }
        s.push("");
      }
      const i = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      i && i.size > 0 && (s.push(`## DISPLACEMENTS (${i.size} nodes)`), s.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), i.forEach((r, d) => {
        const g = r.map((S) => S.toExponential(4).padStart(12)).join(" ");
        s.push(`  ${String(d).padStart(4)}  ${g}`);
      }), s.push(""));
      const p = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (p && p.size > 0 && (s.push(`## REACTIONS (${p.size} supports)`), s.push("# node          Rx           Ry           Rz           Mx           My           Mz"), p.forEach((r, d) => {
        const g = r.map((S) => S.toFixed(4).padStart(12)).join(" ");
        s.push(`  ${String(d).padStart(4)}  ${g}`);
      }), s.push("")), T) {
        s.push("## CLI COMMAND");
        const r = Object.entries(G).map(([d, g]) => `${d}=${g.val}`).join(" ");
        s.push(`cad.${T === "edificio" ? "building" : T}(${r})`);
      }
      return s.join(`
`);
    }
    let rn = false;
    function Ya() {
      var _a2, _b, _c, _d;
      if (_t) {
        _t.remove(), _t = null, rn = false;
        return;
      }
      const t = Wa();
      _t = document.createElement("div"), _t.id = "export-overlay", _t.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, _t.innerHTML = `
      <div id="export-header" style="display:flex; align-items:center; justify-content:space-between;
        padding:8px 12px; border-bottom:1px solid var(--cad-border,#333); cursor:default;
        border-radius:8px 8px 0 0; background:var(--cad-bg,#1a1a2e);">
        <span style="font-size:12px; font-weight:bold; color:var(--cad-heading,#e0e0e0);">
          \u{1F4CB} Export \u2014 ${e.nodes.val.length}n ${e.elements.val.length}e
        </span>
        <div style="display:flex; gap:4px;">
          <button id="export-copy" style="padding:3px 8px; font-size:11px; cursor:pointer;
            background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar al clipboard">
            \u{1F4CB} Copy
          </button>
          <button id="export-json" style="padding:3px 8px; font-size:11px; cursor:pointer;
            background:#1d3557; color:#fff; border:1px solid #457b9d; border-radius:3px;" title="Formato JSON">
            {} JSON
          </button>
          <button id="export-minimize" style="padding:3px 8px; font-size:11px; cursor:pointer;
            background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar / Restaurar">
            \u25AC
          </button>
          <button id="export-close" style="padding:3px 8px; font-size:11px; cursor:pointer;
            background:#6c757d; color:#fff; border:1px solid #888; border-radius:3px;" title="Cerrar">
            \u2715
          </button>
        </div>
      </div>
      <div id="export-body" style="display:flex; flex-direction:column; padding:8px 12px;">
        <textarea id="export-text" readonly style="height:350px; resize:vertical;
          font-family:'Cascadia Code','Fira Code',monospace; font-size:11px; line-height:1.4;
          background:#0d1117; color:#c9d1d9; border:1px solid #30363d; border-radius:4px;
          padding:10px; white-space:pre; overflow:auto; tab-size:8;"
        >${t.replace(/</g, "&lt;")}</textarea>
        <div id="export-status" style="font-size:11px; color:#40916c; margin-top:4px; height:14px;"></div>
      </div>
    `, document.body.appendChild(_t), (_a2 = _t.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        _t == null ? void 0 : _t.remove(), _t = null, rn = false;
      }), (_b = _t.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = _t.querySelector("#export-body"), n = _t.querySelector("#export-minimize");
        rn = !rn, rn ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", _t.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", _t.style.width = "720px");
      }), (_c = _t.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = _t.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = _t.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = _t.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e2, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, a = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, c = {
          generator: T || "custom",
          units: {
            force: h,
            length: R
          },
          nodes: o.map((d, g) => ({
            id: g,
            x: d[0],
            y: d[1],
            z: d[2]
          })),
          elements: n.map((d, g) => ({
            id: g,
            nodes: d
          }))
        };
        (l == null ? void 0 : l.supports) && (c.supports = [], l.supports.forEach((d, g) => c.supports.push({
          node: g,
          dofs: d
        }))), (l == null ? void 0 : l.loads) && (c.loads = [], l.loads.forEach((d, g) => c.loads.push({
          node: g,
          forces: d
        }))), a && (c.properties = {}, a.elasticities && (c.properties.E = Object.fromEntries(a.elasticities)), a.areas && (c.properties.A = Object.fromEntries(a.areas)), a.momentsOfInertiaZ && (c.properties.Iz = Object.fromEntries(a.momentsOfInertiaZ)), a.momentsOfInertiaY && (c.properties.Iy = Object.fromEntries(a.momentsOfInertiaY)), a.shearModuli && (c.properties.G = Object.fromEntries(a.shearModuli)), a.torsionalConstants && (c.properties.J = Object.fromEntries(a.torsionalConstants)));
        const s = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        s && s.size > 0 && (c.displacements = {}, s.forEach((d, g) => c.displacements[g] = d));
        const i = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        i && i.size > 0 && (c.reactions = {}, i.forEach((d, g) => c.reactions[g] = d));
        const p = _t.querySelector("#export-text");
        p.value = JSON.stringify(c, null, 2);
        const r = _t.querySelector("#export-status");
        r.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function nt() {
      var _a2, _b, _c;
      const t = Ae.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, a = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let c = 0, s = 0, i = 0;
        for (const r of n) r.length === 2 ? c++ : r.length === 3 ? s++ : r.length === 4 && i++;
        let p = `${o}n ${l}e ${a}s`;
        (i > 0 || s > 0) && (p += ` | ${c}fr`, i > 0 && (p += ` ${i}q4`), s > 0 && (p += ` ${s}tri`)), t.textContent = p;
      }
    }
    function Yn() {
      var _a2;
      if (!Be || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const a = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (a <= 0) return;
        const c = gl(t, o, n, l, Math.min(a, 12));
        if (c.frequencies && c.frequencies.length > 0) {
          Pe = c, ze = t.map((r) => [
            ...r
          ]), xe = 0;
          const { extent: s } = zo(), i = (_a2 = c.modeShapes) == null ? void 0 : _a2[0];
          if (i) {
            let r = 0;
            for (let d = 0; d < t.length; d++) {
              const g = i[d * 6] || 0, S = i[d * 6 + 1] || 0, $ = i[d * 6 + 2] || 0;
              r = Math.max(r, Math.sqrt(g * g + S * S + $ * $));
            }
            Je = r > 1e-12 ? s * 0.15 / r : 1;
          }
          const p = `${T} \u2014 ${t.length}n ${o.length}e`;
          ft.render(c, {
            title: p
          }), ft.div.style.display = "", cn(), console.log(`Modal: ${c.frequencies.length} modos. f\u2081 = ${c.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (a) {
        console.warn("Modal analysis failed:", a.message), Pe = null;
      }
    }
    function Gn() {
      ve && (cancelAnimationFrame(ve), ve = 0), ze.length > 0 && (e.nodes.val = ze.map((o) => [
        ...o
      ]));
      const t = tt();
      t && t.scene.traverse((o) => {
        var _a2;
        o.isMesh && ((_a2 = o.material) == null ? void 0 : _a2.vertexColors) && o.visible === false && (o.visible = true);
      }), ft.div.style.display = "none", Pe = null;
    }
    function cn() {
      var _a2;
      if (ve && cancelAnimationFrame(ve), !(Pe == null ? void 0 : Pe.modeShapes) || !ze.length) return;
      const t = Pe.modeShapes[xe];
      if (!t) return;
      const o = ((_a2 = Pe.frequencies) == null ? void 0 : _a2[xe]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), a = ze.length, c = e.elements.rawVal, { extent: s } = zo(), i = Ae.querySelector("#cad3d-modal-scale"), p = i && parseFloat(i.value) || 15;
      let r = 0;
      for (let z = 0; z < a; z++) {
        const F = t[z * 6] || 0, k = t[z * 6 + 1] || 0, m = t[z * 6 + 2] || 0;
        r = Math.max(r, Math.sqrt(F * F + k * k + m * m));
      }
      const d = r > 1e-12 ? s * p / 100 / r : 1, g = tt();
      if (!g) return;
      let S = null, $ = null, y = null;
      g.scene.traverse((z) => {
        var _a3;
        !S && z.isPoints && z.geometry && (S = z), !$ && z.isLineSegments && z.geometry && !z.name && ($ = z), z.isMesh && ((_a3 = z.material) == null ? void 0 : _a3.vertexColors) && z.geometry && (y ? z.visible = false : y = z);
      });
      const f = new Float32Array(a * 3), b = [];
      for (const z of c) if (z.length === 2) b.push([
        z[0],
        z[1]
      ]);
      else for (let F = 0; F < z.length; F++) b.push([
        z[F],
        z[(F + 1) % z.length]
      ]);
      const I = new Float32Array(b.length * 6);
      function L() {
        const z = (performance.now() - l) / 1e3, F = Math.sin(2 * Math.PI * n * z) * d;
        for (let k = 0; k < a; k++) {
          const m = ze[k];
          f[k * 3] = m[0] + (t[k * 6] || 0) * F, f[k * 3 + 1] = m[1] + (t[k * 6 + 1] || 0) * F, f[k * 3 + 2] = m[2] + (t[k * 6 + 2] || 0) * F;
        }
        if (S) {
          const k = S.geometry, m = k.getAttribute("position");
          m && m.array.length === f.length ? (m.array.set(f), m.needsUpdate = true) : k.setAttribute("position", new _o(f.slice(), 3));
        }
        if ($) {
          for (let u = 0; u < b.length; u++) {
            const [E, A] = b[u];
            I[u * 6] = f[E * 3], I[u * 6 + 1] = f[E * 3 + 1], I[u * 6 + 2] = f[E * 3 + 2], I[u * 6 + 3] = f[A * 3], I[u * 6 + 4] = f[A * 3 + 1], I[u * 6 + 5] = f[A * 3 + 2];
          }
          const k = $.geometry, m = k.getAttribute("position");
          m && m.array.length === I.length ? (m.array.set(I), m.needsUpdate = true) : k.setAttribute("position", new _o(I.slice(), 3));
        }
        if (y) {
          const k = [];
          for (const m of c) if (m.length === 3) {
            const [u, E, A] = m;
            k.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), k.push(f[E * 3], f[E * 3 + 1], f[E * 3 + 2]), k.push(f[A * 3], f[A * 3 + 1], f[A * 3 + 2]);
          } else if (m.length === 4) {
            const [u, E, A, N] = m;
            k.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), k.push(f[E * 3], f[E * 3 + 1], f[E * 3 + 2]), k.push(f[A * 3], f[A * 3 + 1], f[A * 3 + 2]), k.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), k.push(f[A * 3], f[A * 3 + 1], f[A * 3 + 2]), k.push(f[N * 3], f[N * 3 + 1], f[N * 3 + 2]);
          }
          if (k.length > 0) {
            const m = y.geometry, u = new Float32Array(k), E = m.getAttribute("position");
            E && E.array.length === u.length ? (E.array.set(u), E.needsUpdate = true) : m.setAttribute("position", new _o(u, 3));
          }
        }
        g.render(), ve = requestAnimationFrame(L);
      }
      ve = requestAnimationFrame(L);
    }
    function Vn() {
      var _a2, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const y = ie("CM") ?? 0, f = ie("CV") ?? 0, b = y + f, I = ie("Ex") ?? 0, L = ie("Ey") ?? 0;
        if (b === 0 && I === 0 && L === 0) return;
        const z = /* @__PURE__ */ new Map(), F = [];
        for (let w = 0; w < t.length; w++) n.supports.has(w) || F.push(w);
        const k = (w) => Math.round(w * 1e3) / 1e3, m = /* @__PURE__ */ new Set();
        n.supports.forEach((w, v) => {
          m.add(`${k(t[v][0])},${k(t[v][1])}`);
        });
        const u = /* @__PURE__ */ new Set();
        for (const w of F) m.has(`${k(t[w][0])},${k(t[w][1])}`) && u.add(w);
        const E = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Set();
        if (I !== 0 || L !== 0) {
          let w = -1 / 0, v = -1 / 0;
          for (const K of u) w = Math.max(w, k(t[K][0])), v = Math.max(v, k(t[K][1]));
          const P = /* @__PURE__ */ new Map();
          for (const K of u) {
            const U = k(t[K][2]);
            P.has(U) || P.set(U, []), P.get(U).push(K);
          }
          P.forEach((K) => {
            if (I !== 0) {
              const U = /* @__PURE__ */ new Set();
              for (const le of K) if (k(t[le][0]) === w) {
                const te = k(t[le][1]);
                U.has(te) || (U.add(te), E.add(le));
              }
            }
            if (L !== 0) {
              const U = /* @__PURE__ */ new Set();
              for (const le of K) if (k(t[le][1]) === v) {
                const te = k(t[le][0]);
                U.has(te) || (U.add(te), A.add(le));
              }
            }
          });
        }
        const N = 9.81, W = /* @__PURE__ */ new Map();
        for (let w = 0; w < o.length; w++) {
          const v = o[w], P = ((_a2 = l.densities) == null ? void 0 : _a2.get(w)) ?? 0;
          if (!(Math.abs(P) < 1e-15)) {
            if (v.length === 2) {
              const K = ((_b = l.areas) == null ? void 0 : _b.get(w)) ?? 0, U = t[v[0]], le = t[v[1]], te = Math.sqrt((le[0] - U[0]) ** 2 + (le[1] - U[1]) ** 2 + (le[2] - U[2]) ** 2), me = -(P * K * te * N) / 2;
              W.set(v[0], (W.get(v[0]) ?? 0) + me), W.set(v[1], (W.get(v[1]) ?? 0) + me);
            } else if (v.length >= 3) {
              const K = ((_c = l.thicknesses) == null ? void 0 : _c.get(w)) ?? 0;
              let U = 0;
              if (v.length === 3) {
                const [Q, me, de] = v.map((ke) => t[ke]);
                U = 0.5 * Math.abs((me[0] - Q[0]) * (de[1] - Q[1]) - (de[0] - Q[0]) * (me[1] - Q[1]));
              } else if (v.length === 4) {
                const [Q, me, de, ke] = v.map((Re) => t[Re]);
                if (U = 0.5 * Math.abs((me[0] - Q[0]) * (de[1] - Q[1]) - (de[0] - Q[0]) * (me[1] - Q[1])) + 0.5 * Math.abs((de[0] - Q[0]) * (ke[1] - Q[1]) - (ke[0] - Q[0]) * (de[1] - Q[1])), U < 1e-10) {
                  const Re = [
                    me[0] - Q[0],
                    me[1] - Q[1],
                    me[2] - Q[2]
                  ], O = [
                    ke[0] - Q[0],
                    ke[1] - Q[1],
                    ke[2] - Q[2]
                  ], ce = [
                    Re[1] * O[2] - Re[2] * O[1],
                    Re[2] * O[0] - Re[0] * O[2],
                    Re[0] * O[1] - Re[1] * O[0]
                  ];
                  U = Math.sqrt(ce[0] ** 2 + ce[1] ** 2 + ce[2] ** 2);
                }
              }
              const te = -(P * K * U * N) / v.length;
              for (const Q of v) W.set(Q, (W.get(Q) ?? 0) + te);
            }
          }
        }
        const x = /* @__PURE__ */ new Set();
        for (const w of o) w.length === 2 && (x.add(w[0]), x.add(w[1]));
        for (const w of F) {
          const v = E.has(w) ? I : 0, P = A.has(w) ? L : 0, K = W.get(w) ?? 0, U = x.has(w) ? b : 0, le = K + U;
          (v !== 0 || P !== 0 || Math.abs(le) > 1e-10) && z.set(w, [
            v,
            P,
            le,
            0,
            0,
            0
          ]);
        }
        n = {
          ...n,
          loads: z
        }, e.nodeInputs.val = n;
      }
      const a = performance.now();
      let c = 0, s = 0, i = 0;
      for (const y of o) y.length === 2 ? c++ : y.length === 3 ? i++ : y.length === 4 && s++;
      const p = ((_d = n.supports) == null ? void 0 : _d.size) || 0, r = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, d = t.length * 6, g = d - p * 6, S = [], $ = (y) => S.push(y);
      $('<b style="color:var(--cad-heading)">FEM Solver</b>'), $(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), c && $(`&nbsp;&nbsp;Frames: <b>${c}</b>`), s && $(`&nbsp;&nbsp;Shell Q4: <b>${s}</b>`), i && $(`&nbsp;&nbsp;Triangulos: <b>${i}</b>`), $(`&nbsp;&nbsp;Apoyos: ${p} &nbsp;|&nbsp; Cargas: ${r}`), $(`<span style="color:var(--cad-info)">DOFs:</span> ${d} total, ~${g} libres`), $('<hr style="border-color:var(--cad-border);margin:4px 0">'), $(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${d}&times;${d})`), $("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const y = Pt(t, o, n, l), f = performance.now() - a;
        if (y) {
          e.deformOutputs.val = y, $(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${f.toFixed(0)} ms</span>`);
          let b = 0, I = -1, L = 0, z = 0;
          y.deformations && y.deformations.forEach((E, A) => {
            const N = Math.sqrt(E[0] * E[0] + E[1] * E[1] + E[2] * E[2]);
            N > b && (b = N, I = A, L = E[0], z = E[2]);
          }), $('<span style="color:#888">3.</span> Desplazamientos:'), $(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${b.toExponential(3)}</b> m <span style="color:#666">(nodo ${I})</span>`), $(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(L * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(z * 1e3).toFixed(4)} mm`);
          const F = performance.now(), k = Eo(t, o, l, y), m = performance.now() - F;
          k && (e.analyzeOutputs.val = k, $(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${m.toFixed(0)} ms</span>`), $("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const u = performance.now() - a;
          $('<hr style="border-color:var(--cad-border);margin:4px 0">'), $(`<b style="color:#00cc88">&#10004; Completado: ${u.toFixed(0)} ms</b>`);
        }
      } catch (y) {
        const f = performance.now() - a;
        $(`<b style="color:#ff4444">&#10008; Error (${f.toFixed(0)} ms): ${y.message}</b>`);
      }
      window.__femLog = S, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - a).toFixed(0)}ms`), Be && setTimeout(() => Yn(), 50);
    }
    function Jn(t, o) {
      const n = t * o, l = t * o * o * o / 12, a = o * t * t * t / 12, c = Math.min(t, o), s = Math.max(t, o), i = c * c * c * s * (1 / 3 - 0.21 * c / s * (1 - c * c * c * c / (12 * s * s * s * s)));
      return {
        A: n,
        Iz: l,
        Iy: a,
        J: i
      };
    }
    function Ds(t) {
      const o = t / 2, n = Math.PI * o * o, l = Math.PI * o * o * o * o / 4, a = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: l,
        Iy: l,
        J: a
      };
    }
    function Xn(t, o, n, l) {
      const a = o - 2 * n, c = 2 * t * n + a * l, s = (t * o * o * o - (t - l) * a * a * a) / 12, i = (2 * n * t * t * t + a * l * l * l) / 12, p = (2 * t * n * n * n + a * l * l * l) / 3;
      return {
        A: c,
        Iz: s,
        Iy: i,
        J: p
      };
    }
    function Un(t, o, n) {
      const l = t - 2 * n, a = o - 2 * n, c = t * o - l * a, s = (t * o * o * o - l * a * a * a) / 12, i = (o * t * t * t - a * l * l * l) / 12, p = (t - n) * (o - n), r = 2 * ((t - n) / n + (o - n) / n), d = 4 * p * p / (r > 0 ? r : 1);
      return {
        A: c,
        Iz: s,
        Iy: i,
        J: d
      };
    }
    function Ga(t, o, n, l, a, c, s) {
      const p = 4700 * Math.sqrt(c / 1e3) * 1e3 / l, r = t - 2 * n, d = o - 2 * n, g = t * o - r * d, S = (t * o * o * o - r * d * d * d) / 12, $ = (o * t * t * t - d * r * r * r) / 12, y = r * d, f = r * d * d * d / 12, b = d * r * r * r / 12, I = g + p * y, L = S + p * f, z = $ + p * b, F = l / (2 * (1 + a)), k = (t - n) * (o - n), m = 2 * ((t - n) / n + (o - n) / n), u = 4 * k * k / (m > 0 ? m : 1);
      return {
        A: I,
        Iz: L,
        Iy: z,
        J: u,
        Es: l,
        Gs: F,
        A_steel: g,
        A_conc: y
      };
    }
    function To() {
      if (!e.elementInputs) return;
      const t = e.elements.val, o = M, n = {
        elasticities: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map(),
        areas: /* @__PURE__ */ new Map(),
        momentsOfInertiaZ: /* @__PURE__ */ new Map(),
        momentsOfInertiaY: /* @__PURE__ */ new Map(),
        torsionalConstants: /* @__PURE__ */ new Map(),
        densities: /* @__PURE__ */ new Map(),
        sectionShapes: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map()
      };
      if ((T === "edificio" || T === "frame") && B.size > 0) {
        const { colMat: a, vigaMat: c, colShape: s, fc: i, perFloor: p } = _e, r = 4700 * Math.sqrt(i / 1e3) * 1e3, d = r / (2 * 1.2), g = 24 / 9.80665, S = o.E, $ = o.G, y = o.rho;
        for (let f = 0; f < t.length; f++) {
          if (ue.has(f)) {
            const E = 4700 * Math.sqrt(i / 1e3) * 1e3, A = 0.2;
            n.elasticities.set(f, E), n.poissonsRatios.set(f, A), n.thicknesses.set(f, Ye), n.shearModuli.set(f, E / (2 * (1 + A))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          if (Ot.has(f)) {
            const E = 4700 * Math.sqrt(i / 1e3) * 1e3, A = 0.2;
            n.elasticities.set(f, E), n.poissonsRatios.set(f, A), n.thicknesses.set(f, dt), n.shearModuli.set(f, E / (2 * (1 + A))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          const b = B.has(f), I = Me.get(f) ?? 0, L = p[I] ?? p[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let z, F, k, m;
          if (b) if (a === 0) F = r, k = d, m = g, z = s === 1 ? Ds(L.dCol) : Jn(L.bCol, L.hCol), n.sectionShapes.set(f, s === 1 ? {
            type: "circ",
            d: L.dCol
          } : {
            type: "rect",
            b: L.bCol,
            h: L.hCol
          });
          else if (a === 1) {
            F = S, k = $, m = y;
            const E = _e.steelColType;
            if (E <= 1) {
              const A = Ro[L.colProfileIdx] ?? Ro[0];
              z = {
                A: A.A,
                Iz: A.Iz,
                Iy: A.Iy,
                J: A.J
              }, n.sectionShapes.set(f, {
                type: "I",
                b: A.bf,
                h: A.d,
                name: A.name
              });
            } else if (E === 2) {
              const A = L.colBf ?? 0.3, N = L.colHf ?? 0.3, W = L.colTf ?? 0.02, x = L.colTw ?? 0.012;
              z = Xn(A, N, W, x);
              const w = `I${(N * 100).toFixed(0)}x${(A * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: A,
                h: N,
                tf: W,
                tw: x,
                name: w
              });
            } else {
              const A = L.colBc ?? 0.3, N = L.colHc ?? 0.3, W = L.colT ?? 0.01;
              z = Un(A, N, W);
              const x = `\u25A1${(N * 100).toFixed(0)}x${(A * 100).toFixed(0)}x${(W * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: A,
                h: N,
                tw: W,
                name: x
              });
            }
          } else {
            const E = L.colBc ?? 0.3, A = L.colHc ?? 0.3, N = L.colT ?? 0.01, W = L.colFc ?? 28e3, x = L.colEs ?? 2e8, w = L.colNuS ?? 0.3;
            L.colNuC;
            const v = Ga(E, A, N, x, w, W);
            z = {
              A: v.A,
              Iz: v.Iz,
              Iy: v.Iy,
              J: v.J
            }, F = v.Es, k = v.Gs;
            const P = 7.85, K = 24 / 9.80665;
            m = (P * v.A_steel + K * v.A_conc) / (v.A_steel + v.A_conc);
            const U = `CFT ${(A * 1e3).toFixed(0)}X${(E * 1e3).toFixed(0)}X${(N * 1e3).toFixed(0)}`;
            n.sectionShapes.set(f, {
              type: "CFT",
              b: E,
              h: A,
              tw: N,
              name: U
            });
          }
          else {
            const E = Le.get(f), A = E ? E.dir === "x" ? L.vigasX : L.vigasY : [], N = E ? A[E.bay] ?? A[0] ?? ht() : ht();
            if (c === 0) F = r, k = d, m = g, z = Jn(N.b, N.h), n.sectionShapes.set(f, {
              type: "rect",
              b: N.b,
              h: N.h
            });
            else {
              F = S, k = $, m = y;
              const W = _e.steelVigaType;
              if (W <= 1) {
                const x = Ro[N.profileIdx ?? 0] ?? Ro[0];
                z = {
                  A: x.A,
                  Iz: x.Iz,
                  Iy: x.Iy,
                  J: x.J
                }, n.sectionShapes.set(f, {
                  type: "I",
                  b: x.bf,
                  h: x.d,
                  name: x.name
                });
              } else if (W === 2) {
                const x = N.bf ?? 0.2, w = N.hf ?? 0.4, v = N.tf ?? 0.015, P = N.tw ?? 0.01;
                z = Xn(x, w, v, P);
                const K = `I${(w * 100).toFixed(0)}x${(x * 100).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "I",
                  b: x,
                  h: w,
                  tf: v,
                  tw: P,
                  name: K
                });
              } else {
                const x = N.bc ?? 0.2, w = N.hc ?? 0.3, v = N.t ?? 8e-3;
                z = Un(x, w, v);
                const P = `\u25A1${(w * 100).toFixed(0)}x${(x * 100).toFixed(0)}x${(v * 1e3).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "HSS",
                  b: x,
                  h: w,
                  tw: v,
                  name: P
                });
              }
            }
          }
          const u = be.get(f);
          if (u) {
            if ((u.material ?? 1) === 0 ? (F = r, k = d, m = g) : (F = S, k = $, m = y), u.secType === "rect" && u.b && u.h) z = Jn(u.b, u.h), n.sectionShapes.set(f, {
              type: "rect",
              b: u.b,
              h: u.h
            });
            else if (u.secType === "circ" && u.b) z = Ds(u.b), n.sectionShapes.set(f, {
              type: "circ",
              d: u.b
            });
            else if ((u.secType === "W" || u.secType === "HSS") && u.profileIdx !== void 0) {
              const A = Ro[u.profileIdx] ?? Ro[0];
              z = {
                A: A.A,
                Iz: A.Iz,
                Iy: A.Iy,
                J: A.J
              }, n.sectionShapes.set(f, {
                type: "I",
                b: A.bf,
                h: A.d,
                name: A.name
              });
            } else if (u.secType === "I-param" && u.bf && u.hf && u.tf && u.tw) {
              z = Xn(u.bf, u.hf, u.tf, u.tw);
              const A = `I${(u.hf * 100).toFixed(0)}x${(u.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: u.bf,
                h: u.hf,
                tf: u.tf,
                tw: u.tw,
                name: A
              });
            } else if (u.secType === "tubular" && u.bc && u.hc && u.t) {
              z = Un(u.bc, u.hc, u.t);
              const A = `\u25A1${(u.hc * 100).toFixed(0)}x${(u.bc * 100).toFixed(0)}x${(u.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: u.bc,
                h: u.hc,
                tw: u.t,
                name: A
              });
            }
          }
          n.elasticities.set(f, F), n.shearModuli.set(f, k), n.areas.set(f, z.A), n.momentsOfInertiaZ.set(f, z.Iy), n.momentsOfInertiaY.set(f, z.Iz), n.torsionalConstants.set(f, z.J), n.densities.set(f, m), u && u.releases12 && u.releases12.some((E) => E) && (n.momentReleases || (n.momentReleases = /* @__PURE__ */ new Map()), n.momentReleases.set(f, u.releases12)), u && u.springs12 && u.springs12.some((E) => E > 0) && (n.partialFixitySprings || (n.partialFixitySprings = /* @__PURE__ */ new Map()), n.partialFixitySprings.set(f, u.springs12));
        }
      } else for (let a = 0; a < t.length; a++) n.elasticities.set(a, o.E), n.shearModuli.set(a, o.G), n.areas.set(a, o.A), n.momentsOfInertiaZ.set(a, o.Iy), n.momentsOfInertiaY.set(a, o.Iz), n.torsionalConstants.set(a, o.J), n.densities.set(a, o.rho);
      e.elementInputs.val = n;
    }
    function Hs(t) {
      Ae.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === t);
      });
    }
    window.innerWidth <= 600 && Ae.classList.add("collapsed"), setTimeout(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p;
      (_a2 = Ae.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (x) => {
        x.stopPropagation(), Ae.classList.add("collapsed");
      }), (_b = Ae.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (x) => {
        x.stopPropagation(), Ae.classList.remove("collapsed");
      }), Ae.querySelectorAll("[data-ex]").forEach((x) => {
        x.addEventListener("click", (w) => {
          w.stopPropagation();
          const v = x.dataset.ex;
          Hs(v), ot.example(v);
        });
      }), Ae.querySelectorAll("[data-view]").forEach((x) => {
        x.addEventListener("click", (w) => {
          w.stopPropagation();
          const v = x.dataset.view;
          Lo(v), Ae.querySelectorAll("[data-view]").forEach((P) => P.classList.remove("view-active")), x.classList.add("view-active");
        });
      }), (_c = Ae.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (x) => {
        x.stopPropagation(), T = "", ka.val = false, ja(), ot.clear();
      }), (_d = Ae.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), po && (po = false, qo()), yo && yn(), eo = !eo, (_a3 = Ae.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", eo);
        const v = tt();
        v && (v.controls.enabled = !eo), eo || vn();
      }), (_e2 = Ae.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), po && (po = false, qo()), eo && vn(), yo = !yo, (_a3 = Ae.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", yo), yo ? Ka() : yn();
      }), (_f = Ae.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), eo && vn(), yo && yn(), po = !po, (_a3 = Ae.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", po), po || qo();
      }), (_g = Ae.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (x) => {
        x.stopPropagation(), ot.clear(), Ke = null;
      });
      const t = Ae.querySelector("#cad3d-tests-menu");
      t && t.addEventListener("change", () => {
        const x = t.value;
        t.value = "", x && o(x);
      });
      function o(x) {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const P = 15e3 * Math.sqrt(210) * 10, K = 0.2, U = P / (2 * (1 + K)), le = 0.09, te = 0.3 ** 4 / 12, Q = 0.141 * 0.3 ** 4, me = 0.25 * 0.4, de = 0.25 * 0.4 ** 3 / 12, ke = 0.4 * 0.25 ** 3 / 12, Re = 1e-3, O = 5 / 6 * le, ce = 5 / 6 * me, oe = [];
        function pe(ee, ge, Ie) {
          const se = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            shearAreasY: /* @__PURE__ */ new Map(),
            shearAreasZ: /* @__PURE__ */ new Map()
          };
          for (const we of ge) se.elasticities.set(we, P), se.shearModuli.set(we, U), se.areas.set(we, le), se.momentsOfInertiaZ.set(we, te), se.momentsOfInertiaY.set(we, te), se.torsionalConstants.set(we, Q), se.shearAreasY.set(we, O), se.shearAreasZ.set(we, O);
          for (const we of Ie) se.elasticities.set(we, P), se.shearModuli.set(we, U), se.areas.set(we, me), se.momentsOfInertiaZ.set(we, ke), se.momentsOfInertiaY.set(we, de), se.torsionalConstants.set(we, Re), se.shearAreasY.set(we, ce), se.shearAreasZ.set(we, ce);
          return se;
        }
        if (x === "test-cantilever" || x === "test-all") {
          const Ie = 270 / (3 * P * te), se = [
            [
              0,
              0,
              0
            ],
            [
              3,
              0,
              0
            ]
          ], we = [
            [
              0,
              1
            ]
          ], De = pe(1, [], []);
          De.elasticities.set(0, P), De.shearModuli.set(0, U), De.areas.set(0, le), De.momentsOfInertiaZ.set(0, te), De.momentsOfInertiaY.set(0, te), De.torsionalConstants.set(0, Q);
          const lt = Pt(se, we, {
            supports: /* @__PURE__ */ new Map([
              [
                0,
                [
                  true,
                  true,
                  true,
                  true,
                  true,
                  true
                ]
              ]
            ]),
            loads: /* @__PURE__ */ new Map([
              [
                1,
                [
                  0,
                  0,
                  10,
                  0,
                  0,
                  0
                ]
              ]
            ])
          }, De);
          oe.push({
            name: "Cantilever Beam",
            formulation: "Euler-Bernoulli (PL\xB3/3EI)",
            nodes: se,
            elements: we,
            results: [
              {
                label: "Uz tip (cm)",
                awatif: lt.deformations.get(1)[2] * 100,
                reference: Ie * 100,
                refSource: "Analytical"
              }
            ]
          });
        }
        if (x === "test-portal-1p" || x === "test-all") {
          const ee = [
            [
              0,
              0,
              0
            ],
            [
              4,
              0,
              0
            ],
            [
              0,
              0,
              3
            ],
            [
              4,
              0,
              3
            ]
          ], ge = [
            [
              0,
              2
            ],
            [
              1,
              3
            ],
            [
              2,
              3
            ]
          ], Ie = pe(3, [
            0,
            1
          ], [
            2
          ]), se = Pt(ee, ge, {
            supports: /* @__PURE__ */ new Map([
              [
                0,
                [
                  true,
                  true,
                  true,
                  true,
                  true,
                  true
                ]
              ],
              [
                1,
                [
                  true,
                  true,
                  true,
                  true,
                  true,
                  true
                ]
              ]
            ]),
            loads: /* @__PURE__ */ new Map([
              [
                2,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ],
              [
                3,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ]
            ])
          }, Ie);
          oe.push({
            name: "Portal 1-Story (Timoshenko)",
            formulation: "Frame Timoshenko (As=5/6\xB7A)",
            nodes: ee,
            elements: ge,
            results: [
              {
                label: "Ux top (cm)",
                awatif: se.deformations.get(2)[0] * 100,
                reference: 2.0618,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (x === "test-portal-2p" || x === "test-all") {
          const ee = [
            [
              0,
              0,
              0
            ],
            [
              4,
              0,
              0
            ],
            [
              0,
              0,
              3
            ],
            [
              4,
              0,
              3
            ],
            [
              0,
              0,
              6
            ],
            [
              4,
              0,
              6
            ]
          ], ge = [
            [
              0,
              2
            ],
            [
              1,
              3
            ],
            [
              2,
              4
            ],
            [
              3,
              5
            ],
            [
              2,
              3
            ],
            [
              4,
              5
            ]
          ], Ie = pe(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]), se = Pt(ee, ge, {
            supports: /* @__PURE__ */ new Map([
              [
                0,
                [
                  true,
                  true,
                  true,
                  true,
                  true,
                  true
                ]
              ],
              [
                1,
                [
                  true,
                  true,
                  true,
                  true,
                  true,
                  true
                ]
              ]
            ]),
            loads: /* @__PURE__ */ new Map([
              [
                4,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ],
              [
                5,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ]
            ])
          }, Ie);
          oe.push({
            name: "Portal 2-Story",
            formulation: "Frame Timoshenko",
            nodes: ee,
            elements: ge,
            results: [
              {
                label: "Ux Z=3m (cm)",
                awatif: se.deformations.get(2)[0] * 100,
                reference: 2.5188,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux Z=6m (cm)",
                awatif: se.deformations.get(4)[0] * 100,
                reference: 5.6424,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (x === "test-wall-only" || x === "test-all") {
          const ee = [
            [
              0,
              0,
              0
            ],
            [
              4,
              0,
              0
            ],
            [
              4,
              0,
              3
            ],
            [
              0,
              0,
              3
            ]
          ], ge = [
            [
              0,
              1,
              2,
              3
            ]
          ], se = Pt(ee, ge, {
            supports: /* @__PURE__ */ new Map([
              [
                0,
                [
                  true,
                  true,
                  true,
                  true,
                  true,
                  true
                ]
              ],
              [
                1,
                [
                  true,
                  true,
                  true,
                  true,
                  true,
                  true
                ]
              ]
            ]),
            loads: /* @__PURE__ */ new Map([
              [
                2,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ],
              [
                3,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ]
            ])
          }, {
            elasticities: /* @__PURE__ */ new Map([
              [
                0,
                P
              ]
            ]),
            shearModuli: /* @__PURE__ */ new Map([
              [
                0,
                U
              ]
            ]),
            thicknesses: /* @__PURE__ */ new Map([
              [
                0,
                0.2
              ]
            ]),
            poissonsRatios: /* @__PURE__ */ new Map([
              [
                0,
                K
              ]
            ])
          });
          oe.push({
            name: "Wall Q4 Only",
            formulation: "Membrane (incompatible modes) + Mindlin-Reissner + Hughes-Brezzi drilling",
            nodes: ee,
            elements: ge,
            results: [
              {
                label: "Ux top (cm)",
                awatif: se.deformations.get(2)[0] * 100,
                reference: 0.013519,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (x === "test-portal-wall" || x === "test-all") {
          const ee = [
            [
              0,
              0,
              0
            ],
            [
              4,
              0,
              0
            ],
            [
              0,
              0,
              3
            ],
            [
              4,
              0,
              3
            ],
            [
              0,
              0,
              6
            ],
            [
              4,
              0,
              6
            ]
          ], ge = [
            [
              0,
              2
            ],
            [
              1,
              3
            ],
            [
              2,
              4
            ],
            [
              3,
              5
            ],
            [
              2,
              3
            ],
            [
              4,
              5
            ],
            [
              0,
              1,
              3,
              2
            ]
          ], Ie = pe(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]);
          Ie.elasticities.set(6, P), Ie.shearModuli.set(6, U), Ie.thicknesses = /* @__PURE__ */ new Map([
            [
              6,
              0.2
            ]
          ]), Ie.poissonsRatios = /* @__PURE__ */ new Map([
            [
              6,
              K
            ]
          ]);
          const se = Pt(ee, ge, {
            supports: /* @__PURE__ */ new Map([
              [
                0,
                [
                  true,
                  true,
                  true,
                  true,
                  true,
                  true
                ]
              ],
              [
                1,
                [
                  true,
                  true,
                  true,
                  true,
                  true,
                  true
                ]
              ]
            ]),
            loads: /* @__PURE__ */ new Map([
              [
                4,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ],
              [
                5,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ]
            ])
          }, Ie);
          oe.push({
            name: "Portal 2-Story + Wall Q4",
            formulation: "Frame Timoshenko + Shell Q4 (Hughes-Brezzi drilling)",
            nodes: ee,
            elements: ge,
            results: [
              {
                label: "Ux h=3m (cm)",
                awatif: se.deformations.get(2)[0] * 100,
                reference: 0.0195,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux h=6m (cm)",
                awatif: se.deformations.get(4)[0] * 100,
                reference: 2.1133,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (x === "test-wilson-beam" || x === "test-all") {
          const lt = 0.6666666666666666, et = [
            [
              0,
              -1,
              0
            ],
            [
              2.5,
              -1,
              0
            ],
            [
              5,
              -1,
              0
            ],
            [
              5,
              1,
              0
            ],
            [
              2.5,
              1,
              0
            ],
            [
              0,
              1,
              0
            ]
          ], vt = [
            [
              0,
              1,
              4,
              5
            ],
            [
              1,
              2,
              3,
              4
            ]
          ], Bt = {
            elasticities: /* @__PURE__ */ new Map([
              [
                0,
                1500
              ],
              [
                1,
                1500
              ]
            ]),
            shearModuli: /* @__PURE__ */ new Map([
              [
                0,
                600
              ],
              [
                1,
                600
              ]
            ]),
            thicknesses: /* @__PURE__ */ new Map([
              [
                0,
                1
              ],
              [
                1,
                1
              ]
            ]),
            poissonsRatios: /* @__PURE__ */ new Map([
              [
                0,
                0.25
              ],
              [
                1,
                0.25
              ]
            ])
          }, yt = /* @__PURE__ */ new Map();
          yt.set(0, [
            true,
            true,
            true,
            true,
            true,
            true
          ]), yt.set(5, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
          const Ct = /* @__PURE__ */ new Map();
          Ct.set(2, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]), Ct.set(3, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]);
          const go = 5 ** 3 / (3 * 1500 * lt);
          try {
            const Kt = Pt(et, vt, {
              supports: yt,
              loads: Ct
            }, Bt), jt = Math.abs(((_b2 = (_a3 = Kt.deformations) == null ? void 0 : _a3.get(2)) == null ? void 0 : _b2[1]) ?? 0), st = Math.abs(((_d2 = (_c2 = Kt.deformations) == null ? void 0 : _c2.get(3)) == null ? void 0 : _d2[1]) ?? 0), $t = (jt + st) / 2, Ut = $t / go;
            oe.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "2 Q4 elements + incompatible modes (Wilson 1971, Table 6.1)",
              nodes: et,
              elements: vt,
              results: [
                {
                  label: "Uy/Uy_exact (cortante)",
                  awatif: Ut,
                  reference: 0.932,
                  refSource: "Wilson Table 6.1"
                },
                {
                  label: "Uy free end",
                  awatif: $t,
                  reference: go * 0.932,
                  refSource: "Wilson"
                }
              ]
            });
          } catch (Kt) {
            oe.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "ERROR: " + Kt.message,
              nodes: et,
              elements: vt,
              results: [
                {
                  label: "Error",
                  awatif: 0,
                  reference: 0.932,
                  refSource: "Wilson"
                }
              ]
            });
          }
        }
        if (x === "test-scordelis" || x === "test-all") {
          const lt = 40 * Math.PI / 180, et = 8, vt = 8, Bt = [];
          for (let st = 0; st <= et; st++) for (let $t = 0; $t <= vt; $t++) {
            const Ut = 25 * st / et, Rt = lt * $t / vt, fo = 25 * Math.sin(Rt), ro = 25 * Math.cos(Rt) - 25 * Math.cos(lt);
            Bt.push([
              Ut,
              fo,
              ro
            ]);
          }
          const yt = [];
          for (let st = 0; st < et; st++) for (let $t = 0; $t < vt; $t++) {
            const Ut = st * (vt + 1) + $t, Rt = (st + 1) * (vt + 1) + $t, fo = (st + 1) * (vt + 1) + ($t + 1), ro = st * (vt + 1) + ($t + 1);
            yt.push([
              Ut,
              Rt,
              fo,
              ro
            ]);
          }
          const Ct = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            thicknesses: /* @__PURE__ */ new Map(),
            poissonsRatios: /* @__PURE__ */ new Map()
          }, go = 432e6 / (2 * 1);
          for (let st = 0; st < yt.length; st++) Ct.elasticities.set(st, 432e6), Ct.shearModuli.set(st, go), Ct.thicknesses.set(st, 0.25), Ct.poissonsRatios.set(st, 0);
          const Kt = /* @__PURE__ */ new Map();
          for (let st = 0; st <= et; st++) for (let $t = 0; $t <= vt; $t++) {
            const Ut = st * (vt + 1) + $t, Rt = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            st === 0 && (Rt[0] = true, Rt[4] = true, Rt[5] = true), st === et && (Rt[1] = true, Rt[2] = true, Rt[3] = true), $t === 0 && (Rt[1] = true, Rt[3] = true, Rt[5] = true), Rt.some((fo) => fo) && Kt.set(Ut, Rt);
          }
          const jt = /* @__PURE__ */ new Map();
          for (const st of yt) {
            const $t = Bt[st[0]], Ut = Bt[st[1]], Rt = Bt[st[2]], fo = Bt[st[3]], ro = [
              Rt[0] - $t[0],
              Rt[1] - $t[1],
              Rt[2] - $t[2]
            ], wo = [
              fo[0] - Ut[0],
              fo[1] - Ut[1],
              fo[2] - Ut[2]
            ], Mn = ro[1] * wo[2] - ro[2] * wo[1], Ko = ro[2] * wo[0] - ro[0] * wo[2], un = ro[0] * wo[1] - ro[1] * wo[0], We = -90 * (0.5 * Math.sqrt(Mn * Mn + Ko * Ko + un * un)) / 4;
            for (const Et of st) {
              const oo = jt.get(Et) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              oo[2] += We, jt.set(Et, oo);
            }
          }
          try {
            const st = Pt(Bt, yt, {
              supports: Kt,
              loads: jt
            }, Ct), $t = vt, Ut = ((_f2 = (_e3 = st.deformations) == null ? void 0 : _e3.get($t)) == null ? void 0 : _f2[2]) ?? 0;
            oe.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: `Shell Q4 (${et}x${vt} mesh), Mindlin-Reissner + incompatible modes`,
              nodes: Bt,
              elements: yt,
              results: [
                {
                  label: "Uz midspan free edge (ft)",
                  awatif: Math.abs(Ut),
                  reference: 0.3086,
                  refSource: "Wilson (2004) / MacNeal-Harder"
                }
              ]
            });
          } catch (st) {
            oe.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: "ERROR: " + st.message,
              nodes: Bt,
              elements: yt,
              results: [
                {
                  label: "Error",
                  awatif: 0,
                  reference: 0.3086,
                  refSource: "Wilson"
                }
              ]
            });
          }
        }
        if (c(oe), oe.length > 0) {
          const ee = oe[oe.length - 1];
          e.nodes.val = ee.nodes, e.elements.val = ee.elements;
          const ge = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), se = Math.max(...ee.nodes.map((we) => we[2]));
          ee.nodes.forEach((we, De) => {
            Math.abs(we[2]) < 0.01 && ge.set(De, [
              true,
              true,
              true,
              true,
              true,
              true
            ]), Math.abs(we[2] - se) < 0.01 && Ie.set(De, [
              10,
              0,
              0,
              0,
              0,
              0
            ]);
          }), e.nodeInputs.val = {
            supports: ge,
            loads: Ie
          }, e.elementInputs.val = {}, e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        }
      }
      function n(x) {
        const w = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`$ File exported from Awatif FEM Validation: ${x.name}`), v.push(" "), v.push("$ PROGRAM INFORMATION"), v.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), v.push(""), v.push("$ CONTROLS"), v.push('  UNITS  "TONF"  "M"  "C"  '), v.push("");
        const P = /* @__PURE__ */ new Set();
        x.nodes.forEach((O) => P.add(Math.round(O[1] * 1e4) / 1e4));
        const K = [
          ...P
        ].sort((O, ce) => O - ce), U = K.map((O, ce) => ce === 0 ? "Base" : `Level_${ce}`), le = /* @__PURE__ */ new Map();
        K.forEach((O, ce) => le.set(O, U[ce])), v.push("$ STORIES - IN SEQUENCE FROM TOP");
        for (let O = K.length - 1; O >= 1; O--) v.push(`  STORY "${U[O]}"  HEIGHT ${K[O] - K[O - 1]} MASTERSTORY "Yes"  `);
        v.push(`  STORY "Base"  ELEV ${K[0]} `), v.push(""), v.push("$ MATERIAL PROPERTIES"), v.push('  MATERIAL  "CONC"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4'), v.push(`  MATERIAL  "CONC"    SYMTYPE "Isotropic"  E ${w}  U 0.2  A 1E-05`), v.push(""), v.push("$ FRAME SECTIONS"), v.push('  FRAMESECTION  "COL30"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.3 B 0.3 '), v.push('  FRAMESECTION  "VIGA"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.4 B 0.25 '), v.push("");
        const te = x.elements.some((O) => O.length === 4);
        te && (v.push("$ WALL/SLAB/DECK SECTIONS"), v.push('  SHELLPROP  "Muro20"  PROPTYPE  "Wall"  MATERIAL "CONC"  MODELINGTYPE "ShellThick"  WALLTHICKNESS 0.2 '), v.push(""));
        const Q = /* @__PURE__ */ new Map();
        let me = 0;
        x.nodes.forEach((O) => {
          const ce = `${O[0]},${O[2]}`;
          Q.has(ce) || Q.set(ce, `${++me}`);
        }), v.push("$ POINT COORDINATES");
        for (const [O, ce] of Q) {
          const [oe, pe] = O.split(",").map(Number);
          v.push(`  POINT "${ce}"  ${oe} ${pe} `);
        }
        v.push("");
        const de = (O) => {
          const ce = x.nodes[O], oe = `${ce[0]},${ce[2]}`;
          return {
            pt: Q.get(oe) || "1",
            story: le.get(Math.round(ce[1] * 1e4) / 1e4) || "Base"
          };
        };
        v.push("$ LINE CONNECTIVITIES");
        const ke = [];
        if (x.elements.forEach((O, ce) => {
          if (O.length !== 2) return;
          const oe = x.nodes[O[0]], pe = x.nodes[O[1]], ee = Math.abs(pe[1] - oe[1]), ge = Math.sqrt((pe[0] - oe[0]) ** 2 + (pe[2] - oe[2]) ** 2), Ie = ee > ge * 0.5, se = de(O[0]), we = de(O[1]), De = Ie ? "COL30" : "VIGA";
          Ie ? (v.push(`  LINE  "E${ce + 1}"  COLUMN  "${se.pt}"  "${se.pt}"  1`), ke.push(`  LINEASSIGN  "E${ce + 1}"  "${we.story}"  SECTION "${De}"  `)) : (v.push(`  LINE  "E${ce + 1}"  BEAM  "${se.pt}"  "${we.pt}"  0`), ke.push(`  LINEASSIGN  "E${ce + 1}"  "${se.story}"  SECTION "${De}"  `));
        }), v.push(""), te) {
          v.push("$ AREA CONNECTIVITIES");
          const O = [];
          x.elements.forEach((ce, oe) => {
            if (ce.length !== 4) return;
            const pe = ce.map((ee) => de(ee));
            v.push(`  AREA "W${oe + 1}"  PANEL  4  "${pe[0].pt}"  "${pe[1].pt}"  "${pe[2].pt}"  "${pe[3].pt}"  1  1  0  0  `), O.push(`  AREAASSIGN  "W${oe + 1}"  "${pe[2].story}"  SECTION "Muro20"  `);
          }), v.push(""), v.push("$ AREA ASSIGNS"), O.forEach((ce) => v.push(ce)), v.push("");
        }
        v.push("$ POINT ASSIGNS"), x.nodes.forEach((O, ce) => {
          if (Math.abs(O[1]) < 0.01) {
            const oe = de(ce);
            v.push(`  POINTASSIGN  "${oe.pt}"  "${oe.story}"  RESTRAINT "UX UY UZ RX RY RZ"  `);
          }
        }), v.push(""), v.push("$ LINE ASSIGNS"), ke.forEach((O) => v.push(O)), v.push(""), v.push("$ LOAD PATTERNS"), v.push('  LOADPATTERN "Lat"  TYPE  "Other"  SELFWEIGHT  0'), v.push(""), v.push("$ POINT OBJECT LOADS");
        const Re = Math.max(...x.nodes.map((O) => O[1]));
        return x.nodes.forEach((O, ce) => {
          if (Math.abs(O[1] - Re) < 0.01) {
            const oe = de(ce);
            v.push(`  POINTLOAD  "${oe.pt}"  "${oe.story}"  "Lat"  TYPE "FORCE"  FX 10`);
          }
        }), v.push(""), v.push("  END"), v.push("$ END OF MODEL FILE"), v.join(`\r
`);
      }
      function l(x) {
        const w = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`"""ETABS API Validation: ${x.name}`), v.push('Generated by Awatif FEM Studio"""'), v.push("import comtypes.client, time, math"), v.push(""), v.push("helper = comtypes.client.CreateObject('ETABSv1.Helper')"), v.push("helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)"), v.push('myETABS = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")'), v.push("myETABS.ApplicationStart()"), v.push("time.sleep(10)"), v.push("SapModel = myETABS.SapModel"), v.push("SapModel.InitializeNewModel()"), v.push("SapModel.File.NewBlank()"), v.push("SapModel.SetPresentUnits(12)  # tonf_m_C"), v.push(""), v.push(`E = ${w}`), v.push('SapModel.PropMaterial.SetMaterial("CONC", 2)'), v.push('SapModel.PropMaterial.SetMPIsotropic("CONC", E, 0.2, 5.5e-6)'), v.push('SapModel.PropFrame.SetRectangle("COL30", "CONC", 0.30, 0.30)'), v.push('SapModel.PropFrame.SetRectangle("VIGA", "CONC", 0.40, 0.25)'), x.elements.some((U) => U.length === 4) && v.push('SapModel.PropArea.SetWall("Muro20", 6, False, "CONC", 0.20)'), v.push(""), v.push("# Add elements"), v.push("FN = ' '"), x.elements.forEach((U, le) => {
          if (U.length === 2) {
            const te = x.nodes[U[0]], Q = x.nodes[U[1]], me = Math.abs(Q[1] - te[1]), de = Math.sqrt((Q[0] - te[0]) ** 2 + (Q[2] - te[2]) ** 2), ke = me > de * 0.5 ? "COL30" : "VIGA";
            v.push(`[FN,r]=SapModel.FrameObj.AddByCoord(${te[0]},${te[2]},${te[1]}, ${Q[0]},${Q[2]},${Q[1]}, FN,"${ke}","E${le + 1}","Global")`);
          } else if (U.length === 4) {
            const te = U.map((Q) => x.nodes[Q]);
            v.push(`SapModel.AreaObj.AddByCoord(4, [${te.map((Q) => Q[0]).join(",")}], [${te.map((Q) => Q[2]).join(",")}], [${te.map((Q) => Q[1]).join(",")}], "", "Muro20")`);
          }
        }), v.push(""), v.push("# Supports at Z=0"), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push("    if abs(float(c[2])) < 0.01:"), v.push("        SapModel.PointObj.SetRestraint(names[1][i], [True]*6)"), v.push(""), v.push("# Load at top"), v.push('SapModel.LoadPatterns.Add("Lat", 8, 0, True)');
        const K = Math.max(...x.nodes.map((U) => U[1]));
        v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push(`    if abs(float(c[2]) - ${K}) < 0.01:`), v.push('        SapModel.PointObj.SetLoadForce(names[1][i], "Lat", [10,0,0,0,0,0])'), v.push(""), v.push(`SapModel.File.Save(r"C:\\Users\\j-b-j\\Downloads\\validation_${x.name.replace(/[^a-zA-Z0-9]/g, "_")}.EDB")`), v.push("time.sleep(1)"), v.push("SapModel.Analyze.RunAnalysis()"), v.push("time.sleep(5)"), v.push(""), v.push("# Results"), v.push("SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()"), v.push('SapModel.Results.Setup.SetCaseSelectedForOutput("Lat")'), v.push(`print(f"\\n=== ETABS: ${x.name} ===")`), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    name = names[1][i]"), v.push("    c = SapModel.PointObj.GetCoordCartesian(name)"), v.push("    NR=0;Obj=[];Elm=[];AC=[];ST=[];SN=[];U1=[];U2=[];U3=[];R1=[];R2=[];R3=[]"), v.push("    [NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3,ret]=SapModel.Results.JointDispl(name,0,NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3)"), v.push("    if NR > 0:"), v.push('        print(f"  {name} Z={float(c[2]):.1f}: Ux={U1[0]*100:.4f} cm")'), v.push(""), v.push('print("\\nAwatif results:")');
        for (const U of x.results) v.push(`print(f"  ${U.label}: Awatif=${U.awatif.toFixed(4)}, ETABS=${U.reference.toFixed(4)}, Ratio={${U.awatif.toFixed(4)}/${U.reference.toFixed(4)}:.4f}")`);
        return v.push("SapModel.View.RefreshView(0, False)"), v.join(`
`);
      }
      function a(x, w) {
        const v = new Blob([
          x
        ], {
          type: "text/plain"
        }), P = URL.createObjectURL(v), K = document.createElement("a");
        K.href = P, K.download = w, K.click(), URL.revokeObjectURL(P);
      }
      function c(x) {
        let w = document.getElementById("test-results-overlay");
        w && w.remove(), w = document.createElement("div"), w.id = "test-results-overlay", w.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1a1a2e;color:#eee;border:2px solid #16213e;border-radius:8px;padding:20px;
        z-index:10000;max-width:750px;width:90%;max-height:80vh;overflow-y:auto;font-family:monospace;font-size:13px;
        box-shadow:0 10px 40px rgba(0,0,0,0.5);`;
        let v = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h3 style="margin:0;color:#00d4ff">Awatif FEM Validation</h3>
        <button onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;color:#888;font-size:18px;cursor:pointer">X</button>
      </div>`, P = true;
        window.__awatifTests = x;
        for (let U = 0; U < x.length; U++) {
          const le = x[U];
          v += '<div style="margin-bottom:16px;border:1px solid #333;border-radius:6px;padding:10px">', v += '<div style="display:flex;justify-content:space-between;align-items:center">', v += `<div style="font-weight:bold;color:#00d4ff">${le.name}</div>`, v += "<div>", v += `<button onclick="window.__awatifDownloadE2k(${U})" style="background:#1e3a5f;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;margin-right:4px;border-radius:3px">e2k</button>`, v += `<button onclick="window.__awatifDownloadPy(${U})" style="background:#2a1e3a;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;border-radius:3px">py</button>`, v += "</div></div>", v += `<div style="color:#888;font-size:11px;margin-bottom:8px">${le.formulation}</div>`, v += `<table style="width:100%;border-collapse:collapse;font-size:12px">
          <tr style="color:#888"><td style="padding:3px 6px">Measure</td><td style="text-align:right">Awatif</td><td style="text-align:right">Reference</td><td style="text-align:right">Ratio</td><td style="text-align:right">Source</td><td style="text-align:center"></td></tr>`;
          for (const te of le.results) {
            const Q = te.reference !== 0 ? te.awatif / te.reference : 1, me = Math.abs(Q - 1) < 0.05;
            me || (P = false);
            const de = me ? "#4caf50" : "#f44336", ke = me ? "PASS" : "FAIL";
            v += `<tr style="border-top:1px solid #333">
            <td style="padding:3px 6px">${te.label}</td>
            <td style="text-align:right;color:#fff">${te.awatif.toFixed(4)}</td>
            <td style="text-align:right;color:#aaa">${te.reference.toFixed(4)}</td>
            <td style="text-align:right;color:${de};font-weight:bold">${Q.toFixed(4)}</td>
            <td style="text-align:right;color:#888;font-size:11px">${te.refSource}</td>
            <td style="text-align:center;color:${de};font-size:10px;font-weight:bold">${ke}</td></tr>`;
          }
          v += "</table></div>";
        }
        v += P ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">Some tests exceeded 5% tolerance</div>', w.innerHTML = v, document.body.appendChild(w), window.__awatifDownloadE2k = (U) => {
          const le = window.__awatifTests[U], te = le.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          a(n(le), `${te}.e2k`);
        }, window.__awatifDownloadPy = (U) => {
          const le = window.__awatifTests[U], te = le.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          a(l(le), `${te}_etabs.py`);
        };
      }
      (_h = Ae.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (x) => {
        x.stopPropagation(), Ya();
      });
      let s = "";
      const i = Ae.querySelector("#cad3d-io-menu"), p = Ae.querySelector("#cad3d-io-file");
      function r(x, w) {
        e.nodes.val = x.nodes, e.elements.val = x.elements, e.nodeInputs.val = x.nodeInputs, e.elementInputs.val = x.elementInputs, x.sectionShapes && x.elementInputs && (x.elementInputs.sectionShapes = x.sectionShapes), e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        const v = x.elements.filter((K) => K.length === 2).length, P = x.elements.filter((K) => K.length >= 3).length;
        console.log(`${w} (${x.nodes.length} nodos, ${v} frames, ${P} shells): ${x.nodes.length} nodes, ${x.elements.length} elements`), setTimeout(() => It(), 50);
      }
      function d(x, w) {
        var _a3, _b2, _c2;
        const v = {};
        x.elementInfo.forEach((Q) => v[Q.category] = (v[Q.category] || 0) + 1), (_a3 = document.getElementById("ifc-filter-panel")) == null ? void 0 : _a3.remove();
        const P = document.createElement("div");
        P.id = "ifc-filter-panel", P.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1e1e2e;border:2px solid #00ccff;border-radius:12px;padding:20px;
        z-index:1000010;color:#eee;font-family:monospace;font-size:12px;min-width:320px;
        box-shadow:0 8px 32px rgba(0,0,0,0.6);`;
        const K = [
          "column",
          "beam",
          "slab",
          "footing",
          "member",
          "wall"
        ], U = [
          "opening",
          "rebar",
          "plate",
          "fastener",
          "other"
        ], le = {
          column: "Columnas",
          beam: "Vigas",
          slab: "Losas",
          footing: "Zapatas",
          member: "Diagonales",
          wall: "Muros",
          opening: "Aberturas",
          rebar: "Refuerzo",
          plate: "Placas",
          fastener: "Pernos",
          other: "Otros"
        };
        let te = `<h3 style="color:#00ccff;margin:0 0 12px">IFC \u2192 Modelo Anal\xEDtico</h3>
        <div style="color:#888;margin-bottom:10px">Selecciona qu\xE9 convertir a FEM:</div>
        <div style="border:1px solid #444;border-radius:6px;padding:8px;margin-bottom:8px">
          <div style="color:#33ff33;font-weight:bold;margin-bottom:4px">Estructural</div>`;
        for (const Q of K) {
          const me = v[Q] || 0;
          if (me === 0) continue;
          const de = [
            "column",
            "beam",
            "slab"
          ].includes(Q) ? "checked" : "";
          te += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0">
          <input type="checkbox" data-ifc-cat="${Q}" ${de}>
          <span>${le[Q] || Q}</span>
          <span style="color:#888;margin-left:auto">(${me})</span>
        </label>`;
        }
        te += `</div><div style="border:1px solid #333;border-radius:6px;padding:8px;margin-bottom:12px">
        <div style="color:#ff6666;font-weight:bold;margin-bottom:4px">No estructural (solo visual)</div>`;
        for (const Q of U) {
          const me = v[Q] || 0;
          me !== 0 && (te += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0;color:#888">
          <input type="checkbox" data-ifc-cat="${Q}" disabled>
          <span>${le[Q] || Q}</span>
          <span style="margin-left:auto">(${me})</span>
        </label>`);
        }
        te += `</div>
        <div style="display:flex;gap:8px">
          <button id="ifc-gen-analytical" style="flex:1;padding:8px;background:#0f3460;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:13px;font-weight:bold">
            \u{1F527} Generar Modelo Anal\xEDtico
          </button>
          <button id="ifc-cancel" style="padding:8px 12px;background:#333;color:#aaa;border:1px solid #555;border-radius:6px;cursor:pointer">\u2715</button>
        </div>`, P.innerHTML = te, document.body.appendChild(P), P.querySelectorAll("input[data-ifc-cat]").forEach((Q) => {
          Q.addEventListener("change", () => {
            const me = Q.dataset.ifcCat, de = x.detailCategories.get(me);
            if (de) {
              de.visible = Q.checked;
              const ke = tt();
              ke && ke.render();
            }
          });
        }), (_b2 = P.querySelector("#ifc-gen-analytical")) == null ? void 0 : _b2.addEventListener("click", () => {
          var _a4;
          const Q = /* @__PURE__ */ new Set();
          P.querySelectorAll("input[data-ifc-cat]:checked").forEach((oe) => {
            Q.add(oe.dataset.ifcCat);
          });
          const me = w.nodes.map((oe) => [
            oe.x,
            oe.y,
            oe.z
          ]), de = [], ke = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            densities: /* @__PURE__ */ new Map(),
            sectionShapes: /* @__PURE__ */ new Map()
          }, Re = {
            supports: /* @__PURE__ */ new Map(),
            loads: /* @__PURE__ */ new Map()
          };
          let O = 0;
          for (const oe of w.elements) if (Q.has(oe.category) && oe.type === "frame" && oe.nodeIds.length >= 2) {
            de.push(oe.nodeIds);
            const pe = ((_a4 = w.materials) == null ? void 0 : _a4.get(oe.material)) || {
              E: 2132888792e-2,
              nu: 0.2,
              rho: 2.4
            }, ee = oe.b || 0.3, ge = oe.h || 0.3, Ie = ee * ge, se = ee * ge * ge * ge / 12, we = ge * ee * ee * ee / 12, De = ee * ge * (ee * ee + ge * ge) / 12, lt = pe.E / (2 * (1 + pe.nu));
            ke.elasticities.set(O, pe.E), ke.shearModuli.set(O, lt), ke.areas.set(O, Ie), ke.momentsOfInertiaZ.set(O, we), ke.momentsOfInertiaY.set(O, se), ke.torsionalConstants.set(O, De), ke.densities.set(O, pe.rho), ke.sectionShapes.set(O, {
              type: "rect",
              b: ee,
              h: ge,
              name: oe.sectionName
            }), O++;
          }
          const ce = Math.min(...me.map((oe) => oe[2]));
          me.forEach((oe, pe) => {
            Math.abs(oe[2] - ce) < 0.05 && Re.supports.set(pe, [
              true,
              true,
              true,
              true,
              true,
              true
            ]);
          });
          for (const [, oe] of x.detailCategories) {
            const pe = tt();
            pe && pe.scene.remove(oe);
          }
          r({
            nodes: me,
            elements: de,
            nodeInputs: Re,
            elementInputs: ke,
            sectionShapes: ke.sectionShapes,
            info: {
              nNodes: me.length,
              nFrames: de.length
            }
          }, "IFC analytical"), P.remove();
        }), (_c2 = P.querySelector("#ifc-cancel")) == null ? void 0 : _c2.addEventListener("click", () => {
          for (const [, me] of x.detailCategories) {
            const de = tt();
            de && de.scene.remove(me);
          }
          const Q = tt();
          Q && Q.render(), P.remove();
        });
      }
      function g(x) {
        B = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map();
        const w = /* @__PURE__ */ new Map();
        for (let de = 0; de < x.stories.length; de++) w.set(x.stories[de].name, de);
        for (let de = 0; de < x.elementTypes.length; de++) {
          const ke = x.elementTypes[de], Re = x.elementStories[de], O = w.get(Re) ?? 0;
          Me.set(de, O), ke === "COLUMN" || ke === "BRACE" ? B.add(de) : Y.add(de);
        }
        T = "edificio";
        const v = x.grids.filter((de) => de.dir === "X").sort((de, ke) => de.coord - ke.coord), P = x.grids.filter((de) => de.dir === "Y").sort((de, ke) => de.coord - ke.coord);
        let K, U, le, te;
        if (v.length > 0 || P.length > 0) K = v.map((de) => de.coord), U = P.map((de) => de.coord), le = v.map((de) => de.label), te = P.map((de) => de.label);
        else {
          const de = new Set(x.nodes.map((Re) => Re[0])), ke = new Set(x.nodes.map((Re) => Re[1]));
          K = [
            ...de
          ].sort((Re, O) => Re - O), U = [
            ...ke
          ].sort((Re, O) => Re - O), le = K.map((Re, O) => String(O + 1)), te = U.map((Re, O) => String.fromCharCode(65 + O));
        }
        const Q = x.stories.length > 0 ? Math.max(...x.stories.map((de) => de.elev)) : Math.max(...x.nodes.map((de) => de[2]));
        Ve = K, Qe = U, mt = Q, setTimeout(() => {
          It(), an(K, U, Q, le, te), On(x.stories, K, U), Kn(), Zn();
        }, 100);
        const me = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const de of x.elementTypes) me[de]++;
        console.log(`E2K grids: X=[${le.join(",")}] Y=[${te.join(",")}]`), console.log(`E2K stories: ${x.stories.map((de) => `${de.name}@${de.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${me.COLUMN} columns, ${me.BEAM} beams, ${me.BRACE} braces`), nt();
      }
      function S(x, w) {
        const v = new Blob([
          x
        ], {
          type: "text/plain"
        }), P = URL.createObjectURL(v), K = document.createElement("a");
        K.href = P, K.download = w, K.click(), URL.revokeObjectURL(P);
      }
      i && i.addEventListener("change", () => {
        if (s = i.value, i.value = "", s.startsWith("import")) s === "import-e2k" ? p.accept = ".e2k,.E2K" : s === "import-s2k" ? p.accept = ".s2k,.S2K,.$2k" : s === "import-ifc" ? p.accept = ".ifc,.IFC" : s === "import-py" ? p.accept = ".py" : s === "import-tcl" && (p.accept = ".tcl"), p.click();
        else if (s.startsWith("export")) {
          const x = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            s === "export-e2k" ? S(oi({
              ...x,
              title: "Awatif Model",
              e2kModel: Ke ?? void 0
            }), "model.e2k") : s === "export-s2k" ? S(ti({
              ...x,
              title: "Awatif Model"
            }), "model.s2k") : s === "export-py" ? S(li(x), "model_opensees.py") : s === "export-tcl" && S(ii(x), "model_opensees.tcl");
          } catch (w) {
            alert("Export error: " + w.message);
          }
        }
      }), p && p.addEventListener("change", () => {
        var _a3;
        const x = (_a3 = p.files) == null ? void 0 : _a3[0];
        if (!x) return;
        if (s === "import-ifc") {
          const v = new FileReader();
          v.onload = async () => {
            const P = v.result;
            try {
              const K = tt();
              if (!K) {
                alert("Viewer not ready");
                return;
              }
              console.log("IFC: Loading 3D geometry...");
              const U = await hi(K.scene, P);
              console.log(`IFC: ${U.meshCount} meshes loaded, bbox:`, U.bbox);
              const le = new qe();
              U.bbox.getCenter(le);
              const te = new qe();
              U.bbox.getSize(te);
              const Q = Math.max(te.x, te.y, te.z);
              K.controls.target.copy(le), K.camera.position.set(le.x + Q, le.y + Q * 0.5, le.z + Q), K.camera.lookAt(le), K.controls.maxDistance = Q * 5, K.controls.update(), K.render(), window.__ifcLoadResult = U, window.__ifcArrayBuffer = P;
              const me = new FileReader();
              me.onload = () => {
                const de = me.result, ke = ui(de);
                window.__ifcAnalytical = ke;
                const Re = {};
                U.elementInfo.forEach((O) => Re[O.category] = (Re[O.category] || 0) + 1), console.log("IFC categories:", Re), console.log(`IFC: ${U.elementInfo.size} geometric elements, ${ke.elements.length} analytical elements`), d(U, ke);
              }, me.readAsText(x);
            } catch (K) {
              alert("IFC error: " + K.message), console.error(K);
            }
          }, v.readAsArrayBuffer(x), p.value = "";
          return;
        }
        const w = new FileReader();
        w.onload = () => {
          const v = w.result;
          try {
            if (s === "import-e2k") {
              const P = Kl(v);
              Ke = P, r(P, "E2K imported"), g(P);
            } else if (s === "import-s2k") {
              const P = Zl(v);
              r({
                nodes: P.nodes,
                elements: P.elements,
                nodeInputs: P.nodeInputs,
                elementInputs: P.elementInputs,
                sectionShapes: P.sectionShapes,
                info: P.info
              }, "S2K imported");
            } else if (s === "import-py") {
              const P = ri(v);
              r(P, "OpenSeesPy imported");
            } else if (s === "import-tcl") {
              const P = ci(v);
              r(P, "OpenSees Tcl imported");
            }
          } catch (P) {
            alert("Import error: " + P.message), console.error(P);
          }
        }, w.readAsText(x), p.value = "";
      });
      const $ = Ae.querySelector("#cad3d-force-unit");
      $ && ($.value = h, $.addEventListener("change", (x) => {
        x.stopPropagation(), h = $.value, M = Ho(h, R), T && at(T);
      }));
      const y = Ae.querySelector("#cad3d-length-unit");
      y && (y.value = R, y.addEventListener("change", (x) => {
        x.stopPropagation(), R = y.value, M = Ho(h, R), T && at(T);
      })), Ae.querySelectorAll("[data-preset]").forEach((x) => {
        x.addEventListener("click", (w) => {
          w.stopPropagation();
          const v = x.dataset.preset, P = D[v];
          P && (h = P.force, R = P.length, X = P.stress, M = Ho(h, R), $ && ($.value = h), y && (y.value = R), Ae.querySelectorAll("[data-preset]").forEach((K) => {
            K.classList.toggle("active", K.dataset.preset === v);
          }), T && at(T), console.log(`Preset: ${v} \u2192 ${h}+${R}, stress: ${X.label}`));
        });
      }), Ae.querySelectorAll("[data-lang]").forEach((x) => {
        x.addEventListener("click", (w) => {
          w.stopPropagation();
          const v = x.dataset.lang;
          Ll(v), Ae.querySelectorAll("[data-lang]").forEach((P) => P.classList.remove("active")), x.classList.add("active"), Cl(), T && nt();
        });
      }), (_i = Ae.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (x) => {
        x.stopPropagation(), al();
      }), (_j = Ae.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (x) => {
        x.stopPropagation(), ll();
      }), (_k = Ae.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (x) => {
        x.stopPropagation(), rl();
      }), (_l2 = Ae.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l2.addEventListener("click", (x) => {
        x.stopPropagation(), dl();
      }), (_m = Ae.querySelector("#cad3d-calc")) == null ? void 0 : _m.addEventListener("click", (x) => {
        x.stopPropagation(), va(async () => {
          const { openCalcPanel: w } = await import("./calcPanel-CToQkEkn.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          });
          return {
            openCalcPanel: w
          };
        }, __vite__mapDeps([0,1,2,3,4,5]), import.meta.url).then(({ openCalcPanel: w }) => {
          var _a3, _b2;
          const v = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: ((_a3 = e.nodeInputs) == null ? void 0 : _a3.val) ?? {},
            elementInputs: ((_b2 = e.elementInputs) == null ? void 0 : _b2.val) ?? {},
            modelName: T ? T.charAt(0).toUpperCase() + T.slice(1) : "Modelo"
          };
          w(v);
        });
      }), (_n2 = Ae.querySelector("#cad3d-modal")) == null ? void 0 : _n2.addEventListener("click", (x) => {
        var _a3, _b2;
        x.stopPropagation(), Be = !Be, (_a3 = Ae.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", Be);
        const v = Ae.querySelector("#cad3d-mode-prev"), P = Ae.querySelector("#cad3d-mode-next"), K = Ae.querySelector("#cad3d-mode-label"), U = Ae.querySelector("#cad3d-modal-scale");
        if (Be) {
          const le = tt();
          ((_b2 = le == null ? void 0 : le.settings) == null ? void 0 : _b2.loads) && (He = le.settings.loads.rawVal, le.settings.loads.val = false), Yn(), v.style.display = "", P.style.display = "", K.style.display = "", U && (U.style.display = ""), f();
        } else Gn(), v.style.display = "none", P.style.display = "none", K.style.display = "none", U && (U.style.display = "none"), T && T !== "placa-q4" && T !== "placa-3q" && Oe(), setTimeout(() => {
          var _a4;
          const le = tt();
          ((_a4 = le == null ? void 0 : le.settings) == null ? void 0 : _a4.loads) && He && (le.settings.loads.val = true);
        }, 600);
      });
      function f() {
        var _a3;
        const x = Ae.querySelector("#cad3d-mode-label");
        if (!x || !(Pe == null ? void 0 : Pe.frequencies)) return;
        const w = Pe.frequencies[xe], v = w > 0 ? 1 / w : 0, P = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let K = 0; K <= xe; K++) {
          const U = (_a3 = Pe.massParticipation) == null ? void 0 : _a3[K];
          if (U) for (let le = 0; le < 6; le++) P[le] += U[le];
        }
        x.textContent = `Modo ${xe + 1} \u2014 ${w.toFixed(2)} Hz \u2014 T=${v.toFixed(3)}s \u2014 \u03A3Ux=${(P[0] * 100).toFixed(1)}% \u03A3Uy=${(P[1] * 100).toFixed(1)}% \u03A3Rz=${(P[5] * 100).toFixed(1)}%`;
      }
      (_o2 = Ae.querySelector("#cad3d-mode-prev")) == null ? void 0 : _o2.addEventListener("click", (x) => {
        if (x.stopPropagation(), !(Pe == null ? void 0 : Pe.modeShapes)) return;
        xe = (xe - 1 + Pe.modeShapes.length) % Pe.modeShapes.length;
        const w = Pe.modeShapes[xe], { extent: v } = zo();
        let P = 0;
        for (let K = 0; K < ze.length; K++) {
          const U = w[K * 6] || 0, le = w[K * 6 + 1] || 0, te = w[K * 6 + 2] || 0;
          P = Math.max(P, Math.sqrt(U * U + le * le + te * te));
        }
        Je = P > 1e-12 ? v * 0.05 / P : 1, cn(), f();
      }), (_p = Ae.querySelector("#cad3d-mode-next")) == null ? void 0 : _p.addEventListener("click", (x) => {
        var _a3, _b2;
        if (x.stopPropagation(), !(Pe == null ? void 0 : Pe.modeShapes)) return;
        xe = (xe + 1) % Pe.modeShapes.length;
        const w = Pe.modeShapes[xe];
        if (!w) {
          console.warn("No shape for mode", xe);
          return;
        }
        const { extent: v } = zo();
        let P = 0;
        for (let K = 0; K < ze.length; K++) {
          const U = w[K * 6] || 0, le = w[K * 6 + 1] || 0, te = w[K * 6 + 2] || 0;
          P = Math.max(P, Math.sqrt(U * U + le * le + te * te));
        }
        Je = P > 1e-12 ? v * 0.05 / P : 1, console.log(`Mode ${xe + 1}: maxDisp=${P.toExponential(3)}, scale=${Je.toFixed(1)}, f=${(_b2 = (_a3 = Pe.frequencies) == null ? void 0 : _a3[xe]) == null ? void 0 : _b2.toFixed(2)} Hz`), cn(), f();
      });
      const b = Ae.querySelector("#cad3d-modal-scale");
      b == null ? void 0 : b.addEventListener("mousedown", (x) => x.stopPropagation()), b == null ? void 0 : b.addEventListener("change", () => {
        Be && (Pe == null ? void 0 : Pe.modeShapes) && cn();
      });
      const I = Ae.querySelector("#cad3d-cli-toggle"), L = Ae.querySelector("#cad3d-cli-panel"), z = Ae.querySelector("#cad3d-cli-output"), F = Ae.querySelector("#cad3d-cmd"), k = [];
      let m = -1;
      I == null ? void 0 : I.addEventListener("click", (x) => {
        if (x.stopPropagation(), L) {
          const w = L.style.display !== "none";
          L.style.display = w ? "none" : "block", w || (F == null ? void 0 : F.focus(), z && !z.textContent && (z.textContent = `CLI ready. Commands:
  cad.addNode(x, y, z)     cad.addFrame(i, j)
  cad.addSupport(n)        cad.addLoad(n, [fx,fy,fz,0,0,0])
  cad.frame([5,5],[3,3])   cad.building([5],[4],[3])
  cad.galpon(12,20,6,3)    cad.clear()
  cad.info()               cad.listNodes()
`));
        }
      }), F == null ? void 0 : F.addEventListener("mousedown", (x) => x.stopPropagation()), document.addEventListener("keydown", (x) => {
        var _a3;
        if ((x.ctrlKey || x.metaKey) && x.key === "z" && !x.shiftKey) {
          x.preventDefault(), Ws();
          return;
        }
        if ((x.ctrlKey || x.metaKey) && (x.key === "y" || x.key === "z" && x.shiftKey)) {
          x.preventDefault(), Ys();
          return;
        }
        if ((x.key === "Delete" || x.key === "Backspace") && wt.size > 0) {
          x.preventDefault(), wt.forEach((w) => Z.add(w)), wt.clear(), $o && ($o.remove(), $o = null), Oe();
          return;
        }
        if (x.key === "Escape") {
          if (yo) if (kt !== null) {
            kt = null;
            const w = tt();
            Wt && w && (w.scene.remove(Wt), Wt.geometry.dispose(), Wt.material.dispose(), Wt = null), Yt && w && (w.scene.remove(Yt), Yt.geometry.dispose(), Yt.material.dispose(), Yt = null), w == null ? void 0 : w.render();
          } else yn();
          eo && vn(), po && (po = false, qo(), (_a3 = Ae.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), F == null ? void 0 : F.addEventListener("keydown", (x) => {
        if (x.stopPropagation(), x.key === "Enter") {
          const w = F.value.trim();
          if (w) {
            k.unshift(w), m = -1, z && (z.textContent += `> ${w}
`);
            try {
              const v = new Function("cad", `return ${w}`)(ot);
              if (v !== void 0 && z) {
                const P = typeof v == "object" ? JSON.stringify(v, null, 2) : String(v);
                z.textContent += `${P}
`;
              }
            } catch (v) {
              z && (z.textContent += `ERROR: ${v.message}
`);
            }
            z && (z.scrollTop = z.scrollHeight), F.value = "";
          }
        } else x.key === "ArrowUp" ? (x.preventDefault(), k.length > 0 && m < k.length - 1 && (m++, F.value = k[m])) : x.key === "ArrowDown" && (x.preventDefault(), m > 0 ? (m--, F.value = k[m]) : (m = -1, F.value = ""));
      });
      let u = false, E = 0, A = 0, N = 0, W = 0;
      Ae.addEventListener("mousedown", (x) => {
        const w = x.target.tagName;
        if (w === "BUTTON" || w === "INPUT" || w === "SELECT") return;
        u = true;
        const v = Ae.getBoundingClientRect();
        Ae.style.bottom = "unset", E = x.clientX, A = x.clientY, N = v.left, W = v.top, x.preventDefault();
      }), window.addEventListener("mousemove", (x) => {
        u && (x.preventDefault(), Ae.style.left = N + (x.clientX - E) + "px", Ae.style.top = W + (x.clientY - A) + "px");
      }), window.addEventListener("mouseup", () => {
        u = false;
      }), nt();
    }, 10);
    function tt() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function zo() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new qe(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, a = -1 / 0, c = -1 / 0, s = -1 / 0;
      for (const [r, d, g] of t) r < o && (o = r), r > a && (a = r), d < n && (n = d), d > c && (c = d), g < l && (l = g), g > s && (s = g);
      const i = new qe((o + a) / 2, (n + c) / 2, (l + s) / 2), p = Math.max(a - o, c - n, s - l, 1);
      return {
        center: i,
        extent: p
      };
    }
    function It(t = false) {
      const o = tt();
      if (!o) return;
      const { extent: n } = zo();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((g) => g.type === "GridHelper").forEach((g) => {
        var _a2, _b;
        (_a2 = g.geometry) == null ? void 0 : _a2.dispose(), (_b = g.material) == null ? void 0 : _b.dispose(), o.scene.remove(g);
      });
      const c = bl(), s = new kl(l, 20, c.grid, c.grid);
      s.rotation.x = Math.PI / 2, s.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(s), o.scene.children.filter((g) => g.type === "Group" && g.name !== "gridAxes" && g.name !== "loadsGroup" && (g.name === "viewerAxes" || g.children.some((S) => S instanceof En))).forEach((g) => {
        g.traverse((S) => {
          S.geometry && S.geometry.dispose(), S.material && (S.material.map && S.material.map.dispose(), S.material.dispose());
        }), o.scene.remove(g);
      });
      const p = 0.05 * l, r = new hn();
      r.name = "viewerAxes";
      const d = c.axisArrow;
      r.add(new En(new qe(1, 0, 0), new qe(), 1, d, 0.2, 0.2)), r.add(new En(new qe(0, 1, 0), new qe(), 1, d, 0.2, 0.2)), r.add(new En(new qe(0, 0, 1), new qe(), 1, d, 0.2, 0.2)), r.children.forEach((g) => g.scale.set(p, p, p));
      for (const [g, S, $] of [
        [
          "X",
          "red",
          [
            1.3 * p,
            0,
            0
          ]
        ],
        [
          "Y",
          "green",
          [
            0,
            1.3 * p,
            0
          ]
        ],
        [
          "Z",
          "blue",
          [
            0,
            0,
            1.3 * p
          ]
        ]
      ]) {
        const y = document.createElement("canvas");
        y.width = 64, y.height = 64;
        const f = y.getContext("2d");
        f.fillStyle = S, f.font = "bold 50px Arial", f.textAlign = "center", f.textBaseline = "middle", f.fillText(g, 32, 34);
        const b = new ds(y);
        b.needsUpdate = true;
        const I = new Sn(new In({
          map: b,
          depthTest: false,
          transparent: true
        }));
        I.position.set($[0], $[1], $[2]), I.scale.set(0.4 * p, 0.4 * p, 1), I.renderOrder = 99, r.add(I);
      }
      o.scene.add(r), t ? o.render() : Lo("3d");
    }
    function js(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function Lo(t) {
      var _a2;
      const o = tt();
      if (!o) return;
      const { center: n, extent: l } = zo(), a = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), c = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const s = () => {
        o.scene.traverse((i) => {
          var _a3;
          if (!i.material) return;
          const p = i.type === "GridHelper" || i.type === "AxesHelper", r = i.isSprite, d = ((_a3 = i.userData) == null ? void 0 : _a3.noClip) === true;
          (p || r || d) && (Array.isArray(i.material) ? i.material.forEach((g) => {
            g.clippingPlanes = [];
          }) : i.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const i = o.perspCamera.fov, p = l / (2 * Math.tan(i * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + p * 0.5, n.y - p * 0.8, n.z + p * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const i = o.orthoCamera;
        i.left = -c * a, i.right = c * a, i.top = c, i.bottom = -c, i.near = -l * 10, i.far = l * 10, i.updateProjectionMatrix();
        const p = (r, d, g) => {
          i.position.copy(r), i.up.copy(g), o.controls.target.copy(d), i.lookAt(d), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], p(new qe(n.x, n.y, n.z + l * 2), new qe(n.x, n.y, n.z), new qe(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const r = parseInt(t.split(":")[1]), d = ((_a2 = G.hPiso) == null ? void 0 : _a2.val) ?? 3, g = (r + 1) * d, S = d * 0.45;
          o.renderer.clippingPlanes = [
            new Fo(new qe(0, 0, -1), g + S),
            new Fo(new qe(0, 0, 1), -g + S)
          ], s(), p(new qe(n.x, n.y, g + l * 2), new qe(n.x, n.y, g), new qe(0, 1, 0));
        } else if (t === "elevX") i.position.set(n.x + l * 2, n.y, n.z), i.up.set(0, 0, 1);
        else if (t === "elevY") i.position.set(n.x, n.y - l * 2, n.z), i.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const r = parseInt(t.split(":")[1]), d = Ve[r] ?? n.x;
          if (Qe.length > 1) {
            const S = js(Ve, r, l);
            o.renderer.clippingPlanes = [
              new Fo(new qe(-1, 0, 0), d + S),
              new Fo(new qe(1, 0, 0), -d + S)
            ], s(), i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const r = parseInt(t.split(":")[1]), d = Qe[r] ?? n.y;
          if (Ve.length > 1) {
            const S = js(Qe, r, l);
            o.renderer.clippingPlanes = [
              new Fo(new qe(0, -1, 0), d + S),
              new Fo(new qe(0, 1, 0), -d + S)
            ], s(), i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(i);
      }
    }
    function Kn() {
      const t = Ae.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (Ve.length < 2 && Qe.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (c, s, i) => {
        const p = document.createElement("button");
        return p.textContent = c, p.dataset.view = s, p.title = i, p.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", p.addEventListener("click", (r) => {
          var _a2;
          r.stopPropagation();
          const d = p.classList.contains("view-active");
          Ae.querySelectorAll("[data-view]").forEach((g) => g.classList.remove("view-active")), d ? (Lo("3d"), (_a2 = Ae.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (Lo(s), p.classList.add("view-active"));
        }), p;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      Ve.forEach((c, s) => {
        const i = s < l.length ? l[s] : `X${s}`;
        t.appendChild(o(i, `axisX:${s}`, `Eje ${i} \u2014 elevaci\xF3n mirando en Y`));
      });
      const a = document.createElement("span");
      a.textContent = "|", a.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(a), Qe.forEach((c, s) => {
        const i = `${s + 1}`;
        t.appendChild(o(i, `axisY:${s}`, `Eje ${i} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function Zn() {
      var _a2;
      const t = Ae.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a2 = G.nPisos) == null ? void 0 : _a2.val) ?? 0);
      if (o < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (a, c, s) => {
        const i = document.createElement("button");
        return i.textContent = a, i.dataset.view = c, i.title = s, i.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", i.addEventListener("click", (p) => {
          var _a3;
          p.stopPropagation();
          const r = i.classList.contains("view-active");
          Ae.querySelectorAll("[data-view]").forEach((d) => d.classList.remove("view-active")), r ? (Lo("3d"), (_a3 = Ae.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (Lo(c), i.classList.add("view-active"));
        }), i;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let a = 0; a < o; a++) t.appendChild(n(`P${a + 1}`, `plan:${a}`, `Planta Piso ${a + 1}`));
    }
    function Va() {
      Lo("3d"), Ae.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    ot.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, Lo(t), Ae.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let po = false, eo = false, yo = false, Jt = "line", so = [], kt = null, Wt = null, Yt = null, Go = null, lo = null;
    const At = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, Qn = 0.5;
    let es = [], io = null, Oo = null;
    const Vo = [], xn = [], Ja = 50;
    function Jo() {
      Vo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), Vo.length > Ja && Vo.shift(), xn.length = 0;
    }
    function Ws() {
      if (Vo.length === 0) return;
      xn.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = Vo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, To(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function Ys() {
      if (xn.length === 0) return;
      Vo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = xn.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, To(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const wt = /* @__PURE__ */ new Set();
    let to = null, Ao = [], ao = null, $o = null;
    function ts(t) {
      const o = tt();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const a = [];
      for (let i = 0; i < l.length; i++) {
        const p = n[l[i]], r = n[l[(i + 1) % l.length]];
        a.push(p[0], p[1], p[2], r[0], r[1], r[2]);
      }
      const c = new co();
      c.setAttribute("position", new _o(a, 3));
      const s = new en(c, new tn({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      s.renderOrder = 9998, s.__elemIdx = t, o.scene.add(s), Ao.push(s), o.render();
    }
    function Co() {
      const t = tt();
      Ao.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), Ao = [], t == null ? void 0 : t.render();
    }
    function Po() {
      $o && $o.remove();
      const t = J.size > 0 || H;
      if (wt.size === 0 && !t) {
        $o = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${wt.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), $o = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        pl([
          ...wt
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (wt.size === 1) {
          const n = [
            ...wt
          ][0];
          Zs(n);
        } else {
          const n = [
            ...wt
          ], l = e.nodes.val, a = e.elements.val;
          let c = 0, s = 0, i = 0, p = 0;
          n.forEach((d) => {
            const g = a[d];
            if (g) if (g.length === 2) {
              const S = l[g[0]], $ = l[g[1]], y = Math.abs($[0] - S[0]), f = Math.abs($[1] - S[1]), b = Math.abs($[2] - S[2]);
              b > y && b > f ? c++ : s++;
            } else g.length === 3 ? i++ : g.length === 4 && p++;
          });
          const r = [];
          c && r.push(`${c} columnas`), s && r.push(`${s} vigas`), p && r.push(`${p} shells Q4`), i && r.push(`${i} triangulos`), alert(`${n.length} elementos seleccionados:
${r.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        wt.forEach((n) => J.add(n)), wt.clear(), Co(), Po(), Oe();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        H = true, j.clear(), wt.forEach((n) => j.add(n)), wt.clear(), Co(), Po(), Oe();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        J.clear(), H = false, j.clear(), Po(), Oe();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        Jo(), wt.forEach((n) => Z.add(n)), wt.clear(), Co(), Po(), Oe();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        wt.clear(), Co(), Po();
      });
    }
    function vn() {
      var _a2;
      eo = false, wt.clear(), Co(), $o && ($o.remove(), $o = null), (_a2 = Ae.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = tt();
      o && (o.controls.enabled = true);
    }
    function qo() {
      if (to) {
        const t = tt();
        t == null ? void 0 : t.scene.remove(to), to.geometry.dispose(), to.material.dispose(), to = null, t == null ? void 0 : t.render();
      }
      ao && (ao.remove(), ao = null);
    }
    function Xa(t) {
      os();
      const o = tt();
      if (!o) return;
      const n = e.nodes.val[t];
      if (!n) return;
      Oo = t;
      const l = 200, a = [
        [
          [
            1,
            0,
            0
          ],
          16724787,
          "X"
        ],
        [
          [
            0,
            1,
            0
          ],
          3407667,
          "Y"
        ],
        [
          [
            0,
            0,
            1
          ],
          3355647,
          "Z"
        ]
      ];
      for (const [c, s] of a) {
        const i = new Float32Array([
          n[0] - c[0] * l,
          n[1] - c[1] * l,
          n[2] - c[2] * l,
          n[0] + c[0] * l,
          n[1] + c[1] * l,
          n[2] + c[2] * l
        ]), p = new co();
        p.setAttribute("position", new Cn(i, 3));
        const r = new Qo({
          color: s,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), d = new en(p, r);
        d.computeLineDistances(), d.renderOrder = 9990, o.scene.add(d), es.push(d);
      }
      o.render();
    }
    function os() {
      const t = tt();
      for (const o of es) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      es = [], Oo = null, io && (io.remove(), io = null);
    }
    function Gs(t, o, n, l) {
      io || (io = document.createElement("div"), io.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(io));
      const a = l.x - n.x, c = l.y - n.y, s = l.z - n.z, i = Math.sqrt(a * a + c * c + s * s), p = Math.abs(a), r = Math.abs(c), d = Math.abs(s);
      let g = "";
      p > r && p > d ? g = `\u0394X=${a.toFixed(2)}` : r > p && r > d ? g = `\u0394Y=${c.toFixed(2)}` : d > 0.01 && (g = `\u0394Z=${s.toFixed(2)}`), io.textContent = `${i.toFixed(3)} m  ${g}`, io.style.left = t + 20 + "px", io.style.top = o - 10 + "px";
    }
    function Ua(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const a = new qe(l[0], l[1], l[2]), c = t.clone(), s = c.clone().sub(a), i = 0.3, p = Math.abs(s.x), r = Math.abs(s.y), d = Math.abs(s.z);
      return r < i && d < i && p > 0.01 ? new qe(c.x, a.y, a.z) : p < i && d < i && r > 0.01 ? new qe(a.x, c.y, a.z) : p < i && r < i && d > 0.01 ? new qe(a.x, a.y, c.z) : null;
    }
    function yn() {
      var _a2;
      const t = tt();
      Wt && t && (t.scene.remove(Wt), Wt.geometry.dispose(), Wt.material.dispose(), Wt = null), Yt && t && (t.scene.remove(Yt), Yt.geometry.dispose(), Yt.material.dispose(), Yt = null), os(), kt = null, lo = null, yo = false, Go && (Go.remove(), Go = null), (_a2 = Ae.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function Ka() {
      Go && Go.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (a) => `padding:4px 10px;border:1px solid ${a ? "#00ccff" : "#555"};background:${a ? "#003355" : "#333"};color:${a ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (a) => `padding:3px 6px;border:1px solid ${a ? "#33ff33" : "#444"};background:${a ? "#113311" : "#222"};color:${a ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(Jt === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(Jt === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(Jt === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(Jt === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n(At.node)}">Node</button>
      <button id="ds-grid" style="${n(At.grid)}">Grid</button>
      <button id="ds-mid" style="${n(At.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(At.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${Qn}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), Go = t;
      const l = () => {
        const a = t.querySelector("#dt-line"), c = t.querySelector("#dt-arc"), s = t.querySelector("#dt-node"), i = t.querySelector("#dt-area");
        a && (a.style.cssText = o(Jt === "line")), c && (c.style.cssText = o(Jt === "arc")), s && (s.style.cssText = o(Jt === "node")), i && (i.style.cssText = o(Jt === "area"));
        const p = t.querySelector("#ds-node"), r = t.querySelector("#ds-grid"), d = t.querySelector("#ds-mid"), g = t.querySelector("#ds-track");
        p && (p.style.cssText = n(At.node)), r && (r.style.cssText = n(At.grid)), d && (d.style.cssText = n(At.midpoint)), g && (g.style.cssText = n(At.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        Jt = "line", kt = null, lo = null, so = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        Jt = "arc", kt = null, lo = null, so = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        Jt = "node", kt = null, lo = null, so = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        Jt = "area", kt = null, lo = null, so = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        At.node = !At.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        At.grid = !At.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        At.midpoint = !At.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        At.track = !At.track, At.track || os(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (a) => {
        At.gridSize = parseFloat(a.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => Ws()), t.querySelector("#dt-redo").addEventListener("click", () => Ys());
    }
    function Vs(t, o, n, l) {
      const a = l.getBoundingClientRect(), c = (t - a.left) / a.width * 2 - 1, s = -((o - a.top) / a.height) * 2 + 1, i = new Ma();
      i.setFromCamera(new wa(c, s), n);
      const p = e.nodes.val, r = e.elements.val, d = 0.12;
      if (At.node) {
        let $ = -1, y = 1 / 0;
        for (let f = 0; f < p.length; f++) {
          const b = p[f], I = new qe(b[0], b[1], b[2]).project(n), L = Math.sqrt((I.x - c) ** 2 + (I.y - s) ** 2);
          L < d && L < y && (y = L, $ = f);
        }
        if ($ >= 0) return {
          nodeIdx: $,
          worldPos: new qe(...p[$]),
          snapType: "node"
        };
      }
      if (At.midpoint) {
        let $ = 1 / 0, y = null;
        for (const f of r) {
          if (f.length !== 2) continue;
          const b = p[f[0]], I = p[f[1]], L = new qe((b[0] + I[0]) / 2, (b[1] + I[1]) / 2, (b[2] + I[2]) / 2), z = L.clone().project(n), F = Math.sqrt((z.x - c) ** 2 + (z.y - s) ** 2);
          F < d * 0.8 && F < $ && ($ = F, y = L);
        }
        if (y) return {
          nodeIdx: null,
          worldPos: y,
          snapType: "mid"
        };
      }
      if (At.grid) {
        const $ = new Fo(new qe(0, 0, 1), 0), y = new qe();
        if (i.ray.intersectPlane($, y)) {
          const f = At.gridSize || Qn;
          return y.x = Math.round(y.x / f) * f, y.y = Math.round(y.y / f) * f, y.z = Math.round(y.z / f) * f, {
            nodeIdx: null,
            worldPos: y,
            snapType: "grid"
          };
        }
      }
      const g = new Fo(new qe(0, 0, 1), 0), S = new qe();
      return i.ray.intersectPlane(g, S), {
        nodeIdx: null,
        worldPos: S,
        snapType: "free"
      };
    }
    function Js(t) {
      const o = tt();
      if (!o) return;
      const n = e.nodes.val;
      if (Yt && (o.scene.remove(Yt), Yt.geometry.dispose(), Yt.material.dispose(), Yt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, a = t.snapType === "node" ? 0.08 : 0.06, c = t.snapType === "mid" ? new wl(a * 2, a * 2, a * 2) : new El(a, 12, 12), s = new Sl({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        Yt = new Ta(c, s), Yt.position.copy(t.worldPos), Yt.renderOrder = 9999, o.scene.add(Yt);
      }
      if (Wt && (o.scene.remove(Wt), Wt.geometry.dispose(), Wt.material.dispose(), Wt = null), kt !== null && t.worldPos) {
        const l = n[kt], a = new co();
        if (Jt === "arc" && lo !== null) {
          const s = n[lo], i = Xs(new qe(l[0], l[1], l[2]), new qe(s[0], s[1], s[2]), t.worldPos, 16), p = [];
          for (let r = 0; r < i.length - 1; r++) p.push(i[r].x, i[r].y, i[r].z, i[r + 1].x, i[r + 1].y, i[r + 1].z);
          a.setAttribute("position", new _o(p, 3));
        } else a.setAttribute("position", new _o([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const c = new tn({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        Wt = new Bo(a, c), Jt === "arc" && lo !== null && (Wt = new en(a, c)), Wt.renderOrder = 9999, o.scene.add(Wt);
      }
      o.render();
    }
    function Xs(t, o, n, l) {
      const a = [];
      for (let c = 0; c <= l; c++) {
        const s = c / l, i = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), p = (1 - s) * (1 - s), r = 2 * (1 - s) * s, d = s * s;
        a.push(new qe(p * t.x + r * i.x + d * n.x, p * t.y + r * i.y + d * n.y, p * t.z + r * i.z + d * n.z));
      }
      return a;
    }
    function ns(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const o = e.nodes.val, n = 1e-3;
      for (let a = 0; a < o.length; a++) if (Math.abs(o[a][0] - t.worldPos.x) < n && Math.abs(o[a][1] - t.worldPos.y) < n && Math.abs(o[a][2] - t.worldPos.z) < n) return a;
      Jo();
      const l = [
        ...o,
        [
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ]
      ];
      return e.nodes.val = l, l.length - 1;
    }
    function Za(t) {
      var _a2;
      if (Jt === "node") {
        if (!t.worldPos) return;
        Jo();
        const o = [
          ...e.nodes.val
        ];
        o.push([
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ]), e.nodes.val = o;
        return;
      }
      if (Jt === "line") {
        const o = ns(t);
        if (o < 0) return;
        if (kt === null) {
          kt = o;
          return;
        }
        if (o === kt) return;
        Jo();
        const n = [
          ...e.elements.val
        ];
        n.some((a) => a.length === 2 && (a[0] === kt && a[1] === o || a[1] === kt && a[0] === o)) || (n.push([
          kt,
          o
        ]), e.elements.val = n, To(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), kt = o;
        return;
      }
      if (Jt === "arc") {
        const o = ns(t);
        if (o < 0) return;
        if (kt === null) {
          kt = o;
          return;
        }
        if (lo === null) {
          if (o === kt) return;
          lo = o;
          return;
        }
        if (o === kt || o === lo) return;
        const n = e.nodes.val, l = new qe(...n[kt]), a = new qe(...n[lo]), c = new qe(...n[o]), s = Math.max(4, Math.round(((_a2 = G.nSubViga) == null ? void 0 : _a2.val) ?? 8)), i = Xs(l, a, c, s);
        Jo();
        const p = [
          ...e.nodes.val
        ], r = [
          ...e.elements.val
        ];
        let d = kt;
        for (let g = 1; g < i.length; g++) {
          let S;
          if (g === i.length - 1) S = o;
          else {
            const $ = i[g];
            S = p.length, p.push([
              $.x,
              $.y,
              $.z
            ]);
          }
          r.push([
            d,
            S
          ]), d = S;
        }
        e.nodes.val = p, e.elements.val = r, To(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, kt = o, lo = null;
        return;
      }
      if (Jt === "area") {
        const o = ns(t);
        if (o < 0) return;
        if (so.length >= 3 && o === so[0]) {
          Jo();
          const n = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], a = so.map((c) => n[c]);
          try {
            const c = Io({
              points: a,
              polygon: Array.from({
                length: a.length
              }, (i, p) => p),
              maxMeshSize: Qn || 0.5
            }), s = [];
            for (const i of c.nodes) {
              let p = -1;
              for (let r = 0; r < n.length; r++) {
                const d = Math.abs(n[r][0] - i[0]), g = Math.abs(n[r][1] - i[1]), S = Math.abs(n[r][2] - i[2]);
                if (d < 0.01 && g < 0.01 && S < 0.01) {
                  p = r;
                  break;
                }
              }
              p >= 0 ? s.push(p) : (s.push(n.length), n.push([
                i[0],
                i[1],
                i[2]
              ]));
            }
            for (const i of c.elements) l.push([
              s[i[0]],
              s[i[1]],
              s[i[2]]
            ]);
            e.nodes.val = n, e.elements.val = l, To(), console.log(`Area: ${c.elements.length} triangulos creados desde ${so.length} vertices`);
          } catch (c) {
            console.error("Area mesh failed:", c.message);
          }
          so = [];
          return;
        }
        if (so.push(o), console.log(`Area vertex ${so.length}: node ${o}`), so.length >= 2) {
          const n = so[so.length - 2], l = e.nodes.val, a = tt();
          if (a) {
            const c = new co().setFromPoints([
              new qe(...l[n]),
              new qe(...l[o])
            ]), s = new en(c, new tn({
              color: 65280,
              linewidth: 2
            }));
            s.name = "area-preview", a.scene.add(s), a.render();
          }
        }
        return;
      }
    }
    function Us(t) {
      const o = tt();
      if (!o) return;
      to && (o.scene.remove(to), to.geometry.dispose(), to.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const a = [];
      for (let s = 0; s < l.length; s++) {
        const i = n[l[s]], p = n[l[(s + 1) % l.length]];
        a.push(i[0], i[1], i[2], p[0], p[1], p[2]);
      }
      const c = new co();
      c.setAttribute("position", new _o(a, 3)), to = new en(c, new tn({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), to.renderOrder = 9999, o.scene.add(to), o.render();
    }
    function ss(t) {
      const o = tt();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new wa((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), a = new Ma();
      a.setFromCamera(l, o.controls.object), a.params.Line = {
        threshold: 0.5
      };
      const c = e.nodes.val, s = e.elements.val;
      if (c.length === 0 || s.length === 0) return -1;
      let i = 1 / 0, p = -1;
      const r = a.ray;
      for (let g = 0; g < s.length; g++) {
        const S = s[g];
        if (S.length === 2) {
          const $ = new qe(...c[S[0]]), y = new qe(...c[S[1]]), f = new Il($, y), b = new qe(), I = new qe();
          r.closestPointToPoint(f.getCenter(new qe()), b), f.closestPointToPoint(b, true, I);
          const L = b.distanceTo(I);
          L < i && (i = L, p = g);
        } else if (S.length === 3) {
          const $ = new qe(...c[S[0]]), y = new qe(...c[S[1]]), f = new qe(...c[S[2]]), b = new qe();
          if (r.intersectTriangle($, y, f, false, b)) {
            const L = r.origin.distanceTo(b);
            L < i && (i = L, p = g);
          } else {
            const L = $.add(y).add(f).divideScalar(3), z = new qe();
            r.closestPointToPoint(L, z);
            const F = z.distanceTo(L);
            F < i && (i = F, p = g);
          }
        } else if (S.length === 4) {
          const $ = new qe(...c[S[0]]), y = new qe(...c[S[1]]), f = new qe(...c[S[2]]), b = new qe(...c[S[3]]), I = new qe();
          let L = r.intersectTriangle($, y, f, false, I);
          if (L) {
            const z = r.origin.distanceTo(I);
            z < i && (i = z, p = g);
          }
          if (L = r.intersectTriangle($, f, b, false, I), L) {
            const z = r.origin.distanceTo(I);
            z < i && (i = z, p = g);
          }
        }
      }
      const { extent: d } = zo();
      return i < d * 0.1 ? p : -1;
    }
    function Ee(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function as(t, o, n = 12) {
      var _a2;
      const l = Math.min(t.length, n), a = Math.min(((_a2 = t[0]) == null ? void 0 : _a2.length) || 0, n);
      let c = "<table>";
      if (o) {
        c += '<tr><td class="header"></td>';
        for (let s = 0; s < a; s++) c += `<td class="header">${o[s] || s}</td>`;
        c += "</tr>";
      }
      for (let s = 0; s < l; s++) {
        c += "<tr>", o && (c += `<td class="header">${o[s] || s}</td>`);
        for (let i = 0; i < a; i++) {
          const p = t[s][i], r = Math.abs(p) > 1e-10 ? "nonzero" : "";
          c += `<td class="${r}">${Ee(p, 2)}</td>`;
        }
        c += "</tr>";
      }
      return c += "</table>", c;
    }
    function je(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function C(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Qa(t, o, n, l, a, c, s) {
      const i = 0.8333333333333334 * o, p = 5 / 6 * o, r = p > 0 && a > 0 ? 12 * t * n / (a * p * s ** 2) : 0, d = i > 0 && a > 0 ? 12 * t * l / (a * i * s ** 2) : 0, g = t * o / s, S = a * c / s, $ = 12 * t * n / s ** 3 / (1 + r), y = 6 * t * n / s ** 2 / (1 + r), f = 4 * t * n / s * (1 + r / 4) / (1 + r), b = 2 * t * n / s * (1 - r / 2) / (1 + r), I = r > 1e-10 || d > 1e-10;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n: ${I ? "Timoshenko (con deformaci\xF3n por cortante)" : "Euler-Bernoulli"}</strong></div>
      ${I ? `
      <div style="text-align:left;margin-bottom:6px;color:var(--fem-eq-sub)">
        ${C("A", "s")} = ${je("5", "6")} \xB7 ${C("A")} = <span class="highlight">${Ee(i)}</span>
        &nbsp;&nbsp; \u03C6<sub>z</sub> = ${je("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("G") + "\xB7" + C("A", "s") + "\xB7" + C("L") + "\xB2")} = <span class="highlight">${Ee(r)}</span>
        &nbsp;&nbsp; \u03C6<sub>y</sub> = <span class="highlight">${Ee(d)}</span>
      </div>
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes Timoshenko (Dr. Aguiar):</strong></div>
      <div>${C("t", "z")} = ${je("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Ee($)}</span> &nbsp;(cortante)</div>
      <div>${C("b", "z")} = ${je("6\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB2\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Ee(y)}</span> &nbsp;(acoplamiento)</div>
      <div>${C("k", "z")} = ${je("4\xB7" + C("E") + "\xB7" + C("I", "z") + "\xB7(1+\u03C6/4)", C("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Ee(f)}</span> &nbsp;(flexi\xF3n diagonal)</div>
      <div>${C("a", "z")} = ${je("2\xB7" + C("E") + "\xB7" + C("I", "z") + "\xB7(1\u2212\u03C6/2)", C("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Ee(b)}</span> &nbsp;(flexi\xF3n off-diag)</div>
      ` : `
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      `}
      <div>${je(C("E") + "\xB7" + C("A"), C("L"))} = <span class="highlight">${Ee(g)}</span> &nbsp;(axial)</div>
      <div>${je(C("G") + "\xB7" + C("J"), C("L"))} = <span class="highlight">${Ee(S)}</span> &nbsp;(torsi\xF3n)</div>
      ${I ? "" : `
      <div>${je("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3")} = <span class="highlight">${Ee($)}</span></div>
      <div>${je("4\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))} = <span class="highlight">${Ee(f)}</span></div>
      `}
    </div>
    <div class="fem-eq">
      ${C("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${je(C("EA"), C("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${je("\u2212" + C("EA"), C("L"))}</span>
        <span class="cell">0</span><span class="cell">${C("t", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${C("b", "z")}</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">0</span><span class="cell">${C("b", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${C("k", "z")}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712 ${I ? "(Timoshenko)" : "(Euler-Bernoulli)"}</sub>
    </div>
    ${I ? `<div class="fem-eq eq-box" style="margin-top:6px">
      <div style="text-align:left"><strong style="color:var(--fem-section-title)">Matrices de rigidez (Dr. Aguiar, Fig 7.9):</strong></div>
      <div style="margin-top:4px">${C("K", "f")} = ${C("B", "f")}<sup>T</sup> \xB7 ${C("E")}\xB7${C("I")} \xB7 ${C("B", "f")} \xB7 ${C("J")} &nbsp;<sub style="color:var(--fem-label)">(flexi\xF3n, 1 pt Gauss)</sub></div>
      <div>${C("K", "c")} = ${C("B", "c")}<sup>T</sup> \xB7 ${C("G")}\xB7${C("A'")} \xB7 ${C("B", "c")} \xB7 ${C("J")} &nbsp;<sub style="color:var(--fem-label)">(cortante, 2 pts Gauss)</sub></div>
      <div>${C("K", "total")} = ${C("K", "f")} + ${C("K", "c")}</div>
    </div>` : ""}`;
    }
    function el(t) {
      if (t.length === 2) {
        const n = ko(t[1], t[0]), l = jo(n), a = n[0] / l, c = n[1] / l, s = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${C("l")} = cos(\u03B1) = ${je("\u0394x", C("L"))} = ${je(Ee(n[0]), Ee(l))} = <span class="highlight">${Ee(a)}</span></div>
        <div>${C("m")} = cos(\u03B2) = ${je("\u0394y", C("L"))} = ${je(Ee(n[1]), Ee(l))} = <span class="highlight">${Ee(c)}</span></div>
        <div>${C("n")} = cos(\u03B3) = ${je("\u0394z", C("L"))} = ${je(Ee(n[2]), Ee(l))} = <span class="highlight">${Ee(s)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${C("l")}</span><span class="cell">${C("m")}</span><span class="cell">${C("n")}</span>
          <span class="cell">${je("\u2212" + C("m"), C("D"))}</span><span class="cell">${je(C("l"), C("D"))}</span><span class="cell">0</span>
          <span class="cell">${je("\u2212" + C("l") + "\xB7" + C("n"), C("D"))}</span><span class="cell">${je("\u2212" + C("m") + "\xB7" + C("n"), C("D"))}</span><span class="cell">${C("D")}</span>
        </span>
        &nbsp; donde ${C("D")} = \u221A(${C("l")}\xB2 + ${C("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${C("T")} = ${C("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${C("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function tl() {
      return `<div class="fem-eq">
      ${C("K", "global")} = ${C("T")}<sup>T</sup> \xB7 ${C("k", "local")} \xB7 ${C("T")}
    </div>`;
    }
    function ol(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${C("K", "global")}[${C("i")}, ${C("j")}] += ${C("K", "elem")}[${C("i")}, ${C("j")}]</div>
      <div style="margin-top:4px">donde ${C("i")}, ${C("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function nl(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${C("u", "local")} = ${C("T")} \xB7 ${C("u", "global")}</div>
        <div>${C("f", "local")} = ${C("k", "local")} \xB7 ${C("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${C("f")} = [${C("N", "i")}, ${C("V", "y,i")}, ${C("V", "z,i")}, ${C("M", "x,i")}, ${C("M", "y,i")}, ${C("M", "z,i")}, ${C("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${je("1", "2" + C("A"))} \xB7 ${C("D")} \xB7 ${C("B")} \xB7 ${C("u")}</div>
      <div>${C("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${C("t")} &nbsp;&nbsp; ${C("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${je(C("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function ls(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let a = 0; a < n; a++) l += `<td class="hdr">${o[a] || a}</td>`;
      l += "</tr>";
      for (let a = 0; a < n; a++) {
        l += `<tr><td class="hdr">${o[a] || a}</td>`;
        for (let c = 0; c < n; c++) {
          const s = t[a][c], i = (a === c ? "diag " : "") + (Math.abs(s) > 1e-10 ? "nz" : "");
          l += `<td class="${i}">${Ee(s, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function Ks() {
      const t = "0", o = je(C("EA"), C("L")), n = je("\u2212" + C("EA"), C("L")), l = je("12" + C("EI", "z"), C("L") + "\xB3"), a = je("\u221212" + C("EI", "z"), C("L") + "\xB3"), c = je("12" + C("EI", "y"), C("L") + "\xB3"), s = je("\u221212" + C("EI", "y"), C("L") + "\xB3"), i = je("6" + C("EI", "z"), C("L") + "\xB2"), p = je("\u22126" + C("EI", "z"), C("L") + "\xB2"), r = je("6" + C("EI", "y"), C("L") + "\xB2"), d = je("\u22126" + C("EI", "y"), C("L") + "\xB2"), g = je(C("GJ"), C("L")), S = je("\u2212" + C("GJ"), C("L")), $ = je("4" + C("EI", "z"), C("L")), y = je("2" + C("EI", "z"), C("L")), f = je("4" + C("EI", "y"), C("L")), b = je("2" + C("EI", "y"), C("L")), I = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', L = [
        "P\u2081",
        "P\u2082",
        "P\u2083",
        "P\u2084",
        "P\u2085",
        "P\u2086",
        "P\u2087",
        "P\u2088",
        "P\u2089",
        "P\u2081\u2080",
        "P\u2081\u2081",
        "P\u2081\u2082"
      ], z = [
        "\u03B4\u2081",
        "\u03B4\u2082",
        "\u03B4\u2083",
        "\u03B4\u2084",
        "\u03B4\u2085",
        "\u03B4\u2086",
        "\u03B4\u2087",
        "\u03B4\u2088",
        "\u03B4\u2089",
        "\u03B4\u2081\u2080",
        "\u03B4\u2081\u2081",
        "\u03B4\u2081\u2082"
      ], F = [
        [
          o,
          t,
          t,
          t,
          t,
          t,
          n,
          t,
          t,
          t,
          t,
          t
        ],
        [
          t,
          l,
          t,
          t,
          t,
          i,
          t,
          a,
          t,
          t,
          t,
          i
        ],
        [
          t,
          t,
          c,
          t,
          d,
          t,
          t,
          t,
          s,
          t,
          d,
          t
        ],
        [
          t,
          t,
          t,
          g,
          t,
          t,
          t,
          t,
          t,
          S,
          t,
          t
        ],
        [
          t,
          t,
          d,
          t,
          f,
          t,
          t,
          t,
          r,
          t,
          b,
          t
        ],
        [
          t,
          i,
          t,
          t,
          t,
          $,
          t,
          p,
          t,
          t,
          t,
          y
        ],
        [
          n,
          t,
          t,
          t,
          t,
          t,
          o,
          t,
          t,
          t,
          t,
          t
        ],
        [
          t,
          a,
          t,
          t,
          t,
          p,
          t,
          l,
          t,
          t,
          t,
          p
        ],
        [
          t,
          t,
          s,
          t,
          r,
          t,
          t,
          t,
          c,
          t,
          r,
          t
        ],
        [
          t,
          t,
          t,
          S,
          t,
          t,
          t,
          t,
          t,
          g,
          t,
          t
        ],
        [
          t,
          t,
          d,
          t,
          b,
          t,
          t,
          t,
          r,
          t,
          f,
          t
        ],
        [
          t,
          i,
          t,
          t,
          t,
          y,
          t,
          p,
          t,
          t,
          t,
          $
        ]
      ];
      let k = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      k += '<table><tr><td class="hdr"></td>';
      for (const m of z) k += `<td class="hdr">${m}</td>`;
      k += "</tr>";
      for (let m = 0; m < 12; m++) {
        k += `<tr><td class="hdr">${L[m]}</td>`;
        for (let u = 0; u < 12; u++) if (u < m) k += `<td style="color:var(--fem-border-cell)">${u === 0 && m > 0 ? I : ""}</td>`;
        else {
          const E = F[m][u], A = (m === u ? "diag " : "") + (E !== "0" ? "nz" : "");
          k += `<td class="${A}">${E}</td>`;
        }
        k += "</tr>";
      }
      return k += "</table>", k;
    }
    function sl(t, o, n, l, a, c, s) {
      return `<div class="coeff-grid">${[
        {
          name: `${je(C("E") + "\xB7" + C("A"), C("L"))}`,
          calc: `${je(Ee(t) + "\xD7" + Ee(o), Ee(s))}`,
          val: t * o / s,
          label: "Axial"
        },
        {
          name: `${je("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3")}`,
          calc: `${je("12\xD7" + Ee(t) + "\xD7" + Ee(n), Ee(s) + "\xB3")}`,
          val: 12 * t * n / s ** 3,
          label: "Corte Y"
        },
        {
          name: `${je("6\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB2")}`,
          calc: `${je("6\xD7" + Ee(t) + "\xD7" + Ee(n), Ee(s) + "\xB2")}`,
          val: 6 * t * n / s ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${je("12\xB7" + C("E") + "\xB7" + C("I", "y"), C("L") + "\xB3")}`,
          calc: `${je("12\xD7" + Ee(t) + "\xD7" + Ee(l), Ee(s) + "\xB3")}`,
          val: 12 * t * l / s ** 3,
          label: "Corte Z"
        },
        {
          name: `${je("6\xB7" + C("E") + "\xB7" + C("I", "y"), C("L") + "\xB2")}`,
          calc: `${je("6\xD7" + Ee(t) + "\xD7" + Ee(l), Ee(s) + "\xB2")}`,
          val: 6 * t * l / s ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${je(C("G") + "\xB7" + C("J"), C("L"))}`,
          calc: `${je(Ee(a) + "\xD7" + Ee(c), Ee(s))}`,
          val: a * c / s,
          label: "Torsi\xF3n"
        },
        {
          name: `${je("4\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))}`,
          calc: `${je("4\xD7" + Ee(t) + "\xD7" + Ee(n), Ee(s))}`,
          val: 4 * t * n / s,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${je("2\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))}`,
          calc: `${je("2\xD7" + Ee(t) + "\xD7" + Ee(n), Ee(s))}`,
          val: 2 * t * n / s,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${je("4\xB7" + C("E") + "\xB7" + C("I", "y"), C("L"))}`,
          calc: `${je("4\xD7" + Ee(t) + "\xD7" + Ee(l), Ee(s))}`,
          val: 4 * t * l / s,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${je("2\xB7" + C("E") + "\xB7" + C("I", "y"), C("L"))}`,
          calc: `${je("2\xD7" + Ee(t) + "\xD7" + Ee(l), Ee(s))}`,
          val: 2 * t * l / s,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((p) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${p.label}</div>${p.name} = ${p.calc} = <span class="highlight">${Ee(p.val)}</span></div>`).join("")}</div>`;
    }
    function is(t, o, n, l) {
      var _a2;
      const a = document.querySelector(".fem-full-overlay");
      a && a.remove();
      const c = document.createElement("div");
      c.className = "fem-full-overlay", c.innerHTML = `
      <button class="close-full" id="fem-full-close">\u2715 Cerrar</button>
      <h2>${t}</h2>
      <div class="fem-full-sections">
        <div class="full-section">
          <div class="side-title">\u2460 F\xF3rmula General (simb\xF3lica)</div>
          <div class="fem-full-sym">${o}</div>
        </div>
        ${l ? `<div class="full-section coeff">
          <div class="side-title">\u2461 C\xE1lculo de Coeficientes (sustituci\xF3n num\xE9rica)</div>
          ${l}
        </div>` : ""}
        <div class="full-section numeric">
          <div class="side-title">${l ? "\u2462" : "\u2461"} Matriz Num\xE9rica Resultante</div>
          ${n}
        </div>
      </div>
    `, document.body.appendChild(c), (_a2 = c.querySelector("#fem-full-close")) == null ? void 0 : _a2.addEventListener("click", () => c.remove()), c.addEventListener("click", (s) => {
        s.target === c && c.remove();
      });
    }
    function Zs(t) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O;
      ao && ao.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], a = l.map((m) => o[m]), c = l.length === 2, s = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, i = (_b = e.deformOutputs) == null ? void 0 : _b.val, p = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      var r = "";
      if (c) {
        const m = jo(ko(a[1], a[0])), u = ((_d = s.elasticities) == null ? void 0 : _d.get(t)) ?? 0, E = ((_e2 = s.areas) == null ? void 0 : _e2.get(t)) ?? 0, A = ((_f = s.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, N = ((_g = s.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, W = ((_h = s.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, x = ((_i = s.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0, w = ((_j = s.momentReleases) == null ? void 0 : _j.get(t)) || [], v = ((_k = s.partialFixitySprings) == null ? void 0 : _k.get(t)) || [], P = [
          "P (Axial)",
          "V2 (Corte)",
          "V3 (Corte)",
          "T (Torsi\xF3n)",
          "M22 (Momento)",
          "M33 (Momento)"
        ];
        let K = "";
        for (let U = 0; U < 6; U++) {
          const le = U, te = U + 6, Q = (w.length >= 12 ? w[le] : U >= 3 && w.length >= 6 && w[U - 3]) ? "checked" : "", me = (w.length >= 12 ? w[te] : U >= 3 && w.length >= 6 && w[U]) ? "checked" : "", de = v.length >= 12 && v[le] > 0 ? v[le].toFixed(1) : "", ke = v.length >= 12 && v[te] > 0 ? v[te].toFixed(1) : "";
          K += `<tr>
          <td style="text-align:left;color:var(--fem-key)">${P[U]}</td>
          <td style="text-align:center"><input type="checkbox" data-rel="${le}" ${Q}></td>
          <td style="text-align:center"><input type="checkbox" data-rel="${te}" ${me}></td>
          <td><input type="number" data-spr="${le}" value="${de}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
          <td><input type="number" data-spr="${te}" value="${ke}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
        </tr>`;
        }
        `${l[0]}${l[1]}${Ee(m)}${Ee(u)}${Ee(E)}${Ee(A)}${Ee(N)}${Ee(W)}${Ee(x)}${K}`;
      } else {
        const m = ((_l2 = s.elasticities) == null ? void 0 : _l2.get(t)) ?? 0, u = ((_m = s.thicknesses) == null ? void 0 : _m.get(t)) ?? 0, E = ((_n2 = s.poissonsRatios) == null ? void 0 : _n2.get(t)) ?? 0, A = m / (2 * (1 + E)), N = l.length === 4, W = m / (1 - E * E);
        `${l.length}${l.join(", ")}${Ee(m)}${Ee(A)}${Ee(u)}${Ee(E)}`, N && (r = `<div class="fem-eq eq-box">
          <div style="text-align:left;margin-bottom:6px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n Q4: Membrana + Mindlin-Reissner + Drilling</strong></div>

          <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">1. Matriz constitutiva (esfuerzo plano):</strong></div>
          <div>${C("D")} = ${je(C("E"), "1\u2212\u03BD\xB2")} \xB7 <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
            <span class="cell">1</span><span class="cell">\u03BD</span><span class="cell">0</span>
            <span class="cell">\u03BD</span><span class="cell">1</span><span class="cell">0</span>
            <span class="cell">0</span><span class="cell">0</span><span class="cell">${je("1\u2212\u03BD", "2")}</span>
          </span> = ${je(Ee(m), "1\u2212" + Ee(E) + "\xB2")} = <span class="highlight">${Ee(W)}</span></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">2. Funciones de forma (Ec. 6.2, Wilson):</strong></div>
          <div>${C("N", "i")} = \xBC\xB7(1\xB1\u03BE)\xB7(1\xB1\u03B7) &nbsp;&nbsp; <sub style="color:var(--fem-label)">i = 1..4 (bilineal)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">3. Modos incompatibles (Ec. 6.13, Wilson 1971):</strong></div>
          <div>${C("N", "5")} = 1 \u2212 \u03BE\xB2 &nbsp;&nbsp; ${C("N", "6")} = 1 \u2212 \u03B7\xB2</div>
          <div style="margin-top:4px">${C("u", "x")} = \u03A3${C("N", "i")}\xB7${C("u", "xi")} + \u03B1\u2081\xB7${C("N", "5")} + \u03B1\u2082\xB7${C("N", "6")} &nbsp;<sub style="color:var(--fem-label)">(Ec. 6.12)</sub></div>
          <div>${C("u", "y")} = \u03A3${C("N", "i")}\xB7${C("u", "yi")} + \u03B1\u2083\xB7${C("N", "5")} + \u03B1\u2084\xB7${C("N", "6")}</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">4. Deformaci\xF3n-desplazamiento (Ec. 6.3):</strong></div>
          <div>${C("d")} = [${C("B", "C")} &nbsp; ${C("B", "I")}] \xB7 [${C("u")} &nbsp; \u03B1]<sup>T</sup></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">5. Submatrices de rigidez (Ec. 6.9):</strong></div>
          <div>${C("k", "CC")} = \u222B${C("B", "C")}<sup>T</sup>\xB7${C("E")}\xB7${C("B", "C")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD78 est\xE1ndar)</sub></div>
          <div>${C("k", "CI")} = \u222B${C("B", "C")}<sup>T</sup>\xB7${C("E")}\xB7${C("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD74 acoplamiento)</sub></div>
          <div>${C("k", "II")} = \u222B${C("B\u0304", "I")}<sup>T</sup>\xB7${C("E")}\xB7${C("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(4\xD74 modos internos)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">6. Condensaci\xF3n est\xE1tica (Ec. 6.11):</strong></div>
          <div style="font-size:13px"><span class="highlight">${C("k", "C")} = ${C("k", "CC")} \u2212 ${C("k", "CI")} \xB7 ${C("k", "II")}\u207B\xB9 \xB7 ${C("k", "IC")}</span></div>
          <div style="margin-top:4px;color:var(--fem-eq-sub)">Los 4 modos incompatibles \u03B1 se eliminan antes del ensamblaje global</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">7. Correcci\xF3n de Taylor (Ec. 6.7):</strong></div>
          <div>${C("B\u0304", "I")} = ${C("B", "I")} + ${C("B", "IC")} &nbsp; donde &nbsp; ${C("B", "IC")} = \u2212${je("1", "V")}\u222B${C("B", "I")} dV</div>
          <div style="color:var(--fem-eq-sub)">Jacobiano del centro para modos incompatibles \u2192 pasa patch test</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">8. Drilling DOF (Hughes-Brezzi 1989):</strong></div>
          <div>${C("K", "drill")} = \u03B1\xB7${C("G")}\xB7${C("t")} \xB7 \u222B${C("B", "d")}<sup>T</sup>\xB7${C("B", "d")} dA &nbsp; donde \u03B1 = 0.5</div>
          <div>${C("B", "d")}[i] = \u03B8<sub>z,i</sub> \u2212 \xBD\xB7(\u2202v/\u2202x \u2212 \u2202u/\u2202y) &nbsp;<sub style="color:var(--fem-label)">(rotaci\xF3n antisim\xE9trica)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">9. Placa Mindlin-Reissner + MITC4:</strong></div>
          <div>${C("D", "b")} = ${je(C("E") + "\xB7" + C("t") + "\xB3", "12\xB7(1\u2212\u03BD\xB2)")} = <span class="highlight">${Ee(m * u ** 3 / (12 * (1 - E ** 2)))}</span></div>
          <div>${C("D", "s")} = \u03BA\xB7${C("G")}\xB7${C("t")} = <span class="highlight">${Ee(5 / 6 * A * u)}</span> &nbsp; <sub style="color:var(--fem-label)">\u03BA = 5/6</sub></div>
          <div style="color:var(--fem-eq-sub)">MITC4: interpolaci\xF3n de cortante en puntos de atado (tying points)</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">10. Ensamblaje final:</strong></div>
          <div>${C("K", "24\xD724")} = ${C("K", "membrana")}(8\xD78) + ${C("K", "flexi\xF3n")}(12\xD712) + ${C("K", "drilling")}(12\xD712)</div>
          <div style="color:var(--fem-eq-sub)">DOFs por nodo: [u, v, w, \u03B8x, \u03B8y, \u03B8z]</div>
        </div>`);
      }
      let d = "", g = "", S = "";
      r || (r = "");
      let $ = "", y = "", f = "", b = "", I = null, L = null, z = null, F = [];
      try {
        if (I = Pn(a, s, t), L = Fn(a), z = uo(bs(L), uo(I, L)), F = c ? [
          "ux\u2080",
          "uy\u2080",
          "uz\u2080",
          "\u03B8x\u2080",
          "\u03B8y\u2080",
          "\u03B8z\u2080",
          "ux\u2081",
          "uy\u2081",
          "uz\u2081",
          "\u03B8x\u2081",
          "\u03B8y\u2081",
          "\u03B8z\u2081"
        ] : l.length === 4 ? [
          "ux\u2080",
          "uy\u2080",
          "uz\u2080",
          "\u03B8x\u2080",
          "\u03B8y\u2080",
          "\u03B8z\u2080",
          "ux\u2081",
          "uy\u2081",
          "uz\u2081",
          "\u03B8x\u2081",
          "\u03B8y\u2081",
          "\u03B8z\u2081",
          "ux\u2082",
          "uy\u2082",
          "uz\u2082",
          "\u03B8x\u2082",
          "\u03B8y\u2082",
          "\u03B8z\u2082",
          "ux\u2083",
          "uy\u2083",
          "uz\u2083",
          "\u03B8x\u2083",
          "\u03B8y\u2083",
          "\u03B8z\u2083"
        ] : [
          "ux\u2080",
          "uy\u2080",
          "uz\u2080",
          "\u03B8x\u2080",
          "\u03B8y\u2080",
          "\u03B8z\u2080",
          "ux\u2081",
          "uy\u2081",
          "uz\u2081",
          "\u03B8x\u2081",
          "\u03B8y\u2081",
          "\u03B8z\u2081",
          "ux\u2082",
          "uy\u2082",
          "uz\u2082",
          "\u03B8x\u2082",
          "\u03B8y\u2082",
          "\u03B8z\u2082"
        ], c) {
          const A = jo(ko(a[1], a[0])), N = ((_o2 = s.elasticities) == null ? void 0 : _o2.get(t)) ?? 0, W = ((_p = s.areas) == null ? void 0 : _p.get(t)) ?? 0, x = ((_q = s.momentsOfInertiaZ) == null ? void 0 : _q.get(t)) ?? 0, w = ((_r = s.momentsOfInertiaY) == null ? void 0 : _r.get(t)) ?? 0, v = ((_s2 = s.shearModuli) == null ? void 0 : _s2.get(t)) ?? 0, P = ((_t2 = s.torsionalConstants) == null ? void 0 : _t2.get(t)) ?? 0;
          r = Qa(N, W, x, w, v, P, A);
        }
        $ = el(a), y = tl(), f = ol(l), b = nl(c);
        const m = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', u = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', E = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        d = `<div class="matrix-label">k_local (${I.length}\xD7${I.length}) ${m}</div>${as(I, F)}`, g = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${L.length}\xD7${L.length}) ${u}</div>${as(L, F)}`, S = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${E}</div>${as(z, F)}`;
      } catch (m) {
        d = `<div style="color:red">Error: ${m.message}</div>`;
      }
      if (i == null ? void 0 : i.deformations) {
        const m = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ];
        l.map((u, E) => {
          var _a3;
          const A = ((_a3 = i.deformations) == null ? void 0 : _a3.get(u)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], N = m.map((W, x) => `<span class="prop-key">${W}</span>: <span class="${Math.abs(A[x]) > 1e-10 ? "result-val" : ""}">${Ee(A[x])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${u}:</strong> ${N}</div>`;
        }).join("");
      }
      if (p && c && (i == null ? void 0 : i.deformations) && I && L) {
        const m = (_u = p.normals) == null ? void 0 : _u.get(t), u = (_v = p.shearsY) == null ? void 0 : _v.get(t), E = (_w = p.shearsZ) == null ? void 0 : _w.get(t), A = (_x = p.torsions) == null ? void 0 : _x.get(t), N = (_y = p.bendingsY) == null ? void 0 : _y.get(t), W = (_z = p.bendingsZ) == null ? void 0 : _z.get(t), x = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], w = [];
        for (const te of l) {
          const Q = ((_A = i.deformations) == null ? void 0 : _A.get(te)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          w.push(...Q);
        }
        let v = [];
        try {
          v = uo(L, w);
        } catch {
          v = new Array(12).fill(0);
        }
        let P = [];
        try {
          P = uo(I, v);
        } catch {
          P = new Array(12).fill(0);
        }
        const K = (te, Q) => te.map((me, de) => `<span style="color:${Math.abs(me) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${Q[de % 6]}=${Ee(me)}</span>`).join(", "), le = [
          "N",
          "Vy",
          "Vz",
          "Mx",
          "My",
          "Mz",
          "N",
          "Vy",
          "Vz",
          "Mx",
          "My",
          "Mz"
        ].map((te, Q) => `${te}${Q < 6 ? "\u1D62" : "\u2C7C"}`);
        `${C("u", "global")}${l.map((te, Q) => `<span style="color:var(--fem-label)">nodo ${te}:</span> ${x.map((me, de) => `<span style="color:${Math.abs(w[Q * 6 + de]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${Ee(w[Q * 6 + de])}</span>`).join(", ")}`).join(" | ")}${C("u", "local")}${C("T")}${C("u", "global")}${C("u", "local")}${K(v, [
          ...x,
          ...x
        ])}${C("f", "local")}${C("k", "local")}${C("u", "local")}${C("f", "local")}${P.map((te, Q) => `<span style="color:${Math.abs(te) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${le[Q]}=${Ee(te)}</span>`).join(", ")}${C("P", "1")}${C("N", "i")}${Ee(P[0])}${C("P", "7")}${C("N", "j")}${Ee(P[6])}${C("P", "2")}${C("V", "y,i")}${Ee(P[1])}${C("P", "8")}${C("V", "y,j")}${Ee(P[7])}${C("P", "3")}${C("V", "z,i")}${Ee(P[2])}${C("P", "9")}${C("V", "z,j")}${Ee(P[8])}${C("P", "4")}${C("M", "x,i")}${Ee(P[3])}${C("P", "10")}${C("M", "x,j")}${Ee(P[9])}${C("P", "5")}${C("M", "y,i")}${Ee(P[4])}${C("P", "11")}${C("M", "y,j")}${Ee(P[10])}${C("P", "6")}${C("M", "z,i")}${Ee(P[5])}${C("P", "12")}${C("M", "z,j")}${Ee(P[11])}${m ? m.map((te) => Ee(te)).join(", ") : "\u2014"}${u ? u.map((te) => Ee(te)).join(", ") : "\u2014"}${E ? E.map((te) => Ee(te)).join(", ") : "\u2014"}${A ? A.map((te) => Ee(te)).join(", ") : "\u2014"}${N ? N.map((te) => Ee(te)).join(", ") : "\u2014"}${W ? W.map((te) => Ee(te)).join(", ") : "\u2014"}`;
      } else if (p && c) {
        const m = (_B = p.normals) == null ? void 0 : _B.get(t), u = (_C = p.shearsY) == null ? void 0 : _C.get(t), E = (_D = p.shearsZ) == null ? void 0 : _D.get(t), A = (_E = p.torsions) == null ? void 0 : _E.get(t), N = (_F = p.bendingsY) == null ? void 0 : _F.get(t), W = (_G = p.bendingsZ) == null ? void 0 : _G.get(t);
        `${m ? m.map((x) => Ee(x)).join(", ") : "\u2014"}${u ? u.map((x) => Ee(x)).join(", ") : "\u2014"}${E ? E.map((x) => Ee(x)).join(", ") : "\u2014"}${A ? A.map((x) => Ee(x)).join(", ") : "\u2014"}${N ? N.map((x) => Ee(x)).join(", ") : "\u2014"}${W ? W.map((x) => Ee(x)).join(", ") : "\u2014"}`;
      } else if (p && !c) {
        const m = (_H = p.bendingXX) == null ? void 0 : _H.get(t), u = (_I = p.bendingYY) == null ? void 0 : _I.get(t), E = (_J = p.bendingXY) == null ? void 0 : _J.get(t), A = (_K = p.membraneXX) == null ? void 0 : _K.get(t), N = (_L = p.membraneYY) == null ? void 0 : _L.get(t), W = (_M = p.membraneXY) == null ? void 0 : _M.get(t);
        `${m ? m.map((x) => Ee(x)).join(", ") : "\u2014"}${u ? u.map((x) => Ee(x)).join(", ") : "\u2014"}${E ? E.map((x) => Ee(x)).join(", ") : "\u2014"}${A ? A.map((x) => Ee(x)).join(", ") : "\u2014"}${N ? N.map((x) => Ee(x)).join(", ") : "\u2014"}${W ? W.map((x) => Ee(x)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, ao = jl(t, o, n, s, i, p), ao.id = "fem-inspect-panel", document.body.appendChild(ao), (_N = ao.querySelector("#er-close")) == null ? void 0 : _N.addEventListener("click", () => qo()), (_O = ao.querySelector("#rel-apply")) == null ? void 0 : _O.addEventListener("click", () => {
        const m = ao.querySelectorAll("input[data-rel]"), u = ao.querySelectorAll("input[data-spr]"), E = new Array(12).fill(false), A = new Array(12).fill(0);
        m.forEach((W) => {
          E[parseInt(W.dataset.rel)] = W.checked;
        }), u.forEach((W) => {
          const x = parseFloat(W.value);
          x > 0 && (A[parseInt(W.dataset.spr)] = x);
        }), s.momentReleases || (s.momentReleases = /* @__PURE__ */ new Map()), s.partialFixitySprings || (s.partialFixitySprings = /* @__PURE__ */ new Map()), E.some((W) => W) ? s.momentReleases.set(t, E) : s.momentReleases.delete(t), A.some((W) => W > 0) ? s.partialFixitySprings.set(t, A) : s.partialFixitySprings.delete(t), console.log(`Releases elem ${t}:`, E.map((W, x) => W ? relIds[x] : "").filter(Boolean).join(" ") || "none"), console.log(`Springs elem ${t}:`, A);
        const N = ao.querySelector("#rel-apply");
        N.textContent = "\u2713 Aplicado", N.style.background = "#4caf50", setTimeout(() => {
          N.textContent = "Aplicar", N.style.background = "var(--fem-heading)";
        }, 1500);
      });
      const k = c ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const m = jo(ko(a[1], a[0])), u = ((_a3 = s.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, E = ((_b2 = s.areas) == null ? void 0 : _b2.get(t)) ?? 0, A = ((_c2 = s.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, N = ((_d2 = s.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, W = ((_e3 = s.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, x = ((_f2 = s.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return sl(u, E, A, N, W, x, m);
      })() : void 0;
      ao.querySelectorAll("[data-full]").forEach((m) => {
        m.addEventListener("click", (u) => {
          u.stopPropagation();
          const E = m.dataset.full;
          if (E === "kLocal" && I) {
            const A = c ? Ks() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            is(`Elemento ${t} \u2014 Rigidez Local k_local`, A, ls(I, F), k);
          } else if (E === "T" && L) is(`Elemento ${t} \u2014 Transformaci\xF3n T`, $, ls(L, F));
          else if (E === "kGlobal" && z) {
            const A = c ? Ks() : "<em>Shell 18\xD718</em>";
            is(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, A, ls(z, F), k);
          }
        });
      });
    }
    function Qs() {
      const l = [], a = [];
      for (let y = 0; y <= 8; y++) {
        const f = y / 8, b = 30 * f, L = 12 * (1 - f) * (1 - f * 0.3) / 2, z = l.length;
        if (l.push([
          -L,
          -L,
          b
        ]), l.push([
          L,
          -L,
          b
        ]), l.push([
          L,
          L,
          b
        ]), l.push([
          -L,
          L,
          b
        ]), a.push([
          z,
          z + 1
        ]), a.push([
          z + 1,
          z + 2
        ]), a.push([
          z + 2,
          z + 3
        ]), a.push([
          z + 3,
          z
        ]), y > 0 && y < 8 && (a.push([
          z,
          z + 2
        ]), a.push([
          z + 1,
          z + 3
        ])), y > 0) {
          const F = z - 4;
          for (let k = 0; k < 4; k++) a.push([
            F + k,
            z + k
          ]);
          a.push([
            F,
            z + 1
          ]), a.push([
            F + 1,
            z + 2
          ]), a.push([
            F + 2,
            z + 3
          ]), a.push([
            F + 3,
            z
          ]);
        }
      }
      const c = /* @__PURE__ */ new Map();
      for (let y = 0; y < 4; y++) c.set(y, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const s = l.length - 4, i = /* @__PURE__ */ new Map();
      for (let y = 0; y < 4; y++) i.set(s + y, [
        0,
        0,
        -50,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: i
      });
      const p = 2e8, r = 77e6, d = 5e-3, g = 2e-6, S = 1e-6, $ = {
        elasticities: new Map(a.map((y, f) => [
          f,
          p
        ])),
        shearModuli: new Map(a.map((y, f) => [
          f,
          r
        ])),
        areas: new Map(a.map((y, f) => [
          f,
          d
        ])),
        momentsOfInertiaZ: new Map(a.map((y, f) => [
          f,
          g
        ])),
        momentsOfInertiaY: new Map(a.map((y, f) => [
          f,
          g
        ])),
        torsionalConstants: new Map(a.map((y, f) => [
          f,
          S
        ]))
      };
      e.elementInputs && (e.elementInputs.val = $);
      try {
        const y = Pt(l, a, {
          supports: c,
          loads: i
        }, $);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Eiffel deform:", y.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Torre Eiffel: ${l.length} nodos, ${a.length} elementos, H=30m`);
    }
    function ea() {
      const l = [], a = [];
      for (let $ = 0; $ <= 20; $++) {
        const y = $ / 20, f = 20 * y, b = 20 * (1 - Math.pow(2 * y - 1, 2)), I = 2;
        l.push([
          f,
          -2 / 2,
          b
        ]), l.push([
          f,
          I / 2,
          b
        ]);
      }
      for (let $ = 0; $ < 20; $++) a.push([
        $ * 2,
        ($ + 1) * 2
      ]), a.push([
        $ * 2 + 1,
        ($ + 1) * 2 + 1
      ]), a.push([
        $ * 2,
        $ * 2 + 1
      ]), a.push([
        $ * 2,
        ($ + 1) * 2 + 1
      ]), a.push([
        $ * 2 + 1,
        ($ + 1) * 2
      ]);
      a.push([
        20 * 2,
        20 * 2 + 1
      ]);
      const c = /* @__PURE__ */ new Map();
      c.set(0, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), c.set(1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), c.set(20 * 2, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), c.set(20 * 2 + 1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const s = /* @__PURE__ */ new Map();
      for (let $ = 0; $ <= 20; $++) s.set($ * 2, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]), s.set($ * 2 + 1, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: s
      });
      const i = 2e8, p = 77e6, r = 0.01, d = 5e-6, g = 2e-6, S = {
        elasticities: new Map(a.map(($, y) => [
          y,
          i
        ])),
        shearModuli: new Map(a.map(($, y) => [
          y,
          p
        ])),
        areas: new Map(a.map(($, y) => [
          y,
          r
        ])),
        momentsOfInertiaZ: new Map(a.map(($, y) => [
          y,
          d
        ])),
        momentsOfInertiaY: new Map(a.map(($, y) => [
          y,
          d
        ])),
        torsionalConstants: new Map(a.map(($, y) => [
          y,
          g
        ]))
      };
      e.elementInputs && (e.elementInputs.val = S);
      try {
        const $ = Pt(l, a, {
          supports: c,
          loads: s
        }, S);
        $ && e.deformOutputs && (e.deformOutputs.val = $);
      } catch ($) {
        console.warn("Arco:", $.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Arco Gateway: ${l.length} nodos, ${a.length} elem, span=20m, H=20m`);
    }
    function ta() {
      const c = [], s = [];
      for (let f = 0; f <= 16; f++) {
        const b = 60 * f / 16;
        c.push([
          b,
          -6 / 2,
          8
        ]), c.push([
          b,
          6 / 2,
          8
        ]);
      }
      const i = c.length;
      for (let f = 0; f < 16; f++) s.push([
        f * 2,
        (f + 1) * 2
      ]), s.push([
        f * 2 + 1,
        (f + 1) * 2 + 1
      ]), s.push([
        f * 2,
        f * 2 + 1
      ]);
      s.push([
        16 * 2,
        16 * 2 + 1
      ]);
      const p = [
        Math.round(16 / 3),
        Math.round(2 * 16 / 3)
      ], r = [];
      for (const f of p) {
        const b = 60 * f / 16, I = c.length;
        c.push([
          b,
          -6 / 2,
          0
        ]);
        const L = c.length;
        c.push([
          b,
          6 / 2,
          0
        ]);
        const z = c.length;
        c.push([
          b,
          -6 / 2,
          28
        ]);
        const F = c.length;
        c.push([
          b,
          6 / 2,
          28
        ]), r.push(z, F), s.push([
          I,
          f * 2
        ]), s.push([
          f * 2,
          z
        ]), s.push([
          L,
          f * 2 + 1
        ]), s.push([
          f * 2 + 1,
          F
        ]), s.push([
          z,
          F
        ]);
      }
      for (const f of r) {
        const b = c[f][0];
        for (let I = 0; I <= 16; I++) {
          const L = 60 * I / 16;
          if (Math.abs(L - b) > 60 * 0.05 && Math.abs(L - b) < 60 * 0.45) {
            const z = c[f][1] < 0 ? I * 2 : I * 2 + 1;
            I % 2 === 0 && s.push([
              f,
              z
            ]);
          }
        }
      }
      const d = /* @__PURE__ */ new Map();
      d.set(0, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), d.set(1, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), d.set(16 * 2, [
        false,
        true,
        true,
        false,
        false,
        false
      ]), d.set(16 * 2 + 1, [
        false,
        true,
        true,
        false,
        false,
        false
      ]);
      for (let f = i; f < i + p.length * 4; f += 4) d.set(f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), d.set(f + 1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const g = /* @__PURE__ */ new Map();
      for (let f = 0; f <= 16; f++) g.set(f * 2, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]), g.set(f * 2 + 1, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]);
      e.nodes.val = c, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: g
      });
      const S = 2e8, $ = 77e6, y = {
        elasticities: new Map(s.map((f, b) => [
          b,
          S
        ])),
        shearModuli: new Map(s.map((f, b) => [
          b,
          $
        ])),
        areas: new Map(s.map((f, b) => [
          b,
          b < 16 * 3 + 1 ? 0.02 : 1e-3
        ])),
        momentsOfInertiaZ: new Map(s.map((f, b) => [
          b,
          5e-5
        ])),
        momentsOfInertiaY: new Map(s.map((f, b) => [
          b,
          2e-5
        ])),
        torsionalConstants: new Map(s.map((f, b) => [
          b,
          1e-5
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const f = Pt(c, s, {
          supports: d,
          loads: g
        }, y);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Puente:", f.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Puente atirantado: ${c.length} nodos, ${s.length} elem, span=60m`);
    }
    function oa() {
      const c = [], s = [];
      for (let b = 0; b <= 12; b++) {
        const I = b * 3.5, L = b * 5 * Math.PI / 180;
        for (let z = 0; z < 6; z++) {
          const F = L + 2 * Math.PI * z / 6, k = 5 * Math.cos(F), m = 5 * Math.sin(F);
          c.push([
            k,
            m,
            I
          ]);
        }
      }
      for (let b = 0; b <= 12; b++) {
        const I = b * 6;
        for (let L = 0; L < 6; L++) s.push([
          I + L,
          I + (L + 1) % 6
        ]);
        if (b < 12) {
          const L = (b + 1) * 6;
          for (let z = 0; z < 6; z++) s.push([
            I + z,
            L + z
          ]), s.push([
            I + z,
            L + (z + 1) % 6
          ]);
        }
      }
      for (let b = 0; b <= 12; b++) {
        const I = c.length;
        c.push([
          0,
          0,
          b * 3.5
        ]);
        const L = b * 6;
        for (let z = 0; z < 6; z++) s.push([
          I,
          L + z
        ]);
      }
      const i = 13 * 6;
      for (let b = 0; b < 12; b++) s.push([
        i + b,
        i + b + 1
      ]);
      const p = /* @__PURE__ */ new Map();
      for (let b = 0; b < 6; b++) p.set(b, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      p.set(i, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const r = /* @__PURE__ */ new Map();
      for (let b = 1; b <= 12; b++) {
        const I = 10 * b / 12, L = b * 6;
        for (let z = 0; z < 6; z++) r.set(L + z, [
          I,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = c, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: p,
        loads: r
      });
      const d = 2e8, g = 77e6, S = 8e-3, $ = 1e-5, y = 5e-6, f = {
        elasticities: new Map(s.map((b, I) => [
          I,
          d
        ])),
        shearModuli: new Map(s.map((b, I) => [
          I,
          g
        ])),
        areas: new Map(s.map((b, I) => [
          I,
          S
        ])),
        momentsOfInertiaZ: new Map(s.map((b, I) => [
          I,
          $
        ])),
        momentsOfInertiaY: new Map(s.map((b, I) => [
          I,
          $
        ])),
        torsionalConstants: new Map(s.map((b, I) => [
          I,
          y
        ]))
      };
      e.elementInputs && (e.elementInputs.val = f);
      try {
        const b = Pt(c, s, {
          supports: p,
          loads: r
        }, f);
        b && e.deformOutputs && (e.deformOutputs.val = b);
      } catch (b) {
        console.warn("Twisted:", b.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Torre Twist: ${c.length} nodos, ${s.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function na() {
      const a = [], c = [];
      for (let f = 0; f <= 20; f++) {
        const b = f / 20, I = f * 3;
        let L = 8 * (1 - b * 0.7);
        b > 0.4 && (L *= 0.85), b > 0.7 && (L *= 0.7);
        const z = a.length;
        a.push([
          0,
          0,
          I
        ]);
        for (let F = 0; F < 3; F++) {
          const k = F * 2 * Math.PI / 3 - Math.PI / 2, m = L * Math.cos(k), u = L * Math.sin(k), E = a.length;
          a.push([
            m,
            u,
            I
          ]), c.push([
            z,
            E
          ]);
          const A = a.length;
          a.push([
            m * 0.5,
            u * 0.5,
            I
          ]), c.push([
            z,
            A
          ]), c.push([
            A,
            E
          ]);
        }
        for (let F = 0; F < 3; F++) {
          const k = z + 1 + F * 2, m = z + 1 + (F + 1) % 3 * 2;
          c.push([
            k,
            m
          ]);
        }
        if (f < 20) {
          const k = z + 7;
          c.push([
            z,
            k
          ]);
          for (let m = 0; m < 3; m++) c.push([
            z + 1 + m * 2,
            k + 1 + m * 2
          ]), c.push([
            z + 2 + m * 2,
            k + 2 + m * 2
          ]), c.push([
            z + 1 + m * 2,
            k + 2 + m * 2
          ]);
        }
      }
      const s = /* @__PURE__ */ new Map(), i = 1 + 3 * 2;
      for (let f = 0; f < i; f++) s.set(f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const p = /* @__PURE__ */ new Map();
      for (let f = 1; f <= 20; f++) {
        const b = f * i, I = 5 * f / 20;
        p.set(b, [
          I,
          0,
          -10,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = a, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: p
      });
      const r = 35e6, d = 14e6, g = 0.02, S = 5e-5, $ = 2e-5, y = {
        elasticities: new Map(c.map((f, b) => [
          b,
          r
        ])),
        shearModuli: new Map(c.map((f, b) => [
          b,
          d
        ])),
        areas: new Map(c.map((f, b) => [
          b,
          g
        ])),
        momentsOfInertiaZ: new Map(c.map((f, b) => [
          b,
          S
        ])),
        momentsOfInertiaY: new Map(c.map((f, b) => [
          b,
          S
        ])),
        torsionalConstants: new Map(c.map((f, b) => [
          b,
          $
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const f = Pt(a, c, {
          supports: s,
          loads: p
        }, y);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Burj:", f.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Burj Khalifa: ${a.length} nodos, ${c.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function sa() {
      const t = [], o = [];
      for (let g = 0; g < 3; g++) {
        const S = g * 12, $ = 15 - g * 2, y = 20 - g * 3, f = 8 - g, b = t.length;
        for (let L = 0; L <= 4; L++) {
          const z = L / 4, F = -f / 2 + f * z, k = y * (1 - z * z * 0.3);
          for (let m = 0; m <= 12; m++) {
            const u = m / 12, E = S + k * u, A = $ * Math.sin(Math.PI * u) * (1 - z * z * 0.5), N = F;
            t.push([
              E,
              N,
              A
            ]);
          }
        }
        const I = 13;
        for (let L = 0; L < 4; L++) for (let z = 0; z < 12; z++) {
          const F = b + L * I + z, k = b + L * I + z + 1, m = b + (L + 1) * I + z + 1, u = b + (L + 1) * I + z;
          o.push([
            F,
            k,
            m,
            u
          ]);
        }
      }
      const a = /* @__PURE__ */ new Map();
      for (let g = 0; g < t.length; g++) t[g][2] < 0.5 && a.set(g, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const c = /* @__PURE__ */ new Map();
      for (let g = 0; g < t.length; g++) t[g][2] > 2 && c.set(g, [
        0,
        0,
        -5,
        0,
        0,
        0
      ]);
      e.nodes.val = t, e.elements.val = o, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: c
      });
      const s = 35e6, i = 0.2, p = 0.15, r = s / (2 * (1 + i)), d = {
        elasticities: new Map(o.map((g, S) => [
          S,
          s
        ])),
        poissonsRatios: new Map(o.map((g, S) => [
          S,
          i
        ])),
        thicknesses: new Map(o.map((g, S) => [
          S,
          p
        ])),
        shearModuli: new Map(o.map((g, S) => [
          S,
          r
        ]))
      };
      e.elementInputs && (e.elementInputs.val = d);
      try {
        const g = Pt(t, o, {
          supports: a,
          loads: c
        }, d);
        g && e.deformOutputs && (e.deformOutputs.val = g);
      } catch (g) {
        console.warn("Opera:", g.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function aa() {
      const l = [], a = [];
      for (let y = 0; y <= 15; y++) {
        const f = y / 15, b = y * 3.5, I = 5 * (0.6 + 0.4 * Math.sin(Math.PI * f));
        if (f > 0.9) {
          const L = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (f - 0.9) * 8);
          for (let z = 0; z < 12; z++) {
            const F = 2 * Math.PI * z / 12;
            l.push([
              Math.max(L, 1) * Math.cos(F),
              Math.max(L, 1) * Math.sin(F),
              b
            ]);
          }
        } else for (let L = 0; L < 12; L++) {
          const z = 2 * Math.PI * L / 12;
          l.push([
            I * Math.cos(z),
            I * Math.sin(z),
            b
          ]);
        }
      }
      for (let y = 0; y < 15; y++) {
        const f = y * 12, b = (y + 1) * 12;
        for (let L = 0; L < 12; L++) a.push([
          f + L,
          f + (L + 1) % 12
        ]);
        const I = y % 2 === 0 ? 1 : -1;
        for (let L = 0; L < 12; L++) {
          const z = (L + I + 12) % 12;
          a.push([
            f + L,
            b + z
          ]), a.push([
            f + L,
            b + L
          ]);
        }
      }
      const c = 15 * 12;
      for (let y = 0; y < 12; y++) a.push([
        c + y,
        c + (y + 1) % 12
      ]);
      const s = /* @__PURE__ */ new Map();
      for (let y = 0; y < 12; y++) s.set(y, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const i = /* @__PURE__ */ new Map();
      for (let y = 1; y <= 15; y++) {
        const f = y * 12, b = 3 * y / 15;
        for (let I = 0; I < 12; I += 3) i.set(f + I, [
          b,
          0,
          -8,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = l, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: i
      });
      const p = 2e8, r = 77e6, d = 6e-3, g = 8e-6, S = 4e-6, $ = {
        elasticities: new Map(a.map((y, f) => [
          f,
          p
        ])),
        shearModuli: new Map(a.map((y, f) => [
          f,
          r
        ])),
        areas: new Map(a.map((y, f) => [
          f,
          d
        ])),
        momentsOfInertiaZ: new Map(a.map((y, f) => [
          f,
          g
        ])),
        momentsOfInertiaY: new Map(a.map((y, f) => [
          f,
          g
        ])),
        torsionalConstants: new Map(a.map((y, f) => [
          f,
          S
        ]))
      };
      e.elementInputs && (e.elementInputs.val = $);
      try {
        const y = Pt(l, a, {
          supports: s,
          loads: i
        }, $);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Diagrid:", y.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Diagrid Tower: ${l.length} nodos, ${a.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function rs() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = M, o = ((_a2 = G.W) == null ? void 0 : _a2.val) ?? 5, n = ((_b = G.H) == null ? void 0 : _b.val) ?? 3, l = ((_c = G.t) == null ? void 0 : _c.val) ?? 0.2, a = Math.round(((_d = G.nx) == null ? void 0 : _d.val) ?? 8), c = Math.round(((_e2 = G.ny) == null ? void 0 : _e2.val) ?? 6), s = ((_f = G.E) == null ? void 0 : _f.val) ?? 25e6, i = ((_g = G.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = G.P) == null ? void 0 : _h.val) ?? 100, r = s / (2 * (1 + i)), d = o / a, g = n / c, S = [], $ = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      for (let k = 0; k <= c; k++) for (let m = 0; m <= a; m++) S.push([
        m * d,
        0,
        k * g
      ]);
      const b = a + 1;
      for (let k = 0; k < c; k++) for (let m = 0; m < a; m++) $.push([
        k * b + m,
        k * b + m + 1,
        (k + 1) * b + m + 1,
        (k + 1) * b + m
      ]);
      for (let k = 0; k <= a; k++) y.set(k, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const I = [];
      for (let k = 0; k <= a; k++) I.push(c * b + k);
      const L = p / I.length;
      for (const k of I) f.set(k, [
        L,
        0,
        0,
        0,
        0,
        0
      ]);
      e.nodes.val = S, e.elements.val = $, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: f
      });
      const z = {
        elasticities: new Map($.map((k, m) => [
          m,
          s
        ])),
        poissonsRatios: new Map($.map((k, m) => [
          m,
          i
        ])),
        thicknesses: new Map($.map((k, m) => [
          m,
          l
        ])),
        shearModuli: new Map($.map((k, m) => [
          m,
          r
        ])),
        densities: new Map($.map((k, m) => [
          m,
          t.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = z);
      try {
        const k = Pt(S, $, {
          supports: y,
          loads: f
        }, z);
        if (k && e.deformOutputs) {
          e.deformOutputs.val = k;
          const m = Eo(S, $, z, k);
          e.analyzeOutputs && (e.analyzeOutputs.val = m);
          const u = c * b + Math.floor(a / 2), E = k.deformations.get(u), A = E ? E[0] : 0;
          console.log(`Muro Q4: Ux=${A.toExponential(4)} m | OS:4.602e-5 | SAP:4.629e-5 | ETABS:4.582e-5`);
        }
      } catch (k) {
        console.warn("MuroQ4:", k.message);
      }
      const F = tt();
      F && (F.settings.shellResults.val = "displacementX"), setTimeout(() => It(), 50), nt();
    }
    function la() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = M, o = ((_a2 = G.L) == null ? void 0 : _a2.val) ?? 6, n = ((_b = G.h) == null ? void 0 : _b.val) ?? 0.5, l = ((_c = G.t) == null ? void 0 : _c.val) ?? 0.2, a = Math.round(((_d = G.nx) == null ? void 0 : _d.val) ?? 12), c = Math.round(((_e2 = G.ny) == null ? void 0 : _e2.val) ?? 4), s = ((_f = G.E) == null ? void 0 : _f.val) ?? 25e6, i = ((_g = G.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = G.P) == null ? void 0 : _h.val) ?? 50, r = s / (2 * (1 + i)), d = o / a, g = n / c, S = [], $ = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      for (let F = 0; F <= c; F++) for (let k = 0; k <= a; k++) S.push([
        k * d,
        F * g,
        0
      ]);
      const b = a + 1;
      for (let F = 0; F < c; F++) for (let k = 0; k < a; k++) $.push([
        F * b + k,
        F * b + k + 1,
        (F + 1) * b + k + 1,
        (F + 1) * b + k
      ]);
      for (let F = 0; F <= c; F++) y.set(F * b, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const I = Math.floor(c / 2) * b + a;
      f.set(I, [
        0,
        0,
        -p,
        0,
        0,
        0
      ]), e.nodes.val = S, e.elements.val = $, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: f
      });
      const L = {
        elasticities: new Map($.map((F, k) => [
          k,
          s
        ])),
        poissonsRatios: new Map($.map((F, k) => [
          k,
          i
        ])),
        thicknesses: new Map($.map((F, k) => [
          k,
          l
        ])),
        shearModuli: new Map($.map((F, k) => [
          k,
          r
        ])),
        densities: new Map($.map((F, k) => [
          k,
          t.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = L);
      try {
        const F = Pt(S, $, {
          supports: y,
          loads: f
        }, L);
        if (F && e.deformOutputs) {
          e.deformOutputs.val = F;
          const k = Eo(S, $, L, F);
          e.analyzeOutputs && (e.analyzeOutputs.val = k);
          const m = F.deformations.get(I), u = m ? m[2] : 0, E = l * n * n * n / 12, A = p * o * o * o / (3 * s * E);
          console.log(`Viga Q4: Uz_tip=${u.toExponential(4)} | Analitico=${A.toExponential(4)} | ratio=${(Math.abs(u) / A).toFixed(4)}`);
        }
      } catch (F) {
        console.warn("VigaQ4:", F.message);
      }
      const z = tt();
      z && (z.settings.shellResults.val = "displacementZ"), setTimeout(() => It(), 50), nt();
    }
    function ia() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = M, o = ((_a2 = G.Lx) == null ? void 0 : _a2.val) ?? 4, n = ((_b = G.Lz) == null ? void 0 : _b.val) ?? 2, l = ((_c = G.t) == null ? void 0 : _c.val) ?? 0.15, a = Math.round(((_d = G.nx) == null ? void 0 : _d.val) ?? 8), c = Math.round(((_e2 = G.nz) == null ? void 0 : _e2.val) ?? 4), s = ((_f = G.E) == null ? void 0 : _f.val) ?? 25e6, i = ((_g = G.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = G.P) == null ? void 0 : _h.val) ?? 20, r = s / (2 * (1 + i)), d = o / a, g = n / c, S = [], $ = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      for (let k = 0; k <= c; k++) for (let m = 0; m <= a; m++) S.push([
        m * d,
        0,
        k * g
      ]);
      const b = a + 1;
      for (let k = 0; k < c; k++) for (let m = 0; m < a; m++) $.push([
        k * b + m,
        k * b + m + 1,
        (k + 1) * b + m + 1,
        (k + 1) * b + m
      ]);
      for (let k = 0; k <= c; k++) y.set(k * b, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const I = [];
      for (let k = 0; k <= c; k++) I.push(k * b + a);
      const L = p / I.length;
      for (const k of I) f.set(k, [
        0,
        0,
        -L,
        0,
        0,
        0
      ]);
      e.nodes.val = S, e.elements.val = $, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: f
      });
      const z = {
        elasticities: new Map($.map((k, m) => [
          m,
          s
        ])),
        poissonsRatios: new Map($.map((k, m) => [
          m,
          i
        ])),
        thicknesses: new Map($.map((k, m) => [
          m,
          l
        ])),
        shearModuli: new Map($.map((k, m) => [
          m,
          r
        ])),
        densities: new Map($.map((k, m) => [
          m,
          t.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = z);
      try {
        const k = Pt(S, $, {
          supports: y,
          loads: f
        }, z);
        if (k && e.deformOutputs) {
          e.deformOutputs.val = k;
          const m = Eo(S, $, z, k);
          e.analyzeOutputs && (e.analyzeOutputs.val = m);
          const u = (c / 2 | 0) * b + a, E = k.deformations.get(u), A = E ? E[2] : 0;
          console.log(`Placa XZ Q4: Uz_tip=${A.toExponential(4)} m`);
        }
      } catch (k) {
        console.warn("PlacaXZ:", k.message);
      }
      const F = tt();
      F && (F.settings.shellResults.val = "displacementZ"), setTimeout(() => It(), 50), nt();
    }
    function ra() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2;
      const t = M, o = ((_a2 = G.Lx) == null ? void 0 : _a2.val) ?? 6, n = ((_b = G.Ly) == null ? void 0 : _b.val) ?? 8, l = ((_c = G.H1) == null ? void 0 : _c.val) ?? 3, a = ((_d = G.H2) == null ? void 0 : _d.val) ?? 4.5, c = Math.round(((_e2 = G.nCol) == null ? void 0 : _e2.val) ?? 4), s = Math.round(((_f = G.nCorr) == null ? void 0 : _f.val) ?? 8), i = ((_g = G.E) == null ? void 0 : _g.val) ?? t.E, p = ((_h = G.t) == null ? void 0 : _h.val) ?? 5e-4, r = ((_i = G.q) == null ? void 0 : _i.val) ?? 1, d = 0.3, g = i / (2 * (1 + d)), S = ((_j = G.colD) == null ? void 0 : _j.val) ?? 0.16, $ = ((_k = G.colBf) == null ? void 0 : _k.val) ?? 0.16, y = ((_l2 = G.colTf) == null ? void 0 : _l2.val) ?? 0.013, f = ((_m = G.colTw) == null ? void 0 : _m.val) ?? 8e-3, b = ((_n2 = G.vigD) == null ? void 0 : _n2.val) ?? 0.2, I = ((_o2 = G.vigBf) == null ? void 0 : _o2.val) ?? 0.1, L = ((_p = G.vigTf) == null ? void 0 : _p.val) ?? 85e-4, z = ((_q = G.vigTw) == null ? void 0 : _q.val) ?? 56e-4, F = ((_r = G.corrB) == null ? void 0 : _r.val) ?? 0.06, k = ((_s2 = G.corrT) == null ? void 0 : _s2.val) ?? 4e-3, m = (Se, We, Et, oo) => {
        const So = Se - 2 * Et, Zo = 2 * We * Et + So * oo, wn = (We * Se ** 3 - (We - oo) * So ** 3) / 12, ul = (2 * Et * We ** 3 + So * oo ** 3) / 12, ml = (2 * We * Et ** 3 + So * oo ** 3) / 3;
        return {
          A: Zo,
          Iy: wn,
          Iz: ul,
          J: ml
        };
      }, u = m(S, $, y, f), E = m(b, I, L, z), A = F - 2 * k, N = F * F - A * A, W = (F ** 4 - A ** 4) / 12, x = 2 * k * (F - k) ** 2 * (F - k) / 2, w = u.A, v = u.Iz, P = u.Iy, K = u.J, U = E.A, le = E.Iz, te = E.Iy, Q = E.J, me = N, de = W, ke = W, Re = x, O = 3, ce = [], oe = [], pe = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), ge = [];
      for (let Se = 0; Se < O; Se++) ge.push(Se * o / (O - 1));
      const Ie = [];
      for (let Se = 0; Se < c; Se++) Ie.push(Se * n / (c - 1));
      const se = [];
      for (let Se = 0; Se < s; Se++) se.push(Se * n / (s - 1));
      for (const Se of Ie) se.some((We) => Math.abs(We - Se) < 1e-6) || se.push(Se);
      const we = se.sort((Se, We) => Se - We), De = we.length, lt = (Se) => l + (a - l) * Se / n, et = [];
      for (let Se = 0; Se < O; Se++) {
        et[Se] = [];
        for (let We = 0; We < De; We++) et[Se][We] = ce.length, ce.push([
          ge[Se],
          we[We],
          lt(we[We])
        ]);
      }
      const vt = [];
      for (let Se = 0; Se < O; Se++) {
        vt[Se] = [];
        for (let We = 0; We < c; We++) vt[Se][We] = ce.length, ce.push([
          ge[Se],
          Ie[We],
          0
        ]);
      }
      const Bt = [];
      for (let Se = 0; Se < c; Se++) Bt.push(we.findIndex((We) => Math.abs(We - Ie[Se]) < 1e-6));
      const yt = [];
      let Ct = 0;
      for (let Se = 0; Se < O; Se++) for (let We = 0; We < c; We++) oe.push([
        vt[Se][We],
        et[Se][Bt[We]]
      ]), yt.push("col"), Ct++;
      for (let Se = 0; Se < O; Se++) for (let We = 0; We < De - 1; We++) oe.push([
        et[Se][We],
        et[Se][We + 1]
      ]), yt.push("vig"), Ct++;
      oe.length;
      for (let Se = 0; Se < De; Se++) for (let We = 0; We < O - 1; We++) oe.push([
        et[We][Se],
        et[We + 1][Se]
      ]), yt.push("corr"), Ct++;
      oe.length;
      for (let Se = 0; Se < O - 1; Se++) for (let We = 0; We < De - 1; We++) oe.push([
        et[Se][We],
        et[Se + 1][We],
        et[Se + 1][We + 1],
        et[Se][We + 1]
      ]), yt.push("shell");
      for (let Se = 0; Se < O; Se++) for (let We = 0; We < c; We++) pe.set(vt[Se][We], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let Se = 0; Se < O; Se++) for (let We = 0; We < De; We++) {
        let Et;
        Se === 0 ? Et = (ge[1] - ge[0]) / 2 : Se === O - 1 ? Et = (ge[O - 1] - ge[O - 2]) / 2 : Et = (ge[Se + 1] - ge[Se - 1]) / 2;
        let oo;
        We === 0 ? oo = (we[1] - we[0]) / 2 : We === De - 1 ? oo = (we[De - 1] - we[De - 2]) / 2 : oo = (we[We + 1] - we[We - 1]) / 2;
        const So = -r * Et * oo, Zo = et[Se][We], wn = ee.get(Zo) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        wn[2] += So, ee.set(Zo, wn);
      }
      e.nodes.val = ce, e.elements.val = oe, e.nodeInputs && (e.nodeInputs.val = {
        supports: pe,
        loads: ee
      });
      const go = /* @__PURE__ */ new Map(), Kt = /* @__PURE__ */ new Map(), jt = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), Ut = /* @__PURE__ */ new Map(), Rt = /* @__PURE__ */ new Map(), fo = /* @__PURE__ */ new Map(), ro = /* @__PURE__ */ new Map(), wo = /* @__PURE__ */ new Map(), Mn = t.rho;
      for (let Se = 0; Se < oe.length; Se++) {
        go.set(Se, i), $t.set(Se, g), Rt.set(Se, Mn);
        const We = yt[Se];
        if (We === "col") {
          Kt.set(Se, w), jt.set(Se, v), st.set(Se, P), Ut.set(Se, K);
          const Et = new Array(12).fill(false);
          Et[10] = true, Et[11] = true, wo.set(Se, Et);
        } else if (We === "vig") Kt.set(Se, U), jt.set(Se, le), st.set(Se, te), Ut.set(Se, Q);
        else if (We === "corr") {
          Kt.set(Se, me), jt.set(Se, de), st.set(Se, ke), Ut.set(Se, Re);
          const Et = new Array(12).fill(false);
          Et[4] = true, Et[5] = true, Et[10] = true, Et[11] = true, wo.set(Se, Et);
        } else We === "shell" && (fo.set(Se, d), ro.set(Se, p));
      }
      const Ko = {
        elasticities: go,
        areas: Kt,
        momentsOfInertiaZ: jt,
        momentsOfInertiaY: st,
        shearModuli: $t,
        torsionalConstants: Ut,
        densities: Rt,
        poissonsRatios: fo,
        thicknesses: ro,
        momentReleases: wo
      };
      e.elementInputs && (e.elementInputs.val = Ko);
      try {
        const Se = Pt(ce, oe, {
          supports: pe,
          loads: ee
        }, Ko);
        if (Se && e.deformOutputs) {
          e.deformOutputs.val = Se;
          const We = Eo(ce, oe, Ko, Se);
          e.analyzeOutputs && (e.analyzeOutputs.val = We);
          let Et = 0, oo = 0;
          Se.deformations.forEach((So, Zo) => {
            Math.abs(So[2]) > Math.abs(Et) && (Et = So[2], oo = Zo);
          }), console.log(`P\xE9rgola: Uz_max=${Et.toExponential(4)} m en nodo ${oo} | ${Ct} frames + ${s - 1} shells`);
        }
      } catch (Se) {
        console.warn("Pergola:", Se.message);
      }
      const un = tt();
      un && (un.settings.shellResults.val = "displacementZ"), setTimeout(() => It(), 50), nt();
    }
    function al() {
      var _a2, _b;
      (_a2 = document.getElementById("fem-log-panel")) == null ? void 0 : _a2.remove();
      const t = window.__femLog || [
        "<i>No hay log. Ejecuta un analisis primero.</i>"
      ], o = document.createElement("div");
      o.id = "fem-log-panel", o.style.cssText = "position:fixed;top:60px;right:10px;width:360px;max-height:500px;overflow-y:auto;background:var(--cad-bg);color:var(--cad-text);border:1px solid var(--cad-border);border-radius:8px;padding:10px;z-index:10001;font-family:'Segoe UI',system-ui,sans-serif;font-size:12px;line-height:1.6;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-size:14px;font-weight:bold;color:var(--cad-heading)">\u{1F4CB} Solver Log</span>
        <button id="fem-log-close" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);border-radius:3px;padding:2px 8px;cursor:pointer;font-size:11px;">\u2715</button>
      </div>
      <div style="font-family:'Segoe UI',system-ui,sans-serif;font-size:12px;line-height:1.7;">
        ${t.join("<br>")}
      </div>
    `, document.body.appendChild(o), (_b = o.querySelector("#fem-log-close")) == null ? void 0 : _b.addEventListener("click", () => o.remove());
    }
    function ll() {
      var _a2, _b, _c;
      (_a2 = document.getElementById("pushover-panel")) == null ? void 0 : _a2.remove();
      const t = document.createElement("div");
      t.id = "pushover-panel", t.style.cssText = "position:fixed;top:60px;right:10px;width:420px;background:var(--cad-bg);color:var(--cad-text);border:1px solid var(--cad-border);border-radius:8px;padding:12px;z-index:10000;font-family:monospace;font-size:12px;box-shadow:0 4px 20px var(--cad-shadow);", t.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <b style="color:var(--cad-heading);font-size:14px;">Pushover Ciclico</b>
        <button id="pushover-close" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);border-radius:3px;padding:2px 8px;cursor:pointer;">X</button>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:8px;">
        <label>Col b (m): <input id="po-colB" type="number" value="0.30" step="0.05" min="0.15" max="0.60" style="width:60px;background:var(--cad-input-bg);color:var(--cad-input-text);border:1px solid var(--cad-input-border);"></label>
        <label>Col h (m): <input id="po-colH" type="number" value="0.30" step="0.05" min="0.15" max="0.60" style="width:60px;background:var(--cad-input-bg);color:var(--cad-input-text);border:1px solid var(--cad-input-border);"></label>
        <label>f'c (MPa): <input id="po-fc" type="number" value="30" step="5" min="15" max="60" style="width:60px;background:var(--cad-input-bg);color:var(--cad-input-text);border:1px solid var(--cad-input-border);"></label>
        <label>Fy (MPa): <input id="po-fy" type="number" value="420" step="10" min="250" max="700" style="width:60px;background:var(--cad-input-bg);color:var(--cad-input-text);border:1px solid var(--cad-input-border);"></label>
        <label>H col (m): <input id="po-H" type="number" value="1.30" step="0.1" min="0.5" max="4" style="width:60px;background:var(--cad-input-bg);color:var(--cad-input-text);border:1px solid var(--cad-input-border);"></label>
        <label>L viga (m): <input id="po-L" type="number" value="2.00" step="0.1" min="1" max="6" style="width:60px;background:var(--cad-input-bg);color:var(--cad-input-text);border:1px solid var(--cad-input-border);"></label>
        <label>As bar (cm2): <input id="po-As" type="number" value="2.0" step="0.5" min="0.5" max="8" style="width:60px;background:var(--cad-input-bg);color:var(--cad-input-text);border:1px solid var(--cad-input-border);"></label>
        <label>N barras: <input id="po-nbar" type="number" value="3" step="1" min="2" max="8" style="width:60px;background:var(--cad-input-bg);color:var(--cad-input-text);border:1px solid var(--cad-input-border);"></label>
        <label>Drift max (%): <input id="po-drift" type="number" value="5" step="0.5" min="1" max="10" style="width:60px;background:var(--cad-input-bg);color:var(--cad-input-text);border:1px solid var(--cad-input-border);"></label>
        <label>N ciclos: <input id="po-ncycles" type="number" value="3" step="1" min="1" max="6" style="width:60px;background:var(--cad-input-bg);color:var(--cad-input-text);border:1px solid var(--cad-input-border);"></label>
      </div>
      <button id="pushover-run" style="width:100%;padding:6px;background:var(--cad-heading);color:#000;border:none;border-radius:4px;cursor:pointer;font-weight:bold;font-size:13px;">RUN PUSHOVER</button>
      <div id="pushover-status" style="margin-top:6px;height:16px;font-size:11px;color:var(--cad-info);"></div>
      <canvas id="pushover-canvas" width="400" height="280" style="width:100%;margin-top:6px;background:#111;border:1px solid var(--cad-border);border-radius:4px;"></canvas>
    `, document.body.appendChild(t), (_b = t.querySelector("#pushover-close")) == null ? void 0 : _b.addEventListener("click", () => t.remove()), (_c = t.querySelector("#pushover-run")) == null ? void 0 : _c.addEventListener("click", async () => {
        const o = (b) => {
          var _a3;
          return parseFloat(((_a3 = t.querySelector(`#${b}`)) == null ? void 0 : _a3.value) || "0");
        }, n = o("po-colB"), l = o("po-colH"), a = o("po-fc") * 1e3, c = o("po-fy") * 1e3, s = o("po-H"), i = o("po-L"), p = o("po-As") * 1e-4, r = o("po-nbar"), d = o("po-drift") / 100, g = o("po-ncycles"), S = t.querySelector("#pushover-status");
        S.textContent = "Generando historia de desplazamientos...";
        const $ = [], y = d * s, f = 40;
        for (let b = 1; b <= g; b++) {
          const I = y * b / g;
          for (let L = 0; L <= f; L++) $.push(I * Math.sin(2 * Math.PI * L / f));
        }
        S.textContent = `Resolviendo pushover (${$.length} pasos)...`;
        try {
          const { cyclicPushover: b } = await va(async () => {
            const { cyclicPushover: L } = await import("./cyclicPushoverCpp-Xwxa7wee.js").then(async (m) => {
              await m.__tla;
              return m;
            });
            return {
              cyclicPushover: L
            };
          }, __vite__mapDeps([6,5]), import.meta.url), I = await b({
            colHeight: s,
            beamLength: i,
            col: {
              b: n,
              h: l,
              fpc: -a,
              Fy_rebar: c,
              E_rebar: 2e8,
              rebar_area: p,
              cover: 0.04,
              n_rebar: r
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -a,
              Fy_rebar: c,
              E_rebar: 2e8,
              rebar_area: p * 0.7,
              cover: 0.03,
              n_rebar: r
            },
            dispHistory: $
          });
          S.textContent = `Completado: ${I.nSteps} pasos`, il(t.querySelector("#pushover-canvas"), I.displacements, I.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${a / 1e3}MPa, Fy=${c / 1e3}MPa`);
        } catch (b) {
          S.textContent = `Error: ${b.message}`, console.error("Pushover failed:", b);
        }
      });
    }
    function il(t, o, n, l) {
      const a = t.getContext("2d");
      if (!a || o.length === 0) return;
      const c = t.width, s = t.height, i = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, p = c - i.left - i.right, r = s - i.top - i.bottom;
      a.fillStyle = "#111118", a.fillRect(0, 0, c, s);
      let d = Math.min(...o), g = Math.max(...o), S = Math.min(...n), $ = Math.max(...n);
      d === g && (d -= 0.01, g += 0.01), S === $ && (S -= 1, $ += 1);
      const y = g - d, f = $ - S, b = (F) => i.left + (F - d) / y * p, I = (F) => i.top + r - (F - S) / f * r;
      a.strokeStyle = "#333", a.lineWidth = 0.5, d < 0 && g > 0 && (a.strokeStyle = "#555", a.beginPath(), a.moveTo(b(0), i.top), a.lineTo(b(0), i.top + r), a.stroke()), S < 0 && $ > 0 && (a.beginPath(), a.moveTo(i.left, I(0)), a.lineTo(i.left + p, I(0)), a.stroke()), a.strokeStyle = "#ff4444", a.lineWidth = 1.5, a.beginPath(), a.moveTo(b(o[0]), I(n[0]));
      for (let F = 1; F < o.length; F++) a.lineTo(b(o[F]), I(n[F]));
      a.stroke(), a.fillStyle = "#aaa", a.font = "11px monospace", a.textAlign = "center", a.fillText("Desplazamiento (m)", i.left + p / 2, s - 5), a.save(), a.translate(12, i.top + r / 2), a.rotate(-Math.PI / 2), a.fillText("Fuerza (kN)", 0, 0), a.restore(), a.fillStyle = "#ee9b00", a.font = "bold 11px monospace", a.textAlign = "center", a.fillText(l, c / 2, 15), a.fillStyle = "#888", a.font = "9px monospace", a.textAlign = "center";
      const L = y / 5;
      for (let F = 0; F <= 5; F++) {
        const k = d + L * F;
        a.fillText((k * 1e3).toFixed(1), b(k), s - i.bottom + 15);
      }
      a.textAlign = "right";
      const z = f / 5;
      for (let F = 0; F <= 5; F++) {
        const k = S + z * F;
        a.fillText(k.toFixed(0), i.left - 5, I(k) + 3);
      }
    }
    let dn = null;
    function rl() {
      if (dn) {
        dn.remove(), dn = null;
        return;
      }
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff6600;border-radius:8px;padding:16px;z-index:10001;width:400px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);max-height:80vh;overflow-y:auto;", t.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <b style="color:#ff6600;font-size:14px;">\u{1F525} Nonlinear Analysis</b>
        <button id="nl-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:12px;">
        <b style="color:#ffcc00;">Steel02 Material Test</b>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px;">
          <label>Fy (kN/m\xB2):<input id="nl-fy" type="number" value="250000" style="width:80px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>E\u2080 (kN/m\xB2):<input id="nl-e0" type="number" value="200000000" style="width:80px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>b (ratio):<input id="nl-b" type="number" value="0.01" step="0.005" style="width:80px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>R\u2080:<input id="nl-r0" type="number" value="15" style="width:80px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>Amp (strain):<input id="nl-amp" type="number" value="0.02" step="0.005" style="width:80px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>Ciclos:<input id="nl-cycles" type="number" value="3" min="1" max="10" style="width:80px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>
        <button id="nl-test" style="margin-top:8px;padding:6px 16px;background:#ff6600;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;width:100%;">\u25B6 Run Steel02 Test</button>
      </div>
      <canvas id="nl-canvas" width="370" height="250" style="background:#0a0a1a;border:1px solid #333;border-radius:4px;width:100%;"></canvas>
      <div id="nl-info" style="margin-top:6px;color:#888;font-size:10px;"></div>
    `, document.body.appendChild(t), dn = t, t.querySelector("#nl-close").addEventListener("click", () => {
        t.remove(), dn = null;
      }), t.querySelector("#nl-test").addEventListener("click", () => cl(t));
    }
    function cl(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), a = parseFloat(t.querySelector("#nl-r0").value), c = parseFloat(t.querySelector("#nl-amp").value), s = parseInt(t.querySelector("#nl-cycles").value), i = 100, p = [];
      for (let U = 0; U < s; U++) {
        const le = c * (1 + U * 0.5);
        for (let te = 0; te < i; te++) {
          const Q = te / i * 2 * Math.PI;
          p.push(le * Math.sin(Q));
        }
      }
      const r = o / n, d = l * n;
      let g = 0, S = 0, $ = -r, y = r, f = 0, b = 0, I = 0, L = 0, z = 0, F = 0;
      const k = [];
      for (const U of p) {
        let le = $, te = y, Q = f, me = b, de = I, ke = L, Re = z, O = F, ce;
        const oe = U - g;
        if (Math.abs(oe) < 1e-20) {
          k.push(S);
          continue;
        }
        if ((O === 0 || O === 3) && (oe < 0 ? (O = 2, me = -r, de = -o, Q = me, ke = 0, Re = 0) : (O = 1, me = r, de = o, Q = me, ke = 0, Re = 0)), O === 2 && oe > 0) {
          O = 1, ke = g, Re = S, g < le && (le = g);
          const we = (te - le) / (2 * 1 * r), De = 1 + 0 * Math.pow(we, 0.8);
          me = (o * De - d * r * De - Re + n * ke) / (n - d), de = o * De + d * (me - r * De), Q = te;
        } else if (O === 1 && oe < 0) {
          O = 2, ke = g, Re = S, g > te && (te = g);
          const we = (te - le) / (2 * 1 * r), De = 1 + 0 * Math.pow(we, 0.8);
          me = (-o * De + d * r * De - Re + n * ke) / (n - d), de = -o * De + d * (me + r * De), Q = le;
        }
        const pe = Math.abs((Q - me) / r);
        let ee = a - 0.925 * pe / (0.15 + pe);
        ee < 0.1 && (ee = 0.1);
        const ge = (U - ke) / (me - ke), Ie = 1 + Math.pow(Math.abs(ge), ee), se = Math.pow(Ie, 1 / ee);
        ce = l * ge + (1 - l) * ge / se, ce = ce * (de - Re) + Re, k.push(ce), g = U, S = ce, $ = le, y = te, f = Q, b = me, I = de, L = ke, z = Re, F = O;
      }
      const m = t.querySelector("#nl-canvas"), u = m.getContext("2d"), E = m.width, A = m.height;
      u.clearRect(0, 0, E, A);
      const N = Math.max(...p.map(Math.abs)), W = Math.max(...k.map(Math.abs)), x = (E - 40) / (2 * N), w = (A - 40) / (2 * W), v = E / 2, P = A / 2;
      u.strokeStyle = "#444", u.lineWidth = 1, u.beginPath(), u.moveTo(20, P), u.lineTo(E - 20, P), u.stroke(), u.beginPath(), u.moveTo(v, 20), u.lineTo(v, A - 20), u.stroke(), u.fillStyle = "#888", u.font = "10px monospace", u.textAlign = "center", u.fillText("\u03B5 (strain)", E - 40, P - 5), u.fillText("\u03C3 (stress)", v + 30, 15), u.fillText(`\xB1${(N * 100).toFixed(1)}%`, E - 30, P + 12), u.fillText(`\xB1${(W / 1e3).toFixed(0)} MPa`, v + 40, 30), u.strokeStyle = "#00ccff", u.lineWidth = 1.5, u.beginPath();
      for (let U = 0; U < p.length; U++) {
        const le = v + p[U] * x, te = P - k[U] * w;
        U === 0 ? u.moveTo(le, te) : u.lineTo(le, te);
      }
      u.stroke(), u.strokeStyle = "#ff333366", u.lineWidth = 1, u.setLineDash([
        4,
        4
      ]), u.beginPath(), u.moveTo(20, P - o * w), u.lineTo(E - 20, P - o * w), u.stroke(), u.beginPath(), u.moveTo(20, P + o * w), u.lineTo(E - 20, P + o * w), u.stroke(), u.setLineDash([]), u.fillStyle = "#ff6666", u.font = "9px monospace", u.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, E - 50, P - o * w - 5);
      const K = t.querySelector("#nl-info");
      K.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${a} \u2014 ${s} ciclos, amp=${(c * 100).toFixed(1)}%`;
    }
    function dl() {
      var _a2, _b, _c, _d;
      const t = document.querySelector(".rpt-overlay");
      if (t) {
        t.remove();
        return;
      }
      const o = e.nodes.val, n = e.elements.val, l = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, a = ((_b = e.nodeInputs) == null ? void 0 : _b.val) || {}, c = (_c = e.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = e.analyzeOutputs) == null ? void 0 : _d.val, !o.length || !n.length) {
        alert("No hay modelo cargado");
        return;
      }
      const s = Ol({
        nodes: o,
        elements: n,
        nodeInputs: a,
        elementInputs: l,
        deformOutputs: c
      });
      document.body.appendChild(s);
    }
    let Xo = null;
    function pl(t) {
      Xo && Xo.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = Tn(), l = zn(), a = Object.entries(n).map(([r, d]) => `<option value="${d}">${r}</option>`).join(""), c = Object.entries(l).map(([r, d]) => `<option value="${d}">${r}</option>`).join("");
      o.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <b style="color:#00ccff;">Asignar Secci\xF3n (${t.length} elem.)</b>
        <button id="asgn-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <label>Tipo:</label>
        <select id="asgn-type" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;margin-top:2px;">
          <option value="rect">Rectangular (b\xD7h)</option>
          <option value="circ">Circular (d)</option>
          <option value="W">Perfil W</option>
          <option value="HSS">Perfil HSS</option>
          <option value="I-param">I Param\xE9trica</option>
          <option value="tubular">Tubular Hueca</option>
          <option value="CFT">CFT (Tubo relleno concreto)</option>
        </select>
      </div>
      <div id="asgn-params" style="margin-bottom:10px;"></div>

      <div style="border-top:1px solid #444;padding-top:8px;margin-bottom:8px;">
        <b style="color:#ff6666;font-size:11px;">Frame Releases</b>
        <table style="width:100%;border-collapse:collapse;font-size:10px;margin-top:4px;">
          <tr>
            <td style="color:#888"></td>
            <td colspan="2" style="text-align:center;color:#ff6666;font-weight:bold;font-size:9px">Release</td>
            <td colspan="2" style="text-align:center;color:#00ccff;font-weight:bold;font-size:9px">Partial Fixity Springs</td>
          </tr>
          <tr>
            <td style="color:#888"></td>
            <td style="text-align:center;color:#aaa;font-size:9px">Start</td>
            <td style="text-align:center;color:#aaa;font-size:9px">End</td>
            <td style="text-align:center;color:#aaa;font-size:9px">Start</td>
            <td style="text-align:center;color:#aaa;font-size:9px">End</td>
          </tr>
          <tr><td style="color:#ccc">Axial Load</td><td style="text-align:center"><input type="checkbox" data-asgn-rel="0"></td><td style="text-align:center"><input type="checkbox" data-asgn-rel="6"></td><td><input type="number" data-asgn-spr="0" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td><td><input type="number" data-asgn-spr="6" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td></tr>
          <tr><td style="color:#ccc">Shear V2</td><td style="text-align:center"><input type="checkbox" data-asgn-rel="1"></td><td style="text-align:center"><input type="checkbox" data-asgn-rel="7"></td><td><input type="number" data-asgn-spr="1" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td><td><input type="number" data-asgn-spr="7" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td></tr>
          <tr><td style="color:#ccc">Shear V3</td><td style="text-align:center"><input type="checkbox" data-asgn-rel="2"></td><td style="text-align:center"><input type="checkbox" data-asgn-rel="8"></td><td><input type="number" data-asgn-spr="2" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td><td><input type="number" data-asgn-spr="8" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td></tr>
          <tr><td style="color:#ccc">Torsion</td><td style="text-align:center"><input type="checkbox" data-asgn-rel="3"></td><td style="text-align:center"><input type="checkbox" data-asgn-rel="9"></td><td><input type="number" data-asgn-spr="3" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td><td><input type="number" data-asgn-spr="9" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td></tr>
          <tr><td style="color:#ccc">Moment 22</td><td style="text-align:center"><input type="checkbox" data-asgn-rel="4"></td><td style="text-align:center"><input type="checkbox" data-asgn-rel="10"></td><td><input type="number" data-asgn-spr="4" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td><td><input type="number" data-asgn-spr="10" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td></tr>
          <tr><td style="color:#ccc">Moment 33</td><td style="text-align:center"><input type="checkbox" data-asgn-rel="5"></td><td style="text-align:center"><input type="checkbox" data-asgn-rel="11"></td><td><input type="number" data-asgn-spr="5" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td><td><input type="number" data-asgn-spr="11" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td></tr>
        </table>
        <div style="color:#888;font-size:9px;margin-top:2px;">Release = condensaci\xF3n est\xE1tica (DOF libre). Spring = conexi\xF3n semi-r\xEDgida.</div>
      </div>

      <div style="border-top:1px solid #444;padding-top:8px;margin-bottom:10px;">
        <b style="color:#33ff33;font-size:11px;">Property/Stiffness Modification Factors</b>
        <div style="margin-top:6px;font-size:11px;">
          <div style="display:grid;grid-template-columns:160px 60px;gap:2px 8px;align-items:center;">
            <span style="color:#aaa">Cross-section (axial) Area</span>
            <input id="asgn-mod-a" type="number" value="1.0" step="0.1" min="0" max="2" style="width:55px;background:#333;color:#fff;border:1px solid #555;padding:2px;text-align:center;">
            <span style="color:#aaa">Shear Area dir 2 <span style="color:#666;font-size:9px">(Vy)</span></span>
            <input id="asgn-mod-as2" type="number" value="1.0" step="0.1" min="0" max="2" style="width:55px;background:#333;color:#fff;border:1px solid #555;padding:2px;text-align:center;">
            <span style="color:#aaa">Shear Area dir 3 <span style="color:#666;font-size:9px">(Vz)</span></span>
            <input id="asgn-mod-as3" type="number" value="1.0" step="0.1" min="0" max="2" style="width:55px;background:#333;color:#fff;border:1px solid #555;padding:2px;text-align:center;">
            <span style="color:#aaa">Torsional Constant</span>
            <input id="asgn-mod-j" type="number" value="1.0" step="0.1" min="0" max="2" style="width:55px;background:#333;color:#fff;border:1px solid #555;padding:2px;text-align:center;">
            <span style="color:#aaa">Moment of Inertia 2</span>
            <input id="asgn-mod-i" type="number" value="1.0" step="0.05" min="0" max="2" style="width:55px;background:#333;color:#fff;border:1px solid #555;padding:2px;text-align:center;">
            <span style="color:#aaa">Moment of Inertia 3</span>
            <input id="asgn-mod-i3" type="number" value="1.0" step="0.05" min="0" max="2" style="width:55px;background:#333;color:#fff;border:1px solid #555;padding:2px;text-align:center;">
            <span style="color:#aaa">Mass</span>
            <input id="asgn-mod-mass" type="number" value="1.0" step="0.1" min="0" max="2" style="width:55px;background:#333;color:#fff;border:1px solid #555;padding:2px;text-align:center;">
            <span style="color:#aaa">Weight</span>
            <input id="asgn-mod-weight" type="number" value="1.0" step="0.1" min="0" max="2" style="width:55px;background:#333;color:#fff;border:1px solid #555;padding:2px;text-align:center;">
          </div>
        </div>
        <div style="color:#888;font-size:9px;margin-top:4px;line-height:1.4;">
          1.0 = sin cambio &nbsp;|&nbsp; 0.35 = seccion agrietada (ACI 318)<br>
          <span style="color:#ffaa00">Shear Area:</span> 1 = <b>Timoshenko</b> (incluye corte) &nbsp;|&nbsp; 0 = <b>Euler-Bernoulli</b> (ignora corte)
        </div>
      </div>

      <div style="display:flex;gap:8px;">
        <button id="asgn-apply" style="flex:1;padding:8px;background:#00aa66;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u2713 Aplicar</button>
        <button id="asgn-remove" style="flex:1;padding:8px;background:#996600;color:#fff;border:none;border-radius:4px;cursor:pointer;">\u21BA Quitar Override</button>
      </div>
    `, document.body.appendChild(o), Xo = o;
      const s = o.querySelector("#asgn-type"), i = o.querySelector("#asgn-params");
      function p() {
        const r = s.value;
        let d = "";
        r === "rect" ? d = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : r === "circ" ? d = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : r === "W" ? d = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${a}</select>` : r === "HSS" ? d = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${c}</select>` : r === "I-param" ? d = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <label>bf(m):<input id="ap-bf" type="number" value="0.20" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hf" type="number" value="0.40" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tf(m):<input id="ap-tf" type="number" value="0.015" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tw(m):<input id="ap-tw" type="number" value="0.010" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>` : r === "tubular" && (d = `<div style="display:flex;gap:6px;">
          <label>b(m):<input id="ap-bc" type="number" value="0.20" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hc" type="number" value="0.30" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>t(m):<input id="ap-t" type="number" value="0.008" step="0.001" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>`), i.innerHTML = d;
      }
      s.addEventListener("change", p), p(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), Xo = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h;
        const r = s.value, d = {
          secType: r
        };
        r === "rect" ? (d.b = parseFloat(o.querySelector("#ap-b").value), d.h = parseFloat(o.querySelector("#ap-h").value), d.material = 0) : r === "circ" ? (d.b = parseFloat(o.querySelector("#ap-d").value), d.material = 0) : r === "W" || r === "HSS" ? (d.profileIdx = parseInt(o.querySelector("#ap-profile").value), d.material = 1) : r === "I-param" ? (d.bf = parseFloat(o.querySelector("#ap-bf").value), d.hf = parseFloat(o.querySelector("#ap-hf").value), d.tf = parseFloat(o.querySelector("#ap-tf").value), d.tw = parseFloat(o.querySelector("#ap-tw").value), d.material = 1) : r === "tubular" && (d.bc = parseFloat(o.querySelector("#ap-bc").value), d.hc = parseFloat(o.querySelector("#ap-hc").value), d.t = parseFloat(o.querySelector("#ap-t").value), d.material = 1);
        const g = new Array(12).fill(false), S = new Array(12).fill(0);
        o.querySelectorAll("input[data-asgn-rel]").forEach(($) => {
          g[parseInt($.dataset.asgnRel)] = $.checked;
        }), o.querySelectorAll("input[data-asgn-spr]").forEach(($) => {
          const y = parseFloat($.value);
          y > 0 && (S[parseInt($.dataset.asgnSpr)] = y);
        }), d.releases12 = g, d.springs12 = S, d.releaseRotStart = g[4] || g[5], d.releaseRotEnd = g[10] || g[11], d.releaseAxial = g[0], d.releaseTorsion = g[3], d.modI = parseFloat((_a2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _a2.value) || 1, d.modA = parseFloat((_b = o.querySelector("#asgn-mod-a")) == null ? void 0 : _b.value) || 1, d.modJ = parseFloat((_c = o.querySelector("#asgn-mod-j")) == null ? void 0 : _c.value) || 1, d.modAs2 = parseFloat((_d = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _d.value) ?? 1, d.modAs3 = parseFloat((_e2 = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _e2.value) ?? 1, d.modI3 = parseFloat((_f = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _f.value) || 1, d.modMass = parseFloat((_g = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _g.value) || 1, d.modWeight = parseFloat((_h = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _h.value) || 1, t.forEach(($) => be.set($, {
          ...d
        })), o.remove(), Xo = null, To(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((r) => be.delete(r)), o.remove(), Xo = null, To(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let Uo = null;
    function fl(t) {
      var _a2, _b, _c;
      Uo && Uo.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], a = o[n[1]], c = Math.abs(a[0] - l[0]), s = Math.abs(a[1] - l[1]), i = Math.abs(a[2] - l[2]), p = s > c && s > i, r = Math.sqrt(c * c + s * s + i * i), d = Me.get(t) ?? 0, g = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), S = (g == null ? void 0 : g.name) || (g ? `${g.type} ${((g.b ?? 0) * 100).toFixed(0)}x${((g.h ?? 0) * 100).toFixed(0)}` : "\u2014"), $ = document.createElement("div");
      $.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", $.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${p ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${d + 1} &nbsp;
        <span style="color:#888;">L:</span> ${r.toFixed(3)} m
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Secci\xF3n:</span> <span style="color:#00ccff;">${S}</span>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Nodos:</span> ${n[0]} \u2192 ${n[1]}
      </div>
      <hr style="border-color:#333;margin:12px 0;">
      <div style="display:flex;gap:8px;">
        <button id="ep-delete" style="flex:1;padding:8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F5D1} Eliminar</button>
        <button id="ep-inspect" style="flex:1;padding:8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F50D} Inspect</button>
      </div>
    `, document.body.appendChild($), Uo = $, $.querySelector("#ep-close").addEventListener("click", () => {
        $.remove(), Uo = null, qo();
      }), $.querySelector("#ep-delete").addEventListener("click", () => {
        Z.add(t), $.remove(), Uo = null, qo(), Oe();
      }), $.querySelector("#ep-inspect").addEventListener("click", () => {
        $.remove(), Uo = null, Zs(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const o = t.querySelector("canvas");
      if (!o) return;
      let n = null, l = null;
      const a = 5;
      function c(p) {
        const r = tt();
        if (!r) return null;
        const d = r.controls.object, g = new qe(p[0], p[1], p[2]);
        g.project(d);
        const S = o.getBoundingClientRect();
        return {
          x: (g.x + 1) / 2 * S.width,
          y: (-g.y + 1) / 2 * S.height
        };
      }
      function s(p, r, d, g, S) {
        const $ = Math.min(p, d), y = Math.max(p, d), f = Math.min(r, g), b = Math.max(r, g), I = e.nodes.val, L = e.elements.val, z = [];
        for (let F = 0; F < L.length; F++) {
          const k = L[F], m = k.map((u) => c(I[u])).filter(Boolean);
          if (m.length !== 0) if (S) m.every((E) => E.x >= $ && E.x <= y && E.y >= f && E.y <= b) && z.push(F);
          else {
            if (m.some((E) => E.x >= $ && E.x <= y && E.y >= f && E.y <= b)) {
              z.push(F);
              continue;
            }
            if (k.length === 2) {
              const E = m[0], A = m[1];
              i(E.x, E.y, A.x, A.y, $, f, y, b) && z.push(F);
            }
          }
        }
        return z;
      }
      function i(p, r, d, g, S, $, y, f) {
        const b = (L, z) => L >= S && L <= y && z >= $ && z <= f;
        if (b(p, r) || b(d, g)) return true;
        const I = (L, z, F, k, m, u, E, A) => {
          const N = (F - L) * (A - u) - (k - z) * (E - m);
          if (Math.abs(N) < 1e-10) return false;
          const W = ((m - L) * (A - u) - (u - z) * (E - m)) / N, x = ((m - L) * (k - z) - (u - z) * (F - L)) / N;
          return W >= 0 && W <= 1 && x >= 0 && x <= 1;
        };
        return I(p, r, d, g, S, $, y, $) || I(p, r, d, g, y, $, y, f) || I(p, r, d, g, S, f, y, f) || I(p, r, d, g, S, $, S, f);
      }
      o.addEventListener("mousedown", (p) => {
        eo && (n = {
          x: p.offsetX,
          y: p.offsetY
        });
      }), o.addEventListener("mousemove", (p) => {
        if (yo) {
          const d = tt();
          if (!d) return;
          const g = Vs(p.clientX, p.clientY, d.camera, d.rendererElm);
          if (At.track && g.snapType === "node" && g.nodeIdx !== null && g.nodeIdx !== Oo && Xa(g.nodeIdx), At.track && Oo !== null && g.worldPos && g.snapType !== "node") {
            const S = Ua(g.worldPos, Oo);
            S && (g.worldPos = S, g.snapType = "grid");
          }
          if (Oo !== null && g.worldPos) {
            const S = e.nodes.val[Oo];
            S && Gs(p.clientX, p.clientY, new qe(...S), g.worldPos);
          } else if (kt !== null && g.worldPos) {
            const S = e.nodes.val[kt];
            S && Gs(p.clientX, p.clientY, new qe(...S), g.worldPos);
          } else io && (io.remove(), io = null);
          g.nodeIdx, Js(g), o.style.cursor = g.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!po && !eo) return;
        if (eo && n) {
          const d = p.offsetX - n.x, g = p.offsetY - n.y;
          if (Math.abs(d) > a || Math.abs(g) > a) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const S = d > 0, $ = Math.min(n.x, p.offsetX), y = Math.min(n.y, p.offsetY), f = Math.abs(d), b = Math.abs(g);
            l.style.left = $ + "px", l.style.top = y + "px", l.style.width = f + "px", l.style.height = b + "px", l.style.border = S ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = S ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const r = ss(p);
        if (r >= 0) Us(r), o.style.cursor = "pointer";
        else {
          if (to) {
            const d = tt();
            d == null ? void 0 : d.scene.remove(to), to = null, d == null ? void 0 : d.render();
          }
          o.style.cursor = eo ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (p) => {
        if (eo && n) {
          const r = p.offsetX - n.x, d = p.offsetY - n.y;
          if (Math.abs(r) > a || Math.abs(d) > a) {
            const g = r > 0, S = s(n.x, n.y, p.offsetX, p.offsetY, g);
            p.ctrlKey || p.metaKey || (wt.clear(), Co()), S.forEach((y) => {
              wt.has(y) || (wt.add(y), ts(y));
            }), Po();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (p) => {
        if (yo) {
          const r = tt();
          if (!r) return;
          const d = Vs(p.clientX, p.clientY, r.camera, r.rendererElm);
          (d.worldPos || d.nodeIdx !== null) && (Za(d), Js(d));
          return;
        }
        if (eo) {
          if (l) return;
          const r = ss(p), d = p.ctrlKey || p.metaKey;
          if (r >= 0) {
            if (d) if (wt.has(r)) {
              wt.delete(r);
              const g = Ao.findIndex((S) => S.__elemIdx === r);
              if (g >= 0) {
                const S = tt();
                S == null ? void 0 : S.scene.remove(Ao[g]), Ao[g].geometry.dispose(), Ao[g].material.dispose(), Ao.splice(g, 1), S == null ? void 0 : S.render();
              }
            } else wt.add(r), ts(r);
            else wt.clear(), Co(), wt.add(r), ts(r);
            Po();
          } else d || (wt.clear(), Co(), Po());
          return;
        }
        if (po) {
          const r = ss(p);
          r >= 0 && (Us(r), fl(r));
        }
      });
    }, 500), on.derive(() => {
      var _a2;
      e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, nt();
    }), ot.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !Be), Be = t, (_a2 = Ae.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", Be), Be) {
        const n = tt();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (He = n.settings.loads.rawVal, n.settings.loads.val = false), Yn(), Ae.querySelector("#cad3d-mode-prev").style.display = "", Ae.querySelector("#cad3d-mode-next").style.display = "", Ae.querySelector("#cad3d-mode-label").style.display = "";
      } else Gn(), Ae.querySelector("#cad3d-mode-prev").style.display = "none", Ae.querySelector("#cad3d-mode-next").style.display = "none", Ae.querySelector("#cad3d-mode-label").style.display = "none", T && T !== "placa-q4" && T !== "placa-3q" && Oe(), setTimeout(() => {
        var _a3;
        const n = tt();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && He && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${Be ? "ON" : "OFF"}`);
    }, ot.setMode = (t) => {
      var _a2;
      if (!(Pe == null ? void 0 : Pe.modeShapes)) {
        console.error("No modal results");
        return;
      }
      xe = Math.max(0, Math.min(t, Pe.modeShapes.length - 1));
      const o = Pe.modeShapes[xe], { extent: n } = zo();
      let l = 0;
      for (let c = 0; c < ze.length; c++) {
        const s = o[c * 6] || 0, i = o[c * 6 + 1] || 0, p = o[c * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(s * s + i * i + p * p));
      }
      Je = l > 1e-12 ? n * 0.05 / l : 1, cn();
      const a = Ae.querySelector("#cad3d-mode-label");
      a && Pe.frequencies && (a.textContent = `Modo ${xe + 1} \u2014 ${Pe.frequencies[xe].toFixed(2)} Hz`), console.log(`Modo ${xe + 1}: f = ${(_a2 = Pe.frequencies) == null ? void 0 : _a2[xe].toFixed(4)} Hz`);
    }, window.cad = ot, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(Ae), document.body.appendChild(ft.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (at("muro-q4"), rs(), Hs("muro-q4"), setTimeout(() => {
        T === "muro-q4" && mo();
      }, 200));
    }, 100);
    const pn = document.createElement("button");
    pn.id = "mobile-menu-btn", pn.innerHTML = "\u2630", pn.addEventListener("click", () => {
      const t = document.getElementById("cad3d-panel");
      t && (t.classList.toggle("mobile-open"), pn.innerHTML = t.classList.contains("mobile-open") ? "\u2715" : "\u2630");
    }), document.body.appendChild(pn);
    const Xt = document.createElement("div");
    Xt.style.cssText = "position:fixed; bottom:20px; right:20px; z-index:10000; display:flex; gap:8px; touch-action:none; cursor:grab;";
    const ca = localStorage.getItem("hk_float_pos");
    if (ca) try {
      const { x: t, y: o } = JSON.parse(ca);
      Xt.style.left = t + "px", Xt.style.top = o + "px", Xt.style.right = "auto", Xt.style.bottom = "auto";
    } catch {
    }
    let $n = false, da = 0, pa = 0, fa = 0, ua = 0;
    const ma = 5;
    let fn = false;
    const ga = (t, o) => {
      $n = true, fn = false, da = t, pa = o;
      const n = Xt.getBoundingClientRect();
      fa = n.left, ua = n.top, Xt.style.cursor = "grabbing";
    }, ha = (t, o) => {
      if (!$n) return;
      const n = t - da, l = o - pa;
      (Math.abs(n) > ma || Math.abs(l) > ma) && (fn = true), fn && (Xt.style.left = fa + n + "px", Xt.style.top = ua + l + "px", Xt.style.right = "auto", Xt.style.bottom = "auto");
    }, ba = () => {
      if ($n = false, Xt.style.cursor = "grab", fn) {
        const t = Xt.getBoundingClientRect();
        localStorage.setItem("hk_float_pos", JSON.stringify({
          x: t.left,
          y: t.top
        }));
      }
    };
    Xt.addEventListener("mousedown", (t) => {
      ga(t.clientX, t.clientY), t.preventDefault();
    }), document.addEventListener("mousemove", (t) => ha(t.clientX, t.clientY)), document.addEventListener("mouseup", () => ba()), Xt.addEventListener("touchstart", (t) => {
      const o = t.touches[0];
      ga(o.clientX, o.clientY);
    }, {
      passive: true
    }), document.addEventListener("touchmove", (t) => {
      if ($n) {
        const o = t.touches[0];
        ha(o.clientX, o.clientY);
      }
    }), document.addEventListener("touchend", () => ba());
    const Mo = document.createElement("button");
    Mo.id = "fullscreen-btn", Mo.innerHTML = "\u26F6", Mo.title = "Pantalla completa", Mo.style.cssText = `
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #333, #555);
    color: white; border: 3px solid rgba(255,255,255,0.2);
    font-size: 22px; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex; align-items: center; justify-content: center;
  `, Mo.addEventListener("mouseenter", () => {
      Mo.style.transform = "scale(1.15)";
    }), Mo.addEventListener("mouseleave", () => {
      Mo.style.transform = "scale(1)";
    }), Mo.addEventListener("click", () => {
      fn || (document.fullscreenElement ? document.exitFullscreen().catch(() => {
      }) : document.documentElement.requestFullscreen().catch(() => {
      }));
    }), Xt.appendChild(Mo), Xt.appendChild(Jl()), document.body.appendChild(Xt);
    const xa = document.createElement("span");
    return xa.style.display = "none", xa;
  };
});
export {
  __tla,
  ka as a,
  Nl as c,
  wi as g
};
