import os
import sys
import clr

clr.AddReference("System.Runtime.InteropServices")
from System.Runtime.InteropServices import Marshal

#set the following path to the installed SAFE program directory
clr.AddReference(R'C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll')
from SAFEv1 import *

#set the following flag to True to execute on a remote computer
Remote = False

#if the above flag is True, set the following variable to the hostname of the remote computer
#remember that the remote computer must have SAFE installed and be running the CSiAPIService.exe
RemoteComputer = "SpareComputer-DT"

#set the following flag to True to attach to an existing instance of the program
#otherwise a new instance of the program will be started
AttachToInstance = False

#set the following flag to True to manually specify the path to SAFE.exe
#this allows for a connection to a version of SAFE other than the latest installation
#otherwise the latest installed version of SAFE will be launched
SpecifyPath = False

#if the above flag is set to True, specify the path to SAFE below
ProgramPath = R"C:\Program Files\Computers and Structures\SAFE 20\SAFE.exe"

#full path to the model
#set it to the desired path of your model
APIPath = 'C:\CSi_SAFE_API_Example'
if not os.path.exists(APIPath):
    try:
        os.makedirs(APIPath)
    except OSError:
        pass
ModelPath = APIPath + os.sep + 'API_1-002.fdb'

#create API helper object
helper = cHelper(Helper())

if AttachToInstance:
    #attach to a running instance of SAFE
    try:
        #get the active object
        #'SAFE uses API infrastructure from ETABS; as a consequence, the main connection object is called the ETABSObject       
        if Remote:
            mySAFEObject = cOAPI(helper.GetObjectHost(RemoteComputer, "CSI.SAFE.API.ETABSObject"))
        else:
            mySAFEObject = cOAPI(helper.GetObject("CSI.SAFE.API.ETABSObject"))
    except:
        print("No running instance of the program found or failed to attach.")
        sys.exit(-1)

else:
    if SpecifyPath:
        try:
            #'create an instance of the object from the specified path
            if Remote:
                mySAFEObject = cOAPI(helper.CreateObjectHost(RemoteComputer, ProgramPath))
            else:
                mySAFEObject = cOAPI(helper.CreateObject(ProgramPath))
        except :
            print("Cannot start a new instance of the program from " + ProgramPath)
            sys.exit(-1)
    else:

        try: 
            #create an instance of the object from the latest installed SAFE
            #'SAFE uses API infrastructure from ETABS; as a consequence, the main connection object is called the ETABSObject       
            if Remote:
                mySAFEObject = cOAPI(helper.CreateObjectProgIDHost(RemoteComputer, "CSI.SAFE.API.ETABSObject"))
            else:
                mySAFEObject = cOAPI(helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject"))

        except:
            print("Cannot start a new instance of the program.")
            sys.exit(-1)

    #start SAFE application
    mySAFEObject.ApplicationStart()

#create SapModel object
SapModel = cSapModel(mySAFEObject.SapModel)

#initialize model
SapModel.InitializeNewModel()

#create new blank model
File = cFile(SapModel.File)
ret  = File.NewSteelDeck(2, 12, 12, 4, 4, 24, 24)

#open an existig model
#ret = File.OpenFile(ModelPath)

#Get available tables        
NumberTables = 0
TableKey     = []
TableName    = []
ImportType   = []
IsEmpty      = []

DatabaseTables = cDatabaseTables(SapModel.DatabaseTables)
[ret, NumberTables, TableKey, TableName, ImportType ] = DatabaseTables.GetAvailableTables(NumberTables, TableKey, TableName, ImportType)
[ret, NumberTables, TableKey, TableName, ImportType, IsEmpty ] = DatabaseTables.GetAllTables(NumberTables, TableKey, TableName, ImportType, IsEmpty)

SelectedTable = ""
SelectedTable = TableKey[24]

#Get all fields
TableVersion = 0
NumberFields = 0
FieldKey     = [] 
FieldName    = []
Description  = [] 
UnitsString  = []
IsImportable = []

[ret, TableVersion, NumberFields, FieldKey, FieldName, Description, UnitsString, IsImportable] = DatabaseTables.GetAllFieldsInTable(SelectedTable, TableVersion, NumberFields, FieldKey, FieldName, Description, UnitsString, IsImportable)

#Table data array
IsRowWise = True
TableData = []

#eLength Enum
# NotApplicable 0  
# inch          1  
# ft            2  
# micron        3  
# mm            4  
# cm            5  
# m             6 

#eForce Enum
# NotApplicable 0  
# lb            1  
# kip           2  
# N             3  
# kN            4  
# kgf           5  
# tonf          6 

#eTemperrature
# NotApplicable 0  
# F 1  
# C 

DBforceUnits       = eForce.NotApplicable
DBlengthUnits      = eLength.NotApplicable
DBtemperatureUnits = eTemperature.NotApplicable

[ret, DBforceUnits, DBlengthUnits, DBtemperatureUnits] = SapModel.GetDatabaseUnits_2(DBforceUnits, DBlengthUnits, DBtemperatureUnits)

forceUnits       = eForce.NotApplicable
lengthUnits      = eLength.NotApplicable
temperatureUnits = eTemperature.NotApplicable

[ret, forceUnits, lengthUnits, temperatureUnits] = SapModel.GetPresentUnits_2(forceUnits, lengthUnits, temperatureUnits)

# Table data array   
GroupName          = ""
FieldKeyList       = []
FieldsKeysIncluded = []
NumberRecords      = 0
FillImportLog      = True
NumFatalErrors     = 0
NumErrorsMsgs      = 0
NumWarnMsgs        = 0
NumInfoMsgs        = 0
ImportLog          = ""
TableLength        = 0

#Edit Area Uniform Load Assignment table

SelectedTable = "Area Load Assignments - Uniform"
[ret, TableVersion, NumberFields, FieldKey, FieldName, Description, UnitsString, IsImportable] = DatabaseTables.GetAllFieldsInTable(SelectedTable, TableVersion, NumberFields, FieldKey, FieldName, Description, UnitsString, IsImportable)
[ret, TableVersion, FieldsKeysIncluded, NumberRecords, TableData ] = DatabaseTables.GetTableForEditingArray(SelectedTable, GroupName, TableVersion, FieldsKeysIncluded, NumberRecords, TableData)

TableData[3] = "0.0002"   # Dead load kip/insquare
TableData[8] = "0.0008"   # Live load kip/insquare

ret  = DatabaseTables.SetTableForEditingArray(SelectedTable, TableVersion, FieldsKeysIncluded, NumberRecords, TableData)
[ret, NumFatalErrors, NumErrorsMsgs, NumWarnMsgs, NumInfoMsgs, ImportLog] = DatabaseTables.ApplyEditedTables(FillImportLog, NumFatalErrors, NumErrorsMsgs, NumWarnMsgs, NumInfoMsgs, ImportLog)

# Edit Load Combination Defintions table
SelectedTable = "Load Combination Definitions"
[ret, TableVersion, NumberFields, FieldKey, FieldName, Description, UnitsString, IsImportable ] = DatabaseTables.GetAllFieldsInTable(SelectedTable, TableVersion, NumberFields, FieldKey, FieldName, Description, UnitsString, IsImportable)
[ret, TableVersion, FieldsKeysIncluded, NumberRecords, TableData] = DatabaseTables.GetTableForEditingArray(SelectedTable, GroupName, TableVersion, FieldsKeysIncluded, NumberRecords, TableData)

NumberRecords = 2

TableLength = FieldsKeysIncluded.Length * NumberRecords - 1
TableData    = []
TableData.append("Combination1")     # Name of combo
TableData.append("Linear Add")       # Type of combo
TableData.append("No")               # Is Auto
TableData.append("Dead")             # Load Name
TableData.append("")
TableData.append("1.2")              # SF of Dead Load
TableData.append("")
TableData.append("")
TableData.append("Combination1")     # Name of combo
TableData.append("")
TableData.append("")
TableData.append("Live")             # Load Name
TableData.append("")
TableData.append("1.6")              # SF of Live Load

ret  = DatabaseTables.SetTableForEditingArray(SelectedTable, TableVersion, FieldsKeysIncluded, NumberRecords, TableData)
[ret, NumFatalErrors, NumErrorsMsgs, NumWarnMsgs, NumInfoMsgs, ImportLog ] = DatabaseTables.ApplyEditedTables(FillImportLog, NumFatalErrors, NumErrorsMsgs, NumWarnMsgs, NumInfoMsgs, ImportLog)

# Run analysis
Analyze = cAnalyze(SapModel.Analyze)
ret     = File.Save(ModelPath)
ret     = Analyze.RunAnalysis()

# Retrieve joint displacements
NumberOfJoints     = 6
SelectedJointLabel = []
JointLabel         = []
LoadCase           = []
JointUz            = []

TableVersion       = 0
NumberRecords      = 0
TableData          = []
FieldKeyList       = []
FieldsKeysIncluded = []
GroupName          = ""

SelectedTable = "Joint Displacements"
[ret, GroupName, TableVersion, FieldsKeysIncluded, NumberRecords, TableData] = DatabaseTables.GetTableForDisplayArray(SelectedTable, FieldKeyList, GroupName, TableVersion, FieldsKeysIncluded, NumberRecords, TableData)

SelectedJointLabel.append(17)
SelectedJointLabel.append(19)
SelectedJointLabel.append(21)
SelectedJointLabel.append(23)
SelectedJointLabel.append(25)
SelectedJointLabel.append(27)

temp = 0.0
icount = 0
while icount <6 :
  temp = SelectedJointLabel[icount]
  JointLabel.append(TableData[temp * 11 * 3 - 10])
  LoadCase.append(TableData[temp * 11 * 3 - 8])
  JointUz.append(TableData[temp * 11 * 3 - 4])
  icount = icount + 1 

#Start concrete frame design
#DesignConcrete = cDesignConcrete(SapModel.DesignConcrete)
#ret = DesignConcrete.StartDesign()

#Start concrete slab design
#DesignConcreteSlab = cDesignConcreteSlab(SapModel.DesignConcreteSlab)
#ret = DesignConcreteSlab.StartSlabDesign()

#Start composite beam design
DesignCompositeBeam = cDesignCompositeBeam(SapModel.DesignCompositeBeam)
ret = DesignCompositeBeam.StartDesign()

# Retrieve composite beam design result
BeamName         = ""
BeamSection      = ""
StudLayout       = 0 
PMRatio          = 0.0
ShearRatio       = 0.0
CamberDeflection = 0.0

# Expected results for comparison (assumes US defaults)
ExpectedBeamName    = "41"
ExpectedBeamSection = "W16x26"
ExpectedStudLayout  = 10
ExpectedPMRatio     = 0.666
ExpectedShearRatio  = 0.296
ExpectedCamberDeflection = 0.957906

TableVersion       = 0
NumberRecords      = 0
TableData          = []
FieldKeyList       = []
FieldsKeysIncluded = []
GroupName          = ""
SelectedTable = "Composite Beam Design Envelope"
[ret, GroupName, TableVersion, FieldsKeysIncluded, NumberRecords, TableData] = DatabaseTables.GetTableForDisplayArray(SelectedTable, FieldKeyList, GroupName, TableVersion, FieldsKeysIncluded, NumberRecords, TableData)

BeamName         = TableData[0]
BeamSection      = TableData[1]
StudLayout       = TableData[2]
PMRatio          = TableData[10]
ShearRatio       = TableData[11]
CamberDeflection = TableData[14]

#Close SAFE
mySAFEObject.ApplicationExit(False)

#Clean up variables
SapModel = None
mySAFEObject = None

#Check ret value
if ret == 0:
   print("API script completed successfully.")
else:
   print("API script FAILED to complete.")
