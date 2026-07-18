// tclIO — export/import de modelos en formato OpenSees Tcl para Hekatan Struct Lineal.
// Round-trip NUMÉRICO: preserva geometría, conectividad, apoyos y PROPIEDADES por elemento
// (frames: E, A, I ; shells: espesor t y E vía sección ElasticMembranePlateSection).
import { parseCliCommands } from "../cli-modeler/cliModeler";

/** Modelo CLI (nodes/frames/shells/supports) → script OpenSees Tcl con secciones por espesor. */
export function exportTclFromCli(cliText: string): string {
  const m = parseCliCommands(cliText);
  const L: string[] = [
    "# Modelo exportado desde Hekatan Struct Lineal (OpenSees Tcl)",
    "wipe",
    "model basic -ndm 3 -ndf 6",
    "geomTransf Linear 1 1 0 0",
  ];
  // Una sección ElasticMembranePlateSection por combinación única (t, E) de shell.
  const secOf = new Map<string, number>();
  let secTag = 0;
  for (const sh of m.shells) {
    const key = `${sh.t}|${sh.E}`;
    if (!secOf.has(key)) {
      secOf.set(key, ++secTag);
      L.push(`section ElasticMembranePlateSection ${secTag} ${fmt(sh.E)} 0.2 ${fmt(sh.t)} 2.4`);
    }
  }
  for (const [id, c] of m.nodes) L.push(`node ${id} ${fmt(c[0])} ${fmt(c[1])} ${fmt(c[2] ?? 0)}`);
  for (const [id, s] of m.supports) L.push(`fix ${id} ${s.map((b) => (b ? 1 : 0)).join(" ")}`);
  let eid = 0;
  for (const f of m.frames) {
    const G = f.E / 2.4, J = f.I; // aproximaciones para modelo elástico
    L.push(`element elasticBeamColumn ${++eid} ${f.nI} ${f.nJ} ${fmt(f.A)} ${fmt(f.E)} ${fmt(G)} ${fmt(J)} ${fmt(f.I)} ${fmt(f.I)} 1`);
  }
  for (const sh of m.shells) L.push(`element ShellMITC4 ${++eid} ${sh.pts.join(" ")} ${secOf.get(`${sh.t}|${sh.E}`)}`);
  return L.join("\n") + "\n";
}

/** Script OpenSees Tcl → comandos CLI Modeler con PROPIEDADES (frame E A I ; shell t E). */
export function importTclToCli(tcl: string): string {
  const lines = tcl.split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith("#"));
  // 1ª pasada: secciones de shell → {E, t}
  const sec = new Map<number, { E: number; t: number }>();
  for (const line of lines) {
    const t = line.split(/\s+/);
    if (t[0].toLowerCase() === "section" && /membraneplate|platefiber/i.test(t[1] || "")) {
      // section ElasticMembranePlateSection <secTag> <E> <nu> <t> <rho>
      sec.set(int(t[2]), { E: parseFloat(t[3]), t: parseFloat(t[5]) });
    }
  }
  // 2ª pasada: nodos, apoyos, elementos con props
  const out: string[] = ["# Modelo importado de OpenSees Tcl (con propiedades)"];
  let fid = 0, sid = 0;
  for (const line of lines) {
    const t = line.split(/\s+/);
    const cmd = t[0].toLowerCase();
    if (cmd === "node" && t.length >= 5) {
      out.push(`node ${int(t[1])} ${num(t[2])} ${num(t[3])} ${num(t[4])}`);
    } else if (cmd === "fix" && t.length >= 8) {
      out.push(`support ${int(t[1])} ${t.slice(2, 8).map((x) => (parseInt(x, 10) ? 1 : 0)).join("")}`);
    } else if (cmd === "element" && t.length >= 5) {
      const type = (t[1] || "").toLowerCase();
      if (type.includes("beam") || type.includes("truss")) {
        // element elasticBeamColumn tag nI nJ A E G J Iy Iz transf ...
        const nI = int(t[3]), nJ = int(t[4]);
        if (type.includes("elasticbeam") && t.length >= 11) {
          const A = num(t[5]), E = num(t[6]), Iz = num(t[10]); // A=t5 E=t6 Iy=t9 Iz=t10
          out.push(`frame ${++fid} ${nI} ${nJ} ${E} ${A} ${Iz}`);
        } else {
          out.push(`frame ${++fid} ${nI} ${nJ}`); // sección aparte → solo conectividad
        }
      } else if (type.includes("shell") || type.includes("quad")) {
        // element ASDShellQ4/ShellMITC4 tag n1 n2 n3 n4 secTag
        const n1 = int(t[3]), n2 = int(t[4]), n3 = int(t[5]), n4 = int(t[6]);
        const secTag = t.length >= 8 ? int(t[7]) : 0;
        const s = sec.get(secTag);
        if (s) out.push(`shell ${++sid} ${n1} ${n2} ${n3} ${n4} ${num(String(s.t))} ${num(String(s.E))}`);
        else out.push(`shell ${++sid} ${n1} ${n2} ${n3} ${n4}`);
      }
    }
  }
  out.push("solve");
  return out.join("\n");
}

function fmt(x: number): string { return Number.isFinite(x) ? (Math.abs(x) >= 1e4 || (x !== 0 && Math.abs(x) < 1e-3) ? x.toExponential(4) : String(+x.toFixed(6))) : "0"; }
function num(s: string): string { const v = parseFloat(s); return Number.isFinite(v) ? String(v) : "0"; }
function int(s: string): number { return parseInt(s, 10) || 0; }
