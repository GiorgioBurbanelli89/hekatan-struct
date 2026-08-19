% ===========================================================================
% cft_seccion_transformada.m - Seccion Compuesta CFT (Concrete Filled Tube)
% ===========================================================================
% Replica el calculo de seccion transformada que hace ETABS para "Filled Steel Tube"
%
% Geometria CFT 300x300 con espesor 12mm:
%   D = 300 mm  (alto exterior)
%   B = 300 mm  (ancho exterior)
%   tf = 12 mm  (espesor flange = espesor superior/inferior)
%   tw = 12 mm  (espesor web = espesor lateral)
%   Caja interna concreto: (D - 2*tf) x (B - 2*tw) = 276 x 276 mm
%
% Materiales:
%   Acero  A572Gr50: Es = 20389020 tonf/m^2 = 200 GPa = 200000 N/mm^2 (200000 MPa)
%   Concreto 4000Psi: Ec = 2534563.5 tonf/m^2 ~ 24850 MPa
%   Razon modular n = Es / Ec
%
% Seccion transformada (base = acero):
%   A_t = A_steel + A_concrete / n
%   I_t = I_steel + I_concrete / n
%
% Valor de referencia ETABS:
%   A     = 23293.5 mm^2
%   I33   = 251546855.4 mm^4
%   I22   = 251546855.4 mm^4
%   J     = 417845187 mm^4
% ===========================================================================

% --- Datos ---
D  = 300;     % mm
B  = 300;     % mm
tf = 12;      % mm
tw = 12;      % mm

Es = 200000;  % MPa (acero)
Ec = 24850;   % MPa (concreto, ETABS calcula automaticamente segun fc=4000Psi)
n  = Es / Ec;

fprintf('=== Seccion CFT (Concrete Filled Tube) ===\n');
fprintf('D = %g mm, B = %g mm, tf = %g mm, tw = %g mm\n', D, B, tf, tw);
fprintf('Es = %g MPa, Ec = %g MPa\n', Es, Ec);
fprintf('Razon modular n = Es/Ec = %.4f\n', n);
fprintf('\n');

% --- Areas ---
A_outer    = D * B;
B_inner    = B - 2 * tw;
D_inner    = D - 2 * tf;
A_inner    = B_inner * D_inner;

A_steel    = A_outer - A_inner;
A_concrete = A_inner;

A_t = A_steel + A_concrete / n;

fprintf('--- Areas (mm^2) ---\n');
fprintf('A_outer    = %g (300x300)\n', A_outer);
fprintf('A_inner    = %g (%gx%g)\n', A_inner, B_inner, D_inner);
fprintf('A_steel    = %g (anillo)\n', A_steel);
fprintf('A_concrete = %g (relleno)\n', A_concrete);
fprintf('A_transformada = A_s + A_c/n = %g + %g = %.1f mm^2\n', A_steel, A_concrete/n, A_t);
fprintf('  ETABS dice: 23293.5 mm^2\n');
fprintf('  Diferencia: %.2f%%\n', abs(A_t - 23293.5) / 23293.5 * 100);
fprintf('\n');

% --- Inercias (eje 3-3 = eje horizontal del corte transversal) ---
I_outer = D^4 / 12;        % cuadrado D x D
I_inner = D_inner^4 / 12;  % cuadrado interno

I_steel    = I_outer - I_inner;
I_concrete = I_inner;

I_t = I_steel + I_concrete / n;

fprintf('--- Inercias (mm^4) ---\n');
fprintf('I_outer    = %.1f\n', I_outer);
fprintf('I_inner    = %.1f\n', I_inner);
fprintf('I_steel    = %.1f (anillo)\n', I_steel);
fprintf('I_concrete = %.1f (relleno)\n', I_concrete);
fprintf('I_transformada = I_s + I_c/n = %.1f mm^4\n', I_t);
fprintf('  ETABS dice (I33 = I22): 251546855.4 mm^4\n');
fprintf('  Diferencia: %.3f%%\n', abs(I_t - 251546855.4) / 251546855.4 * 100);
fprintf('\n');

% --- J (constante torsional) - Caja cerrada de pared delgada (Bredt) ---
% Para un tubo cuadrado cerrado: J = 4 * A_m^2 * t / U
%   A_m = area encerrada por linea media  = (D - tf) * (B - tw)
%   U   = perimetro medio  = 2 * ((D - tf) + (B - tw))
% Para CFT, el concreto tambien aporta: aproximacion sumando ambos via n.
A_m_steel = (D - tf) * (B - tw);
U_steel   = 2 * ((D - tf) + (B - tw));
J_steel_thin = 4 * A_m_steel^2 * tf / U_steel;

% J_concreto (cuadrado solido): J = beta * b^4, beta ~ 0.1406 para b/b=1
beta_solid = 0.1406;
J_concrete = beta_solid * D_inner^4;

J_t = J_steel_thin + J_concrete / n;

fprintf('--- J (constante torsional, mm^4) ---\n');
fprintf('A_m_steel (linea media tubo) = %.1f mm^2\n', A_m_steel);
fprintf('U_steel (perim. medio)       = %.1f mm\n', U_steel);
fprintf('J_steel (Bredt thin)         = %.1f\n', J_steel_thin);
fprintf('J_concrete (beta=%.4f)       = %.1f\n', beta_solid, J_concrete);
fprintf('J_transformada               = %.1f mm^4\n', J_t);
fprintf('  ETABS dice: 417845187 mm^4\n');
fprintf('  Diferencia: %.2f%% (ETABS usa formula compuesta mas precisa)\n', abs(J_t - 417845187) / 417845187 * 100);
fprintf('\n');

% --- Modulos de seccion ---
S33 = I_t / (D/2);
fprintf('--- Modulos (mm^3) ---\n');
fprintf('S33 = I_t / (D/2) = %.0f\n', S33);
fprintf('  ETABS dice: 1676979\n');
fprintf('  Diferencia: %.3f%%\n', abs(S33 - 1676979) / 1676979 * 100);
fprintf('\n');

% --- Resumen ---
fprintf('========== RESUMEN ==========\n');
fprintf('  Item        Calculado           ETABS              Error\n');
fprintf('  A      %14.2f mm^2  %12.1f mm^2  %6.3f%%\n', A_t, 23293.5, abs(A_t - 23293.5) / 23293.5 * 100);
fprintf('  I33    %14.1f mm^4  %12.1f mm^4  %6.3f%%\n', I_t, 251546855.4, abs(I_t - 251546855.4) / 251546855.4 * 100);
fprintf('  J      %14.1f mm^4  %12.0f mm^4  %6.2f%%\n', J_t, 417845187, abs(J_t - 417845187) / 417845187 * 100);
fprintf('  S33    %14.0f mm^3  %12.0f mm^3  %6.3f%%\n', S33, 1676979, abs(S33 - 1676979) / 1676979 * 100);
