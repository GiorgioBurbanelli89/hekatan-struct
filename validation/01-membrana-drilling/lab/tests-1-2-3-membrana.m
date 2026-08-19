% =====================================================================
%  Los tests del paper ITW 1990 en Hekatan Lab
%
%  Ibrahimbegovic, Taylor & Wilson, "A robust quadrilateral membrane
%  finite element with drilling degrees of freedom", IJNME 30:445-457.
%
%  Por que aqui: el elemento ya esta en el motor C++/WASM de Hekatan
%  Struct y en su motor de Python. Este es un TERCER motor independiente
%  -otro lenguaje, otro interprete, otro algebra lineal- escrito desde el
%  paper. Si los tres dan el mismo numero, el numero es del elemento y no
%  de una implementacion.
%
%  El test que manda es el I: es un patch test de ORDEN SUPERIOR, o sea
%  que con malla regular la respuesta es EXACTA (flecha 1.5, giro 0.6),
%  no aproximada. ETABS 22 y SAP2000 24 lo dan clavado sobre esta misma
%  malla. El drilling que tenia Hekatan antes daba -1.70 % y -6.34 %.
% =====================================================================

GAMMA_FAC = 0.4;   % gamma/mu. Medido de ETABS, no del paper (que usa 1.0)

% --- TEST I: patch test de orden superior (Fig.3 / Tabla I) ----------
% Viga l=10 h=1 E=100 nu=0 t=1, 6 elementos, momento unidad en cada
% extremo aplicado como PAR DE FUERZAS P=1 arriba y abajo.
% Apoyos MINIMOS: asi se mide el elemento, no las condiciones de borde.
L = 10; H = 1; E1 = 100; nu1 = 0; t1 = 1; P = 1; nx = 6;
[nod, elm] = itw_malla(0, 0, L, 0, L, H, 0, H, nx, 1);
nj = size(nod, 1);
K = itw_ensambla(nod, elm, E1, nu1, t1, GAMMA_FAC);
F = zeros(3*nj, 1);
iA = itw_nudo(nod, 0, 1); iB = itw_nudo(nod, 0, 0);
iC = itw_nudo(nod, L, 1); iD = itw_nudo(nod, L, 0);
F(3*iA-2) = F(3*iA-2) + P;   F(3*iB-2) = F(3*iB-2) - P;
F(3*iC-2) = F(3*iC-2) - P;   F(3*iD-2) = F(3*iD-2) + P;
suj = [3*iB-2, 3*iB-1, 3*iD-1];
U = itw_resuelve(K, F, suj, 3*nj);
im1 = itw_nudo(nod, L/2, 0); im2 = itw_nudo(nod, L/2, 1);
flecha = abs(0.5*(U(3*im1-1) + U(3*im2-1)));
giro   = abs(0.5*(U(3*iD) + U(3*iC)));
fprintf('TEST I   flecha = %.6f   (exacto 1.5)\n', flecha);
fprintf('TEST I   giro   = %.6f   (exacto 0.6)\n', giro);

% --- TEST II: cantilever corto (Fig.4 / Tabla II) --------------------
% l=48 h=12 E=30000 nu=0.25 V=40 t=1. Exacto 0.3553.
% El empotramiento sujeta u, v Y el drilling, como el .cpd.
Lc = 48; Hc = 12; Ec = 30000; nuc = 0.25; tc = 1; V = 40;
na = 16; nb = 4;
[nod2, elm2] = itw_malla(0, 0, Lc, 0, Lc, Hc, 0, Hc, na, nb);
nj2 = size(nod2, 1);
K2 = itw_ensambla(nod2, elm2, Ec, nuc, tc, GAMMA_FAC);
F2 = zeros(3*nj2, 1);
suj2 = [];
for j = 0 : nb
  q = itw_nudo(nod2, 0, j*Hc/nb);
  suj2 = [suj2, 3*q-2, 3*q-1, 3*q];
end
% carga trapezoidal: medio peso en los dos nudos de los extremos
dz = Hc/nb;
for j = 0 : nb
  q = itw_nudo(nod2, Lc, j*dz);
  w = dz;
  if j == 0 || j == nb
    w = dz/2;
  end
  F2(3*q-1) = F2(3*q-1) + V*w/Hc;
end
U2 = itw_resuelve(K2, F2, suj2, 3*nj2);
q1 = itw_nudo(nod2, Lc, 0); q2 = itw_nudo(nod2, Lc, Hc);
puntaII = abs(0.5*(U2(3*q1-1) + U2(3*q2-1)));
fprintf('TEST II  flecha punta = %.6f   (exacto 0.3553)\n', puntaII);

% --- TEST III: membrana de Cook (Fig.5 / Tabla III) ------------------
% Trapecio (0,0)-(48,44)-(48,60)-(0,44), E=1 nu=1/3 t=1 V=1.
% Se lee en C=(48,52), el CENTRO del borde cargado (no la esquina).
Ek = 1; nuk = 1/3; tk = 1; Vk = 1; nk = 8;
[nod3, elm3] = itw_malla(0, 0, 48, 44, 48, 60, 0, 44, nk, nk);
nj3 = size(nod3, 1);
K3 = itw_ensambla(nod3, elm3, Ek, nuk, tk, GAMMA_FAC);
F3 = zeros(3*nj3, 1);
suj3 = [];
for j = 0 : nk
  q = j*(nk+1) + 1;                 % columna x = 0
  suj3 = [suj3, 3*q-2, 3*q-1, 3*q];
end
zs = zeros(nk+1, 1);
for j = 0 : nk
  zs(j+1) = nod3(j*(nk+1) + nk + 1, 2);
end
pw = zeros(nk+1, 1);
for j = 1 : nk
  d = zs(j+1) - zs(j);
  pw(j) = pw(j) + d/2;
  pw(j+1) = pw(j+1) + d/2;
end
pw = pw/sum(pw)*Vk;
for j = 0 : nk
  q = j*(nk+1) + nk + 1;
  F3(3*q-1) = F3(3*q-1) + pw(j+1);
end
U3 = itw_resuelve(K3, F3, suj3, 3*nj3);
jc = 1; dmin = 1e9;
for j = 0 : nk
  dd = abs(zs(j+1) - 52);
  if dd < dmin
    dmin = dd; jc = j;
  end
end
qc = jc*(nk+1) + nk + 1;
cookC = U3(3*qc-1);
fprintf('TEST III Cook en C(48,52) = %.4f   (referencia 23.91)\n', cookC);

% --- Modos de energia nula: tienen que ser 3 -------------------------
% Con Gauss 2x2 salen 4 (un mecanismo). Es la comprobacion que evita
% arreglar el bloqueo rompiendo el elemento.
Ke = itw_k([0 0; 1 0; 1 1; 0 1], 1, 0.2, 1, GAMMA_FAC);
ev = sort(abs(eig(Ke)));
nulos = sum(ev < 1e-9*max(ev));
fprintf('modos de energia nula = %d   (tienen que ser 3)\n', nulos);


% =====================================================================
%  FUNCIONES
% =====================================================================

function [nod, elm] = itw_malla(x1, y1, x2, y2, x3, y3, x4, y4, na, nb)
  % Malla na x nb sobre el cuadrilatero de 4 esquinas, mapeo bilineal.
  nod = zeros((na+1)*(nb+1), 2);
  for j = 0 : nb
    for i = 0 : na
      a = i/na; b = j/nb;
      N1 = (1-a)*(1-b); N2 = a*(1-b); N3 = a*b; N4 = (1-a)*b;
      k = j*(na+1) + i + 1;
      nod(k,1) = N1*x1 + N2*x2 + N3*x3 + N4*x4;
      nod(k,2) = N1*y1 + N2*y2 + N3*y3 + N4*y4;
    end
  end
  elm = zeros(na*nb, 4);
  for j = 0 : nb-1
    for i = 0 : na-1
      e = j*na + i + 1;
      elm(e,1) = j*(na+1) + i + 1;
      elm(e,2) = j*(na+1) + i + 2;
      elm(e,3) = (j+1)*(na+1) + i + 2;
      elm(e,4) = (j+1)*(na+1) + i + 1;
    end
  end
end

function k = itw_nudo(nod, x, y)
  % Indice del nudo que cae en (x,y).
  k = 1; dmin = 1e18;
  for i = 1 : size(nod,1)
    d = (nod(i,1)-x)^2 + (nod(i,2)-y)^2;
    if d < dmin
      dmin = d; k = i;
    end
  end
end

function K = itw_ensambla(nod, elm, E, nu, t, gf)
  nj = size(nod,1);
  K = zeros(3*nj, 3*nj);
  for e = 1 : size(elm,1)
    q = elm(e,:);
    pts = [nod(q(1),:); nod(q(2),:); nod(q(3),:); nod(q(4),:)];
    Ke = itw_k(pts, E, nu, t, gf);
    g = zeros(1,12);
    for i = 1 : 4
      g(3*i-2) = 3*q(i)-2; g(3*i-1) = 3*q(i)-1; g(3*i) = 3*q(i);
    end
    K(g,g) = K(g,g) + Ke;
  end
end

function U = itw_resuelve(K, F, suj, n)
  % Apoyos por ELIMINACION, no por penalizacion: asi no hay que elegir
  % ningun numero grande y la matriz no se ensucia.
  libre = setdiff(1:n, suj);
  U = zeros(n,1);
  U(libre) = K(libre,libre) \ F(libre);
end

function K = itw_k(pts, E, nu, t, gamma_fac)
  % Rigidez 12x12 del elemento ITW. GDL [u v tz] por nudo.
  %   (33) K = INT [B G]' C [B G] dO   con Gauss 3x3
  %   (38) P = gamma INT {b;g}<b;g> dO con UN SOLO PUNTO
  % Integrar K completo y sumar P de un punto es lo que quita los modos
  % de energia nula; con 2x2 el elemento se queda con un mecanismo.
  X = pts(:,1); Y = pts(:,2);
  D = E*t/(1-nu^2) * [1 nu 0; nu 1 0; 0 0 (1-nu)/2];
  rn = [-1 1 1 -1]; sn = [-1 -1 1 1];
  sig = [2 3 4 1]; ant = [4 1 2 3];
  cx = zeros(4,1); cy = zeros(4,1);
  for i = 1 : 4
    cx(i) =  (Y(sig(i)) - Y(i))/8;      % (l/8)*n1 con n = (dy,-dx)/l
    cy(i) = -(X(sig(i)) - X(i))/8;      % (l/8)*n2
  end
  g3 = [-sqrt(3/5) 0 sqrt(3/5)];
  w3 = [5/9 8/9 5/9];
  K14 = zeros(14,14);
  cdNx = zeros(4,1); cdNy = zeros(4,1); cgt2 = zeros(4,1);
  cgt3 = zeros(4,1); cNN = zeros(4,1); cdJ = 0;
  for ig = 1 : 3
    for jg = 1 : 3
      rr = g3(ig); ss = g3(jg); ww = w3(ig)*w3(jg);
      dr = zeros(4,1); ds = zeros(4,1); NN = zeros(4,1);
      for i = 1 : 4
        dr(i) = 0.25*rn(i)*(1 + sn(i)*ss);
        ds(i) = 0.25*sn(i)*(1 + rn(i)*rr);
        NN(i) = 0.25*(1 + rn(i)*rr)*(1 + sn(i)*ss);
      end
      J11 = dr'*X; J12 = dr'*Y; J21 = ds'*X; J22 = ds'*Y;
      dJ = J11*J22 - J12*J21;
      Ji11 = J22/dJ; Ji12 = -J12/dJ; Ji21 = -J21/dJ; Ji22 = J11/dJ;
      dNx = Ji11*dr + Ji12*ds;
      dNy = Ji21*dr + Ji22*ds;
      % funciones de lado (serendipity), ecs. (22)-(23), con el 1/2 dentro
      nsr = 0.5*[-2*rr*(1-ss); 1-ss^2; -2*rr*(1+ss); -(1-ss^2)];
      nss = 0.5*[-(1-rr^2); -2*ss*(1+rr); 1-rr^2; -2*ss*(1-rr)];
      NSx = Ji11*nsr + Ji12*nss;
      NSy = Ji21*nsr + Ji22*nss;
      % burbuja jerarquica NB9 = (1-r^2)(1-s^2), ec. (24)
      nbr = -2*rr*(1-ss^2); nbs = -2*ss*(1-rr^2);
      dNBx = Ji11*nbr + Ji12*nbs;
      dNBy = Ji21*nbr + Ji22*nbs;
      gt1 = zeros(4,1); gt2 = zeros(4,1);
      gt3 = zeros(4,1); gt4 = zeros(4,1);
      for i = 1 : 4
        p = ant(i);
        gt1(i) = NSx(p)*cx(p) - NSx(i)*cx(i);
        gt2(i) = NSy(p)*cx(p) - NSy(i)*cx(i);
        gt3(i) = NSx(p)*cy(p) - NSx(i)*cy(i);
        gt4(i) = NSy(p)*cy(p) - NSy(i)*cy(i);
      end
      B = zeros(3,14);
      for i = 1 : 4
        B(1,3*i-2) = dNx(i);
        B(2,3*i-1) = dNy(i);
        B(3,3*i-2) = dNy(i);
        B(3,3*i-1) = dNx(i);
        B(1,3*i)   = gt1(i);
        B(2,3*i)   = gt4(i);
        B(3,3*i)   = gt2(i) + gt3(i);
      end
      B(1,13) = dNBx; B(3,13) = dNBy;
      B(2,14) = dNBy; B(3,14) = dNBx;
      K14 = K14 + ww*abs(dJ)*(B'*D*B);
      if ig == 2 && jg == 2
        cdNx = dNx; cdNy = dNy; cgt2 = gt2; cgt3 = gt3;
        cNN = NN; cdJ = abs(dJ);
        cdNBx = dNBx; cdNBy = dNBy;
      end
    end
  end
  % P, ec. (38), de UN SOLO PUNTO: gamma * Omega * res*res'
  mu = E/(2*(1+nu));
  res = zeros(14,1);
  for i = 1 : 4
    res(3*i-2) = -0.5*cdNy(i);
    res(3*i-1) =  0.5*cdNx(i);
    res(3*i)   =  0.5*(cgt3(i) - cgt2(i)) - cNN(i);
  end
  res(13) = -0.5*cdNBy;
  res(14) =  0.5*cdNBx;
  K14 = K14 + (gamma_fac*mu)*t*4*cdJ*(res*res');
  % condensacion estatica de la burbuja
  Kuu = K14(1:12,1:12);
  Kab = K14(1:12,13:14);
  Kbb = K14(13:14,13:14);
  K = Kuu - Kab*(Kbb\Kab');
end
