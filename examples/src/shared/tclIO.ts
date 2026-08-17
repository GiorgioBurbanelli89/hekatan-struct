// tclIO — export/import de modelos en formato OpenSees Tcl para Hekatan Struct Lineal.
// Round-trip NUMÉRICO: preserva geometría, conectividad, apoyos y PROPIEDADES por elemento
// (frames: E, A, I, ORIENTACIÓN y ÁREAS DE CORTANTE ; shells: espesor t y E vía
// sección ElasticMembranePlateSection).
//
// ── Correspondencia de ejes CSI ↔ OpenSees ──────────────────────────────────
// Hekatan usa la tríada de CSI: eje 1 a lo largo de la barra, eje 2 en el plano
// vertical hacia ARRIBA, eje 3 = 1×2. OpenSees define su tríada con el `vecxz`
// del `geomTransf`: un vector del plano local x-z, de donde salen z y luego
// y = z × x. Emparejando y_OS ≡ eje 2 y z_OS ≡ eje 3 la tríada de OpenSees es
// la MISMA (y = e3 × e1 = e2), y basta con escribir `vecxz = eje 3`. De ahí:
//
//   Iy de OpenSees  = momento sobre e2 = I22 = token 6 del `frame`
//   Iz de OpenSees  = momento sobre e3 = I33 = token 7 (el del canto)
//   Avy             = cortante según e2 = V2 = As2
//   Avz             = cortante según e3 = V3 = As3
import { parseCliCommands } from "../cli-modeler/cliModeler";

/**
 * Tríada de ejes locales de una barra en la convención CSI, la MISMA que
 * `getTransformationMatrixFrame` (hekatan-fem/src/utils/getTransformationMatrix.ts).
 * Si esta copia y aquella dejan de decir lo mismo, el .tcl exportado describe
 * una sección girada respecto a la que resolvió Hekatan.
 */
export function triadaCSI(a: number[], b: number[], angDeg = 0): number[][] {
  const d = [b[0] - a[0], b[1] - a[1], (b[2] ?? 0) - (a[2] ?? 0)];
  const Lb = Math.hypot(d[0], d[1], d[2]) || 1;
  const [l, m, n] = [d[0] / Lb, d[1] / Lb, d[2] / Lb];
  const D = Math.hypot(l, m);
  let e1: number[], e2: number[], e3: number[];
  if (D < 1e-9) {
    // Vertical: no hay plano vertical que oriente nada, CSI fija el eje 2 en +X.
    const s = n > 0 ? 1 : -1;
    e1 = [0, 0, s]; e2 = [1, 0, 0]; e3 = [0, s, 0];
  } else {
    e1 = [l, m, n];
    e2 = [(-l * n) / D, (-m * n) / D, D];
    e3 = [m / D, -l / D, 0];
  }
  if (Math.abs(angDeg) > 1e-12) {
    const r = (angDeg * Math.PI) / 180, ca = Math.cos(r), sa = Math.sin(r);
    const g2 = [0, 1, 2].map((i) => ca * e2[i] + sa * e3[i]);
    const g3 = [0, 1, 2].map((i) => -sa * e2[i] + ca * e3[i]);
    e2 = g2; e3 = g3;
  }
  return [e1, e2, e3];
}

/** Modelo CLI (nodes/frames/shells/supports) → script OpenSees Tcl con secciones por espesor. */
export function exportTclFromCli(cliText: string): string {
  const m = parseCliCommands(cliText);
  const L: string[] = [
    "# Modelo exportado desde Hekatan Struct Lineal (OpenSees Tcl)",
    "wipe",
    "model basic -ndm 3 -ndf 6",
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
  // ── ORIENTACION: un geomTransf por vector distinto ─────────────────────────
  // Antes habia UNO solo para todas las barras, `geomTransf Linear 1 1 0 0`, y
  // el comando `ang` no viajaba: 156 de las 723 barras del galpon van giradas
  // 90 grados (cordones en C, diagonales 2L) y al reimportar volvian a 0. Una
  // C 200x50 girada 90 pasa de I = 6.20e6 a 0.53e6 mm4, once veces mas floja,
  // asi que el modelo salia MAS RIGIDO: la flecha bajaba de -28.378 a -24.871
  // mm, un -12.4 %. Ademas ese vector (1,0,0) es paralelo al eje de cualquier
  // barra que corra segun +X, y ahi OpenSees no puede armar la triada.
  const transfOf = new Map<string, number>();
  let transfTag = 0;
  const transfDe = (f: any): number => {
    const a = m.nodes.get(f.nI), b = m.nodes.get(f.nJ);
    if (!a || !b) return 1;
    const e3 = triadaCSI(a, b, m.frameAngles.get(f.id) ?? 0)[2];
    const v = e3.map((x) => +x.toFixed(9));
    const key = v.join(",");
    if (!transfOf.has(key)) {
      transfOf.set(key, ++transfTag);
      L.push(`geomTransf Linear ${transfTag} ${v.join(" ")}`);
    }
    return transfOf.get(key)!;
  };

  let eid = 0;
  for (const f of m.frames) {
    // Las DOS inercias, no una. Antes se escribia `f.I` en los dos huecos (Iy e
    // Iz) y `J = f.I`, con `G = E/2.4` inventado. En una viga con canto las dos
    // inercias se diferencian ~15x, asi que el modelo reimportado salia mucho
    // mas flexible: el round-trip del galpon daba -2956 mm contra -278.
    const nu = f.nu ?? 0.2;
    const G = f.E / (2 * (1 + nu));
    const Iy = f.I;                       // token 6 del `frame` (I22), sobre e2
    const Iz = f.Iy ?? f.I;               // token 7 (I33, el del canto), sobre e3
    const J = f.J ?? 0.14 * Math.pow(Math.sqrt(f.A), 4);
    const tr = transfDe(f);
    // ── AREAS DE CORTANTE ────────────────────────────────────────────────────
    // `elasticBeamColumn` no tiene donde ponerlas: es Bernoulli, sin cortante.
    // El que si las lleva es `ElasticTimoshenkoBeam3d`. Sin ellas OpenSees (y
    // Hekatan al reimportar) supone rigidez a cortante infinita y el modelo
    // sale mas rigido — en el galpon otro 1.25 % de flecha.
    const as = m.frameShearAreas.get(f.id);
    if (as && as[0] > 0 && as[1] > 0) {
      // ElasticTimoshenkoBeam3d tag nI nJ E G A Jx Iy Iz Avy Avz transf
      L.push(`element ElasticTimoshenkoBeam3d ${++eid} ${f.nI} ${f.nJ} ${fmt(f.E)} ${fmt(G)} ${fmt(f.A)} ${fmt(J)} ${fmt(Iy)} ${fmt(Iz)} ${fmt(as[0])} ${fmt(as[1])} ${tr}`);
    } else {
      L.push(`element elasticBeamColumn ${++eid} ${f.nI} ${f.nJ} ${fmt(f.A)} ${fmt(f.E)} ${fmt(G)} ${fmt(J)} ${fmt(Iy)} ${fmt(Iz)} ${tr}`);
    }
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
      // La MISMA triada que el geomTransf de esta barra, giro `ang` incluido:
      // si la carga se proyectase sobre unos ejes y el elemento se orientase
      // con otros, el .tcl describiria una carga que no es la del modelo.
      const [ex, ey, ez] = triadaCSI(a, b, m.frameAngles.get(fid) ?? 0);
      const Wx = dot(w, ex), Wy = dot(w, ey), Wz = dot(w, ez);
      L.push(`  eleLoad -ele ${tag} -type -beamUniform ${fmt(Wy)} ${fmt(Wz)} ${fmt(Wx)}`);
    }
    L.push("}");
  }
  return L.join("\n") + "\n";
}

function dot(a: number[], b: number[]): number {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/** Script OpenSees Tcl → comandos CLI Modeler con PROPIEDADES (frame E A I ; shell t E). */
export function importTclToCli(tcl: string): string {
  const lines = tcl.split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith("#"));
  // 1ª pasada: secciones de shell → {E, t}
  const sec = new Map<number, { E: number; t: number }>();
  // ...y los geomTransf: su `vecxz` es lo unico que dice como esta girada la
  // seccion. Vienen antes que los elementos, pero se leen aparte porque un
  // mismo transf lo comparten muchas barras.
  const transf = new Map<number, number[]>();
  for (const line of lines) {
    const t = line.split(/\s+/);
    if (t[0].toLowerCase() === "section" && /membraneplate|platefiber/i.test(t[1] || "")) {
      // section ElasticMembranePlateSection <secTag> <E> <nu> <t> <rho>
      sec.set(int(t[2]), { E: parseFloat(t[3]), t: parseFloat(t[5]) });
    } else if (t[0].toLowerCase() === "geomtransf" && t.length >= 6) {
      // geomTransf Linear <tag> <vx> <vy> <vz>
      transf.set(int(t[2]), [parseFloat(t[3]), parseFloat(t[4]), parseFloat(t[5])]);
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
  const angDe = new Map<number, number>();                      // tag -> ang (grados)
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
          // La misma triada con la que se proyecto: la del geomTransf de esta
          // barra, con su giro. Deshacerla con los ejes sin girar devolveria una
          // carga rotada `ang` grados respecto a la original.
          const [ex, ey, ez] = triadaCSI(a, c, angDe.get(tag) ?? 0);
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
        const nI = int(t[3]), nJ = int(t[4]);
        // Los dos elementos de barra elastica de OpenSees NO llevan los datos en
        // el mismo orden, asi que se leen por separado:
        //   elasticBeamColumn        tag nI nJ A E G J  Iy Iz          transf
        //                                     5 6 7 8   9  10          11
        //   ElasticTimoshenkoBeam3d  tag nI nJ E G A Jx Iy Iz Avy Avz  transf
        //                                     5 6 7 8   9  10  11  12  13
        // Se leen las DOS inercias y tambien G y J: con la forma corta
        // (`frame id nI nJ E A I`) el CLI pone Iy = Iz y J por defecto, y una
        // viga con canto pierde su eje fuerte — el round-trip del galpon
        // daba -2956 mm contra -278.
        let p: { A: string; E: string; G: number; J: string; Iy: string; Iz: string;
                 tr: number; as?: [string, string] } | null = null;
        if (type.includes("timoshenko") && t.length >= 14) {
          p = { E: num(t[5]), G: parseFloat(t[6]), A: num(t[7]), J: num(t[8]),
                Iy: num(t[9]), Iz: num(t[10]), as: [num(t[11]), num(t[12])],
                tr: int(t[13]) };
        } else if (type.includes("elasticbeam") && t.length >= 11) {
          p = { A: num(t[5]), E: num(t[6]), G: parseFloat(t[7]), J: num(t[8]),
                Iy: num(t[9]), Iz: num(t[10]), tr: int(t[11]) };
        }
        if (p) {
          const nu = Number.isFinite(p.G) && p.G > 0
            ? +(parseFloat(p.E) / (2 * p.G) - 1).toFixed(6) : 0.2;
          // Iy de OpenSees (sobre el eje 2) es el token 6 del `frame` = I22;
          // Iz (sobre el 3) es el token 7 = I33, el del canto.
          out.push(`frame ${++fid} ${nI} ${nJ} ${p.E} ${p.A} ${p.Iy} ${p.Iz} ${p.J} ${nu} 2.45`);
          if (p.as) out.push(`as ${fid} ${p.as[0]} ${p.as[1]}`);
          // El giro `ang` se RECUPERA del vecxz: el exportador escribio ahi el
          // eje 3 ya girado, y el eje 3 sin girar sale de la geometria. Como
          //   e3' = -sen(a)*e2 + cos(a)*e3,
          // el angulo es atan2(-(v.e2), v.e3). Sin esto los 156 giros de 90
          // grados del galpon se perdian y la flecha caia un 12.4 %.
          const v = transf.get(p.tr), ca = coord.get(nI), cb = coord.get(nJ);
          if (v && ca && cb) {
            const [, e2, e3] = triadaCSI(ca, cb, 0);
            const g = (Math.atan2(-dot(v, e2), dot(v, e3)) * 180) / Math.PI;
            const gr = +g.toFixed(4);
            if (Math.abs(gr) > 1e-3) out.push(`ang ${fid} ${gr}`);
            angDe.set(int(t[2]), gr);
          }
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
