%% ════════════════════════════════════════════════════════════════
%  MEMBRANE Q4 — ETABS 18+ API verification (MATLAB R2017a)
%
%  Reproduce el muro cantilever del template FE01b de HekatanLab:
%    Geometría: 5×3 m, t=0.2 (plano XZ)
%    Material:  E=25000, nu=0.2
%    Carga:     P=100 lateral total en el top (Fx global)
%    BC:        empotramiento en la base (Z=0)
%    Malla:     6×4 Q4
%    Sección:   eShellType.Membrane
%
%  NOTA: ETABS está orientado a edificios (stories). Para modelar un muro
%  cantilever simple, usamos PropArea.SetWall con SetWallShellType=Membrane.
%
%  Compara contra HekatanLab Web (FE01b): u_max = 5.7417e-02 m
%
%  USO: matlab -batch "membrane_etabs"
%% ════════════════════════════════════════════════════════════════

clear; clc;

AttachToInstance = false();
SpecifyPath      = false();
ProgramPath      = 'C:\Program Files\Computers and Structures\ETABS 18\ETABS.exe';
APIDLLPath       = 'C:\Program Files\Computers and Structures\ETABS 18\ETABSv1.dll';
ModelDirectory   = 'C:\CSi_ETABS_API_Membrane';
if ~exist(ModelDirectory, 'dir'); mkdir(ModelDirectory); end
ModelPath = strcat(ModelDirectory, filesep, 'membrane_wall.edb');

%% ── Inputs (idénticos a FE01b) ───────────────────────────────
W = 5;  H = 3;  t = 0.2;
P = 100;
E = 25000;  nu = 0.2;
nx = 6;  ny = 4;

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
ret = PropMaterial.SetMaterial('WALL_MAT', ETABSv1.eMatType.Concrete);
ret = PropMaterial.SetMPIsotropic('WALL_MAT', E, nu, 0);

%% ── Sección Wall — eShellType.Membrane ───────────────────────
PropArea = NET.explicitCast(SapModel.PropArea, 'ETABSv1.cPropArea');
ret = PropArea.SetWall('WALL_MEM', ETABSv1.eWallPropType.Specified, ...
                       ETABSv1.eShellType.Membrane, 'WALL_MAT', t);

%% ── Malla en plano XZ (Y=0) ──────────────────────────────────
dx = W/nx;  dz = H/ny;
AreaObj = NET.explicitCast(SapModel.AreaObj, 'ETABSv1.cAreaObj');
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
        [ret, Name] = AreaObj.AddByCoord(4, X, Y, Z, Name, 'WALL_MEM', '', 'Global');
    end
end

%% ── BC: empotramiento en la base (Z=0) ───────────────────────
PointObj = NET.explicitCast(SapModel.PointObj, 'ETABSv1.cPointObj');
NumberPoints = 0;
PointNames = NET.createArray('System.String', 0);
[ret, NumberPoints, PointNames] = PointObj.GetNameList(NumberPoints, PointNames);
RFix = NET.createArray('System.Boolean', 6);
for d = 1:6; RFix(d) = true(); end
ROop = NET.createArray('System.Boolean', 6);
for d = 1:6; ROop(d) = false(); end
ROop(2) = true();  % Uy fijo (out-of-plane)
for k = 1:NumberPoints
    pName = char(PointNames(k));
    X = 0; Y = 0; Z = 0;
    [ret, X, Y, Z] = PointObj.GetCoordCartesian(pName, X, Y, Z);
    if abs(Z) < 1e-6
        ret = PointObj.SetRestraint(pName, RFix);
    else
        ret = PointObj.SetRestraint(pName, ROop);
    end
end

%% ── Carga: P lateral en el top, distribuido en (nx+1) nodos ──
LoadPatterns = NET.explicitCast(SapModel.LoadPatterns, 'ETABSv1.cLoadPatterns');
ret = LoadPatterns.Add('P', ETABSv1.eLoadPatternType.Other, 0, true());
P_per = P / (nx+1);
PtLoad = NET.createArray('System.Double', 6);
for d=1:6; PtLoad(d) = 0; end
PtLoad(1) = P_per;
for k = 1:NumberPoints
    pName = char(PointNames(k));
    X = 0; Y = 0; Z = 0;
    [ret, X, Y, Z] = PointObj.GetCoordCartesian(pName, X, Y, Z);
    if abs(Z - H) < 1e-6
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
    X = 0; Y = 0; Z = 0;
    [ret, X, Y, Z] = PointObj.GetCoordCartesian(pName, X, Y, Z);
    if abs(Z - H) < 1e-6
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
end

ret = ETABSObject.ApplicationExit(false());

%% ── Comparación ──────────────────────────────────────────────
I_w        = t * W^3 / 12;
delta_beam = P * H^3 / (3*E*I_w);
u_heklab   = 5.7417e-02;

fprintf('\n═══════════════════════════════════════════════════════════\n');
fprintf('  MEMBRANE Q4 Cantilever Wall — ETABS vs HekatanLab vs Viga\n');
fprintf('═══════════════════════════════════════════════════════════\n');
fprintf('  %dx%d m, t=%.2f, P=%.0f, malla %dx%d, eShellType.Membrane\n', W, H, t, P, nx, ny);
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  Source            u_max [m]       Diff vs HekatanLab\n');
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  ETABS API         %12.6e   %+8.2f%%\n', u_max_etabs, (u_max_etabs/u_heklab - 1)*100);
fprintf('  HekatanLab Web    %12.6e        ---\n', u_heklab);
fprintf('  Viga Euler-B      %12.6e   %+8.2f%%\n', delta_beam, (delta_beam/u_heklab - 1)*100);
fprintf('  ─────────────────────────────────────────────────────────\n');

ETABSResult_mem = u_max_etabs;
IndResult_mem   = delta_beam;
PercentDiff_mem = (u_max_etabs/delta_beam) - 1;
fprintf('\nETABSResult_mem  = %.6e\n', ETABSResult_mem);
fprintf('IndResult_mem    = %.6e (viga)\n', IndResult_mem);
fprintf('PercentDiff_mem  = %+.4f\n', PercentDiff_mem);
fprintf('Ratio ETABS/HekL = %.4f\n', u_max_etabs/u_heklab);
