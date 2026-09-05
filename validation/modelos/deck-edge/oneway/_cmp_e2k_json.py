# python _cmp_e2k_json.py etabs.json dump.json  -> peor % del maximo (nudos con barra), emparejando por coordenadas
import json, sys, numpy as np
J=json.load(open(sys.argv[1])); D=json.load(open(sys.argv[2])); H=D['deformations']; N=D['nodes']
k4=lambda x,y,z: ",".join("%.4f"%round(v,4) for v in (x,y,z))
por={k4(p['x'],p['y'],p['z']):str(p['n']) for p in J.get('puntos',[])}; E=J.get('disp_nudos',{})
fr=set()
for el in D['elements']:
    if len(el)==2: fr.update(el)
umax=max(abs(v) for u in H.values() for v in u[:3]); rows=[]; sin=0
for i in range(len(N)):
    if i not in fr: continue
    nm=por.get(k4(*N[i]))
    if nm is None or nm not in E: sin+=1; continue
    e=E[nm]; h=H[str(i)]; rows.append((max(abs(e[c]-h[c])/umax*100 for c in range(3)), i, tuple(round(v,2) for v in N[i]), [round(v*1e3,4) for v in h[:3]], [round(v*1e3,4) for v in e[:3]]))
rows.sort(reverse=True)
print("%s vs %s: peor %.4f %% nudo %s hek %s etabs %s | mediana %.4f | %d nudos, %d sin pareja"%(sys.argv[1],sys.argv[2],rows[0][0],rows[0][2],rows[0][3],rows[0][4],np.median([r[0] for r in rows]),len(rows),sin))
