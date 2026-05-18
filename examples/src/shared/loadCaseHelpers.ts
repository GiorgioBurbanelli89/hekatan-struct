/**
 * Helpers para que los ejemplos consulten el "case activo" del panel
 * 📊 Load Cases y apliquen el peso propio correcto.
 *
 * Backward compatibility: si states.loadPatterns/loadCases NO está
 * inicializado (ejemplos antiguos), devuelve 1.0 para mantener el
 * comportamiento previo (peso propio siempre aplicado).
 */
import type { BuildStates } from "../workspace/exampleRegistry";

/**
 * Suma ponderada de los multiplicadores de peso propio del case activo:
 *   SW_eff = Σ (pattern.selfWeightMultiplier × case.scaleFactor)
 *
 * Casos típicos:
 *   • Active = "Dead" (Dead SW=1 × SF=1)        → 1.0
 *   • Active = "Live" (Live SW=0 × SF=1)        → 0   (no peso propio)
 *   • Active = "Modal" (sin patterns)           → 0
 *   • Active = "1.2D+1.6L" (combo aplicado)      → 1.2  (solo Dead aporta SW)
 */
export function getActiveSelfWeightMultiplier(states: BuildStates): number {
  const activeName = states.activeLoadCase?.val;
  if (!activeName) return 1.0;  // backward compat
  const activeCase = states.loadCases?.val.find(c => c.name === activeName);
  if (!activeCase) return 1.0;
  if (!activeCase.patterns || activeCase.patterns.length === 0) return 0;
  let total = 0;
  for (const pp of activeCase.patterns) {
    const pat = states.loadPatterns?.val.find(p => p.name === pp.pattern);
    if (pat) total += (pat.selfWeightMultiplier ?? 0) * (pp.scaleFactor ?? 1);
  }
  return total;
}

/**
 * Devuelve el case activo completo (útil para que el ejemplo decida si
 * tiene que aplicar cargas distintas según el tipo: estático vs modal vs
 * pushover, etc.).
 */
export function getActiveLoadCase(states: BuildStates) {
  const activeName = states.activeLoadCase?.val;
  if (!activeName) return undefined;
  return states.loadCases?.val.find(c => c.name === activeName);
}

/**
 * Devuelve los nombres de patterns aplicados en el case activo (con sus SF).
 * Útil para examples que filtran cargas nodales por pattern de origen.
 */
export function getActivePatterns(states: BuildStates): Array<{ pattern: string; scaleFactor: number }> {
  const active = getActiveLoadCase(states);
  return active?.patterns ?? [];
}
