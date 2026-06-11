import { J as Te, B as Ve, V as xe, L as ct, a as pt, f as ut, g as mt, h as ft, i as ht, a2 as St, r as $t, a4 as gt, v as It, d as et, b as tt, a6 as nt, c as Mt } from "./theme-D5p5K0bJ.js";
const Lt = 16478597, Ot = "rgba(251,113,133,0.92)", zt = 6333946, Ft = "rgba(96,165,250,0.92)";
function Tt(e) {
  if (e.length === 0) return "A";
  const t = e[e.length - 1];
  if (/^\d+$/.test(t)) return String(parseInt(t) + 1);
  let i = t.toUpperCase(), s = i.length - 1;
  const n = i.split("");
  for (; s >= 0; ) if (n[s] === "Z") n[s] = "A", s--;
  else return n[s] = String.fromCharCode(n[s].charCodeAt(0) + 1), n.join("");
  return "A" + n.join("");
}
function jt(e, t) {
  return e.length > 0 && e.every((s) => /^N[+-]/.test(s.label)) || e.length === 0 ? `N${t >= 0 ? "+" : ""}${t.toFixed(2)}` : `Nivel ${e.length + 1}`;
}
function Bt(e) {
  const t = new Te();
  t.name = `axis-${e.label}`;
  const i = new Ve().setFromPoints([new xe(...e.start), new xe(...e.end)]), s = new ct({ color: Lt, transparent: true, opacity: 0.85 }), n = new pt(i, s);
  t.add(n);
  const a = document.createElement("canvas");
  a.width = 128, a.height = 128;
  const d = a.getContext("2d");
  d.fillStyle = Ot, d.beginPath(), d.arc(64, 64, 56, 0, Math.PI * 2), d.fill(), d.strokeStyle = "#ffffff", d.lineWidth = 4, d.stroke(), d.fillStyle = "#ffffff", d.font = "bold 60px Consolas, monospace", d.textAlign = "center", d.textBaseline = "middle", d.fillText(e.label, 64, 68);
  const o = new ut(a);
  o.minFilter = mt;
  const l = new ft({ map: o, depthTest: false }), r = new ht(l);
  return r.position.set(...e.end), r.scale.set(0.3, 0.3, 1), r.userData.isAxisLabel = true, t.add(r), t;
}
function At(e, t = 20) {
  const i = new Te();
  i.name = `level-${e.label}`;
  const s = new Ve().setFromPoints([new xe(-t, 0, e.z), new xe(t, 0, e.z)]), n = new St({ color: zt, transparent: true, opacity: 0.7, dashSize: 0.3, gapSize: 0.15 }), a = new pt(s, n);
  a.computeLineDistances(), i.add(a);
  const d = document.createElement("canvas");
  d.width = 256, d.height = 64;
  const o = d.getContext("2d");
  o.fillStyle = Ft, o.fillRect(0, 0, 256, 64), o.strokeStyle = "#ffffff", o.lineWidth = 3, o.strokeRect(2, 2, 252, 60), o.fillStyle = "#ffffff", o.font = "bold 36px Consolas, monospace", o.textAlign = "center", o.textBaseline = "middle", o.fillText(e.label, 128, 36);
  const l = new ut(d);
  l.minFilter = mt;
  const r = new ft({ map: l, depthTest: false }), b = new ht(r);
  return b.position.set(t + 1, 0, e.z), b.scale.set(2, 0.5, 1), b.userData.isLevelLabel = true, i.add(b), i;
}
const Rt = { id: "ollama", name: "\u{1F999} Ollama (local, gratis)", supportsVision: true, models: [{ id: "qwen2.5-coder:7b", name: "Qwen 2.5 Coder 7B (c\xF3digo)", vision: false }, { id: "llama3.2-vision:11b", name: "Llama 3.2 Vision 11B", vision: true }, { id: "llava:7b", name: "LLaVA 7B (vision)", vision: true }, { id: "qwen2.5:7b", name: "Qwen 2.5 7B", vision: false }, { id: "llama3.1:8b", name: "Llama 3.1 8B", vision: false }], defaultModel: "qwen2.5-coder:7b", requiresKey: false, requiresLocal: true, async send({ msg: e, system: t, model: i }) {
  var _a, _b;
  const s = { role: "user", content: e.text };
  ((_a = e.images) == null ? void 0 : _a.length) && (s.images = e.images.map((d) => d.base64));
  let n;
  try {
    n = await fetch("http://localhost:11434/api/chat", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ model: i, messages: [{ role: "system", content: t }, s], stream: false }) });
  } catch {
    throw new Error(`Ollama no est\xE1 corriendo en localhost:11434.

Para usar Ollama:
1. Descargalo de ollama.com/download
2. Instal\xE1 un modelo: ollama pull ` + i + `
3. Verific\xE1 que est\xE9 activo (Ollama corre como servicio en background)

O cambi\xE1 a otro provider (Gemini/Groq/OpenRouter) que solo requiere API key.`);
  }
  if (!n.ok) {
    const d = await n.text();
    throw n.status === 404 ? new Error(`Modelo "${i}" no instalado. Ejecut\xE1: ollama pull ${i}`) : new Error(`Ollama error ${n.status}: ${d}`);
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
const Pt = { id: "gemini", name: "\u2728 Gemini Flash (free tier)", supportsVision: true, models: [{ id: "gemini-2.0-flash-exp", name: "Gemini 2.0 Flash (m\xE1s nuevo)", vision: true }, { id: "gemini-1.5-flash", name: "Gemini 1.5 Flash (estable)", vision: true }, { id: "gemini-1.5-pro", name: "Gemini 1.5 Pro (mejor calidad)", vision: true }], defaultModel: "gemini-2.0-flash-exp", requiresKey: true, requiresLocal: false, async send({ msg: e, system: t, apiKey: i, model: s }) {
  var _a, _b, _c, _d, _e;
  const n = [{ text: e.text }];
  for (const o of e.images ?? []) n.push({ inline_data: { mime_type: o.mimeType, data: o.base64 } });
  const a = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${s}:generateContent?key=${i}`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ systemInstruction: { parts: [{ text: t }] }, contents: [{ role: "user", parts: n }], generationConfig: { temperature: 0.2, maxOutputTokens: 4096 } }) });
  if (!a.ok) throw new Error(`Gemini error ${a.status}: ${await a.text()}`);
  return ((_e = (_d = (_c = (_b = (_a = (await a.json()).candidates) == null ? void 0 : _a[0]) == null ? void 0 : _b.content) == null ? void 0 : _c.parts) == null ? void 0 : _d[0]) == null ? void 0 : _e.text) ?? "";
} }, Dt = { id: "groq", name: "\u26A1 Groq (r\xE1pido, free)", supportsVision: true, models: [{ id: "llama-3.3-70b-versatile", name: "Llama 3.3 70B (m\xE1s capaz)", vision: false }, { id: "llama-3.2-90b-vision-preview", name: "Llama 3.2 90B Vision", vision: true }, { id: "llama-3.1-70b-versatile", name: "Llama 3.1 70B", vision: false }, { id: "mixtral-8x7b-32768", name: "Mixtral 8x7B", vision: false }], defaultModel: "llama-3.3-70b-versatile", requiresKey: true, requiresLocal: false, async send({ msg: e, system: t, apiKey: i, model: s }) {
  var _a, _b, _c, _d;
  const n = [{ type: "text", text: e.text }];
  for (const o of e.images ?? []) n.push({ type: "image_url", image_url: { url: `data:${o.mimeType};base64,${o.base64}` } });
  const a = await fetch("https://api.groq.com/openai/v1/chat/completions", { method: "POST", headers: { Authorization: `Bearer ${i}`, "content-type": "application/json" }, body: JSON.stringify({ model: s, messages: [{ role: "system", content: t }, { role: "user", content: ((_a = e.images) == null ? void 0 : _a.length) ? n : e.text }], temperature: 0.2, max_tokens: 4096 }) });
  if (!a.ok) throw new Error(`Groq error ${a.status}: ${await a.text()}`);
  return ((_d = (_c = (_b = (await a.json()).choices) == null ? void 0 : _b[0]) == null ? void 0 : _c.message) == null ? void 0 : _d.content) ?? "";
} }, qt = { id: "openrouter", name: "\u{1F310} OpenRouter (modelos free)", supportsVision: true, models: [{ id: "deepseek/deepseek-chat-v3:free", name: "DeepSeek V3 free (excelente c\xF3digo)", vision: false }, { id: "meta-llama/llama-3.3-70b-instruct:free", name: "Llama 3.3 70B free", vision: false }, { id: "meta-llama/llama-3.2-90b-vision-instruct:free", name: "Llama 3.2 90B Vision free", vision: true }, { id: "google/gemini-2.0-flash-exp:free", name: "Gemini 2.0 Flash free", vision: true }, { id: "qwen/qwen-2.5-coder-32b-instruct:free", name: "Qwen 2.5 Coder 32B free", vision: false }], defaultModel: "deepseek/deepseek-chat-v3:free", requiresKey: true, requiresLocal: false, async send({ msg: e, system: t, apiKey: i, model: s }) {
  var _a, _b, _c, _d;
  const n = [{ type: "text", text: e.text }];
  for (const o of e.images ?? []) n.push({ type: "image_url", image_url: { url: `data:${o.mimeType};base64,${o.base64}` } });
  const a = await fetch("https://openrouter.ai/api/v1/chat/completions", { method: "POST", headers: { Authorization: `Bearer ${i}`, "content-type": "application/json", "HTTP-Referer": "https://giorgioburbanelli89.github.io/hekatan-struct/", "X-Title": "Hekatan Struct" }, body: JSON.stringify({ model: s, messages: [{ role: "system", content: t }, { role: "user", content: ((_a = e.images) == null ? void 0 : _a.length) ? n : e.text }], temperature: 0.2, max_tokens: 4096 }) });
  if (!a.ok) throw new Error(`OpenRouter error ${a.status}: ${await a.text()}`);
  return ((_d = (_c = (_b = (await a.json()).choices) == null ? void 0 : _b[0]) == null ? void 0 : _c.message) == null ? void 0 : _d.content) ?? "";
} }, xt = [Rt, Pt, Dt, qt];
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
    const s = new FileReader();
    s.onload = () => {
      const n = s.result, a = n.indexOf(",");
      t(a >= 0 ? n.slice(a + 1) : n);
    }, s.onerror = () => i(s.error), s.readAsDataURL(e);
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
function _n(e) {
  var _a;
  const { parentPane: t, expanded: i = true, viewerElm: s, drawing: n, hooks: a } = e, d = t.addFolder({ title: "\u270F Herramientas CAD", expanded: i }), o = { select: "\u{1F5B1} Seleccionar \u2014 click sobre un nodo/elemento para seleccionarlo", node: "\u25CF Nodo \u2014 click crea nodo. Tipear: 5,3,2 (abs) | @1,0,0 (rel) | Enter", line: "\uFF0F L\xEDnea \u2014 click 2 puntos. Tipear: 5 (DDE) | 5,3,2 (abs) | @5,3,2 (rel) | @5<45 (polar) | @5<45<30 (esf\xE9rico) | Enter", polyline: "\u2312 Polil\xEDnea \u2014 click sucesivos. Tipear: 5 | 5,3 | @5,3 | @5<45. Right-click para terminar.", area: "\u25AD \xC1rea \u2014 4 clicks (CCW). Tipear: x,y o @dx,dy o @L<ang. Enter para confirmar coord.", col: "\u258C Columna 3D \u2014 tipe\xE1 altura (ej: 3) + Enter, despu\xE9s 1 click en la base.", wall: "\u25A5 Pared Q4 3D \u2014 tipe\xE1 altura + Enter, despu\xE9s 2 clicks. Crea shell Q4 vertical.", circle: "\u25CB C\xEDrculo \u2014 click 1=centro, click 2=radio. Tipear radio: 5 + Enter (en vez del 2do click).", arc: "\u2312 Arco (3 ptos) \u2014 click 1=inicio, 2=medio, 3=fin.", rect: "\u25AD Rect\xE1ngulo \u2014 click 2 esquinas. Tipear @5,3 para esquina opuesta relativa.", aux: "\u250A L\xEDnea auxiliar \u2014 referencia visual (no genera FEM). Mismo input que l\xEDnea.", auxp: "\u2726 Punto auxiliar \u2014 1 click crea un punto cyan (no genera nodo FEM, sirve para OSnap).", extend: "\u2197 Prolongar \u2014 click una l\xEDnea, click en la direcci\xF3n a extender.", chaflan: "\u25B1 Losa con chaflanes \u2014 click 2 esquinas. Radio en slider 'Chafl\xE1n r'.", delete: "\u{1F5D1} Borrar \u2014 hover sobre l\xEDnea/\xE1rea (se resalta en rojo) + click para eliminar.", select: "\u{1F5B1} Seleccionar \u2014 click sobre un elemento. Sin tool activo no se crean nodos." }, l = (c) => {
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
    const m = o[c] ?? `Tool ${c} activo`, I = document.getElementById("hk-cad-status");
    I && (I.textContent = m, window.__hekatanCadStatusText = m, (_d = window.__hekatanRefreshStatus) == null ? void 0 : _d.call(window)), console.log(`[CAD] Tool activo: ${c} \u2014 ${m}`);
  };
  d.addButton({ title: "\u{1F5B1} Seleccionar" }).on("click", () => l("select")), d.addButton({ title: "\u25CF Nodo" }).on("click", () => l("node")), d.addButton({ title: "\uFF0F L\xEDnea (frame)" }).on("click", () => l("line")), d.addButton({ title: "\u25AD \xC1rea (shell Q4)" }).on("click", () => l("area")), d.addButton({ title: "\u258C Columna 3D (1 click + altura)" }).on("click", () => l("col")), d.addButton({ title: "\u25A5 Pared Q4 3D (2 clicks + altura)" }).on("click", () => l("wall")), d.addButton({ title: "\u2312 Polil\xEDnea" }).on("click", () => l("polyline")), d.addButton({ title: "\u25AD Rect\xE1ngulo" }).on("click", () => l("rect")), d.addButton({ title: "\u25CB C\xEDrculo" }).on("click", () => l("circle")), d.addButton({ title: "\u2312 Arco (3 ptos)" }).on("click", () => l("arc")), d.addButton({ title: "\u250A L\xEDnea auxiliar" }).on("click", () => l("aux")), d.addButton({ title: "\u2726 Punto auxiliar" }).on("click", () => l("auxp")), d.addButton({ title: "\u2197 Prolongar l\xEDnea" }).on("click", () => l("extend")), d.addButton({ title: "\u25B1 Losa con chaflanes (rect + arcos)" }).on("click", () => l("chaflan")), d.addButton({ title: "\u{1F5D1} Borrar (hover + click)" }).on("click", () => l("delete"));
  const r = d.addFolder({ title: "\u{1F3AF} Modos de dibujo", expanded: true }), b = { ortho: false, polar: false, segs: 12 };
  r.addBinding(b, "ortho", { label: "ORTO (90\xB0)" }).on("change", (c) => {
    window.__hekatanOrtho = c.value;
  }), r.addBinding(b, "polar", { label: "POLAR (45\xB0)" }).on("change", (c) => {
    window.__hekatanPolar = c.value;
  }), r.addBinding(b, "segs", { min: 4, max: 64, step: 1, label: "Segmentos arc/c\xEDrc" }).on("change", (c) => {
    window.__hekatanArcSegs = c.value;
  });
  const v = { r: 1 };
  r.addBinding(v, "r", { min: 0.1, max: 5, step: 0.1, label: "Chafl\xE1n r (m)" }).on("change", (c) => {
    window.__hekatanChaflanR = c.value;
  }), window.__hekatanChaflanR = 1;
  const p = d.addFolder({ title: "\u{1F3AF} Object Snap (OSNAP)", expanded: false }), y = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  window.__hekatanOsnap = y, p.addBinding(y, "end", { label: "\u{1F534} Endpoint" }), p.addBinding(y, "mid", { label: "\u{1F7E1} Midpoint" }), p.addBinding(y, "node", { label: "\u{1F535} Node" }), p.addBinding(y, "cen", { label: "\u{1F7E2} Center" }), p.addBinding(y, "per", { label: "\u{1F7E3} Perpendicular" }), p.addBinding(y, "nea", { label: "\u{1F338} Nearest" }), p.addBinding(y, "int", { label: "\u{1F7E0} Intersection" });
  const k = d.addFolder({ title: "\u{1F4D0} Plano de trabajo", expanded: true }), E = { workZ: 0 }, x = (c, m, I = true) => {
    var _a2, _b;
    const O = (_b = (_a2 = window.__hekatanCadState) == null ? void 0 : _a2.get) == null ? void 0 : _b.call(_a2);
    O && (O.workPlane = c);
    const z = m ?? E.workZ;
    c === "xy" ? n.gridTarget.val = { position: [0, 0, z], rotation: [Math.PI / 2, 0, 0] } : c === "xz" ? n.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, 0] } : n.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, Math.PI / 2] }, I && (c === "xy" ? a.setView("plan") : c === "xz" ? a.setView("elevX") : a.setView("elevY"));
  };
  k.addButton({ title: "Plano XY (planta)" }).on("click", () => x("xy")), k.addButton({ title: "Plano XZ (elevaci\xF3n frontal)" }).on("click", () => x("xz")), k.addButton({ title: "Plano YZ (elevaci\xF3n lateral)" }).on("click", () => x("yz")), k.addButton({ title: "\u{1F9CA} Vista isom\xE9trica (3D)" }).on("click", () => a.setView("iso")), k.addButton({ title: "\u{1F500} Vista doble (planta + iso)" }).on("click", () => {
    a.splitState.enabled = !a.splitState.enabled, a.splitState.enabled && (a.splitState.secondary = 0, x("xy")), a.refreshSplit();
  });
  let f = false;
  k.addButton({ title: "\u{1F4D0} Mostrar/ocultar planos de ref. (Z=0,3,6,9,12)" }).on("click", () => {
    var _a2, _b;
    f = !f, f ? (_a2 = window.__hekatanShowRefPlanes) == null ? void 0 : _a2.call(window, [0, 3, 6, 9, 12], 20, 0, 0) : (_b = window.__hekatanHideRefPlanes) == null ? void 0 : _b.call(window);
  }), window.__hekatanShowOrthoPlanes = true;
  let h = true;
  k.addButton({ title: "\u25A6 Planos ref. ortogonales (XY/XZ/YZ del \xFAltimo pto)" }).on("click", () => {
    var _a2;
    h = !h;
    const c = window.__hekatanSetOrthoPlanes;
    typeof c == "function" ? c(h) : window.__hekatanShowOrthoPlanes = h, (_a2 = window.__hekatanRefreshStatus) == null ? void 0 : _a2.call(window);
  });
  const S = { orthoExt: 8, gridSize: 10 };
  k.addBinding(S, "orthoExt", { min: 0.1, max: 50, step: 0.1, label: "Tama\xF1o \xE1rea planos ref. (m)" }).on("change", (c) => {
    const m = window.__hekatanSetOrthoExt;
    typeof m == "function" ? m(c.value) : window.__hekatanOrthoExt = c.value;
  }), k.addBinding(S, "gridSize", { min: 1, max: 100, step: 1, label: "Dimensi\xF3n grid (m)" }).on("change", (c) => {
    const m = s.__settings;
    (m == null ? void 0 : m.gridSize) && (m.gridSize.val = c.value);
  }), window.__hekatanSnapEnabled = true;
  const u = { snapEnabled: true }, g = d.addBinding(u, "snapEnabled", { label: "\u{1F9F2} Grid snap (F9)" }).on("change", (c) => {
    window.__hekatanSnapEnabled = !!c.value;
  });
  window.__hekatanToggleSnap = () => {
    const c = window.__hekatanSnapEnabled === false;
    window.__hekatanSnapEnabled = c, u.snapEnabled = c;
    try {
      g.refresh();
    } catch {
    }
    let m = document.getElementById("hk-snap-toast");
    m || (m = document.createElement("div"), m.id = "hk-snap-toast", m.style.cssText = "position:fixed;top:14px;left:50%;transform:translateX(-50%);z-index:99999;padding:8px 18px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)", document.body.appendChild(m)), m.textContent = c ? "\u{1F9F2} Grid snap ON \u2014 el cursor se pega a la grilla" : "\u{1F193} Grid snap OFF \u2014 dibujo libre (cualquier punto)", m.style.background = c ? "rgba(37,99,235,0.95)" : "rgba(16,185,129,0.95)", m.style.opacity = "1";
    const I = window;
    clearTimeout(I.__hekatanSnapToastT), I.__hekatanSnapToastT = setTimeout(() => {
      m && (m.style.opacity = "0");
    }, 1600);
  }, window.__hekatanF9Bound || (window.__hekatanF9Bound = true, window.addEventListener("keydown", (c) => {
    var _a2;
    c.key === "F9" && (c.preventDefault(), (_a2 = window.__hekatanToggleSnap) == null ? void 0 : _a2.call(window));
  }, true));
  const w = { step: 0.5 };
  d.addBinding(w, "step", { label: "Paso snap (m)", options: { "0.01 m (mm)": 0.01, "0.05 m (5cm)": 0.05, "0.10 m": 0.1, "0.20 m": 0.2, "0.25 m": 0.25, "0.50 m": 0.5, "1.00 m": 1, "2.00 m": 2, "5.00 m": 5 } }).on("change", (c) => {
    var _a2, _b;
    const m = Number(c.value);
    window.__hekatanSnap2D = m;
    const I = (_b = (_a2 = window.__hekatanCadState) == null ? void 0 : _a2.get) == null ? void 0 : _b.call(_a2);
    I && (I.snap = m);
  });
  const C = { snap2D: 0.5, snap3D: 0.25, workZ: 0 };
  d.addBinding(C, "snap2D", { min: 0, max: 5, step: 0.05, label: "Snap 2D fino (m)" }).on("change", (c) => {
    var _a2, _b;
    const m = (_b = (_a2 = window.__hekatanCadState) == null ? void 0 : _a2.get) == null ? void 0 : _b.call(_a2);
    m && (m.snap = c.value), window.__hekatanSnap2D = c.value;
  }), d.addBinding(C, "snap3D", { min: 0, max: 5, step: 0.05, label: "Snap 3D (m)" }).on("change", (c) => {
    window.__hekatanSnap3D = c.value;
  }), d.addBinding(E, "workZ", { min: -10, max: 50, step: 0.1, label: "Cota Z (m)" }).on("change", (c) => {
    var _a2, _b, _c, _d, _e2, _f;
    const m = (_b = (_a2 = window.__hekatanCadState) == null ? void 0 : _a2.get) == null ? void 0 : _b.call(_a2);
    m && (m.workZ = c.value), (((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.workPlane) ?? "xz") === "xy" && x("xy", c.value, false), (_f = a.onRebuild) == null ? void 0 : _f.call(a);
  });
  const _ = d.addFolder({ title: "\u{1F6E0} Acciones", expanded: true });
  _.addButton({ title: "\u23F9 Finalizar dibujo (Esc)" }).on("click", () => {
    var _a2, _b, _c;
    (_a2 = window.__hekatanFinalizeDraw) == null ? void 0 : _a2.call(window), (_c = (_b = window.__hekatanCadMouse) == null ? void 0 : _b.cancel) == null ? void 0 : _c.call(_b);
  }), _.addButton({ title: "\u{1F5D1} Limpiar todo" }).on("click", () => {
    var _a2, _b, _c;
    (_b = (_a2 = window.__hekatanCadState) == null ? void 0 : _a2.reset) == null ? void 0 : _b.call(_a2), n.points.val = [], n.polylines.val = [[]], n.areas.val = [], n.auxLines.val = [], (_c = a.onRebuild) == null ? void 0 : _c.call(a);
  }), _.addButton({ title: "\u{1F4CB} Copiar comandos a CLI" }).on("click", () => {
    var _a2;
    const c = window.__hekatanCliScript ?? "";
    (_a2 = navigator.clipboard) == null ? void 0 : _a2.writeText(c), alert("Comandos copiados al portapapeles. Pega en cli-modeler para editar/correr el FEM.");
  });
  const M = d.addFolder({ title: "\u{1F3E2} Plantas de pisos", expanded: false });
  [0, 3, 6, 9, 12].forEach((c) => {
    M.addButton({ title: `Piso a Z=${c}m` }).on("click", () => {
      var _a2, _b;
      n.gridTarget.val = { position: [0, 0, c], rotation: [Math.PI / 2, 0, 0] };
      const m = (_b = (_a2 = window.__hekatanCadState) == null ? void 0 : _a2.get) == null ? void 0 : _b.call(_a2);
      m && (m.workZ = c);
    });
  });
  const $ = d.addFolder({ title: "\u{1F4CD} Ejes y Niveles (Revit)", expanded: false }), L = [], j = [];
  window.__hekatanAxisGrids = L, window.__hekatanLevels = j;
  const B = () => {
    var _a2;
    return ((_a2 = s.__ctx) == null ? void 0 : _a2.scene) ?? null;
  }, N = () => {
    var _a2;
    return ((_a2 = s.__ctx) == null ? void 0 : _a2.render) ?? null;
  }, W = () => {
    var _a2;
    return ((_a2 = s.__ctx) == null ? void 0 : _a2.camera) ?? null;
  }, V = new Te();
  V.name = "axis-grids";
  const F = new Te();
  F.name = "levels";
  const Q = 0.025, ne = 0.083, G = 0.021, ee = () => {
    const c = W();
    c && (V.traverse((m) => {
      var _a2;
      if (!((_a2 = m.userData) == null ? void 0 : _a2.isAxisLabel)) return;
      const I = c.position.distanceTo(m.position), O = Math.max(0.1, I * Q);
      m.scale.set(O, O, 1);
    }), F.traverse((m) => {
      var _a2;
      if (!((_a2 = m.userData) == null ? void 0 : _a2.isLevelLabel)) return;
      const I = c.position.distanceTo(m.position);
      m.scale.set(I * ne, I * G, 1);
    }));
  }, Ge = (_a = s.__ctx) == null ? void 0 : _a.controls;
  (Ge == null ? void 0 : Ge.addEventListener) && Ge.addEventListener("change", ee);
  const Ze = () => {
    const c = B();
    return c ? (c.children.includes(V) || c.add(V), c.children.includes(F) || c.add(F), true) : false;
  }, Ee = () => {
    var _a2, _b, _c;
    if (Ze()) {
      for (; V.children.length; ) (_b = (_a2 = V.children.pop()).traverse) == null ? void 0 : _b.call(_a2, (m) => {
        var _a3, _b2, _c2, _d, _e2, _f, _g;
        (_b2 = (_a3 = m.geometry) == null ? void 0 : _a3.dispose) == null ? void 0 : _b2.call(_a3), (_d = (_c2 = m.material) == null ? void 0 : _c2.dispose) == null ? void 0 : _d.call(_c2), (_g = (_f = (_e2 = m.material) == null ? void 0 : _e2.map) == null ? void 0 : _f.dispose) == null ? void 0 : _g.call(_f);
      });
      for (const c of L) V.add(Bt(c));
      ee(), (_c = N()) == null ? void 0 : _c();
    }
  }, be = () => {
    var _a2, _b, _c;
    if (Ze()) {
      for (; F.children.length; ) (_b = (_a2 = F.children.pop()).traverse) == null ? void 0 : _b.call(_a2, (m) => {
        var _a3, _b2, _c2, _d, _e2, _f, _g;
        (_b2 = (_a3 = m.geometry) == null ? void 0 : _a3.dispose) == null ? void 0 : _b2.call(_a3), (_d = (_c2 = m.material) == null ? void 0 : _c2.dispose) == null ? void 0 : _d.call(_c2), (_g = (_f = (_e2 = m.material) == null ? void 0 : _e2.map) == null ? void 0 : _f.dispose) == null ? void 0 : _g.call(_f);
      });
      for (const c of j) F.add(At(c));
      ee(), (_c = N()) == null ? void 0 : _c();
    }
  };
  window.__hekatanAxisCommit = (c, m, I) => {
    let O;
    if (I) {
      const A = L.filter((R) => /^\d+$/.test(R.label));
      O = String(A.length + 1);
    } else {
      const A = L.filter((R) => !/^\d+$/.test(R.label)).map((R) => R.label);
      O = Tt(A);
    }
    L.push({ label: O, start: [c[0], c[1], c[2]], end: [m[0], m[1], m[2]] }), Ee();
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
  const Ye = { z: 0 };
  $.addBinding(Ye, "z", { min: -10, max: 50, step: 0.1, label: "Cota nivel (m)" }), $.addButton({ title: "\u2795 Agregar nivel a la cota Z elegida" }).on("click", () => {
    const c = Ye.z, m = jt(j, c);
    j.push({ label: m, z: c }), be();
  }), $.addButton({ title: "\u{1F3E2} Niveles t\xEDpicos (0,3,6,9,12 m)" }).on("click", () => {
    [0, 3, 6, 9, 12].forEach((c) => {
      const m = `N+${c.toFixed(2)}`;
      j.some((I) => I.z === c) || j.push({ label: m, z: c });
    }), be();
  }), $.addButton({ title: "\u{1F5D1} Limpiar niveles" }).on("click", () => {
    j.length = 0, be();
  }), window.__hekatanRefreshAxes = Ee, window.__hekatanRefreshLevels = be, setTimeout(() => {
    Ee(), be();
  }, 200);
  const P = d.addFolder({ title: "\u{1F3AF} Acciones de selecci\xF3n", expanded: false }), Xe = { divisions: 4 };
  P.addBinding(Xe, "divisions", { min: 2, max: 50, step: 1, label: "Divisiones" }), P.addButton({ title: "\u2702 Mallar l\xEDnea seleccionada (N divisiones)" }).on("click", () => {
    var _a2, _b;
    const c = window.__hekatanSelection;
    if (!c || c.size === 0) {
      alert("Seleccion\xE1 un segmento primero (click sobre la l\xEDnea).");
      return;
    }
    const m = Math.max(2, Math.round(Xe.divisions)), I = n.points, O = n.polylines;
    if (!I || !O) return;
    const z = [...I.rawVal], A = O.rawVal.map((X) => [...X]);
    let R = 0;
    for (const X of c) {
      const K = X.split(":");
      if (K[0] !== "seg") continue;
      const te = +K[1], H = +K[2], J = A[te];
      if (!J) continue;
      const q = z[J[H]], U = z[J[H + 1]];
      if (!q || !U) continue;
      const he = [];
      for (let de = 1; de < m; de++) {
        const ue = de / m, ve = [q[0] + ue * (U[0] - q[0]), q[1] + ue * (U[1] - q[1]), q[2] + ue * (U[2] - q[2])];
        z.push(ve), he.push(z.length - 1);
      }
      J.splice(H + 1, 0, ...he), R++;
    }
    if (R === 0) {
      alert("La selecci\xF3n no contiene segmentos. Click sobre l\xEDneas (no nodos).");
      return;
    }
    I.val = z, O.val = A, c.clear(), (_a2 = window.__hekatanRefreshSelection) == null ? void 0 : _a2.call(window), (_b = a.onRebuild) == null ? void 0 : _b.call(a);
  });
  const Z = { Ux: true, Uy: true, Uz: true, Rx: false, Ry: false, Rz: false };
  P.addBinding(Z, "Ux", { label: "DOF Ux (restringido)" }), P.addBinding(Z, "Uy", { label: "DOF Uy (restringido)" }), P.addBinding(Z, "Uz", { label: "DOF Uz (restringido)" }), P.addBinding(Z, "Rx", { label: "DOF Rx (restringido)" }), P.addBinding(Z, "Ry", { label: "DOF Ry (restringido)" }), P.addBinding(Z, "Rz", { label: "DOF Rz (restringido)" }), P.addButton({ title: "\u{1F4CC} Aplicar apoyo a nodos seleccionados" }).on("click", () => {
    var _a2;
    const c = window.__hekatanSelection;
    if (!c || c.size === 0) {
      alert("Seleccion\xE1 un nodo primero (click sobre el punto).");
      return;
    }
    const m = window.__hekatanCadSupports ?? {}, I = [Z.Ux, Z.Uy, Z.Uz, Z.Rx, Z.Ry, Z.Rz];
    let O = 0;
    for (const z of c) {
      const A = z.split(":");
      if (A[0] !== "pt") continue;
      const R = +A[1];
      m[R] = [...I], O++;
    }
    if (window.__hekatanCadSupports = m, O === 0) {
      alert("La selecci\xF3n no contiene nodos. Click sobre los puntos primero.");
      return;
    }
    (_a2 = a.onRebuild) == null ? void 0 : _a2.call(a), alert(`Aplicado apoyo [Ux=${I[0]}, Uy=${I[1]}, Uz=${I[2]}, Rx=${I[3]}, Ry=${I[4]}, Rz=${I[5]}] a ${O} nodo(s).`);
  }), P.addButton({ title: "\u{1F513} Liberar apoyos de nodos seleccionados" }).on("click", () => {
    var _a2;
    const c = window.__hekatanSelection;
    if (!c) return;
    const m = window.__hekatanCadSupports ?? {};
    let I = 0;
    for (const O of c) {
      const z = O.split(":");
      if (z[0] !== "pt") continue;
      const A = +z[1];
      m[A] && (delete m[A], I++);
    }
    window.__hekatanCadSupports = m, (_a2 = a.onRebuild) == null ? void 0 : _a2.call(a), I === 0 && alert("Selecci\xF3n no contiene nodos con apoyo.");
  }), P.addButton({ title: "\u{1F5D1} Limpiar selecci\xF3n" }).on("click", () => {
    var _a2;
    (_a2 = window.__hekatanClearSelection) == null ? void 0 : _a2.call(window);
  });
  const Y = { dirX: 0, dirY: 0, dirZ: 1, height: 3 };
  P.addBinding(Y, "height", { min: 0.1, max: 50, step: 0.1, label: "Altura extrusi\xF3n (m)" }), P.addBinding(Y, "dirX", { min: -1, max: 1, step: 1, label: "Dir X" }), P.addBinding(Y, "dirY", { min: -1, max: 1, step: 1, label: "Dir Y" }), P.addBinding(Y, "dirZ", { min: -1, max: 1, step: 1, label: "Dir Z" }), P.addButton({ title: "\u2B06 Extruir nodo\u2192frame (1 nodo seleccionado + altura)" }).on("click", () => {
    var _a2, _b;
    const c = window.__hekatanSelection;
    if (!c || c.size === 0) {
      alert("Seleccion\xE1 al menos 1 nodo (click sobre un punto).");
      return;
    }
    const m = [Y.dirX, Y.dirY, Y.dirZ], I = Math.hypot(...m);
    if (I < 0.01) {
      alert("Dir X/Y/Z son todos cero. Eleg\xED al menos uno (default +Z = vertical).");
      return;
    }
    const O = m.map((H) => H / I), z = Y.height, A = n.points, R = n.polylines;
    if (!A || !R) return;
    const X = [...A.rawVal], K = R.rawVal.map((H) => [...H]);
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
    A.val = X, R.val = K, c.clear(), (_a2 = window.__hekatanRefreshSelection) == null ? void 0 : _a2.call(window), (_b = a.onRebuild) == null ? void 0 : _b.call(a), alert(`\u2713 ${te} nodo(s) extruidos a frames de altura ${z}m en direcci\xF3n (${O.map((H) => H.toFixed(2)).join(",")}).`);
  });
  const Ce = d.addFolder({ title: "\u{1F4AC} AI Assistant (gratis)", expanded: false }), T = { providerId: ie.getProvider(), apiKey: "", model: "", images: [], prompt: "", response: "" };
  T.apiKey = ie.getKey(T.providerId);
  const We = {};
  for (const c of xt) We[c.name] = c.id;
  const Je = { id: T.providerId };
  Ce.addBinding(Je, "id", { label: "Provider", options: We }).on("change", (c) => {
    T.providerId = c.value, ie.setProvider(T.providerId), T.apiKey = ie.getKey(T.providerId), qe();
  });
  const Ae = { id: "" };
  let _e = null;
  const Re = { key: "" };
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
    const m = await Nt(c);
    T.images.push({ mimeType: c.type, base64: m }), De();
  }, De = () => {
    if (D.innerHTML = "", T.images.length === 0) {
      D.style.color = "#888", D.textContent = "\u{1F4CB} Pega/arrastra im\xE1genes ac\xE1 (Ctrl+V)";
      return;
    }
    D.style.color = "#ddd", T.images.forEach((m, I) => {
      const O = document.createElement("div");
      O.style.cssText = "position:relative;display:inline-block;";
      const z = document.createElement("img");
      z.src = `data:${m.mimeType};base64,${m.base64}`, z.style.cssText = "width:60px;height:60px;object-fit:cover;border:1px solid #666;border-radius:3px;";
      const A = document.createElement("button");
      A.textContent = "\xD7", A.style.cssText = "position:absolute;top:-4px;right:-4px;width:16px;height:16px;border-radius:50%;background:#ef4444;color:#fff;border:none;cursor:pointer;font-size:11px;line-height:1;padding:0;", A.onclick = () => {
        T.images.splice(I, 1), De();
      }, O.appendChild(z), O.appendChild(A), D.appendChild(O);
    });
    const c = document.createElement("span");
    c.style.cssText = "color:#888;font-size:11px;margin-left:6px;", c.textContent = `${T.images.length} imagen(es)`, D.appendChild(c);
  };
  D.addEventListener("paste", async (c) => {
    var _a2, _b;
    for (const m of ((_a2 = c.clipboardData) == null ? void 0 : _a2.items) ?? []) if ((_b = m.type) == null ? void 0 : _b.startsWith("image/")) {
      const I = m.getAsFile();
      I && await Pe(I);
    }
  }), re.addEventListener("paste", async (c) => {
    var _a2, _b;
    for (const m of ((_a2 = c.clipboardData) == null ? void 0 : _a2.items) ?? []) if ((_b = m.type) == null ? void 0 : _b.startsWith("image/")) {
      c.preventDefault();
      const I = m.getAsFile();
      I && await Pe(I);
    }
  }), D.addEventListener("dragover", (c) => {
    c.preventDefault(), D.style.borderColor = "#22d3ee";
  }), D.addEventListener("dragleave", () => {
    D.style.borderColor = "#555";
  }), D.addEventListener("drop", async (c) => {
    var _a2;
    c.preventDefault(), D.style.borderColor = "#555";
    for (const m of Array.from(((_a2 = c.dataTransfer) == null ? void 0 : _a2.files) ?? [])) m.type.startsWith("image/") && await Pe(m);
  }), $e.onclick = () => {
    T.images = [], De();
  };
  const qe = () => {
    const c = Ne(T.providerId);
    if (!c) return;
    _e && _e.dispose();
    const m = {};
    for (const z of c.models) m[z.name] = z.id;
    const I = ie.getModel(c.id);
    if (Ae.id = I || c.defaultModel, T.model = Ae.id, _e = Ce.addBinding(Ae, "id", { label: "Modelo", options: m }), _e.on("change", (z) => {
      T.model = z.value, ie.setModel(c.id, z.value);
    }), ye) {
      try {
        ye.dispose();
      } catch {
      }
      ye = null;
    }
    c.requiresKey ? (Re.key = ie.getKey(c.id), ye = Ce.addBinding(Re, "key", { label: "API Key" }), ye.on("change", (z) => {
      ie.setKey(c.id, z.value), T.apiKey = z.value;
    }), T.apiKey = Re.key) : T.apiKey = "";
    const O = [];
    c.id === "ollama" ? (O.push("Requiere Ollama corriendo en localhost:11434."), O.push("Instalar: ollama.com \u2192 ollama pull qwen2.5-coder:7b")) : c.id === "gemini" ? (O.push("API key gratis: aistudio.google.com/apikey"), O.push("Free tier: 15 req/min, 1M tok/d\xEDa.")) : c.id === "groq" ? (O.push("API key gratis: console.groq.com/keys"), O.push("Inferencia ~500 tok/seg.")) : c.id === "openrouter" && (O.push("API key: openrouter.ai/keys (modelos free disponibles)."), O.push("Sufijo :free indica modelo gratuito.")), we.textContent = O.join(`
`);
  };
  qe(), at().then((c) => {
    !c && T.providerId === "ollama" ? !!localStorage.getItem("hekatan_ai_provider") ? we.textContent = "\u26A0 Ollama no responde en localhost:11434. Inici\xE1 Ollama o cambi\xE1 a otro provider." : (console.log("[AI] Ollama no detectado \u2192 default a Gemini Flash"), T.providerId = "gemini", Je.id = "gemini", ie.setProvider("gemini"), qe(), we.textContent = "\u2139 Ollama no est\xE1 corriendo \u2014 usando Gemini Flash. Peg\xE1 tu API key gratis (aistudio.google.com/apikey) o instal\xE1 Ollama.") : c && T.providerId === "ollama" && ot().then((m) => {
      m.length > 0 && console.log("[AI] Ollama OK. Modelos instalados:", m);
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
          const m = await c.send({ msg: { text: "Responde solo: OK" }, system: "Sos un test de conexi\xF3n. Responde solo: OK", apiKey: T.apiKey, model: T.model });
          alert(`\u2713 ${c.name} respondi\xF3: "${m.slice(0, 100)}"`);
        }
      } catch (m) {
        alert(`\u2717 Error: ${(m == null ? void 0 : m.message) ?? m}`);
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
      const m = await c.send({ msg: { text: T.prompt, images: T.images }, system: Kt, apiKey: T.apiKey, model: T.model });
      T.response = m;
      const I = m.replace(/^```[a-z]*\n?/i, "").replace(/\n?```\s*$/, "").trim();
      se.value = I, se.readOnly = false, pe.disabled = false;
    } catch (m) {
      se.value = `\u274C Error: ${(m == null ? void 0 : m.message) ?? m}`;
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
    const m = window.__hekatanCliExecute;
    typeof m == "function" ? m() : ((_a2 = navigator.clipboard) == null ? void 0 : _a2.writeText(c), alert("Script copiado al clipboard. Pegalo en el panel CLI Comandos para ejecutarlo.")), (_b = a.onRebuild) == null ? void 0 : _b.call(a);
  }, P.addButton({ title: "\u2B06 Extruir frame\u2192\xE1rea (1+ segmentos seleccionados + altura)" }).on("click", () => {
    var _a2, _b;
    const c = window.__hekatanSelection;
    if (!c || c.size === 0) {
      alert("Seleccion\xE1 al menos 1 segmento (click sobre una l\xEDnea).");
      return;
    }
    const m = [Y.dirX, Y.dirY, Y.dirZ], I = Math.hypot(...m);
    if (I < 0.01) {
      alert("Dir X/Y/Z son todos cero.");
      return;
    }
    const O = m.map((q) => q / I), z = Y.height, A = n.points, R = n.polylines, X = n.areas;
    if (!A || !R || !X) return;
    const K = [...A.rawVal], te = R.rawVal.map((q) => [...q]), H = [...X.rawVal];
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
    A.val = K, R.val = te, X.val = H, c.clear(), (_a2 = window.__hekatanRefreshSelection) == null ? void 0 : _a2.call(window), (_b = a.onRebuild) == null ? void 0 : _b.call(a), alert(`\u2713 ${J} segmento(s) extruido(s) a shells Q4 verticales de altura ${z}m.`);
  }), { fCad: d };
}
function Be(e, t = e) {
  return Array.from({ length: e }, () => new Array(t).fill(0));
}
function Ht(e) {
  const t = e.length, i = e[0].length, s = Be(i, t);
  for (let n = 0; n < t; n++) for (let a = 0; a < i; a++) s[a][n] = e[n][a];
  return s;
}
function st(e, t) {
  const i = e.length, s = t[0].length, n = t.length, a = Be(i, s);
  for (let d = 0; d < i; d++) for (let o = 0; o < s; o++) {
    let l = 0;
    for (let r = 0; r < n; r++) l += e[d][r] * t[r][o];
    a[d][o] = l;
  }
  return a;
}
function Ut(e, t) {
  const { E: i, G: s, A: n, Iy: a, Iz: d, J: o } = e, l = Be(12), r = i * n / t;
  l[0][0] = r, l[6][6] = r, l[0][6] = -r, l[6][0] = -r;
  const b = s * o / t;
  l[3][3] = b, l[9][9] = b, l[3][9] = -b, l[9][3] = -b;
  const v = t, p = i * d, y = 12 * p / v ** 3, k = 6 * p / v ** 2, E = 4 * p / v, x = 2 * p / v;
  l[1][1] = y, l[1][5] = k, l[1][7] = -y, l[1][11] = k, l[5][1] = k, l[5][5] = E, l[5][7] = -k, l[5][11] = x, l[7][1] = -y, l[7][5] = -k, l[7][7] = y, l[7][11] = -k, l[11][1] = k, l[11][5] = x, l[11][7] = -k, l[11][11] = E;
  const f = i * a, h = 12 * f / v ** 3, S = 6 * f / v ** 2, u = 4 * f / v, g = 2 * f / v;
  return l[2][2] = h, l[2][4] = -S, l[2][8] = -h, l[2][10] = -S, l[4][2] = -S, l[4][4] = u, l[4][8] = S, l[4][10] = g, l[8][2] = -h, l[8][4] = S, l[8][8] = h, l[8][10] = S, l[10][2] = -S, l[10][4] = g, l[10][8] = S, l[10][10] = u, l;
}
function Vt(e, t) {
  const i = t[0] - e[0], s = t[1] - e[1], n = t[2] - e[2], a = Math.sqrt(i * i + s * s + n * n);
  if (a < 1e-12) throw new Error("Element length is zero");
  const d = [i / a, s / a, n / a], o = Math.abs(d[0]) < 1e-6 && Math.abs(d[1]) < 1e-6;
  let l;
  if (o) l = [0, 1, 0];
  else {
    const b = [0, 0, 1], v = d[1] * b[2] - d[2] * b[1], p = d[2] * b[0] - d[0] * b[2], y = d[0] * b[1] - d[1] * b[0], k = Math.sqrt(v * v + p * p + y * y), E = [v / k, p / k, y / k];
    l = [E[1] * d[2] - E[2] * d[1], E[2] * d[0] - E[0] * d[2], E[0] * d[1] - E[1] * d[0]];
  }
  const r = [d[1] * l[2] - d[2] * l[1], d[2] * l[0] - d[0] * l[2], d[0] * l[1] - d[1] * l[0]];
  return { L: a, R: [d, l, r] };
}
function Gt(e) {
  const t = Be(12);
  for (let i = 0; i < 4; i++) {
    const s = i * 3;
    for (let n = 0; n < 3; n++) for (let a = 0; a < 3; a++) t[s + n][s + a] = e[n][a];
  }
  return t;
}
function bt(e, t) {
  const { L: i, R: s } = Vt(e.ni, e.nj), n = Ut(t, i), a = Gt(s), d = st(st(Ht(a), n), a);
  return { L: i, K_local: n, T: a, K_global: d, R: s };
}
function it(e, t = 4) {
  return e.length, e.map((i) => i.map((s) => {
    if (Math.abs(s) < 1e-12) return "0".padStart(12);
    const n = Math.abs(s);
    return n >= 1e5 || n < 1e-3 ? s.toExponential(t).padStart(12) : s.toFixed(t).padStart(12);
  }).join(" ")).join(`
`);
}
let Le = null;
function Zt() {
  return Le || (Le = new Promise((e, t) => {
    if (window.katex) {
      e(window.katex);
      return;
    }
    const i = document.createElement("link");
    i.rel = "stylesheet", i.href = "https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css", document.head.appendChild(i);
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js", s.onload = () => e(window.katex), s.onerror = () => t(new Error("Failed to load KaTeX")), document.head.appendChild(s);
  }), Le);
}
async function Yt(e, t, i) {
  e.innerHTML = "";
  const s = t.nodes[0], n = t.nodes[1], a = [{ title: "1. Geometr\xEDa del elemento", content: ["Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:", "\\text{DOFs} = [u_x, u_y, u_z, \\theta_x, \\theta_y, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}", `\\text{Nodo } i = (${s[0].toFixed(2)}, ${s[1].toFixed(2)}, ${s[2].toFixed(2)})`, `\\text{Nodo } j = (${n[0].toFixed(2)}, ${n[1].toFixed(2)}, ${n[2].toFixed(2)})`, `L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = ${i.L.toFixed(3)}`] }, { title: "2. Funciones de forma", content: ["\\text{La viga usa } \\textbf{interpolaci\xF3n lineal} \\text{ para axial y torsi\xF3n, } \\textbf{polinomios c\xFAbicos de Hermite} \\text{ para flexi\xF3n.}", "\\textbf{2.1 Axial y Torsi\xF3n (lineal)}", "N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\xi = \\frac{x}{L} \\in [0,1]", "\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1", "\\textbf{2.2 Flexi\xF3n (Hermite c\xFAbicos)}", "H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\quad \\text{(desplazamiento nodo } i\\text{)}", "H_2(\\xi) = L\\,\\xi(1-\\xi)^2 \\quad \\text{(rotaci\xF3n nodo } i\\text{)}", "H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\quad \\text{(desplazamiento nodo } j\\text{)}", "H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\quad \\text{(rotaci\xF3n nodo } j\\text{)}", "\\text{Curvatura: } \\kappa = \\frac{d^2 v}{dx^2} = \\frac{1}{L^2}\\sum_{i=1}^{4} \\frac{d^2 H_i}{d\\xi^2}\\,q_i"] }, { title: "3. Matriz de rigidez local (12\xD712)", content: ["\\textbf{3.1 Bloque axial (DOFs } u_1, u_2\\text{):}", `K_{a} = \\frac{EA}{L} \\begin{bmatrix} 1 & -1 \\\\ -1 & 1 \\end{bmatrix} = \\frac{${t.frameProps.E.toExponential(2)} \\cdot ${t.frameProps.A.toFixed(4)}}{${i.L.toFixed(3)}}`, "\\textbf{3.2 Bloque torsi\xF3n (DOFs } \\theta_{x1}, \\theta_{x2}\\text{):}", `K_{t} = \\frac{GJ}{L} \\begin{bmatrix} 1 & -1 \\\\ -1 & 1 \\end{bmatrix} = ${(t.frameProps.G * t.frameProps.J / i.L).toExponential(3)}`, "\\textbf{3.3 Bloque flexi\xF3n plano xy (}I_z\\text{, DOFs } v, \\theta_z\\text{):}", "K_{by} = \\frac{EI_z}{L^3} \\begin{bmatrix} 12 & 6L & -12 & 6L \\\\ 6L & 4L^2 & -6L & 2L^2 \\\\ -12 & -6L & 12 & -6L \\\\ 6L & 2L^2 & -6L & 4L^2 \\end{bmatrix}", "\\textbf{3.4 Bloque flexi\xF3n plano xz (}I_y\\text{, DOFs } w, \\theta_y\\text{):}", "K_{bz} = \\frac{EI_y}{L^3} \\begin{bmatrix} 12 & -6L & -12 & -6L \\\\ -6L & 4L^2 & 6L & 2L^2 \\\\ -12 & 6L & 12 & 6L \\\\ -6L & 2L^2 & 6L & 4L^2 \\end{bmatrix}"] }, { title: "4. Transformaci\xF3n local \u2192 global", content: ["\\textbf{T} \\text{ es block-diagonal con la matriz de rotaci\xF3n } R_{3 \\times 3} \\text{ repetida 4 veces:}", "T_{12 \\times 12} = \\begin{bmatrix} R & 0 & 0 & 0 \\\\ 0 & R & 0 & 0 \\\\ 0 & 0 & R & 0 \\\\ 0 & 0 & 0 & R \\end{bmatrix}", "\\text{Cosenos directores } R \\text{ del elemento (filas = ejes locales en globales):}", `R = \\begin{bmatrix} ${i.R[0].map((o) => o.toFixed(3)).join(" & ")} \\\\ ${i.R[1].map((o) => o.toFixed(3)).join(" & ")} \\\\ ${i.R[2].map((o) => o.toFixed(3)).join(" & ")} \\end{bmatrix}`] }, { title: "5. Ensamblaje a coordenadas globales", content: ["K_{\\text{global}}^e = T^T \\cdot K_{\\text{local}} \\cdot T \\quad (12 \\times 12)", "\\text{Esta es la contribuci\xF3n del elemento al sistema global. Se ensambla:}", "K_{\\text{sys}} = \\sum_e A_e^T \\cdot K_{\\text{global}}^e \\cdot A_e", "\\text{donde } A_e \\text{ es la matriz de ensamblaje (gdofs locales \u2192 globales).}"] }];
  let d = null;
  try {
    d = await Zt();
  } catch (o) {
    console.warn("[Inspect] KaTeX no disponible:", o);
  }
  for (const o of a) {
    const l = document.createElement("div");
    Object.assign(l.style, { marginBottom: "18px" });
    const r = document.createElement("div");
    r.textContent = o.title, Object.assign(r.style, { fontWeight: "600", color: "#a5b4fc", marginBottom: "8px", fontSize: "12px" }), l.appendChild(r);
    for (const b of o.content) {
      const v = document.createElement("div");
      if (Object.assign(v.style, { padding: "6px 10px", marginBottom: "4px", background: "rgba(255,255,255,0.04)", borderRadius: "4px", fontSize: "12px", lineHeight: "1.7" }), d) try {
        d.render(b, v, { throwOnError: false, displayMode: true });
      } catch {
        v.textContent = b;
      }
      else v.textContent = b.replace(/\\\\/g, " | ").replace(/\\[a-zA-Z]+/g, ""), v.style.fontFamily = "ui-monospace, Menlo, monospace";
      l.appendChild(v);
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
  const s = document.createElement("span");
  Object.assign(s.style, { flex: "1", fontSize: "12px", color: "#cbd5e1" }), s.textContent = "\u2014", t.appendChild(s);
  const n = document.createElement("button");
  n.textContent = "\xD7", Object.assign(n.style, { background: "transparent", border: "none", color: "#e2e8f0", fontSize: "20px", cursor: "pointer", padding: "0 6px", lineHeight: "1" }), n.onclick = () => S.hide(), t.appendChild(n), e.appendChild(t);
  const a = document.createElement("div");
  Object.assign(a.style, { display: "flex", borderBottom: "1px solid rgba(255,255,255,0.1)" }), e.appendChild(a);
  const d = ["Tabla", "Matem\xE1tica", "Resumen"], o = [];
  let l = 0;
  for (let u = 0; u < d.length; u++) {
    const g = document.createElement("button");
    g.textContent = d[u], Object.assign(g.style, { flex: "1", background: "transparent", border: "none", color: u === 0 ? "#a5b4fc" : "#94a3b8", borderBottom: u === 0 ? "2px solid #a5b4fc" : "2px solid transparent", padding: "8px 0", cursor: "pointer", fontSize: "12px", fontWeight: u === 0 ? "600" : "400" }), g.onclick = () => y(u), a.appendChild(g), o.push(g);
  }
  const r = document.createElement("div");
  Object.assign(r.style, { flex: "1", overflow: "auto", padding: "10px 12px", fontSize: "11.5px", lineHeight: "1.5" }), e.appendChild(r);
  let b = null;
  t.addEventListener("mousedown", (u) => {
    const g = e.getBoundingClientRect();
    b = { x: u.clientX - g.left, y: u.clientY - g.top }, u.preventDefault();
  }), window.addEventListener("mousemove", (u) => {
    b && (e.style.left = `${u.clientX - b.x}px`, e.style.top = `${u.clientY - b.y}px`, e.style.right = "auto");
  }), window.addEventListener("mouseup", () => {
    b = null;
  });
  let v = null, p = null;
  function y(u) {
    l = u, o.forEach((g, w) => {
      Object.assign(g.style, { color: w === u ? "#a5b4fc" : "#94a3b8", borderBottom: w === u ? "2px solid #a5b4fc" : "2px solid transparent", fontWeight: w === u ? "600" : "400" });
    }), k();
  }
  function k() {
    if (r.innerHTML = "", !v) {
      r.textContent = "Sin elemento activo. Haz click en un elemento del modelo.";
      return;
    }
    l === 0 ? E() : l === 1 ? x() : f();
  }
  function E() {
    if (!p || !(v == null ? void 0 : v.frameProps)) {
      r.textContent = "Tablas disponibles solo para elementos frame.";
      return;
    }
    const u = v.frameProps, g = p, w = document.createElement("div");
    Object.assign(w.style, { marginBottom: "16px" }), w.innerHTML = '<div style="font-weight:600;color:#a5b4fc;margin-bottom:6px">1. Propiedades</div>';
    const C = document.createElement("table");
    Object.assign(C.style, { width: "100%", borderCollapse: "collapse", fontSize: "11px", fontFamily: "ui-monospace, Menlo, monospace" }), [["E", ke(u.E), "A", u.A.toFixed(4)], ["Iz", ke(u.Iz), "Iy", ke(u.Iy)], ["G", ke(u.G), "J", ke(u.J)], ["L", g.L.toFixed(3), "\u2014", "\u2014"]].forEach((M) => {
      const $ = document.createElement("tr");
      M.forEach((L, j) => {
        const B = document.createElement("td");
        B.textContent = L, Object.assign(B.style, { padding: "4px 8px", background: j % 2 === 0 ? "rgba(165,180,252,0.08)" : "transparent", color: j % 2 === 0 ? "#a5b4fc" : "#cbd5e1", borderBottom: "1px solid rgba(255,255,255,0.05)" }), j % 2 === 0 && (B.style.fontWeight = "600"), $.appendChild(B);
      }), C.appendChild($);
    }), w.appendChild(C), r.appendChild(w), r.appendChild(h("2. K_local (12\xD712)", g.K_local)), r.appendChild(h("3. T \u2014 Transformaci\xF3n", g.T)), r.appendChild(h("4. K_global = T^T \xB7 K_local \xB7 T", g.K_global));
  }
  function x() {
    if (!(v == null ? void 0 : v.frameProps) || !p) {
      r.textContent = "Derivaci\xF3n matem\xE1tica solo para elementos frame.";
      return;
    }
    Yt(r, v, p);
  }
  function f() {
    var _a, _b;
    if (!v) return;
    const u = v, g = [];
    if (g.push('<div style="font-weight:600;color:#a5b4fc;margin-bottom:8px">Resumen del elemento</div>'), g.push('<table style="width:100%;font-family:ui-monospace,Menlo,monospace;font-size:11.5px;border-collapse:collapse">'), g.push(`  <tr><td style="padding:5px;color:#94a3b8">\xCDndice</td><td style="padding:5px">${u.index}</td></tr>`), g.push(`  <tr><td style="padding:5px;color:#94a3b8">Tipo</td><td style="padding:5px">${u.type.toUpperCase()}</td></tr>`), g.push(`  <tr><td style="padding:5px;color:#94a3b8">Nodos</td><td style="padding:5px">${u.nodeIndices.join(" \u2192 ")}</td></tr>`), u.sectionLabel && g.push(`  <tr><td style="padding:5px;color:#94a3b8">Secci\xF3n</td><td style="padding:5px;color:#fde68a">${u.sectionLabel}</td></tr>`), p && g.push(`  <tr><td style="padding:5px;color:#94a3b8">L</td><td style="padding:5px">${p.L.toFixed(4)} m</td></tr>`), u.frameProps) {
      const w = u.frameProps;
      g.push(`  <tr><td style="padding:5px;color:#94a3b8">EA</td><td style="padding:5px">${(w.E * w.A).toExponential(3)} kN</td></tr>`), g.push(`  <tr><td style="padding:5px;color:#94a3b8">EIy (strong)</td><td style="padding:5px">${(w.E * w.Iy).toExponential(3)} kN\xB7m\xB2</td></tr>`), g.push(`  <tr><td style="padding:5px;color:#94a3b8">EIz (weak)</td><td style="padding:5px">${(w.E * w.Iz).toExponential(3)} kN\xB7m\xB2</td></tr>`), g.push(`  <tr><td style="padding:5px;color:#94a3b8">GJ</td><td style="padding:5px">${(w.G * w.J).toExponential(3)} kN\xB7m\xB2</td></tr>`);
    }
    g.push("</table>"), g.push('<div style="margin-top:14px;display:flex;gap:8px">'), g.push('  <button class="hk-copy-Klocal" style="flex:1;padding:6px 10px;background:#1e3a5f;border:1px solid #3b82f6;color:#dbeafe;border-radius:4px;cursor:pointer;font-size:11px">\u{1F4CB} Copiar K_local</button>'), g.push('  <button class="hk-copy-Kglobal" style="flex:1;padding:6px 10px;background:#1e3a5f;border:1px solid #3b82f6;color:#dbeafe;border-radius:4px;cursor:pointer;font-size:11px">\u{1F4CB} Copiar K_global</button>'), g.push("</div>"), r.innerHTML = g.join(`
`), p && ((_a = r.querySelector(".hk-copy-Klocal")) == null ? void 0 : _a.addEventListener("click", () => {
      navigator.clipboard.writeText(it(p.K_local));
    }), (_b = r.querySelector(".hk-copy-Kglobal")) == null ? void 0 : _b.addEventListener("click", () => {
      navigator.clipboard.writeText(it(p.K_global));
    }));
  }
  function h(u, g) {
    const w = document.createElement("div");
    Object.assign(w.style, { marginBottom: "16px" }), w.innerHTML = `<div style="font-weight:600;color:#a5b4fc;margin-bottom:6px">${u}</div>`;
    const C = document.createElement("div");
    Object.assign(C.style, { maxWidth: "100%", overflow: "auto", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px" });
    const _ = document.createElement("table");
    return Object.assign(_.style, { borderCollapse: "collapse", fontSize: "10px", fontFamily: "ui-monospace, Menlo, monospace" }), g.forEach((M) => {
      const $ = document.createElement("tr");
      M.forEach((L) => {
        const j = document.createElement("td");
        j.textContent = Qt(L), Object.assign(j.style, { padding: "3px 6px", borderBottom: "1px solid rgba(255,255,255,0.04)", color: Math.abs(L) < 1e-12 ? "#475569" : "#cbd5e1", textAlign: "right", minWidth: "60px" }), $.appendChild(j);
      }), _.appendChild($);
    }), C.appendChild(_), w.appendChild(C), w;
  }
  gt((u, g) => {
    g.background && (e.style.background = `${g.background}EE`);
  }), document.body.appendChild(e);
  const S = { el: e, show(u) {
    v = u, i.textContent = `Element ${u.index}`;
    const g = u.type === "frame" ? "Frame" : u.type === "shell" ? "Shell" : "Solid", w = u.nodeIndices.length === 2 ? `Nodes ${u.nodeIndices[0]} \u2192 ${u.nodeIndices[1]}` : `Nodes ${u.nodeIndices.join(",")}`;
    if (p = null, u.type === "frame" && u.frameProps && u.nodes.length >= 2) {
      const C = { ni: u.nodes[0], nj: u.nodes[1] };
      try {
        p = bt(C, u.frameProps);
      } catch (_) {
        console.warn("[Inspect] computeFrameMatrices error:", _);
      }
    }
    s.textContent = p ? `${g} \u2014 ${w} \u2014 L = ${p.L.toFixed(2)}` : `${g} \u2014 ${w}`, e.style.display = "flex", k();
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
  const s = document.createElement("span");
  s.textContent = "\u{1F4C8} Modal \u2014 \u2014", Object.assign(s.style, { flex: "1", fontWeight: "600", color: "#a5b4fc", fontSize: "12px" }), i.appendChild(s);
  const n = document.createElement("button");
  n.textContent = "\xD7", Object.assign(n.style, { background: "transparent", border: "none", color: "#e2e8f0", fontSize: "20px", cursor: "pointer", padding: "0 6px", lineHeight: "1" }), n.onclick = () => g.hide(), i.appendChild(n), t.appendChild(i);
  const a = document.createElement("div");
  Object.assign(a.style, { padding: "6px 12px", background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "10.5px", color: "#94a3b8", lineHeight: "1.5" }), t.appendChild(a);
  const d = document.createElement("div");
  Object.assign(d.style, { padding: "6px 12px", fontSize: "10.5px", color: "#fde68a", borderBottom: "1px solid rgba(255,255,255,0.05)" }), t.appendChild(d);
  const o = document.createElement("div");
  Object.assign(o.style, { flex: "1", overflow: "auto", padding: "0 6px" }), t.appendChild(o);
  const l = document.createElement("div");
  Object.assign(l.style, { display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderTop: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" });
  const r = Ke("\u25C0"), b = Ke("\u25B6"), v = Ke("\u25B6\u25B6");
  l.appendChild(r), l.appendChild(b), l.appendChild(v);
  const p = document.createElement("input");
  p.type = "range", p.min = "1", p.max = "1", p.value = "1", Object.assign(p.style, { flex: "1" }), l.appendChild(p);
  const y = document.createElement("span");
  Object.assign(y.style, { color: "#fde68a", fontSize: "11px", minWidth: "120px", textAlign: "right" }), y.textContent = "Modo 1", l.appendChild(y), t.appendChild(l);
  let k = null;
  i.addEventListener("mousedown", (w) => {
    const C = t.getBoundingClientRect();
    k = { x: w.clientX - C.left, y: w.clientY - C.top }, w.preventDefault();
  }), window.addEventListener("mousemove", (w) => {
    k && (t.style.left = `${w.clientX - k.x}px`, t.style.top = `${w.clientY - k.y}px`, t.style.right = "auto");
  }), window.addEventListener("mouseup", () => {
    k = null;
  });
  const E = It.state(0);
  let x = null, f = null;
  function h(w) {
    var _a2, _b2;
    if (!f) return;
    const C = ((_a2 = f.frequencies) == null ? void 0 : _a2.length) ?? 1;
    E.val = Math.max(0, Math.min(C - 1, w));
    const _ = f.frequencies[E.val];
    y.textContent = `Modo ${E.val + 1} \u2014 f=${_.toFixed(3)} Hz \xB7 T=${(1 / _).toFixed(4)} s`, p.value = String(E.val + 1), (_b2 = e.onModeChange) == null ? void 0 : _b2.call(e, E.val), S();
  }
  r.onclick = () => h(E.val - 1), v.onclick = () => h(E.val + 1), p.oninput = () => h(parseInt(p.value) - 1), b.onclick = () => {
    x ? g.pause() : g.play();
  };
  function S() {
    o.querySelectorAll("tr[data-mode]").forEach((w) => {
      const C = parseInt(w.dataset.mode);
      w.style.background = C === E.val ? "rgba(245,158,11,0.18)" : "transparent";
    });
  }
  function u(w, C) {
    var _a2;
    f = w, (C == null ? void 0 : C.title) && (s.textContent = `\u{1F4C8} ${C.title}`), a.innerHTML = ((C == null ? void 0 : C.properties) ?? []).map((M) => `<div>${tn(M)}</div>`).join(""), nn(o, w, d);
    const _ = ((_a2 = w.frequencies) == null ? void 0 : _a2.length) ?? 1;
    p.max = String(_), h(0);
  }
  document.body.appendChild(t);
  const g = { el: t, activeMode: E, update: u, render: u, show() {
    t.style.display = "flex";
  }, hide() {
    t.style.display = "none", g.pause();
  }, toggle() {
    t.style.display = t.style.display === "none" ? "flex" : "none";
  }, play() {
    x || (b.textContent = "\u23F8", x = setInterval(() => {
      if (!f) return;
      const w = f.frequencies.length;
      h((E.val + 1) % w);
    }, 1500));
  }, pause() {
    x && (clearInterval(x), x = null), b.textContent = "\u25B6";
  }, destroy() {
    g.pause(), t.remove();
  } };
  return g;
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
  const s = ((_a = t.frequencies) == null ? void 0 : _a.length) ?? 0;
  if (s === 0) {
    e.textContent = "Sin resultados modales.";
    return;
  }
  const n = document.createElement("table");
  Object.assign(n.style, { width: "100%", borderCollapse: "collapse", fontSize: "10.5px", fontFamily: "ui-monospace, Menlo, monospace" });
  const a = document.createElement("thead");
  a.innerHTML = `
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
    </tr>`, n.appendChild(a);
  const d = document.createElement("tbody");
  let o = 0, l = 0, r = 0, b = -1, v = -1, p = -1, y = -1, k = -1;
  for (let x = 0; x < s; x++) {
    const f = t.frequencies[x], h = 2 * Math.PI * f, S = 1 / f, u = (_b = t.massParticipation) == null ? void 0 : _b[x];
    let g = 0, w = 0, C = 0, _ = 0;
    if (Array.isArray(u)) g = u[0] ?? 0, w = u[1] ?? 0, C = u[2] ?? 0, _ = u[5] ?? 0;
    else if (u && typeof u == "object") {
      const L = u;
      g = L.ux ?? 0, w = L.uy ?? 0, C = L.uz ?? 0, _ = L.rz ?? 0;
    }
    o += g, l += w, r += _, b < 0 && g > 0.5 && (b = x), v < 0 && w > 0.5 && (v = x), p < 0 && _ > 0.5 && (p = x), y < 0 && o > 0.9 && (y = x), k < 0 && l > 0.9 && (k = x);
    let M = "\u2014";
    x === b ? M = `Ux (${(g * 100).toFixed(0)}%)` : x === v ? M = `Uy (${(w * 100).toFixed(0)}%)` : x === p && (M = `Rz (${(_ * 100).toFixed(0)}%)`);
    const $ = document.createElement("tr");
    $.dataset.mode = String(x), Object.assign($.style, { borderBottom: "1px solid rgba(255,255,255,0.04)", cursor: "pointer" }), $.onclick = () => void 0, $.innerHTML = `
      <td style="padding:3px 4px;text-align:right;color:#fde68a;font-weight:600">${x + 1}</td>
      <td style="padding:3px 4px;text-align:right">${h.toFixed(2)}</td>
      <td style="padding:3px 4px;text-align:right;color:#fde68a">${f.toFixed(3)}</td>
      <td style="padding:3px 4px;text-align:right">${S.toFixed(3)}</td>
      <td style="padding:3px 4px;text-align:right;color:${Oe(g)}">${le(g)}</td>
      <td style="padding:3px 4px;text-align:right;color:${Oe(w)}">${le(w)}</td>
      <td style="padding:3px 4px;text-align:right;color:${Oe(C)}">${le(C)}</td>
      <td style="padding:3px 4px;text-align:right;color:${Oe(_)}">${le(_)}</td>
      <td style="padding:3px 4px;text-align:right;color:#94a3b8">${le(o)}</td>
      <td style="padding:3px 4px;text-align:right;color:#94a3b8">${le(l)}</td>
      <td style="padding:3px 4px;text-align:right;color:#94a3b8">${le(r)}</td>
      <td style="padding:3px 4px;text-align:left;color:#a5b4fc">${M}</td>
    `, d.appendChild($);
  }
  n.appendChild(d), e.appendChild(n), y >= 0 && k >= 0 ? (i.innerHTML = `<b>ASCE 7-22 \xA712.9.1:</b> \u2713 90% alcanzado en X (modo ${y + 1}) e Y (modo ${k + 1}) de ${s}`, i.style.color = "#86efac") : (i.innerHTML = `<b>ASCE 7-22 \xA712.9.1:</b> \u26A0 Solo \u03A3Ux=${le(o)} \u03A3Uy=${le(l)} con ${s} modos. Considera aumentar.`, i.style.color = "#fcd34d");
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
  const s = document.createElement("button");
  s.textContent = "\xD7", Object.assign(s.style, { background: "transparent", border: "none", color: "#e2e8f0", fontSize: "16px", cursor: "pointer", padding: "0 4px", lineHeight: "1" }), s.onclick = () => o.hide(), t.appendChild(s), e.appendChild(t);
  const n = document.createElement("div");
  e.appendChild(n);
  let a = null;
  t.addEventListener("mousedown", (l) => {
    const r = e.getBoundingClientRect();
    a = { x: l.clientX - r.left, y: l.clientY - r.top }, l.preventDefault();
  }), window.addEventListener("mousemove", (l) => {
    a && (e.style.left = `${l.clientX - a.x}px`, e.style.top = `${l.clientY - a.y}px`, e.style.right = "auto");
  }), window.addEventListener("mouseup", () => {
    a = null;
  });
  function d(l) {
    var _a, _b, _c;
    const r = [];
    if (r.push('<div style="font-weight:600;color:#fde68a;margin-bottom:4px">FEM Solver</div>'), r.push('<div style="margin-bottom:8px;color:#cbd5e1">'), r.push(`  <div>Modelo: <b>${l.nNodes}</b> nodos, <b>${l.nElements}</b> elem</div>`), l.nFrames != null && r.push(`  <div>Frames: ${l.nFrames}${l.nShells ? ` &nbsp;|&nbsp; Shells: ${l.nShells}` : ""}${l.nSolids ? ` &nbsp;|&nbsp; Solids: ${l.nSolids}` : ""}</div>`), r.push(`  <div>Apoyos: ${l.nSupports} &nbsp;|&nbsp; Cargas: ${l.nLoads}</div>`), r.push(`  <div>DOFs: ${l.totalDOFs} total, ~${l.freeDOFs} libres</div>`), r.push("</div>"), r.push(`<div style="color:#a5b4fc;font-weight:600">1. Ensamblaje K global (${l.totalDOFs}\xD7${l.totalDOFs})</div>`), r.push('<div style="margin-left:10px;color:#cbd5e1;font-style:italic;font-size:10.5px">K_global = \u03A3 T^T \xB7 K_local \xB7 T</div>'), ((_a = l.timings) == null ? void 0 : _a.solve) != null && r.push(`<div style="color:#a5b4fc;font-weight:600;margin-top:6px">2. K \xB7 u = F  \u2192  ${l.solverName ?? "SparseLU"}  \u2192  <span style="color:#86efac">${l.timings.solve.toFixed(1)} ms</span></div>`), l.maxDisplacement) {
      const b = l.maxDisplacement;
      r.push('<div style="color:#a5b4fc;font-weight:600;margin-top:6px">3. Desplazamientos:</div>'), r.push(`<div style="margin-left:10px;color:#cbd5e1">max|u| = <b style="color:#fde68a">${b.value.toExponential(4)} m</b> (nodo ${b.nodeIdx}, ${b.component})</div>`);
    }
    ((_b = l.timings) == null ? void 0 : _b.internalForces) != null && (r.push(`<div style="color:#a5b4fc;font-weight:600;margin-top:6px">4. Fuerzas internas: <span style="color:#86efac">${l.timings.internalForces.toFixed(1)} ms</span></div>`), r.push('<div style="margin-left:10px;color:#cbd5e1;font-style:italic;font-size:10.5px">F_int = K_local \xB7 T \xB7 u</div>')), ((_c = l.timings) == null ? void 0 : _c.total) != null && r.push(`<div style="margin-top:10px;padding:6px 8px;background:rgba(134,239,172,0.1);border-left:3px solid #86efac;border-radius:3px">\u2713 Completado: <b>${l.timings.total.toFixed(1)} ms</b></div>`), n.innerHTML = r.join(`
`);
  }
  gt((l, r) => {
    r.background && (e.style.background = `${r.background}EE`);
  }), document.body.appendChild(e);
  const o = { el: e, update(l) {
    d(l);
  }, show() {
    e.style.display = "block";
  }, hide() {
    e.style.display = "none";
  }, toggle() {
    e.style.display = e.style.display === "none" ? "block" : "none";
  }, destroy() {
    e.remove();
  } };
  return o;
}
function an(e, t) {
  const i = Object.keys(t), s = i.map((o) => t[o]), a = `
    const {sqrt,sin,cos,tan,exp,log,abs,max,min,floor,ceil,round,pow,PI,E} = Math;
    return (${e});
  `;
  return new Function(...i, a)(...s);
}
const sn = /^##\s+(.+)$/, ln = /^\s*(?:%|\/\/)\s?(.*)$/, rn = /^\s*([a-zA-Z_]\w*)\s*=\s*(.+)$/;
function dn(e, t = {}) {
  const i = e.split(/\r?\n/), s = [], n = { ...t.modelVars ?? {} };
  for (const a of i) {
    const d = a;
    if (!d.trim()) continue;
    const o = d.match(sn);
    if (o) {
      s.push({ type: "section", source: d, title: o[1] });
      continue;
    }
    const l = d.match(ln);
    if (l) {
      s.push({ type: "comment", source: d, value: l[1] });
      continue;
    }
    const r = d.match(rn);
    let b, v;
    r ? (v = r[1], b = r[2]) : b = d.trim();
    try {
      const p = an(b, n);
      v && (n[v] = p), s.push({ type: v ? "assign" : "expr", source: d, name: v, value: p, latex: yt(v, p) });
    } catch (p) {
      s.push({ type: "error", source: d, error: p.message ?? String(p) });
    }
  }
  return s;
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
    const a = e.map((d) => typeof d == "number" ? je(d) : String(d));
    return e.length > 8 ? `\\begin{bmatrix} ${a.slice(0, 4).join(" \\\\ ")} \\\\ \\vdots \\\\ ${a.slice(-2).join(" \\\\ ")} \\end{bmatrix}_{${e.length}\\times1}` : `\\begin{bmatrix} ${a.join(" \\\\ ")} \\end{bmatrix}`;
  }
  const t = e, i = t.length, s = t[0].length;
  return i > 8 || s > 8 ? `\\text{Matriz } ${i} \\times ${s}\\text{ (truncada)}` : `\\begin{bmatrix} ${t.map((a) => a.map((d) => typeof d == "number" ? je(d) : String(d)).join(" & ")).join(" \\\\ ")} \\end{bmatrix}`;
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
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js", s.onload = () => e(window.katex), s.onerror = () => t(new Error("Failed to load KaTeX")), document.head.appendChild(s);
  }), ze);
}
function un(e = {}) {
  var _a, _b;
  const t = document.createElement("div");
  t.className = "hekatan-calc-panel", Object.assign(t.style, { position: "fixed", top: ((_a = e.position) == null ? void 0 : _a.top) != null ? `${e.position.top}px` : "70px", right: ((_b = e.position) == null ? void 0 : _b.right) != null ? `${e.position.right}px` : "12px", width: "880px", height: "560px", background: "rgba(20, 24, 30, 0.97)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", boxShadow: "0 6px 24px rgba(0,0,0,0.5)", color: "#e2e8f0", fontFamily: "ui-sans-serif, system-ui", fontSize: "12px", zIndex: "100", backdropFilter: "blur(6px)", display: "none", flexDirection: "column", overflow: "hidden" });
  const i = document.createElement("div");
  Object.assign(i.style, { display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.1)", cursor: "move", userSelect: "none", background: "rgba(255,255,255,0.03)" });
  const s = y("\u{1F4E5} Descargar", "#1e3a5f", "#3b82f6");
  s.onclick = () => {
    const M = new Blob([f.value + `

% \u2500\u2500 OUTPUT \u2500\u2500
` + (g.textContent ?? "")], { type: "text/plain;charset=utf-8" }), $ = URL.createObjectURL(M), L = document.createElement("a");
    L.href = $, L.download = `hekatan_calc_${Date.now()}.txt`, document.body.appendChild(L), L.click(), document.body.removeChild(L), setTimeout(() => URL.revokeObjectURL($), 1e3);
  }, i.appendChild(s);
  const n = document.createElement("select");
  Object.assign(n.style, { background: "rgba(0,0,0,0.4)", color: "#e2e8f0", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "3px", padding: "4px 8px", fontSize: "11px", outline: "none", cursor: "pointer" });
  const a = [{ name: "FEM del modelo actual (auto)", code: rt() }, { name: "Pesos por piso (\u03A3 kN)", code: `## Pesos por piso
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
  for (const M of a) {
    const $ = document.createElement("option");
    $.value = M.name, $.textContent = M.name, n.appendChild($);
  }
  n.onchange = () => {
    const M = a.find(($) => $.name === n.value);
    M && (f.value = M.code, _.evaluate());
  }, i.appendChild(n);
  const d = y("\u2753 Funciones", "rgba(255,255,255,0.06)", "rgba(255,255,255,0.2)");
  d.title = "Funciones disponibles", d.onclick = () => {
    g.innerHTML = `
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
  }, i.appendChild(d);
  const o = y("\u{1F4DA} Librer\xEDa", "rgba(255,255,255,0.06)", "rgba(255,255,255,0.2)");
  o.title = "Snippets reutilizables", o.onclick = () => {
    g.innerHTML = `
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
  }, i.appendChild(o);
  const l = document.createElement("span");
  l.textContent = "\u{1F9EE} Calculadora FEM", Object.assign(l.style, { flex: "1", fontWeight: "600", color: "#a5b4fc", fontSize: "13px", textAlign: "center" }), i.appendChild(l);
  const r = document.createElement("button");
  r.textContent = "\u25B6 Ejecutar (Ctrl+Enter)", Object.assign(r.style, { background: "#2d8659", border: "none", color: "white", padding: "5px 14px", borderRadius: "4px", cursor: "pointer", fontSize: "11.5px", fontWeight: "600" }), r.onclick = () => _.evaluate(), i.appendChild(r);
  const b = y("\u26F6", "rgba(255,255,255,0.06)", "rgba(255,255,255,0.2)");
  b.title = "Pantalla completa";
  let v = false;
  b.onclick = () => {
    v = !v, v ? Object.assign(t.style, { top: "0", left: "0", right: "0", bottom: "0", width: "100vw", height: "100vh" }) : Object.assign(t.style, { top: "70px", right: "12px", left: "auto", bottom: "auto", width: "880px", height: "560px" });
  }, i.appendChild(b);
  const p = document.createElement("button");
  p.textContent = "\xD7", Object.assign(p.style, { background: "transparent", border: "none", color: "#e2e8f0", fontSize: "20px", cursor: "pointer", padding: "0 6px", lineHeight: "1" }), p.onclick = () => _.hide(), i.appendChild(p), t.appendChild(i);
  function y(M, $, L) {
    const j = document.createElement("button");
    return j.textContent = M, Object.assign(j.style, { background: $, border: `1px solid ${L}`, color: "#dbeafe", padding: "4px 10px", borderRadius: "3px", cursor: "pointer", fontSize: "11px", fontFamily: "inherit" }), j;
  }
  const k = document.createElement("div");
  Object.assign(k.style, { display: "flex", flex: "1", overflow: "hidden" }), t.appendChild(k);
  const E = document.createElement("div");
  Object.assign(E.style, { flex: "1", display: "flex", borderRight: "1px solid rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.3)", overflow: "hidden" }), k.appendChild(E);
  const x = document.createElement("div");
  Object.assign(x.style, { width: "44px", padding: "10px 6px 10px 8px", background: "rgba(0,0,0,0.5)", color: "#64748b", fontFamily: "ui-monospace, Menlo, Consolas, monospace", fontSize: "12px", lineHeight: "1.6", textAlign: "right", borderRight: "1px solid rgba(255,255,255,0.08)", overflow: "hidden", whiteSpace: "pre", userSelect: "none" }), E.appendChild(x);
  const f = document.createElement("textarea");
  Object.assign(f.style, { flex: "1", border: "none", padding: "10px 12px", background: "transparent", color: "#e2e8f0", fontFamily: "ui-monospace, Menlo, Consolas, monospace", fontSize: "12px", lineHeight: "1.6", resize: "none", outline: "none", tabSize: "2" }), f.spellcheck = false, f.value = e.initialCode ?? rt(), f.placeholder = `% Escribe expresiones FEM aqu\xED...
% Ej:  A = 0.06
%      I = 1e-3
%      EI = 200e6 * I`, E.appendChild(f);
  function h() {
    const M = f.value.split(`
`).length;
    let $ = "";
    for (let L = 1; L <= Math.max(M, 5); L++) $ += L + `
`;
    x.textContent = $, x.scrollTop = f.scrollTop;
  }
  f.addEventListener("input", h), f.addEventListener("scroll", () => {
    x.scrollTop = f.scrollTop;
  }), h();
  const S = document.createElement("div");
  Object.assign(S.style, { flex: "1.2", display: "flex", flexDirection: "column", overflow: "hidden" });
  const u = document.createElement("div");
  u.textContent = "OUTPUT", Object.assign(u.style, { padding: "6px 14px", background: "rgba(0,0,0,0.3)", color: "#94a3b8", fontSize: "10.5px", fontWeight: "600", letterSpacing: "0.5px", borderBottom: "1px solid rgba(255,255,255,0.08)" }), S.appendChild(u);
  const g = document.createElement("div");
  Object.assign(g.style, { flex: "1", overflow: "auto", padding: "10px 14px", background: "rgba(255,255,255,0.02)" }), S.appendChild(g), k.appendChild(S);
  let w = null;
  i.addEventListener("mousedown", (M) => {
    if (M.target !== i && M.target !== l) return;
    const $ = t.getBoundingClientRect();
    w = { x: M.clientX - $.left, y: M.clientY - $.top }, M.preventDefault();
  }), window.addEventListener("mousemove", (M) => {
    w && (t.style.left = `${M.clientX - w.x}px`, t.style.top = `${M.clientY - w.y}px`, t.style.right = "auto");
  }), window.addEventListener("mouseup", () => {
    w = null;
  }), f.addEventListener("keydown", (M) => {
    M.ctrlKey && M.key === "Enter" && (M.preventDefault(), _.evaluate());
  });
  async function C() {
    var _a2;
    const M = f.value, $ = { modelVars: ((_a2 = e.getModelVars) == null ? void 0 : _a2.call(e)) ?? {} };
    let L;
    try {
      L = dn(M, $);
    } catch (j) {
      L = [{ type: "error", source: M, error: j.message }];
    }
    await mn(g, L);
  }
  document.body.appendChild(t);
  const _ = { el: t, show() {
    t.style.display = "flex", _.evaluate();
  }, hide() {
    t.style.display = "none";
  }, toggle() {
    t.style.display === "none" ? _.show() : _.hide();
  }, setCode(M) {
    f.value = M, _.evaluate();
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
  t.forEach((s, n) => {
    const a = document.createElement("div");
    Object.assign(a.style, { marginBottom: "10px", paddingBottom: "8px" });
    const d = document.createElement("div");
    if (Object.assign(d.style, { fontFamily: "ui-monospace, Menlo, monospace", fontSize: "10.5px", color: "#64748b", marginBottom: "3px" }), d.textContent = `${n + 1}: ${s.source}`, a.appendChild(d), s.type === "section") Object.assign(a.style, { marginTop: "12px", marginBottom: "8px", padding: "5px 10px", background: "rgba(165,180,252,0.12)", borderLeft: "3px solid #a5b4fc", borderRadius: "3px" }), a.innerHTML = `<div style="font-weight:700;color:#a5b4fc;font-size:13px">${fn(s.title || "")}</div>`;
    else if (s.type === "comment") {
      const o = document.createElement("div");
      Object.assign(o.style, { color: "#86efac", fontStyle: "italic", fontSize: "11.5px" }), o.textContent = s.value || "", a.appendChild(o);
    } else if (s.type === "error") {
      const o = document.createElement("div");
      Object.assign(o.style, { color: "#f87171", padding: "5px 8px", background: "rgba(248,113,113,0.1)", borderRadius: "3px", fontFamily: "monospace", fontSize: "11px" }), o.textContent = `\u274C ${s.error}`, a.appendChild(o);
    } else {
      const o = document.createElement("div");
      if (Object.assign(o.style, { padding: "6px 10px", background: "rgba(255,255,255,0.03)", borderLeft: "2px solid #fde68a", borderRadius: "3px", overflow: "auto" }), s.latex && i) try {
        i.render(s.latex, o, { throwOnError: false, displayMode: true });
      } catch {
        o.textContent = JSON.stringify(s.value);
      }
      else o.textContent = JSON.stringify(s.value);
      a.appendChild(o);
    }
    e.appendChild(a);
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
  return { addNode(s, n, a) {
    const d = e.nodes.val.slice();
    return d.push([s, n, a]), e.nodes.val = d, t(), d.length - 1;
  }, addFrame(s, n) {
    const a = e.elements.val.slice();
    return a.push([s, n]), e.elements.val = a, t(), a.length - 1;
  }, addSupport(s, n) {
    i();
    let a;
    n === "fixed" || n === void 0 ? a = [true, true, true, true, true, true] : n === "pinned" ? a = [true, true, true, false, false, false] : Array.isArray(n) ? a = [n[0], n[1], n[2], n[3], n[4], n[5]] : a = [true, true, true, true, true, true], e.nodeInputs.val.supports.set(s, a), e.nodeInputs.val = { ...e.nodeInputs.val }, t();
  }, addLoad(s, n) {
    i();
    const a = [n[0] ?? 0, n[1] ?? 0, n[2] ?? 0, n[3] ?? 0, n[4] ?? 0, n[5] ?? 0];
    e.nodeInputs.val.loads.set(s, a), e.nodeInputs.val = { ...e.nodeInputs.val }, t();
  }, setSection(s, n) {
    const a = e.elementInputs.val;
    n.E != null && (a.elasticities = a.elasticities ?? /* @__PURE__ */ new Map(), a.elasticities.set(s, n.E)), n.A != null && (a.areas = a.areas ?? /* @__PURE__ */ new Map(), a.areas.set(s, n.A)), n.Iy != null && (a.momentsOfInertiaY = a.momentsOfInertiaY ?? /* @__PURE__ */ new Map(), a.momentsOfInertiaY.set(s, n.Iy)), n.Iz != null && (a.momentsOfInertiaZ = a.momentsOfInertiaZ ?? /* @__PURE__ */ new Map(), a.momentsOfInertiaZ.set(s, n.Iz)), n.J != null && (a.torsionalConstants = a.torsionalConstants ?? /* @__PURE__ */ new Map(), a.torsionalConstants.set(s, n.J)), n.G != null && (a.shearModuli = a.shearModuli ?? /* @__PURE__ */ new Map(), a.shearModuli.set(s, n.G)), e.elementInputs.val = { ...a }, t();
  }, clear() {
    e.nodes.val = [], e.elements.val = [], e.nodeInputs.val = { supports: /* @__PURE__ */ new Map(), loads: /* @__PURE__ */ new Map() }, e.elementInputs.val = {}, t();
  }, info() {
    var _a, _b;
    const s = e.nodes.val.length, n = e.elements.val.length, a = ((_a = e.nodeInputs.val.supports) == null ? void 0 : _a.size) ?? 0, d = ((_b = e.nodeInputs.val.loads) == null ? void 0 : _b.size) ?? 0, o = `Model: ${s} nodes, ${n} elements (${a} supports, ${d} loads)`;
    return console.log(o), o;
  }, listNodes() {
    console.table(e.nodes.val.map((s, n) => ({ idx: n, x: s[0], y: s[1], z: s[2] })));
  }, listElements() {
    console.table(e.elements.val.map((s, n) => ({ idx: n, nodes: s.join(" \u2192 ") })));
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
  } catch (s) {
    try {
      return new Function("cad", i)(t), { ok: true, result: void 0 };
    } catch (n) {
      return { ok: false, error: n.message ?? s.message ?? String(n) };
    }
  }
}
function bn(e) {
  var _a, _b, _c;
  const t = document.createElement("div");
  t.className = "hekatan-cli-panel", Object.assign(t.style, { position: "fixed", bottom: ((_a = e.position) == null ? void 0 : _a.bottom) != null ? `${e.position.bottom}px` : "12px", right: ((_b = e.position) == null ? void 0 : _b.right) != null ? `${e.position.right}px` : "12px", left: ((_c = e.position) == null ? void 0 : _c.left) != null ? `${e.position.left}px` : "auto", width: "640px", height: "300px", background: "rgba(10,12,16,0.96)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", boxShadow: "0 6px 24px rgba(0,0,0,0.5)", color: "#86efac", fontFamily: "ui-monospace, Menlo, Consolas, monospace", fontSize: "12px", zIndex: "100", backdropFilter: "blur(6px)", display: e.initiallyVisible ? "flex" : "none", flexDirection: "column", overflow: "hidden" });
  const i = document.createElement("div");
  Object.assign(i.style, { display: "flex", alignItems: "center", gap: "8px", padding: "6px 10px", borderBottom: "1px solid rgba(255,255,255,0.1)", cursor: "move", userSelect: "none", background: "rgba(255,255,255,0.03)", color: "#a5b4fc", fontWeight: "600", fontSize: "12px" });
  const s = document.createElement("span");
  s.textContent = "\u{1F4BB} CLI", Object.assign(s.style, { flex: "1" }), i.appendChild(s);
  const n = document.createElement("button");
  n.textContent = "Clear", Object.assign(n.style, { background: "transparent", border: "1px solid rgba(165,180,252,0.3)", color: "#a5b4fc", padding: "2px 8px", borderRadius: "3px", cursor: "pointer", fontSize: "10.5px" }), n.onclick = () => {
    d.innerHTML = "";
  }, i.appendChild(n);
  const a = document.createElement("button");
  a.textContent = "\xD7", Object.assign(a.style, { background: "transparent", border: "none", color: "#e2e8f0", fontSize: "18px", cursor: "pointer", padding: "0 4px", lineHeight: "1" }), a.onclick = () => E.hide(), i.appendChild(a), t.appendChild(i);
  const d = document.createElement("div");
  Object.assign(d.style, { flex: "1", overflow: "auto", padding: "8px 12px", background: "rgba(0,0,0,0.4)" }), t.appendChild(d);
  const o = document.createElement("div");
  Object.assign(o.style, { display: "flex", alignItems: "center", padding: "6px 12px", borderTop: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" });
  const l = document.createElement("span");
  l.textContent = "\u203A ", Object.assign(l.style, { color: "#fde68a", marginRight: "6px", fontWeight: "600" }), o.appendChild(l);
  const r = document.createElement("input");
  r.type = "text", r.placeholder = "cad.addNode(0,0,0)  \xB7  type 'help'", Object.assign(r.style, { flex: "1", border: "none", background: "transparent", color: "#e2e8f0", outline: "none", fontFamily: "inherit", fontSize: "12px" }), o.appendChild(r), t.appendChild(o);
  let b = null;
  i.addEventListener("mousedown", (x) => {
    if (x.target !== i && x.target !== s) return;
    const f = t.getBoundingClientRect();
    b = { x: x.clientX - f.left, y: x.clientY - f.top }, x.preventDefault();
  }), window.addEventListener("mousemove", (x) => {
    b && (t.style.left = `${x.clientX - b.x}px`, t.style.top = `${x.clientY - b.y}px`, t.style.right = "auto", t.style.bottom = "auto");
  }), window.addEventListener("mouseup", () => {
    b = null;
  });
  const v = [];
  let p = 0;
  function y(x, f = "info") {
    const h = document.createElement("div");
    Object.assign(h.style, { padding: "1px 0", whiteSpace: "pre-wrap", wordBreak: "break-all" }), f === "input" ? h.innerHTML = `<span style="color:#fde68a">\u203A </span><span style="color:#e2e8f0">${yn(x)}</span>` : f === "error" ? (Object.assign(h.style, { color: "#f87171" }), h.textContent = `\u274C ${x}`) : f === "warn" ? (Object.assign(h.style, { color: "#fcd34d" }), h.textContent = `\u26A0 ${x}`) : f === "result" ? (Object.assign(h.style, { color: "#86efac" }), h.textContent = `\u2190 ${x}`) : (Object.assign(h.style, { color: "#cbd5e1" }), h.textContent = x), d.appendChild(h), d.scrollTop = d.scrollHeight;
  }
  function k(x) {
    if (!x.trim()) return;
    y(x, "input"), v.push(x), p = v.length;
    const f = xn(x, e.cad);
    if (f.ok) {
      if (f.result !== void 0) {
        const h = typeof f.result == "object" ? JSON.stringify(f.result, null, 2) : String(f.result);
        y(h, "result");
      }
    } else y(f.error ?? "unknown error", "error");
  }
  y(gn(), "info"), r.addEventListener("keydown", (x) => {
    if (x.key === "Enter") k(r.value), r.value = "";
    else if (x.key === "ArrowUp") p > 0 && (p--, r.value = v[p], x.preventDefault());
    else if (x.key === "ArrowDown") p < v.length - 1 ? (p++, r.value = v[p]) : (p = v.length, r.value = ""), x.preventDefault();
    else if (x.key === "l" && x.ctrlKey) d.innerHTML = "", x.preventDefault();
    else if (x.key === "Tab") {
      const f = r.value, h = f.match(/cad\.(\w*)$/);
      if (h) {
        const u = Object.keys(e.cad).filter((g) => typeof e.cad[g] == "function").filter((g) => g.startsWith(h[1]));
        u.length === 1 ? r.value = f.slice(0, -h[1].length) + u[0] + "(" : u.length > 1 && y(u.join("  "), "info");
      }
      x.preventDefault();
    }
  }), document.body.appendChild(t);
  const E = { el: t, show() {
    t.style.display = "flex", setTimeout(() => r.focus(), 50);
  }, hide() {
    t.style.display = "none";
  }, toggle() {
    t.style.display === "none" ? E.show() : E.hide();
  }, exec(x) {
    k(x);
  }, log(x, f = "info") {
    y(x, f);
  }, destroy() {
    t.remove();
  } };
  return E;
}
function yn(e) {
  return e.replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
}
function wn(e) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: t, elements: i, nodeInputs: s, elementInputs: n, deformOutputs: a, modalOutputs: d } = e, o = [];
  o.push('<!DOCTYPE html><html><head><meta charset="utf-8">'), o.push(`<title>${He(e.title || "FEM Report")}</title>`), o.push('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css">'), o.push('<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js"><\/script>'), o.push('<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.body)"><\/script>'), o.push(`<style>
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
  </style>`), o.push("</head><body>"), o.push('<div class="toolbar no-print">'), o.push('  <button class="btn" onclick="window.print()">\u{1F5A8} Imprimir / PDF</button>'), o.push('  <button class="btn" onclick="window.close()">\u2715 Cerrar</button>'), o.push("</div>"), o.push(`<h1>${He(e.title || "Finite Element Analysis \u2014 Step-by-Step Report")}</h1>`), e.subtitle && o.push(`<p style="color:#64748b;font-style:italic">${He(e.subtitle)}</p>`), o.push('<p style="color:#64748b">Complete FEM derivation from element formulation to final results.</p>'), o.push("<h2>1. Input Data</h2>");
  const l = i.filter((p) => p.length === 2).length, r = i.filter((p) => p.length === 3 || p.length === 4).length, b = i.filter((p) => p.length === 8).length, v = t.length * 6;
  o.push(`<table style="width:auto"><tr><td style="text-align:left">Number of nodes</td><td>${t.length}</td></tr>`), o.push(`<tr><td style="text-align:left">Number of elements</td><td>${i.length} (${l} frames, ${r} shells, ${b} solids)</td></tr>`), o.push('<tr><td style="text-align:left">DOFs per node</td><td>6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>'), o.push(`<tr><td style="text-align:left">Total DOFs</td><td>${v}</td></tr></table>`), o.push("<h3>1.1 Node Coordinates</h3>"), o.push("<table><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr>");
  for (let p = 0; p < Math.min(t.length, 50); p++) {
    const y = t[p];
    o.push(`<tr><td>${p}</td><td>${Fe(y[0])}</td><td>${Fe(y[1])}</td><td>${Fe(y[2])}</td></tr>`);
  }
  t.length > 50 && o.push(`<tr><td colspan="4" style="text-align:center;font-style:italic">... ${t.length - 50} m\xE1s</td></tr>`), o.push("</table>"), o.push("<h3>1.2 Element Connectivity</h3>"), o.push("<table><tr><th>Element</th><th>Type</th><th>Nodes</th></tr>");
  for (let p = 0; p < Math.min(i.length, 40); p++) {
    const y = i[p], k = y.length === 2 ? "Frame" : y.length === 3 ? "Shell-CST" : y.length === 4 ? "Shell-Q4" : "Solid-H8";
    o.push(`<tr><td>${p}</td><td>${k}</td><td>${y.join(" \u2192 ")}</td></tr>`);
  }
  i.length > 40 && o.push(`<tr><td colspan="3" style="text-align:center;font-style:italic">... ${i.length - 40} m\xE1s</td></tr>`), o.push("</table>"), o.push("<h3>1.3 Section Properties (Frames)</h3>"), o.push("<table><tr><th>Element</th><th>E</th><th>A</th><th>I<sub>y</sub></th><th>I<sub>z</sub></th><th>J</th></tr>");
  for (let p = 0; p < Math.min(l, 30); p++) {
    const y = (_a = n.elasticities) == null ? void 0 : _a.get(p), k = (_b = n.areas) == null ? void 0 : _b.get(p), E = (_c = n.momentsOfInertiaY) == null ? void 0 : _c.get(p), x = (_d = n.momentsOfInertiaZ) == null ? void 0 : _d.get(p), f = (_e = n.torsionalConstants) == null ? void 0 : _e.get(p);
    o.push(`<tr><td>${p}</td><td>${me(y)}</td><td>${me(k)}</td><td>${me(E)}</td><td>${me(x)}</td><td>${me(f)}</td></tr>`);
  }
  if (l > 30 && o.push(`<tr><td colspan="6" style="text-align:center;font-style:italic">... ${l - 30} m\xE1s</td></tr>`), o.push("</table>"), o.push("<h3>1.4 Boundary Conditions (Supports)</h3>"), s.supports && s.supports.size > 0) {
    o.push("<table><tr><th>Node</th><th>U<sub>x</sub></th><th>U<sub>y</sub></th><th>U<sub>z</sub></th><th>R<sub>x</sub></th><th>R<sub>y</sub></th><th>R<sub>z</sub></th></tr>");
    for (const [p, y] of s.supports) o.push(`<tr><td>${p}</td>${y.map((k) => `<td>${k ? "\u2713" : ""}</td>`).join("")}</tr>`);
    o.push("</table>");
  }
  if (o.push("<h3>1.5 Applied Loads</h3>"), s.loads && s.loads.size > 0) {
    o.push("<table><tr><th>Node</th><th>F<sub>x</sub></th><th>F<sub>y</sub></th><th>F<sub>z</sub></th><th>M<sub>x</sub></th><th>M<sub>y</sub></th><th>M<sub>z</sub></th></tr>");
    for (const [p, y] of s.loads) o.push(`<tr><td>${p}</td>${y.map((k) => `<td>${Fe(k)}</td>`).join("")}</tr>`);
    o.push("</table>");
  }
  if (l > 0) {
    o.push("<h2>2. Element Stiffness Matrices</h2>"), o.push('<div class="latex">$$ K^e_{\\text{local}} = \\text{(12\xD712)} \\quad \\text{for each frame element} $$</div>');
    const p = i[0];
    if (p.length === 2 && t[p[0]] && t[p[1]]) {
      const y = { E: ((_f = n.elasticities) == null ? void 0 : _f.get(0)) ?? 2e8, G: ((_g = n.shearModuli) == null ? void 0 : _g.get(0)) ?? 8e7, A: ((_h = n.areas) == null ? void 0 : _h.get(0)) ?? 0.01, Iy: ((_i = n.momentsOfInertiaY) == null ? void 0 : _i.get(0)) ?? 1e-4, Iz: ((_j = n.momentsOfInertiaZ) == null ? void 0 : _j.get(0)) ?? 1e-4, J: ((_k = n.torsionalConstants) == null ? void 0 : _k.get(0)) ?? 1e-4 };
      try {
        const k = bt({ ni: t[p[0]], nj: t[p[1]] }, y);
        o.push(`<h3>2.1 Element 0 (sample) \u2014 L = ${k.L.toFixed(3)} m</h3>`), o.push(dt("K_local (12\xD712)", k.K_local, 11)), o.push('<div class="latex">$$ T_{12 \\times 12} = \\text{block-diag}(R, R, R, R), \\quad K_{\\text{global}} = T^T \\cdot K_{\\text{local}} \\cdot T $$</div>'), o.push(dt("K_global (12\xD712)", k.K_global, 11));
      } catch (k) {
        o.push(`<div class="info">Could not compute K_local for element 0: ${k.message}</div>`);
      }
    }
  }
  if (o.push("<h2>3. Global Assembly & Solve</h2>"), o.push('<div class="latex">$$ K_{\\text{sys}} \\cdot u = F \\quad \\Rightarrow \\quad u = K_{\\text{sys}}^{-1} \\cdot F $$</div>'), o.push("<p>El sistema global se resuelve usando descomposici\xF3n LU dispersa (SparseLU) para sistemas grandes, o LU densa para sistemas peque\xF1os (&lt; 200 DOFs).</p>"), a == null ? void 0 : a.deformations) {
    o.push("<h2>4. Nodal Displacements</h2>"), o.push("<table><tr><th>Node</th><th>U<sub>x</sub></th><th>U<sub>y</sub></th><th>U<sub>z</sub></th><th>R<sub>x</sub></th><th>R<sub>y</sub></th><th>R<sub>z</sub></th></tr>");
    let p = 0;
    for (const [y, k] of a.deformations) {
      if (p >= 30) break;
      o.push(`<tr><td>${y}</td>${k.map((E) => `<td>${me(E)}</td>`).join("")}</tr>`), p++;
    }
    a.deformations.size > 30 && o.push(`<tr><td colspan="7" style="text-align:center;font-style:italic">... ${a.deformations.size - 30} m\xE1s</td></tr>`), o.push("</table>");
  }
  if (a == null ? void 0 : a.reactions) {
    o.push("<h2>5. Support Reactions</h2>"), o.push('<div class="latex">$$ F_{\\text{reaction}} = K_{\\text{fixed-fixed}} \\cdot u_{\\text{free}} - F_{\\text{ext, fixed}} $$</div>'), o.push("<table><tr><th>Node</th><th>F<sub>x</sub></th><th>F<sub>y</sub></th><th>F<sub>z</sub></th><th>M<sub>x</sub></th><th>M<sub>y</sub></th><th>M<sub>z</sub></th></tr>");
    for (const [p, y] of a.reactions) o.push(`<tr><td>${p}</td>${y.map((k) => `<td>${me(k)}</td>`).join("")}</tr>`);
    o.push("</table>");
  }
  if (d == null ? void 0 : d.frequencies) {
    o.push("<h2>6. Modal Analysis</h2>"), o.push('<div class="latex">$$ (K - \\omega^2 M)\\,\\phi = 0 $$</div>'), o.push("<table><tr><th>Mode</th><th>\u03C9 (rad/s)</th><th>f (Hz)</th><th>T (s)</th></tr>");
    for (let p = 0; p < d.frequencies.length; p++) {
      const y = d.frequencies[p];
      o.push(`<tr><td>${p + 1}</td><td>${(2 * Math.PI * y).toFixed(3)}</td><td>${y.toFixed(3)}</td><td>${(1 / y).toFixed(4)}</td></tr>`);
    }
    o.push("</table>");
  }
  return o.push(`<hr><p style="font-size:11px;color:#64748b;text-align:center">Generated by Hekatan Struct \xB7 ${(/* @__PURE__ */ new Date()).toLocaleString()}</p>`), o.push("</body></html>"), o.join(`
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
  const s = [];
  s.push(`<div class="matrix"><strong>${e}</strong><table>`);
  for (const n of t) s.push(`<tr>${n.map((a) => `<td style="font-size:9px">${Math.abs(a) < 1e-10 ? "0" : a.toExponential(2)}</td>`).join("")}</tr>`);
  return s.push("</table></div>"), s.join("");
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
    const i = t.nodes.rawVal, s = t.elements.rawVal, n = t.elementInputs.rawVal, a = s.findIndex((y) => (y == null ? void 0 : y.length) === 2);
    if (a < 0) {
      alert("No hay elementos frame en el modelo. Carga un ejemplo con frames primero.");
      return;
    }
    const d = s[a], o = ((_a = n.elasticities) == null ? void 0 : _a.get(a)) ?? 2e8, l = ((_b = n.shearModuli) == null ? void 0 : _b.get(a)) ?? o / 2.6, r = ((_c = n.areas) == null ? void 0 : _c.get(a)) ?? 0.01, b = ((_d = n.momentsOfInertiaY) == null ? void 0 : _d.get(a)) ?? 1e-4, v = ((_e = n.momentsOfInertiaZ) == null ? void 0 : _e.get(a)) ?? 1e-4, p = ((_f = n.torsionalConstants) == null ? void 0 : _f.get(a)) ?? 1e-4;
    this._inspect.show({ index: a, type: "frame", nodes: [i[d[0]], i[d[1]]], nodeIndices: [d[0], d[1]], frameProps: { E: o, G: l, A: r, Iy: b, Iz: v, J: p }, sectionLabel: ((_g = n.sectionLabels) == null ? void 0 : _g.get(a)) ?? "\u2014" });
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
      } catch (s) {
        alert("Error en runModal: " + s.message);
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
    const i = t.nodes.rawVal, s = t.elements.rawVal, n = t.nodeInputs.rawVal, a = t.deformOutputs.rawVal, d = ((_a = n.supports) == null ? void 0 : _a.size) ?? 0, o = ((_b = n.loads) == null ? void 0 : _b.size) ?? 0, l = i.length * 6;
    let r = 0, b = -1, v = "uz";
    if (a == null ? void 0 : a.deformations) for (const [E, x] of a.deformations) for (let f = 0; f < 3; f++) Math.abs(x[f]) > r && (r = Math.abs(x[f]), b = E, v = ["ux", "uy", "uz"][f]);
    const p = s.filter((E) => E.length === 2).length, y = s.filter((E) => E.length === 3 || E.length === 4).length, k = s.filter((E) => E.length === 8).length;
    this._solverLog.update({ nNodes: i.length, nElements: s.length, nFrames: p, nShells: y, nSolids: k, nSupports: d, nLoads: o, totalDOFs: l, freeDOFs: l - d * 6, timings: { assembly: 1, solve: 2, internalForces: 1, total: 6 }, maxDisplacement: b >= 0 ? { value: r, nodeIdx: b, component: v } : void 0, solverName: "SparseLU (deformCpp)" }), this._solverLog.show();
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
function Sn(e, t, i = {}) {
  var _a;
  const s = En(), n = { inspect: true, modal: true, solverLog: true, calc: true, cli: true, report: true, recalc: true, ...i.visibleButtons ?? {} }, a = e.addFolder({ title: i.title ?? "\u{1F6E0} Herramientas FEM", expanded: i.expanded ?? false });
  return n.inspect && a.addButton({ title: "\u{1F50D} Inspect \u2014 derivaci\xF3n FEM por elemento" }).on("click", () => s.toggleInspect(t)), n.modal && ((_a = t.currentExample) == null ? void 0 : _a.hasModal) && a.addButton({ title: "\u{1F4C8} Modal+ ASCE 7-22 \xA712.9.1" }).on("click", () => s.toggleModal(t)), n.solverLog && a.addButton({ title: "\u{1F4DC} Solver Log + tiempos" }).on("click", () => s.toggleSolverLog(t)), n.calc && a.addButton({ title: "\u{1F9EE} Calculadora FEM (MATLAB-style)" }).on("click", () => s.toggleCalc(t)), n.cli && a.addButton({ title: "\u{1F4BB} CLI cad.* (terminal)" }).on("click", () => s.toggleCli(t)), n.report && a.addButton({ title: "\u{1F4C4} Report Explained (PDF imprimible)" }).on("click", () => s.openReport(t)), n.recalc && a.addButton({ title: "\u25B6 Calcular (forzar re-build)" }).on("click", () => s.forceRecalc(t)), a;
}
const ce = 1e-6;
function $n(e, t = 2, i = 5) {
  var _a, _b;
  const s = { newSlabElements: 0, splitFrameSegments: 0, newNodes: 0 }, n = [];
  for (let h = 0; h < e.elements.length; h++) {
    const S = e.elements[h];
    if (S.length !== 4) continue;
    const u = S.map((C) => e.nodes[C]), g = Math.abs(u[1][0] - u[0][0]), w = Math.abs(u[3][1] - u[0][1]);
    Math.max(g, w) > t && n.push(h);
  }
  if (n.length === 0) return s;
  const a = (h, S, u) => `${h.toFixed(4)}_${S.toFixed(4)}_${u.toFixed(4)}`, d = /* @__PURE__ */ new Map();
  for (let h = 0; h < e.nodes.length; h++) {
    const [S, u, g] = e.nodes[h];
    d.set(a(S, u, g), h);
  }
  const o = [], l = /* @__PURE__ */ new Map();
  for (const h of n) {
    const u = e.elements[h].map((C) => e.nodes[C]), g = u[0][2], w = [];
    for (let C = 0; C <= i; C++) {
      const _ = [];
      for (let M = 0; M <= i; M++) {
        const $ = C / i, L = M / i, j = (1 - $) * (1 - L) * u[0][0] + $ * (1 - L) * u[1][0] + $ * L * u[2][0] + (1 - $) * L * u[3][0], B = (1 - $) * (1 - L) * u[0][1] + $ * (1 - L) * u[1][1] + $ * L * u[2][1] + (1 - $) * L * u[3][1], N = a(j, B, g);
        let W = d.get(N);
        W === void 0 && (e.nodes.push([j, B, g]), W = e.nodes.length - 1, d.set(N, W), s.newNodes++), _.push(W);
      }
      w.push(_);
    }
    for (let C = 0; C < i; C++) for (let _ = 0; _ < i; _++) {
      const M = e.elements.length + o.length;
      o.push([w[C][_], w[C + 1][_], w[C + 1][_ + 1], w[C][_ + 1]]), l.set(M, h), s.newSlabElements++;
    }
  }
  for (let h = 0; h < e.elements.length; h++) {
    const S = e.elements[h];
    if (S.length !== 2) continue;
    const u = e.nodes[S[0]], g = e.nodes[S[1]];
    if (Math.abs(u[2] - g[2]) > ce) continue;
    const w = u[2], C = g[0] - u[0], _ = g[1] - u[1];
    if (Math.sqrt(C * C + _ * _) < ce) continue;
    const $ = [];
    for (let B = 0; B < e.nodes.length; B++) {
      if (B === S[0] || B === S[1]) continue;
      const [N, W, V] = e.nodes[B];
      if (Math.abs(V - w) > ce) continue;
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
    j.push([L, S[1]]), e.elements[h] = j[0];
    for (let B = 1; B < j.length; B++) {
      const N = e.elements.length + o.length;
      o.push(j[B]), l.set(N, h), s.splitFrameSegments++;
    }
  }
  for (const h of o) e.elements.push(h);
  const r = e.elementInputs, b = [r.elasticities, r.shearModuli, r.poissonsRatios, r.thicknesses, r.densities, r.areas, r.momentsOfInertiaZ, r.momentsOfInertiaY, r.torsionalConstants, r.shearAreasY, r.shearAreasZ, r.plateFormulations];
  for (const [h, S] of l) {
    for (const u of b) u && u.has(S) && u.set(h, u.get(S));
    ((_a = r.sectionShapes) == null ? void 0 : _a.has(S)) && r.sectionShapes.set(h, r.sectionShapes.get(S)), ((_b = r.rigidOffsets) == null ? void 0 : _b.has(S)) && r.rigidOffsets.set(h, [...r.rigidOffsets.get(S)]);
  }
  const v = new Set(n), p = /* @__PURE__ */ new Map(), y = [], k = [], E = [], x = [];
  for (let h = 0; h < e.elements.length; h++) v.has(h) || (p.set(h, y.length), y.push(e.elements[h]), k.push(e.elementTypes[h] ?? ""), E.push(e.elementNames[h] ?? ""), x.push(e.elementStories[h] ?? ""));
  const f = (h) => {
    if (!h) return h;
    const S = /* @__PURE__ */ new Map();
    for (const [u, g] of h) {
      const w = p.get(u);
      w !== void 0 && S.set(w, g);
    }
    return S;
  };
  return e.elements = y, e.elementTypes = k, e.elementNames = E, e.elementStories = x, e.elementInputs.elasticities = f(r.elasticities), e.elementInputs.shearModuli = f(r.shearModuli), e.elementInputs.poissonsRatios = f(r.poissonsRatios), e.elementInputs.thicknesses = f(r.thicknesses), e.elementInputs.densities = f(r.densities), e.elementInputs.areas = f(r.areas), e.elementInputs.momentsOfInertiaZ = f(r.momentsOfInertiaZ), e.elementInputs.momentsOfInertiaY = f(r.momentsOfInertiaY), e.elementInputs.torsionalConstants = f(r.torsionalConstants), e.elementInputs.shearAreasY = f(r.shearAreasY), e.elementInputs.shearAreasZ = f(r.shearAreasZ), e.elementInputs.plateFormulations = f(r.plateFormulations), e.elementInputs.sectionShapes = f(r.sectionShapes), e.elementInputs.rigidOffsets = f(r.rigidOffsets), e.elementSections = f(e.elementSections), s;
}
function In(e) {
  const { mesh: t, viewerElm: i, onStatusChange: s } = e, n = e.scalePercent ?? 5, [a, d] = e.visFrequencyRange ?? [0.5, 3];
  let o = null, l = 0, r = 0, b = [], v = [];
  function p() {
    s == null ? void 0 : s();
  }
  function y() {
    var _a;
    if (!o || !o.frequencies || o.frequencies.length === 0) return { mode: "Sin resultados", frequency: "\u2014", period: "\u2014", dominant: "\u2014", state: "\u23F8 Detenido" };
    const f = o.frequencies[l] ?? 0, h = f > 0 ? 1 / f : 0, S = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], u = (_a = o.massParticipation) == null ? void 0 : _a[l];
    let g = "\u2014";
    if (u) {
      let w = 0, C = 0;
      for (let _ = 0; _ < 6; _++) Math.abs(u[_]) > w && (w = Math.abs(u[_]), C = _);
      g = `${S[C]} (${(w * 100).toFixed(0)}%)`;
    }
    return { mode: `Modo ${l + 1} / ${o.frequencies.length}`, frequency: `${f.toFixed(4)} Hz`, period: `${h.toFixed(4)} s`, dominant: g, state: r !== 0 ? "\u25B6 Reproduciendo" : "\u23F8 Pausado" };
  }
  function k() {
    return i.__ctx;
  }
  function E(f) {
    var _a;
    if (r && (cancelAnimationFrame(r), r = 0), f) {
      const h = b.length > 0 ? b : v;
      h.length > 0 && (t.nodes.val = h.map((S) => [...S]), (_a = k()) == null ? void 0 : _a.render());
    }
  }
  function x() {
    var _a, _b;
    if (!o || !o.modeShapes || o.modeShapes.length === 0 || !o.modeShapes[l]) return;
    E(false);
    const f = o.modeShapes[l], h = ((_a = o.frequencies) == null ? void 0 : _a[l]) || 1, S = ((_b = o.frequencies) == null ? void 0 : _b[0]) || 1, u = Math.max(a, Math.min(d, h / S));
    v = t.nodes.rawVal.map((F) => [...F]);
    const g = v.length;
    let w = 1 / 0, C = 1 / 0, _ = 1 / 0, M = -1 / 0, $ = -1 / 0, L = -1 / 0;
    for (const F of v) F[0] < w && (w = F[0]), F[0] > M && (M = F[0]), F[1] < C && (C = F[1]), F[1] > $ && ($ = F[1]), F[2] < _ && (_ = F[2]), F[2] > L && (L = F[2]);
    const j = Math.sqrt((M - w) ** 2 + ($ - C) ** 2 + (L - _) ** 2) || 1;
    let B = 0;
    for (let F = 0; F < g; F++) {
      const Q = f[F * 6] || 0, ne = f[F * 6 + 1] || 0, G = f[F * 6 + 2] || 0, ee = Math.sqrt(Q * Q + ne * ne + G * G);
      ee > B && (B = ee);
    }
    const N = B > 1e-12 ? j * n / 100 / B : 1, W = performance.now(), V = () => {
      var _a2;
      const F = (performance.now() - W) / 1e3, Q = Math.sin(2 * Math.PI * u * F) * N, ne = new Array(g);
      for (let G = 0; G < g; G++) {
        const ee = v[G];
        ne[G] = [ee[0] + (f[G * 6] || 0) * Q, ee[1] + (f[G * 6 + 1] || 0) * Q, ee[2] + (f[G * 6 + 2] || 0) * Q];
      }
      t.nodes.val = ne, (_a2 = k()) == null ? void 0 : _a2.render(), r = requestAnimationFrame(V);
    };
    r = requestAnimationFrame(V), p();
  }
  return { setResults(f) {
    var _a;
    o = f, l >= (((_a = f == null ? void 0 : f.frequencies) == null ? void 0 : _a.length) ?? 0) && (l = 0), b = t.nodes.rawVal.map((h) => [...h]), p();
  }, setMode(f) {
    var _a;
    if (!o) return;
    const h = ((_a = o.frequencies) == null ? void 0 : _a.length) ?? 0;
    l = Math.max(0, Math.min(h - 1, f)), r !== 0 ? x() : p();
  }, play() {
    o && r === 0 && x();
  }, stop() {
    E(true), p();
  }, isPlaying() {
    return r !== 0;
  }, modeCount() {
    var _a;
    return ((_a = o == null ? void 0 : o.frequencies) == null ? void 0 : _a.length) ?? 0;
  }, currentMode() {
    return l;
  }, currentFreq() {
    var _a;
    return ((_a = o == null ? void 0 : o.frequencies) == null ? void 0 : _a[l]) ?? 0;
  }, getStatus() {
    return y();
  }, dispose() {
    E(true), o = null;
  } };
}
const Mn = { id: "csi-importer", name: "Importar CSI (F2K/E2K/S2K)", category: "Importar", defaultShellResult: "none", availableShellResults: [], params: {}, build(e, t) {
  var _a, _b;
  const i = window.__hekatanImportedCim, s = [], n = [], a = [];
  if (!i || !((_a = i.zapatas) == null ? void 0 : _a.length)) {
    t.nodes.val = [], t.elements.val = [], t.nodeInputs.val = { supports: /* @__PURE__ */ new Map(), loads: /* @__PURE__ */ new Map() }, t.elementInputs.val = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, t.objects3D.val = [], console.log("[CSI Importer] Sin archivo cargado. Usa el folder '\u{1F4E5} Importar archivo' del panel.");
    return;
  }
  let d = 0;
  const o = i.Z ?? 0;
  for (const l of i.zapatas) {
    const r = l.Lz / 2, b = l.Bz / 2;
    s.push([l.xC - r, l.yC - b, o]);
    const v = d++;
    s.push([l.xC + r, l.yC - b, o]);
    const p = d++;
    s.push([l.xC + r, l.yC + b, o]);
    const y = d++;
    s.push([l.xC - r, l.yC + b, o]);
    const k = d++;
    n.push([v, p, y, k]);
    const E = new et(new tt(l.bc, l.bc, 0.5), new nt({ color: 8421504 }));
    E.position.set(l.xCol, l.yCol, o + 0.25), a.push(E);
  }
  if (i.vigasAmarre) {
    const l = [];
    for (const r of i.vigasAmarre) {
      const b = r.z ?? o, v = r.x2 - r.x1, p = r.y2 - r.y1, y = Math.hypot(v, p);
      if (y < 1e-6) continue;
      l.push(new xe(r.x1, r.y1, b)), l.push(new xe(r.x2, r.y2, b));
      const k = new tt(r.b, y, r.h), E = new nt({ color: 2282478, transparent: true, opacity: 0.35 }), x = new et(k, E);
      x.position.set((r.x1 + r.x2) / 2, (r.y1 + r.y2) / 2, b), x.rotateZ(Math.atan2(p, v) - Math.PI / 2), a.push(x);
    }
    if (l.length > 0) {
      const r = new Ve().setFromPoints(l), b = new ct({ color: 2282478, linewidth: 3 });
      a.push(new Mt(r, b));
    }
  }
  t.nodes.val = s, t.elements.val = n, t.nodeInputs.val = { supports: /* @__PURE__ */ new Map(), loads: /* @__PURE__ */ new Map() }, t.elementInputs.val = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, t.objects3D.val = a, console.log(`[CSI Importer] Renderizadas ${i.zapatas.length} zapatas + ${((_b = i.vigasAmarre) == null ? void 0 : _b.length) ?? 0} vigas.`);
} };
export {
  In as a,
  $n as b,
  Mn as c,
  Sn as d,
  _n as e
};
