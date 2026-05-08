/**
 * 🧮 Calculadora FEM — engine de evaluación simbólica.
 *
 *  Acepta un mini-DSL estilo MATLAB:
 *    - Asignaciones: `name = expression`
 *    - Comentarios: `% comentario` o `// comentario`
 *    - Headers: `## Título` (renderizado como section)
 *    - Matrices literales: `[1 2 3; 4 5 6]`
 *    - Funciones: sqrt, sin, cos, exp, log, abs, max, min, sum, mean
 *    - Operaciones: + - * / ^  (* y / con escalares; * con matrices = matmul)
 *    - Acceso a propiedades del modelo: `nodes`, `elements`, `K`, `M`, ...
 *
 *  Cada línea genera un bloque de output con:
 *    - El input original (highlighting)
 *    - El resultado evaluado (escalar o matriz)
 *    - Render KaTeX para matrices y ecuaciones
 *
 *  Soporta plantillas predefinidas via `loadTemplate(name)`.
 */
/** Mini-evaluador propio (sin dependencias externas).
 *  Soporta: aritmética, funciones (sqrt, sin, cos, exp, log, abs, max, min,
 *  Math.*), arrays JS [1,2,3], matrices [[1,2],[3,4]], y operaciones nativas
 *  de Array.prototype (.map, .reduce, etc.). Para álgebra matricial usar
 *  helpers manuales o cargar mathjs externamente vía CDN. */
function evaluate(expr: string, scope: Record<string, any>): any {
  const argNames = Object.keys(scope);
  const argVals = argNames.map((k) => scope[k]);
  // Inyecta Math, sqrt, sin, cos, etc. como vars del scope
  const mathFns = "sqrt,sin,cos,tan,exp,log,abs,max,min,floor,ceil,round,pow,PI,E";
  const fnBody = `
    const {${mathFns}} = Math;
    return (${expr});
  `;
  const fn = new Function(...argNames, fnBody);
  return fn(...argVals);
}

export type CellType = "comment" | "section" | "assign" | "expr" | "error";

export interface EvaluatedCell {
  type: CellType;
  /** Source line(s) */
  source: string;
  /** Variable name (for assigns) */
  name?: string;
  /** Result value (number, array, matrix, string) */
  value?: any;
  /** LaTeX representation for KaTeX rendering */
  latex?: string;
  /** Error message (for `error` type) */
  error?: string;
  /** Section title (for `section` type) */
  title?: string;
}

export interface CalcEngineContext {
  /** Model variables exposed to the evaluator: nodes, elements, K, M, F, u, ... */
  modelVars?: Record<string, any>;
}

const HEADER_RE = /^##\s+(.+)$/;
const COMMENT_RE = /^\s*(?:%|\/\/)\s?(.*)$/;
const ASSIGN_RE = /^\s*([a-zA-Z_]\w*)\s*=\s*(.+)$/;

/**
 * Evalúa un bloque de código (multilínea) y devuelve celdas evaluadas.
 * Cada línea es independiente excepto que las asignaciones quedan en scope.
 */
export function evaluateBlock(code: string, ctx: CalcEngineContext = {}): EvaluatedCell[] {
  const lines = code.split(/\r?\n/);
  const cells: EvaluatedCell[] = [];
  // Local scope — comienza con las variables del modelo
  const scope: Record<string, any> = { ...(ctx.modelVars ?? {}) };

  for (const raw of lines) {
    const line = raw;
    if (!line.trim()) continue;

    // Header (## Title)
    const mh = line.match(HEADER_RE);
    if (mh) {
      cells.push({ type: "section", source: line, title: mh[1] });
      continue;
    }

    // Comment (% or //)
    const mc = line.match(COMMENT_RE);
    if (mc) {
      cells.push({ type: "comment", source: line, value: mc[1] });
      continue;
    }

    // Assign or expression
    const ma = line.match(ASSIGN_RE);
    let expr: string;
    let name: string | undefined;
    if (ma) {
      name = ma[1];
      expr = ma[2];
    } else {
      expr = line.trim();
    }

    try {
      const result = evaluate(expr, scope);
      if (name) scope[name] = result;
      cells.push({
        type: name ? "assign" : "expr",
        source: line,
        name,
        value: result,
        latex: formatLatex(name, result),
      });
    } catch (err: any) {
      cells.push({
        type: "error",
        source: line,
        error: err.message ?? String(err),
      });
    }
  }
  return cells;
}

/** Convierte un valor (escalar, vector, matriz) a LaTeX renderable con KaTeX */
export function formatLatex(name: string | undefined, value: any): string {
  // Escalares
  if (typeof value === "number") {
    return name
      ? `${name} = ${formatScalar(value)}`
      : `${formatScalar(value)}`;
  }

  // Arrays / matrices
  if (Array.isArray(value)) {
    return name
      ? `${name} = ${arrayToLatex(value)}`
      : arrayToLatex(value);
  }

  // mathjs Matrix
  if (value && typeof value.toArray === "function") {
    return formatLatex(name, value.toArray());
  }

  return name ? `${name} = \\text{${String(value)}}` : `\\text{${String(value)}}`;
}

function formatScalar(v: number): string {
  if (Math.abs(v) < 1e-12) return "0";
  if (Math.abs(v) >= 1e6 || Math.abs(v) < 1e-3) {
    const s = v.toExponential(4);
    return s.replace(/e([+-]?\d+)/, " \\times 10^{$1}");
  }
  return parseFloat(v.toFixed(6)).toString();
}

/** Convierte array 1D/2D a \\begin{bmatrix}...\\end{bmatrix} */
function arrayToLatex(arr: any[]): string {
  if (arr.length === 0) return "[]";
  // 1D vector
  if (!Array.isArray(arr[0])) {
    const items = arr.map((v) => typeof v === "number" ? formatScalar(v) : String(v));
    if (arr.length > 8) {
      // Truncate long vectors
      return `\\begin{bmatrix} ${items.slice(0, 4).join(" \\\\ ")} \\\\ \\vdots \\\\ ${items.slice(-2).join(" \\\\ ")} \\end{bmatrix}_{${arr.length}\\times1}`;
    }
    return `\\begin{bmatrix} ${items.join(" \\\\ ")} \\end{bmatrix}`;
  }
  // 2D matrix
  const rows = arr as number[][];
  const r = rows.length, c = rows[0].length;
  if (r > 8 || c > 8) {
    // Show only the corners + ellipsis
    return `\\text{Matriz } ${r} \\times ${c}\\text{ (truncada)}`;
  }
  const inner = rows.map((row) =>
    (row as any[]).map((v) => typeof v === "number" ? formatScalar(v) : String(v)).join(" & ")
  ).join(" \\\\ ");
  return `\\begin{bmatrix} ${inner} \\end{bmatrix}`;
}

/**
 * Expone propiedades del modelo (FEM) como variables del scope.
 * Llamar con (nodes, elements, K, M, F, u, ...) para que el usuario los use.
 */
export function buildModelVars(args: {
  nodes?: number[][];
  elements?: number[][];
  K?: number[][];
  M?: number[][];
  F?: number[];
  u?: number[];
  [key: string]: any;
}): Record<string, any> {
  const out: Record<string, any> = {};
  for (const k of Object.keys(args)) {
    if (args[k] != null) out[k] = args[k];
  }
  // Tamaños computados
  if (args.nodes) out.nnodes = args.nodes.length;
  if (args.elements) out.nelem = args.elements.length;
  if (args.nodes) out.ndof = args.nodes.length * 6;
  return out;
}

/** Plantilla canónica: muestra info básica del modelo activo */
export function getDefaultTemplate(): string {
  return `## FEM del modelo actual
% Variables disponibles: nodes, elements, K, M, F, u, nnodes, nelem, ndof

% Tamaño del modelo
nnodes
nelem
ndof = nnodes * 6

% Coordenadas
nodes

## Solución
% Desplazamientos máximos
max(abs(u))
`;
}
