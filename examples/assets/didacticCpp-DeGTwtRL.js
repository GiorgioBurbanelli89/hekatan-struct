var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let Le, it, ht, dt, ft, mt, ut;
let __tla = (async () => {
  let st, at, _r;
  st = "modulepreload";
  at = function(f, p) {
    return new URL(f, p).href;
  };
  _r = {};
  it = function(p, a, m) {
    let h = Promise.resolve();
    if (a && a.length > 0) {
      const $ = document.getElementsByTagName("link"), C = document.querySelector("meta[property=csp-nonce]"), re = (C == null ? void 0 : C.nonce) || (C == null ? void 0 : C.getAttribute("nonce"));
      h = Promise.allSettled(a.map((I) => {
        if (I = at(I, m), I in _r) return;
        _r[I] = true;
        const j = I.endsWith(".css"), ie = j ? '[rel="stylesheet"]' : "";
        if (!!m) for (let _ = $.length - 1; _ >= 0; _--) {
          const P = $[_];
          if (P.href === I && (!j || P.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${I}"]${ie}`)) return;
        const U = document.createElement("link");
        if (U.rel = j ? "stylesheet" : st, j || (U.as = "script"), U.crossOrigin = "", U.href = I, re && U.setAttribute("nonce", re), document.head.appendChild(U), j) return new Promise((_, P) => {
          U.addEventListener("load", _), U.addEventListener("error", () => P(new Error(`Unable to preload CSS for ${I}`)));
        });
      }));
    }
    function w($) {
      const C = new Event("vite:preloadError", {
        cancelable: true
      });
      if (C.payload = $, window.dispatchEvent(C), !C.defaultPrevented) throw $;
    }
    return h.then(($) => {
      for (const C of $ || []) C.status === "rejected" && w(C.reason);
      return p().catch(w);
    });
  };
  Le = async function(f = {}) {
    var _a, _b, _c, _d, _e2, _f;
    var p;
    (function() {
      var _a2;
      function e(u) {
        u = u.split("-")[0];
        for (var y = u.split(".").slice(0, 3); y.length < 3; ) y.push("00");
        return y = y.map((D, L, g) => D.padStart(2, "0")), y.join("");
      }
      var r = (u) => [
        u / 1e4 | 0,
        (u / 100 | 0) % 100,
        u % 100
      ].join("."), t = 2147483647, o = typeof process < "u" && ((_a2 = process.versions) == null ? void 0 : _a2.node) ? e(process.versions.node) : t;
      if (o < 16e4) throw new Error(`This emscripten-generated code requires node v${r(16e4)} (detected v${r(o)})`);
      var s = typeof navigator < "u" && navigator.userAgent;
      if (s) {
        var i = s.includes("Safari/") && !s.includes("Chrome/") && s.match(/Version\/(\d+\.?\d*\.?\d*)/) ? e(s.match(/Version\/(\d+\.?\d*\.?\d*)/)[1]) : t;
        if (i < 15e4) throw new Error(`This emscripten-generated code requires Safari v${r(15e4)} (detected v${i})`);
        var l = s.match(/Firefox\/(\d+(?:\.\d+)?)/) ? parseFloat(s.match(/Firefox\/(\d+(?:\.\d+)?)/)[1]) : t;
        if (l < 79) throw new Error(`This emscripten-generated code requires Firefox v79 (detected v${l})`);
        var c = s.match(/Chrome\/(\d+(?:\.\d+)?)/) ? parseFloat(s.match(/Chrome\/(\d+(?:\.\d+)?)/)[1]) : t;
        if (c < 85) throw new Error(`This emscripten-generated code requires Chrome v85 (detected v${c})`);
      }
    })();
    var a = f, m = !!globalThis.window, h = !!globalThis.WorkerGlobalScope, w = ((_b = (_a = globalThis.process) == null ? void 0 : _a.versions) == null ? void 0 : _b.node) && ((_c = globalThis.process) == null ? void 0 : _c.type) != "renderer", $ = !m && !w && !h;
    if (w) {
      const { createRequire: e } = await it(() => import("./__vite-browser-external-D7Ct-6yo.js").then((r) => r._), [], import.meta.url);
      var C = e(import.meta.url);
    }
    var re = "./this.program", I = import.meta.url, j = "";
    function ie(e) {
      return a.locateFile ? a.locateFile(e, j) : j + e;
    }
    var Y, U;
    if (w) {
      if (!(((_e2 = (_d = globalThis.process) == null ? void 0 : _d.versions) == null ? void 0 : _e2.node) && ((_f = globalThis.process) == null ? void 0 : _f.type) != "renderer")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
      var _ = C("fs");
      I.startsWith("file:") && (j = C("path").dirname(C("url").fileURLToPath(I)) + "/"), U = (r) => {
        r = z(r) ? new URL(r) : r;
        var t = _.readFileSync(r);
        return d(Buffer.isBuffer(t)), t;
      }, Y = async (r, t = true) => {
        r = z(r) ? new URL(r) : r;
        var o = _.readFileSync(r, t ? void 0 : "utf8");
        return d(t ? Buffer.isBuffer(o) : typeof o == "string"), o;
      }, process.argv.length > 1 && (re = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2);
    } else if (!$) if (m || h) {
      try {
        j = new URL(".", I).href;
      } catch {
      }
      if (!(globalThis.window || globalThis.WorkerGlobalScope)) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
      h && (U = (e) => {
        var r = new XMLHttpRequest();
        return r.open("GET", e, false), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response);
      }), Y = async (e) => {
        if (z(e)) return new Promise((t, o) => {
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
    var P = console.log.bind(console), S = console.error.bind(console);
    d(!$, "shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");
    var E;
    globalThis.WebAssembly || S("no native wasm support detected");
    var O = false;
    function d(e, r) {
      e || b("Assertion failed" + (r ? ": " + r : ""));
    }
    var z = (e) => e.startsWith("file://");
    function B() {
      var e = tr();
      d((e & 3) == 0), e == 0 && (e += 4), v[e >> 2] = 34821223, v[e + 4 >> 2] = 2310721022, v[0] = 1668509029;
    }
    function X() {
      if (!O) {
        var e = tr();
        e == 0 && (e += 4);
        var r = v[e >> 2], t = v[e + 4 >> 2];
        (r != 34821223 || t != 2310721022) && b(`Stack overflow! Stack cookie has been overwritten at ${He(e)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${He(t)} ${He(r)}`), v[0] != 1668509029 && b("Runtime error: The application has corrupted its heap memory area (address zero)!");
      }
    }
    (() => {
      var e = new Int16Array(1), r = new Int8Array(e.buffer);
      e[0] = 25459, (r[0] !== 115 || r[1] !== 99) && b("Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)");
    })();
    function te(e) {
      Object.getOwnPropertyDescriptor(a, e) || Object.defineProperty(a, e, {
        configurable: true,
        set() {
          b(`Attempt to set \`Module.${e}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`);
        }
      });
    }
    function k(e) {
      return () => d(false, `call to '${e}' via reference taken before Wasm module initialization`);
    }
    function ne(e) {
      Object.getOwnPropertyDescriptor(a, e) && b(`\`Module.${e}\` was supplied but \`${e}\` not included in INCOMING_MODULE_JS_API`);
    }
    function R(e) {
      return e === "FS_createPath" || e === "FS_createDataFile" || e === "FS_createPreloadedFile" || e === "FS_preloadFile" || e === "FS_unlink" || e === "addRunDependency" || e === "FS_createLazyFile" || e === "FS_createDevice" || e === "removeRunDependency";
    }
    function le(e) {
      ce(e);
    }
    function ce(e) {
      Object.getOwnPropertyDescriptor(a, e) || Object.defineProperty(a, e, {
        configurable: true,
        get() {
          var r = `'${e}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
          R(e) && (r += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"), b(r);
        }
      });
    }
    var pe, de, Z, ee, fe, v, H, oe = false;
    function Q() {
      var e = qe.buffer;
      Z = new Int8Array(e), a.HEAPU8 = ee = new Uint8Array(e), fe = new Int32Array(e), a.HEAPU32 = v = new Uint32Array(e), a.HEAPF64 = new Float64Array(e), H = new BigInt64Array(e), new BigUint64Array(e);
    }
    d(globalThis.Int32Array && globalThis.Float64Array && Int32Array.prototype.subarray && Int32Array.prototype.set, "JS engine does not provide full typed array support");
    function ve() {
      if (a.preRun) for (typeof a.preRun == "function" && (a.preRun = [
        a.preRun
      ]); a.preRun.length; ) gr(a.preRun.shift());
      te("preRun"), Ie(or);
    }
    function me() {
      d(!oe), oe = true, X(), !a.noFSInit && !n.initialized && n.init(), Ce.__wasm_call_ctors(), n.ignorePermissions = false;
    }
    function _e() {
      if (X(), a.postRun) for (typeof a.postRun == "function" && (a.postRun = [
        a.postRun
      ]); a.postRun.length; ) yr(a.postRun.shift());
      te("postRun"), Ie(ze);
    }
    function b(e) {
      var _a2;
      (_a2 = a.onAbort) == null ? void 0 : _a2.call(a, e), e = "Aborted(" + e + ")", S(e), O = true;
      var r = new WebAssembly.RuntimeError(e);
      throw de == null ? void 0 : de(r), r;
    }
    function F(e, r) {
      return (...t) => {
        d(oe, `native function \`${e}\` called before runtime initialization`);
        var o = Ce[e];
        return d(o, `exported native function \`${e}\` not found`), d(t.length <= r, `native function \`${e}\` called with ${t.length} args but expects ${r}`), o(...t);
      };
    }
    var J;
    function ae() {
      return a.locateFile ? ie("deform.wasm") : new URL("" + new URL("deform-DkgkXHoj.wasm", import.meta.url).href, import.meta.url).href;
    }
    function M(e) {
      if (e == J && E) return new Uint8Array(E);
      if (U) return U(e);
      throw "both async and sync fetching of the wasm failed";
    }
    async function G(e) {
      if (!E) try {
        var r = await Y(e);
        return new Uint8Array(r);
      } catch {
      }
      return M(e);
    }
    async function K(e, r) {
      try {
        var t = await G(e), o = await WebAssembly.instantiate(t, r);
        return o;
      } catch (s) {
        S(`failed to asynchronously prepare wasm: ${s}`), z(e) && S(`warning: Loading from a file URI (${e}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`), b(s);
      }
    }
    async function N(e, r, t) {
      if (!e && !z(r) && !w) try {
        var o = fetch(r, {
          credentials: "same-origin"
        }), s = await WebAssembly.instantiateStreaming(o, t);
        return s;
      } catch (i) {
        S(`wasm streaming compile failed: ${i}`), S("falling back to ArrayBuffer instantiation");
      }
      return K(r, t);
    }
    function Se() {
      var e = {
        env: pr,
        wasi_snapshot_preview1: pr
      };
      return e;
    }
    async function Ze() {
      function e(l, c) {
        return Ce = l.exports, nt(Ce), Q(), Ce;
      }
      var r = a;
      function t(l) {
        return d(a === r, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"), r = null, e(l.instance);
      }
      var o = Se();
      if (a.instantiateWasm) return new Promise((l, c) => {
        try {
          a.instantiateWasm(o, (u, y) => {
            l(e(u, y));
          });
        } catch (u) {
          S(`Module.instantiateWasm callback failed with error: ${u}`), c(u);
        }
      });
      J ?? (J = ae());
      var s = await N(E, J, o), i = t(s);
      return i;
    }
    var Ie = (e) => {
      for (; e.length > 0; ) e.shift()(a);
    }, ze = [], yr = (e) => ze.push(e), or = [], gr = (e) => or.push(e), He = (e) => (d(typeof e == "number", `ptrToString expects a number, got ${typeof e}`), e >>>= 0, "0x" + e.toString(16).padStart(8, "0")), xe = (e) => {
      xe.shown || (xe.shown = {}), xe.shown[e] || (xe.shown[e] = 1, w && (e = "warning: " + e), S(e));
    }, sr = globalThis.TextDecoder && new TextDecoder(), wr = (e, r, t, o) => {
      for (var s = r + t; e[r] && !(r >= s); ) ++r;
      return r;
    }, Me = (e, r = 0, t, o) => {
      var s = wr(e, r, t);
      if (s - r > 16 && e.buffer && sr) return sr.decode(e.subarray(r, s));
      for (var i = ""; r < s; ) {
        var l = e[r++];
        if (!(l & 128)) {
          i += String.fromCharCode(l);
          continue;
        }
        var c = e[r++] & 63;
        if ((l & 224) == 192) {
          i += String.fromCharCode((l & 31) << 6 | c);
          continue;
        }
        var u = e[r++] & 63;
        if ((l & 240) == 224 ? l = (l & 15) << 12 | c << 6 | u : ((l & 248) != 240 && xe("Invalid UTF-8 leading byte " + He(l) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), l = (l & 7) << 18 | c << 12 | u << 6 | e[r++] & 63), l < 65536) i += String.fromCharCode(l);
        else {
          var y = l - 65536;
          i += String.fromCharCode(55296 | y >> 10, 56320 | y & 1023);
        }
      }
      return i;
    }, Be = (e, r, t) => (d(typeof e == "number", `UTF8ToString expects a number (got ${typeof e})`), e ? Me(ee, e, r) : ""), Sr = (e, r, t, o) => b(`Assertion failed: ${Be(e)}, at: ` + [
      r ? Be(r) : "unknown filename",
      t,
      o ? Be(o) : "unknown function"
    ]);
    class Fr {
      constructor(r) {
        this.excPtr = r, this.ptr = r - 24;
      }
      set_type(r) {
        v[this.ptr + 4 >> 2] = r;
      }
      get_type() {
        return v[this.ptr + 4 >> 2];
      }
      set_destructor(r) {
        v[this.ptr + 8 >> 2] = r;
      }
      get_destructor() {
        return v[this.ptr + 8 >> 2];
      }
      set_caught(r) {
        r = r ? 1 : 0, Z[this.ptr + 12] = r;
      }
      get_caught() {
        return Z[this.ptr + 12] != 0;
      }
      set_rethrown(r) {
        r = r ? 1 : 0, Z[this.ptr + 13] = r;
      }
      get_rethrown() {
        return Z[this.ptr + 13] != 0;
      }
      init(r, t) {
        this.set_adjusted_ptr(0), this.set_type(r), this.set_destructor(t);
      }
      set_adjusted_ptr(r) {
        v[this.ptr + 16 >> 2] = r;
      }
      get_adjusted_ptr() {
        return v[this.ptr + 16 >> 2];
      }
    }
    var Pr = (e, r, t) => {
      var o = new Fr(e);
      o.init(r, t), d(false, "Exception thrown, but exception catching is not enabled. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch.");
    }, Ar = () => b("native code called abort()"), ar = (e, r, t, o) => {
      if (d(typeof e == "string", `stringToUTF8Array expects a string (got ${typeof e})`), !(o > 0)) return 0;
      for (var s = t, i = t + o - 1, l = 0; l < e.length; ++l) {
        var c = e.codePointAt(l);
        if (c <= 127) {
          if (t >= i) break;
          r[t++] = c;
        } else if (c <= 2047) {
          if (t + 1 >= i) break;
          r[t++] = 192 | c >> 6, r[t++] = 128 | c & 63;
        } else if (c <= 65535) {
          if (t + 2 >= i) break;
          r[t++] = 224 | c >> 12, r[t++] = 128 | c >> 6 & 63, r[t++] = 128 | c & 63;
        } else {
          if (t + 3 >= i) break;
          c > 1114111 && xe("Invalid Unicode code point " + He(c) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."), r[t++] = 240 | c >> 18, r[t++] = 128 | c >> 12 & 63, r[t++] = 128 | c >> 6 & 63, r[t++] = 128 | c & 63, l++;
        }
      }
      return r[t] = 0, t - s;
    }, We = (e, r, t) => (d(typeof t == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), ar(e, ee, r, t)), Ke = (e) => {
      for (var r = 0, t = 0; t < e.length; ++t) {
        var o = e.charCodeAt(t);
        o <= 127 ? r++ : o <= 2047 ? r += 2 : o >= 55296 && o <= 57343 ? (r += 4, ++t) : r += 3;
      }
      return r;
    }, kr = (e, r, t, o) => {
      var s = (/* @__PURE__ */ new Date()).getFullYear(), i = new Date(s, 0, 1), l = new Date(s, 6, 1), c = i.getTimezoneOffset(), u = l.getTimezoneOffset(), y = Math.max(c, u);
      v[e >> 2] = y * 60, fe[r >> 2] = +(c != u);
      var D = (T) => {
        var se = T >= 0 ? "-" : "+", ye = Math.abs(T), ge = String(Math.floor(ye / 60)).padStart(2, "0"), Ee = String(ye % 60).padStart(2, "0");
        return `UTC${se}${ge}${Ee}`;
      }, L = D(c), g = D(u);
      d(L), d(g), d(Ke(L) <= 16, `timezone name truncated to fit in TZNAME_MAX (${L})`), d(Ke(g) <= 16, `timezone name truncated to fit in TZNAME_MAX (${g})`), u < c ? (We(L, t, 17), We(g, o, 17)) : (We(L, o, 17), We(g, t, 17));
    }, br = () => 2147483648, Tr = (e, r) => (d(r, "alignment argument is required"), Math.ceil(e / r) * r), Or = (e) => {
      var r = qe.buffer.byteLength, t = (e - r + 65535) / 65536 | 0;
      try {
        return qe.grow(t), Q(), 1;
      } catch (o) {
        S(`growMemory: Attempted to grow heap from ${r} bytes to ${e} bytes, but got error: ${o}`);
      }
    }, Rr = (e) => {
      var r = ee.length;
      e >>>= 0, d(e > r);
      var t = br();
      if (e > t) return S(`Cannot enlarge memory, requested ${e} bytes, but the limit is ${t} bytes!`), false;
      for (var o = 1; o <= 4; o *= 2) {
        var s = r * (1 + 0.2 / o);
        s = Math.min(s, e + 100663296);
        var i = Math.min(t, Tr(Math.max(e, s), 65536)), l = Or(i);
        if (l) return true;
      }
      return S(`Failed to grow the heap from ${r} bytes to ${i} bytes, not enough memory!`), false;
    }, Qe = {}, Mr = () => re || "./this.program", $e = () => {
      var _a2;
      if (!$e.strings) {
        var e = (((_a2 = globalThis.navigator) == null ? void 0 : _a2.language) ?? "C").replace("-", "_") + ".UTF-8", r = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: e,
          _: Mr()
        };
        for (var t in Qe) Qe[t] === void 0 ? delete r[t] : r[t] = Qe[t];
        var o = [];
        for (var t in r) o.push(`${t}=${r[t]}`);
        $e.strings = o;
      }
      return $e.strings;
    }, Nr = (e, r) => {
      var t = 0, o = 0;
      for (var s of $e()) {
        var i = r + t;
        v[e + o >> 2] = i, t += We(s, i, 1 / 0) + 1, o += 4;
      }
      return 0;
    }, Dr = (e, r) => {
      var t = $e();
      v[e >> 2] = t.length;
      var o = 0;
      for (var s of t) o += Ke(s) + 1;
      return v[r >> 2] = o, 0;
    }, W = {
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
        var r = W.isAbs(e), t = e.slice(-1) === "/";
        return e = W.normalizeArray(e.split("/").filter((o) => !!o), !r).join("/"), !e && !r && (e = "."), e && t && (e += "/"), (r ? "/" : "") + e;
      },
      dirname: (e) => {
        var r = W.splitPath(e), t = r[0], o = r[1];
        return !t && !o ? "." : (o && (o = o.slice(0, -1)), t + o);
      },
      basename: (e) => e && e.match(/([^\/]+|\/)\/*$/)[1],
      join: (...e) => W.normalize(e.join("/")),
      join2: (e, r) => W.normalize(e + "/" + r)
    }, Cr = () => {
      if (w) {
        var e = C("crypto");
        return (r) => e.randomFillSync(r);
      }
      return (r) => crypto.getRandomValues(r);
    }, ir = (e) => {
      (ir = Cr())(e);
    }, Ne = {
      resolve: (...e) => {
        for (var r = "", t = false, o = e.length - 1; o >= -1 && !t; o--) {
          var s = o >= 0 ? e[o] : n.cwd();
          if (typeof s != "string") throw new TypeError("Arguments to path.resolve must be strings");
          if (!s) return "";
          r = s + "/" + r, t = W.isAbs(s);
        }
        return r = W.normalizeArray(r.split("/").filter((i) => !!i), !t).join("/"), (t ? "/" : "") + r || ".";
      },
      relative: (e, r) => {
        e = Ne.resolve(e).slice(1), r = Ne.resolve(r).slice(1);
        function t(y) {
          for (var D = 0; D < y.length && y[D] === ""; D++) ;
          for (var L = y.length - 1; L >= 0 && y[L] === ""; L--) ;
          return D > L ? [] : y.slice(D, L - D + 1);
        }
        for (var o = t(e.split("/")), s = t(r.split("/")), i = Math.min(o.length, s.length), l = i, c = 0; c < i; c++) if (o[c] !== s[c]) {
          l = c;
          break;
        }
        for (var u = [], c = l; c < o.length; c++) u.push("..");
        return u = u.concat(s.slice(l)), u.join("/");
      }
    }, Je = [], er = (e, r, t) => {
      var o = Ke(e) + 1, s = new Array(o), i = ar(e, s, 0, s.length);
      return s.length = i, s;
    }, Ur = () => {
      var _a2;
      if (!Je.length) {
        var e = null;
        if (w) {
          var r = 256, t = Buffer.alloc(r), o = 0, s = process.stdin.fd;
          try {
            o = _.readSync(s, t, 0, r);
          } catch (i) {
            if (i.toString().includes("EOF")) o = 0;
            else throw i;
          }
          o > 0 && (e = t.slice(0, o).toString("utf-8"));
        } else ((_a2 = globalThis.window) == null ? void 0 : _a2.prompt) && (e = window.prompt("Input: "), e !== null && (e += `
`));
        if (!e) return null;
        Je = er(e);
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
          for (var i = 0, l = 0; l < o; l++) {
            var c;
            try {
              c = e.tty.ops.get_char(e.tty);
            } catch {
              throw new n.ErrnoError(29);
            }
            if (c === void 0 && i === 0) throw new n.ErrnoError(6);
            if (c == null) break;
            i++, r[t + l] = c;
          }
          return i && (e.node.atime = Date.now()), i;
        },
        write(e, r, t, o, s) {
          if (!e.tty || !e.tty.ops.put_char) throw new n.ErrnoError(60);
          try {
            for (var i = 0; i < o; i++) e.tty.ops.put_char(e.tty, r[t + i]);
          } catch {
            throw new n.ErrnoError(29);
          }
          return o && (e.node.mtime = e.node.ctime = Date.now()), i;
        }
      },
      default_tty_ops: {
        get_char(e) {
          return Ur();
        },
        put_char(e, r) {
          r === null || r === 10 ? (P(Me(e.output)), e.output = []) : r != 0 && e.output.push(r);
        },
        fsync(e) {
          var _a2;
          ((_a2 = e.output) == null ? void 0 : _a2.length) > 0 && (P(Me(e.output)), e.output = []);
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
          r === null || r === 10 ? (S(Me(e.output)), e.output = []) : r != 0 && e.output.push(r);
        },
        fsync(e) {
          var _a2;
          ((_a2 = e.output) == null ? void 0 : _a2.length) > 0 && (S(Me(e.output)), e.output = []);
        }
      }
    }, lr = (e) => {
      b("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported");
    }, A = {
      ops_table: null,
      mount(e) {
        return A.createNode(null, "/", 16895, 0);
      },
      createNode(e, r, t, o) {
        if (n.isBlkdev(t) || n.isFIFO(t)) throw new n.ErrnoError(63);
        A.ops_table || (A.ops_table = {
          dir: {
            node: {
              getattr: A.node_ops.getattr,
              setattr: A.node_ops.setattr,
              lookup: A.node_ops.lookup,
              mknod: A.node_ops.mknod,
              rename: A.node_ops.rename,
              unlink: A.node_ops.unlink,
              rmdir: A.node_ops.rmdir,
              readdir: A.node_ops.readdir,
              symlink: A.node_ops.symlink
            },
            stream: {
              llseek: A.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: A.node_ops.getattr,
              setattr: A.node_ops.setattr
            },
            stream: {
              llseek: A.stream_ops.llseek,
              read: A.stream_ops.read,
              write: A.stream_ops.write,
              mmap: A.stream_ops.mmap,
              msync: A.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: A.node_ops.getattr,
              setattr: A.node_ops.setattr,
              readlink: A.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: A.node_ops.getattr,
              setattr: A.node_ops.setattr
            },
            stream: n.chrdev_stream_ops
          }
        });
        var s = n.createNode(e, r, t, o);
        return n.isDir(s.mode) ? (s.node_ops = A.ops_table.dir.node, s.stream_ops = A.ops_table.dir.stream, s.contents = {}) : n.isFile(s.mode) ? (s.node_ops = A.ops_table.file.node, s.stream_ops = A.ops_table.file.stream, s.usedBytes = 0, s.contents = null) : n.isLink(s.mode) ? (s.node_ops = A.ops_table.link.node, s.stream_ops = A.ops_table.link.stream) : n.isChrdev(s.mode) && (s.node_ops = A.ops_table.chrdev.node, s.stream_ops = A.ops_table.chrdev.stream), s.atime = s.mtime = s.ctime = Date.now(), e && (e.contents[r] = s, e.atime = e.mtime = e.ctime = s.atime), s;
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
          r.size !== void 0 && A.resizeFileStorage(e, r.size);
        },
        lookup(e, r) {
          throw new n.ErrnoError(44);
        },
        mknod(e, r, t, o) {
          return A.createNode(e, r, t, o);
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
          var o = A.createNode(e, r, 41471, 0);
          return o.link = t, o;
        },
        readlink(e) {
          if (!n.isLink(e.mode)) throw new n.ErrnoError(28);
          return e.link;
        }
      },
      stream_ops: {
        read(e, r, t, o, s) {
          var i = e.node.contents;
          if (s >= e.node.usedBytes) return 0;
          var l = Math.min(e.node.usedBytes - s, o);
          if (d(l >= 0), l > 8 && i.subarray) r.set(i.subarray(s, s + l), t);
          else for (var c = 0; c < l; c++) r[t + c] = i[s + c];
          return l;
        },
        write(e, r, t, o, s, i) {
          if (d(!(r instanceof ArrayBuffer)), r.buffer === Z.buffer && (i = false), !o) return 0;
          var l = e.node;
          if (l.mtime = l.ctime = Date.now(), r.subarray && (!l.contents || l.contents.subarray)) {
            if (i) return d(s === 0, "canOwn must imply no weird position inside the file"), l.contents = r.subarray(t, t + o), l.usedBytes = o, o;
            if (l.usedBytes === 0 && s === 0) return l.contents = r.slice(t, t + o), l.usedBytes = o, o;
            if (s + o <= l.usedBytes) return l.contents.set(r.subarray(t, t + o), s), o;
          }
          if (A.expandFileStorage(l, s + o), l.contents.subarray && r.subarray) l.contents.set(r.subarray(t, t + o), s);
          else for (var c = 0; c < o; c++) l.contents[s + c] = r[t + c];
          return l.usedBytes = Math.max(l.usedBytes, s + o), o;
        },
        llseek(e, r, t) {
          var o = r;
          if (t === 1 ? o += e.position : t === 2 && n.isFile(e.node.mode) && (o += e.node.usedBytes), o < 0) throw new n.ErrnoError(28);
          return o;
        },
        mmap(e, r, t, o, s) {
          if (!n.isFile(e.node.mode)) throw new n.ErrnoError(43);
          var i, l, c = e.node.contents;
          if (!(s & 2) && c && c.buffer === Z.buffer) l = false, i = c.byteOffset;
          else {
            if (l = true, i = lr(), !i) throw new n.ErrnoError(48);
            c && ((t > 0 || t + r < c.length) && (c.subarray ? c = c.subarray(t, t + r) : c = Array.prototype.slice.call(c, t, t + r)), Z.set(c, i));
          }
          return {
            ptr: i,
            allocated: l
          };
        },
        msync(e, r, t, o, s) {
          return A.stream_ops.write(e, r, 0, o, t, false), 0;
        }
      }
    }, Lr = (e) => {
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
    }, rr = (e, r) => {
      var t = 0;
      return e && (t |= 365), r && (t |= 146), t;
    }, Ir = (e) => Be(mr(e)), cr = {
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
    }, zr = async (e) => {
      var r = await Y(e);
      return d(r, `Loading data file "${e}" failed (no arrayBuffer).`), new Uint8Array(r);
    }, Hr = (...e) => n.createDataFile(...e), xr = (e) => {
      for (var r = e; ; ) {
        if (!De[e]) return e;
        e = r + Math.random();
      }
    }, Oe = 0, je = null, De = {}, be = null, Br = (e) => {
      var _a2;
      if (Oe--, (_a2 = a.monitorRunDependencies) == null ? void 0 : _a2.call(a, Oe), d(e, "removeRunDependency requires an ID"), d(De[e]), delete De[e], Oe == 0 && (be !== null && (clearInterval(be), be = null), je)) {
        var r = je;
        je = null, r();
      }
    }, Wr = (e) => {
      var _a2, _b2;
      Oe++, (_a2 = a.monitorRunDependencies) == null ? void 0 : _a2.call(a, Oe), d(e, "addRunDependency requires an ID"), d(!De[e]), De[e] = 1, be === null && globalThis.setInterval && (be = setInterval(() => {
        if (O) {
          clearInterval(be), be = null;
          return;
        }
        var r = false;
        for (var t in De) r || (r = true, S("still waiting on run dependencies:")), S(`dependency: ${t}`);
        r && S("(end of list)");
      }, 1e4), (_b2 = be.unref) == null ? void 0 : _b2.call(be));
    }, dr = [], $r = async (e, r) => {
      typeof Browser < "u" && Browser.init();
      for (var t of dr) if (t.canHandle(r)) return d(t.handle.constructor.name === "AsyncFunction", "Filesystem plugin handlers must be async functions (See #24914)"), t.handle(e, r);
      return e;
    }, fr = async (e, r, t, o, s, i, l, c) => {
      var u = r ? Ne.resolve(W.join2(e, r)) : e, y = xr(`cp ${u}`);
      Wr(y);
      try {
        var D = t;
        typeof t == "string" && (D = await zr(t)), D = await $r(D, u), c == null ? void 0 : c(), i || Hr(e, r, D, o, s, l);
      } finally {
        Br(y);
      }
    }, jr = (e, r, t, o, s, i, l, c, u, y) => {
      fr(e, r, t, o, s, c, u, y).then(i).catch(l);
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
      readFiles: {},
      ErrnoError: class extends Error {
        constructor(e) {
          super(oe ? Ir(e) : "");
          __publicField(this, "name", "ErrnoError");
          this.errno = e;
          for (var r in cr) if (cr[r] === e) {
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
        r.follow_mount ?? (r.follow_mount = true), W.isAbs(e) || (e = n.cwd() + "/" + e);
        e: for (var t = 0; t < 40; t++) {
          for (var o = e.split("/").filter((y) => !!y), s = n.root, i = "/", l = 0; l < o.length; l++) {
            var c = l === o.length - 1;
            if (c && r.parent) break;
            if (o[l] !== ".") {
              if (o[l] === "..") {
                if (i = W.dirname(i), n.isRoot(s)) {
                  e = i + "/" + o.slice(l + 1).join("/"), t--;
                  continue e;
                } else s = s.parent;
                continue;
              }
              i = W.join2(i, o[l]);
              try {
                s = n.lookupNode(s, o[l]);
              } catch (y) {
                if ((y == null ? void 0 : y.errno) === 44 && c && r.noent_okay) return {
                  path: i
                };
                throw y;
              }
              if (n.isMountpoint(s) && (!c || r.follow_mount) && (s = s.mounted.root), n.isLink(s.mode) && (!c || r.follow)) {
                if (!s.node_ops.readlink) throw new n.ErrnoError(52);
                var u = s.node_ops.readlink(s);
                W.isAbs(u) || (u = W.dirname(i) + "/" + u), e = u + "/" + o.slice(l + 1).join("/");
                continue e;
              }
            }
          }
          return {
            path: i,
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
          var i = s.name;
          if (s.parent.id === e.id && i === r) return s;
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
        } catch (i) {
          return i.errno;
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
        return e ? n.isLink(e.mode) ? 32 : n.isDir(e.mode) && (n.flagsToPermissionString(r) !== "r" || r & 576) ? 31 : n.nodePermissions(e, n.flagsToPermissionString(r)) : 44;
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
        typeof e == "function" && (r = e, e = false), n.syncFSRequests++, n.syncFSRequests > 1 && S(`warning: ${n.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
        var t = n.getMounts(n.root.mount), o = 0;
        function s(c) {
          return d(n.syncFSRequests > 0), n.syncFSRequests--, r(c);
        }
        function i(c) {
          if (c) return i.errored ? void 0 : (i.errored = true, s(c));
          ++o >= t.length && s(null);
        }
        for (var l of t) l.type.syncfs ? l.type.syncfs(l, e, i) : i(null);
      },
      mount(e, r, t) {
        if (typeof e == "string") throw e;
        var o = t === "/", s = !t, i;
        if (o && n.root) throw new n.ErrnoError(10);
        if (!o && !s) {
          var l = n.lookupPath(t, {
            follow_mount: false
          });
          if (t = l.path, i = l.node, n.isMountpoint(i)) throw new n.ErrnoError(10);
          if (!n.isDir(i.mode)) throw new n.ErrnoError(54);
        }
        var c = {
          type: e,
          opts: r,
          mountpoint: t,
          mounts: []
        }, u = e.mount(c);
        return u.mount = c, c.root = u, o ? n.root = u : i && (i.mounted = c, i.mount && i.mount.mounts.push(c)), u;
      },
      unmount(e) {
        var r = n.lookupPath(e, {
          follow_mount: false
        });
        if (!n.isMountpoint(r.node)) throw new n.ErrnoError(28);
        var t = r.node, o = t.mounted, s = n.getMounts(o);
        for (var [i, l] of Object.entries(n.nameTable)) for (; l; ) {
          var c = l.name_next;
          s.includes(l.mount) && n.destroyNode(l), l = c;
        }
        t.mounted = null;
        var u = t.mount.mounts.indexOf(o);
        d(u !== -1), t.mount.mounts.splice(u, 1);
      },
      lookup(e, r) {
        return e.node_ops.lookup(e, r);
      },
      mknod(e, r, t) {
        var o = n.lookupPath(e, {
          parent: true
        }), s = o.node, i = W.basename(e);
        if (!i) throw new n.ErrnoError(28);
        if (i === "." || i === "..") throw new n.ErrnoError(20);
        var l = n.mayCreate(s, i);
        if (l) throw new n.ErrnoError(l);
        if (!s.node_ops.mknod) throw new n.ErrnoError(63);
        return s.node_ops.mknod(s, i, r, t);
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
          (o || W.isAbs(e)) && (o += "/"), o += s;
          try {
            n.mkdir(o, r);
          } catch (i) {
            if (i.errno != 20) throw i;
          }
        }
      },
      mkdev(e, r, t) {
        return typeof t > "u" && (t = r, r = 438), r |= 8192, n.mknod(e, r, t);
      },
      symlink(e, r) {
        if (!Ne.resolve(e)) throw new n.ErrnoError(44);
        var t = n.lookupPath(r, {
          parent: true
        }), o = t.node;
        if (!o) throw new n.ErrnoError(44);
        var s = W.basename(r), i = n.mayCreate(o, s);
        if (i) throw new n.ErrnoError(i);
        if (!o.node_ops.symlink) throw new n.ErrnoError(63);
        return o.node_ops.symlink(o, s, e);
      },
      rename(e, r) {
        var t = W.dirname(e), o = W.dirname(r), s = W.basename(e), i = W.basename(r), l, c, u;
        if (l = n.lookupPath(e, {
          parent: true
        }), c = l.node, l = n.lookupPath(r, {
          parent: true
        }), u = l.node, !c || !u) throw new n.ErrnoError(44);
        if (c.mount !== u.mount) throw new n.ErrnoError(75);
        var y = n.lookupNode(c, s), D = Ne.relative(e, o);
        if (D.charAt(0) !== ".") throw new n.ErrnoError(28);
        if (D = Ne.relative(r, t), D.charAt(0) !== ".") throw new n.ErrnoError(55);
        var L;
        try {
          L = n.lookupNode(u, i);
        } catch {
        }
        if (y !== L) {
          var g = n.isDir(y.mode), T = n.mayDelete(c, s, g);
          if (T) throw new n.ErrnoError(T);
          if (T = L ? n.mayDelete(u, i, g) : n.mayCreate(u, i), T) throw new n.ErrnoError(T);
          if (!c.node_ops.rename) throw new n.ErrnoError(63);
          if (n.isMountpoint(y) || L && n.isMountpoint(L)) throw new n.ErrnoError(10);
          if (u !== c && (T = n.nodePermissions(c, "w"), T)) throw new n.ErrnoError(T);
          n.hashRemoveNode(y);
          try {
            c.node_ops.rename(y, u, i), y.parent = u;
          } catch (se) {
            throw se;
          } finally {
            n.hashAddNode(y);
          }
        }
      },
      rmdir(e) {
        var r = n.lookupPath(e, {
          parent: true
        }), t = r.node, o = W.basename(e), s = n.lookupNode(t, o), i = n.mayDelete(t, o, true);
        if (i) throw new n.ErrnoError(i);
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
        var o = W.basename(e), s = n.lookupNode(t, o), i = n.mayDelete(t, o, false);
        if (i) throw new n.ErrnoError(i);
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
          var i = n.lookupPath(e, {
            follow: !o
          });
          s = i.node;
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
        }), s = o.node, i = n.checkOpExists(s.node_ops.setattr, 63);
        i(s, {
          atime: r,
          mtime: t
        });
      },
      open(e, r, t = 438) {
        if (e === "") throw new n.ErrnoError(44);
        r = typeof r == "string" ? Lr(r) : r, r & 64 ? t = t & 4095 | 32768 : t = 0;
        var o, s;
        if (typeof e == "object") o = e;
        else {
          s = e.endsWith("/");
          var i = n.lookupPath(e, {
            follow: !(r & 131072),
            noent_okay: true
          });
          o = i.node, e = i.path;
        }
        var l = false;
        if (r & 64) if (o) {
          if (r & 128) throw new n.ErrnoError(20);
        } else {
          if (s) throw new n.ErrnoError(31);
          o = n.mknod(e, t | 511, 0), l = true;
        }
        if (!o) throw new n.ErrnoError(44);
        if (n.isChrdev(o.mode) && (r &= -513), r & 65536 && !n.isDir(o.mode)) throw new n.ErrnoError(54);
        if (!l) {
          var c = n.mayOpen(o, r);
          if (c) throw new n.ErrnoError(c);
        }
        r & 512 && !l && n.truncate(o, 0), r &= -131713;
        var u = n.createStream({
          node: o,
          path: n.getPath(o),
          flags: r,
          seekable: true,
          position: 0,
          stream_ops: o.stream_ops,
          ungotten: [],
          error: false
        });
        return u.stream_ops.open && u.stream_ops.open(u), l && n.chmod(o, t & 511), a.logReadFiles && !(r & 1) && (e in n.readFiles || (n.readFiles[e] = 1)), u;
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
        var i = typeof s < "u";
        if (!i) s = e.position;
        else if (!e.seekable) throw new n.ErrnoError(70);
        var l = e.stream_ops.read(e, r, t, o, s);
        return i || (e.position += l), l;
      },
      write(e, r, t, o, s, i) {
        if (d(t >= 0), o < 0 || s < 0) throw new n.ErrnoError(28);
        if (n.isClosed(e)) throw new n.ErrnoError(8);
        if (!(e.flags & 2097155)) throw new n.ErrnoError(8);
        if (n.isDir(e.node.mode)) throw new n.ErrnoError(31);
        if (!e.stream_ops.write) throw new n.ErrnoError(28);
        e.seekable && e.flags & 1024 && n.llseek(e, 0, 2);
        var l = typeof s < "u";
        if (!l) s = e.position;
        else if (!e.seekable) throw new n.ErrnoError(70);
        var c = e.stream_ops.write(e, r, t, o, s, i);
        return l || (e.position += c), c;
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
        r.flags = r.flags || 0, r.encoding = r.encoding || "binary", r.encoding !== "utf8" && r.encoding !== "binary" && b(`Invalid encoding type "${r.encoding}"`);
        var t = n.open(e, r.flags), o = n.stat(e), s = o.size, i = new Uint8Array(s);
        return n.read(t, i, 0, s, 0), r.encoding === "utf8" && (i = Me(i)), n.close(t), i;
      },
      writeFile(e, r, t = {}) {
        t.flags = t.flags || 577;
        var o = n.open(e, t.flags, t.mode);
        typeof r == "string" && (r = new Uint8Array(er(r))), ArrayBuffer.isView(r) ? n.write(o, r, 0, r.byteLength, void 0, t.canOwn) : b("Unsupported data type"), n.close(o);
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
          write: (o, s, i, l, c) => l,
          llseek: () => 0
        }), n.mkdev("/dev/null", n.makedev(1, 3)), Te.register(n.makedev(5, 0), Te.default_tty_ops), Te.register(n.makedev(6, 0), Te.default_tty1_ops), n.mkdev("/dev/tty", n.makedev(5, 0)), n.mkdev("/dev/tty1", n.makedev(6, 0));
        var e = new Uint8Array(1024), r = 0, t = () => (r === 0 && (ir(e), r = e.byteLength), e[--r]);
        n.createDevice("/dev", "random", t), n.createDevice("/dev", "urandom", t), n.mkdir("/dev/shm"), n.mkdir("/dev/shm/tmp");
      },
      createSpecialDirectories() {
        n.mkdir("/proc");
        var e = n.mkdir("/proc/self");
        n.mkdir("/proc/self/fd"), n.mount({
          mount() {
            var r = n.createNode(e, "fd", 16895, 73);
            return r.stream_ops = {
              llseek: A.stream_ops.llseek
            }, r.node_ops = {
              lookup(t, o) {
                var s = +o, i = n.getStreamChecked(s), l = {
                  parent: null,
                  mount: {
                    mountpoint: "fake"
                  },
                  node_ops: {
                    readlink: () => i.path
                  },
                  id: s + 1
                };
                return l.parent = l, l;
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
        var o = n.open("/dev/stdin", 0), s = n.open("/dev/stdout", 1), i = n.open("/dev/stderr", 1);
        d(o.fd === 0, `invalid handle for stdin (${o.fd})`), d(s.fd === 1, `invalid handle for stdout (${s.fd})`), d(i.fd === 2, `invalid handle for stderr (${i.fd})`);
      },
      staticInit() {
        n.nameTable = new Array(4096), n.mount(A, {}, "/"), n.createDefaultDirectories(), n.createDefaultDevices(), n.createSpecialDirectories(), n.filesystems = {
          MEMFS: A
        };
      },
      init(e, r, t) {
        d(!n.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"), n.initialized = true, e ?? (e = a.stdin), r ?? (r = a.stdout), t ?? (t = a.stderr), n.createStandardStreams(e, r, t);
      },
      quit() {
        n.initialized = false, ur(0);
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
          o.parentExists = true, o.parentPath = t.path, o.parentObject = t.node, o.name = W.basename(e), t = n.lookupPath(e, {
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
          var i = s.pop();
          if (i) {
            var l = W.join2(e, i);
            try {
              n.mkdir(l);
            } catch (c) {
              if (c.errno != 20) throw c;
            }
            e = l;
          }
        }
        return l;
      },
      createFile(e, r, t, o, s) {
        var i = W.join2(typeof e == "string" ? e : n.getPath(e), r), l = rr(o, s);
        return n.create(i, l);
      },
      createDataFile(e, r, t, o, s, i) {
        var l = r;
        e && (e = typeof e == "string" ? e : n.getPath(e), l = r ? W.join2(e, r) : e);
        var c = rr(o, s), u = n.create(l, c);
        if (t) {
          if (typeof t == "string") {
            for (var y = new Array(t.length), D = 0, L = t.length; D < L; ++D) y[D] = t.charCodeAt(D);
            t = y;
          }
          n.chmod(u, c | 146);
          var g = n.open(u, 577);
          n.write(g, t, 0, t.length, 0, i), n.close(g), n.chmod(u, c);
        }
      },
      createDevice(e, r, t, o) {
        var _a2;
        var s = W.join2(typeof e == "string" ? e : n.getPath(e), r), i = rr(!!t, !!o);
        (_a2 = n.createDevice).major ?? (_a2.major = 64);
        var l = n.makedev(n.createDevice.major++, 0);
        return n.registerDevice(l, {
          open(c) {
            c.seekable = false;
          },
          close(c) {
            var _a3;
            ((_a3 = o == null ? void 0 : o.buffer) == null ? void 0 : _a3.length) && o(10);
          },
          read(c, u, y, D, L) {
            for (var g = 0, T = 0; T < D; T++) {
              var se;
              try {
                se = t();
              } catch {
                throw new n.ErrnoError(29);
              }
              if (se === void 0 && g === 0) throw new n.ErrnoError(6);
              if (se == null) break;
              g++, u[y + T] = se;
            }
            return g && (c.node.atime = Date.now()), g;
          },
          write(c, u, y, D, L) {
            for (var g = 0; g < D; g++) try {
              o(u[y + g]);
            } catch {
              throw new n.ErrnoError(29);
            }
            return D && (c.node.mtime = c.node.ctime = Date.now()), g;
          }
        }), n.mkdev(s, i, l);
      },
      forceLoadFile(e) {
        if (e.isDevice || e.isFolder || e.link || e.contents) return true;
        if (globalThis.XMLHttpRequest) b("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        else try {
          e.contents = U(e.url);
        } catch {
          throw new n.ErrnoError(29);
        }
      },
      createLazyFile(e, r, t, o, s) {
        class i {
          constructor() {
            __publicField(this, "lengthKnown", false);
            __publicField(this, "chunks", []);
          }
          get(g) {
            if (!(g > this.length - 1 || g < 0)) {
              var T = g % this.chunkSize, se = g / this.chunkSize | 0;
              return this.getter(se)[T];
            }
          }
          setDataGetter(g) {
            this.getter = g;
          }
          cacheLength() {
            var g = new XMLHttpRequest();
            g.open("HEAD", t, false), g.send(null), g.status >= 200 && g.status < 300 || g.status === 304 || b("Couldn't load " + t + ". Status: " + g.status);
            var T = Number(g.getResponseHeader("Content-length")), se, ye = (se = g.getResponseHeader("Accept-Ranges")) && se === "bytes", ge = (se = g.getResponseHeader("Content-Encoding")) && se === "gzip", Ee = 1024 * 1024;
            ye || (Ee = T);
            var Fe = (Ae, Ue) => {
              Ae > Ue && b("invalid range (" + Ae + ", " + Ue + ") or no bytes requested!"), Ue > T - 1 && b("only " + T + " bytes available! programmer error!");
              var he = new XMLHttpRequest();
              return he.open("GET", t, false), T !== Ee && he.setRequestHeader("Range", "bytes=" + Ae + "-" + Ue), he.responseType = "arraybuffer", he.overrideMimeType && he.overrideMimeType("text/plain; charset=x-user-defined"), he.send(null), he.status >= 200 && he.status < 300 || he.status === 304 || b("Couldn't load " + t + ". Status: " + he.status), he.response !== void 0 ? new Uint8Array(he.response || []) : er(he.responseText || "");
            }, Ve = this;
            Ve.setDataGetter((Ae) => {
              var Ue = Ae * Ee, he = (Ae + 1) * Ee - 1;
              return he = Math.min(he, T - 1), typeof Ve.chunks[Ae] > "u" && (Ve.chunks[Ae] = Fe(Ue, he)), typeof Ve.chunks[Ae] > "u" && b("doXHR failed!"), Ve.chunks[Ae];
            }), (ge || !T) && (Ee = T = 1, T = this.getter(0).length, Ee = T, P("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = T, this._chunkSize = Ee, this.lengthKnown = true;
          }
          get length() {
            return this.lengthKnown || this.cacheLength(), this._length;
          }
          get chunkSize() {
            return this.lengthKnown || this.cacheLength(), this._chunkSize;
          }
        }
        if (globalThis.XMLHttpRequest) {
          h || b("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");
          var l = new i(), c = {
            isDevice: false,
            contents: l
          };
        } else var c = {
          isDevice: false,
          url: t
        };
        var u = n.createFile(e, r, c, o, s);
        c.contents ? u.contents = c.contents : c.url && (u.contents = null, u.url = c.url), Object.defineProperties(u, {
          usedBytes: {
            get: function() {
              return this.contents.length;
            }
          }
        });
        var y = {};
        for (const [L, g] of Object.entries(u.stream_ops)) y[L] = (...T) => (n.forceLoadFile(u), g(...T));
        function D(L, g, T, se, ye) {
          var ge = L.node.contents;
          if (ye >= ge.length) return 0;
          var Ee = Math.min(ge.length - ye, se);
          if (d(Ee >= 0), ge.slice) for (var Fe = 0; Fe < Ee; Fe++) g[T + Fe] = ge[ye + Fe];
          else for (var Fe = 0; Fe < Ee; Fe++) g[T + Fe] = ge.get(ye + Fe);
          return Ee;
        }
        return y.read = (L, g, T, se, ye) => (n.forceLoadFile(u), D(L, g, T, se, ye)), y.mmap = (L, g, T, se, ye) => {
          n.forceLoadFile(u);
          var ge = lr();
          if (!ge) throw new n.ErrnoError(48);
          return D(L, Z, ge, g, T), {
            ptr: ge,
            allocated: true
          };
        }, u.stream_ops = y, u;
      },
      absolutePath() {
        b("FS.absolutePath has been removed; use PATH_FS.resolve instead");
      },
      createFolder() {
        b("FS.createFolder has been removed; use FS.mkdir instead");
      },
      createLink() {
        b("FS.createLink has been removed; use FS.symlink instead");
      },
      joinPath() {
        b("FS.joinPath has been removed; use PATH.join instead");
      },
      mmapAlloc() {
        b("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
      },
      standardizePath() {
        b("FS.standardizePath has been removed; use PATH.normalize instead");
      }
    }, Ge = {
      calculateAt(e, r, t) {
        if (W.isAbs(r)) return r;
        var o;
        if (e === -100) o = n.cwd();
        else {
          var s = Ge.getStreamFromFD(e);
          o = s.path;
        }
        if (r.length == 0) {
          if (!t) throw new n.ErrnoError(44);
          return o;
        }
        return o + "/" + r;
      },
      writeStat(e, r) {
        v[e >> 2] = r.dev, v[e + 4 >> 2] = r.mode, v[e + 8 >> 2] = r.nlink, v[e + 12 >> 2] = r.uid, v[e + 16 >> 2] = r.gid, v[e + 20 >> 2] = r.rdev, H[e + 24 >> 3] = BigInt(r.size), fe[e + 32 >> 2] = 4096, fe[e + 36 >> 2] = r.blocks;
        var t = r.atime.getTime(), o = r.mtime.getTime(), s = r.ctime.getTime();
        return H[e + 40 >> 3] = BigInt(Math.floor(t / 1e3)), v[e + 48 >> 2] = t % 1e3 * 1e3 * 1e3, H[e + 56 >> 3] = BigInt(Math.floor(o / 1e3)), v[e + 64 >> 2] = o % 1e3 * 1e3 * 1e3, H[e + 72 >> 3] = BigInt(Math.floor(s / 1e3)), v[e + 80 >> 2] = s % 1e3 * 1e3 * 1e3, H[e + 88 >> 3] = BigInt(r.ino), 0;
      },
      writeStatFs(e, r) {
        v[e + 4 >> 2] = r.bsize, v[e + 60 >> 2] = r.bsize, H[e + 8 >> 3] = BigInt(r.blocks), H[e + 16 >> 3] = BigInt(r.bfree), H[e + 24 >> 3] = BigInt(r.bavail), H[e + 32 >> 3] = BigInt(r.files), H[e + 40 >> 3] = BigInt(r.ffree), v[e + 48 >> 2] = r.fsid, v[e + 64 >> 2] = r.flags, v[e + 56 >> 2] = r.namelen;
      },
      doMsync(e, r, t, o, s) {
        if (!n.isFile(r.node.mode)) throw new n.ErrnoError(43);
        if (o & 2) return 0;
        var i = ee.slice(e, e + t);
        n.msync(r, i, s, t, o);
      },
      getStreamFromFD(e) {
        var r = n.getStreamChecked(e);
        return r;
      },
      varargs: void 0,
      getStr(e) {
        var r = Be(e);
        return r;
      }
    };
    function Gr(e) {
      try {
        var r = Ge.getStreamFromFD(e);
        return n.close(r), 0;
      } catch (t) {
        if (typeof n > "u" || t.name !== "ErrnoError") throw t;
        return t.errno;
      }
    }
    var Vr = (e, r, t, o) => {
      for (var s = 0, i = 0; i < t; i++) {
        var l = v[r >> 2], c = v[r + 4 >> 2];
        r += 8;
        var u = n.read(e, Z, l, c, o);
        if (u < 0) return -1;
        if (s += u, u < c) break;
      }
      return s;
    };
    function Yr(e, r, t, o) {
      try {
        var s = Ge.getStreamFromFD(e), i = Vr(s, r, t);
        return v[o >> 2] = i, 0;
      } catch (l) {
        if (typeof n > "u" || l.name !== "ErrnoError") throw l;
        return l.errno;
      }
    }
    var Kr = 9007199254740992, qr = -9007199254740992, Xr = (e) => e < qr || e > Kr ? NaN : Number(e);
    function Zr(e, r, t, o) {
      r = Xr(r);
      try {
        if (isNaN(r)) return 61;
        var s = Ge.getStreamFromFD(e);
        return n.llseek(s, r, t), H[o >> 3] = BigInt(s.position), s.getdents && r === 0 && t === 0 && (s.getdents = null), 0;
      } catch (i) {
        if (typeof n > "u" || i.name !== "ErrnoError") throw i;
        return i.errno;
      }
    }
    var Qr = (e, r, t, o) => {
      for (var s = 0, i = 0; i < t; i++) {
        var l = v[r >> 2], c = v[r + 4 >> 2];
        r += 8;
        var u = n.write(e, Z, l, c, o);
        if (u < 0) return -1;
        if (s += u, u < c) break;
      }
      return s;
    };
    function Jr(e, r, t, o) {
      try {
        var s = Ge.getStreamFromFD(e), i = Qr(s, r, t);
        return v[o >> 2] = i, 0;
      } catch (l) {
        if (typeof n > "u" || l.name !== "ErrnoError") throw l;
        return l.errno;
      }
    }
    n.createPreloadedFile = jr, n.preloadFile = fr, n.staticInit();
    {
      if (a.noExitRuntime && a.noExitRuntime, a.preloadPlugins && (dr = a.preloadPlugins), a.print && (P = a.print), a.printErr && (S = a.printErr), a.wasmBinary && (E = a.wasmBinary), tt(), a.arguments && a.arguments, a.thisProgram && (re = a.thisProgram), d(typeof a.memoryInitializerPrefixURL > "u", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"), d(typeof a.pthreadMainPrefixURL > "u", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"), d(typeof a.cdInitializerPrefixURL > "u", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"), d(typeof a.filePackagePrefixURL > "u", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead"), d(typeof a.read > "u", "Module.read option was removed"), d(typeof a.readAsync > "u", "Module.readAsync option was removed (modify readAsync in JS)"), d(typeof a.readBinary > "u", "Module.readBinary option was removed (modify readBinary in JS)"), d(typeof a.setWindowTitle > "u", "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"), d(typeof a.TOTAL_MEMORY > "u", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"), d(typeof a.ENVIRONMENT > "u", "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"), d(typeof a.STACK_SIZE > "u", "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"), d(typeof a.wasmMemory > "u", "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"), d(typeof a.INITIAL_MEMORY > "u", "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"), a.preInit) for (typeof a.preInit == "function" && (a.preInit = [
        a.preInit
      ]); a.preInit.length > 0; ) a.preInit.shift()();
      te("preInit");
    }
    var et = [
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
    et.forEach(le);
    var rt = [
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
      "FS_readFiles",
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
    rt.forEach(ce);
    function tt() {
      ne("fetchSettings");
    }
    a._deform = k("_deform"), a._malloc = k("_malloc"), a._free = k("_free"), a._modal = k("_modal"), a._modal_paz = k("_modal_paz"), a._didactic_solve = k("_didactic_solve"), a._plate_q4_solve = k("_plate_q4_solve"), a._slopeAllocDouble = k("_slopeAllocDouble"), a._slopeStabilitySolver = k("_slopeStabilitySolver"), a._nonlinear_dynamic = k("_nonlinear_dynamic"), a._steel02_test = k("_steel02_test"), a._cyclic_pushover = k("_cyclic_pushover"), a._concrete02_test = k("_concrete02_test");
    var ur = k("_fflush"), mr = k("_strerror"), tr = k("_emscripten_stack_get_end"), hr = k("_emscripten_stack_init"), qe = k("wasmMemory");
    function nt(e) {
      d(typeof e.deform < "u", "missing Wasm export: deform"), d(typeof e.malloc < "u", "missing Wasm export: malloc"), d(typeof e.free < "u", "missing Wasm export: free"), d(typeof e.modal < "u", "missing Wasm export: modal"), d(typeof e.modal_paz < "u", "missing Wasm export: modal_paz"), d(typeof e.didactic_solve < "u", "missing Wasm export: didactic_solve"), d(typeof e.plate_q4_solve < "u", "missing Wasm export: plate_q4_solve"), d(typeof e.slopeAllocDouble < "u", "missing Wasm export: slopeAllocDouble"), d(typeof e.slopeStabilitySolver < "u", "missing Wasm export: slopeStabilitySolver"), d(typeof e.nonlinear_dynamic < "u", "missing Wasm export: nonlinear_dynamic"), d(typeof e.steel02_test < "u", "missing Wasm export: steel02_test"), d(typeof e.cyclic_pushover < "u", "missing Wasm export: cyclic_pushover"), d(typeof e.concrete02_test < "u", "missing Wasm export: concrete02_test"), d(typeof e.fflush < "u", "missing Wasm export: fflush"), d(typeof e.strerror < "u", "missing Wasm export: strerror"), d(typeof e.emscripten_stack_get_end < "u", "missing Wasm export: emscripten_stack_get_end"), d(typeof e.emscripten_stack_get_base < "u", "missing Wasm export: emscripten_stack_get_base"), d(typeof e.emscripten_stack_init < "u", "missing Wasm export: emscripten_stack_init"), d(typeof e.emscripten_stack_get_free < "u", "missing Wasm export: emscripten_stack_get_free"), d(typeof e._emscripten_stack_restore < "u", "missing Wasm export: _emscripten_stack_restore"), d(typeof e._emscripten_stack_alloc < "u", "missing Wasm export: _emscripten_stack_alloc"), d(typeof e.emscripten_stack_get_current < "u", "missing Wasm export: emscripten_stack_get_current"), d(typeof e.memory < "u", "missing Wasm export: memory"), d(typeof e.__indirect_function_table < "u", "missing Wasm export: __indirect_function_table"), a._deform = F("deform", 43), a._malloc = F("malloc", 1), a._free = F("free", 1), a._modal = F("modal", 39), a._modal_paz = F("modal_paz", 42), a._didactic_solve = F("didactic_solve", 48), a._plate_q4_solve = F("plate_q4_solve", 24), a._slopeAllocDouble = F("slopeAllocDouble", 1), a._slopeStabilitySolver = F("slopeStabilitySolver", 16), a._nonlinear_dynamic = F("nonlinear_dynamic", 20), a._steel02_test = F("steel02_test", 8), a._cyclic_pushover = F("cyclic_pushover", 40), a._concrete02_test = F("concrete02_test", 10), ur = F("fflush", 1), mr = F("strerror", 1), tr = e.emscripten_stack_get_end, e.emscripten_stack_get_base, hr = e.emscripten_stack_init, e.emscripten_stack_get_free, e._emscripten_stack_restore, e._emscripten_stack_alloc, e.emscripten_stack_get_current, qe = e.memory, e.__indirect_function_table;
    }
    var pr = {
      __assert_fail: Sr,
      __cxa_throw: Pr,
      _abort_js: Ar,
      _tzset_js: kr,
      emscripten_resize_heap: Rr,
      environ_get: Nr,
      environ_sizes_get: Dr,
      fd_close: Gr,
      fd_read: Yr,
      fd_seek: Zr,
      fd_write: Jr
    }, vr;
    function ot() {
      hr(), B();
    }
    function nr() {
      if (Oe > 0) {
        je = nr;
        return;
      }
      if (ot(), ve(), Oe > 0) {
        je = nr;
        return;
      }
      function e() {
        var _a2;
        d(!vr), vr = true, a.calledRun = true, !O && (me(), pe == null ? void 0 : pe(a), (_a2 = a.onRuntimeInitialized) == null ? void 0 : _a2.call(a), te("onRuntimeInitialized"), d(!a._main, 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'), _e());
      }
      a.setStatus ? (a.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => a.setStatus(""), 1), e();
      }, 1)) : e(), X();
    }
    var Ce;
    Ce = await Ze(), nr(), oe ? p = a : p = new Promise((e, r) => {
      pe = e, de = r;
    });
    for (const e of Object.keys(a)) e in f || Object.defineProperty(f, e, {
      configurable: true,
      get() {
        b(`Access to module property ('${e}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`);
      }
    });
    return p;
  };
  const q = await Le();
  dt = function(f, p, a, m) {
    if (f.length === 0) return;
    const h = [], w = we(f.flat(), Float64Array, q.HEAPF64);
    h.push(w);
    const $ = p.flat(), C = we($, Uint32Array, q.HEAPU32);
    h.push(C);
    const re = p.map((N) => N.length), I = we(re, Uint32Array, q.HEAPU32);
    h.push(I);
    const j = a.supports ? Array.from(a.supports.keys()) : [], ie = a.supports ? Array.from(a.supports.values()).flat().map((N) => N ? 1 : 0) : [], Y = we(j, Uint32Array, q.HEAPU32);
    h.push(Y);
    const U = we(ie, Uint8Array, q.HEAPU8);
    h.push(U);
    const _ = a.loads ? Array.from(a.loads.keys()) : [], P = a.loads ? Array.from(a.loads.values()).flat() : [], S = we(_, Uint32Array, q.HEAPU32);
    h.push(S);
    const E = we(P, Float64Array, q.HEAPF64);
    h.push(E);
    const O = (N) => {
      const Se = N ? Array.from(N.keys()) : [], Ze = N ? Array.from(N.values()) : [], Ie = we(Se, Uint32Array, q.HEAPU32);
      h.push(Ie);
      const ze = we(Ze, Float64Array, q.HEAPF64);
      return h.push(ze), {
        keysPtr: Ie,
        valuesPtr: ze,
        size: Se.length
      };
    }, d = O(m.elasticities), z = O(m.elasticitiesOrthogonal), B = O(m.areas), X = O(m.momentsOfInertiaZ), te = O(m.momentsOfInertiaY), k = O(m.shearModuli), ne = O(m.torsionalConstants), R = O(m.thicknesses), le = O(m.poissonsRatios);
    O(m.shearAreasY), O(m.shearAreasZ);
    const ce = m.rigidOffsets ? Array.from(m.rigidOffsets.keys()) : [], pe = m.rigidOffsets ? Array.from(m.rigidOffsets.values()).flat() : [], de = we(ce, Uint32Array, q.HEAPU32);
    h.push(de);
    const Z = we(pe, Float64Array, q.HEAPF64);
    h.push(Z);
    const ee = m.momentReleases ? Array.from(m.momentReleases.keys()) : [], fe = m.momentReleases ? Array.from(m.momentReleases.values()).flat().map((N) => N ? 1 : 0) : [], v = we(ee, Uint32Array, q.HEAPU32);
    h.push(v);
    const H = we(fe, Uint8Array, q.HEAPU8);
    h.push(H);
    const oe = q._malloc(4);
    h.push(oe);
    const Q = q._malloc(4);
    h.push(Q);
    const ve = q._malloc(4);
    h.push(ve);
    const me = q._malloc(4);
    h.push(me), q._deform(w, f.length, C, $.length, I, p.length, Y, U, j.length, S, E, _.length, d.keysPtr, d.valuesPtr, d.size, B.keysPtr, B.valuesPtr, B.size, X.keysPtr, X.valuesPtr, X.size, te.keysPtr, te.valuesPtr, te.size, k.keysPtr, k.valuesPtr, k.size, ne.keysPtr, ne.valuesPtr, ne.size, R.keysPtr, R.valuesPtr, R.size, le.keysPtr, le.valuesPtr, le.size, z.keysPtr, z.valuesPtr, z.size, oe, Q, ve, me);
    const _e = q.HEAPU32[oe / 4], b = q.HEAPU32[Q / 4], F = q.HEAPU32[ve / 4], J = q.HEAPU32[me / 4], ae = new Float64Array(q.HEAPF64.buffer, _e, b), M = new Float64Array(q.HEAPF64.buffer, F, J), G = /* @__PURE__ */ new Map();
    for (let N = 0; N < b; N += 7) {
      const Se = ae[N];
      G.set(Se, Array.from(ae.slice(N + 1, N + 7)));
    }
    const K = /* @__PURE__ */ new Map();
    for (let N = 0; N < J; N += 7) {
      const Se = M[N];
      K.set(Se, Array.from(M.slice(N + 1, N + 7)));
    }
    return _e && h.push(_e), F && h.push(F), h.forEach((N) => q._free(N)), {
      deformations: G,
      reactions: K
    };
  };
  function we(f, p, a) {
    const m = new p(f), h = q._malloc(m.length * m.BYTES_PER_ELEMENT);
    return a.set(m, h / m.BYTES_PER_ELEMENT), h;
  }
  const x = await Le();
  ft = function(f, p, a, m, h = 10) {
    if (f.length === 0) return {
      frequencies: [],
      modeShapes: [],
      massParticipation: []
    };
    const w = [], $ = Re(f.flat(), Float64Array, x.HEAPF64);
    w.push($);
    const C = p.flat(), re = Re(C, Uint32Array, x.HEAPU32);
    w.push(re);
    const I = p.map((F) => F.length), j = Re(I, Uint32Array, x.HEAPU32);
    w.push(j);
    const ie = a.supports ? Array.from(a.supports.keys()) : [], Y = a.supports ? Array.from(a.supports.values()).flat().map((F) => F ? 1 : 0) : [], U = Re(ie, Uint32Array, x.HEAPU32);
    w.push(U);
    const _ = Re(Y, Uint8Array, x.HEAPU8);
    w.push(_);
    const P = (F) => {
      const J = F ? Array.from(F.keys()) : [], ae = F ? Array.from(F.values()) : [], M = Re(J, Uint32Array, x.HEAPU32);
      w.push(M);
      const G = Re(ae, Float64Array, x.HEAPF64);
      return w.push(G), {
        keysPtr: M,
        valuesPtr: G,
        size: J.length
      };
    }, S = P(m.elasticities), E = P(m.areas), O = P(m.momentsOfInertiaZ), d = P(m.momentsOfInertiaY), z = P(m.shearModuli), B = P(m.torsionalConstants), X = P(m.densities), te = x._malloc(4);
    w.push(te);
    const k = x._malloc(4);
    w.push(k);
    const ne = x._malloc(4);
    w.push(ne);
    const R = x._malloc(4);
    w.push(R);
    const le = x._malloc(4);
    w.push(le);
    const ce = x._malloc(4);
    w.push(ce);
    const pe = x._malloc(4);
    w.push(pe);
    const de = x._malloc(4);
    w.push(de), x._modal($, f.length, re, C.length, j, p.length, U, _, ie.length, S.keysPtr, S.valuesPtr, S.size, E.keysPtr, E.valuesPtr, E.size, O.keysPtr, O.valuesPtr, O.size, d.keysPtr, d.valuesPtr, d.size, z.keysPtr, z.valuesPtr, z.size, B.keysPtr, B.valuesPtr, B.size, X.keysPtr, X.valuesPtr, X.size, h, te, k, ne, R, le, ce, pe, de);
    const Z = x.HEAPU32[te / 4], ee = x.HEAPU32[k / 4], fe = x.HEAPU32[ne / 4], v = x.HEAPU32[R / 4], H = x.HEAPU32[le / 4], oe = x.HEAPU32[ce / 4], Q = x.HEAPU32[pe / 4], ve = x.HEAPU32[de / 4];
    let me = [], _e = [], b = [];
    if (ee > 0 && Z) {
      const F = new Float64Array(x.HEAPF64.buffer, Z, ee);
      me = Array.from(F), w.push(Z);
    }
    if (v > 0 && H > 0 && fe) {
      const F = new Float64Array(x.HEAPF64.buffer, fe, v * H);
      for (let J = 0; J < v; J++) _e.push(Array.from(F.slice(J * H, (J + 1) * H)));
      w.push(fe);
    }
    if (Q > 0 && ve > 0 && oe) {
      const F = new Float64Array(x.HEAPF64.buffer, oe, Q * ve);
      for (let J = 0; J < Q; J++) b.push(Array.from(F.slice(J * ve, (J + 1) * ve)));
      w.push(oe);
    }
    return w.forEach((F) => x._free(F)), {
      frequencies: me,
      modeShapes: _e,
      massParticipation: b
    };
  };
  function Re(f, p, a) {
    const m = new p(f), h = x._malloc(m.length * m.BYTES_PER_ELEMENT);
    return a.set(m, h / m.BYTES_PER_ELEMENT), h;
  }
  await Le();
  const Pe = await Le();
  ut = function(f) {
    const { nodes: p, elements: a, E: m, nu: h, gamma: w, c: $, phi: C, thickness: re = 1, supports: I, surcharge: j = 0, surfaceYThreshold: ie = -1e10 } = f, Y = [], U = p.flat(), _ = lt(U);
    Y.push(_);
    const P = a.flat(), S = Er(P);
    Y.push(S);
    const E = [];
    for (const R of I) E.push(R.node, R.fixX ? 1 : 0, R.fixY ? 1 : 0);
    const O = Er(E);
    Y.push(O);
    const d = a.length, z = p.length, B = Pe._slopeAllocDouble(d);
    Y.push(B);
    const X = Pe._slopeAllocDouble(z * 2);
    Y.push(X);
    const te = Pe._slopeStabilitySolver(_, z, S, d, m, h, w, $, C, re, O, I.length, j, ie, B, X), k = [];
    for (let R = 0; R < d; R++) k.push(Pe.HEAPF64[B / 8 + R]);
    const ne = [];
    for (let R = 0; R < z; R++) ne.push([
      Pe.HEAPF64[X / 8 + 2 * R],
      Pe.HEAPF64[X / 8 + 2 * R + 1]
    ]);
    return Y.forEach((R) => Pe._free(R)), {
      fos: te,
      plasticStrain: k,
      displacements: ne
    };
  };
  function lt(f) {
    const p = new Float64Array(f), a = Pe._malloc(p.length * p.BYTES_PER_ELEMENT);
    return Pe.HEAPF64.set(p, a / 8), a;
  }
  function Er(f) {
    const p = new Uint32Array(f), a = Pe._malloc(p.length * p.BYTES_PER_ELEMENT);
    return Pe.HEAPU32.set(p, a / 4), a;
  }
  const ue = await Le();
  function Ye(f, p, a) {
    const m = new p(f), h = ue._malloc(m.length * m.BYTES_PER_ELEMENT);
    return a.set(m, h / m.BYTES_PER_ELEMENT), h;
  }
  mt = function(f) {
    const p = [];
    let a = [], m = 0;
    f.nodes && f.nodes.length > 0 && (m = f.nodes.length, a = f.nodes.flat());
    const h = Ye(a.length > 0 ? a : [
      0
    ], Float64Array, ue.HEAPF64);
    p.push(h);
    let w = [], $ = 0;
    f.elements && f.elements.length > 0 && ($ = f.elements.length, w = f.elements.flat());
    const C = Ye(w.length > 0 ? w : [
      0
    ], Int32Array, ue.HEAPU32);
    p.push(C);
    let re = [], I = 0;
    f.bcs && f.bcs.length > 0 && (I = f.bcs.length, re = f.bcs.flatMap((M) => [
      M.node,
      M.dof,
      M.value
    ]));
    const j = Ye(re.length > 0 ? re : [
      0
    ], Float64Array, ue.HEAPF64);
    p.push(j);
    let ie = [], Y = 0;
    f.pointLoads && f.pointLoads.length > 0 && (Y = f.pointLoads.length, ie = f.pointLoads.flatMap((M) => [
      M.node,
      M.dof,
      M.value
    ]));
    const U = Ye(ie.length > 0 ? ie : [
      0
    ], Float64Array, ue.HEAPF64);
    p.push(U);
    const _ = f.meshLx ?? 0, P = f.meshLy ?? 0, S = f.meshNx ?? 0, E = f.meshNy ?? 0, d = {
      none: 0,
      "simply-supported": 1,
      clamped: 2
    }[f.bcType ?? "none"] ?? 0, z = f.theoryType ?? 0;
    let B = [], X = 0;
    f.springs && f.springs.length > 0 && (X = f.springs.length, B = f.springs.flatMap((M) => [
      M.node,
      M.dof,
      M.k
    ]));
    const te = Ye(B.length > 0 ? B : [
      0
    ], Float64Array, ue.HEAPF64);
    p.push(te);
    const k = ue._malloc(4);
    p.push(k);
    const ne = ue._malloc(4);
    p.push(ne);
    const R = ue._malloc(4);
    p.push(R);
    const le = ue._malloc(4);
    p.push(le), ue._plate_q4_solve(h, m, C, $, f.E, f.nu, f.thickness, j, I, f.pressure ?? 0, U, Y, _, P, S, E, d, z, te, X, k, ne, R, le);
    const ce = ue.HEAPU32[k / 4], pe = ue.HEAPU32[ne / 4], de = ue.HEAPU32[R / 4], Z = ue.HEAPU32[le / 4], ee = new Float64Array(ue.HEAPF64.buffer, ce, pe), fe = ee[0], v = ee[1], H = [];
    let oe = 0;
    for (let M = 0; M < fe; M++) {
      const G = 2 + M * 5, K = {
        x: ee[G],
        y: ee[G + 1],
        w: ee[G + 2],
        bx: ee[G + 3],
        by: ee[G + 4]
      };
      H.push(K), Math.abs(K.w) > Math.abs(oe) && (oe = K.w);
    }
    const Q = new Float64Array(ue.HEAPF64.buffer, de, Z), ve = [];
    let me = 0, _e = 0, b = 0, F = 0, J = 0;
    for (let M = 0; M < v; M++) {
      const G = M * 9, K = {
        nodes: [
          Q[G],
          Q[G + 1],
          Q[G + 2],
          Q[G + 3]
        ],
        Mxx: Q[G + 4],
        Myy: Q[G + 5],
        Mxy: Q[G + 6],
        Qx: Q[G + 7],
        Qy: Q[G + 8]
      };
      ve.push(K), Math.abs(K.Mxx) > Math.abs(me) && (me = K.Mxx), Math.abs(K.Myy) > Math.abs(_e) && (_e = K.Myy), Math.abs(K.Mxy) > Math.abs(b) && (b = K.Mxy), Math.abs(K.Qx) > Math.abs(F) && (F = K.Qx), Math.abs(K.Qy) > Math.abs(J) && (J = K.Qy);
    }
    let ae;
    if (_ > 0 && P > 0) {
      const M = _ / 2, G = P / 2;
      let K = 1 / 0;
      for (const N of H) {
        const Se = Math.hypot(N.x - M, N.y - G);
        Se < K && (K = Se, ae = N.w);
      }
    }
    return ce && p.push(ce), de && p.push(de), p.forEach((M) => ue._free(M)), {
      nodeResults: H,
      elementResults: ve,
      maxW: oe,
      maxMxx: me,
      maxMyy: _e,
      maxMxy: b,
      maxQx: F,
      maxQy: J,
      centerW: ae
    };
  };
  const V = await Le();
  ht = function(f, p, a, m) {
    if (f.length === 0) return {
      nNodes: 0,
      nElements: 0,
      nDOF: 0,
      elements: [],
      K_assembled_sparse: [],
      K_assembled_nnz: 0,
      F_applied: [],
      U_full: [],
      R_full: [],
      freeDOFs: [],
      fixedDOFs: []
    };
    const h = [], w = ke(f.flat(), Float64Array, V.HEAPF64);
    h.push(w);
    const $ = p.flat(), C = ke($, Uint32Array, V.HEAPU32);
    h.push(C);
    const re = p.map((ae) => ae.length), I = ke(re, Uint32Array, V.HEAPU32);
    h.push(I);
    const j = a.supports ? Array.from(a.supports.keys()) : [], ie = a.supports ? Array.from(a.supports.values()).flat().map((ae) => ae ? 1 : 0) : [], Y = ke(j, Uint32Array, V.HEAPU32);
    h.push(Y);
    const U = ke(ie, Uint8Array, V.HEAPU8);
    h.push(U);
    const _ = a.loads ? Array.from(a.loads.keys()) : [], P = a.loads ? Array.from(a.loads.values()).flat() : [], S = ke(_, Uint32Array, V.HEAPU32);
    h.push(S);
    const E = ke(P, Float64Array, V.HEAPF64);
    h.push(E);
    const O = (ae) => {
      const M = ae ? Array.from(ae.keys()) : [], G = ae ? Array.from(ae.values()) : [], K = ke(M, Uint32Array, V.HEAPU32);
      h.push(K);
      const N = ke(G, Float64Array, V.HEAPF64);
      return h.push(N), {
        keysPtr: K,
        valuesPtr: N,
        size: M.length
      };
    }, d = O(m.elasticities), z = O(m.areas), B = O(m.momentsOfInertiaZ), X = O(m.momentsOfInertiaY), te = O(m.shearModuli), k = O(m.torsionalConstants), ne = O(m.thicknesses), R = O(m.poissonsRatios), le = O(m.shearAreasY), ce = O(m.shearAreasZ), pe = V._malloc(4);
    h.push(pe);
    const de = V._malloc(4);
    h.push(de);
    const Z = V._malloc(4);
    h.push(Z);
    const ee = V._malloc(4);
    h.push(ee);
    const fe = V._malloc(4);
    h.push(fe);
    const v = V._malloc(4);
    h.push(v), V._didactic_solve(w, f.length, C, $.length, I, p.length, Y, U, j.length, S, E, _.length, d.keysPtr, d.valuesPtr, d.size, z.keysPtr, z.valuesPtr, z.size, B.keysPtr, B.valuesPtr, B.size, X.keysPtr, X.valuesPtr, X.size, te.keysPtr, te.valuesPtr, te.size, k.keysPtr, k.valuesPtr, k.size, ne.keysPtr, ne.valuesPtr, ne.size, R.keysPtr, R.valuesPtr, R.size, le.keysPtr, le.valuesPtr, le.size, ce.keysPtr, ce.valuesPtr, ce.size, pe, de, Z, ee, fe, v);
    const H = V.HEAPU32[pe / 4], oe = V.HEAPU32[de / 4], Q = V.HEAPU32[Z / 4], ve = V.HEAPU32[ee / 4], me = V.HEAPU32[fe / 4], _e = V.HEAPU32[v / 4], b = H && oe > 0 ? Array.from(new Float64Array(V.HEAPF64.buffer, H, oe)) : [], F = Q && ve > 0 ? Array.from(new Float64Array(V.HEAPF64.buffer, Q, ve)) : [], J = me && _e > 0 ? Array.from(new Float64Array(V.HEAPF64.buffer, me, _e)) : [];
    return H && h.push(H), Q && h.push(Q), me && h.push(me), h.forEach((ae) => V._free(ae)), ct(b, F, J, f.length, p.length);
  };
  function ct(f, p, a, m, h) {
    const w = m * 6, $ = [];
    if (f.length > 0) {
      const _ = f[0], P = [];
      for (let S = 0; S < _; S++) P.push(f[1 + S]);
      for (let S = 0; S < _; S++) {
        let E = P[S];
        const O = f[E++], d = f[E++], z = f[E++], B = z * z, X = Xe(f.slice(E, E + B), z);
        E += B;
        const te = Xe(f.slice(E, E + B), z);
        E += B;
        const k = Xe(f.slice(E, E + B), z);
        E += B;
        const ne = Xe(f.slice(E, E + 9), 3);
        E += 9;
        const R = f[E++], le = f[E++], ce = f[E++], pe = f[E++], de = f[E++], Z = f[E++], ee = f[E++], fe = f[E++], v = f[E++], H = f[E++], oe = f[E++];
        $.push({
          index: O,
          type: d === 0 ? "frame" : "shell-Q4",
          nDOF: z,
          K_local: X,
          T: te,
          K_global: k,
          lambda: ne,
          L: R,
          E: le,
          A: ce,
          Iz: pe,
          Iy: de,
          G: Z,
          J: ee,
          t: fe,
          nu: v,
          phiZ: H,
          phiY: oe
        });
      }
    }
    const C = [];
    let re = 0;
    if (p.length > 0) {
      re = p[0];
      for (let _ = 0; _ < re; _++) {
        const P = 1 + _ * 3;
        C.push({
          row: p[P],
          col: p[P + 1],
          value: p[P + 2]
        });
      }
    }
    let I = [], j = [], ie = [], Y = [], U = [];
    if (a.length > 0) {
      let _ = 0;
      const P = a[_++];
      I = a.slice(_, _ + P), _ += P, j = a.slice(_, _ + P), _ += P, ie = a.slice(_, _ + P), _ += P;
      const S = a[_++];
      Y = a.slice(_, _ + S).map(Math.round), _ += S;
      const E = a[_++];
      U = a.slice(_, _ + E).map(Math.round);
    }
    return {
      nNodes: m,
      nElements: h,
      nDOF: w,
      elements: $,
      K_assembled_sparse: C,
      K_assembled_nnz: re,
      F_applied: I,
      U_full: j,
      R_full: ie,
      freeDOFs: Y,
      fixedDOFs: U
    };
  }
  function Xe(f, p) {
    const a = [];
    for (let m = 0; m < p; m++) a.push(f.slice(m * p, (m + 1) * p));
    return a;
  }
  function ke(f, p, a) {
    const m = new p(f), h = V._malloc(m.length * m.BYTES_PER_ELEMENT);
    return a.set(m, h / m.BYTES_PER_ELEMENT), h;
  }
})();
export {
  Le as M,
  it as _,
  __tla,
  ht as a,
  dt as d,
  ft as m,
  mt as p,
  ut as s
};
