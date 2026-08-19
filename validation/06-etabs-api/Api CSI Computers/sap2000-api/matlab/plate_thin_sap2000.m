%% ════════════════════════════════════════════════════════════════
%  PLATE THIN — SAP2000 v23+ API verification (MATLAB R2017a script)
%
%  Misma placa SS 1x1x0.05 con carga uniforme q=1, malla 4x4.
%  Compara w_max contra Navier (analítica) y HekatanLab.
%
%  REQUISITOS:
%    - SAP2000 v23+ instalado
%    - SAP2000v1.dll en APIDLLPath
%
%  USO:
%    >> plate_thin_sap2000
%% ════════════════════════════════════════════════════════════════

clear; clc;

AttachToInstance = false();
SpecifyPath      = false();
ProgramPath      = 'C:\Program Files\Computers and Structures\SAP2000 23\SAP2000.exe';
APIDLLPath       = 'C:\Program Files\Computers and Structures\SAP2000 23\SAP2000v1.dll';
ModelDirectory   = 'C:\CSi_SAP2000_API_PlateThin';
if ~exist(ModelDirectory, 'dir'); mkdir(ModelDirectory); end
ModelPath = strcat(ModelDirectory, filesep, 'plate_thin.sdb');

%% ── Inputs ────────────────────────────────────────────────────
W_m = 1.0;  H_m = 1.0;
t_m = 0.05;
E_m = 30000;
nu_m = 0.2;
q   = 1.0;
nx  = 4;  ny = 4;

%% ── Conectar a SAP2000 ────────────────────────────────────────
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

%% ── Sección area (plate-thin) ─────────────────────────────────
PropArea = NET.explicitCast(SapModel.PropArea, 'SAP2000v1.cPropArea');
% SetShell_1 args: Name, ShellType, IncludeDrillingDOF, MatProp,
%                  MatAngle, Thickness, BendingThickness
% ShellType: 1 = Shell, 2 = Plate-Thin, 3 = Plate-Thick, 4 = Membrane, ...
ret = PropArea.SetShell_1('SHELL_THIN', 2, false(), 'PLATE_MAT', 0, t_m, t_m);

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
        [ret, Name] = AreaObj.AddByCoord(4, X, Y, Z, Name, 'SHELL_THIN', '', 'Global');
    end
end

%% ── BCs: SS en los 4 bordes (w=0) ────────────────────────────
PointObj = NET.explicitCast(SapModel.PointObj, 'SAP2000v1.cPointObj');
NumberPoints = 0;
PointNames = NET.createArray('System.String', 0);
[ret, NumberPoints, PointNames] = PointObj.GetNameList(NumberPoints, PointNames);
Restraint = NET.createArray('System.Boolean', 6);
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

%% ── Carga ────────────────────────────────────────────────────
LoadPatterns = NET.explicitCast(SapModel.LoadPatterns, 'SAP2000v1.cLoadPatterns');
ret = LoadPatterns.Add('Q', SAP2000v1.eLoadPatternType.Other, 0, true());
NumberAreas = 0;
AreaNames = NET.createArray('System.String', 0);
[ret, NumberAreas, AreaNames] = AreaObj.GetNameList(NumberAreas, AreaNames);
for k = 1:NumberAreas
    aName = char(AreaNames(k));
    ret = AreaObj.SetLoadUniform(aName, 'Q', -q, 10, true(), 'Global');
end

ret = File.Save(ModelPath);
Analyze = NET.explicitCast(SapModel.Analyze, 'SAP2000v1.cAnalyze');
ret = Analyze.RunAnalysis();

%% ── Resultados ───────────────────────────────────────────────
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
    if NumberResults > 0
        if abs(U3(1)) > w_max_sap
            w_max_sap = abs(U3(1));
        end
    end
end

ret = SapObject.ApplicationExit(false());

%% ── Comparación ──────────────────────────────────────────────
D_ref     = E_m * t_m^3 / (12*(1 - nu_m^2));
w_navier  = 0.00406 * q * W_m^4 / D_ref;
w_heklab  = 1.371347e-02;

fprintf('\n═══════════════════════════════════════════════════════════\n');
fprintf('  PLATE THIN Mindlin (t/a=0.05) — SAP2000 vs HekatanLab vs Navier\n');
fprintf('═══════════════════════════════════════════════════════════\n');
fprintf('  Geometría: %.2fx%.2f, t=%.3f, q=%.1f, malla %dx%d, ShellType=2\n', ...
        W_m, H_m, t_m, q, nx, ny);
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  Source            w_max [m]       Diff vs HekatanLab\n');
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  SAP2000 API       %12.6e   %+8.2f%%\n', w_max_sap, (w_max_sap/w_heklab - 1)*100);
fprintf('  HekatanLab Web    %12.6e        ---\n', w_heklab);
fprintf('  Navier teórica    %12.6e   %+8.2f%%\n', w_navier, (w_navier/w_heklab - 1)*100);
fprintf('  ─────────────────────────────────────────────────────────\n');

SapResult_thin   = w_max_sap;
IndResult_thin   = w_navier;
PercentDiff_thin = (w_max_sap/w_navier) - 1;
fprintf('\nSapResult_thin   = %.6e\n', SapResult_thin);
fprintf('IndResult_thin   = %.6e (Navier alpha=0.00406)\n', IndResult_thin);
fprintf('PercentDiff_thin = %+.4f\n', PercentDiff_thin);
