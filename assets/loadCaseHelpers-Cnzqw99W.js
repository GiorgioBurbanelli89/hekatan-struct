function o(a) {
  var _a, _b, _c;
  const n = (_a = a.activeLoadCase) == null ? void 0 : _a.val;
  if (!n) return 1;
  const t = (_b = a.loadCases) == null ? void 0 : _b.val.find((e) => e.name === n);
  if (!t) return 1;
  if (!t.patterns || t.patterns.length === 0) return 0;
  let r = 0;
  for (const e of t.patterns) {
    const i = (_c = a.loadPatterns) == null ? void 0 : _c.val.find((l) => l.name === e.pattern);
    i && (r += (i.selfWeightMultiplier ?? 0) * (e.scaleFactor ?? 1));
  }
  return r;
}
export {
  o as g
};
