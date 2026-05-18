import os
import sys

# set the following flag to true to select the .NET Core run-time environment,
# false to select .NET Framework run-time environment.
UseNETCore = True # False #

if UseNETCore:
    from pythonnet import load
    load("coreclr")
    import clr

else:
    import clr

    clr.AddReference("System.Runtime.InteropServices")
    from System.Runtime.InteropServices import Marshal

from enum import Enum

#set the following path to the installed ETABS program directory
clr.AddReference(R'C:\Program Files\Computers and Structures\ETABS 22\ETABSv1.dll')
from ETABSv1 import *

#set the following flag to True to execute on a remote computer
Remote = False

#if the above flag is True, set the following variable to the hostname of the remote computer
#remember that the remote computer must have ETABS installed and be running the CSiAPIService.exe
RemoteComputer = "SpareComputer-DT"

#set the following flag to True to attach to an existing instance of the program
#otherwise a new instance of the program will be started
AttachToInstance = False

#set the following flag to True to manually specify the path to ETABS.exe
#this allows for a connection to a version of ETABS other than the latest installation
#otherwise the latest installed version of ETABS will be launched
SpecifyPath = False

#if the above flag is set to True, specify the path to ETABS below
ProgramPath = R'C:\Program Files\Computers and Structures\ETABS 22\ETABS.exe'

#full path to the model
#set it to the desired path of your model
APIPath = R'C:\CSi_ETABS_API_Example'
if not os.path.exists(APIPath):
    try:
        os.makedirs(APIPath)
    except OSError:
        pass
ModelPath = APIPath + os.sep + R'API_1-001.edb'

#create API helper object
helper = cHelper(Helper())

if AttachToInstance:
    #attach to a running instance of ETABS
    try:
        #get the active ETABS object
        if Remote:
            myETABSObject = cOAPI(helper.GetObjectHost(RemoteComputer, "CSI.ETABS.API.ETABSObject"))
        else:
            myETABSObject = cOAPI(helper.GetObject("CSI.ETABS.API.ETABSObject"))
    except:
        print("No running instance of the program found or failed to attach.")
        sys.exit(-1)

else:
    if SpecifyPath:
        try:
            #'create an instance of the ETABS object from the specified path
            if Remote:
                myETABSObject = cOAPI(helper.CreateObjectHost(RemoteComputer, ProgramPath))
            else:
                myETABSObject = cOAPI(helper.CreateObject(ProgramPath))
        except :
            print("Cannot start a new instance of the program from " + ProgramPath)
            sys.exit(-1)
    else:

        try:
            #create an instance of the ETABS object from the latest installed ETABS
            if Remote:
                myETABSObject = cOAPI(helper.CreateObjectProgIDHost(RemoteComputer, "CSI.ETABS.API.ETABSObject"))
            else:
                myETABSObject = cOAPI(helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject"))

        except:
            print("Cannot start a new instance of the program.")
            sys.exit(-1)

    #start ETABS application
    myETABSObject.ApplicationStart()

#create SapModel object
SapModel = cSapModel(myETABSObject.SapModel)

#initialize model
kip_in_F = 3
SapModel.InitializeNewModel(eUnits(kip_in_F))

#create new blank model
File = cFile(SapModel.File)
ret = File.NewBlank()

#define material property
MATERIAL_CONCRETE = 2
PropMaterial = cPropMaterial(SapModel.PropMaterial)
ret = PropMaterial.SetMaterial('CONC', eMatType(MATERIAL_CONCRETE))

#assign isotropic mechanical properties to material
ret = PropMaterial.SetMPIsotropic('CONC', 3600, 0.2, 0.0000055)

#define rectangular frame section property
PropFrame = cPropFrame(SapModel.PropFrame)
ret = PropFrame.SetRectangle('R1', 'CONC', 12, 12)

#define frame section property modifiers
ModValue = [1000, 0, 0, 1, 1, 1, 1, 1]
ret = PropFrame.SetModifiers('R1', ModValue)

#switch to k-ft units
kip_ft_F = 4
ret = SapModel.SetPresentUnits(eUnits(kip_ft_F))

#add frame object by coordinates
FrameObj = cFrameObj(SapModel.FrameObj)
FrameName1 = ' '
FrameName2 = ' '
FrameName3 = ' '
[ret, FrameName1] = FrameObj.AddByCoord(0, 0, 0, 0, 0, 10, FrameName1, 'R1', '1', 'Global')
[ret, FrameName2] = FrameObj.AddByCoord(0, 0, 10, 8, 0, 16, FrameName2, 'R1', '2', 'Global')
[ret, FrameName3] = FrameObj.AddByCoord(-4, 0, 10, 0, 0, 10, FrameName3, 'R1', '3', 'Global')

#assign point object restraint at base
PointObj = cPointObj(SapModel.PointObj)
PointName1 = ' '
PointName2 = ' '
Restraint = [True, True, True, True, False, False]
[ret, PointName1, PointName2] = FrameObj.GetPoints(FrameName1, PointName1, PointName2)
ret = PointObj.SetRestraint(PointName1, Restraint)

#assign point object restraint at top
Restraint = [True, True, False, False, False, False]
[ret, PointName1, PointName2] = FrameObj.GetPoints(FrameName2, PointName1, PointName2)
ret = PointObj.SetRestraint(PointName2, Restraint)

#refresh view, update (initialize) zoom
View = cView(SapModel.View)
ret = View.RefreshView(0, False)

#add load patterns
LTYPE_OTHER = 8
LoadPatterns = cLoadPatterns(SapModel.LoadPatterns)

ret = LoadPatterns.Add('1', eLoadPatternType(LTYPE_OTHER), 1, True)
ret = LoadPatterns.Add('2', eLoadPatternType(LTYPE_OTHER), 0, True)
ret = LoadPatterns.Add('3', eLoadPatternType(LTYPE_OTHER), 0, True)
ret = LoadPatterns.Add('4', eLoadPatternType(LTYPE_OTHER), 0, True)
ret = LoadPatterns.Add('5', eLoadPatternType(LTYPE_OTHER), 0, True)
ret = LoadPatterns.Add('6', eLoadPatternType(LTYPE_OTHER), 0, True)
ret = LoadPatterns.Add('7', eLoadPatternType(LTYPE_OTHER), 0, True)

#assign loading for load pattern 2
[ret, PointName1, PointName2] = FrameObj.GetPoints(FrameName3, PointName1, PointName2)
PointLoadValue = [0,0,-10,0,0,0]
ret = PointObj.SetLoadForce(PointName1, '2', PointLoadValue)
ret = FrameObj.SetLoadDistributed(FrameName3, '2', 1, 10, 0, 1, 1.8, 1.8)

#assign loading for load pattern 3
[ret, PointName1, PointName2] = FrameObj.GetPoints(FrameName3, PointName1, PointName2)
PointLoadValue = [0,0,-17.2,0,-54.4,0]
ret = PointObj.SetLoadForce(PointName2, '3', PointLoadValue)

#assign loading for load pattern 4
ret = FrameObj.SetLoadDistributed(FrameName2, '4', 1, 11, 0, 1, 2, 2)

#assign loading for load pattern 5
ret = FrameObj.SetLoadDistributed(FrameName1, '5', 1, 2, 0, 1, 2, 2, 'Local')
ret = FrameObj.SetLoadDistributed(FrameName2, '5', 1, 2, 0, 1, -2, -2, 'Local')

#assign loading for load pattern 6
ret = FrameObj.SetLoadDistributed(FrameName1, '6', 1, 2, 0, 1, 0.9984, 0.3744, 'Local')
ret = FrameObj.SetLoadDistributed(FrameName2, '6', 1, 2, 0, 1, -0.3744, 0, 'Local')

#assign loading for load pattern 7
ret = FrameObj.SetLoadPoint(FrameName2, '7', 1, 2, 0.5, -15, 'Local')

#switch to k-in units
kip_in_F = 3
ret = SapModel.SetPresentUnits(eUnits(kip_in_F))

#save model
File = cFile(SapModel.File)
ret = File.Save(ModelPath)

#run model (this will create the analysis model)
Analyze = cAnalyze(SapModel.Analyze)
ret = Analyze.RunAnalysis()

#initialize for results
ProgramResult = [0,0,0,0,0,0,0]
[ret, PointName1, PointName2] = FrameObj.GetPoints(FrameName2, PointName1, PointName2)

#get results for load cases 1 through 7
Results = cAnalysisResults(SapModel.Results)
Setup = cAnalysisResultsSetup(Results.Setup)
for i in range(0,7):
      NumberResults = 0
      Obj = []
      Elm = []
      ACase = []
      StepType = []
      StepNum = []
      U1 = []
      U2 = []
      U3 = []
      R1 = []
      R2 = []
      R3 = []
      ObjectElm = 0
      ret = Setup.DeselectAllCasesAndCombosForOutput()
      ret = Setup.SetCaseSelectedForOutput(str(i + 1))
      if i <= 3:
          [ret, NumberResults, Obj, Elm, ACase, StepType, StepNum, U1, U2, U3, R1, R2, R3] = Results.JointDispl(PointName2, eItemTypeElm(ObjectElm), NumberResults, Obj, Elm, ACase, StepType, StepNum, U1, U2, U3, R1, R2, R3)
          ProgramResult[i] = U3[0]
      else:
          [ret, NumberResults, Obj, Elm, ACase, StepType, StepNum, U1, U2, U3, R1, R2, R3] = Results.JointDispl(PointName1, eItemTypeElm(ObjectElm), NumberResults, Obj, Elm, ACase, StepType, StepNum, U1, U2, U3, R1, R2, R3)
          ProgramResult[i] = U1[0]

#close the program
ret = myETABSObject.ApplicationExit(False)

SapModel = None
myETABSObject = None

#fill independent results
IndResult = [0,0,0,0,0,0,0]
IndResult[0] = -0.02639
IndResult[1] = 0.06296
IndResult[2] = 0.06296
IndResult[3] = -0.2963
IndResult[4] = 0.3125
IndResult[5] = 0.11556
IndResult[6] = 0.00651

#fill percent difference
PercentDiff = [0,0,0,0,0,0,0]
for i in range(0,7):
      PercentDiff[i] = (ProgramResult[i] / IndResult[i]) - 1

#display results
for i in range(0,7):
      print()
      print(ProgramResult[i])
      print(IndResult[i])
      print(PercentDiff[i])
