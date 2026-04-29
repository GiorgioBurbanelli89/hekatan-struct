// Test: usar el exportador original de zapata-aislada (que funciona)
// para generar UN F2K y verificar que SAFE lo corre OK.
import { exportZapataF2k } from "../../zapata-aislada/f2kExporter";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const f2k = exportZapataF2k({
  Lz: 1.60, Bz: 1.60, tz: 0.30,
  bc: 0.40,
  ks_kNm3: 1030,
  P_dead_kN: 20.987,
  P_live_kN: 0,
  Mx_dead_kNm: 0.003,
  My_dead_kNm: 14.397,
});
const out = path.join(__dirname, "test_original_zapata.f2k");
fs.writeFileSync(out, f2k);
console.log("OK:", out);
console.log("Tamaño:", f2k.length, "bytes");
