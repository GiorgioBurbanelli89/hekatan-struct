var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let Ve, ot, at, it, ct, lt;
let __tla = (async () => {
  let tt, nt, vr;
  tt = "modulepreload";
  nt = function(u, _) {
    return new URL(u, _).href;
  };
  vr = {};
  ot = function(_, l, m) {
    let E = Promise.resolve();
    if (l && l.length > 0) {
      const G = document.getElementsByTagName("link"), C = document.querySelector("meta[property=csp-nonce]"), re = (C == null ? void 0 : C.nonce) || (C == null ? void 0 : C.getAttribute("nonce"));
      E = Promise.allSettled(l.map((B) => {
        if (B = nt(B, m), B in vr) return;
        vr[B] = true;
        const V = B.endsWith(".css"), ie = V ? '[rel="stylesheet"]' : "";
        if (!!m) for (let $ = G.length - 1; $ >= 0; $--) {
          const U = G[$];
          if (U.href === B && (!V || U.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${B}"]${ie}`)) return;
        const L = document.createElement("link");
        if (L.rel = V ? "stylesheet" : tt, V || (L.as = "script"), L.crossOrigin = "", L.href = B, re && L.setAttribute("nonce", re), document.head.appendChild(L), V) return new Promise(($, U) => {
          L.addEventListener("load", $), L.addEventListener("error", () => U(new Error(`Unable to preload CSS for ${B}`)));
        });
      }));
    }
    function g(G) {
      const C = new Event("vite:preloadError", {
        cancelable: true
      });
      if (C.payload = G, window.dispatchEvent(C), !C.defaultPrevented) throw G;
    }
    return E.then((G) => {
      for (const C of G || []) C.status === "rejected" && g(C.reason);
      return _().catch(g);
    });
  };
  Ve = async function(u = {}) {
    var _a, _b, _c, _d, _e2, _f;
    var _;
    (function() {
      var _a2;
      function e(f) {
        f = f.split("-")[0];
        for (var h = f.split(".").slice(0, 3); h.length < 3; ) h.push("00");
        return h = h.map((P, b, v) => P.padStart(2, "0")), h.join("");
      }
      var r = (f) => [
        f / 1e4 | 0,
        (f / 100 | 0) % 100,
        f % 100
      ].join("."), t = 2147483647, o = typeof process < "u" && ((_a2 = process.versions) == null ? void 0 : _a2.node) ? e(process.versions.node) : t;
      if (o < 16e4) throw new Error(`This emscripten-generated code requires node v${r(16e4)} (detected v${r(o)})`);
      var s = typeof navigator < "u" && navigator.userAgent;
      if (s) {
        var a = s.includes("Safari/") && !s.includes("Chrome/") && s.match(/Version\/(\d+\.?\d*\.?\d*)/) ? e(s.match(/Version\/(\d+\.?\d*\.?\d*)/)[1]) : t;
        if (a < 15e4) throw new Error(`This emscripten-generated code requires Safari v${r(15e4)} (detected v${a})`);
        var i = s.match(/Firefox\/(\d+(?:\.\d+)?)/) ? parseFloat(s.match(/Firefox\/(\d+(?:\.\d+)?)/)[1]) : t;
        if (i < 79) throw new Error(`This emscripten-generated code requires Firefox v79 (detected v${i})`);
        var c = s.match(/Chrome\/(\d+(?:\.\d+)?)/) ? parseFloat(s.match(/Chrome\/(\d+(?:\.\d+)?)/)[1]) : t;
        if (c < 85) throw new Error(`This emscripten-generated code requires Chrome v85 (detected v${c})`);
      }
    })();
    var l = u, m = !!globalThis.window, E = !!globalThis.WorkerGlobalScope, g = ((_b = (_a = globalThis.process) == null ? void 0 : _a.versions) == null ? void 0 : _b.node) && ((_c = globalThis.process) == null ? void 0 : _c.type) != "renderer", G = !m && !g && !E;
    if (g) {
      const { createRequire: e } = await ot(() => import("./__vite-browser-external-D7Ct-6yo.js").then((r) => r._), [], import.meta.url);
      var C = e(import.meta.url);
    }
    var re = "./this.program", B = import.meta.url, V = "";
    function ie(e) {
      return l.locateFile ? l.locateFile(e, V) : V + e;
    }
    var Y, L;
    if (g) {
      if (!(((_e2 = (_d = globalThis.process) == null ? void 0 : _d.versions) == null ? void 0 : _e2.node) && ((_f = globalThis.process) == null ? void 0 : _f.type) != "renderer")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
      var $ = C("node:fs");
      B.startsWith("file:") && (V = C("node:path").dirname(C("node:url").fileURLToPath(B)) + "/"), L = (r) => {
        r = q(r) ? new URL(r) : r;
        var t = $.readFileSync(r);
        return d(Buffer.isBuffer(t)), t;
      }, Y = async (r, t = true) => {
        r = q(r) ? new URL(r) : r;
        var o = $.readFileSync(r, t ? void 0 : "utf8");
        return d(t ? Buffer.isBuffer(o) : typeof o == "string"), o;
      }, process.argv.length > 1 && (re = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2);
    } else if (!G) if (m || E) {
      try {
        V = new URL(".", B).href;
      } catch {
      }
      if (!(globalThis.window || globalThis.WorkerGlobalScope)) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
      E && (L = (e) => {
        var r = new XMLHttpRequest();
        return r.open("GET", e, false), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response);
      }), Y = async (e) => {
        if (q(e)) return new Promise((t, o) => {
          var s = new XMLHttpRequest();
          s.open("GET", e, true), s.responseType = "arraybuffer", s.onload = () => {
            if (s.status == 200 || s.status == 0 && s.response) {
              t(s.response);
              return;
            }
            o(s.status);
          }, s.onerror = o, s.send(null);
        });
        var r = await fetch(e, {
          credentials: "same-origin"
        });
        if (r.ok) return r.arrayBuffer();
        throw new Error(r.status + " : " + r.url);
      };
    } else throw new Error("environment detection error");
    var U = console.log.bind(console), T = console.error.bind(console);
    d(!G, "shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");
    var te;
    globalThis.WebAssembly || T("no native wasm support detected");
    var x = false;
    function d(e, r) {
      e || S("Assertion failed" + (r ? ": " + r : ""));
    }
    var q = (e) => e.startsWith("file://");
    function ne() {
      var e = rr();
      d((e & 3) == 0), e == 0 && (e += 4), p[e >> 2] = 34821223, p[e + 4 >> 2] = 2310721022, p[0] = 1668509029;
    }
    function K() {
      if (!x) {
        var e = rr();
        e == 0 && (e += 4);
        var r = p[e >> 2], t = p[e + 4 >> 2];
        (r != 34821223 || t != 2310721022) && S(`Stack overflow! Stack cookie has been overwritten at ${Ie(e)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Ie(t)} ${Ie(r)}`), p[0] != 1668509029 && S("Runtime error: The application has corrupted its heap memory area (address zero)!");
      }
    }
    (() => {
      var e = new Int16Array(1), r = new Int8Array(e.buffer);
      e[0] = 25459, (r[0] !== 115 || r[1] !== 99) && S("Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)");
    })();
    function oe(e) {
      Object.getOwnPropertyDescriptor(l, e) || Object.defineProperty(l, e, {
        configurable: true,
        set() {
          S(`Attempt to set \`Module.${e}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`);
        }
      });
    }
    function k(e) {
      return () => d(false, `call to '${e}' via reference taken before Wasm module initialization`);
    }
    function Z(e) {
      Object.getOwnPropertyDescriptor(l, e) && S(`\`Module.${e}\` was supplied but \`${e}\` not included in INCOMING_MODULE_JS_API`);
    }
    function N(e) {
      return e === "FS_createPath" || e === "FS_createDataFile" || e === "FS_createPreloadedFile" || e === "FS_preloadFile" || e === "FS_unlink" || e === "addRunDependency" || e === "FS_createLazyFile" || e === "FS_createDevice" || e === "removeRunDependency";
    }
    function de(e) {
      le(e);
    }
    function le(e) {
      Object.getOwnPropertyDescriptor(l, e) || Object.defineProperty(l, e, {
        configurable: true,
        get() {
          var r = `'${e}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
          N(e) && (r += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"), S(r);
        }
      });
    }
    var _e, fe, X, Q, ue, p, z, ae = false;
    function J() {
      var e = Xe.buffer;
      X = new Int8Array(e), l.HEAPU8 = Q = new Uint8Array(e), ue = new Int32Array(e), l.HEAPU32 = p = new Uint32Array(e), l.HEAPF64 = new Float64Array(e), z = new BigInt64Array(e), new BigUint64Array(e);
    }
    d(globalThis.Int32Array && globalThis.Float64Array && Int32Array.prototype.subarray && Int32Array.prototype.set, "JS engine does not provide full typed array support");
    function me() {
      if (l.preRun) for (typeof l.preRun == "function" && (l.preRun = [
        l.preRun
      ]); l.preRun.length; ) _r(l.preRun.shift());
      oe("preRun"), Pe(Ue);
    }
    function Ee() {
      d(!ae), ae = true, K(), !l.noFSInit && !n.initialized && n.init(), Ce.__wasm_call_ctors(), n.ignorePermissions = false;
    }
    function ye() {
      if (K(), l.postRun) for (typeof l.postRun == "function" && (l.postRun = [
        l.postRun
      ]); l.postRun.length; ) qe(l.postRun.shift());
      oe("postRun"), Pe(Ye);
    }
    function S(e) {
      var _a2;
      (_a2 = l.onAbort) == null ? void 0 : _a2.call(l, e), e = "Aborted(" + e + ")", T(e), x = true;
      var r = new WebAssembly.RuntimeError(e);
      throw fe == null ? void 0 : fe(r), r;
    }
    function w(e, r) {
      return (...t) => {
        d(ae, `native function \`${e}\` called before runtime initialization`);
        var o = Ce[e];
        return d(o, `exported native function \`${e}\` not found`), d(t.length <= r, `native function \`${e}\` called with ${t.length} args but expects ${r}`), o(...t);
      };
    }
    var H;
    function Se() {
      return l.locateFile ? ie("deform.wasm") : new URL("" + new URL("deform-Blaj5iUA.wasm", import.meta.url).href, import.meta.url).href;
    }
    function A(e) {
      if (e == H && te) return new Uint8Array(te);
      if (L) return L(e);
      throw "both async and sync fetching of the wasm failed";
    }
    async function I(e) {
      if (!te) try {
        var r = await Y(e);
        return new Uint8Array(r);
      } catch {
      }
      return A(e);
    }
    async function W(e, r) {
      try {
        var t = await I(e), o = await WebAssembly.instantiate(t, r);
        return o;
      } catch (s) {
        T(`failed to asynchronously prepare wasm: ${s}`), q(e) && T(`warning: Loading from a file URI (${e}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`), S(s);
      }
    }
    async function ke(e, r, t) {
      if (!e && !q(r) && !g) try {
        var o = fetch(r, {
          credentials: "same-origin"
        }), s = await WebAssembly.instantiateStreaming(o, t);
        return s;
      } catch (a) {
        T(`wasm streaming compile failed: ${a}`), T("falling back to ArrayBuffer instantiation");
      }
      return W(r, t);
    }
    function be() {
      var e = {
        env: mr,
        wasi_snapshot_preview1: mr
      };
      return e;
    }
    async function O() {
      function e(i, c) {
        return Ce = i.exports, et(Ce), J(), Ce;
      }
      var r = l;
      function t(i) {
        return d(l === r, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"), r = null, e(i.instance);
      }
      var o = be();
      if (l.instantiateWasm) return new Promise((i, c) => {
        try {
          l.instantiateWasm(o, (f, h) => {
            i(e(f, h));
          });
        } catch (f) {
          T(`Module.instantiateWasm callback failed with error: ${f}`), c(f);
        }
      });
      H ?? (H = Se());
      var s = await ke(te, H, o), a = t(s);
      return a;
    }
    var Pe = (e) => {
      for (; e.length > 0; ) e.shift()(l);
    }, Ye = [], qe = (e) => Ye.push(e), Ue = [], _r = (e) => Ue.push(e), Ie = (e) => (d(typeof e == "number", `ptrToString expects a number, got ${typeof e}`), e >>>= 0, "0x" + e.toString(16).padStart(8, "0")), Be = (e) => {
      Be.shown || (Be.shown = {}), Be.shown[e] || (Be.shown[e] = 1, g && (e = "warning: " + e), T(e));
    }, nr = globalThis.TextDecoder && new TextDecoder(), Er = (e, r, t, o) => {
      for (var s = r + t; e[r] && !(r >= s); ) ++r;
      return r;
    }, Re = (e, r = 0, t, o) => {
      var s = Er(e, r, t);
      if (s - r > 16 && e.buffer && nr) return nr.decode(e.subarray(r, s));
      for (var a = ""; r < s; ) {
        var i = e[r++];
        if (!(i & 128)) {
          a += String.fromCharCode(i);
          continue;
        }
        var c = e[r++] & 63;
        if ((i & 224) == 192) {
          a += String.fromCharCode((i & 31) << 6 | c);
          continue;
        }
        var f = e[r++] & 63;
        if ((i & 240) == 224 ? i = (i & 15) << 12 | c << 6 | f : ((i & 248) != 240 && Be("Invalid UTF-8 leading byte " + Ie(i) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), i = (i & 7) << 18 | c << 12 | f << 6 | e[r++] & 63), i < 65536) a += String.fromCharCode(i);
        else {
          var h = i - 65536;
          a += String.fromCharCode(55296 | h >> 10, 56320 | h & 1023);
        }
      }
      return a;
    }, xe = (e, r, t) => (d(typeof e == "number", `UTF8ToString expects a number (got ${typeof e})`), e ? Re(Q, e, r) : ""), yr = (e, r, t, o) => S(`Assertion failed: ${xe(e)}, at: ` + [
      r ? xe(r) : "unknown filename",
      t,
      o ? xe(o) : "unknown function"
    ]);
    class gr {
      constructor(r) {
        this.excPtr = r, this.ptr = r - 24;
      }
      set_type(r) {
        p[this.ptr + 4 >> 2] = r;
      }
      get_type() {
        return p[this.ptr + 4 >> 2];
      }
      set_destructor(r) {
        p[this.ptr + 8 >> 2] = r;
      }
      get_destructor() {
        return p[this.ptr + 8 >> 2];
      }
      set_caught(r) {
        r = r ? 1 : 0, X[this.ptr + 12] = r;
      }
      get_caught() {
        return X[this.ptr + 12] != 0;
      }
      set_rethrown(r) {
        r = r ? 1 : 0, X[this.ptr + 13] = r;
      }
      get_rethrown() {
        return X[this.ptr + 13] != 0;
      }
      init(r, t) {
        this.set_adjusted_ptr(0), this.set_type(r), this.set_destructor(t);
      }
      set_adjusted_ptr(r) {
        p[this.ptr + 16 >> 2] = r;
      }
      get_adjusted_ptr() {
        return p[this.ptr + 16 >> 2];
      }
    }
    var wr = (e, r, t) => {
      var o = new gr(e);
      o.init(r, t), d(false, "Exception thrown, but exception catching is not enabled. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch.");
    }, Sr = () => S("native code called abort()"), or = (e, r, t, o) => {
      if (d(typeof e == "string", `stringToUTF8Array expects a string (got ${typeof e})`), !(o > 0)) return 0;
      for (var s = t, a = t + o - 1, i = 0; i < e.length; ++i) {
        var c = e.codePointAt(i);
        if (c <= 127) {
          if (t >= a) break;
          r[t++] = c;
        } else if (c <= 2047) {
          if (t + 1 >= a) break;
          r[t++] = 192 | c >> 6, r[t++] = 128 | c & 63;
        } else if (c <= 65535) {
          if (t + 2 >= a) break;
          r[t++] = 224 | c >> 12, r[t++] = 128 | c >> 6 & 63, r[t++] = 128 | c & 63;
        } else {
          if (t + 3 >= a) break;
          c > 1114111 && Be("Invalid Unicode code point " + Ie(c) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."), r[t++] = 240 | c >> 18, r[t++] = 128 | c >> 12 & 63, r[t++] = 128 | c >> 6 & 63, r[t++] = 128 | c & 63, i++;
        }
      }
      return r[t] = 0, t - s;
    }, ze = (e, r, t) => (d(typeof t == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), or(e, Q, r, t)), Ke = (e) => {
      for (var r = 0, t = 0; t < e.length; ++t) {
        var o = e.charCodeAt(t);
        o <= 127 ? r++ : o <= 2047 ? r += 2 : o >= 55296 && o <= 57343 ? (r += 4, ++t) : r += 3;
      }
      return r;
    }, Fr = (e, r, t, o) => {
      var s = (/* @__PURE__ */ new Date()).getFullYear(), a = new Date(s, 0, 1), i = new Date(s, 6, 1), c = a.getTimezoneOffset(), f = i.getTimezoneOffset(), h = Math.max(c, f);
      p[e >> 2] = h * 60, ue[r >> 2] = +(c != f);
      var P = (F) => {
        var j = F >= 0 ? "-" : "+", he = Math.abs(F), ve = String(Math.floor(he / 60)).padStart(2, "0"), ce = String(he % 60).padStart(2, "0");
        return `UTC${j}${ve}${ce}`;
      }, b = P(c), v = P(f);
      d(b), d(v), d(Ke(b) <= 16, `timezone name truncated to fit in TZNAME_MAX (${b})`), d(Ke(v) <= 16, `timezone name truncated to fit in TZNAME_MAX (${v})`), f < c ? (ze(b, t, 17), ze(v, o, 17)) : (ze(b, o, 17), ze(v, t, 17));
    }, Pr = () => 2147483648, kr = (e, r) => (d(r, "alignment argument is required"), Math.ceil(e / r) * r), Ar = (e) => {
      var r = Xe.buffer.byteLength, t = (e - r + 65535) / 65536 | 0;
      try {
        return Xe.grow(t), J(), 1;
      } catch (o) {
        T(`growMemory: Attempted to grow heap from ${r} bytes to ${e} bytes, but got error: ${o}`);
      }
    }, br = (e) => {
      var r = Q.length;
      e >>>= 0, d(e > r);
      var t = Pr();
      if (e > t) return T(`Cannot enlarge memory, requested ${e} bytes, but the limit is ${t} bytes!`), false;
      for (var o = 1; o <= 4; o *= 2) {
        var s = r * (1 + 0.2 / o);
        s = Math.min(s, e + 100663296);
        var a = Math.min(t, kr(Math.max(e, s), 65536)), i = Ar(a);
        if (i) return true;
      }
      return T(`Failed to grow the heap from ${r} bytes to ${a} bytes, not enough memory!`), false;
    }, Qe = {}, Tr = () => re || "./this.program", He = () => {
      var _a2;
      if (!He.strings) {
        var e = (((_a2 = globalThis.navigator) == null ? void 0 : _a2.language) ?? "C").replace("-", "_") + ".UTF-8", r = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: e,
          _: Tr()
        };
        for (var t in Qe) Qe[t] === void 0 ? delete r[t] : r[t] = Qe[t];
        var o = [];
        for (var t in r) o.push(`${t}=${r[t]}`);
        He.strings = o;
      }
      return He.strings;
    }, Mr = (e, r) => {
      var t = 0, o = 0;
      for (var s of He()) {
        var a = r + t;
        p[e + o >> 2] = a, t += ze(s, a, 1 / 0) + 1, o += 4;
      }
      return 0;
    }, Nr = (e, r) => {
      var t = He();
      p[e >> 2] = t.length;
      var o = 0;
      for (var s of t) o += Ke(s) + 1;
      return p[r >> 2] = o, 0;
    }, R = {
      isAbs: (e) => e.charAt(0) === "/",
      splitPath: (e) => {
        var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return r.exec(e).slice(1);
      },
      normalizeArray: (e, r) => {
        for (var t = 0, o = e.length - 1; o >= 0; o--) {
          var s = e[o];
          s === "." ? e.splice(o, 1) : s === ".." ? (e.splice(o, 1), t++) : t && (e.splice(o, 1), t--);
        }
        if (r) for (; t; t--) e.unshift("..");
        return e;
      },
      normalize: (e) => {
        var r = R.isAbs(e), t = e.slice(-1) === "/";
        return e = R.normalizeArray(e.split("/").filter((o) => !!o), !r).join("/"), !e && !r && (e = "."), e && t && (e += "/"), (r ? "/" : "") + e;
      },
      dirname: (e) => {
        var r = R.splitPath(e), t = r[0], o = r[1];
        return !t && !o ? "." : (o && (o = o.slice(0, -1)), t + o);
      },
      basename: (e) => e && e.match(/([^\/]+|\/)\/*$/)[1],
      join: (...e) => R.normalize(e.join("/")),
      join2: (e, r) => R.normalize(e + "/" + r)
    }, Rr = () => {
      if (g) {
        var e = C("node:crypto");
        return (r) => e.randomFillSync(r);
      }
      return (r) => crypto.getRandomValues(r);
    }, sr = (e) => {
      (sr = Rr())(e);
    }, Oe = {
      resolve: (...e) => {
        for (var r = "", t = false, o = e.length - 1; o >= -1 && !t; o--) {
          var s = o >= 0 ? e[o] : n.cwd();
          if (typeof s != "string") throw new TypeError("Arguments to path.resolve must be strings");
          if (!s) return "";
          r = s + "/" + r, t = R.isAbs(s);
        }
        return r = R.normalizeArray(r.split("/").filter((a) => !!a), !t).join("/"), (t ? "/" : "") + r || ".";
      },
      relative: (e, r) => {
        e = Oe.resolve(e).slice(1), r = Oe.resolve(r).slice(1);
        function t(h) {
          for (var P = 0; P < h.length && h[P] === ""; P++) ;
          for (var b = h.length - 1; b >= 0 && h[b] === ""; b--) ;
          return P > b ? [] : h.slice(P, b - P + 1);
        }
        for (var o = t(e.split("/")), s = t(r.split("/")), a = Math.min(o.length, s.length), i = a, c = 0; c < a; c++) if (o[c] !== s[c]) {
          i = c;
          break;
        }
        for (var f = [], c = i; c < o.length; c++) f.push("..");
        return f = f.concat(s.slice(i)), f.join("/");
      }
    }, Je = [], Ze = (e, r, t) => {
      var o = Ke(e) + 1, s = new Array(o), a = or(e, s, 0, s.length);
      return s.length = a, s;
    }, Or = () => {
      var _a2;
      if (!Je.length) {
        var e = null;
        if (g) {
          var r = 256, t = Buffer.alloc(r), o = 0, s = process.stdin.fd;
          try {
            o = $.readSync(s, t, 0, r);
          } catch (a) {
            if (a.toString().includes("EOF")) o = 0;
            else throw a;
          }
          o > 0 && (e = t.slice(0, o).toString("utf-8"));
        } else ((_a2 = globalThis.window) == null ? void 0 : _a2.prompt) && (e = window.prompt("Input: "), e !== null && (e += `
`));
        if (!e) return null;
        Je = Ze(e);
      }
      return Je.shift();
    }, Te = {
      ttys: [],
      init() {
      },
      shutdown() {
      },
      register(e, r) {
        Te.ttys[e] = {
          input: [],
          output: [],
          ops: r
        }, n.registerDevice(e, Te.stream_ops);
      },
      stream_ops: {
        open(e) {
          var r = Te.ttys[e.node.rdev];
          if (!r) throw new n.ErrnoError(43);
          e.tty = r, e.seekable = false;
        },
        close(e) {
          e.tty.ops.fsync(e.tty);
        },
        fsync(e) {
          e.tty.ops.fsync(e.tty);
        },
        read(e, r, t, o, s) {
          if (!e.tty || !e.tty.ops.get_char) throw new n.ErrnoError(60);
          for (var a = 0, i = 0; i < o; i++) {
            var c;
            try {
              c = e.tty.ops.get_char(e.tty);
            } catch {
              throw new n.ErrnoError(29);
            }
            if (c === void 0 && a === 0) throw new n.ErrnoError(6);
            if (c == null) break;
            a++, r[t + i] = c;
          }
          return a && (e.node.atime = Date.now()), a;
        },
        write(e, r, t, o, s) {
          if (!e.tty || !e.tty.ops.put_char) throw new n.ErrnoError(60);
          try {
            for (var a = 0; a < o; a++) e.tty.ops.put_char(e.tty, r[t + a]);
          } catch {
            throw new n.ErrnoError(29);
          }
          return o && (e.node.mtime = e.node.ctime = Date.now()), a;
        }
      },
      default_tty_ops: {
        get_char(e) {
          return Or();
        },
        put_char(e, r) {
          r === null || r === 10 ? (U(Re(e.output)), e.output = []) : r != 0 && e.output.push(r);
        },
        fsync(e) {
          var _a2;
          ((_a2 = e.output) == null ? void 0 : _a2.length) > 0 && (U(Re(e.output)), e.output = []);
        },
        ioctl_tcgets(e) {
          return {
            c_iflag: 25856,
            c_oflag: 5,
            c_cflag: 191,
            c_lflag: 35387,
            c_cc: [
              3,
              28,
              127,
              21,
              4,
              0,
              1,
              0,
              17,
              19,
              26,
              0,
              18,
              15,
              23,
              22,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]
          };
        },
        ioctl_tcsets(e, r, t) {
          return 0;
        },
        ioctl_tiocgwinsz(e) {
          return [
            24,
            80
          ];
        }
      },
      default_tty1_ops: {
        put_char(e, r) {
          r === null || r === 10 ? (T(Re(e.output)), e.output = []) : r != 0 && e.output.push(r);
        },
        fsync(e) {
          var _a2;
          ((_a2 = e.output) == null ? void 0 : _a2.length) > 0 && (T(Re(e.output)), e.output = []);
        }
      }
    }, ar = (e) => {
      S("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported");
    }, y = {
      ops_table: null,
      mount(e) {
        return y.createNode(null, "/", 16895, 0);
      },
      createNode(e, r, t, o) {
        if (n.isBlkdev(t) || n.isFIFO(t)) throw new n.ErrnoError(63);
        y.ops_table || (y.ops_table = {
          dir: {
            node: {
              getattr: y.node_ops.getattr,
              setattr: y.node_ops.setattr,
              lookup: y.node_ops.lookup,
              mknod: y.node_ops.mknod,
              rename: y.node_ops.rename,
              unlink: y.node_ops.unlink,
              rmdir: y.node_ops.rmdir,
              readdir: y.node_ops.readdir,
              symlink: y.node_ops.symlink
            },
            stream: {
              llseek: y.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: y.node_ops.getattr,
              setattr: y.node_ops.setattr
            },
            stream: {
              llseek: y.stream_ops.llseek,
              read: y.stream_ops.read,
              write: y.stream_ops.write,
              mmap: y.stream_ops.mmap,
              msync: y.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: y.node_ops.getattr,
              setattr: y.node_ops.setattr,
              readlink: y.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: y.node_ops.getattr,
              setattr: y.node_ops.setattr
            },
            stream: n.chrdev_stream_ops
          }
        });
        var s = n.createNode(e, r, t, o);
        return n.isDir(s.mode) ? (s.node_ops = y.ops_table.dir.node, s.stream_ops = y.ops_table.dir.stream, s.contents = {}) : n.isFile(s.mode) ? (s.node_ops = y.ops_table.file.node, s.stream_ops = y.ops_table.file.stream, s.usedBytes = 0, s.contents = null) : n.isLink(s.mode) ? (s.node_ops = y.ops_table.link.node, s.stream_ops = y.ops_table.link.stream) : n.isChrdev(s.mode) && (s.node_ops = y.ops_table.chrdev.node, s.stream_ops = y.ops_table.chrdev.stream), s.atime = s.mtime = s.ctime = Date.now(), e && (e.contents[r] = s, e.atime = e.mtime = e.ctime = s.atime), s;
      },
      getFileDataAsTypedArray(e) {
        return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0);
      },
      expandFileStorage(e, r) {
        var t = e.contents ? e.contents.length : 0;
        if (!(t >= r)) {
          var o = 1024 * 1024;
          r = Math.max(r, t * (t < o ? 2 : 1.125) >>> 0), t != 0 && (r = Math.max(r, 256));
          var s = e.contents;
          e.contents = new Uint8Array(r), e.usedBytes > 0 && e.contents.set(s.subarray(0, e.usedBytes), 0);
        }
      },
      resizeFileStorage(e, r) {
        if (e.usedBytes != r) if (r == 0) e.contents = null, e.usedBytes = 0;
        else {
          var t = e.contents;
          e.contents = new Uint8Array(r), t && e.contents.set(t.subarray(0, Math.min(r, e.usedBytes))), e.usedBytes = r;
        }
      },
      node_ops: {
        getattr(e) {
          var r = {};
          return r.dev = n.isChrdev(e.mode) ? e.id : 1, r.ino = e.id, r.mode = e.mode, r.nlink = 1, r.uid = 0, r.gid = 0, r.rdev = e.rdev, n.isDir(e.mode) ? r.size = 4096 : n.isFile(e.mode) ? r.size = e.usedBytes : n.isLink(e.mode) ? r.size = e.link.length : r.size = 0, r.atime = new Date(e.atime), r.mtime = new Date(e.mtime), r.ctime = new Date(e.ctime), r.blksize = 4096, r.blocks = Math.ceil(r.size / r.blksize), r;
        },
        setattr(e, r) {
          for (const t of [
            "mode",
            "atime",
            "mtime",
            "ctime"
          ]) r[t] != null && (e[t] = r[t]);
          r.size !== void 0 && y.resizeFileStorage(e, r.size);
        },
        lookup(e, r) {
          throw new n.ErrnoError(44);
        },
        mknod(e, r, t, o) {
          return y.createNode(e, r, t, o);
        },
        rename(e, r, t) {
          var o;
          try {
            o = n.lookupNode(r, t);
          } catch {
          }
          if (o) {
            if (n.isDir(e.mode)) for (var s in o.contents) throw new n.ErrnoError(55);
            n.hashRemoveNode(o);
          }
          delete e.parent.contents[e.name], r.contents[t] = e, e.name = t, r.ctime = r.mtime = e.parent.ctime = e.parent.mtime = Date.now();
        },
        unlink(e, r) {
          delete e.contents[r], e.ctime = e.mtime = Date.now();
        },
        rmdir(e, r) {
          var t = n.lookupNode(e, r);
          for (var o in t.contents) throw new n.ErrnoError(55);
          delete e.contents[r], e.ctime = e.mtime = Date.now();
        },
        readdir(e) {
          return [
            ".",
            "..",
            ...Object.keys(e.contents)
          ];
        },
        symlink(e, r, t) {
          var o = y.createNode(e, r, 41471, 0);
          return o.link = t, o;
        },
        readlink(e) {
          if (!n.isLink(e.mode)) throw new n.ErrnoError(28);
          return e.link;
        }
      },
      stream_ops: {
        read(e, r, t, o, s) {
          var a = e.node.contents;
          if (s >= e.node.usedBytes) return 0;
          var i = Math.min(e.node.usedBytes - s, o);
          if (d(i >= 0), i > 8 && a.subarray) r.set(a.subarray(s, s + i), t);
          else for (var c = 0; c < i; c++) r[t + c] = a[s + c];
          return i;
        },
        write(e, r, t, o, s, a) {
          if (d(!(r instanceof ArrayBuffer)), r.buffer === X.buffer && (a = false), !o) return 0;
          var i = e.node;
          if (i.mtime = i.ctime = Date.now(), r.subarray && (!i.contents || i.contents.subarray)) {
            if (a) return d(s === 0, "canOwn must imply no weird position inside the file"), i.contents = r.subarray(t, t + o), i.usedBytes = o, o;
            if (i.usedBytes === 0 && s === 0) return i.contents = r.slice(t, t + o), i.usedBytes = o, o;
            if (s + o <= i.usedBytes) return i.contents.set(r.subarray(t, t + o), s), o;
          }
          if (y.expandFileStorage(i, s + o), i.contents.subarray && r.subarray) i.contents.set(r.subarray(t, t + o), s);
          else for (var c = 0; c < o; c++) i.contents[s + c] = r[t + c];
          return i.usedBytes = Math.max(i.usedBytes, s + o), o;
        },
        llseek(e, r, t) {
          var o = r;
          if (t === 1 ? o += e.position : t === 2 && n.isFile(e.node.mode) && (o += e.node.usedBytes), o < 0) throw new n.ErrnoError(28);
          return o;
        },
        mmap(e, r, t, o, s) {
          if (!n.isFile(e.node.mode)) throw new n.ErrnoError(43);
          var a, i, c = e.node.contents;
          if (!(s & 2) && c && c.buffer === X.buffer) i = false, a = c.byteOffset;
          else {
            if (i = true, a = ar(), !a) throw new n.ErrnoError(48);
            c && ((t > 0 || t + r < c.length) && (c.subarray ? c = c.subarray(t, t + r) : c = Array.prototype.slice.call(c, t, t + r)), X.set(c, a));
          }
          return {
            ptr: a,
            allocated: i
          };
        },
        msync(e, r, t, o, s) {
          return y.stream_ops.write(e, r, 0, o, t, false), 0;
        }
      }
    }, Dr = (e) => {
      var r = {
        r: 0,
        "r+": 2,
        w: 577,
        "w+": 578,
        a: 1089,
        "a+": 1090
      }, t = r[e];
      if (typeof t > "u") throw new Error(`Unknown file open mode: ${e}`);
      return t;
    }, er = (e, r) => {
      var t = 0;
      return e && (t |= 365), r && (t |= 146), t;
    }, Cr = (e) => xe(fr(e)), ir = {
      EPERM: 63,
      ENOENT: 44,
      ESRCH: 71,
      EINTR: 27,
      EIO: 29,
      ENXIO: 60,
      E2BIG: 1,
      ENOEXEC: 45,
      EBADF: 8,
      ECHILD: 12,
      EAGAIN: 6,
      EWOULDBLOCK: 6,
      ENOMEM: 48,
      EACCES: 2,
      EFAULT: 21,
      ENOTBLK: 105,
      EBUSY: 10,
      EEXIST: 20,
      EXDEV: 75,
      ENODEV: 43,
      ENOTDIR: 54,
      EISDIR: 31,
      EINVAL: 28,
      ENFILE: 41,
      EMFILE: 33,
      ENOTTY: 59,
      ETXTBSY: 74,
      EFBIG: 22,
      ENOSPC: 51,
      ESPIPE: 70,
      EROFS: 69,
      EMLINK: 34,
      EPIPE: 64,
      EDOM: 18,
      ERANGE: 68,
      ENOMSG: 49,
      EIDRM: 24,
      ECHRNG: 106,
      EL2NSYNC: 156,
      EL3HLT: 107,
      EL3RST: 108,
      ELNRNG: 109,
      EUNATCH: 110,
      ENOCSI: 111,
      EL2HLT: 112,
      EDEADLK: 16,
      ENOLCK: 46,
      EBADE: 113,
      EBADR: 114,
      EXFULL: 115,
      ENOANO: 104,
      EBADRQC: 103,
      EBADSLT: 102,
      EDEADLOCK: 16,
      EBFONT: 101,
      ENOSTR: 100,
      ENODATA: 116,
      ETIME: 117,
      ENOSR: 118,
      ENONET: 119,
      ENOPKG: 120,
      EREMOTE: 121,
      ENOLINK: 47,
      EADV: 122,
      ESRMNT: 123,
      ECOMM: 124,
      EPROTO: 65,
      EMULTIHOP: 36,
      EDOTDOT: 125,
      EBADMSG: 9,
      ENOTUNIQ: 126,
      EBADFD: 127,
      EREMCHG: 128,
      ELIBACC: 129,
      ELIBBAD: 130,
      ELIBSCN: 131,
      ELIBMAX: 132,
      ELIBEXEC: 133,
      ENOSYS: 52,
      ENOTEMPTY: 55,
      ENAMETOOLONG: 37,
      ELOOP: 32,
      EOPNOTSUPP: 138,
      EPFNOSUPPORT: 139,
      ECONNRESET: 15,
      ENOBUFS: 42,
      EAFNOSUPPORT: 5,
      EPROTOTYPE: 67,
      ENOTSOCK: 57,
      ENOPROTOOPT: 50,
      ESHUTDOWN: 140,
      ECONNREFUSED: 14,
      EADDRINUSE: 3,
      ECONNABORTED: 13,
      ENETUNREACH: 40,
      ENETDOWN: 38,
      ETIMEDOUT: 73,
      EHOSTDOWN: 142,
      EHOSTUNREACH: 23,
      EINPROGRESS: 26,
      EALREADY: 7,
      EDESTADDRREQ: 17,
      EMSGSIZE: 35,
      EPROTONOSUPPORT: 66,
      ESOCKTNOSUPPORT: 137,
      EADDRNOTAVAIL: 4,
      ENETRESET: 39,
      EISCONN: 30,
      ENOTCONN: 53,
      ETOOMANYREFS: 141,
      EUSERS: 136,
      EDQUOT: 19,
      ESTALE: 72,
      ENOTSUP: 138,
      ENOMEDIUM: 148,
      EILSEQ: 25,
      EOVERFLOW: 61,
      ECANCELED: 11,
      ENOTRECOVERABLE: 56,
      EOWNERDEAD: 62,
      ESTRPIPE: 135
    }, Lr = async (e) => {
      var r = await Y(e);
      return d(r, `Loading data file "${e}" failed (no arrayBuffer).`), new Uint8Array(r);
    }, Ur = (...e) => n.createDataFile(...e), Ir = (e) => {
      for (var r = e; ; ) {
        if (!De[e]) return e;
        e = r + Math.random();
      }
    }, Me = 0, We = null, De = {}, Ae = null, Br = (e) => {
      var _a2;
      if (Me--, (_a2 = l.monitorRunDependencies) == null ? void 0 : _a2.call(l, Me), d(e, "removeRunDependency requires an ID"), d(De[e]), delete De[e], Me == 0 && (Ae !== null && (clearInterval(Ae), Ae = null), We)) {
        var r = We;
        We = null, r();
      }
    }, xr = (e) => {
      var _a2, _b2;
      Me++, (_a2 = l.monitorRunDependencies) == null ? void 0 : _a2.call(l, Me), d(e, "addRunDependency requires an ID"), d(!De[e]), De[e] = 1, Ae === null && globalThis.setInterval && (Ae = setInterval(() => {
        if (x) {
          clearInterval(Ae), Ae = null;
          return;
        }
        var r = false;
        for (var t in De) r || (r = true, T("still waiting on run dependencies:")), T(`dependency: ${t}`);
        r && T("(end of list)");
      }, 1e4), (_b2 = Ae.unref) == null ? void 0 : _b2.call(Ae));
    }, lr = [], zr = async (e, r) => {
      typeof Browser < "u" && Browser.init();
      for (var t of lr) if (t.canHandle(r)) return d(t.handle.constructor.name === "AsyncFunction", "Filesystem plugin handlers must be async functions (See #24914)"), t.handle(e, r);
      return e;
    }, cr = async (e, r, t, o, s, a, i, c) => {
      var f = r ? Oe.resolve(R.join2(e, r)) : e, h = Ir(`cp ${f}`);
      xr(h);
      try {
        var P = t;
        typeof t == "string" && (P = await Lr(t)), P = await zr(P, f), c == null ? void 0 : c(), a || Ur(e, r, P, o, s, i);
      } finally {
        Br(h);
      }
    }, Hr = (e, r, t, o, s, a, i, c, f, h) => {
      cr(e, r, t, o, s, c, f, h).then(a).catch(i);
    }, n = {
      root: null,
      mounts: [],
      devices: {},
      streams: [],
      nextInode: 1,
      nameTable: null,
      currentPath: "/",
      initialized: false,
      ignorePermissions: true,
      filesystems: null,
      syncFSRequests: 0,
      ErrnoError: class extends Error {
        constructor(e) {
          super(ae ? Cr(e) : "");
          __publicField(this, "name", "ErrnoError");
          this.errno = e;
          for (var r in ir) if (ir[r] === e) {
            this.code = r;
            break;
          }
        }
      },
      FSStream: class {
        constructor() {
          __publicField(this, "shared", {});
        }
        get object() {
          return this.node;
        }
        set object(e) {
          this.node = e;
        }
        get isRead() {
          return (this.flags & 2097155) !== 1;
        }
        get isWrite() {
          return (this.flags & 2097155) !== 0;
        }
        get isAppend() {
          return this.flags & 1024;
        }
        get flags() {
          return this.shared.flags;
        }
        set flags(e) {
          this.shared.flags = e;
        }
        get position() {
          return this.shared.position;
        }
        set position(e) {
          this.shared.position = e;
        }
      },
      FSNode: class {
        constructor(e, r, t, o) {
          __publicField(this, "node_ops", {});
          __publicField(this, "stream_ops", {});
          __publicField(this, "readMode", 365);
          __publicField(this, "writeMode", 146);
          __publicField(this, "mounted", null);
          e || (e = this), this.parent = e, this.mount = e.mount, this.id = n.nextInode++, this.name = r, this.mode = t, this.rdev = o, this.atime = this.mtime = this.ctime = Date.now();
        }
        get read() {
          return (this.mode & this.readMode) === this.readMode;
        }
        set read(e) {
          e ? this.mode |= this.readMode : this.mode &= ~this.readMode;
        }
        get write() {
          return (this.mode & this.writeMode) === this.writeMode;
        }
        set write(e) {
          e ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
        }
        get isFolder() {
          return n.isDir(this.mode);
        }
        get isDevice() {
          return n.isChrdev(this.mode);
        }
      },
      lookupPath(e, r = {}) {
        if (!e) throw new n.ErrnoError(44);
        r.follow_mount ?? (r.follow_mount = true), R.isAbs(e) || (e = n.cwd() + "/" + e);
        e: for (var t = 0; t < 40; t++) {
          for (var o = e.split("/").filter((h) => !!h), s = n.root, a = "/", i = 0; i < o.length; i++) {
            var c = i === o.length - 1;
            if (c && r.parent) break;
            if (o[i] !== ".") {
              if (o[i] === "..") {
                if (a = R.dirname(a), n.isRoot(s)) {
                  e = a + "/" + o.slice(i + 1).join("/"), t--;
                  continue e;
                } else s = s.parent;
                continue;
              }
              a = R.join2(a, o[i]);
              try {
                s = n.lookupNode(s, o[i]);
              } catch (h) {
                if ((h == null ? void 0 : h.errno) === 44 && c && r.noent_okay) return {
                  path: a
                };
                throw h;
              }
              if (n.isMountpoint(s) && (!c || r.follow_mount) && (s = s.mounted.root), n.isLink(s.mode) && (!c || r.follow)) {
                if (!s.node_ops.readlink) throw new n.ErrnoError(52);
                var f = s.node_ops.readlink(s);
                R.isAbs(f) || (f = R.dirname(a) + "/" + f), e = f + "/" + o.slice(i + 1).join("/");
                continue e;
              }
            }
          }
          return {
            path: a,
            node: s
          };
        }
        throw new n.ErrnoError(32);
      },
      getPath(e) {
        for (var r; ; ) {
          if (n.isRoot(e)) {
            var t = e.mount.mountpoint;
            return r ? t[t.length - 1] !== "/" ? `${t}/${r}` : t + r : t;
          }
          r = r ? `${e.name}/${r}` : e.name, e = e.parent;
        }
      },
      hashName(e, r) {
        for (var t = 0, o = 0; o < r.length; o++) t = (t << 5) - t + r.charCodeAt(o) | 0;
        return (e + t >>> 0) % n.nameTable.length;
      },
      hashAddNode(e) {
        var r = n.hashName(e.parent.id, e.name);
        e.name_next = n.nameTable[r], n.nameTable[r] = e;
      },
      hashRemoveNode(e) {
        var r = n.hashName(e.parent.id, e.name);
        if (n.nameTable[r] === e) n.nameTable[r] = e.name_next;
        else for (var t = n.nameTable[r]; t; ) {
          if (t.name_next === e) {
            t.name_next = e.name_next;
            break;
          }
          t = t.name_next;
        }
      },
      lookupNode(e, r) {
        var t = n.mayLookup(e);
        if (t) throw new n.ErrnoError(t);
        for (var o = n.hashName(e.id, r), s = n.nameTable[o]; s; s = s.name_next) {
          var a = s.name;
          if (s.parent.id === e.id && a === r) return s;
        }
        return n.lookup(e, r);
      },
      createNode(e, r, t, o) {
        d(typeof e == "object");
        var s = new n.FSNode(e, r, t, o);
        return n.hashAddNode(s), s;
      },
      destroyNode(e) {
        n.hashRemoveNode(e);
      },
      isRoot(e) {
        return e === e.parent;
      },
      isMountpoint(e) {
        return !!e.mounted;
      },
      isFile(e) {
        return (e & 61440) === 32768;
      },
      isDir(e) {
        return (e & 61440) === 16384;
      },
      isLink(e) {
        return (e & 61440) === 40960;
      },
      isChrdev(e) {
        return (e & 61440) === 8192;
      },
      isBlkdev(e) {
        return (e & 61440) === 24576;
      },
      isFIFO(e) {
        return (e & 61440) === 4096;
      },
      isSocket(e) {
        return (e & 49152) === 49152;
      },
      flagsToPermissionString(e) {
        var r = [
          "r",
          "w",
          "rw"
        ][e & 3];
        return e & 512 && (r += "w"), r;
      },
      nodePermissions(e, r) {
        return n.ignorePermissions ? 0 : r.includes("r") && !(e.mode & 292) || r.includes("w") && !(e.mode & 146) || r.includes("x") && !(e.mode & 73) ? 2 : 0;
      },
      mayLookup(e) {
        if (!n.isDir(e.mode)) return 54;
        var r = n.nodePermissions(e, "x");
        return r || (e.node_ops.lookup ? 0 : 2);
      },
      mayCreate(e, r) {
        if (!n.isDir(e.mode)) return 54;
        try {
          var t = n.lookupNode(e, r);
          return 20;
        } catch {
        }
        return n.nodePermissions(e, "wx");
      },
      mayDelete(e, r, t) {
        var o;
        try {
          o = n.lookupNode(e, r);
        } catch (a) {
          return a.errno;
        }
        var s = n.nodePermissions(e, "wx");
        if (s) return s;
        if (t) {
          if (!n.isDir(o.mode)) return 54;
          if (n.isRoot(o) || n.getPath(o) === n.cwd()) return 10;
        } else if (n.isDir(o.mode)) return 31;
        return 0;
      },
      mayOpen(e, r) {
        if (!e) return 44;
        if (n.isLink(e.mode)) return 32;
        var t = n.flagsToPermissionString(r);
        return n.isDir(e.mode) && (t !== "r" || r & 576) ? 31 : n.nodePermissions(e, t);
      },
      checkOpExists(e, r) {
        if (!e) throw new n.ErrnoError(r);
        return e;
      },
      MAX_OPEN_FDS: 4096,
      nextfd() {
        for (var e = 0; e <= n.MAX_OPEN_FDS; e++) if (!n.streams[e]) return e;
        throw new n.ErrnoError(33);
      },
      getStreamChecked(e) {
        var r = n.getStream(e);
        if (!r) throw new n.ErrnoError(8);
        return r;
      },
      getStream: (e) => n.streams[e],
      createStream(e, r = -1) {
        return d(r >= -1), e = Object.assign(new n.FSStream(), e), r == -1 && (r = n.nextfd()), e.fd = r, n.streams[r] = e, e;
      },
      closeStream(e) {
        n.streams[e] = null;
      },
      dupStream(e, r = -1) {
        var _a2, _b2;
        var t = n.createStream(e, r);
        return (_b2 = (_a2 = t.stream_ops) == null ? void 0 : _a2.dup) == null ? void 0 : _b2.call(_a2, t), t;
      },
      doSetAttr(e, r, t) {
        var o = e == null ? void 0 : e.stream_ops.setattr, s = o ? e : r;
        o ?? (o = r.node_ops.setattr), n.checkOpExists(o, 63), o(s, t);
      },
      chrdev_stream_ops: {
        open(e) {
          var _a2, _b2;
          var r = n.getDevice(e.node.rdev);
          e.stream_ops = r.stream_ops, (_b2 = (_a2 = e.stream_ops).open) == null ? void 0 : _b2.call(_a2, e);
        },
        llseek() {
          throw new n.ErrnoError(70);
        }
      },
      major: (e) => e >> 8,
      minor: (e) => e & 255,
      makedev: (e, r) => e << 8 | r,
      registerDevice(e, r) {
        n.devices[e] = {
          stream_ops: r
        };
      },
      getDevice: (e) => n.devices[e],
      getMounts(e) {
        for (var r = [], t = [
          e
        ]; t.length; ) {
          var o = t.pop();
          r.push(o), t.push(...o.mounts);
        }
        return r;
      },
      syncfs(e, r) {
        typeof e == "function" && (r = e, e = false), n.syncFSRequests++, n.syncFSRequests > 1 && T(`warning: ${n.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
        var t = n.getMounts(n.root.mount), o = 0;
        function s(c) {
          return d(n.syncFSRequests > 0), n.syncFSRequests--, r(c);
        }
        function a(c) {
          if (c) return a.errored ? void 0 : (a.errored = true, s(c));
          ++o >= t.length && s(null);
        }
        for (var i of t) i.type.syncfs ? i.type.syncfs(i, e, a) : a(null);
      },
      mount(e, r, t) {
        if (typeof e == "string") throw e;
        var o = t === "/", s = !t, a;
        if (o && n.root) throw new n.ErrnoError(10);
        if (!o && !s) {
          var i = n.lookupPath(t, {
            follow_mount: false
          });
          if (t = i.path, a = i.node, n.isMountpoint(a)) throw new n.ErrnoError(10);
          if (!n.isDir(a.mode)) throw new n.ErrnoError(54);
        }
        var c = {
          type: e,
          opts: r,
          mountpoint: t,
          mounts: []
        }, f = e.mount(c);
        return f.mount = c, c.root = f, o ? n.root = f : a && (a.mounted = c, a.mount && a.mount.mounts.push(c)), f;
      },
      unmount(e) {
        var r = n.lookupPath(e, {
          follow_mount: false
        });
        if (!n.isMountpoint(r.node)) throw new n.ErrnoError(28);
        var t = r.node, o = t.mounted, s = n.getMounts(o);
        for (var [a, i] of Object.entries(n.nameTable)) for (; i; ) {
          var c = i.name_next;
          s.includes(i.mount) && n.destroyNode(i), i = c;
        }
        t.mounted = null;
        var f = t.mount.mounts.indexOf(o);
        d(f !== -1), t.mount.mounts.splice(f, 1);
      },
      lookup(e, r) {
        return e.node_ops.lookup(e, r);
      },
      mknod(e, r, t) {
        var o = n.lookupPath(e, {
          parent: true
        }), s = o.node, a = R.basename(e);
        if (!a) throw new n.ErrnoError(28);
        if (a === "." || a === "..") throw new n.ErrnoError(20);
        var i = n.mayCreate(s, a);
        if (i) throw new n.ErrnoError(i);
        if (!s.node_ops.mknod) throw new n.ErrnoError(63);
        return s.node_ops.mknod(s, a, r, t);
      },
      statfs(e) {
        return n.statfsNode(n.lookupPath(e, {
          follow: true
        }).node);
      },
      statfsStream(e) {
        return n.statfsNode(e.node);
      },
      statfsNode(e) {
        var r = {
          bsize: 4096,
          frsize: 4096,
          blocks: 1e6,
          bfree: 5e5,
          bavail: 5e5,
          files: n.nextInode,
          ffree: n.nextInode - 1,
          fsid: 42,
          flags: 2,
          namelen: 255
        };
        return e.node_ops.statfs && Object.assign(r, e.node_ops.statfs(e.mount.opts.root)), r;
      },
      create(e, r = 438) {
        return r &= 4095, r |= 32768, n.mknod(e, r, 0);
      },
      mkdir(e, r = 511) {
        return r &= 1023, r |= 16384, n.mknod(e, r, 0);
      },
      mkdirTree(e, r) {
        var t = e.split("/"), o = "";
        for (var s of t) if (s) {
          (o || R.isAbs(e)) && (o += "/"), o += s;
          try {
            n.mkdir(o, r);
          } catch (a) {
            if (a.errno != 20) throw a;
          }
        }
      },
      mkdev(e, r, t) {
        return typeof t > "u" && (t = r, r = 438), r |= 8192, n.mknod(e, r, t);
      },
      symlink(e, r) {
        if (!Oe.resolve(e)) throw new n.ErrnoError(44);
        var t = n.lookupPath(r, {
          parent: true
        }), o = t.node;
        if (!o) throw new n.ErrnoError(44);
        var s = R.basename(r), a = n.mayCreate(o, s);
        if (a) throw new n.ErrnoError(a);
        if (!o.node_ops.symlink) throw new n.ErrnoError(63);
        return o.node_ops.symlink(o, s, e);
      },
      rename(e, r) {
        var t = R.dirname(e), o = R.dirname(r), s = R.basename(e), a = R.basename(r), i, c, f;
        if (i = n.lookupPath(e, {
          parent: true
        }), c = i.node, i = n.lookupPath(r, {
          parent: true
        }), f = i.node, !c || !f) throw new n.ErrnoError(44);
        if (c.mount !== f.mount) throw new n.ErrnoError(75);
        var h = n.lookupNode(c, s), P = Oe.relative(e, o);
        if (P.charAt(0) !== ".") throw new n.ErrnoError(28);
        if (P = Oe.relative(r, t), P.charAt(0) !== ".") throw new n.ErrnoError(55);
        var b;
        try {
          b = n.lookupNode(f, a);
        } catch {
        }
        if (h !== b) {
          var v = n.isDir(h.mode), F = n.mayDelete(c, s, v);
          if (F) throw new n.ErrnoError(F);
          if (F = b ? n.mayDelete(f, a, v) : n.mayCreate(f, a), F) throw new n.ErrnoError(F);
          if (!c.node_ops.rename) throw new n.ErrnoError(63);
          if (n.isMountpoint(h) || b && n.isMountpoint(b)) throw new n.ErrnoError(10);
          if (f !== c && (F = n.nodePermissions(c, "w"), F)) throw new n.ErrnoError(F);
          n.hashRemoveNode(h);
          try {
            c.node_ops.rename(h, f, a), h.parent = f;
          } catch (j) {
            throw j;
          } finally {
            n.hashAddNode(h);
          }
        }
      },
      rmdir(e) {
        var r = n.lookupPath(e, {
          parent: true
        }), t = r.node, o = R.basename(e), s = n.lookupNode(t, o), a = n.mayDelete(t, o, true);
        if (a) throw new n.ErrnoError(a);
        if (!t.node_ops.rmdir) throw new n.ErrnoError(63);
        if (n.isMountpoint(s)) throw new n.ErrnoError(10);
        t.node_ops.rmdir(t, o), n.destroyNode(s);
      },
      readdir(e) {
        var r = n.lookupPath(e, {
          follow: true
        }), t = r.node, o = n.checkOpExists(t.node_ops.readdir, 54);
        return o(t);
      },
      unlink(e) {
        var r = n.lookupPath(e, {
          parent: true
        }), t = r.node;
        if (!t) throw new n.ErrnoError(44);
        var o = R.basename(e), s = n.lookupNode(t, o), a = n.mayDelete(t, o, false);
        if (a) throw new n.ErrnoError(a);
        if (!t.node_ops.unlink) throw new n.ErrnoError(63);
        if (n.isMountpoint(s)) throw new n.ErrnoError(10);
        t.node_ops.unlink(t, o), n.destroyNode(s);
      },
      readlink(e) {
        var r = n.lookupPath(e), t = r.node;
        if (!t) throw new n.ErrnoError(44);
        if (!t.node_ops.readlink) throw new n.ErrnoError(28);
        return t.node_ops.readlink(t);
      },
      stat(e, r) {
        var t = n.lookupPath(e, {
          follow: !r
        }), o = t.node, s = n.checkOpExists(o.node_ops.getattr, 63);
        return s(o);
      },
      fstat(e) {
        var r = n.getStreamChecked(e), t = r.node, o = r.stream_ops.getattr, s = o ? r : t;
        return o ?? (o = t.node_ops.getattr), n.checkOpExists(o, 63), o(s);
      },
      lstat(e) {
        return n.stat(e, true);
      },
      doChmod(e, r, t, o) {
        n.doSetAttr(e, r, {
          mode: t & 4095 | r.mode & -4096,
          ctime: Date.now(),
          dontFollow: o
        });
      },
      chmod(e, r, t) {
        var o;
        if (typeof e == "string") {
          var s = n.lookupPath(e, {
            follow: !t
          });
          o = s.node;
        } else o = e;
        n.doChmod(null, o, r, t);
      },
      lchmod(e, r) {
        n.chmod(e, r, true);
      },
      fchmod(e, r) {
        var t = n.getStreamChecked(e);
        n.doChmod(t, t.node, r, false);
      },
      doChown(e, r, t) {
        n.doSetAttr(e, r, {
          timestamp: Date.now(),
          dontFollow: t
        });
      },
      chown(e, r, t, o) {
        var s;
        if (typeof e == "string") {
          var a = n.lookupPath(e, {
            follow: !o
          });
          s = a.node;
        } else s = e;
        n.doChown(null, s, o);
      },
      lchown(e, r, t) {
        n.chown(e, r, t, true);
      },
      fchown(e, r, t) {
        var o = n.getStreamChecked(e);
        n.doChown(o, o.node, false);
      },
      doTruncate(e, r, t) {
        if (n.isDir(r.mode)) throw new n.ErrnoError(31);
        if (!n.isFile(r.mode)) throw new n.ErrnoError(28);
        var o = n.nodePermissions(r, "w");
        if (o) throw new n.ErrnoError(o);
        n.doSetAttr(e, r, {
          size: t,
          timestamp: Date.now()
        });
      },
      truncate(e, r) {
        if (r < 0) throw new n.ErrnoError(28);
        var t;
        if (typeof e == "string") {
          var o = n.lookupPath(e, {
            follow: true
          });
          t = o.node;
        } else t = e;
        n.doTruncate(null, t, r);
      },
      ftruncate(e, r) {
        var t = n.getStreamChecked(e);
        if (r < 0 || !(t.flags & 2097155)) throw new n.ErrnoError(28);
        n.doTruncate(t, t.node, r);
      },
      utime(e, r, t) {
        var o = n.lookupPath(e, {
          follow: true
        }), s = o.node, a = n.checkOpExists(s.node_ops.setattr, 63);
        a(s, {
          atime: r,
          mtime: t
        });
      },
      open(e, r, t = 438) {
        if (e === "") throw new n.ErrnoError(44);
        r = typeof r == "string" ? Dr(r) : r, r & 64 ? t = t & 4095 | 32768 : t = 0;
        var o, s;
        if (typeof e == "object") o = e;
        else {
          s = e.endsWith("/");
          var a = n.lookupPath(e, {
            follow: !(r & 131072),
            noent_okay: true
          });
          o = a.node, e = a.path;
        }
        var i = false;
        if (r & 64) if (o) {
          if (r & 128) throw new n.ErrnoError(20);
        } else {
          if (s) throw new n.ErrnoError(31);
          o = n.mknod(e, t | 511, 0), i = true;
        }
        if (!o) throw new n.ErrnoError(44);
        if (n.isChrdev(o.mode) && (r &= -513), r & 65536 && !n.isDir(o.mode)) throw new n.ErrnoError(54);
        if (!i) {
          var c = n.mayOpen(o, r);
          if (c) throw new n.ErrnoError(c);
        }
        r & 512 && !i && n.truncate(o, 0), r &= -131713;
        var f = n.createStream({
          node: o,
          path: n.getPath(o),
          flags: r,
          seekable: true,
          position: 0,
          stream_ops: o.stream_ops,
          ungotten: [],
          error: false
        });
        return f.stream_ops.open && f.stream_ops.open(f), i && n.chmod(o, t & 511), f;
      },
      close(e) {
        if (n.isClosed(e)) throw new n.ErrnoError(8);
        e.getdents && (e.getdents = null);
        try {
          e.stream_ops.close && e.stream_ops.close(e);
        } catch (r) {
          throw r;
        } finally {
          n.closeStream(e.fd);
        }
        e.fd = null;
      },
      isClosed(e) {
        return e.fd === null;
      },
      llseek(e, r, t) {
        if (n.isClosed(e)) throw new n.ErrnoError(8);
        if (!e.seekable || !e.stream_ops.llseek) throw new n.ErrnoError(70);
        if (t != 0 && t != 1 && t != 2) throw new n.ErrnoError(28);
        return e.position = e.stream_ops.llseek(e, r, t), e.ungotten = [], e.position;
      },
      read(e, r, t, o, s) {
        if (d(t >= 0), o < 0 || s < 0) throw new n.ErrnoError(28);
        if (n.isClosed(e)) throw new n.ErrnoError(8);
        if ((e.flags & 2097155) === 1) throw new n.ErrnoError(8);
        if (n.isDir(e.node.mode)) throw new n.ErrnoError(31);
        if (!e.stream_ops.read) throw new n.ErrnoError(28);
        var a = typeof s < "u";
        if (!a) s = e.position;
        else if (!e.seekable) throw new n.ErrnoError(70);
        var i = e.stream_ops.read(e, r, t, o, s);
        return a || (e.position += i), i;
      },
      write(e, r, t, o, s, a) {
        if (d(t >= 0), o < 0 || s < 0) throw new n.ErrnoError(28);
        if (n.isClosed(e)) throw new n.ErrnoError(8);
        if (!(e.flags & 2097155)) throw new n.ErrnoError(8);
        if (n.isDir(e.node.mode)) throw new n.ErrnoError(31);
        if (!e.stream_ops.write) throw new n.ErrnoError(28);
        e.seekable && e.flags & 1024 && n.llseek(e, 0, 2);
        var i = typeof s < "u";
        if (!i) s = e.position;
        else if (!e.seekable) throw new n.ErrnoError(70);
        var c = e.stream_ops.write(e, r, t, o, s, a);
        return i || (e.position += c), c;
      },
      mmap(e, r, t, o, s) {
        if (o & 2 && !(s & 2) && (e.flags & 2097155) !== 2) throw new n.ErrnoError(2);
        if ((e.flags & 2097155) === 1) throw new n.ErrnoError(2);
        if (!e.stream_ops.mmap) throw new n.ErrnoError(43);
        if (!r) throw new n.ErrnoError(28);
        return e.stream_ops.mmap(e, r, t, o, s);
      },
      msync(e, r, t, o, s) {
        return d(t >= 0), e.stream_ops.msync ? e.stream_ops.msync(e, r, t, o, s) : 0;
      },
      ioctl(e, r, t) {
        if (!e.stream_ops.ioctl) throw new n.ErrnoError(59);
        return e.stream_ops.ioctl(e, r, t);
      },
      readFile(e, r = {}) {
        r.flags = r.flags || 0, r.encoding = r.encoding || "binary", r.encoding !== "utf8" && r.encoding !== "binary" && S(`Invalid encoding type "${r.encoding}"`);
        var t = n.open(e, r.flags), o = n.stat(e), s = o.size, a = new Uint8Array(s);
        return n.read(t, a, 0, s, 0), r.encoding === "utf8" && (a = Re(a)), n.close(t), a;
      },
      writeFile(e, r, t = {}) {
        t.flags = t.flags || 577;
        var o = n.open(e, t.flags, t.mode);
        typeof r == "string" && (r = new Uint8Array(Ze(r))), ArrayBuffer.isView(r) ? n.write(o, r, 0, r.byteLength, void 0, t.canOwn) : S("Unsupported data type"), n.close(o);
      },
      cwd: () => n.currentPath,
      chdir(e) {
        var r = n.lookupPath(e, {
          follow: true
        });
        if (r.node === null) throw new n.ErrnoError(44);
        if (!n.isDir(r.node.mode)) throw new n.ErrnoError(54);
        var t = n.nodePermissions(r.node, "x");
        if (t) throw new n.ErrnoError(t);
        n.currentPath = r.path;
      },
      createDefaultDirectories() {
        n.mkdir("/tmp"), n.mkdir("/home"), n.mkdir("/home/web_user");
      },
      createDefaultDevices() {
        n.mkdir("/dev"), n.registerDevice(n.makedev(1, 3), {
          read: () => 0,
          write: (o, s, a, i, c) => i,
          llseek: () => 0
        }), n.mkdev("/dev/null", n.makedev(1, 3)), Te.register(n.makedev(5, 0), Te.default_tty_ops), Te.register(n.makedev(6, 0), Te.default_tty1_ops), n.mkdev("/dev/tty", n.makedev(5, 0)), n.mkdev("/dev/tty1", n.makedev(6, 0));
        var e = new Uint8Array(1024), r = 0, t = () => (r === 0 && (sr(e), r = e.byteLength), e[--r]);
        n.createDevice("/dev", "random", t), n.createDevice("/dev", "urandom", t), n.mkdir("/dev/shm"), n.mkdir("/dev/shm/tmp");
      },
      createSpecialDirectories() {
        n.mkdir("/proc");
        var e = n.mkdir("/proc/self");
        n.mkdir("/proc/self/fd"), n.mount({
          mount() {
            var r = n.createNode(e, "fd", 16895, 73);
            return r.stream_ops = {
              llseek: y.stream_ops.llseek
            }, r.node_ops = {
              lookup(t, o) {
                var s = +o, a = n.getStreamChecked(s), i = {
                  parent: null,
                  mount: {
                    mountpoint: "fake"
                  },
                  node_ops: {
                    readlink: () => a.path
                  },
                  id: s + 1
                };
                return i.parent = i, i;
              },
              readdir() {
                return Array.from(n.streams.entries()).filter(([t, o]) => o).map(([t, o]) => t.toString());
              }
            }, r;
          }
        }, {}, "/proc/self/fd");
      },
      createStandardStreams(e, r, t) {
        e ? n.createDevice("/dev", "stdin", e) : n.symlink("/dev/tty", "/dev/stdin"), r ? n.createDevice("/dev", "stdout", null, r) : n.symlink("/dev/tty", "/dev/stdout"), t ? n.createDevice("/dev", "stderr", null, t) : n.symlink("/dev/tty1", "/dev/stderr");
        var o = n.open("/dev/stdin", 0), s = n.open("/dev/stdout", 1), a = n.open("/dev/stderr", 1);
        d(o.fd === 0, `invalid handle for stdin (${o.fd})`), d(s.fd === 1, `invalid handle for stdout (${s.fd})`), d(a.fd === 2, `invalid handle for stderr (${a.fd})`);
      },
      staticInit() {
        n.nameTable = new Array(4096), n.mount(y, {}, "/"), n.createDefaultDirectories(), n.createDefaultDevices(), n.createSpecialDirectories(), n.filesystems = {
          MEMFS: y
        };
      },
      init(e, r, t) {
        d(!n.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"), n.initialized = true, e ?? (e = l.stdin), r ?? (r = l.stdout), t ?? (t = l.stderr), n.createStandardStreams(e, r, t);
      },
      quit() {
        n.initialized = false, dr(0);
        for (var e of n.streams) e && n.close(e);
      },
      findObject(e, r) {
        var t = n.analyzePath(e, r);
        return t.exists ? t.object : null;
      },
      analyzePath(e, r) {
        try {
          var t = n.lookupPath(e, {
            follow: !r
          });
          e = t.path;
        } catch {
        }
        var o = {
          isRoot: false,
          exists: false,
          error: 0,
          name: null,
          path: null,
          object: null,
          parentExists: false,
          parentPath: null,
          parentObject: null
        };
        try {
          var t = n.lookupPath(e, {
            parent: true
          });
          o.parentExists = true, o.parentPath = t.path, o.parentObject = t.node, o.name = R.basename(e), t = n.lookupPath(e, {
            follow: !r
          }), o.exists = true, o.path = t.path, o.object = t.node, o.name = t.node.name, o.isRoot = t.path === "/";
        } catch (s) {
          o.error = s.errno;
        }
        return o;
      },
      createPath(e, r, t, o) {
        e = typeof e == "string" ? e : n.getPath(e);
        for (var s = r.split("/").reverse(); s.length; ) {
          var a = s.pop();
          if (a) {
            var i = R.join2(e, a);
            try {
              n.mkdir(i);
            } catch (c) {
              if (c.errno != 20) throw c;
            }
            e = i;
          }
        }
        return i;
      },
      createFile(e, r, t, o, s) {
        var a = R.join2(typeof e == "string" ? e : n.getPath(e), r), i = er(o, s);
        return n.create(a, i);
      },
      createDataFile(e, r, t, o, s, a) {
        var i = r;
        e && (e = typeof e == "string" ? e : n.getPath(e), i = r ? R.join2(e, r) : e);
        var c = er(o, s), f = n.create(i, c);
        if (t) {
          if (typeof t == "string") {
            for (var h = new Array(t.length), P = 0, b = t.length; P < b; ++P) h[P] = t.charCodeAt(P);
            t = h;
          }
          n.chmod(f, c | 146);
          var v = n.open(f, 577);
          n.write(v, t, 0, t.length, 0, a), n.close(v), n.chmod(f, c);
        }
      },
      createDevice(e, r, t, o) {
        var _a2;
        var s = R.join2(typeof e == "string" ? e : n.getPath(e), r), a = er(!!t, !!o);
        (_a2 = n.createDevice).major ?? (_a2.major = 64);
        var i = n.makedev(n.createDevice.major++, 0);
        return n.registerDevice(i, {
          open(c) {
            c.seekable = false;
          },
          close(c) {
            var _a3;
            ((_a3 = o == null ? void 0 : o.buffer) == null ? void 0 : _a3.length) && o(10);
          },
          read(c, f, h, P, b) {
            for (var v = 0, F = 0; F < P; F++) {
              var j;
              try {
                j = t();
              } catch {
                throw new n.ErrnoError(29);
              }
              if (j === void 0 && v === 0) throw new n.ErrnoError(6);
              if (j == null) break;
              v++, f[h + F] = j;
            }
            return v && (c.node.atime = Date.now()), v;
          },
          write(c, f, h, P, b) {
            for (var v = 0; v < P; v++) try {
              o(f[h + v]);
            } catch {
              throw new n.ErrnoError(29);
            }
            return P && (c.node.mtime = c.node.ctime = Date.now()), v;
          }
        }), n.mkdev(s, a, i);
      },
      forceLoadFile(e) {
        if (e.isDevice || e.isFolder || e.link || e.contents) return true;
        if (globalThis.XMLHttpRequest) S("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        else try {
          e.contents = L(e.url);
        } catch {
          throw new n.ErrnoError(29);
        }
      },
      createLazyFile(e, r, t, o, s) {
        class a {
          constructor() {
            __publicField(this, "lengthKnown", false);
            __publicField(this, "chunks", []);
          }
          get(v) {
            if (!(v > this.length - 1 || v < 0)) {
              var F = v % this.chunkSize, j = v / this.chunkSize | 0;
              return this.getter(j)[F];
            }
          }
          setDataGetter(v) {
            this.getter = v;
          }
          cacheLength() {
            var v = new XMLHttpRequest();
            v.open("HEAD", t, false), v.send(null), v.status >= 200 && v.status < 300 || v.status === 304 || S("Couldn't load " + t + ". Status: " + v.status);
            var F = Number(v.getResponseHeader("Content-length")), j, he = (j = v.getResponseHeader("Accept-Ranges")) && j === "bytes", ve = (j = v.getResponseHeader("Content-Encoding")) && j === "gzip", ce = 1024 * 1024;
            he || (ce = F);
            var ge = (Fe, Le) => {
              Fe > Le && S("invalid range (" + Fe + ", " + Le + ") or no bytes requested!"), Le > F - 1 && S("only " + F + " bytes available! programmer error!");
              var se = new XMLHttpRequest();
              return se.open("GET", t, false), F !== ce && se.setRequestHeader("Range", "bytes=" + Fe + "-" + Le), se.responseType = "arraybuffer", se.overrideMimeType && se.overrideMimeType("text/plain; charset=x-user-defined"), se.send(null), se.status >= 200 && se.status < 300 || se.status === 304 || S("Couldn't load " + t + ". Status: " + se.status), se.response !== void 0 ? new Uint8Array(se.response || []) : Ze(se.responseText || "");
            }, je = this;
            je.setDataGetter((Fe) => {
              var Le = Fe * ce, se = (Fe + 1) * ce - 1;
              return se = Math.min(se, F - 1), typeof je.chunks[Fe] > "u" && (je.chunks[Fe] = ge(Le, se)), typeof je.chunks[Fe] > "u" && S("doXHR failed!"), je.chunks[Fe];
            }), (ve || !F) && (ce = F = 1, F = this.getter(0).length, ce = F, U("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = F, this._chunkSize = ce, this.lengthKnown = true;
          }
          get length() {
            return this.lengthKnown || this.cacheLength(), this._length;
          }
          get chunkSize() {
            return this.lengthKnown || this.cacheLength(), this._chunkSize;
          }
        }
        if (globalThis.XMLHttpRequest) {
          E || S("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");
          var i = new a(), c = {
            isDevice: false,
            contents: i
          };
        } else var c = {
          isDevice: false,
          url: t
        };
        var f = n.createFile(e, r, c, o, s);
        c.contents ? f.contents = c.contents : c.url && (f.contents = null, f.url = c.url), Object.defineProperties(f, {
          usedBytes: {
            get: function() {
              return this.contents.length;
            }
          }
        });
        var h = {};
        for (const [b, v] of Object.entries(f.stream_ops)) h[b] = (...F) => (n.forceLoadFile(f), v(...F));
        function P(b, v, F, j, he) {
          var ve = b.node.contents;
          if (he >= ve.length) return 0;
          var ce = Math.min(ve.length - he, j);
          if (d(ce >= 0), ve.slice) for (var ge = 0; ge < ce; ge++) v[F + ge] = ve[he + ge];
          else for (var ge = 0; ge < ce; ge++) v[F + ge] = ve.get(he + ge);
          return ce;
        }
        return h.read = (b, v, F, j, he) => (n.forceLoadFile(f), P(b, v, F, j, he)), h.mmap = (b, v, F, j, he) => {
          n.forceLoadFile(f);
          var ve = ar();
          if (!ve) throw new n.ErrnoError(48);
          return P(b, X, ve, v, F), {
            ptr: ve,
            allocated: true
          };
        }, f.stream_ops = h, f;
      },
      absolutePath() {
        S("FS.absolutePath has been removed; use PATH_FS.resolve instead");
      },
      createFolder() {
        S("FS.createFolder has been removed; use FS.mkdir instead");
      },
      createLink() {
        S("FS.createLink has been removed; use FS.symlink instead");
      },
      joinPath() {
        S("FS.joinPath has been removed; use PATH.join instead");
      },
      mmapAlloc() {
        S("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
      },
      standardizePath() {
        S("FS.standardizePath has been removed; use PATH.normalize instead");
      }
    }, $e = {
      calculateAt(e, r, t) {
        if (R.isAbs(r)) return r;
        var o;
        if (e === -100) o = n.cwd();
        else {
          var s = $e.getStreamFromFD(e);
          o = s.path;
        }
        if (r.length == 0) {
          if (!t) throw new n.ErrnoError(44);
          return o;
        }
        return o + "/" + r;
      },
      writeStat(e, r) {
        p[e >> 2] = r.dev, p[e + 4 >> 2] = r.mode, p[e + 8 >> 2] = r.nlink, p[e + 12 >> 2] = r.uid, p[e + 16 >> 2] = r.gid, p[e + 20 >> 2] = r.rdev, z[e + 24 >> 3] = BigInt(r.size), ue[e + 32 >> 2] = 4096, ue[e + 36 >> 2] = r.blocks;
        var t = r.atime.getTime(), o = r.mtime.getTime(), s = r.ctime.getTime();
        return z[e + 40 >> 3] = BigInt(Math.floor(t / 1e3)), p[e + 48 >> 2] = t % 1e3 * 1e3 * 1e3, z[e + 56 >> 3] = BigInt(Math.floor(o / 1e3)), p[e + 64 >> 2] = o % 1e3 * 1e3 * 1e3, z[e + 72 >> 3] = BigInt(Math.floor(s / 1e3)), p[e + 80 >> 2] = s % 1e3 * 1e3 * 1e3, z[e + 88 >> 3] = BigInt(r.ino), 0;
      },
      writeStatFs(e, r) {
        p[e + 4 >> 2] = r.bsize, p[e + 60 >> 2] = r.bsize, z[e + 8 >> 3] = BigInt(r.blocks), z[e + 16 >> 3] = BigInt(r.bfree), z[e + 24 >> 3] = BigInt(r.bavail), z[e + 32 >> 3] = BigInt(r.files), z[e + 40 >> 3] = BigInt(r.ffree), p[e + 48 >> 2] = r.fsid, p[e + 64 >> 2] = r.flags, p[e + 56 >> 2] = r.namelen;
      },
      doMsync(e, r, t, o, s) {
        if (!n.isFile(r.node.mode)) throw new n.ErrnoError(43);
        if (o & 2) return 0;
        var a = Q.slice(e, e + t);
        n.msync(r, a, s, t, o);
      },
      getStreamFromFD(e) {
        var r = n.getStreamChecked(e);
        return r;
      },
      varargs: void 0,
      getStr(e) {
        var r = xe(e);
        return r;
      }
    };
    function Wr(e) {
      try {
        var r = $e.getStreamFromFD(e);
        return n.close(r), 0;
      } catch (t) {
        if (typeof n > "u" || t.name !== "ErrnoError") throw t;
        return t.errno;
      }
    }
    var $r = (e, r, t, o) => {
      for (var s = 0, a = 0; a < t; a++) {
        var i = p[r >> 2], c = p[r + 4 >> 2];
        r += 8;
        var f = n.read(e, X, i, c, o);
        if (f < 0) return -1;
        if (s += f, f < c) break;
      }
      return s;
    };
    function jr(e, r, t, o) {
      try {
        var s = $e.getStreamFromFD(e), a = $r(s, r, t);
        return p[o >> 2] = a, 0;
      } catch (i) {
        if (typeof n > "u" || i.name !== "ErrnoError") throw i;
        return i.errno;
      }
    }
    var Gr = 9007199254740992, Vr = -9007199254740992, Yr = (e) => e < Vr || e > Gr ? NaN : Number(e);
    function qr(e, r, t, o) {
      r = Yr(r);
      try {
        if (isNaN(r)) return 61;
        var s = $e.getStreamFromFD(e);
        return n.llseek(s, r, t), z[o >> 3] = BigInt(s.position), s.getdents && r === 0 && t === 0 && (s.getdents = null), 0;
      } catch (a) {
        if (typeof n > "u" || a.name !== "ErrnoError") throw a;
        return a.errno;
      }
    }
    var Kr = (e, r, t, o) => {
      for (var s = 0, a = 0; a < t; a++) {
        var i = p[r >> 2], c = p[r + 4 >> 2];
        r += 8;
        var f = n.write(e, X, i, c, o);
        if (f < 0) return -1;
        if (s += f, f < c) break;
      }
      return s;
    };
    function Xr(e, r, t, o) {
      try {
        var s = $e.getStreamFromFD(e), a = Kr(s, r, t);
        return p[o >> 2] = a, 0;
      } catch (i) {
        if (typeof n > "u" || i.name !== "ErrnoError") throw i;
        return i.errno;
      }
    }
    n.createPreloadedFile = Hr, n.preloadFile = cr, n.staticInit();
    {
      if (l.noExitRuntime && l.noExitRuntime, l.preloadPlugins && (lr = l.preloadPlugins), l.print && (U = l.print), l.printErr && (T = l.printErr), l.wasmBinary && (te = l.wasmBinary), Zr(), l.arguments && l.arguments, l.thisProgram && (re = l.thisProgram), d(typeof l.memoryInitializerPrefixURL > "u", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"), d(typeof l.pthreadMainPrefixURL > "u", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"), d(typeof l.cdInitializerPrefixURL > "u", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"), d(typeof l.filePackagePrefixURL > "u", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead"), d(typeof l.read > "u", "Module.read option was removed"), d(typeof l.readAsync > "u", "Module.readAsync option was removed (modify readAsync in JS)"), d(typeof l.readBinary > "u", "Module.readBinary option was removed (modify readBinary in JS)"), d(typeof l.setWindowTitle > "u", "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"), d(typeof l.TOTAL_MEMORY > "u", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"), d(typeof l.ENVIRONMENT > "u", "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"), d(typeof l.STACK_SIZE > "u", "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"), d(typeof l.wasmMemory > "u", "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"), d(typeof l.INITIAL_MEMORY > "u", "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"), l.preInit) for (typeof l.preInit == "function" && (l.preInit = [
        l.preInit
      ]); l.preInit.length > 0; ) l.preInit.shift()();
      oe("preInit");
    }
    var Qr = [
      "writeI53ToI64",
      "writeI53ToI64Clamped",
      "writeI53ToI64Signaling",
      "writeI53ToU64Clamped",
      "writeI53ToU64Signaling",
      "readI53FromI64",
      "readI53FromU64",
      "convertI32PairToI53",
      "convertI32PairToI53Checked",
      "convertU32PairToI53",
      "stackAlloc",
      "getTempRet0",
      "setTempRet0",
      "createNamedFunction",
      "zeroMemory",
      "exitJS",
      "withStackSave",
      "inetPton4",
      "inetNtop4",
      "inetPton6",
      "inetNtop6",
      "readSockaddr",
      "writeSockaddr",
      "readEmAsmArgs",
      "jstoi_q",
      "autoResumeAudioContext",
      "getDynCaller",
      "dynCall",
      "handleException",
      "keepRuntimeAlive",
      "runtimeKeepalivePush",
      "runtimeKeepalivePop",
      "callUserCallback",
      "maybeExit",
      "asmjsMangle",
      "HandleAllocator",
      "addOnInit",
      "addOnPostCtor",
      "addOnPreMain",
      "addOnExit",
      "STACK_SIZE",
      "STACK_ALIGN",
      "POINTER_SIZE",
      "ASSERTIONS",
      "ccall",
      "cwrap",
      "convertJsFunctionToWasm",
      "getEmptyTableSlot",
      "updateTableMap",
      "getFunctionAddress",
      "addFunction",
      "removeFunction",
      "intArrayToString",
      "AsciiToString",
      "stringToAscii",
      "UTF16ToString",
      "stringToUTF16",
      "lengthBytesUTF16",
      "UTF32ToString",
      "stringToUTF32",
      "lengthBytesUTF32",
      "stringToNewUTF8",
      "stringToUTF8OnStack",
      "writeArrayToMemory",
      "registerKeyEventCallback",
      "maybeCStringToJsString",
      "findEventTarget",
      "getBoundingClientRect",
      "fillMouseEventData",
      "registerMouseEventCallback",
      "registerWheelEventCallback",
      "registerUiEventCallback",
      "registerFocusEventCallback",
      "fillDeviceOrientationEventData",
      "registerDeviceOrientationEventCallback",
      "fillDeviceMotionEventData",
      "registerDeviceMotionEventCallback",
      "screenOrientation",
      "fillOrientationChangeEventData",
      "registerOrientationChangeEventCallback",
      "fillFullscreenChangeEventData",
      "registerFullscreenChangeEventCallback",
      "JSEvents_requestFullscreen",
      "JSEvents_resizeCanvasForFullscreen",
      "registerRestoreOldStyle",
      "hideEverythingExceptGivenElement",
      "restoreHiddenElements",
      "setLetterbox",
      "softFullscreenResizeWebGLRenderTarget",
      "doRequestFullscreen",
      "fillPointerlockChangeEventData",
      "registerPointerlockChangeEventCallback",
      "registerPointerlockErrorEventCallback",
      "requestPointerLock",
      "fillVisibilityChangeEventData",
      "registerVisibilityChangeEventCallback",
      "registerTouchEventCallback",
      "fillGamepadEventData",
      "registerGamepadEventCallback",
      "registerBeforeUnloadEventCallback",
      "fillBatteryEventData",
      "registerBatteryEventCallback",
      "setCanvasElementSize",
      "getCanvasElementSize",
      "jsStackTrace",
      "getCallstack",
      "convertPCtoSourceLocation",
      "checkWasiClock",
      "wasiRightsToMuslOFlags",
      "wasiOFlagsToMuslOFlags",
      "safeSetTimeout",
      "setImmediateWrapped",
      "safeRequestAnimationFrame",
      "clearImmediateWrapped",
      "registerPostMainLoop",
      "registerPreMainLoop",
      "getPromise",
      "makePromise",
      "idsToPromises",
      "makePromiseCallback",
      "findMatchingCatch",
      "Browser_asyncPrepareDataCounter",
      "isLeapYear",
      "ydayFromDate",
      "arraySum",
      "addDays",
      "getSocketFromFD",
      "getSocketAddress",
      "FS_mkdirTree",
      "_setNetworkCallback",
      "heapObjectForWebGLType",
      "toTypedArrayIndex",
      "webgl_enable_ANGLE_instanced_arrays",
      "webgl_enable_OES_vertex_array_object",
      "webgl_enable_WEBGL_draw_buffers",
      "webgl_enable_WEBGL_multi_draw",
      "webgl_enable_EXT_polygon_offset_clamp",
      "webgl_enable_EXT_clip_control",
      "webgl_enable_WEBGL_polygon_mode",
      "emscriptenWebGLGet",
      "computeUnpackAlignedImageSize",
      "colorChannelsInGlTextureFormat",
      "emscriptenWebGLGetTexPixelData",
      "emscriptenWebGLGetUniform",
      "webglGetUniformLocation",
      "webglPrepareUniformLocationsBeforeFirstUse",
      "webglGetLeftBracePos",
      "emscriptenWebGLGetVertexAttrib",
      "__glGetActiveAttribOrUniform",
      "writeGLArray",
      "registerWebGlEventCallback",
      "runAndAbortIfError",
      "ALLOC_NORMAL",
      "ALLOC_STACK",
      "allocate",
      "writeStringToMemory",
      "writeAsciiToMemory",
      "allocateUTF8",
      "allocateUTF8OnStack",
      "demangle",
      "stackTrace",
      "getNativeTypeSize"
    ];
    Qr.forEach(de);
    var Jr = [
      "run",
      "out",
      "err",
      "callMain",
      "abort",
      "wasmExports",
      "HEAPF32",
      "HEAP8",
      "HEAP16",
      "HEAPU16",
      "HEAP32",
      "HEAP64",
      "HEAPU64",
      "writeStackCookie",
      "checkStackCookie",
      "INT53_MAX",
      "INT53_MIN",
      "bigintToI53Checked",
      "stackSave",
      "stackRestore",
      "ptrToString",
      "getHeapMax",
      "growMemory",
      "ENV",
      "ERRNO_CODES",
      "strError",
      "DNS",
      "Protocols",
      "Sockets",
      "timers",
      "warnOnce",
      "readEmAsmArgsArray",
      "getExecutableName",
      "asyncLoad",
      "alignMemory",
      "mmapAlloc",
      "wasmTable",
      "wasmMemory",
      "getUniqueRunDependency",
      "noExitRuntime",
      "addRunDependency",
      "removeRunDependency",
      "addOnPreRun",
      "addOnPostRun",
      "freeTableIndexes",
      "functionsInTableMap",
      "setValue",
      "getValue",
      "PATH",
      "PATH_FS",
      "UTF8Decoder",
      "UTF8ArrayToString",
      "UTF8ToString",
      "stringToUTF8Array",
      "stringToUTF8",
      "lengthBytesUTF8",
      "intArrayFromString",
      "UTF16Decoder",
      "JSEvents",
      "specialHTMLTargets",
      "findCanvasEventTarget",
      "currentFullscreenStrategy",
      "restoreOldWindowedStyle",
      "UNWIND_CACHE",
      "ExitStatus",
      "getEnvStrings",
      "doReadv",
      "doWritev",
      "initRandomFill",
      "randomFill",
      "emSetImmediate",
      "emClearImmediate_deps",
      "emClearImmediate",
      "promiseMap",
      "uncaughtExceptionCount",
      "exceptionLast",
      "exceptionCaught",
      "ExceptionInfo",
      "Browser",
      "requestFullscreen",
      "requestFullScreen",
      "setCanvasSize",
      "getUserMedia",
      "createContext",
      "getPreloadedImageData__data",
      "wget",
      "MONTH_DAYS_REGULAR",
      "MONTH_DAYS_LEAP",
      "MONTH_DAYS_REGULAR_CUMULATIVE",
      "MONTH_DAYS_LEAP_CUMULATIVE",
      "SYSCALLS",
      "preloadPlugins",
      "FS_createPreloadedFile",
      "FS_preloadFile",
      "FS_modeStringToFlags",
      "FS_getMode",
      "FS_stdin_getChar_buffer",
      "FS_stdin_getChar",
      "FS_unlink",
      "FS_createPath",
      "FS_createDevice",
      "FS_readFile",
      "FS",
      "FS_root",
      "FS_mounts",
      "FS_devices",
      "FS_streams",
      "FS_nextInode",
      "FS_nameTable",
      "FS_currentPath",
      "FS_initialized",
      "FS_ignorePermissions",
      "FS_filesystems",
      "FS_syncFSRequests",
      "FS_lookupPath",
      "FS_getPath",
      "FS_hashName",
      "FS_hashAddNode",
      "FS_hashRemoveNode",
      "FS_lookupNode",
      "FS_createNode",
      "FS_destroyNode",
      "FS_isRoot",
      "FS_isMountpoint",
      "FS_isFile",
      "FS_isDir",
      "FS_isLink",
      "FS_isChrdev",
      "FS_isBlkdev",
      "FS_isFIFO",
      "FS_isSocket",
      "FS_flagsToPermissionString",
      "FS_nodePermissions",
      "FS_mayLookup",
      "FS_mayCreate",
      "FS_mayDelete",
      "FS_mayOpen",
      "FS_checkOpExists",
      "FS_nextfd",
      "FS_getStreamChecked",
      "FS_getStream",
      "FS_createStream",
      "FS_closeStream",
      "FS_dupStream",
      "FS_doSetAttr",
      "FS_chrdev_stream_ops",
      "FS_major",
      "FS_minor",
      "FS_makedev",
      "FS_registerDevice",
      "FS_getDevice",
      "FS_getMounts",
      "FS_syncfs",
      "FS_mount",
      "FS_unmount",
      "FS_lookup",
      "FS_mknod",
      "FS_statfs",
      "FS_statfsStream",
      "FS_statfsNode",
      "FS_create",
      "FS_mkdir",
      "FS_mkdev",
      "FS_symlink",
      "FS_rename",
      "FS_rmdir",
      "FS_readdir",
      "FS_readlink",
      "FS_stat",
      "FS_fstat",
      "FS_lstat",
      "FS_doChmod",
      "FS_chmod",
      "FS_lchmod",
      "FS_fchmod",
      "FS_doChown",
      "FS_chown",
      "FS_lchown",
      "FS_fchown",
      "FS_doTruncate",
      "FS_truncate",
      "FS_ftruncate",
      "FS_utime",
      "FS_open",
      "FS_close",
      "FS_isClosed",
      "FS_llseek",
      "FS_read",
      "FS_write",
      "FS_mmap",
      "FS_msync",
      "FS_ioctl",
      "FS_writeFile",
      "FS_cwd",
      "FS_chdir",
      "FS_createDefaultDirectories",
      "FS_createDefaultDevices",
      "FS_createSpecialDirectories",
      "FS_createStandardStreams",
      "FS_staticInit",
      "FS_init",
      "FS_quit",
      "FS_findObject",
      "FS_analyzePath",
      "FS_createFile",
      "FS_createDataFile",
      "FS_forceLoadFile",
      "FS_createLazyFile",
      "FS_absolutePath",
      "FS_createFolder",
      "FS_createLink",
      "FS_joinPath",
      "FS_mmapAlloc",
      "FS_standardizePath",
      "MEMFS",
      "TTY",
      "PIPEFS",
      "SOCKFS",
      "tempFixedLengthArray",
      "miniTempWebGLFloatBuffers",
      "miniTempWebGLIntBuffers",
      "GL",
      "AL",
      "GLUT",
      "EGL",
      "GLEW",
      "IDBStore",
      "SDL",
      "SDL_gfx",
      "print",
      "printErr",
      "jstoi_s"
    ];
    Jr.forEach(le);
    function Zr() {
      Z("fetchSettings"), Z("logReadFiles"), Z("loadSplitModule");
    }
    l._deform = k("_deform"), l._malloc = k("_malloc"), l._free = k("_free"), l._modal = k("_modal"), l._modal_paz = k("_modal_paz"), l._plate_q4_solve = k("_plate_q4_solve"), l._slopeAllocDouble = k("_slopeAllocDouble"), l._slopeStabilitySolver = k("_slopeStabilitySolver"), l._nonlinear_dynamic = k("_nonlinear_dynamic"), l._steel02_test = k("_steel02_test"), l._cyclic_pushover = k("_cyclic_pushover"), l._concrete02_test = k("_concrete02_test");
    var dr = k("_fflush"), fr = k("_strerror"), rr = k("_emscripten_stack_get_end"), ur = k("_emscripten_stack_init"), Xe = k("wasmMemory");
    function et(e) {
      d(typeof e.deform < "u", "missing Wasm export: deform"), d(typeof e.malloc < "u", "missing Wasm export: malloc"), d(typeof e.free < "u", "missing Wasm export: free"), d(typeof e.modal < "u", "missing Wasm export: modal"), d(typeof e.modal_paz < "u", "missing Wasm export: modal_paz"), d(typeof e.plate_q4_solve < "u", "missing Wasm export: plate_q4_solve"), d(typeof e.slopeAllocDouble < "u", "missing Wasm export: slopeAllocDouble"), d(typeof e.slopeStabilitySolver < "u", "missing Wasm export: slopeStabilitySolver"), d(typeof e.nonlinear_dynamic < "u", "missing Wasm export: nonlinear_dynamic"), d(typeof e.steel02_test < "u", "missing Wasm export: steel02_test"), d(typeof e.cyclic_pushover < "u", "missing Wasm export: cyclic_pushover"), d(typeof e.concrete02_test < "u", "missing Wasm export: concrete02_test"), d(typeof e.fflush < "u", "missing Wasm export: fflush"), d(typeof e.strerror < "u", "missing Wasm export: strerror"), d(typeof e.emscripten_stack_get_end < "u", "missing Wasm export: emscripten_stack_get_end"), d(typeof e.emscripten_stack_get_base < "u", "missing Wasm export: emscripten_stack_get_base"), d(typeof e.emscripten_stack_init < "u", "missing Wasm export: emscripten_stack_init"), d(typeof e.emscripten_stack_get_free < "u", "missing Wasm export: emscripten_stack_get_free"), d(typeof e._emscripten_stack_restore < "u", "missing Wasm export: _emscripten_stack_restore"), d(typeof e._emscripten_stack_alloc < "u", "missing Wasm export: _emscripten_stack_alloc"), d(typeof e.emscripten_stack_get_current < "u", "missing Wasm export: emscripten_stack_get_current"), d(typeof e.memory < "u", "missing Wasm export: memory"), d(typeof e.__indirect_function_table < "u", "missing Wasm export: __indirect_function_table"), l._deform = w("deform", 43), l._malloc = w("malloc", 1), l._free = w("free", 1), l._modal = w("modal", 39), l._modal_paz = w("modal_paz", 42), l._plate_q4_solve = w("plate_q4_solve", 24), l._slopeAllocDouble = w("slopeAllocDouble", 1), l._slopeStabilitySolver = w("slopeStabilitySolver", 16), l._nonlinear_dynamic = w("nonlinear_dynamic", 20), l._steel02_test = w("steel02_test", 8), l._cyclic_pushover = w("cyclic_pushover", 40), l._concrete02_test = w("concrete02_test", 10), dr = w("fflush", 1), fr = w("strerror", 1), rr = e.emscripten_stack_get_end, e.emscripten_stack_get_base, ur = e.emscripten_stack_init, e.emscripten_stack_get_free, e._emscripten_stack_restore, e._emscripten_stack_alloc, e.emscripten_stack_get_current, Xe = e.memory, e.__indirect_function_table;
    }
    var mr = {
      __assert_fail: yr,
      __cxa_throw: wr,
      _abort_js: Sr,
      _tzset_js: Fr,
      emscripten_resize_heap: br,
      environ_get: Mr,
      environ_sizes_get: Nr,
      fd_close: Wr,
      fd_read: jr,
      fd_seek: qr,
      fd_write: Xr
    }, hr;
    function rt() {
      ur(), ne();
    }
    function tr() {
      if (Me > 0) {
        We = tr;
        return;
      }
      if (rt(), me(), Me > 0) {
        We = tr;
        return;
      }
      function e() {
        var _a2;
        d(!hr), hr = true, l.calledRun = true, !x && (Ee(), _e == null ? void 0 : _e(l), (_a2 = l.onRuntimeInitialized) == null ? void 0 : _a2.call(l), oe("onRuntimeInitialized"), d(!l._main, 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'), ye());
      }
      l.setStatus ? (l.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => l.setStatus(""), 1), e();
      }, 1)) : e(), K();
    }
    var Ce;
    Ce = await O(), tr(), ae ? _ = l : _ = new Promise((e, r) => {
      _e = e, fe = r;
    });
    for (const e of Object.keys(l)) e in u || Object.defineProperty(u, e, {
      configurable: true,
      get() {
        S(`Access to module property ('${e}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`);
      }
    });
    return _;
  };
  const D = await Ve();
  at = function(u, _, l, m) {
    if (u.length === 0) return;
    const E = [], g = pe(u.flat(), Float64Array, D.HEAPF64);
    E.push(g);
    const G = _.flat(), C = pe(G, Uint32Array, D.HEAPU32);
    E.push(C);
    const re = _.map((O) => O.length), B = pe(re, Uint32Array, D.HEAPU32);
    E.push(B);
    const V = l.supports ? Array.from(l.supports.keys()) : [], ie = l.supports ? Array.from(l.supports.values()).flat().map((O) => O ? 1 : 0) : [], Y = pe(V, Uint32Array, D.HEAPU32);
    E.push(Y);
    const L = pe(ie, Uint8Array, D.HEAPU8);
    E.push(L);
    const $ = l.loads ? Array.from(l.loads.keys()) : [], U = l.loads ? Array.from(l.loads.values()).flat() : [], T = pe($, Uint32Array, D.HEAPU32);
    E.push(T);
    const te = pe(U, Float64Array, D.HEAPF64);
    E.push(te);
    const x = (O) => {
      const Pe = O ? Array.from(O.keys()) : [], Ye = O ? Array.from(O.values()) : [], qe = pe(Pe, Uint32Array, D.HEAPU32);
      E.push(qe);
      const Ue = pe(Ye, Float64Array, D.HEAPF64);
      return E.push(Ue), {
        keysPtr: qe,
        valuesPtr: Ue,
        size: Pe.length
      };
    }, d = x(m.elasticities), q = x(m.elasticitiesOrthogonal), ne = x(m.areas), K = x(m.momentsOfInertiaZ), oe = x(m.momentsOfInertiaY), k = x(m.shearModuli), Z = x(m.torsionalConstants), N = x(m.thicknesses), de = x(m.poissonsRatios), le = x(m.shearAreasY), _e = x(m.shearAreasZ), fe = m.rigidOffsets ? Array.from(m.rigidOffsets.keys()) : [], X = m.rigidOffsets ? Array.from(m.rigidOffsets.values()).flat() : [], Q = pe(fe, Uint32Array, D.HEAPU32);
    E.push(Q);
    const ue = pe(X, Float64Array, D.HEAPF64);
    E.push(ue);
    const p = m.momentReleases ? Array.from(m.momentReleases.keys()) : [], z = m.momentReleases ? Array.from(m.momentReleases.values()).flat().map((O) => O ? 1 : 0) : [], ae = pe(p, Uint32Array, D.HEAPU32);
    E.push(ae);
    const J = pe(z, Uint8Array, D.HEAPU8);
    E.push(J);
    const me = D._malloc(4);
    E.push(me);
    const Ee = D._malloc(4);
    E.push(Ee);
    const ye = D._malloc(4);
    E.push(ye);
    const S = D._malloc(4);
    E.push(S), D._deform(g, u.length, C, G.length, B, _.length, Y, L, V.length, T, te, $.length, d.keysPtr, d.valuesPtr, d.size, ne.keysPtr, ne.valuesPtr, ne.size, K.keysPtr, K.valuesPtr, K.size, oe.keysPtr, oe.valuesPtr, oe.size, k.keysPtr, k.valuesPtr, k.size, Z.keysPtr, Z.valuesPtr, Z.size, N.keysPtr, N.valuesPtr, N.size, de.keysPtr, de.valuesPtr, de.size, q.keysPtr, q.valuesPtr, q.size, le.keysPtr, le.valuesPtr, le.size, _e.keysPtr, _e.valuesPtr, _e.size, Q, ue, fe.length, ae, J, p.length, me, Ee, ye, S);
    const w = D.HEAPU32[me / 4], H = D.HEAPU32[Ee / 4], Se = D.HEAPU32[ye / 4], A = D.HEAPU32[S / 4], I = new Float64Array(D.HEAPF64.buffer, w, H), W = new Float64Array(D.HEAPF64.buffer, Se, A), ke = /* @__PURE__ */ new Map();
    for (let O = 0; O < H; O += 7) {
      const Pe = I[O];
      ke.set(Pe, Array.from(I.slice(O + 1, O + 7)));
    }
    const be = /* @__PURE__ */ new Map();
    for (let O = 0; O < A; O += 7) {
      const Pe = W[O];
      be.set(Pe, Array.from(W.slice(O + 1, O + 7)));
    }
    return w && E.push(w), Se && E.push(Se), E.forEach((O) => D._free(O)), {
      deformations: ke,
      reactions: be
    };
  };
  function pe(u, _, l) {
    const m = new _(u), E = D._malloc(m.length * m.BYTES_PER_ELEMENT);
    return l.set(m, E / m.BYTES_PER_ELEMENT), E;
  }
  const M = await Ve();
  it = function(u, _, l, m, E = 10) {
    if (u.length === 0) return {
      frequencies: [],
      modeShapes: [],
      massParticipation: []
    };
    const g = [], G = Ne(u.flat(), Float64Array, M.HEAPF64);
    g.push(G);
    const C = _.flat(), re = Ne(C, Uint32Array, M.HEAPU32);
    g.push(re);
    const B = _.map((w) => w.length), V = Ne(B, Uint32Array, M.HEAPU32);
    g.push(V);
    const ie = l.supports ? Array.from(l.supports.keys()) : [], Y = l.supports ? Array.from(l.supports.values()).flat().map((w) => w ? 1 : 0) : [], L = Ne(ie, Uint32Array, M.HEAPU32);
    g.push(L);
    const $ = Ne(Y, Uint8Array, M.HEAPU8);
    g.push($);
    const U = (w) => {
      const H = w ? Array.from(w.keys()) : [], Se = w ? Array.from(w.values()) : [], A = Ne(H, Uint32Array, M.HEAPU32);
      g.push(A);
      const I = Ne(Se, Float64Array, M.HEAPF64);
      return g.push(I), {
        keysPtr: A,
        valuesPtr: I,
        size: H.length
      };
    }, T = U(m.elasticities), te = U(m.areas), x = U(m.momentsOfInertiaZ), d = U(m.momentsOfInertiaY), q = U(m.shearModuli), ne = U(m.torsionalConstants), K = U(m.densities), oe = M._malloc(4);
    g.push(oe);
    const k = M._malloc(4);
    g.push(k);
    const Z = M._malloc(4);
    g.push(Z);
    const N = M._malloc(4);
    g.push(N);
    const de = M._malloc(4);
    g.push(de);
    const le = M._malloc(4);
    g.push(le);
    const _e = M._malloc(4);
    g.push(_e);
    const fe = M._malloc(4);
    g.push(fe), M._modal(G, u.length, re, C.length, V, _.length, L, $, ie.length, T.keysPtr, T.valuesPtr, T.size, te.keysPtr, te.valuesPtr, te.size, x.keysPtr, x.valuesPtr, x.size, d.keysPtr, d.valuesPtr, d.size, q.keysPtr, q.valuesPtr, q.size, ne.keysPtr, ne.valuesPtr, ne.size, K.keysPtr, K.valuesPtr, K.size, E, oe, k, Z, N, de, le, _e, fe);
    const X = M.HEAPU32[oe / 4], Q = M.HEAPU32[k / 4], ue = M.HEAPU32[Z / 4], p = M.HEAPU32[N / 4], z = M.HEAPU32[de / 4], ae = M.HEAPU32[le / 4], J = M.HEAPU32[_e / 4], me = M.HEAPU32[fe / 4];
    let Ee = [], ye = [], S = [];
    if (Q > 0 && X) {
      const w = new Float64Array(M.HEAPF64.buffer, X, Q);
      Ee = Array.from(w), g.push(X);
    }
    if (p > 0 && z > 0 && ue) {
      const w = new Float64Array(M.HEAPF64.buffer, ue, p * z);
      for (let H = 0; H < p; H++) ye.push(Array.from(w.slice(H * z, (H + 1) * z)));
      g.push(ue);
    }
    if (J > 0 && me > 0 && ae) {
      const w = new Float64Array(M.HEAPF64.buffer, ae, J * me);
      for (let H = 0; H < J; H++) S.push(Array.from(w.slice(H * me, (H + 1) * me)));
      g.push(ae);
    }
    return g.forEach((w) => M._free(w)), {
      frequencies: Ee,
      modeShapes: ye,
      massParticipation: S
    };
  };
  function Ne(u, _, l) {
    const m = new _(u), E = M._malloc(m.length * m.BYTES_PER_ELEMENT);
    return l.set(m, E / m.BYTES_PER_ELEMENT), E;
  }
  await Ve();
  const we = await Ve();
  lt = function(u) {
    const { nodes: _, elements: l, E: m, nu: E, gamma: g, c: G, phi: C, thickness: re = 1, supports: B, surcharge: V = 0, surfaceYThreshold: ie = -1e10 } = u, Y = [], L = _.flat(), $ = st(L);
    Y.push($);
    const U = l.flat(), T = pr(U);
    Y.push(T);
    const te = [];
    for (const N of B) te.push(N.node, N.fixX ? 1 : 0, N.fixY ? 1 : 0);
    const x = pr(te);
    Y.push(x);
    const d = l.length, q = _.length, ne = we._slopeAllocDouble(d);
    Y.push(ne);
    const K = we._slopeAllocDouble(q * 2);
    Y.push(K);
    const oe = we._slopeStabilitySolver($, q, T, d, m, E, g, G, C, re, x, B.length, V, ie, ne, K), k = [];
    for (let N = 0; N < d; N++) k.push(we.HEAPF64[ne / 8 + N]);
    const Z = [];
    for (let N = 0; N < q; N++) Z.push([
      we.HEAPF64[K / 8 + 2 * N],
      we.HEAPF64[K / 8 + 2 * N + 1]
    ]);
    return Y.forEach((N) => we._free(N)), {
      fos: oe,
      plasticStrain: k,
      displacements: Z
    };
  };
  function st(u) {
    const _ = new Float64Array(u), l = we._malloc(_.length * _.BYTES_PER_ELEMENT);
    return we.HEAPF64.set(_, l / 8), l;
  }
  function pr(u) {
    const _ = new Uint32Array(u), l = we._malloc(_.length * _.BYTES_PER_ELEMENT);
    return we.HEAPU32.set(_, l / 4), l;
  }
  const ee = await Ve();
  function Ge(u, _, l) {
    const m = new _(u), E = ee._malloc(m.length * m.BYTES_PER_ELEMENT);
    return l.set(m, E / m.BYTES_PER_ELEMENT), E;
  }
  ct = function(u) {
    const _ = [];
    let l = [], m = 0;
    u.nodes && u.nodes.length > 0 && (m = u.nodes.length, l = u.nodes.flat());
    const E = Ge(l.length > 0 ? l : [
      0
    ], Float64Array, ee.HEAPF64);
    _.push(E);
    let g = [], G = 0;
    u.elements && u.elements.length > 0 && (G = u.elements.length, g = u.elements.flat());
    const C = Ge(g.length > 0 ? g : [
      0
    ], Int32Array, ee.HEAPU32);
    _.push(C);
    let re = [], B = 0;
    u.bcs && u.bcs.length > 0 && (B = u.bcs.length, re = u.bcs.flatMap((A) => [
      A.node,
      A.dof,
      A.value
    ]));
    const V = Ge(re.length > 0 ? re : [
      0
    ], Float64Array, ee.HEAPF64);
    _.push(V);
    let ie = [], Y = 0;
    u.pointLoads && u.pointLoads.length > 0 && (Y = u.pointLoads.length, ie = u.pointLoads.flatMap((A) => [
      A.node,
      A.dof,
      A.value
    ]));
    const L = Ge(ie.length > 0 ? ie : [
      0
    ], Float64Array, ee.HEAPF64);
    _.push(L);
    const $ = u.meshLx ?? 0, U = u.meshLy ?? 0, T = u.meshNx ?? 0, te = u.meshNy ?? 0, d = {
      none: 0,
      "simply-supported": 1,
      clamped: 2
    }[u.bcType ?? "none"] ?? 0, q = u.theoryType ?? 0;
    let ne = [], K = 0;
    u.springs && u.springs.length > 0 && (K = u.springs.length, ne = u.springs.flatMap((A) => [
      A.node,
      A.dof,
      A.k
    ]));
    const oe = Ge(ne.length > 0 ? ne : [
      0
    ], Float64Array, ee.HEAPF64);
    _.push(oe);
    const k = ee._malloc(4);
    _.push(k);
    const Z = ee._malloc(4);
    _.push(Z);
    const N = ee._malloc(4);
    _.push(N);
    const de = ee._malloc(4);
    _.push(de), ee._plate_q4_solve(E, m, C, G, u.E, u.nu, u.thickness, V, B, u.pressure ?? 0, L, Y, $, U, T, te, d, q, oe, K, k, Z, N, de);
    const le = ee.HEAPU32[k / 4], _e = ee.HEAPU32[Z / 4], fe = ee.HEAPU32[N / 4], X = ee.HEAPU32[de / 4], Q = new Float64Array(ee.HEAPF64.buffer, le, _e), ue = Q[0], p = Q[1], z = [];
    let ae = 0;
    for (let A = 0; A < ue; A++) {
      const I = 2 + A * 5, W = {
        x: Q[I],
        y: Q[I + 1],
        w: Q[I + 2],
        bx: Q[I + 3],
        by: Q[I + 4]
      };
      z.push(W), Math.abs(W.w) > Math.abs(ae) && (ae = W.w);
    }
    const J = new Float64Array(ee.HEAPF64.buffer, fe, X), me = [];
    let Ee = 0, ye = 0, S = 0, w = 0, H = 0;
    for (let A = 0; A < p; A++) {
      const I = A * 9, W = {
        nodes: [
          J[I],
          J[I + 1],
          J[I + 2],
          J[I + 3]
        ],
        Mxx: J[I + 4],
        Myy: J[I + 5],
        Mxy: J[I + 6],
        Qx: J[I + 7],
        Qy: J[I + 8]
      };
      me.push(W), Math.abs(W.Mxx) > Math.abs(Ee) && (Ee = W.Mxx), Math.abs(W.Myy) > Math.abs(ye) && (ye = W.Myy), Math.abs(W.Mxy) > Math.abs(S) && (S = W.Mxy), Math.abs(W.Qx) > Math.abs(w) && (w = W.Qx), Math.abs(W.Qy) > Math.abs(H) && (H = W.Qy);
    }
    let Se;
    if ($ > 0 && U > 0) {
      const A = $ / 2, I = U / 2;
      let W = 1 / 0;
      for (const ke of z) {
        const be = Math.hypot(ke.x - A, ke.y - I);
        be < W && (W = be, Se = ke.w);
      }
    }
    return le && _.push(le), fe && _.push(fe), _.forEach((A) => ee._free(A)), {
      nodeResults: z,
      elementResults: me,
      maxW: ae,
      maxMxx: Ee,
      maxMyy: ye,
      maxMxy: S,
      maxQx: w,
      maxQy: H,
      centerW: Se
    };
  };
})();
export {
  Ve as M,
  ot as _,
  __tla,
  at as d,
  it as m,
  ct as p,
  lt as s
};
