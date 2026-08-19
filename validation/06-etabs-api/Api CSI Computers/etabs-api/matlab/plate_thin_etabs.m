%% ════════════════════════════════════════════════════════════════
%  PLATE THIN — ETABS 18+ API verification (MATLAB R2017a script)
%
%  Construye via API una placa SS 1x1x0.05 con carga uniforme q=1
%  y compara la deflexión central contra Navier (alpha=0.00406)
%  y contra HekatanLab Web (1.371347e-02).
%
%  REQUISITOS:
%    - ETABS 18 o superior instalado
%    - ETABSv1.dll en la ruta APIDLLPath (ajustar si es distinta)
%
%  USO:
%    >> plate_thin_etabs
%% ════════════════════════════════════════════════════════════════

clear; clc;

%% ── Configuración ────────────────────────────────────────────
AttachToInstance = false();
SpecifyPath      = false();
ProgramPath      = 'C:\Program Files\Computers and Structures\ETABS 18\ETABS.exe';
APIDLLPath       = 'C:\Program Files\Computers and Structures\ETABS 18\ETABSv1.dll';
ModelDirectory   = 'C:\CSi_ETABS_API_PlateThin';
if ~exist(ModelDirectory, 'dir'); mkdir(ModelDirectory); end
ModelName = 'plate_thin.edb';
ModelPath = strcat(ModelDirectory, filesep, ModelName);

%% ── Geometría / material / carga ──────────────────────────────
W_m  = 1.0;  H_m = 1.0;
t_m  = 0.05;
E_m  = 30000;   % unidades consistentes con el template HekatanLab
nu_m = 0.2;
q    = 1.0;
nx   = 4;   ny = 4;

%% ── Crear instancia ETABS ─────────────────────────────────────
a = NET.addAssembly(APIDLLPath);
helper = ETABSv1.Helper;
helper = NET.explicitCast(helper, 'ETABSv1.cHelper');
if AttachToInstance
    ETABSObject = helper.GetObject('CSI.ETABS.API.ETABSObject');
else
    if SpecifyPath
        ETABSObject = helper.CreateObject(ProgramPath);
    else
        ETABSObject = helper.CreateObjectProgID('CSI.ETABS.API.ETABSObject');
    end
    ETABSObject = NET.explicitCast(ETABSObject, 'ETABSv1.cOAPI');
    ETABSObject.ApplicationStart;
end
helper = 0;

SapModel = NET.explicitCast(ETABSObject.SapModel, 'ETABSv1.cSapModel');
ret = SapModel.InitializeNewModel;
File = NET.explicitCast(SapModel.File, 'ETABSv1.cFile');
ret = File.NewBlank;

%% ── Unidades coherentes ───────────────────────────────────────
% NOTA: HekatanLab usa números sin unidades. Para reproducir el mismo
% w_max numérico debes usar el mismo SET coherente (e.g. N, m, Pa).
% Aquí asumimos kip-in-F y luego escalamos los inputs.
ret = SapModel.SetPresentUnits(ETABSv1.eUnits.N_m_C);

%% ── Material ──────────────────────────────────────────────────
PropMaterial = NET.explicitCast(SapModel.PropMaterial, 'ETABSv1.cPropMaterial');
ret = PropMaterial.SetMaterial('PLATE_MAT', ETABSv1.eMatType.Concrete);
% E, nu, coef_thermal — usamos E_m, nu_m, 0
ret = PropMaterial.SetMPIsotropic('PLATE_MAT', E_m, nu_m, 0);

%% ── Propiedad de área (plate thin) ────────────────────────────
PropArea = NET.explicitCast(SapModel.PropArea, 'ETABSv1.cPropArea');
% SetSlab(name, slabType, shellType, matProp, thickness)
% shellType: Shell = 1, Membrane = 2, Plate-Thin = 3, Plate-Thick = 4
ret = PropArea.SetSlab('SLAB_THIN', ETABSv1.eSlabType.Slab, ...
                       ETABSv1.eShellType.ShellThin, 'PLATE_MAT', t_m);

%% ── Generar malla nx x ny de elementos shell ──────────────────
dx = W_m/nx;  dy = H_m/ny;
AreaObj = NET.explicitCast(SapModel.AreaObj, 'ETABSv1.cAreaObj');
for jj = 0:ny-1
    for ii = 0:nx-1
        x1 = ii*dx;     y1 = jj*dy;
        x2 = (ii+1)*dx; y2 = (jj+1)*dy;
        X = NET.createArray('System.Double', 4);
        Y = NET.createArray('System.Double', 4);
        Z = NET.createArray('System.Double', 4);
        X(1) = x1; Y(1) = y1; Z(1) = 0;
        X(2) = x2; Y(2) = y1; Z(2) = 0;
        X(3) = x2; Y(3) = y2; Z(3) = 0;
        X(4) = x1; Y(4) = y2; Z(4) = 0;
        Name = System.String(' ');
        [ret, Name] = AreaObj.AddByCoord(4, X, Y, Z, Name, 'SLAB_THIN', '', 'Global');
    end
end

%% ── BCs: simply supported en los 4 bordes ────────────────────
% Iterar puntos y aplicar restraint w=0 (Z translation) en bordes
PointObj = NET.explicitCast(SapModel.PointObj, 'ETABSv1.cPointObj');
NumberPoints = 0;
PointNames = NET.createArray('System.String', 0);
[ret, NumberPoints, PointNames] = PointObj.GetNameList(NumberPoints, PointNames);
Restraint = NET.createArray('System.Boolean', 6);
% Restraint: Ux, Uy, Uz, Rx, Ry, Rz
Restraint(1) = false(); Restraint(2) = false(); Restraint(3) = true();
Restraint(4) = false(); Restraint(5) = false(); Restraint(6) = false();
for k = 1:NumberPoints
    pName = char(PointNames(k));
    X = 0; Y = 0; Z = 0;
    [ret, X, Y, Z] = PointObj.GetCoordCartesian(pName, X, Y, Z);
    on_bd = (abs(X) < 1e-6) || (abs(X - W_m) < 1e-6) || ...
            (abs(Y) < 1e-6) || (abs(Y - H_m) < 1e-6);
    if on_bd
        ret = PointObj.SetRestraint(pName, Restraint);
    end
end

%% ── Carga uniforme ───────────────────────────────────────────
LoadPatterns = NET.explicitCast(SapModel.LoadPatterns, 'ETABSv1.cLoadPatterns');
ret = LoadPatterns.Add('Q', ETABSv1.eLoadPatternType.Other, 0, true());

% Aplicar carga -q en Z global a TODAS las áreas
NumberAreas = 0;
AreaNames = NET.createArray('System.String', 0);
[ret, NumberAreas, AreaNames] = AreaObj.GetNameList(NumberAreas, AreaNames);
for k = 1:NumberAreas
    aName = char(AreaNames(k));
    ret = AreaObj.SetLoadUniform(aName, 'Q', -q, 10, true(), 'Global');
end

%% ── Guardar, analizar ────────────────────────────────────────
ret = File.Save(ModelPath);
Analyze = NET.explicitCast(SapModel.Analyze, 'ETABSv1.cAnalyze');
ret = Analyze.RunAnalysis();

%% ── Extraer w_max (deflexión central) ────────────────────────
% Punto central: (W_m/2, H_m/2)
AnalysisResults = NET.explicitCast(SapModel.Results, 'ETABSv1.cAnalysisResults');
AnalysisResultsSetup = NET.explicitCast(AnalysisResults.Setup, 'ETABSv1.cAnalysisResultsSetup');
ret = AnalysisResultsSetup.DeselectAllCasesAndCombosForOutput;
ret = AnalysisResultsSetup.SetCaseSelectedForOutput('Q');

w_max_etabs = 0;
for k = 1:NumberPoints
    pName = char(PointNames(k));
    X = 0; Y = 0; Z = 0;
    [ret, X, Y, Z] = PointObj.GetCoordCartesian(pName, X, Y, Z);
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
        AnalysisResults.JointDispl(pName, ETABSv1.eItemTypeElm.ObjectElm, ...
                                   NumberResults, Obj, Elm, ACase, StepType, StepNum, ...
                                   U1, U2, U3, R1, R2, R3);
    if NumberResults > 0
        if abs(U3(1)) > w_max_etabs
            w_max_etabs = abs(U3(1));
        end
    end
end

ret = ETABSObject.ApplicationExit(false());

%% ── Comparación ──────────────────────────────────────────────
D_ref     = E_m * t_m^3 / (12*(1 - nu_m^2));
w_navier  = 0.00406 * q * W_m^4 / D_ref;
w_heklab  = 1.371347e-02;  % HekatanLab Web FE02 4x4

fprintf('\n═══════════════════════════════════════════════════════════\n');
fprintf('  PLATE THIN (eShellType.ShellThin) — ETABS vs HekatanLab vs Navier\n');
fprintf('═══════════════════════════════════════════════════════════\n');
fprintf('  Geometría:  %.2fx%.2f, t=%.3f, q=%.1f, malla %dx%d\n', ...
        W_m, H_m, t_m, q, nx, ny);
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  Source            w_max [m]       Diff vs HekatanLab\n');
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  ETABS API         %12.6e   %+8.2f%%\n', w_max_etabs, (w_max_etabs/w_heklab - 1)*100);
fprintf('  HekatanLab Web    %12.6e        ---\n', w_heklab);
fprintf('  Navier teórica    %12.6e   %+8.2f%%\n', w_navier, (w_navier/w_heklab - 1)*100);
fprintf('  ─────────────────────────────────────────────────────────\n');

ETABSResult_thin = w_max_etabs;
IndResult_thin   = w_navier;
PercentDiff_thin = (w_max_etabs/w_navier) - 1;
fprintf('\nETABSResult_thin = %.6e\n', ETABSResult_thin);
fprintf('IndResult_thin   = %.6e (Navier alpha=0.00406)\n', IndResult_thin);
fprintf('PercentDiff_thin = %+.4f\n', PercentDiff_thin);
