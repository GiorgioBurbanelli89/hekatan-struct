% Comparativa Hekatan vs SAFE — Zapata 1.5×1.5 + P=-100 tonf
% ===========================================================
%
% Reproduce el modelo exacto del usuario:
%   - Foundation: 1.50 × 1.50 × 0.30 m (cuadrada centrada)
%   - Subgrade Modulus: 0.000002 tonf/mm/mm = 19,613 kN/m³ (≈ 20,000)
%   - Carga: Dead P = -100 tonf = -980.665 kN (vertical descendente)
%   - Sin momentos
%
% Compara:
%   (A) Solución analítica rígida Winkler — δ uniforme = P/(ks·A)
%   (B) Reservada para que el usuario corra SAFE y reporte valor real

clear all; close all; clc;

% ── Parámetros del modelo SAFE ────────────────────────────
B = 1.50;          % m
L = 1.50;          % m
t = 0.30;          % m
ks_safe = 0.000002;   % tonf/mm/mm
P_tonf  = 100;        % tonf (compresión, descendente)
P_kN    = P_tonf * 9.80665;    % 980.665 kN

% Conversión ks
ks_kN_m3 = ks_safe * 9.80665 * 1e9;   % = 19,613 kN/m³

% ── (A) Solución analítica rígida Winkler ──────────────
A = B * L;                       % 2.25 m²
K_zz = ks_kN_m3 * A;             % kN/m
delta_uniform = P_kN / K_zz;    % m

printf("\n========================================================================\n");
printf("  Zapata 1.5×1.5×%.2f m — Carga P=-%.1f tonf, ks=%.0f kN/m³\n", t, P_tonf, ks_kN_m3);
printf("========================================================================\n");
printf("  (A) Analítico rígido Winkler:\n");
printf("      A_zapata     = %.4f m²\n", A);
printf("      K_zz         = %.2f kN/m\n", K_zz);
printf("      δ_uniforme   = %.6e m = %.4f mm\n", delta_uniform, delta_uniform * 1000);

% ── (B) FEM flexible (estimación con corrección de Vlasov-Leontiev) ────
% Para una placa Q4 sobre Winkler, el factor de incremento por flexibilidad
% depende de λ = (ks/4D)^(1/4) y de la distribución de carga.
% Para load concentrada en columna 0.4×0.4 m sobre placa 1.5×1.5×0.3 m:
%   E_concreto = 24,000 MPa = 24e6 kN/m²
E_c = 24e6;       % kN/m²
nu = 0.20;
D_flex = E_c * t^3 / (12 * (1 - nu^2));   % kN·m
lambda4 = ks_kN_m3 / (4 * D_flex);
lambda  = lambda4^(1/4);
L_char  = 1 / lambda;       % longitud característica

printf("\n  Plate stiffness D = %.2f kN·m\n", D_flex);
printf("  λ = (ks/4D)^(1/4) = %.4f m^-1\n", lambda);
printf("  L_char (1/λ) = %.4f m  (vs B/2=%.4f)\n", L_char, B/2);

% Si L_char >> B/2 → comportamiento RÍGIDO (toda la placa actúa como bloque)
% Si L_char << B/2 → comportamiento FLEXIBLE (concentración local de settlement)
ratio = L_char / (B/2);
printf("  Ratio L_char / (B/2) = %.3f\n", ratio);
if ratio > 2
  printf("  → Foundation RÍGIDA: δ_max ≈ δ_uniforme\n");
elseif ratio < 0.5
  printf("  → Foundation FLEXIBLE: δ_max bajo columna >> δ_uniforme\n");
else
  printf("  → Foundation TRANSICIÓN (mixto rígido-flexible)\n");
endif

% Estimación δ_max bajo columna (load concentrado) usando Boussinesq + flexibilidad:
% Para load circular equivalente de radio a sobre placa elástica + Winkler:
% δ_concentrated = (P/π·a²) · (1+ν²)/(E_c·t) · (función de λ·a)
% Aproximación simple para columna cuadrada bc=0.4m → radio equivalente a≈0.226m
a_eq = sqrt(0.4*0.4 / pi);
delta_concentrated_estimate = P_kN / (4 * sqrt(D_flex * ks_kN_m3));
printf("\n  Estimación FEM δ_max (load concentrada Winkler):\n");
printf("      δ_concentrated ≈ P/(4·√(D·ks)) = %.6e m = %.4f mm\n", ...
  delta_concentrated_estimate, delta_concentrated_estimate * 1000);
printf("      (válida si placa infinita; placa finita real será similar)\n");

printf("\n========================================================================\n");
printf("  RESUMEN PARA COMPARAR CON SAFE\n");
printf("========================================================================\n");
printf("  Cantidad                Valor analítico\n");
printf("  --------------------------------------------\n");
printf("  δ rígido (centro)       %.4f mm\n", delta_uniform * 1000);
printf("  δ flexible (columna)    ~%.4f mm\n", delta_concentrated_estimate * 1000);
printf("\n  Cuando corras SAFE con estos params, deberías obtener un valor\n");
printf("  entre estos dos (depende de qué tan flexible considere SAFE la placa).\n");
printf("\n");
