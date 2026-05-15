%% ════════════════════════════════════════════════════════════════
%  MEMBRANE Q4 — SAP2000 API verification (MATLAB R2017a)
%
%  Reproduce el muro cantilever del template FE01b de HekatanLab Web:
%    5x3 m, t=0.2, E=25000, nu=0.2, P=100 lateral en top
%    Empotramiento en la base, malla 6x4 Q4, plane stress.
%
%  En SAP2000 se modela como un shell vertical con sección Membrane
%  (ShellType=4). La pared está en el plano X-Z global con Y=0.
%  Carga lateral en X global en el top.
%
%  Compara contra:
%   - HekatanLab Web (FE01b):  u_max = 5.7417e-02 m
%   - Viga Euler-Bernoulli:   1.7280e-02 m (subestima, no captura corte)
%
%  USO: matlab -batch "membrane_sap2000"
%% ════════════════════════════════════════════════════════════════

clear; clc;

%% ── Configuración API ────────────────────────────────────────
AttachToInstance = false();
SpecifyPath      = false();
ProgramPath      = 'C:\Program Files\Computers and Structures\SAP2000 21\SAP2000.exe';
APIDLLPath       = 'C:\Program Files\Computers and Structures\SAP2000 21\SAP2000v1.dll';
ModelDirectory   = 'C:\CSi_SAP2000_API_Membrane';
if ~exist(ModelDirectory, 'dir'); mkdir(ModelDirectory); end
ModelPath = strcat(ModelDirectory, filesep, 'membrane_wall.sdb');

%% ── Inputs (idénticos a FE01b) ───────────────────────────────
W = 5;          % ancho [m]
H = 3;          % alto [m]
t = 0.2;        % espesor [m]
P = 100;        % carga lateral total [kN]
E = 25000;      % MPa  (= N/mm²) — usado como módulo sin unidades coherentes con HekatanLab
nu = 0.2;
nx = 6;
ny = 4;

%% ── Crear instancia SAP2000 ──────────────────────────────────
a = NET.addAssembly(APIDLLPath);
helper = SAP2000v1.Helper;
helper = NET.explicitCast(helper, 'SAP2000v1.cHelper');
if AttachToInstance
    SapObject = helper.GetObject('CSI.SAP2000.API.SapObject');
else
    if SpecifyPath
        SapObject = helper.CreateObject(ProgramPath);
    else
        SapObject = helper.CreateObjectProgID('CSI.SAP2000.API.SapObject');
    end
    SapObject = NET.explicitCast(SapObject, 'SAP2000v1.cOAPI');
    SapObject.ApplicationStart;
end
helper = 0;

SapModel = NET.explicitCast(SapObject.SapModel, 'SAP2000v1.cSapModel');
% Unidades: N, m, C (para ser consistente con números crudos de HekatanLab)
ret = SapModel.InitializeNewModel(SAP2000v1.eUnits.N_m_C);
File = NET.explicitCast(SapModel.File, 'SAP2000v1.cFile');
ret = File.NewBlank;

%% ── Material ─────────────────────────────────────────────────
PropMaterial = NET.explicitCast(SapModel.PropMaterial, 'SAP2000v1.cPropMaterial');
ret = PropMaterial.SetMaterial('WALL_MAT', SAP2000v1.eMatType.Concrete);
ret = PropMaterial.SetMPIsotropic('WALL_MAT', E, nu, 0);

%% ── Sección Membrane (ShellType=4) ───────────────────────────
PropArea = NET.explicitCast(SapModel.PropArea, 'SAP2000v1.cPropArea');
ret = PropArea.SetShell_1('MEMBRANE', 4, false(), 'WALL_MAT', 0, t, t);

%% ── Malla nx x ny en plano XZ (Y=0) ──────────────────────────
dx = W/nx;  dz = H/ny;
AreaObj = NET.explicitCast(SapModel.AreaObj, 'SAP2000v1.cAreaObj');
for jj = 0:ny-1
    for ii = 0:nx-1
        X = NET.createArray('System.Double', 4);
        Y = NET.createArray('System.Double', 4);
        Z = NET.createArray('System.Double', 4);
        X(1) = ii*dx;     Y(1) = 0; Z(1) = jj*dz;
        X(2) = (ii+1)*dx; Y(2) = 0; Z(2) = jj*dz;
        X(3) = (ii+1)*dx; Y(3) = 0; Z(3) = (jj+1)*dz;
        X(4) = ii*dx;     Y(4) = 0; Z(4) = (jj+1)*dz;
        Name = System.String(' ');
        [ret, Name] = AreaObj.AddByCoord(4, X, Y, Z, Name, 'MEMBRANE', '', 'Global');
    end
end

%% ── BC: empotramiento en la base (Z=0) ───────────────────────
PointObj = NET.explicitCast(SapModel.PointObj, 'SAP2000v1.cPointObj');
NumberPoints = 0;
PointNames = NET.createArray('System.String', 0);
[ret, NumberPoints, PointNames] = PointObj.GetNameList(NumberPoints, PointNames);
Restraint = NET.createArray('System.Boolean', 6);
% Empotramiento completo: todos los 6 DOFs fijos
for d = 1:6; Restraint(d) = true(); end
for k = 1:NumberPoints
    pName = char(PointNames(k));
    X = 0; Y = 0; Z = 0;
    [ret, X, Y, Z] = PointObj.GetCoordCartesian(pName, X, Y, Z);
    if abs(Z) < 1e-6
        ret = PointObj.SetRestraint(pName, Restraint);
    end
end

%% ── Restringir Y (out-of-plane) en TODOS los nodos ───────────
% Plane stress = no deformación fuera del plano. Fijamos Uy en cada nodo.
Restraint_oop = NET.createArray('System.Boolean', 6);
for d = 1:6; Restraint_oop(d) = false(); end
Restraint_oop(2) = true();  % Uy fijo
for k = 1:NumberPoints
    pName = char(PointNames(k));
    X = 0; Y = 0; Z = 0;
    [ret, X, Y, Z] = PointObj.GetCoordCartesian(pName, X, Y, Z);
    if abs(Z) >= 1e-6   % no en la base (ya fijada)
        ret = PointObj.SetRestraint(pName, Restraint_oop);
    end
end

%% ── Cargas: P repartido en (nx+1) puntos del top ────────────
LoadPatterns = NET.explicitCast(SapModel.LoadPatterns, 'SAP2000v1.cLoadPatterns');
ret = LoadPatterns.Add('P', SAP2000v1.eLoadPatternType.Other, 0, true());

% Identificar nodos del top y aplicar Fx = P/(nx+1) en cada uno
P_per = P / (nx+1);
PointLoad = NET.createArray('System.Double', 6);
for d = 1:6; PointLoad(d) = 0; end
PointLoad(1) = P_per;   % Fx
for k = 1:NumberPoints
    pName = char(PointNames(k));
    X = 0; Y = 0; Z = 0;
    [ret, X, Y, Z] = PointObj.GetCoordCartesian(pName, X, Y, Z);
    if abs(Z - H) < 1e-6
        ret = PointObj.SetLoadForce(pName, 'P', PointLoad, false(), 'Global');
    end
end

%% ── Analizar ─────────────────────────────────────────────────
ret = File.Save(ModelPath);
Analyze = NET.explicitCast(SapModel.Analyze, 'SAP2000v1.cAnalyze');
ret = Analyze.RunAnalysis();

%% ── Extraer u_max (max |U1| en el top) ───────────────────────
AnalysisResults = NET.explicitCast(SapModel.Results, 'SAP2000v1.cAnalysisResults');
AnalysisResultsSetup = NET.explicitCast(AnalysisResults.Setup, 'SAP2000v1.cAnalysisResultsSetup');
ret = AnalysisResultsSetup.DeselectAllCasesAndCombosForOutput;
ret = AnalysisResultsSetup.SetCaseSelectedForOutput('P');

u_max_sap = 0;
for k = 1:NumberPoints
    pName = char(PointNames(k));
    X = 0; Y = 0; Z = 0;
    [ret, X, Y, Z] = PointObj.GetCoordCartesian(pName, X, Y, Z);
    if abs(Z - H) < 1e-6   % solo nodos del top
        NumberResults = 0;
        Obj = NET.createArray('System.String', 2);
        Elm = NET.createArray('System.String', 2);
        ACase = NET.createArray('System.String', 2);
        StepType = NET.createArray('System.String', 2);
        StepNum = NET.createArray('System.Double', 2);
        U1 = NET.createArray('System.Double', 2);
        U2 = NET.createArray('System.Double', 2);
        U3 = NET.createArray('System.Double', 2);
        R1 = NET.createArray('System.Double', 2);
        R2 = NET.createArray('System.Double', 2);
        R3 = NET.createArray('System.Double', 2);
        [ret, NumberResults, Obj, Elm, ACase, StepType, StepNum, U1, U2, U3, R1, R2, R3] = ...
            AnalysisResults.JointDispl(pName, SAP2000v1.eItemTypeElm.ObjectElm, ...
                                       NumberResults, Obj, Elm, ACase, StepType, StepNum, ...
                                       U1, U2, U3, R1, R2, R3);
        if NumberResults > 0 && abs(U1(1)) > u_max_sap
            u_max_sap = abs(U1(1));
        end
    end
end

ret = SapObject.ApplicationExit(false());

%% ── Comparación ──────────────────────────────────────────────
% Viga Euler-Bernoulli (referencia inferior, FEM debería ser mayor)
I_w        = t * W^3 / 12;
delta_beam = P * H^3 / (3*E*I_w);
u_heklab   = 5.7417e-02;

fprintf('\n═══════════════════════════════════════════════════════════\n');
fprintf('  MEMBRANE Q4 Cantilever Wall — SAP2000 vs HekatanLab vs Viga\n');
fprintf('═══════════════════════════════════════════════════════════\n');
fprintf('  Geometría: %.0fx%.0f m, t=%.2f, P=%.0f, malla %dx%d, ShellType=4\n', ...
        W, H, t, P, nx, ny);
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  Source            u_max [m]       Diff vs HekatanLab\n');
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  SAP2000 API       %12.6e   %+8.2f%%\n', u_max_sap, (u_max_sap/u_heklab - 1)*100);
fprintf('  HekatanLab Web    %12.6e        ---\n', u_heklab);
fprintf('  Viga Euler-B      %12.6e   %+8.2f%%\n', delta_beam, (delta_beam/u_heklab - 1)*100);
fprintf('  ─────────────────────────────────────────────────────────\n');

SapResult_mem   = u_max_sap;   %#ok<NASGU>
IndResult_mem   = delta_beam;  %#ok<NASGU>
PercentDiff_mem = (u_max_sap/delta_beam) - 1; %#ok<NASGU>

fprintf('\nSapResult_mem    = %.6e\n', u_max_sap);
fprintf('IndResult_mem    = %.6e (viga)\n', delta_beam);
fprintf('PercentDiff_mem  = %+.4f\n', (u_max_sap/delta_beam) - 1);
fprintf('Ratio SAP/HekL   = %.4f\n', u_max_sap/u_heklab);
