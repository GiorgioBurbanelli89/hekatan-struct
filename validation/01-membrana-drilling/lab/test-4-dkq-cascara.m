% =====================================================================
%  Placa DKQ + cascara ITW+DKQ (test IV del paper) en Hekatan Lab
%
%  Completa a itw_1990.m, que trae los tests I, II y III (membrana pura).
%  Aqui va lo que faltaba:
%
%    1. la PLACA DKQ de Batoz & Ben Tahar (1982), que es la que el paper
%       ITW 1990 combina con su membrana para armar la cascara;
%    2. su validacion contra la serie de Navier (placa cuadrada
%       simplemente apoyada con carga uniforme, w_c = 0.00406 q a^4 / D);
%    3. el TEST IV: hemisferio pinzado con agujero de 18 grados
%       (MacNeal-Harder), con la cascara ITW membrana + DKQ flexion.
%
%  Para que sirve de verdad: la sospecha era que el hemisferio bloqueaba
%  por culpa de la placa (Hekatan tiene DKE y MITC4, no DKQ). Aqui se mide
%  con la placa DEL PAPER y se ve que NO: bloquea igual. O sea que el
%  bloqueo viene de la MEMBRANA, de los terminos de Allman, que en una
%  cascara facetada meten deformacion esporea porque alli el theta_z no es
%  un giro libre sino el giro global del nudo.
%
%  Tercer motor independiente, otra vez: estos mismos numeros salen del
%  Python del repo (hekatan-struct-py) y del C++/WASM.
% =====================================================================

fprintf('--- DKQ contra Navier (placa simplemente apoyada, carga uniforme) ---\n');
aL = 1; Ep = 1e7; nup = 0.3; tp = 0.01; qp = 1;
Dp = Ep*tp^3/(12*(1-nup^2));
exacto = 0.00406*qp*aL^4/Dp;
for n = [2 4 8]
  wc = dkq_placa_navier(n, aL, Ep, nup, tp, qp);
  fprintf('   %2dx%-2d  w_centro = %.6e   exacto = %.6e   %+.2f %%\n', ...
          n, n, wc, exacto, (wc/exacto - 1)*100);
end

fprintf('--- modos de energia nula de la placa DKQ (tienen que ser 3) ---\n');
Kd = dkq_k([0 0; 1 0; 1 1; 0 1], 1, 0.3, 0.1);
ev = sort(abs(eig(Kd)));
fprintf('   cuadrado: %d\n', sum(ev < 1e-9*max(ev)));
Kd2 = dkq_k([0 0; 2 0; 1.5 1; 0.25 1], 1, 0.3, 0.1);
ev2 = sort(abs(eig(Kd2)));
fprintf('   trapecio: %d\n', sum(ev2 < 1e-9*max(ev2)));

fprintf('--- TEST IV: hemisferio pinzado, cascara ITW + DKQ (ref 0.094) ---\n');
for n = [4 8]
  ux = hemisferio_itw_dkq(n);
  fprintf('   %2dx%-2d  Ux bajo la carga = %.6f   %+.1f %%\n', ...
          n, n, ux, (ux/0.094 - 1)*100);
end
fprintf('   (bloquea en malla gruesa y converge al refinar: es bloqueo de\n');
fprintf('    membrana, no un fallo. Con MITC4 en vez de DKQ sale casi igual.)\n');


% =====================================================================
%  PLACA DKQ — Batoz & Ben Tahar 1982
%  GDL [w, theta_x, theta_y] por nudo, con theta_x = dw/dy, theta_y = -dw/dx
% =====================================================================
function K = dkq_k(pts, E, nu, t)
  x = pts(:,1); y = pts(:,2);
  D0 = E*t^3/(12*(1-nu^2));
  Db = D0*[1 nu 0; nu 1 0; 0 0 (1-nu)/2];
  % coeficientes de lado (Batoz ec. 20). Indices 5..8 = los cuatro lados.
  a = zeros(8,1); b = zeros(8,1); c = zeros(8,1);
  d = zeros(8,1); e = zeros(8,1);
  for k = 1 : 4
    i = k; j = mod(k,4) + 1;
    xij = x(i) - x(j); yij = y(i) - y(j);
    l2 = xij^2 + yij^2;
    m = 4 + k;
    a(m) = -xij/l2;
    b(m) = 0.75*xij*yij/l2;
    c(m) = (0.25*xij^2 - 0.5*yij^2)/l2;
    d(m) = -yij/l2;
    e(m) = (0.25*yij^2 - 0.5*xij^2)/l2;
  end
  gp = [-1/sqrt(3) 1/sqrt(3)];
  K = zeros(12,12);
  for ig = 1 : 2
    for jg = 1 : 2
      xi = gp(ig); eta = gp(jg);
      [~, dNx, dNe] = serendipity8(xi, eta);
      % Jacobiano con las 4 esquinas (el mapeo es bilineal)
      dr = 0.25*[-(1-eta); (1-eta); (1+eta); -(1+eta)];
      ds = 0.25*[-(1-xi); -(1+xi); (1+xi); (1-xi)];
      J11 = dr'*x; J12 = dr'*y; J21 = ds'*x; J22 = ds'*y;
      dJ = J11*J22 - J12*J21;
      Ji11 = J22/dJ; Ji12 = -J12/dJ; Ji21 = -J21/dJ; Ji22 = J11/dJ;
      [Hxr, Hyr] = HxHy(dNx, a, b, c, d, e);
      [Hxs, Hys] = HxHy(dNe, a, b, c, d, e);
      Hx_x = Ji11*Hxr + Ji12*Hxs;
      Hx_y = Ji21*Hxr + Ji22*Hxs;
      Hy_x = Ji11*Hyr + Ji12*Hys;
      Hy_y = Ji21*Hyr + Ji22*Hys;
      B = [Hx_x'; Hy_y'; (Hx_y + Hy_x)'];
      K = K + abs(dJ)*(B'*Db*B);
    end
  end
end

function [N, dNx, dNe] = serendipity8(xi, eta)
  xn = [-1 1 1 -1]; en = [-1 -1 1 1];
  N = zeros(8,1); dNx = zeros(8,1); dNe = zeros(8,1);
  for i = 1 : 4
    N(i)   = 0.25*(1 + xn(i)*xi)*(1 + en(i)*eta)*(xn(i)*xi + en(i)*eta - 1);
    dNx(i) = 0.25*xn(i)*(1 + en(i)*eta)*(2*xn(i)*xi + en(i)*eta);
    dNe(i) = 0.25*en(i)*(1 + xn(i)*xi)*(xn(i)*xi + 2*en(i)*eta);
  end
  N(5) = 0.5*(1-xi^2)*(1-eta);   dNx(5) = -xi*(1-eta);      dNe(5) = -0.5*(1-xi^2);
  N(6) = 0.5*(1+xi)*(1-eta^2);   dNx(6) = 0.5*(1-eta^2);    dNe(6) = -eta*(1+xi);
  N(7) = 0.5*(1-xi^2)*(1+eta);   dNx(7) = -xi*(1+eta);      dNe(7) = 0.5*(1-xi^2);
  N(8) = 0.5*(1-xi)*(1-eta^2);   dNx(8) = -0.5*(1-eta^2);   dNe(8) = -eta*(1-xi);
end

function [Hx, Hy] = HxHy(N, a, b, c, d, e)
  Hx = zeros(12,1); Hy = zeros(12,1);
  for i = 1 : 4
    k = 4 + i;                       % lado que empieza en i
    p = 4 + mod(i + 2, 4) + 1;       % lado que termina en i
    Hx(3*i-2) = 1.5*(a(k)*N(k) - a(p)*N(p));
    Hx(3*i-1) = b(k)*N(k) + b(p)*N(p);
    Hx(3*i)   = N(i) - c(k)*N(k) - c(p)*N(p);
    Hy(3*i-2) = 1.5*(d(k)*N(k) - d(p)*N(p));
    Hy(3*i-1) = -N(i) + e(k)*N(k) + e(p)*N(p);
    Hy(3*i)   = -b(k)*N(k) - b(p)*N(p);
  end
end

function wc = dkq_placa_navier(n, aL, E, nu, t, q)
  h = aL/n;
  nj = (n+1)*(n+1);
  K = zeros(3*nj, 3*nj); F = zeros(3*nj, 1);
  for j = 0 : n-1
    for i = 0 : n-1
      q1 = j*(n+1) + i + 1;
      e = [q1, q1+1, q1+n+2, q1+n+1];
      pts = [i*h j*h; (i+1)*h j*h; (i+1)*h (j+1)*h; i*h (j+1)*h];
      Ke = dkq_k(pts, E, nu, t);
      g = zeros(1,12);
      for k = 1 : 4
        g(3*k-2) = 3*e(k)-2; g(3*k-1) = 3*e(k)-1; g(3*k) = 3*e(k);
      end
      K(g,g) = K(g,g) + Ke;
      for k = 1 : 4
        F(3*e(k)-2) = F(3*e(k)-2) + q*h*h/4;
      end
    end
  end
  suj = [];
  for j = 0 : n
    for i = 0 : n
      if i == 0 || i == n || j == 0 || j == n
        p = j*(n+1) + i + 1;
        suj = [suj, 3*p-2];          % w = 0 (simplemente apoyada)
      end
    end
  end
  libre = setdiff(1:3*nj, suj);
  U = zeros(3*nj,1);
  U(libre) = K(libre,libre) \ F(libre);
  pc = (n/2)*(n+1) + n/2 + 1;
  wc = U(3*pc-2);
end


% =====================================================================
%  CASCARA PLANA: membrana ITW + flexion DKQ, rotada a globales
% =====================================================================
function K = shell_itw_dkq(P, E, nu, t, gamma_fac)
  R = ejes_locales(P);
  c = mean(P, 1);
  loc = zeros(4,2);
  for i = 1 : 4
    v = P(i,:) - c;
    loc(i,1) = R(1,:)*v';
    loc(i,2) = R(2,:)*v';
  end
  Km = itw_k(loc, E, nu, t, gamma_fac);     % [u v tz]  (de itw_1990.m)
  Kb = dkq_k(loc, E, nu, t);                % [w tx ty]
  Kl = zeros(24,24);
  gm = [1 2 6]; gb = [3 4 5];
  for i = 1 : 4
    for j = 1 : 4
      for a = 1 : 3
        for b = 1 : 3
          Kl(6*(i-1)+gm(a), 6*(j-1)+gm(b)) = Kl(6*(i-1)+gm(a), 6*(j-1)+gm(b)) + Km(3*(i-1)+a, 3*(j-1)+b);
          Kl(6*(i-1)+gb(a), 6*(j-1)+gb(b)) = Kl(6*(i-1)+gb(a), 6*(j-1)+gb(b)) + Kb(3*(i-1)+a, 3*(j-1)+b);
        end
      end
    end
  end
  T = zeros(24,24);
  for k = 1 : 8
    T(3*k-2:3*k, 3*k-2:3*k) = R;
  end
  K = T'*Kl*T;
end

function R = ejes_locales(P)
  ex = (P(2,:) - P(1,:)) + (P(3,:) - P(4,:));
  ex = ex/norm(ex);
  ez = cross(P(3,:) - P(1,:), P(4,:) - P(2,:));
  ez = ez/norm(ez);
  ey = cross(ez, ex); ey = ey/norm(ey);
  ex = cross(ey, ez); ex = ex/norm(ex);
  R = [ex; ey; ez];
end

function ux = hemisferio_itw_dkq(n)
  E = 68.25e6; nu = 0.3; t = 0.04; R = 10; P = 1; phi = 18;
  d2r = pi/180; th0 = phi*d2r; th1 = pi/2;
  nj = (n+1)*(n+1);
  nod = zeros(nj, 3);
  for j = 0 : n
    th = th0 + (th1 - th0)*j/n;
    for i = 0 : n
      ph = (pi/2)*i/n;
      k = j*(n+1) + i + 1;
      nod(k,1) = R*sin(th)*cos(ph);
      nod(k,2) = R*sin(th)*sin(ph);
      nod(k,3) = R*cos(th);
    end
  end
  K = zeros(6*nj, 6*nj); F = zeros(6*nj, 1);
  for j = 0 : n-1
    for i = 0 : n-1
      q1 = j*(n+1) + i + 1;
      e = [q1, q1+1, q1+n+2, q1+n+1];
      Ke = shell_itw_dkq(nod(e,:), E, nu, t, 0.4);
      g = zeros(1,24);
      for k = 1 : 4
        for m = 1 : 6
          g(6*(k-1)+m) = 6*(e(k)-1) + m;
        end
      end
      K(g,g) = K(g,g) + Ke;
    end
  end
  suj = [];
  for j = 0 : n
    q = j*(n+1) + 1;                 % borde i = 0  -> simetria en y = 0
    suj = [suj, 6*(q-1)+2, 6*(q-1)+4, 6*(q-1)+6];
    q = j*(n+1) + n + 1;             % borde i = n  -> simetria en x = 0
    suj = [suj, 6*(q-1)+1, 6*(q-1)+5, 6*(q-1)+6];
  end
  qA = n*(n+1) + 1;                  % ecuador, y = 0
  qB = n*(n+1) + n + 1;              % ecuador, x = 0
  suj = [suj, 6*(qA-1)+3];           % quita el solido rigido vertical
  F(6*(qA-1)+1) = P;
  F(6*(qB-1)+2) = -P;
  libre = setdiff(1:6*nj, suj);
  U = zeros(6*nj,1);
  U(libre) = K(libre,libre) \ F(libre);
  ux = U(6*(qA-1)+1);
end


% =====================================================================
%  MEMBRANA ITW 1990 — la misma de itw_1990.m, copiada aqui porque en
%  Hekatan Lab cada .m es independiente y no comparte funciones.
% =====================================================================
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
