import { resolverHeks } from "./lib/heks.mjs";
const r = await resolverHeks("tests/datos/_w2.heks");
let rz = 0; for (const [, v] of r.deformOutputs.reactions ?? []) rz += v[2] || 0;
console.log(`HEKATAN DEAD = ${rz.toFixed(4)} kN`);
console.log(`   losa teorica 326.168 x 0.12 x 24.0 = ${(326.168*0.12*24).toFixed(4)}`);
console.log(`   + barras 129.004 = ${(326.168*0.12*24+129.004).toFixed(4)}`);
