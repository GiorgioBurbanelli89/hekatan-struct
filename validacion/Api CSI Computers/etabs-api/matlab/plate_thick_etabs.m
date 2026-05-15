%% ════════════════════════════════════════════════════════════════
%  PLATE THICK — ETABS 18+ API verification (MATLAB R2017a)
%
%  Reproduce el template FE03 de HekatanLab (placa gruesa Mindlin).
%    Geometría: 1×1, t=0.25 (t/a=0.25)
%    Material:  E=30000, nu=0.2
%    Carga:     q=1 uniforme
%    BC:        simply-supported (Uz=0 en bordes)
%    Malla:     4×4 Q4
%    Sección:   eShellType.ShellThick
%
%  Compara contra HekatanLab Web (FE03): w_max = 1.543172e-04
%  Compara contra Reissner-Timoshenko:    w_max = 1.280794e-04
%
%  USO: matlab -batch "plate_thick_etabs"
%% ════════════════════════════════════════════════════════════════

clear; clc;

AttachToInstance = false();
SpecifyPath      = false();
ProgramPath      = 'C:\Program Files\Computers and Structures\ETABS 18\ETABS.exe';
APIDLLPath       = 'C:\Program Files\Computers and Structures\ETABS 18\ETABSv1.dll';
ModelDirectory   = 'C:\CSi_ETABS_API_PlateThick';
if ~exist(ModelDirectory, 'dir'); mkdir(ModelDirectory); end
ModelPath = strcat(ModelDirectory, filesep, 'plate_thick.edb');

%% ── Inputs (idénticos a HekatanLab FE03) ──────────────────────
W_m  = 1.0;  H_m = 1.0;
t_m  = 0.25;
E_m  = 30000;
nu_m = 0.2;
q    = 1.0;
nx   = 4;  ny = 4;

%% ── Conectar a ETABS ─────────────────────────────────────────
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
ret = SapModel.SetPresentUnits(ETABSv1.eUnits.N_m_C);

%% ── Material ─────────────────────────────────────────────────
PropMaterial = NET.explicitCast(SapModel.PropMaterial, 'ETABSv1.cPropMaterial');
ret = PropMaterial.SetMaterial('PLATE_MAT', ETABSv1.eMatType.Concrete);
ret = PropMaterial.SetMPIsotropic('PLATE_MAT', E_m, nu_m, 0);

%% ── Sección Slab — eShellType.ShellThick ─────────────────────
PropArea = NET.explicitCast(SapModel.PropArea, 'ETABSv1.cPropArea');
ret = PropArea.SetSlab('PLATE_THICK', ETABSv1.eSlabType.Slab, ...
                       ETABSv1.eShellType.ShellThick, 'PLATE_MAT', t_m);

%% ── Malla ────────────────────────────────────────────────────
dx = W_m/nx;  dy = H_m/ny;
AreaObj = NET.explicitCast(SapModel.AreaObj, 'ETABSv1.cAreaObj');
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

%% ── BC: SS (Uz=0 en bordes) ──────────────────────────────────
PointObj = NET.explicitCast(SapModel.PointObj, 'ETABSv1.cPointObj');
NumberPoints = 0;
PointNames = NET.createArray('System.String', 0);
[ret, NumberPoints, PointNames] = PointObj.GetNameList(NumberPoints, PointNames);
Restraint = NET.createArray('System.Boolean', 6);
Restraint(1)=false(); Restraint(2)=false(); Restraint(3)=true();
Restraint(4)=false(); Restraint(5)=false(); Restraint(6)=false();
for k = 1:NumberPoints
    pName = char(PointNames(k));
    X = 0; Y = 0; Z = 0;
    [ret, X, Y, Z] = PointObj.GetCoordCartesian(pName, X, Y, Z);
    if abs(X) < 1e-6 || abs(X-W_m) < 1e-6 || abs(Y) < 1e-6 || abs(Y-H_m) < 1e-6
        ret = PointObj.SetRestraint(pName, Restraint);
    end
end

%% ── Carga uniforme ───────────────────────────────────────────
LoadPatterns = NET.explicitCast(SapModel.LoadPatterns, 'ETABSv1.cLoadPatterns');
ret = LoadPatterns.Add('Q', ETABSv1.eLoadPatternType.Other, 0, true());
NumberAreas = 0;
AreaNames = NET.createArray('System.String', 0);
[ret, NumberAreas, AreaNames] = AreaObj.GetNameList(NumberAreas, AreaNames);
for k = 1:NumberAreas
    aName = char(AreaNames(k));
    ret = AreaObj.SetLoadUniform(aName, 'Q', -q, 10, true(), 'Global');
end

%% ── Run ──────────────────────────────────────────────────────
ret = File.Save(ModelPath);
Analyze = NET.explicitCast(SapModel.Analyze, 'ETABSv1.cAnalyze');
ret = Analyze.RunAnalysis();

%% ── Extraer w_max ────────────────────────────────────────────
AnalysisResults = NET.explicitCast(SapModel.Results, 'ETABSv1.cAnalysisResults');
AnalysisResultsSetup = NET.explicitCast(AnalysisResults.Setup, 'ETABSv1.cAnalysisResultsSetup');
ret = AnalysisResultsSetup.DeselectAllCasesAndCombosForOutput;
ret = AnalysisResultsSetup.SetCaseSelectedForOutput('Q');

w_max_etabs = 0;
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
        AnalysisResults.JointDispl(pName, ETABSv1.eItemTypeElm.ObjectElm, ...
                                   NumberResults, Obj, Elm, ACase, StepType, StepNum, ...
                                   U1, U2, U3, R1, R2, R3);
    if NumberResults > 0 && abs(U3(1)) > w_max_etabs
        w_max_etabs = abs(U3(1));
    end
end

ret = ETABSObject.ApplicationExit(false());

%% ── Comparación ──────────────────────────────────────────────
D_ref    = E_m * t_m^3 / (12*(1 - nu_m^2));
G_m      = E_m / (2*(1+nu_m));
w_bend   = 0.00406 * q * W_m^4 / D_ref;
w_shear  = 0.0737 * q * W_m^2 / (5/6 * G_m * t_m);
w_reiss  = w_bend + w_shear;
w_heklab = 1.543172e-04;

fprintf('\n═══════════════════════════════════════════════════════════\n');
fprintf('  PLATE THICK (eShellType.ShellThick) — ETABS vs HekatanLab vs Reissner\n');
fprintf('═══════════════════════════════════════════════════════════\n');
fprintf('  Geometría: %.2fx%.2f, t=%.3f, q=%.1f, malla %dx%d\n', W_m, H_m, t_m, q, nx, ny);
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  Source            w_max [m]       Diff vs HekatanLab\n');
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  ETABS API         %12.6e   %+8.2f%%\n', w_max_etabs, (w_max_etabs/w_heklab - 1)*100);
fprintf('  HekatanLab Web    %12.6e        ---\n', w_heklab);
fprintf('  Reissner teórica  %12.6e   %+8.2f%%\n', w_reiss, (w_reiss/w_heklab - 1)*100);
fprintf('  ─────────────────────────────────────────────────────────\n');

ETABSResult_thick = w_max_etabs;
IndResult_thick   = w_reiss;
PercentDiff_thick = (w_max_etabs/w_reiss) - 1;
fprintf('\nETABSResult_thick = %.6e\n', ETABSResult_thick);
fprintf('IndResult_thick   = %.6e (Reissner)\n', IndResult_thick);
fprintf('PercentDiff_thick = %+.4f\n', PercentDiff_thick);
