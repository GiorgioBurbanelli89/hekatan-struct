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
    // Las DOS inercias, no una. Antes se escribia `f.I` en los dos huecos (Iy e
    // Iz) y `J = f.I`, con `G = E/2.4` inventado. En una viga con canto las dos
    // inercias se diferencian ~15x, asi que el modelo reimportado salia mucho
    // mas flexible: el round-trip del galpon daba -2956 mm contra -278.
    const nu = f.nu ?? 0.2;
    const G = f.E / (2 * (1 + nu));
    const Iz = f.I;                       // token 6 del `frame` (I22)
    const Iy = f.Iy ?? f.I;               // token 7 (I33, el del canto)
    const J = f.J ?? 0.14 * Math.pow(Math.sqrt(f.A), 4);
    L.push(`element elasticBeamColumn ${++eid} ${f.nI} ${f.nJ} ${fmt(f.A)} ${fmt(f.E)} ${fmt(G)} ${fmt(J)} ${fmt(Iy)} ${fmt(Iz)} 1`);
  }
  for (const sh of m.shells) L.push(`element ShellMITC4 ${++eid} ${sh.pts.join(" ")} ${secOf.get(`${sh.t}|${sh.E}`)}`);

  // ── CARGAS ──────────────────────────────────────────────────────────────
  // Antes no se exportaba NINGUNA: el .tcl salia con geometria y apoyos pero
  // sin nada que lo cargara, y el modelo reimportado daba flecha 0.000 mm.
  // Lo cazo el round-trip del galpon (tests/casos/tcl_roundtrip.mjs), que
  // comparaba RESULTADOS y no texto: la geometria sobrevivia perfecta.
  //
  // En OpenSees las cargas van dentro de un patron:
  //   pattern Plain <tag> Linear { load <nudo> Fx Fy Fz Mx My Mz
  //                                eleLoad -ele <elem> -type -beamUniform Wy Wz Wx }
  // `-beamUniform` va en ejes LOCALES de la barra. El `frameload` del CLI va en
  // GLOBALES, asi que se proyecta sobre los ejes locales al exportar y se
  // deshace al importar. Para la carga vertical de gravedad —que es el 99 % de
  // lo que hay— la barra horizontal tiene el eje local 2 vertical y sale
  // directo; en una barra inclinada la proyeccion es la que toca.
  const idDeFrame = new Map<number, number>();     // id del CLI -> tag del tcl
  let k = 0;
  for (const f of m.frames) idDeFrame.set(f.id, ++k);

  const hayCargas = m.loads.size > 0 || m.frameLoads.size > 0;
  if (hayCargas) {
    L.push("pattern Plain 1 Linear {");
    for (const [id, v] of m.loads) {
      if (v.some((x) => x !== 0)) L.push(`  load ${id} ${v.map(fmt).join(" ")}`);
    }
    for (const [fid, w] of m.frameLoads) {
      const tag = idDeFrame.get(fid);
      const f = m.frames.find((fr) => fr.id === fid);
      if (!tag || !f) continue;
      const a = m.nodes.get(f.nI), b = m.nodes.get(f.nJ);
      if (!a || !b) continue;
      const d = [b[0] - a[0], b[1] - a[1], (b[2] ?? 0) - (a[2] ?? 0)];
      const Lb = Math.hypot(d[0], d[1], d[2]) || 1;
      const ex = [d[0] / Lb, d[1] / Lb, d[2] / Lb];
      // ejes locales como en `geomTransf ... 1 0 0`: el 3 es ex x vertical
      let ez = cruz(ex, [0, 0, 1]);
      if (Math.hypot(ez[0], ez[1], ez[2]) < 1e-9) ez = [0, 1, 0];
      ez = unit(ez);
      const ey = unit(cruz(ez, ex));
      const Wx = dot(w, ex), Wy = dot(w, ey), Wz = dot(w, ez);
      L.push(`  eleLoad -ele ${tag} -type -beamUniform ${fmt(Wy)} ${fmt(Wz)} ${fmt(Wx)}`);
    }
    L.push("}");
  }
  return L.join("\n") + "\n";
}

function cruz(a: number[], b: number[]): number[] {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2],
          a[0] * b[1] - a[1] * b[0]];
}
function unit(a: number[]): number[] {
  const n = Math.hypot(a[0], a[1], a[2]) || 1;
  return [a[0] / n, a[1] / n, a[2] / n];
}
function dot(a: number[], b: number[]): number {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
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
  const cargas: string[] = [];
  // Para deshacer la proyeccion de `-beamUniform` (que va en ejes LOCALES) hay
  // que conocer la geometria de la barra, y los elementos vienen antes que las
  // cargas: se guardan aqui segun se leen.
  const coord = new Map<number, number[]>();
  const barra = new Map<number, { nI: number; nJ: number }>();  // tag -> nudos
  const idCli = new Map<number, number>();                      // tag -> id CLI
  let fid = 0, sid = 0;
  for (const line of lines) {
    const t = line.split(/\s+/);
    const cmd = t[0].toLowerCase();
    if (cmd === "node" && t.length >= 5) {
      out.push(`node ${int(t[1])} ${num(t[2])} ${num(t[3])} ${num(t[4])}`);
      coord.set(int(t[1]), [parseFloat(t[2]), parseFloat(t[3]), parseFloat(t[4])]);
    } else if (cmd === "load" && t.length >= 5) {
      // load <nudo> Fx Fy Fz [Mx My Mz]
      const v = t.slice(2, 8).map(num);
      while (v.length < 6) v.push("0");
      cargas.push(`load ${int(t[1])} ${v.join(" ")}`);
    } else if (cmd === "eleload") {
      // eleLoad -ele <tag> -type -beamUniform Wy Wz [Wx]   (ejes LOCALES)
      const iE = t.findIndex((x) => x.toLowerCase() === "-ele");
      const iU = t.findIndex((x) => x.toLowerCase() === "-beamuniform");
      if (iE >= 0 && iU >= 0) {
        const tag = int(t[iE + 1]);
        const Wy = parseFloat(t[iU + 1] ?? "0");
        const Wz = parseFloat(t[iU + 2] ?? "0");
        const Wx = parseFloat(t[iU + 3] ?? "0");
        const b = barra.get(tag);
        const cli = idCli.get(tag);
        const a = b && coord.get(b.nI), c = b && coord.get(b.nJ);
        if (b && cli && a && c) {
          const d = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
          const Lb = Math.hypot(d[0], d[1], d[2]) || 1;
          const ex = [d[0] / Lb, d[1] / Lb, d[2] / Lb];
          let ez = cruz(ex, [0, 0, 1]);
          if (Math.hypot(ez[0], ez[1], ez[2]) < 1e-9) ez = [0, 1, 0];
          ez = unit(ez);
          const ey = unit(cruz(ez, ex));
          // de vuelta a globales: W = Wx·ex + Wy·ey + Wz·ez
          const W = [0, 1, 2].map((i) => Wx * ex[i] + Wy * ey[i] + Wz * ez[i]);
          cargas.push(`frameload ${cli} ${W.map((x) => +x.toFixed(8)).join(" ")}`);
        }
      }
    } else if (cmd === "fix" && t.length >= 8) {
      out.push(`support ${int(t[1])} ${t.slice(2, 8).map((x) => (parseInt(x, 10) ? 1 : 0)).join("")}`);
    } else if (cmd === "element" && t.length >= 5) {
      const type = (t[1] || "").toLowerCase();
      if (type.includes("beam") || type.includes("truss")) {
        // element elasticBeamColumn tag nI nJ A E G J Iy Iz transf ...
        const nI = int(t[3]), nJ = int(t[4]);
        if (type.includes("elasticbeam") && t.length >= 11) {
          // elasticBeamColumn tag nI nJ A E G J Iy Iz transf
          //                         5 6 7 8  9 10
          // Se leen las DOS inercias y tambien G y J: con la forma corta
          // (`frame id nI nJ E A I`) el CLI pone Iy = Iz y J por defecto, y una
          // viga con canto pierde su eje fuerte — el round-trip del galpon
          // daba -2956 mm contra -278.
          const A = num(t[5]), E = num(t[6]), G = parseFloat(t[7]);
          const J = num(t[8]), Iy = num(t[9]), Iz = num(t[10]);
          const nu = Number.isFinite(G) && G > 0
            ? +(parseFloat(E) / (2 * G) - 1).toFixed(6) : 0.2;
          out.push(`frame ${++fid} ${nI} ${nJ} ${E} ${A} ${Iz} ${Iy} ${J} ${nu} 2.45`);
        } else {
          out.push(`frame ${++fid} ${nI} ${nJ}`); // sección aparte → solo conectividad
        }
        barra.set(int(t[2]), { nI, nJ });
        idCli.set(int(t[2]), fid);
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
  // Las cargas van al FINAL: el CLI necesita que la barra exista antes de
  // cargarla, porque `frameload` referencia el id del `frame`.
  if (cargas.length) out.push("", "# --- cargas", ...cargas);
  out.push("solve");
  return out.join("\n");
}

function fmt(x: number): string { return Number.isFinite(x) ? (Math.abs(x) >= 1e4 || (x !== 0 && Math.abs(x) < 1e-3) ? x.toExponential(4) : String(+x.toFixed(6))) : "0"; }
function num(s: string): string { const v = parseFloat(s); return Number.isFinite(v) ? String(v) : "0"; }
function int(s: string): number { return parseInt(s, 10) || 0; }
