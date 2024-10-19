import { NativeModules } from 'react-native';
import {
  validateNonEmptyStringProp,
  validateBooleanProp,
} from '../utils/validation';

const { RNZoomSDK } = NativeModules;

export type InitConfig = {
  jwtToken?: string;
  domain?: string;
  enableLog?: boolean;
  logSize?: number; //Android only
  bundleResPath?: string; //iOS only
  appGroupId?: string; //iOS only
  replaykitBundleIdentifier?: string; //iOS only
};

export type MeetingSettingsConfig = {
    disableVideoPreview?: boolean;
    enableCustomizedMeetingUI?: boolean;
    disableClearWebKitCache?: boolean;
    language?: string;
};

export type JoinMeetingConfig = {
  userName: string;
  meetingNumber: string;
  password?: string;
  zoomAccessToken?: string;
  vanityID?: string;
  webinarToken?: string;
  joinToken?: string;
  appPrivilegeToken?: string;
  isMyVoiceInMix?: boolean;
  isAudioRawDataStereo?: boolean;

  noDrivingMode?: boolean;
  noInvite?: boolean;
  noMeetingEndMessage?: boolean;
  noMeetingErrorMessage?: boolean;
  noTitleBar?: boolean;
  noBottomToolbar?: boolean;
  noPhoneDialIn?: boolean;
  noPhoneDialOut?: boolean;
  noRecord?: boolean;
  noShare?: boolean;
  noVideo?: boolean;
  inviteOptions?: number;
  customerKey?: string;
  customMeetingId?: string;
  noUnmuteConfirmDialog?: boolean;
  noWebinarRegisterDialog?: boolean;
  noChatMsgToast?: boolean;
  noAudio?: boolean;
  meetingViewsOptions?: string;
};

export type StartMeetingConfig = {
  userName: string;
  meetingNumber?: string;
  userType?: number;
  inviteContactId?: string;
  zoomAccessToken: string;
  vanityID?: string;
  isMyVoiceInMix?: boolean;
  isAudioRawDataStereo?: boolean;

  noDrivingMode?: boolean;
  noInvite?: boolean;
  noMeetingEndMessage?: boolean;
  noMeetingErrorMessage?: boolean;
  noTitleBar?: boolean;
  noBottomToolbar?: boolean;
  noPhoneDialIn?: boolean;
  noPhoneDialOut?: boolean;
  noRecord?: boolean;
  noShare?: boolean;
  noVideo?: boolean;
  inviteOptions?: number;
  customerKey?: string;
  customMeetingId?: string;
  noUnmuteConfirmDialog?: boolean;
  noWebinarRegisterDialog?: boolean;
  noChatMsgToast?: boolean;
  noAudio?: boolean;
  meetingViewsOptions?: string;
};

export type ZoomSDKType = {
  // Methods
  initSDK: (config: InitConfig) => Promise<boolean>;
  joinMeeting: (config: JoinMeetingConfig) => Promise<number>;
  startMeeting: (config: StartMeetingConfig) => Promise<number>;
  updateMeetingSetting: (config: MeetingSettingsConfig) => void;
  isInitialized: () => Promise<boolean>;
};

export class ZoomSDK implements ZoomSDKType {
  initSDK(config: InitConfig) {
    validateNonEmptyStringProp(config, 'initConfig', 'domain');
    validateBooleanProp(config, 'initConfig', 'enableLog');
    return RNZoomSDK.initSDK(config);
  }

  joinMeeting(config: JoinMeetingConfig) {
    validateNonEmptyStringProp(config, 'JoinMeetingConfig', 'userName');
    validateNonEmptyStringProp(config, 'JoinMeetingConfig', 'meetingNumber');
    return RNZoomSDK.joinMeeting(config);
  }

  startMeeting(config: StartMeetingConfig) {
    validateNonEmptyStringProp(config, 'StartMeetingConfig', 'userName');
    validateNonEmptyStringProp(config, 'StartMeetingConfig', 'zoomAccessToken');
    return RNZoomSDK.startMeeting(config);
  }

  updateMeetingSetting = RNZoomSDK.updateMeetingSetting;
  isInitialized = RNZoomSDK.isInitialized;
}