import { J as Te, B as Ve, V as xe, L as ct, a as pt, C as ut, b as mt, S as ft, c as ht, a1 as St, p as $t, a3 as gt, v as It, d as et, g as tt, a5 as nt, h as Mt } from "./theme-dnnHIQ7U.js";
const Lt = 16478597, Ot = "rgba(251,113,133,0.92)", zt = 6333946, Ft = "rgba(96,165,250,0.92)";
function Tt(e) {
  if (e.length === 0) return "A";
  const t = e[e.length - 1];
  if (/^\d+$/.test(t)) return String(parseInt(t) + 1);
  let i = t.toUpperCase(), o = i.length - 1;
  const n = i.split("");
  for (; o >= 0; ) if (n[o] === "Z") n[o] = "A", o--;
  else return n[o] = String.fromCharCode(n[o].charCodeAt(0) + 1), n.join("");
  return "A" + n.join("");
}
function jt(e, t) {
  return e.length > 0 && e.every((o) => /^N[+-]/.test(o.label)) || e.length === 0 ? `N${t >= 0 ? "+" : ""}${t.toFixed(2)}` : `Nivel ${e.length + 1}`;
}
function Bt(e) {
  const t = new Te();
  t.name = `axis-${e.label}`;
  const i = new Ve().setFromPoints([new xe(...e.start), new xe(...e.end)]), o = new ct({ color: Lt, transparent: true, opacity: 0.85 }), n = new pt(i, o);
  t.add(n);
  const s = document.createElement("canvas");
  s.width = 128, s.height = 128;
  const r = s.getContext("2d");
  r.fillStyle = Ot, r.beginPath(), r.arc(64, 64, 56, 0, Math.PI * 2), r.fill(), r.strokeStyle = "#ffffff", r.lineWidth = 4, r.stroke(), r.fillStyle = "#ffffff", r.font = "bold 60px Consolas, monospace", r.textAlign = "center", r.textBaseline = "middle", r.fillText(e.label, 64, 68);
  const a = new ut(s);
  a.minFilter = mt;
  const l = new ft({ map: a, depthTest: false }), d = new ht(l);
  return d.position.set(...e.end), d.scale.set(0.3, 0.3, 1), d.userData.isAxisLabel = true, t.add(d), t;
}
function Rt(e, t = 20) {
  const i = new Te();
  i.name = `level-${e.label}`;
  const o = new Ve().setFromPoints([new xe(-t, 0, e.z), new xe(t, 0, e.z)]), n = new St({ color: zt, transparent: true, opacity: 0.7, dashSize: 0.3, gapSize: 0.15 }), s = new pt(o, n);
  s.computeLineDistances(), i.add(s);
  const r = document.createElement("canvas");
  r.width = 256, r.height = 64;
  const a = r.getContext("2d");
  a.fillStyle = Ft, a.fillRect(0, 0, 256, 64), a.strokeStyle = "#ffffff", a.lineWidth = 3, a.strokeRect(2, 2, 252, 60), a.fillStyle = "#ffffff", a.font = "bold 36px Consolas, monospace", a.textAlign = "center", a.textBaseline = "middle", a.fillText(e.label, 128, 36);
  const l = new ut(r);
  l.minFilter = mt;
  const d = new ft({ map: l, depthTest: false }), w = new ht(d);
  return w.position.set(t + 1, 0, e.z), w.scale.set(2, 0.5, 1), w.userData.isLevelLabel = true, i.add(w), i;
}
const At = { id: "ollama", name: "\u{1F999} Ollama (local, gratis)", supportsVision: true, models: [{ id: "qwen2.5-coder:7b", name: "Qwen 2.5 Coder 7B (c\xF3digo)", vision: false }, { id: "llama3.2-vision:11b", name: "Llama 3.2 Vision 11B", vision: true }, { id: "llava:7b", name: "LLaVA 7B (vision)", vision: true }, { id: "qwen2.5:7b", name: "Qwen 2.5 7B", vision: false }, { id: "llama3.1:8b", name: "Llama 3.1 8B", vision: false }], defaultModel: "qwen2.5-coder:7b", requiresKey: false, requiresLocal: true, async send({ msg: e, system: t, model: i }) {
  var _a, _b;
  const o = { role: "user", content: e.text };
  ((_a = e.images) == null ? void 0 : _a.length) && (o.images = e.images.map((r) => r.base64));
  let n;
  try {
    n = await fetch("http://localhost:11434/api/chat", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ model: i, messages: [{ role: "system", content: t }, o], stream: false }) });
  } catch {
    throw new Error(`Ollama no est\xE1 corriendo en localhost:11434.

Para usar Ollama:
1. Descargalo de ollama.com/download
2. Instal\xE1 un modelo: ollama pull ` + i + `
3. Verific\xE1 que est\xE9 activo (Ollama corre como servicio en background)

O cambi\xE1 a otro provider (Gemini/Groq/OpenRouter) que solo requiere API key.`);
  }
  if (!n.ok) {
    const r = await n.text();
    throw n.status === 404 ? new Error(`Modelo "${i}" no instalado. Ejecut\xE1: ollama pull ${i}`) : new Error(`Ollama error ${n.status}: ${r}`);
  }
  return ((_b = (await n.json()).message) == null ? void 0 : _b.content) ?? "";
} };
async function ot() {
  try {
    const e = new AbortController(), t = setTimeout(() => e.abort(), 1500), i = await fetch("http://localhost:11434/api/tags", { signal: e.signal }).catch(() => null);
    return clearTimeout(t), !i || !i.ok ? [] : ((await i.json()).models ?? []).map((n) => n.name);
  } catch {
    return [];
  }
}
async function at() {
  try {
    const e = new AbortController(), t = setTimeout(() => e.abort(), 1e3), i = await fetch("http://localhost:11434/api/tags", { signal: e.signal }).catch(() => null);
    return clearTimeout(t), !!i && i.ok;
  } catch {
    return false;
  }
}
const Pt = { id: "gemini", name: "\u2728 Gemini Flash (free tier)", supportsVision: true, models: [{ id: "gemini-2.0-flash-exp", name: "Gemini 2.0 Flash (m\xE1s nuevo)", vision: true }, { id: "gemini-1.5-flash", name: "Gemini 1.5 Flash (estable)", vision: true }, { id: "gemini-1.5-pro", name: "Gemini 1.5 Pro (mejor calidad)", vision: true }], defaultModel: "gemini-2.0-flash-exp", requiresKey: true, requiresLocal: false, async send({ msg: e, system: t, apiKey: i, model: o }) {
  var _a, _b, _c, _d, _e;
  const n = [{ text: e.text }];
  for (const a of e.images ?? []) n.push({ inline_data: { mime_type: a.mimeType, data: a.base64 } });
  const s = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${o}:generateContent?key=${i}`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ systemInstruction: { parts: [{ text: t }] }, contents: [{ role: "user", parts: n }], generationConfig: { temperature: 0.2, maxOutputTokens: 4096 } }) });
  if (!s.ok) throw new Error(`Gemini error ${s.status}: ${await s.text()}`);
  return ((_e = (_d = (_c = (_b = (_a = (await s.json()).candidates) == null ? void 0 : _a[0]) == null ? void 0 : _b.content) == null ? void 0 : _c.parts) == null ? void 0 : _d[0]) == null ? void 0 : _e.text) ?? "";
} }, Dt = { id: "groq", name: "\u26A1 Groq (r\xE1pido, free)", supportsVision: true, models: [{ id: "llama-3.3-70b-versatile", name: "Llama 3.3 70B (m\xE1s capaz)", vision: false }, { id: "llama-3.2-90b-vision-preview", name: "Llama 3.2 90B Vision", vision: true }, { id: "llama-3.1-70b-versatile", name: "Llama 3.1 70B", vision: false }, { id: "mixtral-8x7b-32768", name: "Mixtral 8x7B", vision: false }], defaultModel: "llama-3.3-70b-versatile", requiresKey: true, requiresLocal: false, async send({ msg: e, system: t, apiKey: i, model: o }) {
  var _a, _b, _c, _d;
  const n = [{ type: "text", text: e.text }];
  for (const a of e.images ?? []) n.push({ type: "image_url", image_url: { url: `data:${a.mimeType};base64,${a.base64}` } });
  const s = await fetch("https://api.groq.com/openai/v1/chat/completions", { method: "POST", headers: { Authorization: `Bearer ${i}`, "content-type": "application/json" }, body: JSON.stringify({ model: o, messages: [{ role: "system", content: t }, { role: "user", content: ((_a = e.images) == null ? void 0 : _a.length) ? n : e.text }], temperature: 0.2, max_tokens: 4096 }) });
  if (!s.ok) throw new Error(`Groq error ${s.status}: ${await s.text()}`);
  return ((_d = (_c = (_b = (await s.json()).choices) == null ? void 0 : _b[0]) == null ? void 0 : _c.message) == null ? void 0 : _d.content) ?? "";
} }, qt = { id: "openrouter", name: "\u{1F310} OpenRouter (modelos free)", supportsVision: true, models: [{ id: "deepseek/deepseek-chat-v3:free", name: "DeepSeek V3 free (excelente c\xF3digo)", vision: false }, { id: "meta-llama/llama-3.3-70b-instruct:free", name: "Llama 3.3 70B free", vision: false }, { id: "meta-llama/llama-3.2-90b-vision-instruct:free", name: "Llama 3.2 90B Vision free", vision: true }, { id: "google/gemini-2.0-flash-exp:free", name: "Gemini 2.0 Flash free", vision: true }, { id: "qwen/qwen-2.5-coder-32b-instruct:free", name: "Qwen 2.5 Coder 32B free", vision: false }], defaultModel: "deepseek/deepseek-chat-v3:free", requiresKey: true, requiresLocal: false, async send({ msg: e, system: t, apiKey: i, model: o }) {
  var _a, _b, _c, _d;
  const n = [{ type: "text", text: e.text }];
  for (const a of e.images ?? []) n.push({ type: "image_url", image_url: { url: `data:${a.mimeType};base64,${a.base64}` } });
  const s = await fetch("https://openrouter.ai/api/v1/chat/completions", { method: "POST", headers: { Authorization: `Bearer ${i}`, "content-type": "application/json", "HTTP-Referer": "https://giorgioburbanelli89.github.io/hekatan-struct/", "X-Title": "Hekatan Struct" }, body: JSON.stringify({ model: o, messages: [{ role: "system", content: t }, { role: "user", content: ((_a = e.images) == null ? void 0 : _a.length) ? n : e.text }], temperature: 0.2, max_tokens: 4096 }) });
  if (!s.ok) throw new Error(`OpenRouter error ${s.status}: ${await s.text()}`);
  return ((_d = (_c = (_b = (await s.json()).choices) == null ? void 0 : _b[0]) == null ? void 0 : _c.message) == null ? void 0 : _d.content) ?? "";
} }, xt = [At, Pt, Dt, qt];
function Ne(e) {
  return xt.find((t) => t.id === e) ?? null;
}
const ge = "hekatan_ai_", ie = { getKey(e) {
  return localStorage.getItem(`${ge}key_${e}`) ?? "";
}, setKey(e, t) {
  localStorage.setItem(`${ge}key_${e}`, t);
}, getProvider() {
  return localStorage.getItem(`${ge}provider`) ?? "ollama";
}, setProvider(e) {
  localStorage.setItem(`${ge}provider`, e);
}, getModel(e) {
  return localStorage.getItem(`${ge}model_${e}`) ?? "";
}, setModel(e, t) {
  localStorage.setItem(`${ge}model_${e}`, t);
} };
function Nt(e) {
  return new Promise((t, i) => {
    const o = new FileReader();
    o.onload = () => {
      const n = o.result, s = n.indexOf(",");
      t(s >= 0 ? n.slice(s + 1) : n);
    }, o.onerror = () => i(o.error), o.readAsDataURL(e);
  });
}
const Kt = `Eres un asistente experto en estructuras y FEM que ayuda al usuario a generar modelos
en Hekatan Struct. Tu salida debe ser SIEMPRE un script CLI ejecutable, sin
explicaciones extra (a menos que el user pida explicaci\xF3n).

DSL CLI de Hekatan:
\u2500 NODOS:        node <id>  <x>  <y>  <z>
\u2500 FRAMES:       frame <id>  <nodeI>  <nodeJ>  <E>  <A>  <Iy>  [Iz]  [J]
                Ejemplo: frame 1  1 2  25e6  0.16  0.0021
\u2500 SHELLS Q4:    shell <id>  <n1> <n2> <n3> <n4>  <thickness>  <E>
\u2500 APOYOS:       support <nodeId>  <Ux>  <Uy>  <Uz>  <Rx>  <Ry>  <Rz>
                (1 = restringido, 0 = libre)
\u2500 CARGAS:       load <nodeId>  <Fx>  <Fy>  <Fz>  <Mx>  <My>  <Mz>
\u2500 COMENTARIOS:  # comentario libre

Convenci\xF3n de ejes (Z-up):
\u2500 X: horizontal este
\u2500 Y: horizontal norte
\u2500 Z: vertical (gravedad = -Z)

Materiales t\xEDpicos (E = MPa = N/mm\xB2 \xD7 1e6 = Pa, en unidades SI):
\u2500 Hormig\xF3n: E = 25e9 Pa (25 GPa, f'c=210 kg/cm\xB2)
\u2500 Acero:    E = 210e9 Pa
\u2500 Madera:   E = 12e9 Pa (var\xEDa por especie)

Secciones t\xEDpicas:
\u2500 Columna 40\xD740: A=0.16 m\xB2, Iy=Iz=2.13e-3 m\u2074
\u2500 Viga 25\xD740:   A=0.10 m\xB2, Iy=1.33e-3, Iz=5.21e-4
\u2500 HEB-240:      A=0.0106, Iy=1.13e-4, Iz=3.92e-5
\u2500 IPE-300:      A=0.00538, Iy=8.36e-5, Iz=6.04e-6

Si el user pega una IMAGEN (croquis, plano, foto):
\u2500 Identific\xE1 geometr\xEDa, dimensiones, ejes, apoyos, cargas visibles
\u2500 Gener\xE1 el script CLI completo con coordenadas extra\xEDdas
\u2500 Si las dimensiones no son legibles, us\xE1 valores t\xEDpicos y comenta tu suposici\xF3n

REGLAS DE SALIDA:
1. Devuelve SOLO el script CLI, sin markdown, sin \`\`\`, sin comillas.
2. Cada l\xEDnea = un comando. Comentarios con #.
3. IDs sucesivos comenzando desde 1.
4. Si necesit\xE1s aclaraciones, ponelas como # comentario al final.

Ejemplo de salida t\xEDpica para "p\xF3rtico 1 vano, 4m vano, 3m altura, empotrado":
# P\xF3rtico 1 vano 4m \xD7 3m, empotrado en la base
node 1   0   0   0
node 2   0   0   3
node 3   4   0   3
node 4   4   0   0
frame 1  1 2   25e9  0.16  2.13e-3   # columna izq
frame 2  2 3   25e9  0.10  1.33e-3   # viga
frame 3  3 4   25e9  0.16  2.13e-3   # columna der
support 1  1 1 1 1 1 1
support 4  1 1 1 1 1 1`;
function $n(e) {
  var _a;
  const { parentPane: t, expanded: i = true, viewerElm: o, drawing: n, hooks: s } = e, r = t.addFolder({ title: "\u270F Herramientas CAD", expanded: i }), a = { select: "\u{1F5B1} Seleccionar \u2014 click sobre un nodo/elemento para seleccionarlo", node: "\u25CF Nodo \u2014 click crea nodo. Tipear: 5,3,2 (abs) | @1,0,0 (rel) | Enter", line: "\uFF0F L\xEDnea \u2014 click 2 puntos. Tipear: 5 (DDE) | 5,3,2 (abs) | @5,3,2 (rel) | @5<45 (polar) | @5<45<30 (esf\xE9rico) | Enter", polyline: "\u2312 Polil\xEDnea \u2014 click sucesivos. Tipear: 5 | 5,3 | @5,3 | @5<45. Right-click para terminar.", area: "\u25AD \xC1rea \u2014 4 clicks (CCW). Tipear: x,y o @dx,dy o @L<ang. Enter para confirmar coord.", col: "\u258C Columna 3D \u2014 tipe\xE1 altura (ej: 3) + Enter, despu\xE9s 1 click en la base.", wall: "\u25A5 Pared Q4 3D \u2014 tipe\xE1 altura + Enter, despu\xE9s 2 clicks. Crea shell Q4 vertical.", circle: "\u25CB C\xEDrculo \u2014 click 1=centro, click 2=radio. Tipear radio: 5 + Enter (en vez del 2do click).", arc: "\u2312 Arco (3 ptos) \u2014 click 1=inicio, 2=medio, 3=fin.", rect: "\u25AD Rect\xE1ngulo \u2014 click 2 esquinas. Tipear @5,3 para esquina opuesta relativa.", aux: "\u250A L\xEDnea auxiliar \u2014 referencia visual (no genera FEM). Mismo input que l\xEDnea.", auxp: "\u2726 Punto auxiliar \u2014 1 click crea un punto cyan (no genera nodo FEM, sirve para OSnap).", extend: "\u2197 Prolongar \u2014 click una l\xEDnea, click en la direcci\xF3n a extender.", chaflan: "\u25B1 Losa con chaflanes \u2014 click 2 esquinas. Radio en slider 'Chafl\xE1n r'.", delete: "\u{1F5D1} Borrar \u2014 hover sobre l\xEDnea/\xE1rea (se resalta en rojo) + click para eliminar.", select: "\u{1F5B1} Seleccionar \u2014 click sobre un elemento. Sin tool activo no se crean nodos." }, l = (c) => {
    var _a2, _b, _c, _d;
    try {
      (_b = (_a2 = window.__hekatanCadState) == null ? void 0 : _a2.setTool) == null ? void 0 : _b.call(_a2, c);
    } catch {
    }
    try {
      (_c = window.__hekatanCadResetPending) == null ? void 0 : _c.call(window);
    } catch {
    }
    window.__hekatanRectSelectExplicit = c === "select";
    const f = a[c] ?? `Tool ${c} activo`, I = document.getElementById("hk-cad-status");
    I && (I.textContent = f, window.__hekatanCadStatusText = f, (_d = window.__hekatanRefreshStatus) == null ? void 0 : _d.call(window)), console.log(`[CAD] Tool activo: ${c} \u2014 ${f}`);
  };
  r.addButton({ title: "\u{1F5B1} Seleccionar" }).on("click", () => l("select")), r.addButton({ title: "\u25CF Nodo" }).on("click", () => l("node")), r.addButton({ title: "\uFF0F L\xEDnea (frame)" }).on("click", () => l("line")), r.addButton({ title: "\u25A6 \xC1rea 4-clics (shell Q4)" }).on("click", () => l("area")), r.addButton({ title: "\u25AD \xC1rea rectangular (2 clics)" }).on("click", () => l("rectarea")), r.addButton({ title: "\u2B21 \xC1rea libre (pol\xEDgono \u2192 malla)" }).on("click", () => l("polyarea")), r.addButton({ title: "\u25E3 Plano inclinado (3 puntos)" }).on("click", () => l("plane3")), r.addButton({ title: "\u2B1B Plano XY (reset horizontal)" }).on("click", () => {
    var _a2;
    return (_a2 = window.__hekatanResetPlaneXY) == null ? void 0 : _a2.call(window);
  }), r.addButton({ title: "\u258C Columna 3D (1 click + altura)" }).on("click", () => l("col")), r.addButton({ title: "\u25A5 Pared Q4 3D (2 clicks + altura)" }).on("click", () => l("wall")), r.addButton({ title: "\u2312 Polil\xEDnea" }).on("click", () => l("polyline")), r.addButton({ title: "\u25AD Rect\xE1ngulo" }).on("click", () => l("rect")), r.addButton({ title: "\u25CB C\xEDrculo" }).on("click", () => l("circle")), r.addButton({ title: "\u2312 Arco (3 ptos)" }).on("click", () => l("arc")), r.addButton({ title: "\u250A L\xEDnea auxiliar" }).on("click", () => l("aux")), r.addButton({ title: "\u2726 Punto auxiliar" }).on("click", () => l("auxp")), r.addButton({ title: "\u2197 Prolongar l\xEDnea" }).on("click", () => l("extend")), r.addButton({ title: "\u25B1 Losa con chaflanes (rect + arcos)" }).on("click", () => l("chaflan")), r.addButton({ title: "\u{1F5D1} Borrar (hover + click)" }).on("click", () => l("delete"));
  const d = r.addFolder({ title: "\u{1F3AF} Modos de dibujo", expanded: true }), w = { ortho: false, polar: false, segs: 12 };
  d.addBinding(w, "ortho", { label: "ORTO (90\xB0)" }).on("change", (c) => {
    window.__hekatanOrtho = c.value;
  }), d.addBinding(w, "polar", { label: "POLAR (45\xB0)" }).on("change", (c) => {
    window.__hekatanPolar = c.value;
  }), d.addBinding(w, "segs", { min: 4, max: 64, step: 1, label: "Segmentos arc/c\xEDrc" }).on("change", (c) => {
    window.__hekatanArcSegs = c.value;
  });
  const k = { r: 1 };
  d.addBinding(k, "r", { min: 0.1, max: 5, step: 0.1, label: "Chafl\xE1n r (m)" }).on("change", (c) => {
    window.__hekatanChaflanR = c.value;
  }), window.__hekatanChaflanR = 1;
  const p = r.addFolder({ title: "\u{1F3AF} Object Snap (OSNAP)", expanded: false }), m = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  window.__hekatanOsnap = m, p.addBinding(m, "end", { label: "\u{1F534} Endpoint" }), p.addBinding(m, "mid", { label: "\u{1F7E1} Midpoint" }), p.addBinding(m, "node", { label: "\u{1F535} Node" }), p.addBinding(m, "cen", { label: "\u{1F7E2} Center" }), p.addBinding(m, "per", { label: "\u{1F7E3} Perpendicular" }), p.addBinding(m, "nea", { label: "\u{1F338} Nearest" }), p.addBinding(m, "int", { label: "\u{1F7E0} Intersection" });
  const E = r.addFolder({ title: "\u{1F4D0} Plano de trabajo", expanded: true }), y = { workZ: 0 }, g = (c, f, I = true) => {
    var _a2, _b;
    const O = (_b = (_a2 = window.__hekatanCadState) == null ? void 0 : _a2.get) == null ? void 0 : _b.call(_a2);
    O && (O.workPlane = c);
    const z = f ?? y.workZ;
    c === "xy" ? n.gridTarget.val = { position: [0, 0, z], rotation: [Math.PI / 2, 0, 0] } : c === "xz" ? n.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, 0] } : n.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, Math.PI / 2] }, I && (c === "xy" ? s.setView("plan") : c === "xz" ? s.setView("elevX") : s.setView("elevY"));
  };
  E.addButton({ title: "Plano XY (planta)" }).on("click", () => g("xy")), E.addButton({ title: "Plano XZ (elevaci\xF3n frontal)" }).on("click", () => g("xz")), E.addButton({ title: "Plano YZ (elevaci\xF3n lateral)" }).on("click", () => g("yz")), E.addButton({ title: "\u{1F9CA} Vista isom\xE9trica (3D)" }).on("click", () => s.setView("iso")), E.addButton({ title: "\u{1F500} Vista doble (planta + iso)" }).on("click", () => {
    s.splitState.enabled = !s.splitState.enabled, s.splitState.enabled && (s.splitState.secondary = 0, g("xy")), s.refreshSplit();
  });
  let h = false;
  E.addButton({ title: "\u{1F4D0} Mostrar/ocultar planos de ref. (Z=0,3,6,9,12)" }).on("click", () => {
    var _a2, _b;
    h = !h, h ? (_a2 = window.__hekatanShowRefPlanes) == null ? void 0 : _a2.call(window, [0, 3, 6, 9, 12], 20, 0, 0) : (_b = window.__hekatanHideRefPlanes) == null ? void 0 : _b.call(window);
  }), window.__hekatanShowOrthoPlanes = true;
  let x = true;
  E.addButton({ title: "\u25A6 Planos ref. ortogonales (XY/XZ/YZ del \xFAltimo pto)" }).on("click", () => {
    var _a2;
    x = !x;
    const c = window.__hekatanSetOrthoPlanes;
    typeof c == "function" ? c(x) : window.__hekatanShowOrthoPlanes = x, (_a2 = window.__hekatanRefreshStatus) == null ? void 0 : _a2.call(window);
  });
  const S = { orthoExt: 8, gridSize: 10 };
  E.addBinding(S, "orthoExt", { min: 0.1, max: 50, step: 0.1, label: "Tama\xF1o \xE1rea planos ref. (m)" }).on("change", (c) => {
    const f = window.__hekatanSetOrthoExt;
    typeof f == "function" ? f(c.value) : window.__hekatanOrthoExt = c.value;
  }), E.addBinding(S, "gridSize", { min: 1, max: 100, step: 1, label: "Dimensi\xF3n grid (m)" }).on("change", (c) => {
    const f = o.__settings;
    (f == null ? void 0 : f.gridSize) && (f.gridSize.val = c.value);
  }), window.__hekatanSnapEnabled = true;
  const u = { snapEnabled: true }, b = r.addBinding(u, "snapEnabled", { label: "\u{1F9F2} Grid snap (F9)" }).on("change", (c) => {
    window.__hekatanSnapEnabled = !!c.value;
  });
  window.__hekatanToggleSnap = () => {
    const c = window.__hekatanSnapEnabled === false;
    window.__hekatanSnapEnabled = c, u.snapEnabled = c;
    try {
      b.refresh();
    } catch {
    }
    let f = document.getElementById("hk-snap-toast");
    f || (f = document.createElement("div"), f.id = "hk-snap-toast", f.style.cssText = "position:fixed;top:14px;left:50%;transform:translateX(-50%);z-index:99999;padding:8px 18px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)", document.body.appendChild(f)), f.textContent = c ? "\u{1F9F2} Grid snap ON \u2014 el cursor se pega a la grilla" : "\u{1F193} Grid snap OFF \u2014 dibujo libre (cualquier punto)", f.style.background = c ? "rgba(37,99,235,0.95)" : "rgba(16,185,129,0.95)", f.style.opacity = "1";
    const I = window;
    clearTimeout(I.__hekatanSnapToastT), I.__hekatanSnapToastT = setTimeout(() => {
      f && (f.style.opacity = "0");
    }, 1600);
  }, window.__hekatanF9Bound || (window.__hekatanF9Bound = true, window.addEventListener("keydown", (c) => {
    var _a2;
    c.key === "F9" && (c.preventDefault(), (_a2 = window.__hekatanToggleSnap) == null ? void 0 : _a2.call(window));
  }, true));
  const v = { step: 0.5 };
  r.addBinding(v, "step", { label: "Paso snap (m)", options: { "0.01 m (mm)": 0.01, "0.05 m (5cm)": 0.05, "0.10 m": 0.1, "0.20 m": 0.2, "0.25 m": 0.25, "0.50 m": 0.5, "1.00 m": 1, "2.00 m": 2, "5.00 m": 5 } }).on("change", (c) => {
    var _a2, _b;
    const f = Number(c.value);
    window.__hekatanSnap2D = f;
    const I = (_b = (_a2 = window.__hekatanCadState) == null ? void 0 : _a2.get) == null ? void 0 : _b.call(_a2);
    I && (I.snap = f);
  });
  const C = { snap2D: 0.5, snap3D: 0.25, workZ: 0 };
  r.addBinding(C, "snap2D", { min: 0, max: 5, step: 0.05, label: "Snap 2D fino (m)" }).on("change", (c) => {
    var _a2, _b;
    const f = (_b = (_a2 = window.__hekatanCadState) == null ? void 0 : _a2.get) == null ? void 0 : _b.call(_a2);
    f && (f.snap = c.value), window.__hekatanSnap2D = c.value;
  }), r.addBinding(C, "snap3D", { min: 0, max: 5, step: 0.05, label: "Snap 3D (m)" }).on("change", (c) => {
    window.__hekatanSnap3D = c.value;
  }), r.addBinding(y, "workZ", { min: -10, max: 50, step: 0.1, label: "Cota Z (m)" }).on("change", (c) => {
    var _a2, _b, _c, _d, _e2, _f;
    const f = (_b = (_a2 = window.__hekatanCadState) == null ? void 0 : _a2.get) == null ? void 0 : _b.call(_a2);
    f && (f.workZ = c.value), (((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.workPlane) ?? "xz") === "xy" && g("xy", c.value, false), (_f = s.onRebuild) == null ? void 0 : _f.call(s);
  });
  const _ = r.addFolder({ title: "\u{1F6E0} Acciones", expanded: true });
  _.addButton({ title: "\u23F9 Finalizar dibujo (Esc)" }).on("click", () => {
    var _a2, _b, _c;
    (_a2 = window.__hekatanFinalizeDraw) == null ? void 0 : _a2.call(window), (_c = (_b = window.__hekatanCadMouse) == null ? void 0 : _b.cancel) == null ? void 0 : _c.call(_b);
  }), _.addButton({ title: "\u{1F5D1} Limpiar todo" }).on("click", () => {
    var _a2, _b, _c;
    (_b = (_a2 = window.__hekatanCadState) == null ? void 0 : _a2.reset) == null ? void 0 : _b.call(_a2), n.points.val = [], n.polylines.val = [[]], n.areas.val = [], n.auxLines.val = [], (_c = s.onRebuild) == null ? void 0 : _c.call(s);
  }), _.addButton({ title: "\u{1F4CB} Copiar comandos a CLI" }).on("click", () => {
    var _a2;
    const c = window.__hekatanCliScript ?? "";
    (_a2 = navigator.clipboard) == null ? void 0 : _a2.writeText(c), alert("Comandos copiados al portapapeles. Pega en cli-modeler para editar/correr el FEM.");
  });
  const M = r.addFolder({ title: "\u{1F3E2} Plantas de pisos", expanded: false });
  [0, 3, 6, 9, 12].forEach((c) => {
    M.addButton({ title: `Piso a Z=${c}m` }).on("click", () => {
      var _a2, _b;
      n.gridTarget.val = { position: [0, 0, c], rotation: [Math.PI / 2, 0, 0] };
      const f = (_b = (_a2 = window.__hekatanCadState) == null ? void 0 : _a2.get) == null ? void 0 : _b.call(_a2);
      f && (f.workZ = c);
    });
  });
  const $ = r.addFolder({ title: "\u{1F4CD} Ejes y Niveles (Revit)", expanded: false }), L = [], j = [];
  window.__hekatanAxisGrids = L, window.__hekatanLevels = j;
  const B = () => {
    var _a2;
    return ((_a2 = o.__ctx) == null ? void 0 : _a2.scene) ?? null;
  }, N = () => {
    var _a2;
    return ((_a2 = o.__ctx) == null ? void 0 : _a2.render) ?? null;
  }, W = () => {
    var _a2;
    return ((_a2 = o.__ctx) == null ? void 0 : _a2.camera) ?? null;
  }, V = new Te();
  V.name = "axis-grids";
  const F = new Te();
  F.name = "levels";
  const Q = 0.025, ne = 0.083, G = 0.021, ee = () => {
    const c = W();
    c && (V.traverse((f) => {
      var _a2;
      if (!((_a2 = f.userData) == null ? void 0 : _a2.isAxisLabel)) return;
      const I = c.position.distanceTo(f.position), O = Math.max(0.1, I * Q);
      f.scale.set(O, O, 1);
    }), F.traverse((f) => {
      var _a2;
      if (!((_a2 = f.userData) == null ? void 0 : _a2.isLevelLabel)) return;
      const I = c.position.distanceTo(f.position);
      f.scale.set(I * ne, I * G, 1);
    }));
  }, Ge = (_a = o.__ctx) == null ? void 0 : _a.controls;
  (Ge == null ? void 0 : Ge.addEventListener) && Ge.addEventListener("change", ee);
  const Ye = () => {
    const c = B();
    return c ? (c.children.includes(V) || c.add(V), c.children.includes(F) || c.add(F), true) : false;
  }, Ee = () => {
    var _a2, _b, _c;
    if (Ye()) {
      for (; V.children.length; ) (_b = (_a2 = V.children.pop()).traverse) == null ? void 0 : _b.call(_a2, (f) => {
        var _a3, _b2, _c2, _d, _e2, _f, _g;
        (_b2 = (_a3 = f.geometry) == null ? void 0 : _a3.dispose) == null ? void 0 : _b2.call(_a3), (_d = (_c2 = f.material) == null ? void 0 : _c2.dispose) == null ? void 0 : _d.call(_c2), (_g = (_f = (_e2 = f.material) == null ? void 0 : _e2.map) == null ? void 0 : _f.dispose) == null ? void 0 : _g.call(_f);
      });
      for (const c of L) V.add(Bt(c));
      ee(), (_c = N()) == null ? void 0 : _c();
    }
  }, be = () => {
    var _a2, _b, _c;
    if (Ye()) {
      for (; F.children.length; ) (_b = (_a2 = F.children.pop()).traverse) == null ? void 0 : _b.call(_a2, (f) => {
        var _a3, _b2, _c2, _d, _e2, _f, _g;
        (_b2 = (_a3 = f.geometry) == null ? void 0 : _a3.dispose) == null ? void 0 : _b2.call(_a3), (_d = (_c2 = f.material) == null ? void 0 : _c2.dispose) == null ? void 0 : _d.call(_c2), (_g = (_f = (_e2 = f.material) == null ? void 0 : _e2.map) == null ? void 0 : _f.dispose) == null ? void 0 : _g.call(_f);
      });
      for (const c of j) F.add(Rt(c));
      ee(), (_c = N()) == null ? void 0 : _c();
    }
  };
  window.__hekatanAxisCommit = (c, f, I) => {
    let O;
    if (I) {
      const R = L.filter((A) => /^\d+$/.test(A.label));
      O = String(R.length + 1);
    } else {
      const R = L.filter((A) => !/^\d+$/.test(A.label)).map((A) => A.label);
      O = Tt(R);
    }
    L.push({ label: O, start: [c[0], c[1], c[2]], end: [f[0], f[1], f[2]] }), Ee();
    const z = window.__hekatanAxisDraw;
    return z && (z.pendingStart = null), O;
  }, $.addButton({ title: "\u2795 Eje (letra A,B,C...)" }).on("click", () => {
    var _a2, _b;
    window.__hekatanAxisDraw = { mode: "letter", pendingStart: null };
    try {
      (_b = (_a2 = window.__hekatanCadState) == null ? void 0 : _a2.setTool) == null ? void 0 : _b.call(_a2, "axis");
    } catch {
    }
    const c = document.getElementById("hk-cad-status");
    c && (c.textContent = "\u{1F4CD} Eje (letra) \u2014 click 1=inicio, click 2=fin (con burbuja A/B/C...)");
  }), $.addButton({ title: "\u2795 Eje (n\xFAmero 1,2,3...)" }).on("click", () => {
    var _a2, _b;
    window.__hekatanAxisDraw = { mode: "number", pendingStart: null };
    try {
      (_b = (_a2 = window.__hekatanCadState) == null ? void 0 : _a2.setTool) == null ? void 0 : _b.call(_a2, "axis");
    } catch {
    }
    const c = document.getElementById("hk-cad-status");
    c && (c.textContent = "\u{1F4CD} Eje (n\xFAmero) \u2014 click 1=inicio, click 2=fin (con burbuja 1/2/3...)");
  }), $.addButton({ title: "\u{1F5D1} Limpiar ejes" }).on("click", () => {
    L.length = 0, Ee();
  });
  const Ze = { z: 0 };
  $.addBinding(Ze, "z", { min: -10, max: 50, step: 0.1, label: "Cota nivel (m)" }), $.addButton({ title: "\u2795 Agregar nivel a la cota Z elegida" }).on("click", () => {
    const c = Ze.z, f = jt(j, c);
    j.push({ label: f, z: c }), be();
  }), $.addButton({ title: "\u{1F3E2} Niveles t\xEDpicos (0,3,6,9,12 m)" }).on("click", () => {
    [0, 3, 6, 9, 12].forEach((c) => {
      const f = `N+${c.toFixed(2)}`;
      j.some((I) => I.z === c) || j.push({ label: f, z: c });
    }), be();
  }), $.addButton({ title: "\u{1F5D1} Limpiar niveles" }).on("click", () => {
    j.length = 0, be();
  }), window.__hekatanRefreshAxes = Ee, window.__hekatanRefreshLevels = be, setTimeout(() => {
    Ee(), be();
  }, 200);
  const P = r.addFolder({ title: "\u{1F3AF} Acciones de selecci\xF3n", expanded: false }), Xe = { divisions: 4 };
  P.addBinding(Xe, "divisions", { min: 2, max: 50, step: 1, label: "Divisiones" }), P.addButton({ title: "\u2702 Mallar l\xEDnea seleccionada (N divisiones)" }).on("click", () => {
    var _a2, _b;
    const c = window.__hekatanSelection;
    if (!c || c.size === 0) {
      alert("Seleccion\xE1 un segmento primero (click sobre la l\xEDnea).");
      return;
    }
    const f = Math.max(2, Math.round(Xe.divisions)), I = n.points, O = n.polylines;
    if (!I || !O) return;
    const z = [...I.rawVal], R = O.rawVal.map((X) => [...X]);
    let A = 0;
    for (const X of c) {
      const K = X.split(":");
      if (K[0] !== "seg") continue;
      const te = +K[1], H = +K[2], J = R[te];
      if (!J) continue;
      const q = z[J[H]], U = z[J[H + 1]];
      if (!q || !U) continue;
      const he = [];
      for (let de = 1; de < f; de++) {
        const ue = de / f, ve = [q[0] + ue * (U[0] - q[0]), q[1] + ue * (U[1] - q[1]), q[2] + ue * (U[2] - q[2])];
        z.push(ve), he.push(z.length - 1);
      }
      J.splice(H + 1, 0, ...he), A++;
    }
    if (A === 0) {
      alert("La selecci\xF3n no contiene segmentos. Click sobre l\xEDneas (no nodos).");
      return;
    }
    I.val = z, O.val = R, c.clear(), (_a2 = window.__hekatanRefreshSelection) == null ? void 0 : _a2.call(window), (_b = s.onRebuild) == null ? void 0 : _b.call(s);
  });
  const Y = { Ux: true, Uy: true, Uz: true, Rx: false, Ry: false, Rz: false };
  P.addBinding(Y, "Ux", { label: "DOF Ux (restringido)" }), P.addBinding(Y, "Uy", { label: "DOF Uy (restringido)" }), P.addBinding(Y, "Uz", { label: "DOF Uz (restringido)" }), P.addBinding(Y, "Rx", { label: "DOF Rx (restringido)" }), P.addBinding(Y, "Ry", { label: "DOF Ry (restringido)" }), P.addBinding(Y, "Rz", { label: "DOF Rz (restringido)" }), P.addButton({ title: "\u{1F4CC} Aplicar apoyo a nodos seleccionados" }).on("click", () => {
    var _a2;
    const c = window.__hekatanSelection;
    if (!c || c.size === 0) {
      alert("Seleccion\xE1 un nodo primero (click sobre el punto).");
      return;
    }
    const f = window.__hekatanCadSupports ?? {}, I = [Y.Ux, Y.Uy, Y.Uz, Y.Rx, Y.Ry, Y.Rz];
    let O = 0;
    for (const z of c) {
      const R = z.split(":");
      if (R[0] !== "pt") continue;
      const A = +R[1];
      f[A] = [...I], O++;
    }
    if (window.__hekatanCadSupports = f, O === 0) {
      alert("La selecci\xF3n no contiene nodos. Click sobre los puntos primero.");
      return;
    }
    (_a2 = s.onRebuild) == null ? void 0 : _a2.call(s), alert(`Aplicado apoyo [Ux=${I[0]}, Uy=${I[1]}, Uz=${I[2]}, Rx=${I[3]}, Ry=${I[4]}, Rz=${I[5]}] a ${O} nodo(s).`);
  }), P.addButton({ title: "\u{1F513} Liberar apoyos de nodos seleccionados" }).on("click", () => {
    var _a2;
    const c = window.__hekatanSelection;
    if (!c) return;
    const f = window.__hekatanCadSupports ?? {};
    let I = 0;
    for (const O of c) {
      const z = O.split(":");
      if (z[0] !== "pt") continue;
      const R = +z[1];
      f[R] && (delete f[R], I++);
    }
    window.__hekatanCadSupports = f, (_a2 = s.onRebuild) == null ? void 0 : _a2.call(s), I === 0 && alert("Selecci\xF3n no contiene nodos con apoyo.");
  }), P.addButton({ title: "\u{1F5D1} Limpiar selecci\xF3n" }).on("click", () => {
    var _a2;
    (_a2 = window.__hekatanClearSelection) == null ? void 0 : _a2.call(window);
  });
  const Z = { dirX: 0, dirY: 0, dirZ: 1, height: 3 };
  P.addBinding(Z, "height", { min: 0.1, max: 50, step: 0.1, label: "Altura extrusi\xF3n (m)" }), P.addBinding(Z, "dirX", { min: -1, max: 1, step: 1, label: "Dir X" }), P.addBinding(Z, "dirY", { min: -1, max: 1, step: 1, label: "Dir Y" }), P.addBinding(Z, "dirZ", { min: -1, max: 1, step: 1, label: "Dir Z" }), P.addButton({ title: "\u2B06 Extruir nodo\u2192frame (1 nodo seleccionado + altura)" }).on("click", () => {
    var _a2, _b;
    const c = window.__hekatanSelection;
    if (!c || c.size === 0) {
      alert("Seleccion\xE1 al menos 1 nodo (click sobre un punto).");
      return;
    }
    const f = [Z.dirX, Z.dirY, Z.dirZ], I = Math.hypot(...f);
    if (I < 0.01) {
      alert("Dir X/Y/Z son todos cero. Eleg\xED al menos uno (default +Z = vertical).");
      return;
    }
    const O = f.map((H) => H / I), z = Z.height, R = n.points, A = n.polylines;
    if (!R || !A) return;
    const X = [...R.rawVal], K = A.rawVal.map((H) => [...H]);
    let te = 0;
    for (const H of c) {
      const J = H.split(":");
      if (J[0] !== "pt") continue;
      const q = +J[1], U = X[q];
      if (!U) continue;
      const he = [U[0] + O[0] * z, U[1] + O[1] * z, U[2] + O[2] * z];
      X.push(he);
      const de = X.length - 1;
      K.push([q, de]), te++;
    }
    if (te === 0) {
      alert("La selecci\xF3n no contiene nodos.");
      return;
    }
    R.val = X, A.val = K, c.clear(), (_a2 = window.__hekatanRefreshSelection) == null ? void 0 : _a2.call(window), (_b = s.onRebuild) == null ? void 0 : _b.call(s), alert(`\u2713 ${te} nodo(s) extruidos a frames de altura ${z}m en direcci\xF3n (${O.map((H) => H.toFixed(2)).join(",")}).`);
  });
  const Ce = r.addFolder({ title: "\u{1F4AC} AI Assistant (gratis)", expanded: false }), T = { providerId: ie.getProvider(), apiKey: "", model: "", images: [], prompt: "", response: "" };
  T.apiKey = ie.getKey(T.providerId);
  const We = {};
  for (const c of xt) We[c.name] = c.id;
  const Je = { id: T.providerId };
  Ce.addBinding(Je, "id", { label: "Provider", options: We }).on("change", (c) => {
    T.providerId = c.value, ie.setProvider(T.providerId), T.apiKey = ie.getKey(T.providerId), qe();
  });
  const Re = { id: "" };
  let _e = null;
  const Ae = { key: "" };
  let ye = null;
  const oe = document.createElement("div");
  oe.style.cssText = ["padding:8px", "display:flex", "flex-direction:column", "gap:6px", "font-family:Consolas,monospace", "font-size:12px"].join(";") + ";";
  const D = document.createElement("div");
  D.style.cssText = ["min-height:50px", "border:1.5px dashed #555", "border-radius:4px", "padding:6px", "display:flex", "flex-wrap:wrap", "gap:4px", "align-items:center", "color:#888"].join(";") + ";", D.textContent = "\u{1F4CB} Pega/arrastra im\xE1genes ac\xE1 (Ctrl+V)", D.tabIndex = 0;
  const re = document.createElement("textarea");
  re.placeholder = "Pedile al AI: 'Crea un p\xF3rtico de 3 vanos de 5m, altura 3m, columnas 40\xD740, vigas 25\xD740, empotrado'", re.style.cssText = ["width:100%", "min-height:80px", "padding:6px", "background:#1a1a1a", "color:#ddd", "border:1px solid #444", "border-radius:4px", "font-family:inherit", "font-size:12px", "resize:vertical", "box-sizing:border-box"].join(";") + ";";
  const Se = document.createElement("div");
  Se.style.cssText = "display:flex;gap:6px;";
  const ae = document.createElement("button");
  ae.textContent = "\u25B6 Generar", ae.style.cssText = "flex:1;padding:6px;background:#22d3ee;color:#000;border:none;border-radius:4px;cursor:pointer;font-weight:bold;";
  const $e = document.createElement("button");
  $e.textContent = "\u2717 Limpiar im\xE1genes", $e.style.cssText = "padding:6px 10px;background:#444;color:#ddd;border:none;border-radius:4px;cursor:pointer;", Se.appendChild(ae), Se.appendChild($e);
  const se = document.createElement("textarea");
  se.placeholder = "La respuesta del AI aparecer\xE1 ac\xE1...", se.readOnly = true, se.style.cssText = re.style.cssText + "min-height:120px;background:#0a0a0a;";
  const pe = document.createElement("button");
  pe.textContent = "\u2713 Ejecutar como comandos CLI", pe.style.cssText = "padding:6px;background:#34d399;color:#000;border:none;border-radius:4px;cursor:pointer;font-weight:bold;", pe.disabled = true;
  const we = document.createElement("div");
  we.style.cssText = "color:#888;font-size:11px;line-height:1.4;", oe.appendChild(D), oe.appendChild(re), oe.appendChild(Se), oe.appendChild(se), oe.appendChild(pe), oe.appendChild(we), setTimeout(() => {
    var _a2, _b;
    return (_b = (_a2 = Ce.element) == null ? void 0 : _a2.appendChild) == null ? void 0 : _b.call(_a2, oe);
  }, 50);
  const Pe = async (c) => {
    const f = await Nt(c);
    T.images.push({ mimeType: c.type, base64: f }), De();
  }, De = () => {
    if (D.innerHTML = "", T.images.length === 0) {
      D.style.color = "#888", D.textContent = "\u{1F4CB} Pega/arrastra im\xE1genes ac\xE1 (Ctrl+V)";
      return;
    }
    D.style.color = "#ddd", T.images.forEach((f, I) => {
      const O = document.createElement("div");
      O.style.cssText = "position:relative;display:inline-block;";
      const z = document.createElement("img");
      z.src = `data:${f.mimeType};base64,${f.base64}`, z.style.cssText = "width:60px;height:60px;object-fit:cover;border:1px solid #666;border-radius:3px;";
      const R = document.createElement("button");
      R.textContent = "\xD7", R.style.cssText = "position:absolute;top:-4px;right:-4px;width:16px;height:16px;border-radius:50%;background:#ef4444;color:#fff;border:none;cursor:pointer;font-size:11px;line-height:1;padding:0;", R.onclick = () => {
        T.images.splice(I, 1), De();
      }, O.appendChild(z), O.appendChild(R), D.appendChild(O);
    });
    const c = document.createElement("span");
    c.style.cssText = "color:#888;font-size:11px;margin-left:6px;", c.textContent = `${T.images.length} imagen(es)`, D.appendChild(c);
  };
  D.addEventListener("paste", async (c) => {
    var _a2, _b;
    for (const f of ((_a2 = c.clipboardData) == null ? void 0 : _a2.items) ?? []) if ((_b = f.type) == null ? void 0 : _b.startsWith("image/")) {
      const I = f.getAsFile();
      I && await Pe(I);
    }
  }), re.addEventListener("paste", async (c) => {
    var _a2, _b;
    for (const f of ((_a2 = c.clipboardData) == null ? void 0 : _a2.items) ?? []) if ((_b = f.type) == null ? void 0 : _b.startsWith("image/")) {
      c.preventDefault();
      const I = f.getAsFile();
      I && await Pe(I);
    }
  }), D.addEventListener("dragover", (c) => {
    c.preventDefault(), D.style.borderColor = "#22d3ee";
  }), D.addEventListener("dragleave", () => {
    D.style.borderColor = "#555";
  }), D.addEventListener("drop", async (c) => {
    var _a2;
    c.preventDefault(), D.style.borderColor = "#555";
    for (const f of Array.from(((_a2 = c.dataTransfer) == null ? void 0 : _a2.files) ?? [])) f.type.startsWith("image/") && await Pe(f);
  }), $e.onclick = () => {
    T.images = [], De();
  };
  const qe = () => {
    const c = Ne(T.providerId);
    if (!c) return;
    _e && _e.dispose();
    const f = {};
    for (const z of c.models) f[z.name] = z.id;
    const I = ie.getModel(c.id);
    if (Re.id = I || c.defaultModel, T.model = Re.id, _e = Ce.addBinding(Re, "id", { label: "Modelo", options: f }), _e.on("change", (z) => {
      T.model = z.value, ie.setModel(c.id, z.value);
    }), ye) {
      try {
        ye.dispose();
      } catch {
      }
      ye = null;
    }
    c.requiresKey ? (Ae.key = ie.getKey(c.id), ye = Ce.addBinding(Ae, "key", { label: "API Key" }), ye.on("change", (z) => {
      ie.setKey(c.id, z.value), T.apiKey = z.value;
    }), T.apiKey = Ae.key) : T.apiKey = "";
    const O = [];
    c.id === "ollama" ? (O.push("Requiere Ollama corriendo en localhost:11434."), O.push("Instalar: ollama.com \u2192 ollama pull qwen2.5-coder:7b")) : c.id === "gemini" ? (O.push("API key gratis: aistudio.google.com/apikey"), O.push("Free tier: 15 req/min, 1M tok/d\xEDa.")) : c.id === "groq" ? (O.push("API key gratis: console.groq.com/keys"), O.push("Inferencia ~500 tok/seg.")) : c.id === "openrouter" && (O.push("API key: openrouter.ai/keys (modelos free disponibles)."), O.push("Sufijo :free indica modelo gratuito.")), we.textContent = O.join(`
`);
  };
  qe(), at().then((c) => {
    !c && T.providerId === "ollama" ? !!localStorage.getItem("hekatan_ai_provider") ? we.textContent = "\u26A0 Ollama no responde en localhost:11434. Inici\xE1 Ollama o cambi\xE1 a otro provider." : (console.log("[AI] Ollama no detectado \u2192 default a Gemini Flash"), T.providerId = "gemini", Je.id = "gemini", ie.setProvider("gemini"), qe(), we.textContent = "\u2139 Ollama no est\xE1 corriendo \u2014 usando Gemini Flash. Peg\xE1 tu API key gratis (aistudio.google.com/apikey) o instal\xE1 Ollama.") : c && T.providerId === "ollama" && ot().then((f) => {
      f.length > 0 && console.log("[AI] Ollama OK. Modelos instalados:", f);
    });
  });
  const fe = document.createElement("button");
  return fe.textContent = "\u{1F50C} Test conexi\xF3n", fe.style.cssText = "padding:4px 8px;background:#444;color:#ddd;border:none;border-radius:3px;cursor:pointer;font-size:11px;margin-top:4px;", fe.onclick = async () => {
    const c = Ne(T.providerId);
    if (c) {
      fe.textContent = "\u23F3 Probando...";
      try {
        if (c.id === "ollama") if (await at()) {
          const I = await ot();
          alert(`\u2713 Ollama OK. ${I.length} modelo(s) instalados:
${I.join(`
`)}`);
        } else alert(`\u2717 Ollama no responde en localhost:11434.

Inici\xE1 Ollama o instalalo desde ollama.com`);
        else if (!T.apiKey) alert(`Peg\xE1 tu API key de ${c.name} primero.`);
        else {
          const f = await c.send({ msg: { text: "Responde solo: OK" }, system: "Sos un test de conexi\xF3n. Responde solo: OK", apiKey: T.apiKey, model: T.model });
          alert(`\u2713 ${c.name} respondi\xF3: "${f.slice(0, 100)}"`);
        }
      } catch (f) {
        alert(`\u2717 Error: ${(f == null ? void 0 : f.message) ?? f}`);
      } finally {
        fe.textContent = "\u{1F50C} Test conexi\xF3n";
      }
    }
  }, oe.appendChild(fe), ae.onclick = async () => {
    const c = Ne(T.providerId);
    if (!c) {
      alert("Provider no encontrado.");
      return;
    }
    if (c.requiresKey && !T.apiKey) {
      alert(`${c.name} requiere API key. Pegala en el campo de arriba.`);
      return;
    }
    if (!T.prompt.trim() && T.images.length === 0) {
      alert("Escrib\xED un prompt o peg\xE1 una imagen.");
      return;
    }
    ae.disabled = true, ae.textContent = "\u23F3 Generando...", se.value = "Esperando respuesta del modelo...", pe.disabled = true;
    try {
      const f = await c.send({ msg: { text: T.prompt, images: T.images }, system: Kt, apiKey: T.apiKey, model: T.model });
      T.response = f;
      const I = f.replace(/^```[a-z]*\n?/i, "").replace(/\n?```\s*$/, "").trim();
      se.value = I, se.readOnly = false, pe.disabled = false;
    } catch (f) {
      se.value = `\u274C Error: ${(f == null ? void 0 : f.message) ?? f}`;
    } finally {
      ae.disabled = false, ae.textContent = "\u25B6 Generar";
    }
  }, re.addEventListener("input", () => {
    T.prompt = re.value;
  }), re.addEventListener("keydown", (c) => {
    (c.ctrlKey || c.metaKey) && c.key === "Enter" && (c.preventDefault(), ae.click());
  }), pe.onclick = () => {
    var _a2, _b;
    const c = se.value.trim();
    if (!c) return;
    window.__hekatanCliScript = c;
    const f = window.__hekatanCliExecute;
    typeof f == "function" ? f() : ((_a2 = navigator.clipboard) == null ? void 0 : _a2.writeText(c), alert("Script copiado al clipboard. Pegalo en el panel CLI Comandos para ejecutarlo.")), (_b = s.onRebuild) == null ? void 0 : _b.call(s);
  }, P.addButton({ title: "\u2B06 Extruir frame\u2192\xE1rea (1+ segmentos seleccionados + altura)" }).on("click", () => {
    var _a2, _b;
    const c = window.__hekatanSelection;
    if (!c || c.size === 0) {
      alert("Seleccion\xE1 al menos 1 segmento (click sobre una l\xEDnea).");
      return;
    }
    const f = [Z.dirX, Z.dirY, Z.dirZ], I = Math.hypot(...f);
    if (I < 0.01) {
      alert("Dir X/Y/Z son todos cero.");
      return;
    }
    const O = f.map((q) => q / I), z = Z.height, R = n.points, A = n.polylines, X = n.areas;
    if (!R || !A || !X) return;
    const K = [...R.rawVal], te = A.rawVal.map((q) => [...q]), H = [...X.rawVal];
    let J = 0;
    for (const q of c) {
      const U = q.split(":");
      if (U[0] !== "seg") continue;
      const he = +U[1], de = +U[2], ue = te[he];
      if (!ue) continue;
      const ve = ue[de], Qe = ue[de + 1], Ie = K[ve], Me = K[Qe];
      if (!Ie || !Me) continue;
      const vt = [Ie[0] + O[0] * z, Ie[1] + O[1] * z, Ie[2] + O[2] * z], kt = [Me[0] + O[0] * z, Me[1] + O[1] * z, Me[2] + O[2] * z];
      K.push(vt);
      const Et = K.length - 1;
      K.push(kt);
      const Ct = K.length - 1, _t = te.length;
      te.push([ve, Qe, Ct, Et, ve]), H.push(_t), J++;
    }
    if (J === 0) {
      alert("La selecci\xF3n no contiene segmentos.");
      return;
    }
    R.val = K, A.val = te, X.val = H, c.clear(), (_a2 = window.__hekatanRefreshSelection) == null ? void 0 : _a2.call(window), (_b = s.onRebuild) == null ? void 0 : _b.call(s), alert(`\u2713 ${J} segmento(s) extruido(s) a shells Q4 verticales de altura ${z}m.`);
  }), { fCad: r };
}
function Be(e, t = e) {
  return Array.from({ length: e }, () => new Array(t).fill(0));
}
function Ht(e) {
  const t = e.length, i = e[0].length, o = Be(i, t);
  for (let n = 0; n < t; n++) for (let s = 0; s < i; s++) o[s][n] = e[n][s];
  return o;
}
function st(e, t) {
  const i = e.length, o = t[0].length, n = t.length, s = Be(i, o);
  for (let r = 0; r < i; r++) for (let a = 0; a < o; a++) {
    let l = 0;
    for (let d = 0; d < n; d++) l += e[r][d] * t[d][a];
    s[r][a] = l;
  }
  return s;
}
function Ut(e, t) {
  const { E: i, G: o, A: n, Iy: s, Iz: r, J: a } = e, l = Be(12), d = i * n / t;
  l[0][0] = d, l[6][6] = d, l[0][6] = -d, l[6][0] = -d;
  const w = o * a / t;
  l[3][3] = w, l[9][9] = w, l[3][9] = -w, l[9][3] = -w;
  const k = t, p = i * r, m = 12 * p / k ** 3, E = 6 * p / k ** 2, y = 4 * p / k, g = 2 * p / k;
  l[1][1] = m, l[1][5] = E, l[1][7] = -m, l[1][11] = E, l[5][1] = E, l[5][5] = y, l[5][7] = -E, l[5][11] = g, l[7][1] = -m, l[7][5] = -E, l[7][7] = m, l[7][11] = -E, l[11][1] = E, l[11][5] = g, l[11][7] = -E, l[11][11] = y;
  const h = i * s, x = 12 * h / k ** 3, S = 6 * h / k ** 2, u = 4 * h / k, b = 2 * h / k;
  return l[2][2] = x, l[2][4] = -S, l[2][8] = -x, l[2][10] = -S, l[4][2] = -S, l[4][4] = u, l[4][8] = S, l[4][10] = b, l[8][2] = -x, l[8][4] = S, l[8][8] = x, l[8][10] = S, l[10][2] = -S, l[10][4] = b, l[10][8] = S, l[10][10] = u, l;
}
function Vt(e, t) {
  const i = t[0] - e[0], o = t[1] - e[1], n = t[2] - e[2], s = Math.sqrt(i * i + o * o + n * n);
  if (s < 1e-12) throw new Error("Element length is zero");
  const r = [i / s, o / s, n / s], a = Math.abs(r[0]) < 1e-6 && Math.abs(r[1]) < 1e-6;
  let l;
  if (a) l = [0, 1, 0];
  else {
    const w = [0, 0, 1], k = r[1] * w[2] - r[2] * w[1], p = r[2] * w[0] - r[0] * w[2], m = r[0] * w[1] - r[1] * w[0], E = Math.sqrt(k * k + p * p + m * m), y = [k / E, p / E, m / E];
    l = [y[1] * r[2] - y[2] * r[1], y[2] * r[0] - y[0] * r[2], y[0] * r[1] - y[1] * r[0]];
  }
  const d = [r[1] * l[2] - r[2] * l[1], r[2] * l[0] - r[0] * l[2], r[0] * l[1] - r[1] * l[0]];
  return { L: s, R: [r, l, d] };
}
function Gt(e) {
  const t = Be(12);
  for (let i = 0; i < 4; i++) {
    const o = i * 3;
    for (let n = 0; n < 3; n++) for (let s = 0; s < 3; s++) t[o + n][o + s] = e[n][s];
  }
  return t;
}
function bt(e, t) {
  const { L: i, R: o } = Vt(e.ni, e.nj), n = Ut(t, i), s = Gt(o), r = st(st(Ht(s), n), s);
  return { L: i, K_local: n, T: s, K_global: r, R: o };
}
function it(e, t = 4) {
  return e.length, e.map((i) => i.map((o) => {
    if (Math.abs(o) < 1e-12) return "0".padStart(12);
    const n = Math.abs(o);
    return n >= 1e5 || n < 1e-3 ? o.toExponential(t).padStart(12) : o.toFixed(t).padStart(12);
  }).join(" ")).join(`
`);
}
let Le = null;
function Yt() {
  return Le || (Le = new Promise((e, t) => {
    if (window.katex) {
      e(window.katex);
      return;
    }
    const i = document.createElement("link");
    i.rel = "stylesheet", i.href = "https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css", document.head.appendChild(i);
    const o = document.createElement("script");
    o.src = "https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js", o.onload = () => e(window.katex), o.onerror = () => t(new Error("Failed to load KaTeX")), document.head.appendChild(o);
  }), Le);
}
async function Zt(e, t, i) {
  e.innerHTML = "";
  const o = t.nodes[0], n = t.nodes[1], s = [{ title: "1. Geometr\xEDa del elemento", content: ["Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:", "\\text{DOFs} = [u_x, u_y, u_z, \\theta_x, \\theta_y, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}", `\\text{Nodo } i = (${o[0].toFixed(2)}, ${o[1].toFixed(2)}, ${o[2].toFixed(2)})`, `\\text{Nodo } j = (${n[0].toFixed(2)}, ${n[1].toFixed(2)}, ${n[2].toFixed(2)})`, `L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = ${i.L.toFixed(3)}`] }, { title: "2. Funciones de forma", content: ["\\text{La viga usa } \\textbf{interpolaci\xF3n lineal} \\text{ para axial y torsi\xF3n, } \\textbf{polinomios c\xFAbicos de Hermite} \\text{ para flexi\xF3n.}", "\\textbf{2.1 Axial y Torsi\xF3n (lineal)}", "N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\xi = \\frac{x}{L} \\in [0,1]", "\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1", "\\textbf{2.2 Flexi\xF3n (Hermite c\xFAbicos)}", "H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\quad \\text{(desplazamiento nodo } i\\text{)}", "H_2(\\xi) = L\\,\\xi(1-\\xi)^2 \\quad \\text{(rotaci\xF3n nodo } i\\text{)}", "H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\quad \\text{(desplazamiento nodo } j\\text{)}", "H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\quad \\text{(rotaci\xF3n nodo } j\\text{)}", "\\text{Curvatura: } \\kappa = \\frac{d^2 v}{dx^2} = \\frac{1}{L^2}\\sum_{i=1}^{4} \\frac{d^2 H_i}{d\\xi^2}\\,q_i"] }, { title: "3. Matriz de rigidez local (12\xD712)", content: ["\\textbf{3.1 Bloque axial (DOFs } u_1, u_2\\text{):}", `K_{a} = \\frac{EA}{L} \\begin{bmatrix} 1 & -1 \\\\ -1 & 1 \\end{bmatrix} = \\frac{${t.frameProps.E.toExponential(2)} \\cdot ${t.frameProps.A.toFixed(4)}}{${i.L.toFixed(3)}}`, "\\textbf{3.2 Bloque torsi\xF3n (DOFs } \\theta_{x1}, \\theta_{x2}\\text{):}", `K_{t} = \\frac{GJ}{L} \\begin{bmatrix} 1 & -1 \\\\ -1 & 1 \\end{bmatrix} = ${(t.frameProps.G * t.frameProps.J / i.L).toExponential(3)}`, "\\textbf{3.3 Bloque flexi\xF3n plano xy (}I_z\\text{, DOFs } v, \\theta_z\\text{):}", "K_{by} = \\frac{EI_z}{L^3} \\begin{bmatrix} 12 & 6L & -12 & 6L \\\\ 6L & 4L^2 & -6L & 2L^2 \\\\ -12 & -6L & 12 & -6L \\\\ 6L & 2L^2 & -6L & 4L^2 \\end{bmatrix}", "\\textbf{3.4 Bloque flexi\xF3n plano xz (}I_y\\text{, DOFs } w, \\theta_y\\text{):}", "K_{bz} = \\frac{EI_y}{L^3} \\begin{bmatrix} 12 & -6L & -12 & -6L \\\\ -6L & 4L^2 & 6L & 2L^2 \\\\ -12 & 6L & 12 & 6L \\\\ -6L & 2L^2 & 6L & 4L^2 \\end{bmatrix}"] }, { title: "4. Transformaci\xF3n local \u2192 global", content: ["\\textbf{T} \\text{ es block-diagonal con la matriz de rotaci\xF3n } R_{3 \\times 3} \\text{ repetida 4 veces:}", "T_{12 \\times 12} = \\begin{bmatrix} R & 0 & 0 & 0 \\\\ 0 & R & 0 & 0 \\\\ 0 & 0 & R & 0 \\\\ 0 & 0 & 0 & R \\end{bmatrix}", "\\text{Cosenos directores } R \\text{ del elemento (filas = ejes locales en globales):}", `R = \\begin{bmatrix} ${i.R[0].map((a) => a.toFixed(3)).join(" & ")} \\\\ ${i.R[1].map((a) => a.toFixed(3)).join(" & ")} \\\\ ${i.R[2].map((a) => a.toFixed(3)).join(" & ")} \\end{bmatrix}`] }, { title: "5. Ensamblaje a coordenadas globales", content: ["K_{\\text{global}}^e = T^T \\cdot K_{\\text{local}} \\cdot T \\quad (12 \\times 12)", "\\text{Esta es la contribuci\xF3n del elemento al sistema global. Se ensambla:}", "K_{\\text{sys}} = \\sum_e A_e^T \\cdot K_{\\text{global}}^e \\cdot A_e", "\\text{donde } A_e \\text{ es la matriz de ensamblaje (gdofs locales \u2192 globales).}"] }];
  let r = null;
  try {
    r = await Yt();
  } catch (a) {
    console.warn("[Inspect] KaTeX no disponible:", a);
  }
  for (const a of s) {
    const l = document.createElement("div");
    Object.assign(l.style, { marginBottom: "18px" });
    const d = document.createElement("div");
    d.textContent = a.title, Object.assign(d.style, { fontWeight: "600", color: "#a5b4fc", marginBottom: "8px", fontSize: "12px" }), l.appendChild(d);
    for (const w of a.content) {
      const k = document.createElement("div");
      if (Object.assign(k.style, { padding: "6px 10px", marginBottom: "4px", background: "rgba(255,255,255,0.04)", borderRadius: "4px", fontSize: "12px", lineHeight: "1.7" }), r) try {
        r.render(w, k, { throwOnError: false, displayMode: true });
      } catch {
        k.textContent = w;
      }
      else k.textContent = w.replace(/\\\\/g, " | ").replace(/\\[a-zA-Z]+/g, ""), k.style.fontFamily = "ui-monospace, Menlo, monospace";
      l.appendChild(k);
    }
    e.appendChild(l);
  }
}
const Xt = 540, Wt = 600;
function Jt() {
  $t();
  const e = document.createElement("div");
  e.className = "hekatan-inspect-panel", Object.assign(e.style, { position: "fixed", top: "70px", right: "12px", width: `${Xt}px`, maxHeight: `${Wt}px`, background: "rgba(20, 24, 30, 0.94)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", boxShadow: "0 6px 24px rgba(0,0,0,0.5)", fontFamily: "ui-sans-serif, system-ui, sans-serif", fontSize: "12px", color: "#e2e8f0", zIndex: "100", backdropFilter: "blur(6px)", display: "none", flexDirection: "column", overflow: "hidden" });
  const t = document.createElement("div");
  Object.assign(t.style, { display: "flex", alignItems: "center", gap: "8px", padding: "8px 10px", borderBottom: "1px solid rgba(255,255,255,0.1)", cursor: "move", userSelect: "none", background: "rgba(255,255,255,0.03)" });
  const i = document.createElement("span");
  Object.assign(i.style, { background: "#f59e0b", color: "#1a1a1a", padding: "2px 8px", borderRadius: "4px", fontWeight: "600", fontSize: "11px" }), i.textContent = "Element \u2014", t.appendChild(i);
  const o = document.createElement("span");
  Object.assign(o.style, { flex: "1", fontSize: "12px", color: "#cbd5e1" }), o.textContent = "\u2014", t.appendChild(o);
  const n = document.createElement("button");
  n.textContent = "\xD7", Object.assign(n.style, { background: "transparent", border: "none", color: "#e2e8f0", fontSize: "20px", cursor: "pointer", padding: "0 6px", lineHeight: "1" }), n.onclick = () => S.hide(), t.appendChild(n), e.appendChild(t);
  const s = document.createElement("div");
  Object.assign(s.style, { display: "flex", borderBottom: "1px solid rgba(255,255,255,0.1)" }), e.appendChild(s);
  const r = ["Tabla", "Matem\xE1tica", "Resumen"], a = [];
  let l = 0;
  for (let u = 0; u < r.length; u++) {
    const b = document.createElement("button");
    b.textContent = r[u], Object.assign(b.style, { flex: "1", background: "transparent", border: "none", color: u === 0 ? "#a5b4fc" : "#94a3b8", borderBottom: u === 0 ? "2px solid #a5b4fc" : "2px solid transparent", padding: "8px 0", cursor: "pointer", fontSize: "12px", fontWeight: u === 0 ? "600" : "400" }), b.onclick = () => m(u), s.appendChild(b), a.push(b);
  }
  const d = document.createElement("div");
  Object.assign(d.style, { flex: "1", overflow: "auto", padding: "10px 12px", fontSize: "11.5px", lineHeight: "1.5" }), e.appendChild(d);
  let w = null;
  t.addEventListener("mousedown", (u) => {
    const b = e.getBoundingClientRect();
    w = { x: u.clientX - b.left, y: u.clientY - b.top }, u.preventDefault();
  }), window.addEventListener("mousemove", (u) => {
    w && (e.style.left = `${u.clientX - w.x}px`, e.style.top = `${u.clientY - w.y}px`, e.style.right = "auto");
  }), window.addEventListener("mouseup", () => {
    w = null;
  });
  let k = null, p = null;
  function m(u) {
    l = u, a.forEach((b, v) => {
      Object.assign(b.style, { color: v === u ? "#a5b4fc" : "#94a3b8", borderBottom: v === u ? "2px solid #a5b4fc" : "2px solid transparent", fontWeight: v === u ? "600" : "400" });
    }), E();
  }
  function E() {
    if (d.innerHTML = "", !k) {
      d.textContent = "Sin elemento activo. Haz click en un elemento del modelo.";
      return;
    }
    l === 0 ? y() : l === 1 ? g() : h();
  }
  function y() {
    if (!p || !(k == null ? void 0 : k.frameProps)) {
      d.textContent = "Tablas disponibles solo para elementos frame.";
      return;
    }
    const u = k.frameProps, b = p, v = document.createElement("div");
    Object.assign(v.style, { marginBottom: "16px" }), v.innerHTML = '<div style="font-weight:600;color:#a5b4fc;margin-bottom:6px">1. Propiedades</div>';
    const C = document.createElement("table");
    Object.assign(C.style, { width: "100%", borderCollapse: "collapse", fontSize: "11px", fontFamily: "ui-monospace, Menlo, monospace" }), [["E", ke(u.E), "A", u.A.toFixed(4)], ["Iz", ke(u.Iz), "Iy", ke(u.Iy)], ["G", ke(u.G), "J", ke(u.J)], ["L", b.L.toFixed(3), "\u2014", "\u2014"]].forEach((M) => {
      const $ = document.createElement("tr");
      M.forEach((L, j) => {
        const B = document.createElement("td");
        B.textContent = L, Object.assign(B.style, { padding: "4px 8px", background: j % 2 === 0 ? "rgba(165,180,252,0.08)" : "transparent", color: j % 2 === 0 ? "#a5b4fc" : "#cbd5e1", borderBottom: "1px solid rgba(255,255,255,0.05)" }), j % 2 === 0 && (B.style.fontWeight = "600"), $.appendChild(B);
      }), C.appendChild($);
    }), v.appendChild(C), d.appendChild(v), d.appendChild(x("2. K_local (12\xD712)", b.K_local)), d.appendChild(x("3. T \u2014 Transformaci\xF3n", b.T)), d.appendChild(x("4. K_global = T^T \xB7 K_local \xB7 T", b.K_global));
  }
  function g() {
    if (!(k == null ? void 0 : k.frameProps) || !p) {
      d.textContent = "Derivaci\xF3n matem\xE1tica solo para elementos frame.";
      return;
    }
    Zt(d, k, p);
  }
  function h() {
    var _a, _b;
    if (!k) return;
    const u = k, b = [];
    if (b.push('<div style="font-weight:600;color:#a5b4fc;margin-bottom:8px">Resumen del elemento</div>'), b.push('<table style="width:100%;font-family:ui-monospace,Menlo,monospace;font-size:11.5px;border-collapse:collapse">'), b.push(`  <tr><td style="padding:5px;color:#94a3b8">\xCDndice</td><td style="padding:5px">${u.index}</td></tr>`), b.push(`  <tr><td style="padding:5px;color:#94a3b8">Tipo</td><td style="padding:5px">${u.type.toUpperCase()}</td></tr>`), b.push(`  <tr><td style="padding:5px;color:#94a3b8">Nodos</td><td style="padding:5px">${u.nodeIndices.join(" \u2192 ")}</td></tr>`), u.sectionLabel && b.push(`  <tr><td style="padding:5px;color:#94a3b8">Secci\xF3n</td><td style="padding:5px;color:#fde68a">${u.sectionLabel}</td></tr>`), p && b.push(`  <tr><td style="padding:5px;color:#94a3b8">L</td><td style="padding:5px">${p.L.toFixed(4)} m</td></tr>`), u.frameProps) {
      const v = u.frameProps;
      b.push(`  <tr><td style="padding:5px;color:#94a3b8">EA</td><td style="padding:5px">${(v.E * v.A).toExponential(3)} kN</td></tr>`), b.push(`  <tr><td style="padding:5px;color:#94a3b8">EIy (strong)</td><td style="padding:5px">${(v.E * v.Iy).toExponential(3)} kN\xB7m\xB2</td></tr>`), b.push(`  <tr><td style="padding:5px;color:#94a3b8">EIz (weak)</td><td style="padding:5px">${(v.E * v.Iz).toExponential(3)} kN\xB7m\xB2</td></tr>`), b.push(`  <tr><td style="padding:5px;color:#94a3b8">GJ</td><td style="padding:5px">${(v.G * v.J).toExponential(3)} kN\xB7m\xB2</td></tr>`);
    }
    b.push("</table>"), b.push('<div style="margin-top:14px;display:flex;gap:8px">'), b.push('  <button class="hk-copy-Klocal" style="flex:1;padding:6px 10px;background:#1e3a5f;border:1px solid #3b82f6;color:#dbeafe;border-radius:4px;cursor:pointer;font-size:11px">\u{1F4CB} Copiar K_local</button>'), b.push('  <button class="hk-copy-Kglobal" style="flex:1;padding:6px 10px;background:#1e3a5f;border:1px solid #3b82f6;color:#dbeafe;border-radius:4px;cursor:pointer;font-size:11px">\u{1F4CB} Copiar K_global</button>'), b.push("</div>"), d.innerHTML = b.join(`
`), p && ((_a = d.querySelector(".hk-copy-Klocal")) == null ? void 0 : _a.addEventListener("click", () => {
      navigator.clipboard.writeText(it(p.K_local));
    }), (_b = d.querySelector(".hk-copy-Kglobal")) == null ? void 0 : _b.addEventListener("click", () => {
      navigator.clipboard.writeText(it(p.K_global));
    }));
  }
  function x(u, b) {
    const v = document.createElement("div");
    Object.assign(v.style, { marginBottom: "16px" }), v.innerHTML = `<div style="font-weight:600;color:#a5b4fc;margin-bottom:6px">${u}</div>`;
    const C = document.createElement("div");
    Object.assign(C.style, { maxWidth: "100%", overflow: "auto", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px" });
    const _ = document.createElement("table");
    return Object.assign(_.style, { borderCollapse: "collapse", fontSize: "10px", fontFamily: "ui-monospace, Menlo, monospace" }), b.forEach((M) => {
      const $ = document.createElement("tr");
      M.forEach((L) => {
        const j = document.createElement("td");
        j.textContent = Qt(L), Object.assign(j.style, { padding: "3px 6px", borderBottom: "1px solid rgba(255,255,255,0.04)", color: Math.abs(L) < 1e-12 ? "#475569" : "#cbd5e1", textAlign: "right", minWidth: "60px" }), $.appendChild(j);
      }), _.appendChild($);
    }), C.appendChild(_), v.appendChild(C), v;
  }
  gt((u, b) => {
    b.background && (e.style.background = `${b.background}EE`);
  }), document.body.appendChild(e);
  const S = { el: e, show(u) {
    k = u, i.textContent = `Element ${u.index}`;
    const b = u.type === "frame" ? "Frame" : u.type === "shell" ? "Shell" : "Solid", v = u.nodeIndices.length === 2 ? `Nodes ${u.nodeIndices[0]} \u2192 ${u.nodeIndices[1]}` : `Nodes ${u.nodeIndices.join(",")}`;
    if (p = null, u.type === "frame" && u.frameProps && u.nodes.length >= 2) {
      const C = { ni: u.nodes[0], nj: u.nodes[1] };
      try {
        p = bt(C, u.frameProps);
      } catch (_) {
        console.warn("[Inspect] computeFrameMatrices error:", _);
      }
    }
    o.textContent = p ? `${b} \u2014 ${v} \u2014 L = ${p.L.toFixed(2)}` : `${b} \u2014 ${v}`, e.style.display = "flex", E();
  }, hide() {
    e.style.display = "none";
  }, toggle() {
    e.style.display = e.style.display === "none" ? "flex" : "none";
  }, destroy() {
    e.remove();
  } };
  return S;
}
function ke(e) {
  return Math.abs(e) < 1e-12 ? "0" : Math.abs(e) >= 1e5 || Math.abs(e) < 1e-3 ? e.toExponential(2) : parseFloat(e.toFixed(4)).toString();
}
function Qt(e) {
  if (Math.abs(e) < 1e-12) return "0";
  const t = Math.abs(e);
  return t >= 1e5 || t < 0.01 ? e.toExponential(2) : parseFloat(e.toFixed(2)).toString();
}
function en(e = {}) {
  var _a, _b, _c, _d;
  const t = document.createElement("div");
  t.className = "hekatan-modal-panel", Object.assign(t.style, { position: "fixed", top: ((_a = e.position) == null ? void 0 : _a.top) != null ? `${e.position.top}px` : "70px", right: ((_b = e.position) == null ? void 0 : _b.right) != null ? `${e.position.right}px` : "12px", left: ((_c = e.position) == null ? void 0 : _c.left) != null ? `${e.position.left}px` : "auto", bottom: ((_d = e.position) == null ? void 0 : _d.bottom) != null ? `${e.position.bottom}px` : "auto", width: "640px", maxHeight: "560px", background: "rgba(20,24,30,0.94)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", boxShadow: "0 6px 24px rgba(0,0,0,0.5)", color: "#e2e8f0", fontFamily: "ui-monospace, Menlo, Consolas, monospace", fontSize: "11px", zIndex: "100", backdropFilter: "blur(6px)", display: e.initiallyVisible ? "flex" : "none", flexDirection: "column", overflow: "hidden" });
  const i = document.createElement("div");
  Object.assign(i.style, { display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.1)", cursor: "move", userSelect: "none", background: "rgba(255,255,255,0.03)" });
  const o = document.createElement("span");
  o.textContent = "\u{1F4C8} Modal \u2014 \u2014", Object.assign(o.style, { flex: "1", fontWeight: "600", color: "#a5b4fc", fontSize: "12px" }), i.appendChild(o);
  const n = document.createElement("button");
  n.textContent = "\xD7", Object.assign(n.style, { background: "transparent", border: "none", color: "#e2e8f0", fontSize: "20px", cursor: "pointer", padding: "0 6px", lineHeight: "1" }), n.onclick = () => b.hide(), i.appendChild(n), t.appendChild(i);
  const s = document.createElement("div");
  Object.assign(s.style, { padding: "6px 12px", background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "10.5px", color: "#94a3b8", lineHeight: "1.5" }), t.appendChild(s);
  const r = document.createElement("div");
  Object.assign(r.style, { padding: "6px 12px", fontSize: "10.5px", color: "#fde68a", borderBottom: "1px solid rgba(255,255,255,0.05)" }), t.appendChild(r);
  const a = document.createElement("div");
  Object.assign(a.style, { flex: "1", overflow: "auto", padding: "0 6px" }), t.appendChild(a);
  const l = document.createElement("div");
  Object.assign(l.style, { display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderTop: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" });
  const d = Ke("\u25C0"), w = Ke("\u25B6"), k = Ke("\u25B6\u25B6");
  l.appendChild(d), l.appendChild(w), l.appendChild(k);
  const p = document.createElement("input");
  p.type = "range", p.min = "1", p.max = "1", p.value = "1", Object.assign(p.style, { flex: "1" }), l.appendChild(p);
  const m = document.createElement("span");
  Object.assign(m.style, { color: "#fde68a", fontSize: "11px", minWidth: "120px", textAlign: "right" }), m.textContent = "Modo 1", l.appendChild(m), t.appendChild(l);
  let E = null;
  i.addEventListener("mousedown", (v) => {
    const C = t.getBoundingClientRect();
    E = { x: v.clientX - C.left, y: v.clientY - C.top }, v.preventDefault();
  }), window.addEventListener("mousemove", (v) => {
    E && (t.style.left = `${v.clientX - E.x}px`, t.style.top = `${v.clientY - E.y}px`, t.style.right = "auto");
  }), window.addEventListener("mouseup", () => {
    E = null;
  });
  const y = It.state(0);
  let g = null, h = null;
  function x(v) {
    var _a2, _b2;
    if (!h) return;
    const C = ((_a2 = h.frequencies) == null ? void 0 : _a2.length) ?? 1;
    y.val = Math.max(0, Math.min(C - 1, v));
    const _ = h.frequencies[y.val];
    m.textContent = `Modo ${y.val + 1} \u2014 f=${_.toFixed(3)} Hz \xB7 T=${(1 / _).toFixed(4)} s`, p.value = String(y.val + 1), (_b2 = e.onModeChange) == null ? void 0 : _b2.call(e, y.val), S();
  }
  d.onclick = () => x(y.val - 1), k.onclick = () => x(y.val + 1), p.oninput = () => x(parseInt(p.value) - 1), w.onclick = () => {
    g ? b.pause() : b.play();
  };
  function S() {
    a.querySelectorAll("tr[data-mode]").forEach((v) => {
      const C = parseInt(v.dataset.mode);
      v.style.background = C === y.val ? "rgba(245,158,11,0.18)" : "transparent";
    });
  }
  function u(v, C) {
    var _a2;
    h = v, (C == null ? void 0 : C.title) && (o.textContent = `\u{1F4C8} ${C.title}`), s.innerHTML = ((C == null ? void 0 : C.properties) ?? []).map((M) => `<div>${tn(M)}</div>`).join(""), nn(a, v, r);
    const _ = ((_a2 = v.frequencies) == null ? void 0 : _a2.length) ?? 1;
    p.max = String(_), x(0);
  }
  document.body.appendChild(t);
  const b = { el: t, activeMode: y, update: u, render: u, show() {
    t.style.display = "flex";
  }, hide() {
    t.style.display = "none", b.pause();
  }, toggle() {
    t.style.display = t.style.display === "none" ? "flex" : "none";
  }, play() {
    g || (w.textContent = "\u23F8", g = setInterval(() => {
      if (!h) return;
      const v = h.frequencies.length;
      x((y.val + 1) % v);
    }, 1500));
  }, pause() {
    g && (clearInterval(g), g = null), w.textContent = "\u25B6";
  }, destroy() {
    b.pause(), t.remove();
  } };
  return b;
}
function Ke(e) {
  const t = document.createElement("button");
  return t.textContent = e, Object.assign(t.style, { background: "rgba(165,180,252,0.1)", border: "1px solid rgba(165,180,252,0.3)", color: "#a5b4fc", padding: "4px 10px", borderRadius: "4px", cursor: "pointer", fontSize: "12px", fontFamily: "monospace" }), t;
}
function tn(e) {
  return e.replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
}
function nn(e, t, i) {
  var _a, _b;
  e.innerHTML = "";
  const o = ((_a = t.frequencies) == null ? void 0 : _a.length) ?? 0;
  if (o === 0) {
    e.textContent = "Sin resultados modales.";
    return;
  }
  const n = document.createElement("table");
  Object.assign(n.style, { width: "100%", borderCollapse: "collapse", fontSize: "10.5px", fontFamily: "ui-monospace, Menlo, monospace" });
  const s = document.createElement("thead");
  s.innerHTML = `
    <tr style="background:rgba(165,180,252,0.1);position:sticky;top:0">
      <th style="padding:6px 4px;text-align:right;color:#a5b4fc">Modo</th>
      <th style="padding:6px 4px;text-align:right;color:#a5b4fc">\u03C9(rad/s)</th>
      <th style="padding:6px 4px;text-align:right;color:#a5b4fc">f(Hz)</th>
      <th style="padding:6px 4px;text-align:right;color:#a5b4fc">T(s)</th>
      <th style="padding:6px 4px;text-align:right;color:#a5b4fc">Ux</th>
      <th style="padding:6px 4px;text-align:right;color:#a5b4fc">Uy</th>
      <th style="padding:6px 4px;text-align:right;color:#a5b4fc">Uz</th>
      <th style="padding:6px 4px;text-align:right;color:#a5b4fc">Rz</th>
      <th style="padding:6px 4px;text-align:right;color:#a5b4fc">\u03A3Ux</th>
      <th style="padding:6px 4px;text-align:right;color:#a5b4fc">\u03A3Uy</th>
      <th style="padding:6px 4px;text-align:right;color:#a5b4fc">\u03A3Rz</th>
      <th style="padding:6px 4px;text-align:left;color:#a5b4fc">Tipo</th>
    </tr>`, n.appendChild(s);
  const r = document.createElement("tbody");
  let a = 0, l = 0, d = 0, w = -1, k = -1, p = -1, m = -1, E = -1;
  for (let g = 0; g < o; g++) {
    const h = t.frequencies[g], x = 2 * Math.PI * h, S = 1 / h, u = (_b = t.massParticipation) == null ? void 0 : _b[g];
    let b = 0, v = 0, C = 0, _ = 0;
    if (Array.isArray(u)) b = u[0] ?? 0, v = u[1] ?? 0, C = u[2] ?? 0, _ = u[5] ?? 0;
    else if (u && typeof u == "object") {
      const L = u;
      b = L.ux ?? 0, v = L.uy ?? 0, C = L.uz ?? 0, _ = L.rz ?? 0;
    }
    a += b, l += v, d += _, w < 0 && b > 0.5 && (w = g), k < 0 && v > 0.5 && (k = g), p < 0 && _ > 0.5 && (p = g), m < 0 && a > 0.9 && (m = g), E < 0 && l > 0.9 && (E = g);
    let M = "\u2014";
    g === w ? M = `Ux (${(b * 100).toFixed(0)}%)` : g === k ? M = `Uy (${(v * 100).toFixed(0)}%)` : g === p && (M = `Rz (${(_ * 100).toFixed(0)}%)`);
    const $ = document.createElement("tr");
    $.dataset.mode = String(g), Object.assign($.style, { borderBottom: "1px solid rgba(255,255,255,0.04)", cursor: "pointer" }), $.onclick = () => void 0, $.innerHTML = `
      <td style="padding:3px 4px;text-align:right;color:#fde68a;font-weight:600">${g + 1}</td>
      <td style="padding:3px 4px;text-align:right">${x.toFixed(2)}</td>
      <td style="padding:3px 4px;text-align:right;color:#fde68a">${h.toFixed(3)}</td>
      <td style="padding:3px 4px;text-align:right">${S.toFixed(3)}</td>
      <td style="padding:3px 4px;text-align:right;color:${Oe(b)}">${le(b)}</td>
      <td style="padding:3px 4px;text-align:right;color:${Oe(v)}">${le(v)}</td>
      <td style="padding:3px 4px;text-align:right;color:${Oe(C)}">${le(C)}</td>
      <td style="padding:3px 4px;text-align:right;color:${Oe(_)}">${le(_)}</td>
      <td style="padding:3px 4px;text-align:right;color:#94a3b8">${le(a)}</td>
      <td style="padding:3px 4px;text-align:right;color:#94a3b8">${le(l)}</td>
      <td style="padding:3px 4px;text-align:right;color:#94a3b8">${le(d)}</td>
      <td style="padding:3px 4px;text-align:left;color:#a5b4fc">${M}</td>
    `, r.appendChild($);
  }
  n.appendChild(r), e.appendChild(n), m >= 0 && E >= 0 ? (i.innerHTML = `<b>ASCE 7-22 \xA712.9.1:</b> \u2713 90% alcanzado en X (modo ${m + 1}) e Y (modo ${E + 1}) de ${o}`, i.style.color = "#86efac") : (i.innerHTML = `<b>ASCE 7-22 \xA712.9.1:</b> \u26A0 Solo \u03A3Ux=${le(a)} \u03A3Uy=${le(l)} con ${o} modos. Considera aumentar.`, i.style.color = "#fcd34d");
}
function le(e) {
  return `${(e * 100).toFixed(1)}%`;
}
function Oe(e) {
  return e > 0.5 ? "#86efac" : e > 0.1 ? "#fde68a" : "#475569";
}
function on() {
  const e = document.createElement("div");
  e.className = "hekatan-solver-log", Object.assign(e.style, { position: "fixed", top: "100px", right: "12px", width: "320px", maxHeight: "420px", overflow: "auto", background: "rgba(20, 24, 30, 0.94)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", boxShadow: "0 4px 16px rgba(0,0,0,0.4)", padding: "10px 12px", fontSize: "11px", fontFamily: "ui-monospace, Menlo, Consolas, monospace", color: "#e2e8f0", zIndex: "100", backdropFilter: "blur(6px)", display: "none" });
  const t = document.createElement("div");
  Object.assign(t.style, { display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.1)", cursor: "move", userSelect: "none" });
  const i = document.createElement("span");
  i.textContent = "\u{1F4DC} Solver Log", Object.assign(i.style, { flex: "1", fontWeight: "600", color: "#a5b4fc", fontSize: "12px" }), t.appendChild(i);
  const o = document.createElement("button");
  o.textContent = "\xD7", Object.assign(o.style, { background: "transparent", border: "none", color: "#e2e8f0", fontSize: "16px", cursor: "pointer", padding: "0 4px", lineHeight: "1" }), o.onclick = () => a.hide(), t.appendChild(o), e.appendChild(t);
  const n = document.createElement("div");
  e.appendChild(n);
  let s = null;
  t.addEventListener("mousedown", (l) => {
    const d = e.getBoundingClientRect();
    s = { x: l.clientX - d.left, y: l.clientY - d.top }, l.preventDefault();
  }), window.addEventListener("mousemove", (l) => {
    s && (e.style.left = `${l.clientX - s.x}px`, e.style.top = `${l.clientY - s.y}px`, e.style.right = "auto");
  }), window.addEventListener("mouseup", () => {
    s = null;
  });
  function r(l) {
    var _a, _b, _c;
    const d = [];
    if (d.push('<div style="font-weight:600;color:#fde68a;margin-bottom:4px">FEM Solver</div>'), d.push('<div style="margin-bottom:8px;color:#cbd5e1">'), d.push(`  <div>Modelo: <b>${l.nNodes}</b> nodos, <b>${l.nElements}</b> elem</div>`), l.nFrames != null && d.push(`  <div>Frames: ${l.nFrames}${l.nShells ? ` &nbsp;|&nbsp; Shells: ${l.nShells}` : ""}${l.nSolids ? ` &nbsp;|&nbsp; Solids: ${l.nSolids}` : ""}</div>`), d.push(`  <div>Apoyos: ${l.nSupports} &nbsp;|&nbsp; Cargas: ${l.nLoads}</div>`), d.push(`  <div>DOFs: ${l.totalDOFs} total, ~${l.freeDOFs} libres</div>`), d.push("</div>"), d.push(`<div style="color:#a5b4fc;font-weight:600">1. Ensamblaje K global (${l.totalDOFs}\xD7${l.totalDOFs})</div>`), d.push('<div style="margin-left:10px;color:#cbd5e1;font-style:italic;font-size:10.5px">K_global = \u03A3 T^T \xB7 K_local \xB7 T</div>'), ((_a = l.timings) == null ? void 0 : _a.solve) != null && d.push(`<div style="color:#a5b4fc;font-weight:600;margin-top:6px">2. K \xB7 u = F  \u2192  ${l.solverName ?? "SparseLU"}  \u2192  <span style="color:#86efac">${l.timings.solve.toFixed(1)} ms</span></div>`), l.maxDisplacement) {
      const w = l.maxDisplacement;
      d.push('<div style="color:#a5b4fc;font-weight:600;margin-top:6px">3. Desplazamientos:</div>'), d.push(`<div style="margin-left:10px;color:#cbd5e1">max|u| = <b style="color:#fde68a">${w.value.toExponential(4)} m</b> (nodo ${w.nodeIdx}, ${w.component})</div>`);
    }
    ((_b = l.timings) == null ? void 0 : _b.internalForces) != null && (d.push(`<div style="color:#a5b4fc;font-weight:600;margin-top:6px">4. Fuerzas internas: <span style="color:#86efac">${l.timings.internalForces.toFixed(1)} ms</span></div>`), d.push('<div style="margin-left:10px;color:#cbd5e1;font-style:italic;font-size:10.5px">F_int = K_local \xB7 T \xB7 u</div>')), ((_c = l.timings) == null ? void 0 : _c.total) != null && d.push(`<div style="margin-top:10px;padding:6px 8px;background:rgba(134,239,172,0.1);border-left:3px solid #86efac;border-radius:3px">\u2713 Completado: <b>${l.timings.total.toFixed(1)} ms</b></div>`), n.innerHTML = d.join(`
`);
  }
  gt((l, d) => {
    d.background && (e.style.background = `${d.background}EE`);
  }), document.body.appendChild(e);
  const a = { el: e, update(l) {
    r(l);
  }, show() {
    e.style.display = "block";
  }, hide() {
    e.style.display = "none";
  }, toggle() {
    e.style.display = e.style.display === "none" ? "block" : "none";
  }, destroy() {
    e.remove();
  } };
  return a;
}
function an(e, t) {
  const i = Object.keys(t), o = i.map((a) => t[a]), s = `
    const {sqrt,sin,cos,tan,exp,log,abs,max,min,floor,ceil,round,pow,PI,E} = Math;
    return (${e});
  `;
  return new Function(...i, s)(...o);
}
const sn = /^##\s+(.+)$/, ln = /^\s*(?:%|\/\/)\s?(.*)$/, rn = /^\s*([a-zA-Z_]\w*)\s*=\s*(.+)$/;
function dn(e, t = {}) {
  const i = e.split(/\r?\n/), o = [], n = { ...t.modelVars ?? {} };
  for (const s of i) {
    const r = s;
    if (!r.trim()) continue;
    const a = r.match(sn);
    if (a) {
      o.push({ type: "section", source: r, title: a[1] });
      continue;
    }
    const l = r.match(ln);
    if (l) {
      o.push({ type: "comment", source: r, value: l[1] });
      continue;
    }
    const d = r.match(rn);
    let w, k;
    d ? (k = d[1], w = d[2]) : w = r.trim();
    try {
      const p = an(w, n);
      k && (n[k] = p), o.push({ type: k ? "assign" : "expr", source: r, name: k, value: p, latex: yt(k, p) });
    } catch (p) {
      o.push({ type: "error", source: r, error: p.message ?? String(p) });
    }
  }
  return o;
}
function yt(e, t) {
  return typeof t == "number" ? e ? `${e} = ${je(t)}` : `${je(t)}` : Array.isArray(t) ? e ? `${e} = ${lt(t)}` : lt(t) : t && typeof t.toArray == "function" ? yt(e, t.toArray()) : e ? `${e} = \\text{${String(t)}}` : `\\text{${String(t)}}`;
}
function je(e) {
  return Math.abs(e) < 1e-12 ? "0" : Math.abs(e) >= 1e6 || Math.abs(e) < 1e-3 ? e.toExponential(4).replace(/e([+-]?\d+)/, " \\times 10^{$1}") : parseFloat(e.toFixed(6)).toString();
}
function lt(e) {
  if (e.length === 0) return "[]";
  if (!Array.isArray(e[0])) {
    const s = e.map((r) => typeof r == "number" ? je(r) : String(r));
    return e.length > 8 ? `\\begin{bmatrix} ${s.slice(0, 4).join(" \\\\ ")} \\\\ \\vdots \\\\ ${s.slice(-2).join(" \\\\ ")} \\end{bmatrix}_{${e.length}\\times1}` : `\\begin{bmatrix} ${s.join(" \\\\ ")} \\end{bmatrix}`;
  }
  const t = e, i = t.length, o = t[0].length;
  return i > 8 || o > 8 ? `\\text{Matriz } ${i} \\times ${o}\\text{ (truncada)}` : `\\begin{bmatrix} ${t.map((s) => s.map((r) => typeof r == "number" ? je(r) : String(r)).join(" & ")).join(" \\\\ ")} \\end{bmatrix}`;
}
function cn(e) {
  const t = {};
  for (const i of Object.keys(e)) e[i] != null && (t[i] = e[i]);
  return e.nodes && (t.nnodes = e.nodes.length), e.elements && (t.nelem = e.elements.length), e.nodes && (t.ndof = e.nodes.length * 6), t;
}
function rt() {
  return `## FEM del modelo actual
% Variables disponibles: nodes, elements, K, M, F, u, nnodes, nelem, ndof

% Tama\xF1o del modelo
nnodes
nelem
ndof = nnodes * 6

% Coordenadas
nodes

## Soluci\xF3n
% Desplazamientos m\xE1ximos
max(abs(u))
`;
}
let ze = null;
function pn() {
  return ze || (ze = new Promise((e, t) => {
    if (window.katex) {
      e(window.katex);
      return;
    }
    const i = document.createElement("link");
    i.rel = "stylesheet", i.href = "https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css", document.head.appendChild(i);
    const o = document.createElement("script");
    o.src = "https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js", o.onload = () => e(window.katex), o.onerror = () => t(new Error("Failed to load KaTeX")), document.head.appendChild(o);
  }), ze);
}
function un(e = {}) {
  var _a, _b;
  const t = document.createElement("div");
  t.className = "hekatan-calc-panel", Object.assign(t.style, { position: "fixed", top: ((_a = e.position) == null ? void 0 : _a.top) != null ? `${e.position.top}px` : "70px", right: ((_b = e.position) == null ? void 0 : _b.right) != null ? `${e.position.right}px` : "12px", width: "880px", height: "560px", background: "rgba(20, 24, 30, 0.97)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", boxShadow: "0 6px 24px rgba(0,0,0,0.5)", color: "#e2e8f0", fontFamily: "ui-sans-serif, system-ui", fontSize: "12px", zIndex: "100", backdropFilter: "blur(6px)", display: "none", flexDirection: "column", overflow: "hidden" });
  const i = document.createElement("div");
  Object.assign(i.style, { display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.1)", cursor: "move", userSelect: "none", background: "rgba(255,255,255,0.03)" });
  const o = m("\u{1F4E5} Descargar", "#1e3a5f", "#3b82f6");
  o.onclick = () => {
    const M = new Blob([h.value + `

% \u2500\u2500 OUTPUT \u2500\u2500
` + (b.textContent ?? "")], { type: "text/plain;charset=utf-8" }), $ = URL.createObjectURL(M), L = document.createElement("a");
    L.href = $, L.download = `hekatan_calc_${Date.now()}.txt`, document.body.appendChild(L), L.click(), document.body.removeChild(L), setTimeout(() => URL.revokeObjectURL($), 1e3);
  }, i.appendChild(o);
  const n = document.createElement("select");
  Object.assign(n.style, { background: "rgba(0,0,0,0.4)", color: "#e2e8f0", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "3px", padding: "4px 8px", fontSize: "11px", outline: "none", cursor: "pointer" });
  const s = [{ name: "FEM del modelo actual (auto)", code: rt() }, { name: "Pesos por piso (\u03A3 kN)", code: `## Pesos por piso
% Asume que existen variables 'storyWeights' o calcula desde el modelo
nnodes
W_total = nelem * 5  % aprox kN
` }, { name: "An\xE1lisis modal \u2014 frecuencias", code: `## Modal \u2014 frecuencias y per\xEDodos
% f_i = \u03C9_i / (2\u03C0);  T_i = 1/f_i
% Para edificios t\xEDpicos: T1 \u2248 0.1\xB7N_pisos
` }, { name: "Memoria de c\xE1lculo (template)", code: `## MEMORIA DE C\xC1LCULO
% Proyecto: ___
% Norma: NEC-SE-DS / ASCE 7

## 1. Geometr\xEDa
nnodes
nelem
ndof

## 2. Cargas
% CM = ___
% CV = ___
% Sismo Ex/Ey = ___

## 3. An\xE1lisis
% Resultados (deformaciones, reacciones)
` }, { name: "Vac\xEDo (empezar de cero)", code: `## Sin t\xEDtulo
% Variables: nodes, elements, nnodes, nelem, ndof
` }];
  for (const M of s) {
    const $ = document.createElement("option");
    $.value = M.name, $.textContent = M.name, n.appendChild($);
  }
  n.onchange = () => {
    const M = s.find(($) => $.name === n.value);
    M && (h.value = M.code, _.evaluate());
  }, i.appendChild(n);
  const r = m("\u2753 Funciones", "rgba(255,255,255,0.06)", "rgba(255,255,255,0.2)");
  r.title = "Funciones disponibles", r.onclick = () => {
    b.innerHTML = `
<h3 style="color:#a5b4fc;margin:0 0 8px">\u{1F4DA} Funciones disponibles</h3>
<pre style="font-size:11px;line-height:1.6;color:#cbd5e1">
sqrt(x)         \u221Ax
sin(x), cos(x), tan(x)
exp(x), log(x), abs(x)
max(a,b), min(a,b)
floor, ceil, round
pow(a,b)        a^b
PI = 3.14159\u2026   E = 2.71828\u2026

% Constantes globales del modelo
nodes           array nodos [[x,y,z],...]
elements        array elementos
nnodes          # de nodos
nelem           # de elementos
ndof = nnodes * 6
</pre>
`;
  }, i.appendChild(r);
  const a = m("\u{1F4DA} Librer\xEDa", "rgba(255,255,255,0.06)", "rgba(255,255,255,0.2)");
  a.title = "Snippets reutilizables", a.onclick = () => {
    b.innerHTML = `
<h3 style="color:#a5b4fc;margin:0 0 8px">\u{1F4DA} Librer\xEDa de snippets</h3>
<div style="font-size:11.5px;line-height:1.6">
<b style="color:#fde68a">Rigidez axial (column):</b>
<pre style="background:rgba(0,0,0,0.3);padding:6px;border-radius:3px;font-size:11px">
E = 2e8     % kN/m\xB2
A = 0.16    % m\xB2 (col 0.40\xD70.40)
L = 3       % m
k_axial = E * A / L  % kN/m
</pre>

<b style="color:#fde68a">Rigidez lateral cantilever:</b>
<pre style="background:rgba(0,0,0,0.3);padding:6px;border-radius:3px;font-size:11px">
EI = 2e8 * 1e-3
H = 3
k_lat = 3 * EI / pow(H, 3)  % kN/m
</pre>

<b style="color:#fde68a">Periodo aproximado edificio:</b>
<pre style="background:rgba(0,0,0,0.3);padding:6px;border-radius:3px;font-size:11px">
N = 5      % pisos
T1 = 0.1 * N    % aprox NEC-SE-DS
</pre>
</div>`;
  }, i.appendChild(a);
  const l = document.createElement("span");
  l.textContent = "\u{1F9EE} Calculadora FEM", Object.assign(l.style, { flex: "1", fontWeight: "600", color: "#a5b4fc", fontSize: "13px", textAlign: "center" }), i.appendChild(l);
  const d = document.createElement("button");
  d.textContent = "\u25B6 Ejecutar (Ctrl+Enter)", Object.assign(d.style, { background: "#2d8659", border: "none", color: "white", padding: "5px 14px", borderRadius: "4px", cursor: "pointer", fontSize: "11.5px", fontWeight: "600" }), d.onclick = () => _.evaluate(), i.appendChild(d);
  const w = m("\u26F6", "rgba(255,255,255,0.06)", "rgba(255,255,255,0.2)");
  w.title = "Pantalla completa";
  let k = false;
  w.onclick = () => {
    k = !k, k ? Object.assign(t.style, { top: "0", left: "0", right: "0", bottom: "0", width: "100vw", height: "100vh" }) : Object.assign(t.style, { top: "70px", right: "12px", left: "auto", bottom: "auto", width: "880px", height: "560px" });
  }, i.appendChild(w);
  const p = document.createElement("button");
  p.textContent = "\xD7", Object.assign(p.style, { background: "transparent", border: "none", color: "#e2e8f0", fontSize: "20px", cursor: "pointer", padding: "0 6px", lineHeight: "1" }), p.onclick = () => _.hide(), i.appendChild(p), t.appendChild(i);
  function m(M, $, L) {
    const j = document.createElement("button");
    return j.textContent = M, Object.assign(j.style, { background: $, border: `1px solid ${L}`, color: "#dbeafe", padding: "4px 10px", borderRadius: "3px", cursor: "pointer", fontSize: "11px", fontFamily: "inherit" }), j;
  }
  const E = document.createElement("div");
  Object.assign(E.style, { display: "flex", flex: "1", overflow: "hidden" }), t.appendChild(E);
  const y = document.createElement("div");
  Object.assign(y.style, { flex: "1", display: "flex", borderRight: "1px solid rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.3)", overflow: "hidden" }), E.appendChild(y);
  const g = document.createElement("div");
  Object.assign(g.style, { width: "44px", padding: "10px 6px 10px 8px", background: "rgba(0,0,0,0.5)", color: "#64748b", fontFamily: "ui-monospace, Menlo, Consolas, monospace", fontSize: "12px", lineHeight: "1.6", textAlign: "right", borderRight: "1px solid rgba(255,255,255,0.08)", overflow: "hidden", whiteSpace: "pre", userSelect: "none" }), y.appendChild(g);
  const h = document.createElement("textarea");
  Object.assign(h.style, { flex: "1", border: "none", padding: "10px 12px", background: "transparent", color: "#e2e8f0", fontFamily: "ui-monospace, Menlo, Consolas, monospace", fontSize: "12px", lineHeight: "1.6", resize: "none", outline: "none", tabSize: "2" }), h.spellcheck = false, h.value = e.initialCode ?? rt(), h.placeholder = `% Escribe expresiones FEM aqu\xED...
% Ej:  A = 0.06
%      I = 1e-3
%      EI = 200e6 * I`, y.appendChild(h);
  function x() {
    const M = h.value.split(`
`).length;
    let $ = "";
    for (let L = 1; L <= Math.max(M, 5); L++) $ += L + `
`;
    g.textContent = $, g.scrollTop = h.scrollTop;
  }
  h.addEventListener("input", x), h.addEventListener("scroll", () => {
    g.scrollTop = h.scrollTop;
  }), x();
  const S = document.createElement("div");
  Object.assign(S.style, { flex: "1.2", display: "flex", flexDirection: "column", overflow: "hidden" });
  const u = document.createElement("div");
  u.textContent = "OUTPUT", Object.assign(u.style, { padding: "6px 14px", background: "rgba(0,0,0,0.3)", color: "#94a3b8", fontSize: "10.5px", fontWeight: "600", letterSpacing: "0.5px", borderBottom: "1px solid rgba(255,255,255,0.08)" }), S.appendChild(u);
  const b = document.createElement("div");
  Object.assign(b.style, { flex: "1", overflow: "auto", padding: "10px 14px", background: "rgba(255,255,255,0.02)" }), S.appendChild(b), E.appendChild(S);
  let v = null;
  i.addEventListener("mousedown", (M) => {
    if (M.target !== i && M.target !== l) return;
    const $ = t.getBoundingClientRect();
    v = { x: M.clientX - $.left, y: M.clientY - $.top }, M.preventDefault();
  }), window.addEventListener("mousemove", (M) => {
    v && (t.style.left = `${M.clientX - v.x}px`, t.style.top = `${M.clientY - v.y}px`, t.style.right = "auto");
  }), window.addEventListener("mouseup", () => {
    v = null;
  }), h.addEventListener("keydown", (M) => {
    M.ctrlKey && M.key === "Enter" && (M.preventDefault(), _.evaluate());
  });
  async function C() {
    var _a2;
    const M = h.value, $ = { modelVars: ((_a2 = e.getModelVars) == null ? void 0 : _a2.call(e)) ?? {} };
    let L;
    try {
      L = dn(M, $);
    } catch (j) {
      L = [{ type: "error", source: M, error: j.message }];
    }
    await mn(b, L);
  }
  document.body.appendChild(t);
  const _ = { el: t, show() {
    t.style.display = "flex", _.evaluate();
  }, hide() {
    t.style.display = "none";
  }, toggle() {
    t.style.display === "none" ? _.show() : _.hide();
  }, setCode(M) {
    h.value = M, _.evaluate();
  }, evaluate() {
    C();
  }, destroy() {
    t.remove();
  } };
  return _;
}
async function mn(e, t) {
  e.innerHTML = "";
  let i = null;
  try {
    i = await pn();
  } catch {
  }
  t.forEach((o, n) => {
    const s = document.createElement("div");
    Object.assign(s.style, { marginBottom: "10px", paddingBottom: "8px" });
    const r = document.createElement("div");
    if (Object.assign(r.style, { fontFamily: "ui-monospace, Menlo, monospace", fontSize: "10.5px", color: "#64748b", marginBottom: "3px" }), r.textContent = `${n + 1}: ${o.source}`, s.appendChild(r), o.type === "section") Object.assign(s.style, { marginTop: "12px", marginBottom: "8px", padding: "5px 10px", background: "rgba(165,180,252,0.12)", borderLeft: "3px solid #a5b4fc", borderRadius: "3px" }), s.innerHTML = `<div style="font-weight:700;color:#a5b4fc;font-size:13px">${fn(o.title || "")}</div>`;
    else if (o.type === "comment") {
      const a = document.createElement("div");
      Object.assign(a.style, { color: "#86efac", fontStyle: "italic", fontSize: "11.5px" }), a.textContent = o.value || "", s.appendChild(a);
    } else if (o.type === "error") {
      const a = document.createElement("div");
      Object.assign(a.style, { color: "#f87171", padding: "5px 8px", background: "rgba(248,113,113,0.1)", borderRadius: "3px", fontFamily: "monospace", fontSize: "11px" }), a.textContent = `\u274C ${o.error}`, s.appendChild(a);
    } else {
      const a = document.createElement("div");
      if (Object.assign(a.style, { padding: "6px 10px", background: "rgba(255,255,255,0.03)", borderLeft: "2px solid #fde68a", borderRadius: "3px", overflow: "auto" }), o.latex && i) try {
        i.render(o.latex, a, { throwOnError: false, displayMode: true });
      } catch {
        a.textContent = JSON.stringify(o.value);
      }
      else a.textContent = JSON.stringify(o.value);
      s.appendChild(a);
    }
    e.appendChild(s);
  });
}
function fn(e) {
  return e.replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
}
const wt = `
CLI ready. Commands:
  cad.addNode(x, y, z)              \u2192 returns node index
  cad.addFrame(i, j)                \u2192 returns element index
  cad.addSupport(n, [ux,uy,uz,rx,ry,rz])  | cad.addSupport(n, "fixed"|"pinned")
  cad.addLoad(n, [fx, fy, fz, mx, my, mz])
  cad.setSection(e, { E, A, Iy, Iz, J, ... })
  cad.clear()                       \u2014 reset model
  cad.info()                        \u2014 print model size
  cad.listNodes() / cad.listElements()
  cad.solve()                       \u2014 re-run solver
High-level generators:
  cad.building([5,5], [4,4], [3,3,3])  \u2192 frame 5\xD74 plan, 3 stories
  cad.galpon(12, 20, 6, 3)             \u2192 galp\xF3n 12m span \xD7 20m \xD7 6m \xD7 3 frames
  cad.truss(20, 4, 6)                  \u2192 truss 20m span \xD7 4m height \xD7 6 panels
`.trim();
function hn(e) {
  const t = () => {
    var _a;
    return (_a = e.onModelChange) == null ? void 0 : _a.call(e);
  };
  function i() {
    e.nodeInputs.val.supports || (e.nodeInputs.val.supports = /* @__PURE__ */ new Map()), e.nodeInputs.val.loads || (e.nodeInputs.val.loads = /* @__PURE__ */ new Map());
  }
  return { addNode(o, n, s) {
    const r = e.nodes.val.slice();
    return r.push([o, n, s]), e.nodes.val = r, t(), r.length - 1;
  }, addFrame(o, n) {
    const s = e.elements.val.slice();
    return s.push([o, n]), e.elements.val = s, t(), s.length - 1;
  }, addSupport(o, n) {
    i();
    let s;
    n === "fixed" || n === void 0 ? s = [true, true, true, true, true, true] : n === "pinned" ? s = [true, true, true, false, false, false] : Array.isArray(n) ? s = [n[0], n[1], n[2], n[3], n[4], n[5]] : s = [true, true, true, true, true, true], e.nodeInputs.val.supports.set(o, s), e.nodeInputs.val = { ...e.nodeInputs.val }, t();
  }, addLoad(o, n) {
    i();
    const s = [n[0] ?? 0, n[1] ?? 0, n[2] ?? 0, n[3] ?? 0, n[4] ?? 0, n[5] ?? 0];
    e.nodeInputs.val.loads.set(o, s), e.nodeInputs.val = { ...e.nodeInputs.val }, t();
  }, setSection(o, n) {
    const s = e.elementInputs.val;
    n.E != null && (s.elasticities = s.elasticities ?? /* @__PURE__ */ new Map(), s.elasticities.set(o, n.E)), n.A != null && (s.areas = s.areas ?? /* @__PURE__ */ new Map(), s.areas.set(o, n.A)), n.Iy != null && (s.momentsOfInertiaY = s.momentsOfInertiaY ?? /* @__PURE__ */ new Map(), s.momentsOfInertiaY.set(o, n.Iy)), n.Iz != null && (s.momentsOfInertiaZ = s.momentsOfInertiaZ ?? /* @__PURE__ */ new Map(), s.momentsOfInertiaZ.set(o, n.Iz)), n.J != null && (s.torsionalConstants = s.torsionalConstants ?? /* @__PURE__ */ new Map(), s.torsionalConstants.set(o, n.J)), n.G != null && (s.shearModuli = s.shearModuli ?? /* @__PURE__ */ new Map(), s.shearModuli.set(o, n.G)), e.elementInputs.val = { ...s }, t();
  }, clear() {
    e.nodes.val = [], e.elements.val = [], e.nodeInputs.val = { supports: /* @__PURE__ */ new Map(), loads: /* @__PURE__ */ new Map() }, e.elementInputs.val = {}, t();
  }, info() {
    var _a, _b;
    const o = e.nodes.val.length, n = e.elements.val.length, s = ((_a = e.nodeInputs.val.supports) == null ? void 0 : _a.size) ?? 0, r = ((_b = e.nodeInputs.val.loads) == null ? void 0 : _b.size) ?? 0, a = `Model: ${o} nodes, ${n} elements (${s} supports, ${r} loads)`;
    return console.log(a), a;
  }, listNodes() {
    console.table(e.nodes.val.map((o, n) => ({ idx: n, x: o[0], y: o[1], z: o[2] })));
  }, listElements() {
    console.table(e.elements.val.map((o, n) => ({ idx: n, nodes: o.join(" \u2192 ") })));
  }, solve() {
    t();
  } };
}
function gn() {
  return wt;
}
function xn(e, t) {
  const i = e.trim();
  if (!i || i.startsWith("//") || i.startsWith("#")) return { ok: true, result: void 0 };
  if (i === "help" || i === "?") return { ok: true, result: wt };
  try {
    return { ok: true, result: new Function("cad", `return (${i});`)(t) };
  } catch (o) {
    try {
      return new Function("cad", i)(t), { ok: true, result: void 0 };
    } catch (n) {
      return { ok: false, error: n.message ?? o.message ?? String(n) };
    }
  }
}
function bn(e) {
  var _a, _b, _c;
  const t = document.createElement("div");
  t.className = "hekatan-cli-panel", Object.assign(t.style, { position: "fixed", bottom: ((_a = e.position) == null ? void 0 : _a.bottom) != null ? `${e.position.bottom}px` : "12px", right: ((_b = e.position) == null ? void 0 : _b.right) != null ? `${e.position.right}px` : "12px", left: ((_c = e.position) == null ? void 0 : _c.left) != null ? `${e.position.left}px` : "auto", width: "640px", height: "300px", background: "rgba(10,12,16,0.96)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", boxShadow: "0 6px 24px rgba(0,0,0,0.5)", color: "#86efac", fontFamily: "ui-monospace, Menlo, Consolas, monospace", fontSize: "12px", zIndex: "100", backdropFilter: "blur(6px)", display: e.initiallyVisible ? "flex" : "none", flexDirection: "column", overflow: "hidden" });
  const i = document.createElement("div");
  Object.assign(i.style, { display: "flex", alignItems: "center", gap: "8px", padding: "6px 10px", borderBottom: "1px solid rgba(255,255,255,0.1)", cursor: "move", userSelect: "none", background: "rgba(255,255,255,0.03)", color: "#a5b4fc", fontWeight: "600", fontSize: "12px" });
  const o = document.createElement("span");
  o.textContent = "\u{1F4BB} CLI", Object.assign(o.style, { flex: "1" }), i.appendChild(o);
  const n = document.createElement("button");
  n.textContent = "Clear", Object.assign(n.style, { background: "transparent", border: "1px solid rgba(165,180,252,0.3)", color: "#a5b4fc", padding: "2px 8px", borderRadius: "3px", cursor: "pointer", fontSize: "10.5px" }), n.onclick = () => {
    r.innerHTML = "";
  }, i.appendChild(n);
  const s = document.createElement("button");
  s.textContent = "\xD7", Object.assign(s.style, { background: "transparent", border: "none", color: "#e2e8f0", fontSize: "18px", cursor: "pointer", padding: "0 4px", lineHeight: "1" }), s.onclick = () => y.hide(), i.appendChild(s), t.appendChild(i);
  const r = document.createElement("div");
  Object.assign(r.style, { flex: "1", overflow: "auto", padding: "8px 12px", background: "rgba(0,0,0,0.4)" }), t.appendChild(r);
  const a = document.createElement("div");
  Object.assign(a.style, { display: "flex", alignItems: "center", padding: "6px 12px", borderTop: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" });
  const l = document.createElement("span");
  l.textContent = "\u203A ", Object.assign(l.style, { color: "#fde68a", marginRight: "6px", fontWeight: "600" }), a.appendChild(l);
  const d = document.createElement("input");
  d.type = "text", d.placeholder = "cad.addNode(0,0,0)  \xB7  type 'help'", Object.assign(d.style, { flex: "1", border: "none", background: "transparent", color: "#e2e8f0", outline: "none", fontFamily: "inherit", fontSize: "12px" }), a.appendChild(d), t.appendChild(a);
  let w = null;
  i.addEventListener("mousedown", (g) => {
    if (g.target !== i && g.target !== o) return;
    const h = t.getBoundingClientRect();
    w = { x: g.clientX - h.left, y: g.clientY - h.top }, g.preventDefault();
  }), window.addEventListener("mousemove", (g) => {
    w && (t.style.left = `${g.clientX - w.x}px`, t.style.top = `${g.clientY - w.y}px`, t.style.right = "auto", t.style.bottom = "auto");
  }), window.addEventListener("mouseup", () => {
    w = null;
  });
  const k = [];
  let p = 0;
  function m(g, h = "info") {
    const x = document.createElement("div");
    Object.assign(x.style, { padding: "1px 0", whiteSpace: "pre-wrap", wordBreak: "break-all" }), h === "input" ? x.innerHTML = `<span style="color:#fde68a">\u203A </span><span style="color:#e2e8f0">${yn(g)}</span>` : h === "error" ? (Object.assign(x.style, { color: "#f87171" }), x.textContent = `\u274C ${g}`) : h === "warn" ? (Object.assign(x.style, { color: "#fcd34d" }), x.textContent = `\u26A0 ${g}`) : h === "result" ? (Object.assign(x.style, { color: "#86efac" }), x.textContent = `\u2190 ${g}`) : (Object.assign(x.style, { color: "#cbd5e1" }), x.textContent = g), r.appendChild(x), r.scrollTop = r.scrollHeight;
  }
  function E(g) {
    if (!g.trim()) return;
    m(g, "input"), k.push(g), p = k.length;
    const h = xn(g, e.cad);
    if (h.ok) {
      if (h.result !== void 0) {
        const x = typeof h.result == "object" ? JSON.stringify(h.result, null, 2) : String(h.result);
        m(x, "result");
      }
    } else m(h.error ?? "unknown error", "error");
  }
  m(gn(), "info"), d.addEventListener("keydown", (g) => {
    if (g.key === "Enter") E(d.value), d.value = "";
    else if (g.key === "ArrowUp") p > 0 && (p--, d.value = k[p], g.preventDefault());
    else if (g.key === "ArrowDown") p < k.length - 1 ? (p++, d.value = k[p]) : (p = k.length, d.value = ""), g.preventDefault();
    else if (g.key === "l" && g.ctrlKey) r.innerHTML = "", g.preventDefault();
    else if (g.key === "Tab") {
      const h = d.value, x = h.match(/cad\.(\w*)$/);
      if (x) {
        const u = Object.keys(e.cad).filter((b) => typeof e.cad[b] == "function").filter((b) => b.startsWith(x[1]));
        u.length === 1 ? d.value = h.slice(0, -x[1].length) + u[0] + "(" : u.length > 1 && m(u.join("  "), "info");
      }
      g.preventDefault();
    }
  }), document.body.appendChild(t);
  const y = { el: t, show() {
    t.style.display = "flex", setTimeout(() => d.focus(), 50);
  }, hide() {
    t.style.display = "none";
  }, toggle() {
    t.style.display === "none" ? y.show() : y.hide();
  }, exec(g) {
    E(g);
  }, log(g, h = "info") {
    m(g, h);
  }, destroy() {
    t.remove();
  } };
  return y;
}
function yn(e) {
  return e.replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
}
function wn(e) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: t, elements: i, nodeInputs: o, elementInputs: n, deformOutputs: s, modalOutputs: r } = e, a = [];
  a.push('<!DOCTYPE html><html><head><meta charset="utf-8">'), a.push(`<title>${He(e.title || "FEM Report")}</title>`), a.push('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css">'), a.push('<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js"><\/script>'), a.push('<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.body)"><\/script>'), a.push(`<style>
    body { font-family: ui-sans-serif, system-ui, sans-serif; max-width: 1100px; margin: 24px auto; padding: 0 24px; color: #1e293b; line-height: 1.55; }
    h1 { color: #1a4d8c; border-bottom: 3px solid #1a4d8c; padding-bottom: 8px; }
    h2 { color: #1a4d8c; margin-top: 32px; padding-bottom: 4px; border-bottom: 1px solid #cbd5e1; }
    h3 { color: #475569; }
    table { border-collapse: collapse; width: 100%; margin: 12px 0; font-size: 13px; }
    th, td { border: 1px solid #cbd5e1; padding: 6px 10px; text-align: right; }
    th { background: #1a4d8c; color: white; text-align: center; }
    tr:nth-child(even) { background: #f1f5f9; }
    .latex { font-family: "Times New Roman", serif; padding: 8px 14px; background: #f8fafc; border-left: 3px solid #1a4d8c; margin: 8px 0; }
    .info { background: #fef3c7; border-left: 3px solid #f59e0b; padding: 10px 14px; margin: 12px 0; }
    .ok { color: #15803d; font-weight: 600; }
    .matrix { font-family: ui-monospace, monospace; font-size: 11px; overflow-x: auto; }
    code { background: #e2e8f0; padding: 2px 6px; border-radius: 3px; font-size: 12px; }
    @media print {
      body { font-size: 11pt; max-width: none; }
      h2 { page-break-after: avoid; }
      table { page-break-inside: avoid; }
      .no-print { display: none; }
    }
    .toolbar { position: sticky; top: 0; background: white; padding: 10px 0; border-bottom: 1px solid #cbd5e1; margin-bottom: 16px; }
    .btn { background: #1a4d8c; color: white; border: none; padding: 6px 14px; border-radius: 4px; cursor: pointer; font-size: 13px; margin-right: 8px; }
  </style>`), a.push("</head><body>"), a.push('<div class="toolbar no-print">'), a.push('  <button class="btn" onclick="window.print()">\u{1F5A8} Imprimir / PDF</button>'), a.push('  <button class="btn" onclick="window.close()">\u2715 Cerrar</button>'), a.push("</div>"), a.push(`<h1>${He(e.title || "Finite Element Analysis \u2014 Step-by-Step Report")}</h1>`), e.subtitle && a.push(`<p style="color:#64748b;font-style:italic">${He(e.subtitle)}</p>`), a.push('<p style="color:#64748b">Complete FEM derivation from element formulation to final results.</p>'), a.push("<h2>1. Input Data</h2>");
  const l = i.filter((p) => p.length === 2).length, d = i.filter((p) => p.length === 3 || p.length === 4).length, w = i.filter((p) => p.length === 8).length, k = t.length * 6;
  a.push(`<table style="width:auto"><tr><td style="text-align:left">Number of nodes</td><td>${t.length}</td></tr>`), a.push(`<tr><td style="text-align:left">Number of elements</td><td>${i.length} (${l} frames, ${d} shells, ${w} solids)</td></tr>`), a.push('<tr><td style="text-align:left">DOFs per node</td><td>6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>'), a.push(`<tr><td style="text-align:left">Total DOFs</td><td>${k}</td></tr></table>`), a.push("<h3>1.1 Node Coordinates</h3>"), a.push("<table><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr>");
  for (let p = 0; p < Math.min(t.length, 50); p++) {
    const m = t[p];
    a.push(`<tr><td>${p}</td><td>${Fe(m[0])}</td><td>${Fe(m[1])}</td><td>${Fe(m[2])}</td></tr>`);
  }
  t.length > 50 && a.push(`<tr><td colspan="4" style="text-align:center;font-style:italic">... ${t.length - 50} m\xE1s</td></tr>`), a.push("</table>"), a.push("<h3>1.2 Element Connectivity</h3>"), a.push("<table><tr><th>Element</th><th>Type</th><th>Nodes</th></tr>");
  for (let p = 0; p < Math.min(i.length, 40); p++) {
    const m = i[p], E = m.length === 2 ? "Frame" : m.length === 3 ? "Shell-CST" : m.length === 4 ? "Shell-Q4" : "Solid-H8";
    a.push(`<tr><td>${p}</td><td>${E}</td><td>${m.join(" \u2192 ")}</td></tr>`);
  }
  i.length > 40 && a.push(`<tr><td colspan="3" style="text-align:center;font-style:italic">... ${i.length - 40} m\xE1s</td></tr>`), a.push("</table>"), a.push("<h3>1.3 Section Properties (Frames)</h3>"), a.push("<table><tr><th>Element</th><th>E</th><th>A</th><th>I<sub>y</sub></th><th>I<sub>z</sub></th><th>J</th></tr>");
  for (let p = 0; p < Math.min(l, 30); p++) {
    const m = (_a = n.elasticities) == null ? void 0 : _a.get(p), E = (_b = n.areas) == null ? void 0 : _b.get(p), y = (_c = n.momentsOfInertiaY) == null ? void 0 : _c.get(p), g = (_d = n.momentsOfInertiaZ) == null ? void 0 : _d.get(p), h = (_e = n.torsionalConstants) == null ? void 0 : _e.get(p);
    a.push(`<tr><td>${p}</td><td>${me(m)}</td><td>${me(E)}</td><td>${me(y)}</td><td>${me(g)}</td><td>${me(h)}</td></tr>`);
  }
  if (l > 30 && a.push(`<tr><td colspan="6" style="text-align:center;font-style:italic">... ${l - 30} m\xE1s</td></tr>`), a.push("</table>"), a.push("<h3>1.4 Boundary Conditions (Supports)</h3>"), o.supports && o.supports.size > 0) {
    a.push("<table><tr><th>Node</th><th>U<sub>x</sub></th><th>U<sub>y</sub></th><th>U<sub>z</sub></th><th>R<sub>x</sub></th><th>R<sub>y</sub></th><th>R<sub>z</sub></th></tr>");
    for (const [p, m] of o.supports) a.push(`<tr><td>${p}</td>${m.map((E) => `<td>${E ? "\u2713" : ""}</td>`).join("")}</tr>`);
    a.push("</table>");
  }
  if (a.push("<h3>1.5 Applied Loads</h3>"), o.loads && o.loads.size > 0) {
    a.push("<table><tr><th>Node</th><th>F<sub>x</sub></th><th>F<sub>y</sub></th><th>F<sub>z</sub></th><th>M<sub>x</sub></th><th>M<sub>y</sub></th><th>M<sub>z</sub></th></tr>");
    for (const [p, m] of o.loads) a.push(`<tr><td>${p}</td>${m.map((E) => `<td>${Fe(E)}</td>`).join("")}</tr>`);
    a.push("</table>");
  }
  if (l > 0) {
    a.push("<h2>2. Element Stiffness Matrices</h2>"), a.push('<div class="latex">$$ K^e_{\\text{local}} = \\text{(12\xD712)} \\quad \\text{for each frame element} $$</div>');
    const p = i[0];
    if (p.length === 2 && t[p[0]] && t[p[1]]) {
      const m = { E: ((_f = n.elasticities) == null ? void 0 : _f.get(0)) ?? 2e8, G: ((_g = n.shearModuli) == null ? void 0 : _g.get(0)) ?? 8e7, A: ((_h = n.areas) == null ? void 0 : _h.get(0)) ?? 0.01, Iy: ((_i = n.momentsOfInertiaY) == null ? void 0 : _i.get(0)) ?? 1e-4, Iz: ((_j = n.momentsOfInertiaZ) == null ? void 0 : _j.get(0)) ?? 1e-4, J: ((_k = n.torsionalConstants) == null ? void 0 : _k.get(0)) ?? 1e-4 };
      try {
        const E = bt({ ni: t[p[0]], nj: t[p[1]] }, m);
        a.push(`<h3>2.1 Element 0 (sample) \u2014 L = ${E.L.toFixed(3)} m</h3>`), a.push(dt("K_local (12\xD712)", E.K_local, 11)), a.push('<div class="latex">$$ T_{12 \\times 12} = \\text{block-diag}(R, R, R, R), \\quad K_{\\text{global}} = T^T \\cdot K_{\\text{local}} \\cdot T $$</div>'), a.push(dt("K_global (12\xD712)", E.K_global, 11));
      } catch (E) {
        a.push(`<div class="info">Could not compute K_local for element 0: ${E.message}</div>`);
      }
    }
  }
  if (a.push("<h2>3. Global Assembly & Solve</h2>"), a.push('<div class="latex">$$ K_{\\text{sys}} \\cdot u = F \\quad \\Rightarrow \\quad u = K_{\\text{sys}}^{-1} \\cdot F $$</div>'), a.push("<p>El sistema global se resuelve usando descomposici\xF3n LU dispersa (SparseLU) para sistemas grandes, o LU densa para sistemas peque\xF1os (&lt; 200 DOFs).</p>"), s == null ? void 0 : s.deformations) {
    a.push("<h2>4. Nodal Displacements</h2>"), a.push("<table><tr><th>Node</th><th>U<sub>x</sub></th><th>U<sub>y</sub></th><th>U<sub>z</sub></th><th>R<sub>x</sub></th><th>R<sub>y</sub></th><th>R<sub>z</sub></th></tr>");
    let p = 0;
    for (const [m, E] of s.deformations) {
      if (p >= 30) break;
      a.push(`<tr><td>${m}</td>${E.map((y) => `<td>${me(y)}</td>`).join("")}</tr>`), p++;
    }
    s.deformations.size > 30 && a.push(`<tr><td colspan="7" style="text-align:center;font-style:italic">... ${s.deformations.size - 30} m\xE1s</td></tr>`), a.push("</table>");
  }
  if (s == null ? void 0 : s.reactions) {
    a.push("<h2>5. Support Reactions</h2>"), a.push('<div class="latex">$$ F_{\\text{reaction}} = K_{\\text{fixed-fixed}} \\cdot u_{\\text{free}} - F_{\\text{ext, fixed}} $$</div>'), a.push("<table><tr><th>Node</th><th>F<sub>x</sub></th><th>F<sub>y</sub></th><th>F<sub>z</sub></th><th>M<sub>x</sub></th><th>M<sub>y</sub></th><th>M<sub>z</sub></th></tr>");
    for (const [p, m] of s.reactions) a.push(`<tr><td>${p}</td>${m.map((E) => `<td>${me(E)}</td>`).join("")}</tr>`);
    a.push("</table>");
  }
  if (r == null ? void 0 : r.frequencies) {
    a.push("<h2>6. Modal Analysis</h2>"), a.push('<div class="latex">$$ (K - \\omega^2 M)\\,\\phi = 0 $$</div>'), a.push("<table><tr><th>Mode</th><th>\u03C9 (rad/s)</th><th>f (Hz)</th><th>T (s)</th></tr>");
    for (let p = 0; p < r.frequencies.length; p++) {
      const m = r.frequencies[p];
      a.push(`<tr><td>${p + 1}</td><td>${(2 * Math.PI * m).toFixed(3)}</td><td>${m.toFixed(3)}</td><td>${(1 / m).toFixed(4)}</td></tr>`);
    }
    a.push("</table>");
  }
  return a.push(`<hr><p style="font-size:11px;color:#64748b;text-align:center">Generated by Hekatan Struct \xB7 ${(/* @__PURE__ */ new Date()).toLocaleString()}</p>`), a.push("</body></html>"), a.join(`
`);
}
function vn(e) {
  const t = wn(e), i = window.open("", "_blank", "width=1100,height=800");
  if (!i) {
    alert("Popup bloqueado. Permite popups para ver el reporte.");
    return;
  }
  i.document.open(), i.document.write(t), i.document.close();
}
function Fe(e) {
  return e == null ? "\u2014" : Math.abs(e) < 1e-12 ? "0" : Math.abs(e) >= 1e5 || Math.abs(e) < 1e-3 ? e.toExponential(3) : parseFloat(e.toFixed(4)).toString();
}
function me(e) {
  return e == null ? "\u2014" : Math.abs(e) < 1e-12 ? "0" : e.toExponential(3);
}
function dt(e, t, i) {
  const o = [];
  o.push(`<div class="matrix"><strong>${e}</strong><table>`);
  for (const n of t) o.push(`<tr>${n.map((s) => `<td style="font-size:9px">${Math.abs(s) < 1e-10 ? "0" : s.toExponential(2)}</td>`).join("")}</tr>`);
  return o.push("</table></div>"), o.join("");
}
function He(e) {
  return e.replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
}
class kn {
  constructor() {
    this._inspect = null, this._modal = null, this._solverLog = null, this._calc = null, this._cli = null;
  }
  toggleInspect(t) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (this._inspect || (this._inspect = Jt()), this._inspect.el.style.display === "flex" || this._inspect.el.style.display === "block") {
      this._inspect.hide();
      return;
    }
    const i = t.nodes.rawVal, o = t.elements.rawVal, n = t.elementInputs.rawVal, s = o.findIndex((m) => (m == null ? void 0 : m.length) === 2);
    if (s < 0) {
      alert("No hay elementos frame en el modelo. Carga un ejemplo con frames primero.");
      return;
    }
    const r = o[s], a = ((_a = n.elasticities) == null ? void 0 : _a.get(s)) ?? 2e8, l = ((_b = n.shearModuli) == null ? void 0 : _b.get(s)) ?? a / 2.6, d = ((_c = n.areas) == null ? void 0 : _c.get(s)) ?? 0.01, w = ((_d = n.momentsOfInertiaY) == null ? void 0 : _d.get(s)) ?? 1e-4, k = ((_e = n.momentsOfInertiaZ) == null ? void 0 : _e.get(s)) ?? 1e-4, p = ((_f = n.torsionalConstants) == null ? void 0 : _f.get(s)) ?? 1e-4;
    this._inspect.show({ index: s, type: "frame", nodes: [i[r[0]], i[r[1]]], nodeIndices: [r[0], r[1]], frameProps: { E: a, G: l, A: d, Iy: w, Iz: k, J: p }, sectionLabel: ((_g = n.sectionLabels) == null ? void 0 : _g.get(s)) ?? "\u2014" });
  }
  toggleModal(t) {
    var _a;
    if (this._modal || (this._modal = en({ initiallyVisible: false })), this._modal.el.style.display !== "none") {
      this._modal.hide();
      return;
    }
    if (((_a = t.currentExample) == null ? void 0 : _a.hasModal) && t.currentExample.runModal) {
      const i = { nodes: t.nodes, elements: t.elements, nodeInputs: t.nodeInputs, elementInputs: t.elementInputs, deformOutputs: t.deformOutputs, analyzeOutputs: t.analyzeOutputs, objects3D: t.objects3D };
      try {
        t.currentExample.runModal(t.currentParams ?? {}, i, t.modalPanelLegacy);
      } catch (o) {
        alert("Error en runModal: " + o.message);
      }
    }
    this._modal.show();
  }
  toggleSolverLog(t) {
    var _a, _b;
    if (this._solverLog || (this._solverLog = on()), this._solverLog.el.style.display === "block") {
      this._solverLog.hide();
      return;
    }
    const i = t.nodes.rawVal, o = t.elements.rawVal, n = t.nodeInputs.rawVal, s = t.deformOutputs.rawVal, r = ((_a = n.supports) == null ? void 0 : _a.size) ?? 0, a = ((_b = n.loads) == null ? void 0 : _b.size) ?? 0, l = i.length * 6;
    let d = 0, w = -1, k = "uz";
    if (s == null ? void 0 : s.deformations) for (const [y, g] of s.deformations) for (let h = 0; h < 3; h++) Math.abs(g[h]) > d && (d = Math.abs(g[h]), w = y, k = ["ux", "uy", "uz"][h]);
    const p = o.filter((y) => y.length === 2).length, m = o.filter((y) => y.length === 3 || y.length === 4).length, E = o.filter((y) => y.length === 8).length;
    this._solverLog.update({ nNodes: i.length, nElements: o.length, nFrames: p, nShells: m, nSolids: E, nSupports: r, nLoads: a, totalDOFs: l, freeDOFs: l - r * 6, timings: { assembly: 1, solve: 2, internalForces: 1, total: 6 }, maxDisplacement: w >= 0 ? { value: d, nodeIdx: w, component: k } : void 0, solverName: "SparseLU (deformCpp)" }), this._solverLog.show();
  }
  toggleCalc(t) {
    this._calc || (this._calc = un({ getModelVars: () => cn({ nodes: t.nodes.rawVal, elements: t.elements.rawVal }) })), this._calc.toggle();
  }
  toggleCli(t) {
    if (!this._cli) {
      const i = hn({ nodes: t.nodes, elements: t.elements, nodeInputs: t.nodeInputs, elementInputs: t.elementInputs, deformOutputs: t.deformOutputs, onModelChange: () => {
        var _a;
        return (_a = t.onRebuild) == null ? void 0 : _a.call(t);
      } });
      this._cli = bn({ cad: i });
    }
    this._cli.toggle();
  }
  openReport(t) {
    var _a;
    vn({ nodes: t.nodes.rawVal, elements: t.elements.rawVal, nodeInputs: t.nodeInputs.rawVal, elementInputs: t.elementInputs.rawVal, deformOutputs: t.deformOutputs.rawVal, analyzeOutputs: t.analyzeOutputs.rawVal, title: ((_a = t.currentExample) == null ? void 0 : _a.name) ?? "Hekatan FEM Report", subtitle: `Generado desde workspace \xB7 ${(/* @__PURE__ */ new Date()).toLocaleString()}` });
  }
  forceRecalc(t) {
    var _a, _b;
    try {
      if ((_a = t.onRebuild) == null ? void 0 : _a.call(t), ((_b = t.currentExample) == null ? void 0 : _b.hasModal) && t.currentExample.runModal) {
        const i = { nodes: t.nodes, elements: t.elements, nodeInputs: t.nodeInputs, elementInputs: t.elementInputs, deformOutputs: t.deformOutputs, analyzeOutputs: t.analyzeOutputs, objects3D: t.objects3D };
        try {
          t.currentExample.runModal(t.currentParams ?? {}, i, t.modalPanelLegacy);
        } catch {
        }
      }
    } catch (i) {
      alert("Error al recalcular: " + i.message);
    }
  }
  destroy() {
    var _a, _b, _c, _d, _e;
    (_a = this._inspect) == null ? void 0 : _a.destroy(), (_b = this._modal) == null ? void 0 : _b.destroy(), (_c = this._solverLog) == null ? void 0 : _c.destroy(), (_d = this._calc) == null ? void 0 : _d.destroy(), (_e = this._cli) == null ? void 0 : _e.destroy(), this._inspect = null, this._modal = null, this._solverLog = null, this._calc = null, this._cli = null;
  }
  get inspectPanel() {
    return this._inspect;
  }
  get modalPanel() {
    return this._modal;
  }
  get solverLog() {
    return this._solverLog;
  }
  get calcPanel() {
    return this._calc;
  }
  get cliPanel() {
    return this._cli;
  }
}
let Ue = null;
function En() {
  return Ue || (Ue = new kn()), Ue;
}
function In(e, t, i = {}) {
  var _a;
  const o = En(), n = { inspect: true, modal: true, solverLog: true, calc: true, cli: true, report: true, recalc: true, ...i.visibleButtons ?? {} }, s = e.addFolder({ title: i.title ?? "\u{1F6E0} Herramientas FEM", expanded: i.expanded ?? false });
  return n.inspect && s.addButton({ title: "\u{1F50D} Inspect \u2014 derivaci\xF3n FEM por elemento" }).on("click", () => o.toggleInspect(t)), n.modal && ((_a = t.currentExample) == null ? void 0 : _a.hasModal) && s.addButton({ title: "\u{1F4C8} Modal+ ASCE 7-22 \xA712.9.1" }).on("click", () => o.toggleModal(t)), n.solverLog && s.addButton({ title: "\u{1F4DC} Solver Log + tiempos" }).on("click", () => o.toggleSolverLog(t)), n.calc && s.addButton({ title: "\u{1F9EE} Calculadora FEM (MATLAB-style)" }).on("click", () => o.toggleCalc(t)), n.cli && s.addButton({ title: "\u{1F4BB} CLI cad.* (terminal)" }).on("click", () => o.toggleCli(t)), n.report && s.addButton({ title: "\u{1F4C4} Report Explained (PDF imprimible)" }).on("click", () => o.openReport(t)), n.recalc && s.addButton({ title: "\u25B6 Calcular (forzar re-build)" }).on("click", () => o.forceRecalc(t)), s;
}
const ce = 1e-6;
function Mn(e, t = 2, i = 5) {
  var _a, _b;
  const o = { newSlabElements: 0, splitFrameSegments: 0, newNodes: 0 }, n = [];
  for (let x = 0; x < e.elements.length; x++) {
    const S = e.elements[x];
    if (S.length !== 4) continue;
    const u = S.map((C) => e.nodes[C]), b = Math.abs(u[1][0] - u[0][0]), v = Math.abs(u[3][1] - u[0][1]);
    Math.max(b, v) > t && n.push(x);
  }
  if (n.length === 0) return o;
  const s = (x, S, u) => `${x.toFixed(4)}_${S.toFixed(4)}_${u.toFixed(4)}`, r = /* @__PURE__ */ new Map();
  for (let x = 0; x < e.nodes.length; x++) {
    const [S, u, b] = e.nodes[x];
    r.set(s(S, u, b), x);
  }
  const a = [], l = /* @__PURE__ */ new Map();
  for (const x of n) {
    const u = e.elements[x].map((C) => e.nodes[C]), b = u[0][2], v = [];
    for (let C = 0; C <= i; C++) {
      const _ = [];
      for (let M = 0; M <= i; M++) {
        const $ = C / i, L = M / i, j = (1 - $) * (1 - L) * u[0][0] + $ * (1 - L) * u[1][0] + $ * L * u[2][0] + (1 - $) * L * u[3][0], B = (1 - $) * (1 - L) * u[0][1] + $ * (1 - L) * u[1][1] + $ * L * u[2][1] + (1 - $) * L * u[3][1], N = s(j, B, b);
        let W = r.get(N);
        W === void 0 && (e.nodes.push([j, B, b]), W = e.nodes.length - 1, r.set(N, W), o.newNodes++), _.push(W);
      }
      v.push(_);
    }
    for (let C = 0; C < i; C++) for (let _ = 0; _ < i; _++) {
      const M = e.elements.length + a.length;
      a.push([v[C][_], v[C + 1][_], v[C + 1][_ + 1], v[C][_ + 1]]), l.set(M, x), o.newSlabElements++;
    }
  }
  for (let x = 0; x < e.elements.length; x++) {
    const S = e.elements[x];
    if (S.length !== 2) continue;
    const u = e.nodes[S[0]], b = e.nodes[S[1]];
    if (Math.abs(u[2] - b[2]) > ce) continue;
    const v = u[2], C = b[0] - u[0], _ = b[1] - u[1];
    if (Math.sqrt(C * C + _ * _) < ce) continue;
    const $ = [];
    for (let B = 0; B < e.nodes.length; B++) {
      if (B === S[0] || B === S[1]) continue;
      const [N, W, V] = e.nodes[B];
      if (Math.abs(V - v) > ce) continue;
      const F = Math.abs(C) > ce ? (N - u[0]) / C : (W - u[1]) / _;
      if (F <= ce || F >= 1 - ce) continue;
      const Q = u[0] + F * C, ne = u[1] + F * _;
      Math.abs(N - Q) > ce || Math.abs(W - ne) > ce || $.push({ t: F, nodeIdx: B });
    }
    if ($.length === 0) continue;
    $.sort((B, N) => B.t - N.t);
    let L = S[0];
    const j = [];
    for (const B of $) j.push([L, B.nodeIdx]), L = B.nodeIdx;
    j.push([L, S[1]]), e.elements[x] = j[0];
    for (let B = 1; B < j.length; B++) {
      const N = e.elements.length + a.length;
      a.push(j[B]), l.set(N, x), o.splitFrameSegments++;
    }
  }
  for (const x of a) e.elements.push(x);
  const d = e.elementInputs, w = [d.elasticities, d.shearModuli, d.poissonsRatios, d.thicknesses, d.densities, d.areas, d.momentsOfInertiaZ, d.momentsOfInertiaY, d.torsionalConstants, d.shearAreasY, d.shearAreasZ, d.plateFormulations];
  for (const [x, S] of l) {
    for (const u of w) u && u.has(S) && u.set(x, u.get(S));
    ((_a = d.sectionShapes) == null ? void 0 : _a.has(S)) && d.sectionShapes.set(x, d.sectionShapes.get(S)), ((_b = d.rigidOffsets) == null ? void 0 : _b.has(S)) && d.rigidOffsets.set(x, [...d.rigidOffsets.get(S)]);
  }
  const k = new Set(n), p = /* @__PURE__ */ new Map(), m = [], E = [], y = [], g = [];
  for (let x = 0; x < e.elements.length; x++) k.has(x) || (p.set(x, m.length), m.push(e.elements[x]), E.push(e.elementTypes[x] ?? ""), y.push(e.elementNames[x] ?? ""), g.push(e.elementStories[x] ?? ""));
  const h = (x) => {
    if (!x) return x;
    const S = /* @__PURE__ */ new Map();
    for (const [u, b] of x) {
      const v = p.get(u);
      v !== void 0 && S.set(v, b);
    }
    return S;
  };
  return e.elements = m, e.elementTypes = E, e.elementNames = y, e.elementStories = g, e.elementInputs.elasticities = h(d.elasticities), e.elementInputs.shearModuli = h(d.shearModuli), e.elementInputs.poissonsRatios = h(d.poissonsRatios), e.elementInputs.thicknesses = h(d.thicknesses), e.elementInputs.densities = h(d.densities), e.elementInputs.areas = h(d.areas), e.elementInputs.momentsOfInertiaZ = h(d.momentsOfInertiaZ), e.elementInputs.momentsOfInertiaY = h(d.momentsOfInertiaY), e.elementInputs.torsionalConstants = h(d.torsionalConstants), e.elementInputs.shearAreasY = h(d.shearAreasY), e.elementInputs.shearAreasZ = h(d.shearAreasZ), e.elementInputs.plateFormulations = h(d.plateFormulations), e.elementInputs.sectionShapes = h(d.sectionShapes), e.elementInputs.rigidOffsets = h(d.rigidOffsets), e.elementSections = h(e.elementSections), o;
}
function Ln(e) {
  const { mesh: t, viewerElm: i, onStatusChange: o } = e, n = e.scalePercent ?? 5, [s, r] = e.visFrequencyRange ?? [0.5, 3];
  let a = null, l = 0, d = 0, w = [], k = [];
  function p() {
    o == null ? void 0 : o();
  }
  function m() {
    var _a;
    if (!a || !a.frequencies || a.frequencies.length === 0) return { mode: "Sin resultados", frequency: "\u2014", period: "\u2014", dominant: "\u2014", state: "\u23F8 Detenido" };
    const h = a.frequencies[l] ?? 0, x = h > 0 ? 1 / h : 0, S = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], u = (_a = a.massParticipation) == null ? void 0 : _a[l];
    let b = "\u2014";
    if (u) {
      let v = 0, C = 0;
      for (let _ = 0; _ < 6; _++) Math.abs(u[_]) > v && (v = Math.abs(u[_]), C = _);
      b = `${S[C]} (${(v * 100).toFixed(0)}%)`;
    }
    return { mode: `Modo ${l + 1} / ${a.frequencies.length}`, frequency: `${h.toFixed(4)} Hz`, period: `${x.toFixed(4)} s`, dominant: b, state: d !== 0 ? "\u25B6 Reproduciendo" : "\u23F8 Pausado" };
  }
  function E() {
    return i.__ctx;
  }
  function y(h) {
    var _a;
    if (d && (cancelAnimationFrame(d), d = 0), h) {
      const x = w.length > 0 ? w : k;
      x.length > 0 && (t.nodes.val = x.map((S) => [...S]), (_a = E()) == null ? void 0 : _a.render());
    }
  }
  function g() {
    var _a, _b;
    if (!a || !a.modeShapes || a.modeShapes.length === 0 || !a.modeShapes[l]) return;
    y(false);
    const h = a.modeShapes[l], x = ((_a = a.frequencies) == null ? void 0 : _a[l]) || 1, S = ((_b = a.frequencies) == null ? void 0 : _b[0]) || 1, u = Math.max(s, Math.min(r, x / S));
    k = t.nodes.rawVal.map((F) => [...F]);
    const b = k.length;
    let v = 1 / 0, C = 1 / 0, _ = 1 / 0, M = -1 / 0, $ = -1 / 0, L = -1 / 0;
    for (const F of k) F[0] < v && (v = F[0]), F[0] > M && (M = F[0]), F[1] < C && (C = F[1]), F[1] > $ && ($ = F[1]), F[2] < _ && (_ = F[2]), F[2] > L && (L = F[2]);
    const j = Math.sqrt((M - v) ** 2 + ($ - C) ** 2 + (L - _) ** 2) || 1;
    let B = 0;
    for (let F = 0; F < b; F++) {
      const Q = h[F * 6] || 0, ne = h[F * 6 + 1] || 0, G = h[F * 6 + 2] || 0, ee = Math.sqrt(Q * Q + ne * ne + G * G);
      ee > B && (B = ee);
    }
    const N = B > 1e-12 ? j * n / 100 / B : 1, W = performance.now(), V = () => {
      var _a2;
      const F = (performance.now() - W) / 1e3, Q = Math.sin(2 * Math.PI * u * F) * N, ne = new Array(b);
      for (let G = 0; G < b; G++) {
        const ee = k[G];
        ne[G] = [ee[0] + (h[G * 6] || 0) * Q, ee[1] + (h[G * 6 + 1] || 0) * Q, ee[2] + (h[G * 6 + 2] || 0) * Q];
      }
      t.nodes.val = ne, (_a2 = E()) == null ? void 0 : _a2.render(), d = requestAnimationFrame(V);
    };
    d = requestAnimationFrame(V), p();
  }
  return { setResults(h) {
    var _a;
    a = h, l >= (((_a = h == null ? void 0 : h.frequencies) == null ? void 0 : _a.length) ?? 0) && (l = 0), w = t.nodes.rawVal.map((x) => [...x]), p();
  }, setMode(h) {
    var _a;
    if (!a) return;
    const x = ((_a = a.frequencies) == null ? void 0 : _a.length) ?? 0;
    l = Math.max(0, Math.min(x - 1, h)), d !== 0 ? g() : p();
  }, play() {
    a && d === 0 && g();
  }, stop() {
    y(true), p();
  }, isPlaying() {
    return d !== 0;
  }, modeCount() {
    var _a;
    return ((_a = a == null ? void 0 : a.frequencies) == null ? void 0 : _a.length) ?? 0;
  }, currentMode() {
    return l;
  }, currentFreq() {
    var _a;
    return ((_a = a == null ? void 0 : a.frequencies) == null ? void 0 : _a[l]) ?? 0;
  }, getStatus() {
    return m();
  }, dispose() {
    y(true), a = null;
  } };
}
const On = { id: "csi-importer", name: "Importar CSI (F2K/E2K/S2K)", category: "Importar", defaultShellResult: "none", availableShellResults: [], params: {}, build(e, t) {
  var _a, _b;
  const i = window.__hekatanImportedCim, o = [], n = [], s = [];
  if (!i || !((_a = i.zapatas) == null ? void 0 : _a.length)) {
    t.nodes.val = [], t.elements.val = [], t.nodeInputs.val = { supports: /* @__PURE__ */ new Map(), loads: /* @__PURE__ */ new Map() }, t.elementInputs.val = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, t.objects3D.val = [], console.log("[CSI Importer] Sin archivo cargado. Usa el folder '\u{1F4E5} Importar archivo' del panel.");
    return;
  }
  let r = 0;
  const a = i.Z ?? 0;
  for (const l of i.zapatas) {
    const d = l.Lz / 2, w = l.Bz / 2;
    o.push([l.xC - d, l.yC - w, a]);
    const k = r++;
    o.push([l.xC + d, l.yC - w, a]);
    const p = r++;
    o.push([l.xC + d, l.yC + w, a]);
    const m = r++;
    o.push([l.xC - d, l.yC + w, a]);
    const E = r++;
    n.push([k, p, m, E]);
    const y = new et(new tt(l.bc, l.bc, 0.5), new nt({ color: 8421504 }));
    y.position.set(l.xCol, l.yCol, a + 0.25), s.push(y);
  }
  if (i.vigasAmarre) {
    const l = [];
    for (const d of i.vigasAmarre) {
      const w = d.z ?? a, k = d.x2 - d.x1, p = d.y2 - d.y1, m = Math.hypot(k, p);
      if (m < 1e-6) continue;
      l.push(new xe(d.x1, d.y1, w)), l.push(new xe(d.x2, d.y2, w));
      const E = new tt(d.b, m, d.h), y = new nt({ color: 2282478, transparent: true, opacity: 0.35 }), g = new et(E, y);
      g.position.set((d.x1 + d.x2) / 2, (d.y1 + d.y2) / 2, w), g.rotateZ(Math.atan2(p, k) - Math.PI / 2), s.push(g);
    }
    if (l.length > 0) {
      const d = new Ve().setFromPoints(l), w = new ct({ color: 2282478, linewidth: 3 });
      s.push(new Mt(d, w));
    }
  }
  t.nodes.val = o, t.elements.val = n, t.nodeInputs.val = { supports: /* @__PURE__ */ new Map(), loads: /* @__PURE__ */ new Map() }, t.elementInputs.val = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, t.objects3D.val = s, console.log(`[CSI Importer] Renderizadas ${i.zapatas.length} zapatas + ${((_b = i.vigasAmarre) == null ? void 0 : _b.length) ?? 0} vigas.`);
} };
function Cn(e, t) {
  if (e.patterns && e.patterns.length > 0) {
    let i = e.patterns[0];
    for (const o of e.patterns) Math.abs(o.scaleFactor) > Math.abs(i.scaleFactor) && (i = o);
    return t.get(i.pattern) ?? null;
  }
  return t.get(e.name) ?? null;
}
function _n(e) {
  return e.map((t, i) => {
    const o = `${Math.abs(t.sf)}${t.case}`;
    return i === 0 ? (t.sf < 0 ? "-" : "") + o : (t.sf < 0 ? " - " : " + ") + o;
  }).join("");
}
function zn(e, t) {
  const i = new Map(t.map((y) => [y.name, y.type])), o = { Dead: [], Live: [], "Live (Roof)": [], Snow: [], Wind: [], Seismic: [] };
  for (const y of e) {
    const g = Cn(y, i);
    g && o[g] && o[g].push(y.name);
  }
  const n = o.Dead[0], s = o.Live[0], r = o["Live (Roof)"][0], a = o.Snow[0], l = r ?? a, d = o.Wind, w = o.Seismic, k = [], p = (y) => {
    const g = y.filter((h) => !!h && !!h.case);
    g.length !== 0 && k.push({ name: `NEC ${_n(g)}`, type: "Linear Add", cases: g.map((h) => ({ case: h.case, scaleFactor: h.sf })) });
  }, m = (y, g) => y ? { case: y, sf: g } : null;
  p([m(n, 1.4)]), p([m(n, 1.2), m(s, 1.6), m(l, 0.5)]), p([m(n, 1.2), m(l, 1.6), m(s, 1)]);
  for (const y of d) p([m(n, 1.2), m(l, 1.6), m(y, 0.5)]);
  for (const y of d) p([m(n, 1.2), m(y, 1), m(s, 1), m(l, 0.5)]), p([m(n, 1.2), m(y, -1), m(s, 1), m(l, 0.5)]);
  for (const y of w) p([m(n, 1.2), m(y, 1), m(s, 1)]), p([m(n, 1.2), m(y, -1), m(s, 1)]);
  for (const y of d) p([m(n, 0.9), m(y, 1)]), p([m(n, 0.9), m(y, -1)]);
  for (const y of w) p([m(n, 0.9), m(y, 1)]), p([m(n, 0.9), m(y, -1)]);
  const E = /* @__PURE__ */ new Set();
  return k.filter((y) => E.has(y.name) ? false : (E.add(y.name), true));
}
function Fn(e, t) {
  const i = new Set(e.map((o) => o.name));
  return [...e, ...t.filter((o) => !i.has(o.name))];
}
export {
  Ln as a,
  Mn as b,
  On as c,
  In as d,
  $n as e,
  zn as g,
  Fn as m
};
