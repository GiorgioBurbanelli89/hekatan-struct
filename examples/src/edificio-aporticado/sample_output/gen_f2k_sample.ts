import { exportEdificioCimentacionF2k } from "../../shared/f2kCimentacionCompleta";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Datos del edificio default 3x3 vanos x 3 pisos con reacciones reales
const positions: [number, number][] = [
  [0,0],[5,0],[10,0],[0,5],[5,5],[10,5],[0,10],[5,10],[10,10]
];
// Reacciones tomadas de la consola del FEM Hekatan (modo cimentación):
const reactions = [
  { P: 6.534, Mx: 8.276, My: 22.421 },
  { P: 20.834, Mx: 0.003, My: 25.286 },
  { P: 35.622, Mx: -8.279, My: 22.467 },
  { P: 11.001, Mx: 9.224, My: 12.733 },
  { P: 20.987, Mx: 0.003, My: 14.397 },
  { P: 31.001, Mx: -9.227, My: 12.736 },
  { P: 12.643, Mx: 8.270, My: 3.437 },
  { P: 20.985, Mx: 0.003, My: 3.994 },
  { P: 29.357, Mx: -8.273, My: 3.437 },
];
const tipos = ['esq','lin','esq','lin','cen','lin','esq','lin','esq'];
const sizes: any = { esq: { Lz: 1.30, Bz: 1.30 }, lin: { Lz: 2.20, Bz: 2.20 }, cen: { Lz: 1.60, Bz: 1.60 } };

const xMax = 10, yMax = 10, vol = 0.30, tz = 0.30, bc = 0.40, ks = 1030, Df = 0.5;

const zapatas = positions.map(([x,y], i) => {
  const t = tipos[i];
  const sz = sizes[t];
  let oX=0, oY=0;
  if (t === 'esq') {
    oX = (x<xMax/2)?-(sz.Lz/2-vol):(sz.Lz/2-vol);
    oY = (y<yMax/2)?-(sz.Bz/2-vol):(sz.Bz/2-vol);
  } else if (t === 'lin') {
    if (Math.abs(x)<1e-3 || Math.abs(x-xMax)<1e-3) oX = (x<xMax/2)?-(sz.Lz/2-vol):(sz.Lz/2-vol);
    else if (Math.abs(y)<1e-3 || Math.abs(y-yMax)<1e-3) oY = (y<yMax/2)?-(sz.Bz/2-vol):(sz.Bz/2-vol);
  }
  return {
    xC: x-oX, yC: y-oY, xCol: x, yCol: y,
    Lz: sz.Lz, Bz: sz.Bz, tz, bc,
    P_dead_kN: reactions[i].P,
    Mx_dead_kNm: reactions[i].Mx,
    My_dead_kNm: reactions[i].My,
    label: i,
  };
});

const vigasAmarre: any[] = [];
const va_h = 0.40, va_b = 0.25, zVA = -Df;
for (const yRow of [0, 5, 10]) {
  const row = positions.filter(p => p[1] === yRow).sort((a,b)=>a[0]-b[0]);
  for (let i=0;i<row.length-1;i++) vigasAmarre.push({ x1:row[i][0], y1:row[i][1], x2:row[i+1][0], y2:row[i+1][1], h:va_h, b:va_b, z:zVA });
}
for (const xCol of [0, 5, 10]) {
  const col = positions.filter(p => p[0] === xCol).sort((a,b)=>a[1]-b[1]);
  for (let i=0;i<col.length-1;i++) vigasAmarre.push({ x1:col[i][0], y1:col[i][1], x2:col[i+1][0], y2:col[i+1][1], h:va_h, b:va_b, z:zVA });
}

const f2k = exportEdificioCimentacionF2k({ zapatas, vigasAmarre, ks_kNm3: ks, Z: -Df });
const outPath = path.join(__dirname, "cimentacion_edificio_9zapatas_12vigas.f2k");
fs.writeFileSync(outPath, f2k);
console.log("F2K escrito:", outPath);
console.log("Tamano:", f2k.length, "bytes");
console.log("Lineas:", f2k.split('\n').length);
console.log("POC count (debe ser 1):", (f2k.match(/TABLE:\s+"POINT OBJECT CONNECTIVITY"/g) || []).length);
console.log("Joints:", (f2k.match(/UniqueName=\d+\s+"Is Auto Point"/g) || []).length);
console.log("Vigas (VA):", (f2k.match(/UniqueName=VA\d+\s+UniquePtI/g) || []).length);
