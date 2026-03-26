const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/calcPanel-Cyw7vzQ9.js","assets/getMesh-DMDY1xW7.js","assets/pureFunctionsAny.generated-JAcEVsJ7.js","assets/analyze-C33Jzs7t.js","assets/didacticCpp-CaRzrnvk.js","assets/cyclicPushoverCpp-BipHDx7d.js"])))=>i.map(i=>d[i]);
import { v as Jo, P as on, g as Ga, a as Ya, o as Ja } from "./theme-CzzIlc4y.js";
import { G as sn, b as Va, M as Xs, D as Ks, B as oo, c as xn, d as Ua, C as Xa, e as la, V as Oe, P as Eo, R as Zs, f as Qs, g as jo, h as Wo, i as Ka, S as Za, j as Qa, F as zo, a as Go, L as Lo, k as el, l as tl, A as dn, T as Vn, m as pn, n as fn, o as ol, p as nl } from "./Text-CBH-tcJP.js";
import { g as vn, b as yn, a as Yo } from "./analyze-C33Jzs7t.js";
import { d as Nt, p as Un, m as sl, s as al, __tla as __tla_0 } from "./didacticCpp-CaRzrnvk.js";
import { g as go, __tla as __tla_1 } from "./getMesh-DMDY1xW7.js";
import { n as Ro, s as ho, m as so, t as os } from "./pureFunctionsAny.generated-JAcEVsJ7.js";
let aa, pl, Ql;
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
  const ll = "modulepreload", rl = function(e) {
    return "/awatif-workspace/" + e;
  }, ea = {}, ta = function(m, F, $) {
    let Y = Promise.resolve();
    if (F && F.length > 0) {
      document.getElementsByTagName("link");
      const J = document.querySelector("meta[property=csp-nonce]"), j = (J == null ? void 0 : J.nonce) || (J == null ? void 0 : J.getAttribute("nonce"));
      Y = Promise.allSettled(F.map((N) => {
        if (N = rl(N), N in ea) return;
        ea[N] = true;
        const G = N.endsWith(".css"), ve = G ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${N}"]${ve}`)) return;
        const k = document.createElement("link");
        if (k.rel = G ? "stylesheet" : ll, G || (k.as = "script"), k.crossOrigin = "", k.href = N, j && k.setAttribute("nonce", j), document.head.appendChild(k), G) return new Promise((re, xe) => {
          k.addEventListener("load", re), k.addEventListener("error", () => xe(new Error(`Unable to preload CSS for ${N}`)));
        });
      }));
    }
    function D(J) {
      const j = new Event("vite:preloadError", {
        cancelable: true
      });
      if (j.payload = J, window.dispatchEvent(j), !j.defaultPrevented) throw J;
    }
    return Y.then((J) => {
      for (const j of J || []) j.status === "rejected" && D(j.reason);
      return m().catch(D);
    });
  }, ts = [
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
  ], Vo = [
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
  function il(e, m) {
    return e === "kN" && m === "m" ? "kPa" : e === "kN" && m === "mm" || e === "N" && m === "mm" ? "MPa" : e === "N" && m === "m" ? "Pa" : e === "kip" && m === "in" ? "ksi" : e === "kip" && m === "ft" ? "ksf" : `${e}/${m}\xB2`;
  }
  const Co = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function Fo(e, m) {
    const F = ts.find((G) => G.id === e), $ = Vo.find((G) => G.id === m), Y = F.toKN, D = $.toM, J = (G, ve, k) => k / (Math.pow(Y, G) * Math.pow(D, ve));
    let j, N;
    switch (e) {
      case "kN":
        j = 10, N = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        j = 1, N = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        j = 1e3, N = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        j = 10, N = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        j = 5e3, N = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        j = 1e4, N = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${e}-${m}`,
      label: `${F.label}, ${$.label}`,
      force: F.label,
      length: $.label,
      stress: il(e, m),
      moment: `${F.label}\xB7${$.label}`,
      E: J(1, -2, Co.E),
      G: J(1, -2, Co.G),
      A: J(0, 2, Co.A),
      Iz: J(0, 4, Co.Iz),
      Iy: J(0, 4, Co.Iy),
      J: J(0, 4, Co.J),
      rho: J(1, -4, Co.rho),
      spanRange: $.spanRange,
      heightRange: $.heightRange,
      defaultSpan: $.defaultSpan,
      defaultHeight: $.defaultHeight,
      defaultForce: j,
      forceRange: N,
      galponSpan: $.galponSpan,
      galponLength: $.galponLength,
      galponHeight: $.galponHeight,
      galponRise: $.galponRise
    };
  }
  Fo("kN", "m"), Fo("kip", "in");
  function un() {
    return {
      truss: [
        {
          label: "Empotrado",
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
          label: "Articulado",
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
          label: "Roller Z",
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
          label: "Empotrado",
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
          label: "Articulado",
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
          label: "Empotrado",
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
          label: "Articulado",
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
          label: "Empotrado",
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
          label: "Articulado",
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
          label: "Empotrado",
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
          label: "Articulado",
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
          label: "Empotrado",
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
          label: "Articulado",
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
          label: "Emp-Libre",
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
          label: "Emp-Emp",
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
          label: "Emp-Art",
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
          label: "Simply Supported",
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
          label: "Empotrado",
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
          label: "Simply Supported",
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
          label: "Empotrado",
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
          label: "Simply Supported",
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
          label: "Empotrado",
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
          label: "Pin (w=0)",
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
          label: "Empotrado",
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
          label: "Empotrado",
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
          label: "Articulado",
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
          label: "Rankine (Ka)",
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
          label: "Suelo continuo",
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
          label: "Interfaz",
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
          label: "Presion agua",
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
          label: "Winkler (k)",
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
          label: "Simplemente apoyado",
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
          label: "Empotrado",
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
          label: "Pernos empotrados",
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
          label: "Empotrado",
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
          label: "Empotrado",
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
          label: "Empotrado",
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
          label: "Empotrado",
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
          label: "Empotrado",
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
          label: "Empotrado",
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
          label: "Empotrado",
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
          label: "Empotrado",
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
  function cl(e) {
    return {
      truss: [
        {
          key: "span",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `Luz (${e.length})`
        },
        {
          key: "divisions",
          val: 5,
          min: 2,
          max: 20,
          step: 1,
          label: "Divisiones"
        },
        {
          key: "height",
          val: e.defaultHeight * 0.5,
          min: e.heightRange[0] * 0.3,
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `Altura (${e.length})`
        }
      ],
      beams: [
        {
          key: "width",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `Luz (${e.length})`
        },
        {
          key: "height",
          val: e.defaultHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `Altura (${e.length})`
        },
        {
          key: "nSub",
          val: 4,
          min: 1,
          max: 10,
          step: 1,
          label: "Discretizaci\xF3n"
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
          label: "Pisos"
        },
        {
          key: "nSub",
          val: 3,
          min: 1,
          max: 8,
          step: 1,
          label: "Discretizaci\xF3n"
        }
      ],
      frame: [
        {
          key: "nVanos",
          val: 3,
          min: 1,
          max: 10,
          step: 1,
          label: "N. Vanos"
        },
        {
          key: "spanV",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `Luz vano (${e.length})`
        },
        {
          key: "nPisos",
          val: 3,
          min: 1,
          max: 20,
          step: 1,
          label: "N. Pisos"
        },
        {
          key: "hPiso",
          val: e.defaultHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `h piso (${e.length})`
        }
      ],
      edificio: [
        {
          key: "nVanosX",
          val: 2,
          min: 1,
          max: 8,
          step: 1,
          label: "Vanos X"
        },
        {
          key: "nVanosY",
          val: 2,
          min: 1,
          max: 8,
          step: 1,
          label: "Vanos Y"
        },
        {
          key: "nPisos",
          val: 3,
          min: 1,
          max: 20,
          step: 1,
          label: "N. Pisos"
        },
        {
          key: "hPiso",
          val: e.defaultHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `h piso (${e.length})`
        },
        {
          key: "nSubViga",
          val: 1,
          min: 1,
          max: 8,
          step: 1,
          label: "Div. Vigas"
        },
        {
          key: "nSubCol",
          val: 1,
          min: 1,
          max: 8,
          step: 1,
          label: "Div. Columnas"
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
          label: `Luz (${e.length})`
        },
        {
          key: "length",
          val: e.galponLength,
          min: e.spanRange[0],
          max: e.spanRange[1] * 4,
          step: e.spanRange[2],
          label: `Largo (${e.length})`
        },
        {
          key: "height",
          val: e.galponHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `Altura col (${e.length})`
        },
        {
          key: "archRise",
          val: e.galponRise,
          min: e.heightRange[2],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `Flecha arco (${e.length})`
        },
        {
          key: "xDiv",
          val: 8,
          min: 4,
          max: 20,
          step: 1,
          label: "Div. X"
        },
        {
          key: "yDiv",
          val: 4,
          min: 2,
          max: 12,
          step: 1,
          label: "Div. Y"
        }
      ],
      barra: [
        {
          key: "L",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `L total (${e.length})`
        },
        {
          key: "nElem",
          val: 3,
          min: 1,
          max: 10,
          step: 1,
          label: "Num elementos"
        },
        {
          key: "F",
          val: e.defaultForce * 10,
          min: e.forceRange[0],
          max: e.forceRange[1] * 10,
          step: Math.abs(e.forceRange[2]) * 10,
          label: `F axial (${e.force})`
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
          label: `Mesh size (${e.length})`
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
          label: "nx elem"
        },
        {
          key: "ny",
          val: 16,
          min: 2,
          max: 64,
          step: 2,
          label: "ny elem"
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
          label: "nx elem"
        },
        {
          key: "ny",
          val: 8,
          min: 4,
          max: 40,
          step: 2,
          label: "ny elem"
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
          label: `Mesh (${e.length})`
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
          label: `Mesh (${e.length})`
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
          label: `Ancho carga (${e.length})`
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
          label: `B base (${e.length})`
        },
        {
          key: "tw",
          val: 0.3,
          min: 0.1,
          max: 1,
          step: 0.05,
          label: `t muro (${e.length})`
        },
        {
          key: "tb",
          val: 0.4,
          min: 0.1,
          max: 1,
          step: 0.05,
          label: `t base (${e.length})`
        },
        {
          key: "meshSize",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.05,
          label: `Mesh (${e.length})`
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E concreto (${e.stress})`
        },
        {
          key: "nu",
          val: 0.2,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v concreto"
        },
        {
          key: "gamma",
          val: 18,
          min: 5,
          max: 30,
          step: 1,
          label: `gamma suelo (${e.force}/${e.length}\xB3)`
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
          label: `q sobrecarga (${e.stress})`
        },
        {
          key: "Es",
          val: 5e4,
          min: 100,
          max: 1e6,
          step: 1e3,
          label: `E suelo (${e.stress})`
        },
        {
          key: "nus",
          val: 0.3,
          min: 0.1,
          max: 0.49,
          step: 0.01,
          label: "v suelo"
        },
        {
          key: "kn",
          val: 1e6,
          min: 1e3,
          max: 1e9,
          step: 1e4,
          label: `kn interfaz (${e.force}/${e.length}\xB3)`
        },
        {
          key: "ks",
          val: 1e4,
          min: 100,
          max: 1e7,
          step: 1e3,
          label: `ks interfaz (${e.force}/${e.length}\xB3)`
        },
        {
          key: "gammaW",
          val: 9.81,
          min: 5,
          max: 15,
          step: 0.1,
          label: `gamma agua (${e.force}/${e.length}\xB3)`
        },
        {
          key: "Hw",
          val: 3.5,
          min: 0.5,
          max: 10,
          step: 0.5,
          label: `H agua (${e.length})`
        }
      ],
      zapata: [
        {
          key: "Lx",
          val: 2,
          min: 0.5,
          max: 6,
          step: 0.1,
          label: `Lx zapata (${e.length})`
        },
        {
          key: "Ly",
          val: 2,
          min: 0.5,
          max: 6,
          step: 0.1,
          label: `Ly zapata (${e.length})`
        },
        {
          key: "t",
          val: 0.5,
          min: 0.1,
          max: 2,
          step: 0.05,
          label: `t zapata (${e.length})`
        },
        {
          key: "colA",
          val: 0.4,
          min: 0.15,
          max: 1.5,
          step: 0.05,
          label: `a columna (${e.length})`
        },
        {
          key: "colH",
          val: 1.5,
          min: 0.5,
          max: 5,
          step: 0.5,
          label: `h pedestal (${e.length})`
        },
        {
          key: "nx",
          val: 8,
          min: 4,
          max: 20,
          step: 2,
          label: "nx elem"
        },
        {
          key: "ny",
          val: 8,
          min: 4,
          max: 20,
          step: 2,
          label: "ny elem"
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
          label: `P axial (${e.force})`
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
          label: `Placa Lx (${e.length})`
        },
        {
          key: "Ly",
          val: 0.4,
          min: 0.15,
          max: 1,
          step: 0.05,
          label: `Placa Ly (${e.length})`
        },
        {
          key: "t",
          val: 0.025,
          min: 0.01,
          max: 0.1,
          step: 5e-3,
          label: `Espesor t (${e.length})`
        },
        {
          key: "dBolt",
          val: 0.022,
          min: 0.01,
          max: 0.05,
          step: 2e-3,
          label: `d perno (${e.length})`
        },
        {
          key: "sx",
          val: 0.28,
          min: 0.08,
          max: 0.8,
          step: 0.02,
          label: `Sep. pernos X (${e.length})`
        },
        {
          key: "sy",
          val: 0.28,
          min: 0.08,
          max: 0.8,
          step: 0.02,
          label: `Sep. pernos Y (${e.length})`
        },
        {
          key: "colA",
          val: 0.2,
          min: 0.1,
          max: 0.5,
          step: 0.02,
          label: `Col a (${e.length})`
        },
        {
          key: "meshSize",
          val: 8e-3,
          min: 3e-3,
          max: 0.03,
          step: 1e-3,
          label: `Mesh (${e.length})`
        },
        {
          key: "E",
          val: e.E,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E acero (${e.stress})`
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
          label: `P axial (${e.force})`
        },
        {
          key: "nBolts",
          val: 4,
          min: 2,
          max: 8,
          step: 2,
          label: "N pernos"
        }
      ],
      "col-placa": [
        {
          key: "colB",
          val: 0.3,
          min: 0.1,
          max: 0.6,
          step: 0.02,
          label: `Col b (${e.length})`
        },
        {
          key: "colH",
          val: 0.3,
          min: 0.1,
          max: 0.6,
          step: 0.02,
          label: `Col h (${e.length})`
        },
        {
          key: "colT",
          val: 8e-3,
          min: 4e-3,
          max: 0.025,
          step: 2e-3,
          label: `Col t (${e.length})`
        },
        {
          key: "colLen",
          val: 1.5,
          min: 0.5,
          max: 4,
          step: 0.25,
          label: `Col altura (${e.length})`
        },
        {
          key: "Lx",
          val: 0.45,
          min: 0.2,
          max: 1,
          step: 0.05,
          label: `Placa Lx (${e.length})`
        },
        {
          key: "Ly",
          val: 0.45,
          min: 0.2,
          max: 1,
          step: 0.05,
          label: `Placa Ly (${e.length})`
        },
        {
          key: "tPlaca",
          val: 0.025,
          min: 0.01,
          max: 0.06,
          step: 5e-3,
          label: `Placa t (${e.length})`
        },
        {
          key: "dBolt",
          val: 0.022,
          min: 0.012,
          max: 0.04,
          step: 2e-3,
          label: `d perno (${e.length})`
        },
        {
          key: "sx",
          val: 0.32,
          min: 0.1,
          max: 0.8,
          step: 0.02,
          label: `Sep pernos X (${e.length})`
        },
        {
          key: "sy",
          val: 0.32,
          min: 0.1,
          max: 0.8,
          step: 0.02,
          label: `Sep pernos Y (${e.length})`
        },
        {
          key: "nSubColV",
          val: 6,
          min: 2,
          max: 12,
          step: 1,
          label: "Col subdiv V"
        },
        {
          key: "nSubColH",
          val: 4,
          min: 2,
          max: 8,
          step: 1,
          label: "Col subdiv H"
        },
        {
          key: "nSubPlaca",
          val: 10,
          min: 4,
          max: 20,
          step: 2,
          label: "Placa subdiv"
        },
        {
          key: "E",
          val: e.E,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E acero (${e.stress})`
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
          label: `P axial (${e.force})`
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
          label: "Angulo (deg)"
        },
        {
          key: "bTop",
          val: 3,
          min: 1,
          max: 10,
          step: 0.5,
          label: `b top (${e.length})`
        },
        {
          key: "bBot",
          val: 3,
          min: 1,
          max: 10,
          step: 0.5,
          label: `b base (${e.length})`
        },
        {
          key: "meshSize",
          val: 0.8,
          min: 0.3,
          max: 3,
          step: 0.1,
          label: `Mesh (${e.length})`
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
          label: `Cohesion c (${e.stress})`
        },
        {
          key: "phi",
          val: 30,
          min: 0,
          max: 45,
          step: 1,
          label: "Friccion \u03C6 (deg)"
        },
        {
          key: "qs",
          val: 0,
          min: 0,
          max: 100,
          step: 5,
          label: `Sobrecarga (${e.stress})`
        }
      ]
    };
  }
  function dl(e) {
    const m = e.force, [F, $, Y] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: F,
          max: 0,
          step: Y,
          label: `CM (${m})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: Y,
          label: `CV (${m})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: F,
          max: 0,
          step: Y,
          label: `CM (${m})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: Y,
          label: `CV (${m})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: F,
          max: $,
          step: Y,
          label: `Ex sismo (${m})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: F,
          max: 0,
          step: Y,
          label: `CM (${m})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: Y,
          label: `CV (${m})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: F,
          max: $,
          step: Y,
          label: `Ex sismo (${m})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: F,
          max: 0,
          step: Y,
          label: `CM (${m})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: Y,
          label: `CV (${m})`
        },
        {
          key: "Ex",
          val: 0,
          min: F,
          max: $,
          step: Y,
          label: `Ex sismo (${m})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: F,
          max: 0,
          step: Y,
          label: `CM (${m})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: Y,
          label: `CV (${m})`
        },
        {
          key: "Ex",
          val: 0,
          min: F,
          max: $,
          step: Y,
          label: `Ex sismo (${m})`
        },
        {
          key: "Ey",
          val: 0,
          min: F,
          max: $,
          step: Y,
          label: `Ey sismo (${m})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: F,
          max: 0,
          step: Y,
          label: `CM (${m})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: Y,
          label: `CV (${m})`
        }
      ],
      barra: [
        {
          key: "F",
          val: e.defaultForce * 10,
          min: e.forceRange[0] * 10,
          max: e.forceRange[1] * 10,
          step: Math.abs(e.forceRange[2]) * 5,
          label: `F axial (${m})`
        }
      ],
      "placa-3q": [
        {
          key: "CM",
          val: 0,
          min: F,
          max: 0,
          step: Y,
          label: `CM (${m})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: F,
          max: 0,
          step: Y,
          label: `CM (${m})`
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
      eiffel: [],
      arco: [],
      puente: [],
      twisted: [],
      burj: [],
      opera: [],
      diagrid: []
    };
  }
  pl = function() {
    const e = document.createElement("div");
    e.id = "modal-results", e.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;
    let m = false;
    function F($, Y) {
      var _a, _b;
      if (!$.frequencies || $.frequencies.length === 0) {
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
      ], J = [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let j = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:default;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${Y.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (j += '<div id="modal-body" style="padding:0 12px 10px 12px;">', Y.properties) for (const N of Y.properties) j += `<span style="color:#888">${N}</span>
`;
      j += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const N of D) j += `<th style="padding:2px 5px">${N}</th>`;
      if (j += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, $.frequencies.forEach((N, G) => {
        var _a2;
        const ve = N > 0 ? 1 / N : 0, k = N * 2 * Math.PI, re = ((_a2 = $.massParticipation) == null ? void 0 : _a2[G]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let xe = 0; xe < 6; xe++) J[xe] += re[xe];
        j += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${G + 1}</td>
  <td style="padding:2px 6px; text-align:right">${N.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${ve.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${k.toFixed(2)}</td>`;
        for (let xe = 0; xe < 6; xe++) {
          const be = (re[xe] * 100).toFixed(1), ce = re[xe] > 0.5 ? "#f00" : re[xe] > 0.1 ? "#ff0" : "#0f0";
          j += `<td style="padding:2px 5px; text-align:right; color:${ce}">${be}%</td>`;
        }
        j += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(J[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(J[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(J[5] * 100).toFixed(1)}%</td></tr>`;
      }), j += "</table></div>", e.innerHTML = j, m) {
        const N = e.querySelector("#modal-body"), G = e.querySelector("#modal-minimize");
        N && (N.style.display = "none"), G && (G.textContent = "\u25A2", G.title = "Restaurar");
      }
      (_a = e.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
        m = !m;
        const N = e.querySelector("#modal-body"), G = e.querySelector("#modal-minimize");
        m ? (N.style.display = "none", G.textContent = "\u25A2", G.title = "Restaurar") : (N.style.display = "block", G.textContent = "\u25AC", G.title = "Minimizar");
      }), (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const N = [];
        N.push(`Modal Analysis \u2014 ${Y.title}`);
        const G = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${D.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        N.push(G), N.push("-".repeat(G.length));
        const ve = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        $.frequencies.forEach((re, xe) => {
          var _a2;
          const be = re > 0 ? 1 / re : 0, ce = re * 2 * Math.PI, ne = ((_a2 = $.massParticipation) == null ? void 0 : _a2[xe]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let _ = 0; _ < 6; _++) ve[_] += ne[_];
          const O = ne.map((_) => ((_ * 100).toFixed(1) + "%").padStart(6)).join(" ");
          N.push(`${String(xe + 1).padStart(4)}  ${re.toFixed(4).padStart(9)}  ${be.toFixed(4).padStart(9)}  ${ce.toFixed(2).padStart(9)}  ${O}  ${(ve[0] * 100).toFixed(1).padStart(5)}%  ${(ve[1] * 100).toFixed(1).padStart(5)}%  ${(ve[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(N.join(`
`));
        const k = e.querySelector("#modal-copy");
        k.textContent = "\u2713", setTimeout(() => k.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: F
    };
  };
  const Le = 64516e-8, P = 416231e-12, te = 0.0254, Io = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * Le,
      Iz: 16.4 * P,
      Iy: 2.2 * P,
      J: 0.0405 * P,
      d: 5.9 * te,
      bf: 3.94 * te
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * Le,
      Iz: 29.1 * P,
      Iy: 9.32 * P,
      J: 0.103 * P,
      d: 5.99 * te,
      bf: 5.99 * te
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * Le,
      Iz: 41.4 * P,
      Iy: 13.3 * P,
      J: 0.204 * P,
      d: 6.2 * te,
      bf: 6.02 * te
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * Le,
      Iz: 30.8 * P,
      Iy: 2.09 * P,
      J: 0.0426 * P,
      d: 7.89 * te,
      bf: 3.94 * te
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * Le,
      Iz: 61.9 * P,
      Iy: 7.97 * P,
      J: 0.172 * P,
      d: 8.14 * te,
      bf: 5.25 * te
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * Le,
      Iz: 82.7 * P,
      Iy: 18.3 * P,
      J: 0.346 * P,
      d: 7.93 * te,
      bf: 6.5 * te
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * Le,
      Iz: 110 * P,
      Iy: 37.1 * P,
      J: 0.536 * P,
      d: 8 * te,
      bf: 7.995 * te
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * Le,
      Iz: 146 * P,
      Iy: 49.1 * P,
      J: 0.871 * P,
      d: 8.25 * te,
      bf: 8.07 * te
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * Le,
      Iz: 184 * P,
      Iy: 60.9 * P,
      J: 1.45 * P,
      d: 8.5 * te,
      bf: 8.11 * te
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * Le,
      Iz: 272 * P,
      Iy: 88.6 * P,
      J: 3.54 * P,
      d: 9 * te,
      bf: 8.28 * te
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * Le,
      Iz: 53.8 * P,
      Iy: 2.18 * P,
      J: 0.0547 * P,
      d: 9.87 * te,
      bf: 3.96 * te
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * Le,
      Iz: 118 * P,
      Iy: 11.4 * P,
      J: 0.239 * P,
      d: 10.17 * te,
      bf: 5.75 * te
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * Le,
      Iz: 171 * P,
      Iy: 36.6 * P,
      J: 0.583 * P,
      d: 9.73 * te,
      bf: 7.96 * te
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * Le,
      Iz: 272 * P,
      Iy: 93.4 * P,
      J: 1.39 * P,
      d: 9.98 * te,
      bf: 10 * te
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * Le,
      Iz: 394 * P,
      Iy: 134 * P,
      J: 3.56 * P,
      d: 10.4 * te,
      bf: 10.13 * te
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * Le,
      Iz: 623 * P,
      Iy: 207 * P,
      J: 10.9 * P,
      d: 11.1 * te,
      bf: 10.34 * te
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * Le,
      Iz: 88.6 * P,
      Iy: 2.36 * P,
      J: 0.0704 * P,
      d: 11.91 * te,
      bf: 3.97 * te
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * Le,
      Iz: 156 * P,
      Iy: 4.66 * P,
      J: 0.293 * P,
      d: 12.31 * te,
      bf: 4.03 * te
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * Le,
      Iz: 204 * P,
      Iy: 17.3 * P,
      J: 0.3 * P,
      d: 12.22 * te,
      bf: 6.49 * te
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * Le,
      Iz: 310 * P,
      Iy: 44.1 * P,
      J: 0.906 * P,
      d: 11.94 * te,
      bf: 8.01 * te
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * Le,
      Iz: 425 * P,
      Iy: 95.8 * P,
      J: 1.58 * P,
      d: 12.06 * te,
      bf: 9.99 * te
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * Le,
      Iz: 597 * P,
      Iy: 195 * P,
      J: 4.05 * P,
      d: 12.25 * te,
      bf: 12.04 * te
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * Le,
      Iz: 833 * P,
      Iy: 270 * P,
      J: 8.44 * P,
      d: 12.71 * te,
      bf: 12.16 * te
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * Le,
      Iz: 1070 * P,
      Iy: 345 * P,
      J: 16 * P,
      d: 13.12 * te,
      bf: 12.32 * te
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * Le,
      Iz: 199 * P,
      Iy: 7 * P,
      J: 0.208 * P,
      d: 13.74 * te,
      bf: 5 * te
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * Le,
      Iz: 291 * P,
      Iy: 19.6 * P,
      J: 0.38 * P,
      d: 13.84 * te,
      bf: 6.73 * te
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * Le,
      Iz: 385 * P,
      Iy: 26.7 * P,
      J: 0.798 * P,
      d: 14.1 * te,
      bf: 6.77 * te
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * Le,
      Iz: 485 * P,
      Iy: 51.4 * P,
      J: 1.45 * P,
      d: 13.79 * te,
      bf: 8.03 * te
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * Le,
      Iz: 640 * P,
      Iy: 107 * P,
      J: 2.19 * P,
      d: 13.89 * te,
      bf: 9.99 * te
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * Le,
      Iz: 882 * P,
      Iy: 148 * P,
      J: 5.07 * P,
      d: 14.31 * te,
      bf: 10.13 * te
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * Le,
      Iz: 1240 * P,
      Iy: 447 * P,
      J: 7.12 * P,
      d: 14.32 * te,
      bf: 14.61 * te
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * Le,
      Iz: 1530 * P,
      Iy: 548 * P,
      J: 12.3 * P,
      d: 14.66 * te,
      bf: 14.73 * te
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * Le,
      Iz: 2140 * P,
      Iy: 838 * P,
      J: 23.7 * P,
      d: 15.22 * te,
      bf: 15.65 * te
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * Le,
      Iz: 301 * P,
      Iy: 9.59 * P,
      J: 0.262 * P,
      d: 15.69 * te,
      bf: 5.5 * te
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * Le,
      Iz: 448 * P,
      Iy: 24.5 * P,
      J: 0.545 * P,
      d: 15.86 * te,
      bf: 6.99 * te
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * Le,
      Iz: 659 * P,
      Iy: 37.2 * P,
      J: 1.52 * P,
      d: 16.26 * te,
      bf: 7.07 * te
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * Le,
      Iz: 954 * P,
      Iy: 119 * P,
      J: 2.39 * P,
      d: 16.33 * te,
      bf: 10.24 * te
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * Le,
      Iz: 1300 * P,
      Iy: 163 * P,
      J: 5.45 * P,
      d: 16.75 * te,
      bf: 10.37 * te
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * Le,
      Iz: 510 * P,
      Iy: 15.3 * P,
      J: 0.506 * P,
      d: 17.7 * te,
      bf: 6 * te
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * Le,
      Iz: 800 * P,
      Iy: 40.1 * P,
      J: 1.24 * P,
      d: 17.99 * te,
      bf: 7.5 * te
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * Le,
      Iz: 1170 * P,
      Iy: 60.3 * P,
      J: 3.49 * P,
      d: 18.47 * te,
      bf: 7.64 * te
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * Le,
      Iz: 1750 * P,
      Iy: 201 * P,
      J: 5.86 * P,
      d: 18.59 * te,
      bf: 11.15 * te
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * Le,
      Iz: 843 * P,
      Iy: 20.7 * P,
      J: 0.77 * P,
      d: 20.66 * te,
      bf: 6.5 * te
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * Le,
      Iz: 1330 * P,
      Iy: 57.5 * P,
      J: 1.83 * P,
      d: 20.99 * te,
      bf: 8.24 * te
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * Le,
      Iz: 1830 * P,
      Iy: 81.4 * P,
      J: 4.34 * P,
      d: 21.43 * te,
      bf: 8.36 * te
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * Le,
      Iz: 2670 * P,
      Iy: 274 * P,
      J: 6.83 * P,
      d: 21.51 * te,
      bf: 12.34 * te
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * Le,
      Iz: 1350 * P,
      Iy: 29.1 * P,
      J: 1.18 * P,
      d: 23.57 * te,
      bf: 7.01 * te
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * Le,
      Iz: 2100 * P,
      Iy: 82.5 * P,
      J: 2.68 * P,
      d: 23.92 * te,
      bf: 8.99 * te
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * Le,
      Iz: 3100 * P,
      Iy: 259 * P,
      J: 4.72 * P,
      d: 24.06 * te,
      bf: 12.75 * te
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * Le,
      Iz: 4020 * P,
      Iy: 340 * P,
      J: 9.5 * P,
      d: 24.48 * te,
      bf: 12.86 * te
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * Le,
      Iz: 4580 * P,
      Iy: 391 * P,
      J: 12.6 * P,
      d: 24.74 * te,
      bf: 12.9 * te
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * Le,
      Iz: 5680 * P,
      Iy: 479 * P,
      J: 21.2 * P,
      d: 25.24 * te,
      bf: 12.9 * te
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * Le,
      Iz: 2850 * P,
      Iy: 106 * P,
      J: 2.81 * P,
      d: 26.71 * te,
      bf: 9.96 * te
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * Le,
      Iz: 4090 * P,
      Iy: 159 * P,
      J: 6.77 * P,
      d: 27.29 * te,
      bf: 10.07 * te
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * Le,
      Iz: 3610 * P,
      Iy: 115 * P,
      J: 3.06 * P,
      d: 29.53 * te,
      bf: 10.4 * te
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * Le,
      Iz: 4930 * P,
      Iy: 164 * P,
      J: 6.43 * P,
      d: 30.01 * te,
      bf: 10.5 * te
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * Le,
      Iz: 5900 * P,
      Iy: 187 * P,
      J: 5.3 * P,
      d: 32.86 * te,
      bf: 11.48 * te
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * Le,
      Iz: 7800 * P,
      Iy: 225 * P,
      J: 7 * P,
      d: 35.55 * te,
      bf: 11.95 * te
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * Le,
      Iz: 8.22 * P,
      Iy: 8.22 * P,
      J: 13.4 * P,
      d: 4 * te,
      bf: 4 * te
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * Le,
      Iz: 10.7 * P,
      Iy: 10.7 * P,
      J: 17.9 * P,
      d: 4 * te,
      bf: 4 * te
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * Le,
      Iz: 12.3 * P,
      Iy: 12.3 * P,
      J: 21 * P,
      d: 4 * te,
      bf: 4 * te
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * Le,
      Iz: 30.3 * P,
      Iy: 30.3 * P,
      J: 48.3 * P,
      d: 6 * te,
      bf: 6 * te
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * Le,
      Iz: 41.1 * P,
      Iy: 41.1 * P,
      J: 66.9 * P,
      d: 6 * te,
      bf: 6 * te
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * Le,
      Iz: 49.6 * P,
      Iy: 49.6 * P,
      J: 82.2 * P,
      d: 6 * te,
      bf: 6 * te
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * Le,
      Iz: 70.7 * P,
      Iy: 70.7 * P,
      J: 112 * P,
      d: 8 * te,
      bf: 8 * te
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * Le,
      Iz: 98 * P,
      Iy: 98 * P,
      J: 158 * P,
      d: 8 * te,
      bf: 8 * te
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * Le,
      Iz: 122 * P,
      Iy: 122 * P,
      J: 199 * P,
      d: 8 * te,
      bf: 8 * te
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * Le,
      Iz: 202 * P,
      Iy: 202 * P,
      J: 323 * P,
      d: 10 * te,
      bf: 10 * te
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * Le,
      Iz: 254 * P,
      Iy: 254 * P,
      J: 412 * P,
      d: 10 * te,
      bf: 10 * te
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * Le,
      Iz: 355 * P,
      Iy: 355 * P,
      J: 564 * P,
      d: 12 * te,
      bf: 12 * te
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * Le,
      Iz: 452 * P,
      Iy: 452 * P,
      J: 724 * P,
      d: 12 * te,
      bf: 12 * te
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * Le,
      Iz: 18 * P,
      Iy: 9.58 * P,
      J: 22.6 * P,
      d: 6 * te,
      bf: 4 * te
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * Le,
      Iz: 23.8 * P,
      Iy: 12.3 * P,
      J: 30.3 * P,
      d: 6 * te,
      bf: 4 * te
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * Le,
      Iz: 33.6 * P,
      Iy: 11.8 * P,
      J: 33 * P,
      d: 8 * te,
      bf: 4 * te
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * Le,
      Iz: 45.1 * P,
      Iy: 15 * P,
      J: 44.5 * P,
      d: 8 * te,
      bf: 4 * te
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * Le,
      Iz: 46.1 * P,
      Iy: 28.2 * P,
      J: 61.3 * P,
      d: 8 * te,
      bf: 6 * te
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * Le,
      Iz: 63 * P,
      Iy: 37.5 * P,
      J: 84.6 * P,
      d: 8 * te,
      bf: 6 * te
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * Le,
      Iz: 103 * P,
      Iy: 47.1 * P,
      J: 115 * P,
      d: 10 * te,
      bf: 6 * te
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * Le,
      Iz: 196 * P,
      Iy: 102 * P,
      J: 249 * P,
      d: 12 * te,
      bf: 8 * te
    }
  ];
  function mn() {
    const e = {};
    return Io.forEach((m, F) => {
      m.type === "W" && (e[m.name] = F);
    }), e;
  }
  function bn() {
    const e = {};
    return Io.forEach((m, F) => {
      m.type === "HSS" && (e[m.name] = F);
    }), e;
  }
  function fl(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: m, elements: F, elementInputs: $, nodeInputs: Y, deformOutputs: D } = e, J = m.length * 6, j = F.length, N = F.filter((ce) => ce.length === 2).length, G = F.filter((ce) => ce.length >= 3).length, ve = document.createElement("div");
    ve.className = "rpt-overlay";
    let k = "";
    k += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', k += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", k += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', k += '<hr class="rpt-sep"/>', k += "<h2>1. Input Data</h2>", k += '<table class="rpt-info"><tbody>', k += `<tr><td>Number of nodes</td><td class="val">${m.length}</td></tr>`, k += `<tr><td>Number of elements</td><td class="val">${j} (${N} frames, ${G} shells)</td></tr>`, k += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', k += `<tr><td>Total DOFs</td><td class="val">${J}</td></tr>`, k += "</tbody></table>", k += "<h3>1.1 Node Coordinates</h3>", k += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', m.forEach((ce, ne) => {
      k += `<tr><td>${ne}</td><td>${at(ce[0])}</td><td>${at(ce[1])}</td><td>${at(ce[2])}</td></tr>`;
    }), k += "</tbody></table>", k += "<h3>1.2 Element Connectivity</h3>", k += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', F.forEach((ce, ne) => {
      var _a2, _b2, _c2, _d2;
      const O = ce.length === 2, _ = ce.map(($e) => m[$e]), U = O ? Ro(ho(_[1], _[0])) : 0, ee = ((_a2 = $.elasticities) == null ? void 0 : _a2.get(ne)) ?? 0, Ie = ((_b2 = $.areas) == null ? void 0 : _b2.get(ne)) ?? 0, Ae = ((_c2 = $.momentsOfInertiaZ) == null ? void 0 : _c2.get(ne)) ?? 0, Be = ((_d2 = $.momentsOfInertiaY) == null ? void 0 : _d2.get(ne)) ?? 0;
      k += `<tr><td>${ne}</td><td>${O ? "Frame" : "Shell"}</td><td>${ce.join(" \u2192 ")}</td>`, k += `<td>${at(U)}</td><td>${at(ee)}</td><td>${at(Ie)}</td><td>${at(Ae)}</td><td>${at(Be)}</td></tr>`;
    }), k += "</tbody></table>", k += "<h2>2. Element Formulation</h2>", N > 0 && (k += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", k += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", k += "<h4>2.1.1 Shape Functions</h4>", k += "<p><b>Axial</b> (linear interpolation):</p>", k += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', k += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", k += '<table class="rpt-eq-table"><tbody>', k += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', k += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', k += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', k += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', k += "</tbody></table>", k += ml(), k += "<p><b>Torsion</b> (linear): same as axial.</p>", k += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", k += "<p>The B matrix relates nodal displacements to internal strains:</p>", k += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', k += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', k += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', k += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', k += "<h4>2.1.3 Constitutive Relations D</h4>", k += '<table class="rpt-eq-table"><tbody>', k += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', k += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', k += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', k += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', k += "</tbody></table>", k += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", k += "<p>Obtained by analytical integration:</p>", k += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', k += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", k += '<div class="rpt-eq-small">', k += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", k += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", k += "</div>", k += "<h4>2.1.5 Transformation Matrix T</h4>", k += "<p>Direction cosines of element axis:</p>", k += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', k += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', k += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', k += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", k += "<h4>2.1.6 Global Stiffness Matrix</h4>", k += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), k += "<h2>3. Numerical Results per Element</h2>", k += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let ce = 0; ce < j; ce++) {
      const ne = F[ce], O = ne.map((ft) => m[ft]);
      if (!(ne.length === 2)) continue;
      const U = Ro(ho(O[1], O[0])), ee = ((_a = $.elasticities) == null ? void 0 : _a.get(ce)) ?? 0, Ie = ((_b = $.areas) == null ? void 0 : _b.get(ce)) ?? 0, Ae = ((_c = $.momentsOfInertiaZ) == null ? void 0 : _c.get(ce)) ?? 0, Be = ((_d = $.momentsOfInertiaY) == null ? void 0 : _d.get(ce)) ?? 0, $e = ((_e = $.shearModuli) == null ? void 0 : _e.get(ce)) ?? 0, He = ((_f = $.torsionalConstants) == null ? void 0 : _f.get(ce)) ?? 0;
      let je = null, me = null, Me = null;
      try {
        je = vn(O, $, ce), me = yn(O), Me = so(os(me), so(je, me));
      } catch {
        continue;
      }
      const Fe = ho(O[1], O[0]), Xe = Fe[0] / U, Ke = Fe[1] / U, Ue = Fe[2] / U;
      k += '<div class="rpt-elem-block">', k += `<h3 class="rpt-elem-title" data-toggle="elem${ce}">\u25B6 Element ${ce} \u2014 Nodes ${ne[0]} \u2192 ${ne[1]}, L = ${at(U)}</h3>`, k += `<div id="rpt-elem${ce}" class="rpt-elem-body" style="display:none">`, k += "<h4>Properties (numerical substitution)</h4>", k += '<div class="rpt-eq-small">', k += `E = ${at(ee)} &nbsp;&nbsp; A = ${at(Ie)} &nbsp;&nbsp; I<sub>z</sub> = ${at(Ae)} &nbsp;&nbsp; I<sub>y</sub> = ${at(Be)} &nbsp;&nbsp; G = ${at($e)} &nbsp;&nbsp; J = ${at(He)}<br/>`, k += `EA/L = ${at(ee)}\xB7${at(Ie)}/${at(U)} = <b>${at(ee * Ie / U)}</b><br/>`, k += `12EI<sub>z</sub>/L\xB3 = 12\xB7${at(ee)}\xB7${at(Ae)}/${at(U)}\xB3 = <b>${at(12 * ee * Ae / U ** 3)}</b><br/>`, k += `12EI<sub>y</sub>/L\xB3 = 12\xB7${at(ee)}\xB7${at(Be)}/${at(U)}\xB3 = <b>${at(12 * ee * Be / U ** 3)}</b><br/>`, k += `GJ/L = ${at($e)}\xB7${at(He)}/${at(U)} = <b>${at($e * He / U)}</b>`, k += "</div>", k += "<h4>Direction cosines</h4>", k += `<div class="rpt-eq-small">l = ${gn(Xe)}, m = ${gn(Ke)}, n = ${gn(Ue)}, D = ${gn(Math.sqrt(Xe ** 2 + Ke ** 2))}</div>`, k += "<h4>K<sub>local</sub> (12\xD712)</h4>", k += Xn(je, 12), k += "<h4>T \u2014 Transformation (12\xD712)</h4>", k += Xn(me, 12), k += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", k += Xn(Me, 12), k += "<h4>Assembly</h4>", k += `<div class="rpt-eq-small">Global DOFs: node ${ne[0]} \u2192 [${ne[0] * 6}..${ne[0] * 6 + 5}], node ${ne[1]} \u2192 [${ne[1] * 6}..${ne[1] * 6 + 5}]</div>`, k += "</div></div>";
    }
    k += "<h2>4. Global Assembly</h2>", k += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${j - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, k += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", k += bl(F, m.length), k += "<h2>5. Boundary Conditions</h2>";
    const re = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], xe = [];
    if (k += "<h3>5.1 Supports (fixed DOFs)</h3>", Y.supports && Y.supports.size > 0) {
      k += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ce of re) k += `<th>${ce}</th>`;
      k += "</tr></thead><tbody>", Y.supports.forEach((ce, ne) => {
        k += `<tr><td>${ne}</td>`, ce.forEach((O, _) => {
          O && xe.push(ne * 6 + _), k += `<td class="${O ? "fixed" : ""}">${O ? "Fixed" : "Free"}</td>`;
        }), k += "</tr>";
      }), k += "</tbody></table>";
    }
    if (k += `<div class="rpt-eq-small">Fixed DOFs: [${xe.join(", ")}] \u2192 ${xe.length} constraints<br/>`, k += `Free DOFs: ${J} \u2212 ${xe.length} = <b>${J - xe.length}</b></div>`, k += "<h3>5.2 Applied Loads</h3>", Y.loads && Y.loads.size > 0) {
      k += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const ce = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const ne of ce) k += `<th>${ne}</th>`;
      k += "</tr></thead><tbody>", Y.loads.forEach((ne, O) => {
        k += `<tr><td>${O}</td>`, ne.forEach((_) => {
          const U = Math.abs(_) > 1e-10;
          k += `<td class="${U ? "nz" : ""}">${U ? at(_) : "0"}</td>`;
        }), k += "</tr>";
      }), k += "</tbody></table>";
    }
    if (k += "<h2>6. Solution</h2>", k += "<p>After removing fixed DOFs, the reduced system is:</p>", k += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', k += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", k += "<h3>6.1 Nodal Displacements</h3>", D == null ? void 0 : D.deformations) {
      k += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ce of re) k += `<th>${ce}</th>`;
      k += "</tr></thead><tbody>", D.deformations.forEach((ce, ne) => {
        k += `<tr><td>${ne}</td>`, ce.forEach((O) => {
          const _ = Math.abs(O) > 1e-10;
          k += `<td class="${_ ? "nz" : ""}">${at(O, 6)}</td>`;
        }), k += "</tr>";
      }), k += "</tbody></table>";
    }
    if (k += "<h3>6.2 Reactions</h3>", k += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', D == null ? void 0 : D.reactions) {
      k += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ce of re) k += `<th>${ce}</th>`;
      k += "</tr></thead><tbody>", D.reactions.forEach((ce, ne) => {
        k += `<tr><td>${ne}</td>`, ce.forEach((O) => {
          const _ = Math.abs(O) > 1e-10;
          k += `<td class="${_ ? "nz-react" : ""}">${_ ? at(O, 4) : "0"}</td>`;
        }), k += "</tr>";
      }), k += "</tbody></table>";
    }
    if (k += "<h2>7. Internal Forces</h2>", k += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", k += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', k += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', D == null ? void 0 : D.deformations) {
      const ce = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      k += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const ne of ce) k += `<th>${ne}<sub>i</sub></th>`;
      for (const ne of ce) k += `<th>${ne}<sub>j</sub></th>`;
      k += "</tr></thead><tbody>";
      for (let ne = 0; ne < j; ne++) {
        const O = F[ne];
        if (O.length !== 2) continue;
        const _ = O.map((U) => m[U]);
        try {
          const U = vn(_, $, ne), ee = yn(_), Ie = [];
          for (const $e of O) {
            const He = ((_g = D.deformations) == null ? void 0 : _g.get($e)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Ie.push(...He);
          }
          const Ae = so(ee, Ie), Be = so(U, Ae);
          k += `<tr><td>${ne}</td><td>${O.join("\u2192")}</td>`;
          for (let $e = 0; $e < 12; $e++) {
            const He = Math.abs(Be[$e]) > 1e-10;
            k += `<td class="${He ? "nz" : ""}">${at(Be[$e], 2)}</td>`;
          }
          k += "</tr>";
        } catch {
        }
      }
      k += "</tbody></table>";
    }
    const be = `
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
    return ve.innerHTML = be + k, (_h = ve.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => ve.remove()), ve.querySelectorAll("[data-toggle]").forEach((ce) => {
      ce.addEventListener("click", () => {
        const ne = ce.dataset.toggle, O = ve.querySelector(`#rpt-${ne}`);
        if (O) {
          const _ = O.style.display !== "none";
          O.style.display = _ ? "none" : "", ce.textContent = ce.textContent.replace(/^[▼▶]/, _ ? "\u25B6" : "\u25BC");
        }
      });
    }), ve;
  }
  function at(e, m = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(m) : e.toFixed(m);
  }
  function gn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function Xn(e, m) {
    var _a;
    const F = Math.min(m, 12);
    let $ = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let Y = 0; Y < F; Y++) {
      $ += "<tr>";
      for (let D = 0; D < F; D++) {
        const J = ((_a = e[Y]) == null ? void 0 : _a[D]) ?? 0, j = Math.abs(J) < 1e-10;
        $ += `<td class="${j ? "z" : ""} ${Y === D && !j ? "diag" : ""}">${j ? "0" : ul(J)}</td>`;
      }
      $ += "</tr>";
    }
    return $ += "</table>", m > F && ($ += `<div style="color:#888;font-size:9pt">(showing ${F}\xD7${F} of ${m}\xD7${m})</div>`), $ += "</div>", $;
  }
  function ul(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function ml() {
    const J = [
      {
        name: "H\u2081",
        color: "#c44",
        fn: (N) => 1 - 3 * N ** 2 + 2 * N ** 3
      },
      {
        name: "H\u2082/L",
        color: "#2a9d8f",
        fn: (N) => N * (1 - N) ** 2
      },
      {
        name: "H\u2083",
        color: "#264653",
        fn: (N) => 3 * N ** 2 - 2 * N ** 3
      },
      {
        name: "H\u2084/L",
        color: "#e9c46a",
        fn: (N) => N ** 2 * (N - 1)
      }
    ];
    let j = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    j += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, j += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', j += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, j += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, j += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const N of J) {
      let G = "";
      for (let xe = 0; xe <= 80; xe++) {
        const be = xe / 80, ce = 30 + be * 540, ne = 180 / 2 - N.fn(be) * 60;
        G += (xe === 0 ? "M" : "L") + `${ce.toFixed(1)},${ne.toFixed(1)}`;
      }
      j += `<path d="${G}" fill="none" stroke="${N.color}" stroke-width="2.5"/>`;
      const ve = 0.75, k = 30 + ve * 540 + 8, re = 180 / 2 - N.fn(ve) * 60 - 6;
      j += `<text x="${k}" y="${re}" fill="${N.color}" font-size="11" font-weight="bold" font-family="sans-serif">${N.name}</text>`;
    }
    return j += "</svg>", j;
  }
  function bl(e, m) {
    const F = m * 6, $ = Math.min(F, 30);
    let Y = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    Y += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', Y += "<tr><td></td>";
    for (let J = 0; J < $; J++) Y += `<td style="color:#003366;font-weight:bold;font-size:7px">${J}</td>`;
    Y += "</tr>";
    const D = Array.from({
      length: $
    }, () => Array($).fill(0));
    for (let J = 0; J < e.length; J++) {
      const j = e[J].map((N) => N * 6);
      for (const N of j) for (const G of j) for (let ve = 0; ve < 6; ve++) for (let k = 0; k < 6; k++) {
        const re = N + ve, xe = G + k;
        re < $ && xe < $ && D[re][xe]++;
      }
    }
    for (let J = 0; J < $; J++) {
      Y += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${J}</td>`;
      for (let j = 0; j < $; j++) {
        const N = D[J][j], G = N === 0 ? "#fff" : N === 1 ? "#e8f0fe" : N === 2 ? "#c6dcf5" : "#a0c4e8", ve = N === 0 ? "" : N.toString();
        Y += `<td style="background:${G};color:#003366">${ve}</td>`;
      }
      Y += "</tr>";
    }
    return Y += "</table></div>", F > $ && (Y += `<div style="color:#888;font-size:9pt">(showing ${$}\xD7${$} of ${F}\xD7${F})</div>`), Y;
  }
  let Kn = false;
  function gl(e) {
    if (Kn || window.katex) {
      Kn = true, e();
      return;
    }
    const m = document.createElement("link");
    m.rel = "stylesheet", m.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(m);
    const F = document.createElement("script");
    F.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", F.onload = () => {
      Kn = true, e();
    }, document.head.appendChild(F);
  }
  function oa(e, m = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: m,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function hl(e, m, F, $, Y, D) {
    var _a, _b, _c, _d, _e, _f;
    const J = F[e], j = J.map((me) => m[me]), N = J.length === 2, G = N ? Ro(ho(j[1], j[0])) : 0, ve = ((_a = $.elasticities) == null ? void 0 : _a.get(e)) ?? 0, k = ((_b = $.areas) == null ? void 0 : _b.get(e)) ?? 0, re = ((_c = $.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, xe = ((_d = $.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, be = ((_e = $.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, ce = ((_f = $.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let ne = null, O = null, _ = null;
    try {
      ne = vn(j, $, e), O = yn(j), _ = so(os(O), so(ne, O));
    } catch {
    }
    const U = N ? ho(j[1], j[0]) : [
      0,
      0,
      0
    ], ee = G > 0 ? U[0] / G : 0, Ie = G > 0 ? U[1] / G : 0, Ae = G > 0 ? U[2] / G : 0, Be = Math.sqrt(ee ** 2 + Ie ** 2), $e = [];
    if ((Y == null ? void 0 : Y.deformations) && N) for (const me of J) {
      const Me = Y.deformations.get(me) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      $e.push(...Me);
    }
    let He = [], je = [];
    if ($e.length === 12 && O && ne) {
      try {
        He = so(O, $e);
      } catch {
        He = Array(12).fill(0);
      }
      try {
        je = so(ne, He);
      } catch {
        je = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: J,
      elmNodes: j,
      isFrame: N,
      L: G,
      E: ve,
      A: k,
      Iz: re,
      Iy: xe,
      G: be,
      J: ce,
      kLocal: ne,
      T: O,
      kGlobal: _,
      l: ee,
      m: Ie,
      n: Ae,
      D: Be,
      uGlobal: $e,
      uLocal: He,
      fLocal: je,
      dOut: Y,
      aOut: D,
      totalNodes: m.length
    };
  }
  function xl(e, m, F, $, Y, D) {
    var _a, _b;
    const J = hl(e, m, F, $, Y, D), j = document.createElement("div");
    return j.className = "er-panel", j.innerHTML = Ml + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${J.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${J.elem.join(" \u2192 ")} \u2014 L = ${Ve(J.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${vl(J)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${na(J)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${yl(J)}</div>
  `, j.querySelectorAll(".er-tab").forEach((N) => {
      N.addEventListener("click", () => {
        j.querySelectorAll(".er-tab").forEach((ve) => ve.classList.remove("active")), N.classList.add("active");
        const G = N.dataset.tab;
        j.querySelectorAll(".er-body").forEach((ve) => ve.style.display = "none"), j.querySelector(`#er-body-${G}`).style.display = "";
      });
    }), (_a = j.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => j.remove()), (_b = j.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const N = j.classList.toggle("er-fullscreen-mode"), G = j.querySelector("#er-fullscreen");
      G && (G.textContent = N ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const N = j.querySelector("#er-sf-canvas");
      N && Zn(N);
      const G = j.querySelector("#er-sf-canvas-math");
      G && Zn(G);
    }, 50), gl(() => {
      const N = j.querySelector("#er-body-math");
      N && (N.innerHTML = na(J)), setTimeout(() => {
        const G = j.querySelector("#er-sf-canvas-math");
        G && Zn(G);
      }, 50), j.querySelectorAll(".er-deriv-header").forEach((G) => {
        G.addEventListener("click", () => {
          const ve = G.dataset.toggle, k = j.querySelector(`#er-${ve}`);
          k && (k.style.display = k.style.display === "none" ? "" : "none");
        });
      });
    }), j;
  }
  function vl(e) {
    let m = "";
    if (m += '<div class="er-section-title">1. Propiedades</div>', m += '<table class="er-props">', m += `<tr><td>E</td><td>${Ve(e.E)}</td><td>A</td><td>${Ve(e.A)}</td></tr>`, m += `<tr><td>I<sub>z</sub></td><td>${Ve(e.Iz)}</td><td>I<sub>y</sub></td><td>${Ve(e.Iy)}</td></tr>`, m += `<tr><td>G</td><td>${Ve(e.G)}</td><td>J</td><td>${Ve(e.J)}</td></tr>`, m += "</table>", e.kLocal && (m += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, m += an(e.kLocal)), e.T && (m += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', m += an(e.T)), e.kGlobal && (m += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', m += an(e.kGlobal)), m += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const F = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let $ = 0; $ < e.elem.length; $++) {
        m += `<div class="er-sub">Nodo ${e.elem[$]}: `;
        for (let Y = 0; Y < 6; Y++) {
          const D = e.uGlobal[$ * 6 + Y];
          m += `${F[Y]}=<span class="${Math.abs(D) > 1e-10 ? "nz" : ""}">${Ve(D, 6)}</span> `;
        }
        m += "</div>";
      }
    } else m += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (m += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((F) => F !== 0)) {
      const F = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      m += '<table class="er-forces"><tr><th></th>';
      for (const $ of F) m += `<th>${$}</th>`;
      m += "</tr>", m += "<tr><td>Nodo i</td>";
      for (let $ = 0; $ < 6; $++) m += `<td class="${Math.abs(e.fLocal[$]) > 1e-10 ? "nz" : ""}">${Ve(e.fLocal[$], 3)}</td>`;
      m += "</tr><tr><td>Nodo j</td>";
      for (let $ = 6; $ < 12; $++) m += `<td class="${Math.abs(e.fLocal[$]) > 1e-10 ? "nz" : ""}">${Ve(e.fLocal[$], 3)}</td>`;
      m += "</tr></table>";
    } else m += '<div class="er-sub">Sin an\xE1lisis</div>';
    return m;
  }
  function na(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let m = "";
    const F = (ve) => oa(ve), $ = (ve) => oa(ve, true);
    m += '<div class="er-section-title">1. Geometria del elemento</div>', m += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", m += `<div class="er-eq">${$("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, m += '<div class="er-eq-num">', m += `${F("\\text{Nodo } i")} = (${e.elmNodes[0].map((ve) => Ve(ve)).join(", ")})<br/>`, m += `${F("\\text{Nodo } j")} = (${e.elmNodes[1].map((ve) => Ve(ve)).join(", ")})<br/>`, m += `${$(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Ve(e.L)}}`)}`, m += "</div>", m += '<div class="er-section-title">2. Funciones de forma</div>', m += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", m += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', m += `<div class="er-eq">${$("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, m += "<p>Primera derivada:</p>", m += `<div class="er-eq">${$("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, m += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', m += `<p>Las funciones de Hermite garantizan continuidad ${F("C^1")} (desplazamiento y pendiente continuos):</p>`, m += `<div class="er-eq">${$("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, m += `<div class="er-eq">${$("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, m += `<div class="er-eq">${$("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, m += `<div class="er-eq">${$("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, m += `<div class="er-subsec">Derivadas segunda (curvatura ${F("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, m += `<div class="er-eq">${$("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, m += `<div class="er-eq">${$("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, m += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', m += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', m += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", m += `<div class="er-eq">${$("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, m += '<div class="er-subsec">3.1 Deformacion axial</div>', m += `<div class="er-eq">${$("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, m += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${F("I_z")})</div>`, m += `<div class="er-eq">${$("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, m += `<div class="er-eq">${$("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, m += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${F("I_y")})</div>`, m += `<div class="er-eq">${$("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, m += '<div class="er-subsec">3.4 Torsion</div>', m += `<div class="er-eq">${$("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, m += '<div class="er-section-title">4. Relaciones constitutivas D</div>', m += "<p>Cada modo de deformacion tiene su rigidez material:</p>", m += `<div class="er-eq">${$(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Ve(e.E)} \\times ${Ve(e.A)} = \\mathbf{${Ve(e.E * e.A)}}`)}</div>`, m += `<div class="er-eq">${$(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Ve(e.E)} \\times ${Ve(e.Iz)} = \\mathbf{${Ve(e.E * e.Iz)}}`)}</div>`, m += `<div class="er-eq">${$(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Ve(e.E)} \\times ${Ve(e.Iy)} = \\mathbf{${Ve(e.E * e.Iy)}}`)}</div>`, m += `<div class="er-eq">${$(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Ve(e.G)} \\times ${Ve(e.J)} = \\mathbf{${Ve(e.G * e.J)}}`)}</div>`, m += `<div class="er-section-title">5. Integracion \u2192 ${F("\\mathbf{K}_{local}")}</div>`, m += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", m += `<div class="er-eq er-eq-main">${$("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const Y = e.E * e.A / e.L, D = e.E * e.Iz / e.L ** 3, J = e.E * e.Iy / e.L ** 3, j = e.G * e.J / e.L;
    if (m += '<div class="er-deriv-block">', m += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', m += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', m += "<p><b>Paso 1:</b> Funcion de forma axial</p>", m += `<div class="er-eq">${$("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, m += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", m += `<div class="er-eq">${$("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, m += `<div class="er-eq">${$("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, m += `<p><b>Paso 3:</b> Integracion ${F("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, m += `<div class="er-eq">${$("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, m += `<div class="er-eq">${$("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, m += `<div class="er-eq er-eq-main">${$(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ve(e.E)}\\times${Ve(e.A)}}{${Ve(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, m += `<div class="er-eq">${$(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Ve(Y)}}`)}</div>`, m += "</div></div>", m += '<div class="er-deriv-block">', m += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', m += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', m += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${F("v(\\xi)")}</p>`, m += `<div class="er-eq">${$("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, m += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", m += `<div class="er-eq">${$("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, m += `<div class="er-eq">${$("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, m += `<div class="er-eq">${$("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, m += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${F("v_i \\cdot v_i")})</p>`, m += `<div class="er-eq">${$("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, m += `<p>Expandimos: ${F("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, m += `<div class="er-eq">${$("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, m += `<div class="er-eq er-eq-main">${$(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Ve(e.E)} \\times ${Ve(e.Iz)}}{${Ve(e.L)}^3} = \\mathbf{${Ve(12 * D)}}`)}</div>`, m += "</div></div>", m += '<div class="er-deriv-block">', m += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', m += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', m += `<p>Mismo proceso que axial pero con ${F("\\theta_x")} y ${F("GJ")}:</p>`, m += `<div class="er-eq">${$(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ve(e.G)}\\times${Ve(e.J)}}{${Ve(e.L)}} = \\mathbf{${Ve(j)}}`)}</div>`, m += "</div></div>", m += '<div class="er-deriv-block">', m += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', m += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', m += `<p>Termino cruzado ${F("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, m += `<div class="er-eq">${$("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, m += `<div class="er-eq">${$("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, m += `<div class="er-eq">${$("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, m += `<div class="er-eq er-eq-main">${$(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Ve(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, m += "</div></div>", m += '<div class="er-subsec">Resumen de coeficientes:</div>', m += `<div class="er-eq">${$(`\\frac{EA}{L} = \\mathbf{${Ve(Y)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Ve(12 * D)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Ve(12 * J)}}`)}</div>`, m += `<div class="er-eq">${$(`\\frac{GJ}{L} = \\mathbf{${Ve(j)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Ve(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Ve(4 * e.E * e.Iz / e.L)}}`)}</div>`, m += `<div class="er-eq">${$(`\\frac{6EI_z}{L^2} = \\mathbf{${Ve(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Ve(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (m += `<div class="er-subsec">Resultado: ${F("\\mathbf{K}_{local}")} (12x12)</div>`, m += an(e.kLocal)), m += '<div class="er-section-title">6. Transformacion de coordenadas</div>', m += "<p>Los cosenos directores del eje del elemento:</p>", m += `<div class="er-eq">${$(`l = \\frac{x_j - x_i}{L} = ${hn(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${hn(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${hn(e.n)}`)}</div>`, m += `<div class="er-eq">${$(`D = \\sqrt{l^2 + m^2} = ${hn(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      m += `<p>Caso especial: elemento vertical (${F(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const ve = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      m += `<div class="er-eq">${$(ve)}</div>`;
    } else m += `<div class="er-eq">${$("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    m += `<div class="er-eq er-eq-main">${$("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, m += `<div class="er-section-title">7. ${F("\\mathbf{K}_{global}")} = ${F("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, m += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", m += `<div class="er-eq er-eq-main">${$("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (m += an(e.kGlobal)), m += '<div class="er-section-title">8. Ensamblaje</div>';
    const N = e.elem[0] * 6, G = e.elem[1] * 6;
    if (m += `<div class="er-eq">${$(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${N} \\ldots ${N + 5}]`)}</div>`, m += `<div class="er-eq">${$(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${G} \\ldots ${G + 5}]`)}</div>`, m += `<div class="er-eq">${$("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, m += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', m += `<div class="er-eq">${$("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, m += `<div class="er-eq er-eq-main">${$("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((ve) => ve !== 0)) {
      const ve = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      m += '<table class="er-forces"><tr><th></th>';
      for (const k of ve) m += `<th>${k}</th>`;
      m += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let k = 0; k < 6; k++) m += `<td class="${Math.abs(e.fLocal[k]) > 1e-10 ? "nz" : ""}">${Ve(e.fLocal[k], 3)}</td>`;
      m += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let k = 6; k < 12; k++) m += `<td class="${Math.abs(e.fLocal[k]) > 1e-10 ? "nz" : ""}">${Ve(e.fLocal[k], 3)}</td>`;
      m += "</tr></table>";
    }
    return m;
  }
  function yl(e) {
    let m = "";
    if (m += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, m += '<table class="er-props">', m += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, m += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, m += `<tr><td>Longitud</td><td><b>${Ve(e.L)}</b></td></tr>`, m += `<tr><td>E</td><td>${Ve(e.E)}</td></tr>`, m += `<tr><td>A</td><td>${Ve(e.A)}</td></tr>`, m += "</table>", e.uGlobal.length > 0) {
      m += '<div class="er-section-title">Desplazamientos</div>';
      const F = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      m += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const $ of F) m += `<th>${$}</th>`;
      m += "</tr>";
      for (let $ = 0; $ < e.elem.length; $++) {
        m += `<tr><td>${e.elem[$]}</td>`;
        for (let Y = 0; Y < 6; Y++) {
          const D = e.uGlobal[$ * 6 + Y];
          m += `<td class="${Math.abs(D) > 1e-10 ? "nz" : ""}">${Ve(D, 6)}</td>`;
        }
        m += "</tr>";
      }
      m += "</table>";
    }
    if (e.fLocal.length > 0 && e.fLocal.some((F) => F !== 0)) {
      m += '<div class="er-section-title">Fuerzas internas</div>';
      const F = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      m += '<table class="er-forces"><tr><th></th>';
      for (const $ of F) m += `<th>${$}</th>`;
      m += "</tr><tr><td>Nodo i</td>";
      for (let $ = 0; $ < 6; $++) m += `<td class="${Math.abs(e.fLocal[$]) > 1e-10 ? "nz" : ""}">${Ve(e.fLocal[$], 3)}</td>`;
      m += "</tr><tr><td>Nodo j</td>";
      for (let $ = 6; $ < 12; $++) m += `<td class="${Math.abs(e.fLocal[$]) > 1e-10 ? "nz" : ""}">${Ve(e.fLocal[$], 3)}</td>`;
      m += "</tr></table>";
    }
    return m;
  }
  function Ve(e, m = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(m) : e.toFixed(m);
  }
  function hn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function an(e) {
    var _a;
    const m = e.length, F = Math.min(m, 12);
    let $ = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let Y = 0; Y < F; Y++) {
      $ += "<tr>";
      for (let D = 0; D < F; D++) {
        const J = ((_a = e[Y]) == null ? void 0 : _a[D]) ?? 0, j = Math.abs(J) < 1e-10;
        $ += `<td class="${j ? "z" : ""} ${Y === D && !j ? "diag" : ""}">${j ? "0" : $l(J)}</td>`;
      }
      $ += "</tr>";
    }
    return $ += "</table>", m > F && ($ += `<div style="color:var(--fem-label);font-size:9px">(${F}\xD7${F} de ${m}\xD7${m})</div>`), $ += "</div>", $;
  }
  function $l(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function Zn(e) {
    const m = e.getContext("2d");
    if (!m) return;
    const F = e.width, $ = e.height, Y = 30, D = F - 2 * Y, J = ($ - 3 * Y) / 2;
    m.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", m.fillRect(0, 0, F, $);
    const j = (N, G, ve) => {
      m.strokeStyle = "#333", m.lineWidth = 1, m.strokeRect(Y, N, D, J), m.strokeStyle = "#444", m.beginPath(), m.moveTo(Y, N + J / 2), m.lineTo(Y + D, N + J / 2), m.stroke(), m.fillStyle = "#888", m.font = "11px sans-serif", m.fillText(G, Y + 4, N + 14);
      for (const re of ve) {
        m.strokeStyle = re.color, m.lineWidth = 2.5, m.beginPath();
        for (let xe = 0; xe <= 100; xe++) {
          const be = xe / 100, ce = Y + be * D, ne = N + J / 2 - re.fn(be) * (J / 2 * 0.85);
          xe === 0 ? m.moveTo(ce, ne) : m.lineTo(ce, ne);
        }
        m.stroke();
      }
      let k = Y + D - 90;
      for (const re of ve) m.fillStyle = re.color, m.font = "bold 10px sans-serif", m.fillText(re.label, k, N + J - 6), k += 36;
      m.fillStyle = "#666", m.font = "9px monospace", m.fillText("0", Y, N + J + 12), m.fillText("1", Y + D - 6, N + J + 12), m.fillText("\u03BE", Y + D / 2, N + J + 12);
    };
    j(Y, "Axial (lineal)", [
      {
        fn: (N) => 1 - N,
        color: "#ff6600",
        label: "N\u2081"
      },
      {
        fn: (N) => N,
        color: "#00ccff",
        label: "N\u2082"
      }
    ]), j(Y + J + Y, "Flexi\xF3n (Hermite c\xFAbicos)", [
      {
        fn: (N) => 1 - 3 * N * N + 2 * N * N * N,
        color: "#ff6600",
        label: "H\u2081"
      },
      {
        fn: (N) => N * (1 - N) * (1 - N),
        color: "#ffcc00",
        label: "H\u2082"
      },
      {
        fn: (N) => 3 * N * N - 2 * N * N * N,
        color: "#00ccff",
        label: "H\u2083"
      },
      {
        fn: (N) => N * N * (N - 1),
        color: "#00ff66",
        label: "H\u2084"
      }
    ]);
  }
  const Ml = `<style>
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
</style>`, nn = [
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
  let Mn = false, Po = null, lo = null, Dt = null, Lt = null;
  function wl() {
    Lt = document.createElement("button"), Lt.id = "help-tour-btn", Lt.innerHTML = "?", Lt.title = "Ayuda interactiva \u2014 Tour guiado", Lt.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #0066cc, #0099ff);
    color: white; border: 3px solid rgba(255,255,255,0.3);
    font-size: 24px; font-weight: bold; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,102,204,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: 'Arial Nova', sans-serif;
    animation: helpPulse 2s infinite;
  `, Lt.addEventListener("mouseenter", () => {
      Lt.style.transform = "scale(1.15)", Lt.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), Lt.addEventListener("mouseleave", () => {
      Lt.style.transform = "scale(1)", Lt.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), Lt.addEventListener("click", () => {
      Mn ? ns() : Sl();
    });
    const e = document.createElement("style");
    return e.textContent = `
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
  `, document.head.appendChild(e), Lt;
  }
  function Sl() {
    Mn = true, Lt && (Lt.innerHTML = "\u2715", Lt.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", Lt.style.animation = "none"), Po = document.createElement("div"), Po.id = "tour-overlay", Po.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(Po), Uo(0);
  }
  function ns() {
    Mn = false, Lt && (Lt.innerHTML = "?", Lt.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", Lt.style.animation = "helpPulse 2s infinite"), lo && (lo.remove(), lo = null), Dt && (Dt.remove(), Dt = null), Po && (Po.remove(), Po = null);
  }
  function Uo(e) {
    var _a, _b;
    if (e >= nn.length) {
      El();
      return;
    }
    const m = nn[e], F = document.querySelector(m.selector);
    if (!F) {
      Uo(e + 1);
      return;
    }
    F.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), lo && lo.remove(), Dt && Dt.remove();
    const $ = F.getBoundingClientRect(), Y = window.innerWidth, D = window.innerHeight, J = 320, j = 180;
    lo = document.createElement("div"), lo.style.cssText = `
    position: fixed;
    left: ${$.left - 6}px; top: ${$.top - 6}px;
    width: ${$.width + 12}px; height: ${$.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(lo);
    const N = Y - $.right, G = $.left, ve = D - $.bottom, k = $.top;
    let re = m.position || "bottom";
    re === "bottom" && ve < j + 20 && (re = "top"), re === "top" && k < j + 20 && (re = "right"), re === "right" && N < J + 20 && (re = "left"), re === "left" && G < J + 20 && (re = "bottom");
    let xe, be, ce = "";
    switch (re) {
      case "bottom":
        xe = $.left + $.width / 2 - J / 2, be = $.bottom + 14, ce = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        xe = $.left + $.width / 2 - J / 2, be = $.top - j - 14, ce = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        xe = $.right + 14, be = $.top + $.height / 2 - j / 2, ce = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        xe = $.left - J - 14, be = $.top + $.height / 2 - j / 2, ce = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    xe = Math.max(10, Math.min(xe, Y - J - 10)), be = Math.max(10, Math.min(be, D - j - 10)), Dt = document.createElement("div"), Dt.style.cssText = `
    position: fixed;
    left: ${xe}px; top: ${be}px;
    width: ${J}px;
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
  `, Dt.innerHTML = `
    <div style="${ce}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${m.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${nn.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${m.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < nn.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${nn.map((O, _) => `<div style="width:${_ === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${_ === e ? "#0099ff" : _ < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Dt), (_a = Dt.querySelector("#tour-next")) == null ? void 0 : _a.addEventListener("click", () => {
      Uo(e + 1);
    }), (_b = Dt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      Uo(e - 1);
    });
    const ne = (O) => {
      if (!Mn) {
        document.removeEventListener("keydown", ne);
        return;
      }
      (O.key === "ArrowRight" || O.key === "Enter") && (Uo(e + 1), document.removeEventListener("keydown", ne)), O.key === "ArrowLeft" && (Uo(Math.max(0, e - 1)), document.removeEventListener("keydown", ne)), O.key === "Escape" && (ns(), document.removeEventListener("keydown", ne));
    };
    document.addEventListener("keydown", ne);
  }
  function El() {
    var _a;
    lo && (lo.remove(), lo = null), Dt && (Dt.remove(), Dt = null), Dt = document.createElement("div"), Dt.style.cssText = `
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
  `, Dt.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(Dt), (_a = Dt.querySelector("#tour-done")) == null ? void 0 : _a.addEventListener("click", () => ns());
  }
  function Il(e) {
    var _a;
    const m = e.split(/\r?\n/), F = {
      force: "TONF",
      length: "M"
    }, $ = [], Y = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), j = [], N = [], G = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), k = [], re = [];
    let xe = "", be = "";
    const ce = /* @__PURE__ */ new Map();
    for (const ze of m) {
      const Ce = ze.trim();
      if (!Ce || Ce.startsWith("$")) {
        Ce.startsWith("$ ") && (be = Ce.substring(2).trim());
        continue;
      }
      if (be && (ce.has(be) || ce.set(be, []), ce.get(be).push(ze)), be === "CONTROLS") {
        const ge = Ce.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        ge && (F.force = ge[1], F.length = ge[2]);
        const De = Ce.match(/TITLE2\s+"([^"]+)"/);
        De && (xe = De[1]);
      }
      if (be === "STORIES - IN SEQUENCE FROM TOP") {
        const ge = Ce.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (ge) {
          const De = ge[1], he = ge[2] ? parseFloat(ge[2]) : 0, ke = ge[3] ? parseFloat(ge[3]) : void 0;
          $.push({
            name: De,
            height: he,
            elev: ke ?? 0
          });
        }
      }
      if (be === "MATERIAL PROPERTIES") {
        const ge = Ce.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (ge) {
          const De = ge[1];
          Y.has(De) || Y.set(De, {
            type: ge[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const he = Y.get(De);
          ge[2] && (he.type = ge[2]);
          const ke = Ce.match(/\bE\s+([\d.eE+-]+)/);
          ke && (he.E = parseFloat(ke[1]));
          const Je = Ce.match(/\bU\s+([\d.eE+-]+)/);
          Je && (he.nu = parseFloat(Je[1]), he.G = he.E / (2 * (1 + he.nu)));
          const qe = Ce.match(/\bFY\s+([\d.eE+-]+)/);
          qe && (he.fy = parseFloat(qe[1]));
          const ct = Ce.match(/\bFC\s+([\d.eE+-]+)/);
          ct && (he.fc = parseFloat(ct[1]));
          const Ge = Ce.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          Ge && (he.density = parseFloat(Ge[1]));
        }
      }
      if (be === "FRAME SECTIONS") {
        const ge = Ce.match(/FRAMESECTION\s+"([^"]+)"/);
        if (ge) {
          const De = ge[1];
          D.has(De) || D.set(De, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const he = D.get(De), ke = Ce.match(/MATERIAL\s+"([^"]+)"/);
          ke && (he.material = ke[1]);
          const Je = Ce.match(/SHAPE\s+"([^"]+)"/);
          Je && (he.shape = Je[1]);
          const qe = Ce.match(/\bD\s+([\d.eE+-]+)/);
          qe && (he.D = parseFloat(qe[1]));
          const ct = Ce.match(/\bB\s+([\d.eE+-]+)/);
          ct && (he.B = parseFloat(ct[1]));
          const Ge = Ce.match(/\bTF\s+([\d.eE+-]+)/);
          Ge && (he.TF = parseFloat(Ge[1]));
          const Ye = Ce.match(/\bTW\s+([\d.eE+-]+)/);
          Ye && (he.TW = parseFloat(Ye[1]));
          const mt = Ce.match(/\bR\s+([\d.eE+-]+)/);
          mt && (he.R = parseFloat(mt[1]));
          const Ze = Ce.match(/FILLMATERIAL\s+"([^"]+)"/);
          Ze && (he.fillMaterial = Ze[1]);
          const dt = Ce.match(/I2MOD\s+([\d.eE+-]+)/);
          dt && (he.modI2 = parseFloat(dt[1]));
          const Ht = Ce.match(/I3MOD\s+([\d.eE+-]+)/);
          Ht && (he.modI3 = parseFloat(Ht[1]));
        }
      }
      if (be === "POINT COORDINATES") {
        const ge = Ce.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        ge && J.set(ge[1], [
          parseFloat(ge[2]),
          parseFloat(ge[3])
        ]);
      }
      if (be === "LINE CONNECTIVITIES") {
        const ge = Ce.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        ge && j.push({
          name: ge[1],
          type: ge[2],
          pt1: ge[3],
          pt2: ge[4],
          nStories: parseInt(ge[5])
        });
      }
      if (be === "POINT ASSIGNS") {
        const ge = Ce.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        ge && G.set(`${ge[1]}@${ge[2]}`, ge[3].split(/\s+/));
      }
      if (be === "LINE ASSIGNS") {
        const ge = Ce.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (ge) {
          const De = {
            story: ge[2],
            section: ge[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, he = Ce.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          he && (De.rigidZone = parseFloat(he[1]));
          const ke = Ce.match(/RELEASE\s+"([^"]+)"/);
          ke && (De.releases = ke[1].split(/\s+/));
          const Je = Ce.match(/ANG\s+([-\d.eE+]+)/);
          Je && (De.angle = parseFloat(Je[1])), ve.set(`${ge[1]}@${ge[2]}`, De);
        }
      }
      if (be === "GRIDS") {
        const ge = Ce.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        ge && re.push({
          label: ge[1],
          dir: ge[2],
          coord: parseFloat(ge[3])
        });
      }
      if (be === "FRAME OBJECT LOADS") {
        const ge = Ce.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        ge && k.push({
          line: ge[1],
          story: ge[2],
          type: ge[3],
          dir: ge[4],
          lc: ge[5],
          val: parseFloat(ge[6])
        });
      }
      if (be === "AREA CONNECTIVITIES") {
        const ge = Ce.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (ge) {
          const De = ((_a = ge[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((he) => he.replace(/"/g, ""))) || [];
          N.push({
            name: ge[1],
            pts: De,
            nStories: 0
          });
        }
      }
    }
    const ne = /* @__PURE__ */ new Map();
    if ($.length > 0) {
      const ze = $.length - 1;
      ne.set($[ze].name, $[ze].elev);
      for (let Ce = ze - 1; Ce >= 0; Ce--) {
        const De = ne.get($[Ce + 1].name) + $[Ce].height;
        $[Ce].elev = De, ne.set($[Ce].name, De);
      }
    }
    const O = [], _ = [], U = /* @__PURE__ */ new Map(), ee = (ze, Ce) => `${ze}@${Ce}`, Ie = /* @__PURE__ */ new Set(), Ae = /* @__PURE__ */ new Map();
    for (const ze of j) Ae.set(ze.name, ze);
    for (const ze of j) for (const [Ce, ge] of ve) {
      if (!Ce.startsWith(ze.name + "@")) continue;
      const De = ge.story, he = $.findIndex((ke) => ke.name === De);
      if (!(he < 0)) if (ze.type === "COLUMN" || ze.type === "BRACE") {
        Ie.add(ee(ze.pt2, De));
        const ke = Math.max(ze.nStories, 1), Je = Math.min(he + ke, $.length - 1);
        Ie.add(ee(ze.pt1, $[Je].name));
      } else Ie.add(ee(ze.pt1, De)), Ie.add(ee(ze.pt2, De));
    }
    for (const [ze] of G) Ie.add(ze);
    for (const ze of Ie) {
      const [Ce, ge] = ze.split("@"), De = J.get(Ce), he = ne.get(ge);
      De === void 0 || he === void 0 || (O.push([
        De[0],
        De[1],
        he
      ]), _.push(ze), U.set(ze, O.length - 1));
    }
    const Be = [], $e = [], He = [], je = [], me = /* @__PURE__ */ new Map();
    for (const ze of j) for (const [Ce, ge] of ve) {
      if (!Ce.startsWith(ze.name + "@")) continue;
      const De = ge.story, he = $.findIndex((Ye) => Ye.name === De);
      if (he < 0) continue;
      let ke, Je;
      if (ze.type === "COLUMN" || ze.type === "BRACE") {
        const Ye = Math.max(ze.nStories, 1), mt = Math.min(he + Ye, $.length - 1);
        ke = ee(ze.pt1, $[mt].name), Je = ee(ze.pt2, De);
      } else ke = ee(ze.pt1, De), Je = ee(ze.pt2, De);
      const qe = U.get(ke), ct = U.get(Je);
      if (qe === void 0 || ct === void 0 || qe === ct) continue;
      const Ge = Be.length;
      if (Be.push([
        qe,
        ct
      ]), $e.push(ze.name), He.push(ze.type), je.push(De), me.set(Ge, ge.section), ge.rigidZone > 0 && ft.set(Ge, [
        ge.rigidZone,
        ge.rigidZone
      ]), ge.releases.length > 0) {
        const Ye = new Array(12).fill(false), mt = {
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
        for (const Ze of ge.releases) {
          const dt = mt[Ze];
          dt !== void 0 && (Ye[dt] = true);
        }
        it.set(Ge, Ye);
      }
    }
    const Me = /* @__PURE__ */ new Map(), Fe = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Map(), Ke = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map();
    for (const [ze, Ce] of me) {
      const ge = D.get(Ce);
      if (!ge) continue;
      const De = Y.get(ge.material);
      De && (Me.set(ze, De.E), Fe.set(ze, De.G));
      const he = ge.D, ke = ge.B, Je = ge.TF, qe = ge.TW;
      let ct = 0, Ge = 0, Ye = 0, mt = 0, Ze = 0, dt = 0, Ht = "rect";
      switch (ge.shape) {
        case "Concrete Rectangular":
          ct = he * ke, Ge = ke * he ** 3 / 12, Ye = he * ke ** 3 / 12, mt = ke * he ** 3 * (1 / 3 - 0.21 * (he / ke) * (1 - he ** 4 / (12 * ke ** 4))), Ze = dt = 5 / 6 * ct, Ht = "rect";
          break;
        case "Concrete Circle":
          ct = Math.PI * he ** 2 / 4, Ge = Ye = Math.PI * he ** 4 / 64, mt = Math.PI * he ** 4 / 32, Ze = dt = 0.9 * ct, Ht = "circ";
          break;
        case "Steel I/Wide Flange":
          ct = 2 * ke * Je + (he - 2 * Je) * qe, Ge = (ke * he ** 3 - (ke - qe) * (he - 2 * Je) ** 3) / 12, Ye = (2 * Je * ke ** 3 + (he - 2 * Je) * qe ** 3) / 12, mt = (2 * ke * Je ** 3 + (he - 2 * Je) * qe ** 3) / 3, Ze = (he - 2 * Je) * qe, dt = 2 * ke * Je * 5 / 6, Ht = "I";
          break;
        case "Steel Tube":
          ct = he * ke - (he - 2 * qe) * (ke - 2 * qe), Ge = (ke * he ** 3 - (ke - 2 * qe) * (he - 2 * qe) ** 3) / 12, Ye = (he * ke ** 3 - (he - 2 * qe) * (ke - 2 * qe) ** 3) / 12, mt = 2 * qe * (he - qe) * (ke - qe) * ((he - qe) * (ke - qe)) / (he - qe + (ke - qe)), Ze = 2 * he * qe, dt = 2 * ke * qe, Ht = "HSS";
          break;
        case "Filled Steel Tube":
          ct = he * ke, Ge = ke * he ** 3 / 12, Ye = he * ke ** 3 / 12, mt = 2 * qe * (he - qe) * (ke - qe) * ((he - qe) * (ke - qe)) / (he - qe + (ke - qe)), Ze = 2 * he * qe + 5 / 6 * (he - 2 * qe) * (ke - 2 * qe), dt = 2 * ke * qe + 5 / 6 * (he - 2 * qe) * (ke - 2 * qe), Ht = "CFT";
          break;
        case "Steel Angle": {
          const Wt = Je || qe;
          ct = Wt * (he + ke - Wt), Ge = Wt * (he ** 3 + ke * Wt ** 2 + Wt ** 2 * (he - Wt)) / 12, Ye = Wt * (ke ** 3 + he * Wt ** 2 + Wt ** 2 * (ke - Wt)) / 12, mt = (he + ke - Wt) * Wt ** 3 / 3, Ze = he * Wt, dt = ke * Wt, Ht = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          ct = 2 * ke * Je + (he - 2 * Je) * qe, Ge = (qe * he ** 3 + 2 * ke * Je * (he - Je) ** 2) / 12, Ye = (2 * Je * ke ** 3 + (he - 2 * Je) * qe ** 3) / 12, mt = (2 * ke * Je ** 3 + (he - 2 * Je) * qe ** 3) / 3, Ze = (he - 2 * Je) * qe, dt = 2 * ke * Je * 5 / 6, Ht = ge.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          ct = 2 * (2 * ke * Je + (he - 2 * Je) * qe), Ge = 2 * (qe * he ** 3 + 2 * ke * Je * (he - Je) ** 2) / 12, Ye = 2 * (2 * Je * ke ** 3 + (he - 2 * Je) * qe ** 3) / 12, mt = 2 * (2 * ke * Je ** 3 + (he - 2 * Je) * qe ** 3) / 3, Ze = 2 * (he - 2 * Je) * qe, dt = 4 * ke * Je * 5 / 6, Ht = "2C";
          break;
        default:
          he > 0 && ke > 0 && (ct = he * ke, Ge = ke * he ** 3 / 12, Ye = he * ke ** 3 / 12, mt = Math.min(he, ke) * Math.max(he, ke) ** 3 / 3 * 0.3, Ze = dt = 5 / 6 * ct);
          break;
      }
      ge.modI2 && (Ye *= ge.modI2), ge.modI3 && (Ge *= ge.modI3), Xe.set(ze, ct), ht.set(ze, Ge), St.set(ze, Ye), ut.set(ze, mt), Ze > 0 && Ke.set(ze, Ze), dt > 0 && Ue.set(ze, dt), Ct.set(ze, {
        type: Ht,
        b: ke || void 0,
        h: he || void 0,
        d: Ht === "circ" || Ht === "pipe" ? he : void 0,
        tw: qe || void 0,
        tf: Je || void 0,
        r: ge.R,
        name: Ce
      });
    }
    const xt = /* @__PURE__ */ new Map();
    for (const [ze, Ce] of G) {
      const ge = U.get(ze);
      if (ge === void 0) continue;
      const De = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const he of Ce) he === "UX" && (De[0] = true), he === "UY" && (De[1] = true), he === "UZ" && (De[2] = true), he === "RX" && (De[3] = true), he === "RY" && (De[4] = true), he === "RZ" && (De[5] = true);
      xt.set(ge, De);
    }
    const Re = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map();
    for (let ze = 0; ze < $e.length; ze++) Ft.set(`${$e[ze]}@${je[ze]}`, ze);
    for (const ze of k) {
      const Ce = Ft.get(`${ze.line}@${ze.story}`);
      if (Ce === void 0) continue;
      const [ge, De] = Be[Ce], he = O[ge], ke = O[De], Je = Math.sqrt((ke[0] - he[0]) ** 2 + (ke[1] - he[1]) ** 2 + (ke[2] - he[2]) ** 2);
      if (Je < 1e-10) continue;
      const qe = ze.val * Je / 2;
      let ct = 0, Ge = 0, Ye = 0;
      ze.dir === "GRAV" || ze.dir === "GRAVITY" ? Ye = -qe : ze.dir === "X" ? ct = qe : ze.dir === "Y" ? Ge = qe : ze.dir === "Z" && (Ye = -qe);
      for (const mt of [
        ge,
        De
      ]) {
        const Ze = Re.get(mt) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        Ze[0] += ct, Ze[1] += Ge, Ze[2] += Ye, Re.set(mt, Ze);
      }
    }
    const Et = /* @__PURE__ */ new Map();
    for (const [ze, Ce] of me) {
      const ge = D.get(Ce);
      if (!ge) continue;
      const De = Y.get(ge.material);
      (De == null ? void 0 : De.density) && Et.set(ze, De.density);
    }
    return {
      units: F,
      stories: $.reverse(),
      materials: Y,
      frameSections: D,
      nodes: O,
      nodeNames: _,
      nodeNameToIdx: U,
      elements: Be,
      elementNames: $e,
      elementTypes: He,
      elementStories: je,
      elementSections: me,
      nodeInputs: {
        supports: xt,
        loads: Re
      },
      elementInputs: {
        elasticities: Me,
        shearModuli: Fe,
        areas: Xe,
        momentsOfInertiaZ: ht,
        momentsOfInertiaY: St,
        torsionalConstants: ut,
        shearAreasY: Ke,
        shearAreasZ: Ue,
        rigidOffsets: ft,
        momentReleases: it,
        densities: Et,
        sectionShapes: Ct
      },
      sectionShapes: Ct,
      grids: re,
      info: {
        nNodes: O.length,
        nFrames: Be.length,
        nAreas: N.length,
        title: xe
      },
      rawSections: ce
    };
  }
  function ot(e) {
    return e && parseFloat(e) || 0;
  }
  function ra(e) {
    const m = /* @__PURE__ */ new Map(), F = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
    let $;
    for (; ($ = F.exec(e)) !== null; ) m.set($[1], $[2] !== void 0 ? $[2] : $[3]);
    return m;
  }
  function kl(e) {
    const m = e.split(/\r?\n/);
    return m.some(($) => $.trim().startsWith("TABLE:")) ? Tl(m) : Al(m);
  }
  function Tl(e) {
    var _a, _b, _c, _d, _e, _f;
    const m = [];
    let F = "";
    for (const ne of e) {
      const O = ne.trimEnd();
      O.endsWith("_") ? F += O.slice(0, -1) + " " : (F += O, m.push(F), F = "");
    }
    F && m.push(F);
    const $ = {
      force: "KN",
      length: "m"
    };
    let Y = "UX,UY,UZ,RX,RY,RZ";
    const D = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), G = [], ve = [], k = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), be = [];
    let ce = "";
    for (const ne of m) {
      const O = ne.trim();
      if (!O || O.startsWith(";") || O.startsWith("File ")) continue;
      if (O.startsWith("TABLE:")) {
        const U = O.match(/TABLE:\s+"(.+?)"/);
        ce = U ? U[1].toUpperCase() : "";
        continue;
      }
      if (O === "END TABLE DATA") {
        ce = "";
        continue;
      }
      const _ = ra(O);
      switch (ce) {
        case "PROGRAM CONTROL": {
          const U = _.get("CurrUnits");
          if (U) {
            const ee = U.split(",").map((Ie) => Ie.trim());
            ee[0] && ($.force = ee[0]), ee[1] && ($.length = ee[1]);
          }
          break;
        }
        case "MATERIAL PROPERTIES 01 - GENERAL": {
          const U = _.get("Material");
          U && !D.has(U) && D.set(U, {
            E: 0,
            nu: 0,
            G: 0
          });
          break;
        }
        case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
          const U = _.get("Material");
          if (U) {
            const ee = D.get(U) || {
              E: 0,
              nu: 0,
              G: 0
            };
            ee.E = ot(_.get("E1")), ee.G = ot(_.get("G12")), ee.nu = ot(_.get("U12")), ee.density = ot(_.get("UnitMass")), D.set(U, ee);
          }
          break;
        }
        case "MATERIAL PROPERTIES 03A - STEEL DATA": {
          const U = _.get("Material");
          U && D.has(U) && (D.get(U).fy = ot(_.get("Fy")));
          break;
        }
        case "FRAME SECTION PROPERTIES 01 - GENERAL": {
          const U = _.get("SectionName");
          U && J.set(U, {
            material: _.get("Material") || "",
            shape: _.get("Shape") || "Rectangular",
            D: ot(_.get("t3")),
            B: ot(_.get("t2")),
            TF: ot(_.get("tf")),
            TW: ot(_.get("tw")),
            A: ot(_.get("Area")),
            Iz: ot(_.get("I33")),
            Iy: ot(_.get("I22")),
            J: ot(_.get("TorsConst"))
          });
          break;
        }
        case "AREA SECTION PROPERTIES": {
          const U = _.get("Section");
          U && j.set(U, {
            material: _.get("Material") || "",
            type: _.get("Type") || "Shell",
            thickness: ot(_.get("Thickness"))
          });
          break;
        }
        case "JOINT COORDINATES": {
          const U = _.get("Joint");
          if (U) {
            const ee = ot(_.get("XorR")), Ie = ot(_.get("Y")), Ae = ot(_.get("Z"));
            N.set(U, [
              ee,
              Ie,
              Ae
            ]);
          }
          break;
        }
        case "CONNECTIVITY - FRAME": {
          const U = _.get("Frame"), ee = _.get("JointI"), Ie = _.get("JointJ");
          U && ee && Ie && G.push({
            name: U,
            j1: ee,
            j2: Ie
          });
          break;
        }
        case "CONNECTIVITY - AREA": {
          const U = _.get("Area");
          if (U) {
            const ee = parseInt(_.get("NumJoints") || "4"), Ie = [];
            for (let Ae = 1; Ae <= ee; Ae++) {
              const Be = _.get(`Joint${Ae}`);
              Be && Ie.push(Be);
            }
            Ie.length >= 3 && ve.push({
              name: U,
              joints: Ie
            });
          }
          break;
        }
        case "JOINT RESTRAINT ASSIGNMENTS": {
          const U = _.get("Joint");
          if (U) {
            const ee = [
              ((_a = _.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes",
              ((_b = _.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes",
              ((_c = _.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes",
              ((_d = _.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes",
              ((_e = _.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes",
              ((_f = _.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"
            ];
            k.set(U, ee);
          }
          break;
        }
        case "FRAME SECTION ASSIGNMENTS": {
          const U = _.get("Frame"), ee = _.get("AnalSect");
          U && ee && re.set(U, ee);
          break;
        }
        case "AREA SECTION ASSIGNMENTS": {
          const U = _.get("Area"), ee = _.get("Section");
          U && ee && xe.set(U, ee);
          break;
        }
        case "JOINT LOADS - FORCE": {
          const U = _.get("Joint");
          U && be.push({
            joint: U,
            fx: ot(_.get("F1")),
            fy: ot(_.get("F2")),
            fz: ot(_.get("F3")),
            mx: ot(_.get("M1")),
            my: ot(_.get("M2")),
            mz: ot(_.get("M3"))
          });
          break;
        }
      }
    }
    return ia($, Y, D, J, j, N, G, ve, k, re, xe, be);
  }
  function Al(e) {
    const m = {
      force: "KN",
      length: "m"
    };
    let F = "UX,UY,UZ,RX,RY,RZ";
    const $ = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), j = [], N = [], G = /* @__PURE__ */ new Map(), ve = [];
    let k = "", re = "";
    for (const ce of e) {
      const ne = ce.trim();
      if (!ne || ne.startsWith(";")) continue;
      if (!ce.startsWith(" ") && !ce.startsWith("	")) {
        const U = ne.toUpperCase();
        if (U === "END") break;
        U.startsWith("SHELL SECTION") ? k = "SHELL SECTION" : U.startsWith("FRAME SECTION") ? k = "FRAME SECTION" : k = U.split(/\s+/)[0];
        continue;
      }
      const O = ra(ne), _ = ne.split(/\s+/);
      switch (k) {
        case "SYSTEM": {
          const U = O.get("DOF");
          U && (F = U);
          const ee = O.get("LENGTH");
          ee && (m.length = ee);
          const Ie = O.get("FORCE");
          Ie && (m.force = Ie);
          break;
        }
        case "JOINT": {
          const U = _[0];
          J.set(U, [
            ot(O.get("X")),
            ot(O.get("Y")),
            ot(O.get("Z"))
          ]);
          break;
        }
        case "RESTRAINT": {
          const U = O.get("ADD"), ee = O.get("DOF");
          if (U && ee) {
            const Ie = ee.split(","), Ae = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            for (const Be of Ie) {
              const $e = Be.toUpperCase();
              ($e === "UX" || $e === "U1") && (Ae[0] = true), ($e === "UY" || $e === "U2") && (Ae[1] = true), ($e === "UZ" || $e === "U3") && (Ae[2] = true), ($e === "RX" || $e === "R1") && (Ae[3] = true), ($e === "RY" || $e === "R2") && (Ae[4] = true), ($e === "RZ" || $e === "R3") && (Ae[5] = true);
            }
            G.set(U, Ae);
          }
          break;
        }
        case "MATERIAL": {
          const U = O.get("NAME");
          if (U) re = U, $.set(U, {
            E: 0,
            nu: 0,
            G: 0
          });
          else if (re) {
            const ee = $.get(re), Ie = O.get("E");
            Ie && (ee.E = ot(Ie));
            const Ae = O.get("U");
            Ae && (ee.nu = ot(Ae)), ee.G = ee.E / (2 * (1 + ee.nu));
            const Be = O.get("M");
            Be && (ee.density = ot(Be));
          }
          break;
        }
        case "SHELL": {
          const U = _[0], ee = O.get("J");
          O.get("SEC"), ee && N.push({
            name: U,
            joints: ee.split(",")
          });
          break;
        }
        case "SHELL SECTION": {
          const U = O.get("NAME");
          U && D.set(U, {
            material: O.get("MAT") || "",
            type: O.get("TYPE") || "Shell",
            thickness: ot(O.get("TH"))
          });
          break;
        }
        case "FRAME": {
          const U = _[0], ee = O.get("J");
          if (ee) {
            const Ie = ee.split(",");
            Ie.length >= 2 && j.push({
              name: U,
              j1: Ie[0],
              j2: Ie[1]
            });
          }
          break;
        }
        case "LOAD": {
          const U = O.get("ADD");
          U && ve.push({
            joint: U,
            fx: ot(O.get("UX")),
            fy: ot(O.get("UY")),
            fz: ot(O.get("UZ")),
            mx: ot(O.get("MX")),
            my: ot(O.get("MY")),
            mz: ot(O.get("MZ"))
          });
          break;
        }
      }
    }
    return ia(m, F, $, Y, D, J, j, N, G, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), ve);
  }
  function ia(e, m, F, $, Y, D, J, j, N, G, ve, k) {
    var _a;
    const re = [], xe = /* @__PURE__ */ new Map(), be = [];
    for (const [$e, He] of D) xe.set($e, be.length), re.push($e), be.push(He);
    const ce = [], ne = [], O = /* @__PURE__ */ new Map();
    for (const $e of J) {
      const He = xe.get($e.j1), je = xe.get($e.j2);
      if (He !== void 0 && je !== void 0) {
        const me = ce.length;
        ce.push([
          He,
          je
        ]), ne.push($e.name);
        const Me = G.get($e.name);
        Me && O.set(me, Me);
      }
    }
    const _ = ce.length;
    for (const $e of j) {
      const He = $e.joints.map((je) => xe.get(je)).filter((je) => je !== void 0);
      if (He.length >= 3) {
        const je = ce.length;
        ce.push(He), ne.push($e.name);
        const me = ve.get($e.name);
        me && O.set(je, me);
      }
    }
    const U = ce.length - _, ee = {
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map(),
      thicknesses: /* @__PURE__ */ new Map(),
      poissonsRatios: /* @__PURE__ */ new Map()
    }, Ie = /* @__PURE__ */ new Map(), Ae = F.values().next().value || {
      E: 29e3,
      nu: 0.3,
      G: 11153
    };
    for (let $e = 0; $e < ce.length; $e++) {
      const He = O.get($e), je = He ? $.get(He) : null, me = He ? Y.get(He) : null;
      if (je || ce[$e].length === 2) {
        const Me = je || {
          material: "",
          A: 0,
          Iz: 0,
          Iy: 0,
          J: 0,
          D: 0.3,
          B: 0.3,
          shape: "Rectangular"
        }, Fe = F.get(Me.material) || Ae, Xe = Fe.E || Ae.E, Ke = Fe.nu || 0.3, Ue = Fe.G || Xe / (2 * (1 + Ke));
        ee.elasticities.set($e, Xe), ee.shearModuli.set($e, Ue), ee.areas.set($e, Me.A || Me.D * Me.B), ee.momentsOfInertiaZ.set($e, Me.Iz || Me.B * Me.D ** 3 / 12), ee.momentsOfInertiaY.set($e, Me.Iy || Me.D * Me.B ** 3 / 12), ee.torsionalConstants.set($e, Me.J || 0), ee.densities.set($e, Fe.density || 0), ((_a = Me.shape) == null ? void 0 : _a.includes("Wide Flange")) || Me.shape === "I" ? Ie.set($e, {
          type: "I",
          b: Me.B,
          h: Me.D,
          name: He || "I-section"
        }) : Ie.set($e, {
          type: "rect",
          b: Me.B,
          h: Me.D
        });
      } else if (me) {
        const Me = F.get(me.material) || Ae, Fe = Me.E || Ae.E, Xe = Me.nu || 0.2, Ke = Me.G || Fe / (2 * (1 + Xe));
        ee.elasticities.set($e, Fe), ee.shearModuli.set($e, Ke), ee.thicknesses.set($e, me.thickness), ee.poissonsRatios.set($e, Xe), ee.densities.set($e, Me.density || 0);
      }
    }
    const Be = {
      supports: /* @__PURE__ */ new Map(),
      forces: /* @__PURE__ */ new Map()
    };
    for (const [$e, He] of N) {
      const je = xe.get($e);
      je !== void 0 && Be.supports.set(je, He);
    }
    for (const $e of k) {
      const He = xe.get($e.joint);
      if (He !== void 0) {
        const je = Be.forces.get(He) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        je[0] += $e.fx, je[1] += $e.fy, je[2] += $e.fz, je[3] += $e.mx, je[4] += $e.my, je[5] += $e.mz, Be.forces.set(He, je);
      }
    }
    return {
      units: e,
      dof: m,
      materials: F,
      frameSections: $,
      shellSections: Y,
      nodes: be,
      nodeNames: re,
      nodeNameToIdx: xe,
      elements: ce,
      elementNames: ne,
      elementSections: O,
      nodeInputs: Be,
      elementInputs: ee,
      sectionShapes: Ie,
      info: {
        nNodes: be.length,
        nFrames: _,
        nShells: U,
        title: `SAP2000 (${_} frames, ${U} shells)`
      }
    };
  }
  function zl(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const { nodes: m, elements: F, nodeInputs: $, elementInputs: Y } = e, D = e.units || {
      force: "KN",
      length: "m"
    }, J = e.title || "Awatif Model", j = [], N = (O) => j.push(O), G = () => j.push(" ");
    N(`File ${J}.$2k was saved on m/d/yy at h:mm:ss`), G(), N('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), N("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), G();
    const ve = [], k = [];
    if (F.forEach((O, _) => {
      O.length === 2 ? ve.push(_) : k.push(_);
    }), ve.length > 0) {
      N('TABLE:  "CONNECTIVITY - FRAME"');
      for (const O of ve) {
        const _ = F[O];
        N(`   Frame=${O + 1}   JointI=${_[0] + 1}   JointJ=${_[1] + 1}   IsCurved=No`);
      }
      G();
    }
    if (k.length > 0) {
      N('TABLE:  "CONNECTIVITY - AREA"');
      for (const O of k) {
        const _ = F[O], U = _.map((ee, Ie) => `Joint${Ie + 1}=${ee + 1}`).join("   ");
        N(`   Area=${O + 1}   NumJoints=${_.length}   ${U}`);
      }
      G();
    }
    N('TABLE:  "COORDINATE SYSTEMS"'), N("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), G(), N('TABLE:  "DATABASE FORMAT TYPES"'), N("   UnitsCurr=Yes   OverrideE=No"), G();
    const re = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map();
    for (const O of ve) {
      const _ = ((_a = Y.areas) == null ? void 0 : _a.get(O)) || 0, U = ((_b = Y.momentsOfInertiaZ) == null ? void 0 : _b.get(O)) || 0, ee = ((_c = Y.momentsOfInertiaY) == null ? void 0 : _c.get(O)) || 0, Ie = ((_d = Y.torsionalConstants) == null ? void 0 : _d.get(O)) || 0, Ae = ((_e = Y.elasticities) == null ? void 0 : _e.get(O)) || 0, Be = `MAT_${Math.round(Ae)}`, $e = `A${_.toPrecision(6)}_Iz${U.toPrecision(6)}`;
      if (!re.has($e)) {
        let je = 0.3, me = 0.3;
        _ > 0 && U > 0 && (je = Math.sqrt(12 * U / _), me = _ / je), re.set($e, {
          A: _,
          Iz: U,
          Iy: ee,
          J: Ie,
          b: me,
          h: je,
          matKey: Be
        });
      }
      const He = [
        ...re.keys()
      ].indexOf($e) + 1;
      xe.set(O, `SEC${He}`);
    }
    if (ve.length > 0) {
      N('TABLE:  "FRAME SECTION ASSIGNMENTS"');
      for (const O of ve) {
        const _ = xe.get(O) || "SEC1";
        N(`   Frame=${O + 1}   AutoSelect=N.A.   AnalSect=${_}   MatProp=Default`);
      }
      G();
    }
    if (re.size > 0) {
      N('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
      let O = 0;
      for (const [, _] of re) {
        O++;
        const U = _.A * 5 / 6;
        N(`   SectionName=SEC${O}   Material=${_.matKey}   Shape=Rectangular   t3=${wt(_.h)}   t2=${wt(_.b)}   Area=${wt(_.A)}   TorsConst=${wt(_.J)}   I33=${wt(_.Iz)}   I22=${wt(_.Iy)}   I23=0   AS2=${wt(U)}   AS3=${wt(U)} _`), N("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
      }
      G();
    }
    const be = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map();
    for (const O of k) {
      const _ = ((_f = Y.thicknesses) == null ? void 0 : _f.get(O)) || 0.1, U = ((_g = Y.elasticities) == null ? void 0 : _g.get(O)) || 0, ee = `MAT_${Math.round(U)}`, Ie = `t${_.toPrecision(6)}`;
      be.has(Ie) || be.set(Ie, {
        t: _,
        matKey: ee
      });
      const Ae = [
        ...be.keys()
      ].indexOf(Ie) + 1;
      ce.set(O, `SSEC${Ae}`);
    }
    if (k.length > 0) {
      N('TABLE:  "AREA SECTION ASSIGNMENTS"');
      for (const _ of k) {
        const U = ce.get(_) || "SSEC1";
        N(`   Area=${_ + 1}   Section=${U}   MatProp=Default`);
      }
      G(), N('TABLE:  "AREA SECTION PROPERTIES"');
      let O = 0;
      for (const [, _] of be) O++, N(`   Section=SSEC${O}   Material=${_.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${wt(_.t)}   BendThick=${wt(_.t)}   Color=Cyan`);
      G();
    }
    N('TABLE:  "JOINT COORDINATES"');
    for (let O = 0; O < m.length; O++) {
      const _ = m[O];
      N(`   Joint=${O + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${wt(_[0])}   Y=${wt(_[1])}   Z=${wt(_[2])}   SpecialJt=No`);
    }
    if (G(), $.supports && $.supports.size > 0) {
      N('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
      for (const [O, _] of $.supports) {
        if (!_.some((ee) => ee)) continue;
        const U = (ee) => ee ? "Yes" : "No";
        N(`   Joint=${O + 1}   U1=${U(_[0])}   U2=${U(_[1])}   U3=${U(_[2])}   R1=${U(_[3])}   R2=${U(_[4])}   R3=${U(_[5])}`);
      }
      G();
    }
    if (N('TABLE:  "LOAD PATTERN DEFINITIONS"'), N("   LoadPat=DEAD   DesignType=Dead   SelfWtMult=0"), G(), N('TABLE:  "LOAD CASE DEFINITIONS"'), N('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), G(), N('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), N('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), G(), $.forces && $.forces.size > 0) {
      N('TABLE:  "JOINT LOADS - FORCE"');
      for (const [O, _] of $.forces) _.some((U) => Math.abs(U) > 1e-12) && N(`   Joint=${O + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${wt(_[0])}   F2=${wt(_[1])}   F3=${wt(_[2])}   M1=${wt(_[3])}   M2=${wt(_[4])}   M3=${wt(_[5])}`);
      G();
    }
    const ne = /* @__PURE__ */ new Map();
    for (let O = 0; O < F.length; O++) {
      const _ = ((_h = Y.elasticities) == null ? void 0 : _h.get(O)) || 0, U = ((_i = Y.shearModuli) == null ? void 0 : _i.get(O)) || 0, ee = _ > 0 && U > 0 ? Math.max(0, Math.min(0.5, _ / (2 * U) - 1)) : 0.2, Ie = ((_j = Y.densities) == null ? void 0 : _j.get(O)) || 0, Ae = `MAT_${Math.round(_)}`;
      ne.has(Ae) || ne.set(Ae, {
        E: _,
        nu: ee,
        G: U,
        rho: Ie
      });
    }
    N('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
    for (const [O] of ne) N(`   Material=${O}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
    G(), N('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
    for (const [O, _] of ne) N(`   Material=${O}   UnitWeight=${wt(_.rho * 9.81)}   UnitMass=${wt(_.rho)}   E1=${wt(_.E)}   G12=${wt(_.G)}   U12=${wt(_.nu)}   A1=9.9E-06`);
    G(), N('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
    for (const [O] of ne) N(`   Material=${O}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
    return G(), N('TABLE:  "PROGRAM CONTROL"'), N(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${D.force}, ${D.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), G(), N("END TABLE DATA"), N(""), j.join(`\r
`);
  }
  function wt(e) {
    return e === 0 || Math.abs(e) < 1e-15 ? "0" : Math.abs(e) >= 1e6 || Math.abs(e) < 1e-3 && Math.abs(e) > 0 ? e.toExponential(8) : parseFloat(e.toPrecision(10)).toString();
  }
  function Ll(e) {
    const { e2kModel: m } = e, F = m == null ? void 0 : m.rawSections;
    return F && F.size > 0 ? Cl(F) : Fl(e);
  }
  function Cl(e, m) {
    const F = [], $ = [
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
    F.push("$ File exported from Awatif FEM Studio (round-trip)"), F.push("");
    for (const Y of $) {
      const D = e.get(Y);
      if (!(!D || D.length === 0)) {
        F.push(`$ ${Y}`);
        for (const J of D) F.push(J);
        F.push("");
      }
    }
    for (const [Y, D] of e) if (!$.includes(Y) && D.length !== 0) {
      F.push(`$ ${Y}`);
      for (const J of D) F.push(J);
      F.push("");
    }
    return F.push("  END"), F.push("$ END OF MODEL FILE"), F.join(`\r
`);
  }
  function Fl(e) {
    var _a, _b, _c, _d;
    const { nodes: m, elements: F, nodeInputs: $, elementInputs: Y, title: D, units: J } = e, j = (J == null ? void 0 : J.force) || "TONF", N = (J == null ? void 0 : J.length) || "M", G = [], ve = (me) => Math.round(me * 1e4) / 1e4;
    G.push("$ File exported from Awatif FEM Studio"), G.push(""), G.push("$ PROGRAM INFORMATION"), G.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), G.push(""), G.push("$ CONTROLS"), G.push(`  UNITS  "${j}"  "${N}"  "C"  `), D && G.push(`  TITLE2  "${D}"  `), G.push("");
    const k = /* @__PURE__ */ new Set();
    m.forEach((me) => k.add(ve(me[1])));
    const re = [
      ...k
    ].sort((me, Me) => me - Me), xe = [], be = /* @__PURE__ */ new Map();
    xe.push("Base"), be.set(re[0], "Base");
    for (let me = 1; me < re.length; me++) {
      const Me = `Level_${me}`;
      xe.push(Me), be.set(re[me], Me);
    }
    G.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let me = re.length - 1; me >= 1; me--) G.push(`  STORY "${xe[me]}"  HEIGHT ${ve(re[me] - re[me - 1])} MASTERSTORY "Yes"  `);
    re.length > 0 && G.push(`  STORY "Base"  ELEV ${re[0]} `), G.push(""), F.some((me) => me.length === 4) && (G.push("$ DIAPHRAGM NAMES"), G.push('  DIAPHRAGM "D1"    TYPE RIGID'), G.push("")), G.push("$ MATERIAL PROPERTIES");
    const ne = /* @__PURE__ */ new Set();
    (_a = Y.elasticities) == null ? void 0 : _a.forEach((me) => ne.add(me));
    const O = /* @__PURE__ */ new Map();
    let _ = 0;
    for (const me of ne) {
      const Me = `Mat_${++_}`;
      O.set(me, Me), G.push(`  MATERIAL  "${Me}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), G.push(`  MATERIAL  "${Me}"    SYMTYPE "Isotropic"  E ${me}  U 0.2  A 1E-05`);
    }
    G.push(""), G.push("$ FRAME SECTIONS");
    const U = /* @__PURE__ */ new Set(), ee = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map();
    F.forEach((me, Me) => {
      var _a2, _b2;
      if (me.length !== 2) return;
      const Fe = (_a2 = Y.sectionShapes) == null ? void 0 : _a2.get(Me), Xe = ((_b2 = Y.elasticities) == null ? void 0 : _b2.get(Me)) ?? 0, Ke = O.get(Xe) || "Mat_1", Ue = (Fe == null ? void 0 : Fe.h) ?? 0, ft = (Fe == null ? void 0 : Fe.b) ?? 0, it = (Fe == null ? void 0 : Fe.d) ?? 0, ht = (Fe == null ? void 0 : Fe.tf) ?? 0, St = (Fe == null ? void 0 : Fe.tw) ?? 0, ut = (Fe == null ? void 0 : Fe.type) || "rect", Ct = `${ut}_${Ue}_${ft}_${it}_${ht}_${St}`;
      (Fe == null ? void 0 : Fe.name) && !Ie.has(Ct) && Ie.set(Ct, Fe.name);
      let xt = Ie.get(Ct);
      if (xt || (ut === "rect" ? xt = `R${ve(ft * 100)}x${ve(Ue * 100)}` : ut === "circ" ? xt = `C_D${ve(it * 100)}` : ut === "I" ? xt = `I_${ve(Ue * 100)}` : xt = `Sec_${U.size + 1}`, Ie.set(Ct, xt)), ee.set(Me, xt), U.has(xt)) return;
      U.add(xt);
      const Ft = {
        rect: "Concrete Rectangular",
        circ: "Concrete Circle",
        I: "Steel I/Wide Flange",
        HSS: "Steel Tube",
        pipe: "Steel Pipe",
        L: "Steel Angle",
        C: "Steel Channel",
        "2C": "Steel Double Channel"
      }[ut] || "Concrete Rectangular";
      let Et = `  FRAMESECTION  "${xt}"  MATERIAL "${Ke}"  SHAPE "${Ft}"`;
      Ue && (Et += `  D ${Ue}`), ft && (Et += `  B ${ft}`), it && !Ue && (Et += `  D ${it}`), ht && (Et += `  TF ${ht}`), St && (Et += `  TW ${St}`), G.push(Et);
    }), G.push("");
    const Ae = /* @__PURE__ */ new Map();
    let Be = 0;
    m.forEach((me) => {
      const Me = `${ve(me[0])},${ve(me[2])}`;
      Ae.has(Me) || Ae.set(Me, `${++Be}`);
    }), G.push("$ POINT COORDINATES");
    for (const [me, Me] of Ae) {
      const [Fe, Xe] = me.split(",").map(Number);
      G.push(`  POINT "${Me}"  ${Fe} ${Xe} `);
    }
    G.push("");
    const $e = (me) => {
      const Me = m[me], Fe = `${ve(Me[0])},${ve(Me[2])}`;
      return {
        pt: Ae.get(Fe) || "1",
        story: be.get(ve(Me[1])) || "Base"
      };
    };
    G.push("$ LINE CONNECTIVITIES");
    const He = [];
    F.forEach((me, Me) => {
      if (me.length !== 2) return;
      const Fe = Rl(m, me), Xe = ee.get(Me) || `Sec_${Me}`;
      if (Fe === "BEAM") {
        const Ke = $e(me[0]), Ue = $e(me[1]);
        G.push(`  LINE  "E${Me + 1}"  BEAM  "${Ke.pt}"  "${Ue.pt}"  0`), He.push(`  LINEASSIGN  "E${Me + 1}"  "${Ke.story}"  SECTION "${Xe}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const Ke = m[me[0]][1] <= m[me[1]][1] ? me[0] : me[1], Ue = m[me[0]][1] <= m[me[1]][1] ? me[1] : me[0];
        $e(Ke);
        const ft = $e(Ue), it = ve(m[Ke][1]), ht = ve(m[Ue][1]), St = re.indexOf(it), ut = re.indexOf(ht), Ct = Math.max(1, ut >= 0 && St >= 0 ? ut - St : 1);
        G.push(`  LINE  "E${Me + 1}"  ${Fe}  "${ft.pt}"  "${ft.pt}"  ${Ct}`);
        for (let xt = 0; xt < Ct; xt++) {
          const Re = ut - xt;
          Re >= 0 && Re < xe.length && He.push(`  LINEASSIGN  "E${Me + 1}"  "${xe[Re]}"  SECTION "${Xe}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), G.push(""), G.push("$ POINT ASSIGNS"), (_b = $.supports) == null ? void 0 : _b.forEach((me, Me) => {
      const Fe = [];
      if (me[0] && Fe.push("UX"), me[1] && Fe.push("UY"), me[2] && Fe.push("UZ"), me[3] && Fe.push("RX"), me[4] && Fe.push("RY"), me[5] && Fe.push("RZ"), Fe.length > 0) {
        const Xe = $e(Me);
        G.push(`  POINTASSIGN  "${Xe.pt}"  "${Xe.story}"  RESTRAINT "${Fe.join(" ")}"  `);
      }
    }), G.push(""), G.push("$ LINE ASSIGNS"), He.forEach((me) => G.push(me)), G.push("");
    const je = [];
    if (F.forEach((me, Me) => {
      if (me.length === 4) {
        const Fe = m[me[0]], Xe = m[me[1]], Ke = m[me[2]], Ue = [
          Xe[0] - Fe[0],
          Xe[1] - Fe[1],
          Xe[2] - Fe[2]
        ], ft = [
          Ke[0] - Fe[0],
          Ke[1] - Fe[1],
          Ke[2] - Fe[2]
        ], it = Math.abs(Ue[2] * ft[0] - Ue[0] * ft[2]), ht = Math.sqrt((Ue[1] * ft[2] - Ue[2] * ft[1]) ** 2 + it ** 2 + (Ue[0] * ft[1] - Ue[1] * ft[0]) ** 2), St = ht > 1e-10 && it / ht < 0.5;
        je.push({
          idx: Me,
          el: me,
          isWall: St
        });
      }
    }), je.some((me) => !me.isWall)) {
      G.push("$ SLAB PROPERTIES");
      const me = ((_c = Y.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      G.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${O.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${me} `), G.push("");
    }
    if (je.some((me) => me.isWall)) {
      G.push("$ WALL PROPERTIES");
      const me = ((_d = Y.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      G.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${O.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${me} `), G.push("");
    }
    if (je.length > 0) {
      G.push("$ AREA CONNECTIVITIES");
      const me = [];
      je.forEach((Me, Fe) => {
        const { el: Xe, isWall: Ke } = Me, Ue = Ke ? `W${Fe + 1}` : `F${Fe + 1}`, ft = Ke ? "PANEL" : "FLOOR", it = Xe.map((ht) => $e(ht));
        if (Ke) {
          const ht = m[Xe[0]][1] <= m[Xe[2]][1] ? 0 : 2, St = m[Xe[1]][1] <= m[Xe[3]][1] ? 1 : 3;
          G.push(`  AREA "${Ue}"  ${ft}  4  "${it[ht].pt}"  "${it[St].pt}"  "${it[St].pt}"  "${it[ht].pt}"  1  1  0  0  `);
          const ut = it[ht === 0 ? 2 : 0].story;
          me.push(`  AREAASSIGN  "${Ue}"  "${ut}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        } else G.push(`  AREA "${Ue}"  ${ft}  4  "${it[0].pt}"  "${it[1].pt}"  "${it[2].pt}"  "${it[3].pt}"  0  0  0  0  `), me.push(`  AREAASSIGN  "${Ue}"  "${it[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }), G.push(""), G.push("$ AREA ASSIGNS"), me.forEach((Me) => G.push(Me)), G.push("");
    }
    return G.push("$ LOAD PATTERNS"), G.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), G.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), G.push(""), $.loads && $.loads.size > 0 && (G.push("$ POINT OBJECT LOADS"), $.loads.forEach((me, Me) => {
      const [Fe, Xe, Ke] = me, Ue = $e(Me);
      Math.abs(Fe) > 1e-10 && G.push(`  POINTLOAD  "${Ue.pt}"  "${Ue.story}"  "Dead"  TYPE "FORCE"  FX ${Fe}`), Math.abs(Xe) > 1e-10 && G.push(`  POINTLOAD  "${Ue.pt}"  "${Ue.story}"  "Dead"  TYPE "FORCE"  FY ${Xe}`), Math.abs(Ke) > 1e-10 && G.push(`  POINTLOAD  "${Ue.pt}"  "${Ue.story}"  "Dead"  TYPE "FORCE"  FZ ${Ke}`);
    }), G.push("")), G.push("  END"), G.push("$ END OF MODEL FILE"), G.join(`\r
`);
  }
  function Rl(e, m) {
    const F = e[m[0]], $ = e[m[1]], Y = Math.abs($[1] - F[1]), D = Math.sqrt(($[0] - F[0]) ** 2 + ($[2] - F[2]) ** 2), J = Y > D * 0.5;
    return J && D > 0.01 ? "BRACE" : J ? "COLUMN" : "BEAM";
  }
  function Pl(e) {
    var _a, _b;
    const { nodes: m, elements: F, nodeInputs: $, elementInputs: Y } = e, D = [];
    return D.push("# OpenSeesPy model exported from Awatif FEM Studio"), D.push(`# ${m.length} nodes, ${F.length} elements`), D.push(""), D.push("import openseespy.opensees as ops"), D.push(""), D.push("ops.wipe()"), D.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), D.push(""), D.push("# --- Nodes ---"), m.forEach((J, j) => {
      D.push(`ops.node(${j + 1}, ${J[0]}, ${J[1]}, ${J[2]})`);
    }), D.push(""), D.push("# --- Boundary Conditions ---"), (_a = $.supports) == null ? void 0 : _a.forEach((J, j) => {
      const N = J.map((G) => G ? 1 : 0).join(", ");
      D.push(`ops.fix(${j + 1}, ${N})`);
    }), D.push(""), D.push("# --- Geometric Transformations ---"), D.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), D.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), D.push(""), D.push("# --- Elements (elasticBeamColumn) ---"), F.forEach((J, j) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (J.length !== 2) return;
      const N = m[J[0]], G = m[J[1]], k = Math.abs(G[2] - N[2]) > Math.max(Math.abs(G[0] - N[0]), Math.abs(G[1] - N[1])) ? 2 : 1, re = ((_a2 = Y.areas) == null ? void 0 : _a2.get(j)) ?? 1, xe = ((_b2 = Y.elasticities) == null ? void 0 : _b2.get(j)) ?? 2e5, be = ((_c = Y.shearModuli) == null ? void 0 : _c.get(j)) ?? 8e4, ce = ((_d = Y.torsionalConstants) == null ? void 0 : _d.get(j)) ?? 1, ne = ((_e = Y.momentsOfInertiaY) == null ? void 0 : _e.get(j)) ?? 1, O = ((_f = Y.momentsOfInertiaZ) == null ? void 0 : _f.get(j)) ?? 1;
      D.push(`ops.element('elasticBeamColumn', ${j + 1}, ${J[0] + 1}, ${J[1] + 1}, ${re}, ${xe}, ${be}, ${ce}, ${ne}, ${O}, ${k})`);
    }), D.push(""), $.loads && $.loads.size > 0 && (D.push("# --- Loads ---"), D.push("ops.timeSeries('Linear', 1)"), D.push("ops.pattern('Plain', 1, 1)"), $.loads.forEach((J, j) => {
      const N = J.map((G) => G).join(", ");
      D.push(`ops.load(${j + 1}, ${N})`);
    }), D.push("")), D.push("# --- Analysis ---"), D.push("ops.system('BandGeneral')"), D.push("ops.numberer('RCM')"), D.push("ops.constraints('Plain')"), D.push("ops.integrator('LoadControl', 1.0)"), D.push("ops.algorithm('Linear')"), D.push("ops.analysis('Static')"), D.push("ops.analyze(1)"), D.push(""), D.push("# --- Results ---"), D.push('print("\\n=== Displacements ===")'), m.forEach((J, j) => {
      D.push(`print(f"Node {${j + 1}}: {ops.nodeDisp(${j + 1})}")`);
    }), D.push(""), D.push('print("\\n=== Reactions ===")'), D.push("ops.reactions()"), (_b = $.supports) == null ? void 0 : _b.forEach((J, j) => {
      D.push(`print(f"Node {${j + 1}}: {ops.nodeReaction(${j + 1})}")`);
    }), D.join(`
`);
  }
  function Nl(e) {
    var _a, _b;
    const { nodes: m, elements: F, nodeInputs: $, elementInputs: Y } = e, D = [];
    return D.push("# OpenSees Tcl model exported from Awatif FEM Studio"), D.push(`# ${m.length} nodes, ${F.length} elements`), D.push(""), D.push("wipe"), D.push("model basic -ndm 3 -ndf 6"), D.push(""), D.push("# --- Nodes ---"), m.forEach((J, j) => {
      D.push(`node ${j + 1} ${J[0]} ${J[1]} ${J[2]}`);
    }), D.push(""), D.push("# --- Boundary Conditions ---"), (_a = $.supports) == null ? void 0 : _a.forEach((J, j) => {
      const N = J.map((G) => G ? 1 : 0).join(" ");
      D.push(`fix ${j + 1} ${N}`);
    }), D.push(""), D.push("# --- Geometric Transformations ---"), D.push("geomTransf Linear 1 0.0 0.0 1.0"), D.push("geomTransf Linear 2 -1.0 0.0 0.0"), D.push(""), D.push("# --- Elements ---"), F.forEach((J, j) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (J.length !== 2) return;
      const N = m[J[0]], G = m[J[1]], k = Math.abs(G[2] - N[2]) > Math.max(Math.abs(G[0] - N[0]), Math.abs(G[1] - N[1])) ? 2 : 1, re = ((_a2 = Y.areas) == null ? void 0 : _a2.get(j)) ?? 1, xe = ((_b2 = Y.elasticities) == null ? void 0 : _b2.get(j)) ?? 2e5, be = ((_c = Y.shearModuli) == null ? void 0 : _c.get(j)) ?? 8e4, ce = ((_d = Y.torsionalConstants) == null ? void 0 : _d.get(j)) ?? 1, ne = ((_e = Y.momentsOfInertiaY) == null ? void 0 : _e.get(j)) ?? 1, O = ((_f = Y.momentsOfInertiaZ) == null ? void 0 : _f.get(j)) ?? 1;
      D.push(`element elasticBeamColumn ${j + 1} ${J[0] + 1} ${J[1] + 1} ${re} ${xe} ${be} ${ce} ${ne} ${O} ${k}`);
    }), D.push(""), $.loads && $.loads.size > 0 && (D.push("# --- Loads ---"), D.push("timeSeries Linear 1"), D.push("pattern Plain 1 1 {"), $.loads.forEach((J, j) => {
      const N = J.map((G) => G).join(" ");
      D.push(`  load ${j + 1} ${N}`);
    }), D.push("}"), D.push("")), D.push("# --- Analysis ---"), D.push("system BandGeneral"), D.push("numberer RCM"), D.push("constraints Plain"), D.push("integrator LoadControl 1.0"), D.push("algorithm Linear"), D.push("analysis Static"), D.push("analyze 1"), D.push(""), D.push("# --- Results ---"), D.push('puts "\\n=== Displacements ==="'), m.forEach((J, j) => {
      D.push(`puts "Node ${j + 1}: [nodeDisp ${j + 1}]"`);
    }), D.push('puts "\\n=== Reactions ==="'), D.push("reactions"), (_b = $.supports) == null ? void 0 : _b.forEach((J, j) => {
      D.push(`puts "Node ${j + 1}: [nodeReaction ${j + 1}]"`);
    }), D.join(`
`);
  }
  function Ol(e) {
    const m = [], F = [], $ = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map();
    for (const xe of e.split(/\r?\n/)) {
      const be = xe.trim(), ce = be.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ce) {
        const U = parseInt(ce[1]), ee = m.length;
        m.push([
          parseFloat(ce[2]),
          parseFloat(ce[3]),
          parseFloat(ce[4])
        ]), k.set(U, ee);
        continue;
      }
      const ne = be.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (ne) {
        const U = parseInt(ne[1]), ee = k.get(U);
        ee !== void 0 && $.set(ee, [
          ne[2] === "1",
          ne[3] === "1",
          ne[4] === "1",
          ne[5] === "1",
          ne[6] === "1",
          ne[7] === "1"
        ]);
        continue;
      }
      const O = be.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (O) {
        const U = parseInt(O[1]), ee = k.get(parseInt(O[2])), Ie = k.get(parseInt(O[3]));
        if (ee !== void 0 && Ie !== void 0) {
          const Ae = F.length;
          F.push([
            ee,
            Ie
          ]), re.set(U, Ae), j.set(Ae, parseFloat(O[4])), D.set(Ae, parseFloat(O[5])), J.set(Ae, parseFloat(O[6])), ve.set(Ae, parseFloat(O[7])), N.set(Ae, parseFloat(O[8])), G.set(Ae, parseFloat(O[9]));
        }
        continue;
      }
      const _ = be.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (_) {
        const U = k.get(parseInt(_[1]));
        U !== void 0 && Y.set(U, [
          parseFloat(_[2]),
          parseFloat(_[3]),
          parseFloat(_[4]),
          parseFloat(_[5]),
          parseFloat(_[6]),
          parseFloat(_[7])
        ]);
      }
    }
    return {
      nodes: m,
      elements: F,
      nodeInputs: {
        supports: $,
        loads: Y
      },
      elementInputs: {
        elasticities: D,
        shearModuli: J,
        areas: j,
        momentsOfInertiaY: N,
        momentsOfInertiaZ: G,
        torsionalConstants: ve
      }
    };
  }
  function ql(e) {
    const m = [], F = [], $ = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
    for (const re of e.split(/\r?\n/)) {
      const xe = re.trim();
      if (xe.startsWith("#") || xe.startsWith("//")) continue;
      const be = xe.split(/\s+/);
      if (be[0] === "node" && be.length >= 5) {
        const ce = parseInt(be[1]), ne = m.length;
        m.push([
          parseFloat(be[2]),
          parseFloat(be[3]),
          parseFloat(be[4])
        ]), k.set(ce, ne);
        continue;
      }
      if (be[0] === "fix" && be.length >= 8) {
        const ce = k.get(parseInt(be[1]));
        ce !== void 0 && $.set(ce, [
          be[2] === "1",
          be[3] === "1",
          be[4] === "1",
          be[5] === "1",
          be[6] === "1",
          be[7] === "1"
        ]);
        continue;
      }
      if (be[0] === "element" && be[1] === "elasticBeamColumn" && be.length >= 12) {
        const ce = k.get(parseInt(be[3])), ne = k.get(parseInt(be[4]));
        if (ce !== void 0 && ne !== void 0) {
          const O = F.length;
          F.push([
            ce,
            ne
          ]), j.set(O, parseFloat(be[5])), D.set(O, parseFloat(be[6])), J.set(O, parseFloat(be[7])), ve.set(O, parseFloat(be[8])), N.set(O, parseFloat(be[9])), G.set(O, parseFloat(be[10]));
        }
        continue;
      }
      if (be[0] === "load" && be.length >= 8) {
        const ce = k.get(parseInt(be[1]));
        ce !== void 0 && Y.set(ce, [
          parseFloat(be[2]),
          parseFloat(be[3]),
          parseFloat(be[4]),
          parseFloat(be[5]),
          parseFloat(be[6]),
          parseFloat(be[7])
        ]);
      }
    }
    return {
      nodes: m,
      elements: F,
      nodeInputs: {
        supports: $,
        loads: Y
      },
      elementInputs: {
        elasticities: D,
        shearModuli: J,
        areas: j,
        momentsOfInertiaY: N,
        momentsOfInertiaZ: G,
        torsionalConstants: ve
      }
    };
  }
  function Xt(e) {
    const m = [];
    let F = 0, $ = false, Y = "";
    for (let D = 0; D < e.length; D++) {
      const J = e[D];
      if (J === "'" && (D === 0 || e[D - 1] !== "\\")) {
        $ = !$, Y += J;
        continue;
      }
      if ($) {
        Y += J;
        continue;
      }
      if (J === "(") {
        F++, Y += J;
        continue;
      }
      if (J === ")") {
        F--, Y += J;
        continue;
      }
      if (J === "," && F === 0) {
        m.push(Y.trim()), Y = "";
        continue;
      }
      Y += J;
    }
    return Y.trim() && m.push(Y.trim()), m;
  }
  function ca(e, m) {
    const F = Xt(e);
    if (m < F.length) {
      let $ = F[m].trim();
      return $.startsWith("'") && $.endsWith("'") && ($ = $.slice(1, -1)), $ === "$" ? null : $;
    }
    return null;
  }
  function _l(e) {
    const m = {
      schema: "",
      project: "",
      app: ""
    }, F = {}, $ = {}, Y = e.match(/FILE_SCHEMA\s*\(\s*\(\s*'([^']*)'/i);
    Y && (m.schema = Y[1]);
    const D = /^#(\d+)\s*=\s*([A-Z][A-Z0-9_]*)\s*\(([\s\S]*?)\)\s*;\s*$/gm;
    let J;
    for (; (J = D.exec(e)) !== null; ) {
      const j = parseInt(J[1]), N = J[2].toUpperCase();
      F[j] = {
        id: j,
        type: N,
        args: J[3]
      }, $[N] || ($[N] = []), $[N].push(j);
    }
    if ($.IFCPROJECT) {
      const j = F[$.IFCPROJECT[0]];
      if (j) {
        const N = ca(j.args, 2);
        N && (m.project = N);
      }
    }
    return {
      meta: m,
      entities: F,
      typeIndex: $
    };
  }
  function Gt(e, m) {
    const F = m.match(/#(\d+)/);
    return F && e[parseInt(F[1])] || null;
  }
  function da(e, m) {
    const F = Xt(m.args), $ = Gt(e, F[0]), Y = $ ? Bl(e, $) : [
      0,
      0,
      0
    ];
    let D = [
      0,
      0,
      1
    ], J = [
      1,
      0,
      0
    ];
    if (F[1] && F[1] !== "$") {
      const j = Gt(e, F[1]);
      j && (D = sa(e, j));
    }
    if (F[2] && F[2] !== "$") {
      const j = Gt(e, F[2]);
      j && (J = sa(e, j));
    }
    return {
      origin: Y,
      dirZ: D,
      dirX: J
    };
  }
  function Bl(e, m) {
    return m.args.replace(/[()]/g, "").split(",").map(($) => parseFloat($.trim())).filter(($) => !isNaN($));
  }
  function sa(e, m) {
    return m.args.replace(/[()]/g, "").split(",").map(($) => parseFloat($.trim())).filter(($) => !isNaN($));
  }
  function pa(e, m) {
    const F = Xt(m.args), $ = Gt(e, F[1]);
    let Y = {
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
    if ($ && (Y = da(e, $)), F[0] && F[0] !== "$") {
      const D = Gt(e, F[0]);
      if (D && D.type === "IFCLOCALPLACEMENT") {
        const J = pa(e, D), j = es(Y.origin, J.dirX, Qn(J.dirZ, J.dirX), J.dirZ);
        Y.origin = [
          J.origin[0] + j[0],
          J.origin[1] + j[1],
          J.origin[2] + j[2]
        ], Y.dirZ = es(Y.dirZ, J.dirX, Qn(J.dirZ, J.dirX), J.dirZ), Y.dirX = es(Y.dirX, J.dirX, Qn(J.dirZ, J.dirX), J.dirZ);
      }
    }
    return Y;
  }
  function Qn(e, m) {
    return [
      e[1] * m[2] - e[2] * m[1],
      e[2] * m[0] - e[0] * m[2],
      e[0] * m[1] - e[1] * m[0]
    ];
  }
  function es(e, m, F, $) {
    return [
      e[0] * m[0] + e[1] * F[0] + e[2] * $[0],
      e[0] * m[1] + e[1] * F[1] + e[2] * $[1],
      e[0] * m[2] + e[1] * F[2] + e[2] * $[2]
    ];
  }
  const Dl = 0.01;
  function Hl(e) {
    const m = _l(e), { entities: F, typeIndex: $ } = m, Y = [], D = [], J = /* @__PURE__ */ new Map();
    J.set("Hormigon", {
      E: 2132888792e-2,
      nu: 0.2,
      rho: 2.4
    }), J.set("Acero", {
      E: 2e8,
      nu: 0.3,
      rho: 7.85
    });
    let j = 0, N = 0;
    function G(ne, O, _) {
      for (const U of Y) {
        const ee = U.x - ne, Ie = U.y - O, Ae = U.z - _;
        if (Math.sqrt(ee * ee + Ie * Ie + Ae * Ae) < Dl) return U.id;
      }
      return Y.push({
        id: j,
        x: ne,
        y: O,
        z: _
      }), j++;
    }
    function ve(ne) {
      const O = ca(ne.args, 2) || "", _ = $.IFCRELASSOCIATESMATERIAL || [];
      for (const ee of _) {
        const Ie = F[ee];
        if (!Ie) continue;
        const Ae = Xt(Ie.args);
        if ((Ae[4] || Ae[3] || "").includes(`#${ne.id}`)) {
          const $e = Ae[5] || Ae[4] || "", He = Gt(F, $e);
          if (He) return k(He);
        }
      }
      const U = O.match(/(\d+)\s*[xX×]\s*(\d+)/);
      return U ? {
        b: parseFloat(U[1]) / 100,
        h: parseFloat(U[2]) / 100,
        name: O
      } : {
        b: 0.3,
        h: 0.3,
        name: O || "Default"
      };
    }
    function k(ne) {
      const O = ne.type;
      if (O === "IFCRECTANGLEPROFILEDEF") {
        const _ = Xt(ne.args), U = (_[1] || "").replace(/'/g, ""), ee = parseFloat(_[3]) || 0.3, Ie = parseFloat(_[4]) || 0.3;
        return {
          b: ee,
          h: Ie,
          name: U
        };
      }
      if (O === "IFCMATERIALPROFILE") {
        const _ = Xt(ne.args), U = _[2] || _[1] || "", ee = Gt(F, U);
        if (ee) return k(ee);
      }
      if (O === "IFCMATERIALPROFILESET") {
        const _ = Xt(ne.args), ee = (_[2] || _[1] || "").match(/#(\d+)/);
        if (ee) {
          const Ie = F[parseInt(ee[1])];
          if (Ie) return k(Ie);
        }
      }
      if (O === "IFCMATERIALPROFILESETUSAGE") {
        const U = Xt(ne.args)[0], ee = Gt(F, U);
        if (ee) return k(ee);
      }
      return {
        b: 0.3,
        h: 0.3,
        name: "Unknown"
      };
    }
    function re(ne, O, _, U) {
      const ee = $[ne] || [];
      for (const Ie of ee) {
        const Ae = F[Ie];
        if (!Ae) continue;
        const Be = Xt(Ae.args), $e = Be[5] || Be[4] || "", He = Gt(F, $e);
        if (!He) continue;
        const je = pa(F, He), me = ve(Ae);
        let Me = U, Fe = null, Xe = null;
        const Ke = Be[6] || Be[5] || "", Ue = Gt(F, Ke);
        if (Ue) {
          const xt = $n(F, Ue);
          xt && (Me = xt.depth || U, Fe = xt.origin, Xe = xt.direction);
        }
        const ft = Fe ? Fe[0] : je.origin[0], it = Fe ? Fe[1] : je.origin[1], ht = Fe ? Fe[2] : je.origin[2], St = Xe || (_ === "Z" ? je.dirZ : je.dirX), ut = G(ft, it, ht), Ct = G(ft + St[0] * Me, it + St[1] * Me, ht + St[2] * Me);
        D.push({
          id: N++,
          type: "frame",
          nodeIds: [
            ut,
            Ct
          ],
          category: O,
          sectionName: me.name,
          b: me.b,
          h: me.h,
          material: "Hormigon",
          expressID: Ie
        });
      }
    }
    re("IFCCOLUMN", "column", "Z", 3), re("IFCBEAM", "beam", "X", 5), re("IFCMEMBER", "diagonal", "X", 4), re("IFCPILE", "pile", "Z", 10), re("IFCSTAIRFLIGHT", "stair", "X", 3), re("IFCRAMPFLIGHT", "ramp", "X", 4);
    function xe(ne, O, _) {
      const U = $[ne] || [];
      for (const ee of U) {
        const Ie = F[ee];
        if (!Ie) continue;
        const Ae = Xt(Ie.args), Be = Ae[5] || Ae[4] || "";
        if (!Gt(F, Be)) continue;
        let He = _;
        const je = Ae[6] || Ae[5] || "", me = Gt(F, je);
        me && (He = jl(F, me) || _);
        const Me = O === "slab" ? `Losa e=${(He * 100).toFixed(0)}cm` : O === "wall" ? `Muro e=${(He * 100).toFixed(0)}cm` : O === "footing" ? `Zapata e=${(He * 100).toFixed(0)}cm` : `${O} e=${(He * 100).toFixed(0)}cm`;
        D.push({
          id: N++,
          type: "shell",
          nodeIds: [],
          category: O,
          sectionName: Me,
          b: He,
          h: He,
          material: "Hormigon",
          expressID: ee
        });
      }
    }
    xe("IFCSLAB", "slab", 0.15), xe("IFCWALL", "wall", 0.2), xe("IFCWALLSTANDARDCASE", "wall", 0.2), xe("IFCFOOTING", "footing", 0.5), xe("IFCROOF", "slab", 0.12);
    const be = [], ce = $.IFCBUILDINGSTOREY || [];
    for (const ne of ce) {
      const O = F[ne];
      if (!O) continue;
      const _ = Xt(O.args), U = (_[2] || "").replace(/'/g, ""), ee = parseFloat(_[9]) || 0;
      be.push({
        name: U,
        elevation: ee
      });
    }
    return be.sort((ne, O) => ne.elevation - O.elevation), {
      nodes: Y,
      elements: D,
      materials: J,
      levels: be,
      projectName: m.meta.project,
      schema: m.meta.schema
    };
  }
  function $n(e, m) {
    const F = Xt(m.args);
    for (const $ of F) {
      const Y = $.match(/#(\d+)/g) || [];
      for (const D of Y) {
        const J = parseInt(D.replace("#", "")), j = e[J];
        if (j) {
          if (j.type === "IFCEXTRUDEDAREASOLID") {
            const N = Xt(j.args), G = parseFloat(N[3]) || 0, ve = Gt(e, N[1]);
            let k = [
              0,
              0,
              0
            ];
            ve && (k = da(e, ve).origin);
            const re = Gt(e, N[2]);
            let xe = [
              0,
              0,
              1
            ];
            if (re && re.type === "IFCDIRECTION") {
              const be = re.args.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
              be && be.length >= 3 && (xe = be.map(Number));
            }
            return {
              depth: G,
              origin: k,
              direction: xe
            };
          }
          if (j.type === "IFCSHAPEREPRESENTATION") {
            const N = $n(e, j);
            if (N) return N;
          }
          if (j.type === "IFCMAPPEDITEM") {
            const N = Xt(j.args), G = Gt(e, N[0]);
            if (G && G.type === "IFCREPRESENTATIONMAP") {
              const ve = Xt(G.args), k = Gt(e, ve[1]);
              if (k) {
                const re = $n(e, k);
                if (re) return re;
              }
            }
          }
        }
      }
    }
    return null;
  }
  function jl(e, m) {
    const F = $n(e, m);
    return F ? F.depth : null;
  }
  const fa = [
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
  ], ua = [
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
  ], ma = /* @__PURE__ */ new Map();
  for (const [e, m] of fa) ma.set(e, m);
  function Wl(e) {
    return ma.get(e) ?? "other";
  }
  new Set(ua);
  async function Gl(e, m) {
    var _a, _b;
    const F = window.WebIFC;
    if (!F) throw new Error("web-ifc no disponible. Verifica que web-ifc-api-iife.js se carg\xF3.");
    const $ = new F.IfcAPI(), Y = window.location.pathname.replace(/\/[^/]*$/, "/");
    $.SetWasmPath(Y), await $.Init();
    const D = $.OpenModel(new Uint8Array(m)), J = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), N = {
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
    for (const [xe] of fa) {
      const be = Wl(xe);
      try {
        const ce = $.GetLineIDsWithType(D, xe);
        for (let ne = 0; ne < ce.size(); ne++) {
          const O = ce.get(ne);
          J.set(O, be);
          let _ = "";
          try {
            const U = $.GetLine(D, O);
            _ = ((_a = U == null ? void 0 : U.Name) == null ? void 0 : _a.value) || ((_b = U == null ? void 0 : U.Description) == null ? void 0 : _b.value) || "";
          } catch {
          }
          j.set(O, {
            expressID: O,
            category: be,
            name: _,
            typeName: N[xe] || "Otro"
          });
        }
      } catch {
      }
    }
    const G = /* @__PURE__ */ new Map();
    for (const xe of ua) {
      const be = new sn();
      be.name = `ifc-${xe}`, e.add(be), G.set(xe, be);
    }
    const ve = new Va();
    let k = 0;
    const re = new Xs({
      color: 13421772,
      transparent: true,
      opacity: 0.9,
      side: Ks
    });
    return $.StreamAllMeshes(D, (xe) => {
      const be = J.get(xe.expressID) ?? "other", ce = G.get(be), ne = xe.geometries;
      for (let O = 0; O < ne.size(); O++) {
        const _ = ne.get(O), U = $.GetGeometry(D, _.geometryExpressID), ee = $.GetVertexArray(U.GetVertexData(), U.GetVertexDataSize()), Ie = $.GetIndexArray(U.GetIndexData(), U.GetIndexDataSize()), Ae = new oo(), Be = new Float32Array(ee.length / 2), $e = new Float32Array(ee.length / 2);
        for (let Fe = 0; Fe < ee.length; Fe += 6) {
          const Xe = Fe / 2;
          Be[Xe] = ee[Fe], Be[Xe + 1] = ee[Fe + 1], Be[Xe + 2] = ee[Fe + 2], $e[Xe] = ee[Fe + 3], $e[Xe + 1] = ee[Fe + 4], $e[Xe + 2] = ee[Fe + 5];
        }
        Ae.setAttribute("position", new xn(Be, 3)), Ae.setAttribute("normal", new xn($e, 3)), Ae.setIndex(new xn(new Uint32Array(Ie), 1));
        const He = new Ua();
        He.fromArray(_.flatTransformation);
        let je;
        const me = _.color;
        me && (me.x !== 1 || me.y !== 1 || me.z !== 1) ? je = new Xs({
          color: new Xa(me.x, me.y, me.z),
          transparent: me.w < 1,
          opacity: me.w,
          side: Ks
        }) : je = re, je._origOpacity = je.opacity;
        const Me = new la(Ae, je);
        Me.applyMatrix4(He), Me.userData.expressID = xe.expressID, Me.userData.category = be, ce.add(Me), ve.expandByObject(Me), k++, U.delete();
      }
    }), $.CloseModel(D), {
      meshCount: k,
      bbox: ve,
      detailCategories: G,
      elementInfo: j
    };
  }
  aa = Jo.state(false);
  Ql = function(e) {
    e.nodeInputs || (e.nodeInputs = Jo.state({})), e.elementInputs || (e.elementInputs = Jo.state({})), e.deformOutputs || (e.deformOutputs = Jo.state({})), e.analyzeOutputs || (e.analyzeOutputs = Jo.state({}));
    let m = "tonf", F = "m", $ = Fo(m, F), Y = {
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
    }, J = /* @__PURE__ */ new Set(), j = /* @__PURE__ */ new Set();
    let N = false;
    const G = /* @__PURE__ */ new Set(), ve = /* @__PURE__ */ new Map();
    let k = "", re = {}, xe = null, be = "", ce = [], ne = [], O = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set(), U = /* @__PURE__ */ new Set(), ee = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), Ae = null, Be = [], $e = 0.2, He = 2, je = 2, me = false, Me = 2, Fe = "x", Xe = /* @__PURE__ */ new Set(), Ke = true, Ue = 0.15, ft = 2, it = 2, ht = /* @__PURE__ */ new Set(), St = false, ut = "perimeter";
    const Ct = () => ({
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
    }), xt = (t, o) => ({
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
      }, Ct),
      vigasY: Array.from({
        length: o
      }, Ct)
    }), Re = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let Ft = 0, Et = 3, ze = false, Ce = 0, ge = null, De = 0, he = [], ke = 1, Je = true;
    const qe = pl();
    qe.div.style.display = "none";
    function ct() {
      const t = un()[k];
      return t && t[Ft] ? t[Ft].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let Ge = [], Ye = [], mt = 0, Ze = [], dt = null;
    function Ht() {
      if (!dt) return;
      const t = et();
      t && t.scene.remove(dt), dt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), dt = null;
    }
    function Wt(t, o, n, l, s) {
      Ht();
      const d = et();
      if (!d) return;
      dt = new sn(), dt.name = "refGrid";
      const a = Math.min(...t), r = Math.max(...t), f = Math.min(...o), c = Math.max(...o), i = Math.max(...n), b = r - a || 1, E = c - f || 1, S = 3359829, y = 2241348;
      for (const v of n) {
        for (const I of o) {
          const A = new oo().setFromPoints([
            new Oe(a, v, I),
            new Oe(r, v, I)
          ]), T = new jo({
            color: S,
            dashSize: b * 0.015,
            gapSize: b * 0.01,
            transparent: true,
            opacity: 0.25
          }), B = new Lo(A, T);
          B.computeLineDistances(), B.renderOrder = -10, dt.add(B);
        }
        for (const I of t) {
          const A = new oo().setFromPoints([
            new Oe(I, v, f),
            new Oe(I, v, c)
          ]), T = new jo({
            color: S,
            dashSize: E * 0.015,
            gapSize: E * 0.01,
            transparent: true,
            opacity: 0.25
          }), B = new Lo(A, T);
          B.computeLineDistances(), B.renderOrder = -10, dt.add(B);
        }
      }
      for (const v of t) for (const I of o) {
        const A = new oo().setFromPoints([
          new Oe(v, 0, I),
          new Oe(v, i, I)
        ]), T = new jo({
          color: y,
          dashSize: i * 0.01,
          gapSize: i * 8e-3,
          transparent: true,
          opacity: 0.15
        }), B = new Lo(A, T);
        B.computeLineDistances(), B.renderOrder = -10, dt.add(B);
      }
      const p = Math.min(b, E) * 0.015;
      for (const v of n) for (const I of t) for (const A of o) {
        const T = [
          new Oe(I - p, v, A),
          new Oe(I + p, v, A),
          new Oe(I, v, A - p),
          new Oe(I, v, A + p)
        ], B = new oo().setFromPoints(T), H = new Go({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), h = new Wo(B, H);
        h.renderOrder = -5, dt.add(h);
      }
      dt.traverse((v) => {
        v.material && (Array.isArray(v.material) ? v.material.forEach((I) => {
          I.clippingPlanes = [];
        }) : v.material.clippingPlanes = []);
      }), d.scene.add(dt), d.render();
    }
    let Rt = null;
    function ss() {
      if (!Rt) return;
      const t = et();
      t && t.scene.remove(Rt), Rt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Rt = null;
    }
    function Xo(t, o, n, l, s) {
      ss();
      const d = et();
      if (!d) return;
      Rt = new sn(), Rt.name = "gridAxes";
      const a = Math.min(...t), r = Math.max(...t), f = Math.min(...o), c = Math.max(...o), i = r - a || 1, b = c - f || 1, E = Math.max(i, b), S = E * 0.08, y = l || t.map((h, u) => String.fromCharCode(65 + u)), p = s || o.map((h, u) => String(u + 1)), v = E * 0.018, I = o.length <= 1, A = 8947848;
      for (let h = 0; h < t.length; h++) {
        const u = t[h];
        if (I) {
          const w = -S - v * 1.5;
          In(u, 0, 0, u, 0, w + v, A, Rt), kn(y[h] || `${h}`, u, 0, w, v, Rt);
        } else {
          const w = f - S - v * 1.5;
          In(u, f, 0, u, w + v, 0, A, Rt), kn(y[h] || `${h}`, u, w, 0, v, Rt);
        }
      }
      if (!I) for (let h = 0; h < o.length; h++) {
        const u = o[h], w = a - S - v * 1.5;
        In(a, u, 0, w + v, u, 0, A, Rt), kn(p[h] || `${h}`, w, u, 0, v, Rt);
      }
      const T = v * 1.8, B = S * 1.2, H = S * 1.2;
      for (let h = 0; h < t.length - 1; h++) {
        const u = t[h], w = t[h + 1], L = Math.abs(w - u), R = (u + w) / 2, W = `${L.toFixed(2)} m`;
        I ? (Sn(W, R, 0, -B, T, Rt), En(u, 0, -B * 0.7, w, 0, -B * 0.7, 16763904, Rt)) : (Sn(W, R, f - H, 0, T, Rt), En(u, f - H * 0.7, 0, w, f - H * 0.7, 0, 16763904, Rt));
      }
      if (!I) for (let h = 0; h < o.length - 1; h++) {
        const u = o[h], w = o[h + 1], L = Math.abs(w - u), R = (u + w) / 2, W = `${L.toFixed(2)} m`;
        Sn(W, a - B, R, 0, T, Rt), En(a - B * 0.7, u, 0, a - B * 0.7, w, 0, 16763904, Rt);
      }
      Rt.traverse((h) => {
        h.material && (Array.isArray(h.material) ? h.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : h.material.clippingPlanes = []);
      }), d.scene.add(Rt), d.render();
    }
    let Yt = null;
    function as() {
      if (!Yt) return;
      const t = et();
      t && t.scene.remove(Yt), Yt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Yt = null;
    }
    function wn(t, o, n) {
      if (as(), t.length === 0) return;
      const l = et();
      if (!l) return;
      Yt = new sn(), Yt.name = "storyLevels";
      const s = Math.min(...o), d = Math.max(...o), a = Math.min(...n), r = Math.max(...n), f = d - s || 1, c = r - a || 1, i = Math.max(f, c), b = i * 0.06, E = n.length <= 1, S = 4491519, y = i * 0.015;
      for (const p of t) {
        const v = p.elev;
        E ? (Ko(s - b, 0, v, d + b, 0, v, S, Yt), ls(p.name, d + b * 1.5, 0, v, y, Yt)) : (Ko(s, a, v, d, a, v, S, Yt), Ko(d, a, v, d, r, v, S, Yt), Ko(d, r, v, s, r, v, S, Yt), Ko(s, r, v, s, a, v, S, Yt), ls(p.name, s - b * 1.5, a, v, y, Yt));
      }
      Yt.traverse((p) => {
        p.material && (Array.isArray(p.material) ? p.material.forEach((v) => {
          v.clippingPlanes = [];
        }) : p.material.clippingPlanes = []);
      }), l.scene.add(Yt), l.render();
    }
    function Ko(t, o, n, l, s, d, a, r) {
      const f = Math.sqrt((l - t) ** 2 + (s - o) ** 2 + (d - n) ** 2) || 1, c = new oo().setFromPoints([
        new Oe(t, o, n),
        new Oe(l, s, d)
      ]), i = new jo({
        color: a,
        dashSize: f * 0.02,
        gapSize: f * 0.01,
        transparent: true,
        opacity: 0.5
      }), b = new Lo(c, i);
      b.computeLineDistances(), b.renderOrder = 50, r.add(b);
    }
    function ls(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), r = 512, f = 64;
      a.width = r, a.height = f;
      const c = a.getContext("2d");
      c.fillStyle = "rgba(30,60,120,0.8)";
      const i = 8;
      c.beginPath(), c.moveTo(i, 0), c.lineTo(r - i, 0), c.quadraticCurveTo(r, 0, r, i), c.lineTo(r, f - i), c.quadraticCurveTo(r, f, r - i, f), c.lineTo(i, f), c.quadraticCurveTo(0, f, 0, f - i), c.lineTo(0, i), c.quadraticCurveTo(0, 0, i, 0), c.closePath(), c.fill(), c.fillStyle = "#88bbff", c.font = "bold 38px monospace", c.textAlign = "center", c.textBaseline = "middle", c.fillText(t, r / 2, f / 2);
      const b = new Vn(a);
      b.needsUpdate = true;
      const E = new fn({
        map: b,
        depthTest: false,
        transparent: true
      }), S = new pn(E);
      S.position.set(o, n, l), S.scale.set(s * 8, s, 1), S.renderOrder = 101, d.add(S);
    }
    function Sn(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), r = 256, f = 64;
      a.width = r, a.height = f;
      const c = a.getContext("2d");
      c.fillStyle = "rgba(0,0,0,0.75)";
      const i = 8;
      c.beginPath(), c.moveTo(i, 0), c.lineTo(r - i, 0), c.quadraticCurveTo(r, 0, r, i), c.lineTo(r, f - i), c.quadraticCurveTo(r, f, r - i, f), c.lineTo(i, f), c.quadraticCurveTo(0, f, 0, f - i), c.lineTo(0, i), c.quadraticCurveTo(0, 0, i, 0), c.closePath(), c.fill(), c.fillStyle = "#ffcc00", c.font = "bold 36px monospace", c.textAlign = "center", c.textBaseline = "middle", c.fillText(t, r / 2, f / 2);
      const b = new ol(a);
      b.minFilter = nl;
      const E = new fn({
        map: b,
        transparent: true,
        depthTest: false
      }), S = new pn(E);
      S.position.set(o, n, l);
      const y = r / f;
      S.scale.set(s * y, s, 1), S.renderOrder = 999, d.add(S);
    }
    function En(t, o, n, l, s, d, a, r) {
      const f = [
        new Oe(t, o, n),
        new Oe(l, s, d)
      ], c = new oo().setFromPoints(f), i = new Go({
        color: a,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), b = new Lo(c, i);
      b.renderOrder = 998, r.add(b);
    }
    function In(t, o, n, l, s, d, a, r) {
      const f = new oo().setFromPoints([
        new Oe(t, o, n),
        new Oe(l, s, d)
      ]), c = new jo({
        color: a,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(d - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(d - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), i = new Lo(f, c);
      i.computeLineDistances(), r.add(i);
    }
    function kn(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), r = 128;
      a.width = r, a.height = r;
      const f = a.getContext("2d");
      f.beginPath(), f.arc(r / 2, r / 2, r * 0.42, 0, Math.PI * 2), f.fillStyle = "rgba(255,255,255,0.9)", f.fill(), f.lineWidth = r * 0.04, f.strokeStyle = "#555", f.stroke(), f.fillStyle = "#222", f.font = `bold ${r * 0.45}px Arial`, f.textAlign = "center", f.textBaseline = "middle", f.fillText(t, r / 2, r / 2 + r * 0.02);
      const c = new Vn(a);
      c.needsUpdate = true;
      const i = new fn({
        map: c,
        depthTest: false,
        transparent: true
      }), b = new pn(i);
      b.position.set(o, n, l);
      const E = s * 2;
      b.scale.set(E, E, 1), b.renderOrder = 100, d.add(b);
    }
    const Qe = {
      addNode(t, o, n) {
        const l = [
          ...e.nodes.val
        ], s = l.length;
        return l.push([
          t,
          o,
          n
        ]), e.nodes.val = l, console.log(`Node ${s} at (${t}, ${o}, ${n})`), tt(), s;
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
        const n = e.elements.val.map(([l, s]) => {
          const d = l > t ? l - 1 : l, a = s > t ? s - 1 : s;
          return l === t || s === t ? null : [
            d,
            a
          ];
        }).filter((l) => l !== null);
        e.nodes.val = o, e.elements.val = n, console.log(`Node ${t} removed`), tt();
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
        ]), e.elements.val = n, console.log(`Element ${l}: node ${t} -> node ${o}`), tt(), l;
      },
      removeFrame(t) {
        const o = [
          ...e.elements.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        o.splice(t, 1), e.elements.val = o, console.log(`Element ${t} removed`), tt();
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
        ]), n.supports = l, e.nodeInputs.val = n, console.log(`Support added at node ${t}`), tt();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(t), o.supports = n, e.nodeInputs.val = o, console.log(`Support removed from node ${t}`), tt();
      },
      addLoad(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(t, o), n.loads = l, e.nodeInputs.val = n, console.log(`Load added at node ${t}: [${o.join(", ")}]`), tt();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(t), o.loads = n, e.nodeInputs.val = o, console.log(`Load removed from node ${t}`), tt();
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
          dof: n.map((s) => s ? 1 : 0).join("")
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
        const n = Te.querySelectorAll("input[type=checkbox]");
        for (const l of n) {
          const s = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || "", d = l.id || "";
          if (s.toLowerCase().includes(t.toLowerCase()) || d.toLowerCase().includes(t.toLowerCase())) {
            const a = l;
            return a.checked = o !== void 0 ? o : !a.checked, a.dispatchEvent(new Event("change", {
              bubbles: true
            })), console.log(`${s || d}: ${a.checked}`), a.checked;
          }
        }
        console.log(`Setting "${t}" not found. Use cad.settings() to list.`);
      },
      settings() {
        const t = Te.querySelectorAll("input[type=checkbox]"), o = {};
        return t.forEach((n) => {
          var _a2, _b, _c, _d;
          const l = n, s = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || l.id || "?";
          o[s] = l.checked;
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
          Ht(), console.log("Reference grid cleared");
          return;
        }
        const l = [
          0
        ];
        for (const a of t) l.push(l[l.length - 1] + a);
        const s = [
          0
        ];
        for (const a of o || [
          0
        ]) s.push(s[s.length - 1] + a);
        const d = [
          0
        ];
        for (const a of n || [
          3
        ]) d.push(d[d.length - 1] + a);
        Wt(l, s, d), Ge = l.map((a, r) => ({
          label: String.fromCharCode(65 + r),
          coord: a
        })), Ye = s.map((a, r) => ({
          label: `${r + 1}`,
          coord: a
        })), mt = d[d.length - 1], Ze = d.map((a, r) => ({
          label: r === 0 ? "Base" : `P${r}`,
          elev: a
        })), Xo(Ge.map((a) => a.coord), Ye.map((a) => a.coord), mt, Ge.map((a) => a.label), Ye.map((a) => a.label));
        {
          const a = d.map((r, f) => ({
            name: f === 0 ? "Base" : `P${f}`,
            height: f > 0 ? r - d[f - 1] : 0,
            elev: r
          }));
          wn(a, Ge.map((r) => r.coord), Ye.map((r) => r.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${s}] Y=[${d}]`), {
          xCoords: l,
          zCoords: s,
          yLevels: d
        };
      },
      build(t) {
        var _a2;
        if (Ge.length === 0 || Ze.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const o = (t == null ? void 0 : t.col) || "40x40", n = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [s, d] = o.split("x").map((q) => parseFloat(q) / 100), [a, r] = n.split("x").map((q) => parseFloat(q) / 100), f = Ge.map((q) => q.coord), c = Ye.map((q) => q.coord), i = Ze.map((q) => q.elev), b = f.length, E = c.length, S = i.length, y = S - 1, p = [], v = {};
        for (let q = 0; q < S; q++) for (let fe = 0; fe < E; fe++) for (let oe = 0; oe < b; oe++) v[`${oe},${fe},${q}`] = p.length, p.push([
          f[oe],
          c[fe],
          i[q]
        ]);
        const I = [], A = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set(), B = /* @__PURE__ */ new Map();
        for (let q = 0; q < y; q++) for (let fe = 0; fe < E; fe++) for (let oe = 0; oe < b; oe++) {
          const pe = I.length;
          I.push([
            v[`${oe},${fe},${q}`],
            v[`${oe},${fe},${q + 1}`]
          ]), A.add(pe), B.set(pe, q);
        }
        for (let q = 1; q < S; q++) for (let fe = 0; fe < E; fe++) for (let oe = 0; oe < b - 1; oe++) {
          const pe = I.length;
          I.push([
            v[`${oe},${fe},${q}`],
            v[`${oe + 1},${fe},${q}`]
          ]), T.add(pe), B.set(pe, q - 1);
        }
        for (let q = 1; q < S; q++) for (let fe = 0; fe < b; fe++) for (let oe = 0; oe < E - 1; oe++) {
          const pe = I.length;
          I.push([
            v[`${fe},${oe},${q}`],
            v[`${fe},${oe + 1},${q}`]
          ]), T.add(pe), B.set(pe, q - 1);
        }
        const H = ((_a2 = t == null ? void 0 : t.braces) == null ? void 0 : _a2.toLowerCase()) || "", h = /* @__PURE__ */ new Set();
        if (H) {
          const q = H === "all" || H === "x" || H === "perimeter", fe = H === "all" || H === "y" || H === "perimeter";
          for (let oe = 0; oe < y; oe++) {
            if (q) for (let pe = 0; pe < E; pe++) {
              if (H === "perimeter" && pe !== 0 && pe !== E - 1) continue;
              const Q = Math.floor((b - 1) / 2);
              for (let ue = 0; ue < b - 1; ue++) {
                if (H === "perimeter" && ue !== Q) continue;
                const we = I.length;
                I.push([
                  v[`${ue},${pe},${oe}`],
                  v[`${ue + 1},${pe},${oe + 1}`]
                ]), h.add(we), B.set(we, oe);
                const se = I.length;
                I.push([
                  v[`${ue + 1},${pe},${oe}`],
                  v[`${ue},${pe},${oe + 1}`]
                ]), h.add(se), B.set(se, oe);
              }
            }
            if (fe) for (let pe = 0; pe < b; pe++) {
              if (H === "perimeter" && pe !== 0 && pe !== b - 1) continue;
              const Q = Math.floor((E - 1) / 2);
              for (let ue = 0; ue < E - 1; ue++) {
                if (H === "perimeter" && ue !== Q) continue;
                const we = I.length;
                I.push([
                  v[`${pe},${ue},${oe}`],
                  v[`${pe},${ue + 1},${oe + 1}`]
                ]), h.add(we), B.set(we, oe);
                const se = I.length;
                I.push([
                  v[`${pe},${ue + 1},${oe}`],
                  v[`${pe},${ue},${oe + 1}`]
                ]), h.add(se), B.set(se, oe);
              }
            }
          }
        }
        const u = 15100 * Math.sqrt(l) * 10, w = u / (2 * (1 + 0.2)), L = s * d, R = s * d ** 3 / 12, W = d * s ** 3 / 12, g = s * d * (s ** 2 + d ** 2) / 12, M = a * r, x = a * r ** 3 / 12, C = r * a ** 3 / 12, X = a * r * (a ** 2 + r ** 2) / 12, V = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map();
        for (let q = 0; q < I.length; q++) V.set(q, u), ae.set(q, w), A.has(q) ? (Z.set(q, L), K.set(q, R), de.set(q, W), ie.set(q, g), Ee.set(q, {
          type: "rect",
          b: s,
          h: d,
          name: `COL${o}`
        })) : h.has(q) ? (Z.set(q, L), K.set(q, R), de.set(q, W), ie.set(q, g), Ee.set(q, {
          type: "rect",
          b: s,
          h: d,
          name: `BR${o}`
        })) : (Z.set(q, M), K.set(q, x), de.set(q, C), ie.set(q, X), Ee.set(q, {
          type: "rect",
          b: a,
          h: r,
          name: `V${n}`
        }));
        const Ne = /* @__PURE__ */ new Map();
        for (let q = 0; q < E; q++) for (let fe = 0; fe < b; fe++) Ne.set(v[`${fe},${q},0`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        return e.nodes.val = p, e.elements.val = I, e.nodeInputs.val = {
          supports: Ne,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: V,
          shearModuli: ae,
          areas: Z,
          momentsOfInertiaZ: K,
          momentsOfInertiaY: de,
          torsionalConstants: ie,
          sectionShapes: Ee
        }, O = A, _ = T, ee = B, console.log(`Built: ${p.length} nodes, ${I.length} elements (${A.size} cols, ${T.size} beams, ${h.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${H ? `, braces=${H}` : ""}`), {
          nodes: p.length,
          elements: I.length
        };
      },
      addCol(t, o, n) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = Ge.findIndex((y) => y.label === t), s = Ye.findIndex((y) => y.label === o);
        if (l < 0) {
          console.log(`Axis "${t}" not found. Available: ${Ge.map((y) => y.label)}`);
          return;
        }
        if (s < 0) {
          console.log(`Axis "${o}" not found. Available: ${Ye.map((y) => y.label)}`);
          return;
        }
        const d = Ge[l].coord, a = Ye[s].coord, r = [
          ...e.nodes.val
        ], f = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ];
        (_b = e.elementInputs) == null ? void 0 : _b.val;
        const c = (y) => {
          const p = r.findIndex((v) => Math.abs(v[0] - d) < 1e-3 && Math.abs(v[1] - a) < 1e-3 && Math.abs(v[2] - y) < 1e-3);
          return p >= 0 ? p : (r.push([
            d,
            a,
            y
          ]), r.length - 1);
        }, i = n ? [
          Ze.findIndex((y) => y.label === n)
        ] : Array.from({
          length: Ze.length - 1
        }, (y, p) => p + 1), b = new Map(((_d = (_c = e.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), E = c(Ze[0].elev);
        b.has(E) || b.set(E, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        let S = 0;
        for (const y of i) {
          if (y < 1 || y >= Ze.length) continue;
          const p = c(Ze[y - 1].elev), v = c(Ze[y].elev);
          f.push([
            p,
            v
          ]), O.add(f.length - 1), ee.set(f.length - 1, y - 1), S++;
        }
        return e.nodes.val = r, e.elements.val = f, e.nodeInputs.val = {
          ...e.nodeInputs.val,
          supports: b,
          loads: ((_f = (_e2 = e.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${S} column(s) at ${t}-${o}${n ? ` story ${n}` : ""}`), S;
      },
      addBeam(t, o, n, l, s) {
        var _a2;
        const d = Ge.findIndex((B) => B.label === t), a = Ye.findIndex((B) => B.label === o), r = Ge.findIndex((B) => B.label === n), f = Ye.findIndex((B) => B.label === l), c = Ze.findIndex((B) => B.label === s);
        if (d < 0 || a < 0 || r < 0 || f < 0) {
          console.log("Axis not found");
          return;
        }
        if (c < 1) {
          console.log(`Story "${s}" not found. Available: ${Ze.filter((B) => B.label !== "Base").map((B) => B.label)}`);
          return;
        }
        const i = Ge[d].coord, b = Ye[a].coord, E = Ge[r].coord, S = Ye[f].coord, y = Ze[c].elev, p = [
          ...e.nodes.val
        ], v = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], I = (B, H, h) => {
          const u = p.findIndex((w) => Math.abs(w[0] - B) < 1e-3 && Math.abs(w[1] - H) < 1e-3 && Math.abs(w[2] - h) < 1e-3);
          return u >= 0 ? u : (p.push([
            B,
            H,
            h
          ]), p.length - 1);
        }, A = I(i, b, y), T = I(E, S, y);
        return v.push([
          A,
          T
        ]), _.add(v.length - 1), ee.set(v.length - 1, c - 1), e.nodes.val = p, e.elements.val = v, console.log(`Added beam ${t}-${o} \u2192 ${n}-${l} at ${s}`), v.length - 1;
      },
      addBrace(t, o, n, l, s, d) {
        var _a2;
        const a = Ge.findIndex((u) => u.label === t), r = Ye.findIndex((u) => u.label === o), f = Ze.findIndex((u) => u.label === n), c = Ge.findIndex((u) => u.label === l), i = Ye.findIndex((u) => u.label === s), b = Ze.findIndex((u) => u.label === d);
        if (a < 0 || r < 0 || f < 0) {
          console.log(`Point 1 not found: ${t}-${o}@${n}`);
          return;
        }
        if (c < 0 || i < 0 || b < 0) {
          console.log(`Point 2 not found: ${l}-${s}@${d}`);
          return;
        }
        const E = Ge[a].coord, S = Ye[r].coord, y = Ze[f].elev, p = Ge[c].coord, v = Ye[i].coord, I = Ze[b].elev, A = [
          ...e.nodes.val
        ], T = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], B = (u, w, L) => {
          const R = A.findIndex((W) => Math.abs(W[0] - u) < 1e-3 && Math.abs(W[1] - w) < 1e-3 && Math.abs(W[2] - L) < 1e-3);
          return R >= 0 ? R : (A.push([
            u,
            w,
            L
          ]), A.length - 1);
        }, H = B(E, S, y), h = B(p, v, I);
        return T.push([
          H,
          h
        ]), ee.set(T.length - 1, Math.min(f, b)), e.nodes.val = A, e.elements.val = T, console.log(`Added brace ${t}-${o}@${n} \u2192 ${l}-${s}@${d}`), T.length - 1;
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
        Qe.clear();
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
        ], s = (t == null ? void 0 : t.col) || "40x40", d = (t == null ? void 0 : t.viga) || "30x40", a = (t == null ? void 0 : t.fc) || 210, [r, f] = s.split("x").map((Q) => parseFloat(Q) / 100), [c, i] = d.split("x").map((Q) => parseFloat(Q) / 100), b = [
          0
        ];
        for (const Q of o) b.push(b[b.length - 1] + Q);
        const E = [
          0
        ];
        for (const Q of n) E.push(E[E.length - 1] + Q);
        const S = [
          0
        ];
        for (const Q of l) S.push(S[S.length - 1] + Q);
        const y = b.length, p = E.length, v = S.length, I = l.length, A = [], T = {};
        for (let Q = 0; Q < v; Q++) for (let ue = 0; ue < p; ue++) for (let we = 0; we < y; we++) T[`${we},${Q},${ue}`] = A.length, A.push([
          b[we],
          S[Q],
          E[ue]
        ]);
        const B = [], H = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (let Q = 0; Q < I; Q++) for (let ue = 0; ue < p; ue++) for (let we = 0; we < y; we++) {
          const se = B.length;
          B.push([
            T[`${we},${Q},${ue}`],
            T[`${we},${Q + 1},${ue}`]
          ]), H.add(se), u.set(se, Q);
        }
        for (let Q = 1; Q < v; Q++) for (let ue = 0; ue < p; ue++) for (let we = 0; we < y - 1; we++) {
          const se = B.length;
          B.push([
            T[`${we},${Q},${ue}`],
            T[`${we + 1},${Q},${ue}`]
          ]), h.add(se), u.set(se, Q - 1);
        }
        for (let Q = 1; Q < v; Q++) for (let ue = 0; ue < y; ue++) for (let we = 0; we < p - 1; we++) {
          const se = B.length;
          B.push([
            T[`${ue},${Q},${we}`],
            T[`${ue},${Q},${we + 1}`]
          ]), h.add(se), u.set(se, Q - 1);
        }
        const L = 15100 * Math.sqrt(a) * 10, R = L / (2 * (1 + 0.2)), W = r * f, g = r * f ** 3 / 12, M = f * r ** 3 / 12, x = r * f * (r ** 2 + f ** 2) / 12, C = c * i, X = c * i ** 3 / 12, V = i * c ** 3 / 12, ae = c * i * (c ** 2 + i ** 2) / 12, Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map();
        for (let Q = 0; Q < B.length; Q++) Z.set(Q, L), K.set(Q, R), H.has(Q) ? (de.set(Q, W), ie.set(Q, g), Ee.set(Q, M), Ne.set(Q, x), q.set(Q, {
          type: "rect",
          b: r,
          h: f,
          name: `COL${s}`
        })) : (de.set(Q, C), ie.set(Q, X), Ee.set(Q, V), Ne.set(Q, ae), q.set(Q, {
          type: "rect",
          b: c,
          h: i,
          name: `V${d}`
        }));
        const fe = /* @__PURE__ */ new Map();
        for (let Q = 0; Q < p; Q++) for (let ue = 0; ue < y; ue++) fe.set(T[`${ue},0,${Q}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        e.nodes.val = A, e.elements.val = B, e.nodeInputs.val = {
          supports: fe,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: Z,
          shearModuli: K,
          areas: de,
          momentsOfInertiaZ: ie,
          momentsOfInertiaY: Ee,
          torsionalConstants: Ne,
          sectionShapes: q
        }, O = H, _ = h, ee = u, Ge = b.map((Q, ue) => ({
          label: String.fromCharCode(65 + ue),
          coord: Q
        })), Ye = E.map((Q, ue) => ({
          label: `${ue + 1}`,
          coord: Q
        })), mt = S[S.length - 1], Xo(Ge.map((Q) => Q.coord), Ye.map((Q) => Q.coord), mt, Ge.map((Q) => Q.label), Ye.map((Q) => Q.label));
        {
          const Q = S.map((ue, we) => ({
            name: we === 0 ? "Base" : `P${we}`,
            height: we > 0 ? ue - S[we - 1] : 0,
            elev: ue
          }));
          wn(Q, b, E);
        }
        const oe = Te.querySelector("#cad3d-axis-buttons");
        if (oe) {
          oe.style.display = "flex";
          const Q = Ge.map((we) => we.label), ue = Ye.map((we) => we.label);
          oe.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const we of Q) oe.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${we}">${we}</button>`;
          oe.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const we of ue) oe.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${we}">${we}</button>`;
        }
        const pe = Te.querySelector("#cad3d-floor-buttons");
        if (pe) {
          pe.style.display = "flex", pe.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let Q = 0; Q < I; Q++) pe.innerHTML += `<button class="floor-btn" data-floor="${Q}">P${Q + 1}</button>`;
        }
        return Wt(b, E, S), tt(), console.log(`Model3D: ${A.length}n ${B.length}e | ${y}x${p} grid, ${I} floors | COL${s} V${d} f'c=${a}`), {
          nodes: A.length,
          elements: B.length,
          columns: H.size,
          beams: h.size
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), O = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set(), ee = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), Ge = [], Ye = [], mt = 0, ss(), as(), Ht();
        const t = Te.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), tt();
      },
      frame(t, o, n = 0, l = 0) {
        Qe.clear();
        const s = [];
        n > 0 && s.push(-n);
        let d = 0;
        s.push(d);
        for (const y of t) d += y, s.push(d);
        l > 0 && s.push(d + l);
        const a = [
          0
        ];
        let r = 0;
        for (const y of o) r += y, a.push(r);
        const f = (y) => n > 0 && y === 0 || l > 0 && y === s.length - 1, c = {}, i = [];
        for (let y = 0; y < a.length; y++) for (let p = 0; p < s.length; p++) y === 0 && f(p) || (c[`${p},${y}`] = i.length, i.push([
          s[p],
          0,
          a[y]
        ]));
        const b = [];
        O = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set();
        for (let y = 0; y < a.length - 1; y++) for (let p = 0; p < s.length; p++) f(p) || (O.add(b.length), b.push([
          c[`${p},${y}`],
          c[`${p},${y + 1}`]
        ]));
        for (let y = 1; y < a.length; y++) for (let p = 0; p < s.length - 1; p++) _.add(b.length), b.push([
          c[`${p},${y}`],
          c[`${p + 1},${y}`]
        ]);
        const E = /* @__PURE__ */ new Map(), S = ct();
        for (let y = 0; y < s.length; y++) {
          if (f(y)) continue;
          const p = `${y},0`;
          c[p] !== void 0 && E.set(c[p], [
            ...S
          ]);
        }
        return e.nodes.val = i, e.elements.val = b, e.nodeInputs && (e.nodeInputs.val = {
          supports: E
        }), Ge = [
          ...s
        ], Ye = [
          0
        ], mt = a[a.length - 1] || 0, setTimeout(() => {
          At(), Xo(s, [
            0
          ]), On(), qn();
        }, 50), tt(), {
          nodes: i.length,
          elements: b.length
        };
      },
      building(t, o, n, l = 3, s = 0, d = 0, a = 0, r = 0, f = 1) {
        Qe.clear();
        const c = [];
        s > 0 && c.push(-s), c.push(0);
        for (const u of t) c.push(c[c.length - 1] + u);
        d > 0 && c.push(c[c.length - 1] + d);
        const i = [];
        a > 0 && i.push(-a), i.push(0);
        for (const u of o) i.push(i[i.length - 1] + u);
        r > 0 && i.push(i[i.length - 1] + r);
        const b = [
          0
        ];
        for (const u of n) b.push(b[b.length - 1] + u);
        const E = (u) => s > 0 && u === 0 || d > 0 && u === c.length - 1, S = (u) => a > 0 && u === 0 || r > 0 && u === i.length - 1, y = (u, w) => E(u) || S(w), p = [], v = {};
        for (let u = 0; u < b.length; u++) for (let w = 0; w < i.length; w++) for (let L = 0; L < c.length; L++) u === 0 && y(L, w) || (v[`${L},${w},${u}`] = p.length, p.push([
          c[L],
          i[w],
          b[u]
        ]));
        const I = p.length, A = [];
        O = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set(), ee = /* @__PURE__ */ new Map();
        const T = [];
        for (let u = 0; u < b.length - 1; u++) for (let w = 0; w < i.length; w++) for (let L = 0; L < c.length; L++) y(L, w) || T.push({
          el: [
            v[`${L},${w},${u}`],
            v[`${L},${w},${u + 1}`]
          ],
          floor: u
        });
        for (const { el: [u, w], floor: L } of T) {
          if (f <= 1) {
            O.add(A.length), ee.set(A.length, L), A.push([
              u,
              w
            ]);
            continue;
          }
          const R = p[u], W = p[w];
          let g = u;
          for (let M = 1; M < f; M++) {
            const x = M / f, C = p.length;
            p.push([
              R[0] + (W[0] - R[0]) * x,
              R[1] + (W[1] - R[1]) * x,
              R[2] + (W[2] - R[2]) * x
            ]), O.add(A.length), ee.set(A.length, L), A.push([
              g,
              C
            ]), g = C;
          }
          O.add(A.length), ee.set(A.length, L), A.push([
            g,
            w
          ]);
        }
        Ie = /* @__PURE__ */ new Map();
        const B = [];
        for (let u = 1; u < b.length; u++) for (let w = 0; w < i.length; w++) for (let L = 0; L < c.length - 1; L++) B.push({
          el: [
            v[`${L},${w},${u}`],
            v[`${L + 1},${w},${u}`]
          ],
          floor: u - 1,
          dir: "x",
          bay: L
        });
        for (let u = 1; u < b.length; u++) for (let w = 0; w < c.length; w++) for (let L = 0; L < i.length - 1; L++) B.push({
          el: [
            v[`${w},${L},${u}`],
            v[`${w},${L + 1},${u}`]
          ],
          floor: u - 1,
          dir: "y",
          bay: L
        });
        for (const { el: [u, w], floor: L, dir: R, bay: W } of B) {
          const g = p[u], M = p[w];
          let x = u;
          for (let X = 1; X < l; X++) {
            const V = X / l, ae = p.length;
            p.push([
              g[0] + (M[0] - g[0]) * V,
              g[1] + (M[1] - g[1]) * V,
              g[2] + (M[2] - g[2]) * V
            ]);
            const Z = A.length;
            _.add(Z), ee.set(Z, L), Ie.set(Z, {
              dir: R,
              bay: W
            }), A.push([
              x,
              ae
            ]), x = ae;
          }
          const C = A.length;
          _.add(C), ee.set(C, L), Ie.set(C, {
            dir: R,
            bay: W
          }), A.push([
            x,
            w
          ]);
        }
        if (Xe = /* @__PURE__ */ new Set(), me && Me > 0) {
          const u = (w, L, R) => {
            for (let g = 0; g < p.length; g++) if (Math.abs(p[g][0] - w) < 1e-6 && Math.abs(p[g][1] - L) < 1e-6 && Math.abs(p[g][2] - R) < 1e-6) return g;
            const W = p.length;
            return p.push([
              w,
              L,
              R
            ]), W;
          };
          for (let w = 1; w < b.length; w++) if (Fe === "x") for (let L = 0; L < i.length - 1; L++) {
            const R = i[L], W = i[L + 1];
            for (let g = 1; g <= Me; g++) {
              const M = R + g / (Me + 1) * (W - R), x = [];
              for (let C = 0; C < c.length; C++) x.push(u(c[C], M, b[w]));
              for (let C = 0; C < c.length - 1; C++) {
                const X = A.length;
                Xe.add(X), _.add(X), ee.set(X, w - 1), Ie.set(X, {
                  dir: "x",
                  bay: C
                }), A.push([
                  x[C],
                  x[C + 1]
                ]);
              }
            }
          }
          else for (let L = 0; L < c.length - 1; L++) {
            const R = c[L], W = c[L + 1];
            for (let g = 1; g <= Me; g++) {
              const M = R + g / (Me + 1) * (W - R), x = [];
              for (let C = 0; C < i.length; C++) x.push(u(M, i[C], b[w]));
              for (let C = 0; C < i.length - 1; C++) {
                const X = A.length;
                Xe.add(X), _.add(X), ee.set(X, w - 1), Ie.set(X, {
                  dir: "y",
                  bay: C
                }), A.push([
                  x[C],
                  x[C + 1]
                ]);
              }
            }
          }
        }
        const H = /* @__PURE__ */ new Map(), h = ct();
        for (let u = 0; u < i.length; u++) for (let w = 0; w < c.length; w++) y(w, u) || H.set(v[`${w},${u},0`], [
          ...h
        ]);
        U = /* @__PURE__ */ new Set();
        for (const u of Be) {
          const w = b.length - 1, L = u.floors.includes(-1) ? Array.from({
            length: w
          }, (R, W) => W) : u.floors.filter((R) => R < w);
          for (const R of L) {
            let W, g, M, x;
            u.dir === "x" ? (W = u.bay, M = u.bay + 1, g = u.axisIdx, x = u.axisIdx) : (W = u.axisIdx, M = u.axisIdx, g = u.bay, x = u.bay + 1);
            const C = v[`${W},${g},${R}`], X = v[`${W},${g},${R + 1}`];
            let V, ae;
            if (u.dir === "x" ? (V = v[`${M},${x},${R}`], ae = v[`${M},${x},${R + 1}`]) : (V = v[`${M},${x},${R}`], ae = v[`${M},${x},${R + 1}`]), C === void 0 || V === void 0 || X === void 0 || ae === void 0) continue;
            const Z = je, K = He, de = p[C], ie = p[V], Ee = p[X], Ne = p[ae], q = [];
            for (let fe = 0; fe <= K; fe++) {
              const oe = [], pe = fe / K;
              for (let Q = 0; Q <= Z; Q++) {
                const ue = Q / Z, we = (1 - pe) * ((1 - ue) * de[0] + ue * ie[0]) + pe * ((1 - ue) * Ee[0] + ue * Ne[0]), se = (1 - pe) * ((1 - ue) * de[1] + ue * ie[1]) + pe * ((1 - ue) * Ee[1] + ue * Ne[1]), Se = (1 - pe) * ((1 - ue) * de[2] + ue * ie[2]) + pe * ((1 - ue) * Ee[2] + ue * Ne[2]);
                fe === 0 && Q === 0 ? oe.push(C) : fe === 0 && Q === Z ? oe.push(V) : fe === K && Q === 0 ? oe.push(X) : fe === K && Q === Z ? oe.push(ae) : (oe.push(p.length), p.push([
                  we,
                  se,
                  Se
                ]));
              }
              q.push(oe);
            }
            for (let fe = 0; fe < K; fe++) for (let oe = 0; oe < Z; oe++) {
              const pe = q[fe][oe], Q = q[fe][oe + 1], ue = q[fe + 1][oe + 1], we = q[fe + 1][oe], se = A.length;
              U.add(se), ee.set(se, R), A.push([
                pe,
                Q,
                ue,
                we
              ]);
            }
            if (R === 0) for (let fe = 0; fe <= Z; fe++) {
              const oe = q[0][fe];
              oe >= I && H.set(oe, [
                ...h
              ]);
            }
          }
        }
        if (ht = /* @__PURE__ */ new Set(), Ke) {
          const u = l, w = l, L = /* @__PURE__ */ new Map(), R = (W, g, M) => `${Math.round(W * 1e4)},${Math.round(g * 1e4)},${Math.round(M * 1e4)}`;
          for (let W = 0; W < p.length; W++) L.set(R(p[W][0], p[W][1], p[W][2]), W);
          for (let W = 1; W < b.length; W++) {
            const g = b[W];
            for (let M = 0; M < c.length - 1; M++) for (let x = 0; x < i.length - 1; x++) {
              const C = c[M], X = c[M + 1], V = i[x], ae = i[x + 1], Z = [];
              for (let K = 0; K <= w; K++) {
                const de = [];
                for (let ie = 0; ie <= u; ie++) {
                  const Ee = C + ie / u * (X - C), Ne = V + K / w * (ae - V);
                  if (K === 0 && ie === 0) de.push(v[`${M},${x},${W}`]);
                  else if (K === 0 && ie === u) de.push(v[`${M + 1},${x},${W}`]);
                  else if (K === w && ie === 0) de.push(v[`${M},${x + 1},${W}`]);
                  else if (K === w && ie === u) de.push(v[`${M + 1},${x + 1},${W}`]);
                  else {
                    const q = R(Ee, Ne, g), fe = L.get(q);
                    if (fe !== void 0) de.push(fe);
                    else {
                      const oe = p.length;
                      p.push([
                        Ee,
                        Ne,
                        g
                      ]), L.set(q, oe), de.push(oe);
                    }
                  }
                }
                Z.push(de);
              }
              for (let K = 0; K < w; K++) for (let de = 0; de < u; de++) {
                const ie = Z[K][de], Ee = Z[K][de + 1], Ne = Z[K + 1][de + 1], q = Z[K + 1][de], fe = A.length;
                ht.add(fe), ee.set(fe, W - 1), A.push([
                  ie,
                  Ee,
                  Ne,
                  q
                ]);
              }
            }
          }
        }
        if (St && ut) {
          const u = ut === "all" || ut === "x" || ut === "perimeter", w = ut === "all" || ut === "y" || ut === "perimeter", L = b.length - 1;
          for (let R = 0; R < L; R++) {
            if (u) for (let W = 0; W < i.length; W++) {
              if (ut === "perimeter" && W !== 0 && W !== i.length - 1) continue;
              const g = Math.floor((c.length - 1) / 2);
              for (let M = 0; M < c.length - 1; M++) {
                if (ut === "perimeter" && M !== g || y(M, W) || y(M + 1, W)) continue;
                const x = v[`${M},${W},${R}`], C = v[`${M + 1},${W},${R + 1}`], X = v[`${M + 1},${W},${R}`], V = v[`${M},${W},${R + 1}`];
                x !== void 0 && C !== void 0 && (A.push([
                  x,
                  C
                ]), ee.set(A.length - 1, R)), X !== void 0 && V !== void 0 && (A.push([
                  X,
                  V
                ]), ee.set(A.length - 1, R));
              }
            }
            if (w) for (let W = 0; W < c.length; W++) {
              if (ut === "perimeter" && W !== 0 && W !== c.length - 1) continue;
              const g = Math.floor((i.length - 1) / 2);
              for (let M = 0; M < i.length - 1; M++) {
                if (ut === "perimeter" && M !== g || y(W, M) || y(W, M + 1)) continue;
                const x = v[`${W},${M},${R}`], C = v[`${W},${M + 1},${R + 1}`], X = v[`${W},${M + 1},${R}`], V = v[`${W},${M},${R + 1}`];
                x !== void 0 && C !== void 0 && (A.push([
                  x,
                  C
                ]), ee.set(A.length - 1, R)), X !== void 0 && V !== void 0 && (A.push([
                  X,
                  V
                ]), ee.set(A.length - 1, R));
              }
            }
          }
        }
        return e.nodes.val = p, e.elements.val = A, e.nodeInputs && (e.nodeInputs.val = {
          supports: H
        }), Ge = [
          ...c
        ], Ye = [
          ...i
        ], mt = b[b.length - 1] || 0, setTimeout(() => {
          At(), Xo(c, i), On(), qn();
        }, 50), tt(), {
          nodes: p.length,
          elements: A.length,
          nJointNodes: I
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, s = 8, d = 4) {
        Qe.clear();
        const a = [], r = [], f = (S) => n + l * (1 - Math.pow(2 * S / t - 1, 2)), c = [], i = d + 1;
        for (let S = 0; S < i; S++) {
          const y = [], p = o / d * S;
          y.push(a.length), a.push([
            0,
            p,
            0
          ]), y.push(a.length), a.push([
            t,
            p,
            0
          ]), y.push(a.length), a.push([
            0,
            p,
            n
          ]);
          for (let v = 1; v < s; v++) {
            const I = t / s * v;
            y.push(a.length), a.push([
              I,
              p,
              f(I)
            ]);
          }
          y.push(a.length), a.push([
            t,
            p,
            n
          ]), c.push(y);
        }
        for (let S = 0; S < i; S++) {
          const y = c[S];
          r.push([
            y[0],
            y[2]
          ]), r.push([
            y[1],
            y[y.length - 1]
          ]);
          for (let p = 2; p < y.length - 1; p++) r.push([
            y[p],
            y[p + 1]
          ]);
        }
        for (let S = 0; S < d; S++) for (let y = 2; y < c[0].length; y++) r.push([
          c[S][y],
          c[S + 1][y]
        ]);
        for (let S = 0; S < d; S++) for (let y = 2; y < c[0].length - 1; y += 2) r.push([
          c[S][y],
          c[S + 1][y + 1]
        ]);
        const b = /* @__PURE__ */ new Map(), E = ct();
        for (let S = 0; S < i; S++) b.set(c[S][0], [
          ...E
        ]), b.set(c[S][1], [
          ...E
        ]);
        return e.nodes.val = a, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
          supports: b
        }), tt(), {
          nodes: a.length,
          elements: r.length
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
            Re.colMat = 1, Re.vigaMat = 1, Qe.clear(), nt("truss"), cs();
            break;
          }
          case "beams": {
            Re.colMat = 0, Re.vigaMat = 0, Re.colShape = 0, Qe.clear(), nt("beams"), ds();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            Re.colMat = 1, Re.vigaMat = 1, Qe.clear(), nt("3d"), ps();
            break;
          }
          case "portico": {
            Re.colMat = 0, Re.vigaMat = 0, Re.colShape = 0, nt("frame"), Pe();
            break;
          }
          case "edificio": {
            nt("edificio"), Re.colMat = 0, Re.vigaMat = 0, Re.colShape = 0, Be = [], Ke = false, me = false, St = false, Pe();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            nt("edificio"), Re.colMat = 1, Re.vigaMat = 1, Re.steelColType = 0, Re.steelVigaType = 0, Be = [], me = true, Me = 2;
            const o = ce.reduce((l, s) => l + s, 0) / ce.length, n = ne.reduce((l, s) => l + s, 0) / ne.length;
            Fe = o >= n ? "y" : "x", Ke = true, Ue = 0.08, St = false, Pe();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            nt("edificio"), Re.colMat = 1, Re.vigaMat = 1, Re.steelColType = 0, Re.steelVigaType = 0, Be = [], me = true, Me = 2;
            const o = ce.reduce((l, s) => l + s, 0) / ce.length, n = ne.reduce((l, s) => l + s, 0) / ne.length;
            Fe = o >= n ? "y" : "x", Ke = true, Ue = 0.08, St = true, ut = "perimeter", Pe();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            nt("edificio"), Re.colMat = 0, Re.vigaMat = 0, Re.colShape = 0, me = false;
            const o = Math.round(((_a2 = re.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = re.nVanosY) == null ? void 0 : _b.val) ?? 2);
            Be = [
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
            ], Ke = true, Ue = 0.15, Pe();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            nt("edificio"), Re.colMat = 2, Re.vigaMat = 0, me = false;
            const o = Math.round(((_c = re.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = re.nVanosY) == null ? void 0 : _d.val) ?? 2);
            Be = [
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
            ], Ke = true, Ue = 0.12, Pe();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            nt("edificio"), re.nPisos && (re.nPisos.val = 1), re.hPiso && (re.hPiso.val = 4.5), re.nVanosX && (re.nVanosX.val = 3), re.nVanosY && (re.nVanosY.val = 2), re.nSubViga && (re.nSubViga.val = 3), ce = [
              6,
              6,
              6
            ], ne = [
              5,
              5
            ], Re.colMat = 1, Re.vigaMat = 1, Re.steelColType = 0, Re.steelVigaType = 0, Be = [], me = true, Me = 2, Fe = ce[0] >= ne[0] ? "y" : "x", Ke = true, Ue = 0.08, ft = 3, it = 3, Pe();
            break;
          }
          case "galpon": {
            nt("galpon"), Re.colMat = 1, Re.vigaMat = 1, Pe();
            break;
          }
          case "barra": {
            nt("barra"), Pe();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            Qe.clear(), nt("placa-3q"), fs();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            Qe.clear(), nt("placa-q4"), us();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            Qe.clear(), nt("losa-rect"), ms();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            Qe.clear(), nt("losa-plana"), bs();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            Qe.clear(), nt("viga-alta"), gs();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            Qe.clear(), nt("muro-contencion"), hs();
            break;
          }
          case "zapata":
          case "footing": {
            Qe.clear(), nt("zapata"), xs();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            Qe.clear(), nt("placa-orificios"), vs();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            Qe.clear(), nt("col-placa"), ys();
            break;
          }
          case "talud":
          case "slope": {
            Qe.clear(), nt("talud"), $s();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            Qe.clear(), nt("eiffel"), Os();
            break;
          }
          case "arco":
          case "arco-gateway": {
            Qe.clear(), nt("arco"), qs();
            break;
          }
          case "puente":
          case "puente-colgante": {
            Qe.clear(), nt("puente"), _s();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            Qe.clear(), nt("twisted"), Bs();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            Qe.clear(), nt("burj"), Ds();
            break;
          }
          case "opera":
          case "sydney-opera": {
            Qe.clear(), nt("opera"), Hs();
            break;
          }
          case "diagrid":
          case "gherkin": {
            Qe.clear(), nt("diagrid"), js();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, o = 10, n = 16, l = 16, s = "simply-supported", d = -10, a = 0.2, r = 3e7, f = 0.3, c = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][c]}]: ${t}\xD7${o}, ${n}\xD7${l} elem, BC=${s}, q=${d}, t=${a}`);
        const b = performance.now(), E = Un({
          E: r,
          nu: f,
          thickness: a,
          meshLx: t,
          meshLy: o,
          meshNx: n,
          meshNy: l,
          bcType: s,
          pressure: d,
          theoryType: c
        }), S = performance.now() - b;
        console.log(`Solved in ${S.toFixed(1)} ms`), console.log(`w_max = ${E.maxW.toExponential(6)}`), console.log(`w_center = ${(E.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${E.maxMxx.toExponential(4)}, Myy_max = ${E.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${E.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${E.maxQx.toExponential(4)}, Qy_max = ${E.maxQy.toExponential(4)}`);
        const y = E.nodeResults.map((T) => [
          T.x,
          T.y,
          0
        ]), p = E.elementResults.map((T) => [
          ...T.nodes
        ]);
        e.nodes.val = y, e.elements.val = p;
        const v = /* @__PURE__ */ new Map();
        E.nodeResults.forEach((T, B) => {
          v.set(B, [
            0,
            0,
            T.w,
            T.bx,
            T.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: v
        });
        const I = /* @__PURE__ */ new Map();
        E.nodeResults.forEach((T, B) => {
          (T.x < 1e-10 || T.x > t - 1e-10 || T.y < 1e-10 || T.y > o - 1e-10) && I.set(B, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        });
        const A = /* @__PURE__ */ new Map();
        if (Math.abs(d) > 1e-30) {
          const T = d * t * o / y.length;
          y.forEach((B, H) => {
            I.has(H) || A.set(H, [
              0,
              0,
              T,
              0,
              0,
              0
            ]);
          });
        }
        if (e.nodeInputs && (e.nodeInputs.val = {
          supports: I,
          loads: A
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const T = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map();
          E.elementResults.forEach((h, u) => {
            T.set(u, [
              h.Mxx,
              h.Mxx,
              h.Mxx
            ]), B.set(u, [
              h.Myy,
              h.Myy,
              h.Myy
            ]), H.set(u, [
              h.Mxy,
              h.Mxy,
              h.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: T,
            bendingYY: B,
            bendingXY: H
          };
        }
        return setTimeout(() => At(), 50), tt(), E;
      },
      set(t, o) {
        re[t] ? (re[t].val = o, console.log(`${t} = ${o}`), io(), Pe()) : pt[t] ? (pt[t].val = o, console.log(`${t} = ${o}`), io(), Pe()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...re,
          ...pt
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in re) o[l] = re[l].val;
          for (const l in pt) o[l] = pt[l].val;
          o.plateTheory = Et, o.supportType = Ft;
          const n = un()[k];
          return n && n[Ft] && (o.supportLabel = n[Ft].label), console.table(o), o;
        }
        if (re[t]) return re[t].val;
        if (pt[t]) return pt[t].val;
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
        }[t.toLowerCase()] || 3), Et = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[Et] || Et}`), k.includes("placa") && (io(), Pe());
      },
      setBc(t) {
        const o = un()[k];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        Ft = t, Ft >= o.length && (Ft = 0), console.log(`Apoyo: ${o[Ft].label} \u2192 DOFs: [${o[Ft].dofs.map((n) => n ? "1" : "0").join(",")}]`), io(), Pe();
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
        t && (m = t), o && (F = o), $ = Fo(m, F);
        const n = Te.querySelector("#cad3d-force-unit"), l = Te.querySelector("#cad3d-length-unit");
        return n && (n.textContent = m), l && (l.textContent = F), k && nt(k), console.log(`Unidades: ${$.label} | E=${$.E.toExponential(3)} ${$.stress}`), $.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function rs() {
      return cl($);
    }
    function is() {
      return dl($);
    }
    let pt = {};
    function nt(t) {
      var _a2, _b;
      k = t, aa.val = true, Ft = 0, De && Cn(), re = {};
      const o = rs()[t];
      if (o) for (const l of o) re[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      pt = {};
      const n = is()[t];
      if (n) for (const l of n) pt[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a2 = re.nVanosX) == null ? void 0 : _a2.val) ?? 2), s = Math.round(((_b = re.nVanosY) == null ? void 0 : _b.val) ?? 2);
        ce = Array(l).fill($.defaultSpan), ne = Array(s).fill($.defaultSpan * 0.8);
      }
      io(), setTimeout(() => {
        Sa(), Pe();
      }, 50);
    }
    function le(t) {
      var _a2, _b;
      return ((_a2 = re[t]) == null ? void 0 : _a2.val) ?? ((_b = pt[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function Pe() {
      switch (k) {
        case "truss":
          cs();
          break;
        case "beams":
          ds();
          break;
        case "3d":
          ps();
          break;
        case "frame": {
          const o = Math.round(le("nVanos")), n = le("spanV"), l = Math.round(le("nPisos")), s = le("hPiso");
          Qe.frame(Array(o).fill(n), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const o = Math.round(le("nPisos")), n = le("hPiso"), l = le("Lvix") || 0, s = le("Lvdx") || 0, d = le("Lviy") || 0, a = le("Lvdy") || 0, r = Math.max(1, Math.round(le("nSubViga") || 3)), f = Math.max(1, Math.round(le("nSubCol") || 1));
          Qe.building([
            ...ce
          ], [
            ...ne
          ], Array(o).fill(n), r, l, s, d, a, f);
          break;
        }
        case "galpon":
          Qe.galpon(le("span"), le("length"), le("height"), le("archRise"), Math.round(le("xDiv")), Math.round(le("yDiv")));
          break;
        case "barra":
          ba();
          break;
        case "placa-3q":
          fs();
          break;
        case "placa-q4":
          us();
          break;
        case "losa-rect":
          ms();
          break;
        case "losa-plana":
          bs();
          break;
        case "viga-alta":
          gs();
          break;
        case "muro-contencion":
          hs();
          break;
        case "zapata":
          xs();
          break;
        case "placa-orificios":
          vs();
          break;
        case "col-placa":
          ys();
          break;
        case "talud":
          $s();
          break;
        case "eiffel":
          Os();
          break;
        case "arco":
          qs();
          break;
        case "puente":
          _s();
          break;
        case "twisted":
          Bs();
          break;
        case "burj":
          Ds();
          break;
        case "opera":
          Hs();
          break;
        case "diagrid":
          js();
          break;
      }
      if ((k === "frame" || k === "edificio" || k === "galpon") && e.nodeInputs) {
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
        "diagrid"
      ].includes(k)) {
        if (J.size > 0 || j.size > 0 || N) {
          const o = e.elements.val, n = o.filter((l, s) => !(J.has(s) || j.has(s) || N && !G.has(s)));
          n.length !== o.length && (e.elements.val = n);
        }
        setTimeout(() => {
          xo(), Fn();
        }, 30);
      }
    }
    function cs() {
      const t = le("span"), o = Math.round(le("divisions")), n = le("height"), l = t / o, s = [], d = [];
      for (let i = 0; i <= o; i++) s.push([
        l * i,
        0,
        0
      ]);
      for (let i = 0; i <= o; i++) s.push([
        l * i,
        0,
        n
      ]);
      const a = o + 1;
      for (let i = 0; i < o; i++) d.push([
        i,
        i + 1
      ]);
      for (let i = 0; i < o; i++) d.push([
        a + i,
        a + i + 1
      ]);
      for (let i = 0; i <= o; i++) d.push([
        i,
        a + i
      ]);
      for (let i = 0; i < o; i++) i < o / 2 ? d.push([
        i,
        a + i + 1
      ]) : d.push([
        a + i,
        i + 1
      ]);
      const r = /* @__PURE__ */ new Map([
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
      ]), f = (le("CM") ?? 0) + (le("CV") ?? 0), c = /* @__PURE__ */ new Map();
      if (f !== 0) for (let i = 0; i <= o; i++) c.set(i, [
        0,
        0,
        f,
        0,
        0,
        0
      ]);
      e.nodes.val = s, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: r,
        loads: c
      }), tt();
    }
    function ds() {
      const t = le("width"), o = le("height"), n = le("Ex") ?? 0, l = (le("CM") ?? 0) + (le("CV") ?? 0), s = Math.max(1, Math.round(le("nSub") || 4)), d = [
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
      ], a = [];
      a.push([
        0,
        1
      ], [
        2,
        3
      ]);
      const r = [
        0,
        0,
        o
      ], f = [
        t,
        0,
        o
      ];
      let c = 1;
      for (let b = 1; b < s; b++) {
        const E = b / s, S = d.length;
        d.push([
          r[0] + (f[0] - r[0]) * E,
          r[1] + (f[1] - r[1]) * E,
          r[2] + (f[2] - r[2]) * E
        ]), a.push([
          c,
          S
        ]), c = S;
      }
      a.push([
        c,
        2
      ]);
      const i = /* @__PURE__ */ new Map();
      if (n !== 0 && l === 0) i.set(2, [
        n,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (l !== 0 && n === 0) for (let b = 1; b < d.length; b++) b === 0 || b === 3 || i.set(b, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (n !== 0 && l !== 0) for (let b = 1; b < d.length; b++) b === 0 || b === 3 || i.set(b, [
        b === 2 ? n : 0,
        0,
        l,
        0,
        0,
        0
      ]);
      e.nodes.val = d, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
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
        loads: i
      }), tt();
    }
    function ps() {
      const t = le("dx"), o = le("dy"), n = le("dz"), l = Math.round(le("stories")), s = Math.max(1, Math.round(le("nSub") || 3)), d = [];
      for (let p = 0; p <= l; p++) d.push([
        0,
        0,
        n * p
      ], [
        t,
        0,
        n * p
      ], [
        t,
        o,
        n * p
      ], [
        0,
        o,
        n * p
      ]);
      const a = d.length, r = [
        ...d
      ], f = [];
      for (let p = 0; p < l; p++) for (let v = 0; v < 4; v++) f.push([
        p * 4 + v,
        (p + 1) * 4 + v
      ]);
      for (let p = 0; p < l; p++) {
        const v = p * 4;
        f.push([
          v,
          v + 5
        ], [
          v + 3,
          v + 6
        ], [
          v,
          v + 7
        ], [
          v + 1,
          v + 6
        ]);
      }
      const c = [];
      for (let p = 1; p <= l; p++) {
        const v = p * 4;
        c.push([
          v,
          v + 1
        ], [
          v + 1,
          v + 2
        ], [
          v + 2,
          v + 3
        ], [
          v + 3,
          v
        ], [
          v,
          v + 2
        ]);
      }
      for (const [p, v] of c) {
        const I = d[p], A = d[v];
        let T = p;
        for (let B = 1; B < s; B++) {
          const H = B / s, h = r.length;
          r.push([
            I[0] + (A[0] - I[0]) * H,
            I[1] + (A[1] - I[1]) * H,
            I[2] + (A[2] - I[2]) * H
          ]), f.push([
            T,
            h
          ]), T = h;
        }
        f.push([
          T,
          v
        ]);
      }
      const i = /* @__PURE__ */ new Map();
      for (let p = 0; p < 4; p++) i.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const b = le("Ex") ?? 0, E = (le("CM") ?? 0) + (le("CV") ?? 0), S = a - 2, y = /* @__PURE__ */ new Map();
      if (b !== 0 && E === 0) y.set(S, [
        b,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (E !== 0 && b === 0) for (let p = 0; p < r.length; p++) i.has(p) || y.set(p, [
        0,
        0,
        E,
        0,
        0,
        0
      ]);
      else if (b !== 0 && E !== 0) for (let p = 0; p < r.length; p++) i.has(p) || y.set(p, [
        p === S ? b : 0,
        0,
        E,
        0,
        0,
        0
      ]);
      e.nodes.val = r, e.elements.val = f, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: y
      }), tt();
    }
    function ba() {
      const t = le("L"), o = Math.round(le("nElem")), n = le("F"), l = t / o, s = [], d = [];
      for (let f = 0; f <= o; f++) s.push([
        l * f,
        0,
        0
      ]);
      for (let f = 0; f < o; f++) d.push([
        f,
        f + 1
      ]);
      const a = /* @__PURE__ */ new Map([
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
      ]), r = /* @__PURE__ */ new Map([
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
      e.nodes.val = s, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: r
      }), tt();
    }
    function fs() {
      const t = le("Lx") || 15, o = le("Ly") || 10, n = le("meshSize") || 0.5, l = le("q") || -3, s = le("t") || 1, d = le("E") || 3e7, a = le("nu") || 0.3, r = d / (2 * (1 + a)), f = Et === 1 ? "Membrana" : Et === 2 ? "Kirchhoff" : "Mindlin", { nodes: c, elements: i, boundaryIndices: b } = go({
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
      }), E = t * o, S = l * E / c.length, y = new Map(b.map((v) => [
        v,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), p = new Map(c.map((v, I) => [
        I,
        [
          0,
          0,
          S,
          0,
          0,
          0
        ]
      ]));
      e.nodes.val = c, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: p
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(i.map((v, I) => [
          I,
          d
        ])),
        elasticitiesOrthogonal: new Map(i.map((v, I) => [
          I,
          d
        ])),
        thicknesses: new Map(i.map((v, I) => [
          I,
          s
        ])),
        poissonsRatios: new Map(i.map((v, I) => [
          I,
          a
        ])),
        shearModuli: new Map(i.map((v, I) => [
          I,
          r
        ]))
      });
      try {
        const v = Nt(c, i, e.nodeInputs.val, e.elementInputs.val);
        v && e.deformOutputs && (e.deformOutputs.val = v);
        const I = Yo(c, i, e.elementInputs.val, v);
        I && e.analyzeOutputs && (e.analyzeOutputs.val = I), console.log(`Plate 3Q [${f}]: ${c.length} nodes, ${i.length} triangles, t=${s}, E=${d}, \u03BD=${a}`);
      } catch (v) {
        console.warn("Plate 3Q analysis failed:", v.message);
      }
      setTimeout(() => At(), 50), tt();
    }
    function us() {
      const t = le("Lx") || 10, o = le("Ly") || 10, n = Math.round(le("nx") || 16), l = Math.round(le("ny") || 16), s = le("t") || 0.2, d = le("q") || -10, a = le("E") || 3e7, r = le("nu") || 0.3, f = Ft === 1 ? "clamped" : "simply-supported", i = {
        1: 2,
        2: 1,
        3: 0
      }[Et] ?? 0;
      return Qe.plateQ4(t, o, n, l, f, d, s, a, r, i);
    }
    function ms() {
      const t = le("a") || 6, o = le("b") || 4, n = Math.round(le("nx") || 12), l = Math.round(le("ny") || 8), s = le("t") || 0.1, d = le("q") || -10, a = le("E") || 35e6, r = le("nu") || 0.15, c = {
        1: 2,
        2: 1,
        3: 0
      }[Et] ?? 0, i = Qe.plateQ4(t, o, n, l, "simply-supported", d, s, a, r, c), b = a * s * s * s / (12 * (1 - r * r));
      let E = 0;
      for (let S = 1; S <= 19; S += 2) for (let y = 1; y <= 19; y += 2) {
        const p = S * S / (t * t) + y * y / (o * o);
        E += 1 / (S * y * p * p);
      }
      if (E *= 16 * Math.abs(d) / (Math.PI ** 6 * b), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${E.toExponential(6)}`), i) {
        const S = Math.abs((Math.abs(i.centerW || 0) - E) / E * 100);
        console.log(`   WASM w_center = ${(i.centerW || 0).toExponential(6)}, error = ${S.toFixed(2)}%`);
      }
      return i;
    }
    function bs() {
      const t = le("t") || 0.2, o = le("q") || -10, n = le("E") || 35e6, l = le("nu") || 0.2, s = le("meshSize") || 0.6, d = [
        3.6,
        4.2,
        4.2,
        3.6
      ], a = [
        3,
        3.6,
        3
      ], r = d.reduce((g, M) => g + M, 0), f = a.reduce((g, M) => g + M, 0), c = [
        0
      ];
      for (const g of d) c.push(c[c.length - 1] + g);
      const i = [
        0
      ];
      for (const g of a) i.push(i[i.length - 1] + g);
      const b = Math.max(2, Math.round(r / s)), E = Math.max(2, Math.round(f / s)), S = r / b, y = f / E, p = [];
      for (let g = 0; g <= E; g++) for (let M = 0; M <= b; M++) p.push([
        M * S,
        g * y
      ]);
      const v = [], I = /* @__PURE__ */ new Set();
      for (const g of c) for (const M of i) {
        let x = 1 / 0, C = 0;
        for (let X = 0; X < p.length; X++) {
          const V = Math.hypot(p[X][0] - g, p[X][1] - M);
          V < x && (x = V, C = X);
        }
        I.has(C) || (I.add(C), v.push({
          node: C,
          dof: 0,
          k: 1e15
        }));
      }
      const T = {
        1: 2,
        2: 1,
        3: 0
      }[Et] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][T]}]: ${r}\xD7${f}m, ${b}\xD7${E} elem, ${I.size} columnas`);
      const B = performance.now(), H = Un({
        E: n,
        nu: l,
        thickness: t,
        meshLx: r,
        meshLy: f,
        meshNx: b,
        meshNy: E,
        bcType: "none",
        pressure: o,
        theoryType: T,
        springs: v
      }), h = performance.now() - B;
      console.log(`Solved in ${h.toFixed(1)} ms, w_max = ${H.maxW.toExponential(4)}`);
      const u = H.nodeResults.map((g) => [
        g.x,
        g.y,
        0
      ]), w = H.elementResults.map((g) => [
        ...g.nodes
      ]);
      e.nodes.val = u, e.elements.val = w;
      const L = /* @__PURE__ */ new Map();
      H.nodeResults.forEach((g, M) => {
        L.set(M, [
          0,
          0,
          g.w,
          g.bx,
          g.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: L
      });
      const R = /* @__PURE__ */ new Map();
      for (const g of I) R.set(g, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const W = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const g = o * r * f / u.length;
        u.forEach((M, x) => {
          R.has(x) || W.set(x, [
            0,
            0,
            g,
            0,
            0,
            0
          ]);
        });
      }
      if (e.nodeInputs && (e.nodeInputs.val = {
        supports: R,
        loads: W
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const g = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map();
        H.elementResults.forEach((C, X) => {
          g.set(X, [
            C.Mxx,
            C.Mxx,
            C.Mxx
          ]), M.set(X, [
            C.Myy,
            C.Myy,
            C.Myy
          ]), x.set(X, [
            C.Mxy,
            C.Mxy,
            C.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: g,
          bendingYY: M,
          bendingXY: x
        };
      }
      setTimeout(() => At(), 50), tt();
    }
    function gs() {
      const t = le("L") || 4, o = le("H") || 2, n = le("t") || 0.1, l = le("E") || 2e7, s = le("nu") || 0.2, d = l / (2 * (1 + s)), a = le("q") || -100, r = le("b") || 0.8, f = le("meshSize") || 0.2, { nodes: c, elements: i, boundaryIndices: b } = go({
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
        maxMeshSize: f
      }), E = c, S = 0.4, y = /* @__PURE__ */ new Map();
      for (let h = 0; h < E.length; h++) {
        const u = E[h][0], w = E[h][1];
        Math.abs(w) < 1e-6 && (u <= S + 1e-6 || u >= t - S - 1e-6) && y.set(h, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const p = (t - r) / 2, v = p + r, I = [];
      for (let h = 0; h < E.length; h++) if (Math.abs(E[h][1] - o) < 1e-6) {
        const u = E[h][0];
        u >= p - 1e-6 && u <= v + 1e-6 && I.push(h);
      }
      const A = a * r / Math.max(I.length, 1), T = /* @__PURE__ */ new Map();
      for (const h of I) T.set(h, [
        0,
        A,
        0,
        0,
        0,
        0
      ]);
      const B = {
        elasticities: new Map(i.map((h, u) => [
          u,
          l
        ])),
        elasticitiesOrthogonal: new Map(i.map((h, u) => [
          u,
          l
        ])),
        thicknesses: new Map(i.map((h, u) => [
          u,
          n
        ])),
        poissonsRatios: new Map(i.map((h, u) => [
          u,
          s
        ])),
        shearModuli: new Map(i.map((h, u) => [
          u,
          d
        ]))
      }, H = {
        supports: y,
        loads: T
      };
      try {
        const h = Nt(E, i, H, B), u = Yo(E, i, B, h), w = E.map((R) => [
          R[0],
          0,
          R[1]
        ]);
        if (e.nodes.val = w, e.elements.val = i, h && h.deformations) {
          const R = /* @__PURE__ */ new Map();
          h.deformations.forEach((W, g) => {
            R.set(g, [
              W[0],
              W[2],
              W[1],
              W[3],
              W[5],
              W[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: R
          });
        }
        if (e.nodeInputs) {
          const R = /* @__PURE__ */ new Map();
          y.forEach((g, M) => R.set(M, g));
          const W = /* @__PURE__ */ new Map();
          T.forEach((g, M) => W.set(M, [
            g[0],
            g[2],
            g[1],
            g[3],
            g[5],
            g[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: R,
            loads: W
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let L = 0;
        h && h.deformations && h.deformations.forEach((R) => {
          const W = Math.sqrt(R[0] * R[0] + R[1] * R[1] + R[2] * R[2]);
          L = Math.max(L, W);
        }), console.log(`Viga Alta: ${E.length} nodos, ${i.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${s}`), console.log(`  Carga: q=${a} kN/m sobre ${r}m central`), console.log(`  max|u| = ${L.toExponential(4)}`);
      } catch (h) {
        console.warn("Viga Alta analysis failed:", h.message);
      }
      setTimeout(() => At(), 50), tt();
    }
    function hs() {
      const t = le("H") || 4, o = le("B") || 3, n = le("tw") || 0.3, l = le("tb") || 0.4, s = le("meshSize") || 0.2, d = le("E") || 25e6, a = le("nu") || 0.2, r = d / (2 * (1 + a)), f = le("gamma") || 18, c = le("Ka") || 0.33, i = le("Es") || 5e4, b = le("nus") || 0.3, E = i / (2 * (1 + b)), S = le("kn") || 1e6, y = le("ks") || 1e4, p = le("gammaW") || 9.81, v = le("Hw") || 3.5, I = le("qs") || 0, A = Ft, T = o * 0.3, B = o * 0.7, H = [
        [
          -T,
          0,
          0
        ],
        [
          B,
          0,
          0
        ],
        [
          B,
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
          -T,
          l,
          0
        ]
      ];
      let h = [], u = [], w = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), R;
      if (A === 0) {
        const M = go({
          points: H,
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
          maxMeshSize: s
        });
        h = M.nodes, u = M.elements;
        for (let C = 0; C < h.length; C++) Math.abs(h[C][1]) < 1e-6 && w.set(C, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const x = [];
        for (let C = 0; C < h.length; C++) {
          const X = h[C][0], V = h[C][1];
          Math.abs(X - n) < s * 0.6 && V >= l - 1e-6 && x.push({
            idx: C,
            y: V
          });
        }
        x.sort((C, X) => C.y - X.y);
        for (let C = 0; C < x.length; C++) {
          const { idx: X, y: V } = x[C], ae = l + t - V, Z = c * f * ae + c * I;
          let K = s;
          C > 0 && C < x.length - 1 ? K = (x[C + 1].y - x[C - 1].y) / 2 : C === 0 && x.length > 1 ? K = (x[1].y - x[0].y) / 2 : C === x.length - 1 && x.length > 1 && (K = (x[C].y - x[C - 1].y) / 2);
          const de = Z * K;
          Math.abs(de) > 1e-10 && L.set(X, [
            de,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        R = {
          elasticities: new Map(u.map((C, X) => [
            X,
            d
          ])),
          elasticitiesOrthogonal: new Map(u.map((C, X) => [
            X,
            d
          ])),
          thicknesses: new Map(u.map((C, X) => [
            X,
            n
          ])),
          poissonsRatios: new Map(u.map((C, X) => [
            X,
            a
          ])),
          shearModuli: new Map(u.map((C, X) => [
            X,
            r
          ]))
        };
      } else if (A === 1 || A === 2) {
        const M = B, x = l + t;
        if (A === 2) {
          const C = [
            [
              -T,
              0,
              0
            ],
            [
              M,
              0,
              0
            ],
            [
              M,
              x,
              0
            ],
            [
              n,
              x,
              0
            ],
            [
              0,
              x,
              0
            ],
            [
              0,
              l,
              0
            ],
            [
              -T,
              l,
              0
            ]
          ], X = Math.max(3, Math.ceil((x - l) / s)), V = [];
          for (let se = 0; se <= X; se++) V.push([
            n,
            l + se * (x - l) / X,
            0
          ]);
          const ae = go({
            points: [
              ...C,
              ...V
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
            maxMeshSize: s
          });
          h = ae.nodes, u = ae.elements;
          const Z = s * 0.4, K = [];
          for (let se = 0; se < h.length; se++) {
            const Se = h[se][0], We = h[se][1];
            Math.abs(Se - n) < Z && We >= l - Z && K.push(se);
          }
          K.sort((se, Se) => h[se][1] - h[Se][1]);
          const de = [
            K[0]
          ];
          for (let se = 1; se < K.length; se++) {
            const Se = h[K[se]][1] - h[de[de.length - 1]][1];
            Math.abs(Se) > s * 0.05 && de.push(K[se]);
          }
          K.length = 0, K.push(...de);
          const ie = /* @__PURE__ */ new Map();
          for (const se of K) {
            const Se = h.length;
            h.push([
              h[se][0],
              h[se][1],
              h[se][2]
            ]), ie.set(se, Se);
          }
          const Ee = u.length, Ne = [];
          for (let se = 0; se < Ee; se++) {
            const Se = u[se], We = (h[Se[0]][0] + h[Se[1]][0] + h[Se[2]][0]) / 3, lt = (h[Se[0]][1] + h[Se[1]][1] + h[Se[2]][1]) / 3, rt = We >= -T && We <= B && lt >= 0 && lt <= l, Tt = We >= 0 && We <= n && lt >= l && lt <= l + t, _t = rt || Tt;
            if (Ne.push(!_t), !_t) for (let zt = 0; zt < Se.length; zt++) {
              const Bt = ie.get(Se[zt]);
              Bt !== void 0 && (Se[zt] = Bt);
            }
          }
          const q = u.length;
          for (let se = 0; se < K.length - 1; se++) {
            const Se = K[se], We = K[se + 1], lt = ie.get(Se), rt = ie.get(We);
            u.push([
              We,
              Se,
              lt,
              rt
            ]);
          }
          const fe = u.length - q, oe = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map();
          for (let se = 0; se < Ee; se++) Ne[se] ? (oe.set(se, i), pe.set(se, i), ue.set(se, b), we.set(se, E), Q.set(se, 1)) : (oe.set(se, d), pe.set(se, d), ue.set(se, a), we.set(se, r), Q.set(se, 1));
          for (let se = q; se < u.length; se++) oe.set(se, S), pe.set(se, 0), ue.set(se, 0), we.set(se, y), Q.set(se, 0);
          R = {
            elasticities: oe,
            elasticitiesOrthogonal: pe,
            thicknesses: Q,
            poissonsRatios: ue,
            shearModuli: we
          };
          for (let se = 0; se < h.length; se++) {
            const Se = h[se][0], We = h[se][1];
            Math.abs(We) < 1e-6 ? w.set(se, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Se - M) < s * 0.1 && w.set(se, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let se = 0; se < Ee; se++) {
            if (!Ne[se]) continue;
            const Se = u[se], We = h[Se[0]], lt = h[Se[1]], rt = h[Se[2]], Tt = Math.abs((lt[0] - We[0]) * (rt[1] - We[1]) - (rt[0] - We[0]) * (lt[1] - We[1])) / 2, _t = -f * Tt / 3;
            for (const zt of Se) {
              const Bt = L.get(zt) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Bt[1] += _t, L.set(zt, Bt);
            }
          }
          if (I > 0) {
            const se = [];
            for (let Se = 0; Se < h.length; Se++) {
              const We = h[Se][0], lt = h[Se][1];
              Math.abs(lt - x) < s * 0.1 && We > n - 1e-6 && se.push({
                idx: Se,
                x: We
              });
            }
            se.sort((Se, We) => Se.x - We.x);
            for (let Se = 0; Se < se.length; Se++) {
              let We = s;
              Se > 0 && Se < se.length - 1 ? We = (se[Se + 1].x - se[Se - 1].x) / 2 : Se === 0 && se.length > 1 ? We = (se[1].x - se[0].x) / 2 : Se === se.length - 1 && se.length > 1 && (We = (se[Se].x - se[Se - 1].x) / 2);
              const lt = -I * We, rt = L.get(se[Se].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              rt[1] += lt, L.set(se[Se].idx, rt);
            }
          }
          console.log(`  Interfaz Goodman: ${K.length} nodos interfaz, ${fe} elem interfaz, kn=${S}, ks=${y}`);
        } else {
          const C = [
            [
              -T,
              0,
              0
            ],
            [
              M,
              0,
              0
            ],
            [
              M,
              x,
              0
            ],
            [
              n,
              x,
              0
            ],
            [
              0,
              x,
              0
            ],
            [
              0,
              l,
              0
            ],
            [
              -T,
              l,
              0
            ]
          ], X = [
            [
              n,
              l,
              0
            ]
          ], V = go({
            points: [
              ...C,
              ...X
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
            maxMeshSize: s
          });
          h = V.nodes, u = V.elements;
          const ae = (q) => {
            const fe = (h[q[0]][0] + h[q[1]][0] + h[q[2]][0]) / 3, oe = (h[q[0]][1] + h[q[1]][1] + h[q[2]][1]) / 3, pe = fe >= -T && fe <= B && oe >= 0 && oe <= l, Q = fe >= 0 && fe <= n && oe >= l && oe <= l + t;
            return pe || Q;
          }, Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), Ne = [];
          for (let q = 0; q < u.length; q++) {
            const fe = ae(u[q]);
            Ne.push(!fe), fe ? (Z.set(q, d), K.set(q, d), ie.set(q, a), Ee.set(q, r), de.set(q, 1)) : (Z.set(q, i), K.set(q, i), ie.set(q, b), Ee.set(q, E), de.set(q, 1));
          }
          R = {
            elasticities: Z,
            elasticitiesOrthogonal: K,
            thicknesses: de,
            poissonsRatios: ie,
            shearModuli: Ee
          };
          for (let q = 0; q < h.length; q++) {
            const fe = h[q][0], oe = h[q][1];
            Math.abs(oe) < 1e-6 ? w.set(q, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(fe - M) < s * 0.1 && w.set(q, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let q = 0; q < u.length; q++) {
            if (!Ne[q]) continue;
            const fe = u[q], oe = h[fe[0]], pe = h[fe[1]], Q = h[fe[2]], ue = Math.abs((pe[0] - oe[0]) * (Q[1] - oe[1]) - (Q[0] - oe[0]) * (pe[1] - oe[1])) / 2, we = -f * ue / 3;
            for (const se of fe) {
              const Se = L.get(se) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Se[1] += we, L.set(se, Se);
            }
          }
          if (I > 0) {
            const q = [];
            for (let fe = 0; fe < h.length; fe++) {
              const oe = h[fe][0], pe = h[fe][1];
              Math.abs(pe - x) < s * 0.1 && oe > n - 1e-6 && q.push({
                idx: fe,
                x: oe
              });
            }
            q.sort((fe, oe) => fe.x - oe.x);
            for (let fe = 0; fe < q.length; fe++) {
              let oe = s;
              fe > 0 && fe < q.length - 1 ? oe = (q[fe + 1].x - q[fe - 1].x) / 2 : fe === 0 && q.length > 1 ? oe = (q[1].x - q[0].x) / 2 : fe === q.length - 1 && q.length > 1 && (oe = (q[fe].x - q[fe - 1].x) / 2);
              const pe = -I * oe, Q = L.get(q[fe].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Q[1] += pe, L.set(q[fe].idx, Q);
            }
          }
        }
      }
      if (A === 3) {
        const M = go({
          points: H,
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
          maxMeshSize: s
        });
        h = M.nodes, u = M.elements;
        for (let ae = 0; ae < h.length; ae++) Math.abs(h[ae][1]) < 1e-6 && w.set(ae, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const x = l + t, C = Math.min(v, t), X = x - C, V = [];
        for (let ae = 0; ae < h.length; ae++) {
          const Z = h[ae][0], K = h[ae][1];
          Math.abs(Z - n) < s * 0.6 && K >= l - 1e-6 && V.push({
            idx: ae,
            y: K
          });
        }
        V.sort((ae, Z) => ae.y - Z.y);
        for (let ae = 0; ae < V.length; ae++) {
          const { idx: Z, y: K } = V[ae], de = Math.max(0, x - K);
          if (de <= 0 || K < X - 1e-6) continue;
          const ie = Math.min(de, C), Ee = p * ie;
          let Ne = s;
          ae > 0 && ae < V.length - 1 ? Ne = (V[ae + 1].y - V[ae - 1].y) / 2 : ae === 0 && V.length > 1 ? Ne = (V[1].y - V[0].y) / 2 : ae === V.length - 1 && V.length > 1 && (Ne = (V[ae].y - V[ae - 1].y) / 2);
          const q = Ee * Ne;
          Math.abs(q) > 1e-10 && L.set(Z, [
            q,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        R = {
          elasticities: new Map(u.map((ae, Z) => [
            Z,
            d
          ])),
          elasticitiesOrthogonal: new Map(u.map((ae, Z) => [
            Z,
            d
          ])),
          thicknesses: new Map(u.map((ae, Z) => [
            Z,
            n
          ])),
          poissonsRatios: new Map(u.map((ae, Z) => [
            Z,
            a
          ])),
          shearModuli: new Map(u.map((ae, Z) => [
            Z,
            r
          ]))
        };
      }
      const W = {
        supports: w,
        loads: L
      }, g = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const M = Nt(h, u, W, R), x = u.filter((de) => de.length === 3), C = {};
        for (const de of Object.keys(R)) {
          const ie = R[de];
          if (ie && ie instanceof Map) {
            const Ee = /* @__PURE__ */ new Map();
            let Ne = 0;
            for (let q = 0; q < u.length; q++) u[q].length === 3 && (ie.has(q) && Ee.set(Ne, ie.get(q)), Ne++);
            C[de] = Ee;
          }
        }
        const X = Yo(h, x, C, M), V = h.map((de) => [
          de[0],
          0,
          de[1]
        ]);
        if (e.nodes.val = V, e.elements.val = x, M && M.deformations) {
          const de = /* @__PURE__ */ new Map();
          M.deformations.forEach((ie, Ee) => {
            de.set(Ee, [
              ie[0],
              ie[2],
              ie[1],
              ie[3],
              ie[5],
              ie[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: de
          });
        }
        const ae = /* @__PURE__ */ new Map();
        w.forEach((de, ie) => ae.set(ie, de));
        const Z = /* @__PURE__ */ new Map();
        L.forEach((de, ie) => Z.set(ie, [
          de[0],
          de[2],
          de[1],
          de[3],
          de[5],
          de[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: ae,
          loads: Z
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let K = 0;
        M && M.deformations && M.deformations.forEach((de) => {
          const ie = Math.sqrt(de[0] * de[0] + de[1] * de[1] + de[2] * de[2]);
          K = Math.max(K, ie);
        }), console.log(`Muro Contencion [${g[A]}]: ${h.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${c}, gamma=${f}, qs=${I}`), A === 1 && console.log(`  Es=${i}, nus=${b}`), A === 2 && console.log(`  Es=${i}, nus=${b}, kn=${S}, ks=${y}`), A === 3 && console.log(`  gammaW=${p}, Hw=${v}`), console.log(`  max|u| = ${K.toExponential(4)}`);
      } catch (M) {
        console.warn("Muro Contencion failed:", M.message);
      }
      setTimeout(() => At(), 50), tt();
    }
    function xs() {
      const t = le("Lx") || 2, o = le("Ly") || 2, n = le("t") || 0.5, l = le("colA") || 0.4, s = le("colH") || 1.5, d = Math.round(le("nx") || 8), a = Math.round(le("ny") || 8), r = le("E") || 25e6, f = le("nu") || 0.2, c = le("P") || -500, i = le("Mx") || 0, b = le("My") || 0, E = le("ks") || 2e4, S = t / d, y = o / a, p = t / 2, v = o / 2, I = l / 2, A = [];
      for (let w = 0; w <= a; w++) for (let L = 0; L <= d; L++) {
        const R = w * (d + 1) + L;
        let W = S, g = y;
        (L === 0 || L === d) && (W = S / 2), (w === 0 || w === a) && (g = y / 2), A.push({
          node: R,
          dof: 0,
          k: E * W * g
        });
      }
      let T = 0;
      for (let w = 0; w <= a; w++) for (let L = 0; L <= d; L++) Math.abs(L * S - p) <= I + 1e-6 && Math.abs(w * y - v) <= I + 1e-6 && T++;
      const B = c / Math.max(T, 1), H = [];
      for (let w = 0; w <= a; w++) for (let L = 0; L <= d; L++) {
        const R = L * S, W = w * y;
        Math.abs(R - p) <= I + 1e-6 && Math.abs(W - v) <= I + 1e-6 && H.push({
          node: w * (d + 1) + L,
          dof: 0,
          value: B
        });
      }
      if (Math.abs(i) > 1e-6) {
        const w = I > 1e-6 ? I : y, L = i / w;
        for (let R = 0; R <= a; R++) for (let W = 0; W <= d; W++) {
          const g = W * S, M = R * y;
          if (Math.abs(g - p) <= I + 1e-6 && Math.abs(M - v) <= I + 1e-6) {
            const x = M - v;
            if (Math.abs(x) > 1e-6) {
              const C = x > 0 ? 1 : -1;
              H.push({
                node: R * (d + 1) + W,
                dof: 0,
                value: C * L / T * 2
              });
            }
          }
        }
      }
      if (Math.abs(b) > 1e-6) {
        const w = I > 1e-6 ? I : S, L = b / w;
        for (let R = 0; R <= a; R++) for (let W = 0; W <= d; W++) {
          const g = W * S, M = R * y;
          if (Math.abs(g - p) <= I + 1e-6 && Math.abs(M - v) <= I + 1e-6) {
            const x = g - p;
            if (Math.abs(x) > 1e-6) {
              const C = x > 0 ? 1 : -1;
              H.push({
                node: R * (d + 1) + W,
                dof: 0,
                value: C * L / T * 2
              });
            }
          }
        }
      }
      const u = {
        1: 2,
        2: 1,
        3: 0
      }[Et] ?? 1;
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${d}x${a} elem`), console.log(`  col=${l}m, P=${c}, Mx=${i}, My=${b}, ks=${E}`);
      try {
        const w = Un({
          E: r,
          nu: f,
          thickness: n,
          meshLx: t,
          meshLy: o,
          meshNx: d,
          meshNy: a,
          bcType: "none",
          pressure: 0,
          theoryType: u,
          springs: A,
          pointLoads: H
        });
        console.log(`  Solved: w_max = ${w.maxW.toExponential(4)}`);
        const L = w.nodeResults.map((X) => [
          X.x,
          X.y,
          0
        ]), R = L.length;
        L.push([
          p - I,
          v - I,
          0
        ]), L.push([
          p + I,
          v - I,
          0
        ]), L.push([
          p + I,
          v + I,
          0
        ]), L.push([
          p - I,
          v + I,
          0
        ]), L.push([
          p - I,
          v - I,
          s
        ]), L.push([
          p + I,
          v - I,
          s
        ]), L.push([
          p + I,
          v + I,
          s
        ]), L.push([
          p - I,
          v + I,
          s
        ]);
        const W = w.elementResults.map((X) => [
          ...X.nodes
        ]);
        W.push([
          R,
          R + 4
        ]), W.push([
          R + 1,
          R + 5
        ]), W.push([
          R + 2,
          R + 6
        ]), W.push([
          R + 3,
          R + 7
        ]), W.push([
          R + 4,
          R + 5
        ]), W.push([
          R + 5,
          R + 6
        ]), W.push([
          R + 6,
          R + 7
        ]), W.push([
          R + 7,
          R + 4
        ]), W.push([
          R,
          R + 1
        ]), W.push([
          R + 1,
          R + 2
        ]), W.push([
          R + 2,
          R + 3
        ]), W.push([
          R + 3,
          R
        ]), e.nodes.val = L, e.elements.val = W;
        const g = /* @__PURE__ */ new Map();
        w.nodeResults.forEach((X, V) => {
          g.set(V, [
            0,
            0,
            X.w,
            X.bx,
            X.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: g
        });
        const M = /* @__PURE__ */ new Map();
        w.nodeResults.forEach((X, V) => {
          const ae = X.x, Z = X.y;
          (ae < 1e-6 || ae > t - 1e-6 || Z < 1e-6 || Z > o - 1e-6) && M.set(V, [
            false,
            false,
            true,
            false,
            false,
            false
          ]);
        });
        const x = /* @__PURE__ */ new Map();
        if (x.set(R + 4, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), x.set(R + 5, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), x.set(R + 6, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), x.set(R + 7, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), e.nodeInputs && (e.nodeInputs.val = {
          supports: M,
          loads: x
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const X = w.elementResults.length, V = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map();
          w.elementResults.forEach((K, de) => {
            V.set(de, [
              K.Mxx,
              K.Mxx,
              K.Mxx
            ]), ae.set(de, [
              K.Myy,
              K.Myy,
              K.Myy
            ]), Z.set(de, [
              K.Mxy,
              K.Mxy,
              K.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: V,
            bendingYY: ae,
            bendingXY: Z
          };
        }
        const C = et();
        C && (C.settings.shellResults.val = "bendingXX");
      } catch (w) {
        console.warn("Zapata solver failed:", w.message);
      }
      setTimeout(() => At(), 50), tt();
    }
    function vs() {
      const t = le("Lx") || 0.4, o = le("Ly") || 0.4, n = le("t") || 0.025, l = le("dBolt") || 0.022, s = le("sx") || 0.28, d = le("sy") || 0.28, a = le("colA") || 0.2, r = le("meshSize") || 8e-3, f = le("E") || 2e8, c = le("nu") || 0.3, i = f / (2 * (1 + c)), b = le("P") || -200, E = Math.round(le("nBolts") || 4), S = t / 2, y = o / 2, p = l / 2, v = a / 2, I = [];
      E >= 4 && (I.push([
        S - s / 2,
        y - d / 2
      ]), I.push([
        S + s / 2,
        y - d / 2
      ]), I.push([
        S + s / 2,
        y + d / 2
      ]), I.push([
        S - s / 2,
        y + d / 2
      ])), E >= 6 && (I.push([
        S,
        y - d / 2
      ]), I.push([
        S,
        y + d / 2
      ])), E >= 8 && (I.push([
        S - s / 2,
        y
      ]), I.push([
        S + s / 2,
        y
      ]));
      const { nodes: A, elements: T } = go({
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
        maxMeshSize: r
      }), B = (g, M) => {
        for (const [x, C] of I) if ((g - x) * (g - x) + (M - C) * (M - C) < p * p) return true;
        return false;
      }, H = T.filter((g) => {
        const M = (A[g[0]][0] + A[g[1]][0] + A[g[2]][0]) / 3, x = (A[g[0]][1] + A[g[1]][1] + A[g[2]][1]) / 3;
        return !B(M, x);
      }), h = A, u = /* @__PURE__ */ new Map();
      for (let g = 0; g < h.length; g++) {
        const M = h[g][0], x = h[g][1];
        for (const [C, X] of I) {
          const V = Math.sqrt((M - C) * (M - C) + (x - X) * (x - X));
          V >= p * 0.7 && V <= p * 1.5 && u.set(g, [
            true,
            true,
            true,
            false,
            false,
            false
          ]);
        }
      }
      const w = /* @__PURE__ */ new Map();
      let L = 0;
      for (let g = 0; g < h.length; g++) {
        const M = h[g][0], x = h[g][1];
        Math.abs(M - S) <= v && Math.abs(x - y) <= v && L++;
      }
      const R = b / Math.max(L, 1);
      for (let g = 0; g < h.length; g++) {
        const M = h[g][0], x = h[g][1];
        if (Math.abs(M - S) <= v && Math.abs(x - y) <= v) {
          const C = w.get(g) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          C[2] += R, w.set(g, C);
        }
      }
      const W = {
        elasticities: new Map(H.map((g, M) => [
          M,
          f
        ])),
        elasticitiesOrthogonal: new Map(H.map((g, M) => [
          M,
          f
        ])),
        thicknesses: new Map(H.map((g, M) => [
          M,
          n
        ])),
        poissonsRatios: new Map(H.map((g, M) => [
          M,
          c
        ])),
        shearModuli: new Map(H.map((g, M) => [
          M,
          i
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${E} pernos d=${l * 1e3}mm`), console.log(`  P=${b} kN, col=${a * 1e3}mm, mesh=${r * 1e3}mm`), console.log(`  ${H.length} triangulos, ${h.length} nodos`);
      try {
        const g = Nt(h, H, {
          supports: u,
          loads: w
        }, W), M = Yo(h, H, W, g);
        e.nodes.val = h, e.elements.val = H, g && e.deformOutputs && (e.deformOutputs.val = g), e.nodeInputs && (e.nodeInputs.val = {
          supports: u,
          loads: w
        }), e.elementInputs && (e.elementInputs.val = {}), M && e.analyzeOutputs && (e.analyzeOutputs.val = M);
        let x = 0;
        g && g.deformations && g.deformations.forEach((C) => {
          const X = Math.sqrt(C[0] * C[0] + C[1] * C[1] + C[2] * C[2]);
          x = Math.max(x, X);
        }), console.log(`  max|u| = ${x.toExponential(4)}`);
      } catch (g) {
        console.warn("Placa Base failed:", g.message);
      }
      setTimeout(() => At(), 50), tt();
    }
    function ys() {
      const t = le("colB") || 0.3, o = le("colH") || 0.3, n = le("colT") || 8e-3, l = le("colLen") || 1.5, s = le("Lx") || 0.45, d = le("Ly") || 0.45, a = le("tPlaca") || 0.025, r = le("dBolt") || 0.022, f = le("sx") || 0.32, c = le("sy") || 0.32, i = Math.round(le("nSubColV") || 6), b = Math.round(le("nSubColH") || 4), E = Math.round(le("nSubPlaca") || 10), S = le("E") || 2e8, y = le("nu") || 0.3, p = S / (2 * (1 + y)), v = le("P") || -300, I = s / 2, A = d / 2, T = r / 2, B = t / 2, H = o / 2, h = [], u = [], w = E, L = s / w, R = d / w, W = (pe, Q) => Q * (w + 1) + pe;
      for (let pe = 0; pe <= w; pe++) for (let Q = 0; Q <= w; Q++) h.push([
        Q * L,
        pe * R,
        0
      ]);
      const g = [
        [
          I - f / 2,
          A - c / 2
        ],
        [
          I + f / 2,
          A - c / 2
        ],
        [
          I + f / 2,
          A + c / 2
        ],
        [
          I - f / 2,
          A + c / 2
        ]
      ], M = (pe, Q) => {
        for (const [ue, we] of g) if ((pe - ue) * (pe - ue) + (Q - we) * (Q - we) < T * T) return true;
        return false;
      }, x = u.length;
      for (let pe = 0; pe < w; pe++) for (let Q = 0; Q < w; Q++) {
        const ue = (Q + 0.5) * L, we = (pe + 0.5) * R;
        M(ue, we) || u.push([
          W(Q, pe),
          W(Q + 1, pe),
          W(Q + 1, pe + 1),
          W(Q, pe + 1)
        ]);
      }
      const C = u.length - x, X = i, V = b, ae = [
        [
          I - B,
          A - H
        ],
        [
          I + B,
          A - H
        ],
        [
          I + B,
          A + H
        ],
        [
          I - B,
          A + H
        ]
      ], Z = u.length, K = [
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
      ], de = (pe, Q) => {
        for (let ue = 0; ue < (w + 1) * (w + 1); ue++) if (Math.abs(h[ue][0] - pe) < L * 0.3 && Math.abs(h[ue][1] - Q) < R * 0.3 && Math.abs(h[ue][2]) < 1e-6) return ue;
        return -1;
      };
      for (const [pe, Q] of K) {
        const [ue, we] = ae[pe], [se, Se] = ae[Q], We = [];
        for (let lt = 0; lt <= X; lt++) {
          const rt = [], Tt = lt / X * l;
          for (let _t = 0; _t <= V; _t++) {
            const zt = _t / V, Bt = ue + zt * (se - ue), So = we + zt * (Se - we);
            if (lt === 0) {
              const Ut = de(Bt, So);
              if (Ut >= 0) {
                rt.push(Ut);
                continue;
              }
            }
            let ao = -1;
            for (let Ut = 0; Ut < h.length; Ut++) if (Math.abs(h[Ut][0] - Bt) < 1e-6 && Math.abs(h[Ut][1] - So) < 1e-6 && Math.abs(h[Ut][2] - Tt) < 1e-6) {
              ao = Ut;
              break;
            }
            ao >= 0 ? rt.push(ao) : (rt.push(h.length), h.push([
              Bt,
              So,
              Tt
            ]));
          }
          We.push(rt);
        }
        for (let lt = 0; lt < X; lt++) for (let rt = 0; rt < V; rt++) u.push([
          We[lt][rt],
          We[lt][rt + 1],
          We[lt + 1][rt + 1],
          We[lt + 1][rt]
        ]);
      }
      const ie = u.length - Z, Ee = /* @__PURE__ */ new Map();
      for (let pe = 0; pe < (w + 1) * (w + 1); pe++) {
        const Q = h[pe][0], ue = h[pe][1];
        for (const [we, se] of g) {
          const Se = Math.sqrt((Q - we) * (Q - we) + (ue - se) * (ue - se));
          Se >= T * 0.5 && Se <= T * 2 && Ee.set(pe, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Ne = /* @__PURE__ */ new Map(), q = [];
      for (let pe = 0; pe < h.length; pe++) Math.abs(h[pe][2] - l) < 1e-6 && q.push(pe);
      const fe = v / Math.max(q.length, 1);
      for (const pe of q) Ne.set(pe, [
        0,
        0,
        fe,
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
      for (let pe = x; pe < x + C; pe++) oe.elasticities.set(pe, S), oe.poissonsRatios.set(pe, y), oe.thicknesses.set(pe, a), oe.shearModuli.set(pe, p);
      for (let pe = Z; pe < Z + ie; pe++) oe.elasticities.set(pe, S), oe.poissonsRatios.set(pe, y), oe.thicknesses.set(pe, n), oe.shearModuli.set(pe, p);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${d * 1e3}mm, t=${a * 1e3}mm, 4 pernos d=${r * 1e3}mm`), console.log(`  ${C} Q4 placa + ${ie} Q4 columna = ${u.length} total`), console.log(`  ${h.length} nodos, P=${v} kN`);
      try {
        const pe = Nt(h, u, {
          supports: Ee,
          loads: Ne
        }, oe), Q = Yo(h, u, oe, pe);
        e.nodes.val = h, e.elements.val = u, pe && e.deformOutputs && (e.deformOutputs.val = pe), e.nodeInputs && (e.nodeInputs.val = {
          supports: Ee,
          loads: Ne
        }), e.elementInputs && (e.elementInputs.val = oe), Q && e.analyzeOutputs && (e.analyzeOutputs.val = Q);
        let ue = 0;
        (pe == null ? void 0 : pe.deformations) && pe.deformations.forEach((we) => {
          const se = Math.sqrt(we[0] * we[0] + we[1] * we[1] + we[2] * we[2]);
          ue = Math.max(ue, se);
        }), console.log(`  max|u| = ${ue.toExponential(4)}`);
      } catch (pe) {
        console.warn("Col+Placa failed:", pe.message), e.nodes.val = h, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
          supports: Ee,
          loads: Ne
        });
      }
      setTimeout(() => At(), 50), tt();
    }
    function $s() {
      const t = le("H") || 6, o = le("angle") || 45, n = le("bTop") || 3, l = le("bBot") || 3, s = le("meshSize") || 2, d = le("E") || 5e4, a = le("nu") || 0.3, r = le("gamma") || 18, f = le("c") || 15, c = le("phi") || 30, i = le("qs") || 0, b = t / Math.tan(o * Math.PI / 180), E = l + b + n, S = t, y = [
        [
          0,
          -S,
          0
        ],
        [
          E,
          -S,
          0
        ],
        [
          E,
          t,
          0
        ],
        [
          l + b,
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
      ], { nodes: p, elements: v } = go({
        points: y,
        polygon: [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        maxMeshSize: s
      }), I = p, A = [], T = /* @__PURE__ */ new Map();
      for (let H = 0; H < I.length; H++) {
        const h = I[H][0], u = I[H][1];
        Math.abs(u + S) < 1e-6 ? (A.push({
          node: H,
          fixX: true,
          fixY: true
        }), T.set(H, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(h) < 1e-6 || Math.abs(h - E) < 1e-6) && (A.push({
          node: H,
          fixX: true,
          fixY: false
        }), T.set(H, [
          true,
          false,
          true,
          true,
          true,
          true
        ]));
      }
      const B = t - s * 0.3;
      try {
        const H = I.map((M) => [
          M[0],
          M[1]
        ]), h = v.map((M) => [
          M[0],
          M[1],
          M[2]
        ]), u = al({
          nodes: H,
          elements: h,
          E: d,
          nu: a,
          gamma: r,
          c: f,
          phi: c,
          thickness: 1,
          supports: A,
          surcharge: i,
          surfaceYThreshold: B
        }), w = I.map((M) => [
          M[0],
          0,
          M[1]
        ]);
        e.nodes.val = w, e.elements.val = v;
        const L = /* @__PURE__ */ new Map();
        for (let M = 0; M < u.displacements.length; M++) {
          const [x, C] = u.displacements[M];
          L.set(M, [
            x,
            0,
            C,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: L
        }), e.nodeInputs && (e.nodeInputs.val = {
          supports: T
        }), e.elementInputs && (e.elementInputs.val = {});
        const R = /* @__PURE__ */ new Map();
        for (let M = 0; M < u.plasticStrain.length; M++) {
          const x = u.plasticStrain[M];
          R.set(M, [
            x,
            x,
            x
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: R
        });
        let W = 0;
        for (const [M, x] of u.displacements) {
          const C = Math.sqrt(M * M + x * x);
          W = Math.max(W, C);
        }
        let g = 0;
        for (const M of u.plasticStrain) g = Math.max(g, M);
        console.log(`Talud SRM: ${I.length} nodos, ${v.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${f} kPa, \u03C6=${c}\xB0, \u03B3=${r}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${u.fos.toFixed(3)}`), console.log(`  max|u| = ${W.toExponential(4)}`), console.log(`  max \u03B5_pl = ${g.toExponential(4)}`), u.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : u.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (H) {
        console.warn("Talud SRM failed:", H.message);
      }
      setTimeout(() => At(), 50), tt();
    }
    let ro = null, It = null, mo = null;
    function ga() {
      let t = document.getElementById("sections");
      if (!t) {
        t = document.createElement("div"), t.id = "sections";
        const o = document.getElementById("parameters");
        let n = document.getElementById("right-panels-wrapper");
        if (!n && o) {
          n = document.createElement("div"), n.id = "right-panels-wrapper", n.style.cssText = "position:absolute;bottom:0;right:0;z-index:3;max-height:95vh;display:flex;flex-direction:row;gap:0;align-items:flex-end;pointer-events:none;";
          let l = document.getElementById("luces-panel");
          l || (l = document.createElement("div"), l.id = "luces-panel", l.style.cssText = "width:180px;max-height:90vh;overflow-y:auto;pointer-events:auto;"), o.style.cssText = "width:240px;position:static;max-height:90vh;overflow-y:auto;pointer-events:auto;";
          const s = o.parentElement;
          s.removeChild(o), n.appendChild(t), n.appendChild(l), n.appendChild(o), s.appendChild(n);
        }
        n ? t.style.cssText = "width:200px;max-height:90vh;overflow-y:auto;pointer-events:auto;" : (t.style.cssText = "position:absolute;bottom:0;right:316px;width:250px;z-index:3;max-height:80vh;overflow-y:auto;", document.body.appendChild(t));
      }
      return t;
    }
    function vt(t) {
      const o = Vo.find((n) => n.id === F);
      return t / o.toM;
    }
    function yt(t) {
      const o = Vo.find((n) => n.id === F);
      return t * o.toM;
    }
    function ko(t) {
      const o = ts.find((l) => l.id === Y.forceId), n = Vo.find((l) => l.id === Y.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function Tn(t) {
      const o = ts.find((l) => l.id === Y.forceId), n = Vo.find((l) => l.id === Y.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function An() {
      return Y.label;
    }
    function ha() {
      switch (Vo.find((o) => o.id === F).id) {
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
    function xa() {
      const t = ko(20594), o = ko(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function Ms(t, o, n, l, s) {
      const d = Re.steelVigaType, a = d === 0 ? mn() : bn();
      if (Re.vigaMat === 0) {
        for (let r = 0; r < o.length; r++) {
          const f = o[r], c = `b${n}${r}`, i = `h${n}${r}`, b = {};
          b[c] = +vt(f.b).toFixed(2), b[i] = +vt(f.h).toFixed(2), t.addBinding(b, c, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${r + 1}`
          }), t.addBinding(b, i, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key, c = f == null ? void 0 : f.match(new RegExp(`^b${n}(\\d+)$`)), i = f == null ? void 0 : f.match(new RegExp(`^h${n}(\\d+)$`));
          c && (o[parseInt(c[1])].b = yt(r.value), Pe()), i && (o[parseInt(i[1])].h = yt(r.value), Pe());
        });
      } else if (d <= 1) {
        for (let r = 0; r < o.length; r++) {
          const f = {};
          f[`p${n}${r}`] = o[r].profileIdx ?? 0, t.addBinding(f, `p${n}${r}`, {
            label: `sv${n}${r + 1}`,
            options: a
          });
        }
        t.on("change", (r) => {
          var _a2, _b;
          const c = (_b = (_a2 = r.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          c && (o[parseInt(c[1])].profileIdx = r.value, Pe());
        });
      } else if (d === 2) {
        for (let r = 0; r < o.length; r++) {
          const f = o[r], c = {}, i = `${n}${r}`;
          c[`bf${i}`] = +vt(f.bf ?? 0.2).toFixed(3), c[`h${i}`] = +vt(f.hf ?? 0.4).toFixed(3), c[`tf${i}`] = +vt(f.tf ?? 0.015).toFixed(3), c[`tw${i}`] = +vt(f.tw ?? 0.01).toFixed(3), t.addBinding(c, `bf${i}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${n}${r + 1}`
          }), t.addBinding(c, `h${i}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          }), t.addBinding(c, `tf${i}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tf sv${n}${r + 1}`
          }), t.addBinding(c, `tw${i}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tw sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let c = 0; c < o.length; c++) {
            const i = `${n}${c}`;
            f === `bf${i}` && (o[c].bf = yt(r.value), Pe()), f === `h${i}` && (o[c].hf = yt(r.value), Pe()), f === `tf${i}` && (o[c].tf = yt(r.value), Pe()), f === `tw${i}` && (o[c].tw = yt(r.value), Pe());
          }
        });
      } else {
        for (let r = 0; r < o.length; r++) {
          const f = o[r], c = {}, i = `${n}${r}`;
          c[`bc${i}`] = +vt(f.bc ?? 0.2).toFixed(3), c[`hc${i}`] = +vt(f.hc ?? 0.3).toFixed(3), c[`t${i}`] = +vt(f.t ?? 8e-3).toFixed(3), t.addBinding(c, `bc${i}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${r + 1}`
          }), t.addBinding(c, `hc${i}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          }), t.addBinding(c, `t${i}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `t sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let c = 0; c < o.length; c++) {
            const i = `${n}${c}`;
            f === `bc${i}` && (o[c].bc = yt(r.value), Pe()), f === `hc${i}` && (o[c].hc = yt(r.value), Pe()), f === `t${i}` && (o[c].t = yt(r.value), Pe());
          }
        });
      }
    }
    function No() {
      var _a2;
      if (It) {
        try {
          It.dispose();
        } catch {
        }
        It = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), k !== "edificio" && k !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = ga();
      if (!o) return;
      o.style.display = "";
      const n = $, l = Math.round(((_a2 = re.nPisos) == null ? void 0 : _a2.val) ?? 3), s = ha(), d = xa(), a = ce.length || 1, r = ne.length || 1;
      for (; Re.perFloor.length < l; ) {
        const h = Re.perFloor.length > 0 ? JSON.parse(JSON.stringify(Re.perFloor[Re.perFloor.length - 1])) : xt(a, r);
        Re.perFloor.push(h);
      }
      Re.perFloor.length > l && (Re.perFloor.length = l);
      for (const h of Re.perFloor) {
        for (; h.vigasX.length < a; ) h.vigasX.push(h.vigasX.length > 0 ? {
          ...h.vigasX[h.vigasX.length - 1]
        } : Ct());
        for (h.vigasX.length > a && (h.vigasX.length = a); h.vigasY.length < r; ) h.vigasY.push(h.vigasY.length > 0 ? {
          ...h.vigasY[h.vigasY.length - 1]
        } : Ct());
        h.vigasY.length > r && (h.vigasY.length = r);
      }
      It = new on({
        title: `Sections (${n.label})`,
        container: o
      });
      const f = {
        colMat: Re.colMat
      };
      if (It.addBinding(f, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (h) => {
        Re.colMat = h.value, No(), Pe();
      }), Re.colMat === 0) {
        const h = {
          forma: Re.colShape
        };
        It.addBinding(h, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (w) => {
          Re.colShape = w.value, No(), Pe();
        });
        const u = {
          fc: +ko(Re.fc).toFixed(1)
        };
        It.addBinding(u, "fc", {
          min: d[0],
          max: d[1],
          step: d[2],
          label: `f'c col (${An()})`
        }), It.on("change", (w) => {
          var _a3;
          ((_a3 = w.target) == null ? void 0 : _a3.key) === "fc" && (Re.fc = Tn(w.value), Pe());
        });
      } else if (Re.colMat === 1) {
        const h = {
          colType: Re.steelColType
        };
        It.addBinding(h, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          Re.steelColType = u.value, No(), Pe();
        });
      }
      It.addBlade({
        view: "separator"
      });
      const c = {
        vigaMat: Re.vigaMat
      };
      if (It.addBinding(c, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (h) => {
        Re.vigaMat = h.value, No(), Pe();
      }), Re.vigaMat === 1) {
        const h = {
          vigaType: Re.steelVigaType
        };
        It.addBinding(h, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          Re.steelVigaType = u.value, No(), Pe();
        });
      }
      const i = Re.steelColType === 0 ? mn() : bn();
      Re.steelVigaType === 0 ? mn() : bn();
      const b = F === "m" ? [
        5e-3,
        0.1,
        1e-3
      ] : F === "cm" ? [
        0.5,
        10,
        0.1
      ] : F === "mm" ? [
        5,
        100,
        1
      ] : F === "in" ? [
        0.2,
        4,
        0.05
      ] : [
        0.01,
        0.5,
        5e-3
      ];
      for (let h = 0; h < l; h++) {
        const u = Re.perFloor[h], w = It.addFolder({
          title: `Piso ${h + 1}`,
          expanded: h < 2
        });
        if (Re.colMat === 0) if (Re.colShape === 1) {
          const L = {
            dCol: +vt(u.dCol).toFixed(2)
          };
          w.addBinding(L, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), w.on("change", (R) => {
            var _a3;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "dCol" && (u.dCol = yt(R.value), Pe());
          });
        } else {
          const L = {
            bCol: +vt(u.bCol).toFixed(2),
            hCol: +vt(u.hCol).toFixed(2)
          };
          w.addBinding(L, "bCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "b col"
          }), w.addBinding(L, "hCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "h col"
          }), w.on("change", (R) => {
            var _a3, _b;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bCol" && (u.bCol = yt(R.value), Pe()), ((_b = R.target) == null ? void 0 : _b.key) === "hCol" && (u.hCol = yt(R.value), Pe());
          });
        }
        else if (Re.colMat === 1) if (Re.steelColType <= 1) {
          const L = {
            col: u.colProfileIdx
          };
          w.addBinding(L, "col", {
            label: "Columna",
            options: i
          }).on("change", (R) => {
            u.colProfileIdx = R.value, Pe();
          });
        } else if (Re.steelColType === 2) {
          const L = {
            bf: +vt(u.colBf ?? 0.3).toFixed(3),
            h: +vt(u.colHf ?? 0.3).toFixed(3),
            tf: +vt(u.colTf ?? 0.02).toFixed(3),
            tw: +vt(u.colTw ?? 0.012).toFixed(3)
          };
          w.addBinding(L, "bf", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col bf"
          }), w.addBinding(L, "h", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), w.addBinding(L, "tf", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tf"
          }), w.addBinding(L, "tw", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tw"
          }), w.on("change", (R) => {
            var _a3, _b, _c, _d;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bf" && (u.colBf = yt(R.value), Pe()), ((_b = R.target) == null ? void 0 : _b.key) === "h" && (u.colHf = yt(R.value), Pe()), ((_c = R.target) == null ? void 0 : _c.key) === "tf" && (u.colTf = yt(R.value), Pe()), ((_d = R.target) == null ? void 0 : _d.key) === "tw" && (u.colTw = yt(R.value), Pe());
          });
        } else {
          const L = {
            bc: +vt(u.colBc ?? 0.3).toFixed(3),
            hc: +vt(u.colHc ?? 0.3).toFixed(3),
            t: +vt(u.colT ?? 0.01).toFixed(3)
          };
          w.addBinding(L, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), w.addBinding(L, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), w.addBinding(L, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), w.on("change", (R) => {
            var _a3, _b, _c;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = yt(R.value), Pe()), ((_b = R.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = yt(R.value), Pe()), ((_c = R.target) == null ? void 0 : _c.key) === "t" && (u.colT = yt(R.value), Pe());
          });
        }
        else {
          const L = {
            bc: +vt(u.colBc ?? 0.3).toFixed(3),
            hc: +vt(u.colHc ?? 0.3).toFixed(3),
            t: +vt(u.colT ?? 0.01).toFixed(3),
            Es: +ko(u.colEs ?? 2e8).toFixed(0),
            nuS: u.colNuS ?? 0.3,
            fc: +ko(u.colFc ?? 28e3).toFixed(1),
            nuC: u.colNuC ?? 0.2
          };
          w.addBinding(L, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), w.addBinding(L, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), w.addBinding(L, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), w.addBlade({
            view: "separator"
          });
          const R = +ko(1e8).toFixed(0), W = +ko(3e8).toFixed(0), g = Math.max(1, Math.round((W - R) / 200));
          w.addBinding(L, "Es", {
            min: R,
            max: W,
            step: g,
            label: `Es (${An()})`
          }), w.addBinding(L, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), w.addBinding(L, "fc", {
            min: d[0],
            max: d[1],
            step: d[2],
            label: `f'c (${An()})`
          }), w.addBinding(L, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), w.on("change", (M) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = M.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = yt(M.value), Pe()), ((_b = M.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = yt(M.value), Pe()), ((_c = M.target) == null ? void 0 : _c.key) === "t" && (u.colT = yt(M.value), Pe()), ((_d = M.target) == null ? void 0 : _d.key) === "Es" && (u.colEs = Tn(M.value), Pe()), ((_e2 = M.target) == null ? void 0 : _e2.key) === "nuS" && (u.colNuS = M.value, Pe()), ((_f = M.target) == null ? void 0 : _f.key) === "fc" && (u.colFc = Tn(M.value), Pe()), ((_g = M.target) == null ? void 0 : _g.key) === "nuC" && (u.colNuC = M.value, Pe());
          });
        }
        if (u.vigasX.length > 0) {
          const L = w.addFolder({
            title: `Vigas X (${u.vigasX.length})`,
            expanded: false
          });
          Ms(L, u.vigasX, "x", s, b);
        }
        if (u.vigasY.length > 0) {
          const L = w.addFolder({
            title: `Vigas Y (${u.vigasY.length})`,
            expanded: false
          });
          Ms(L, u.vigasY, "y", s, b);
        }
      }
      It.addBlade({
        view: "separator"
      });
      const E = It.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), S = {
        activar: me,
        direccion: Fe === "x" ? 0 : 1,
        cantidad: Me
      };
      E.addBinding(S, "activar", {
        label: "Activar"
      }), E.addBinding(S, "direccion", {
        label: "Corren en",
        options: {
          "X (entre ejes Y)": 0,
          "Y (entre ejes X)": 1
        }
      }), E.addBinding(S, "cantidad", {
        min: 1,
        max: 5,
        step: 1,
        label: "Cantidad/vano"
      }), E.on("change", (h) => {
        var _a3, _b, _c;
        ((_a3 = h.target) == null ? void 0 : _a3.key) === "activar" && (me = h.value, Pe()), ((_b = h.target) == null ? void 0 : _b.key) === "direccion" && (Fe = h.value === 0 ? "x" : "y", Pe()), ((_c = h.target) == null ? void 0 : _c.key) === "cantidad" && (Me = Math.round(h.value), Pe());
      }), It.addBlade({
        view: "separator"
      });
      const y = It.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), p = {
        activar: Ke,
        espesor: +vt(Ue).toFixed(3),
        subdivX: ft,
        subdivY: it
      };
      y.addBinding(p, "activar", {
        label: "Activar losas"
      }), y.addBinding(p, "espesor", {
        min: s[0],
        max: s[1] * 0.3,
        step: s[2],
        label: `Espesor (${n.length})`
      }), y.addBinding(p, "subdivX", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. X"
      }), y.addBinding(p, "subdivY", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. Y"
      }), y.on("change", (h) => {
        var _a3, _b, _c, _d;
        ((_a3 = h.target) == null ? void 0 : _a3.key) === "activar" && (Ke = h.value, Pe()), ((_b = h.target) == null ? void 0 : _b.key) === "espesor" && (Ue = yt(h.value), Pe()), ((_c = h.target) == null ? void 0 : _c.key) === "subdivX" && (ft = Math.round(h.value), Pe()), ((_d = h.target) == null ? void 0 : _d.key) === "subdivY" && (it = Math.round(h.value), Pe());
      }), It.addBlade({
        view: "separator"
      });
      const v = It.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), I = {
        espesor: +vt($e).toFixed(3),
        subdivH: He,
        subdivW: je
      };
      v.addBinding(I, "espesor", {
        min: s[0],
        max: s[1],
        step: s[2],
        label: `Espesor (${n.length})`
      }), v.addBinding(I, "subdivH", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. V"
      }), v.addBinding(I, "subdivW", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. H"
      }), v.on("change", (h) => {
        var _a3, _b, _c;
        ((_a3 = h.target) == null ? void 0 : _a3.key) === "espesor" && ($e = yt(h.value), Pe()), ((_b = h.target) == null ? void 0 : _b.key) === "subdivH" && (He = Math.round(h.value), Pe()), ((_c = h.target) == null ? void 0 : _c.key) === "subdivW" && (je = Math.round(h.value), Pe());
      });
      const A = ce.length || 1, T = ne.length || 1, B = A + 1, H = T + 1;
      if (A > 0) {
        const h = v.addFolder({
          title: `Muros dir X (${A} vanos)`,
          expanded: false
        });
        for (let u = 0; u < A; u++) for (let w = 0; w < H; w++) {
          const L = `wx_${u}_${w}`, R = Be.some((M) => M.dir === "x" && M.bay === u && M.axisIdx === w), W = {};
          W[L] = R;
          const g = `Vano X${u + 1} / Eje Y${String.fromCharCode(65 + w)}`;
          h.addBinding(W, L, {
            label: g
          }).on("change", (M) => {
            M.value ? Be.push({
              dir: "x",
              bay: u,
              axisIdx: w,
              floors: [
                -1
              ]
            }) : Be = Be.filter((x) => !(x.dir === "x" && x.bay === u && x.axisIdx === w)), Pe();
          });
        }
      }
      if (T > 0) {
        const h = v.addFolder({
          title: `Muros dir Y (${T} vanos)`,
          expanded: false
        });
        for (let u = 0; u < T; u++) for (let w = 0; w < B; w++) {
          const L = `wy_${u}_${w}`, R = Be.some((M) => M.dir === "y" && M.bay === u && M.axisIdx === w), W = {};
          W[L] = R;
          const g = `Vano Y${u + 1} / Eje X${w + 1}`;
          h.addBinding(W, L, {
            label: g
          }).on("change", (M) => {
            M.value ? Be.push({
              dir: "y",
              bay: u,
              axisIdx: w,
              floors: [
                -1
              ]
            }) : Be = Be.filter((x) => !(x.dir === "y" && x.bay === u && x.axisIdx === w)), Pe();
          });
        }
      }
      if (Be.length > 0) {
        v.addBlade({
          view: "separator"
        });
        const h = {
          muros: `${Be.length} ubicaciones`
        };
        v.addBinding(h, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function io() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (be || (be = t.innerHTML), xe) {
        try {
          xe.dispose();
        } catch {
        }
        xe = null;
      }
      if (ro) {
        try {
          ro.dispose();
        } catch {
        }
        ro = null;
      }
      t.innerHTML = "";
      const o = k.charAt(0).toUpperCase() + k.slice(1);
      xe = new on({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = rs()[k];
      if (n) {
        const s = {};
        for (const a of n) s[a.key] = re[a.key].val;
        for (const a of n) xe.addBinding(s, a.key, {
          min: re[a.key].min,
          max: re[a.key].max,
          step: re[a.key].step,
          label: re[a.key].label
        });
        const d = xe.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of n) {
          const r = {
            min: re[a.key].min,
            max: re[a.key].max
          };
          d.addBinding(r, "min", {
            label: `${a.key} min`,
            step: a.step
          }), d.addBinding(r, "max", {
            label: `${a.key} max`,
            step: a.step
          }), d.on("change", () => {
            re[a.key] && (re[a.key].min = r.min, re[a.key].max = r.max, re[a.key].val < r.min && (re[a.key].val = r.min), re[a.key].val > r.max && (re[a.key].val = r.max)), io(), Pe();
          });
        }
        xe.on("change", (a) => {
          var _a2;
          const r = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (r && re[r]) {
            if (re[r].val = a.value, k === "edificio" && (r === "nVanosX" || r === "nVanosY" || r === "nPisos")) {
              if (r === "nVanosX" || r === "nVanosY") {
                const f = Math.round(re.nVanosX.val), c = Math.round(re.nVanosY.val);
                for (; ce.length < f; ) ce.push(ce[ce.length - 1] ?? $.defaultSpan);
                for (ce.length > f && (ce.length = f); ne.length < c; ) ne.push(ne[ne.length - 1] ?? $.defaultSpan * 0.8);
                ne.length > c && (ne.length = c);
              }
              io();
            }
            Pe();
          }
        });
      }
      if (k === "edificio") {
        if (mo) {
          try {
            mo.dispose();
          } catch {
          }
          mo = null;
        }
        const s = document.getElementById("luces-panel");
        if (s) {
          s.innerHTML = "";
          const d = $;
          mo = new on({
            title: `Luces (${d.length})`,
            container: s
          });
          const a = mo.addFolder({
            title: "Luces X",
            expanded: true
          }), r = {};
          for (let i = 0; i < ce.length; i++) r[`svx_${i + 1}`] = ce[i];
          for (let i = 0; i < ce.length; i++) a.addBinding(r, `svx_${i + 1}`, {
            min: d.spanRange[0],
            max: d.spanRange[1],
            step: d.spanRange[2],
            label: `svx${i + 1}`
          });
          a.on("change", (i) => {
            var _a2, _b;
            const E = (_b = (_a2 = i.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svx_(\d+)$/);
            E && (ce[parseInt(E[1]) - 1] = i.value, Pe());
          });
          const f = mo.addFolder({
            title: "Luces Y",
            expanded: true
          }), c = {};
          for (let i = 0; i < ne.length; i++) c[`svy_${i + 1}`] = ne[i];
          for (let i = 0; i < ne.length; i++) f.addBinding(c, `svy_${i + 1}`, {
            min: d.spanRange[0],
            max: d.spanRange[1],
            step: d.spanRange[2],
            label: `svy${i + 1}`
          });
          f.on("change", (i) => {
            var _a2, _b;
            const E = (_b = (_a2 = i.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svy_(\d+)$/);
            E && (ne[parseInt(E[1]) - 1] = i.value, Pe());
          });
        }
      }
      if (No(), xe) {
        xe.addBlade({
          view: "separator"
        });
        const s = un()[k];
        if (s && s.length > 0) {
          const d = {};
          s.forEach((r, f) => {
            d[r.label] = f;
          });
          const a = {
            apoyo: Ft
          };
          xe.addBinding(a, "apoyo", {
            label: "Apoyo",
            options: d
          }).on("change", (r) => {
            Ft = r.value, Pe();
          });
        }
        if (k === "placa-3q" || k === "placa-q4") {
          const d = {
            teoria: Et
          };
          xe.addBinding(d, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (a) => {
            Et = a.value, Pe();
          });
        }
      }
      const l = is()[k];
      if (l && l.length > 0) {
        ro = new on({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const s = {};
        for (const a of l) s[a.key] = pt[a.key].val;
        for (const a of l) ro.addBinding(s, a.key, {
          min: pt[a.key].min,
          max: pt[a.key].max,
          step: pt[a.key].step,
          label: pt[a.key].label
        });
        const d = ro.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of l) {
          const r = {
            min: pt[a.key].min,
            max: pt[a.key].max
          };
          d.addBinding(r, "min", {
            label: `${a.key} min`,
            step: a.step
          }), d.addBinding(r, "max", {
            label: `${a.key} max`,
            step: a.step
          }), d.on("change", () => {
            pt[a.key] && (pt[a.key].min = r.min, pt[a.key].max = r.max, pt[a.key].val < r.min && (pt[a.key].val = r.min), pt[a.key].val > r.max && (pt[a.key].val = r.max)), io(), Pe();
          });
        }
        ro.on("change", (a) => {
          var _a2;
          const r = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (r && pt[r]) {
            if (pt[r].val = a.value, e.nodeInputs) {
              const f = e.nodeInputs.val;
              f.supports && (e.nodeInputs.val = {
                supports: f.supports
              });
            }
            setTimeout(() => Fn(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (s, d) => {
          if (re[s]) re[s].val = d, Pe(), io();
          else if (pt[s]) {
            if (pt[s].val = d, e.nodeInputs) {
              const a = e.nodeInputs.val;
              a.supports && (e.nodeInputs.val = {
                supports: a.supports
              });
            }
            setTimeout(() => {
              Fn(), io();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const d in re) s[d] = re[d].val;
          for (const d in pt) s[d] = pt[d].val;
          return s;
        },
        setGenerator: nt,
        createCustomPanel: (s, d, a) => va(s, d, a),
        removeCustomPanel: (s) => {
          ws(s);
        }
      };
    }
    const zn = /* @__PURE__ */ new Map();
    function va(t, o, n) {
      var _a2;
      ws(t);
      let l = document.querySelector("#cad3d-custom-panels");
      if (!l) {
        l = document.createElement("div"), l.id = "cad3d-custom-panels";
        const r = document.querySelector("#parameters");
        r ? (_a2 = r.parentElement) == null ? void 0 : _a2.insertBefore(l, r.nextSibling) : document.body.appendChild(l);
      }
      const s = document.createElement("div");
      s.className = "cad3d-custom-panel", s.style.marginBottom = "4px", l.appendChild(s);
      const d = new on({
        title: t,
        container: s
      }), a = {};
      for (const [r, f] of Object.entries(o)) {
        const c = f.label || r;
        if (Array.isArray(f.value)) {
          a[r] = f.value;
          const i = {
            [r]: f.value.join(", ")
          };
          d.addBinding(i, r, {
            label: c
          }).on("change", (b) => {
            a[r] = b.value.split(",").map((E) => parseFloat(E.trim())).filter((E) => !isNaN(E)), n && n({
              ...a
            });
          });
        } else if (f.options) {
          a[r] = f.value;
          const i = {
            [r]: f.value
          }, b = {};
          for (const E of f.options) b[E] = E;
          d.addBinding(i, r, {
            label: c,
            options: b
          }).on("change", (E) => {
            a[r] = E.value, n && n({
              ...a
            });
          });
        } else if (typeof f.value == "boolean") {
          a[r] = f.value;
          const i = {
            [r]: f.value
          };
          d.addBinding(i, r, {
            label: c
          }).on("change", (b) => {
            a[r] = b.value, n && n({
              ...a
            });
          });
        } else if (typeof f.value == "string") {
          a[r] = f.value;
          const i = {
            [r]: f.value
          };
          d.addBinding(i, r, {
            label: c
          }).on("change", (b) => {
            a[r] = b.value, n && n({
              ...a
            });
          });
        } else {
          a[r] = f.value;
          const i = {
            [r]: f.value
          }, b = {
            label: c
          };
          f.min !== void 0 && (b.min = f.min), f.max !== void 0 && (b.max = f.max), f.step !== void 0 && (b.step = f.step), d.addBinding(i, r, b).on("change", (E) => {
            a[r] = E.value, n && n({
              ...a
            });
          });
        }
      }
      return n && d.addButton({
        title: "Aplicar"
      }).on("click", () => {
        n({
          ...a
        });
      }), zn.set(t, {
        pane: d,
        values: a
      }), console.log(`Panel "${t}" created with ${Object.keys(o).length} params`), a;
    }
    function ws(t) {
      const o = zn.get(t);
      if (o) {
        try {
          o.pane.dispose();
        } catch {
        }
        zn.delete(t);
      }
    }
    function ya() {
      if (xe) {
        try {
          xe.dispose();
        } catch {
        }
        xe = null;
      }
      if (ro) {
        try {
          ro.dispose();
        } catch {
        }
        ro = null;
      }
      if (It) {
        try {
          It.dispose();
        } catch {
        }
        It = null;
      }
      if (mo) {
        try {
          mo.dispose();
        } catch {
        }
        mo = null;
      }
      const t = document.getElementById("sections");
      t && t.remove();
      const o = document.getElementById("right-panels-wrapper"), n = document.getElementById("parameters");
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && be && (n.innerHTML = be);
    }
    const Te = document.createElement("div");
    Te.id = "cad3d-panel";
    const Ss = document.createElement("style");
    Ss.textContent = `
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
  `, document.head.appendChild(Ss), Ya() === "light" && document.documentElement.classList.add("awatif-light"), Ja((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), k && At(true);
    }), Te.innerHTML = `
    <button class="toggle-btn-collapsed" id="cad3d-expand">FEM Studio</button>
    <h3>FEM Studio <span style="font-size:10px;color:var(--cad-info);margin-left:6px" id="cad3d-info">0n 0e</span><button class="toggle-btn" id="cad3d-toggle">_</button></h3>
    <div class="panel-body">
      <div class="btn-row">
        <button data-ex="truss">Cercha</button>
        <button data-ex="beams">Portico</button>
        <button data-ex="3d">Torre</button>
        <button data-ex="galpon">Galpon</button>
        <button data-ex="edificio">Edificio</button>
        <button data-ex="edif-muros">Edif. Muros</button>
        <button data-ex="edif-acero">Edif. Acero</button>
        <button data-ex="edif-acero-diag">Acero+Diag</button>
        <button data-ex="edif-mixto">Edif. Mixto</button>
        <button data-ex="mezanine">Mezanine</button>
        <button data-ex="barra">Barra</button>
        <button data-ex="placa3q">Placa 3Q</button>
        <button data-ex="placa">Placa Q4</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button data-ex="losa-rect">Losa Rect</button>
        <button data-ex="losa-plana">Losa Plana</button>
        <button data-ex="viga-alta">Viga Alta</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button data-ex="muro-contencion">Muro Cont.</button>
        <button data-ex="zapata">Zapata</button>
        <button data-ex="placa-orificios">Placa Base</button>
        <button data-ex="col-placa">Col+Placa 3D</button>
        <button data-ex="talud">Talud</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button data-ex="eiffel">Eiffel</button>
        <button data-ex="arco">Arco</button>
        <button data-ex="puente">Puente</button>
        <button data-ex="twisted">Twist</button>
        <button data-ex="burj">Burj</button>
        <button data-ex="opera">Opera</button>
        <button data-ex="diagrid">Diagrid</button>
      </div>
      <div class="btn-row" style="margin-top:4px">
        <button data-view="3d" class="view-active">3D</button>
        <button data-view="plan">Plan</button>
        <button data-view="elevX">EX</button>
        <button data-view="elevY">EY</button>
        <button id="cad3d-select">Select</button>
        <button id="cad3d-draw">Draw</button>
        <button id="cad3d-inspect">Inspect</button>
      </div>
      <div class="btn-row" id="cad3d-axis-buttons" style="margin-top:2px;display:none"></div>
      <div class="btn-row" id="cad3d-floor-buttons" style="margin-top:2px;display:none"></div>
      <div class="btn-row" style="margin-top:2px">
        <button id="cad3d-new-model" title="Nuevo modelo vac\xEDo">\u{1F195} New</button>
        <button id="cad3d-export" title="Exportar coordenadas y datos del modelo">\u{1F4CB} Export</button>
        <select id="cad3d-io-menu" title="Import/Export modelos" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);padding:2px 4px;font-size:11px;cursor:pointer;">
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
        <select id="cad3d-tests-menu" title="Validation tests vs ETABS" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);padding:2px 4px;font-size:11px;cursor:pointer;">
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
        <select id="cad3d-force-unit" title="Unidad de fuerza" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);padding:2px 4px;font-size:11px;cursor:pointer;">
          <option value="tonf">tonf</option><option value="kN">kN</option><option value="kgf">kgf</option>
          <option value="kip">kip</option><option value="lb">lb</option><option value="N">N</option>
        </select>
        <select id="cad3d-length-unit" title="Unidad de longitud" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);padding:2px 4px;font-size:11px;cursor:pointer;">
          <option value="m">m</option><option value="cm">cm</option><option value="mm">mm</option>
          <option value="ft">ft</option><option value="in">in</option>
        </select>
        <button id="cad3d-btn-clear" style="margin-left:auto">Clear</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button data-preset="MKS" class="active" title="tonf+m, esfuerzos kgf/cm\xB2">MKS</button>
        <button data-preset="SI" title="kN+m, esfuerzos kPa">SI</button>
        <button data-preset="US" title="kip+in, esfuerzos ksi">US</button>
      </div>
      <div class="btn-row" style="margin-top:4px">
        <button id="cad3d-modal" title="An\xE1lisis modal (frecuencias y modos)">\u26A1 Modal</button>
        <button id="cad3d-mode-prev" style="display:none" title="Modo anterior">\u25C0</button>
        <button id="cad3d-mode-next" style="display:none" title="Modo siguiente">\u25B6</button>
        <input id="cad3d-modal-scale" type="number" min="0.1" max="100" step="0.5" value="5" style="display:none;width:40px;font-size:10px;padding:1px 3px;background:var(--cad-bg);color:var(--cad-heading);border:1px solid var(--cad-border);border-radius:3px;text-align:center" title="Escala de animacion (% del modelo)" />
      </div>
      <div id="cad3d-mode-label" style="display:none;color:var(--cad-heading);font-size:10px;line-height:16px;padding:2px 4px;white-space:nowrap;overflow-x:auto">Modo 1</div>
      <div class="btn-row" style="margin-top:2px">
        <button id="cad3d-nonlinear" title="An\xE1lisis no-lineal din\xE1mico (BRB + sismo)">\u{1F525} Nonlinear</button>
        <button id="cad3d-pushover" title="Pushover c\xEDclico con hist\xE9resis">\u{1F4CA} Pushover</button>
        <button id="cad3d-fem-solver" title="Report Explained: derivaci\xF3n FEM paso a paso de todos los elementos">\u{1F4D0} Report Explained</button>
        <button id="cad3d-calc" title="Calculadora FEM: editor MATLAB + output KaTeX">\u{1F9EE} C\xE1lculo</button>
        <button id="cad3d-log" title="Ver log del solver">\u{1F4CB} Log</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button id="cad3d-cli-toggle" title="Abrir/cerrar consola CLI">\u2328 CLI</button>
      </div>
      <div id="cad3d-cli-panel" style="display:none;margin-top:2px;background:rgba(0,0,0,0.8);border:1px solid #444;border-radius:4px;padding:4px;max-height:200px;overflow-y:auto">
        <div id="cad3d-cli-output" style="font-family:monospace;font-size:10px;color:#0f0;white-space:pre-wrap;max-height:140px;overflow-y:auto;margin-bottom:4px"></div>
        <input class="cmd-input" id="cad3d-cmd" placeholder="cad.addNode(0,0,0) | cad.building([5,5],[4],3) | cad.info()" style="width:100%;font-family:monospace" />
      </div>
    </div>
  `;
    let kt = null;
    function $a() {
      var _a2, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, s = F, d = m, a = [];
      if (a.push("# Awatif FEM \u2014 Model Export"), a.push(`# Generator: ${k || "custom"}`), a.push(`# Units: ${d}, ${s}`), a.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), a.push(""), a.push(`## NODES (${t.length})`), a.push("# idx     X          Y          Z"), t.forEach((c, i) => {
        a.push(`  ${String(i).padStart(4)}  ${c[0].toFixed(4).padStart(10)}  ${c[1].toFixed(4).padStart(10)}  ${c[2].toFixed(4).padStart(10)}`);
      }), a.push(""), a.push(`## ELEMENTS (${o.length})`), a.push("# idx    nodeI  nodeJ"), o.forEach((c, i) => {
        const b = c.map((E) => String(E).padStart(6)).join("");
        a.push(`  ${String(i).padStart(4)}  ${b}`);
      }), a.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (a.push(`## SUPPORTS (${n.supports.size})`), a.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((c, i) => {
        const b = c.map((E) => E ? "  1" : "  0").join("");
        a.push(`  ${String(i).padStart(4)} ${b}`);
      }), a.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (a.push(`## LOADS (${n.loads.size})`), a.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((c, i) => {
        const b = c.map((E) => E.toFixed(3).padStart(11)).join(" ");
        a.push(`  ${String(i).padStart(4)}  ${b}`);
      }), a.push("")), l) {
        a.push("## ELEMENT PROPERTIES");
        const c = [
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
        ], i = "# elem  " + c.map((b) => b.name.padStart(12)).join(" ");
        a.push(i);
        for (let b = 0; b < o.length; b++) {
          const E = c.map((S) => {
            var _a3;
            const y = (_a3 = S.map) == null ? void 0 : _a3.get(b);
            return y !== void 0 ? y.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          a.push(`  ${String(b).padStart(4)}  ${E}`);
        }
        a.push("");
      }
      const r = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      r && r.size > 0 && (a.push(`## DISPLACEMENTS (${r.size} nodes)`), a.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), r.forEach((c, i) => {
        const b = c.map((E) => E.toExponential(4).padStart(12)).join(" ");
        a.push(`  ${String(i).padStart(4)}  ${b}`);
      }), a.push(""));
      const f = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (f && f.size > 0 && (a.push(`## REACTIONS (${f.size} supports)`), a.push("# node          Rx           Ry           Rz           Mx           My           Mz"), f.forEach((c, i) => {
        const b = c.map((E) => E.toFixed(4).padStart(12)).join(" ");
        a.push(`  ${String(i).padStart(4)}  ${b}`);
      }), a.push("")), k) {
        a.push("## CLI COMMAND");
        const c = Object.entries(re).map(([i, b]) => `${i}=${b.val}`).join(" ");
        a.push(`cad.${k === "edificio" ? "building" : k}(${c})`);
      }
      return a.join(`
`);
    }
    let Zo = false;
    function Ma() {
      var _a2, _b, _c, _d;
      if (kt) {
        kt.remove(), kt = null, Zo = false;
        return;
      }
      const t = $a();
      kt = document.createElement("div"), kt.id = "export-overlay", kt.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, kt.innerHTML = `
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
    `, document.body.appendChild(kt), (_a2 = kt.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        kt == null ? void 0 : kt.remove(), kt = null, Zo = false;
      }), (_b = kt.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = kt.querySelector("#export-body"), n = kt.querySelector("#export-minimize");
        Zo = !Zo, Zo ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", kt.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", kt.style.width = "720px");
      }), (_c = kt.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = kt.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = kt.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = kt.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e2, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, s = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, d = {
          generator: k || "custom",
          units: {
            force: m,
            length: F
          },
          nodes: o.map((i, b) => ({
            id: b,
            x: i[0],
            y: i[1],
            z: i[2]
          })),
          elements: n.map((i, b) => ({
            id: b,
            nodes: i
          }))
        };
        (l == null ? void 0 : l.supports) && (d.supports = [], l.supports.forEach((i, b) => d.supports.push({
          node: b,
          dofs: i
        }))), (l == null ? void 0 : l.loads) && (d.loads = [], l.loads.forEach((i, b) => d.loads.push({
          node: b,
          forces: i
        }))), s && (d.properties = {}, s.elasticities && (d.properties.E = Object.fromEntries(s.elasticities)), s.areas && (d.properties.A = Object.fromEntries(s.areas)), s.momentsOfInertiaZ && (d.properties.Iz = Object.fromEntries(s.momentsOfInertiaZ)), s.momentsOfInertiaY && (d.properties.Iy = Object.fromEntries(s.momentsOfInertiaY)), s.shearModuli && (d.properties.G = Object.fromEntries(s.shearModuli)), s.torsionalConstants && (d.properties.J = Object.fromEntries(s.torsionalConstants)));
        const a = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        a && a.size > 0 && (d.displacements = {}, a.forEach((i, b) => d.displacements[b] = i));
        const r = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        r && r.size > 0 && (d.reactions = {}, r.forEach((i, b) => d.reactions[b] = i));
        const f = kt.querySelector("#export-text");
        f.value = JSON.stringify(d, null, 2);
        const c = kt.querySelector("#export-status");
        c.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function tt() {
      var _a2, _b, _c;
      const t = Te.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, s = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let d = 0, a = 0, r = 0;
        for (const c of n) c.length === 2 ? d++ : c.length === 3 ? a++ : c.length === 4 && r++;
        let f = `${o}n ${l}e ${s}s`;
        (r > 0 || a > 0) && (f += ` | ${d}fr`, r > 0 && (f += ` ${r}q4`), a > 0 && (f += ` ${a}tri`)), t.textContent = f;
      }
    }
    function Ln() {
      var _a2;
      if (!ze || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (s <= 0) return;
        const d = sl(t, o, n, l, Math.min(s, 12));
        if (d.frequencies && d.frequencies.length > 0) {
          ge = d, he = t.map((c) => [
            ...c
          ]), Ce = 0;
          const { extent: a } = vo(), r = (_a2 = d.modeShapes) == null ? void 0 : _a2[0];
          if (r) {
            let c = 0;
            for (let i = 0; i < t.length; i++) {
              const b = r[i * 6] || 0, E = r[i * 6 + 1] || 0, S = r[i * 6 + 2] || 0;
              c = Math.max(c, Math.sqrt(b * b + E * E + S * S));
            }
            ke = c > 1e-12 ? a * 0.05 / c : 1;
          }
          const f = `${k} \u2014 ${t.length}n ${o.length}e`;
          qe.render(d, {
            title: f
          }), qe.div.style.display = "", Qo(), console.log(`Modal: ${d.frequencies.length} modos. f\u2081 = ${d.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), ge = null;
      }
    }
    function Cn() {
      De && (cancelAnimationFrame(De), De = 0), he.length > 0 && (e.nodes.val = he.map((t) => [
        ...t
      ])), qe.div.style.display = "none", ge = null;
    }
    function Qo() {
      var _a2;
      if (De && cancelAnimationFrame(De), !(ge == null ? void 0 : ge.modeShapes) || !he.length) return;
      const t = ge.modeShapes[Ce];
      if (!t) return;
      const o = ((_a2 = ge.frequencies) == null ? void 0 : _a2[Ce]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), s = he.length, d = e.elements.rawVal, { extent: a } = vo(), r = Te.querySelector("#cad3d-modal-scale"), f = r && parseFloat(r.value) || 5;
      let c = 0;
      for (let T = 0; T < s; T++) {
        const B = t[T * 6] || 0, H = t[T * 6 + 1] || 0, h = t[T * 6 + 2] || 0;
        c = Math.max(c, Math.sqrt(B * B + H * H + h * h));
      }
      const i = c > 1e-12 ? a * f / 100 / c : 1, b = et();
      if (!b) return;
      let E = null, S = null, y = null;
      b.scene.traverse((T) => {
        var _a3, _b;
        !E && T.isPoints && T.geometry && (E = T), !S && T.isLineSegments && T.geometry && !T.name && (S = T), !y && T.isMesh && ((_a3 = T.material) == null ? void 0 : _a3.transparent) && ((_b = T.material) == null ? void 0 : _b.opacity) < 0.5 && T.geometry && (y = T);
      });
      const p = new Float32Array(s * 3), v = [];
      for (const T of d) if (T.length === 2) v.push([
        T[0],
        T[1]
      ]);
      else for (let B = 0; B < T.length; B++) v.push([
        T[B],
        T[(B + 1) % T.length]
      ]);
      const I = new Float32Array(v.length * 6);
      function A() {
        const T = (performance.now() - l) / 1e3, B = Math.sin(2 * Math.PI * n * T) * i;
        for (let H = 0; H < s; H++) {
          const h = he[H];
          p[H * 3] = h[0] + (t[H * 6] || 0) * B, p[H * 3 + 1] = h[1] + (t[H * 6 + 1] || 0) * B, p[H * 3 + 2] = h[2] + (t[H * 6 + 2] || 0) * B;
        }
        if (E) {
          const H = E.geometry, h = H.getAttribute("position");
          h && h.array.length === p.length ? (h.array.set(p), h.needsUpdate = true) : H.setAttribute("position", new zo(p.slice(), 3));
        }
        if (S) {
          for (let u = 0; u < v.length; u++) {
            const [w, L] = v[u];
            I[u * 6] = p[w * 3], I[u * 6 + 1] = p[w * 3 + 1], I[u * 6 + 2] = p[w * 3 + 2], I[u * 6 + 3] = p[L * 3], I[u * 6 + 4] = p[L * 3 + 1], I[u * 6 + 5] = p[L * 3 + 2];
          }
          const H = S.geometry, h = H.getAttribute("position");
          h && h.array.length === I.length ? (h.array.set(I), h.needsUpdate = true) : H.setAttribute("position", new zo(I.slice(), 3));
        }
        if (y) {
          const H = [];
          for (const h of d) if (h.length === 3) {
            const [u, w, L] = h;
            H.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), H.push(p[w * 3], p[w * 3 + 1], p[w * 3 + 2]), H.push(p[L * 3], p[L * 3 + 1], p[L * 3 + 2]);
          } else if (h.length === 4) {
            const [u, w, L, R] = h;
            H.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), H.push(p[w * 3], p[w * 3 + 1], p[w * 3 + 2]), H.push(p[L * 3], p[L * 3 + 1], p[L * 3 + 2]), H.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), H.push(p[L * 3], p[L * 3 + 1], p[L * 3 + 2]), H.push(p[R * 3], p[R * 3 + 1], p[R * 3 + 2]);
          }
          if (H.length > 0) {
            const h = y.geometry, u = new Float32Array(H), w = h.getAttribute("position");
            w && w.array.length === u.length ? (w.array.set(u), w.needsUpdate = true) : h.setAttribute("position", new zo(u, 3));
          }
        }
        b.render(), De = requestAnimationFrame(A);
      }
      De = requestAnimationFrame(A);
    }
    function Fn() {
      var _a2, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const y = le("CM") ?? 0, p = le("CV") ?? 0, v = y + p, I = le("Ex") ?? 0, A = le("Ey") ?? 0;
        if (v === 0 && I === 0 && A === 0) return;
        const T = /* @__PURE__ */ new Map(), B = [];
        for (let M = 0; M < t.length; M++) n.supports.has(M) || B.push(M);
        const H = (M) => Math.round(M * 1e3) / 1e3, h = /* @__PURE__ */ new Set();
        n.supports.forEach((M, x) => {
          h.add(`${H(t[x][0])},${H(t[x][1])}`);
        });
        const u = /* @__PURE__ */ new Set();
        for (const M of B) h.has(`${H(t[M][0])},${H(t[M][1])}`) && u.add(M);
        const w = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set();
        if (I !== 0 || A !== 0) {
          let M = -1 / 0, x = -1 / 0;
          for (const X of u) M = Math.max(M, H(t[X][0])), x = Math.max(x, H(t[X][1]));
          const C = /* @__PURE__ */ new Map();
          for (const X of u) {
            const V = H(t[X][2]);
            C.has(V) || C.set(V, []), C.get(V).push(X);
          }
          C.forEach((X) => {
            if (I !== 0) {
              const V = /* @__PURE__ */ new Set();
              for (const ae of X) if (H(t[ae][0]) === M) {
                const Z = H(t[ae][1]);
                V.has(Z) || (V.add(Z), w.add(ae));
              }
            }
            if (A !== 0) {
              const V = /* @__PURE__ */ new Set();
              for (const ae of X) if (H(t[ae][1]) === x) {
                const Z = H(t[ae][0]);
                V.has(Z) || (V.add(Z), L.add(ae));
              }
            }
          });
        }
        const R = 9.81, W = /* @__PURE__ */ new Map();
        for (let M = 0; M < o.length; M++) {
          const x = o[M], C = ((_a2 = l.densities) == null ? void 0 : _a2.get(M)) ?? 0;
          if (!(Math.abs(C) < 1e-15)) {
            if (x.length === 2) {
              const X = ((_b = l.areas) == null ? void 0 : _b.get(M)) ?? 0, V = t[x[0]], ae = t[x[1]], Z = Math.sqrt((ae[0] - V[0]) ** 2 + (ae[1] - V[1]) ** 2 + (ae[2] - V[2]) ** 2), de = -(C * X * Z * R) / 2;
              W.set(x[0], (W.get(x[0]) ?? 0) + de), W.set(x[1], (W.get(x[1]) ?? 0) + de);
            } else if (x.length >= 3) {
              const X = ((_c = l.thicknesses) == null ? void 0 : _c.get(M)) ?? 0;
              let V = 0;
              if (x.length === 3) {
                const [K, de, ie] = x.map((Ee) => t[Ee]);
                V = 0.5 * Math.abs((de[0] - K[0]) * (ie[1] - K[1]) - (ie[0] - K[0]) * (de[1] - K[1]));
              } else if (x.length === 4) {
                const [K, de, ie, Ee] = x.map((Ne) => t[Ne]);
                if (V = 0.5 * Math.abs((de[0] - K[0]) * (ie[1] - K[1]) - (ie[0] - K[0]) * (de[1] - K[1])) + 0.5 * Math.abs((ie[0] - K[0]) * (Ee[1] - K[1]) - (Ee[0] - K[0]) * (ie[1] - K[1])), V < 1e-10) {
                  const Ne = [
                    de[0] - K[0],
                    de[1] - K[1],
                    de[2] - K[2]
                  ], q = [
                    Ee[0] - K[0],
                    Ee[1] - K[1],
                    Ee[2] - K[2]
                  ], fe = [
                    Ne[1] * q[2] - Ne[2] * q[1],
                    Ne[2] * q[0] - Ne[0] * q[2],
                    Ne[0] * q[1] - Ne[1] * q[0]
                  ];
                  V = Math.sqrt(fe[0] ** 2 + fe[1] ** 2 + fe[2] ** 2);
                }
              }
              const Z = -(C * X * V * R) / x.length;
              for (const K of x) W.set(K, (W.get(K) ?? 0) + Z);
            }
          }
        }
        const g = /* @__PURE__ */ new Set();
        for (const M of o) M.length === 2 && (g.add(M[0]), g.add(M[1]));
        for (const M of B) {
          const x = w.has(M) ? I : 0, C = L.has(M) ? A : 0, X = W.get(M) ?? 0, V = g.has(M) ? v : 0, ae = X + V;
          (x !== 0 || C !== 0 || Math.abs(ae) > 1e-10) && T.set(M, [
            x,
            C,
            ae,
            0,
            0,
            0
          ]);
        }
        n = {
          ...n,
          loads: T
        }, e.nodeInputs.val = n;
      }
      const s = performance.now();
      let d = 0, a = 0, r = 0;
      for (const y of o) y.length === 2 ? d++ : y.length === 3 ? r++ : y.length === 4 && a++;
      const f = ((_d = n.supports) == null ? void 0 : _d.size) || 0, c = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, i = t.length * 6, b = i - f * 6, E = [], S = (y) => E.push(y);
      S('<b style="color:var(--cad-heading)">FEM Solver</b>'), S(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), d && S(`&nbsp;&nbsp;Frames: <b>${d}</b>`), a && S(`&nbsp;&nbsp;Shell Q4: <b>${a}</b>`), r && S(`&nbsp;&nbsp;Triangulos: <b>${r}</b>`), S(`&nbsp;&nbsp;Apoyos: ${f} &nbsp;|&nbsp; Cargas: ${c}`), S(`<span style="color:var(--cad-info)">DOFs:</span> ${i} total, ~${b} libres`), S('<hr style="border-color:var(--cad-border);margin:4px 0">'), S(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${i}&times;${i})`), S("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const y = Nt(t, o, n, l), p = performance.now() - s;
        if (y) {
          e.deformOutputs.val = y, S(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${p.toFixed(0)} ms</span>`);
          let v = 0, I = -1, A = 0, T = 0;
          y.deformations && y.deformations.forEach((w, L) => {
            const R = Math.sqrt(w[0] * w[0] + w[1] * w[1] + w[2] * w[2]);
            R > v && (v = R, I = L, A = w[0], T = w[2]);
          }), S('<span style="color:#888">3.</span> Desplazamientos:'), S(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${v.toExponential(3)}</b> m <span style="color:#666">(nodo ${I})</span>`), S(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(A * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(T * 1e3).toFixed(4)} mm`);
          const B = performance.now(), H = Yo(t, o, l, y), h = performance.now() - B;
          H && (e.analyzeOutputs.val = H, S(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${h.toFixed(0)} ms</span>`), S("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const u = performance.now() - s;
          S('<hr style="border-color:var(--cad-border);margin:4px 0">'), S(`<b style="color:#00cc88">&#10004; Completado: ${u.toFixed(0)} ms</b>`);
        }
      } catch (y) {
        const p = performance.now() - s;
        S(`<b style="color:#ff4444">&#10008; Error (${p.toFixed(0)} ms): ${y.message}</b>`);
      }
      window.__femLog = E, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), ze && setTimeout(() => Ln(), 50);
    }
    function Rn(t, o) {
      const n = t * o, l = t * o * o * o / 12, s = o * t * t * t / 12, d = Math.min(t, o), a = Math.max(t, o), r = d * d * d * a * (1 / 3 - 0.21 * d / a * (1 - d * d * d * d / (12 * a * a * a * a)));
      return {
        A: n,
        Iz: l,
        Iy: s,
        J: r
      };
    }
    function Es(t) {
      const o = t / 2, n = Math.PI * o * o, l = Math.PI * o * o * o * o / 4, s = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: l,
        Iy: l,
        J: s
      };
    }
    function Pn(t, o, n, l) {
      const s = o - 2 * n, d = 2 * t * n + s * l, a = (t * o * o * o - (t - l) * s * s * s) / 12, r = (2 * n * t * t * t + s * l * l * l) / 12, f = (2 * t * n * n * n + s * l * l * l) / 3;
      return {
        A: d,
        Iz: a,
        Iy: r,
        J: f
      };
    }
    function Nn(t, o, n) {
      const l = t - 2 * n, s = o - 2 * n, d = t * o - l * s, a = (t * o * o * o - l * s * s * s) / 12, r = (o * t * t * t - s * l * l * l) / 12, f = (t - n) * (o - n), c = 2 * ((t - n) / n + (o - n) / n), i = 4 * f * f / (c > 0 ? c : 1);
      return {
        A: d,
        Iz: a,
        Iy: r,
        J: i
      };
    }
    function wa(t, o, n, l, s, d, a) {
      const f = 4700 * Math.sqrt(d / 1e3) * 1e3 / l, c = t - 2 * n, i = o - 2 * n, b = t * o - c * i, E = (t * o * o * o - c * i * i * i) / 12, S = (o * t * t * t - i * c * c * c) / 12, y = c * i, p = c * i * i * i / 12, v = i * c * c * c / 12, I = b + f * y, A = E + f * p, T = S + f * v, B = l / (2 * (1 + s)), H = (t - n) * (o - n), h = 2 * ((t - n) / n + (o - n) / n), u = 4 * H * H / (h > 0 ? h : 1);
      return {
        A: I,
        Iz: A,
        Iy: T,
        J: u,
        Es: l,
        Gs: B,
        A_steel: b,
        A_conc: y
      };
    }
    function xo() {
      if (!e.elementInputs) return;
      const t = e.elements.val, o = $, n = {
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
      if ((k === "edificio" || k === "frame") && O.size > 0) {
        const { colMat: s, vigaMat: d, colShape: a, fc: r, perFloor: f } = Re, c = 4700 * Math.sqrt(r / 1e3) * 1e3, i = c / (2 * 1.2), b = 24 / 9.80665, E = o.E, S = o.G, y = o.rho;
        for (let p = 0; p < t.length; p++) {
          if (U.has(p)) {
            const w = 4700 * Math.sqrt(r / 1e3) * 1e3, L = 0.2;
            n.elasticities.set(p, w), n.poissonsRatios.set(p, L), n.thicknesses.set(p, $e), n.shearModuli.set(p, w / (2 * (1 + L))), n.densities.set(p, 24 / 9.80665);
            continue;
          }
          if (ht.has(p)) {
            const w = 4700 * Math.sqrt(r / 1e3) * 1e3, L = 0.2;
            n.elasticities.set(p, w), n.poissonsRatios.set(p, L), n.thicknesses.set(p, Ue), n.shearModuli.set(p, w / (2 * (1 + L))), n.densities.set(p, 24 / 9.80665);
            continue;
          }
          const v = O.has(p), I = ee.get(p) ?? 0, A = f[I] ?? f[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let T, B, H, h;
          if (v) if (s === 0) B = c, H = i, h = b, T = a === 1 ? Es(A.dCol) : Rn(A.bCol, A.hCol), n.sectionShapes.set(p, a === 1 ? {
            type: "circ",
            d: A.dCol
          } : {
            type: "rect",
            b: A.bCol,
            h: A.hCol
          });
          else if (s === 1) {
            B = E, H = S, h = y;
            const w = Re.steelColType;
            if (w <= 1) {
              const L = Io[A.colProfileIdx] ?? Io[0];
              T = {
                A: L.A,
                Iz: L.Iz,
                Iy: L.Iy,
                J: L.J
              }, n.sectionShapes.set(p, {
                type: "I",
                b: L.bf,
                h: L.d,
                name: L.name
              });
            } else if (w === 2) {
              const L = A.colBf ?? 0.3, R = A.colHf ?? 0.3, W = A.colTf ?? 0.02, g = A.colTw ?? 0.012;
              T = Pn(L, R, W, g);
              const M = `I${(R * 100).toFixed(0)}x${(L * 100).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "I",
                b: L,
                h: R,
                tf: W,
                tw: g,
                name: M
              });
            } else {
              const L = A.colBc ?? 0.3, R = A.colHc ?? 0.3, W = A.colT ?? 0.01;
              T = Nn(L, R, W);
              const g = `\u25A1${(R * 100).toFixed(0)}x${(L * 100).toFixed(0)}x${(W * 1e3).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "HSS",
                b: L,
                h: R,
                tw: W,
                name: g
              });
            }
          } else {
            const w = A.colBc ?? 0.3, L = A.colHc ?? 0.3, R = A.colT ?? 0.01, W = A.colFc ?? 28e3, g = A.colEs ?? 2e8, M = A.colNuS ?? 0.3;
            A.colNuC;
            const x = wa(w, L, R, g, M, W);
            T = {
              A: x.A,
              Iz: x.Iz,
              Iy: x.Iy,
              J: x.J
            }, B = x.Es, H = x.Gs;
            const C = 7.85, X = 24 / 9.80665;
            h = (C * x.A_steel + X * x.A_conc) / (x.A_steel + x.A_conc);
            const V = `CFT ${(L * 1e3).toFixed(0)}X${(w * 1e3).toFixed(0)}X${(R * 1e3).toFixed(0)}`;
            n.sectionShapes.set(p, {
              type: "CFT",
              b: w,
              h: L,
              tw: R,
              name: V
            });
          }
          else {
            const w = Ie.get(p), L = w ? w.dir === "x" ? A.vigasX : A.vigasY : [], R = w ? L[w.bay] ?? L[0] ?? Ct() : Ct();
            if (d === 0) B = c, H = i, h = b, T = Rn(R.b, R.h), n.sectionShapes.set(p, {
              type: "rect",
              b: R.b,
              h: R.h
            });
            else {
              B = E, H = S, h = y;
              const W = Re.steelVigaType;
              if (W <= 1) {
                const g = Io[R.profileIdx ?? 0] ?? Io[0];
                T = {
                  A: g.A,
                  Iz: g.Iz,
                  Iy: g.Iy,
                  J: g.J
                }, n.sectionShapes.set(p, {
                  type: "I",
                  b: g.bf,
                  h: g.d,
                  name: g.name
                });
              } else if (W === 2) {
                const g = R.bf ?? 0.2, M = R.hf ?? 0.4, x = R.tf ?? 0.015, C = R.tw ?? 0.01;
                T = Pn(g, M, x, C);
                const X = `I${(M * 100).toFixed(0)}x${(g * 100).toFixed(0)}`;
                n.sectionShapes.set(p, {
                  type: "I",
                  b: g,
                  h: M,
                  tf: x,
                  tw: C,
                  name: X
                });
              } else {
                const g = R.bc ?? 0.2, M = R.hc ?? 0.3, x = R.t ?? 8e-3;
                T = Nn(g, M, x);
                const C = `\u25A1${(M * 100).toFixed(0)}x${(g * 100).toFixed(0)}x${(x * 1e3).toFixed(0)}`;
                n.sectionShapes.set(p, {
                  type: "HSS",
                  b: g,
                  h: M,
                  tw: x,
                  name: C
                });
              }
            }
          }
          const u = ve.get(p);
          if (u) {
            if ((u.material ?? 1) === 0 ? (B = c, H = i, h = b) : (B = E, H = S, h = y), u.secType === "rect" && u.b && u.h) T = Rn(u.b, u.h), n.sectionShapes.set(p, {
              type: "rect",
              b: u.b,
              h: u.h
            });
            else if (u.secType === "circ" && u.b) T = Es(u.b), n.sectionShapes.set(p, {
              type: "circ",
              d: u.b
            });
            else if ((u.secType === "W" || u.secType === "HSS") && u.profileIdx !== void 0) {
              const L = Io[u.profileIdx] ?? Io[0];
              T = {
                A: L.A,
                Iz: L.Iz,
                Iy: L.Iy,
                J: L.J
              }, n.sectionShapes.set(p, {
                type: "I",
                b: L.bf,
                h: L.d,
                name: L.name
              });
            } else if (u.secType === "I-param" && u.bf && u.hf && u.tf && u.tw) {
              T = Pn(u.bf, u.hf, u.tf, u.tw);
              const L = `I${(u.hf * 100).toFixed(0)}x${(u.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "I",
                b: u.bf,
                h: u.hf,
                tf: u.tf,
                tw: u.tw,
                name: L
              });
            } else if (u.secType === "tubular" && u.bc && u.hc && u.t) {
              T = Nn(u.bc, u.hc, u.t);
              const L = `\u25A1${(u.hc * 100).toFixed(0)}x${(u.bc * 100).toFixed(0)}x${(u.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "HSS",
                b: u.bc,
                h: u.hc,
                tw: u.t,
                name: L
              });
            }
          }
          n.elasticities.set(p, B), n.shearModuli.set(p, H), n.areas.set(p, T.A), n.momentsOfInertiaZ.set(p, T.Iy), n.momentsOfInertiaY.set(p, T.Iz), n.torsionalConstants.set(p, T.J), n.densities.set(p, h), u && u.releases12 && u.releases12.some((w) => w) && (n.momentReleases || (n.momentReleases = /* @__PURE__ */ new Map()), n.momentReleases.set(p, u.releases12)), u && u.springs12 && u.springs12.some((w) => w > 0) && (n.partialFixitySprings || (n.partialFixitySprings = /* @__PURE__ */ new Map()), n.partialFixitySprings.set(p, u.springs12));
        }
      } else for (let s = 0; s < t.length; s++) n.elasticities.set(s, o.E), n.shearModuli.set(s, o.G), n.areas.set(s, o.A), n.momentsOfInertiaZ.set(s, o.Iy), n.momentsOfInertiaY.set(s, o.Iz), n.torsionalConstants.set(s, o.J), n.densities.set(s, o.rho);
      e.elementInputs.val = n;
    }
    function Is(t) {
      Te.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === t);
      });
    }
    window.innerWidth <= 600 && Te.classList.add("collapsed"), setTimeout(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p;
      (_a2 = Te.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (g) => {
        g.stopPropagation(), Te.classList.add("collapsed");
      }), (_b = Te.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (g) => {
        g.stopPropagation(), Te.classList.remove("collapsed");
      }), Te.querySelectorAll("[data-ex]").forEach((g) => {
        g.addEventListener("click", (M) => {
          M.stopPropagation();
          const x = g.dataset.ex;
          Is(x), Qe.example(x);
        });
      }), Te.querySelectorAll("[data-view]").forEach((g) => {
        g.addEventListener("click", (M) => {
          M.stopPropagation();
          const x = g.dataset.view;
          yo(x), Te.querySelectorAll("[data-view]").forEach((C) => C.classList.remove("view-active")), g.classList.add("view-active");
        });
      }), (_c = Te.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (g) => {
        g.stopPropagation(), k = "", aa.val = false, ya(), Qe.clear();
      }), (_d = Te.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (g) => {
        var _a3;
        g.stopPropagation(), no && (no = false, Ao()), co && cn(), Jt = !Jt, (_a3 = Te.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", Jt);
        const x = et();
        x && (x.controls.enabled = !Jt), Jt || rn();
      }), (_e2 = Te.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (g) => {
        var _a3;
        g.stopPropagation(), no && (no = false, Ao()), Jt && rn(), co = !co, (_a3 = Te.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", co), co ? Ta() : cn();
      }), (_f = Te.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (g) => {
        var _a3;
        g.stopPropagation(), Jt && rn(), co && cn(), no = !no, (_a3 = Te.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", no), no || Ao();
      }), (_g = Te.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (g) => {
        g.stopPropagation(), Qe.clear(), Ae = null;
      });
      const t = Te.querySelector("#cad3d-tests-menu");
      t && t.addEventListener("change", () => {
        const g = t.value;
        t.value = "", g && o(g);
      });
      function o(g) {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const C = 15e3 * Math.sqrt(210) * 10, X = 0.2, V = C / (2 * (1 + X)), ae = 0.09, Z = 0.3 ** 4 / 12, K = 0.141 * 0.3 ** 4, de = 0.25 * 0.4, ie = 0.25 * 0.4 ** 3 / 12, Ee = 0.4 * 0.25 ** 3 / 12, Ne = 1e-3, q = 5 / 6 * ae, fe = 5 / 6 * de, oe = [];
        function pe(Q, ue, we) {
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
          for (const Se of ue) se.elasticities.set(Se, C), se.shearModuli.set(Se, V), se.areas.set(Se, ae), se.momentsOfInertiaZ.set(Se, Z), se.momentsOfInertiaY.set(Se, Z), se.torsionalConstants.set(Se, K), se.shearAreasY.set(Se, q), se.shearAreasZ.set(Se, q);
          for (const Se of we) se.elasticities.set(Se, C), se.shearModuli.set(Se, V), se.areas.set(Se, de), se.momentsOfInertiaZ.set(Se, Ee), se.momentsOfInertiaY.set(Se, ie), se.torsionalConstants.set(Se, Ne), se.shearAreasY.set(Se, fe), se.shearAreasZ.set(Se, fe);
          return se;
        }
        if (g === "test-cantilever" || g === "test-all") {
          const we = 270 / (3 * C * Z), se = [
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
          ], Se = [
            [
              0,
              1
            ]
          ], We = pe(1, [], []);
          We.elasticities.set(0, C), We.shearModuli.set(0, V), We.areas.set(0, ae), We.momentsOfInertiaZ.set(0, Z), We.momentsOfInertiaY.set(0, Z), We.torsionalConstants.set(0, K);
          const lt = Nt(se, Se, {
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
          }, We);
          oe.push({
            name: "Cantilever Beam",
            formulation: "Euler-Bernoulli (PL\xB3/3EI)",
            nodes: se,
            elements: Se,
            results: [
              {
                label: "Uz tip (cm)",
                awatif: lt.deformations.get(1)[2] * 100,
                reference: we * 100,
                refSource: "Analytical"
              }
            ]
          });
        }
        if (g === "test-portal-1p" || g === "test-all") {
          const Q = [
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
          ], ue = [
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
          ], we = pe(3, [
            0,
            1
          ], [
            2
          ]), se = Nt(Q, ue, {
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
          }, we);
          oe.push({
            name: "Portal 1-Story (Timoshenko)",
            formulation: "Frame Timoshenko (As=5/6\xB7A)",
            nodes: Q,
            elements: ue,
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
        if (g === "test-portal-2p" || g === "test-all") {
          const Q = [
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
          ], ue = [
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
          ], we = pe(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]), se = Nt(Q, ue, {
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
          }, we);
          oe.push({
            name: "Portal 2-Story",
            formulation: "Frame Timoshenko",
            nodes: Q,
            elements: ue,
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
        if (g === "test-wall-only" || g === "test-all") {
          const Q = [
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
          ], ue = [
            [
              0,
              1,
              2,
              3
            ]
          ], se = Nt(Q, ue, {
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
                C
              ]
            ]),
            shearModuli: /* @__PURE__ */ new Map([
              [
                0,
                V
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
                X
              ]
            ])
          });
          oe.push({
            name: "Wall Q4 Only",
            formulation: "Membrane (incompatible modes) + Mindlin-Reissner + Hughes-Brezzi drilling",
            nodes: Q,
            elements: ue,
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
        if (g === "test-portal-wall" || g === "test-all") {
          const Q = [
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
          ], ue = [
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
          ], we = pe(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]);
          we.elasticities.set(6, C), we.shearModuli.set(6, V), we.thicknesses = /* @__PURE__ */ new Map([
            [
              6,
              0.2
            ]
          ]), we.poissonsRatios = /* @__PURE__ */ new Map([
            [
              6,
              X
            ]
          ]);
          const se = Nt(Q, ue, {
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
          }, we);
          oe.push({
            name: "Portal 2-Story + Wall Q4",
            formulation: "Frame Timoshenko + Shell Q4 (Hughes-Brezzi drilling)",
            nodes: Q,
            elements: ue,
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
        if (g === "test-wilson-beam" || g === "test-all") {
          const lt = 0.6666666666666666, rt = [
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
          ], Tt = [
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
          ], _t = {
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
          }, zt = /* @__PURE__ */ new Map();
          zt.set(0, [
            true,
            true,
            true,
            true,
            true,
            true
          ]), zt.set(5, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
          const Bt = /* @__PURE__ */ new Map();
          Bt.set(2, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]), Bt.set(3, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]);
          const So = 5 ** 3 / (3 * 1500 * lt);
          try {
            const ao = Nt(rt, Tt, {
              supports: zt,
              loads: Bt
            }, _t), Ut = Math.abs(((_b2 = (_a3 = ao.deformations) == null ? void 0 : _a3.get(2)) == null ? void 0 : _b2[1]) ?? 0), st = Math.abs(((_d2 = (_c2 = ao.deformations) == null ? void 0 : _c2.get(3)) == null ? void 0 : _d2[1]) ?? 0), Mt = (Ut + st) / 2, to = Mt / So;
            oe.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "2 Q4 elements + incompatible modes (Wilson 1971, Table 6.1)",
              nodes: rt,
              elements: Tt,
              results: [
                {
                  label: "Uy/Uy_exact (cortante)",
                  awatif: to,
                  reference: 0.932,
                  refSource: "Wilson Table 6.1"
                },
                {
                  label: "Uy free end",
                  awatif: Mt,
                  reference: So * 0.932,
                  refSource: "Wilson"
                }
              ]
            });
          } catch (ao) {
            oe.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "ERROR: " + ao.message,
              nodes: rt,
              elements: Tt,
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
        if (g === "test-scordelis" || g === "test-all") {
          const lt = 40 * Math.PI / 180, rt = 8, Tt = 8, _t = [];
          for (let st = 0; st <= rt; st++) for (let Mt = 0; Mt <= Tt; Mt++) {
            const to = 25 * st / rt, Pt = lt * Mt / Tt, bo = 25 * Math.sin(Pt), uo = 25 * Math.cos(Pt) - 25 * Math.cos(lt);
            _t.push([
              to,
              bo,
              uo
            ]);
          }
          const zt = [];
          for (let st = 0; st < rt; st++) for (let Mt = 0; Mt < Tt; Mt++) {
            const to = st * (Tt + 1) + Mt, Pt = (st + 1) * (Tt + 1) + Mt, bo = (st + 1) * (Tt + 1) + (Mt + 1), uo = st * (Tt + 1) + (Mt + 1);
            zt.push([
              to,
              Pt,
              bo,
              uo
            ]);
          }
          const Bt = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            thicknesses: /* @__PURE__ */ new Map(),
            poissonsRatios: /* @__PURE__ */ new Map()
          }, So = 432e6 / (2 * 1);
          for (let st = 0; st < zt.length; st++) Bt.elasticities.set(st, 432e6), Bt.shearModuli.set(st, So), Bt.thicknesses.set(st, 0.25), Bt.poissonsRatios.set(st, 0);
          const ao = /* @__PURE__ */ new Map();
          for (let st = 0; st <= rt; st++) for (let Mt = 0; Mt <= Tt; Mt++) {
            const to = st * (Tt + 1) + Mt, Pt = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            st === 0 && (Pt[0] = true, Pt[4] = true, Pt[5] = true), st === rt && (Pt[1] = true, Pt[2] = true, Pt[3] = true), Mt === 0 && (Pt[1] = true, Pt[3] = true, Pt[5] = true), Pt.some((bo) => bo) && ao.set(to, Pt);
          }
          const Ut = /* @__PURE__ */ new Map();
          for (const st of zt) {
            const Mt = _t[st[0]], to = _t[st[1]], Pt = _t[st[2]], bo = _t[st[3]], uo = [
              Pt[0] - Mt[0],
              Pt[1] - Mt[1],
              Pt[2] - Mt[2]
            ], Ho = [
              bo[0] - to[0],
              bo[1] - to[1],
              bo[2] - to[2]
            ], Gs = uo[1] * Ho[2] - uo[2] * Ho[1], Ys = uo[2] * Ho[0] - uo[0] * Ho[2], Js = uo[0] * Ho[1] - uo[1] * Ho[0], Wa = -90 * (0.5 * Math.sqrt(Gs * Gs + Ys * Ys + Js * Js)) / 4;
            for (const Vs of st) {
              const Us = Ut.get(Vs) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Us[2] += Wa, Ut.set(Vs, Us);
            }
          }
          try {
            const st = Nt(_t, zt, {
              supports: ao,
              loads: Ut
            }, Bt), Mt = Tt, to = ((_f2 = (_e3 = st.deformations) == null ? void 0 : _e3.get(Mt)) == null ? void 0 : _f2[2]) ?? 0;
            oe.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: `Shell Q4 (${rt}x${Tt} mesh), Mindlin-Reissner + incompatible modes`,
              nodes: _t,
              elements: zt,
              results: [
                {
                  label: "Uz midspan free edge (ft)",
                  awatif: Math.abs(to),
                  reference: 0.3086,
                  refSource: "Wilson (2004) / MacNeal-Harder"
                }
              ]
            });
          } catch (st) {
            oe.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: "ERROR: " + st.message,
              nodes: _t,
              elements: zt,
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
        if (d(oe), oe.length > 0) {
          const Q = oe[oe.length - 1];
          e.nodes.val = Q.nodes, e.elements.val = Q.elements;
          const ue = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), se = Math.max(...Q.nodes.map((Se) => Se[2]));
          Q.nodes.forEach((Se, We) => {
            Math.abs(Se[2]) < 0.01 && ue.set(We, [
              true,
              true,
              true,
              true,
              true,
              true
            ]), Math.abs(Se[2] - se) < 0.01 && we.set(We, [
              10,
              0,
              0,
              0,
              0,
              0
            ]);
          }), e.nodeInputs.val = {
            supports: ue,
            loads: we
          }, e.elementInputs.val = {}, e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        }
      }
      function n(g) {
        const M = 15e3 * Math.sqrt(210) * 10, x = [];
        x.push(`$ File exported from Awatif FEM Validation: ${g.name}`), x.push(" "), x.push("$ PROGRAM INFORMATION"), x.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), x.push(""), x.push("$ CONTROLS"), x.push('  UNITS  "TONF"  "M"  "C"  '), x.push("");
        const C = /* @__PURE__ */ new Set();
        g.nodes.forEach((q) => C.add(Math.round(q[1] * 1e4) / 1e4));
        const X = [
          ...C
        ].sort((q, fe) => q - fe), V = X.map((q, fe) => fe === 0 ? "Base" : `Level_${fe}`), ae = /* @__PURE__ */ new Map();
        X.forEach((q, fe) => ae.set(q, V[fe])), x.push("$ STORIES - IN SEQUENCE FROM TOP");
        for (let q = X.length - 1; q >= 1; q--) x.push(`  STORY "${V[q]}"  HEIGHT ${X[q] - X[q - 1]} MASTERSTORY "Yes"  `);
        x.push(`  STORY "Base"  ELEV ${X[0]} `), x.push(""), x.push("$ MATERIAL PROPERTIES"), x.push('  MATERIAL  "CONC"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4'), x.push(`  MATERIAL  "CONC"    SYMTYPE "Isotropic"  E ${M}  U 0.2  A 1E-05`), x.push(""), x.push("$ FRAME SECTIONS"), x.push('  FRAMESECTION  "COL30"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.3 B 0.3 '), x.push('  FRAMESECTION  "VIGA"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.4 B 0.25 '), x.push("");
        const Z = g.elements.some((q) => q.length === 4);
        Z && (x.push("$ WALL/SLAB/DECK SECTIONS"), x.push('  SHELLPROP  "Muro20"  PROPTYPE  "Wall"  MATERIAL "CONC"  MODELINGTYPE "ShellThick"  WALLTHICKNESS 0.2 '), x.push(""));
        const K = /* @__PURE__ */ new Map();
        let de = 0;
        g.nodes.forEach((q) => {
          const fe = `${q[0]},${q[2]}`;
          K.has(fe) || K.set(fe, `${++de}`);
        }), x.push("$ POINT COORDINATES");
        for (const [q, fe] of K) {
          const [oe, pe] = q.split(",").map(Number);
          x.push(`  POINT "${fe}"  ${oe} ${pe} `);
        }
        x.push("");
        const ie = (q) => {
          const fe = g.nodes[q], oe = `${fe[0]},${fe[2]}`;
          return {
            pt: K.get(oe) || "1",
            story: ae.get(Math.round(fe[1] * 1e4) / 1e4) || "Base"
          };
        };
        x.push("$ LINE CONNECTIVITIES");
        const Ee = [];
        if (g.elements.forEach((q, fe) => {
          if (q.length !== 2) return;
          const oe = g.nodes[q[0]], pe = g.nodes[q[1]], Q = Math.abs(pe[1] - oe[1]), ue = Math.sqrt((pe[0] - oe[0]) ** 2 + (pe[2] - oe[2]) ** 2), we = Q > ue * 0.5, se = ie(q[0]), Se = ie(q[1]), We = we ? "COL30" : "VIGA";
          we ? (x.push(`  LINE  "E${fe + 1}"  COLUMN  "${se.pt}"  "${se.pt}"  1`), Ee.push(`  LINEASSIGN  "E${fe + 1}"  "${Se.story}"  SECTION "${We}"  `)) : (x.push(`  LINE  "E${fe + 1}"  BEAM  "${se.pt}"  "${Se.pt}"  0`), Ee.push(`  LINEASSIGN  "E${fe + 1}"  "${se.story}"  SECTION "${We}"  `));
        }), x.push(""), Z) {
          x.push("$ AREA CONNECTIVITIES");
          const q = [];
          g.elements.forEach((fe, oe) => {
            if (fe.length !== 4) return;
            const pe = fe.map((Q) => ie(Q));
            x.push(`  AREA "W${oe + 1}"  PANEL  4  "${pe[0].pt}"  "${pe[1].pt}"  "${pe[2].pt}"  "${pe[3].pt}"  1  1  0  0  `), q.push(`  AREAASSIGN  "W${oe + 1}"  "${pe[2].story}"  SECTION "Muro20"  `);
          }), x.push(""), x.push("$ AREA ASSIGNS"), q.forEach((fe) => x.push(fe)), x.push("");
        }
        x.push("$ POINT ASSIGNS"), g.nodes.forEach((q, fe) => {
          if (Math.abs(q[1]) < 0.01) {
            const oe = ie(fe);
            x.push(`  POINTASSIGN  "${oe.pt}"  "${oe.story}"  RESTRAINT "UX UY UZ RX RY RZ"  `);
          }
        }), x.push(""), x.push("$ LINE ASSIGNS"), Ee.forEach((q) => x.push(q)), x.push(""), x.push("$ LOAD PATTERNS"), x.push('  LOADPATTERN "Lat"  TYPE  "Other"  SELFWEIGHT  0'), x.push(""), x.push("$ POINT OBJECT LOADS");
        const Ne = Math.max(...g.nodes.map((q) => q[1]));
        return g.nodes.forEach((q, fe) => {
          if (Math.abs(q[1] - Ne) < 0.01) {
            const oe = ie(fe);
            x.push(`  POINTLOAD  "${oe.pt}"  "${oe.story}"  "Lat"  TYPE "FORCE"  FX 10`);
          }
        }), x.push(""), x.push("  END"), x.push("$ END OF MODEL FILE"), x.join(`\r
`);
      }
      function l(g) {
        const M = 15e3 * Math.sqrt(210) * 10, x = [];
        x.push(`"""ETABS API Validation: ${g.name}`), x.push('Generated by Awatif FEM Studio"""'), x.push("import comtypes.client, time, math"), x.push(""), x.push("helper = comtypes.client.CreateObject('ETABSv1.Helper')"), x.push("helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)"), x.push('myETABS = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")'), x.push("myETABS.ApplicationStart()"), x.push("time.sleep(10)"), x.push("SapModel = myETABS.SapModel"), x.push("SapModel.InitializeNewModel()"), x.push("SapModel.File.NewBlank()"), x.push("SapModel.SetPresentUnits(12)  # tonf_m_C"), x.push(""), x.push(`E = ${M}`), x.push('SapModel.PropMaterial.SetMaterial("CONC", 2)'), x.push('SapModel.PropMaterial.SetMPIsotropic("CONC", E, 0.2, 5.5e-6)'), x.push('SapModel.PropFrame.SetRectangle("COL30", "CONC", 0.30, 0.30)'), x.push('SapModel.PropFrame.SetRectangle("VIGA", "CONC", 0.40, 0.25)'), g.elements.some((V) => V.length === 4) && x.push('SapModel.PropArea.SetWall("Muro20", 6, False, "CONC", 0.20)'), x.push(""), x.push("# Add elements"), x.push("FN = ' '"), g.elements.forEach((V, ae) => {
          if (V.length === 2) {
            const Z = g.nodes[V[0]], K = g.nodes[V[1]], de = Math.abs(K[1] - Z[1]), ie = Math.sqrt((K[0] - Z[0]) ** 2 + (K[2] - Z[2]) ** 2), Ee = de > ie * 0.5 ? "COL30" : "VIGA";
            x.push(`[FN,r]=SapModel.FrameObj.AddByCoord(${Z[0]},${Z[2]},${Z[1]}, ${K[0]},${K[2]},${K[1]}, FN,"${Ee}","E${ae + 1}","Global")`);
          } else if (V.length === 4) {
            const Z = V.map((K) => g.nodes[K]);
            x.push(`SapModel.AreaObj.AddByCoord(4, [${Z.map((K) => K[0]).join(",")}], [${Z.map((K) => K[2]).join(",")}], [${Z.map((K) => K[1]).join(",")}], "", "Muro20")`);
          }
        }), x.push(""), x.push("# Supports at Z=0"), x.push("names = SapModel.PointObj.GetNameList()"), x.push("for i in range(int(names[0])):"), x.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), x.push("    if abs(float(c[2])) < 0.01:"), x.push("        SapModel.PointObj.SetRestraint(names[1][i], [True]*6)"), x.push(""), x.push("# Load at top"), x.push('SapModel.LoadPatterns.Add("Lat", 8, 0, True)');
        const X = Math.max(...g.nodes.map((V) => V[1]));
        x.push("names = SapModel.PointObj.GetNameList()"), x.push("for i in range(int(names[0])):"), x.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), x.push(`    if abs(float(c[2]) - ${X}) < 0.01:`), x.push('        SapModel.PointObj.SetLoadForce(names[1][i], "Lat", [10,0,0,0,0,0])'), x.push(""), x.push(`SapModel.File.Save(r"C:\\Users\\j-b-j\\Downloads\\validation_${g.name.replace(/[^a-zA-Z0-9]/g, "_")}.EDB")`), x.push("time.sleep(1)"), x.push("SapModel.Analyze.RunAnalysis()"), x.push("time.sleep(5)"), x.push(""), x.push("# Results"), x.push("SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()"), x.push('SapModel.Results.Setup.SetCaseSelectedForOutput("Lat")'), x.push(`print(f"\\n=== ETABS: ${g.name} ===")`), x.push("names = SapModel.PointObj.GetNameList()"), x.push("for i in range(int(names[0])):"), x.push("    name = names[1][i]"), x.push("    c = SapModel.PointObj.GetCoordCartesian(name)"), x.push("    NR=0;Obj=[];Elm=[];AC=[];ST=[];SN=[];U1=[];U2=[];U3=[];R1=[];R2=[];R3=[]"), x.push("    [NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3,ret]=SapModel.Results.JointDispl(name,0,NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3)"), x.push("    if NR > 0:"), x.push('        print(f"  {name} Z={float(c[2]):.1f}: Ux={U1[0]*100:.4f} cm")'), x.push(""), x.push('print("\\nAwatif results:")');
        for (const V of g.results) x.push(`print(f"  ${V.label}: Awatif=${V.awatif.toFixed(4)}, ETABS=${V.reference.toFixed(4)}, Ratio={${V.awatif.toFixed(4)}/${V.reference.toFixed(4)}:.4f}")`);
        return x.push("SapModel.View.RefreshView(0, False)"), x.join(`
`);
      }
      function s(g, M) {
        const x = new Blob([
          g
        ], {
          type: "text/plain"
        }), C = URL.createObjectURL(x), X = document.createElement("a");
        X.href = C, X.download = M, X.click(), URL.revokeObjectURL(C);
      }
      function d(g) {
        let M = document.getElementById("test-results-overlay");
        M && M.remove(), M = document.createElement("div"), M.id = "test-results-overlay", M.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1a1a2e;color:#eee;border:2px solid #16213e;border-radius:8px;padding:20px;
        z-index:10000;max-width:750px;width:90%;max-height:80vh;overflow-y:auto;font-family:monospace;font-size:13px;
        box-shadow:0 10px 40px rgba(0,0,0,0.5);`;
        let x = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h3 style="margin:0;color:#00d4ff">Awatif FEM Validation</h3>
        <button onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;color:#888;font-size:18px;cursor:pointer">X</button>
      </div>`, C = true;
        window.__awatifTests = g;
        for (let V = 0; V < g.length; V++) {
          const ae = g[V];
          x += '<div style="margin-bottom:16px;border:1px solid #333;border-radius:6px;padding:10px">', x += '<div style="display:flex;justify-content:space-between;align-items:center">', x += `<div style="font-weight:bold;color:#00d4ff">${ae.name}</div>`, x += "<div>", x += `<button onclick="window.__awatifDownloadE2k(${V})" style="background:#1e3a5f;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;margin-right:4px;border-radius:3px">e2k</button>`, x += `<button onclick="window.__awatifDownloadPy(${V})" style="background:#2a1e3a;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;border-radius:3px">py</button>`, x += "</div></div>", x += `<div style="color:#888;font-size:11px;margin-bottom:8px">${ae.formulation}</div>`, x += `<table style="width:100%;border-collapse:collapse;font-size:12px">
          <tr style="color:#888"><td style="padding:3px 6px">Measure</td><td style="text-align:right">Awatif</td><td style="text-align:right">Reference</td><td style="text-align:right">Ratio</td><td style="text-align:right">Source</td><td style="text-align:center"></td></tr>`;
          for (const Z of ae.results) {
            const K = Z.reference !== 0 ? Z.awatif / Z.reference : 1, de = Math.abs(K - 1) < 0.05;
            de || (C = false);
            const ie = de ? "#4caf50" : "#f44336", Ee = de ? "PASS" : "FAIL";
            x += `<tr style="border-top:1px solid #333">
            <td style="padding:3px 6px">${Z.label}</td>
            <td style="text-align:right;color:#fff">${Z.awatif.toFixed(4)}</td>
            <td style="text-align:right;color:#aaa">${Z.reference.toFixed(4)}</td>
            <td style="text-align:right;color:${ie};font-weight:bold">${K.toFixed(4)}</td>
            <td style="text-align:right;color:#888;font-size:11px">${Z.refSource}</td>
            <td style="text-align:center;color:${ie};font-size:10px;font-weight:bold">${Ee}</td></tr>`;
          }
          x += "</table></div>";
        }
        x += C ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">Some tests exceeded 5% tolerance</div>', M.innerHTML = x, document.body.appendChild(M), window.__awatifDownloadE2k = (V) => {
          const ae = window.__awatifTests[V], Z = ae.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(n(ae), `${Z}.e2k`);
        }, window.__awatifDownloadPy = (V) => {
          const ae = window.__awatifTests[V], Z = ae.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(l(ae), `${Z}_etabs.py`);
        };
      }
      (_h = Te.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (g) => {
        g.stopPropagation(), Ma();
      });
      let a = "";
      const r = Te.querySelector("#cad3d-io-menu"), f = Te.querySelector("#cad3d-io-file");
      function c(g, M) {
        e.nodes.val = g.nodes, e.elements.val = g.elements, e.nodeInputs.val = g.nodeInputs, e.elementInputs.val = g.elementInputs, g.sectionShapes && g.elementInputs && (g.elementInputs.sectionShapes = g.sectionShapes), e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        const x = g.elements.filter((X) => X.length === 2).length, C = g.elements.filter((X) => X.length >= 3).length;
        console.log(`${M} (${g.nodes.length} nodos, ${x} frames, ${C} shells): ${g.nodes.length} nodes, ${g.elements.length} elements`), setTimeout(() => At(), 50);
      }
      function i(g, M) {
        var _a3, _b2, _c2;
        const x = {};
        g.elementInfo.forEach((K) => x[K.category] = (x[K.category] || 0) + 1), (_a3 = document.getElementById("ifc-filter-panel")) == null ? void 0 : _a3.remove();
        const C = document.createElement("div");
        C.id = "ifc-filter-panel", C.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1e1e2e;border:2px solid #00ccff;border-radius:12px;padding:20px;
        z-index:1000010;color:#eee;font-family:monospace;font-size:12px;min-width:320px;
        box-shadow:0 8px 32px rgba(0,0,0,0.6);`;
        const X = [
          "column",
          "beam",
          "slab",
          "footing",
          "member",
          "wall"
        ], V = [
          "opening",
          "rebar",
          "plate",
          "fastener",
          "other"
        ], ae = {
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
        let Z = `<h3 style="color:#00ccff;margin:0 0 12px">IFC \u2192 Modelo Anal\xEDtico</h3>
        <div style="color:#888;margin-bottom:10px">Selecciona qu\xE9 convertir a FEM:</div>
        <div style="border:1px solid #444;border-radius:6px;padding:8px;margin-bottom:8px">
          <div style="color:#33ff33;font-weight:bold;margin-bottom:4px">Estructural</div>`;
        for (const K of X) {
          const de = x[K] || 0;
          if (de === 0) continue;
          const ie = [
            "column",
            "beam",
            "slab"
          ].includes(K) ? "checked" : "";
          Z += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0">
          <input type="checkbox" data-ifc-cat="${K}" ${ie}>
          <span>${ae[K] || K}</span>
          <span style="color:#888;margin-left:auto">(${de})</span>
        </label>`;
        }
        Z += `</div><div style="border:1px solid #333;border-radius:6px;padding:8px;margin-bottom:12px">
        <div style="color:#ff6666;font-weight:bold;margin-bottom:4px">No estructural (solo visual)</div>`;
        for (const K of V) {
          const de = x[K] || 0;
          de !== 0 && (Z += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0;color:#888">
          <input type="checkbox" data-ifc-cat="${K}" disabled>
          <span>${ae[K] || K}</span>
          <span style="margin-left:auto">(${de})</span>
        </label>`);
        }
        Z += `</div>
        <div style="display:flex;gap:8px">
          <button id="ifc-gen-analytical" style="flex:1;padding:8px;background:#0f3460;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:13px;font-weight:bold">
            \u{1F527} Generar Modelo Anal\xEDtico
          </button>
          <button id="ifc-cancel" style="padding:8px 12px;background:#333;color:#aaa;border:1px solid #555;border-radius:6px;cursor:pointer">\u2715</button>
        </div>`, C.innerHTML = Z, document.body.appendChild(C), C.querySelectorAll("input[data-ifc-cat]").forEach((K) => {
          K.addEventListener("change", () => {
            const de = K.dataset.ifcCat, ie = g.detailCategories.get(de);
            if (ie) {
              ie.visible = K.checked;
              const Ee = et();
              Ee && Ee.render();
            }
          });
        }), (_b2 = C.querySelector("#ifc-gen-analytical")) == null ? void 0 : _b2.addEventListener("click", () => {
          var _a4;
          const K = /* @__PURE__ */ new Set();
          C.querySelectorAll("input[data-ifc-cat]:checked").forEach((oe) => {
            K.add(oe.dataset.ifcCat);
          });
          const de = M.nodes.map((oe) => [
            oe.x,
            oe.y,
            oe.z
          ]), ie = [], Ee = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            densities: /* @__PURE__ */ new Map(),
            sectionShapes: /* @__PURE__ */ new Map()
          }, Ne = {
            supports: /* @__PURE__ */ new Map(),
            loads: /* @__PURE__ */ new Map()
          };
          let q = 0;
          for (const oe of M.elements) if (K.has(oe.category) && oe.type === "frame" && oe.nodeIds.length >= 2) {
            ie.push(oe.nodeIds);
            const pe = ((_a4 = M.materials) == null ? void 0 : _a4.get(oe.material)) || {
              E: 2132888792e-2,
              nu: 0.2,
              rho: 2.4
            }, Q = oe.b || 0.3, ue = oe.h || 0.3, we = Q * ue, se = Q * ue * ue * ue / 12, Se = ue * Q * Q * Q / 12, We = Q * ue * (Q * Q + ue * ue) / 12, lt = pe.E / (2 * (1 + pe.nu));
            Ee.elasticities.set(q, pe.E), Ee.shearModuli.set(q, lt), Ee.areas.set(q, we), Ee.momentsOfInertiaZ.set(q, Se), Ee.momentsOfInertiaY.set(q, se), Ee.torsionalConstants.set(q, We), Ee.densities.set(q, pe.rho), Ee.sectionShapes.set(q, {
              type: "rect",
              b: Q,
              h: ue,
              name: oe.sectionName
            }), q++;
          }
          const fe = Math.min(...de.map((oe) => oe[2]));
          de.forEach((oe, pe) => {
            Math.abs(oe[2] - fe) < 0.05 && Ne.supports.set(pe, [
              true,
              true,
              true,
              true,
              true,
              true
            ]);
          });
          for (const [, oe] of g.detailCategories) {
            const pe = et();
            pe && pe.scene.remove(oe);
          }
          c({
            nodes: de,
            elements: ie,
            nodeInputs: Ne,
            elementInputs: Ee,
            sectionShapes: Ee.sectionShapes,
            info: {
              nNodes: de.length,
              nFrames: ie.length
            }
          }, "IFC analytical"), C.remove();
        }), (_c2 = C.querySelector("#ifc-cancel")) == null ? void 0 : _c2.addEventListener("click", () => {
          for (const [, de] of g.detailCategories) {
            const ie = et();
            ie && ie.scene.remove(de);
          }
          const K = et();
          K && K.render(), C.remove();
        });
      }
      function b(g) {
        O = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set(), ee = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map();
        const M = /* @__PURE__ */ new Map();
        for (let ie = 0; ie < g.stories.length; ie++) M.set(g.stories[ie].name, ie);
        for (let ie = 0; ie < g.elementTypes.length; ie++) {
          const Ee = g.elementTypes[ie], Ne = g.elementStories[ie], q = M.get(Ne) ?? 0;
          ee.set(ie, q), Ee === "COLUMN" || Ee === "BRACE" ? O.add(ie) : _.add(ie);
        }
        k = "edificio";
        const x = g.grids.filter((ie) => ie.dir === "X").sort((ie, Ee) => ie.coord - Ee.coord), C = g.grids.filter((ie) => ie.dir === "Y").sort((ie, Ee) => ie.coord - Ee.coord);
        let X, V, ae, Z;
        if (x.length > 0 || C.length > 0) X = x.map((ie) => ie.coord), V = C.map((ie) => ie.coord), ae = x.map((ie) => ie.label), Z = C.map((ie) => ie.label);
        else {
          const ie = new Set(g.nodes.map((Ne) => Ne[0])), Ee = new Set(g.nodes.map((Ne) => Ne[1]));
          X = [
            ...ie
          ].sort((Ne, q) => Ne - q), V = [
            ...Ee
          ].sort((Ne, q) => Ne - q), ae = X.map((Ne, q) => String(q + 1)), Z = V.map((Ne, q) => String.fromCharCode(65 + q));
        }
        const K = g.stories.length > 0 ? Math.max(...g.stories.map((ie) => ie.elev)) : Math.max(...g.nodes.map((ie) => ie[2]));
        Ge = X, Ye = V, mt = K, setTimeout(() => {
          At(), Xo(X, V, K, ae, Z), wn(g.stories, X, V), On(), qn();
        }, 100);
        const de = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const ie of g.elementTypes) de[ie]++;
        console.log(`E2K grids: X=[${ae.join(",")}] Y=[${Z.join(",")}]`), console.log(`E2K stories: ${g.stories.map((ie) => `${ie.name}@${ie.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${de.COLUMN} columns, ${de.BEAM} beams, ${de.BRACE} braces`), tt();
      }
      function E(g, M) {
        const x = new Blob([
          g
        ], {
          type: "text/plain"
        }), C = URL.createObjectURL(x), X = document.createElement("a");
        X.href = C, X.download = M, X.click(), URL.revokeObjectURL(C);
      }
      r && r.addEventListener("change", () => {
        if (a = r.value, r.value = "", a.startsWith("import")) a === "import-e2k" ? f.accept = ".e2k,.E2K" : a === "import-s2k" ? f.accept = ".s2k,.S2K,.$2k" : a === "import-ifc" ? f.accept = ".ifc,.IFC" : a === "import-py" ? f.accept = ".py" : a === "import-tcl" && (f.accept = ".tcl"), f.click();
        else if (a.startsWith("export")) {
          const g = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            a === "export-e2k" ? E(Ll({
              ...g,
              title: "Awatif Model",
              e2kModel: Ae ?? void 0
            }), "model.e2k") : a === "export-s2k" ? E(zl({
              ...g,
              title: "Awatif Model"
            }), "model.s2k") : a === "export-py" ? E(Pl(g), "model_opensees.py") : a === "export-tcl" && E(Nl(g), "model_opensees.tcl");
          } catch (M) {
            alert("Export error: " + M.message);
          }
        }
      }), f && f.addEventListener("change", () => {
        var _a3;
        const g = (_a3 = f.files) == null ? void 0 : _a3[0];
        if (!g) return;
        if (a === "import-ifc") {
          const x = new FileReader();
          x.onload = async () => {
            const C = x.result;
            try {
              const X = et();
              if (!X) {
                alert("Viewer not ready");
                return;
              }
              console.log("IFC: Loading 3D geometry...");
              const V = await Gl(X.scene, C);
              console.log(`IFC: ${V.meshCount} meshes loaded, bbox:`, V.bbox);
              const ae = new Oe();
              V.bbox.getCenter(ae);
              const Z = new Oe();
              V.bbox.getSize(Z);
              const K = Math.max(Z.x, Z.y, Z.z);
              X.controls.target.copy(ae), X.camera.position.set(ae.x + K, ae.y + K * 0.5, ae.z + K), X.camera.lookAt(ae), X.controls.maxDistance = K * 5, X.controls.update(), X.render(), window.__ifcLoadResult = V, window.__ifcArrayBuffer = C;
              const de = new FileReader();
              de.onload = () => {
                const ie = de.result, Ee = Hl(ie);
                window.__ifcAnalytical = Ee;
                const Ne = {};
                V.elementInfo.forEach((q) => Ne[q.category] = (Ne[q.category] || 0) + 1), console.log("IFC categories:", Ne), console.log(`IFC: ${V.elementInfo.size} geometric elements, ${Ee.elements.length} analytical elements`), i(V, Ee);
              }, de.readAsText(g);
            } catch (X) {
              alert("IFC error: " + X.message), console.error(X);
            }
          }, x.readAsArrayBuffer(g), f.value = "";
          return;
        }
        const M = new FileReader();
        M.onload = () => {
          const x = M.result;
          try {
            if (a === "import-e2k") {
              const C = Il(x);
              Ae = C, c(C, "E2K imported"), b(C);
            } else if (a === "import-s2k") {
              const C = kl(x);
              c({
                nodes: C.nodes,
                elements: C.elements,
                nodeInputs: C.nodeInputs,
                elementInputs: C.elementInputs,
                sectionShapes: C.sectionShapes,
                info: C.info
              }, "S2K imported");
            } else if (a === "import-py") {
              const C = Ol(x);
              c(C, "OpenSeesPy imported");
            } else if (a === "import-tcl") {
              const C = ql(x);
              c(C, "OpenSees Tcl imported");
            }
          } catch (C) {
            alert("Import error: " + C.message), console.error(C);
          }
        }, M.readAsText(g), f.value = "";
      });
      const S = Te.querySelector("#cad3d-force-unit");
      S && (S.value = m, S.addEventListener("change", (g) => {
        g.stopPropagation(), m = S.value, $ = Fo(m, F), k && nt(k);
      }));
      const y = Te.querySelector("#cad3d-length-unit");
      y && (y.value = F, y.addEventListener("change", (g) => {
        g.stopPropagation(), F = y.value, $ = Fo(m, F), k && nt(k);
      })), Te.querySelectorAll("[data-preset]").forEach((g) => {
        g.addEventListener("click", (M) => {
          M.stopPropagation();
          const x = g.dataset.preset, C = D[x];
          C && (m = C.force, F = C.length, Y = C.stress, $ = Fo(m, F), S && (S.value = m), y && (y.value = F), Te.querySelectorAll("[data-preset]").forEach((X) => {
            X.classList.toggle("active", X.dataset.preset === x);
          }), k && nt(k), console.log(`Preset: ${x} \u2192 ${m}+${F}, stress: ${Y.label}`));
        });
      }), (_i = Te.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (g) => {
        g.stopPropagation(), Na();
      }), (_j = Te.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (g) => {
        g.stopPropagation(), Oa();
      }), (_k = Te.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (g) => {
        g.stopPropagation(), _a();
      }), (_l2 = Te.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l2.addEventListener("click", (g) => {
        g.stopPropagation(), Da();
      }), (_m = Te.querySelector("#cad3d-calc")) == null ? void 0 : _m.addEventListener("click", (g) => {
        g.stopPropagation(), ta(async () => {
          const { openCalcPanel: M } = await import("./calcPanel-Cyw7vzQ9.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          });
          return {
            openCalcPanel: M
          };
        }, __vite__mapDeps([0,1,2,3,4])).then(({ openCalcPanel: M }) => {
          var _a3, _b2;
          const x = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: ((_a3 = e.nodeInputs) == null ? void 0 : _a3.val) ?? {},
            elementInputs: ((_b2 = e.elementInputs) == null ? void 0 : _b2.val) ?? {},
            modelName: k ? k.charAt(0).toUpperCase() + k.slice(1) : "Modelo"
          };
          M(x);
        });
      }), (_n2 = Te.querySelector("#cad3d-modal")) == null ? void 0 : _n2.addEventListener("click", (g) => {
        var _a3, _b2;
        g.stopPropagation(), ze = !ze, (_a3 = Te.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", ze);
        const x = Te.querySelector("#cad3d-mode-prev"), C = Te.querySelector("#cad3d-mode-next"), X = Te.querySelector("#cad3d-mode-label"), V = Te.querySelector("#cad3d-modal-scale");
        if (ze) {
          const ae = et();
          ((_b2 = ae == null ? void 0 : ae.settings) == null ? void 0 : _b2.loads) && (Je = ae.settings.loads.rawVal, ae.settings.loads.val = false), Ln(), x.style.display = "", C.style.display = "", X.style.display = "", V && (V.style.display = ""), p();
        } else Cn(), x.style.display = "none", C.style.display = "none", X.style.display = "none", V && (V.style.display = "none"), k && k !== "placa-q4" && k !== "placa-3q" && Pe(), setTimeout(() => {
          var _a4;
          const ae = et();
          ((_a4 = ae == null ? void 0 : ae.settings) == null ? void 0 : _a4.loads) && Je && (ae.settings.loads.val = true);
        }, 600);
      });
      function p() {
        var _a3;
        const g = Te.querySelector("#cad3d-mode-label");
        if (!g || !(ge == null ? void 0 : ge.frequencies)) return;
        const M = ge.frequencies[Ce], x = M > 0 ? 1 / M : 0, C = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let X = 0; X <= Ce; X++) {
          const V = (_a3 = ge.massParticipation) == null ? void 0 : _a3[X];
          if (V) for (let ae = 0; ae < 6; ae++) C[ae] += V[ae];
        }
        g.textContent = `Modo ${Ce + 1} \u2014 ${M.toFixed(2)} Hz \u2014 T=${x.toFixed(3)}s \u2014 \u03A3Ux=${(C[0] * 100).toFixed(1)}% \u03A3Uy=${(C[1] * 100).toFixed(1)}% \u03A3Rz=${(C[5] * 100).toFixed(1)}%`;
      }
      (_o2 = Te.querySelector("#cad3d-mode-prev")) == null ? void 0 : _o2.addEventListener("click", (g) => {
        if (g.stopPropagation(), !(ge == null ? void 0 : ge.modeShapes)) return;
        Ce = (Ce - 1 + ge.modeShapes.length) % ge.modeShapes.length;
        const M = ge.modeShapes[Ce], { extent: x } = vo();
        let C = 0;
        for (let X = 0; X < he.length; X++) {
          const V = M[X * 6] || 0, ae = M[X * 6 + 1] || 0, Z = M[X * 6 + 2] || 0;
          C = Math.max(C, Math.sqrt(V * V + ae * ae + Z * Z));
        }
        ke = C > 1e-12 ? x * 0.05 / C : 1, Qo(), p();
      }), (_p = Te.querySelector("#cad3d-mode-next")) == null ? void 0 : _p.addEventListener("click", (g) => {
        if (g.stopPropagation(), !(ge == null ? void 0 : ge.modeShapes)) return;
        Ce = (Ce + 1) % ge.modeShapes.length;
        const M = ge.modeShapes[Ce], { extent: x } = vo();
        let C = 0;
        for (let X = 0; X < he.length; X++) {
          const V = M[X * 6] || 0, ae = M[X * 6 + 1] || 0, Z = M[X * 6 + 2] || 0;
          C = Math.max(C, Math.sqrt(V * V + ae * ae + Z * Z));
        }
        ke = C > 1e-12 ? x * 0.05 / C : 1, Qo(), p();
      });
      const v = Te.querySelector("#cad3d-modal-scale");
      v == null ? void 0 : v.addEventListener("mousedown", (g) => g.stopPropagation()), v == null ? void 0 : v.addEventListener("change", () => {
        ze && (ge == null ? void 0 : ge.modeShapes) && Qo();
      });
      const I = Te.querySelector("#cad3d-cli-toggle"), A = Te.querySelector("#cad3d-cli-panel"), T = Te.querySelector("#cad3d-cli-output"), B = Te.querySelector("#cad3d-cmd"), H = [];
      let h = -1;
      I == null ? void 0 : I.addEventListener("click", (g) => {
        if (g.stopPropagation(), A) {
          const M = A.style.display !== "none";
          A.style.display = M ? "none" : "block", M || (B == null ? void 0 : B.focus(), T && !T.textContent && (T.textContent = `CLI ready. Commands:
  cad.addNode(x, y, z)     cad.addFrame(i, j)
  cad.addSupport(n)        cad.addLoad(n, [fx,fy,fz,0,0,0])
  cad.frame([5,5],[3,3])   cad.building([5],[4],[3])
  cad.galpon(12,20,6,3)    cad.clear()
  cad.info()               cad.listNodes()
`));
        }
      }), B == null ? void 0 : B.addEventListener("mousedown", (g) => g.stopPropagation()), document.addEventListener("keydown", (g) => {
        var _a3;
        if ((g.ctrlKey || g.metaKey) && g.key === "z" && !g.shiftKey) {
          g.preventDefault(), Ts();
          return;
        }
        if ((g.ctrlKey || g.metaKey) && (g.key === "y" || g.key === "z" && g.shiftKey)) {
          g.preventDefault(), As();
          return;
        }
        if ((g.key === "Delete" || g.key === "Backspace") && bt.size > 0) {
          g.preventDefault(), bt.forEach((M) => J.add(M)), bt.clear(), po && (po.remove(), po = null), Pe();
          return;
        }
        if (g.key === "Escape") {
          if (co) if (gt !== null) {
            gt = null;
            const M = et();
            Ot && M && (M.scene.remove(Ot), Ot.geometry.dispose(), Ot.material.dispose(), Ot = null), qt && M && (M.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), M == null ? void 0 : M.render();
          } else cn();
          Jt && rn(), no && (no = false, Ao(), (_a3 = Te.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), B == null ? void 0 : B.addEventListener("keydown", (g) => {
        if (g.stopPropagation(), g.key === "Enter") {
          const M = B.value.trim();
          if (M) {
            H.unshift(M), h = -1, T && (T.textContent += `> ${M}
`);
            try {
              const x = new Function("cad", `return ${M}`)(Qe);
              if (x !== void 0 && T) {
                const C = typeof x == "object" ? JSON.stringify(x, null, 2) : String(x);
                T.textContent += `${C}
`;
              }
            } catch (x) {
              T && (T.textContent += `ERROR: ${x.message}
`);
            }
            T && (T.scrollTop = T.scrollHeight), B.value = "";
          }
        } else g.key === "ArrowUp" ? (g.preventDefault(), H.length > 0 && h < H.length - 1 && (h++, B.value = H[h])) : g.key === "ArrowDown" && (g.preventDefault(), h > 0 ? (h--, B.value = H[h]) : (h = -1, B.value = ""));
      });
      let u = false, w = 0, L = 0, R = 0, W = 0;
      Te.addEventListener("mousedown", (g) => {
        const M = g.target.tagName;
        if (M === "BUTTON" || M === "INPUT" || M === "SELECT") return;
        u = true;
        const x = Te.getBoundingClientRect();
        Te.style.bottom = "unset", w = g.clientX, L = g.clientY, R = x.left, W = x.top, g.preventDefault();
      }), window.addEventListener("mousemove", (g) => {
        u && (g.preventDefault(), Te.style.left = R + (g.clientX - w) + "px", Te.style.top = W + (g.clientY - L) + "px");
      }), window.addEventListener("mouseup", () => {
        u = false;
      }), tt();
    }, 10);
    function et() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function vo() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new Oe(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, s = -1 / 0, d = -1 / 0, a = -1 / 0;
      for (const [c, i, b] of t) c < o && (o = c), c > s && (s = c), i < n && (n = i), i > d && (d = i), b < l && (l = b), b > a && (a = b);
      const r = new Oe((o + s) / 2, (n + d) / 2, (l + a) / 2), f = Math.max(s - o, d - n, a - l, 1);
      return {
        center: r,
        extent: f
      };
    }
    function At(t = false) {
      const o = et();
      if (!o) return;
      const { extent: n } = vo();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((b) => b.type === "GridHelper").forEach((b) => {
        var _a2, _b;
        (_a2 = b.geometry) == null ? void 0 : _a2.dispose(), (_b = b.material) == null ? void 0 : _b.dispose(), o.scene.remove(b);
      });
      const d = Ga(), a = new tl(l, 20, d.grid, d.grid);
      a.rotation.x = Math.PI / 2, a.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(a), o.scene.children.filter((b) => b.type === "Group" && b.name !== "gridAxes" && b.name !== "loadsGroup" && (b.name === "viewerAxes" || b.children.some((E) => E instanceof dn))).forEach((b) => {
        b.traverse((E) => {
          E.geometry && E.geometry.dispose(), E.material && (E.material.map && E.material.map.dispose(), E.material.dispose());
        }), o.scene.remove(b);
      });
      const f = 0.05 * l, c = new sn();
      c.name = "viewerAxes";
      const i = d.axisArrow;
      c.add(new dn(new Oe(1, 0, 0), new Oe(), 1, i, 0.2, 0.2)), c.add(new dn(new Oe(0, 1, 0), new Oe(), 1, i, 0.2, 0.2)), c.add(new dn(new Oe(0, 0, 1), new Oe(), 1, i, 0.2, 0.2)), c.children.forEach((b) => b.scale.set(f, f, f));
      for (const [b, E, S] of [
        [
          "X",
          "red",
          [
            1.3 * f,
            0,
            0
          ]
        ],
        [
          "Y",
          "green",
          [
            0,
            1.3 * f,
            0
          ]
        ],
        [
          "Z",
          "blue",
          [
            0,
            0,
            1.3 * f
          ]
        ]
      ]) {
        const y = document.createElement("canvas");
        y.width = 64, y.height = 64;
        const p = y.getContext("2d");
        p.fillStyle = E, p.font = "bold 50px Arial", p.textAlign = "center", p.textBaseline = "middle", p.fillText(b, 32, 34);
        const v = new Vn(y);
        v.needsUpdate = true;
        const I = new pn(new fn({
          map: v,
          depthTest: false,
          transparent: true
        }));
        I.position.set(S[0], S[1], S[2]), I.scale.set(0.4 * f, 0.4 * f, 1), I.renderOrder = 99, c.add(I);
      }
      o.scene.add(c), t ? o.render() : yo("3d");
    }
    function ks(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function yo(t) {
      var _a2;
      const o = et();
      if (!o) return;
      const { center: n, extent: l } = vo(), s = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), d = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const a = () => {
        o.scene.traverse((r) => {
          var _a3;
          if (!r.material) return;
          const f = r.type === "GridHelper" || r.type === "AxesHelper", c = r.isSprite, i = ((_a3 = r.userData) == null ? void 0 : _a3.noClip) === true;
          (f || c || i) && (Array.isArray(r.material) ? r.material.forEach((b) => {
            b.clippingPlanes = [];
          }) : r.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const r = o.perspCamera.fov, f = l / (2 * Math.tan(r * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + f * 0.5, n.y - f * 0.8, n.z + f * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const r = o.orthoCamera;
        r.left = -d * s, r.right = d * s, r.top = d, r.bottom = -d, r.near = -l * 10, r.far = l * 10, r.updateProjectionMatrix();
        const f = (c, i, b) => {
          r.position.copy(c), r.up.copy(b), o.controls.target.copy(i), r.lookAt(i), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], f(new Oe(n.x, n.y, n.z + l * 2), new Oe(n.x, n.y, n.z), new Oe(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const c = parseInt(t.split(":")[1]), i = ((_a2 = re.hPiso) == null ? void 0 : _a2.val) ?? 3, b = (c + 1) * i, E = i * 0.45;
          o.renderer.clippingPlanes = [
            new Eo(new Oe(0, 0, -1), b + E),
            new Eo(new Oe(0, 0, 1), -b + E)
          ], a(), f(new Oe(n.x, n.y, b + l * 2), new Oe(n.x, n.y, b), new Oe(0, 1, 0));
        } else if (t === "elevX") r.position.set(n.x + l * 2, n.y, n.z), r.up.set(0, 0, 1);
        else if (t === "elevY") r.position.set(n.x, n.y - l * 2, n.z), r.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const c = parseInt(t.split(":")[1]), i = Ge[c] ?? n.x;
          if (Ye.length > 1) {
            const E = ks(Ge, c, l);
            o.renderer.clippingPlanes = [
              new Eo(new Oe(-1, 0, 0), i + E),
              new Eo(new Oe(1, 0, 0), -i + E)
            ], a(), r.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else r.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          r.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const c = parseInt(t.split(":")[1]), i = Ye[c] ?? n.y;
          if (Ge.length > 1) {
            const E = ks(Ye, c, l);
            o.renderer.clippingPlanes = [
              new Eo(new Oe(0, -1, 0), i + E),
              new Eo(new Oe(0, 1, 0), -i + E)
            ], a(), r.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else r.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          r.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(r);
      }
    }
    function On() {
      const t = Te.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (Ge.length < 2 && Ye.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (d, a, r) => {
        const f = document.createElement("button");
        return f.textContent = d, f.dataset.view = a, f.title = r, f.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", f.addEventListener("click", (c) => {
          var _a2;
          c.stopPropagation();
          const i = f.classList.contains("view-active");
          Te.querySelectorAll("[data-view]").forEach((b) => b.classList.remove("view-active")), i ? (yo("3d"), (_a2 = Te.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (yo(a), f.classList.add("view-active"));
        }), f;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      Ge.forEach((d, a) => {
        const r = a < l.length ? l[a] : `X${a}`;
        t.appendChild(o(r, `axisX:${a}`, `Eje ${r} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(s), Ye.forEach((d, a) => {
        const r = `${a + 1}`;
        t.appendChild(o(r, `axisY:${a}`, `Eje ${r} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function qn() {
      var _a2;
      const t = Te.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a2 = re.nPisos) == null ? void 0 : _a2.val) ?? 0);
      if (o < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (s, d, a) => {
        const r = document.createElement("button");
        return r.textContent = s, r.dataset.view = d, r.title = a, r.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", r.addEventListener("click", (f) => {
          var _a3;
          f.stopPropagation();
          const c = r.classList.contains("view-active");
          Te.querySelectorAll("[data-view]").forEach((i) => i.classList.remove("view-active")), c ? (yo("3d"), (_a3 = Te.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (yo(d), r.classList.add("view-active"));
        }), r;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let s = 0; s < o; s++) t.appendChild(n(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function Sa() {
      yo("3d"), Te.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    Qe.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, yo(t), Te.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let no = false, Jt = false, co = false, jt = "line", Kt = [], gt = null, Ot = null, qt = null, Oo = null, Qt = null;
    const $t = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, _n = 0.5;
    let Bn = [], eo = null, To = null;
    const qo = [], ln = [], Ea = 50;
    function _o() {
      qo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), qo.length > Ea && qo.shift(), ln.length = 0;
    }
    function Ts() {
      if (qo.length === 0) return;
      ln.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = qo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, xo(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function As() {
      if (ln.length === 0) return;
      qo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = ln.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, xo(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const bt = /* @__PURE__ */ new Set();
    let Vt = null, $o = [], Zt = null, po = null;
    function Dn(t) {
      const o = et();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let r = 0; r < l.length; r++) {
        const f = n[l[r]], c = n[l[(r + 1) % l.length]];
        s.push(f[0], f[1], f[2], c[0], c[1], c[2]);
      }
      const d = new oo();
      d.setAttribute("position", new zo(s, 3));
      const a = new Wo(d, new Go({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      a.renderOrder = 9998, a.__elemIdx = t, o.scene.add(a), $o.push(a), o.render();
    }
    function Mo() {
      const t = et();
      $o.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), $o = [], t == null ? void 0 : t.render();
    }
    function wo() {
      po && po.remove();
      const t = j.size > 0 || N;
      if (bt.size === 0 && !t) {
        po = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${bt.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), po = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        Ha([
          ...bt
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (bt.size === 1) {
          const n = [
            ...bt
          ][0];
          Ns(n);
        } else {
          const n = [
            ...bt
          ], l = e.nodes.val, s = e.elements.val;
          let d = 0, a = 0, r = 0, f = 0;
          n.forEach((i) => {
            const b = s[i];
            if (b) if (b.length === 2) {
              const E = l[b[0]], S = l[b[1]], y = Math.abs(S[0] - E[0]), p = Math.abs(S[1] - E[1]), v = Math.abs(S[2] - E[2]);
              v > y && v > p ? d++ : a++;
            } else b.length === 3 ? r++ : b.length === 4 && f++;
          });
          const c = [];
          d && c.push(`${d} columnas`), a && c.push(`${a} vigas`), f && c.push(`${f} shells Q4`), r && c.push(`${r} triangulos`), alert(`${n.length} elementos seleccionados:
${c.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        bt.forEach((n) => j.add(n)), bt.clear(), Mo(), wo(), Pe();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        N = true, G.clear(), bt.forEach((n) => G.add(n)), bt.clear(), Mo(), wo(), Pe();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        j.clear(), N = false, G.clear(), wo(), Pe();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        _o(), bt.forEach((n) => J.add(n)), bt.clear(), Mo(), wo(), Pe();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        bt.clear(), Mo(), wo();
      });
    }
    function rn() {
      var _a2;
      Jt = false, bt.clear(), Mo(), po && (po.remove(), po = null), (_a2 = Te.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = et();
      o && (o.controls.enabled = true);
    }
    function Ao() {
      if (Vt) {
        const t = et();
        t == null ? void 0 : t.scene.remove(Vt), Vt.geometry.dispose(), Vt.material.dispose(), Vt = null, t == null ? void 0 : t.render();
      }
      Zt && (Zt.remove(), Zt = null);
    }
    function Ia(t) {
      Hn();
      const o = et();
      if (!o) return;
      const n = e.nodes.val[t];
      if (!n) return;
      To = t;
      const l = 200, s = [
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
      for (const [d, a] of s) {
        const r = new Float32Array([
          n[0] - d[0] * l,
          n[1] - d[1] * l,
          n[2] - d[2] * l,
          n[0] + d[0] * l,
          n[1] + d[1] * l,
          n[2] + d[2] * l
        ]), f = new oo();
        f.setAttribute("position", new xn(r, 3));
        const c = new jo({
          color: a,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), i = new Wo(f, c);
        i.computeLineDistances(), i.renderOrder = 9990, o.scene.add(i), Bn.push(i);
      }
      o.render();
    }
    function Hn() {
      const t = et();
      for (const o of Bn) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      Bn = [], To = null, eo && (eo.remove(), eo = null);
    }
    function zs(t, o, n, l) {
      eo || (eo = document.createElement("div"), eo.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(eo));
      const s = l.x - n.x, d = l.y - n.y, a = l.z - n.z, r = Math.sqrt(s * s + d * d + a * a), f = Math.abs(s), c = Math.abs(d), i = Math.abs(a);
      let b = "";
      f > c && f > i ? b = `\u0394X=${s.toFixed(2)}` : c > f && c > i ? b = `\u0394Y=${d.toFixed(2)}` : i > 0.01 && (b = `\u0394Z=${a.toFixed(2)}`), eo.textContent = `${r.toFixed(3)} m  ${b}`, eo.style.left = t + 20 + "px", eo.style.top = o - 10 + "px";
    }
    function ka(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const s = new Oe(l[0], l[1], l[2]), d = t.clone(), a = d.clone().sub(s), r = 0.3, f = Math.abs(a.x), c = Math.abs(a.y), i = Math.abs(a.z);
      return c < r && i < r && f > 0.01 ? new Oe(d.x, s.y, s.z) : f < r && i < r && c > 0.01 ? new Oe(s.x, d.y, s.z) : f < r && c < r && i > 0.01 ? new Oe(s.x, s.y, d.z) : null;
    }
    function cn() {
      var _a2;
      const t = et();
      Ot && t && (t.scene.remove(Ot), Ot.geometry.dispose(), Ot.material.dispose(), Ot = null), qt && t && (t.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), Hn(), gt = null, Qt = null, co = false, Oo && (Oo.remove(), Oo = null), (_a2 = Te.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function Ta() {
      Oo && Oo.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (s) => `padding:4px 10px;border:1px solid ${s ? "#00ccff" : "#555"};background:${s ? "#003355" : "#333"};color:${s ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (s) => `padding:3px 6px;border:1px solid ${s ? "#33ff33" : "#444"};background:${s ? "#113311" : "#222"};color:${s ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(jt === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(jt === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(jt === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(jt === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n($t.node)}">Node</button>
      <button id="ds-grid" style="${n($t.grid)}">Grid</button>
      <button id="ds-mid" style="${n($t.midpoint)}">Mid</button>
      <button id="ds-track" style="${n($t.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${_n}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), Oo = t;
      const l = () => {
        const s = t.querySelector("#dt-line"), d = t.querySelector("#dt-arc"), a = t.querySelector("#dt-node"), r = t.querySelector("#dt-area");
        s && (s.style.cssText = o(jt === "line")), d && (d.style.cssText = o(jt === "arc")), a && (a.style.cssText = o(jt === "node")), r && (r.style.cssText = o(jt === "area"));
        const f = t.querySelector("#ds-node"), c = t.querySelector("#ds-grid"), i = t.querySelector("#ds-mid"), b = t.querySelector("#ds-track");
        f && (f.style.cssText = n($t.node)), c && (c.style.cssText = n($t.grid)), i && (i.style.cssText = n($t.midpoint)), b && (b.style.cssText = n($t.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        jt = "line", gt = null, Qt = null, Kt = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        jt = "arc", gt = null, Qt = null, Kt = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        jt = "node", gt = null, Qt = null, Kt = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        jt = "area", gt = null, Qt = null, Kt = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        $t.node = !$t.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        $t.grid = !$t.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        $t.midpoint = !$t.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        $t.track = !$t.track, $t.track || Hn(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        $t.gridSize = parseFloat(s.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => Ts()), t.querySelector("#dt-redo").addEventListener("click", () => As());
    }
    function Ls(t, o, n, l) {
      const s = l.getBoundingClientRect(), d = (t - s.left) / s.width * 2 - 1, a = -((o - s.top) / s.height) * 2 + 1, r = new Zs();
      r.setFromCamera(new Qs(d, a), n);
      const f = e.nodes.val, c = e.elements.val, i = 0.12;
      if ($t.node) {
        let S = -1, y = 1 / 0;
        for (let p = 0; p < f.length; p++) {
          const v = f[p], I = new Oe(v[0], v[1], v[2]).project(n), A = Math.sqrt((I.x - d) ** 2 + (I.y - a) ** 2);
          A < i && A < y && (y = A, S = p);
        }
        if (S >= 0) return {
          nodeIdx: S,
          worldPos: new Oe(...f[S]),
          snapType: "node"
        };
      }
      if ($t.midpoint) {
        let S = 1 / 0, y = null;
        for (const p of c) {
          if (p.length !== 2) continue;
          const v = f[p[0]], I = f[p[1]], A = new Oe((v[0] + I[0]) / 2, (v[1] + I[1]) / 2, (v[2] + I[2]) / 2), T = A.clone().project(n), B = Math.sqrt((T.x - d) ** 2 + (T.y - a) ** 2);
          B < i * 0.8 && B < S && (S = B, y = A);
        }
        if (y) return {
          nodeIdx: null,
          worldPos: y,
          snapType: "mid"
        };
      }
      if ($t.grid) {
        const S = new Eo(new Oe(0, 0, 1), 0), y = new Oe();
        if (r.ray.intersectPlane(S, y)) {
          const p = $t.gridSize || _n;
          return y.x = Math.round(y.x / p) * p, y.y = Math.round(y.y / p) * p, y.z = Math.round(y.z / p) * p, {
            nodeIdx: null,
            worldPos: y,
            snapType: "grid"
          };
        }
      }
      const b = new Eo(new Oe(0, 0, 1), 0), E = new Oe();
      return r.ray.intersectPlane(b, E), {
        nodeIdx: null,
        worldPos: E,
        snapType: "free"
      };
    }
    function Cs(t) {
      const o = et();
      if (!o) return;
      const n = e.nodes.val;
      if (qt && (o.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, s = t.snapType === "node" ? 0.08 : 0.06, d = t.snapType === "mid" ? new Ka(s * 2, s * 2, s * 2) : new Za(s, 12, 12), a = new Qa({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        qt = new la(d, a), qt.position.copy(t.worldPos), qt.renderOrder = 9999, o.scene.add(qt);
      }
      if (Ot && (o.scene.remove(Ot), Ot.geometry.dispose(), Ot.material.dispose(), Ot = null), gt !== null && t.worldPos) {
        const l = n[gt], s = new oo();
        if (jt === "arc" && Qt !== null) {
          const a = n[Qt], r = Fs(new Oe(l[0], l[1], l[2]), new Oe(a[0], a[1], a[2]), t.worldPos, 16), f = [];
          for (let c = 0; c < r.length - 1; c++) f.push(r[c].x, r[c].y, r[c].z, r[c + 1].x, r[c + 1].y, r[c + 1].z);
          s.setAttribute("position", new zo(f, 3));
        } else s.setAttribute("position", new zo([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const d = new Go({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        Ot = new Lo(s, d), jt === "arc" && Qt !== null && (Ot = new Wo(s, d)), Ot.renderOrder = 9999, o.scene.add(Ot);
      }
      o.render();
    }
    function Fs(t, o, n, l) {
      const s = [];
      for (let d = 0; d <= l; d++) {
        const a = d / l, r = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), f = (1 - a) * (1 - a), c = 2 * (1 - a) * a, i = a * a;
        s.push(new Oe(f * t.x + c * r.x + i * n.x, f * t.y + c * r.y + i * n.y, f * t.z + c * r.z + i * n.z));
      }
      return s;
    }
    function jn(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const o = e.nodes.val, n = 1e-3;
      for (let s = 0; s < o.length; s++) if (Math.abs(o[s][0] - t.worldPos.x) < n && Math.abs(o[s][1] - t.worldPos.y) < n && Math.abs(o[s][2] - t.worldPos.z) < n) return s;
      _o();
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
    function Aa(t) {
      var _a2;
      if (jt === "node") {
        if (!t.worldPos) return;
        _o();
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
      if (jt === "line") {
        const o = jn(t);
        if (o < 0) return;
        if (gt === null) {
          gt = o;
          return;
        }
        if (o === gt) return;
        _o();
        const n = [
          ...e.elements.val
        ];
        n.some((s) => s.length === 2 && (s[0] === gt && s[1] === o || s[1] === gt && s[0] === o)) || (n.push([
          gt,
          o
        ]), e.elements.val = n, xo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), gt = o;
        return;
      }
      if (jt === "arc") {
        const o = jn(t);
        if (o < 0) return;
        if (gt === null) {
          gt = o;
          return;
        }
        if (Qt === null) {
          if (o === gt) return;
          Qt = o;
          return;
        }
        if (o === gt || o === Qt) return;
        const n = e.nodes.val, l = new Oe(...n[gt]), s = new Oe(...n[Qt]), d = new Oe(...n[o]), a = Math.max(4, Math.round(((_a2 = re.nSubViga) == null ? void 0 : _a2.val) ?? 8)), r = Fs(l, s, d, a);
        _o();
        const f = [
          ...e.nodes.val
        ], c = [
          ...e.elements.val
        ];
        let i = gt;
        for (let b = 1; b < r.length; b++) {
          let E;
          if (b === r.length - 1) E = o;
          else {
            const S = r[b];
            E = f.length, f.push([
              S.x,
              S.y,
              S.z
            ]);
          }
          c.push([
            i,
            E
          ]), i = E;
        }
        e.nodes.val = f, e.elements.val = c, xo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, gt = o, Qt = null;
        return;
      }
      if (jt === "area") {
        const o = jn(t);
        if (o < 0) return;
        if (Kt.length >= 3 && o === Kt[0]) {
          _o();
          const n = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], s = Kt.map((d) => n[d]);
          try {
            const d = go({
              points: s,
              polygon: Array.from({
                length: s.length
              }, (r, f) => f),
              maxMeshSize: _n || 0.5
            }), a = [];
            for (const r of d.nodes) {
              let f = -1;
              for (let c = 0; c < n.length; c++) {
                const i = Math.abs(n[c][0] - r[0]), b = Math.abs(n[c][1] - r[1]), E = Math.abs(n[c][2] - r[2]);
                if (i < 0.01 && b < 0.01 && E < 0.01) {
                  f = c;
                  break;
                }
              }
              f >= 0 ? a.push(f) : (a.push(n.length), n.push([
                r[0],
                r[1],
                r[2]
              ]));
            }
            for (const r of d.elements) l.push([
              a[r[0]],
              a[r[1]],
              a[r[2]]
            ]);
            e.nodes.val = n, e.elements.val = l, xo(), console.log(`Area: ${d.elements.length} triangulos creados desde ${Kt.length} vertices`);
          } catch (d) {
            console.error("Area mesh failed:", d.message);
          }
          Kt = [];
          return;
        }
        if (Kt.push(o), console.log(`Area vertex ${Kt.length}: node ${o}`), Kt.length >= 2) {
          const n = Kt[Kt.length - 2], l = e.nodes.val, s = et();
          if (s) {
            const d = new oo().setFromPoints([
              new Oe(...l[n]),
              new Oe(...l[o])
            ]), a = new Wo(d, new Go({
              color: 65280,
              linewidth: 2
            }));
            a.name = "area-preview", s.scene.add(a), s.render();
          }
        }
        return;
      }
    }
    function Rs(t) {
      const o = et();
      if (!o) return;
      Vt && (o.scene.remove(Vt), Vt.geometry.dispose(), Vt.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let a = 0; a < l.length; a++) {
        const r = n[l[a]], f = n[l[(a + 1) % l.length]];
        s.push(r[0], r[1], r[2], f[0], f[1], f[2]);
      }
      const d = new oo();
      d.setAttribute("position", new zo(s, 3)), Vt = new Wo(d, new Go({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), Vt.renderOrder = 9999, o.scene.add(Vt), o.render();
    }
    function Wn(t) {
      const o = et();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new Qs((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), s = new Zs();
      s.setFromCamera(l, o.controls.object), s.params.Line = {
        threshold: 0.5
      };
      const d = e.nodes.val, a = e.elements.val;
      if (d.length === 0 || a.length === 0) return -1;
      let r = 1 / 0, f = -1;
      const c = s.ray;
      for (let b = 0; b < a.length; b++) {
        const E = a[b];
        if (E.length === 2) {
          const S = new Oe(...d[E[0]]), y = new Oe(...d[E[1]]), p = new el(S, y), v = new Oe(), I = new Oe();
          c.closestPointToPoint(p.getCenter(new Oe()), v), p.closestPointToPoint(v, true, I);
          const A = v.distanceTo(I);
          A < r && (r = A, f = b);
        } else if (E.length === 3) {
          const S = new Oe(...d[E[0]]), y = new Oe(...d[E[1]]), p = new Oe(...d[E[2]]), v = new Oe();
          if (c.intersectTriangle(S, y, p, false, v)) {
            const A = c.origin.distanceTo(v);
            A < r && (r = A, f = b);
          } else {
            const A = S.add(y).add(p).divideScalar(3), T = new Oe();
            c.closestPointToPoint(A, T);
            const B = T.distanceTo(A);
            B < r && (r = B, f = b);
          }
        } else if (E.length === 4) {
          const S = new Oe(...d[E[0]]), y = new Oe(...d[E[1]]), p = new Oe(...d[E[2]]), v = new Oe(...d[E[3]]), I = new Oe();
          let A = c.intersectTriangle(S, y, p, false, I);
          if (A) {
            const T = c.origin.distanceTo(I);
            T < r && (r = T, f = b);
          }
          if (A = c.intersectTriangle(S, p, v, false, I), A) {
            const T = c.origin.distanceTo(I);
            T < r && (r = T, f = b);
          }
        }
      }
      const { extent: i } = vo();
      return r < i * 0.1 ? f : -1;
    }
    function ye(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function Gn(t, o, n = 12) {
      var _a2;
      const l = Math.min(t.length, n), s = Math.min(((_a2 = t[0]) == null ? void 0 : _a2.length) || 0, n);
      let d = "<table>";
      if (o) {
        d += '<tr><td class="header"></td>';
        for (let a = 0; a < s; a++) d += `<td class="header">${o[a] || a}</td>`;
        d += "</tr>";
      }
      for (let a = 0; a < l; a++) {
        d += "<tr>", o && (d += `<td class="header">${o[a] || a}</td>`);
        for (let r = 0; r < s; r++) {
          const f = t[a][r], c = Math.abs(f) > 1e-10 ? "nonzero" : "";
          d += `<td class="${c}">${ye(f, 2)}</td>`;
        }
        d += "</tr>";
      }
      return d += "</table>", d;
    }
    function _e(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function z(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function za(t, o, n, l, s, d, a) {
      const r = 0.8333333333333334 * o, f = 5 / 6 * o, c = f > 0 && s > 0 ? 12 * t * n / (s * f * a ** 2) : 0, i = r > 0 && s > 0 ? 12 * t * l / (s * r * a ** 2) : 0, b = t * o / a, E = s * d / a, S = 12 * t * n / a ** 3 / (1 + c), y = 6 * t * n / a ** 2 / (1 + c), p = 4 * t * n / a * (1 + c / 4) / (1 + c), v = 2 * t * n / a * (1 - c / 2) / (1 + c), I = c > 1e-10 || i > 1e-10;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n: ${I ? "Timoshenko (con deformaci\xF3n por cortante)" : "Euler-Bernoulli"}</strong></div>
      ${I ? `
      <div style="text-align:left;margin-bottom:6px;color:var(--fem-eq-sub)">
        ${z("A", "s")} = ${_e("5", "6")} \xB7 ${z("A")} = <span class="highlight">${ye(r)}</span>
        &nbsp;&nbsp; \u03C6<sub>z</sub> = ${_e("12\xB7" + z("E") + "\xB7" + z("I", "z"), z("G") + "\xB7" + z("A", "s") + "\xB7" + z("L") + "\xB2")} = <span class="highlight">${ye(c)}</span>
        &nbsp;&nbsp; \u03C6<sub>y</sub> = <span class="highlight">${ye(i)}</span>
      </div>
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes Timoshenko (Dr. Aguiar):</strong></div>
      <div>${z("t", "z")} = ${_e("12\xB7" + z("E") + "\xB7" + z("I", "z"), z("L") + "\xB3\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${ye(S)}</span> &nbsp;(cortante)</div>
      <div>${z("b", "z")} = ${_e("6\xB7" + z("E") + "\xB7" + z("I", "z"), z("L") + "\xB2\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${ye(y)}</span> &nbsp;(acoplamiento)</div>
      <div>${z("k", "z")} = ${_e("4\xB7" + z("E") + "\xB7" + z("I", "z") + "\xB7(1+\u03C6/4)", z("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${ye(p)}</span> &nbsp;(flexi\xF3n diagonal)</div>
      <div>${z("a", "z")} = ${_e("2\xB7" + z("E") + "\xB7" + z("I", "z") + "\xB7(1\u2212\u03C6/2)", z("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${ye(v)}</span> &nbsp;(flexi\xF3n off-diag)</div>
      ` : `
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      `}
      <div>${_e(z("E") + "\xB7" + z("A"), z("L"))} = <span class="highlight">${ye(b)}</span> &nbsp;(axial)</div>
      <div>${_e(z("G") + "\xB7" + z("J"), z("L"))} = <span class="highlight">${ye(E)}</span> &nbsp;(torsi\xF3n)</div>
      ${I ? "" : `
      <div>${_e("12\xB7" + z("E") + "\xB7" + z("I", "z"), z("L") + "\xB3")} = <span class="highlight">${ye(S)}</span></div>
      <div>${_e("4\xB7" + z("E") + "\xB7" + z("I", "z"), z("L"))} = <span class="highlight">${ye(p)}</span></div>
      `}
    </div>
    <div class="fem-eq">
      ${z("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${_e(z("EA"), z("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${_e("\u2212" + z("EA"), z("L"))}</span>
        <span class="cell">0</span><span class="cell">${z("t", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${z("b", "z")}</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">0</span><span class="cell">${z("b", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${z("k", "z")}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712 ${I ? "(Timoshenko)" : "(Euler-Bernoulli)"}</sub>
    </div>
    ${I ? `<div class="fem-eq eq-box" style="margin-top:6px">
      <div style="text-align:left"><strong style="color:var(--fem-section-title)">Matrices de rigidez (Dr. Aguiar, Fig 7.9):</strong></div>
      <div style="margin-top:4px">${z("K", "f")} = ${z("B", "f")}<sup>T</sup> \xB7 ${z("E")}\xB7${z("I")} \xB7 ${z("B", "f")} \xB7 ${z("J")} &nbsp;<sub style="color:var(--fem-label)">(flexi\xF3n, 1 pt Gauss)</sub></div>
      <div>${z("K", "c")} = ${z("B", "c")}<sup>T</sup> \xB7 ${z("G")}\xB7${z("A'")} \xB7 ${z("B", "c")} \xB7 ${z("J")} &nbsp;<sub style="color:var(--fem-label)">(cortante, 2 pts Gauss)</sub></div>
      <div>${z("K", "total")} = ${z("K", "f")} + ${z("K", "c")}</div>
    </div>` : ""}`;
    }
    function La(t) {
      if (t.length === 2) {
        const n = ho(t[1], t[0]), l = Ro(n), s = n[0] / l, d = n[1] / l, a = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${z("l")} = cos(\u03B1) = ${_e("\u0394x", z("L"))} = ${_e(ye(n[0]), ye(l))} = <span class="highlight">${ye(s)}</span></div>
        <div>${z("m")} = cos(\u03B2) = ${_e("\u0394y", z("L"))} = ${_e(ye(n[1]), ye(l))} = <span class="highlight">${ye(d)}</span></div>
        <div>${z("n")} = cos(\u03B3) = ${_e("\u0394z", z("L"))} = ${_e(ye(n[2]), ye(l))} = <span class="highlight">${ye(a)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${z("l")}</span><span class="cell">${z("m")}</span><span class="cell">${z("n")}</span>
          <span class="cell">${_e("\u2212" + z("m"), z("D"))}</span><span class="cell">${_e(z("l"), z("D"))}</span><span class="cell">0</span>
          <span class="cell">${_e("\u2212" + z("l") + "\xB7" + z("n"), z("D"))}</span><span class="cell">${_e("\u2212" + z("m") + "\xB7" + z("n"), z("D"))}</span><span class="cell">${z("D")}</span>
        </span>
        &nbsp; donde ${z("D")} = \u221A(${z("l")}\xB2 + ${z("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${z("T")} = ${z("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${z("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Ca() {
      return `<div class="fem-eq">
      ${z("K", "global")} = ${z("T")}<sup>T</sup> \xB7 ${z("k", "local")} \xB7 ${z("T")}
    </div>`;
    }
    function Fa(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${z("K", "global")}[${z("i")}, ${z("j")}] += ${z("K", "elem")}[${z("i")}, ${z("j")}]</div>
      <div style="margin-top:4px">donde ${z("i")}, ${z("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function Ra(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${z("u", "local")} = ${z("T")} \xB7 ${z("u", "global")}</div>
        <div>${z("f", "local")} = ${z("k", "local")} \xB7 ${z("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${z("f")} = [${z("N", "i")}, ${z("V", "y,i")}, ${z("V", "z,i")}, ${z("M", "x,i")}, ${z("M", "y,i")}, ${z("M", "z,i")}, ${z("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${_e("1", "2" + z("A"))} \xB7 ${z("D")} \xB7 ${z("B")} \xB7 ${z("u")}</div>
      <div>${z("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${z("t")} &nbsp;&nbsp; ${z("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${_e(z("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function Yn(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let s = 0; s < n; s++) l += `<td class="hdr">${o[s] || s}</td>`;
      l += "</tr>";
      for (let s = 0; s < n; s++) {
        l += `<tr><td class="hdr">${o[s] || s}</td>`;
        for (let d = 0; d < n; d++) {
          const a = t[s][d], r = (s === d ? "diag " : "") + (Math.abs(a) > 1e-10 ? "nz" : "");
          l += `<td class="${r}">${ye(a, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function Ps() {
      const t = "0", o = _e(z("EA"), z("L")), n = _e("\u2212" + z("EA"), z("L")), l = _e("12" + z("EI", "z"), z("L") + "\xB3"), s = _e("\u221212" + z("EI", "z"), z("L") + "\xB3"), d = _e("12" + z("EI", "y"), z("L") + "\xB3"), a = _e("\u221212" + z("EI", "y"), z("L") + "\xB3"), r = _e("6" + z("EI", "z"), z("L") + "\xB2"), f = _e("\u22126" + z("EI", "z"), z("L") + "\xB2"), c = _e("6" + z("EI", "y"), z("L") + "\xB2"), i = _e("\u22126" + z("EI", "y"), z("L") + "\xB2"), b = _e(z("GJ"), z("L")), E = _e("\u2212" + z("GJ"), z("L")), S = _e("4" + z("EI", "z"), z("L")), y = _e("2" + z("EI", "z"), z("L")), p = _e("4" + z("EI", "y"), z("L")), v = _e("2" + z("EI", "y"), z("L")), I = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', A = [
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
      ], T = [
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
      ], B = [
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
          r,
          t,
          s,
          t,
          t,
          t,
          r
        ],
        [
          t,
          t,
          d,
          t,
          i,
          t,
          t,
          t,
          a,
          t,
          i,
          t
        ],
        [
          t,
          t,
          t,
          b,
          t,
          t,
          t,
          t,
          t,
          E,
          t,
          t
        ],
        [
          t,
          t,
          i,
          t,
          p,
          t,
          t,
          t,
          c,
          t,
          v,
          t
        ],
        [
          t,
          r,
          t,
          t,
          t,
          S,
          t,
          f,
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
          s,
          t,
          t,
          t,
          f,
          t,
          l,
          t,
          t,
          t,
          f
        ],
        [
          t,
          t,
          a,
          t,
          c,
          t,
          t,
          t,
          d,
          t,
          c,
          t
        ],
        [
          t,
          t,
          t,
          E,
          t,
          t,
          t,
          t,
          t,
          b,
          t,
          t
        ],
        [
          t,
          t,
          i,
          t,
          v,
          t,
          t,
          t,
          c,
          t,
          p,
          t
        ],
        [
          t,
          r,
          t,
          t,
          t,
          y,
          t,
          f,
          t,
          t,
          t,
          S
        ]
      ];
      let H = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      H += '<table><tr><td class="hdr"></td>';
      for (const h of T) H += `<td class="hdr">${h}</td>`;
      H += "</tr>";
      for (let h = 0; h < 12; h++) {
        H += `<tr><td class="hdr">${A[h]}</td>`;
        for (let u = 0; u < 12; u++) if (u < h) H += `<td style="color:var(--fem-border-cell)">${u === 0 && h > 0 ? I : ""}</td>`;
        else {
          const w = B[h][u], L = (h === u ? "diag " : "") + (w !== "0" ? "nz" : "");
          H += `<td class="${L}">${w}</td>`;
        }
        H += "</tr>";
      }
      return H += "</table>", H;
    }
    function Pa(t, o, n, l, s, d, a) {
      return `<div class="coeff-grid">${[
        {
          name: `${_e(z("E") + "\xB7" + z("A"), z("L"))}`,
          calc: `${_e(ye(t) + "\xD7" + ye(o), ye(a))}`,
          val: t * o / a,
          label: "Axial"
        },
        {
          name: `${_e("12\xB7" + z("E") + "\xB7" + z("I", "z"), z("L") + "\xB3")}`,
          calc: `${_e("12\xD7" + ye(t) + "\xD7" + ye(n), ye(a) + "\xB3")}`,
          val: 12 * t * n / a ** 3,
          label: "Corte Y"
        },
        {
          name: `${_e("6\xB7" + z("E") + "\xB7" + z("I", "z"), z("L") + "\xB2")}`,
          calc: `${_e("6\xD7" + ye(t) + "\xD7" + ye(n), ye(a) + "\xB2")}`,
          val: 6 * t * n / a ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${_e("12\xB7" + z("E") + "\xB7" + z("I", "y"), z("L") + "\xB3")}`,
          calc: `${_e("12\xD7" + ye(t) + "\xD7" + ye(l), ye(a) + "\xB3")}`,
          val: 12 * t * l / a ** 3,
          label: "Corte Z"
        },
        {
          name: `${_e("6\xB7" + z("E") + "\xB7" + z("I", "y"), z("L") + "\xB2")}`,
          calc: `${_e("6\xD7" + ye(t) + "\xD7" + ye(l), ye(a) + "\xB2")}`,
          val: 6 * t * l / a ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${_e(z("G") + "\xB7" + z("J"), z("L"))}`,
          calc: `${_e(ye(s) + "\xD7" + ye(d), ye(a))}`,
          val: s * d / a,
          label: "Torsi\xF3n"
        },
        {
          name: `${_e("4\xB7" + z("E") + "\xB7" + z("I", "z"), z("L"))}`,
          calc: `${_e("4\xD7" + ye(t) + "\xD7" + ye(n), ye(a))}`,
          val: 4 * t * n / a,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${_e("2\xB7" + z("E") + "\xB7" + z("I", "z"), z("L"))}`,
          calc: `${_e("2\xD7" + ye(t) + "\xD7" + ye(n), ye(a))}`,
          val: 2 * t * n / a,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${_e("4\xB7" + z("E") + "\xB7" + z("I", "y"), z("L"))}`,
          calc: `${_e("4\xD7" + ye(t) + "\xD7" + ye(l), ye(a))}`,
          val: 4 * t * l / a,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${_e("2\xB7" + z("E") + "\xB7" + z("I", "y"), z("L"))}`,
          calc: `${_e("2\xD7" + ye(t) + "\xD7" + ye(l), ye(a))}`,
          val: 2 * t * l / a,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((f) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${f.label}</div>${f.name} = ${f.calc} = <span class="highlight">${ye(f.val)}</span></div>`).join("")}</div>`;
    }
    function Jn(t, o, n, l) {
      var _a2;
      const s = document.querySelector(".fem-full-overlay");
      s && s.remove();
      const d = document.createElement("div");
      d.className = "fem-full-overlay", d.innerHTML = `
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
    `, document.body.appendChild(d), (_a2 = d.querySelector("#fem-full-close")) == null ? void 0 : _a2.addEventListener("click", () => d.remove()), d.addEventListener("click", (a) => {
        a.target === d && d.remove();
      });
    }
    function Ns(t) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O;
      Zt && Zt.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], s = l.map((h) => o[h]), d = l.length === 2, a = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, r = (_b = e.deformOutputs) == null ? void 0 : _b.val, f = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (d) {
        const h = Ro(ho(s[1], s[0])), u = ((_d = a.elasticities) == null ? void 0 : _d.get(t)) ?? 0, w = ((_e2 = a.areas) == null ? void 0 : _e2.get(t)) ?? 0, L = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, R = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, W = ((_h = a.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, g = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0, M = ((_j = a.momentReleases) == null ? void 0 : _j.get(t)) || [], x = ((_k = a.partialFixitySprings) == null ? void 0 : _k.get(t)) || [], C = [
          "P (Axial)",
          "V2 (Corte)",
          "V3 (Corte)",
          "T (Torsi\xF3n)",
          "M22 (Momento)",
          "M33 (Momento)"
        ];
        let X = "";
        for (let V = 0; V < 6; V++) {
          const ae = V, Z = V + 6, K = (M.length >= 12 ? M[ae] : V >= 3 && M.length >= 6 && M[V - 3]) ? "checked" : "", de = (M.length >= 12 ? M[Z] : V >= 3 && M.length >= 6 && M[V]) ? "checked" : "", ie = x.length >= 12 && x[ae] > 0 ? x[ae].toFixed(1) : "", Ee = x.length >= 12 && x[Z] > 0 ? x[Z].toFixed(1) : "";
          X += `<tr>
          <td style="text-align:left;color:var(--fem-key)">${C[V]}</td>
          <td style="text-align:center"><input type="checkbox" data-rel="${ae}" ${K}></td>
          <td style="text-align:center"><input type="checkbox" data-rel="${Z}" ${de}></td>
          <td><input type="number" data-spr="${ae}" value="${ie}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
          <td><input type="number" data-spr="${Z}" value="${Ee}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
        </tr>`;
        }
        `${l[0]}${l[1]}${ye(h)}${ye(u)}${ye(w)}${ye(L)}${ye(R)}${ye(W)}${ye(g)}${X}`;
      } else {
        const h = ((_l2 = a.elasticities) == null ? void 0 : _l2.get(t)) ?? 0, u = ((_m = a.thicknesses) == null ? void 0 : _m.get(t)) ?? 0, w = ((_n2 = a.poissonsRatios) == null ? void 0 : _n2.get(t)) ?? 0, L = h / (2 * (1 + w)), R = l.length === 4, W = h / (1 - w * w);
        `${l.length}${l.join(", ")}${ye(h)}${ye(L)}${ye(u)}${ye(w)}`, R && (E = `<div class="fem-eq eq-box">
          <div style="text-align:left;margin-bottom:6px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n Q4: Membrana + Mindlin-Reissner + Drilling</strong></div>

          <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">1. Matriz constitutiva (esfuerzo plano):</strong></div>
          <div>${z("D")} = ${_e(z("E"), "1\u2212\u03BD\xB2")} \xB7 <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
            <span class="cell">1</span><span class="cell">\u03BD</span><span class="cell">0</span>
            <span class="cell">\u03BD</span><span class="cell">1</span><span class="cell">0</span>
            <span class="cell">0</span><span class="cell">0</span><span class="cell">${_e("1\u2212\u03BD", "2")}</span>
          </span> = ${_e(ye(h), "1\u2212" + ye(w) + "\xB2")} = <span class="highlight">${ye(W)}</span></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">2. Funciones de forma (Ec. 6.2, Wilson):</strong></div>
          <div>${z("N", "i")} = \xBC\xB7(1\xB1\u03BE)\xB7(1\xB1\u03B7) &nbsp;&nbsp; <sub style="color:var(--fem-label)">i = 1..4 (bilineal)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">3. Modos incompatibles (Ec. 6.13, Wilson 1971):</strong></div>
          <div>${z("N", "5")} = 1 \u2212 \u03BE\xB2 &nbsp;&nbsp; ${z("N", "6")} = 1 \u2212 \u03B7\xB2</div>
          <div style="margin-top:4px">${z("u", "x")} = \u03A3${z("N", "i")}\xB7${z("u", "xi")} + \u03B1\u2081\xB7${z("N", "5")} + \u03B1\u2082\xB7${z("N", "6")} &nbsp;<sub style="color:var(--fem-label)">(Ec. 6.12)</sub></div>
          <div>${z("u", "y")} = \u03A3${z("N", "i")}\xB7${z("u", "yi")} + \u03B1\u2083\xB7${z("N", "5")} + \u03B1\u2084\xB7${z("N", "6")}</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">4. Deformaci\xF3n-desplazamiento (Ec. 6.3):</strong></div>
          <div>${z("d")} = [${z("B", "C")} &nbsp; ${z("B", "I")}] \xB7 [${z("u")} &nbsp; \u03B1]<sup>T</sup></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">5. Submatrices de rigidez (Ec. 6.9):</strong></div>
          <div>${z("k", "CC")} = \u222B${z("B", "C")}<sup>T</sup>\xB7${z("E")}\xB7${z("B", "C")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD78 est\xE1ndar)</sub></div>
          <div>${z("k", "CI")} = \u222B${z("B", "C")}<sup>T</sup>\xB7${z("E")}\xB7${z("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD74 acoplamiento)</sub></div>
          <div>${z("k", "II")} = \u222B${z("B\u0304", "I")}<sup>T</sup>\xB7${z("E")}\xB7${z("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(4\xD74 modos internos)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">6. Condensaci\xF3n est\xE1tica (Ec. 6.11):</strong></div>
          <div style="font-size:13px"><span class="highlight">${z("k", "C")} = ${z("k", "CC")} \u2212 ${z("k", "CI")} \xB7 ${z("k", "II")}\u207B\xB9 \xB7 ${z("k", "IC")}</span></div>
          <div style="margin-top:4px;color:var(--fem-eq-sub)">Los 4 modos incompatibles \u03B1 se eliminan antes del ensamblaje global</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">7. Correcci\xF3n de Taylor (Ec. 6.7):</strong></div>
          <div>${z("B\u0304", "I")} = ${z("B", "I")} + ${z("B", "IC")} &nbsp; donde &nbsp; ${z("B", "IC")} = \u2212${_e("1", "V")}\u222B${z("B", "I")} dV</div>
          <div style="color:var(--fem-eq-sub)">Jacobiano del centro para modos incompatibles \u2192 pasa patch test</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">8. Drilling DOF (Hughes-Brezzi 1989):</strong></div>
          <div>${z("K", "drill")} = \u03B1\xB7${z("G")}\xB7${z("t")} \xB7 \u222B${z("B", "d")}<sup>T</sup>\xB7${z("B", "d")} dA &nbsp; donde \u03B1 = 0.5</div>
          <div>${z("B", "d")}[i] = \u03B8<sub>z,i</sub> \u2212 \xBD\xB7(\u2202v/\u2202x \u2212 \u2202u/\u2202y) &nbsp;<sub style="color:var(--fem-label)">(rotaci\xF3n antisim\xE9trica)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">9. Placa Mindlin-Reissner + MITC4:</strong></div>
          <div>${z("D", "b")} = ${_e(z("E") + "\xB7" + z("t") + "\xB3", "12\xB7(1\u2212\u03BD\xB2)")} = <span class="highlight">${ye(h * u ** 3 / (12 * (1 - w ** 2)))}</span></div>
          <div>${z("D", "s")} = \u03BA\xB7${z("G")}\xB7${z("t")} = <span class="highlight">${ye(5 / 6 * L * u)}</span> &nbsp; <sub style="color:var(--fem-label)">\u03BA = 5/6</sub></div>
          <div style="color:var(--fem-eq-sub)">MITC4: interpolaci\xF3n de cortante en puntos de atado (tying points)</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">10. Ensamblaje final:</strong></div>
          <div>${z("K", "24\xD724")} = ${z("K", "membrana")}(8\xD78) + ${z("K", "flexi\xF3n")}(12\xD712) + ${z("K", "drilling")}(12\xD712)</div>
          <div style="color:var(--fem-eq-sub)">DOFs por nodo: [u, v, w, \u03B8x, \u03B8y, \u03B8z]</div>
        </div>`);
      }
      let c = "", i = "", b = "", E = "", S = "", y = "", p = "", v = "", I = null, A = null, T = null, B = [];
      try {
        if (I = vn(s, a, t), A = yn(s), T = so(os(A), so(I, A)), B = d ? [
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
          "\u03B8y\u2081",
          "\u03B8z\u2082"
        ], d) {
          const L = Ro(ho(s[1], s[0])), R = ((_o2 = a.elasticities) == null ? void 0 : _o2.get(t)) ?? 0, W = ((_p = a.areas) == null ? void 0 : _p.get(t)) ?? 0, g = ((_q = a.momentsOfInertiaZ) == null ? void 0 : _q.get(t)) ?? 0, M = ((_r = a.momentsOfInertiaY) == null ? void 0 : _r.get(t)) ?? 0, x = ((_s2 = a.shearModuli) == null ? void 0 : _s2.get(t)) ?? 0, C = ((_t = a.torsionalConstants) == null ? void 0 : _t.get(t)) ?? 0;
          E = za(R, W, g, M, x, C, L);
        }
        S = La(s), y = Ca(), p = Fa(l), v = Ra(d);
        const h = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', u = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', w = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        c = `<div class="matrix-label">k_local (${I.length}\xD7${I.length}) ${h}</div>${Gn(I, B)}`, i = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${A.length}\xD7${A.length}) ${u}</div>${Gn(A, B)}`, b = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${w}</div>${Gn(T, B)}`;
      } catch (h) {
        c = `<div style="color:red">Error: ${h.message}</div>`;
      }
      if (r == null ? void 0 : r.deformations) {
        const h = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ];
        l.map((u, w) => {
          var _a3;
          const L = ((_a3 = r.deformations) == null ? void 0 : _a3.get(u)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], R = h.map((W, g) => `<span class="prop-key">${W}</span>: <span class="${Math.abs(L[g]) > 1e-10 ? "result-val" : ""}">${ye(L[g])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${u}:</strong> ${R}</div>`;
        }).join("");
      }
      if (f && d && (r == null ? void 0 : r.deformations) && I && A) {
        const h = (_u = f.normals) == null ? void 0 : _u.get(t), u = (_v = f.shearsY) == null ? void 0 : _v.get(t), w = (_w = f.shearsZ) == null ? void 0 : _w.get(t), L = (_x = f.torsions) == null ? void 0 : _x.get(t), R = (_y = f.bendingsY) == null ? void 0 : _y.get(t), W = (_z = f.bendingsZ) == null ? void 0 : _z.get(t), g = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], M = [];
        for (const Z of l) {
          const K = ((_A = r.deformations) == null ? void 0 : _A.get(Z)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          M.push(...K);
        }
        let x = [];
        try {
          x = so(A, M);
        } catch {
          x = new Array(12).fill(0);
        }
        let C = [];
        try {
          C = so(I, x);
        } catch {
          C = new Array(12).fill(0);
        }
        const X = (Z, K) => Z.map((de, ie) => `<span style="color:${Math.abs(de) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${K[ie % 6]}=${ye(de)}</span>`).join(", "), ae = [
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
        ].map((Z, K) => `${Z}${K < 6 ? "\u1D62" : "\u2C7C"}`);
        `${z("u", "global")}${l.map((Z, K) => `<span style="color:var(--fem-label)">nodo ${Z}:</span> ${g.map((de, ie) => `<span style="color:${Math.abs(M[K * 6 + ie]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${ye(M[K * 6 + ie])}</span>`).join(", ")}`).join(" | ")}${z("u", "local")}${z("T")}${z("u", "global")}${z("u", "local")}${X(x, [
          ...g,
          ...g
        ])}${z("f", "local")}${z("k", "local")}${z("u", "local")}${z("f", "local")}${C.map((Z, K) => `<span style="color:${Math.abs(Z) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${ae[K]}=${ye(Z)}</span>`).join(", ")}${z("P", "1")}${z("N", "i")}${ye(C[0])}${z("P", "7")}${z("N", "j")}${ye(C[6])}${z("P", "2")}${z("V", "y,i")}${ye(C[1])}${z("P", "8")}${z("V", "y,j")}${ye(C[7])}${z("P", "3")}${z("V", "z,i")}${ye(C[2])}${z("P", "9")}${z("V", "z,j")}${ye(C[8])}${z("P", "4")}${z("M", "x,i")}${ye(C[3])}${z("P", "10")}${z("M", "x,j")}${ye(C[9])}${z("P", "5")}${z("M", "y,i")}${ye(C[4])}${z("P", "11")}${z("M", "y,j")}${ye(C[10])}${z("P", "6")}${z("M", "z,i")}${ye(C[5])}${z("P", "12")}${z("M", "z,j")}${ye(C[11])}${h ? h.map((Z) => ye(Z)).join(", ") : "\u2014"}${u ? u.map((Z) => ye(Z)).join(", ") : "\u2014"}${w ? w.map((Z) => ye(Z)).join(", ") : "\u2014"}${L ? L.map((Z) => ye(Z)).join(", ") : "\u2014"}${R ? R.map((Z) => ye(Z)).join(", ") : "\u2014"}${W ? W.map((Z) => ye(Z)).join(", ") : "\u2014"}`;
      } else if (f && d) {
        const h = (_B = f.normals) == null ? void 0 : _B.get(t), u = (_C = f.shearsY) == null ? void 0 : _C.get(t), w = (_D = f.shearsZ) == null ? void 0 : _D.get(t), L = (_E = f.torsions) == null ? void 0 : _E.get(t), R = (_F = f.bendingsY) == null ? void 0 : _F.get(t), W = (_G = f.bendingsZ) == null ? void 0 : _G.get(t);
        `${h ? h.map((g) => ye(g)).join(", ") : "\u2014"}${u ? u.map((g) => ye(g)).join(", ") : "\u2014"}${w ? w.map((g) => ye(g)).join(", ") : "\u2014"}${L ? L.map((g) => ye(g)).join(", ") : "\u2014"}${R ? R.map((g) => ye(g)).join(", ") : "\u2014"}${W ? W.map((g) => ye(g)).join(", ") : "\u2014"}`;
      } else if (f && !d) {
        const h = (_H = f.bendingXX) == null ? void 0 : _H.get(t), u = (_I = f.bendingYY) == null ? void 0 : _I.get(t), w = (_J = f.bendingXY) == null ? void 0 : _J.get(t), L = (_K = f.membraneXX) == null ? void 0 : _K.get(t), R = (_L = f.membraneYY) == null ? void 0 : _L.get(t), W = (_M = f.membraneXY) == null ? void 0 : _M.get(t);
        `${h ? h.map((g) => ye(g)).join(", ") : "\u2014"}${u ? u.map((g) => ye(g)).join(", ") : "\u2014"}${w ? w.map((g) => ye(g)).join(", ") : "\u2014"}${L ? L.map((g) => ye(g)).join(", ") : "\u2014"}${R ? R.map((g) => ye(g)).join(", ") : "\u2014"}${W ? W.map((g) => ye(g)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, Zt = xl(t, o, n, a, r, f), Zt.id = "fem-inspect-panel", document.body.appendChild(Zt), (_N = Zt.querySelector("#er-close")) == null ? void 0 : _N.addEventListener("click", () => Ao()), (_O = Zt.querySelector("#rel-apply")) == null ? void 0 : _O.addEventListener("click", () => {
        const h = Zt.querySelectorAll("input[data-rel]"), u = Zt.querySelectorAll("input[data-spr]"), w = new Array(12).fill(false), L = new Array(12).fill(0);
        h.forEach((W) => {
          w[parseInt(W.dataset.rel)] = W.checked;
        }), u.forEach((W) => {
          const g = parseFloat(W.value);
          g > 0 && (L[parseInt(W.dataset.spr)] = g);
        }), a.momentReleases || (a.momentReleases = /* @__PURE__ */ new Map()), a.partialFixitySprings || (a.partialFixitySprings = /* @__PURE__ */ new Map()), w.some((W) => W) ? a.momentReleases.set(t, w) : a.momentReleases.delete(t), L.some((W) => W > 0) ? a.partialFixitySprings.set(t, L) : a.partialFixitySprings.delete(t), console.log(`Releases elem ${t}:`, w.map((W, g) => W ? relIds[g] : "").filter(Boolean).join(" ") || "none"), console.log(`Springs elem ${t}:`, L);
        const R = Zt.querySelector("#rel-apply");
        R.textContent = "\u2713 Aplicado", R.style.background = "#4caf50", setTimeout(() => {
          R.textContent = "Aplicar", R.style.background = "var(--fem-heading)";
        }, 1500);
      });
      const H = d ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const h = Ro(ho(s[1], s[0])), u = ((_a3 = a.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, w = ((_b2 = a.areas) == null ? void 0 : _b2.get(t)) ?? 0, L = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, R = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, W = ((_e3 = a.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, g = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return Pa(u, w, L, R, W, g, h);
      })() : void 0;
      Zt.querySelectorAll("[data-full]").forEach((h) => {
        h.addEventListener("click", (u) => {
          u.stopPropagation();
          const w = h.dataset.full;
          if (w === "kLocal" && I) {
            const L = d ? Ps() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Jn(`Elemento ${t} \u2014 Rigidez Local k_local`, L, Yn(I, B), H);
          } else if (w === "T" && A) Jn(`Elemento ${t} \u2014 Transformaci\xF3n T`, S, Yn(A, B));
          else if (w === "kGlobal" && T) {
            const L = d ? Ps() : "<em>Shell 18\xD718</em>";
            Jn(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, L, Yn(T, B), H);
          }
        });
      });
    }
    function Os() {
      const l = [], s = [];
      for (let y = 0; y <= 8; y++) {
        const p = y / 8, v = 30 * p, A = 12 * (1 - p) * (1 - p * 0.3) / 2, T = l.length;
        if (l.push([
          -A,
          -A,
          v
        ]), l.push([
          A,
          -A,
          v
        ]), l.push([
          A,
          A,
          v
        ]), l.push([
          -A,
          A,
          v
        ]), s.push([
          T,
          T + 1
        ]), s.push([
          T + 1,
          T + 2
        ]), s.push([
          T + 2,
          T + 3
        ]), s.push([
          T + 3,
          T
        ]), y > 0 && y < 8 && (s.push([
          T,
          T + 2
        ]), s.push([
          T + 1,
          T + 3
        ])), y > 0) {
          const B = T - 4;
          for (let H = 0; H < 4; H++) s.push([
            B + H,
            T + H
          ]);
          s.push([
            B,
            T + 1
          ]), s.push([
            B + 1,
            T + 2
          ]), s.push([
            B + 2,
            T + 3
          ]), s.push([
            B + 3,
            T
          ]);
        }
      }
      const d = /* @__PURE__ */ new Map();
      for (let y = 0; y < 4; y++) d.set(y, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const a = l.length - 4, r = /* @__PURE__ */ new Map();
      for (let y = 0; y < 4; y++) r.set(a + y, [
        0,
        0,
        -50,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: r
      });
      const f = 2e8, c = 77e6, i = 5e-3, b = 2e-6, E = 1e-6, S = {
        elasticities: new Map(s.map((y, p) => [
          p,
          f
        ])),
        shearModuli: new Map(s.map((y, p) => [
          p,
          c
        ])),
        areas: new Map(s.map((y, p) => [
          p,
          i
        ])),
        momentsOfInertiaZ: new Map(s.map((y, p) => [
          p,
          b
        ])),
        momentsOfInertiaY: new Map(s.map((y, p) => [
          p,
          b
        ])),
        torsionalConstants: new Map(s.map((y, p) => [
          p,
          E
        ]))
      };
      e.elementInputs && (e.elementInputs.val = S);
      try {
        const y = Nt(l, s, {
          supports: d,
          loads: r
        }, S);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Eiffel deform:", y.message);
      }
      setTimeout(() => At(), 50), tt(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function qs() {
      const l = [], s = [];
      for (let S = 0; S <= 20; S++) {
        const y = S / 20, p = 20 * y, v = 20 * (1 - Math.pow(2 * y - 1, 2)), I = 2;
        l.push([
          p,
          -2 / 2,
          v
        ]), l.push([
          p,
          I / 2,
          v
        ]);
      }
      for (let S = 0; S < 20; S++) s.push([
        S * 2,
        (S + 1) * 2
      ]), s.push([
        S * 2 + 1,
        (S + 1) * 2 + 1
      ]), s.push([
        S * 2,
        S * 2 + 1
      ]), s.push([
        S * 2,
        (S + 1) * 2 + 1
      ]), s.push([
        S * 2 + 1,
        (S + 1) * 2
      ]);
      s.push([
        20 * 2,
        20 * 2 + 1
      ]);
      const d = /* @__PURE__ */ new Map();
      d.set(0, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), d.set(1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), d.set(20 * 2, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), d.set(20 * 2 + 1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const a = /* @__PURE__ */ new Map();
      for (let S = 0; S <= 20; S++) a.set(S * 2, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]), a.set(S * 2 + 1, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: a
      });
      const r = 2e8, f = 77e6, c = 0.01, i = 5e-6, b = 2e-6, E = {
        elasticities: new Map(s.map((S, y) => [
          y,
          r
        ])),
        shearModuli: new Map(s.map((S, y) => [
          y,
          f
        ])),
        areas: new Map(s.map((S, y) => [
          y,
          c
        ])),
        momentsOfInertiaZ: new Map(s.map((S, y) => [
          y,
          i
        ])),
        momentsOfInertiaY: new Map(s.map((S, y) => [
          y,
          i
        ])),
        torsionalConstants: new Map(s.map((S, y) => [
          y,
          b
        ]))
      };
      e.elementInputs && (e.elementInputs.val = E);
      try {
        const S = Nt(l, s, {
          supports: d,
          loads: a
        }, E);
        S && e.deformOutputs && (e.deformOutputs.val = S);
      } catch (S) {
        console.warn("Arco:", S.message);
      }
      setTimeout(() => At(), 50), tt(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function _s() {
      const d = [], a = [];
      for (let p = 0; p <= 16; p++) {
        const v = 60 * p / 16;
        d.push([
          v,
          -6 / 2,
          8
        ]), d.push([
          v,
          6 / 2,
          8
        ]);
      }
      const r = d.length;
      for (let p = 0; p < 16; p++) a.push([
        p * 2,
        (p + 1) * 2
      ]), a.push([
        p * 2 + 1,
        (p + 1) * 2 + 1
      ]), a.push([
        p * 2,
        p * 2 + 1
      ]);
      a.push([
        16 * 2,
        16 * 2 + 1
      ]);
      const f = [
        Math.round(16 / 3),
        Math.round(2 * 16 / 3)
      ], c = [];
      for (const p of f) {
        const v = 60 * p / 16, I = d.length;
        d.push([
          v,
          -6 / 2,
          0
        ]);
        const A = d.length;
        d.push([
          v,
          6 / 2,
          0
        ]);
        const T = d.length;
        d.push([
          v,
          -6 / 2,
          28
        ]);
        const B = d.length;
        d.push([
          v,
          6 / 2,
          28
        ]), c.push(T, B), a.push([
          I,
          p * 2
        ]), a.push([
          p * 2,
          T
        ]), a.push([
          A,
          p * 2 + 1
        ]), a.push([
          p * 2 + 1,
          B
        ]), a.push([
          T,
          B
        ]);
      }
      for (const p of c) {
        const v = d[p][0];
        for (let I = 0; I <= 16; I++) {
          const A = 60 * I / 16;
          if (Math.abs(A - v) > 60 * 0.05 && Math.abs(A - v) < 60 * 0.45) {
            const T = d[p][1] < 0 ? I * 2 : I * 2 + 1;
            I % 2 === 0 && a.push([
              p,
              T
            ]);
          }
        }
      }
      const i = /* @__PURE__ */ new Map();
      i.set(0, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), i.set(1, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), i.set(16 * 2, [
        false,
        true,
        true,
        false,
        false,
        false
      ]), i.set(16 * 2 + 1, [
        false,
        true,
        true,
        false,
        false,
        false
      ]);
      for (let p = r; p < r + f.length * 4; p += 4) i.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), i.set(p + 1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const b = /* @__PURE__ */ new Map();
      for (let p = 0; p <= 16; p++) b.set(p * 2, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]), b.set(p * 2 + 1, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]);
      e.nodes.val = d, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: b
      });
      const E = 2e8, S = 77e6, y = {
        elasticities: new Map(a.map((p, v) => [
          v,
          E
        ])),
        shearModuli: new Map(a.map((p, v) => [
          v,
          S
        ])),
        areas: new Map(a.map((p, v) => [
          v,
          v < 16 * 3 + 1 ? 0.02 : 1e-3
        ])),
        momentsOfInertiaZ: new Map(a.map((p, v) => [
          v,
          5e-5
        ])),
        momentsOfInertiaY: new Map(a.map((p, v) => [
          v,
          2e-5
        ])),
        torsionalConstants: new Map(a.map((p, v) => [
          v,
          1e-5
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const p = Nt(d, a, {
          supports: i,
          loads: b
        }, y);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Puente:", p.message);
      }
      setTimeout(() => At(), 50), tt(), console.log(`Puente atirantado: ${d.length} nodos, ${a.length} elem, span=60m`);
    }
    function Bs() {
      const d = [], a = [];
      for (let v = 0; v <= 12; v++) {
        const I = v * 3.5, A = v * 5 * Math.PI / 180;
        for (let T = 0; T < 6; T++) {
          const B = A + 2 * Math.PI * T / 6, H = 5 * Math.cos(B), h = 5 * Math.sin(B);
          d.push([
            H,
            h,
            I
          ]);
        }
      }
      for (let v = 0; v <= 12; v++) {
        const I = v * 6;
        for (let A = 0; A < 6; A++) a.push([
          I + A,
          I + (A + 1) % 6
        ]);
        if (v < 12) {
          const A = (v + 1) * 6;
          for (let T = 0; T < 6; T++) a.push([
            I + T,
            A + T
          ]), a.push([
            I + T,
            A + (T + 1) % 6
          ]);
        }
      }
      for (let v = 0; v <= 12; v++) {
        const I = d.length;
        d.push([
          0,
          0,
          v * 3.5
        ]);
        const A = v * 6;
        for (let T = 0; T < 6; T++) a.push([
          I,
          A + T
        ]);
      }
      const r = 13 * 6;
      for (let v = 0; v < 12; v++) a.push([
        r + v,
        r + v + 1
      ]);
      const f = /* @__PURE__ */ new Map();
      for (let v = 0; v < 6; v++) f.set(v, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      f.set(r, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const c = /* @__PURE__ */ new Map();
      for (let v = 1; v <= 12; v++) {
        const I = 10 * v / 12, A = v * 6;
        for (let T = 0; T < 6; T++) c.set(A + T, [
          I,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = d, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: f,
        loads: c
      });
      const i = 2e8, b = 77e6, E = 8e-3, S = 1e-5, y = 5e-6, p = {
        elasticities: new Map(a.map((v, I) => [
          I,
          i
        ])),
        shearModuli: new Map(a.map((v, I) => [
          I,
          b
        ])),
        areas: new Map(a.map((v, I) => [
          I,
          E
        ])),
        momentsOfInertiaZ: new Map(a.map((v, I) => [
          I,
          S
        ])),
        momentsOfInertiaY: new Map(a.map((v, I) => [
          I,
          S
        ])),
        torsionalConstants: new Map(a.map((v, I) => [
          I,
          y
        ]))
      };
      e.elementInputs && (e.elementInputs.val = p);
      try {
        const v = Nt(d, a, {
          supports: f,
          loads: c
        }, p);
        v && e.deformOutputs && (e.deformOutputs.val = v);
      } catch (v) {
        console.warn("Twisted:", v.message);
      }
      setTimeout(() => At(), 50), tt(), console.log(`Torre Twist: ${d.length} nodos, ${a.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function Ds() {
      const s = [], d = [];
      for (let p = 0; p <= 20; p++) {
        const v = p / 20, I = p * 3;
        let A = 8 * (1 - v * 0.7);
        v > 0.4 && (A *= 0.85), v > 0.7 && (A *= 0.7);
        const T = s.length;
        s.push([
          0,
          0,
          I
        ]);
        for (let B = 0; B < 3; B++) {
          const H = B * 2 * Math.PI / 3 - Math.PI / 2, h = A * Math.cos(H), u = A * Math.sin(H), w = s.length;
          s.push([
            h,
            u,
            I
          ]), d.push([
            T,
            w
          ]);
          const L = s.length;
          s.push([
            h * 0.5,
            u * 0.5,
            I
          ]), d.push([
            T,
            L
          ]), d.push([
            L,
            w
          ]);
        }
        for (let B = 0; B < 3; B++) {
          const H = T + 1 + B * 2, h = T + 1 + (B + 1) % 3 * 2;
          d.push([
            H,
            h
          ]);
        }
        if (p < 20) {
          const H = T + 7;
          d.push([
            T,
            H
          ]);
          for (let h = 0; h < 3; h++) d.push([
            T + 1 + h * 2,
            H + 1 + h * 2
          ]), d.push([
            T + 2 + h * 2,
            H + 2 + h * 2
          ]), d.push([
            T + 1 + h * 2,
            H + 2 + h * 2
          ]);
        }
      }
      const a = /* @__PURE__ */ new Map(), r = 1 + 3 * 2;
      for (let p = 0; p < r; p++) a.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const f = /* @__PURE__ */ new Map();
      for (let p = 1; p <= 20; p++) {
        const v = p * r, I = 5 * p / 20;
        f.set(v, [
          I,
          0,
          -10,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = s, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: f
      });
      const c = 35e6, i = 14e6, b = 0.02, E = 5e-5, S = 2e-5, y = {
        elasticities: new Map(d.map((p, v) => [
          v,
          c
        ])),
        shearModuli: new Map(d.map((p, v) => [
          v,
          i
        ])),
        areas: new Map(d.map((p, v) => [
          v,
          b
        ])),
        momentsOfInertiaZ: new Map(d.map((p, v) => [
          v,
          E
        ])),
        momentsOfInertiaY: new Map(d.map((p, v) => [
          v,
          E
        ])),
        torsionalConstants: new Map(d.map((p, v) => [
          v,
          S
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const p = Nt(s, d, {
          supports: a,
          loads: f
        }, y);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Burj:", p.message);
      }
      setTimeout(() => At(), 50), tt(), console.log(`Burj Khalifa: ${s.length} nodos, ${d.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function Hs() {
      const t = [], o = [];
      for (let b = 0; b < 3; b++) {
        const E = b * 12, S = 15 - b * 2, y = 20 - b * 3, p = 8 - b, v = t.length;
        for (let A = 0; A <= 4; A++) {
          const T = A / 4, B = -p / 2 + p * T, H = y * (1 - T * T * 0.3);
          for (let h = 0; h <= 12; h++) {
            const u = h / 12, w = E + H * u, L = S * Math.sin(Math.PI * u) * (1 - T * T * 0.5), R = B;
            t.push([
              w,
              R,
              L
            ]);
          }
        }
        const I = 13;
        for (let A = 0; A < 4; A++) for (let T = 0; T < 12; T++) {
          const B = v + A * I + T, H = v + A * I + T + 1, h = v + (A + 1) * I + T + 1, u = v + (A + 1) * I + T;
          o.push([
            B,
            H,
            h,
            u
          ]);
        }
      }
      const s = /* @__PURE__ */ new Map();
      for (let b = 0; b < t.length; b++) t[b][2] < 0.5 && s.set(b, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const d = /* @__PURE__ */ new Map();
      for (let b = 0; b < t.length; b++) t[b][2] > 2 && d.set(b, [
        0,
        0,
        -5,
        0,
        0,
        0
      ]);
      e.nodes.val = t, e.elements.val = o, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: d
      });
      const a = 35e6, r = 0.2, f = 0.15, c = a / (2 * (1 + r)), i = {
        elasticities: new Map(o.map((b, E) => [
          E,
          a
        ])),
        poissonsRatios: new Map(o.map((b, E) => [
          E,
          r
        ])),
        thicknesses: new Map(o.map((b, E) => [
          E,
          f
        ])),
        shearModuli: new Map(o.map((b, E) => [
          E,
          c
        ]))
      };
      e.elementInputs && (e.elementInputs.val = i);
      try {
        const b = Nt(t, o, {
          supports: s,
          loads: d
        }, i);
        b && e.deformOutputs && (e.deformOutputs.val = b);
      } catch (b) {
        console.warn("Opera:", b.message);
      }
      setTimeout(() => At(), 50), tt(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function js() {
      const l = [], s = [];
      for (let y = 0; y <= 15; y++) {
        const p = y / 15, v = y * 3.5, I = 5 * (0.6 + 0.4 * Math.sin(Math.PI * p));
        if (p > 0.9) {
          const A = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (p - 0.9) * 8);
          for (let T = 0; T < 12; T++) {
            const B = 2 * Math.PI * T / 12;
            l.push([
              Math.max(A, 1) * Math.cos(B),
              Math.max(A, 1) * Math.sin(B),
              v
            ]);
          }
        } else for (let A = 0; A < 12; A++) {
          const T = 2 * Math.PI * A / 12;
          l.push([
            I * Math.cos(T),
            I * Math.sin(T),
            v
          ]);
        }
      }
      for (let y = 0; y < 15; y++) {
        const p = y * 12, v = (y + 1) * 12;
        for (let A = 0; A < 12; A++) s.push([
          p + A,
          p + (A + 1) % 12
        ]);
        const I = y % 2 === 0 ? 1 : -1;
        for (let A = 0; A < 12; A++) {
          const T = (A + I + 12) % 12;
          s.push([
            p + A,
            v + T
          ]), s.push([
            p + A,
            v + A
          ]);
        }
      }
      const d = 15 * 12;
      for (let y = 0; y < 12; y++) s.push([
        d + y,
        d + (y + 1) % 12
      ]);
      const a = /* @__PURE__ */ new Map();
      for (let y = 0; y < 12; y++) a.set(y, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const r = /* @__PURE__ */ new Map();
      for (let y = 1; y <= 15; y++) {
        const p = y * 12, v = 3 * y / 15;
        for (let I = 0; I < 12; I += 3) r.set(p + I, [
          v,
          0,
          -8,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: r
      });
      const f = 2e8, c = 77e6, i = 6e-3, b = 8e-6, E = 4e-6, S = {
        elasticities: new Map(s.map((y, p) => [
          p,
          f
        ])),
        shearModuli: new Map(s.map((y, p) => [
          p,
          c
        ])),
        areas: new Map(s.map((y, p) => [
          p,
          i
        ])),
        momentsOfInertiaZ: new Map(s.map((y, p) => [
          p,
          b
        ])),
        momentsOfInertiaY: new Map(s.map((y, p) => [
          p,
          b
        ])),
        torsionalConstants: new Map(s.map((y, p) => [
          p,
          E
        ]))
      };
      e.elementInputs && (e.elementInputs.val = S);
      try {
        const y = Nt(l, s, {
          supports: a,
          loads: r
        }, S);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Diagrid:", y.message);
      }
      setTimeout(() => At(), 50), tt(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function Na() {
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
    function Oa() {
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
        const o = (v) => {
          var _a3;
          return parseFloat(((_a3 = t.querySelector(`#${v}`)) == null ? void 0 : _a3.value) || "0");
        }, n = o("po-colB"), l = o("po-colH"), s = o("po-fc") * 1e3, d = o("po-fy") * 1e3, a = o("po-H"), r = o("po-L"), f = o("po-As") * 1e-4, c = o("po-nbar"), i = o("po-drift") / 100, b = o("po-ncycles"), E = t.querySelector("#pushover-status");
        E.textContent = "Generando historia de desplazamientos...";
        const S = [], y = i * a, p = 40;
        for (let v = 1; v <= b; v++) {
          const I = y * v / b;
          for (let A = 0; A <= p; A++) S.push(I * Math.sin(2 * Math.PI * A / p));
        }
        E.textContent = `Resolviendo pushover (${S.length} pasos)...`;
        try {
          const { cyclicPushover: v } = await ta(async () => {
            const { cyclicPushover: A } = await import("./cyclicPushoverCpp-BipHDx7d.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            });
            return {
              cyclicPushover: A
            };
          }, __vite__mapDeps([5,4])), I = await v({
            colHeight: a,
            beamLength: r,
            col: {
              b: n,
              h: l,
              fpc: -s,
              Fy_rebar: d,
              E_rebar: 2e8,
              rebar_area: f,
              cover: 0.04,
              n_rebar: c
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -s,
              Fy_rebar: d,
              E_rebar: 2e8,
              rebar_area: f * 0.7,
              cover: 0.03,
              n_rebar: c
            },
            dispHistory: S
          });
          E.textContent = `Completado: ${I.nSteps} pasos`, qa(t.querySelector("#pushover-canvas"), I.displacements, I.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${d / 1e3}MPa`);
        } catch (v) {
          E.textContent = `Error: ${v.message}`, console.error("Pushover failed:", v);
        }
      });
    }
    function qa(t, o, n, l) {
      const s = t.getContext("2d");
      if (!s || o.length === 0) return;
      const d = t.width, a = t.height, r = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, f = d - r.left - r.right, c = a - r.top - r.bottom;
      s.fillStyle = "#111118", s.fillRect(0, 0, d, a);
      let i = Math.min(...o), b = Math.max(...o), E = Math.min(...n), S = Math.max(...n);
      i === b && (i -= 0.01, b += 0.01), E === S && (E -= 1, S += 1);
      const y = b - i, p = S - E, v = (B) => r.left + (B - i) / y * f, I = (B) => r.top + c - (B - E) / p * c;
      s.strokeStyle = "#333", s.lineWidth = 0.5, i < 0 && b > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(v(0), r.top), s.lineTo(v(0), r.top + c), s.stroke()), E < 0 && S > 0 && (s.beginPath(), s.moveTo(r.left, I(0)), s.lineTo(r.left + f, I(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(v(o[0]), I(n[0]));
      for (let B = 1; B < o.length; B++) s.lineTo(v(o[B]), I(n[B]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", r.left + f / 2, a - 5), s.save(), s.translate(12, r.top + c / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(l, d / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const A = y / 5;
      for (let B = 0; B <= 5; B++) {
        const H = i + A * B;
        s.fillText((H * 1e3).toFixed(1), v(H), a - r.bottom + 15);
      }
      s.textAlign = "right";
      const T = p / 5;
      for (let B = 0; B <= 5; B++) {
        const H = E + T * B;
        s.fillText(H.toFixed(0), r.left - 5, I(H) + 3);
      }
    }
    let en = null;
    function _a() {
      if (en) {
        en.remove(), en = null;
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
    `, document.body.appendChild(t), en = t, t.querySelector("#nl-close").addEventListener("click", () => {
        t.remove(), en = null;
      }), t.querySelector("#nl-test").addEventListener("click", () => Ba(t));
    }
    function Ba(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), s = parseFloat(t.querySelector("#nl-r0").value), d = parseFloat(t.querySelector("#nl-amp").value), a = parseInt(t.querySelector("#nl-cycles").value), r = 100, f = [];
      for (let V = 0; V < a; V++) {
        const ae = d * (1 + V * 0.5);
        for (let Z = 0; Z < r; Z++) {
          const K = Z / r * 2 * Math.PI;
          f.push(ae * Math.sin(K));
        }
      }
      const c = o / n, i = l * n;
      let b = 0, E = 0, S = -c, y = c, p = 0, v = 0, I = 0, A = 0, T = 0, B = 0;
      const H = [];
      for (const V of f) {
        let ae = S, Z = y, K = p, de = v, ie = I, Ee = A, Ne = T, q = B, fe;
        const oe = V - b;
        if (Math.abs(oe) < 1e-20) {
          H.push(E);
          continue;
        }
        if ((q === 0 || q === 3) && (oe < 0 ? (q = 2, de = -c, ie = -o, K = de, Ee = 0, Ne = 0) : (q = 1, de = c, ie = o, K = de, Ee = 0, Ne = 0)), q === 2 && oe > 0) {
          q = 1, Ee = b, Ne = E, b < ae && (ae = b);
          const Se = (Z - ae) / (2 * 1 * c), We = 1 + 0 * Math.pow(Se, 0.8);
          de = (o * We - i * c * We - Ne + n * Ee) / (n - i), ie = o * We + i * (de - c * We), K = Z;
        } else if (q === 1 && oe < 0) {
          q = 2, Ee = b, Ne = E, b > Z && (Z = b);
          const Se = (Z - ae) / (2 * 1 * c), We = 1 + 0 * Math.pow(Se, 0.8);
          de = (-o * We + i * c * We - Ne + n * Ee) / (n - i), ie = -o * We + i * (de + c * We), K = ae;
        }
        const pe = Math.abs((K - de) / c);
        let Q = s - 0.925 * pe / (0.15 + pe);
        Q < 0.1 && (Q = 0.1);
        const ue = (V - Ee) / (de - Ee), we = 1 + Math.pow(Math.abs(ue), Q), se = Math.pow(we, 1 / Q);
        fe = l * ue + (1 - l) * ue / se, fe = fe * (ie - Ne) + Ne, H.push(fe), b = V, E = fe, S = ae, y = Z, p = K, v = de, I = ie, A = Ee, T = Ne, B = q;
      }
      const h = t.querySelector("#nl-canvas"), u = h.getContext("2d"), w = h.width, L = h.height;
      u.clearRect(0, 0, w, L);
      const R = Math.max(...f.map(Math.abs)), W = Math.max(...H.map(Math.abs)), g = (w - 40) / (2 * R), M = (L - 40) / (2 * W), x = w / 2, C = L / 2;
      u.strokeStyle = "#444", u.lineWidth = 1, u.beginPath(), u.moveTo(20, C), u.lineTo(w - 20, C), u.stroke(), u.beginPath(), u.moveTo(x, 20), u.lineTo(x, L - 20), u.stroke(), u.fillStyle = "#888", u.font = "10px monospace", u.textAlign = "center", u.fillText("\u03B5 (strain)", w - 40, C - 5), u.fillText("\u03C3 (stress)", x + 30, 15), u.fillText(`\xB1${(R * 100).toFixed(1)}%`, w - 30, C + 12), u.fillText(`\xB1${(W / 1e3).toFixed(0)} MPa`, x + 40, 30), u.strokeStyle = "#00ccff", u.lineWidth = 1.5, u.beginPath();
      for (let V = 0; V < f.length; V++) {
        const ae = x + f[V] * g, Z = C - H[V] * M;
        V === 0 ? u.moveTo(ae, Z) : u.lineTo(ae, Z);
      }
      u.stroke(), u.strokeStyle = "#ff333366", u.lineWidth = 1, u.setLineDash([
        4,
        4
      ]), u.beginPath(), u.moveTo(20, C - o * M), u.lineTo(w - 20, C - o * M), u.stroke(), u.beginPath(), u.moveTo(20, C + o * M), u.lineTo(w - 20, C + o * M), u.stroke(), u.setLineDash([]), u.fillStyle = "#ff6666", u.font = "9px monospace", u.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, w - 50, C - o * M - 5);
      const X = t.querySelector("#nl-info");
      X.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${a} ciclos, amp=${(d * 100).toFixed(1)}%`;
    }
    function Da() {
      var _a2, _b, _c, _d;
      const t = document.querySelector(".rpt-overlay");
      if (t) {
        t.remove();
        return;
      }
      const o = e.nodes.val, n = e.elements.val, l = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, s = ((_b = e.nodeInputs) == null ? void 0 : _b.val) || {}, d = (_c = e.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = e.analyzeOutputs) == null ? void 0 : _d.val, !o.length || !n.length) {
        alert("No hay modelo cargado");
        return;
      }
      const a = fl({
        nodes: o,
        elements: n,
        nodeInputs: s,
        elementInputs: l,
        deformOutputs: d
      });
      document.body.appendChild(a);
    }
    let Bo = null;
    function Ha(t) {
      Bo && Bo.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = mn(), l = bn(), s = Object.entries(n).map(([c, i]) => `<option value="${i}">${c}</option>`).join(""), d = Object.entries(l).map(([c, i]) => `<option value="${i}">${c}</option>`).join("");
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
    `, document.body.appendChild(o), Bo = o;
      const a = o.querySelector("#asgn-type"), r = o.querySelector("#asgn-params");
      function f() {
        const c = a.value;
        let i = "";
        c === "rect" ? i = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : c === "circ" ? i = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : c === "W" ? i = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${s}</select>` : c === "HSS" ? i = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${d}</select>` : c === "I-param" ? i = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <label>bf(m):<input id="ap-bf" type="number" value="0.20" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hf" type="number" value="0.40" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tf(m):<input id="ap-tf" type="number" value="0.015" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tw(m):<input id="ap-tw" type="number" value="0.010" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>` : c === "tubular" && (i = `<div style="display:flex;gap:6px;">
          <label>b(m):<input id="ap-bc" type="number" value="0.20" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hc" type="number" value="0.30" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>t(m):<input id="ap-t" type="number" value="0.008" step="0.001" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>`), r.innerHTML = i;
      }
      a.addEventListener("change", f), f(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), Bo = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h;
        const c = a.value, i = {
          secType: c
        };
        c === "rect" ? (i.b = parseFloat(o.querySelector("#ap-b").value), i.h = parseFloat(o.querySelector("#ap-h").value), i.material = 0) : c === "circ" ? (i.b = parseFloat(o.querySelector("#ap-d").value), i.material = 0) : c === "W" || c === "HSS" ? (i.profileIdx = parseInt(o.querySelector("#ap-profile").value), i.material = 1) : c === "I-param" ? (i.bf = parseFloat(o.querySelector("#ap-bf").value), i.hf = parseFloat(o.querySelector("#ap-hf").value), i.tf = parseFloat(o.querySelector("#ap-tf").value), i.tw = parseFloat(o.querySelector("#ap-tw").value), i.material = 1) : c === "tubular" && (i.bc = parseFloat(o.querySelector("#ap-bc").value), i.hc = parseFloat(o.querySelector("#ap-hc").value), i.t = parseFloat(o.querySelector("#ap-t").value), i.material = 1);
        const b = new Array(12).fill(false), E = new Array(12).fill(0);
        o.querySelectorAll("input[data-asgn-rel]").forEach((S) => {
          b[parseInt(S.dataset.asgnRel)] = S.checked;
        }), o.querySelectorAll("input[data-asgn-spr]").forEach((S) => {
          const y = parseFloat(S.value);
          y > 0 && (E[parseInt(S.dataset.asgnSpr)] = y);
        }), i.releases12 = b, i.springs12 = E, i.releaseRotStart = b[4] || b[5], i.releaseRotEnd = b[10] || b[11], i.releaseAxial = b[0], i.releaseTorsion = b[3], i.modI = parseFloat((_a2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _a2.value) || 1, i.modA = parseFloat((_b = o.querySelector("#asgn-mod-a")) == null ? void 0 : _b.value) || 1, i.modJ = parseFloat((_c = o.querySelector("#asgn-mod-j")) == null ? void 0 : _c.value) || 1, i.modAs2 = parseFloat((_d = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _d.value) ?? 1, i.modAs3 = parseFloat((_e2 = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _e2.value) ?? 1, i.modI3 = parseFloat((_f = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _f.value) || 1, i.modMass = parseFloat((_g = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _g.value) || 1, i.modWeight = parseFloat((_h = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _h.value) || 1, t.forEach((S) => ve.set(S, {
          ...i
        })), o.remove(), Bo = null, xo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((c) => ve.delete(c)), o.remove(), Bo = null, xo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let Do = null;
    function ja(t) {
      var _a2, _b, _c;
      Do && Do.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], s = o[n[1]], d = Math.abs(s[0] - l[0]), a = Math.abs(s[1] - l[1]), r = Math.abs(s[2] - l[2]), f = a > d && a > r, c = Math.sqrt(d * d + a * a + r * r), i = ee.get(t) ?? 0, b = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), E = (b == null ? void 0 : b.name) || (b ? `${b.type} ${((b.b ?? 0) * 100).toFixed(0)}x${((b.h ?? 0) * 100).toFixed(0)}` : "\u2014"), S = document.createElement("div");
      S.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", S.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${f ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${i + 1} &nbsp;
        <span style="color:#888;">L:</span> ${c.toFixed(3)} m
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Secci\xF3n:</span> <span style="color:#00ccff;">${E}</span>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Nodos:</span> ${n[0]} \u2192 ${n[1]}
      </div>
      <hr style="border-color:#333;margin:12px 0;">
      <div style="display:flex;gap:8px;">
        <button id="ep-delete" style="flex:1;padding:8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F5D1} Eliminar</button>
        <button id="ep-inspect" style="flex:1;padding:8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F50D} Inspect</button>
      </div>
    `, document.body.appendChild(S), Do = S, S.querySelector("#ep-close").addEventListener("click", () => {
        S.remove(), Do = null, Ao();
      }), S.querySelector("#ep-delete").addEventListener("click", () => {
        J.add(t), S.remove(), Do = null, Ao(), Pe();
      }), S.querySelector("#ep-inspect").addEventListener("click", () => {
        S.remove(), Do = null, Ns(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const o = t.querySelector("canvas");
      if (!o) return;
      let n = null, l = null;
      const s = 5;
      function d(f) {
        const c = et();
        if (!c) return null;
        const i = c.controls.object, b = new Oe(f[0], f[1], f[2]);
        b.project(i);
        const E = o.getBoundingClientRect();
        return {
          x: (b.x + 1) / 2 * E.width,
          y: (-b.y + 1) / 2 * E.height
        };
      }
      function a(f, c, i, b, E) {
        const S = Math.min(f, i), y = Math.max(f, i), p = Math.min(c, b), v = Math.max(c, b), I = e.nodes.val, A = e.elements.val, T = [];
        for (let B = 0; B < A.length; B++) {
          const H = A[B], h = H.map((u) => d(I[u])).filter(Boolean);
          if (h.length !== 0) if (E) h.every((w) => w.x >= S && w.x <= y && w.y >= p && w.y <= v) && T.push(B);
          else {
            if (h.some((w) => w.x >= S && w.x <= y && w.y >= p && w.y <= v)) {
              T.push(B);
              continue;
            }
            if (H.length === 2) {
              const w = h[0], L = h[1];
              r(w.x, w.y, L.x, L.y, S, p, y, v) && T.push(B);
            }
          }
        }
        return T;
      }
      function r(f, c, i, b, E, S, y, p) {
        const v = (A, T) => A >= E && A <= y && T >= S && T <= p;
        if (v(f, c) || v(i, b)) return true;
        const I = (A, T, B, H, h, u, w, L) => {
          const R = (B - A) * (L - u) - (H - T) * (w - h);
          if (Math.abs(R) < 1e-10) return false;
          const W = ((h - A) * (L - u) - (u - T) * (w - h)) / R, g = ((h - A) * (H - T) - (u - T) * (B - A)) / R;
          return W >= 0 && W <= 1 && g >= 0 && g <= 1;
        };
        return I(f, c, i, b, E, S, y, S) || I(f, c, i, b, y, S, y, p) || I(f, c, i, b, E, p, y, p) || I(f, c, i, b, E, S, E, p);
      }
      o.addEventListener("mousedown", (f) => {
        Jt && (n = {
          x: f.offsetX,
          y: f.offsetY
        });
      }), o.addEventListener("mousemove", (f) => {
        if (co) {
          const i = et();
          if (!i) return;
          const b = Ls(f.clientX, f.clientY, i.camera, i.rendererElm);
          if ($t.track && b.snapType === "node" && b.nodeIdx !== null && b.nodeIdx !== To && Ia(b.nodeIdx), $t.track && To !== null && b.worldPos && b.snapType !== "node") {
            const E = ka(b.worldPos, To);
            E && (b.worldPos = E, b.snapType = "grid");
          }
          if (To !== null && b.worldPos) {
            const E = e.nodes.val[To];
            E && zs(f.clientX, f.clientY, new Oe(...E), b.worldPos);
          } else if (gt !== null && b.worldPos) {
            const E = e.nodes.val[gt];
            E && zs(f.clientX, f.clientY, new Oe(...E), b.worldPos);
          } else eo && (eo.remove(), eo = null);
          b.nodeIdx, Cs(b), o.style.cursor = b.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!no && !Jt) return;
        if (Jt && n) {
          const i = f.offsetX - n.x, b = f.offsetY - n.y;
          if (Math.abs(i) > s || Math.abs(b) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const E = i > 0, S = Math.min(n.x, f.offsetX), y = Math.min(n.y, f.offsetY), p = Math.abs(i), v = Math.abs(b);
            l.style.left = S + "px", l.style.top = y + "px", l.style.width = p + "px", l.style.height = v + "px", l.style.border = E ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = E ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const c = Wn(f);
        if (c >= 0) Rs(c), o.style.cursor = "pointer";
        else {
          if (Vt) {
            const i = et();
            i == null ? void 0 : i.scene.remove(Vt), Vt = null, i == null ? void 0 : i.render();
          }
          o.style.cursor = Jt ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (f) => {
        if (Jt && n) {
          const c = f.offsetX - n.x, i = f.offsetY - n.y;
          if (Math.abs(c) > s || Math.abs(i) > s) {
            const b = c > 0, E = a(n.x, n.y, f.offsetX, f.offsetY, b);
            f.ctrlKey || f.metaKey || (bt.clear(), Mo()), E.forEach((y) => {
              bt.has(y) || (bt.add(y), Dn(y));
            }), wo();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (f) => {
        if (co) {
          const c = et();
          if (!c) return;
          const i = Ls(f.clientX, f.clientY, c.camera, c.rendererElm);
          (i.worldPos || i.nodeIdx !== null) && (Aa(i), Cs(i));
          return;
        }
        if (Jt) {
          if (l) return;
          const c = Wn(f), i = f.ctrlKey || f.metaKey;
          if (c >= 0) {
            if (i) if (bt.has(c)) {
              bt.delete(c);
              const b = $o.findIndex((E) => E.__elemIdx === c);
              if (b >= 0) {
                const E = et();
                E == null ? void 0 : E.scene.remove($o[b]), $o[b].geometry.dispose(), $o[b].material.dispose(), $o.splice(b, 1), E == null ? void 0 : E.render();
              }
            } else bt.add(c), Dn(c);
            else bt.clear(), Mo(), bt.add(c), Dn(c);
            wo();
          } else i || (bt.clear(), Mo(), wo());
          return;
        }
        if (no) {
          const c = Wn(f);
          c >= 0 && (Rs(c), ja(c));
        }
      });
    }, 500), Jo.derive(() => {
      var _a2;
      e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, tt();
    }), Qe.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !ze), ze = t, (_a2 = Te.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", ze), ze) {
        const n = et();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (Je = n.settings.loads.rawVal, n.settings.loads.val = false), Ln(), Te.querySelector("#cad3d-mode-prev").style.display = "", Te.querySelector("#cad3d-mode-next").style.display = "", Te.querySelector("#cad3d-mode-label").style.display = "";
      } else Cn(), Te.querySelector("#cad3d-mode-prev").style.display = "none", Te.querySelector("#cad3d-mode-next").style.display = "none", Te.querySelector("#cad3d-mode-label").style.display = "none", k && k !== "placa-q4" && k !== "placa-3q" && Pe(), setTimeout(() => {
        var _a3;
        const n = et();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && Je && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${ze ? "ON" : "OFF"}`);
    }, Qe.setMode = (t) => {
      var _a2;
      if (!(ge == null ? void 0 : ge.modeShapes)) {
        console.error("No modal results");
        return;
      }
      Ce = Math.max(0, Math.min(t, ge.modeShapes.length - 1));
      const o = ge.modeShapes[Ce], { extent: n } = vo();
      let l = 0;
      for (let d = 0; d < he.length; d++) {
        const a = o[d * 6] || 0, r = o[d * 6 + 1] || 0, f = o[d * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(a * a + r * r + f * f));
      }
      ke = l > 1e-12 ? n * 0.05 / l : 1, Qo();
      const s = Te.querySelector("#cad3d-mode-label");
      s && ge.frequencies && (s.textContent = `Modo ${Ce + 1} \u2014 ${ge.frequencies[Ce].toFixed(2)} Hz`), console.log(`Modo ${Ce + 1}: f = ${(_a2 = ge.frequencies) == null ? void 0 : _a2[Ce].toFixed(4)} Hz`);
    }, window.cad = Qe, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(Te), document.body.appendChild(qe.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (nt("edificio"), Pe(), Is("edificio"));
    }, 100);
    const tn = document.createElement("button");
    tn.id = "mobile-menu-btn", tn.innerHTML = "\u2630", tn.addEventListener("click", () => {
      const t = document.getElementById("cad3d-panel");
      t && (t.classList.toggle("mobile-open"), tn.innerHTML = t.classList.contains("mobile-open") ? "\u2715" : "\u2630");
    }), document.body.appendChild(tn);
    const fo = document.createElement("button");
    fo.id = "fullscreen-btn", fo.innerHTML = "\u26F6", fo.title = "Pantalla completa", fo.style.cssText = `
    position: fixed; bottom: 20px; right: 78px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #333, #555);
    color: white; border: 3px solid rgba(255,255,255,0.2);
    font-size: 22px; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex; align-items: center; justify-content: center;
  `, fo.addEventListener("mouseenter", () => {
      fo.style.transform = "scale(1.15)";
    }), fo.addEventListener("mouseleave", () => {
      fo.style.transform = "scale(1)";
    }), fo.addEventListener("click", () => {
      document.fullscreenElement ? document.exitFullscreen().catch(() => {
      }) : document.documentElement.requestFullscreen().catch(() => {
      });
    }), document.body.appendChild(fo), document.body.appendChild(wl());
    const Ws = document.createElement("span");
    return Ws.style.display = "none", Ws;
  };
});
export {
  __tla,
  aa as a,
  pl as c,
  Ql as g
};
