# -*- coding: utf-8 -*-
"""NUESTRO vector de cargas de una presion unitaria: f_i = int N_i dA.
Con las N bilineales estandar (que es lo que usa el motor), 2x2 Gauss."""
import numpy as np
G=1/np.sqrt(3); GP=[(-G,-G),(G,-G),(G,G),(-G,G)]
def N(xi,et):
    return np.array([0.25*(1-xi)*(1-et),0.25*(1+xi)*(1-et),
                     0.25*(1+xi)*(1+et),0.25*(1-xi)*(1+et)])
def dN(xi,et):
    return (np.array([-0.25*(1-et),0.25*(1-et),0.25*(1+et),-0.25*(1+et)]),
            np.array([-0.25*(1-xi),-0.25*(1+xi),0.25*(1+xi),0.25*(1-xi)]))
def vector(pts,q=1.0,ng=2):
    x=np.array([p[0] for p in pts]); y=np.array([p[1] for p in pts])
    if ng==2: pts_g=[(a,b,1.0) for a,b in GP]
    else:
        g=np.sqrt(3/5); w=[5/9,8/9,5/9]
        pts_g=[(a,b,w[i]*w[j]) for i,a in enumerate([-g,0,g]) for j,b in enumerate([-g,0,g])]
    f=np.zeros(4); A=0.0
    for xi,et,wt in pts_g:
        dx,de=dN(xi,et)
        J=np.array([[dx@x,dx@y],[de@x,de@y]]); dJ=np.linalg.det(J)
        f += N(xi,et)*q*dJ*wt; A += dJ*wt
    return f,A
def area(p):
    a=0.0
    for i in range(len(p)):
        j=(i+1)%len(p); a+=p[i][0]*p[j][1]-p[j][0]*p[i][1]
    return abs(a)/2
CASOS=[("cuad",[(0,0),(1,0),(1,1),(0,1)]),
       ("rect",[(0,0),(1,0),(1,0.5),(0,0.5)]),
       ("paral",[(0,0),(0.8,0),(1.0,0.9),(0.2,0.9)]),
       ("trape",[(0,0),(1.0,0),(0.8,0.9),(0.15,1.0)]),
       ("irreg",[(0,0),(0.9,0.1),(1.1,0.95),(0.05,0.8)])]
print("NUESTRO reparto de una presion q=1 (N bilineales, 2x2 Gauss)")
print(" %-7s %9s %9s   %s" % ("caso","area","sum f","f_i / (q*A)  — la fraccion que va a cada nudo"))
for nom,p in CASOS:
    f,A=vector(p); Ar=area(p)
    print(" %-7s %9.6f %9.6f   %s   (area exacta %.6f, dif %.2e)"
          % (nom, A, f.sum(), "  ".join("%.6f"%v for v in f/Ar), Ar, abs(A/Ar-1)))
print("\n momentos nodales: CERO en los 4 nudos, en todos los casos")
print(" (la presion solo trabaja contra w; si ETABS reparte momentos, su N es otra)")
print("\n y con 3x3 Gauss, para ver si el 2x2 basta:")
for nom,p in CASOS:
    f2,_=vector(p); f3,_=vector(p,ng=3)
    print("   %-7s ||f3-f2||/||f2|| = %.3e" % (nom, np.linalg.norm(f3-f2)/np.linalg.norm(f2)))
