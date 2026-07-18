// tclIO — export/import de modelos en formato OpenSees Tcl para Hekatan Struct Lineal.
// Trabaja sobre el texto del CLI Modeler (node/frame/shell/support) para round-trip
// consistente con .heks: exporta el modelo actual a .tcl y re-importa un .tcl a comandos CLI.
import { parseCliCommands } from "../cli-modeler/cliModeler";

/** Modelo CLI (nodes/frames/shells/supports) → script OpenSees Tcl plano. */
export function exportTclFromCli(cliText: string): string {
  const m = parseCliCommands(cliText);
  const L: string[] = [
    "# Modelo exportado desde Hekatan Struct Lineal (OpenSees Tcl)",
    "wipe",
    "model basic -ndm 3 -ndf 6",
    "geomTransf Linear 1 1 0 0",
    "nDMaterial ElasticIsotropic 1 2.5e7 0.2 2.4",
    "section ElasticMembranePlateSection 1 2.5e7 0.2 0.20 2.4",
  ];
  for (const [id, c] of m.nodes) L.push(`node ${id} ${fmt(c[0])} ${fmt(c[1])} ${fmt(c[2] ?? 0)}`);
  for (const [id, s] of m.supports) L.push(`fix ${id} ${s.map((b) => (b ? 1 : 0)).join(" ")}`);
  let eid = 0;
  for (const f of m.frames) {
    const G = f.E / 2.4, J = f.I; // aproximaciones para modelo elástico
    L.push(`element elasticBeamColumn ${++eid} ${f.nI} ${f.nJ} ${fmt(f.A)} ${fmt(f.E)} ${fmt(G)} ${fmt(J)} ${fmt(f.I)} ${fmt(f.I)} 1`);
  }
  for (const sh of m.shells) L.push(`element ShellMITC4 ${++eid} ${sh.pts.join(" ")} 1`);
  return L.join("\n") + "\n";
}

/** Script OpenSees Tcl → comandos CLI Modeler (node/frame/shell/support) para cargarlo. */
export function importTclToCli(tcl: string): string {
  const out: string[] = ["# Modelo importado de OpenSees Tcl"];
  let fid = 0, sid = 0;
  for (const raw of tcl.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const t = line.split(/\s+/);
    const cmd = t[0].toLowerCase();
    if (cmd === "node" && t.length >= 5) {
      out.push(`node ${int(t[1])} ${num(t[2])} ${num(t[3])} ${num(t[4])}`);
    } else if (cmd === "fix" && t.length >= 8) {
      out.push(`support ${int(t[1])} ${t.slice(2, 8).map((x) => (parseInt(x, 10) ? 1 : 0)).join("")}`);
    } else if (cmd === "element" && t.length >= 5) {
      const type = (t[1] || "").toLowerCase();
      // element <tipo> <tag> <n1> <n2> [n3 n4] ...
      if (type.includes("beam") || type.includes("truss")) {
        out.push(`frame ${++fid} ${int(t[3])} ${int(t[4])}`);
      } else if ((type.includes("shell") || type.includes("quad")) && t.length >= 7) {
        out.push(`shell ${++sid} ${int(t[3])} ${int(t[4])} ${int(t[5])} ${int(t[6])}`);
      }
    }
  }
  out.push("solve");
  return out.join("\n");
}

function fmt(x: number): string { return Number.isFinite(x) ? (Math.abs(x) >= 1e4 || (x !== 0 && Math.abs(x) < 1e-3) ? x.toExponential(4) : String(+x.toFixed(6))) : "0"; }
function num(s: string): string { const v = parseFloat(s); return Number.isFinite(v) ? String(v) : "0"; }
function int(s: string): number { return parseInt(s, 10) || 0; }
