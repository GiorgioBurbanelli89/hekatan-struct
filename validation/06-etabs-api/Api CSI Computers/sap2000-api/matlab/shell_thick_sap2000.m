%% ════════════════════════════════════════════════════════════════
%  SHELL THICK — SAP2000 API verification (MATLAB R2017a)
%
%  Reproduce el cantilever shell grueso del template FE06:
%    0.5×0.5 m, t=0.05 (t/a=0.1)
%    E=200000 MPa, nu=0.3
%    Empotramiento en x=0, carga lateral P=100 en x=W (Fx global)
%    Malla 3×3 Q4 plana en plano XY
%    Sección Shell-Thick (ShellType=1 con thick formulation).
%
%  Compara contra HekatanLab Web (FE06): u_max = 1.2528e-02 m
%
%  USO: matlab -batch "shell_thick_sap2000"
%% ════════════════════════════════════════════════════════════════

clear; clc;

AttachToInstance = false();
SpecifyPath      = false();
ProgramPath      = 'C:\Program Files\Computers and Structures\SAP2000 21\SAP2000.exe';
APIDLLPath       = 'C:\Program Files\Computers and Structures\SAP2000 21\SAP2000v1.dll';
ModelDirectory   = 'C:\CSi_SAP2000_API_ShellThick';
if ~exist(ModelDirectory, 'dir'); mkdir(ModelDirectory); end
ModelPath = strcat(ModelDirectory, filesep, 'shell_thick.sdb');

%% ── Inputs (idénticos a FE06) ────────────────────────────────
E    = 200000;
nu   = 0.3;
t    = 0.05;
W    = 0.5;  H = 0.5;
P    = 100;
nx   = 3;  ny = 3;

%% ── SAP2000 ──────────────────────────────────────────────────
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

PropMaterial = NET.explicitCast(SapModel.PropMaterial, 'SAP2000v1.cPropMaterial');
ret = PropMaterial.SetMaterial('SHELL_MAT', SAP2000v1.eMatType.Steel);
ret = PropMaterial.SetMPIsotropic('SHELL_MAT', E, nu, 0);

%% ── Sección Shell (thick formulation activada por defecto en SAP) ──
% SAP2000 por defecto usa formulación "thick" en Shell. Si quisiéramos
% forzar thick puro, podríamos usar SetShellDesign + modifiers, pero
% ShellType=1 ya incluye shear deformation.
PropArea = NET.explicitCast(SapModel.PropArea, 'SAP2000v1.cPropArea');
ret = PropArea.SetShell_1('SHELL_THICK', 1, false(), 'SHELL_MAT', 0, t, t);

%% ── Malla ───────────────────────────────────────────────────
dx = W/nx;  dy = H/ny;
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
        [ret, Name] = AreaObj.AddByCoord(4, X, Y, Z, Name, 'SHELL_THICK', '', 'Global');
    end
end

%% ── BC empotramiento en x=0 ──────────────────────────────────
PointObj = NET.explicitCast(SapModel.PointObj, 'SAP2000v1.cPointObj');
NumberPoints = 0;
PointNames = NET.createArray('System.String', 0);
[ret, NumberPoints, PointNames] = PointObj.GetNameList(NumberPoints, PointNames);
RFix = NET.createArray('System.Boolean', 6);
for d = 1:6; RFix(d) = true(); end
for k = 1:NumberPoints
    pName = char(PointNames(k));
    X = 0; Y = 0; Z = 0;
    [ret, X, Y, Z] = PointObj.GetCoordCartesian(pName, X, Y, Z);
    if abs(X) < 1e-6
        ret = PointObj.SetRestraint(pName, RFix);
    end
end

%% ── Carga lateral ────────────────────────────────────────────
LoadPatterns = NET.explicitCast(SapModel.LoadPatterns, 'SAP2000v1.cLoadPatterns');
ret = LoadPatterns.Add('P', SAP2000v1.eLoadPatternType.Other, 0, true());
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
Analyze = NET.explicitCast(SapModel.Analyze, 'SAP2000v1.cAnalyze');
ret = Analyze.RunAnalysis();

AnalysisResults = NET.explicitCast(SapModel.Results, 'SAP2000v1.cAnalysisResults');
AnalysisResultsSetup = NET.explicitCast(AnalysisResults.Setup, 'SAP2000v1.cAnalysisResultsSetup');
ret = AnalysisResultsSetup.DeselectAllCasesAndCombosForOutput;
ret = AnalysisResultsSetup.SetCaseSelectedForOutput('P');

u_max_sap = 0;
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
    if NumberResults > 0 && abs(U1(1)) > u_max_sap
        u_max_sap = abs(U1(1));
    end
end

ret = SapObject.ApplicationExit(false());

%% ── Comparación ──────────────────────────────────────────────
delta_mem = P * W / (E * H * t);
u_heklab  = 1.2528e-2;

fprintf('\n═══════════════════════════════════════════════════════════\n');
fprintf('  SHELL THICK cantilever — SAP2000 vs HekatanLab vs Membrana axial\n');
fprintf('═══════════════════════════════════════════════════════════\n');
fprintf('  %.2fx%.2f m, t=%.3f (t/a=%.3f), P=%.0f, malla %dx%d, ShellType=1\n', ...
        W, H, t, t/W, P, nx, ny);
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  Source            u_max [m]       Diff vs HekatanLab\n');
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  SAP2000 API       %12.6e   %+8.2f%%\n', u_max_sap, (u_max_sap/u_heklab - 1)*100);
fprintf('  HekatanLab Web    %12.6e        ---\n', u_heklab);
fprintf('  Membrana axial    %12.6e   %+8.2f%%\n', delta_mem, (delta_mem/u_heklab - 1)*100);
fprintf('  ─────────────────────────────────────────────────────────\n');

SapResult_sthk   = u_max_sap;
IndResult_sthk   = delta_mem;
PercentDiff_sthk = (u_max_sap/delta_mem) - 1;
fprintf('\nSapResult_sthk    = %.6e\n', SapResult_sthk);
fprintf('IndResult_sthk    = %.6e (membrana axial)\n', IndResult_sthk);
fprintf('PercentDiff_sthk  = %+.4f\n', PercentDiff_sthk);
