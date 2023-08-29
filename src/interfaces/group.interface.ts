export interface GroupMetadata {
  id: object;
  creation: number;
  owner: object;
  subject: string;
  subjectTime: number;
  desc: string;
  descId: string;
  descTime: number;
  descOwner: object;
  restrict: boolean;
  announce: boolean;
  noFrequentlyForwarded: boolean;
  ephemeralDuration: number;
  membershipApprovalMode: boolean;
  memberAddMode: string;
  reportToAdminMode: boolean;
  size: number;
  support: boolean;
  suspended: boolean;
  terminated: boolean;
  uniqueShortNameMap: object;
  isParentGroup: boolean;
  isParentGroupClosed: boolean;
  parentGroup: object;
  defaultSubgroup: boolean;
  lastActivityTimestamp: number;
  lastSeenActivityTimestamp: number;
  incognito: boolean;
  participants: object[];
  pendingParticipants: any[]; // You can replace 'any' with a proper type
  pastParticipants: object[];
  membershipApprovalRequests: any[]; // You can replace 'any' with a proper type
  subgroupSuggestions: any[]; // You can replace 'any' with a proper type
}

export interface Presence {
  id: object;
  chatstates: any[]; // You can replace 'any' with a proper type
}

export interface Contact {
  id: object;
  name: string;
  type: string;
  isBusiness: boolean;
  isEnterprise: boolean;
  isSmb: boolean;
  isUser: boolean;
  profilePicThumbObj: object;
  msgs: any[]; // You can replace 'any' with a proper type
}

export interface GroupInfo {
  id: {
    server: string;
    user: string;
    _serialized: string;
  };
  lastReceivedKey: {
    fromMe: boolean;
    remote: object;
    id: string;
    participant: object;
    _serialized: string;
  };
  t: number;
  unreadCount: number;
  unreadDividerOffset: number;
  isReadOnly: boolean;
  isAnnounceGrpRestrict: boolean;
  muteExpiration: number;
  isAutoMuted: boolean;
  name: string;
  notSpam: boolean;
  ephemeralDuration: number;
  unreadMentionsOfMe: any[]; // You can replace 'any' with a proper type
  unreadMentionCount: number;
  hasUnreadMention: boolean;
  archiveAtMentionViewedInDrawer: boolean;
  hasChatBeenOpened: boolean;
  tcToken: any; // You can replace 'any' with a proper type
  tcTokenTimestamp: any; // You can replace 'any' with a proper type
  endOfHistoryTransferType: number;
  pendingInitialLoading: boolean;
  celebrationAnimationLastPlayed: number;
  msgs: any[]; // You can replace 'any' with a proper type
  kind: string;
  isGroup: boolean;
  contact: Contact;
  groupMetadata: GroupMetadata;
  presence: Presence;
  isOnline: any; // You can replace 'any' with a proper type
  lastSeen: any; // You can replace 'any' with a proper type
}
