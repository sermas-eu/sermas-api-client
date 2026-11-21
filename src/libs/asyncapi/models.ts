// generated, do not edit
import type {
  PlatformModuleConfigDto,
  ModuleSettingsDto,
  ModuleResourceDto,
  PlatformAppDto,
  AppModuleConfigDto,
  RepositoryConfigDto,
  RepositoryAvatarDto,
  AvatarCameraConfig,
  Point3D,
  AvatarTTSOptions,
  RepositoryBackgroundDto,
  RepositoryBackgroundMetadataDto,
  RepositoryRobotModelDto,
  RobotMapDto,
  RepositoryDocumentDto,
  RepositoryAnimationDto,
  AppClientDto,
  AppSettingsDto,
  AppToolsDTO,
  ToolsParameterSchema,
  DialogueTaskDto,
  TaskIntentDto,
  TaskEventDto,
  TaskEventTriggerDto,
  TaskFieldDto,
  OptionSelection,
  PositionDto,
  UserInteractionIntentionDto,
  UIAssetDto,
  UIContentDto,
  UIInteractionDTO,
  SessionDto,
  SessionProperties,
  DialogueMessageDto,
  Buffer,
  DialogueTaskRecordDto,
  MonitoringRecordDto,
  ActuationEventDto,
  ActuationDto,
  MovementEventDto,
  MovementDto,
  PoseDto,
  OrientationDto,
  StatusEventDto,
  StatusDto,
  VelocityDto,
  SessionStorageRecordDto,
  XRMarkerDto,
} from '../openapi';

export interface ModuleConfigEventDto {
  operation: string;
  ts: string;
  record: PlatformModuleConfigDto;
}

export interface PlatformAppChangedDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: PlatformAppDto;
}

export type anonymous_schema_46 =
  | 'avatars'
  | 'backgrounds'
  | 'robots'
  | 'documents'
  | 'animations';

export type anonymous_schema_49 = 'readyplayerme' | 'custom';

export type anonymous_schema_50 = 'M' | 'F';

export type anonymous_schema_59 =
  | 'avatars'
  | 'backgrounds'
  | 'robots'
  | 'documents'
  | 'animations';

export type anonymous_schema_65 =
  | 'avatars'
  | 'backgrounds'
  | 'robots'
  | 'documents'
  | 'animations';

export type anonymous_schema_76 =
  | 'avatars'
  | 'backgrounds'
  | 'robots'
  | 'documents'
  | 'animations';

export type anonymous_schema_81 =
  | 'avatars'
  | 'backgrounds'
  | 'robots'
  | 'documents'
  | 'animations';

export interface anonymous_schema_97 {
  chat?: string;
  tools?: string;
  sentiment?: string;
  tasks?: string;
  intent?: string;
  translation?: string;
}

export interface anonymous_schema_105 {
  text: string;
}

export type anonymous_schema_108 =
  | 'on-load'
  | 'touch'
  | 'speak'
  | 'intent-detection';

export type anonymous_schema_120 = 'string' | 'number' | 'boolean' | 'object';

export interface anonymous_schema_127 {
  auth?: string;
  basic?: anonymous_schema_129;
  bearer?: anonymous_schema_132;
  moduleId: string;
  url: string;
  headers?: Record<string, any>;
}

export interface anonymous_schema_129 {
  username?: string;
  password: string;
}

export interface anonymous_schema_132 {
  clientType?: string;
  clientId?: string;
  clientSecret?: string;
  username?: string;
  password?: string;
  audience?: string;
  tokenUrl: string;
  refreshUrl?: string;
}

export type anonymous_schema_160 =
  | 'started'
  | 'completed'
  | 'ongoing'
  | 'aborted';

export interface anonymous_schema_173 {
  clearScreen?: boolean;
  ttsEnabled?: boolean;
  stopSpeech?: boolean;
  language?: string;
}

export type anonymous_schema_179 =
  | 'text'
  | 'boolean'
  | 'date'
  | 'select'
  | 'eval'
  | 'external';

export interface anonymous_schema_191 {
  triggerOnce?: boolean;
  removeRecord?: boolean;
  enableTool?: boolean;
  toolOptions?: anonymous_schema_195;
  repositoryId?: string;
  list?: boolean;
  oncePerSession?: boolean;
  matchOrRemove?: boolean;
}

export interface anonymous_schema_195 {
  triggerOnce?: boolean;
  exclusive?: boolean;
}

export interface PlatformAppClientChangedDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: AppClientDto;
}

export interface UpdateUserEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId: string;
  ts?: string;
  enabled: boolean;
}

export interface UserDetectionEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  cameraId: string;
  source: string;
  detections: UserDetectionDto[];
}

export interface UserDetectionDto {
  skeleton: string[];
  face: BoundingBox;
  faceMask: string[];
  fullBody: BoundingBox;
  user: StringInferenceValue[];
  position: PositionDto;
}

export interface BoundingBox {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface StringInferenceValue {
  probability: number;
  value: string;
}

export type anonymous_schema_245 = 'start' | 'stop';

export interface UserCharacterizationEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  source: string;
  detections: UserCharacterizationDto[];
  sessionId?: string;
}

export interface UserCharacterizationDto {
  emotion: UserEmotionValue;
  age?: UserAgeValue;
  user?: StringInferenceValue[];
}

export interface UserEmotionValue {
  probability: number;
  value: string;
}

export interface UserAgeValue {
  probability: number;
  value: number;
}

export interface AudioClassificationEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  source: string;
  detections: AudioClassificationValue[];
  sessionId?: string;
}

export interface AudioClassificationValue {
  probability: number;
  value: string;
}

export interface ObjectDetectionEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  detections: ObjectDetectionDto[];
}

export interface ObjectDetectionDto {
  probability: number;
  value: string;
  bbox: BoundingBox;
}

export interface QRCodeEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  version: string;
  payload: string;
  sessionId?: string;
}

export interface NoiseEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  noiseType: string;
  level: string;
  speakerId: string[];
}

export interface UIAssetChangedDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: UIAssetDto;
}

export type anonymous_schema_303 =
  | 'avatars'
  | 'backgrounds'
  | 'robots'
  | 'documents'
  | 'animations';

export type anonymous_schema_316 =
  | 'video'
  | 'image'
  | 'pdf'
  | 'webpage'
  | 'object'
  | 'text'
  | 'email'
  | 'html'
  | 'link'
  | 'dialogue-message'
  | 'navigation'
  | 'navigation-menu'
  | 'buttons'
  | 'quiz'
  | 'clear-screen'
  | 'qrcode-scanner'
  | 'background-audio';

export interface anonymous_schema_319 {
  repositoryId?: string;
  chunks?: Record<string, any>[];
  additionalProperties?: Record<string, any>;
}

export interface anonymous_schema_324 {
  clearScreen?: boolean;
  ttsEnabled?: boolean;
  stopSpeech?: boolean;
  language?: string;
  additionalProperties?: Record<string, any>;
}

export interface UIInteractionEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
  moduleId: string;
  interaction: UIInteractionDTO;
}

export interface AgentDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  agentId: string;
  status: anonymous_schema_345;
  modules: string[];
}

export type anonymous_schema_345 =
  | 'unavailable'
  | 'error'
  | 'not_ready'
  | 'ready'
  | 'loading'
  | 'interacting'
  | 'waiting'
  | 'processing';

export interface AgentChangedDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  moduleId: string;
  record: AgentDto;
  settings?: AppSettingsDto;
}

export interface SessionChangedDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: SessionDto;
}

export interface DialogueProgressEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
  event: string;
  status?: string;
}

export type anonymous_schema_390 = 'user' | 'agent';

export interface anonymous_schema_395 {
  chat?: string;
  tools?: string;
  sentiment?: string;
  tasks?: string;
  intent?: string;
  translation?: string;
}

export interface DialogueAvatarSpeechControlDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
  chunkId?: string;
}

export interface DialogueSpeechToTextDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
  actor?: anonymous_schema_414;
  text: string;
  gender?: string;
  language?: string;
  emotion?: string;
  llm?: anonymous_schema_419;
  avatar?: string;
  messageId?: string;
  chunkId?: string;
  ttsEnabled?: boolean;
  isWelcome?: boolean;
}

export type anonymous_schema_414 = 'user' | 'agent';

export interface anonymous_schema_419 {
  chat?: string;
  tools?: string;
  sentiment?: string;
  tasks?: string;
  intent?: string;
  translation?: string;
}

export interface DialogueSessionRequestDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
  status: anonymous_schema_431;
}

export type anonymous_schema_431 =
  | 'started'
  | 'processing'
  | 'ended'
  | 'cancelled';

export interface DialogueToolTriggeredEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
  name: string;
  tool: AppToolsDTO;
}

export interface DialogueToolsRepositoryChanged {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: DialogueToolsRepositoryRecordDto;
}

export interface DialogueToolsRepositoryRecordDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
  repositoryId: string;
  options?: anonymous_schema_453;
  tools?: AppToolsDTO[];
}

export interface anonymous_schema_453 {
  triggerOnce?: boolean;
  exclusive?: boolean;
}

export interface DialogueToolNotMatchingEventDto {
  appId: string;
  sessionId: string;
  tools: AppToolsDTO[];
  repositories: string[];
  taskId?: string;
  currentField?: TaskFieldDto;
}

export interface DialogueTaskChangedDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: DialogueTaskDto;
}

export interface DialogueTaskProgressDto {
  type: anonymous_schema_468;
  task: anonymous_schema_469;
  record: anonymous_schema_470;
}

export type anonymous_schema_468 =
  | 'started'
  | 'completed'
  | 'ongoing'
  | 'aborted';

export interface anonymous_schema_469 {
  taskId: string;
  appId: string;
  hint?: string;
  sessionId?: string;
  name: string;
  label: string;
  description?: string;
  intents?: TaskIntentDto[];
  events?: TaskEventDto[];
  fields: TaskFieldDto[];
  options?: anonymous_schema_191;
}

export interface anonymous_schema_470 {
  recordId: string;
  taskId: string;
  appId: string;
  sessionId: string;
  status?: anonymous_schema_475;
  values: Record<string, any>;
  updated?: string;
  created?: string;
}

export type anonymous_schema_475 =
  | 'started'
  | 'completed'
  | 'ongoing'
  | 'aborted';

export interface DialogueTaskRecordChangedDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: DialogueTaskRecordDto;
}

export interface DialogueTaskRecordHandlerDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
  taskId: string;
  recordId: string;
  field: anonymous_schema_494;
}

export interface anonymous_schema_494 {
  name: string;
  label?: string;
  hint?: string;
  order?: number;
  uiOptions?: anonymous_schema_173;
  skipResponse?: boolean;
  type: anonymous_schema_179;
  required?: boolean;
  validation?: string;
  condition?: string;
  prompt?: string;
  handler?: string;
  multiple?: boolean;
  options?: OptionSelection[];
}

export type anonymous_schema_497 =
  | 'characterization'
  | 'stt'
  | 'tts'
  | 'interaction'
  | 'session'
  | 'document'
  | 'chat'
  | 'task'
  | 'performance'
  | 'kpi'
  | 'error'
  | 'llm'
  | 'log';

export interface PlatformTokenDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
}

export interface PlatformAppModuleConfigEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: AppModuleConfigDto;
}

export interface InitialPoseEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  initialPose: InitialPoseDto;
}

export interface InitialPoseDto {
  pose: PoseDto;
  covariance: string[];
}

export interface OperationalStateEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  state: OperationalStateDto;
}

export interface OperationalStateDto {
  op: string;
  state: string;
}

export interface SessionStorageEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: SessionStorageRecordDto;
}

export interface SessionSupportEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  supportId: string;
  status: string;
  feedback: string;
  code: string;
}

export interface XRMarkerChangedDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: XRMarkerDto;
}

export interface XROcclusionDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  occlusion: boolean;
}
