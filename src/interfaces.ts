export type ExifFieldNames =
  | "0th"
  | "Exif"
  | "Interop"
  | "GPS"
  | "1st"
  | "thumbnail";

export interface IExif {
  "0th"?: IExifElement;
  Exif?: IExifElement;
  Interop?: IExifElement;
  GPS?: IExifElement;
  "1st"?: IExifElement;
  thumbnail?: string;
}

export interface IExifElement {
  [key: number]: string | number | number[] | number[][];
}

export interface ITypes {
  Byte: number;
  Ascii: number;
  Short: number;
  Long: number;
  Rational: number;
  Undefined: number;
  SLong: number;
  SRational: number;
}

export type TagsFieldNames =
  | "Image"
  | "0th"
  | "Exif"
  | "Interop"
  | "GPS"
  | "1st";

export const Types: ITypes = {
  Byte: 1,
  Ascii: 2,
  Short: 3,
  Long: 4,
  Rational: 5,
  Undefined: 7,
  SLong: 9,
  SRational: 10
};

export interface ITagsSubElement {
  name: string;
  type: number;
  //type: ITypes,
}

export interface ITagsElement {
  [key: number]: ITagsSubElement;
}

export interface ITags {
  Image: ITagsElement;
  "0th": ITagsElement;
  Exif: ITagsElement;
  Interop: ITagsElement;
  GPS: ITagsElement;
  "1st": ITagsElement;
}

export interface ITagValues {
  ImageIFD: {
    ProcessingSoftware: number;
    NewSubfileType: number;
    SubfileType: number;
    ImageWidth: number;
    ImageLength: number;
    BitsPerSample: number;
    Compression: number;
    PhotometricInterpretation: number;
    Threshholding: number;
    CellWidth: number;
    CellLength: number;
    FillOrder: number;
    DocumentName: number;
    ImageDescription: number;
    Make: number;
    Model: number;
    StripOffsets: number;
    Orientation: number;
    SamplesPerPixel: number;
    RowsPerStrip: number;
    StripByteCounts: number;
    XResolution: number;
    YResolution: number;
    PlanarConfiguration: number;
    GrayResponseUnit: number;
    GrayResponseCurve: number;
    T4Options: number;
    T6Options: number;
    ResolutionUnit: number;
    TransferFunction: number;
    Software: number;
    DateTime: number;
    Artist: number;
    HostComputer: number;
    Predictor: number;
    WhitePoint: number;
    PrimaryChromaticities: number;
    ColorMap: number;
    HalftoneHints: number;
    TileWidth: number;
    TileLength: number;
    TileOffsets: number;
    TileByteCounts: number;
    SubIFDs: number;
    InkSet: number;
    InkNames: number;
    NumberOfInks: number;
    DotRange: number;
    TargetPrinter: number;
    ExtraSamples: number;
    SampleFormat: number;
    SMinSampleValue: number;
    SMaxSampleValue: number;
    TransferRange: number;
    ClipPath: number;
    XClipPathUnits: number;
    YClipPathUnits: number;
    Indexed: number;
    JPEGTables: number;
    OPIProxy: number;
    JPEGProc: number;
    JPEGInterchangeFormat: number;
    JPEGInterchangeFormatLength: number;
    JPEGRestartInterval: number;
    JPEGLosslessPredictors: number;
    JPEGPointTransforms: number;
    JPEGQTables: number;
    JPEGDCTables: number;
    JPEGACTables: number;
    YCbCrCoefficients: number;
    YCbCrSubSampling: number;
    YCbCrPositioning: number;
    ReferenceBlackWhite: number;
    XMLPacket: number;
    Rating: number;
    RatingPercent: number;
    ImageID: number;
    CFARepeatPatternDim: number;
    CFAPattern: number;
    BatteryLevel: number;
    Copyright: number;
    ExposureTime: number;
    ImageResources: number;
    ExifTag: number;
    InterColorProfile: number;
    GPSTag: number;
    Interlace: number;
    TimeZoneOffset: number;
    SelfTimerMode: number;
    FlashEnergy: number;
    SpatialFrequencyResponse: number;
    Noise: number;
    FocalPlaneXResolution: number;
    FocalPlaneYResolution: number;
    FocalPlaneResolutionUnit: number;
    ImageNumber: number;
    SecurityClassification: number;
    ImageHistory: number;
    ExposureIndex: number;
    TIFFEPStandardID: number;
    SensingMethod: number;
    XPTitle: number;
    XPComment: number;
    XPAuthor: number;
    XPKeywords: number;
    XPSubject: number;
    PrintImageMatching: number;
    DNGVersion: number;
    DNGBackwardVersion: number;
    UniqueCameraModel: number;
    LocalizedCameraModel: number;
    CFAPlaneColor: number;
    CFALayout: number;
    LinearizationTable: number;
    BlackLevelRepeatDim: number;
    BlackLevel: number;
    BlackLevelDeltaH: number;
    BlackLevelDeltaV: number;
    WhiteLevel: number;
    DefaultScale: number;
    DefaultCropOrigin: number;
    DefaultCropSize: number;
    ColorMatrix1: number;
    ColorMatrix2: number;
    CameraCalibration1: number;
    CameraCalibration2: number;
    ReductionMatrix1: number;
    ReductionMatrix2: number;
    AnalogBalance: number;
    AsShotNeutral: number;
    AsShotWhiteXY: number;
    BaselineExposure: number;
    BaselineNoise: number;
    BaselineSharpness: number;
    BayerGreenSplit: number;
    LinearResponseLimit: number;
    CameraSerialNumber: number;
    LensInfo: number;
    ChromaBlurRadius: number;
    AntiAliasStrength: number;
    ShadowScale: number;
    DNGPrivateData: number;
    MakerNoteSafety: number;
    CalibrationIlluminant1: number;
    CalibrationIlluminant2: number;
    BestQualityScale: number;
    RawDataUniqueID: number;
    OriginalRawFileName: number;
    OriginalRawFileData: number;
    ActiveArea: number;
    MaskedAreas: number;
    AsShotICCProfile: number;
    AsShotPreProfileMatrix: number;
    CurrentICCProfile: number;
    CurrentPreProfileMatrix: number;
    ColorimetricReference: number;
    CameraCalibrationSignature: number;
    ProfileCalibrationSignature: number;
    AsShotProfileName: number;
    NoiseReductionApplied: number;
    ProfileName: number;
    ProfileHueSatMapDims: number;
    ProfileHueSatMapData1: number;
    ProfileHueSatMapData2: number;
    ProfileToneCurve: number;
    ProfileEmbedPolicy: number;
    ProfileCopyright: number;
    ForwardMatrix1: number;
    ForwardMatrix2: number;
    PreviewApplicationName: number;
    PreviewApplicationVersion: number;
    PreviewSettingsName: number;
    PreviewSettingsDigest: number;
    PreviewColorSpace: number;
    PreviewDateTime: number;
    RawImageDigest: number;
    OriginalRawFileDigest: number;
    SubTileBlockSize: number;
    RowInterleaveFactor: number;
    ProfileLookTableDims: number;
    ProfileLookTableData: number;
    OpcodeList1: number;
    OpcodeList2: number;
    OpcodeList3: number;
    NoiseProfile: number;
  };
  ExifIFD: {
    ExposureTime: number;
    FNumber: number;
    ExposureProgram: number;
    SpectralSensitivity: number;
    ISOSpeedRatings: number;
    OECF: number;
    SensitivityType: number;
    StandardOutputSensitivity: number;
    RecommendedExposureIndex: number;
    ISOSpeed: number;
    ISOSpeedLatitudeyyy: number;
    ISOSpeedLatitudezzz: number;
    ExifVersion: number;
    DateTimeOriginal: number;
    DateTimeDigitized: number;
    ComponentsConfiguration: number;
    CompressedBitsPerPixel: number;
    ShutterSpeedValue: number;
    ApertureValue: number;
    BrightnessValue: number;
    ExposureBiasValue: number;
    MaxApertureValue: number;
    SubjectDistance: number;
    MeteringMode: number;
    LightSource: number;
    Flash: number;
    FocalLength: number;
    SubjectArea: number;
    MakerNote: number;
    UserComment: number;
    SubSecTime: number;
    SubSecTimeOriginal: number;
    SubSecTimeDigitized: number;
    FlashpixVersion: number;
    ColorSpace: number;
    PixelXDimension: number;
    PixelYDimension: number;
    RelatedSoundFile: number;
    InteroperabilityTag: number;
    FlashEnergy: number;
    SpatialFrequencyResponse: number;
    FocalPlaneXResolution: number;
    FocalPlaneYResolution: number;
    FocalPlaneResolutionUnit: number;
    SubjectLocation: number;
    ExposureIndex: number;
    SensingMethod: number;
    FileSource: number;
    SceneType: number;
    CFAPattern: number;
    CustomRendered: number;
    ExposureMode: number;
    WhiteBalance: number;
    DigitalZoomRatio: number;
    FocalLengthIn35mmFilm: number;
    SceneCaptureType: number;
    GainControl: number;
    Contrast: number;
    Saturation: number;
    Sharpness: number;
    DeviceSettingDescription: number;
    SubjectDistanceRange: number;
    ImageUniqueID: number;
    CameraOwnerName: number;
    BodySerialNumber: number;
    LensSpecification: number;
    LensMake: number;
    LensModel: number;
    LensSerialNumber: number;
    Gamma: number;
  };
  GPSIFD: {
    GPSVersionID: number;
    GPSLatitudeRef: number;
    GPSLatitude: number;
    GPSLongitudeRef: number;
    GPSLongitude: number;
    GPSAltitudeRef: number;
    GPSAltitude: number;
    GPSTimeStamp: number;
    GPSSatellites: number;
    GPSStatus: number;
    GPSMeasureMode: number;
    GPSDOP: number;
    GPSSpeedRef: number;
    GPSSpeed: number;
    GPSTrackRef: number;
    GPSTrack: number;
    GPSImgDirectionRef: number;
    GPSImgDirection: number;
    GPSMapDatum: number;
    GPSDestLatitudeRef: number;
    GPSDestLatitude: number;
    GPSDestLongitudeRef: number;
    GPSDestLongitude: number;
    GPSDestBearingRef: number;
    GPSDestBearing: number;
    GPSDestDistanceRef: number;
    GPSDestDistance: number;
    GPSProcessingMethod: number;
    GPSAreaInformation: number;
    GPSDateStamp: number;
    GPSDifferential: number;
    GPSHPositioningError: number;
  };
  InteropIFD: {
    InteroperabilityIndex: number;
  };
}
