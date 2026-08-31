# -*- coding: utf-8 -*-
"""La K del elemento de OpenSees, la MISMA celda que ETABS y Abaqus.
OpenSees es ABIERTO: si uno de sus shells coincide con ETABS, la formulacion
esta LEIBLE en su fuente, no hay que deducir nada.
`integrator GimmeMCK 0 0 1` hace que la matriz "A" del sistema sea la K; con un
solo elemento y todos los GDL libres, la K global ES la del elemento."""
import os, numpy as np
import openseespy.opensees as ops
SP=os.path.dirname(os.path.abspath(__file__))
def K_de(elem):
    ops.wipe()
    ops.model('basic','-ndm',3,'-ndf',6)
    for i,(x,y) in enumerate([(0,0),(1,0),(1,1),(0,1)],1):
        ops.node(i,float(x),float(y),0.0)
    ops.section('ElasticMembranePlateSection',1,2.2e7,0.0,0.20,0.0)
    ops.element(elem,1,1,2,3,4,1)
    ops.system('FullGeneral'); ops.numberer('Plain'); ops.constraints('Plain')
    ops.integrator('GimmeMCK',0.0,0.0,1.0)
    ops.analysis('Transient'); ops.analyze(1,0.0)
    p=os.path.join(SP,'K_%s.txt'%elem)
    ops.printA('-file',p)
    v=np.array([float(z) for z in open(p).read().split()])
    n=int(round(np.sqrt(v.size)))
    ops.wipe()
    return v.reshape(n,n)
for el in ('ShellMITC4','ShellDKGQ','ShellNLDKGQ'):
    try:
        K=K_de(el)
        print("%-12s -> matriz %dx%d   ||K||=%.6g" % (el,K.shape[0],K.shape[1],np.linalg.norm(K)))
        np.save(os.path.join(SP,'Kops_%s.npy'%el),K)
    except Exception as e:
        print("%-12s -> ERROR: %s" % (el,str(e)[:90]))
