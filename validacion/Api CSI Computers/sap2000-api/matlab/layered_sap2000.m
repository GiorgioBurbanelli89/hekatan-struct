%% ════════════════════════════════════════════════════════════════
%  LAYERED PLATE — SAP2000 API verification (MATLAB R2017a)
%
%  Reproduce el template FE04 de HekatanLab:
%    Laminado simétrico cross-ply [0°/90°/90°/0°], 4 capas × 0.05 m
%    Material isotrópico igual en todas (E=30000, nu=0.2)
%    Placa SS 1×1, q=1 uniforme, malla 4×4.
%
%  En SAP2000 se usa ShellType=Layered (código 5 en eShellType) y se
%  define cada capa con SetShellLayer_1.
%
%  REQUISITOS: SAP2000 v21+ con SAP2000v1.dll
%
%  USO: matlab -batch "layered_sap2000"
%% ════════════════════════════════════════════════════════════════

clear; clc;

%% ── Configuración API ────────────────────────────────────────
AttachToInstance = false();
SpecifyPath      = false();
ProgramPath      = 'C:\Program Files\Computers and Structures\SAP2000 21\SAP2000.exe';
APIDLLPath       = 'C:\Program Files\Computers and Structures\SAP2000 21\SAP2000v1.dll';
ModelDirectory   = 'C:\CSi_SAP2000_API_Layered';
if ~exist(ModelDirectory, 'dir'); mkdir(ModelDirectory); end
ModelPath = strcat(ModelDirectory, filesep, 'plate_layered.sdb');

%% ── Inputs (idénticos a FE04) ────────────────────────────────
W_m  = 1.0;  H_m = 1.0;
E_m  = 30000;
nu_m = 0.2;
q    = 1.0;
nx   = 4;  ny = 4;

% Laminado [0°/90°/90°/0°] cross-ply, 4 capas × 0.05 = 0.2 m total
nLayers     = 4;
layerThick  = 0.05;
layerAngles = [0, 90, 90, 0];
tTotal      = nLayers * layerThick;
% Distancia desde fibra media de cada capa al centro del laminado
% Centro a -0.10, -0.05, 0.05, 0.10 (centro de cada capa de 0.05)
% Z (interfases): -0.1, -0.05, 0, 0.05, 0.1
% Z_centroide capa = (-0.1+-0.05)/2 = -0.075, etc.
layerDistance = zeros(1, nLayers);
zEdge = -tTotal/2;
for k = 1:nLayers
    layerDistance(k) = zEdge + layerThick/2;
    zEdge = zEdge + layerThick;
end

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

%% ── Material ─────────────────────────────────────────────────
PropMaterial = NET.explicitCast(SapModel.PropMaterial, 'SAP2000v1.cPropMaterial');
ret = PropMaterial.SetMaterial('LAYER_MAT', SAP2000v1.eMatType.Concrete);
ret = PropMaterial.SetMPIsotropic('LAYER_MAT', E_m, nu_m, 0);

%% ── Sección Shell-Layered con SetShellLayer_1 ────────────────
PropArea = NET.explicitCast(SapModel.PropArea, 'SAP2000v1.cPropArea');

% Primero declarar la sección como shell-layered (placeholder)
% (algunas versiones de SAP requieren SetShell_1 con un tipo cualquiera
% antes de SetShellLayer; otras lo crean directamente con SetShellLayer_1)
ret = PropArea.SetShell_1('PLATE_LAYERED', 1, false(), 'LAYER_MAT', 0, tTotal, tTotal);

% Ahora definir las capas
LayerName     = NET.createArray('System.String', nLayers);
Dist          = NET.createArray('System.Double', nLayers);
ThickArr      = NET.createArray('System.Double', nLayers);
MyType        = NET.createArray('System.Int32',  nLayers);    % 1=Shell, 2=Membrane, 3=Plate
NumIntegPts   = NET.createArray('System.Int32',  nLayers);
MatPropArr    = NET.createArray('System.String', nLayers);
MatAngleArr   = NET.createArray('System.Double', nLayers);
S11Type       = NET.createArray('System.Int32',  nLayers);   % material behavior s11
S22Type       = NET.createArray('System.Int32',  nLayers);   % material behavior s22
S12Type       = NET.createArray('System.Int32',  nLayers);   % material behavior s12
for k = 1:nLayers
    LayerName(k)   = System.String(['L' int2str(k)]);
    Dist(k)        = layerDistance(k);
    ThickArr(k)    = layerThick;
    MyType(k)      = 1;                  % full shell
    NumIntegPts(k) = 3;
    MatPropArr(k)  = System.String('LAYER_MAT');
    MatAngleArr(k) = layerAngles(k);
    S11Type(k)     = 1;                  % linear isotropic
    S22Type(k)     = 1;
    S12Type(k)     = 1;
end
ret = PropArea.SetShellLayer_1('PLATE_LAYERED', nLayers, LayerName, ...
        Dist, ThickArr, MyType, NumIntegPts, MatPropArr, MatAngleArr, ...
        S11Type, S22Type, S12Type);

%% ── Malla 4×4 (mismo grid que plate thin) ────────────────────
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
        [ret, Name] = AreaObj.AddByCoord(4, X, Y, Z, Name, 'PLATE_LAYERED', '', 'Global');
    end
end

%% ── BC: SS (Uz=0 en los 4 bordes) ────────────────────────────
PointObj = NET.explicitCast(SapModel.PointObj, 'SAP2000v1.cPointObj');
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
    on_bd = (abs(X) < 1e-6) || (abs(X - W_m) < 1e-6) || ...
            (abs(Y) < 1e-6) || (abs(Y - H_m) < 1e-6);
    if on_bd
        ret = PointObj.SetRestraint(pName, Restraint);
    end
end

%% ── Carga uniforme ───────────────────────────────────────────
LoadPatterns = NET.explicitCast(SapModel.LoadPatterns, 'SAP2000v1.cLoadPatterns');
ret = LoadPatterns.Add('Q', SAP2000v1.eLoadPatternType.Other, 0, true());
NumberAreas = 0;
AreaNames = NET.createArray('System.String', 0);
[ret, NumberAreas, AreaNames] = AreaObj.GetNameList(NumberAreas, AreaNames);
for k = 1:NumberAreas
    aName = char(AreaNames(k));
    ret = AreaObj.SetLoadUniform(aName, 'Q', -q, 10, true(), 'Global');
end

%% ── Analizar ─────────────────────────────────────────────────
ret = File.Save(ModelPath);
Analyze = NET.explicitCast(SapModel.Analyze, 'SAP2000v1.cAnalyze');
ret = Analyze.RunAnalysis();

%% ── Extraer w_max ────────────────────────────────────────────
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

%% ── Comparación ──────────────────────────────────────────────
% Referencia: placa isotrópica equivalente con t=0.2 (mismo material)
D_ref     = E_m * tTotal^3 / (12*(1 - nu_m^2));
w_navier  = 0.00406 * q * W_m^4 / D_ref;
% HekatanLab FE04 muestra Db ABD; deflexión depende del cómputo. Aquí
% comparamos contra la solución isotrópica equivalente (el laminado
% [0/90/90/0] simétrico de material isotrópico es ISOTRÓPICO también).

fprintf('\n═══════════════════════════════════════════════════════════\n');
fprintf('  LAYERED PLATE [0/90/90/0] — SAP2000 vs Navier isotrópica\n');
fprintf('═══════════════════════════════════════════════════════════\n');
fprintf('  Geometría: %.2fx%.2f, t_total=%.3f (4 capas × %.3f)\n', ...
        W_m, H_m, tTotal, layerThick);
fprintf('  Ángulos:   [%g°/%g°/%g°/%g°]\n', layerAngles);
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  Source            w_max [m]\n');
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  SAP2000 API       %12.6e\n', w_max_sap);
fprintf('  Navier isotrópica %12.6e (referencia, mismo E,nu,t)\n', w_navier);
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  Diff SAP / Navier = %+.2f%%\n', (w_max_sap/w_navier - 1)*100);

SapResult_lay   = w_max_sap;   %#ok<NASGU>
IndResult_lay   = w_navier;    %#ok<NASGU>
PercentDiff_lay = (w_max_sap/w_navier) - 1; %#ok<NASGU>

fprintf('\nSapResult_lay    = %.6e\n', w_max_sap);
fprintf('IndResult_lay    = %.6e (Navier)\n', w_navier);
fprintf('PercentDiff_lay  = %+.4f\n', (w_max_sap/w_navier) - 1);
