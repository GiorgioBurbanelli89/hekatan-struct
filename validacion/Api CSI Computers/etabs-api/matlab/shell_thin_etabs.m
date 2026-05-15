%% ════════════════════════════════════════════════════════════════
%  SHELL THIN cantilever — ETABS 18+ API verification (R2017a)
%
%  Reproduce FE05:
%    1×1 m, t=0.005, E=200000, nu=0.3
%    Empotramiento en x=0, P=1 lateral en x=W (Fx global)
%    Malla 4×4 plana en XY, sección Wall con eShellType.ShellThin
%
%  Compara contra HekatanLab FE05: u_max = 1.261058e-03
%% ════════════════════════════════════════════════════════════════

clear; clc;

AttachToInstance = false();
SpecifyPath      = false();
ProgramPath      = 'C:\Program Files\Computers and Structures\ETABS 18\ETABS.exe';
APIDLLPath       = 'C:\Program Files\Computers and Structures\ETABS 18\ETABSv1.dll';
ModelDirectory   = 'C:\CSi_ETABS_API_ShellThin';
if ~exist(ModelDirectory, 'dir'); mkdir(ModelDirectory); end
ModelPath = strcat(ModelDirectory, filesep, 'shell_thin.edb');

E = 200000;  nu = 0.3;  t = 0.005;
W = 1.0;     H = 1.0;
P = 1.0;
nx = 4;  ny = 4;

%% ── ETABS ────────────────────────────────────────────────────
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

PropMaterial = NET.explicitCast(SapModel.PropMaterial, 'ETABSv1.cPropMaterial');
ret = PropMaterial.SetMaterial('SHELL_MAT', ETABSv1.eMatType.Steel);
ret = PropMaterial.SetMPIsotropic('SHELL_MAT', E, nu, 0);

%% ── Sección Slab — eShellType.ShellThin ──────────────────────
PropArea = NET.explicitCast(SapModel.PropArea, 'ETABSv1.cPropArea');
ret = PropArea.SetSlab('SHELL_THIN', ETABSv1.eSlabType.Slab, ...
                       ETABSv1.eShellType.ShellThin, 'SHELL_MAT', t);

%% ── Malla en plano XY ────────────────────────────────────────
dx = W/nx;  dy = H/ny;
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
        [ret, Name] = AreaObj.AddByCoord(4, X, Y, Z, Name, 'SHELL_THIN', '', 'Global');
    end
end

%% ── BC empotramiento en x=0 ──────────────────────────────────
PointObj = NET.explicitCast(SapModel.PointObj, 'ETABSv1.cPointObj');
NumberPoints = 0;
PointNames = NET.createArray('System.String', 0);
[ret, NumberPoints, PointNames] = PointObj.GetNameList(NumberPoints, PointNames);
RFix = NET.createArray('System.Boolean', 6);
for d=1:6; RFix(d) = true(); end
for k = 1:NumberPoints
    pName = char(PointNames(k));
    X = 0; Y = 0; Z = 0;
    [ret, X, Y, Z] = PointObj.GetCoordCartesian(pName, X, Y, Z);
    if abs(X) < 1e-6
        ret = PointObj.SetRestraint(pName, RFix);
    end
end

%% ── Carga lateral en x=W ─────────────────────────────────────
LoadPatterns = NET.explicitCast(SapModel.LoadPatterns, 'ETABSv1.cLoadPatterns');
ret = LoadPatterns.Add('P', ETABSv1.eLoadPatternType.Other, 0, true());
P_per = P / (ny+1);
PtLoad = NET.createArray('System.Double', 6);
for d=1:6; PtLoad(d)=0; end
PtLoad(1) = P_per;
for k = 1:NumberPoints
    pName = char(PointNames(k));
    X = 0; Y = 0; Z = 0;
    [ret, X, Y, Z] = PointObj.GetCoordCartesian(pName, X, Y, Z);
    if abs(X - W) < 1e-6
        ret = PointObj.SetLoadForce(pName, 'P', PtLoad, false(), 'Global');
    end
end

%% ── Run ──────────────────────────────────────────────────────
ret = File.Save(ModelPath);
Analyze = NET.explicitCast(SapModel.Analyze, 'ETABSv1.cAnalyze');
ret = Analyze.RunAnalysis();

%% ── Extraer u_max ────────────────────────────────────────────
AnalysisResults = NET.explicitCast(SapModel.Results, 'ETABSv1.cAnalysisResults');
AnalysisResultsSetup = NET.explicitCast(AnalysisResults.Setup, 'ETABSv1.cAnalysisResultsSetup');
ret = AnalysisResultsSetup.DeselectAllCasesAndCombosForOutput;
ret = AnalysisResultsSetup.SetCaseSelectedForOutput('P');

u_max_etabs = 0;
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
    if NumberResults > 0 && abs(U1(1)) > u_max_etabs
        u_max_etabs = abs(U1(1));
    end
end

ret = ETABSObject.ApplicationExit(false());

%% ── Comparación ──────────────────────────────────────────────
delta_mem = P * W / (E * H * t);
u_heklab  = 1.261058e-3;

fprintf('\n═══════════════════════════════════════════════════════════\n');
fprintf('  SHELL THIN (eShellType.ShellThin) — ETABS vs HekatanLab vs Membrana\n');
fprintf('═══════════════════════════════════════════════════════════\n');
fprintf('  %dx%d m, t=%.4f (t/a=%.4f), P=%.2f, malla %dx%d\n', W, H, t, t/W, P, nx, ny);
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  Source            u_max [m]       Diff vs HekatanLab\n');
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  ETABS API         %12.6e   %+8.2f%%\n', u_max_etabs, (u_max_etabs/u_heklab - 1)*100);
fprintf('  HekatanLab Web    %12.6e        ---\n', u_heklab);
fprintf('  Membrana axial    %12.6e   %+8.2f%%\n', delta_mem, (delta_mem/u_heklab - 1)*100);
fprintf('  ─────────────────────────────────────────────────────────\n');

ETABSResult_st = u_max_etabs;
IndResult_st   = delta_mem;
PercentDiff_st = (u_max_etabs/delta_mem) - 1;
fprintf('\nETABSResult_st = %.6e\n', ETABSResult_st);
fprintf('IndResult_st   = %.6e (membrana axial)\n', IndResult_st);
fprintf('PercentDiff_st = %+.4f\n', PercentDiff_st);
