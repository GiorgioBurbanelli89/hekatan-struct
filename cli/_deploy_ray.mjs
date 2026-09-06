import puppeteer from "puppeteer";
const nav = await puppeteer.launch({ headless: "new", args: ["--no-sandbox", "--disable-setuid-sandbox", "--enable-unsafe-swiftshader", "--use-angle=swiftshader"] });
const p = await nav.newPage(); await p.setViewport({ width: 1500, height: 1000 });
await p.goto(`https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=edificio-dual`, { waitUntil: "networkidle2", timeout: 120000 });
await new Promise((r) => setTimeout(r, 8000));
const r = await p.evaluate(() => {
  const s = window.__hekatanSettings?.(); s.shellResults.val = "vonMises"; s.deformedShape.val = false;
  const ctx = [...document.querySelectorAll("div")].map(d => d.__ctx).find(Boolean); ctx.render?.(); const cam = ctx.camera; cam.updateMatrixWorld();
  let cm = null; ctx.scene.traverse((o) => { if (o.name === "__hekatan_shell_colormap") cm = o; });
  const P = cm.geometry.attributes.position, S = cm.geometry.attributes.scalar, I = cm.geometry.index.array; const N = window.__hekatanStates.nodes.val; const E = window.__hekatanStates.elements.val;
  const inv = (m) => { const e = m.elements; const out = new Array(16); const a00=e[0],a01=e[1],a02=e[2],a03=e[3],a10=e[4],a11=e[5],a12=e[6],a13=e[7],a20=e[8],a21=e[9],a22=e[10],a23=e[11],a30=e[12],a31=e[13],a32=e[14],a33=e[15];
    const b00=a00*a11-a01*a10,b01=a00*a12-a02*a10,b02=a00*a13-a03*a10,b03=a01*a12-a02*a11,b04=a01*a13-a03*a11,b05=a02*a13-a03*a12,b06=a20*a31-a21*a30,b07=a20*a32-a22*a30,b08=a20*a33-a23*a30,b09=a21*a32-a22*a31,b10=a21*a33-a23*a31,b11=a22*a33-a23*a32;
    let det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06; det=1/det;
    out[0]=(a11*b11-a12*b10+a13*b09)*det;out[1]=(a02*b10-a01*b11-a03*b09)*det;out[2]=(a31*b05-a32*b04+a33*b03)*det;out[3]=(a22*b04-a21*b05-a23*b03)*det;out[4]=(a12*b08-a10*b11-a13*b07)*det;out[5]=(a00*b11-a02*b08+a03*b07)*det;out[6]=(a32*b02-a30*b05-a33*b01)*det;out[7]=(a20*b05-a22*b02+a23*b01)*det;out[8]=(a10*b10-a11*b08+a13*b06)*det;out[9]=(a01*b08-a00*b10-a03*b06)*det;out[10]=(a30*b04-a31*b02+a33*b00)*det;out[11]=(a21*b02-a20*b04-a23*b00)*det;out[12]=(a11*b07-a10*b09-a12*b06)*det;out[13]=(a00*b09-a01*b07+a02*b06)*det;out[14]=(a31*b01-a30*b03-a32*b00)*det;out[15]=(a20*b03-a21*b01+a22*b00)*det; return out; };
  const mul = (e, v) => { const w = e[3]*v[0]+e[7]*v[1]+e[11]*v[2]+e[15]; return [(e[0]*v[0]+e[4]*v[1]+e[8]*v[2]+e[12])/w,(e[1]*v[0]+e[5]*v[1]+e[9]*v[2]+e[13])/w,(e[2]*v[0]+e[6]*v[1]+e[10]*v[2]+e[14])/w]; };
  const vp = cam.projectionMatrix.clone().multiply(cam.matrixWorldInverse); const ivp = inv(vp);
  const res = {};
  for (const [nom, i] of Object.entries({ muroY0: 1399, muroXL: 1678, losaTop: 76 })) {
    const pr = mul(vp.elements, [P.getX(i), P.getY(i), P.getZ(i)]); const near = mul(ivp, [pr[0], pr[1], -1]), far = mul(ivp, [pr[0], pr[1], 1]);
    const d = [far[0]-near[0], far[1]-near[1], far[2]-near[2]]; let best = null;
    for (let t = 0; t < I.length; t += 3) { const a = I[t], b = I[t+1], c = I[t+2]; const A=[P.getX(a),P.getY(a),P.getZ(a)],B=[P.getX(b),P.getY(b),P.getZ(b)],C=[P.getX(c),P.getY(c),P.getZ(c)];
      const e1=[B[0]-A[0],B[1]-A[1],B[2]-A[2]], e2=[C[0]-A[0],C[1]-A[1],C[2]-A[2]]; const h=[d[1]*e2[2]-d[2]*e2[1], d[2]*e2[0]-d[0]*e2[2], d[0]*e2[1]-d[1]*e2[0]]; const det=e1[0]*h[0]+e1[1]*h[1]+e1[2]*h[2]; if (Math.abs(det)<1e-12) continue; const f=1/det; const sv=[near[0]-A[0],near[1]-A[1],near[2]-A[2]]; const u=f*(sv[0]*h[0]+sv[1]*h[1]+sv[2]*h[2]); if (u<0||u>1) continue; const q=[sv[1]*e1[2]-sv[2]*e1[1], sv[2]*e1[0]-sv[0]*e1[2], sv[0]*e1[1]-sv[1]*e1[0]]; const v=f*(d[0]*q[0]+d[1]*q[1]+d[2]*q[2]); if (v<0||u+v>1) continue; const tt=f*(e2[0]*q[0]+e2[1]*q[1]+e2[2]*q[2]); if (tt>0 && (!best || tt<best.tt)) best = { tt, tri: t/3, idx: [a,b,c] }; }
    res[nom] = best ? { tri: best.tri, idx: best.idx, xyz: best.idx.map(k => N[k].map(v => +v.toFixed(2))), scal: best.idx.map(k => +S.getX(k).toFixed(3)), esperadoNudo: +S.getX(i).toFixed(3) } : null;
  }
  return { nTri: I.length / 3, nElem4: E.filter(e => e.length === 4).length, res };
});
console.log(JSON.stringify(r)); await nav.close();
