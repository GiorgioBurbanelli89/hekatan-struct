/**
 * AI Assistant para Hekatan Struct Lineal — provider-agnostic con 4 backends GRATIS.
 *
 * Stack gratuito:
 *   1. 🦙 Ollama (local, sin API key, sin internet, sin rate limits)
 *      - Endpoint: http://localhost:11434
 *      - Vision: llava, llama3.2-vision, qwen2-vl
 *
 *   2. ✨ Gemini Flash (cloud Google AI, free tier generoso)
 *      - 15 req/min, 1M tokens/día gratis
 *      - Vision: nativo en gemini-1.5-flash
 *      - API key: https://aistudio.google.com/apikey
 *
 *   3. ⚡ Groq (cloud, inferencia ultra-rápida ~500 tok/seg)
 *      - 30 req/min free
 *      - Vision: llama-3.2-90b-vision-preview
 *      - API key: https://console.groq.com/keys
 *
 *   4. 🌐 OpenRouter (agregador con modelos free)
 *      - Modelos free: deepseek-v3, llama-3.3-70b, llama-3.2-90b-vision
 *      - API key: https://openrouter.ai/keys
 *
 * Las API keys se guardan en localStorage (NUNCA se commitean ni viajan
 * al servidor de Hekatan — solo al provider que el user eligió).
 */

export interface AIImage {
  /** MIME type: "image/png", "image/jpeg", "image/webp" */
  mimeType: string;
  /** Datos en base64 SIN prefix "data:..." (solo el contenido) */
  base64: string;
}

export interface AIMessage {
  text: string;
  images?: AIImage[];
}

export interface AIProvider {
  id: string;
  name: string;
  /** True si el provider acepta imágenes (multi-modal) */
  supportsVision: boolean;
  /** Modelos disponibles. Para Ollama se detectan dinámicamente. */
  models: { id: string; name: string; vision: boolean }[];
  /** Default model id */
  defaultModel: string;
  /** True si necesita API key del usuario */
  requiresKey: boolean;
  /** True si requiere instalación local (Ollama) */
  requiresLocal: boolean;
  /**
   * Envía un prompt + imágenes al modelo y devuelve el texto generado.
   * `system` es el system prompt (instrucciones de rol).
   */
  send(opts: {
    msg: AIMessage;
    system: string;
    apiKey: string;
    model: string;
  }): Promise<string>;
}

// ─────────────────────────────────────────────────────────────────────
// 1. OLLAMA (local, gratis, sin API key)
// ─────────────────────────────────────────────────────────────────────

export const OllamaProvider: AIProvider = {
  id: "ollama",
  name: "🦙 Ollama (local, gratis)",
  supportsVision: true,
  models: [
    { id: "qwen2.5-coder:7b", name: "Qwen 2.5 Coder 7B (código)", vision: false },
    { id: "llama3.2-vision:11b", name: "Llama 3.2 Vision 11B", vision: true },
    { id: "llava:7b", name: "LLaVA 7B (vision)", vision: true },
    { id: "qwen2.5:7b", name: "Qwen 2.5 7B", vision: false },
    { id: "llama3.1:8b", name: "Llama 3.1 8B", vision: false },
  ],
  defaultModel: "qwen2.5-coder:7b",
  requiresKey: false,
  requiresLocal: true,

  async send({ msg, system, model }) {
    const message: any = {
      role: "user",
      content: msg.text,
    };
    if (msg.images?.length) {
      // Ollama: array de strings base64 (sin prefix)
      message.images = msg.images.map(i => i.base64);
    }
    let r: Response;
    try {
      r = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: system },
            message,
          ],
          stream: false,
        }),
      });
    } catch (err: any) {
      // ERR_CONNECTION_REFUSED, network error, etc.
      throw new Error(
        "Ollama no está corriendo en localhost:11434.\n\n" +
        "Para usar Ollama:\n" +
        "1. Descargalo de ollama.com/download\n" +
        "2. Instalá un modelo: ollama pull " + model + "\n" +
        "3. Verificá que esté activo (Ollama corre como servicio en background)\n\n" +
        "O cambiá a otro provider (Gemini/Groq/OpenRouter) que solo requiere API key."
      );
    }
    if (!r.ok) {
      const txt = await r.text();
      if (r.status === 404) {
        throw new Error(`Modelo "${model}" no instalado. Ejecutá: ollama pull ${model}`);
      }
      throw new Error(`Ollama error ${r.status}: ${txt}`);
    }
    const j = await r.json();
    return j.message?.content ?? "";
  },
};

// Helper: lista los modelos instalados en Ollama (consultando /api/tags)
// Silencia el error en consola si Ollama no está corriendo (esperable cuando
// el user no lo instaló — no es realmente un error sino "feature opcional").
export async function listOllamaModels(): Promise<string[]> {
  try {
    // AbortController + timeout corto para no colgar la UI si la red está rara
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 1500);
    const r = await fetch("http://localhost:11434/api/tags", { signal: ctrl.signal })
      .catch(() => null);  // catch silencioso de ERR_CONNECTION_REFUSED
    clearTimeout(t);
    if (!r || !r.ok) return [];
    const j = await r.json();
    return (j.models ?? []).map((m: any) => m.name);
  } catch {
    return [];  // Ollama no corriendo o timeout
  }
}

// Helper: detecta si Ollama está corriendo (más liviano que listOllamaModels)
// Cacheado: el panel de IA se reconstruye en CADA regeneración del pane (pisos, vanos…) y
// volvía a pedir http://localhost:11434/api/tags cada vez. En el deploy público (GitHub Pages)
// eso es un ERR_CONNECTION_REFUSED en consola por cada slider. Se pregunta UNA vez por página
// y, fuera de localhost, ni se pregunta (Ollama solo puede estar en la máquina del usuario y el
// navegador bloquea el mixed-content http desde https igualmente).
let __ollamaProbe: Promise<boolean> | null = null;
export function isOllamaRunning(): Promise<boolean> {
  if (__ollamaProbe) return __ollamaProbe;
  const host = typeof location !== "undefined" ? location.hostname : "";
  const local = host === "localhost" || host === "127.0.0.1" || host === "" || location.protocol === "file:";
  __ollamaProbe = local ? isOllamaRunningNow() : Promise.resolve(false);
  return __ollamaProbe;
}
async function isOllamaRunningNow(): Promise<boolean> {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 1000);
    const r = await fetch("http://localhost:11434/api/tags", { signal: ctrl.signal })
      .catch(() => null);
    clearTimeout(t);
    return !!r && r.ok;
  } catch {
    return false;
  }
}

// ─────────────────────────────────────────────────────────────────────
// 2. GEMINI FLASH (cloud Google, free tier)
// ─────────────────────────────────────────────────────────────────────

export const GeminiProvider: AIProvider = {
  id: "gemini",
  name: "✨ Gemini Flash (free tier)",
  supportsVision: true,
  models: [
    { id: "gemini-2.0-flash-exp", name: "Gemini 2.0 Flash (más nuevo)", vision: true },
    { id: "gemini-1.5-flash", name: "Gemini 1.5 Flash (estable)", vision: true },
    { id: "gemini-1.5-pro", name: "Gemini 1.5 Pro (mejor calidad)", vision: true },
  ],
  defaultModel: "gemini-2.0-flash-exp",
  requiresKey: true,
  requiresLocal: false,

  async send({ msg, system, apiKey, model }) {
    const parts: any[] = [{ text: msg.text }];
    for (const img of msg.images ?? []) {
      parts.push({ inline_data: { mime_type: img.mimeType, data: img.base64 } });
    }
    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: system }] },
          contents: [{ role: "user", parts }],
          generationConfig: { temperature: 0.2, maxOutputTokens: 4096 },
        }),
      },
    );
    if (!r.ok) throw new Error(`Gemini error ${r.status}: ${await r.text()}`);
    const j = await r.json();
    return j.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
  },
};

// ─────────────────────────────────────────────────────────────────────
// 3. GROQ (cloud, ultra-rápido, free tier)
// ─────────────────────────────────────────────────────────────────────

export const GroqProvider: AIProvider = {
  id: "groq",
  name: "⚡ Groq (rápido, free)",
  supportsVision: true,
  models: [
    { id: "llama-3.3-70b-versatile", name: "Llama 3.3 70B (más capaz)", vision: false },
    { id: "llama-3.2-90b-vision-preview", name: "Llama 3.2 90B Vision", vision: true },
    { id: "llama-3.1-70b-versatile", name: "Llama 3.1 70B", vision: false },
    { id: "mixtral-8x7b-32768", name: "Mixtral 8x7B", vision: false },
  ],
  defaultModel: "llama-3.3-70b-versatile",
  requiresKey: true,
  requiresLocal: false,

  async send({ msg, system, apiKey, model }) {
    const content: any[] = [{ type: "text", text: msg.text }];
    for (const img of msg.images ?? []) {
      content.push({
        type: "image_url",
        image_url: { url: `data:${img.mimeType};base64,${img.base64}` },
      });
    }
    const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: system },
          { role: "user", content: msg.images?.length ? content : msg.text },
        ],
        temperature: 0.2,
        max_tokens: 4096,
      }),
    });
    if (!r.ok) throw new Error(`Groq error ${r.status}: ${await r.text()}`);
    const j = await r.json();
    return j.choices?.[0]?.message?.content ?? "";
  },
};

// ─────────────────────────────────────────────────────────────────────
// 4. OPENROUTER (agregador con modelos free)
// ─────────────────────────────────────────────────────────────────────

export const OpenRouterProvider: AIProvider = {
  id: "openrouter",
  name: "🌐 OpenRouter (modelos free)",
  supportsVision: true,
  models: [
    { id: "deepseek/deepseek-chat-v3:free", name: "DeepSeek V3 free (excelente código)", vision: false },
    { id: "meta-llama/llama-3.3-70b-instruct:free", name: "Llama 3.3 70B free", vision: false },
    { id: "meta-llama/llama-3.2-90b-vision-instruct:free", name: "Llama 3.2 90B Vision free", vision: true },
    { id: "google/gemini-2.0-flash-exp:free", name: "Gemini 2.0 Flash free", vision: true },
    { id: "qwen/qwen-2.5-coder-32b-instruct:free", name: "Qwen 2.5 Coder 32B free", vision: false },
  ],
  defaultModel: "deepseek/deepseek-chat-v3:free",
  requiresKey: true,
  requiresLocal: false,

  async send({ msg, system, apiKey, model }) {
    const content: any[] = [{ type: "text", text: msg.text }];
    for (const img of msg.images ?? []) {
      content.push({
        type: "image_url",
        image_url: { url: `data:${img.mimeType};base64,${img.base64}` },
      });
    }
    const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "content-type": "application/json",
        "HTTP-Referer": "https://giorgioburbanelli89.github.io/hekatan-struct-lineal/",
        "X-Title": "Hekatan Struct Lineal",
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: system },
          { role: "user", content: msg.images?.length ? content : msg.text },
        ],
        temperature: 0.2,
        max_tokens: 4096,
      }),
    });
    if (!r.ok) throw new Error(`OpenRouter error ${r.status}: ${await r.text()}`);
    const j = await r.json();
    return j.choices?.[0]?.message?.content ?? "";
  },
};

// ─────────────────────────────────────────────────────────────────────
// Registro central
// ─────────────────────────────────────────────────────────────────────

export const PROVIDERS: AIProvider[] = [
  OllamaProvider,
  GeminiProvider,
  GroqProvider,
  OpenRouterProvider,
];

export function getProvider(id: string): AIProvider | null {
  return PROVIDERS.find(p => p.id === id) ?? null;
}

// ─────────────────────────────────────────────────────────────────────
// Helpers para localStorage (persistencia de keys + preferencias)
// ─────────────────────────────────────────────────────────────────────

const KEY_PREFIX = "hekatan_ai_";

export const aiStorage = {
  getKey(providerId: string): string {
    return localStorage.getItem(`${KEY_PREFIX}key_${providerId}`) ?? "";
  },
  setKey(providerId: string, key: string): void {
    localStorage.setItem(`${KEY_PREFIX}key_${providerId}`, key);
  },
  getProvider(): string {
    return localStorage.getItem(`${KEY_PREFIX}provider`) ?? "ollama";
  },
  setProvider(id: string): void {
    localStorage.setItem(`${KEY_PREFIX}provider`, id);
  },
  getModel(providerId: string): string {
    return localStorage.getItem(`${KEY_PREFIX}model_${providerId}`) ?? "";
  },
  setModel(providerId: string, model: string): void {
    localStorage.setItem(`${KEY_PREFIX}model_${providerId}`, model);
  },
};

// ─────────────────────────────────────────────────────────────────────
// Helper: convertir Blob/File a base64 (sin el prefix data:...)
// ─────────────────────────────────────────────────────────────────────

export function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      // dataUrl = "data:image/png;base64,iVBORw0..."
      // Quitamos el prefix → solo el contenido base64
      const idx = dataUrl.indexOf(",");
      resolve(idx >= 0 ? dataUrl.slice(idx + 1) : dataUrl);
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

// ─────────────────────────────────────────────────────────────────────
// System prompt: instrucciones para que la IA emita comandos CLI Hekatan
// ─────────────────────────────────────────────────────────────────────

export const HEKATAN_SYSTEM_PROMPT = `Eres un asistente experto en estructuras y FEM que ayuda al usuario a generar modelos
en Hekatan Struct Lineal. Tu salida debe ser SIEMPRE un script CLI ejecutable, sin
explicaciones extra (a menos que el user pida explicación).

DSL CLI de Hekatan:
─ NODOS:        node <id>  <x>  <y>  <z>
─ FRAMES:       frame <id>  <nodeI>  <nodeJ>  <E>  <A>  <Iy>  [Iz]  [J]
                Ejemplo: frame 1  1 2  25e6  0.16  0.0021
─ SHELLS Q4:    shell <id>  <n1> <n2> <n3> <n4>  <thickness>  <E>
─ APOYOS:       support <nodeId>  <Ux>  <Uy>  <Uz>  <Rx>  <Ry>  <Rz>
                (1 = restringido, 0 = libre)
─ CARGAS:       load <nodeId>  <Fx>  <Fy>  <Fz>  <Mx>  <My>  <Mz>
─ COMENTARIOS:  # comentario libre

Convención de ejes (Z-up):
─ X: horizontal este
─ Y: horizontal norte
─ Z: vertical (gravedad = -Z)

Materiales típicos (E = MPa = N/mm² × 1e6 = Pa, en unidades SI):
─ Hormigón: E = 25e9 Pa (25 GPa, f'c=210 kg/cm²)
─ Acero:    E = 210e9 Pa
─ Madera:   E = 12e9 Pa (varía por especie)

Secciones típicas:
─ Columna 40×40: A=0.16 m², Iy=Iz=2.13e-3 m⁴
─ Viga 25×40:   A=0.10 m², Iy=1.33e-3, Iz=5.21e-4
─ HEB-240:      A=0.0106, Iy=1.13e-4, Iz=3.92e-5
─ IPE-300:      A=0.00538, Iy=8.36e-5, Iz=6.04e-6

Si el user pega una IMAGEN (croquis, plano, foto):
─ Identificá geometría, dimensiones, ejes, apoyos, cargas visibles
─ Generá el script CLI completo con coordenadas extraídas
─ Si las dimensiones no son legibles, usá valores típicos y comenta tu suposición

REGLAS DE SALIDA:
1. Devuelve SOLO el script CLI, sin markdown, sin \`\`\`, sin comillas.
2. Cada línea = un comando. Comentarios con #.
3. IDs sucesivos comenzando desde 1.
4. Si necesitás aclaraciones, ponelas como # comentario al final.

Ejemplo de salida típica para "pórtico 1 vano, 4m vano, 3m altura, empotrado":
# Pórtico 1 vano 4m × 3m, empotrado en la base
node 1   0   0   0
node 2   0   0   3
node 3   4   0   3
node 4   4   0   0
frame 1  1 2   25e9  0.16  2.13e-3   # columna izq
frame 2  2 3   25e9  0.10  1.33e-3   # viga
frame 3  3 4   25e9  0.16  2.13e-3   # columna der
support 1  1 1 1 1 1 1
support 4  1 1 1 1 1 1`;
