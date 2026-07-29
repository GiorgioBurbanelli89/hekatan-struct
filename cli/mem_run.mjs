#!/usr/bin/env node
/** Barrido de memoria WASM: busca el umbral donde _deform/_modal revientan los 2 GB. */
import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { writeFileSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROBE = join(__dirname, "mem_probe.mjs");

function run(args) {
  return new Promise(res => {
    const ch = spawn(process.execPath, ["--max-old-space-size=4096", PROBE, ...args.map(String)],
      { stdio: ["ignore", "pipe", "pipe"] });
    let out = "", err = "";
    ch.stdout.on("data", d => out += d);
    ch.stderr.on("data", d => err += d);
    const to = setTimeout(() => ch.kill("SIGKILL"), 300000);
    ch.on("close", code => {
      clearTimeout(to);
      const line = out.trim().split("\n").filter(l => l.startsWith("{")).pop();
      if (line) { try { return res(JSON.parse(line)); } catch {} }
      const all = out + err;
      const oom = /Cannot enlarge memory, requested (\d+) bytes/.exec(all);
      res({ nbx: +args[0], nby: +args[1], nF: +args[2], ms: +args[3], fase: args[4],
            ok: false,
            FAIL: oom ? `OOM WASM: pidió ${(+oom[1] / 1073741824).toFixed(2)} GB (límite 2.00 GB)`
                      : (code === null ? "TIMEOUT" : `EXIT ${code}`),
            aborted: /Aborted\(/.test(all) });
    });
  });
}

// display: malla p.ms (0.75 default, 0.5 el más fino del slider)
// modal:   malla 1.0 fija (método 3) — el cap de 8000 GDL de testM.ts lo bloquea antes,
//          así que acá medimos qué pasaría SIN cap, para dimensionar el cap correcto.
const cases = [];
for (const [nbx, nby, nF] of [[3,3,4],[4,4,4],[4,4,8],[5,5,8],[6,6,6],[6,6,8]])
  cases.push([nbx, nby, nF, 0.75, "display"], [nbx, nby, nF, 0.75, "modal"]);
for (const [nbx, nby, nF] of [[4,4,6],[5,5,6],[6,6,8],[6,6,4]])
  cases.push([nbx, nby, nF, 0.5, "display"]);

const results = [];
console.log(["nbx","nby","nF","ms","fase","nodos","GDL","shells","heapMB","ms","T1","estado"]
  .map((h,i)=>h.padStart(i<4?4:(i===4?8:9))).join(" "));
for (const c of cases) {
  const r = await run(c);
  results.push(r);
  console.log([r.nbx, r.nby, r.nF, r.ms, r.fase, r.nodes ?? "-", r.dof ?? "-", r.shells ?? "-",
    r.heap_pico_MB ?? "-", r.ms_elapsed ?? "-", r.T1 ?? "-", r.ok ? "ok" : r.FAIL]
    .map((v,i)=>String(v).padStart(i<4?4:(i===4?8:9))).join(" "));
}
writeFileSync(join(__dirname, "mem_results.json"), JSON.stringify(results, null, 1));
console.log("\n→ cli/mem_results.json");
