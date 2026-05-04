function a(o, f = 90, r) {
  if (!o || o.size === 0) return [0, 1];
  const t = [];
  for (const n of o.values()) for (const s of n) {
    const i = Math.abs(s);
    Number.isFinite(i) && t.push(i);
  }
  if (t.length === 0) return [0, 1];
  t.sort((n, s) => n - s);
  const l = Math.floor(f / 100 * (t.length - 1));
  let e = t[l];
  return r && e > r && (e = r), [0, e];
}
export {
  a as c
};
