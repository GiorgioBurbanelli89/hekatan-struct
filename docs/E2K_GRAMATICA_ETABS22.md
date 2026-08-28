# La gramatica del `.e2k`, sacada de `ETABS.dll`

Volcado de la tabla de cadenas del binario de ETABS (UTF-16LE), en el
orden en que estan. Cada `##` es un bloque `$ ...` del fichero y debajo
van sus palabras. Generado por `cli/extraer_gramatica_e2k.py`.

> Es un VOLCADO, no una interpretacion: que una palabra salga bajo un
> bloque significa que esta ahi al lado en el binario, no que sea suya.

## $ FUNCTIONS

    FUNCTION            UNIFRS              FUNCTYPE            SPECTRUM            SPECTYPE            DAMPRATIO
    TIMEVAL             0  1    1  1

## $ RESPONSE SPECTRUM LOAD CASES

    RSCASE              MODAL               ECCENTRICITY        DAMP                DIRCOMBO            ABS
    ORTHOFACTOR         LOADAPPLIED         FUNC                SF                  CSYS                ANG
    MODECOMBO           NRC10               DOUBLESUM           F1                  F2                  PERRIDID
    TD

## $ MODAL LOAD CASES

    MODALCASE           NUMMODE             MODE                _MODE               DAMPELEM            DAMPCOMPMODAL
    MISSMASS            MODALSTIFF          MODALMASS           PARTICFACTOR        DIRECTFACTOR        DYNARATIO
    STATRATIO           POINTLOAD "         FX                  FY                  FG                  MX
    MY                  MZ                  XDIM                YDIM                POINTDISPL "        UX
    UY                  UG                  RX                  RY                  RZ

## $ GRIDS

    GRID  "GLOBAL"      X  "                "                   Y  "                Z  "                Soil Properties
    Beam Assigns        Slab Assigns        Column Assigns      Wall Assigns        Soil Assigns        Release Assigns
    Linear Static Load Cases  Modal Load Cases    Response Spectrum Load Cases  END

## $ END OF MODEL FILE

    Error saving text file Separator  - Error No.

## $ LINEAR STATIC LOAD CASES

    LINSTAT             SAFE 12.2.0.S       UNITS

## $ TITLES

    TITLE1  "           TITLE2  "

## $ BEAM PROPERTIES

    BEAMPROP            E                   U                   W                   A                   TYPE R
    B                   D                   TYPE T              BB                  BF                  DS
    TYPE L              TYPE G              I                   AS                  J                   I2
    AS2                 DSNSEC              BDESIGN             DDESIGN             BBDESIGN            BFDESIGN
    DSDESIGN            CT                  CB                  FC                  FY                  FYS
    FCS

## $ LOADS

    LOAD "              TYPE                SELFWEIGHT          LTDFACTOR           POINTLOAD  "        FZ
    POINTDISPL  "       UZ                  LINELOAD  "         MC                  PC                  RD
    MD                  A                   B                   PD                  RDA                 RDB
    AREALOAD  "         W

## $ LOADING COMBINATIONS

    COMBO "             TYPE  DESIGN        COMBOFACTOR "

## $ SLAB PROPERTIES

    SLABPROP  "         PROPTYPE DROP       PROPTYPE COLUMN     PROPTYPE RIBBED     PROPTYPE WAFFLE     TII
    TJJ                 TIJ                 DEPTH               TSLAB               RIBWT               RIBWB
    RIBSPAC             RIBSPAC2            RIBDIR X            RIBDIR Y            TYPE THICK          TDESIGN
    CTI                 CTJ                 CBI                 CBJ                 DESIGN NO

## $ COLUMN PROPERTIES

    COLUMNPROP  "       TYPE C              H                   BCAP                DCAP                HCAp
    COLUMNPROPABOVE  "  K                   KXX                 KYY                 "  TYPE IGNOREKR

## $ POINT COORDINATES

    POINT  "            UX                  UY                  UZ                  RX                  RY
    RZ                  UXUX                UXUY                UYUY                UXUZ                UYUZ
    UZUZ                UXRX                UYRX                UZRX                RXRX                UXRY
    UYRY                UZRY                RXRY                RYRY                UXRZ                UYRZ
    UZRZ                RXRZ                RYRZ                RZRZ                DIMX                DIMY

## $ LINE CONNECTIVITY

    LINE  "

## $ AREA CONNECTIVITY

    AREA  "             &

## $ BEAM ASSIGNS

    BEAM  "

## $ SLAB ASSIGNS

    SLAB  "             OPENING  "

## $ RELEASE ASSIGNS

    RELEASE  "          SHEAR               MOMENT

## $ COLUMN ASSIGNS

    COLUMN  "

## $ WALL ASSIGNS

    WALL  "

## $ SOIL ASSIGNS

    SOIL  "

## $ WALL PROPERTIES

    WALLPROP  "         T                   WALLPROPABOVE  "    KR

## $ SOIL PROPERTIES

    SOILPROP  "         Error adding loads from above to SAFE Model  Error adding modal load from above to SAFE Model  Error adding modal distortions to SAFE Model  Error adding distortions to SAFE Model  -W
    Error adding walls to SAFE Model  Error adding modal loads to SAFE Model  Error adding loads to SAFE Model  DEAD                SUPERDEAD           LIVE
    REDUCELIVE          QUAKE               WIND                SNOW                OTHER               MOVE
    TEMPERATURE         PATTERN             PRESTRESS           CONSTRUCTION        HYPERSTATIC         PRESTRESSTRANSFER
    PATTERNAUTO         ~Dummy              Error adding point loads to SAFE Model  Error adding line loads to SAFE Model  Error adding area loads to SAFE Model  _ABOVE
    )_ABOVE             Col                 Error adding supports to SAFE Model  Error adding objects to SAFE Model  PACKET              Unable to find the 'Packet 10'. Please check your input file.
    Unable to find record 2 in packet 10  Unable to read record 2 in packet 10  Unable to find record 3-1 in packet 10 at Line  Unable to read record 3-1 in packet 10 at Line  Unable to find record 3-2 in packet 10 at Line  Unable to read record 3-2 in packet 10 at Line
    Unable to find record 3-3 in packet 10 at Line  Unable to read record 3-3 in packet 10 at Line  Unable to find record 3-4 in packet 10 at Line  Unable to read record 3-4 in packet 10  Unable to find record 3-5 in packet 10 at Line  Unable to read record 3-5 in packet 10 at Line
    Unable to find record 3-6 in packet 10 at Line  Unable to read record 3-6 in packet 10 at Line  Unable to find record 3-7 in packet 10 at Line  Unable to find record 3-8 in packet 10 at Line  Unable to find record 3-9 in packet 10 at Line  Unable to find record 3-10 in packet 10 at Line
    Unable to find the 'Packet 00'. Please check your input file.  Unable to find record  in packet 00        SDNF Version 3.0    Unable to read record  Open Steel Detailing Neutral File
    Steel Detailing Neutral File (*.sdf;*sdn;*.sdnf)|*sdf;*.sdn;*.sdnf|All files (*.*)|*.*  There is no Packet 10 to import  There is nothing in Packet 10 to import  There were          warnings.           Check '
    ' for details.      Default section properties are used for section '  Unable to add members due to  INCHES              FEET                MILLIMETER
    MILLIMETERS         METERS              Valid units names are: 'feet', 'meters', 'inches' and 'millimeters'.  ' is used in file.  .wrn                Open File for saving SDN File
    Steel Detailing Neutral File (*.sdn)|*.sdn|All files (*.*)|*.*  created.            Error in creating Steel Detailing Neutral File.  Packet 00           Packet 10           10
    0                   column              beam                brace               1                   inches
    feet                millimeters         meters              centimeters         kiloGramsForce      kiloNewtons
    pounds              Newtons             Tons                Packet 30           " "                 Warning.txt
    There is a max of   items.              TO                  BY                  Line does not contain a recognizable non-list item.  is not a valid Integer, which must be between -2147483648 and +21474836487
    is not a valid number, which must be between -1.0E+36 and 1.0E+36  TITLE               ERROR(S) while reading file.  Please review the errors above before  clicking Convert Data.  Please check your model after
    the import is complete.  Cannot read this line at all dut to  No Title            'W                  EMPTY               can not be negative or zero.
    cannot be negative.  FIN                 UNI                 INP                 JTO                 OUT
    SET                 SEP                 PAG                 IGN                 JOI                 MEM
    ELE                 DEF                 END                 GEN                 SUB                 STA
    PER                 INA                 DEL                 CON                 SUP                 SLA
    CUT                 LOA                 ARE                 FLO                 ONE                 TEM
    FIX                 SEL                 SPE                 TIM                 REF                 REP
    UBC                 WIN                 NOT                 PDE                 NON                 PAR
    CHE                 GRO                 CHA                 DRA                 CAL                 MOD
    PRI                 SEC                 PLO                 SIZ                 STE                 PRE
    SAV                 RES                 TYP                 RIG                 COD                 UNIT
    WID                 INPUT               INPUT MEMORY ignored  JOINTS ORIGIN       OUTPUT              SEPARATOR
    PAGE                IGNORE              COO                 REL                 JOINTS              JOINT LOADS
    JOINT RELEASE       INC                 PRO                 TRU                 CAB                 TEN
    OFF                 ECC                 POS                 MEMBER INCIDENCES   MEMBER PROPERTIES   MEMBER RELEASES
    MEMBER TYPE         MEMBER OFFSETS      MEMBER ECCENTRICITIES  MEMBER LOADS        MEMBER PRESTRESS    PLA
    SHELLS              SOLIDS              ELEMENT PROPERTIES  ELEMENT RELEASES    ELEMENT MODIFY      SOL
    ELEMENT LOADS       Plate ELEMENT LOADS  MES                 MOV                 DEFINE MATERIAL     DEFINE MESHES
    DEFINE MOVING LOADS  DEFINE UBC LOADS    DEFINE WIND LOADS   DEFINE TIME HISTORY LOADS  GROUP DEFINITIONS   GENERATE ELEMENTS
    SUBSTITUTE          JOB                 USE                 FOO                 JOB INFORMATION     USER TABLE
    CONCRETE DESIGN ignored  FOOTING DESIGN ignored  STATUS SUPPORT      ROT                 ANA                 ROTATE
    PERFORM ANALYSIS    INACTIVE            DELETE              CONSTANTS           SUPPORTS            SUPPORT DISPLACEMENTS
    MASTER SLAVE        CUTOFF              LIS                 LOAD GENERATIONS    LOAD GENERATION TYPES  LOAD COMBINATIONS
    LOAD LIST ignored   LOADING             AREA LOAD ignored   FLOOR LOADS         ONEWAY LOADS        TEMPERATURE LOADS
    FIXED END LOADS     FIXED GROUP ignored  SELF WEIGHT         SELECT ignored      SPECTRUMS           TIME HISTORYS
    GROUND MOTIONS      REFERENCE LOAD      REPEAT LOADS        UBC LOADS           WIND LOADS          NOTIONAL LOAD
    PDELTA iterations   NONLINEAR iterations  PARAMETER           CHECK CODE          Cannot recognize:   GROUP ignored
    CHANGES Ignored     DRAW ignored        CALCULATE ignored   MODAL ignored       PRINT ignored       SECTION ignored
    PLOT ignored        SIZE ignored        STEEL ignored       PRECISION ignored   SAVE ignored        RESTORE ignored
    FINISH              TYPE Ignored        BOD                 RIGID BODY INCIDENCES  Code                Sorry, but there has been an unrecoverable Error.
    ERROR while Reading Section  Current Line        Support             Master-Slave        Selfweight          Define Moving Load
    Define UBC Load     Define Wind Load    Define Time History Load  Joint Load          Member Load         Element Load
    Element Load Solid  Element Load Joint  Floor Load          Oneway Loads        Prestress Load      Temperature Load
    Fixed End Load      Support Displacement Load  Spectrum            Load Generation     UBC Load            Codes
    Not enough memory for the  array.              i1                  i2                  i2 can not be less than or equal to i1 when using TO.  i3
    Cannot read this List.  STR                 The first line must start with STAAD or STRUDL.  Processing Temperature Loads...  Processing Temperature Loads...(  Total Temperature Loads =
    Processing Area Joint Loads...  Processing Area Joint Loads...(  Total Area Joint Loads =  Processing Floor Loads...  Processing Floor Loads...(  FrameFloorLoads
    Floor load          was not processed.  Total Floor Loads =  Processing Oneway Loads...  Processing Oneway Loads...(  FrameOnewayLoads
    Oneway load         Total Oneway Loads =  Processing Area Loads...  Processing Area Loads...(  FrameAreaLoads)     Area load
    Total Area Loads =  PANEL No. =         COORDINATES         PANEL AREA =        PANEL PERIMETER =   LOAD on line
    =                   PANEL TOTAL LOAD =  DISTRIBUTED LOAD ON PANEL AREA =  Not a closed line series, load was not distributed on the panel  TOTAL LOAD ON FLOOR =  Warning!
    Wind loads not processed.  Processing Points...  Processing Points...(  Total Points =      Processing Global DOFs...  Processing Supports...
    Processing Supports...(  Total Supports =    Processing Springs...  Processing Spring...(  FORCE               Total Springs =
    STAAD               STD-                Processing Line Sections...  Processing Line Sections...(  PROFILE_POINTS      STDSEC
    Warning! Default section properties were filled for '  Warning! Unable to find '  ' in database. STAAD File Line = '  Warning! Check following for '  (                   )
    Warning! Default section properties were filled for t2 and t3 in'  Warning! Default section properties were filled for t3 in'  Warning! Default section properties were filled for t2 in'  ttmpSection         ttmpJoistData       Total Line Sections =
    Warning! Value of tw for  set to              . Please check this value.  Warning! Value of T2 for  Warning! Value of T3 for  Warning! Value of TF for
    Warning! Value of TW for  W10X54              Processing Lines...  Processing Lines...(  Total Lines =       Processing Area Sections...
    Processing Area Sections...(  Total Area Sections =  Processing Areas...  Processing Areas...(  Total Areas =       Processing Load Cases...
    Processing Load Cases...(  MASS                LIVE REDUCIBLE      PONDING             RAIN                ROOF
    SEISMIC             Total Load Cases =  Warning! Unable to add self weight for line  Warning! Unable to add self weight for shell object  Processing Notional Load Patterns...  PattNOT
    Total Notional Load Patterns =  FUNCTION            Unable to create function for RESPONSE SPECTRUM Load  SRSS part of STAAD load combination  Algebraic part of STAAD load combination  Combination of the SRSS and algebraic part of STAAD load combination
    Combination of the SRSS and algebraic parts of STAAD load combination  Warning! Absolute value of load factor for Load Case  ' in '              ' used.             Combo created for loadcase  which includes a STAAD repeat load.This combo is available for design.
    Processing Point Loads...  Processing Point Loads...(  Total Point Loads =  Processing Frame Loads...  Processing Frame Loads...(  Total Frame Loads =
    Processing Rigid Body Constraints...  Processing Constraints...(  Processing Slave ...  Total Slaves =      Processing Groups...  Processing Groups...(
    GROUP               Total Groups =      LRFD                LRFD3               LRFD2               KY
    KZ                  LY                  LZ                  FYLD                NSF                 UNT
    UNB                 SSY                 SSZ                 CMY                 CMZ                 RigidSection
    Call to API GetNameList failed  Call to GetNameList failed  Cannot import in current database units  A Staad Solid element was not imported in ETABS.  Staad Solid elements were not imported in ETABS.  Error: Unable to add joint
    Restraints ignored for Joint  Springs ignored for Joint  Material            imported as No design  Unable to import    due to
    Unable to add STAAD Member  Unable to add zero-length STAAD Member  Unable to add STAAD Shell  PattSTD             CombSTD             Warning! Absolute value of load factor for 'PattSTD
    Unable to get coordinates for Point object  Unable to get points for frame element  Unable to get coordinates for point object  Parameter Value     SYY                 SZZ
    Joint Origin X      Joint Origin Y      Joint Origin Z      CYL                 REV                 NOC
    NO                  GLO                 Cannot recognize    multiplier          Multiplier must be between 1 and 3 for JOINT.  There must be at least 3 items for JOINT COORDINATES.
    There must be at least 8 items for JOINT COORDINATES generation.  i2 can not be the same as i1.  i1 incremented by i3 does not come out even at i2.  There is nothing to REPEAT.  repeat              There must be at least 4 items for REPEAT.
    xi1                 yi1                 zi1                 There must be either 3 or  increments for REPEAT.  xi
    Not enough memory for Joint array.  must be positive    There is nothing to REPEAT ALL.  There must be at least 4 items for REPEAT ALL.  increments for REPEAT ALL.  Cannot correct Joints for units and coordinate type.
    Not enough memory for Member array.  There must be at least 3 items for MEMBER INCIDENCES.  i4                  i4 can not be the same as i1.  i5                  i6
    i1 incremented by i5 does not come out even at i4.  incremented         There must be 3 items for REPEAT ALL.  mi                  ji                  There must be at least 3 items for REPEAT.
    must be between 1 and 999999  is not an existing Joint.  Member              is a Shell and will not be created.  is a Solid and will not be created.  SHE
    Must be SHELL or SOLID.  REPEAT              Shell               is a Member and will not be created.  There must be at least 4 items for Shells.  Not enough items for Shell generate.
    i6 can not be the same as i1.  i7                  i8                  i1 incremented by i7 does not come out even at i6.  ei                  Not enough memory for Shell array.
    Not enough memory for Solid array.  There must be at least 9 items for Solids.  i9                  You must have TO for Solid generation.  Not enough items for Solid generate.  i10
    i10 can not be the same as i1.  i11                 i12                 i1 incremented by i11 does not come out even at i10.  Solid               ISO
    2DO                 POI                 DEN                 ALP                 DAM                 CDA
    ISOTROPIC           2DORTHOTROPIC       INF                 Boundry point name must be a single letter.  QUA                 TRI
    Should hve QUADRILATERAL or TRIANGULAR.  MESH must have at least 3 items.  There must be either 4 or 8 boundry points.  n1                  n2                  n1 and n2 must be between 2 and 20.
    n1 must be between 4 and 400.  n1 must be the square of an integer.  There must be at least 3 items for DEFINE MESH.  Joint number        There must be at least 4 items for DEFINE MESH.  RCY
    Expecting CYL or RCYL.  X0                  Y0                  Z0                  is not a defined boundry point.  SUBSTITUTE must have at least 4 items.
    XR                  YR                  ST                  SUBSTITUTE must have 7 items when RANGE is specified.  f1                  f2
    Any                 Not enough memory for Group array.  Line must be START GROUP DEFINITION.  GEO                 Group name must start with _  ROTATION must have at least 4 items.
    di                  ROTATION must be one of X, Y or Z.  INACTIVE must have at least 3 items.  Must be INACTIVE MEMBERS list  DELETE must have at least 3 items.  Must be DELETE MEMBERS or DELETE JOINTS with list
    You can not use X, Y or Z in DELETE JOINT  Not enough memory for Section array.  Line must be START USER TABLE.  TAB                 Expecting TABLE or END.  Cannot Open external file
    Cannot read external file  WIDE                CHANNEL             ANGLE               DOUBLE ANGLE        TEE
    PIPE                TUBE                ISECTION            PRISMATIC           TABLE               FLA
    ANG                 Unknown Section Type  Cannot read this line from External file  External File Line  Wide Flange         Channel
    Double Angle        Pipe                Tube                Isection            Prismatic           You must have
    items for           item number         AUS                 CAN                 EUR                 FRE
    IND                 AME                 BRI                 GER                 JAP                 ALU
    SJI                 JIN                 APL                 TAT                 Cannot recognize country.  TA
    PR                  TAP                 UPT                 UP                  ASS                 AS
    Cannot recognize Property type  There must be 2 items after PRISMATIC  ROU                 HDC                 DOD                 OCT
    HEX                 SQU                 HEXDECAGONAL        There must be an item name followed by a value  AX                  IX
    IY                  IZ                  AY                  AZ                  YD                  YB
    Unrecognizable property-spec  There must be 6 items after  THI                 1/16                1/8                 3/16
    1/4                 5/16                3/8                 7/16                1/2                 9/16
    5/8                 11/16               3/4                 13/16               7/8                 15/16
    WF                  WF(A-N)             CS                  CS(WING)            C(A-N)              BULB L
    BULBL               BULB L(A-N)         BULBL(A-N)          T(A-N)              PL                  ODX
    PIPEX               RECT                RECTX               SQ                  SQX                 BULB(A-N)
    RECT2               SQ2                 Pipe outer dia =    Pipe thickness = Pipe outer dia / 10 =  section properties were not translated  Pipe outer dimension =
    Pipe thickness =    unable to translate  There must be 2 items after TABLE  PIP                 PIPX                PIPS
    PIPD                OD                  Outer Dia           inner Dia           PX                  PXX
    TUB                 Tube width =        Tube height =       Tube thickness =    DT                  WT
    TH                  GIRDER              Girder width =      Girder height =     Girder flange thickness =  HSST
    .25                 .5                  00                  6X5X.250            6X5X.25             RA
    check Reverse Angle orientation.  Angle width =       Angle height =      Angle thickness =   LD                  Angle Spacing
    2L                  check double angle orientation.  Unable to translate  There must be at least 5 items after TAPERED  TAPERED             f3
    f4                  f5                  f6                  f7                  There must be 2 items after UPTABLE  No such Table number
    or section-name     There must be at least 1 item after ASSIGN  BEA                 DOU                 Expect DOUBLE after ANGLE.  Cannot recognize profile-spec
    Expecting THICKNESS.  There should be a value after THICKNESS.  BOT                 Expect START, END, or BOTH.  FY                  FZ
    MX                  MY                  MP                  J1                  J2                  J3
    J4                  Expect J1, J2, J3 or J4.  Expect START or END.  LOC                 INPUT must have at least 2 items.  NOD
    INPUT WIDTH must have at least 3 items.  INPUT WIDTH must be between 1 and 79.  Cannot understand this INPUT line.  PAGE must have at least 2 items.  NEW                 LEN
    EJE                 LENGTH              There must be 2 items for SET.  NL                  ECH                 NOS
    CONNECTIVITY        ON                  ECHO must be ON or OFF.  Z must be UP.       Cannot recognize SET type  There is no SEPARATOR character.
    SEPARATOR can not be comma or asterisk.  OUTPUT must have at least 2 items.  OUTPUT WIDTH must have at least 3 items.  OUTPUT WIDTH must be 72 or 118.  Cannot understand this OUTPUT line.  TITLE line must have at least 2 items.
    The first item must be STAAD or STRUDL.  SPA                 Structure Type is not defined using the Space Type.  There must be either length or force  FEE                 CEN
    CMS                 MET                 M                   MMS                 DME                 KIP
    POU                 KG                  KGS                 TON                 MTO                 N
    KNS                 KN                  MNS                 MN                  DNS                 KILON
    KILOG               Do not recognize units:  IGNORE must have LIST.  Not enough memory for MasterSlave array.  Not enough memory for Support array.  BET
    CTE                 RANG                ELA                 DIR                 Expecting ELASTIC MAT.  PIN
    ENF                 BUT                 KFX                 KFY                 KFZ                 KMX
    KMY                 KMZ                 Expect PINNED or FIXED.  Should have 4 items starting with DIRECTION.  Expecting DIRECTION.  Expecting X, Y or Z.
    Expecting SUBGRADE.  MAS                 Expect RIGID, FX, FY, FZ, MX, MY, or MZ.  Master joint        does not exist.     Expecting JOINT.
    SHA                 Expecting FREQUENCY or MODE.  Not enough memory for Joint Load array.  Not enough memory for Wind Intensity array.  Not enough memory for Wind Exposure array.  Not enough memory for UBC weight array.
    Not enough memory for Member Load array.  Not enough memory for Element Load array.  Not enough memory for Element Load Joints array.  Expecting LOADING i1  There is a maximum of  Load Cases.
    LOADTYPE            OTHERS              REDUCIBLE           Expecting Ri1 f1 Ri2 f2 and so on  is not an existing reference load.  Expecting n X|Z (f1)
    Expecting n X|Y|Z (f1)  is not an existing load case.  Expecting a pair of items like FZ 4.5  Cannot Add new Joint Load.  Cannot Add new Member Load.  Cannot Add new Element Load.
    Cannot Add new Element Load Joints.  There must be at least 3 items after the member-list.  UMO                 CMO                 LIN                 TRA
    Expecting one of: UNI,UMOM,CON,CMOM,LIN,TRAP.  PY                  PZ                  Expecting one of: X,Y,Z,GX,GY,GZ,PX,PY,PZ.  first parameter     second parameter
    third parameter     last parameter      There must be at least 2 items after the element-list.  TR                  Expecting PRESSURE or TRAP.  LX
    JT                  fourth parameter    fifth parameter     FAC                 Face                Expecting FACE
    Expecting PRESSURE  There must be at least 10 items after the element-list.  I1                  I2                  I3                  I4
    I5                  I6                  I7                  I8                  Facet               Param1
    Param2              Param3              Param4              ACC                 Expecting DEFINE UBC LOAD  ZON
    ZONE must have f1   RWX                 RWZ                 CT                  TS                  f2 or f6
    f9                  f10                 f11                 f8                  Expecting  WEIGHT w  after joint-list  WEI
    Expecting UNI or CON after Member-list  Expecting  UNI v1 v2 v3  after Member-list  v1                  v2                  v3                  Expecting  CON v4 v5  after Member-list
    Expecting UNI or CON plus parameters after Member-list  Cannot Add new UBC Weight definition.  Cannot Add new Wind Exposure definition.  Expecting DEFINE WIND LOAD  INT                 EXP
    Wind Load types.    Expecting at least INTENSITY p1 HEIGHT h1  HEI                 The number of p's and h's must be the same.  Expecting at least EXPOSURE e JOINT n  or  EXPOSURE e YR f1 f2  HIS
    Expecting DT x      Expecting DEFINE TIME HISTORY  ARR                 Expecting DAMPING d  TYPES.              Expecting TYPE i ACCELERATION/FORCE
    FOR                 Expecting ACCELERATION or fORCE  REA                 FUN                 Expecting ARRIVAL TIME  There should be pairs of items for time steps.
    time steps.         Expecting SINE or COSINE after FUNCTION  SIN                 COS                 Expecting at least 6 items starting with AMPLITUDE  AMP
    Expecting AMPLITUDE f1  Expecting FREQUENCY f2 or RPM f2  PHA                 CYC                 Expecting PHASE f3, CYCLES f4, SUBDIV f5, or STEP f6 "  Expecting READ fn
    Expecting pairs of numbers separated by space.  External file       , Line #            Cannot Add new Area Load.  ALO                 Expecting ALOAD
    Expecting ALOAD f or GX/GY/GZ  Cannot Add new Fixed End Load.  There must be at least 1 list item and 12 load items.  Expecting at least _FloorGroupName FLOAD f3  Expecting at least YRANGE f1 f2 FLOAD f3  FL
    Expecting FLOAD     Expecting XRANGE or YRANGE or ZRANGE  Expecting at least _FloorGroupName ONELOAD f3  Expecting at least YRANGE f1 f2 ONELOAD f3"  Expecting ONE       vs
    Expecting LOAD or AASHTO item.  DIS                 Expecting DISTANCE.  No loads for        load                Bad Load
    Number of distances does not match number of loads for  distance            Bad Distance        Should be just Width in  width               Bad Width  in
    Expecting DEFINE MOVING LOAD.  FIL                 Expecting FILE after DEFINE MOVING LOAD.  Expecting a filename after FILE.  There is already a Moving Load with j =  Not enough memory for Floor Load array.
    Not enough memory for Oneway Load array.  Not enough memory for Fixed End Load array.  Not enough memory for Area Load array.  Not enough memory for Moving Load array.  Cannot Add new Prestress Load.  There must be at least 2 items after the member-list.
    Expecting FORCE     Expecting a pair of items like: ES f2  ES                  EM                  EE                  Expecting one of: ES EM EE
    Not enough memory for Prestress Load array.  Expecting AREA LOAD  Expecting FIXED LOAD or FIXED END LOAD  Expecting FLOOR LOAD  Expecting ONEWAY LOAD  Expecting PRESTRESS or POSTSTRESS
    Expecting SUPPORT DISPLACEMENT  Expecting TEMPERATURE LOAD  Not enough memory for Support Displacement Load array.  Not enough memory for Temperature Load array.  Cannot Add new Support Displacement Load.  Expecting something like MX 50.0 after the joint-list
    Expecting one of : FX FY FZ MX MY MZ  Cannot Add new Temperature Load.  STRAINR             Expecting TEM, STRAIN or STRAINR  Expecting a selfweight multiplier.  Expecting a list specification.
    is not a recognized group.  is not a valid list.  Not enough memory for Selfweight array.  Expecting at least 5 items fro SPECTRUM.  SRS                 ASC
    CSM                 GRP                 Expecting SRSS or CQC after SPECTRUM.  SCA                 LOG                 MDA
    FF1                 FF2                 MIS                 ZPA                 DOM                 IMR
    Unrecognizable keyword:  One of f1,f2,f3 must be non-zero.  Not enough memory for Spectrum array.  Not enough memory for Load Generation Type array.  Not enough memory for Load Generation array.  Not enough memory for Time History array.
    Not enough memory for UBC Load array.  Not enough memory for Wind Load array.  Not enough memory for Ground Motion array.  P,V pairs.          Expecting TIME LOAD  Expecting 3 items after GROUND MOTION
    MOT                 Expecting GROUND MOTION  Expecting one of: X Y Z  It                  Ia                  Expecting 2 items after joint-list
    Expecting one of: FX FY FZ MX MY MZ  Can not Add new Time History.  Expecting i1 f1 i2 f2 and so on  Expecting LOAD GENERATION n  ADD                 is not a previously defined load case.
    Expecting ADD LOAD i  Expecting TYPE j x1 y1 z1  is not a defined Moving Load.  Expecting pairs of items like: XINC f1  YI                  ZI
    Expecting something like: XINC f1  or  YRANGE r  Expecting UBC LOAD X  Expecting something like WIND LOAD X TYPE j  Expecting TYPE j for WIND LOAD  There is no Wind Load Definition type  Expecting at least LOAD COMBINATION i
    Combinations.       Expecting LOAD COMBINATION SRSS i  Expecting LOAD COMBINATION ABS i  Load combination number must be less than 100000.  You can not use existing Load case number  fsrss
    Loadcase factors.   is not an existing Load case or combination.  Pdelta number of iterations  Nonlinear number of iterations  There should be a memb-list after MEMBER  Expecting CHECK CODE
    Expecting CHECK CODE MEMBER memb-list  WEL                 Expecting SELECT WELD TRUSS MEMBER memb-list  Expecting SELECT MEMBER memb-list  Expecting at least GROUP MEMBER member-list  FC
    CLE                 REI                 FFA                 RAT                 DEP                 EMB
    PED                 DES                 Cannot recognize Footing Design parameter-name  STRUDLReading.txt   STRUDLTranslation.txt  is not a valid Integer,
    which must be between -2147483648 and +21474836487  is not a valid number,  which must be between 1.0E+36 and -1.0E+36  Cannot read this line at all.  DEA                 CRE
    STI                 COU                 JOINT TEMPRATURE CHANGE  PERFORM ANALYSIS ignored. No more data read  SLAVE RELEASES      CREATE ignored
    AREA LOADS          PARAMETER ignored   CHECK CODE ignored  CHANGES             Mode is changed to CHANGES  CHANGE Title command ignored.
    ADDITIONS           Mode is changed to ADDITIONS  STIFFNESS ANALYSIS  STIFFNESS Ignored   SECTION CUT GROUP   SUM
    LIST SUM REACTIONS GROUP  LIST SUM REACTIONS Ignored  LIST REACTIONS JOINTS GROUP  LIST REACTIONS Ignored  LIST DISPLACEMENT JOINTS GROUP  LIST DISPLACEMENT Ignored
    LIST FORCE MEMBERS GROUP  LIST FORCE Ignored  LIST ignored        FRA                 FRAME               TYPE Frame
    TRUSS               TYPE Truss          TYPE                Ignored             TYPE Rigid Solid    TYPE Plate
    COUTPUT ignored     Error while Reading Section  required            Repeat Load         items for a List line.  i2 can not be equal to i1 when using TO.
    The first line must start with STAAD.  The first line does not have the word STRUDL. Continue anyway.  MOM                 MOME                MOMEN               FORC
    Line must be DEFINE GROUP DEFINITION 'NAME' 'JOI/MEM/ELE/SOL' LIST  GROUP TYPE Not defined  JOINT               Must be INACTIVE MEMBERS or INACTIVATE JOINTS list  EXI                 TOL
    STEP                ReaJts              DispJts             ForceMemb           ISE                 EXISTING
    There must be an item name followe by a value  TABL                THICK               There should be a value after THICK.  STAR                START
    EXIS                EXIST               EXISTI              EXISTIN             There must be 3 items for SET.  DEC
    Untitled            RAD                 FACTOR              WA                  WB                  UNIFORM
    UNIFOR              UNIFO               UNIF                SUR                 BX                  BZ
    Warning! section is not available for Body Force X (Element =  Warning! section is not available for Body Force Y (Element =  Warning! section is not available for Body Force Z (Element =  Expecting PHASE f3, CYCLES f4 OR STEP f5"  Expecting ALOAD f   Expecting at least YRANGE f1 f2 FLOAD f3"
    Expecting XRANGE or ZRANGE  CHANGE              CHANG               CHAN                GRADIENT            GRADIEN
    GRADIE              GRADI               GRAD                GRA                 Change              Gradient
    Expecting TEMP or STRAIN  Expecting X, Y or Z followed by multiplier.  Not enough memory for Repeat Load array.  Cannot Add new Time History.  Expecting REPEAT LOAD  There should be pairs of i,f
    There is no Loadcase  You cannot use existing Load case number  FYL                 UNL                 UNF                 MAI
    PUN                 DMA                 DMI                 WMI                 WST                 DFF
    DJ1                 DJ2                 TOR                 GLU                 LAM                 LUY
    LUZ                 WET                 CDT                 CSF                 CTM                 CTR
    FYM                 FYS                 CLT                 CLB                 CLS                 MIN
    MAX                 SFA                 EFA                 MMA                 NSE                 Cannot recognize Concrete Design parameter-name
    STRUDL              ReplacementList.txt  FRAMESECTION        ' in database. STRUDL File Line = '  Total Area Sections Added =  Removing Same Area Sections...
    Removing Same Area Sections...(  Total Area Sections Removed =  Total Area Sections Present =  AreaObjects         STD                 Processing Extra Constraints...
    Processing Extra Constraints...(  Extra               Total Extra Constraints =  Processing Joint Temperature Loads...  Processing Joint Temperature Change Loads...(  ST-P
    Total Joint Patterns for Temperature Change =  ./~|~\.             $ET                 $et                 Export ETABS Model Text File As  ETABS Model Files (*
    )|*                 |All files (*.*)|*.*  SECTION             LLRF                LMAJOR              LMINOR
    CONSIDERTORSION     IGNOREBENEFICIALPUINBEAMDESIGN  OMEGA0              KMAJOR              KMINOR              CMMAJOR
    CMMINOR             DNSMAJOR            DNSMINOR            DSMAJOR             DSMINOR             kmMAJOR
    kmMINOR             DbMAJOR             DbMINOR             DBMAJOR             DBMINOR             NBCCRD
    NBCCRO              MAXAGGREGATESIZE    BSBETAMAJOR         BSBETAMINOR         EUBETAMAJOR         EUBETAMINOR
    TANTHETA            EUROKR              EUROKPHI            EUROKRMAJOR         EUROKRMINOR         EUROKPHIMAJOR
    EUROKPHIMINOR       EUROCMAJOR          EUROCMINOR          EUROKSMAJOR         EUROKSMINOR         EUROKCMAJOR
    EUROKCMINOR         EUROPHIEF           EUROCONCCOMPSTRESSLIMITK1  EUROSTEELTENSSTRESSLIMITK3  EUROEXPOSURECLASS   EUROCRACKWIDTHLIMIT
    EUROAGEATCRACKING   EUROCEMENTTYPE      EUROSHORTORLONGTERM  REBARSIZELONGTOP    REBARSIZELONGBOT    ISRIBBEDLONGREBAR
    TOPLEFTAREA         BOTLEFTAREA         TOPRIGHTAREA        BOTRIGHTAREA        INDIANQFACTORX      INDIANQFACTORY
    OMEGAMAJOR          OMEGAMINOR          CMAJOR              CMINOR              CSWAYMAJOR          CSWAYMINOR
    FABMAJOR            FABMINOR            FASMAJOR            FASMINOR            ETAMAJOR            ETAMINOR
    CORNERREBARFRACTIONTOP  CORNERREBARFRACTIONBOT  GAMMAB3BEAMS        GAMMAB3COLUMNS      CONSIDERCRACKANALYSIS  ACRACKWIDTHLIMITFULL
    ACRACKWIDTHLIMITLONG  TRANSFERFRAME       CORNERCOLUMN        RELCOLUMNLOCATION   ETASMAJOR           ETASMINOR
    TORSIONMF           TORSIONZETA         TORSIONCOVER        KMAJORGRAV          KMINORGRAV          BEAMGRAVITYNEGMOMENTREDFACTOR
    DUALSYSTEMSMF       MMF                 SMF                 AFMF                MMFCOLTOPCN         MMFCOLBOTCN
    SMFCOLCN            AFMFCOLCN           MMFCOLTOPAXPCN      MMFCOLBOTAXPCN      SMFCOLAXPCN         TRANCOLCN
    COLSTORYCN          SDGDETAILCN         SEISMICGRADE        PERFORMANCEDESIGNTYPE  DESIGN              DUCTILITY
    BOTTOMSTRENGTHENWALL  SHORTLIMBEDWALL     COMPLICATEDSHEARWALL  PIERTYPE            PIERSECTIONBOT      PIERSECTIONTOP
    DESIGNCHECK         THICKBOT            LENGTHBOT           DB1LEFTBOT          DB2LEFTBOT          DB1RIGHTBOT
    DB2RIGHTBOT         THICKTOP            LENGTHTOP           DB1LEFTTOP          DB2LEFTTOP          DB1RIGHTTOP
    DB2RIGHTTOP         MATERIAL            PTMAX               PCMAX               ENDCORNERBAR        EDGEBAR
    EDGESPACING         CLEARCOVER          MATERIALUNIFORM     BULBWIDTH           BULBTHICKNESS       MIDDLEBAR
    MIDDLEBARSPACING    MIDDLEBARFY         NUMOFLAYERSOFREBAR  CONSIDERVC          THICKLEFT           DEPTHLEFT
    COVERBOTLEFT        COVERTOPLEFT        THICKRIGHT          DEPTHRIGHT          COVERBOTRIGHT       COVERTOPRIGHT
    SLABWIDTHLEFT       SLABDEPTHLEFT       SLABWIDTHRIGHT      SLABDEPTHRIGHT      COVERBOT            COVERTOP
    IGNOREBENEFICIALPUINSPANDRELDESIGN  FRAMETYPE           CONNECTIONTYPE      RELHINGEDISTANCELEFT  RELHINGEDISTANCERIGHT  RELYCYLMPARAMETER
    STEELTYPE           SECTIONCLASS        ROLLED              TOPLOADEDBEAM       ELEMENTTYPE         TRANSFERCOLUMN
    SEISMICMF           GASCUT              PINCONNECTED        IGNOREBOVERT        BEAMASFLEXOCOMPRESSION  CONSIDERDEFLECTION
    RELATIVEDEFLECTION  DLDEFLECTIONLIMIT   SLDEFLECTIONLIMIT   LLDEFLECTIONLIMIT   TLDEFLECTIONLIMIT   TLMCDEFLECTIONLIMIT
    DLDEFLECTIONLIMITABS  SLDEFLECTIONLIMITABS  LLDEFLECTIONLIMITABS  TLDEFLECTIONLIMITABS  TLMCDEFLECTIONLIMITABS  SPECIFIEDCAMBER
    NETAREARATIO        LLTB                KMAJORBRACED        KMINORBRACED        KLTB                KTLTB
    KRLTB               KLLTB               MUEMAJOR            MUEMINOR            CB                  ALPHAB
    ALPHAM              ALPHAS              BSMMAJOR            BSMMINOR            BSMLT               BSN
    OMEGA1MAJOR         OMEGA1MINOR         OMEGA2              SYSTEMOMEGA         EUKMAJOR            EUKMINOR
    KZY                 KYZ                 COLUMNCURVEMAJOR    COLUMNCURVEMINOR    BUCKLINGCURVE       EUC1
    EUC2                EUC3                MEQ/MMAXMAJOR       MEQ/MMAXMINOR       ITALIANOMEGA1       ITALIANOMEGA
    ALLOWPLASTICSTRAIN  SP16GAMMAC          SP16GAMMAU          SP16GAMMAC1         SP16KLOVERRLIMITC   SP16KLOVERRLIMITSLOPE
    SP16LOVERRLIMITTENSION  BETAMMAJOR          BETAMMINOR          BETATMAJOR          BETATMINOR          PHIBMAJOR
    PHIBMINOR           KLOVERRLIMITC       LOVERRLIMITT        B1MAJOR             B1MINOR             B2MAJOR
    B2MINOR             U1MAJOR             U1MINOR             U2MAJOR             U2MINOR             EUKLTB
    EUNSMF              PSIMAJOR            PSIMINOR            PHIMAJOR            PHIMINOR            EULERMAJOR
    EULERMINOR          GAMMAMAJOR          GAMMAMINOR          ETACHINA            ETABCCR             REDUCEHSSTHICKNESS
    HSSWELDINGTYPE      RY                  GAMMAOV             IW                  NCRT                NCRTF
    NPOWER              HSSCLASSH           CW                  PNC                 PNT                 FA
    FT                  PHIPNC              PHIPNT              PC                  PT                  CR
    NC.RD               NT.RD               SIGMAAC             SIGMAAT             DESIGNRUN           DESIGNRY
    DESIGNRU            DESIGNRS            FALLOW              FVALLOW             CONSIDERFICTITIOUSSHEAR  MNMAJOR
    MNMINOR             FBMAJOR             FBMINOR             PHIMNMAJOR          PHIMNMINOR          MCMAJOR
    MCMINOR             MRMAJOR             MRMINOR             MC.RDMAJOR          MC.RDMINOR          SIGMABCMAJOR
    SIGMABCMINOR        MBMAJOR             MB.RDMAJOR          kw                  Mcr                 ZaProgDet
    za                  ZsProgDet           zs                  C1C2C3Option        VNMAJOR             VNMINOR
    FVMAJOR             FVMINOR             PHIVNMAJOR          PHIVNMINOR          KF                  KTAXIAL
    VRMAJOR             VRMINOR             VR.RDMAJOR          VR.RDMINOR          TAUVAMAJOR          TAUVAMINOR
    TAUVM               SIGMAEMAX           SRLIMIT

## $ STEEL DESIGN PREFERENCES

    STEELPREFERENCE     CODE                THDESIGN            EVERYSTEP-ALL       ENVELOPES-ALL       LASTSTEP
    EVERYSTEP           ENVELOPES           AASHTO-ASD          AASHTO-LRFD         FRAMETYPE           SMF
    IMF                 OMF                 SCBF                OCBF                OCBFI               BRBF
    STMF                SPSW                ORDINARY MRF        SPECIAL MRF         BRACED FRAME        SPECIAL CBF
    ECCENTRIC BF        MOMENT FRAME        DCHMRF              DCMMRF              DCLMRF              DCHCBF
    DCMCBF              DCLCBF              DCHEBF              DCMEBF              DCLEBF              INVPENDULUM
    SECONDARY           TYPE LD MRF         TYPE MD MRF         TYPE D MRF          TYPE LD CBF(V)      TYPE LD CBF(TC)
    TYPE LD CBF(TO)     TYPE LD CBF(OT)     TYPE MD CBF(V)      TYPE MD CBF(TC)     TYPE MD CBF(TO)     TYPE MD CBF(OT)
    CANTILEVER COLUMN   CONVENTIONAL MF     CONVENTIONAL BF     SWAY FRAME          NONSWAY FRAME       SWAY MF
    CONCENTRIC BF       BRACED MF           SDC                 IMPORTANCEFACTOR    SYSTEMRHO           SYSTEMSDS
    SYSTEMR             OMEGA0              SYSTEMCD            PROVISION           ASD                 ANALYSISMETHOD
    DIRECT ANALYSIS     EFFECTIVE LENGTH    LIMITED 1ST ORDER   SECONDORDERMETHOD   GENERAL 2ND ORDER   AMPLIFIED 1ST ORDER
    STIFFNESSREDUCTIONMETHOD  TAU-B VARIABLE      TAU-B FIXED         TAU-B ONE           AANOTIONALTOLATERALCOMBOS  YES
    BETA                BETAOMEGA           PHIBAISC05          PHICAISC05          PHITYAISC05         PHITFAISC05
    PHIVAISC05          PHIVROLLEDIAISC05   PHITORSIONAISC05    OMEGABAISC05        OMEGACAISC05        OMEGATYAISC05
    OMEGATFAISC05       OMEGAVAISC05        OMEGAVROLLEDIAISC05  OMEGATORSIONAISC05  PHIBAISC09          PHICAISC09
    PHITYAISC09         PHITFAISC09         PHIVAISC09          PHIVROLLEDIAISC09   PHITORSIONAISC09    IGNORESEISMICCODE
    IGNORESPECIALSEISMICLOAD  ISDOUBLERPLATEPLUGWELDED  HSSWELDINGTYPE      ERW                 SAW                 REDUCEHSSTHICKNESS
    PHIBLRFD99          PHICLRFD99          PHITYLRFD99         PHITFLRFD99         PHIVLRFD99          PHITORSIONLRFD99
    PHICANGLELRFD99     PHIBLRFD            PHICLRFD            PHITLRFD            PHIVLRFD            PHICANGLELRFD
    ZONE                LATERALFACTOR       ANALYSISMETHODAS    STEELTYPE           HOT ROLLED          HOT FINISHED
    COLD FORM           STRESS RELIEVED     LIGHTLY WELDED      HEAVILY WELDED      PHIBAS4100          PHICAS4100
    PHITYAS4100         PHITFAS4100         PHIVAS4100          ANALYSISMETHODNZS   PHIBNZS3404         PHICNZS3404
    PHITYNZS3404        PHITFNZS3404        PHIVNZS3404         SYSTEMRD            SYSTEMRO            IEFASA02
    PHIBCSAS1624        PHICCSAS1624        PHITCSAS1624        PHIVCSAS1624        SLENDERPROCEDURE    MODIFYGEOMETRY
    MODIFYFY            PHIBCSAS1619        PHICCSAS1619        PHITCSAS1619        PHIVCSAS1619        PHIBCSAS1614
    PHICCSAS1614        PHITCSAS1614        PHIVCSAS1614        PHIBCSAS1609        PHICCSAS1609        PHITCSAS1609
    PHIVCSAS1609        PHIBCSAS1605        PHICCSAS1605        PHITCSAS1605        PHIVCSAS1605        PHIBCSA
    PHICCSA             PHITCSA             PHIVCSA             COUNTRY             CEN_DEFAULT         UNITED_KINGDOM
    SLOVENIA            BULGARIA            NORWAY              SINGAPORE           SWEDEN              FINLAND
    DENMARK             PORTUGAL            GERMANY             POLAND              IRELAND             COMBOSFROM
    EQ_6.10             MAX_EQ_6.10A/B      KFACTORMETHOD       ANNEX_A             ANNEX_B             RELCLAS
    CLASS_1             CLASS_2             CLASS_3             BEHAVIORFACTOR      SYSTEMOVERSTRENGTH  CONSIDERTORSION
    GAMMAM005           GAMMAM105           GAMMAM205           CONSIDERPDELTADONE  GAMMAM0             GAMMAM1
    INDIANGAMMAM0       INDIANGAMMAM1       INTERACTIONMETHOD   BOTH                ALLOWPLASTICSTRAIN  RELIABILITYFACTOR
    GAMMAM              GAMMAC              GAMMAU              GAMMAC1             SDGSTEEL            GRADEI
    GRADEII             GRADEIII            GRADEIV             NONSEISMIC          GAMMAM0CHINA        BEAMASFLEXOCOMPRESSION
    CONSIDERDEFLECTION  DLDEFLECTIONLIMIT   SLDEFLECTIONLIMIT   LLDEFLECTIONLIMIT   TLDEFLECTIONLIMIT   TLMCDEFLECTIONLIMIT
    PATTERNLLF          MAXITERATION        SRLIMIT             LATERALOPTIMIZATION  LOAD  DISP                POINT
    STORY               LATERALOPTIMIZATION  MODECASE  MODE                PERIOD

## $ STEEL DESIGN OVERWRITES

    DCMCBFF             COLUMN              BRACE               CLASS 1             CLASS 2             CLASS 3
    CLASS 4             STEELDATA           RBS                 BUEEP-4E            BUEEP-8E            BUEEP-4ES
    BUEEP-8ES           BFP                 WUF-W               DTMC                RATIO               ABSOLUTE
    METHOD 1 - EC3      METHOD 2 - GENERAL  METHOD 3 - USER DEFINED

## $ GENERALIZED DISPLACEMENTS

    GENDISPL            JOINT

## $ GENERAL DESIGN PREFERENCES

    GENERALPREFERENCE   STRUCTURALSYSTEM    FRAME ONLY          SHEARWALL ONLY      FRAME-SHEARWALL     FRAME-CORE-TUBE
    TUBE-IN-TUBE        FLAT-SLAB           STEELFRAME          STEELFRAME-CORE     STEELFRAME-CBF      STEELFRAME-EBF
    COMPOSITECOLUMN-CORE  STORYSTIFFNESSTYPE  STORY SHEAR/DISP    STORY SHEAR/DRIFT   OVERTURNTYPE        FROM STORY SHEAR
    GEOMETRY CENTER     WEIGHTED GEOMETRY CENTER  GAMMA_0             GAMMA_L             OVERSTRENGTHFACTOR  SEISMICPERFORMANCECLASS
    NORMAL+L1           NORMAL+L2D          NORMAL+L2R          AUTOBEAMSTIFFEN     TALLBUILDING        TALLBUILDINGCLASS
    IRREGULARSTORYMODIFIER  DUALSYSTEMMAXSMF    SEISMICGROUP

## $ STEEL JOIST DESIGN OVERWRITES

    STEELJOISTDATA      SECTION             LLDEFLLIMIT         RLLF

## $ SUPPORT LINE CONNECTIVITIES

    SUPPORTLINE

## $ LINE GAUGE CONNECTIVITIES

    LINEGAUGEOBJECT

## $ LINE GAUGE PROPERTIES

    LINEGAUGEPROP       DIRECTION           ENABLEACCEPTANCE    IOPOS               LSPOS               CPPOS
    IONEG               LSNEG               CPNEG               NOTES

## $ LINE GAUGE ASSIGNS

    LINEGAUGEASSIGN     PROPERTY            ANGLEFROMDEFAULT

## $ AREA GAUGE CONNECTIVITIES

    AREAGAUGEOBJECT

## $ AREA GAUGE PROPERTIES

    AREAGAUGEPROP

## $ AREA GAUGE ASSIGNS

    AREAGAUGEASSIGN

## $ SLAB PANEL CONNECTIVITIES

    SLABPANEL

## $ TENDON CONNECTIVITIES

    TENDON              NUMPTS              LAYER               DATUMOFFSET         MINCRADIUS

## $ TENDON HORIZONTAL LAYOUT

    TENDONHL            NUMSEGS             SEGMENTNUM          CURVETYPE           Circular Curve      Multilinear Curve
    Bezier Curve        Spline Curve        NUMCURVEPTS         TENSION             POINT               GLOBALX
    GLOBALY             GLOBALZ

## $ TENDON SUPPORT POINTS

    TENDONSP            NUMSUPPORTS         SUPPNUM             GridIntersection    ColumnStripSpine    LineSpring
    SUPPORTTYPE         RD

## $ TENDON VERTICAL PROFILE

    TENDONVP            SPANNUM             SPANLABEL           SPANTYPE            L                   C
    D                   ZL                  ZC                  ZD                  ZR

## $ LINK CONNECTIVITIES

    LINK                POINT

## $ AREA CONNECTIVITIES

    AREA                PANEL               FLOOR

## $ STRIP GEOMETRY

    STRIP               STORY               POINT               WALEFT              WARIGHT             AUTOWIDEN
    WBLEFT              WBRIGHT

## $ LINE CONNECTIVITIES

    LINE                COLUMN              BEAM                BRACE               GRIDSYSTEM          TOWER
    CARTESIAN           CYLINDRICAL         UX                  UY                  RZ                  BUBBLESIZE
    TOPSTORY            BOTTOMSTORY         GENGRID             LABEL               X1                  Y1
    X2                  Y2                  VISIBLE             BUBBLELOC           REFERENCEPLANE      Z
    REFERENCEPOINT      X                   Y                   GRID                DIR                 COORD

## $ CONTROLS

    TITLE1              TITLE2              PREFERENCE  MERGETOL  RLLF  METHOD        Chinese GB 50009-2001  USERUBC97
    USERR               USERAMIN            USERCURVES          USERSTORIES         USEDEFAULTMIN       MINSINGLE
    MINMULTI            COLUMNALLFORCES     RLLF  CURVE         CURVEPOINT          TRIBAREA            REDFACTOR
    DLOVERLL            RLLF  NUMSTORY      ALLOWMULTIPLEANALYSISMODELS  Yes

## $ PROGRAM INFORMATION

    Storys              Rebar Definitions   SD Properties       Slab/Deck/Wall Properties  Line Gauge Properties  Area Gauge Properties
    Named Frame Modifier  Named Shell Modifier  Named Frame Releases  Pier/Spandrel Names  Line Bays           Area Bays
    Line Gauge Objects  Area Gauge Objects  Point Assigns       Line Assigns        Line Curve Data     Hinge Assigns
    Area Hinge Assigns  Area Assigns        Area Curve Data     Link Assigns        Tendon Assigns      Line Gauge Assigns
    Area Gauge Assigns  Auto Seismic Loads  Auto Wind Loads     Analysis Options    Analysis Model Information  Performance Checks
    General Design      Wall Pier Acceptance Criteria  Wall Spandrel Acceptance Criteria  Named Pushover Plots  Named Story Response Plots  Named Quick Hysteresis Plots
    Named Response Spectrum from Time History Plots  Named Plot Functions  Named Plot Function Plots  TH Result Functions  Database Table Named Sets  Log and Comments

## $ TOWERS

    TOWER

## $ STORIES - IN SEQUENCE FROM TOP - FOR EACH TOWER


## $ STORIES - IN SEQUENCE FROM TOP

    STORY               HEIGHT              MASTERSTORY         SIMILARTO           SPLICE              SPLICEHEIGHT
    ELEV

## $ DIAPHRAGM NAMES

    DIAPHRAGM           TYPE SEMIRIGID      TYPE RIGID

## $ MATERIAL PROPERTIES

    MATERIAL            Coldformed          TYPE                GRADE               MASSPERVOLUME       WEIGHTPERVOLUME
    SYMTYPE             E                   E1                  E2                  E3                  U1
    U2                  U3                  A1                  A2                  A3                  G1
    G2                  G3                  FY                  FU                  FYE                 FUE
    LIGHTWEIGHT         FCSFACTOR           FR                  WROUGHT             MOLD-CAST           SAND-CAST
    ALUMTYPE            ALLOY               FCY                 FTY                 FTU                 FSU
    FM                  DESIGNTYPE          MODALRATIO          MASSCOEFF           STIFFCOEFF          TIMEDEPENDENTE
    MODULUSFACTOR       TIMEDEPENDENTCREEP  CREEPFACTOR         TIMEDEPENDENTSHRINKAGE  SHRINKAGEFACTOR     CREEPTYPE
    NUMBERCREEPTERMS    CEBFIP90            CEBFIP2010          ACI209R92           Eurocode22004       AS36002009
    AS36002018          GL2000              NZS31012006         TIMEDEPCONCCODE     CEMENTTYPECOEFF     RELHUMIDITY
    SHRINKAGECOEFF      SHRINKSTARTAGE      CEMENTTYPE          LTWTCONCGRADE       LTWTDENSITY         ACI209R92A
    ACI209R92BETA       Moist               Steam               CURINGTYPE          SLUMP               FINEAGGREGATE
    AIRCONTENT          CEMENTCONTENT       Class R             Class S             LC16/18 and lower   LC20/22 and higher
    LTWTDENSITYKGOVERM3  COMPRESSIVESTRENGTHFACTORA  COMPRESSIVESTRENGTHFACTORB  BASICCREEPCOEFF     Arid                Temperate Inland
    Tropical/Near-coastal  ENVIRONMENT         BASICDRYINGSHRINKAGESTRAIN  Type I              Type II             Type III
    STRENGTHDEVELPARAM  CORRECTIONTERM      DELTAF              AGGREGATETYPEFACTOR  HYSTYPE             PIVOTALPHA1
    PIVOTALPHA2         PIVOTBETA1          PIVOTBETA2          PIVOTETA            ENERGYDEGFACT       BRBSYM
    BRBHARDFACTTEN      BRBMAXSTRAINTEN     BRBACCUMSTRAINTEN   BRBPROPORTIONTEN    BRBHARDFACTCOMP     BRBMAXSTRAINCOMP
    BRBACCUMSTRAINCOMP  BRBPROPORTIONCOMP   DEGRADINGSYM        DEGRADINGENERFACTYIELDTEN  DEGRADINGENERFACTMODDEFTEN  DEGRADINGENERFACTMAXDEFTEN
    DEGRADINGMODDEFLEVELTEN  DEGRADINGMAXDEFLEVELTEN  DEGRADINGACCDEFWTFACTTEN  DEGRADINGENERFACTYIELDCOMP  DEGRADINGENERFACTMODDEFCOMP  DEGRADINGENERFACTMAXDEFCOMP
    DEGRADINGMODDEFLEVELCOMP  DEGRADINGMAXDEFLEVELCOMP  DEGRADINGACCDEFWTFACTCOMP  DEGRADINGSTIFFWTFACT  DEGRADINGLARGESMALLWTFACT  SSTYPE
    STRAINATHARDENING   STRAINATMAXSTRESS   STRAINATRUPTURE     FINALSLOPE          IOTENSION           LSTENSION
    CPTENSION           IOCOMPRESSION       LSCOMPRESSION       CPCOMPRESSION       FRICTIONANGLE       DILATATIONANGLE
    STRAINATFC          STRAINATULTIMATE    IGNORETENSIONACCEPTANCE  250ksi              270ksi              STRAINATFM
    STRAIN              STRESS              POINTID             CONCRETESTIFFNESSAGE  CONCRETESTIFFNESSMULTIPLIER  CONCRETECREEPAGEATLOADING
    CONCRETECREEPDAYS   CONCRETECREEPCOEFF  CONCRETECREEPA      CONCRETECREEPB      CONCRETECREEPHO     CONCRETESHRINKAGEAGE
    CONCRETESHRINKAGESTRAIN  CONCRETESHRINKAGEA  CONCRETESHRINKAGEB  CONCRETESHRINKAGEHO

## $ TENDON SECTIONS

    TENDONSECTION       MATERIAL            STRANDAREA

## $ FRAME SECTIONS

    FRAMESECTION        SHAPE               AUTOSELECTDESIGNTYPE  MATERIAL            JOISTSHAPE          FILE
    TF                  TW                  BB                  TFB                 R                   ENCASEMENTMATERIAL
    T                   FILLMATERIAL        MIRROR2             TWB                 IGNOREFLANGEAREA    MIRROR3
    DIS                 B1                  B2                  B3                  B4                  D1
    D2                  D3                  D4                  D5                  D6                  RAD
    LIP                 AREA                AS2                 AS3                 I33                 I22
    I23                 S33POS              S33NEG              S22POS              S22NEG              R33
    R22                 Z33                 Z22                 TORSION             OFFSETCG3           OFFSETCG2
    OFFSETPNA3          OFFSETPNA2          OFFSETSC3           OFFSETSC2           AUTORIGIDZONEAREA   NOTIONALAUTOFACTOR
    NOTIONALUSERVALUE   NOTIONALISNONE      NOTES               AMOD                A2MOD               A3MOD
    JMOD                I2MOD               I3MOD               MMOD                WMOD                EMBEDDEDSECTION
    BUILTUPISECTION     ISECTION            FYTOPFLANGE         FYWEB               FYBOTFLANGE         TOPPLATEMATERIAL
    TOPPLATEWIDTH       TOPPLATETHICK       BOTPLATEMATERIAL    BOTPLATEWIDTH       BOTPLATETHICK       CELLULARSECTION
    CASTELLATEDSECTION  TOPROOTSECTION      BOTTOMROOTSECTION   HOLESPACING         HOLEWIDTH           HOLEHEIGHT
    CUSTOMSTEELJOIST    DEPTH               PANELLENGTH         Pratt               Warren              TRUSSTYPE
    TOPCHORDSECTION     BOTTOMCHORDSECTION  JOISTWEBSECTION

## $ AUTO SELECT SECTION LISTS

    AUTOSECTION         STARTSECTION

## $ NONPRISMATIC SECTIONS

    NONPRISMATICSECTION  STARTSEC            ENDSEC              VLENGTH             FLENGTH             VARI3
    LINEAR              PARABOLIC           CUBIC               VARI2

## $ CONCRETE SECTIONS

    CONCRETESECTION     LONGBARMATERIAL     CONFINEBARMATERIAL  R-                  PATTERN             TRANSREINF
    SPIRAL              TIES                DESIGNCHECK         COVER               LONGBARAREA         CORNERBARAREA
    CONFINEBARAREA      CONFINEBARSPACING   NUMCONFINEBARS3     NUMCONFINEBARS2     COVERTOP            COVERBOTTOM
    ATI                 ABI                 ATJ                 ABJ

## $ USER STEEL JOIST SECTIONS

    JOISTSECTION        DESIGNTYPE          DEPTH               UNITWT              ANALYSISI33         SPAN
    TOTALLOAD           LIVELOAD            I33                 MOMCAP              SHEARCAP            MINSPAN
    MAXSPAN

## $ BUCKLING RESTRAINED BRACE SECTIONS

    BRBSECTION          BRBWEIGHT           AREAYIELDINGCORE    STIFFNESSELASTICSEGMENT  LENGTHYIELDINGCORE  LENGTHELASTICSEGMENT
    KFMODIFIER          CONNECTIONRIGIDITYTYPE  RIGIDITYRATIO       LOWERBEAMCLEARANCE  LOWERCOLUMNCLEARANCE  UPPERBEAMCLEARANCE
    UPPERCOLUMNCLEARANCE  BRACEENDRADIUS      UNITWEIGHT          LELASTIC            AELASTIC            LYSC
    INELASTICDATATYPE   EPP                 FDTYPE              ISSYMMETRIC         KO                  KF
    FYTENSION           FUOTENSION          FUHTENSION          FYCOMPRESSION       FUOCOMPRESSION      FUHCOMPRESSION
    DUTENSION           DXTENSION           DUCOMPRESSION       DXCOMPRESSION       Accumulated         HARDENINGOPTION
    MAXDEFAVG           MAXDEFFUH           ACCUMULATEDDEFAVG   ACCUMULATEDDEFFUH   WEIGHTINGFACTOR     TENSIONIO
    TENSIONLS           TENSIONCP           COMPRESSIONIO       COMPRESSIONLS       COMPRESSIONCP       ACCUMULATEDIO
    ACCUMULATEDLS       ACCUMULATEDCP       TENSIONHARDENINGFACTOR  TENSIONMAXSTRAIN    TENSIONACCUMSTRAIN  TENSIONSTRAINPROPORTION
    COMPRESSIONHARDENINGFACTOR  COMPRESSIONMAXSTRAIN  COMPRESSIONACCUMSTRAIN  COMPRESSIONSTRAINPROPORTION

## $ REBAR DEFINITIONS

    REBARDEFINITION     DIA

## $ PANEL ZONE PROPERTIES

    PANELZONE           PZENDOFFSETSRIGID   PZACTIVEDIRECTIONS  Spring Constants    Auto ASCE 41-13     User Auto
    PZTYPE              PZKMAJOR            PZKMINOR            PZLINKPROP          PZCONNECT           Beam-Column
    Beam-Brace          Brace-Column        PZANG               PZAXIALDIR          PZUSERMAJORNLTYPE   PZUSERMAJORNLLINEARSTIFFNESS
    PZUSERMAJORBCPOINTSEXPOSED  PZUSERMAJORCDPOINTSEXPOSED  -MajorE             -MajorD             -MajorCD            -MajorC
    -MajorBC            -MajorB             MajorA              MajorB              MajorBC             MajorC
    MajorCD             MajorD              MajorE              PZUSERMAJORMOMENTSF  PZUSERMAJORROTATIONSF  Extrapolate
    PZUSERMAJORBEYONDPOINTE  PZUSERMAJORHYSTYPE  PZUSERMAJORALPHA1   PZUSERMAJORALPHA2   PZUSERMAJORBETA1    PZUSERMAJORBETA2
    PZUSERMAJORETA      PZUSERMAJORENERGYDEGFACT  PZUSERMAJORBRBHARDFACT  PZUSERMAJORBRBMAXSTRAIN  PZUSERMAJORBRBACCUMSTRAIN  PZUSERMAJORBRBPROPORTION
    PZUSERMAJORDEGRADINGENERFACTYIELD  PZUSERMAJORDEGRADINGENERFACTMODDEF  PZUSERMAJORDEGRADINGENERFACTMAXDEF  PZUSERMAJORDEGRADINGMODDEFLEVEL  PZUSERMAJORDEGRADINGMAXDEFLEVEL  PZUSERMAJORDEGRADINGACCDEFWTFACT
    PZUSERMAJORDEGRADINGSTIFFWTFACT  PZUSERMAJORDEGRADINGLARGESMALLWTFACT  PZUSERMINORNLTYPE   PZUSERMINORNLLINEARSTIFFNESS  PZUSERMINORBCPOINTSEXPOSED  PZUSERMINORCDPOINTSEXPOSED
    -MinorE             -MinorD             -MinorCD            -MinorC             -MinorBC            -MinorB
    MinorA              MinorB              MinorBC             MinorC              MinorCD             MinorD
    MinorE              PZUSERMINORMOMENTSF  PZUSERMINORROTATIONSF  PZUSERMINORBEYONDPOINTE  PZUSERMINORHYSTYPE  PZUSERMINORALPHA1
    PZUSERMINORALPHA2   PZUSERMINORBETA1    PZUSERMINORBETA2    PZUSERMINORETA      PZUSERMINORENERGYDEGFACT  PZUSERMINORBRBHARDFACT
    PZUSERMINORBRBMAXSTRAIN  PZUSERMINORBRBACCUMSTRAIN  PZUSERMINORBRBPROPORTION  PZUSERMINORDEGRADINGENERFACTYIELD  PZUSERMINORDEGRADINGENERFACTMODDEF  PZUSERMINORDEGRADINGENERFACTMAXDEF
    PZUSERMINORDEGRADINGMODDEFLEVEL  PZUSERMINORDEGRADINGMAXDEFLEVEL  PZUSERMINORDEGRADINGACCDEFWTFACT  PZUSERMINORDEGRADINGSTIFFWTFACT  PZUSERMINORDEGRADINGLARGESMALLWTFACT  From Link
    ACCEPTANCETYPE      USERACCEPTANCETYPE  IOMOMENTMAJOR       LSMOMENTMAJOR       CPMOMENTMAJOR       IOROTATIONMAJOR
    LSROTATIONMAJOR     CPROTATIONMAJOR     IOMOMENTMINOR       LSMOMENTMINOR       CPMOMENTMINOR       IOROTATIONMINOR
    LSROTATIONMINOR     CPROTATIONMINOR     PZDOUBLER           PZAXIALLOADRATIO    SHELLPROP           PROPTYPE
    MODELINGTYPE        ShellThin           ShellThick          Membrane            ONEWAYLOADDIST      Layered
    SLABTYPE            SLABTHICKNESS       Stiff               Ribbed              OVERALLDEPTH        SLABRIBWIDTHTOP
    SLABRIBWIDTHBOTTOM  SLABRIBSPACING      SLABRIBPARALLELTOAXIS  Waffle              SLABRIBSPACING1     SLABRIBSPACING2
    Footing             ORTHO               EFFECTIVETHICKNESS11  EFFECTIVETHICKNESS22  EFFECTIVETHICKNESS12  LAYERMATERIAL
    LAYERNAME           LAYERDIST           LAYERTHICK          LAYERMODELINGTYPE   LAYERNUMINTPOINTS   LAYERMATANG
    LAYERMATBEHAVIOR    Coupled             LAYERMATS11         LAYERMATS22         LAYERMATS12         Inactive
    F11MOD              F22MOD              F12MOD              M11MOD              M22MOD              M12MOD
    V13MOD              V23MOD

## $ DECK PROPERTIES

    DECKTYPE            Filled              Unfilled            CONCMATERIAL        DECKMATERIAL        DECKSLABDEPTH
    DECKRIBDEPTH        DECKRIBWIDTHTOP     DECKRIBWIDTHBOTTOM  DECKRIBSPACING      DECKSHEARTHICKNESS  DECKUNITWEIGHT
    SHEARSTUDDIAM       SHEARSTUDHEIGHT     SHEARSTUDFU         AUTOSELECTLIST      AUTOSELECTWALLSTARTPROP  WALLTHICKNESS
    AUTOSELECTWALLSECTION  CONCMATERIALCOMP    STEELMATERIALCOMP   WALLLENGTH          TOTALTHICK          PLATETHICK
    FLANGEPLATETHICK    TIEBARDIAMETER      TIEBARSPACING       CSTIFFNESSMODIFIER1  CSTIFFNESSMODIFIER2  ISPANDREL

## $ LINK PROPERTIES

    LINKPROP            MASS                RMASS1              RMASS2              RMASS3              WEIGHT
    PDM2I               PDM2J               PDM3I               PDM3J               Effective From Zero  STIFFLINEAROPTION
    Tangent             STIFFDAMPINGOPTION  STIFFDAMPINGCOEFF   DOF                 FIXED               DJ
    STIFF               KE                  CE                  NONLIN              K                   EXP
    FIXEDLENGTHDAMPER   FLDLENGTH           EXTENDERMODULUS     EXTENDERAREA        INITIALDAMPINGCOEFF  YIELDEDDAMPINGCOEFF
    FORCELIMIT          LOADINGSLIPPINGSTIFFNESS  UNLOADINGSLIPPINGSTIFFNESS  PRECOMPRESSIONDISPLACEMENT  STOPDISPLACEMENT    ACTIVEDIRECTION
    OPEN                ALPHA1              ALPHA2              BETA1               BETA2               ETA
    YIELD               KRATIO              CDAMP               CSLOW               CFAST               RATE
    RADIUS              KTENSION            OPENCOMP            OPENTENS            CSLOWCOMP           CFASTCOMP
    RATECOMP            CSLOWTENS           CFASTTENS           RATETENS            OUTERSYM            OUTERHEIGHT
    INNERHEIGHT         KOUTERTOP           CSLOWOUTERTOP       CFASTOUTERTOP       RATEOUTERTOP        RADIUSOUTERTOP
    STOPDISTOUTERTOP    KOUTERBOT           CSLOWOUTERBOT       CFASTOUTERBOT       RATEOUTERBOT        RADIUSOUTERBOT
    STOPDISTOUTERBOT    KINNERTOP           CSLOWINNERTOP       CFASTINNERTOP       RATEINNERTOP        RADIUSINNERTOP
    STOPDISTINNERTOP    CROSSSECTIONALAREA  EFFECTIVEHEIGHT     ADDEDELASTICSTIFFNESS  NUMBERHYSTERMS      CONTROLSTRAIN1
    CONTROLSTRENGTH1    CONTROLSTRAIN2      CONTROLSTRENGTH2    CONTROLSTRAIN3      CONTROLSTRENGTH3    RESISTANCERATIO
    CONTROLSTRAINDAMAGE  STIFFNESSFORITERATION  ACCEPTTYPE          ACCEPTSYMMETRIC     ACCEPTDOF           ACCEPTIOPOS
    ACCEPTLSPOS         ACCEPTCPPOS         ACCEPTIONEG         ACCEPTLSNEG         ACCEPTCPNEG         U1U2
    U1U3                U1R1                U1R2                U1R3                U2U3                U2R1
    U2R2                U2R3                U3R1                U3R2                U3R3                R1R2
    R1R3                R2R3                LINKPROPFORCEDISPL  DISPL               FORCE

## $ SOIL PROFILES

    SOILPROFILE         SHEARMODREDUCTIONFACTOR  HYSTERETICDAMPINGRATIO  LAYER               ELEVTOP             UNITWEIGHT
    SHEARMODULUS        POISSONSRATIO       COHESION            FRICTIONANGLE       SHEARVELOCITY

## $ ISOLATED COLUMN FOOTINGS

    ISOLATEDCOLUMNFOOTING  LENGTH              WIDTH               THICKNESS           PROGRAMDETERMINED   EMBEDMENTDEPTH
    USERDEFINED

## $ POINT SPRING PROPERTIES

    POINTSPRING         STIFFNESSOPTION     NONLINEARSPECOPTION  QUICK               LINKS               UX
    UY                  UZ                  RX                  RY                  RZ                  NONLINEAROPTION
    TENSIONONLY         COMPRESSIONONLY     ELASTOPLASTIC       EPCOMPRESSIONSTIFFNESS  EPCOMPRESSIONSTRENGTH  EPTENSIONSTIFFNESS
    EPTENSIONSTRENGTH   LINKPROP            AXIALDIR            ANGLE               SOILPROFILEANDFOOTING  SOILPROFILE
    ISOLATEDFOOTING     TIMEPERIOD

## $ LINE SPRING PROPERTIES

    LINESPRING          U1                  U2                  U3                  R1                  NONLINEAROPT2
    NONLINEAROPT3

## $ AREA SPRING PROPERTIES

    AREASPRING          EPCOMPSTIFF         EPCOMPSTRENGTH      EPTENSTIFF          EPTENSTRENGTH

## $ NAMED FRAME MODIFIERS

    NAMEDFMODIFIER      PROPMODA            PROPMODA2           PROPMODA3           PROPMODT            PROPMODI22
    PROPMODI33          PROPMODM            PROPMODW

## $ NAMED SHELL MODIFIERS

    NAMEDSHMODIFIER     PROPMODF11          PROPMODF22          PROPMODF12          PROPMODM11          PROPMODM22
    PROPMODM12          PROPMODV13          PROPMODV23

## $ NAMED FRAME RELEASES

    NAMEDFRELEASE       PINNED              PI                  PJ                  V2I                 V2J
    V3I                 V3J                 TI                  TJ                  M2I                 M2J
    M3I                 M3J                 RELEASE

## $ WALL DESIGN PREFERENCES

    WALLPREFERENCE      CODE                THDESIGN            REBARMATERIAL       REBARSHEARMATERIAL  RHO
    SDS                 SDC                 OMEGA0              R                   CD                  DUCTILITY
    SPECIALSTRUCTURAL   SPECIALDUCTILECOUPLE  SPECIALPRECAST      INTERMEDIATEPRECAST  ORDINARY            CRITICALSECT
    IGNOREBENEFICIALPUINSPANDRELDESIGN  PHI-TCTRL           PHI-CCTRL           PHI-SHEAR           PHI-SHEARSEIS       PMAXFACTOR
    SPECIAL             INTERMEDIATE        PHI-B               PHI-VS              PHI-C               PHI-VNS
    MODERATE            LIMITED             NONDUCTILE          OVERSTRENGTH        DUCTILEFLEXURALWALL  DUCTILECOUPLEDWALL
    DUCTILEPARTIALLYCOUPLEDWALL  MODERATELYDUCTILEWALL  ORDINARYWALL        RDR014              SHEARMF14           PHIS14
    PHIC14              RDR0                SHEARMF             PHIS                PHIC                GAMMASBRITISH
    GAMMACBRITISH       GAMMAMBRITISH       GAMMASHONGKONG      GAMMACHONGKONG      GAMMAMHONGKONG      COUNTRY
    COMBOSFROM          EQ6.10              MAXEQ6.10A/6.10B    SECONDORDERMETHOD   NOMINAL_STIFFNESS   NOMINAL_CURVATURE
    CONSIDERMINECCENTRICITY  EUROTHETA004        DUCTILITYSF         EUROGAMMAS04        EUROGAMMAC04        EUROALPHACC04
    EUROALPHACT04       EUROALPHALCC04      EUROALPHALCT04      GAMMASINDIAN        GAMMACINDIAN        CONSIDERMINECCENTRICITYMAJOR
    CONSIDERMINECCENTRICITYMINOR  SYSTEMQ             PLASTIC             SYSTEMPHI           GAMMASSINGAPORE     GAMMACSINGAPORE
    GAMMAMSINGAPORE     RELATIVEHUMIDITY    MOISTURECONTENT     GAMMAB              GAMMABT             GAMMAB1SHORTTERM
    GAMMAB1LONGTERM     GAMMAB2             GAMMAB3BEAMS        GAMMAB3COLUMNS      GAMMAB4             GAMMAB5
    GAMMAS              GAMMAS1             LLDURATIONFACTOR    SLDURATIONFACTOR    GAMMASTURKISH       GAMMACTURKISH
    GAMMAMTURKISH       COUPLEDWALL         FLEXURALWALL        SEISMICGRADE        SUPERI              CLASSI
    CLASSII             CLASSIII            CLASSIV             GAMMA_0             DISTRIBUTEDREBARRHOW  DISTRIBUTEDBAR
    NUMCURVES           NUMPOINTS           PTMAX               PCMAX               IPMAX               IPMIN
    UFLIMIT

## $ PIER DESIGN OVERWRITES

    PIERDATA            DUCTILE FLEXURAL    DUCTILE COUPLED     PARTIALLY COUPLED   NOMINAL             DC HIGH
    DC MEDIUM           DC LOW              DUCTILE PLASTIC     LIMITED DUCTILE PLASTIC  SPECIALWALL         SIMPLIFIED
    UNIFORM ENDCOLUMN SYM  UNIFORM SYM

## $ SPANDREL DESIGN OVERWRITES

    SPANDRELDATA

## $ COMPOSITE DESIGN PREFERENCES

    COMPOSITEPREFERENCE

## $ COMPOSITE DESIGN OVERWRITES

    COMPOSITEDATA       SHORED              WITHAXIALFORCE      CPLATEPRESENT       CPLATEWIDTH         CPLATETHICK
    CPLATEFY            BOTTOMTEEPRESENT    BOTTOMTEE           RATIOLONGTERMLIVELOAD  CBC                 POINTBRACEC
    ABSLOCC             RELLOCC             UNIFBRACEC          ABSSTARTC           ABSENDC             RELSTARTC
    RELENDC             ABSL22C             RELL22C             ABSL33C             RELL33C             ABSL11C
    RELL11C             POINTBRACE          ABSLOC              RELLOC              UNIFBRACE           ABSSTART
    ABSEND              RELSTART            RELEND              ABSL22              RELL22              ABSL33
    RELL33              ABSL11              RELL11              COMPOSITE           NOWITHSTUDS         FORCECOMPOSITE
    DECKLEFT            BEFFLEFT            DECKDIRLEFT         PARALLEL            PERPENDICULAR       DECKRIGHT
    BEFFRIGHT           DECKDIRRIGHT        USERUNIFSTUDSPCG    USERNUMADDSTUDS     ABSSTARTADDSTUD     ABSENDADDSTUD
    RELSTARTADDSTUD     RELENDADDSTUD       SINGLESEGMENT       STUDINCREASEFACTOR  MINNUMEXTRASTUDS    MINLONGSPCG
    MAXLONGSPCG         MINTRANSPCG         MAXSTUDPERROW       STUDSTRENGTH        RELATIVEDEFLECTION  RELDL
    RELSL               RELLL               RELTL               ABSDL               ABSSL               ABSLL
    ABSTL               CAMBER              CREEPFACTOR         I33NCFACTOR         I33CFACTOR          FREESHRINKAGESTRAIN
    NEFFPROGCALC        BEAMSPCG            NEFFBEAMS           VIBRATIONCRITERION  WALKING             RHYTHMIC
    SENSITIVEEQUIPMENT  RUNNING             OCCUPANCYCATEGORY   PAPEROFFICE         ELECTRONICOFFICE    RESIDENTIAL
    CHURCH              ASSEMBLY            DINING              EXERCISEROOM        SHOPPINGMALL        INDOORFOOTBRIDGE
    OUTDOORFOOTBRIDGE   DAMPINGRATIO        BAYFREQUENCY        P0                  Q                   BJ
    BG                  WALKINGACCELERATIONLIMIT  ADDLDEADLOAD        ADDLLIVELOAD        ADDLCLATLOAD        FLOORLENGTH
    FLOORWIDTH          GIRDERSTEELPROPS YES  FREEEDGE YES        FREEEDGE NO         RHYTHMICACTIVITY    AEROBICS
    DANCING             LIVECONCERT         SPORTSEVENT         AFFECTEDOCCUPANCYCATEGORY  OFFICE              WEIGHTLIFTING
    RHYTHMICACCELERATIONLIMIT  UPPERSTEPFREQUENCY  LOWERSTEPFREQUENCY  EQUIPMENTORUSECATEGORY  COMPUTERSYSTEM      LABROBOTS
    CLASSA              CLASSB              CLASSC              CLASSD              CLASSE              VIBVELOCITYLIMIT
    VERYSLOW            SLOW                MODERATE            FAST                SENSITIVIBFSTEP     SENSVIBFL
    SENSVIBFU           SENSVIBGAMMA        SENSVIBPHI          MINDEPTH            MAXDEPTH            MINWIDTH
    MAXWIDTH            %MINPCC             %MAXPCC             LLRF                REACTIONFACTOR

## $ COMPOSITE COLUMN DESIGN PREFERENCES

    COMPOSITECOLUMNPREFERENCE  PHIVREINFCOMPOSITEAISC22  OMEGAVREINFCOMPOSITEAISC22  PHICSAS1619         PHIUCSAS1619        PHIRCSAS1619
    NUMINTERCURVES      NUMINTERPOINTS      SDGCOMPCOL

## $ COMPOSITE COLUMN DESIGN OVERWRITES

    NETAREARATIO        LMAJOR              LMINOR              LLTB                COMPOSITECOLUMNDATA  KMAJOR
    KMINOR              KMAJORBRACED        KMINORBRACED        KLTB                COMPOSITECOLUMNLDATA  CMMAJOR
    CMMINOR             B1MAJOR             B1MINOR             B2MAJOR             B2MINOR             REDUCEHSSTHICKNESS
    HSSWELDINGTYPE      RY                  PNC                 PNT                 FBMAJOR             FBMINOR
    FVMAJOR             FVMINOR             ELEMENTTYPE         SEISMICDESIGNGRADE  DUALSYSTEMSMF       MMFCOLTOP
    MMFCOLBOT           SMFCOL              AFMF                TRANSFERCOL         TRANSFER            TRANSFER-SUPPWALL
    COLLOCATION         INDVCOL             ENDCOLUMN           CORNERCOLUMN        SIDECOLUMN          CENTERCOLUMN

## $ CONCRETE SLAB DESIGN PREFERENCES

    CONCRETESLABPREFERENCE  PHITENACI           PHICOMPACI          PHISHEARACI         OVERWRITESHEARLAMBDAS  INCFLEXREBAR
    PHITENAS09          PHICOMPAS09         PHISHEARAS09        REBARCLASSAS09      Eq. 9.1.1a          Eq. 9.1.1b
    SLABASMINAS09       PHITENAS01          PHICOMPAS01         PHISHEARAS01        GAMMASTEELBS        GAMMACONCBS
    GAMMASHEARBS        GAMMA0              NEGMOMMODIFIER      MINNEGREBARRATIOLIMIT  MINPOSREBARRATIOLIMIT  PHISTEELCSA
    PHICONCCSA          ITALY               Eq 6.10             Max Eq6.10a/6.10b   RELCLASS            Class_1
    Class_2             Class_3             GAMMASHKCP2013      GAMMACHKCP2013      GAMMAMHKCP2013      GAMMASHKCP2004
    GAMMACHKCP2004      GAMMAMHKCP2004      PHIBENDINGMEX       PHISHEARMEX         NTC08COMBOSET       NTCGAMMAS08
    NTCGAMMAC08         NTCALPHACC08        NTCALPHACT08        NTCALPHALCC08       NTCALPHALCT08       PHIBENDING
    PHISHEAR            GAMMASTEELSG        GAMMACONCSG         GAMMASHEARSG        GAMMASTEELTS        GAMMACONCTS
    GAMMASHEARTS        IGNOREBENEFICIALPUINSLABDESIGN  PATTERNLLF          COVERTOP            COVERBOT            BARSIZE
    INNERLAYER          PTCGSTOP            PTCGSBOTEXT         PTCGSBOTINT         SLABTYPE            INITCONCRAT
    INITEXTTEN          INITEXTCOMP         FINEXTTEN           SUSEXTTEN           LLFRACTION          USERSTRESS
    INITTOPTEN          INITBOTTEN          INITEXCOMP          FINTOPTEN           FINBOTTEN           FINEXCOMP
    SUSEXCOMP

## $ CONCRETE SLAB DESIGN OVERWRITES - STRIP BASED

    SLABSTRIPDESIGNOVERWRITES  DESIGNTYPE          DESIGN              IGNOREPT            REBARMAT            COVERTYPE

## $ CONCRETE SLAB DESIGN OVERWRITES - FEM BASED

    REBARMAT            Preferences         User                DIR1TOPCOVER        DIR1BOTCOVER        DIR2TOPCOVER
    DIR2BOTCOVER        IGNOREPT            SLABFEMDESIGNOVERWRITES

## $ CONCRETE SLAB DESIGN PUNCHING OVERWRITES - GENERAL

    CHECK               LOCTYPE             User Perimeter      User Size           PERIMETER           USERXDIM
    USERYDIM            USERANGLE           EFFDEPTH            USERDEPTH           REINFTYPE           REINFPAT
    REINFFY             REINFDIA            REINFSPCG           PUNCHINGSHEAROVERWRITES

## $ CONCRETE SLAB DESIGN PUNCHING OVERWRITES - USER PERIMETER

    POINTNUM            X                   Y                   RADIUS              ISNULL              PUNCHINGSHEARPERIMETER

## $ CONCRETE SLAB DESIGN PUNCHING OVERWRITES - USER OPENINGS

    OPENNUM             SHAPE               XOFFSET             YOFFSET             WIDTH               HEIGHT
    ANGLE               PUNCHINGSHEAROPENINGS

## $ CONCRETE DESIGN PREFERENCES

    CONCRETEPREFERENCE  THDESIGN            DESIGNFORBCCR       IGNOREBENEFICIALPUINBEAMDESIGN  NUMINTERCURVES      NUMINTERPOINTS
    PHICOMP(T)          PHICOMP(S)          PHITENSIONCTRL      PHICOMPRESSIONCTRLTIED  PHICOMPRESSIONCTRLSPIRAL  PHISHEARTORSION
    PHISHEARSEISMIC     PHISHEARJOINT       CONSIDERICC_ESR2017  FRAMETYPE SWAYSPECIAL  FRAMETYPE SWAYINTERMEDIATE  FRAMETYPE SWAYORDINARY
    FRAMETYPE NONSWAY   FRAMETYPE DUCTILE   FRAMETYPE MODERATE  FRAMETYPE CONVENTIONAL  SC                  SC0
    SC1                 SC2                 SC3                 SC4                 R0                  PHISTEEL24
    PHICONCRETE24       PHISTEEL19          PHICONCRETE19       PHISTEEL14          PHICONCRETE14       PHISTEEL04
    PHICONCRETE04       PHISTEEL            PHICONCRETE         EURONU              EUROGAMMAS          EUROGAMMAC
    EUROGAMMACE04       REBARSIZELONGTOP    REBARSIZELONGBOT    ISRIBBEDLONGREBAR   CONSIDERMADDITIONAL  PDELTADONE
    PHITENSIONMEX       PHICOMPRESSIONTIEDMEX  PHICOMPRESSIONSPIRALMEX  PHIBENDINGNZS       PHITENSIONNZS       PHICOMPRESSIONNZS
    PHISHEARNZS         OMEGANZS            PHI0NZS             RMNZS               RVNZS               CONSIDERTORSION
    TANTHETA            CORNERREBARFRACTIONTOP  CORNERREBARFRACTIONBOT  RELIABILITYFACTOR   MTRFLEXURAL         MTRSHEAR
    SITESEISMICITY      SITESEISMICITY9     SITESEISMICITY8     SITESEISMICITY7     CONSIDERCRACKANALYSIS  ACRACKWIDTHLIMITFULL
    ACRACKWIDTHLIMITLONG  ZONE                FIELDTYPE           BEAMGRAVITYNEGMOMENTREDFACTOR

## $ CONCRETE DESIGN OVERWRITES

    NONSWAY             DUCTILE             SWAY                BRACED              ELASTIC             HIGH
    SEISMICSUPERI       SEISMICCLASSI       SEISMICCLASSII      SEISMICCLASSIII     SEISMICCLASSIV      CONCRETEDATA
    INDIVIDUALCOLUMN    XC1                 XC2                 XC3                 XC4                 XD1
    XD2                 XS1                 XS2                 XS3                 CLASS_R             CLASS_N
    CLASS_S             SHORT_TERM          LONG_TERM

## $ WALL PIER ACCEPTANCE CRITERIA

    WALLPIERACCEPTANCE  Stress as Ratio     psi                 MPa                 UNITS               INCLUDESHEARV2
    IOV2                LSV2                CPV2                INCLUDESHEARV3      IOV3                LSV3
    CPV3                DEPENDSONAXIAL      TENSIONSHEARFACTOR  TENSIONAXIALFORCE   COMPRESSIONSHEARFACTOR  COMPRESSIONAXIALFORCE

## $ WALL SPANDREL ACCEPTANCE CRITERIA

    WALLSPANDRELACCEPTANCE

## $ SECTION DESIGNER SECTIONS

    SDSECTION           CONCRETE            COMPOSITECOLUMN     PIER                NUMSHAPES           MATERIAL
    REBARMATERIAL       SECTION             SHAPETYPE           TF                  TW                  FILLETRAD
    TFB                 MIRROR2             MIRROR3             Arc                 SA                  ROTN
    Polygon             NUMCORNERPTS        POLYCORNER          RAD                 Conc Tee            Conc L
    Conc Box            Conc Pipe           Conc Cross          Wall Straight       Wall Flanged        FLANGELENGTHLEFT
    FLANGEWIDTHLEFT     FLANGEECCENLEFT     FLANGELENGTHRIGHT   FLANGEWIDTHRIGHT    FLANGEECCENRIGHT    Wall Curved
    Sector              BARAREA             BARSIZE             Line Rebar          SPACING             ENDBAR
    Y1                  X2                  Y2                  Rect Rebar          Circular Rebar      Circular Arc Rebar
    Ref Point           Ref Line            Ref Circle          XC                  YC                  ROT
    LEFTFLANGEEDGE      EDGEBARAREA         EDGEBARSIZE         EDGEBARSPACING      EDGEBARNUMBER       EDGEBARCOVER
    LEFTFLANGECORNER    CORNERBARAREA       CORNERBARSIZE       LEFTFLANGETIEBARAREA  LEFTFLANGETIEBARSIZE  RIGHTFLANGEEDGE
    RIGHTFLANGECORNER   RIGHTFLANGETIEBARAREA  RIGHTFLANGETIEBARSIZE  STEMEDGE            STEMCORNER          STEMTIEBARAREA
    STEMTIEBARSIZE      EDGE                CORNER              WEBEDGE             WEBCORNER           WEBTIEBARAREA
    WEBTIEBARSIZE       FLANGEEDGE          FLANGECORNER        FLANGETIEBARAREA    FLANGETIEBARSIZE    PIPEEDGE
    NBARS               STARTANGLE          OUTERTIEBARAREA     OUTERTIEBARSIZE     INNERTIEBARAREA     INNERTIEBARSIZE
    TIEBARAREA          TIEBARSIZE          LEFTWEBEDGE         LEFTWEBCORNER       LEFTWEBTIEBARAREA   LEFTWEBTIEBARSIZE
    RIGHTWEBEDGE        RIGHTWEBCORNER      RIGHTWEBTIEBARAREA  RIGHTWEBTIEBARSIZE  TOPFLANGEEDGE       TOPFLANGECORNER
    TOPFLANGETIEBARAREA  TOPFLANGETIEBARSIZE  BOTFLANGEEDGE       BOTFLANGECORNER     BOTFLANGETIEBARAREA  BOTFLANGETIEBARSIZE

## $ POINT ASSIGNS

    RESTRAINT           UZ                  RX                  RY                  SPRINGPROP          DIAPH
    FROMSHELLOBJECT     DISCONNECTED        PANELZONE           MASSUXUY            MASSUZ              MASSRX
    MASSRY              MASSRZ              INCLUDEINANALYSISMESH  USERJOINT           POINTASSIGN

## $ LINE CURVE DATA

    LINECURVEDATA       TENSION

## $ LINE ASSIGNS

    LINEASSIGN          COMPOSITE           JOIST               NODESIGN            DESIGN              LENGTHOFFI
    LENGTHOFFJ          RIGIDZONE           Full Length         Clear Length        SELFWEIGHTOPTION    CARDINALPT
    TRANSFORMSTIFF      ANG                 MAXSTASPC           MINNUMSTA           LIMITTENSION        LIMITCOMPRESSION
    PIER                SPANDREL            AUTOMESH            MESHATJOINTS        MESHATINTERSECTIONS  MESHMINSEGMENTS
    MINMESHSEGMENTS     MESHMAXSEGMENTLENGTH  MAXMESHSEGMENTLENGTH  FLOORMESH           From Story          At Height
    COLSPLICEOVERWRITE  COLSPLICEHEIGHT     NPCLEARLENGTH       NPSTARTRD           MATERIALOVERWRITE   REBARRATIOUSER
    OFFSETSYS LOCAL     SIDEPLATE           SPECMOMENTBEAM      PROGCALC            USERFACTORS         USERLENGTHS
    RBSTYPE             X1FACTOR            X2FACTOR            X3FACTOR            RBSA                RBSB
    RBSC                NUMBEROPENINGS      OPENINGNUM          RLOC                ECCENTRICITY        ISCIRCULAR
    LENGTH              ISREINFORCED        REINFWIDTH          REINFTHICKNESS      CONSIDERFLOORCRACKING

## $ AREA CURVE DATA

    EDGENUM             AREACURVEDATA

## $ AREA ASSIGNS

    OPENING             DIAPH               PIER                SPANDREL            OBJMESHTYPE         DIAPHRAGMONLY
    NOAUTOMESH          MESHN1XN2           MESHFLOORN1         MESHFLOORN2         AUTOMESH            MESHAT
    BEAMS               WALLS               MAXMESHSIZE         ADDRESTRAINT        MESHVERT            MESHHORIZ
    LINECONSTRAINT      TOP                 BOTTOM              MIDDLE              CARDINALPOINT       TRANSFORMSTIFFNESSFOROFFSETS
    AREAASSIGN          AREATHICKNESSOVERWRITE  AREAJOINTOFFSETCSYS  AREAJOINTOFFSETDATA  INPLANE             AREAEDGERELEASE
    DIRECT              OUTOFPLANE          TWISTING            WALLHINGEREINFTYPE  CURRENTDESIGN       UNIFORMREBARPERCENT
    VERTREBARRATIO      HORZREBARRATIO      REBARMATFLEXURE     REBARMATSHEAR       SPECIFIEDREBARLAYOUT  WALLDESIGNTYPE
    AREAWALLHINGEREINF  CLEARCOVER          STARTZONESIZE       ENDZONESIZE         FLEXSBARSIZE        FLEXSNUMBARS
    FLEXCBARSIZE        FLEXCSPACING        FLEXEBARSIZE        FLEXENUMBARS        FLEXTOPBARSIZE      FLEXTOPNUMBARS
    FLEXTOPCOVERCENTROID  FLEXBOTBARSIZE      FLEXBOTNUMBARS      FLEXBOTCOVERCENTROID  SHEARSBARSIZE       SHEARSSPACING
    SHEARSCONFINED      SHEARCBARSIZE       SHEARCSPACING       SHEARCCONFINED      SHEAREBARSIZE       SHEARESPACING
    SHEARECONFINED      SHEARBARSIZESPAND   SHEARSPACINGSPAND   ADDREBARMAT         ADDREBARDIST        ADDREBARAREA
    NUMPOINTS           NUMQUADS            AREAUSERMESH        QUAD

## $ TENDON ASSIGNS

    TENDONASSIGN        NUMSTRANDS          BONDED

## $ LINK ASSIGNS

    LINKASSIGN

## $ POINT OBJECT LOADS

    POINTLOAD           LC                  FX                  FZ                  MX                  MY
    MZ                  GROUNDDISP          UY                  UZ                  RX                  RZ
    TEMP

## $ LOAD PATTERNS

    LOADPATTERN         NOTIONALLOAD        NOTIONALFACTOR      NOTIONALDIR         SEISMIC             X+ECC
    Y+ECC               X-ECC               Y-ECC               DIR                 ECC                 TOPSTORY
    BOTTOMSTORY         METHODA             CT                  SOIL                Ca                  Cv
    SOURCETYPE          SOURCEDIST          Na                  Nv                  TYPE                MOMFRAME
    DS                  PERIODTYPE          CODE                USERT               Za                  Zv
    USERZVR             F                   APPROXIMATE         STRUCTURETYPE       CMF                 SW
    Rd                  Ro                  IE                  Mv                  SITECLASS           PGA
    S02                 S05                 S1                  S2                  Fa                  Fv
    S4                  S5                  S10                 F02                 F05                 F5
    F10                 SEISMICGROUP        Ss                  LONG                LAT                 ZIPCODE
    OMEGA               TL                  METHODTYPE          RSFUNC              Sds                 Sd1
    USERT1              ALPHAMAX            SI                  TG                  PTDF                ENHANCEFAC
    Z                   S                   AG                  SPECTRUMTYPE        GROUNDTYPE          TB
    TC                  TD                  BETA                LAMBDA              SD                  KT
    KP                  SP                  MU                  CONSIDERSP          TSITE               CONSSSTORY
    OPTION   LONG       OPTION   LAT        OPTION   ISLAND   NAME  OPTION   USER       F0                  TCS
    LIMITSTATE          USAGECLASS          NOMINALLIFE         SPECTYPE            EH                  EV
    DH                  DV                  SOILTYPE            TOPOGRAPHY          HOVERHRATIO         XI
    Ct                  SEISMICZONE         AO                  SOILDEPTH           GE20M               LT20M
    SWAVE               SHEARCOEFF          HEIGHTEXPONENT      ECCOVERWRITE        NONDIAPHPTS         USERLOAD
    SET                 MZ                  XLOC                YLOC                WIND                DIAPHRAGMS
    FRAMES              AREASANDFRAMES      EXPOSUREFROM        BLDGWIDTH           SHAPECOEFUS         USERCP
    WINDWARDCPX         LEEWARDCPX          WINDWARDCPY         LEEWARDCPY          WINDWARDCP          LEEWARDCP
    PARAPETHEIGHT       VE                  CA                  CR                  VELOCITYPRESSURE    GUSTFACTOR
    IW                  TERRAINTYPE         OPEN                ROUGH               CEW                 CEL
    CG                  OPEN(DYNAMIC)       ROUGH(DYNAMIC)      CASE                CASE ALL            E1
    SPEED               EXPOSURE            KZT                 KD                  SGRATIO             KE
    VELOCITY            BLDGDEPTH           CONSIDERACROSSWIND  RATIOB              LATERALPERIOD       CONSIDERTORSIONWIND
    TORSIONPERIOD       BASICPRES           GRNDROUGH           PHIZOPT             MODAL ANALYSIS      Z/H RATIO
    T1OPT               IGNOREVIBRATION     VB                  TERRAIN             CLASS               K1
    K3                  TOP                 DYN                 ORO                 K11                 CSCD
    VR                  MD                  MS                  MT                  CDYN                KA
    KC                  KL                  CYCLONE YES         MC                  WPRESSURE           ZETA
    V                   Gf                  V0                  REVERSIBLE          WINDEXPOSURE        ANGLE
    WIDTH

## $ LOAD CASES

    LOADCASE            INITCOND            PRESET              HYPERSTATICCASE     HYPERSTATICSUPPORT  HYPERSTATICSF
    HYPERSTATICRESTRAINTS  HYPERSTATICJOINT1   HYPERSTATICJOINT2   HYPERSTATICJOINT3   MODALCASE           MASSSOURCE
    Previous            EXCLUDEGROUP        NOTES               LOADPAT             SF                  ACCEL
    MODE                FUNC                TIMEFACT            ARRIVALTIME         LINK                TARGETPAR
    STATICCORR          MAXCYC              PHASEANGLE          PDelta              LargeDispl          NLGEOMTYPE
    Full                Quasistatic         LOADCONTROL         Conjugate           Monitored           DISPLTYPE
    MONITOREDDISPL      DISPLMAG            FNA                 Direct Integration  QUASISTATICTHTYPE   OUTPUTSTEPSIZE
    DOF                 GENDISPL            ADDITIONALDOFANDJOINT  ADDITIONALGENDISPL  MODALDAMPTYPE       ProportionalDirect
    MASSCOEFF           TIMEINTTYPE         HilberHughesTaylor  ALPHA               Final               RESULTSSAVED
    MINSAVED            MAXSAVED            POSITIVEONLY        Iterative Events    Events Only         SOLUTIONSCHEME
    MAXTOTALSTEPS       MAXNULLSTEPS        EVENTLUMPTOL        MAXEVENTSPERSTEP    MAXITERCS           MAXITERNR
    ITERCONVTOL         USELINESEARCH       MAXLINESEARCH       LINESEARCHTOL       LINESEARCHSTEPFACT  STOPANALYSISWHENEXCEEDMAXEVENTS
    MINEVENTSTEPSIZE    MAXNULLEVENTSPERSTEP  All Steps           USECORRECTIONSTEP   TIMEDEPMATPROP      STAGE
    DURATION            PROVIDEOUTPUT       USERCOMMENT         Load Objects If Added  Load Objects        Change Sections
    Change Sections And Age  OPERATION           OBJECTTYPE          OBJECTNAME          AGE                 LOADTYPE
    LOADNAME            SECTIONTYPE         SECTIONNAME         NAMEDMOD            FinalStageEnd       EachStageEnd
    StartAndEndEachStage  TwoOrMoreTimesEachStage  RESULTSSAVEDSTAGED  MINSTEPSINSTANTANEOUS  MAXSTEPSTIMEDEPENDENT  DoubleSum
    MODECOMBO           INCLUDERIGIDRESPONSE  F1                  F2                  RIGIDTYPE           TD
    DIRCOMBO            DIRSF               ECCENRATIOTYPICAL   ECCENOVERWRITE      ECCENSTORY          ECCENDIAPH
    MOTIONTYPE          NUMBEROUTPUTSTEPS   STATICPERIOD        MAXSUBSTEPSIZE      MINSUBSTEPSIZE      FORCECONVTOL
    ENERGYCONVTOL       MAXFORCEITERS       MINFORCEITERS       CONVFACT            FIRSTFREQ           LASTFREQ
    NUMFREQINCREMENTS   NUMBUCKLINGMODES    EIGENTOL            MAXMODES            MINMODES            EIGENSHIFTFREQ
    EIGENCUTOFF         ALLOWAUTOFREQSHIFT  FLOORCRACKTYPE      Short Term          FLOORCRACKLTUSER    FLOORCRACKLTCREEP
    FLOORCRACKLTSHRINK  FLOORCRACKAGEATLOAD  FLOORCRACKLTAGE     CONVCHECKTYPE       Max Abs Vert Disp   SRSS of Vert Disp
    FLOORCRACKRELDISPLTOL  FLOORCRACKMAXITER   ADDMODALFREQUENCIES  ADDDEVIATIONSFROMMODALFREQUENCIES  ADDSPECIFIEDFREQUENCIES  SIGNEDDEVIATION
    SPECIFIEDFREQ       HYSTERETICDAMPTYPE  STIFFCOEFF          InterpolatedFrequency  FREQUNITS           INTFREQUENCY
    INTMASSCOEFF        INTSTIFFCOEFF       ProportionalPeriod  T1                  DAMP1               T2
    DAMP2               SPECIFYBYRATIO      MODEFORRATIO        ProportionalFrequency  CONSTDAMP           InterpolatedPeriod
    INTERPOLATEDPERIOD  INTERPOLATEDDAMPING  INTERPOLATEDFREQUENCY  CONSIDERMAXMODALFREQ  MAXCONSIDEREDMODALFREQ  MODALOVERRIDEMODE
    MODALOVERRIDEDAMPING  PRODAMPTYPE         Direct              GAMMA               BETA                THETA
    ChungHulbert        ALPHAM

## $ AUTO CONSTRUCTION SEQUENCE CASE

    AUTOCONSTRUCTIONCASE  NAME                NUMBERSTORIES       EXCLUDEDGROUP       USEINDESIGNCOMBOS

## $ WALKING VIBRATIONS

    WALKINGVIBRATION    RITZMODESPERSTEP    USERMODALCASE       MODALDAMPING        PERSONWEIGHT        PEAKLOADFACTOR
    WALKINGFREQUENCY    FORWARDSPEED        DURATIONOFIMPACT    Office              PEAKACCELTHRESHHOLDOPTION  PEAKACCELTHRESHHOLD
    WALKINGVIBRATIONPOINT

## $ FLOOR VIBRATION EXCITATION SET

    FLOORVIBRATIONEXCITATIONSET  EXCITATIONPOINT     RESPONSEPOINT       MODALCASE           STEADYSTATEFUNC     HYSTERETICDAMPINGSTIFFNESSCOEF
    LASTFREQUENCY

## $ FRAME HINGE PROPERTIES

    HINGE               BEHAVIOR            Force-Displacement  Moment-Rotation     Moment-Curvature    HINGERELLENGTH
    HINGELENGTH         BEYONDPOINTE        SYMMETRIC           BCPOINTSEXPOSED     CDPOINTSEXPOSED     -CD
    -BC                 FORCESFP            DISPSFP             STRESSSFP           STRAINSFP           MOMENTSFP
    ROTATIONSFP         CURVATURESFP        FORCESFN            DISPSFN             STRESSSFN           STRAINSFN
    MOMENTSFN           ROTATIONSFN         CURVATURESFN        IO                  LS                  CP
    -IO                 -LS                 -CP                 FCPROPORTIONP       FCPROPORTIONN       FCFORCEP
    FCFORCEN            FCLOSESCAPACITY     M2M3                PM2M3               ASCE4113            ACI
    MATERIAL            ASCE4117            INTSURFACE          PCURVE              PFORM2M3            ROTATIONSF
    CURVATURESF         Doubly Symmetric    SYMMETRYCONDITION   FORCES              ANGLES              ACCEPTANCE
    CAPACITYFACTOR      NCURVES             NPOINTS             INTSYMMETRIC        INTSYMMETRYCONDITION  INTPSCALE
    INTM2SCALE          INTM3SCALE          INTPOINT            P                   M2                  M3
    FiberPM2M3          FiberPM3            FROMSECTION         FIBERDATA           COORD3              COORD2
    SSCURVE             Parametric Concrete PM2M3  USEYIELDFORCEASSF   FORCESFTENSION      FORCESFCOMPRESSION  FORCESFBENDING2
    FORCESFBENDING3     DEFORMSFTENSION     DEFORMSFCOMPRESSION  DEFORMSFBENDING2    DEFORMSFBENDING3    YIELDSURFALPHATENSION2
    YIELDSURFALPHACOMPRESSION2  YIELDSURFALPHATENSION3  YIELDSURFALPHACOMPRESSION3  YIELDSURFBETA       YIELDSURFGAMMA      CURVESHAPE
    ISSTRENGTHLOSS      FORCEDOVERBAXIAL    FORCEDOVERBBENDING  AXIALFORCEBALANCEDOVERCOMPSF  DEFORMCBENDING2     DEFORMCBENDING3
    DEFORMETENSION      DEFORMECOMPRESSION  DEFORMEBENDING2     DEFORMEBENDING3     DEFORMDOVERCBENDING  FORCEUOVERB
    DEFORMUTENSION      DEFORMUCOMPRESSION  DEFORMUBENDING2     DEFORMUBENDING3     BUCDE Points        User Points
    CYCLICDEGRADATIONTYPE  CYCDEGPOINT1BENDING2DEFORM  CYCDEGPOINT2BENDING2DEFORM  CYCDEGPOINT3BENDING2DEFORM  CYCDEGPOINT1BENDING3DEFORM  CYCDEGPOINT2BENDING3DEFORM
    CYCDEGPOINT3BENDING3DEFORM  CYCDEGPOINTBENERGY  CYCDEGPOINTUOR1ENERGY  CYCDEGPOINTCOR2ENERGY  CYCDEGPOINTDOR3ENERGY  CYCDEGPOINTEENERGY
    DEFORMATIONCAPACITYTYPE  DEFCAPBENDING3LEVELIO  DEFCAPBENDING3LEVELLS  DEFCAPBENDING3LEVELCP  DEFCAPBENDING2OVERBENDING3  DEFCAPPU
    DEFCAPPL            DEFCAPVU            DEFCAPVL            DEFCAPBENDING3PUVULEVELIO  DEFCAPBENDING3PUVLLEVELIO  DEFCAPBENDING3PLVULEVELIO
    DEFCAPBENDING3PLVLLEVELIO  DEFCAPBENDING3PUVULEVELLS  DEFCAPBENDING3PUVLLEVELLS  DEFCAPBENDING3PLVULEVELLS  DEFCAPBENDING3PLVLLEVELLS  DEFCAPBENDING3PUVULEVELCP
    DEFCAPBENDING3PUVLLEVELCP  DEFCAPBENDING3PLVULEVELCP  DEFCAPBENDING3PLVLLEVELCP  Parametric Steel PM2M3  USEYIELDDEFORMATIONASSF  STRENGTHLOSSTYPE
    PUOVERCOMPSF        PLOVERCOMPSF        FORCEATPUDOVERBAXIAL  FORCEATPUDOVERBBENDING  FORCEATPLDOVERBAXIAL  FORCEATPLDOVERBBENDING
    DEFORMATPUCBENDING2  DEFORMATPUCBENDING3  DEFORMATPLCBENDING2  DEFORMATPLCBENDING3  DEFORMATPUDOVERCBENDING  DEFORMATPLDOVERCBENDING
    DEFCAPBENDING3PULEVELIO  DEFCAPBENDING3PLLEVELIO  DEFCAPBENDING3PULEVELLS  DEFCAPBENDING3PLLEVELLS  DEFCAPBENDING3PULEVELCP  DEFCAPBENDING3PLLEVELCP

## $ FRAME HINGE ASSIGNMENTS

    HINGEASSIGN         HINGEDISTRTYPE      Nonlinear Beam Column  HINGELENTYPE        Rel                 HINGELENREL
    Abs                 HINGELENABS         INTEGRTYPE          SPACETYPE           MAXSPACE            NUMHINGESPACE
    HINGEATENDS         Continuous Spring Support  HINGEPROP           AUTOHINGETYPE       ASCE41-13           EC8 2005
    TABLEITEM           Concrete Columns    Steel Beams         Steel Columns       Steel Braces        Concrete Shear Wall - Flexural
    Concrete Shear Wall - Shear  CONFORMINGREINF     REINFRATIO          CASECOMBO           V2VALUE             ParametricPM2M3
    ii                  iii                 iv                  FAILCONDITION       SHEARREINFRATIO     PVALUE
    V3VALUE             WALLPM3OPTION       Interaction Surface  WALLACCEPTANCE      Fiber Strain        WALLBOUNDARYELEMENTS
    WALLPRATIO          WALLSHEARRATIO      ASCE41-17           Concrete Coupling Beams - Flexural  Concrete Coupling Beams - Shear  STRLIMRATIO
    Not Controlled      Controlled          COLUMNBEHAVIOR      CASECOMBOGRAVPLUSLAT  PVALUEGRAVPLUSLAT   VYEVALUE2
    VYEVALUE3           VYERATIO2           VYERATIO3           SHEARREINFSPACINGRATIO  DIAGREINF           ASCE41-23
    INADEQDEVELOPMENT   INADEQEMBEDMENT     SHEARDEMAND         VMCYDE2             VMCYDE3             VRATIO2
    VRATIO3             ISMOMENTFRAME       WALLCZONERATIO      OVERLAPPINGHOOPS    ISWALLCONFORMING    WALLASHRATIO
    WALLREBARSPACE      WALLDEMANDRATIO     V2OVERM3VALUE       BRB                 RelDist             IEndOffset
    JEndOffset          LOCATIONTYPE        RDISTANCE           DISTANCE            RelLen              AbsLen
    LENGTHOWTYPE        LENGTHOWREL         LENGTHOWABS         SAVEINDIVFIBER

## $ FRAME HINGE OVERWRITES

    HINGEOVERWRITE      AUTOSUBDIVIDE       AUTOSUBDIVIDERELLENGTH  DONOTDROPLOAD       LIMITINGNEGSTIFFRATIO

## $ AREA HINGE ASSIGNMENTS

    HINGEGENWALLASSIGN  HINGEALIGN          HINGEVERTAUTO       HINGEVERT           HINGEHORIZAUTO      HINGEHORIZ
    LOCAL               HINGES11AUTO        HINGES11            HINGES22AUTO        HINGES22            ROTANGLE
    SHEARMAT            HINGEAREAASSIGN

## $ TENDON OBJECT LOADS

    TENDONLOAD          TRANSFERLOADPAT     FINALLOADPAT        JACKLOC             JACKSTRESS          Losses
    LOSSTYPE            LOSSPERCENTST       LOSSPERCENTLT       LOSSFIXEDST         LOSSFIXEDLT         CURVCOEFF
    WOBBLECOEFF         ANCHORSLIP          ELASTICSHORT        CREEPSTRESS         SHRINKSTRESS        STEELRELAX

## $ FRAME OBJECT LOADS

    LINELOAD            POINTF              FVAL                RDIST               POINTM              MVAL
    UNIFF               UNIFM               TRAPF               FSTART              FEND                RDSTART
    RDEND               TRAPM               MSTART              MEND                TEMPGRAD2           TEMPGRAD3
    ADDJOINT            TTOP                TBOT                OPENSTRUCTWIND      ELMLOADEDBYWIND     ICETHICKNESS
    CF

## $ SHELL OBJECT LOADS

    AREALOAD            NONUNIF             Zero Negative       Zero Positive       RESTRICTION         WINDPRESS
    WINDWARD            UNIFLOADSET

## $ SHELL UNIFORM LOAD SETS

    SHELLUNIFORMLOADSET  LOADPAT             VALUE               HEADERLINES         DATATYPE            F&V
    T&V                 CA                  CV                  ZA                  ZV                  IBC2003
    SDS                 SD1                 AG                  SOILCLASS           SOILCATEGORY        CHINESE2010
    SI                  DAMPRATIO           TG                  PTDF                ITALIAN3274         STRUCTUREFACTOR
    SPECLEVEL           SLU                 DIRECTION           BUILDING            BRIDGE              ISI1893
    INZ                 IBC2006             OPTION              LAT/LONG            ZIPCODE             LONG
    SS                  FA                  FV                  SITECLASS           SPECTRUMTYPE        ACCRATIO
    S                   TB                  TC                  Q                   SD                  ASCE710
    NTC2008             ISLAND              SPECTTYPE           q                   A0                  ARGENTINA INPRES-CIRSOC 103
    ZONE0               ZONE1               ZONE2               ZONE3               ZONE4               CATEGORY
    CHILE NORMA NCH433+DS61  CHILE NORMA NCH2369-2003  COLOMBIA NSR-10     AA                  AV                  AE
    AD                  GROUPUSE            GROUP1              GROUP2              GROUP3              GROUP4
    ECUADOR NEC-11 CAPITULO 2  ETA                 FD                  FS                  GUATEMALA AGIES NSE 2-10  I0
    SCR                 S1R                 SSOURCE             DISTANCE            2KM                 5KM
    10KM                15KM                EQTYPE              MINIMUM             SEVERE              EXTREME
    MEXICO NTC-2004     IIIA                IIIB                IIIC                IIID                GROUP
    BEHAVIOR            PERU NORMA E.030    CONFIG              REGULAR             IRREGULAR           DOMINICAN REPUBLIC R-001
    LOCATION            CLASSIF             VENEZUELA COVENIN 1756-2:2001  ZONE5               ZONE6               ZONE7
    SPECFORM            CFACTOR             USECLASS            KOREAN KBC 2009     MEXICO CFE-93       BEHAVIORF
    PERU NTE E.030 2014  IA                  IP                  MEXICO CFE-2008     ECUADOR NORMA NEC-SE-DS 2015  COSTA RICA SEISMIC CODE 2010
    OCCUPANCY           GROUPA              GROUPB              GROUPC              GROUPD              GROUPE
    OSFACTOR            HORIZONTAL          VERTICAL            SEISMICITY          SOILCAT             K0FACTOR
    K1FACTOR            KPSIFACTOR          NONLINSOIL          ASOIL               ASCE716             KOREAN KBC 2016
    KOREAN KDS 41 17 00:2019  ASCE722             SMS                 SM1                 SNIP KR 20-02:2018  AGV
    HISTORY             EQUAL               DT                  PREFIXCHAR          POINTSPERLINE       FORMAT
    FREE                FIXED               NUMBERCHAR          HISTTYPE            SINE                STEPS
    NCYC                COSINE              RAMP                RAMPTIME            MAXTIME             SAWTOOTH
    TRIANGULAR          USERPERIODIC        MATCHEDTORS         METHOD              FREQUENCY           TIME
    TARGETRS            PROGRAM DEFAULT     TARGETRSUNITS       REFTH               REFTHUNITS          FREQRANGEOPT
    PROGRAM DETERMINED  USER DEFINED        F1                  NUMRECURSIONS       RECURSIONFACTOR     POWERSPECDENSITY
    FREQUNIT            HZ                  PSDTYPE             STEADYSTATE

## $ GROUPS

    LINE                LINK                TENDON              STRIP               LINESTRAINGAUGE     QUADSTRAINGAUGE
    STEELDESIGN         CONCRETEDESIGN      COMPOSITEDESIGN     WALLDESIGN

## $ SECTION CUTS

    SECTIONCUT          Quads               DEFINEDBY           GROUP               Spandrel Design     CUTFOR
    ROTABOUTZ           ROTABOUTYY          ROTABOUTXXX         DESIGNANGLE         Positive 3 Axis     Negative 3 Axis
    CUTSIDE             QUADPOINT           QUADX               QUADY               QUADZ               PARFIX
    J                   OFFSET              GRAV                XPROJ               YPROJ               GRAVPROJ

## $ LOAD COMBINATIONS

    COMBO               Joist               Connection          LOADCASE            MODENUMBER          LOADCOMBO
    COMBOTYPE

## $ ANALYSIS OPTIONS

    ACTIVEDOF           MODELHINGESINLINKS  KO                  KT                  HINGEDAMPINGOPTION  HINGEDAMPINGFO
    PDELTA  METHOD      NONITERATIVE        ITERATIVE           TOL                 PDELTA  LOAD        FACTOR
    AUTOMESHOPTIONS     RECTANGULAR         MESHTYPE            LOCALIZEDFLOORMESHING  FLOORMESHMERGEJOINTS  FLOORMESHMAXSIZE
    WALLMESHMAXSIZE

## $ MASS SOURCE

    MASSSOURCE          INCLUDEELEMENTS     INCLUDEADDEDMASS    INCLUDELOADS        INCLUDEMOVE         MOVERATIOX
    MOVERATIOY          INCLUDELATERALMASS  INCLUDEVERTICALMASS  LUMPATSTORIES       ISDEFAULT           MASSSOURCELOAD

## $ ANALYSIS MODEL INFORMATION

    ANALYSISMODELINFO   All Minus Selected Groups  Selected Groups Only  STRUCTUREOPTION     EXCLUDEHINGES       EXCLUDELINKNONLINEARITIES
    REPLACESECONDARYBEAMS  MODELCONCRETEFLOORSASMEMBRANES  REPLACEFLATSLABBENDINGSTIFFNESS  ISACTIVEANALYSISMODEL  GUID

## $ DIMENSION LINES

    DIMLINE             DEFAULTSYSTEM       GX1                 GY1                 GX2                 GY2
    PX1                 PY1                 PX2                 PY2

## $ DEVELOPED ELEVATIONS

    ELEVATION           PTCOORDS            CLIENTNAME          PROJECTNAME         PROJECTNUMBER       COMPANYNAME
    COMPANYLOGO         ENGINEER            CHECKER             SUPERVISOR          MODELNAME           MODELDESCRIPTION
    REVISIONNUMBER      ISSUENUMBER         SITEORIGIN          SITEROTATION        PROJECTINFO

## $ PROJECT INFORMATION


## $ LOG

    STARTCOMMENTS       ENDCOMMENTS

## $ PIER/SPANDREL NAMES

    PIERNAME            SPANDRELNAME        MULTISTORY

## $ PIER SECTIONS

    PIERSECTION         BASEMATERIAL

## $ PERFORMANCE CHECKS NEW

    PERFORMANCECHECKNEW  Mean                DEMANDCOMBOMETHOD   STDDEV              INCLUDEFRAMEHINGES  INCLUDEWALLHINGES
    INCLUDESTRAINGAUGES  INCLUDEPIERSPANDRELFORCES  PERFORMANCECHECKNEWDEMANDSET  PERFORMANCECHECKNEWDEMANDSETLOAD  DS                  USERT
    CTTYPE              PHI-BCNE            PHI-BCNP            PHI-BCPP            PHI-V               PHI-T
    PHI-CONC            PHI-STEEL           PHI-REBAR           PHI-CONN            RELCLAS             GAMMAM005
    GAMMAM105           GAMMAV05            GAMMAC04            %MIDDLERANGE        SRLIMIT             RATIOLONGTERMLIVELOAD
    MIN%COMPOSITE       MAX%COMPOSITE       MINLONGSPACING      MAXLONGSPACING      MINTRANSSPACING     MAXSTUDSPERROW
    STUDPOSITION        WEAK                STRONG              CSASTUDPOSITION     OFFCENTRE           STUDSWELDEDTHROUGHDECK
    DLLIMIT             SLLIMIT             LLLIMIT             TLLIMIT             CALCULATECAMBER     %DLCAMBER
    MINDEPTHFORCAMBER   MINWEBTHICKFORCAMBER  MINSPANFORCAMBER    CAMBERIGNORE        CAMBERELMIN         CAMBERABSMAX
    CAMBERRELMAX        CAMBERINTERVAL      CAMBERROUNDDOWN     %VIBLL              CONSIDERFREQ        MINFREQ
    CONSIDERDAMP        %INHERENTDAMP       P0                  Q                   NUMBERFREQUENCIES   WALKINGSPEED
    VERYSLOW            SLOW                FAST                SENSVIBGAMMA        OPTIMIZEPRICE       STEELPRICE
    CONNECTORPRICE      CAMBERPRICE

## $ NAMED PUSHOVER PLOTS

    PUSHOVERPLOT        VD                  FEMA 440 EL         ASCE 41-13 NSP      PLOTTYPE            LOADCASE
    Integrated          Stand Alone         LEGENDTYPE          Dash                Dot                 DashDot
    DashDotDot          LINETYPEVD          LINEWIDTHVD         LINECOLORVD         Sa vs T             Sd vs T
    Sa vs Sd            PLOTAXISTYPE        SHOWASSOCIATEDDEMAND  ASCE                Defined             SPECTRUMSOURCE
    FUNCTIONNAME        FUNCTIONSF          ACCELSS             ACCELS1             SITECLASS           LONGPERIOD
    DAMPINGRATIO        EFFECTIVEDAMPINGTYPE  DAMPCOEFFA          DAMPCOEFFB          DAMPCOEFFC          DAMPCOEFFD
    DAMPCOEFFE          DAMPCOEFFF          TEFFTYPE            TEFFCOEFFG          TEFFCOEFFH          TEFFCOEFFI
    TEFFCOEFFJ          TEFFCOEFFK          TEFFCOEFFL          LINEVISIBLECAPACITY  LINETYPECAPACITY    LINEWIDTHCAPACITY
    LINECOLORCAPACITY   LINEVISIBLEFAMILY   DUCTILITY           LINETYPEFAMILY      LINEWIDTHFAMILY     LINECOLORFAMILY
    LINEVISIBLESINGLE   LINETYPESINGLE      LINEWIDTHSINGLE     LINECOLORSINGLE     LINEVISIBLEPERIOD   PERIODLINE
    LINETYPEPERIOD      LINEWIDTHPERIOD     LINECOLORPERIOD     FUNCTIONTS          C2                  CM
    LINEVISIBLEBILINEARFD  LINETYPEBILINEARFD  LINEWIDTHBILINEARFD  LINECOLORBILINEARFD  INCLUDESSI          SSIINCLUDEKINEMATIC
    FOUNDATIONSIZE      FOUNDATIONEMBED     SHEARWAVEVELOCITY   SHEARWAVEVELOCITYFACTOR  SSIINCLUDEFNDDAMPING  BETA0
    Sv vs T             Sa vs Freq          Sv vs Freq          Sd vs Freq          SSIPLOTTYPE         SSILEGENDTYPE
    XAXISTYPETYPE       YAXISTYPETYPE       LINEVISIBLEFF       LINETYPEFF          LINEWIDTHFF         LINECOLORFF
    LINEVISIBLEKE       LINETYPEKE          LINEWIDTHKE         LINECOLORKE         LINEVISIBLEKFE      LINETYPEKFE
    LINEWIDTHKFE        LINECOLORKFE

## $ NAMED STORY RESPONSE PLOTS

    STORYRESPONSEPLOT   Auto lateral loads to diaphs  Auto lateral loads to stories  Diaph CM displ      Diaph drifts        Max story displ
    Max story drifts    Story shears        Overturning moments  Story stiffness     DISPLAYTYPE         USERTOPSTORY
    USERBOTTOMSTORY     LOADCASECOMBO       MaxMin              STEPTYPE            STEPNUMBER          TIMESTEP
    LOADPATTERN         LOADSET             DIAPHRAGM           COLORX              COLORY

## $ NAMED QUICK HYSTERESIS PLOTS

    QUICKHYSTERESISPLOT  LINKNAME            LINKLOCATION        LINKCOMPONENT       RESPONSEEXTENT      STARTTIME
    ENDTIME             STARTSTEP           ENDSTEP             LINETYPE            LINEWIDTH           LINECOLOR

## $ NAMED RESPONSE SPECTRUM FROM TIME HISTORY PLOTS

    RESPSPECFROMTIMEHISTPLOTID  POINTID             RESPSPECFROMTIMEHISTPLOT  HORIZONTALAXISITEM  HORIZONTALAXISTYPE  SPECTRUMWIDENING
    SV                  PSV                 PSA                 VERTICALAXISITEM    VERTICALAXISTYPE    ACCELUNITS
    COORDSYS            RESPONSEDIRECTION   DEFAULTFREQ         STRUCTURALFREQ      USERFREQ            RESPSPECFROMTIMEHISTPLOTFREQ
    RESPSPECFROMTIMEHISTPLOTDAMP

## $ NAMED PLOT FUNCTIONS

    PLOTFUNCTION        Base Shear          Beam Force          Brace Force         Column Force        Input Load
    Joint Acceleration  Joint Displacement  Joint Reaction      Joint Velocity      Link Deformation    Link Force
    Panel Zone Deformation  Panel Zone Force    Pier Force          Section Cut Force   Spandrel Force      Story Force
    Wall Force/Stress/Strain  Nonlinear Energy by Group  Acceptance Criteria D/C Ratio  FUNCTYPE            BASEFORCETYPE       Input
    Viscous Damping     ENERGYTYPE          COMPONENT           DISTTYPE            RELDIST             ABSDIST
    ACCELDIR            RESPONSETYPE        Ux                  Uy                  Uz                  Rx
    Rz                  LOCATION            PIERNAME            SECTIONCUT          SPANDRELNAME        GROUP
    PERFORMANCEOBJECTIVE  Strain Gauges       Pier or Spandrel Forces  Internel Element    ELEMENTTYPE         WALL
    Top Stresses        Bottom Stresses     Top Strains         Bottom Strains      SVMax               Selected Grid System Origin
    Selected Joint      OUTPUTLOCREFPTTYPE  GRIDSYSTEM          OFFSETX             OFFSET1             OFFSETY
    OFFSET2             OFFSETZ             OFFSET3             MOVETOCLOSESTJT     LAYERNAME           THICKLOC
    SCALEFACTOR

## $ NAMED PLOT FUNCTION PLOTS

    PLOTFUNCTIONPLOT    HORIZONTALFUNCTION  STARTFREQ           ENDFREQ             PLOTFUNCTIONPLOTVERTICALFUNCTION

## $ TABLE SETS

    TABLESET            UNITS               UNFORMATTED         ALLFIELDS           SELECTIONONLY       USEDINMODEL
    StepByStep          LastStep            MULTISTEP           COMBINECASESTEP     MODES               Range
    STARTMODE           ENDMODE             Object              SORTBY              AllExceptModal      LOADCOMBO
    TABLE

## $ DATABASE TABLE NAMED SETS

    DBTABLESET          ISUSERBASEREAC      USERBASEREACX       USERBASEREACY       USERBASEREACZ       ISALLMODES
    ISALLBUCKLINGMODES  STARTBUCKLINGMODE   ENDBUCKLINGMODE     Stepped             NLSTATIC            MODALHIST
    DIRECTHIST          Multiple Values     EXPOSEALL           DBTABLESETTABLEKEY  DBTABLESETLOADPATTERN  DBTABLESETLOADCASE
    DBTABLESETCOMBO

## $


