/**
 * calcEngine.ts — Parser/evaluador estilo MATLAB usando math.js
 *
 * Soporta:
 *   - Matrices: K = [1,2;3,4]
 *   - Vectores: F = [10;0;-5]
 *   - Indexación 1-based: K(1,2), F(3)
 *   - Backslash solve: u = K \ F
 *   - Transpuesta: K'
 *   - zeros(n,m), ones(n,m), eye(n)
 *   - inv(), det(), transpose(), norm()
 *   - for i = a:b ... end
 *   - if cond ... else ... end
 *   - Comentarios: % texto
 *   - FEM helpers: stiffness(i), transform(i)
 */

import { create, all } from "mathjs";
import {
  getLocalStiffnessMatrix,
  getTransformationMatrix,
  didacticSolveCpp,
} from "awatif-fem";
import type { Node, ElementInputs, NodeInputs } from "awatif-fem";
import type { ModelData } from "./calcTemplates";

// Create math.js instance with all functions
const math = create(all, {
  number: "number",
  matrix: "Matrix",
}) as any; // full math.js instance with evaluate, subset, etc.

// ═══════════════════════════════════════════════════════
// FEM HELPER FUNCTIONS (injected into math scope)
// ═══════════════════════════════════════════════════════

// Store model data for solve_model() to use
let _currentModelData: ModelData | null = null;

/** Build FEM helper functions that use the current model data from scope */
function buildFemHelpers(scope: Record<string, any>) {
  // stiffness(i) — returns K_local 12x12 for element i (1-based)
  scope.stiffness = (i: number) => {
    const idx = i - 1; // 1-based → 0-based
    const nodes = getNodesFromScope(scope);
    const elements = getElementsFromScope(scope);
    const ei = getElementInputsFromScope(scope);
    if (!nodes || !elements || idx < 0 || idx >= elements.length) {
      throw new Error(`stiffness(${i}): elemento no existe`);
    }
    const el = elements[idx];
    const elNodes: Node[] = el.map((n: number) => nodes[n]);
    const K = getLocalStiffnessMatrix(elNodes, ei, idx);
    return math.matrix(K);
  };

  // transform(i) — returns T 12x12 for element i (1-based)
  scope.transform = (i: number) => {
    const idx = i - 1;
    const nodes = getNodesFromScope(scope);
    const elements = getElementsFromScope(scope);
    if (!nodes || !elements || idx < 0 || idx >= elements.length) {
      throw new Error(`transform(${i}): elemento no existe`);
    }
    const el = elements[idx];
    const elNodes: Node[] = el.map((n: number) => nodes[n]);
    const T = getTransformationMatrix(elNodes);
    return math.matrix(T);
  };

  // kglobal(i) — returns T' * K_local * T for element i
  scope.kglobal = (i: number) => {
    const K = scope.stiffness(i);
    const T = scope.transform(i);
    return math.multiply(math.transpose(T), math.multiply(K, T));
  };

  // assemble_dofs(i) — returns global DOF indices for element i
  scope.assemble_dofs = (i: number) => {
    const idx = i - 1;
    const elements = getElementsFromScope(scope);
    if (!elements || idx < 0 || idx >= elements.length) {
      throw new Error(`assemble_dofs(${i}): elemento no existe`);
    }
    const el = elements[idx];
    const dofs: number[] = [];
    for (const n of el) {
      for (let d = 0; d < 6; d++) dofs.push(n * 6 + d + 1); // 1-based
    }
    return math.matrix(dofs);
  };

  // elem_length(i) — returns length of element i
  scope.elem_length = (i: number) => {
    const idx = i - 1;
    const nodes = getNodesFromScope(scope);
    const elements = getElementsFromScope(scope);
    if (!nodes || !elements || idx < 0 || idx >= elements.length) {
      throw new Error(`elem_length(${i}): elemento no existe`);
    }
    const el = elements[idx];
    const n0 = nodes[el[0]], n1 = nodes[el[1]];
    return Math.sqrt((n1[0]-n0[0])**2 + (n1[1]-n0[1])**2 + (n1[2]-n0[2])**2);
  };

  // ═══════════════════════════════════════════════
  // solve_model() — WASM solver, returns all results to scope
  // ═══════════════════════════════════════════════
  scope.solve_model = () => {
    if (!_currentModelData) throw new Error("solve_model: no hay modelo cargado");
    const md = _currentModelData;
    try {
      const result = didacticSolveCpp(
        md.nodes, md.elements, md.nodeInputs, md.elementInputs
      );
      // Inject results into scope
      scope._solve_result = result;
      scope.U = math.matrix(result.U_full);
      scope.F = math.matrix(result.F_applied);
      scope.R = math.matrix(result.R_full);
      scope.nDOF_total = result.nDOF;
      scope.nDOF_free = result.freeDOFs.length;
      scope.nDOF_fixed = result.fixedDOFs.length;

      // Per-node displacement extraction: unode(n) → [ux,uy,uz,rx,ry,rz]
      // Use math.import to register as proper function (avoids subset interpretation)
      try {
        math.import({
          unode: function(n: number) {
            const idx = (n - 1) * 6;
            return math.matrix(result.U_full.slice(idx, idx + 6));
          },
          rnode: function(n: number) {
            const idx = (n - 1) * 6;
            return math.matrix(result.R_full.slice(idx, idx + 6));
          }
        }, { override: true });
      } catch { /* already imported */ }

      // Return summary string
      return `Resuelto: ${result.nDOF} DOFs (${result.freeDOFs.length} libres, ${result.fixedDOFs.length} fijos), max|U| = ${Math.max(...result.U_full.map(Math.abs)).toExponential(4)}`;
    } catch (err: any) {
      throw new Error(`solve_model: ${err.message}`);
    }
  };

  // K_element(i) — returns K_global from WASM result (after solve_model)
  scope.K_element = (i: number) => {
    const r = scope._solve_result;
    if (!r) throw new Error("K_element: primero ejecuta solve_model()");
    const idx = i - 1;
    if (idx < 0 || idx >= r.elements.length) throw new Error(`K_element(${i}): no existe`);
    return math.matrix(r.elements[idx].K_global);
  };
}

/** Extract nodes array from scope (handles math.js Matrix or plain array) */
function getNodesFromScope(scope: Record<string, any>): number[][] | null {
  const n = scope.nodes;
  if (!n) return null;
  const arr = typeof n.toArray === "function" ? n.toArray() : n;
  if (!Array.isArray(arr)) return null;
  return arr;
}

/** Extract elements connectivity from scope */
function getElementsFromScope(scope: Record<string, any>): number[][] | null {
  const e = scope.elem || scope.elements;
  if (!e) return null;
  const arr = typeof e.toArray === "function" ? e.toArray() : e;
  if (!Array.isArray(arr)) return null;
  return arr;
}

/** Build ElementInputs from scope variables */
function getElementInputsFromScope(scope: Record<string, any>): ElementInputs {
  const nelem = scope.nelem || 0;
  const ei: ElementInputs = {};

  // Get elements to know which are frames (2-node) vs shells
  const elements = getElementsFromScope(scope);
  const frameIndices: number[] = [];
  if (elements) {
    elements.forEach((el, i) => { if (el.length === 2) frameIndices.push(i); });
  }

  const mapProp = (name: string, isFrameProp: boolean): Map<number, number> | undefined => {
    const val = scope[name];
    if (val === undefined || val === null) return undefined;
    const m = new Map<number, number>();
    if (typeof val === "number") {
      // Scalar → broadcast to all elements (or only frames if frame prop)
      const indices = isFrameProp ? frameIndices : Array.from({length: nelem}, (_, i) => i);
      for (const i of indices) m.set(i, val);
    } else {
      const arr = typeof val.toArray === "function" ? val.toArray() : val;
      if (Array.isArray(arr)) {
        const flat = arr.flat();
        // Array values map to frame indices (for frame props) or all elements
        const indices = isFrameProp ? frameIndices : Array.from({length: nelem}, (_, i) => i);
        for (let j = 0; j < flat.length && j < indices.length; j++) {
          m.set(indices[j], flat[j]);
        }
      }
    }
    return m.size > 0 ? m : undefined;
  };

  ei.elasticities = mapProp("E", true);  // E applies to frames; shells use E_shell
  ei.areas = mapProp("A", true);
  ei.momentsOfInertiaZ = mapProp("Iz", true);
  ei.momentsOfInertiaY = mapProp("Iy", true);
  ei.shearModuli = mapProp("G", true);
  ei.torsionalConstants = mapProp("J", true);
  ei.thicknesses = mapProp("t", false);   // shell property
  ei.poissonsRatios = mapProp("nu", false); // shell property

  // Also check shell-specific E
  const eShell = mapProp("E_shell", false);
  if (eShell) {
    if (!ei.elasticities) ei.elasticities = new Map();
    eShell.forEach((v, k) => ei.elasticities!.set(k, v));
  }

  return ei;
}

export interface CalcLine {
  lineNum: number;
  input: string;       // raw input line
  varName?: string;     // variable name if assignment
  expression?: string;  // expression text (without var = )
  result?: any;    // evaluated result
  resultType?: "scalar" | "vector" | "matrix" | "string" | "boolean" | "other";
  error?: string;       // error message if failed
  isComment?: boolean;
  isBlank?: boolean;
  isControl?: boolean;  // for/if/while/end
}

export interface CalcResult {
  lines: CalcLine[];
  scope: Record<string, any>;
  errors: string[];
}

/**
 * Evaluate a multi-line MATLAB-style script.
 * Returns per-line results for rendering.
 */
export function evaluate(code: string, initialScope?: Record<string, any>, modelData?: ModelData): CalcResult {
  _currentModelData = modelData || null;
  const scope: Record<string, any> = { ...initialScope };
  // Inject FEM helper functions into scope
  buildFemHelpers(scope);
  const rawLines = code.split("\n");
  const lines: CalcLine[] = [];
  const errors: string[] = [];

  // Pre-process: collect for/if/while blocks
  const processed = preprocessBlocks(rawLines);

  let i = 0;
  while (i < processed.length) {
    const { line, originalLineNum, blockLines } = processed[i];
    const trimmed = line.trim();

    // Blank line
    if (trimmed === "") {
      lines.push({ lineNum: originalLineNum, input: line, isBlank: true });
      i++;
      continue;
    }

    // Comment
    if (trimmed.startsWith("%")) {
      lines.push({ lineNum: originalLineNum, input: line, isComment: true });
      i++;
      continue;
    }

    // Inline comment — strip after %
    const commentIdx = findCommentIndex(trimmed);
    const cleanLine = commentIdx >= 0 ? trimmed.substring(0, commentIdx).trim() : trimmed;

    if (cleanLine === "") {
      lines.push({ lineNum: originalLineNum, input: line, isBlank: true });
      i++;
      continue;
    }

    // for block
    if (blockLines && trimmed.match(/^for\s+/i)) {
      const result = evaluateForBlock(cleanLine, blockLines, scope);
      lines.push({
        lineNum: originalLineNum,
        input: line,
        isControl: true,
        result: result.lastValue,
        resultType: getResultType(result.lastValue),
        error: result.error,
      });
      // Add sub-lines for the last iteration (for display)
      if (result.iterationLines) {
        for (const sl of result.iterationLines) {
          lines.push(sl);
        }
      }
      i++;
      continue;
    }

    // if block
    if (blockLines && trimmed.match(/^if\s+/i)) {
      const result = evaluateIfBlock(cleanLine, blockLines, scope);
      lines.push({
        lineNum: originalLineNum,
        input: line,
        isControl: true,
        result: result.value,
        resultType: getResultType(result.value),
        error: result.error,
      });
      i++;
      continue;
    }

    // Regular expression line
    const cl = evaluateLine(cleanLine, scope, originalLineNum);
    lines.push(cl);
    if (cl.error) errors.push(`Line ${originalLineNum}: ${cl.error}`);
    i++;
  }

  return { lines, scope, errors };
}

// ═══════════════════════════════════════════════════════
// LINE EVALUATION
// ═══════════════════════════════════════════════════════

function evaluateLine(line: string, scope: Record<string, any>, lineNum: number): CalcLine {
  try {
    // Pre-process MATLAB syntax → math.js syntax
    const converted = matlabToMathjs(line);

    // Check if it's an assignment: varName = expression
    const assignMatch = converted.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);

    let result: any;
    let varName: string | undefined;
    let expression: string | undefined;

    if (assignMatch && !converted.match(/^(if|for|while|end)\b/)) {
      varName = assignMatch[1];
      expression = assignMatch[2];
      result = math.evaluate(converted, scope);
      // math.evaluate with scope auto-assigns the variable
    } else {
      expression = converted;
      result = math.evaluate(converted, scope);
    }

    return {
      lineNum,
      input: line,
      varName,
      expression,
      result,
      resultType: getResultType(result),
    };
  } catch (err: any) {
    return {
      lineNum,
      input: line,
      error: err.message || String(err),
    };
  }
}

// ═══════════════════════════════════════════════════════
// MATLAB → MATH.JS SYNTAX CONVERSION
// ═══════════════════════════════════════════════════════

function matlabToMathjs(line: string): string {
  let s = line.trim();

  // Strip trailing semicolon (MATLAB suppress output — we always show)
  if (s.endsWith(";")) s = s.slice(0, -1).trim();

  // Backslash solve: A \ b → lusolve(A, b)
  // Must handle: u = K \ F
  const backslashMatch = s.match(/^(\w+)\s*=\s*(\w+)\s*\\\s*(.+)$/);
  if (backslashMatch) {
    s = `${backslashMatch[1]} = lusolve(${backslashMatch[2]}, ${backslashMatch[3]})`;
  } else {
    // Expression-only backslash: K \ F
    const exprBackslash = s.match(/^(\w+)\s*\\\s*(.+)$/);
    if (exprBackslash && !s.includes("=")) {
      s = `lusolve(${exprBackslash[1]}, ${exprBackslash[2]})`;
    }
  }

  // Transpose: A' → transpose(A) (but not inside strings)
  // Handle: K' and K_local'
  s = s.replace(/(\w+)'/g, "transpose($1)");

  // MATLAB 1-based indexing: A(i,j) → subset(A, index(i, j))
  // But NOT function calls like inv(K) or zeros(3,3)
  const knownFunctions = new Set([
    "inv", "det", "transpose", "norm", "zeros", "ones", "eye",
    "lusolve", "lup", "sqrt", "abs", "sin", "cos", "tan",
    "stiffness", "transform", "kglobal", "assemble_dofs", "elem_length",
    "exp", "log", "log10", "ceil", "floor", "round", "mod",
    "max", "min", "sum", "prod", "size", "length",
    "stiffness", "transform", "assemble", "diag", "trace",
    "cross", "dot", "kron", "reshape", "flatten", "squeeze",
    "eigs", "svd", "rank", "subset", "index", "range",
    "matrix", "number", "print", "format",
  ]);

  // Match: varName(args) where varName is NOT a known function
  s = s.replace(/\b([a-zA-Z_]\w*)\(([^)]+)\)/g, (match, name, args) => {
    if (knownFunctions.has(name)) return match;
    // Check if variable exists in scope context — assume it's indexing
    // Convert 1-based to 0-based: A(1,2) → subset(A, index(0,1))
    const indices = args.split(",").map((a: string) => {
      const trimmed = a.trim();
      // If it's a number, subtract 1 for 0-based
      const num = Number(trimmed);
      if (!isNaN(num) && trimmed !== "") return String(num - 1);
      // If it's a variable, subtract 1 at runtime
      return `${trimmed} - 1`;
    });
    return `subset(${name}, index(${indices.join(", ")}))`;
  });

  return s;
}

// ═══════════════════════════════════════════════════════
// CONTROL FLOW: for/if/while blocks
// ═══════════════════════════════════════════════════════

interface ProcessedLine {
  line: string;
  originalLineNum: number;
  blockLines?: string[]; // inner lines for control blocks
}

function preprocessBlocks(rawLines: string[]): ProcessedLine[] {
  // Phase 1: Join multi-line brackets [ ... ] into single lines
  const joinedLines: { line: string; startLine: number }[] = [];
  let i = 0;
  while (i < rawLines.length) {
    const trimmed = rawLines[i].trim();
    // Count unmatched brackets
    const opens = (trimmed.match(/\[/g) || []).length;
    const closes = (trimmed.match(/\]/g) || []).length;
    if (opens > closes) {
      // Multi-line matrix/vector — join until brackets balance
      let combined = trimmed;
      const startLine = i;
      let depth = opens - closes;
      i++;
      while (i < rawLines.length && depth > 0) {
        const next = rawLines[i].trim();
        combined += " " + next;
        depth += (next.match(/\[/g) || []).length;
        depth -= (next.match(/\]/g) || []).length;
        i++;
      }
      joinedLines.push({ line: combined, startLine: startLine });
    } else {
      joinedLines.push({ line: rawLines[i], startLine: i });
      i++;
    }
  }

  // Phase 2: Process for/if/while blocks
  const result: ProcessedLine[] = [];
  i = 0;

  while (i < joinedLines.length) {
    const trimmed = joinedLines[i].line.trim();
    const origLine = joinedLines[i].startLine + 1;

    // Detect block start: for, if, while
    if (trimmed.match(/^(for|if|while)\s+/i)) {
      const blockStart = i;
      const blockLines: string[] = [];
      let depth = 1;
      i++;

      while (i < joinedLines.length && depth > 0) {
        const inner = joinedLines[i].line.trim();
        if (inner.match(/^(for|if|while)\s+/i)) depth++;
        if (inner === "end") depth--;
        if (depth > 0) blockLines.push(joinedLines[i].line);
        i++;
      }

      result.push({
        line: joinedLines[blockStart].line,
        originalLineNum: origLine,
        blockLines,
      });
    } else {
      result.push({
        line: joinedLines[i].line,
        originalLineNum: origLine,
      });
      i++;
    }
  }

  return result;
}

function evaluateForBlock(
  header: string, bodyLines: string[], scope: Record<string, any>
): { lastValue?: any; error?: string; iterationLines?: CalcLine[] } {
  // Parse: for i = start:end  or  for i = start:step:end
  const match = header.match(/^for\s+(\w+)\s*=\s*(\d+):(\d+)(?::(\d+))?$/i)
    || header.match(/^for\s+(\w+)\s*=\s*(.+):(.+)$/i);

  if (!match) return { error: "Invalid for syntax. Use: for i = 1:n" };

  const varName = match[1];
  const start = Number(math.evaluate(match[2], scope));
  const end_ = Number(math.evaluate(match[3], scope));
  const step = match[4] ? Number(math.evaluate(match[4], scope)) : 1;

  let lastValue: any | undefined;
  let iterationLines: CalcLine[] = [];
  const maxIter = 10000;
  let count = 0;

  for (let val = start; val <= end_ && count < maxIter; val += step, count++) {
    scope[varName] = val;
    iterationLines = []; // keep last iteration only

    for (const bodyLine of bodyLines) {
      const trimmed = bodyLine.trim();
      if (trimmed === "" || trimmed.startsWith("%")) continue;

      const commentIdx = findCommentIndex(trimmed);
      const clean = commentIdx >= 0 ? trimmed.substring(0, commentIdx).trim() : trimmed;
      if (clean === "") continue;

      const cl = evaluateLine(clean, scope, 0);
      if (cl.error) return { error: `In for loop: ${cl.error}` };
      lastValue = cl.result;
      iterationLines.push(cl);
    }
  }

  return { lastValue, iterationLines };
}

function evaluateIfBlock(
  header: string, bodyLines: string[], scope: Record<string, any>
): { value?: any; error?: string } {
  // Parse: if condition
  const match = header.match(/^if\s+(.+)$/i);
  if (!match) return { error: "Invalid if syntax" };

  try {
    const condition = math.evaluate(matlabToMathjs(match[1]), scope);
    const isTrue = Boolean(condition);

    // Split bodyLines at "else"
    const elseIdx = bodyLines.findIndex(l => l.trim() === "else");
    const trueBranch = elseIdx >= 0 ? bodyLines.slice(0, elseIdx) : bodyLines;
    const falseBranch = elseIdx >= 0 ? bodyLines.slice(elseIdx + 1) : [];

    const branch = isTrue ? trueBranch : falseBranch;
    let lastValue: any | undefined;

    for (const bodyLine of branch) {
      const trimmed = bodyLine.trim();
      if (trimmed === "" || trimmed.startsWith("%")) continue;
      const cl = evaluateLine(matlabToMathjs(trimmed), scope, 0);
      if (cl.error) return { error: cl.error };
      lastValue = cl.result;
    }

    return { value: lastValue };
  } catch (err: any) {
    return { error: err.message };
  }
}

// ═══════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════

function getResultType(val: any): CalcLine["resultType"] {
  if (val === undefined || val === null) return "other";
  if (typeof val === "number") return "scalar";
  if (typeof val === "boolean") return "boolean";
  if (typeof val === "string") return "string";

  // math.js Matrix
  if (val && typeof val === "object" && typeof val.size === "function") {
    const sz = val.size();
    if (sz.length === 1 || (sz.length === 2 && (sz[0] === 1 || sz[1] === 1))) {
      return "vector";
    }
    return "matrix";
  }

  // Plain array
  if (Array.isArray(val)) {
    if (val.length > 0 && Array.isArray(val[0])) return "matrix";
    return "vector";
  }

  return "other";
}

/** Find index of comment % (not inside brackets/strings) */
function findCommentIndex(line: string): number {
  let inBracket = 0;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === "[") inBracket++;
    if (line[i] === "]") inBracket--;
    if (line[i] === "%" && inBracket === 0) return i;
  }
  return -1;
}

/**
 * Get scope as formatted object (for debugging/display)
 */
export function getScopeVars(scope: Record<string, any>): { name: string; value: any; type: string }[] {
  return Object.entries(scope)
    .filter(([k]) => !k.startsWith("_"))
    .map(([name, value]) => ({
      name,
      value,
      type: getResultType(value) || "other",
    }));
}
