var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let De, Dr, Mr, zr, Ur, Rr;
let __tla = (async () => {
  De = async function(f = {}) {
    var v, c = f, u = "./this.program", m = import.meta.url, k = "";
    function oe(e) {
      return c.locateFile ? c.locateFile(e, k) : k + e;
    }
    var Q, ne;
    {
      try {
        k = new URL(".", m).href;
      } catch {
      }
      Q = async (e) => {
        var r = await fetch(e, {
          credentials: "same-origin"
        });
        if (r.ok) return r.arrayBuffer();
        throw new Error(r.status + " : " + r.url);
      };
    }
    var X = console.log.bind(console), j = console.error.bind(console), Z, K = false, re, E, g, z, p, h, M, T = false;
    function U() {
      var e = je.buffer;
      g = new Int8Array(e), c.HEAPU8 = z = new Uint8Array(e), c.HEAP32 = p = new Int32Array(e), c.HEAPU32 = h = new Uint32Array(e), c.HEAPF64 = new Float64Array(e), M = new BigInt64Array(e), new BigUint64Array(e);
    }
    function $() {
      if (c.preRun) for (typeof c.preRun == "function" && (c.preRun = [
        c.preRun
      ]); c.preRun.length; ) he(c.preRun.shift());
      de(Y);
    }
    function G() {
      T = true, !c.noFSInit && !o.initialized && o.init(), Ne.__wasm_call_ctors(), o.ignorePermissions = false;
    }
    function W() {
      if (c.postRun) for (typeof c.postRun == "function" && (c.postRun = [
        c.postRun
      ]); c.postRun.length; ) se(c.postRun.shift());
      de(J);
    }
    function F(e) {
      var _a;
      (_a = c.onAbort) == null ? void 0 : _a.call(c, e), e = "Aborted(" + e + ")", j(e), K = true, e += ". Build with -sASSERTIONS for more info.";
      var r = new WebAssembly.RuntimeError(e);
      throw E == null ? void 0 : E(r), r;
    }
    var A;
    function te() {
      return c.locateFile ? oe("deform.wasm") : new URL("" + new URL("deform-yC5jykRs.wasm", import.meta.url).href, import.meta.url).href;
    }
    function ce(e) {
      if (e == A && Z) return new Uint8Array(Z);
      throw "both async and sync fetching of the wasm failed";
    }
    async function me(e) {
      if (!Z) try {
        var r = await Q(e);
        return new Uint8Array(r);
      } catch {
      }
      return ce(e);
    }
    async function fe(e, r) {
      try {
        var t = await me(e), n = await WebAssembly.instantiate(t, r);
        return n;
      } catch (s) {
        j(`failed to asynchronously prepare wasm: ${s}`), F(s);
      }
    }
    async function ve(e, r, t) {
      if (!e) try {
        var n = fetch(r, {
          credentials: "same-origin"
        }), s = await WebAssembly.instantiateStreaming(n, t);
        return s;
      } catch (a) {
        j(`wasm streaming compile failed: ${a}`), j("falling back to ArrayBuffer instantiation");
      }
      return fe(r, t);
    }
    function I() {
      var e = {
        env: er,
        wasi_snapshot_preview1: er
      };
      return e;
    }
    async function pe() {
      function e(a, i) {
        return Ne = a.exports, br(Ne), U(), Ne;
      }
      function r(a) {
        return e(a.instance);
      }
      var t = I();
      if (c.instantiateWasm) return new Promise((a, i) => {
        c.instantiateWasm(t, (l, d) => {
          a(e(l));
        });
      });
      A ?? (A = te());
      var n = await ve(Z, A, t), s = r(n);
      return s;
    }
    var de = (e) => {
      for (; e.length > 0; ) e.shift()(c);
    }, J = [], se = (e) => J.push(e), Y = [], he = (e) => Y.push(e), ae = globalThis.TextDecoder && new TextDecoder(), ye = (e, r, t, n) => {
      for (var s = r + t; e[r] && !(r >= s); ) ++r;
      return r;
    }, ie = (e, r = 0, t, n) => {
      var s = ye(e, r, t);
      if (s - r > 16 && e.buffer && ae) return ae.decode(e.subarray(r, s));
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
          var _ = i - 65536;
          a += String.fromCharCode(55296 | _ >> 10, 56320 | _ & 1023);
        }
      }
      return a;
    }, R = (e, r, t) => e ? ie(z, e, r) : "", V = (e, r, t, n) => F(`Assertion failed: ${R(e)}, at: ` + [
      r ? R(r) : "unknown filename",
      t,
      n ? R(n) : "unknown function"
    ]);
    class ee {
      constructor(r) {
        this.excPtr = r, this.ptr = r - 24;
      }
      set_type(r) {
        h[this.ptr + 4 >> 2] = r;
      }
      get_type() {
        return h[this.ptr + 4 >> 2];
      }
      set_destructor(r) {
        h[this.ptr + 8 >> 2] = r;
      }
      get_destructor() {
        return h[this.ptr + 8 >> 2];
      }
      set_caught(r) {
        r = r ? 1 : 0, g[this.ptr + 12] = r;
      }
      get_caught() {
        return g[this.ptr + 12] != 0;
      }
      set_rethrown(r) {
        r = r ? 1 : 0, g[this.ptr + 13] = r;
      }
      get_rethrown() {
        return g[this.ptr + 13] != 0;
      }
      init(r, t) {
        this.set_adjusted_ptr(0), this.set_type(r), this.set_destructor(t);
      }
      set_adjusted_ptr(r) {
        h[this.ptr + 16 >> 2] = r;
      }
      get_adjusted_ptr() {
        return h[this.ptr + 16 >> 2];
      }
    }
    var b = 0, O = (e, r, t) => {
      var n = new ee(e);
      throw n.init(r, t), b = e, b;
    }, C = () => F(""), S = (e, r, t, n) => {
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
    }, we = (e, r, t) => S(e, z, r, t), Ke = (e, r, t, n) => {
      var s = (/* @__PURE__ */ new Date()).getFullYear(), a = new Date(s, 0, 1), i = new Date(s, 6, 1), l = a.getTimezoneOffset(), d = i.getTimezoneOffset(), _ = Math.max(l, d);
      h[e >> 2] = _ * 60, p[r >> 2] = +(l != d);
      var B = (P) => {
        var q = P >= 0 ? "-" : "+", Ee = Math.abs(P), ge = String(Math.floor(Ee / 60)).padStart(2, "0"), _e = String(Ee % 60).padStart(2, "0");
        return `UTC${q}${ge}${_e}`;
      }, N = B(l), w = B(d);
      d < l ? (we(N, t, 17), we(w, n, 17)) : (we(N, n, 17), we(w, t, 17));
    }, Be = () => 2147483648, Le = (e, r) => Math.ceil(e / r) * r, tr = (e) => {
      var r = je.buffer.byteLength, t = (e - r + 65535) / 65536 | 0;
      try {
        return je.grow(t), U(), 1;
      } catch {
      }
    }, or = (e) => {
      var r = z.length;
      e >>>= 0;
      var t = Be();
      if (e > t) return false;
      for (var n = 1; n <= 4; n *= 2) {
        var s = r * (1 + 0.2 / n);
        s = Math.min(s, e + 100663296);
        var a = Math.min(t, Le(Math.max(e, s), 65536)), i = tr(a);
        if (i) return true;
      }
      return false;
    }, $e = {}, nr = () => u || "./this.program", He = () => {
      var _a;
      if (!He.strings) {
        var e = (((_a = globalThis.navigator) == null ? void 0 : _a.language) ?? "C").replace("-", "_") + ".UTF-8", r = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: e,
          _: nr()
        };
        for (var t in $e) $e[t] === void 0 ? delete r[t] : r[t] = $e[t];
        var n = [];
        for (var t in r) n.push(`${t}=${r[t]}`);
        He.strings = n;
      }
      return He.strings;
    }, sr = (e, r) => {
      var t = 0, n = 0;
      for (var s of He()) {
        var a = r + t;
        h[e + n >> 2] = a, t += we(s, a, 1 / 0) + 1, n += 4;
      }
      return 0;
    }, Ze = (e) => {
      for (var r = 0, t = 0; t < e.length; ++t) {
        var n = e.charCodeAt(t);
        n <= 127 ? r++ : n <= 2047 ? r += 2 : n >= 55296 && n <= 57343 ? (r += 4, ++t) : r += 3;
      }
      return r;
    }, ar = (e, r) => {
      var t = He();
      h[e >> 2] = t.length;
      var n = 0;
      for (var s of t) n += Ze(s) + 1;
      return h[r >> 2] = n, 0;
    }, H = {
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
        var r = H.isAbs(e), t = e.slice(-1) === "/";
        return e = H.normalizeArray(e.split("/").filter((n) => !!n), !r).join("/"), !e && !r && (e = "."), e && t && (e += "/"), (r ? "/" : "") + e;
      },
      dirname: (e) => {
        var r = H.splitPath(e), t = r[0], n = r[1];
        return !t && !n ? "." : (n && (n = n.slice(0, -1)), t + n);
      },
      basename: (e) => e && e.match(/([^\/]+|\/)\/*$/)[1],
      join: (...e) => H.normalize(e.join("/")),
      join2: (e, r) => H.normalize(e + "/" + r)
    }, ir = () => (e) => crypto.getRandomValues(e), Qe = (e) => {
      (Qe = ir())(e);
    }, Re = {
      resolve: (...e) => {
        for (var r = "", t = false, n = e.length - 1; n >= -1 && !t; n--) {
          var s = n >= 0 ? e[n] : o.cwd();
          if (typeof s != "string") throw new TypeError("Arguments to path.resolve must be strings");
          if (!s) return "";
          r = s + "/" + r, t = H.isAbs(s);
        }
        return r = H.normalizeArray(r.split("/").filter((a) => !!a), !t).join("/"), (t ? "/" : "") + r || ".";
      },
      relative: (e, r) => {
        e = Re.resolve(e).slice(1), r = Re.resolve(r).slice(1);
        function t(_) {
          for (var B = 0; B < _.length && _[B] === ""; B++) ;
          for (var N = _.length - 1; N >= 0 && _[N] === ""; N--) ;
          return B > N ? [] : _.slice(B, N - B + 1);
        }
        for (var n = t(e.split("/")), s = t(r.split("/")), a = Math.min(n.length, s.length), i = a, l = 0; l < a; l++) if (n[l] !== s[l]) {
          i = l;
          break;
        }
        for (var d = [], l = i; l < n.length; l++) d.push("..");
        return d = d.concat(s.slice(i)), d.join("/");
      }
    }, Ve = [], We = (e, r, t) => {
      var n = Ze(e) + 1, s = new Array(n), a = S(e, s, 0, s.length);
      return s.length = a, s;
    }, lr = () => {
      var _a;
      if (!Ve.length) {
        var e = null;
        if (((_a = globalThis.window) == null ? void 0 : _a.prompt) && (e = window.prompt("Input: "), e !== null && (e += `
`)), !e) return null;
        Ve = We(e);
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
          return lr();
        },
        put_char(e, r) {
          r === null || r === 10 ? (X(ie(e.output)), e.output = []) : r != 0 && e.output.push(r);
        },
        fsync(e) {
          var _a;
          ((_a = e.output) == null ? void 0 : _a.length) > 0 && (X(ie(e.output)), e.output = []);
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
          r === null || r === 10 ? (j(ie(e.output)), e.output = []) : r != 0 && e.output.push(r);
        },
        fsync(e) {
          var _a;
          ((_a = e.output) == null ? void 0 : _a.length) > 0 && (j(ie(e.output)), e.output = []);
        }
      }
    }, Ge = (e) => {
      F();
    }, y = {
      ops_table: null,
      mount(e) {
        return y.createNode(null, "/", 16895, 0);
      },
      createNode(e, r, t, n) {
        if (o.isBlkdev(t) || o.isFIFO(t)) throw new o.ErrnoError(63);
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
            stream: o.chrdev_stream_ops
          }
        });
        var s = o.createNode(e, r, t, n);
        return o.isDir(s.mode) ? (s.node_ops = y.ops_table.dir.node, s.stream_ops = y.ops_table.dir.stream, s.contents = {}) : o.isFile(s.mode) ? (s.node_ops = y.ops_table.file.node, s.stream_ops = y.ops_table.file.stream, s.usedBytes = 0, s.contents = null) : o.isLink(s.mode) ? (s.node_ops = y.ops_table.link.node, s.stream_ops = y.ops_table.link.stream) : o.isChrdev(s.mode) && (s.node_ops = y.ops_table.chrdev.node, s.stream_ops = y.ops_table.chrdev.stream), s.atime = s.mtime = s.ctime = Date.now(), e && (e.contents[r] = s, e.atime = e.mtime = e.ctime = s.atime), s;
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
          r.size !== void 0 && y.resizeFileStorage(e, r.size);
        },
        lookup(e, r) {
          throw y.doesNotExistError || (y.doesNotExistError = new o.ErrnoError(44), y.doesNotExistError.stack = "<generic error, no stack>"), y.doesNotExistError;
        },
        mknod(e, r, t, n) {
          return y.createNode(e, r, t, n);
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
          var n = y.createNode(e, r, 41471, 0);
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
          if (r.buffer === g.buffer && (a = false), !n) return 0;
          var i = e.node;
          if (i.mtime = i.ctime = Date.now(), r.subarray && (!i.contents || i.contents.subarray)) {
            if (a) return i.contents = r.subarray(t, t + n), i.usedBytes = n, n;
            if (i.usedBytes === 0 && s === 0) return i.contents = r.slice(t, t + n), i.usedBytes = n, n;
            if (s + n <= i.usedBytes) return i.contents.set(r.subarray(t, t + n), s), n;
          }
          if (y.expandFileStorage(i, s + n), i.contents.subarray && r.subarray) i.contents.set(r.subarray(t, t + n), s);
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
          if (!(s & 2) && l && l.buffer === g.buffer) i = false, a = l.byteOffset;
          else {
            if (i = true, a = Ge(), !a) throw new o.ErrnoError(48);
            l && ((t > 0 || t + r < l.length) && (l.subarray ? l = l.subarray(t, t + r) : l = Array.prototype.slice.call(l, t, t + r)), g.set(l, a));
          }
          return {
            ptr: a,
            allocated: i
          };
        },
        msync(e, r, t, n, s) {
          return y.stream_ops.write(e, r, 0, n, t, false), 0;
        }
      }
    }, cr = (e) => {
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
    }, qe = (e, r) => {
      var t = 0;
      return e && (t |= 365), r && (t |= 146), t;
    }, fr = async (e) => {
      var r = await Q(e);
      return new Uint8Array(r);
    }, ur = (...e) => o.createDataFile(...e), Me = 0, Te = null, dr = (e) => {
      var _a;
      if (Me--, (_a = c.monitorRunDependencies) == null ? void 0 : _a.call(c, Me), Me == 0 && Te) {
        var r = Te;
        Te = null, r();
      }
    }, hr = (e) => {
      var _a;
      Me++, (_a = c.monitorRunDependencies) == null ? void 0 : _a.call(c, Me);
    }, Ie = [], mr = async (e, r) => {
      typeof Browser < "u" && Browser.init();
      for (var t of Ie) if (t.canHandle(r)) return t.handle(e, r);
      return e;
    }, Je = async (e, r, t, n, s, a, i, l) => {
      var d = r ? Re.resolve(H.join2(e, r)) : e;
      hr();
      try {
        var _ = t;
        typeof t == "string" && (_ = await fr(t)), _ = await mr(_, d), l == null ? void 0 : l(), a || ur(e, r, _, n, s, i);
      } finally {
        dr();
      }
    }, vr = (e, r, t, n, s, a, i, l, d, _) => {
      Je(e, r, t, n, s, l, d, _).then(a).catch(i);
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
        r.follow_mount ?? (r.follow_mount = true), H.isAbs(e) || (e = o.cwd() + "/" + e);
        e: for (var t = 0; t < 40; t++) {
          for (var n = e.split("/").filter((_) => !!_), s = o.root, a = "/", i = 0; i < n.length; i++) {
            var l = i === n.length - 1;
            if (l && r.parent) break;
            if (n[i] !== ".") {
              if (n[i] === "..") {
                if (a = H.dirname(a), o.isRoot(s)) {
                  e = a + "/" + n.slice(i + 1).join("/"), t--;
                  continue e;
                } else s = s.parent;
                continue;
              }
              a = H.join2(a, n[i]);
              try {
                s = o.lookupNode(s, n[i]);
              } catch (_) {
                if ((_ == null ? void 0 : _.errno) === 44 && l && r.noent_okay) return {
                  path: a
                };
                throw _;
              }
              if (o.isMountpoint(s) && (!l || r.follow_mount) && (s = s.mounted.root), o.isLink(s.mode) && (!l || r.follow)) {
                if (!s.node_ops.readlink) throw new o.ErrnoError(52);
                var d = s.node_ops.readlink(s);
                H.isAbs(d) || (d = H.dirname(a) + "/" + d), e = d + "/" + n.slice(i + 1).join("/");
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
        if (!e) return 44;
        if (o.isLink(e.mode)) return 32;
        var t = o.flagsToPermissionString(r);
        return o.isDir(e.mode) && (t !== "r" || r & 576) ? 31 : o.nodePermissions(e, t);
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
        var _a, _b;
        var t = o.createStream(e, r);
        return (_b = (_a = t.stream_ops) == null ? void 0 : _a.dup) == null ? void 0 : _b.call(_a, t), t;
      },
      doSetAttr(e, r, t) {
        var n = e == null ? void 0 : e.stream_ops.setattr, s = n ? e : r;
        n ?? (n = r.node_ops.setattr), o.checkOpExists(n, 63), n(s, t);
      },
      chrdev_stream_ops: {
        open(e) {
          var _a, _b;
          var r = o.getDevice(e.node.rdev);
          e.stream_ops = r.stream_ops, (_b = (_a = e.stream_ops).open) == null ? void 0 : _b.call(_a, e);
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
        typeof e == "function" && (r = e, e = false), o.syncFSRequests++, o.syncFSRequests > 1 && j(`warning: ${o.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
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
        }), s = n.node, a = H.basename(e);
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
          (n || H.isAbs(e)) && (n += "/"), n += s;
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
        if (!Re.resolve(e)) throw new o.ErrnoError(44);
        var t = o.lookupPath(r, {
          parent: true
        }), n = t.node;
        if (!n) throw new o.ErrnoError(44);
        var s = H.basename(r), a = o.mayCreate(n, s);
        if (a) throw new o.ErrnoError(a);
        if (!n.node_ops.symlink) throw new o.ErrnoError(63);
        return n.node_ops.symlink(n, s, e);
      },
      rename(e, r) {
        var t = H.dirname(e), n = H.dirname(r), s = H.basename(e), a = H.basename(r), i, l, d;
        if (i = o.lookupPath(e, {
          parent: true
        }), l = i.node, i = o.lookupPath(r, {
          parent: true
        }), d = i.node, !l || !d) throw new o.ErrnoError(44);
        if (l.mount !== d.mount) throw new o.ErrnoError(75);
        var _ = o.lookupNode(l, s), B = Re.relative(e, n);
        if (B.charAt(0) !== ".") throw new o.ErrnoError(28);
        if (B = Re.relative(r, t), B.charAt(0) !== ".") throw new o.ErrnoError(55);
        var N;
        try {
          N = o.lookupNode(d, a);
        } catch {
        }
        if (_ !== N) {
          var w = o.isDir(_.mode), P = o.mayDelete(l, s, w);
          if (P) throw new o.ErrnoError(P);
          if (P = N ? o.mayDelete(d, a, w) : o.mayCreate(d, a), P) throw new o.ErrnoError(P);
          if (!l.node_ops.rename) throw new o.ErrnoError(63);
          if (o.isMountpoint(_) || N && o.isMountpoint(N)) throw new o.ErrnoError(10);
          if (d !== l && (P = o.nodePermissions(l, "w"), P)) throw new o.ErrnoError(P);
          o.hashRemoveNode(_);
          try {
            l.node_ops.rename(_, d, a), _.parent = d;
          } catch (q) {
            throw q;
          } finally {
            o.hashAddNode(_);
          }
        }
      },
      rmdir(e) {
        var r = o.lookupPath(e, {
          parent: true
        }), t = r.node, n = H.basename(e), s = o.lookupNode(t, n), a = o.mayDelete(t, n, true);
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
        var n = H.basename(e), s = o.lookupNode(t, n), a = o.mayDelete(t, n, false);
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
        r = typeof r == "string" ? cr(r) : r, r & 64 ? t = t & 4095 | 32768 : t = 0;
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
        return d.stream_ops.open && d.stream_ops.open(d), i && o.chmod(n, t & 511), d;
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
        r.flags = r.flags || 0, r.encoding = r.encoding || "binary", r.encoding !== "utf8" && r.encoding !== "binary" && F(`Invalid encoding type "${r.encoding}"`);
        var t = o.open(e, r.flags), n = o.stat(e), s = n.size, a = new Uint8Array(s);
        return o.read(t, a, 0, s, 0), r.encoding === "utf8" && (a = ie(a)), o.close(t), a;
      },
      writeFile(e, r, t = {}) {
        t.flags = t.flags || 577;
        var n = o.open(e, t.flags, t.mode);
        typeof r == "string" && (r = new Uint8Array(We(r))), ArrayBuffer.isView(r) ? o.write(n, r, 0, r.byteLength, void 0, t.canOwn) : F("Unsupported data type"), o.close(n);
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
        var e = new Uint8Array(1024), r = 0, t = () => (r === 0 && (Qe(e), r = e.byteLength), e[--r]);
        o.createDevice("/dev", "random", t), o.createDevice("/dev", "urandom", t), o.mkdir("/dev/shm"), o.mkdir("/dev/shm/tmp");
      },
      createSpecialDirectories() {
        o.mkdir("/proc");
        var e = o.mkdir("/proc/self");
        o.mkdir("/proc/self/fd"), o.mount({
          mount() {
            var r = o.createNode(e, "fd", 16895, 73);
            return r.stream_ops = {
              llseek: y.stream_ops.llseek
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
        o.nameTable = new Array(4096), o.mount(y, {}, "/"), o.createDefaultDirectories(), o.createDefaultDevices(), o.createSpecialDirectories(), o.filesystems = {
          MEMFS: y
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
          n.parentExists = true, n.parentPath = t.path, n.parentObject = t.node, n.name = H.basename(e), t = o.lookupPath(e, {
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
            var i = H.join2(e, a);
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
        var a = H.join2(typeof e == "string" ? e : o.getPath(e), r), i = qe(n, s);
        return o.create(a, i);
      },
      createDataFile(e, r, t, n, s, a) {
        var i = r;
        e && (e = typeof e == "string" ? e : o.getPath(e), i = r ? H.join2(e, r) : e);
        var l = qe(n, s), d = o.create(i, l);
        if (t) {
          if (typeof t == "string") {
            for (var _ = new Array(t.length), B = 0, N = t.length; B < N; ++B) _[B] = t.charCodeAt(B);
            t = _;
          }
          o.chmod(d, l | 146);
          var w = o.open(d, 577);
          o.write(w, t, 0, t.length, 0, a), o.close(w), o.chmod(d, l);
        }
      },
      createDevice(e, r, t, n) {
        var _a;
        var s = H.join2(typeof e == "string" ? e : o.getPath(e), r), a = qe(!!t, !!n);
        (_a = o.createDevice).major ?? (_a.major = 64);
        var i = o.makedev(o.createDevice.major++, 0);
        return o.registerDevice(i, {
          open(l) {
            l.seekable = false;
          },
          close(l) {
            var _a2;
            ((_a2 = n == null ? void 0 : n.buffer) == null ? void 0 : _a2.length) && n(10);
          },
          read(l, d, _, B, N) {
            for (var w = 0, P = 0; P < B; P++) {
              var q;
              try {
                q = t();
              } catch {
                throw new o.ErrnoError(29);
              }
              if (q === void 0 && w === 0) throw new o.ErrnoError(6);
              if (q == null) break;
              w++, d[_ + P] = q;
            }
            return w && (l.node.atime = Date.now()), w;
          },
          write(l, d, _, B, N) {
            for (var w = 0; w < B; w++) try {
              n(d[_ + w]);
            } catch {
              throw new o.ErrnoError(29);
            }
            return B && (l.node.mtime = l.node.ctime = Date.now()), w;
          }
        }), o.mkdev(s, a, i);
      },
      forceLoadFile(e) {
        if (e.isDevice || e.isFolder || e.link || e.contents) return true;
        if (globalThis.XMLHttpRequest) F("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        else try {
          e.contents = ne(e.url);
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
          get(w) {
            if (!(w > this.length - 1 || w < 0)) {
              var P = w % this.chunkSize, q = w / this.chunkSize | 0;
              return this.getter(q)[P];
            }
          }
          setDataGetter(w) {
            this.getter = w;
          }
          cacheLength() {
            var w = new XMLHttpRequest();
            w.open("HEAD", t, false), w.send(null), w.status >= 200 && w.status < 300 || w.status === 304 || F("Couldn't load " + t + ". Status: " + w.status);
            var P = Number(w.getResponseHeader("Content-length")), q, Ee = (q = w.getResponseHeader("Accept-Ranges")) && q === "bytes", ge = (q = w.getResponseHeader("Content-Encoding")) && q === "gzip", _e = 1024 * 1024;
            Ee || (_e = P);
            var ke = (be, Ue) => {
              be > Ue && F("invalid range (" + be + ", " + Ue + ") or no bytes requested!"), Ue > P - 1 && F("only " + P + " bytes available! programmer error!");
              var ue = new XMLHttpRequest();
              return ue.open("GET", t, false), P !== _e && ue.setRequestHeader("Range", "bytes=" + be + "-" + Ue), ue.responseType = "arraybuffer", ue.overrideMimeType && ue.overrideMimeType("text/plain; charset=x-user-defined"), ue.send(null), ue.status >= 200 && ue.status < 300 || ue.status === 304 || F("Couldn't load " + t + ". Status: " + ue.status), ue.response !== void 0 ? new Uint8Array(ue.response || []) : We(ue.responseText || "");
            }, xe = this;
            xe.setDataGetter((be) => {
              var Ue = be * _e, ue = (be + 1) * _e - 1;
              return ue = Math.min(ue, P - 1), typeof xe.chunks[be] > "u" && (xe.chunks[be] = ke(Ue, ue)), typeof xe.chunks[be] > "u" && F("doXHR failed!"), xe.chunks[be];
            }), (ge || !P) && (_e = P = 1, P = this.getter(0).length, _e = P, X("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = P, this._chunkSize = _e, this.lengthKnown = true;
          }
          get length() {
            return this.lengthKnown || this.cacheLength(), this._length;
          }
          get chunkSize() {
            return this.lengthKnown || this.cacheLength(), this._chunkSize;
          }
        }
        if (globalThis.XMLHttpRequest) {
          F("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");
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
        var _ = {};
        for (const [N, w] of Object.entries(d.stream_ops)) _[N] = (...P) => (o.forceLoadFile(d), w(...P));
        function B(N, w, P, q, Ee) {
          var ge = N.node.contents;
          if (Ee >= ge.length) return 0;
          var _e = Math.min(ge.length - Ee, q);
          if (ge.slice) for (var ke = 0; ke < _e; ke++) w[P + ke] = ge[Ee + ke];
          else for (var ke = 0; ke < _e; ke++) w[P + ke] = ge.get(Ee + ke);
          return _e;
        }
        return _.read = (N, w, P, q, Ee) => (o.forceLoadFile(d), B(N, w, P, q, Ee)), _.mmap = (N, w, P, q, Ee) => {
          o.forceLoadFile(d);
          var ge = Ge();
          if (!ge) throw new o.ErrnoError(48);
          return B(N, g, ge, w, P), {
            ptr: ge,
            allocated: true
          };
        }, d.stream_ops = _, d;
      }
    }, Oe = {
      calculateAt(e, r, t) {
        if (H.isAbs(r)) return r;
        var n;
        if (e === -100) n = o.cwd();
        else {
          var s = Oe.getStreamFromFD(e);
          n = s.path;
        }
        if (r.length == 0) {
          if (!t) throw new o.ErrnoError(44);
          return n;
        }
        return n + "/" + r;
      },
      writeStat(e, r) {
        h[e >> 2] = r.dev, h[e + 4 >> 2] = r.mode, h[e + 8 >> 2] = r.nlink, h[e + 12 >> 2] = r.uid, h[e + 16 >> 2] = r.gid, h[e + 20 >> 2] = r.rdev, M[e + 24 >> 3] = BigInt(r.size), p[e + 32 >> 2] = 4096, p[e + 36 >> 2] = r.blocks;
        var t = r.atime.getTime(), n = r.mtime.getTime(), s = r.ctime.getTime();
        return M[e + 40 >> 3] = BigInt(Math.floor(t / 1e3)), h[e + 48 >> 2] = t % 1e3 * 1e3 * 1e3, M[e + 56 >> 3] = BigInt(Math.floor(n / 1e3)), h[e + 64 >> 2] = n % 1e3 * 1e3 * 1e3, M[e + 72 >> 3] = BigInt(Math.floor(s / 1e3)), h[e + 80 >> 2] = s % 1e3 * 1e3 * 1e3, M[e + 88 >> 3] = BigInt(r.ino), 0;
      },
      writeStatFs(e, r) {
        h[e + 4 >> 2] = r.bsize, h[e + 60 >> 2] = r.bsize, M[e + 8 >> 3] = BigInt(r.blocks), M[e + 16 >> 3] = BigInt(r.bfree), M[e + 24 >> 3] = BigInt(r.bavail), M[e + 32 >> 3] = BigInt(r.files), M[e + 40 >> 3] = BigInt(r.ffree), h[e + 48 >> 2] = r.fsid, h[e + 64 >> 2] = r.flags, h[e + 56 >> 2] = r.namelen;
      },
      doMsync(e, r, t, n, s) {
        if (!o.isFile(r.node.mode)) throw new o.ErrnoError(43);
        if (n & 2) return 0;
        var a = z.slice(e, e + t);
        o.msync(r, a, s, t, n);
      },
      getStreamFromFD(e) {
        var r = o.getStreamChecked(e);
        return r;
      },
      varargs: void 0,
      getStr(e) {
        var r = R(e);
        return r;
      }
    };
    function pr(e) {
      try {
        var r = Oe.getStreamFromFD(e);
        return o.close(r), 0;
      } catch (t) {
        if (typeof o > "u" || t.name !== "ErrnoError") throw t;
        return t.errno;
      }
    }
    var yr = (e, r, t, n) => {
      for (var s = 0, a = 0; a < t; a++) {
        var i = h[r >> 2], l = h[r + 4 >> 2];
        r += 8;
        var d = o.read(e, g, i, l, n);
        if (d < 0) return -1;
        if (s += d, d < l) break;
      }
      return s;
    };
    function wr(e, r, t, n) {
      try {
        var s = Oe.getStreamFromFD(e), a = yr(s, r, t);
        return h[n >> 2] = a, 0;
      } catch (i) {
        if (typeof o > "u" || i.name !== "ErrnoError") throw i;
        return i.errno;
      }
    }
    var Er = 9007199254740992, gr = -9007199254740992, _r = (e) => e < gr || e > Er ? NaN : Number(e);
    function Pr(e, r, t, n) {
      r = _r(r);
      try {
        if (isNaN(r)) return 61;
        var s = Oe.getStreamFromFD(e);
        return o.llseek(s, r, t), M[n >> 3] = BigInt(s.position), s.getdents && r === 0 && t === 0 && (s.getdents = null), 0;
      } catch (a) {
        if (typeof o > "u" || a.name !== "ErrnoError") throw a;
        return a.errno;
      }
    }
    var kr = (e, r, t, n) => {
      for (var s = 0, a = 0; a < t; a++) {
        var i = h[r >> 2], l = h[r + 4 >> 2];
        r += 8;
        var d = o.write(e, g, i, l, n);
        if (d < 0) return -1;
        if (s += d, d < l) break;
      }
      return s;
    };
    function Ar(e, r, t, n) {
      try {
        var s = Oe.getStreamFromFD(e), a = kr(s, r, t);
        return h[n >> 2] = a, 0;
      } catch (i) {
        if (typeof o > "u" || i.name !== "ErrnoError") throw i;
        return i.errno;
      }
    }
    if (o.createPreloadedFile = vr, o.preloadFile = Je, o.staticInit(), c.noExitRuntime && c.noExitRuntime, c.preloadPlugins && (Ie = c.preloadPlugins), c.print && (X = c.print), c.printErr && (j = c.printErr), c.wasmBinary && (Z = c.wasmBinary), c.arguments && c.arguments, c.thisProgram && (u = c.thisProgram), c.preInit) for (typeof c.preInit == "function" && (c.preInit = [
      c.preInit
    ]); c.preInit.length > 0; ) c.preInit.shift()();
    var je;
    function br(e) {
      c._didactic_solve = e.didactic_solve, c._malloc = e.malloc, c._free = e.free, e._emscripten_stack_restore, e._emscripten_stack_alloc, e.emscripten_stack_get_current, je = e.memory, e.__indirect_function_table;
    }
    var er = {
      __assert_fail: V,
      __cxa_throw: O,
      _abort_js: C,
      _tzset_js: Ke,
      emscripten_resize_heap: or,
      environ_get: sr,
      environ_sizes_get: ar,
      fd_close: pr,
      fd_read: wr,
      fd_seek: Pr,
      fd_write: Ar
    };
    function Xe() {
      if (Me > 0) {
        Te = Xe;
        return;
      }
      if ($(), Me > 0) {
        Te = Xe;
        return;
      }
      function e() {
        var _a;
        c.calledRun = true, !K && (G(), re == null ? void 0 : re(c), (_a = c.onRuntimeInitialized) == null ? void 0 : _a.call(c), W());
      }
      c.setStatus ? (c.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => c.setStatus(""), 1), e();
      }, 1)) : e();
    }
    var Ne;
    return Ne = await pe(), Xe(), T ? v = c : v = new Promise((e, r) => {
      re = e, E = r;
    }), v;
  };
  const L = await De();
  Mr = function(f, v, c, u) {
    if (f.length === 0) return;
    const m = [], k = Pe(f.flat(), Float64Array, L.HEAPF64);
    m.push(k);
    const oe = v.flat(), Q = Pe(oe, Uint32Array, L.HEAPU32);
    m.push(Q);
    const ne = v.map((S) => S.length), X = Pe(ne, Uint32Array, L.HEAPU32);
    m.push(X);
    const j = c.supports ? Array.from(c.supports.keys()) : [], Z = c.supports ? Array.from(c.supports.values()).flat().map((S) => S ? 1 : 0) : [], K = Pe(j, Uint32Array, L.HEAPU32);
    m.push(K);
    const re = Pe(Z, Uint8Array, L.HEAPU8);
    m.push(re);
    const E = c.loads ? Array.from(c.loads.keys()) : [], g = c.loads ? Array.from(c.loads.values()).flat() : [], z = Pe(E, Uint32Array, L.HEAPU32);
    m.push(z);
    const p = Pe(g, Float64Array, L.HEAPF64);
    m.push(p);
    const h = (S) => {
      const we = S ? Array.from(S.keys()) : [], Ke = S ? Array.from(S.values()) : [], Be = Pe(we, Uint32Array, L.HEAPU32);
      m.push(Be);
      const Le = Pe(Ke, Float64Array, L.HEAPF64);
      return m.push(Le), {
        keysPtr: Be,
        valuesPtr: Le,
        size: we.length
      };
    }, M = h(u.elasticities), T = h(u.elasticitiesOrthogonal), U = h(u.areas), $ = h(u.momentsOfInertiaZ), G = h(u.momentsOfInertiaY), W = h(u.shearModuli), F = h(u.torsionalConstants), A = h(u.thicknesses), te = h(u.poissonsRatios);
    h(u.shearAreasY), h(u.shearAreasZ);
    const ce = u.rigidOffsets ? Array.from(u.rigidOffsets.keys()) : [], me = u.rigidOffsets ? Array.from(u.rigidOffsets.values()).flat() : [], fe = Pe(ce, Uint32Array, L.HEAPU32);
    m.push(fe);
    const ve = Pe(me, Float64Array, L.HEAPF64);
    m.push(ve);
    const I = u.momentReleases ? Array.from(u.momentReleases.keys()) : [], pe = u.momentReleases ? Array.from(u.momentReleases.values()).flat().map((S) => S ? 1 : 0) : [], de = Pe(I, Uint32Array, L.HEAPU32);
    m.push(de);
    const J = Pe(pe, Uint8Array, L.HEAPU8);
    m.push(J);
    const se = L._malloc(4);
    m.push(se);
    const Y = L._malloc(4);
    m.push(Y);
    const he = L._malloc(4);
    m.push(he);
    const ae = L._malloc(4);
    m.push(ae), L._deform(k, f.length, Q, oe.length, X, v.length, K, re, j.length, z, p, E.length, M.keysPtr, M.valuesPtr, M.size, U.keysPtr, U.valuesPtr, U.size, $.keysPtr, $.valuesPtr, $.size, G.keysPtr, G.valuesPtr, G.size, W.keysPtr, W.valuesPtr, W.size, F.keysPtr, F.valuesPtr, F.size, A.keysPtr, A.valuesPtr, A.size, te.keysPtr, te.valuesPtr, te.size, T.keysPtr, T.valuesPtr, T.size, se, Y, he, ae);
    const ye = L.HEAPU32[se / 4], ie = L.HEAPU32[Y / 4], R = L.HEAPU32[he / 4], V = L.HEAPU32[ae / 4], ee = new Float64Array(L.HEAPF64.buffer, ye, ie), b = new Float64Array(L.HEAPF64.buffer, R, V), O = /* @__PURE__ */ new Map();
    for (let S = 0; S < ie; S += 7) {
      const we = ee[S];
      O.set(we, Array.from(ee.slice(S + 1, S + 7)));
    }
    const C = /* @__PURE__ */ new Map();
    for (let S = 0; S < V; S += 7) {
      const we = b[S];
      C.set(we, Array.from(b.slice(S + 1, S + 7)));
    }
    return ye && m.push(ye), R && m.push(R), m.forEach((S) => L._free(S)), {
      deformations: O,
      reactions: C
    };
  };
  function Pe(f, v, c) {
    const u = new v(f), m = L._malloc(u.length * u.BYTES_PER_ELEMENT);
    return c.set(u, m / u.BYTES_PER_ELEMENT), m;
  }
  const D = await De();
  zr = function(f, v, c, u, m = 10) {
    if (f.length === 0) return {
      frequencies: [],
      modeShapes: [],
      massParticipation: []
    };
    const k = [], oe = ze(f.flat(), Float64Array, D.HEAPF64);
    k.push(oe);
    const Q = v.flat(), ne = ze(Q, Uint32Array, D.HEAPU32);
    k.push(ne);
    const X = v.map((R) => R.length), j = ze(X, Uint32Array, D.HEAPU32);
    k.push(j);
    const Z = c.supports ? Array.from(c.supports.keys()) : [], K = c.supports ? Array.from(c.supports.values()).flat().map((R) => R ? 1 : 0) : [], re = ze(Z, Uint32Array, D.HEAPU32);
    k.push(re);
    const E = ze(K, Uint8Array, D.HEAPU8);
    k.push(E);
    const g = (R) => {
      const V = R ? Array.from(R.keys()) : [], ee = R ? Array.from(R.values()) : [], b = ze(V, Uint32Array, D.HEAPU32);
      k.push(b);
      const O = ze(ee, Float64Array, D.HEAPF64);
      return k.push(O), {
        keysPtr: b,
        valuesPtr: O,
        size: V.length
      };
    }, z = g(u.elasticities), p = g(u.areas), h = g(u.momentsOfInertiaZ), M = g(u.momentsOfInertiaY), T = g(u.shearModuli), U = g(u.torsionalConstants), $ = g(u.densities), G = D._malloc(4);
    k.push(G);
    const W = D._malloc(4);
    k.push(W);
    const F = D._malloc(4);
    k.push(F);
    const A = D._malloc(4);
    k.push(A);
    const te = D._malloc(4);
    k.push(te);
    const ce = D._malloc(4);
    k.push(ce);
    const me = D._malloc(4);
    k.push(me);
    const fe = D._malloc(4);
    k.push(fe), D._modal(oe, f.length, ne, Q.length, j, v.length, re, E, Z.length, z.keysPtr, z.valuesPtr, z.size, p.keysPtr, p.valuesPtr, p.size, h.keysPtr, h.valuesPtr, h.size, M.keysPtr, M.valuesPtr, M.size, T.keysPtr, T.valuesPtr, T.size, U.keysPtr, U.valuesPtr, U.size, $.keysPtr, $.valuesPtr, $.size, m, G, W, F, A, te, ce, me, fe);
    const ve = D.HEAPU32[G / 4], I = D.HEAPU32[W / 4], pe = D.HEAPU32[F / 4], de = D.HEAPU32[A / 4], J = D.HEAPU32[te / 4], se = D.HEAPU32[ce / 4], Y = D.HEAPU32[me / 4], he = D.HEAPU32[fe / 4];
    let ae = [], ye = [], ie = [];
    if (I > 0 && ve) {
      const R = new Float64Array(D.HEAPF64.buffer, ve, I);
      ae = Array.from(R), k.push(ve);
    }
    if (de > 0 && J > 0 && pe) {
      const R = new Float64Array(D.HEAPF64.buffer, pe, de * J);
      for (let V = 0; V < de; V++) ye.push(Array.from(R.slice(V * J, (V + 1) * J)));
      k.push(pe);
    }
    if (Y > 0 && he > 0 && se) {
      const R = new Float64Array(D.HEAPF64.buffer, se, Y * he);
      for (let V = 0; V < Y; V++) ie.push(Array.from(R.slice(V * he, (V + 1) * he)));
      k.push(se);
    }
    return k.forEach((R) => D._free(R)), {
      frequencies: ae,
      modeShapes: ye,
      massParticipation: ie
    };
  };
  function ze(f, v, c) {
    const u = new v(f), m = D._malloc(u.length * u.BYTES_PER_ELEMENT);
    return c.set(u, m / u.BYTES_PER_ELEMENT), m;
  }
  await De();
  const Ae = await De();
  Rr = function(f) {
    const { nodes: v, elements: c, E: u, nu: m, gamma: k, c: oe, phi: Q, thickness: ne = 1, supports: X, surcharge: j = 0, surfaceYThreshold: Z = -1e10 } = f, K = [], re = v.flat(), E = Fr(re);
    K.push(E);
    const g = c.flat(), z = rr(g);
    K.push(z);
    const p = [];
    for (const A of X) p.push(A.node, A.fixX ? 1 : 0, A.fixY ? 1 : 0);
    const h = rr(p);
    K.push(h);
    const M = c.length, T = v.length, U = Ae._slopeAllocDouble(M);
    K.push(U);
    const $ = Ae._slopeAllocDouble(T * 2);
    K.push($);
    const G = Ae._slopeStabilitySolver(E, T, z, M, u, m, k, oe, Q, ne, h, X.length, j, Z, U, $), W = [];
    for (let A = 0; A < M; A++) W.push(Ae.HEAPF64[U / 8 + A]);
    const F = [];
    for (let A = 0; A < T; A++) F.push([
      Ae.HEAPF64[$ / 8 + 2 * A],
      Ae.HEAPF64[$ / 8 + 2 * A + 1]
    ]);
    return K.forEach((A) => Ae._free(A)), {
      fos: G,
      plasticStrain: W,
      displacements: F
    };
  };
  function Fr(f) {
    const v = new Float64Array(f), c = Ae._malloc(v.length * v.BYTES_PER_ELEMENT);
    return Ae.HEAPF64.set(v, c / 8), c;
  }
  function rr(f) {
    const v = new Uint32Array(f), c = Ae._malloc(v.length * v.BYTES_PER_ELEMENT);
    return Ae.HEAPU32.set(v, c / 4), c;
  }
  const le = await De();
  function Ce(f, v, c) {
    const u = new v(f), m = le._malloc(u.length * u.BYTES_PER_ELEMENT);
    return c.set(u, m / u.BYTES_PER_ELEMENT), m;
  }
  Ur = function(f) {
    const v = [];
    let c = [], u = 0;
    f.nodes && f.nodes.length > 0 && (u = f.nodes.length, c = f.nodes.flat());
    const m = Ce(c.length > 0 ? c : [
      0
    ], Float64Array, le.HEAPF64);
    v.push(m);
    let k = [], oe = 0;
    f.elements && f.elements.length > 0 && (oe = f.elements.length, k = f.elements.flat());
    const Q = Ce(k.length > 0 ? k : [
      0
    ], Int32Array, le.HEAPU32);
    v.push(Q);
    let ne = [], X = 0;
    f.bcs && f.bcs.length > 0 && (X = f.bcs.length, ne = f.bcs.flatMap((b) => [
      b.node,
      b.dof,
      b.value
    ]));
    const j = Ce(ne.length > 0 ? ne : [
      0
    ], Float64Array, le.HEAPF64);
    v.push(j);
    let Z = [], K = 0;
    f.pointLoads && f.pointLoads.length > 0 && (K = f.pointLoads.length, Z = f.pointLoads.flatMap((b) => [
      b.node,
      b.dof,
      b.value
    ]));
    const re = Ce(Z.length > 0 ? Z : [
      0
    ], Float64Array, le.HEAPF64);
    v.push(re);
    const E = f.meshLx ?? 0, g = f.meshLy ?? 0, z = f.meshNx ?? 0, p = f.meshNy ?? 0, M = {
      none: 0,
      "simply-supported": 1,
      clamped: 2
    }[f.bcType ?? "none"] ?? 0, T = f.theoryType ?? 0;
    let U = [], $ = 0;
    f.springs && f.springs.length > 0 && ($ = f.springs.length, U = f.springs.flatMap((b) => [
      b.node,
      b.dof,
      b.k
    ]));
    const G = Ce(U.length > 0 ? U : [
      0
    ], Float64Array, le.HEAPF64);
    v.push(G);
    const W = le._malloc(4);
    v.push(W);
    const F = le._malloc(4);
    v.push(F);
    const A = le._malloc(4);
    v.push(A);
    const te = le._malloc(4);
    v.push(te), le._plate_q4_solve(m, u, Q, oe, f.E, f.nu, f.thickness, j, X, f.pressure ?? 0, re, K, E, g, z, p, M, T, G, $, W, F, A, te);
    const ce = le.HEAPU32[W / 4], me = le.HEAPU32[F / 4], fe = le.HEAPU32[A / 4], ve = le.HEAPU32[te / 4], I = new Float64Array(le.HEAPF64.buffer, ce, me), pe = I[0], de = I[1], J = [];
    let se = 0;
    for (let b = 0; b < pe; b++) {
      const O = 2 + b * 5, C = {
        x: I[O],
        y: I[O + 1],
        w: I[O + 2],
        bx: I[O + 3],
        by: I[O + 4]
      };
      J.push(C), Math.abs(C.w) > Math.abs(se) && (se = C.w);
    }
    const Y = new Float64Array(le.HEAPF64.buffer, fe, ve), he = [];
    let ae = 0, ye = 0, ie = 0, R = 0, V = 0;
    for (let b = 0; b < de; b++) {
      const O = b * 9, C = {
        nodes: [
          Y[O],
          Y[O + 1],
          Y[O + 2],
          Y[O + 3]
        ],
        Mxx: Y[O + 4],
        Myy: Y[O + 5],
        Mxy: Y[O + 6],
        Qx: Y[O + 7],
        Qy: Y[O + 8]
      };
      he.push(C), Math.abs(C.Mxx) > Math.abs(ae) && (ae = C.Mxx), Math.abs(C.Myy) > Math.abs(ye) && (ye = C.Myy), Math.abs(C.Mxy) > Math.abs(ie) && (ie = C.Mxy), Math.abs(C.Qx) > Math.abs(R) && (R = C.Qx), Math.abs(C.Qy) > Math.abs(V) && (V = C.Qy);
    }
    let ee;
    if (E > 0 && g > 0) {
      const b = E / 2, O = g / 2;
      let C = 1 / 0;
      for (const S of J) {
        const we = Math.hypot(S.x - b, S.y - O);
        we < C && (C = we, ee = S.w);
      }
    }
    return ce && v.push(ce), fe && v.push(fe), v.forEach((b) => le._free(b)), {
      nodeResults: J,
      elementResults: he,
      maxW: se,
      maxMxx: ae,
      maxMyy: ye,
      maxMxy: ie,
      maxQx: R,
      maxQy: V,
      centerW: ee
    };
  };
  const x = await De();
  Dr = function(f, v, c, u) {
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
    const m = [], k = Fe(f.flat(), Float64Array, x.HEAPF64);
    m.push(k);
    const oe = v.flat(), Q = Fe(oe, Uint32Array, x.HEAPU32);
    m.push(Q);
    const ne = v.map((ee) => ee.length), X = Fe(ne, Uint32Array, x.HEAPU32);
    m.push(X);
    const j = c.supports ? Array.from(c.supports.keys()) : [], Z = c.supports ? Array.from(c.supports.values()).flat().map((ee) => ee ? 1 : 0) : [], K = Fe(j, Uint32Array, x.HEAPU32);
    m.push(K);
    const re = Fe(Z, Uint8Array, x.HEAPU8);
    m.push(re);
    const E = c.loads ? Array.from(c.loads.keys()) : [], g = c.loads ? Array.from(c.loads.values()).flat() : [], z = Fe(E, Uint32Array, x.HEAPU32);
    m.push(z);
    const p = Fe(g, Float64Array, x.HEAPF64);
    m.push(p);
    const h = (ee) => {
      const b = ee ? Array.from(ee.keys()) : [], O = ee ? Array.from(ee.values()) : [], C = Fe(b, Uint32Array, x.HEAPU32);
      m.push(C);
      const S = Fe(O, Float64Array, x.HEAPF64);
      return m.push(S), {
        keysPtr: C,
        valuesPtr: S,
        size: b.length
      };
    }, M = h(u.elasticities), T = h(u.areas), U = h(u.momentsOfInertiaZ), $ = h(u.momentsOfInertiaY), G = h(u.shearModuli), W = h(u.torsionalConstants), F = h(u.thicknesses), A = h(u.poissonsRatios), te = h(u.shearAreasY), ce = h(u.shearAreasZ), me = x._malloc(4);
    m.push(me);
    const fe = x._malloc(4);
    m.push(fe);
    const ve = x._malloc(4);
    m.push(ve);
    const I = x._malloc(4);
    m.push(I);
    const pe = x._malloc(4);
    m.push(pe);
    const de = x._malloc(4);
    m.push(de), x._didactic_solve(k, f.length, Q, oe.length, X, v.length, K, re, j.length, z, p, E.length, M.keysPtr, M.valuesPtr, M.size, T.keysPtr, T.valuesPtr, T.size, U.keysPtr, U.valuesPtr, U.size, $.keysPtr, $.valuesPtr, $.size, G.keysPtr, G.valuesPtr, G.size, W.keysPtr, W.valuesPtr, W.size, F.keysPtr, F.valuesPtr, F.size, A.keysPtr, A.valuesPtr, A.size, te.keysPtr, te.valuesPtr, te.size, ce.keysPtr, ce.valuesPtr, ce.size, me, fe, ve, I, pe, de);
    const J = x.HEAPU32[me / 4], se = x.HEAPU32[fe / 4], Y = x.HEAPU32[ve / 4], he = x.HEAPU32[I / 4], ae = x.HEAPU32[pe / 4], ye = x.HEAPU32[de / 4], ie = J && se > 0 ? Array.from(new Float64Array(x.HEAPF64.buffer, J, se)) : [], R = Y && he > 0 ? Array.from(new Float64Array(x.HEAPF64.buffer, Y, he)) : [], V = ae && ye > 0 ? Array.from(new Float64Array(x.HEAPF64.buffer, ae, ye)) : [];
    return J && m.push(J), Y && m.push(Y), ae && m.push(ae), m.forEach((ee) => x._free(ee)), Sr(ie, R, V, f.length, v.length);
  };
  function Sr(f, v, c, u, m) {
    const k = u * 6, oe = [];
    if (f.length > 0) {
      const E = f[0], g = [];
      for (let z = 0; z < E; z++) g.push(f[1 + z]);
      for (let z = 0; z < E; z++) {
        let p = g[z];
        const h = f[p++], M = f[p++], T = f[p++], U = T * T, $ = Ye(f.slice(p, p + U), T);
        p += U;
        const G = Ye(f.slice(p, p + U), T);
        p += U;
        const W = Ye(f.slice(p, p + U), T);
        p += U;
        const F = Ye(f.slice(p, p + 9), 3);
        p += 9;
        const A = f[p++], te = f[p++], ce = f[p++], me = f[p++], fe = f[p++], ve = f[p++], I = f[p++], pe = f[p++], de = f[p++], J = f[p++], se = f[p++];
        oe.push({
          index: h,
          type: M === 0 ? "frame" : "shell-Q4",
          nDOF: T,
          K_local: $,
          T: G,
          K_global: W,
          lambda: F,
          L: A,
          E: te,
          A: ce,
          Iz: me,
          Iy: fe,
          G: ve,
          J: I,
          t: pe,
          nu: de,
          phiZ: J,
          phiY: se
        });
      }
    }
    const Q = [];
    let ne = 0;
    if (v.length > 0) {
      ne = v[0];
      for (let E = 0; E < ne; E++) {
        const g = 1 + E * 3;
        Q.push({
          row: v[g],
          col: v[g + 1],
          value: v[g + 2]
        });
      }
    }
    let X = [], j = [], Z = [], K = [], re = [];
    if (c.length > 0) {
      let E = 0;
      const g = c[E++];
      X = c.slice(E, E + g), E += g, j = c.slice(E, E + g), E += g, Z = c.slice(E, E + g), E += g;
      const z = c[E++];
      K = c.slice(E, E + z).map(Math.round), E += z;
      const p = c[E++];
      re = c.slice(E, E + p).map(Math.round);
    }
    return {
      nNodes: u,
      nElements: m,
      nDOF: k,
      elements: oe,
      K_assembled_sparse: Q,
      K_assembled_nnz: ne,
      F_applied: X,
      U_full: j,
      R_full: Z,
      freeDOFs: K,
      fixedDOFs: re
    };
  }
  function Ye(f, v) {
    const c = [];
    for (let u = 0; u < v; u++) c.push(f.slice(u * v, (u + 1) * v));
    return c;
  }
  function Fe(f, v, c) {
    const u = new v(f), m = x._malloc(u.length * u.BYTES_PER_ELEMENT);
    return c.set(u, m / u.BYTES_PER_ELEMENT), m;
  }
})();
export {
  De as M,
  __tla,
  Dr as a,
  Mr as d,
  zr as m,
  Ur as p,
  Rr as s
};
