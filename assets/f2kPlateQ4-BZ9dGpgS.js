const d = [2, 3, 4];
function a(f, t) {
  const e = /* @__PURE__ */ new Map();
  for (const o of t) {
    const n = e.get(o.node) ?? [0, 0, 0, 0, 0, 0];
    n[d[o.dof] ?? o.dof] += o.value, e.set(o.node, n);
  }
  return { springs: f.map((o) => ({ node: o.node, dof: d[o.dof] ?? o.dof, k: o.k })), loadsSolver: e };
}
export {
  a as f
};
