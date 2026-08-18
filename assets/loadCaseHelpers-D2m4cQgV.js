function l(n) {
  var _a, _b, _c;
  const i = (_a = n.activeLoadCase) == null ? void 0 : _a.val;
  if (!i) return 1;
  const t = (_b = n.loadCases) == null ? void 0 : _b.val.find((e) => e.name === i);
  if (!t) return 1;
  if (!t.patterns || t.patterns.length === 0) return 0;
  let r = 0;
  for (const e of t.patterns) {
    const a = (_c = n.loadPatterns) == null ? void 0 : _c.val.find((o) => o.name === e.pattern);
    a && (a.type !== void 0 && a.type !== "Dead" || (r += (a.selfWeightMultiplier ?? 0) * (e.scaleFactor ?? 1)));
  }
  return r;
}
export {
  l as g
};
