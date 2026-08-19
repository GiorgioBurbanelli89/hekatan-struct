%% ════════════════════════════════════════════════════════════════
%  PLATE THICK — SAP2000 API verification (MATLAB R2017a)
%
%  Construye la misma placa SS GRUESA que el template FE03 de
%  HekatanLab Web (Mindlin-Reissner t=0.25, malla 4x4, q=1).
%  Corre análisis SAP2000 y extrae w_max central via API.
%
%  Compara contra:
%   - HekatanLab Web (FE03):       w_max = 1.543172e-04
%   - Reissner-Timoshenko teórico: w_max = 1.280794e-04
%
%  REQUISITOS: SAP2000 v21+ con SAP2000v1.dll
%
%  USO: matlab -batch "plate_thick_sap2000"
%% ════════════════════════════════════════════════════════════════

clear; clc;

%% ── Configuración API ────────────────────────────────────────
AttachToInstance = false();
SpecifyPath      = false();
ProgramPath      = 'C:\Program Files\Computers and Structures\SAP2000 21\SAP2000.exe';
APIDLLPath       = 'C:\Program Files\Computers and Structures\SAP2000 21\SAP2000v1.dll';
ModelDirectory   = 'C:\CSi_SAP2000_API_PlateThick';
if ~exist(ModelDirectory, 'dir'); mkdir(ModelDirectory); end
ModelPath = strcat(ModelDirectory, filesep, 'plate_thick.sdb');

%% ── Inputs (idénticos a HekatanLab FE03) ──────────────────────
W_m  = 1.0;  H_m = 1.0;
t_m  = 0.25;            % GRUESA: t/a = 0.25
E_m  = 30000;
nu_m = 0.2;
q    = 1.0;
nx   = 4;  ny = 4;

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
ret = SapModel.InitializeNewModel(SAP2000v1.eUnits.N_m_C);
File = NET.explicitCast(SapModel.File, 'SAP2000v1.cFile');
ret = File.NewBlank;

%% ── Material ──────────────────────────────────────────────────
PropMaterial = NET.explicitCast(SapModel.PropMaterial, 'SAP2000v1.cPropMaterial');
ret = PropMaterial.SetMaterial('PLATE_MAT', SAP2000v1.eMatType.Concrete);
ret = PropMaterial.SetMPIsotropic('PLATE_MAT', E_m, nu_m, 0);

%% ── Sección Plate-Thick (ShellType=3) ─────────────────────────
% SetShell_1(Name, ShellType, IncludeDrillingDOF, MatProp, MatAngle, Thickness, BendingThickness)
% ShellType: 1=Shell-Thin, 2=Plate-Thin, 3=Plate-Thick, 4=Membrane, 5=Shell-Thin (full), 6=Shell-Thick (full)
PropArea = NET.explicitCast(SapModel.PropArea, 'SAP2000v1.cPropArea');
ret = PropArea.SetShell_1('PLATE_THICK', 3, false(), 'PLATE_MAT', 0, t_m, t_m);

%% ── Malla nx x ny ─────────────────────────────────────────────
dx = W_m/nx;  dy = H_m/ny;
AreaObj = NET.explicitCast(SapModel.AreaObj, 'SAP2000v1.cAreaObj');
for jj = 0:ny-1
    for ii = 0:nx-1
        X = NET.createArray('System.Double', 4);
        Y = NET.createArray('System.Double', 4);
        Z = NET.createArray('System.Double', 4);
        X(1) = ii*dx;     Y(1) = jj*dy;     Z(1) = 0;
        X(2) = (ii+1)*dx; Y(2) = jj*dy;     Z(2) = 0;
        X(3) = (ii+1)*dx; Y(3) = (jj+1)*dy; Z(3) = 0;
        X(4) = ii*dx;     Y(4) = (jj+1)*dy; Z(4) = 0;
        Name = System.String(' ');
        [ret, Name] = AreaObj.AddByCoord(4, X, Y, Z, Name, 'PLATE_THICK', '', 'Global');
    end
end

%% ── BC: SS en los 4 bordes (w=0, rotaciones libres) ──────────
PointObj = NET.explicitCast(SapModel.PointObj, 'SAP2000v1.cPointObj');
NumberPoints = 0;
PointNames = NET.createArray('System.String', 0);
[ret, NumberPoints, PointNames] = PointObj.GetNameList(NumberPoints, PointNames);
Restraint = NET.createArray('System.Boolean', 6);
% Ux, Uy, Uz, Rx, Ry, Rz — SS: solo Uz fijo
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

%% ── Carga uniforme q=1 N/m² (hacia abajo, Z global) ──────────
LoadPatterns = NET.explicitCast(SapModel.LoadPatterns, 'SAP2000v1.cLoadPatterns');
ret = LoadPatterns.Add('Q', SAP2000v1.eLoadPatternType.Other, 0, true());

NumberAreas = 0;
AreaNames = NET.createArray('System.String', 0);
[ret, NumberAreas, AreaNames] = AreaObj.GetNameList(NumberAreas, AreaNames);
for k = 1:NumberAreas
    aName = char(AreaNames(k));
    ret = AreaObj.SetLoadUniform(aName, 'Q', -q, 10, true(), 'Global');
end

%% ── Guardar, analizar ────────────────────────────────────────
ret = File.Save(ModelPath);
Analyze = NET.explicitCast(SapModel.Analyze, 'SAP2000v1.cAnalyze');
ret = Analyze.RunAnalysis();

%% ── Extraer w_max (max |U3| en todos los joints) ─────────────
AnalysisResults = NET.explicitCast(SapModel.Results, 'SAP2000v1.cAnalysisResults');
AnalysisResultsSetup = NET.explicitCast(AnalysisResults.Setup, 'SAP2000v1.cAnalysisResultsSetup');
ret = AnalysisResultsSetup.DeselectAllCasesAndCombosForOutput;
ret = AnalysisResultsSetup.SetCaseSelectedForOutput('Q');

w_max_sap = 0;
for k = 1:NumberPoints
    pName = char(PointNames(k));
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
    if NumberResults > 0 && abs(U3(1)) > w_max_sap
        w_max_sap = abs(U3(1));
    end
end

ret = SapObject.ApplicationExit(false());

%% ── Tabla de paridad ─────────────────────────────────────────
% Reissner reference (Timoshenko)
D_ref    = E_m * t_m^3 / (12*(1 - nu_m^2));
w_bend   = 0.00406 * q * W_m^4 / D_ref;
G_m      = E_m / (2*(1+nu_m));
w_shear  = 0.0737 * q * W_m^2 / (5/6 * G_m * t_m);
w_reiss  = w_bend + w_shear;
w_heklab = 1.543172e-04;

fprintf('\n═══════════════════════════════════════════════════════════\n');
fprintf('  PLATE THICK Mindlin (t/a=0.25) — SAP2000 vs HekatanLab vs Reissner\n');
fprintf('═══════════════════════════════════════════════════════════\n');
fprintf('  Geometría: %.2fx%.2f, t=%.3f, q=%.1f, malla %dx%d, ShellType=3\n', ...
        W_m, H_m, t_m, q, nx, ny);
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  Source            w_max [m]       Diff vs HekatanLab\n');
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  SAP2000 API       %12.6e   %+8.2f%%\n', w_max_sap, (w_max_sap/w_heklab - 1)*100);
fprintf('  HekatanLab Web    %12.6e        ---\n', w_heklab);
fprintf('  Reissner teórica  %12.6e   %+8.2f%%\n', w_reiss, (w_reiss/w_heklab - 1)*100);
fprintf('  ─────────────────────────────────────────────────────────\n');

SapResult_thick   = w_max_sap;   %#ok<NASGU>
IndResult_thick   = w_reiss;     %#ok<NASGU>
PercentDiff_thick = (w_max_sap / w_reiss) - 1; %#ok<NASGU>
fprintf('\nSapResult_thick   = %.6e\n', w_max_sap);
fprintf('IndResult_thick   = %.6e (Reissner)\n', w_reiss);
fprintf('PercentDiff_thick = %+.4f\n', (w_max_sap/w_reiss - 1));
