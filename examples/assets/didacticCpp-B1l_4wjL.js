var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let Te, Nr, Yr, Br, Lr, jr, xr;
let __tla = (async () => {
  let Dr, Hr, or;
  Dr = "modulepreload";
  Hr = function(f, m) {
    return new URL(f, m).href;
  };
  or = {};
  Nr = function(m, c, u) {
    let h = Promise.resolve();
    if (c && c.length > 0) {
      const H = document.getElementsByTagName("link"), D = document.querySelector("meta[property=csp-nonce]"), G = (D == null ? void 0 : D.nonce) || (D == null ? void 0 : D.getAttribute("nonce"));
      h = Promise.allSettled(c.map((z) => {
        if (z = Hr(z, u), z in or) return;
        or[z] = true;
        const X = z.endsWith(".css"), J = X ? '[rel="stylesheet"]' : "";
        if (!!u) for (let p = H.length - 1; p >= 0; p--) {
          const w = H[p];
          if (w.href === z && (!X || w.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${z}"]${J}`)) return;
        const N = document.createElement("link");
        if (N.rel = X ? "stylesheet" : Dr, X || (N.as = "script"), N.crossOrigin = "", N.href = z, G && N.setAttribute("nonce", G), document.head.appendChild(N), X) return new Promise((p, w) => {
          N.addEventListener("load", p), N.addEventListener("error", () => w(new Error(`Unable to preload CSS for ${z}`)));
        });
      }));
    }
    function _(H) {
      const D = new Event("vite:preloadError", {
        cancelable: true
      });
      if (D.payload = H, window.dispatchEvent(D), !D.defaultPrevented) throw H;
    }
    return h.then((H) => {
      for (const D of H || []) D.status === "rejected" && _(D.reason);
      return m().catch(_);
    });
  };
  Te = async function(f = {}) {
    var _a, _b, _c;
    var m, c = f, u = !!globalThis.window, h = !!globalThis.WorkerGlobalScope, _ = ((_b = (_a = globalThis.process) == null ? void 0 : _a.versions) == null ? void 0 : _b.node) && ((_c = globalThis.process) == null ? void 0 : _c.type) != "renderer";
    if (_) {
      const { createRequire: e } = await Nr(() => import("./__vite-browser-external-D7Ct-6yo.js").then((r) => r._), [], import.meta.url);
      var H = e(import.meta.url);
    }
    var D = "./this.program", G = import.meta.url, z = "";
    function X(e) {
      return c.locateFile ? c.locateFile(e, z) : z + e;
    }
    var J, L;
    if (_) {
      var N = H("fs");
      G.startsWith("file:") && (z = H("path").dirname(H("url").fileURLToPath(G)) + "/"), L = (e) => {
        e = b(e) ? new URL(e) : e;
        var r = N.readFileSync(e);
        return r;
      }, J = async (e, r = true) => {
        e = b(e) ? new URL(e) : e;
        var t = N.readFileSync(e, r ? void 0 : "utf8");
        return t;
      }, process.argv.length > 1 && (D = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2);
    } else if (u || h) {
      try {
        z = new URL(".", G).href;
      } catch {
      }
      h && (L = (e) => {
        var r = new XMLHttpRequest();
        return r.open("GET", e, false), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response);
      }), J = async (e) => {
        if (b(e)) return new Promise((t, n) => {
          var s = new XMLHttpRequest();
          s.open("GET", e, true), s.responseType = "arraybuffer", s.onload = () => {
            if (s.status == 200 || s.status == 0 && s.response) {
              t(s.response);
              return;
            }
            n(s.status);
          }, s.onerror = n, s.send(null);
        });
        var r = await fetch(e, {
          credentials: "same-origin"
        });
        if (r.ok) return r.arrayBuffer();
        throw new Error(r.status + " : " + r.url);
      };
    }
    var p = console.log.bind(console), w = console.error.bind(console), U, y = false, b = (e) => e.startsWith("file://"), ee, x, k, j, I, v, M, S = false;
    function oe() {
      var e = Ye.buffer;
      k = new Int8Array(e), c.HEAPU8 = j = new Uint8Array(e), I = new Int32Array(e), c.HEAPU32 = v = new Uint32Array(e), c.HEAPF64 = new Float64Array(e), M = new BigInt64Array(e), new BigUint64Array(e);
    }
    function le() {
      if (c.preRun) for (typeof c.preRun == "function" && (c.preRun = [
        c.preRun
      ]); c.preRun.length; ) ne(c.preRun.shift());
      he(Z);
    }
    function me() {
      S = true, !c.noFSInit && !o.initialized && o.init(), Be.__wasm_call_ctors(), o.ignorePermissions = false;
    }
    function ce() {
      if (c.postRun) for (typeof c.postRun == "function" && (c.postRun = [
        c.postRun
      ]); c.postRun.length; ) C(c.postRun.shift());
      he(ye);
    }
    function Y(e) {
      var _a2;
      (_a2 = c.onAbort) == null ? void 0 : _a2.call(c, e), e = "Aborted(" + e + ")", w(e), y = true, e += ". Build with -sASSERTIONS for more info.";
      var r = new WebAssembly.RuntimeError(e);
      throw x == null ? void 0 : x(r), r;
    }
    var re;
    function ve() {
      return c.locateFile ? X("deform.wasm") : new URL("" + new URL("deform-C8-DD1Fe.wasm", import.meta.url).href, import.meta.url).href;
    }
    function pe(e) {
      if (e == re && U) return new Uint8Array(U);
      if (L) return L(e);
      throw "both async and sync fetching of the wasm failed";
    }
    async function se(e) {
      if (!U) try {
        var r = await J(e);
        return new Uint8Array(r);
      } catch {
      }
      return pe(e);
    }
    async function ae(e, r) {
      try {
        var t = await se(e), n = await WebAssembly.instantiate(t, r);
        return n;
      } catch (s) {
        w(`failed to asynchronously prepare wasm: ${s}`), Y(s);
      }
    }
    async function Q(e, r, t) {
      if (!e && !b(r) && !_) try {
        var n = fetch(r, {
          credentials: "same-origin"
        }), s = await WebAssembly.instantiateStreaming(n, t);
        return s;
      } catch (a) {
        w(`wasm streaming compile failed: ${a}`), w("falling back to ArrayBuffer instantiation");
      }
      return ae(r, t);
    }
    function de() {
      var e = {
        env: tr,
        wasi_snapshot_preview1: tr
      };
      return e;
    }
    async function fe() {
      function e(a, i) {
        return Be = a.exports, Tr(Be), oe(), Be;
      }
      function r(a) {
        return e(a.instance);
      }
      var t = de();
      if (c.instantiateWasm) return new Promise((a, i) => {
        c.instantiateWasm(t, (l, d) => {
          a(e(l));
        });
      });
      re ?? (re = ve());
      var n = await Q(U, re, t), s = r(n);
      return s;
    }
    var he = (e) => {
      for (; e.length > 0; ) e.shift()(c);
    }, ye = [], C = (e) => ye.push(e), Z = [], ne = (e) => Z.push(e), R = globalThis.TextDecoder && new TextDecoder(), $ = (e, r, t, n) => {
      for (var s = r + t; e[r] && !(r >= s); ) ++r;
      return r;
    }, T = (e, r = 0, t, n) => {
      var s = $(e, r, t);
      if (s - r > 16 && e.buffer && R) return R.decode(e.subarray(r, s));
      for (var a = ""; r < s; ) {
        var i = e[r++];
        if (!(i & 128)) {
          a += String.fromCharCode(i);
          continue;
        }
        var l = e[r++] & 63;
        if ((i & 224) == 192) {
          a += String.fromCharCode((i & 31) << 6 | l);
          continue;
        }
        var d = e[r++] & 63;
        if ((i & 240) == 224 ? i = (i & 15) << 12 | l << 6 | d : i = (i & 7) << 18 | l << 12 | d << 6 | e[r++] & 63, i < 65536) a += String.fromCharCode(i);
        else {
          var P = i - 65536;
          a += String.fromCharCode(55296 | P >> 10, 56320 | P & 1023);
        }
      }
      return a;
    }, F = (e, r, t) => e ? T(j, e, r) : "", Pe = (e, r, t, n) => Y(`Assertion failed: ${F(e)}, at: ` + [
      r ? F(r) : "unknown filename",
      t,
      n ? F(n) : "unknown function"
    ]);
    class Ke {
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
        r = r ? 1 : 0, k[this.ptr + 12] = r;
      }
      get_caught() {
        return k[this.ptr + 12] != 0;
      }
      set_rethrown(r) {
        r = r ? 1 : 0, k[this.ptr + 13] = r;
      }
      get_rethrown() {
        return k[this.ptr + 13] != 0;
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
    var De = 0, je = (e, r, t) => {
      var n = new Ke(e);
      throw n.init(r, t), De = e, De;
    }, sr = () => Y(""), Ze = (e, r, t, n) => {
      if (!(n > 0)) return 0;
      for (var s = t, a = t + n - 1, i = 0; i < e.length; ++i) {
        var l = e.codePointAt(i);
        if (l <= 127) {
          if (t >= a) break;
          r[t++] = l;
        } else if (l <= 2047) {
          if (t + 1 >= a) break;
          r[t++] = 192 | l >> 6, r[t++] = 128 | l & 63;
        } else if (l <= 65535) {
          if (t + 2 >= a) break;
          r[t++] = 224 | l >> 12, r[t++] = 128 | l >> 6 & 63, r[t++] = 128 | l & 63;
        } else {
          if (t + 3 >= a) break;
          r[t++] = 240 | l >> 18, r[t++] = 128 | l >> 12 & 63, r[t++] = 128 | l >> 6 & 63, r[t++] = 128 | l & 63, i++;
        }
      }
      return r[t] = 0, t - s;
    }, He = (e, r, t) => Ze(e, j, r, t), ar = (e, r, t, n) => {
      var s = (/* @__PURE__ */ new Date()).getFullYear(), a = new Date(s, 0, 1), i = new Date(s, 6, 1), l = a.getTimezoneOffset(), d = i.getTimezoneOffset(), P = Math.max(l, d);
      v[e >> 2] = P * 60, I[r >> 2] = +(l != d);
      var V = (A) => {
        var te = A >= 0 ? "-" : "+", we = Math.abs(A), Ee = String(Math.floor(we / 60)).padStart(2, "0"), ge = String(we % 60).padStart(2, "0");
        return `UTC${te}${Ee}${ge}`;
      }, K = V(l), g = V(d);
      d < l ? (He(K, t, 17), He(g, n, 17)) : (He(K, n, 17), He(g, t, 17));
    }, ir = () => 2147483648, lr = (e, r) => Math.ceil(e / r) * r, cr = (e) => {
      var r = Ye.buffer.byteLength, t = (e - r + 65535) / 65536 | 0;
      try {
        return Ye.grow(t), oe(), 1;
      } catch {
      }
    }, fr = (e) => {
      var r = j.length;
      e >>>= 0;
      var t = ir();
      if (e > t) return false;
      for (var n = 1; n <= 4; n *= 2) {
        var s = r * (1 + 0.2 / n);
        s = Math.min(s, e + 100663296);
        var a = Math.min(t, lr(Math.max(e, s), 65536)), i = cr(a);
        if (i) return true;
      }
      return false;
    }, We = {}, ur = () => D || "./this.program", Ne = () => {
      var _a2;
      if (!Ne.strings) {
        var e = (((_a2 = globalThis.navigator) == null ? void 0 : _a2.language) ?? "C").replace("-", "_") + ".UTF-8", r = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: e,
          _: ur()
        };
        for (var t in We) We[t] === void 0 ? delete r[t] : r[t] = We[t];
        var n = [];
        for (var t in r) n.push(`${t}=${r[t]}`);
        Ne.strings = n;
      }
      return Ne.strings;
    }, dr = (e, r) => {
      var t = 0, n = 0;
      for (var s of Ne()) {
        var a = r + t;
        v[e + n >> 2] = a, t += He(s, a, 1 / 0) + 1, n += 4;
      }
      return 0;
    }, Ge = (e) => {
      for (var r = 0, t = 0; t < e.length; ++t) {
        var n = e.charCodeAt(t);
        n <= 127 ? r++ : n <= 2047 ? r += 2 : n >= 55296 && n <= 57343 ? (r += 4, ++t) : r += 3;
      }
      return r;
    }, hr = (e, r) => {
      var t = Ne();
      v[e >> 2] = t.length;
      var n = 0;
      for (var s of t) n += Ge(s) + 1;
      return v[r >> 2] = n, 0;
    }, B = {
      isAbs: (e) => e.charAt(0) === "/",
      splitPath: (e) => {
        var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return r.exec(e).slice(1);
      },
      normalizeArray: (e, r) => {
        for (var t = 0, n = e.length - 1; n >= 0; n--) {
          var s = e[n];
          s === "." ? e.splice(n, 1) : s === ".." ? (e.splice(n, 1), t++) : t && (e.splice(n, 1), t--);
        }
        if (r) for (; t; t--) e.unshift("..");
        return e;
      },
      normalize: (e) => {
        var r = B.isAbs(e), t = e.slice(-1) === "/";
        return e = B.normalizeArray(e.split("/").filter((n) => !!n), !r).join("/"), !e && !r && (e = "."), e && t && (e += "/"), (r ? "/" : "") + e;
      },
      dirname: (e) => {
        var r = B.splitPath(e), t = r[0], n = r[1];
        return !t && !n ? "." : (n && (n = n.slice(0, -1)), t + n);
      },
      basename: (e) => e && e.match(/([^\/]+|\/)\/*$/)[1],
      join: (...e) => B.normalize(e.join("/")),
      join2: (e, r) => B.normalize(e + "/" + r)
    }, mr = () => {
      if (_) {
        var e = H("crypto");
        return (r) => e.randomFillSync(r);
      }
      return (r) => crypto.getRandomValues(r);
    }, Ie = (e) => {
      (Ie = mr())(e);
    }, ze = {
      resolve: (...e) => {
        for (var r = "", t = false, n = e.length - 1; n >= -1 && !t; n--) {
          var s = n >= 0 ? e[n] : o.cwd();
          if (typeof s != "string") throw new TypeError("Arguments to path.resolve must be strings");
          if (!s) return "";
          r = s + "/" + r, t = B.isAbs(s);
        }
        return r = B.normalizeArray(r.split("/").filter((a) => !!a), !t).join("/"), (t ? "/" : "") + r || ".";
      },
      relative: (e, r) => {
        e = ze.resolve(e).slice(1), r = ze.resolve(r).slice(1);
        function t(P) {
          for (var V = 0; V < P.length && P[V] === ""; V++) ;
          for (var K = P.length - 1; K >= 0 && P[K] === ""; K--) ;
          return V > K ? [] : P.slice(V, K - V + 1);
        }
        for (var n = t(e.split("/")), s = t(r.split("/")), a = Math.min(n.length, s.length), i = a, l = 0; l < a; l++) if (n[l] !== s[l]) {
          i = l;
          break;
        }
        for (var d = [], l = i; l < n.length; l++) d.push("..");
        return d = d.concat(s.slice(i)), d.join("/");
      }
    }, Ve = [], qe = (e, r, t) => {
      var n = Ge(e) + 1, s = new Array(n), a = Ze(e, s, 0, s.length);
      return s.length = a, s;
    }, vr = () => {
      var _a2;
      if (!Ve.length) {
        var e = null;
        if (_) {
          var r = 256, t = Buffer.alloc(r), n = 0, s = process.stdin.fd;
          try {
            n = N.readSync(s, t, 0, r);
          } catch (a) {
            if (a.toString().includes("EOF")) n = 0;
            else throw a;
          }
          n > 0 && (e = t.slice(0, n).toString("utf-8"));
        } else ((_a2 = globalThis.window) == null ? void 0 : _a2.prompt) && (e = window.prompt("Input: "), e !== null && (e += `
`));
        if (!e) return null;
        Ve = qe(e);
      }
      return Ve.shift();
    }, Se = {
      ttys: [],
      init() {
      },
      shutdown() {
      },
      register(e, r) {
        Se.ttys[e] = {
          input: [],
          output: [],
          ops: r
        }, o.registerDevice(e, Se.stream_ops);
      },
      stream_ops: {
        open(e) {
          var r = Se.ttys[e.node.rdev];
          if (!r) throw new o.ErrnoError(43);
          e.tty = r, e.seekable = false;
        },
        close(e) {
          e.tty.ops.fsync(e.tty);
        },
        fsync(e) {
          e.tty.ops.fsync(e.tty);
        },
        read(e, r, t, n, s) {
          if (!e.tty || !e.tty.ops.get_char) throw new o.ErrnoError(60);
          for (var a = 0, i = 0; i < n; i++) {
            var l;
            try {
              l = e.tty.ops.get_char(e.tty);
            } catch {
              throw new o.ErrnoError(29);
            }
            if (l === void 0 && a === 0) throw new o.ErrnoError(6);
            if (l == null) break;
            a++, r[t + i] = l;
          }
          return a && (e.node.atime = Date.now()), a;
        },
        write(e, r, t, n, s) {
          if (!e.tty || !e.tty.ops.put_char) throw new o.ErrnoError(60);
          try {
            for (var a = 0; a < n; a++) e.tty.ops.put_char(e.tty, r[t + a]);
          } catch {
            throw new o.ErrnoError(29);
          }
          return n && (e.node.mtime = e.node.ctime = Date.now()), a;
        }
      },
      default_tty_ops: {
        get_char(e) {
          return vr();
        },
        put_char(e, r) {
          r === null || r === 10 ? (p(T(e.output)), e.output = []) : r != 0 && e.output.push(r);
        },
        fsync(e) {
          var _a2;
          ((_a2 = e.output) == null ? void 0 : _a2.length) > 0 && (p(T(e.output)), e.output = []);
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
          r === null || r === 10 ? (w(T(e.output)), e.output = []) : r != 0 && e.output.push(r);
        },
        fsync(e) {
          var _a2;
          ((_a2 = e.output) == null ? void 0 : _a2.length) > 0 && (w(T(e.output)), e.output = []);
        }
      }
    }, Je = (e) => {
      Y();
    }, E = {
      ops_table: null,
      mount(e) {
        return E.createNode(null, "/", 16895, 0);
      },
      createNode(e, r, t, n) {
        if (o.isBlkdev(t) || o.isFIFO(t)) throw new o.ErrnoError(63);
        E.ops_table || (E.ops_table = {
          dir: {
            node: {
              getattr: E.node_ops.getattr,
              setattr: E.node_ops.setattr,
              lookup: E.node_ops.lookup,
              mknod: E.node_ops.mknod,
              rename: E.node_ops.rename,
              unlink: E.node_ops.unlink,
              rmdir: E.node_ops.rmdir,
              readdir: E.node_ops.readdir,
              symlink: E.node_ops.symlink
            },
            stream: {
              llseek: E.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: E.node_ops.getattr,
              setattr: E.node_ops.setattr
            },
            stream: {
              llseek: E.stream_ops.llseek,
              read: E.stream_ops.read,
              write: E.stream_ops.write,
              mmap: E.stream_ops.mmap,
              msync: E.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: E.node_ops.getattr,
              setattr: E.node_ops.setattr,
              readlink: E.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: E.node_ops.getattr,
              setattr: E.node_ops.setattr
            },
            stream: o.chrdev_stream_ops
          }
        });
        var s = o.createNode(e, r, t, n);
        return o.isDir(s.mode) ? (s.node_ops = E.ops_table.dir.node, s.stream_ops = E.ops_table.dir.stream, s.contents = {}) : o.isFile(s.mode) ? (s.node_ops = E.ops_table.file.node, s.stream_ops = E.ops_table.file.stream, s.usedBytes = 0, s.contents = null) : o.isLink(s.mode) ? (s.node_ops = E.ops_table.link.node, s.stream_ops = E.ops_table.link.stream) : o.isChrdev(s.mode) && (s.node_ops = E.ops_table.chrdev.node, s.stream_ops = E.ops_table.chrdev.stream), s.atime = s.mtime = s.ctime = Date.now(), e && (e.contents[r] = s, e.atime = e.mtime = e.ctime = s.atime), s;
      },
      getFileDataAsTypedArray(e) {
        return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0);
      },
      expandFileStorage(e, r) {
        var t = e.contents ? e.contents.length : 0;
        if (!(t >= r)) {
          var n = 1024 * 1024;
          r = Math.max(r, t * (t < n ? 2 : 1.125) >>> 0), t != 0 && (r = Math.max(r, 256));
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
          return r.dev = o.isChrdev(e.mode) ? e.id : 1, r.ino = e.id, r.mode = e.mode, r.nlink = 1, r.uid = 0, r.gid = 0, r.rdev = e.rdev, o.isDir(e.mode) ? r.size = 4096 : o.isFile(e.mode) ? r.size = e.usedBytes : o.isLink(e.mode) ? r.size = e.link.length : r.size = 0, r.atime = new Date(e.atime), r.mtime = new Date(e.mtime), r.ctime = new Date(e.ctime), r.blksize = 4096, r.blocks = Math.ceil(r.size / r.blksize), r;
        },
        setattr(e, r) {
          for (const t of [
            "mode",
            "atime",
            "mtime",
            "ctime"
          ]) r[t] != null && (e[t] = r[t]);
          r.size !== void 0 && E.resizeFileStorage(e, r.size);
        },
        lookup(e, r) {
          throw E.doesNotExistError || (E.doesNotExistError = new o.ErrnoError(44), E.doesNotExistError.stack = "<generic error, no stack>"), E.doesNotExistError;
        },
        mknod(e, r, t, n) {
          return E.createNode(e, r, t, n);
        },
        rename(e, r, t) {
          var n;
          try {
            n = o.lookupNode(r, t);
          } catch {
          }
          if (n) {
            if (o.isDir(e.mode)) for (var s in n.contents) throw new o.ErrnoError(55);
            o.hashRemoveNode(n);
          }
          delete e.parent.contents[e.name], r.contents[t] = e, e.name = t, r.ctime = r.mtime = e.parent.ctime = e.parent.mtime = Date.now();
        },
        unlink(e, r) {
          delete e.contents[r], e.ctime = e.mtime = Date.now();
        },
        rmdir(e, r) {
          var t = o.lookupNode(e, r);
          for (var n in t.contents) throw new o.ErrnoError(55);
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
          var n = E.createNode(e, r, 41471, 0);
          return n.link = t, n;
        },
        readlink(e) {
          if (!o.isLink(e.mode)) throw new o.ErrnoError(28);
          return e.link;
        }
      },
      stream_ops: {
        read(e, r, t, n, s) {
          var a = e.node.contents;
          if (s >= e.node.usedBytes) return 0;
          var i = Math.min(e.node.usedBytes - s, n);
          if (i > 8 && a.subarray) r.set(a.subarray(s, s + i), t);
          else for (var l = 0; l < i; l++) r[t + l] = a[s + l];
          return i;
        },
        write(e, r, t, n, s, a) {
          if (r.buffer === k.buffer && (a = false), !n) return 0;
          var i = e.node;
          if (i.mtime = i.ctime = Date.now(), r.subarray && (!i.contents || i.contents.subarray)) {
            if (a) return i.contents = r.subarray(t, t + n), i.usedBytes = n, n;
            if (i.usedBytes === 0 && s === 0) return i.contents = r.slice(t, t + n), i.usedBytes = n, n;
            if (s + n <= i.usedBytes) return i.contents.set(r.subarray(t, t + n), s), n;
          }
          if (E.expandFileStorage(i, s + n), i.contents.subarray && r.subarray) i.contents.set(r.subarray(t, t + n), s);
          else for (var l = 0; l < n; l++) i.contents[s + l] = r[t + l];
          return i.usedBytes = Math.max(i.usedBytes, s + n), n;
        },
        llseek(e, r, t) {
          var n = r;
          if (t === 1 ? n += e.position : t === 2 && o.isFile(e.node.mode) && (n += e.node.usedBytes), n < 0) throw new o.ErrnoError(28);
          return n;
        },
        mmap(e, r, t, n, s) {
          if (!o.isFile(e.node.mode)) throw new o.ErrnoError(43);
          var a, i, l = e.node.contents;
          if (!(s & 2) && l && l.buffer === k.buffer) i = false, a = l.byteOffset;
          else {
            if (i = true, a = Je(), !a) throw new o.ErrnoError(48);
            l && ((t > 0 || t + r < l.length) && (l.subarray ? l = l.subarray(t, t + r) : l = Array.prototype.slice.call(l, t, t + r)), k.set(l, a));
          }
          return {
            ptr: a,
            allocated: i
          };
        },
        msync(e, r, t, n, s) {
          return E.stream_ops.write(e, r, 0, n, t, false), 0;
        }
      }
    }, pr = (e) => {
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
    }, Xe = (e, r) => {
      var t = 0;
      return e && (t |= 365), r && (t |= 146), t;
    }, yr = async (e) => {
      var r = await J(e);
      return new Uint8Array(r);
    }, wr = (...e) => o.createDataFile(...e), Re = 0, Oe = null, Er = (e) => {
      var _a2;
      if (Re--, (_a2 = c.monitorRunDependencies) == null ? void 0 : _a2.call(c, Re), Re == 0 && Oe) {
        var r = Oe;
        Oe = null, r();
      }
    }, gr = (e) => {
      var _a2;
      Re++, (_a2 = c.monitorRunDependencies) == null ? void 0 : _a2.call(c, Re);
    }, er = [], _r = async (e, r) => {
      typeof Browser < "u" && Browser.init();
      for (var t of er) if (t.canHandle(r)) return t.handle(e, r);
      return e;
    }, rr = async (e, r, t, n, s, a, i, l) => {
      var d = r ? ze.resolve(B.join2(e, r)) : e;
      gr();
      try {
        var P = t;
        typeof t == "string" && (P = await yr(t)), P = await _r(P, d), l == null ? void 0 : l(), a || wr(e, r, P, n, s, i);
      } finally {
        Er();
      }
    }, Pr = (e, r, t, n, s, a, i, l, d, P) => {
      rr(e, r, t, n, s, l, d, P).then(a).catch(i);
    }, o = {
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
      ErrnoError: class {
        constructor(e) {
          __publicField(this, "name", "ErrnoError");
          this.errno = e;
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
        constructor(e, r, t, n) {
          __publicField(this, "node_ops", {});
          __publicField(this, "stream_ops", {});
          __publicField(this, "readMode", 365);
          __publicField(this, "writeMode", 146);
          __publicField(this, "mounted", null);
          e || (e = this), this.parent = e, this.mount = e.mount, this.id = o.nextInode++, this.name = r, this.mode = t, this.rdev = n, this.atime = this.mtime = this.ctime = Date.now();
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
          return o.isDir(this.mode);
        }
        get isDevice() {
          return o.isChrdev(this.mode);
        }
      },
      lookupPath(e, r = {}) {
        if (!e) throw new o.ErrnoError(44);
        r.follow_mount ?? (r.follow_mount = true), B.isAbs(e) || (e = o.cwd() + "/" + e);
        e: for (var t = 0; t < 40; t++) {
          for (var n = e.split("/").filter((P) => !!P), s = o.root, a = "/", i = 0; i < n.length; i++) {
            var l = i === n.length - 1;
            if (l && r.parent) break;
            if (n[i] !== ".") {
              if (n[i] === "..") {
                if (a = B.dirname(a), o.isRoot(s)) {
                  e = a + "/" + n.slice(i + 1).join("/"), t--;
                  continue e;
                } else s = s.parent;
                continue;
              }
              a = B.join2(a, n[i]);
              try {
                s = o.lookupNode(s, n[i]);
              } catch (P) {
                if ((P == null ? void 0 : P.errno) === 44 && l && r.noent_okay) return {
                  path: a
                };
                throw P;
              }
              if (o.isMountpoint(s) && (!l || r.follow_mount) && (s = s.mounted.root), o.isLink(s.mode) && (!l || r.follow)) {
                if (!s.node_ops.readlink) throw new o.ErrnoError(52);
                var d = s.node_ops.readlink(s);
                B.isAbs(d) || (d = B.dirname(a) + "/" + d), e = d + "/" + n.slice(i + 1).join("/");
                continue e;
              }
            }
          }
          return {
            path: a,
            node: s
          };
        }
        throw new o.ErrnoError(32);
      },
      getPath(e) {
        for (var r; ; ) {
          if (o.isRoot(e)) {
            var t = e.mount.mountpoint;
            return r ? t[t.length - 1] !== "/" ? `${t}/${r}` : t + r : t;
          }
          r = r ? `${e.name}/${r}` : e.name, e = e.parent;
        }
      },
      hashName(e, r) {
        for (var t = 0, n = 0; n < r.length; n++) t = (t << 5) - t + r.charCodeAt(n) | 0;
        return (e + t >>> 0) % o.nameTable.length;
      },
      hashAddNode(e) {
        var r = o.hashName(e.parent.id, e.name);
        e.name_next = o.nameTable[r], o.nameTable[r] = e;
      },
      hashRemoveNode(e) {
        var r = o.hashName(e.parent.id, e.name);
        if (o.nameTable[r] === e) o.nameTable[r] = e.name_next;
        else for (var t = o.nameTable[r]; t; ) {
          if (t.name_next === e) {
            t.name_next = e.name_next;
            break;
          }
          t = t.name_next;
        }
      },
      lookupNode(e, r) {
        var t = o.mayLookup(e);
        if (t) throw new o.ErrnoError(t);
        for (var n = o.hashName(e.id, r), s = o.nameTable[n]; s; s = s.name_next) {
          var a = s.name;
          if (s.parent.id === e.id && a === r) return s;
        }
        return o.lookup(e, r);
      },
      createNode(e, r, t, n) {
        var s = new o.FSNode(e, r, t, n);
        return o.hashAddNode(s), s;
      },
      destroyNode(e) {
        o.hashRemoveNode(e);
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
        return o.ignorePermissions ? 0 : r.includes("r") && !(e.mode & 292) || r.includes("w") && !(e.mode & 146) || r.includes("x") && !(e.mode & 73) ? 2 : 0;
      },
      mayLookup(e) {
        if (!o.isDir(e.mode)) return 54;
        var r = o.nodePermissions(e, "x");
        return r || (e.node_ops.lookup ? 0 : 2);
      },
      mayCreate(e, r) {
        if (!o.isDir(e.mode)) return 54;
        try {
          var t = o.lookupNode(e, r);
          return 20;
        } catch {
        }
        return o.nodePermissions(e, "wx");
      },
      mayDelete(e, r, t) {
        var n;
        try {
          n = o.lookupNode(e, r);
        } catch (a) {
          return a.errno;
        }
        var s = o.nodePermissions(e, "wx");
        if (s) return s;
        if (t) {
          if (!o.isDir(n.mode)) return 54;
          if (o.isRoot(n) || o.getPath(n) === o.cwd()) return 10;
        } else if (o.isDir(n.mode)) return 31;
        return 0;
      },
      mayOpen(e, r) {
        return e ? o.isLink(e.mode) ? 32 : o.isDir(e.mode) && (o.flagsToPermissionString(r) !== "r" || r & 576) ? 31 : o.nodePermissions(e, o.flagsToPermissionString(r)) : 44;
      },
      checkOpExists(e, r) {
        if (!e) throw new o.ErrnoError(r);
        return e;
      },
      MAX_OPEN_FDS: 4096,
      nextfd() {
        for (var e = 0; e <= o.MAX_OPEN_FDS; e++) if (!o.streams[e]) return e;
        throw new o.ErrnoError(33);
      },
      getStreamChecked(e) {
        var r = o.getStream(e);
        if (!r) throw new o.ErrnoError(8);
        return r;
      },
      getStream: (e) => o.streams[e],
      createStream(e, r = -1) {
        return e = Object.assign(new o.FSStream(), e), r == -1 && (r = o.nextfd()), e.fd = r, o.streams[r] = e, e;
      },
      closeStream(e) {
        o.streams[e] = null;
      },
      dupStream(e, r = -1) {
        var _a2, _b2;
        var t = o.createStream(e, r);
        return (_b2 = (_a2 = t.stream_ops) == null ? void 0 : _a2.dup) == null ? void 0 : _b2.call(_a2, t), t;
      },
      doSetAttr(e, r, t) {
        var n = e == null ? void 0 : e.stream_ops.setattr, s = n ? e : r;
        n ?? (n = r.node_ops.setattr), o.checkOpExists(n, 63), n(s, t);
      },
      chrdev_stream_ops: {
        open(e) {
          var _a2, _b2;
          var r = o.getDevice(e.node.rdev);
          e.stream_ops = r.stream_ops, (_b2 = (_a2 = e.stream_ops).open) == null ? void 0 : _b2.call(_a2, e);
        },
        llseek() {
          throw new o.ErrnoError(70);
        }
      },
      major: (e) => e >> 8,
      minor: (e) => e & 255,
      makedev: (e, r) => e << 8 | r,
      registerDevice(e, r) {
        o.devices[e] = {
          stream_ops: r
        };
      },
      getDevice: (e) => o.devices[e],
      getMounts(e) {
        for (var r = [], t = [
          e
        ]; t.length; ) {
          var n = t.pop();
          r.push(n), t.push(...n.mounts);
        }
        return r;
      },
      syncfs(e, r) {
        typeof e == "function" && (r = e, e = false), o.syncFSRequests++, o.syncFSRequests > 1 && w(`warning: ${o.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
        var t = o.getMounts(o.root.mount), n = 0;
        function s(l) {
          return o.syncFSRequests--, r(l);
        }
        function a(l) {
          if (l) return a.errored ? void 0 : (a.errored = true, s(l));
          ++n >= t.length && s(null);
        }
        for (var i of t) i.type.syncfs ? i.type.syncfs(i, e, a) : a(null);
      },
      mount(e, r, t) {
        var n = t === "/", s = !t, a;
        if (n && o.root) throw new o.ErrnoError(10);
        if (!n && !s) {
          var i = o.lookupPath(t, {
            follow_mount: false
          });
          if (t = i.path, a = i.node, o.isMountpoint(a)) throw new o.ErrnoError(10);
          if (!o.isDir(a.mode)) throw new o.ErrnoError(54);
        }
        var l = {
          type: e,
          opts: r,
          mountpoint: t,
          mounts: []
        }, d = e.mount(l);
        return d.mount = l, l.root = d, n ? o.root = d : a && (a.mounted = l, a.mount && a.mount.mounts.push(l)), d;
      },
      unmount(e) {
        var r = o.lookupPath(e, {
          follow_mount: false
        });
        if (!o.isMountpoint(r.node)) throw new o.ErrnoError(28);
        var t = r.node, n = t.mounted, s = o.getMounts(n);
        for (var [a, i] of Object.entries(o.nameTable)) for (; i; ) {
          var l = i.name_next;
          s.includes(i.mount) && o.destroyNode(i), i = l;
        }
        t.mounted = null;
        var d = t.mount.mounts.indexOf(n);
        t.mount.mounts.splice(d, 1);
      },
      lookup(e, r) {
        return e.node_ops.lookup(e, r);
      },
      mknod(e, r, t) {
        var n = o.lookupPath(e, {
          parent: true
        }), s = n.node, a = B.basename(e);
        if (!a) throw new o.ErrnoError(28);
        if (a === "." || a === "..") throw new o.ErrnoError(20);
        var i = o.mayCreate(s, a);
        if (i) throw new o.ErrnoError(i);
        if (!s.node_ops.mknod) throw new o.ErrnoError(63);
        return s.node_ops.mknod(s, a, r, t);
      },
      statfs(e) {
        return o.statfsNode(o.lookupPath(e, {
          follow: true
        }).node);
      },
      statfsStream(e) {
        return o.statfsNode(e.node);
      },
      statfsNode(e) {
        var r = {
          bsize: 4096,
          frsize: 4096,
          blocks: 1e6,
          bfree: 5e5,
          bavail: 5e5,
          files: o.nextInode,
          ffree: o.nextInode - 1,
          fsid: 42,
          flags: 2,
          namelen: 255
        };
        return e.node_ops.statfs && Object.assign(r, e.node_ops.statfs(e.mount.opts.root)), r;
      },
      create(e, r = 438) {
        return r &= 4095, r |= 32768, o.mknod(e, r, 0);
      },
      mkdir(e, r = 511) {
        return r &= 1023, r |= 16384, o.mknod(e, r, 0);
      },
      mkdirTree(e, r) {
        var t = e.split("/"), n = "";
        for (var s of t) if (s) {
          (n || B.isAbs(e)) && (n += "/"), n += s;
          try {
            o.mkdir(n, r);
          } catch (a) {
            if (a.errno != 20) throw a;
          }
        }
      },
      mkdev(e, r, t) {
        return typeof t > "u" && (t = r, r = 438), r |= 8192, o.mknod(e, r, t);
      },
      symlink(e, r) {
        if (!ze.resolve(e)) throw new o.ErrnoError(44);
        var t = o.lookupPath(r, {
          parent: true
        }), n = t.node;
        if (!n) throw new o.ErrnoError(44);
        var s = B.basename(r), a = o.mayCreate(n, s);
        if (a) throw new o.ErrnoError(a);
        if (!n.node_ops.symlink) throw new o.ErrnoError(63);
        return n.node_ops.symlink(n, s, e);
      },
      rename(e, r) {
        var t = B.dirname(e), n = B.dirname(r), s = B.basename(e), a = B.basename(r), i, l, d;
        if (i = o.lookupPath(e, {
          parent: true
        }), l = i.node, i = o.lookupPath(r, {
          parent: true
        }), d = i.node, !l || !d) throw new o.ErrnoError(44);
        if (l.mount !== d.mount) throw new o.ErrnoError(75);
        var P = o.lookupNode(l, s), V = ze.relative(e, n);
        if (V.charAt(0) !== ".") throw new o.ErrnoError(28);
        if (V = ze.relative(r, t), V.charAt(0) !== ".") throw new o.ErrnoError(55);
        var K;
        try {
          K = o.lookupNode(d, a);
        } catch {
        }
        if (P !== K) {
          var g = o.isDir(P.mode), A = o.mayDelete(l, s, g);
          if (A) throw new o.ErrnoError(A);
          if (A = K ? o.mayDelete(d, a, g) : o.mayCreate(d, a), A) throw new o.ErrnoError(A);
          if (!l.node_ops.rename) throw new o.ErrnoError(63);
          if (o.isMountpoint(P) || K && o.isMountpoint(K)) throw new o.ErrnoError(10);
          if (d !== l && (A = o.nodePermissions(l, "w"), A)) throw new o.ErrnoError(A);
          o.hashRemoveNode(P);
          try {
            l.node_ops.rename(P, d, a), P.parent = d;
          } catch (te) {
            throw te;
          } finally {
            o.hashAddNode(P);
          }
        }
      },
      rmdir(e) {
        var r = o.lookupPath(e, {
          parent: true
        }), t = r.node, n = B.basename(e), s = o.lookupNode(t, n), a = o.mayDelete(t, n, true);
        if (a) throw new o.ErrnoError(a);
        if (!t.node_ops.rmdir) throw new o.ErrnoError(63);
        if (o.isMountpoint(s)) throw new o.ErrnoError(10);
        t.node_ops.rmdir(t, n), o.destroyNode(s);
      },
      readdir(e) {
        var r = o.lookupPath(e, {
          follow: true
        }), t = r.node, n = o.checkOpExists(t.node_ops.readdir, 54);
        return n(t);
      },
      unlink(e) {
        var r = o.lookupPath(e, {
          parent: true
        }), t = r.node;
        if (!t) throw new o.ErrnoError(44);
        var n = B.basename(e), s = o.lookupNode(t, n), a = o.mayDelete(t, n, false);
        if (a) throw new o.ErrnoError(a);
        if (!t.node_ops.unlink) throw new o.ErrnoError(63);
        if (o.isMountpoint(s)) throw new o.ErrnoError(10);
        t.node_ops.unlink(t, n), o.destroyNode(s);
      },
      readlink(e) {
        var r = o.lookupPath(e), t = r.node;
        if (!t) throw new o.ErrnoError(44);
        if (!t.node_ops.readlink) throw new o.ErrnoError(28);
        return t.node_ops.readlink(t);
      },
      stat(e, r) {
        var t = o.lookupPath(e, {
          follow: !r
        }), n = t.node, s = o.checkOpExists(n.node_ops.getattr, 63);
        return s(n);
      },
      fstat(e) {
        var r = o.getStreamChecked(e), t = r.node, n = r.stream_ops.getattr, s = n ? r : t;
        return n ?? (n = t.node_ops.getattr), o.checkOpExists(n, 63), n(s);
      },
      lstat(e) {
        return o.stat(e, true);
      },
      doChmod(e, r, t, n) {
        o.doSetAttr(e, r, {
          mode: t & 4095 | r.mode & -4096,
          ctime: Date.now(),
          dontFollow: n
        });
      },
      chmod(e, r, t) {
        var n;
        if (typeof e == "string") {
          var s = o.lookupPath(e, {
            follow: !t
          });
          n = s.node;
        } else n = e;
        o.doChmod(null, n, r, t);
      },
      lchmod(e, r) {
        o.chmod(e, r, true);
      },
      fchmod(e, r) {
        var t = o.getStreamChecked(e);
        o.doChmod(t, t.node, r, false);
      },
      doChown(e, r, t) {
        o.doSetAttr(e, r, {
          timestamp: Date.now(),
          dontFollow: t
        });
      },
      chown(e, r, t, n) {
        var s;
        if (typeof e == "string") {
          var a = o.lookupPath(e, {
            follow: !n
          });
          s = a.node;
        } else s = e;
        o.doChown(null, s, n);
      },
      lchown(e, r, t) {
        o.chown(e, r, t, true);
      },
      fchown(e, r, t) {
        var n = o.getStreamChecked(e);
        o.doChown(n, n.node, false);
      },
      doTruncate(e, r, t) {
        if (o.isDir(r.mode)) throw new o.ErrnoError(31);
        if (!o.isFile(r.mode)) throw new o.ErrnoError(28);
        var n = o.nodePermissions(r, "w");
        if (n) throw new o.ErrnoError(n);
        o.doSetAttr(e, r, {
          size: t,
          timestamp: Date.now()
        });
      },
      truncate(e, r) {
        if (r < 0) throw new o.ErrnoError(28);
        var t;
        if (typeof e == "string") {
          var n = o.lookupPath(e, {
            follow: true
          });
          t = n.node;
        } else t = e;
        o.doTruncate(null, t, r);
      },
      ftruncate(e, r) {
        var t = o.getStreamChecked(e);
        if (r < 0 || !(t.flags & 2097155)) throw new o.ErrnoError(28);
        o.doTruncate(t, t.node, r);
      },
      utime(e, r, t) {
        var n = o.lookupPath(e, {
          follow: true
        }), s = n.node, a = o.checkOpExists(s.node_ops.setattr, 63);
        a(s, {
          atime: r,
          mtime: t
        });
      },
      open(e, r, t = 438) {
        if (e === "") throw new o.ErrnoError(44);
        r = typeof r == "string" ? pr(r) : r, r & 64 ? t = t & 4095 | 32768 : t = 0;
        var n, s;
        if (typeof e == "object") n = e;
        else {
          s = e.endsWith("/");
          var a = o.lookupPath(e, {
            follow: !(r & 131072),
            noent_okay: true
          });
          n = a.node, e = a.path;
        }
        var i = false;
        if (r & 64) if (n) {
          if (r & 128) throw new o.ErrnoError(20);
        } else {
          if (s) throw new o.ErrnoError(31);
          n = o.mknod(e, t | 511, 0), i = true;
        }
        if (!n) throw new o.ErrnoError(44);
        if (o.isChrdev(n.mode) && (r &= -513), r & 65536 && !o.isDir(n.mode)) throw new o.ErrnoError(54);
        if (!i) {
          var l = o.mayOpen(n, r);
          if (l) throw new o.ErrnoError(l);
        }
        r & 512 && !i && o.truncate(n, 0), r &= -131713;
        var d = o.createStream({
          node: n,
          path: o.getPath(n),
          flags: r,
          seekable: true,
          position: 0,
          stream_ops: n.stream_ops,
          ungotten: [],
          error: false
        });
        return d.stream_ops.open && d.stream_ops.open(d), i && o.chmod(n, t & 511), c.logReadFiles && !(r & 1) && (e in o.readFiles || (o.readFiles[e] = 1)), d;
      },
      close(e) {
        if (o.isClosed(e)) throw new o.ErrnoError(8);
        e.getdents && (e.getdents = null);
        try {
          e.stream_ops.close && e.stream_ops.close(e);
        } catch (r) {
          throw r;
        } finally {
          o.closeStream(e.fd);
        }
        e.fd = null;
      },
      isClosed(e) {
        return e.fd === null;
      },
      llseek(e, r, t) {
        if (o.isClosed(e)) throw new o.ErrnoError(8);
        if (!e.seekable || !e.stream_ops.llseek) throw new o.ErrnoError(70);
        if (t != 0 && t != 1 && t != 2) throw new o.ErrnoError(28);
        return e.position = e.stream_ops.llseek(e, r, t), e.ungotten = [], e.position;
      },
      read(e, r, t, n, s) {
        if (n < 0 || s < 0) throw new o.ErrnoError(28);
        if (o.isClosed(e)) throw new o.ErrnoError(8);
        if ((e.flags & 2097155) === 1) throw new o.ErrnoError(8);
        if (o.isDir(e.node.mode)) throw new o.ErrnoError(31);
        if (!e.stream_ops.read) throw new o.ErrnoError(28);
        var a = typeof s < "u";
        if (!a) s = e.position;
        else if (!e.seekable) throw new o.ErrnoError(70);
        var i = e.stream_ops.read(e, r, t, n, s);
        return a || (e.position += i), i;
      },
      write(e, r, t, n, s, a) {
        if (n < 0 || s < 0) throw new o.ErrnoError(28);
        if (o.isClosed(e)) throw new o.ErrnoError(8);
        if (!(e.flags & 2097155)) throw new o.ErrnoError(8);
        if (o.isDir(e.node.mode)) throw new o.ErrnoError(31);
        if (!e.stream_ops.write) throw new o.ErrnoError(28);
        e.seekable && e.flags & 1024 && o.llseek(e, 0, 2);
        var i = typeof s < "u";
        if (!i) s = e.position;
        else if (!e.seekable) throw new o.ErrnoError(70);
        var l = e.stream_ops.write(e, r, t, n, s, a);
        return i || (e.position += l), l;
      },
      mmap(e, r, t, n, s) {
        if (n & 2 && !(s & 2) && (e.flags & 2097155) !== 2) throw new o.ErrnoError(2);
        if ((e.flags & 2097155) === 1) throw new o.ErrnoError(2);
        if (!e.stream_ops.mmap) throw new o.ErrnoError(43);
        if (!r) throw new o.ErrnoError(28);
        return e.stream_ops.mmap(e, r, t, n, s);
      },
      msync(e, r, t, n, s) {
        return e.stream_ops.msync ? e.stream_ops.msync(e, r, t, n, s) : 0;
      },
      ioctl(e, r, t) {
        if (!e.stream_ops.ioctl) throw new o.ErrnoError(59);
        return e.stream_ops.ioctl(e, r, t);
      },
      readFile(e, r = {}) {
        r.flags = r.flags || 0, r.encoding = r.encoding || "binary", r.encoding !== "utf8" && r.encoding !== "binary" && Y(`Invalid encoding type "${r.encoding}"`);
        var t = o.open(e, r.flags), n = o.stat(e), s = n.size, a = new Uint8Array(s);
        return o.read(t, a, 0, s, 0), r.encoding === "utf8" && (a = T(a)), o.close(t), a;
      },
      writeFile(e, r, t = {}) {
        t.flags = t.flags || 577;
        var n = o.open(e, t.flags, t.mode);
        typeof r == "string" && (r = new Uint8Array(qe(r))), ArrayBuffer.isView(r) ? o.write(n, r, 0, r.byteLength, void 0, t.canOwn) : Y("Unsupported data type"), o.close(n);
      },
      cwd: () => o.currentPath,
      chdir(e) {
        var r = o.lookupPath(e, {
          follow: true
        });
        if (r.node === null) throw new o.ErrnoError(44);
        if (!o.isDir(r.node.mode)) throw new o.ErrnoError(54);
        var t = o.nodePermissions(r.node, "x");
        if (t) throw new o.ErrnoError(t);
        o.currentPath = r.path;
      },
      createDefaultDirectories() {
        o.mkdir("/tmp"), o.mkdir("/home"), o.mkdir("/home/web_user");
      },
      createDefaultDevices() {
        o.mkdir("/dev"), o.registerDevice(o.makedev(1, 3), {
          read: () => 0,
          write: (n, s, a, i, l) => i,
          llseek: () => 0
        }), o.mkdev("/dev/null", o.makedev(1, 3)), Se.register(o.makedev(5, 0), Se.default_tty_ops), Se.register(o.makedev(6, 0), Se.default_tty1_ops), o.mkdev("/dev/tty", o.makedev(5, 0)), o.mkdev("/dev/tty1", o.makedev(6, 0));
        var e = new Uint8Array(1024), r = 0, t = () => (r === 0 && (Ie(e), r = e.byteLength), e[--r]);
        o.createDevice("/dev", "random", t), o.createDevice("/dev", "urandom", t), o.mkdir("/dev/shm"), o.mkdir("/dev/shm/tmp");
      },
      createSpecialDirectories() {
        o.mkdir("/proc");
        var e = o.mkdir("/proc/self");
        o.mkdir("/proc/self/fd"), o.mount({
          mount() {
            var r = o.createNode(e, "fd", 16895, 73);
            return r.stream_ops = {
              llseek: E.stream_ops.llseek
            }, r.node_ops = {
              lookup(t, n) {
                var s = +n, a = o.getStreamChecked(s), i = {
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
                return Array.from(o.streams.entries()).filter(([t, n]) => n).map(([t, n]) => t.toString());
              }
            }, r;
          }
        }, {}, "/proc/self/fd");
      },
      createStandardStreams(e, r, t) {
        e ? o.createDevice("/dev", "stdin", e) : o.symlink("/dev/tty", "/dev/stdin"), r ? o.createDevice("/dev", "stdout", null, r) : o.symlink("/dev/tty", "/dev/stdout"), t ? o.createDevice("/dev", "stderr", null, t) : o.symlink("/dev/tty1", "/dev/stderr"), o.open("/dev/stdin", 0), o.open("/dev/stdout", 1), o.open("/dev/stderr", 1);
      },
      staticInit() {
        o.nameTable = new Array(4096), o.mount(E, {}, "/"), o.createDefaultDirectories(), o.createDefaultDevices(), o.createSpecialDirectories(), o.filesystems = {
          MEMFS: E
        };
      },
      init(e, r, t) {
        o.initialized = true, e ?? (e = c.stdin), r ?? (r = c.stdout), t ?? (t = c.stderr), o.createStandardStreams(e, r, t);
      },
      quit() {
        o.initialized = false;
        for (var e of o.streams) e && o.close(e);
      },
      findObject(e, r) {
        var t = o.analyzePath(e, r);
        return t.exists ? t.object : null;
      },
      analyzePath(e, r) {
        try {
          var t = o.lookupPath(e, {
            follow: !r
          });
          e = t.path;
        } catch {
        }
        var n = {
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
          var t = o.lookupPath(e, {
            parent: true
          });
          n.parentExists = true, n.parentPath = t.path, n.parentObject = t.node, n.name = B.basename(e), t = o.lookupPath(e, {
            follow: !r
          }), n.exists = true, n.path = t.path, n.object = t.node, n.name = t.node.name, n.isRoot = t.path === "/";
        } catch (s) {
          n.error = s.errno;
        }
        return n;
      },
      createPath(e, r, t, n) {
        e = typeof e == "string" ? e : o.getPath(e);
        for (var s = r.split("/").reverse(); s.length; ) {
          var a = s.pop();
          if (a) {
            var i = B.join2(e, a);
            try {
              o.mkdir(i);
            } catch (l) {
              if (l.errno != 20) throw l;
            }
            e = i;
          }
        }
        return i;
      },
      createFile(e, r, t, n, s) {
        var a = B.join2(typeof e == "string" ? e : o.getPath(e), r), i = Xe(n, s);
        return o.create(a, i);
      },
      createDataFile(e, r, t, n, s, a) {
        var i = r;
        e && (e = typeof e == "string" ? e : o.getPath(e), i = r ? B.join2(e, r) : e);
        var l = Xe(n, s), d = o.create(i, l);
        if (t) {
          if (typeof t == "string") {
            for (var P = new Array(t.length), V = 0, K = t.length; V < K; ++V) P[V] = t.charCodeAt(V);
            t = P;
          }
          o.chmod(d, l | 146);
          var g = o.open(d, 577);
          o.write(g, t, 0, t.length, 0, a), o.close(g), o.chmod(d, l);
        }
      },
      createDevice(e, r, t, n) {
        var _a2;
        var s = B.join2(typeof e == "string" ? e : o.getPath(e), r), a = Xe(!!t, !!n);
        (_a2 = o.createDevice).major ?? (_a2.major = 64);
        var i = o.makedev(o.createDevice.major++, 0);
        return o.registerDevice(i, {
          open(l) {
            l.seekable = false;
          },
          close(l) {
            var _a3;
            ((_a3 = n == null ? void 0 : n.buffer) == null ? void 0 : _a3.length) && n(10);
          },
          read(l, d, P, V, K) {
            for (var g = 0, A = 0; A < V; A++) {
              var te;
              try {
                te = t();
              } catch {
                throw new o.ErrnoError(29);
              }
              if (te === void 0 && g === 0) throw new o.ErrnoError(6);
              if (te == null) break;
              g++, d[P + A] = te;
            }
            return g && (l.node.atime = Date.now()), g;
          },
          write(l, d, P, V, K) {
            for (var g = 0; g < V; g++) try {
              n(d[P + g]);
            } catch {
              throw new o.ErrnoError(29);
            }
            return V && (l.node.mtime = l.node.ctime = Date.now()), g;
          }
        }), o.mkdev(s, a, i);
      },
      forceLoadFile(e) {
        if (e.isDevice || e.isFolder || e.link || e.contents) return true;
        if (globalThis.XMLHttpRequest) Y("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        else try {
          e.contents = L(e.url);
        } catch {
          throw new o.ErrnoError(29);
        }
      },
      createLazyFile(e, r, t, n, s) {
        class a {
          constructor() {
            __publicField(this, "lengthKnown", false);
            __publicField(this, "chunks", []);
          }
          get(g) {
            if (!(g > this.length - 1 || g < 0)) {
              var A = g % this.chunkSize, te = g / this.chunkSize | 0;
              return this.getter(te)[A];
            }
          }
          setDataGetter(g) {
            this.getter = g;
          }
          cacheLength() {
            var g = new XMLHttpRequest();
            g.open("HEAD", t, false), g.send(null), g.status >= 200 && g.status < 300 || g.status === 304 || Y("Couldn't load " + t + ". Status: " + g.status);
            var A = Number(g.getResponseHeader("Content-length")), te, we = (te = g.getResponseHeader("Accept-Ranges")) && te === "bytes", Ee = (te = g.getResponseHeader("Content-Encoding")) && te === "gzip", ge = 1024 * 1024;
            we || (ge = A);
            var ke = (be, Ue) => {
              be > Ue && Y("invalid range (" + be + ", " + Ue + ") or no bytes requested!"), Ue > A - 1 && Y("only " + A + " bytes available! programmer error!");
              var ue = new XMLHttpRequest();
              return ue.open("GET", t, false), A !== ge && ue.setRequestHeader("Range", "bytes=" + be + "-" + Ue), ue.responseType = "arraybuffer", ue.overrideMimeType && ue.overrideMimeType("text/plain; charset=x-user-defined"), ue.send(null), ue.status >= 200 && ue.status < 300 || ue.status === 304 || Y("Couldn't load " + t + ". Status: " + ue.status), ue.response !== void 0 ? new Uint8Array(ue.response || []) : qe(ue.responseText || "");
            }, Le = this;
            Le.setDataGetter((be) => {
              var Ue = be * ge, ue = (be + 1) * ge - 1;
              return ue = Math.min(ue, A - 1), typeof Le.chunks[be] > "u" && (Le.chunks[be] = ke(Ue, ue)), typeof Le.chunks[be] > "u" && Y("doXHR failed!"), Le.chunks[be];
            }), (Ee || !A) && (ge = A = 1, A = this.getter(0).length, ge = A, p("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = A, this._chunkSize = ge, this.lengthKnown = true;
          }
          get length() {
            return this.lengthKnown || this.cacheLength(), this._length;
          }
          get chunkSize() {
            return this.lengthKnown || this.cacheLength(), this._chunkSize;
          }
        }
        if (globalThis.XMLHttpRequest) {
          h || Y("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");
          var i = new a(), l = {
            isDevice: false,
            contents: i
          };
        } else var l = {
          isDevice: false,
          url: t
        };
        var d = o.createFile(e, r, l, n, s);
        l.contents ? d.contents = l.contents : l.url && (d.contents = null, d.url = l.url), Object.defineProperties(d, {
          usedBytes: {
            get: function() {
              return this.contents.length;
            }
          }
        });
        var P = {};
        for (const [K, g] of Object.entries(d.stream_ops)) P[K] = (...A) => (o.forceLoadFile(d), g(...A));
        function V(K, g, A, te, we) {
          var Ee = K.node.contents;
          if (we >= Ee.length) return 0;
          var ge = Math.min(Ee.length - we, te);
          if (Ee.slice) for (var ke = 0; ke < ge; ke++) g[A + ke] = Ee[we + ke];
          else for (var ke = 0; ke < ge; ke++) g[A + ke] = Ee.get(we + ke);
          return ge;
        }
        return P.read = (K, g, A, te, we) => (o.forceLoadFile(d), V(K, g, A, te, we)), P.mmap = (K, g, A, te, we) => {
          o.forceLoadFile(d);
          var Ee = Je();
          if (!Ee) throw new o.ErrnoError(48);
          return V(K, k, Ee, g, A), {
            ptr: Ee,
            allocated: true
          };
        }, d.stream_ops = P, d;
      }
    }, Ce = {
      calculateAt(e, r, t) {
        if (B.isAbs(r)) return r;
        var n;
        if (e === -100) n = o.cwd();
        else {
          var s = Ce.getStreamFromFD(e);
          n = s.path;
        }
        if (r.length == 0) {
          if (!t) throw new o.ErrnoError(44);
          return n;
        }
        return n + "/" + r;
      },
      writeStat(e, r) {
        v[e >> 2] = r.dev, v[e + 4 >> 2] = r.mode, v[e + 8 >> 2] = r.nlink, v[e + 12 >> 2] = r.uid, v[e + 16 >> 2] = r.gid, v[e + 20 >> 2] = r.rdev, M[e + 24 >> 3] = BigInt(r.size), I[e + 32 >> 2] = 4096, I[e + 36 >> 2] = r.blocks;
        var t = r.atime.getTime(), n = r.mtime.getTime(), s = r.ctime.getTime();
        return M[e + 40 >> 3] = BigInt(Math.floor(t / 1e3)), v[e + 48 >> 2] = t % 1e3 * 1e3 * 1e3, M[e + 56 >> 3] = BigInt(Math.floor(n / 1e3)), v[e + 64 >> 2] = n % 1e3 * 1e3 * 1e3, M[e + 72 >> 3] = BigInt(Math.floor(s / 1e3)), v[e + 80 >> 2] = s % 1e3 * 1e3 * 1e3, M[e + 88 >> 3] = BigInt(r.ino), 0;
      },
      writeStatFs(e, r) {
        v[e + 4 >> 2] = r.bsize, v[e + 60 >> 2] = r.bsize, M[e + 8 >> 3] = BigInt(r.blocks), M[e + 16 >> 3] = BigInt(r.bfree), M[e + 24 >> 3] = BigInt(r.bavail), M[e + 32 >> 3] = BigInt(r.files), M[e + 40 >> 3] = BigInt(r.ffree), v[e + 48 >> 2] = r.fsid, v[e + 64 >> 2] = r.flags, v[e + 56 >> 2] = r.namelen;
      },
      doMsync(e, r, t, n, s) {
        if (!o.isFile(r.node.mode)) throw new o.ErrnoError(43);
        if (n & 2) return 0;
        var a = j.slice(e, e + t);
        o.msync(r, a, s, t, n);
      },
      getStreamFromFD(e) {
        var r = o.getStreamChecked(e);
        return r;
      },
      varargs: void 0,
      getStr(e) {
        var r = F(e);
        return r;
      }
    };
    function kr(e) {
      try {
        var r = Ce.getStreamFromFD(e);
        return o.close(r), 0;
      } catch (t) {
        if (typeof o > "u" || t.name !== "ErrnoError") throw t;
        return t.errno;
      }
    }
    var Ar = (e, r, t, n) => {
      for (var s = 0, a = 0; a < t; a++) {
        var i = v[r >> 2], l = v[r + 4 >> 2];
        r += 8;
        var d = o.read(e, k, i, l, n);
        if (d < 0) return -1;
        if (s += d, d < l) break;
      }
      return s;
    };
    function br(e, r, t, n) {
      try {
        var s = Ce.getStreamFromFD(e), a = Ar(s, r, t);
        return v[n >> 2] = a, 0;
      } catch (i) {
        if (typeof o > "u" || i.name !== "ErrnoError") throw i;
        return i.errno;
      }
    }
    var Fr = 9007199254740992, Sr = -9007199254740992, Rr = (e) => e < Sr || e > Fr ? NaN : Number(e);
    function Mr(e, r, t, n) {
      r = Rr(r);
      try {
        if (isNaN(r)) return 61;
        var s = Ce.getStreamFromFD(e);
        return o.llseek(s, r, t), M[n >> 3] = BigInt(s.position), s.getdents && r === 0 && t === 0 && (s.getdents = null), 0;
      } catch (a) {
        if (typeof o > "u" || a.name !== "ErrnoError") throw a;
        return a.errno;
      }
    }
    var zr = (e, r, t, n) => {
      for (var s = 0, a = 0; a < t; a++) {
        var i = v[r >> 2], l = v[r + 4 >> 2];
        r += 8;
        var d = o.write(e, k, i, l, n);
        if (d < 0) return -1;
        if (s += d, d < l) break;
      }
      return s;
    };
    function Ur(e, r, t, n) {
      try {
        var s = Ce.getStreamFromFD(e), a = zr(s, r, t);
        return v[n >> 2] = a, 0;
      } catch (i) {
        if (typeof o > "u" || i.name !== "ErrnoError") throw i;
        return i.errno;
      }
    }
    if (o.createPreloadedFile = Pr, o.preloadFile = rr, o.staticInit(), c.noExitRuntime && c.noExitRuntime, c.preloadPlugins && (er = c.preloadPlugins), c.print && (p = c.print), c.printErr && (w = c.printErr), c.wasmBinary && (U = c.wasmBinary), c.arguments && c.arguments, c.thisProgram && (D = c.thisProgram), c.preInit) for (typeof c.preInit == "function" && (c.preInit = [
      c.preInit
    ]); c.preInit.length > 0; ) c.preInit.shift()();
    var Ye;
    function Tr(e) {
      c._deform = e.deform, c._malloc = e.malloc, c._free = e.free, c._didactic_solve = e.didactic_solve, c._modal = e.modal, c._modal_paz = e.modal_paz, e._emscripten_stack_restore, e._emscripten_stack_alloc, e.emscripten_stack_get_current, Ye = e.memory, e.__indirect_function_table;
    }
    var tr = {
      __assert_fail: Pe,
      __cxa_throw: je,
      _abort_js: sr,
      _tzset_js: ar,
      emscripten_resize_heap: fr,
      environ_get: dr,
      environ_sizes_get: hr,
      fd_close: kr,
      fd_read: br,
      fd_seek: Mr,
      fd_write: Ur
    };
    function Qe() {
      if (Re > 0) {
        Oe = Qe;
        return;
      }
      if (le(), Re > 0) {
        Oe = Qe;
        return;
      }
      function e() {
        var _a2;
        c.calledRun = true, !y && (me(), ee == null ? void 0 : ee(c), (_a2 = c.onRuntimeInitialized) == null ? void 0 : _a2.call(c), ce());
      }
      c.setStatus ? (c.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => c.setStatus(""), 1), e();
      }, 1)) : e();
    }
    var Be;
    return Be = await fe(), Qe(), S ? m = c : m = new Promise((e, r) => {
      ee = e, x = r;
    }), m;
  };
  const q = await Te();
  Br = function(f, m, c, u) {
    if (f.length === 0) return;
    const h = [], _ = _e(f.flat(), Float64Array, q.HEAPF64);
    h.push(_);
    const H = m.flat(), D = _e(H, Uint32Array, q.HEAPU32);
    h.push(D);
    const G = m.map((F) => F.length), z = _e(G, Uint32Array, q.HEAPU32);
    h.push(z);
    const X = c.supports ? Array.from(c.supports.keys()) : [], J = c.supports ? Array.from(c.supports.values()).flat().map((F) => F ? 1 : 0) : [], L = _e(X, Uint32Array, q.HEAPU32);
    h.push(L);
    const N = _e(J, Uint8Array, q.HEAPU8);
    h.push(N);
    const p = c.loads ? Array.from(c.loads.keys()) : [], w = c.loads ? Array.from(c.loads.values()).flat() : [], U = _e(p, Uint32Array, q.HEAPU32);
    h.push(U);
    const y = _e(w, Float64Array, q.HEAPF64);
    h.push(y);
    const b = (F) => {
      const Pe = F ? Array.from(F.keys()) : [], Ke = F ? Array.from(F.values()) : [], De = _e(Pe, Uint32Array, q.HEAPU32);
      h.push(De);
      const je = _e(Ke, Float64Array, q.HEAPF64);
      return h.push(je), {
        keysPtr: De,
        valuesPtr: je,
        size: Pe.length
      };
    }, ee = b(u.elasticities), x = b(u.elasticitiesOrthogonal), k = b(u.areas), j = b(u.momentsOfInertiaZ), I = b(u.momentsOfInertiaY), v = b(u.shearModuli), M = b(u.torsionalConstants), S = b(u.thicknesses), oe = b(u.poissonsRatios);
    b(u.shearAreasY), b(u.shearAreasZ);
    const le = u.rigidOffsets ? Array.from(u.rigidOffsets.keys()) : [], me = u.rigidOffsets ? Array.from(u.rigidOffsets.values()).flat() : [], ce = _e(le, Uint32Array, q.HEAPU32);
    h.push(ce);
    const Y = _e(me, Float64Array, q.HEAPF64);
    h.push(Y);
    const re = u.momentReleases ? Array.from(u.momentReleases.keys()) : [], ve = u.momentReleases ? Array.from(u.momentReleases.values()).flat().map((F) => F ? 1 : 0) : [], pe = _e(re, Uint32Array, q.HEAPU32);
    h.push(pe);
    const se = _e(ve, Uint8Array, q.HEAPU8);
    h.push(se);
    const ae = q._malloc(4);
    h.push(ae);
    const Q = q._malloc(4);
    h.push(Q);
    const de = q._malloc(4);
    h.push(de);
    const fe = q._malloc(4);
    h.push(fe), q._deform(_, f.length, D, H.length, z, m.length, L, N, X.length, U, y, p.length, ee.keysPtr, ee.valuesPtr, ee.size, k.keysPtr, k.valuesPtr, k.size, j.keysPtr, j.valuesPtr, j.size, I.keysPtr, I.valuesPtr, I.size, v.keysPtr, v.valuesPtr, v.size, M.keysPtr, M.valuesPtr, M.size, S.keysPtr, S.valuesPtr, S.size, oe.keysPtr, oe.valuesPtr, oe.size, x.keysPtr, x.valuesPtr, x.size, ae, Q, de, fe);
    const he = q.HEAPU32[ae / 4], ye = q.HEAPU32[Q / 4], C = q.HEAPU32[de / 4], Z = q.HEAPU32[fe / 4], ne = new Float64Array(q.HEAPF64.buffer, he, ye), R = new Float64Array(q.HEAPF64.buffer, C, Z), $ = /* @__PURE__ */ new Map();
    for (let F = 0; F < ye; F += 7) {
      const Pe = ne[F];
      $.set(Pe, Array.from(ne.slice(F + 1, F + 7)));
    }
    const T = /* @__PURE__ */ new Map();
    for (let F = 0; F < Z; F += 7) {
      const Pe = R[F];
      T.set(Pe, Array.from(R.slice(F + 1, F + 7)));
    }
    return he && h.push(he), C && h.push(C), h.forEach((F) => q._free(F)), {
      deformations: $,
      reactions: T
    };
  };
  function _e(f, m, c) {
    const u = new m(f), h = q._malloc(u.length * u.BYTES_PER_ELEMENT);
    return c.set(u, h / u.BYTES_PER_ELEMENT), h;
  }
  const O = await Te();
  Lr = function(f, m, c, u, h = 10) {
    if (f.length === 0) return {
      frequencies: [],
      modeShapes: [],
      massParticipation: []
    };
    const _ = [], H = Me(f.flat(), Float64Array, O.HEAPF64);
    _.push(H);
    const D = m.flat(), G = Me(D, Uint32Array, O.HEAPU32);
    _.push(G);
    const z = m.map((C) => C.length), X = Me(z, Uint32Array, O.HEAPU32);
    _.push(X);
    const J = c.supports ? Array.from(c.supports.keys()) : [], L = c.supports ? Array.from(c.supports.values()).flat().map((C) => C ? 1 : 0) : [], N = Me(J, Uint32Array, O.HEAPU32);
    _.push(N);
    const p = Me(L, Uint8Array, O.HEAPU8);
    _.push(p);
    const w = (C) => {
      const Z = C ? Array.from(C.keys()) : [], ne = C ? Array.from(C.values()) : [], R = Me(Z, Uint32Array, O.HEAPU32);
      _.push(R);
      const $ = Me(ne, Float64Array, O.HEAPF64);
      return _.push($), {
        keysPtr: R,
        valuesPtr: $,
        size: Z.length
      };
    }, U = w(u.elasticities), y = w(u.areas), b = w(u.momentsOfInertiaZ), ee = w(u.momentsOfInertiaY), x = w(u.shearModuli), k = w(u.torsionalConstants), j = w(u.densities), I = O._malloc(4);
    _.push(I);
    const v = O._malloc(4);
    _.push(v);
    const M = O._malloc(4);
    _.push(M);
    const S = O._malloc(4);
    _.push(S);
    const oe = O._malloc(4);
    _.push(oe);
    const le = O._malloc(4);
    _.push(le);
    const me = O._malloc(4);
    _.push(me);
    const ce = O._malloc(4);
    _.push(ce), O._modal(H, f.length, G, D.length, X, m.length, N, p, J.length, U.keysPtr, U.valuesPtr, U.size, y.keysPtr, y.valuesPtr, y.size, b.keysPtr, b.valuesPtr, b.size, ee.keysPtr, ee.valuesPtr, ee.size, x.keysPtr, x.valuesPtr, x.size, k.keysPtr, k.valuesPtr, k.size, j.keysPtr, j.valuesPtr, j.size, h, I, v, M, S, oe, le, me, ce);
    const Y = O.HEAPU32[I / 4], re = O.HEAPU32[v / 4], ve = O.HEAPU32[M / 4], pe = O.HEAPU32[S / 4], se = O.HEAPU32[oe / 4], ae = O.HEAPU32[le / 4], Q = O.HEAPU32[me / 4], de = O.HEAPU32[ce / 4];
    let fe = [], he = [], ye = [];
    if (re > 0 && Y) {
      const C = new Float64Array(O.HEAPF64.buffer, Y, re);
      fe = Array.from(C), _.push(Y);
    }
    if (pe > 0 && se > 0 && ve) {
      const C = new Float64Array(O.HEAPF64.buffer, ve, pe * se);
      for (let Z = 0; Z < pe; Z++) he.push(Array.from(C.slice(Z * se, (Z + 1) * se)));
      _.push(ve);
    }
    if (Q > 0 && de > 0 && ae) {
      const C = new Float64Array(O.HEAPF64.buffer, ae, Q * de);
      for (let Z = 0; Z < Q; Z++) ye.push(Array.from(C.slice(Z * de, (Z + 1) * de)));
      _.push(ae);
    }
    return _.forEach((C) => O._free(C)), {
      frequencies: fe,
      modeShapes: he,
      massParticipation: ye
    };
  };
  function Me(f, m, c) {
    const u = new m(f), h = O._malloc(u.length * u.BYTES_PER_ELEMENT);
    return c.set(u, h / u.BYTES_PER_ELEMENT), h;
  }
  await Te();
  const Ae = await Te();
  xr = function(f) {
    const { nodes: m, elements: c, E: u, nu: h, gamma: _, c: H, phi: D, thickness: G = 1, supports: z, surcharge: X = 0, surfaceYThreshold: J = -1e10 } = f, L = [], N = m.flat(), p = Or(N);
    L.push(p);
    const w = c.flat(), U = nr(w);
    L.push(U);
    const y = [];
    for (const S of z) y.push(S.node, S.fixX ? 1 : 0, S.fixY ? 1 : 0);
    const b = nr(y);
    L.push(b);
    const ee = c.length, x = m.length, k = Ae._slopeAllocDouble(ee);
    L.push(k);
    const j = Ae._slopeAllocDouble(x * 2);
    L.push(j);
    const I = Ae._slopeStabilitySolver(p, x, U, ee, u, h, _, H, D, G, b, z.length, X, J, k, j), v = [];
    for (let S = 0; S < ee; S++) v.push(Ae.HEAPF64[k / 8 + S]);
    const M = [];
    for (let S = 0; S < x; S++) M.push([
      Ae.HEAPF64[j / 8 + 2 * S],
      Ae.HEAPF64[j / 8 + 2 * S + 1]
    ]);
    return L.forEach((S) => Ae._free(S)), {
      fos: I,
      plasticStrain: v,
      displacements: M
    };
  };
  function Or(f) {
    const m = new Float64Array(f), c = Ae._malloc(m.length * m.BYTES_PER_ELEMENT);
    return Ae.HEAPF64.set(m, c / 8), c;
  }
  function nr(f) {
    const m = new Uint32Array(f), c = Ae._malloc(m.length * m.BYTES_PER_ELEMENT);
    return Ae.HEAPU32.set(m, c / 4), c;
  }
  const ie = await Te();
  function xe(f, m, c) {
    const u = new m(f), h = ie._malloc(u.length * u.BYTES_PER_ELEMENT);
    return c.set(u, h / u.BYTES_PER_ELEMENT), h;
  }
  jr = function(f) {
    const m = [];
    let c = [], u = 0;
    f.nodes && f.nodes.length > 0 && (u = f.nodes.length, c = f.nodes.flat());
    const h = xe(c.length > 0 ? c : [
      0
    ], Float64Array, ie.HEAPF64);
    m.push(h);
    let _ = [], H = 0;
    f.elements && f.elements.length > 0 && (H = f.elements.length, _ = f.elements.flat());
    const D = xe(_.length > 0 ? _ : [
      0
    ], Int32Array, ie.HEAPU32);
    m.push(D);
    let G = [], z = 0;
    f.bcs && f.bcs.length > 0 && (z = f.bcs.length, G = f.bcs.flatMap((R) => [
      R.node,
      R.dof,
      R.value
    ]));
    const X = xe(G.length > 0 ? G : [
      0
    ], Float64Array, ie.HEAPF64);
    m.push(X);
    let J = [], L = 0;
    f.pointLoads && f.pointLoads.length > 0 && (L = f.pointLoads.length, J = f.pointLoads.flatMap((R) => [
      R.node,
      R.dof,
      R.value
    ]));
    const N = xe(J.length > 0 ? J : [
      0
    ], Float64Array, ie.HEAPF64);
    m.push(N);
    const p = f.meshLx ?? 0, w = f.meshLy ?? 0, U = f.meshNx ?? 0, y = f.meshNy ?? 0, ee = {
      none: 0,
      "simply-supported": 1,
      clamped: 2
    }[f.bcType ?? "none"] ?? 0, x = f.theoryType ?? 0;
    let k = [], j = 0;
    f.springs && f.springs.length > 0 && (j = f.springs.length, k = f.springs.flatMap((R) => [
      R.node,
      R.dof,
      R.k
    ]));
    const I = xe(k.length > 0 ? k : [
      0
    ], Float64Array, ie.HEAPF64);
    m.push(I);
    const v = ie._malloc(4);
    m.push(v);
    const M = ie._malloc(4);
    m.push(M);
    const S = ie._malloc(4);
    m.push(S);
    const oe = ie._malloc(4);
    m.push(oe), ie._plate_q4_solve(h, u, D, H, f.E, f.nu, f.thickness, X, z, f.pressure ?? 0, N, L, p, w, U, y, ee, x, I, j, v, M, S, oe);
    const le = ie.HEAPU32[v / 4], me = ie.HEAPU32[M / 4], ce = ie.HEAPU32[S / 4], Y = ie.HEAPU32[oe / 4], re = new Float64Array(ie.HEAPF64.buffer, le, me), ve = re[0], pe = re[1], se = [];
    let ae = 0;
    for (let R = 0; R < ve; R++) {
      const $ = 2 + R * 5, T = {
        x: re[$],
        y: re[$ + 1],
        w: re[$ + 2],
        bx: re[$ + 3],
        by: re[$ + 4]
      };
      se.push(T), Math.abs(T.w) > Math.abs(ae) && (ae = T.w);
    }
    const Q = new Float64Array(ie.HEAPF64.buffer, ce, Y), de = [];
    let fe = 0, he = 0, ye = 0, C = 0, Z = 0;
    for (let R = 0; R < pe; R++) {
      const $ = R * 9, T = {
        nodes: [
          Q[$],
          Q[$ + 1],
          Q[$ + 2],
          Q[$ + 3]
        ],
        Mxx: Q[$ + 4],
        Myy: Q[$ + 5],
        Mxy: Q[$ + 6],
        Qx: Q[$ + 7],
        Qy: Q[$ + 8]
      };
      de.push(T), Math.abs(T.Mxx) > Math.abs(fe) && (fe = T.Mxx), Math.abs(T.Myy) > Math.abs(he) && (he = T.Myy), Math.abs(T.Mxy) > Math.abs(ye) && (ye = T.Mxy), Math.abs(T.Qx) > Math.abs(C) && (C = T.Qx), Math.abs(T.Qy) > Math.abs(Z) && (Z = T.Qy);
    }
    let ne;
    if (p > 0 && w > 0) {
      const R = p / 2, $ = w / 2;
      let T = 1 / 0;
      for (const F of se) {
        const Pe = Math.hypot(F.x - R, F.y - $);
        Pe < T && (T = Pe, ne = F.w);
      }
    }
    return le && m.push(le), ce && m.push(ce), m.forEach((R) => ie._free(R)), {
      nodeResults: se,
      elementResults: de,
      maxW: ae,
      maxMxx: fe,
      maxMyy: he,
      maxMxy: ye,
      maxQx: C,
      maxQy: Z,
      centerW: ne
    };
  };
  const W = await Te();
  Yr = function(f, m, c, u) {
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
    const h = [], _ = Fe(f.flat(), Float64Array, W.HEAPF64);
    h.push(_);
    const H = m.flat(), D = Fe(H, Uint32Array, W.HEAPU32);
    h.push(D);
    const G = m.map((ne) => ne.length), z = Fe(G, Uint32Array, W.HEAPU32);
    h.push(z);
    const X = c.supports ? Array.from(c.supports.keys()) : [], J = c.supports ? Array.from(c.supports.values()).flat().map((ne) => ne ? 1 : 0) : [], L = Fe(X, Uint32Array, W.HEAPU32);
    h.push(L);
    const N = Fe(J, Uint8Array, W.HEAPU8);
    h.push(N);
    const p = c.loads ? Array.from(c.loads.keys()) : [], w = c.loads ? Array.from(c.loads.values()).flat() : [], U = Fe(p, Uint32Array, W.HEAPU32);
    h.push(U);
    const y = Fe(w, Float64Array, W.HEAPF64);
    h.push(y);
    const b = (ne) => {
      const R = ne ? Array.from(ne.keys()) : [], $ = ne ? Array.from(ne.values()) : [], T = Fe(R, Uint32Array, W.HEAPU32);
      h.push(T);
      const F = Fe($, Float64Array, W.HEAPF64);
      return h.push(F), {
        keysPtr: T,
        valuesPtr: F,
        size: R.length
      };
    }, ee = b(u.elasticities), x = b(u.areas), k = b(u.momentsOfInertiaZ), j = b(u.momentsOfInertiaY), I = b(u.shearModuli), v = b(u.torsionalConstants), M = b(u.thicknesses), S = b(u.poissonsRatios), oe = b(u.shearAreasY), le = b(u.shearAreasZ), me = W._malloc(4);
    h.push(me);
    const ce = W._malloc(4);
    h.push(ce);
    const Y = W._malloc(4);
    h.push(Y);
    const re = W._malloc(4);
    h.push(re);
    const ve = W._malloc(4);
    h.push(ve);
    const pe = W._malloc(4);
    h.push(pe), W._didactic_solve(_, f.length, D, H.length, z, m.length, L, N, X.length, U, y, p.length, ee.keysPtr, ee.valuesPtr, ee.size, x.keysPtr, x.valuesPtr, x.size, k.keysPtr, k.valuesPtr, k.size, j.keysPtr, j.valuesPtr, j.size, I.keysPtr, I.valuesPtr, I.size, v.keysPtr, v.valuesPtr, v.size, M.keysPtr, M.valuesPtr, M.size, S.keysPtr, S.valuesPtr, S.size, oe.keysPtr, oe.valuesPtr, oe.size, le.keysPtr, le.valuesPtr, le.size, me, ce, Y, re, ve, pe);
    const se = W.HEAPU32[me / 4], ae = W.HEAPU32[ce / 4], Q = W.HEAPU32[Y / 4], de = W.HEAPU32[re / 4], fe = W.HEAPU32[ve / 4], he = W.HEAPU32[pe / 4], ye = se && ae > 0 ? Array.from(new Float64Array(W.HEAPF64.buffer, se, ae)) : [], C = Q && de > 0 ? Array.from(new Float64Array(W.HEAPF64.buffer, Q, de)) : [], Z = fe && he > 0 ? Array.from(new Float64Array(W.HEAPF64.buffer, fe, he)) : [];
    return se && h.push(se), Q && h.push(Q), fe && h.push(fe), h.forEach((ne) => W._free(ne)), Cr(ye, C, Z, f.length, m.length);
  };
  function Cr(f, m, c, u, h) {
    const _ = u * 6, H = [];
    if (f.length > 0) {
      const p = f[0], w = [];
      for (let U = 0; U < p; U++) w.push(f[1 + U]);
      for (let U = 0; U < p; U++) {
        let y = w[U];
        const b = f[y++], ee = f[y++], x = f[y++], k = x * x, j = $e(f.slice(y, y + k), x);
        y += k;
        const I = $e(f.slice(y, y + k), x);
        y += k;
        const v = $e(f.slice(y, y + k), x);
        y += k;
        const M = $e(f.slice(y, y + 9), 3);
        y += 9;
        const S = f[y++], oe = f[y++], le = f[y++], me = f[y++], ce = f[y++], Y = f[y++], re = f[y++], ve = f[y++], pe = f[y++], se = f[y++], ae = f[y++];
        H.push({
          index: b,
          type: ee === 0 ? "frame" : "shell-Q4",
          nDOF: x,
          K_local: j,
          T: I,
          K_global: v,
          lambda: M,
          L: S,
          E: oe,
          A: le,
          Iz: me,
          Iy: ce,
          G: Y,
          J: re,
          t: ve,
          nu: pe,
          phiZ: se,
          phiY: ae
        });
      }
    }
    const D = [];
    let G = 0;
    if (m.length > 0) {
      G = m[0];
      for (let p = 0; p < G; p++) {
        const w = 1 + p * 3;
        D.push({
          row: m[w],
          col: m[w + 1],
          value: m[w + 2]
        });
      }
    }
    let z = [], X = [], J = [], L = [], N = [];
    if (c.length > 0) {
      let p = 0;
      const w = c[p++];
      z = c.slice(p, p + w), p += w, X = c.slice(p, p + w), p += w, J = c.slice(p, p + w), p += w;
      const U = c[p++];
      L = c.slice(p, p + U).map(Math.round), p += U;
      const y = c[p++];
      N = c.slice(p, p + y).map(Math.round);
    }
    return {
      nNodes: u,
      nElements: h,
      nDOF: _,
      elements: H,
      K_assembled_sparse: D,
      K_assembled_nnz: G,
      F_applied: z,
      U_full: X,
      R_full: J,
      freeDOFs: L,
      fixedDOFs: N
    };
  }
  function $e(f, m) {
    const c = [];
    for (let u = 0; u < m; u++) c.push(f.slice(u * m, (u + 1) * m));
    return c;
  }
  function Fe(f, m, c) {
    const u = new m(f), h = W._malloc(u.length * u.BYTES_PER_ELEMENT);
    return c.set(u, h / u.BYTES_PER_ELEMENT), h;
  }
})();
export {
  Te as M,
  Nr as _,
  __tla,
  Yr as a,
  Br as d,
  Lr as m,
  jr as p,
  xr as s
};
