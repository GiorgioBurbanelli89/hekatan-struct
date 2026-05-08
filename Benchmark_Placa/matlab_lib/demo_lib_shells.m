% ===========================================================================
% demo_lib_shells.m - Demo de la librería modular q4_*
% ===========================================================================
% Usa los 4 elementos de Matlab/lib/ con un caso simple: muro 5x3 t=0.2 m
% material concreto, comparando rigidez axial diagonal.
%
% Compatible MATLAB R2017a + Hekatan Lab modo MATLAB.
% Para ejecutarlo en MATLAB: addpath('lib'); run('demo_lib_shells');
% Para Hekatan Lab: el código de cada función q4_* está en lib/, debe estar
% en el path. (En CLI, cd a Matlab/ y ejecutar este script.)
% ===========================================================================

addpath('lib');

% Material concreto (ETABS family_b, escala kN-m)
E  = 2549290.5;   % kN/m^2
nu = 0.2;
t  = 0.20;        % m

% Elemento 5x3 m
ce = [0, 0; 5, 0; 5, 3; 0, 3];   % 4x2 CCW

fprintf('=== Demo libreria modular q4_* ===\n');
fprintf('Geometria: 5x3 m, t=%g m, E=%g kN/m^2, nu=%g\n\n', t, E, nu);

% --- 1) Membrana (Q4 plane stress) ---
ke_m = q4_membrane(E, nu, t, ce);
fprintf('q4_membrane:    ke 8x8,    diag(ke)(1) = %.4e (rigidez axial u-u nodo 1)\n', ke_m(1,1));

% --- 2) Plate thin (Kirchhoff, solo flexion) ---
ke_pt = q4_plate_thin(E, nu, t, ce);
fprintf('q4_plate_thin:  ke 12x12,  diag(ke)(1) = %.4e (rigidez w-w nodo 1)\n', ke_pt(1,1));

% --- 3) Plate thick (Mindlin) ---
ke_pk = q4_plate_thick(E, nu, t, ce);
fprintf('q4_plate_thick: ke 12x12,  diag(ke)(1) = %.4e (rigidez w-w nodo 1)\n', ke_pk(1,1));

% --- 4) Shell thin (membrana + Kirchhoff) ---
ke_st = q4_shell_thin(E, nu, t, ce);
fprintf('q4_shell_thin:  ke 24x24,  diag(ke)(1) = %.4e (rigidez u-u nodo 1)\n', ke_st(1,1));
fprintf('                            diag(ke)(3) = %.4e (rigidez w-w nodo 1)\n', ke_st(3,3));

% --- 5) Shell thick (membrana + Mindlin) ---
ke_sk = q4_shell_thick(E, nu, t, ce);
fprintf('q4_shell_thick: ke 24x24,  diag(ke)(1) = %.4e (rigidez u-u nodo 1)\n', ke_sk(1,1));
fprintf('                            diag(ke)(3) = %.4e (rigidez w-w nodo 1)\n', ke_sk(3,3));

fprintf('\n=== Verificacion: rigidez membrana en shell coincide con q4_membrane ===\n');
% En ke_st (24x24), DOFs 1,2 = u,v del nodo 1; en ke_m (8x8), DOFs 1,2 = u,v nodo 1
diff_m = abs(ke_st(1,1) - ke_m(1,1));
fprintf('  ke_shell_thin(1,1)  - ke_membrane(1,1)  = %.3e (debe ~ 0)\n', diff_m);
fprintf('  ke_shell_thick(1,1) - ke_membrane(1,1)  = %.3e (debe ~ 0)\n', abs(ke_sk(1,1) - ke_m(1,1)));

fprintf('\n=== Comparacion thin vs thick (rigidez transversal w) ===\n');
fprintf('  Razon thick/thin (w-w) = %.4f  (1.0 = idénticos para t/L pequeno)\n', ke_sk(3,3) / ke_st(3,3));
fprintf('  t/L = %.4f, ratio esperado ~1 si thin domina\n', t / 5);
