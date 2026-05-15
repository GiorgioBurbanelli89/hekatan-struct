%% ════════════════════════════════════════════════════════════════
%  LAYERED PLATE — ETABS 18+ API verification (MATLAB R2017a)
%
%  Reproduce el template FE04 de HekatanLab:
%    Laminado simétrico [0°/90°/90°/0°], 4 capas × 0.05 m
%    Material isotrópico (E=30000, nu=0.2)
%    Placa SS 1×1, q=1 uniforme, malla 4×4.
%    Sección: eShellType.ShellLayered con SetSlabLayer
%
%  REQUISITOS: ETABS 18+ con ETABSv1.dll
%
%  USO: matlab -batch "layered_etabs"
%% ════════════════════════════════════════════════════════════════

clear; clc;

AttachToInstance = false();
SpecifyPath      = false();
ProgramPath      = 'C:\Program Files\Computers and Structures\ETABS 18\ETABS.exe';
APIDLLPath       = 'C:\Program Files\Computers and Structures\ETABS 18\ETABSv1.dll';
ModelDirectory   = 'C:\CSi_ETABS_API_Layered';
if ~exist(ModelDirectory, 'dir'); mkdir(ModelDirectory); end
ModelPath = strcat(ModelDirectory, filesep, 'plate_layered.edb');

%% ── Inputs (idénticos a FE04) ────────────────────────────────
W_m  = 1.0;  H_m = 1.0;
E_m  = 30000;
nu_m = 0.2;
q    = 1.0;
nx   = 4;  ny = 4;

nLayers     = 4;
layerThick  = 0.05;
layerAngles = [0, 90, 90, 0];
tTotal      = nLayers * layerThick;

% Distancia desde fibra media de cada capa al centro del laminado
layerDistance = zeros(1, nLayers);
zEdge = -tTotal/2;
for k = 1:nLayers
    layerDistance(k) = zEdge + layerThick/2;
    zEdge = zEdge + layerThick;
end

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
ret = PropMaterial.SetMaterial('LAYER_MAT', ETABSv1.eMatType.Concrete);
ret = PropMaterial.SetMPIsotropic('LAYER_MAT', E_m, nu_m, 0);

%% ── Sección Slab Layered ─────────────────────────────────────
% Primero declarar la sección (placeholder thickness)
PropArea = NET.explicitCast(SapModel.PropArea, 'ETABSv1.cPropArea');
ret = PropArea.SetSlab('PLATE_LAYERED', ETABSv1.eSlabType.Slab, ...
                       ETABSv1.eShellType.ShellLayered, 'LAYER_MAT', tTotal);

% Definir las capas con SetSlabLayer
LayerName    = NET.createArray('System.String', nLayers);
Dist         = NET.createArray('System.Double', nLayers);
ThickArr     = NET.createArray('System.Double', nLayers);
NumIntegPts  = NET.createArray('System.Int32',  nLayers);
MatPropArr   = NET.createArray('System.String', nLayers);
MatAngleArr  = NET.createArray('System.Double', nLayers);
S11Type      = NET.createArray('System.Int32',  nLayers);
S22Type      = NET.createArray('System.Int32',  nLayers);
S12Type      = NET.createArray('System.Int32',  nLayers);
for k = 1:nLayers
    LayerName(k)   = System.String(['L' int2str(k)]);
    Dist(k)        = layerDistance(k);
    ThickArr(k)    = layerThick;
    NumIntegPts(k) = 3;
    MatPropArr(k)  = System.String('LAYER_MAT');
    MatAngleArr(k) = layerAngles(k);
    S11Type(k)     = 1;
    S22Type(k)     = 1;
    S12Type(k)     = 1;
end
ret = PropArea.SetSlabLayer('PLATE_LAYERED', nLayers, LayerName, ...
        Dist, ThickArr, NumIntegPts, MatPropArr, MatAngleArr, ...
        S11Type, S22Type, S12Type);

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
        [ret, Name] = AreaObj.AddByCoord(4, X, Y, Z, Name, 'PLATE_LAYERED', '', 'Global');
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
D_ref    = E_m * tTotal^3 / (12*(1 - nu_m^2));
w_navier = 0.00406 * q * W_m^4 / D_ref;

fprintf('\n═══════════════════════════════════════════════════════════\n');
fprintf('  LAYERED [0/90/90/0] — ETABS vs Navier isotrópica\n');
fprintf('═══════════════════════════════════════════════════════════\n');
fprintf('  Geometría: %.2fx%.2f, t_total=%.3f (4 capas × %.3f)\n', W_m, H_m, tTotal, layerThick);
fprintf('  Ángulos:   [%g°/%g°/%g°/%g°]\n', layerAngles);
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  Source            w_max [m]\n');
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  ETABS API         %12.6e\n', w_max_etabs);
fprintf('  Navier isotrópica %12.6e (referencia, mismo E,nu,t)\n', w_navier);
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  Diff ETABS / Navier = %+.2f%%\n', (w_max_etabs/w_navier - 1)*100);

ETABSResult_lay = w_max_etabs;
IndResult_lay   = w_navier;
PercentDiff_lay = (w_max_etabs/w_navier) - 1;
fprintf('\nETABSResult_lay  = %.6e\n', ETABSResult_lay);
fprintf('IndResult_lay    = %.6e (Navier)\n', IndResult_lay);
fprintf('PercentDiff_lay  = %+.4f\n', PercentDiff_lay);
