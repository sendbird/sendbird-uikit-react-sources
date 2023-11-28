/**
 * NOTE:
 * Do not forget to update the string set table on Docs
 * When you update this string set
 *
 * `%d` will be replaced by a proper number
 */

// TODO: Make StringSet as a interface
export type StringSet = Record<keyof typeof stringSet['en'], string>;
const stringSet = {
  en: {
    // Group Channel - Conversation
    MESSAGE_STATUS__YESTERDAY: 'Yesterday',
    CHANNEL__MESSAGE_LIST__NOTIFICATION__NEW_MESSAGE: 'new message(s) since',
    /** @deprecated Please use `DATE_FORMAT__MESSAGE_LIST__NOTIFICATION__UNREAD_SINCE` instead * */
    CHANNEL__MESSAGE_LIST__NOTIFICATION__ON: 'on',
    // Channel List
    CHANNEL_PREVIEW_MOBILE_LEAVE: 'Leave channel',
    // Group Channel - Settings
    CHANNEL_SETTING__HEADER__TITLE: 'Channel information',
    CHANNEL_SETTING__PROFILE__EDIT: 'Edit',
    CHANNEL_SETTING__MEMBERS__TITLE: 'Members',
    CHANNEL_SETTING__MEMBERS__SEE_ALL_MEMBERS: 'All members',
    CHANNEL_SETTING__MEMBERS__INVITE_MEMBER: 'Invite users',
    CHANNEL_SETTING__MEMBERS__YOU: ' (You)',
    CHANNEL_SETTING__MEMBERS__SELECT_TITLE: 'Select members',
    CHANNEL_SETTING__MEMBERS__OPERATOR: 'Operator',
    CHANNEL_SETTING__LEAVE_CHANNEL__TITLE: 'Leave channel',
    CHANNEL_SETTING__OPERATORS__TITLE: 'Operators',
    CHANNEL_SETTING__OPERATORS__TITLE_ALL: 'All operators',
    CHANNEL_SETTING__OPERATORS__TITLE_ADD: 'Add operator',
    CHANNEL_SETTING__OPERATORS__ADD_BUTTON: 'Add',
    CHANNEL_SETTING__MUTED_MEMBERS__TITLE: 'Muted members',
    CHANNEL_SETTING__MUTED_MEMBERS__TITLE_ALL: 'All muted members',
    CHANNEL_SETTING__NO_UNMUTED: 'No muted members yet',
    CHANNEL_SETTING__BANNED_MEMBERS__TITLE: 'Banned users',
    CHANNEL_SETTING__FREEZE_CHANNEL: 'Freeze Channel',
    CHANNEL_SETTING__MODERATION__REGISTER_AS_OPERATOR: 'Register as operator',
    CHANNEL_SETTING__MODERATION__UNREGISTER_OPERATOR: 'Unregister operator',
    CHANNEL_SETTING__MODERATION__MUTE: 'Mute',
    CHANNEL_SETTING__MODERATION__UNMUTE: 'Unmute',
    CHANNEL_SETTING__MODERATION__BAN: 'Ban',
    CHANNEL_SETTING__MODERATION__UNBAN: 'Unban',
    CHANNEL_SETTING__MODERATION__EMPTY_BAN: 'No banned members yet',
    CHANNEL_SETTING__MODERATION__ALL_BAN: 'All banned members',
    // OpenChannel - Conversation
    OPEN_CHANNEL_CONVERSATION__TITLE_PARTICIPANTS: 'participants',
    OPEN_CHANNEL_CONVERSATION__SELECT_PARTICIPANTS: 'Select participants',
    // OpenChannelList
    OPEN_CHANNEL_LIST__TITLE: 'Channels',
    CREATE_OPEN_CHANNEL_LIST__TITLE: 'New channel profile',
    CREATE_OPEN_CHANNEL_LIST__SUBTITLE__IMG_SECTION: 'Channel image',
    CREATE_OPEN_CHANNEL_LIST__SUBTITLE__IMG_UPLOAD: 'Upload',
    CREATE_OPEN_CHANNEL_LIST__SUBTITLE__TEXT_SECTION: 'Channel name',
    CREATE_OPEN_CHANNEL_LIST__SUBTITLE__TEXT_PLACE_HOLDER: 'Enter channel name',
    CREATE_OPEN_CHANNEL_LIST__SUBMIT: 'Create',
    // OpenChannel - Settings
    OPEN_CHANNEL_SETTINGS__OPERATOR_TITLE: 'Channel Information',
    OPEN_CHANNEL_SETTINGS__OPERATOR_URL: 'URL',
    OPEN_CHANNEL_SETTINGS__PARTICIPANTS_ACCORDION_TITLE: 'Participants',
    OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_PANEL: 'Delete channel',
    OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_TITLE: 'Delete channel?',
    OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_CONTEXT: 'Once deleted, this channel can\'t be restored.',
    OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_SUBMIT: 'Delete',
    OPEN_CHANNEL_SETTINGS__OPERATORS_TITLE: 'Operators',
    OPEN_CHANNEL_SETTINGS__OPERATORS__TITLE_ADD: 'Add operator',
    OPEN_CHANNEL_SETTINGS__OPERATORS__TITLE_ALL: 'All operators',
    OPEN_CHANNEL_SETTINGS__MUTED_MEMBERS__TITLE: 'Muted participants',
    OPEN_CHANNEL_SETTINGS__MUTED_MEMBERS__TITLE_ALL: 'All muted participants',
    OPEN_CHANNEL_SETTINGS__MUTED_MEMBERS__NO_ONE: 'No muted participants yet',
    OPEN_CHANNEL_SETTINGS__BANNED_MEMBERS__TITLE: 'Banned users',
    OPEN_CHANNEL_SETTINGS__BANNED_MEMBERS__TITLE_ALL: 'All banned users',
    OPEN_CHANNEL_SETTINGS__BANNED_MEMBERS__NO_ONE: 'No banned users yet',
    OPEN_CHANNEL_SETTINGS__MEMBERS__YOU: ' (You)',
    OPEN_CHANNEL_SETTINGS__MEMBERS__OPERATOR: 'Operator',
    OPEN_CHANNEL_SETTINGS__PARTICIPANTS_TITLE: 'Participants',
    OPEN_CHANNEL_SETTINGS__EMPTY_LIST: 'No participants yet',
    OPEN_CHANNEL_SETTINGS__SEE_ALL: 'See all participants',
    OPEN_CHANNEL_SETTINGS__ALL_PARTICIPANTS_TITLE: 'All participants',
    OPEN_CHANNEL_SETTINGS__NO_TITLE: '(No title)',
    OPEN_CHANNEL_SETTING__MODERATION__REGISTER_AS_OPERATOR: 'Register as operator',
    OPEN_CHANNEL_SETTING__MODERATION__UNREGISTER_OPERATOR: 'Unregister operator',
    OPEN_CHANNEL_SETTING__MODERATION__MUTE: 'Mute',
    OPEN_CHANNEL_SETTING__MODERATION__UNMUTE: 'Unmute',
    OPEN_CHANNEL_SETTING__MODERATION__BAN: 'Ban',
    OPEN_CHANNEL_SETTING__MODERATION__UNBAN: 'Unban',
    // Channel - Common
    TRYING_TO_CONNECT: 'Trying to connect…',
    TYPING_INDICATOR__IS_TYPING: 'is typing...',
    TYPING_INDICATOR__AND: 'and',
    TYPING_INDICATOR__ARE_TYPING: 'are typing...',
    TYPING_INDICATOR__MULTIPLE_TYPING: 'Several people are typing...',
    CHANNEL_FROZEN: 'Channel frozen',
    PLACE_HOLDER__NO_CHANNEL: 'No channels',
    PLACE_HOLDER__WRONG: 'Something went wrong',
    PLACE_HOLDER__RETRY_TO_CONNECT: 'Retry',
    PLACE_HOLDER__NO_MESSAGES: 'No messages',
    TOOLTIP__AND_YOU: ', and you',
    TOOLTIP__YOU: 'you',
    TOOLTIP__UNKNOWN_USER: '(no name)',
    UNKNOWN__UNKNOWN_MESSAGE_TYPE: '(Unknown message type)',
    UNKNOWN__CANNOT_READ_MESSAGE: 'Cannot read this message.',
    MESSAGE_EDITED: '(edited)',
    // Channel - Modal
    MODAL__DELETE_MESSAGE__TITLE: 'Delete this message?',
    MODAL__CHANNEL_INFORMATION__TITLE: 'Edit channel information',
    MODAL__CHANNEL_INFORMATION__CHANNEL_IMAGE: 'Channel image',
    MODAL__CHANNEL_INFORMATION__UPLOAD: 'Upload',
    MODAL__CHANNEL_INFORMATION__CHANNEL_NAME: 'Channel name',
    MODAL__CHANNEL_INFORMATION__INPUT__PLACE_HOLDER: 'Enter name',
    MODAL__INVITE_MEMBER__TITLE: 'Invite member',
    MODAL__INVITE_MEMBER__SELECTED: 'selected',
    MODAL__CHOOSE_CHANNEL_TYPE__TITLE: 'New channel',
    MODAL__CHOOSE_CHANNEL_TYPE__GROUP: 'Group',
    MODAL__CHOOSE_CHANNEL_TYPE__SUPER_GROUP: 'Super group',
    MODAL__CHOOSE_CHANNEL_TYPE__BROADCAST: 'Broadcast',
    MODAL__CREATE_CHANNEL__TITLE: 'New channel',
    MODAL__CREATE_CHANNEL__GROUP: 'Group',
    MODAL__CREATE_CHANNEL__SUPER: 'Super group',
    MODAL__CREATE_CHANNEL__BROADCAST: 'Broadcast',
    MODAL__CREATE_CHANNEL__SELECTED: 'selected',
    MODAL__LEAVE_CHANNEL__TITLE: 'Leave this channel?',
    MODAL__LEAVE_CHANNEL__FOOTER: 'Leave',
    MODAL__VOICE_MESSAGE_INPUT_DISABLED__TITLE_MUTED: 'You\'re muted by the operator.',
    MODAL__VOICE_MESSAGE_INPUT_DISABLED__TITLE_FROZEN: 'Channel is frozen.',
    // User Profile
    USER_PROFILE__MESSAGE: 'Message',
    USER_PROFILE__USER_ID: 'User ID',
    EDIT_PROFILE__TITLE: 'My profile',
    EDIT_PROFILE__IMAGE_LABEL: 'Profile image',
    EDIT_PROFILE__IMAGE_UPLOAD: 'Upload',
    EDIT_PROFILE__NICKNAME_LABEL: 'Nickname',
    EDIT_PROFILE__NICKNAME_PLACEHOLDER: 'Enter your nickname',
    EDIT_PROFILE__USERID_LABEL: 'User ID',
    EDIT_PROFILE__THEME_LABEL: 'Dark theme',
    // Message Input
    MESSAGE_INPUT__PLACE_HOLDER: 'Enter message',
    MESSAGE_INPUT__PLACE_HOLDER__DISABLED: 'Chat is unavailable in this channel',
    MESSAGE_INPUT__PLACE_HOLDER__MUTED: 'Chat is unavailable because you\'re muted',
    MESSAGE_INPUT__PLACE_HOLDER__MUTED_SHORT: 'You\'re muted',
    MESSAGE_INPUT__QUOTE_REPLY__PLACE_HOLDER: 'Reply to message',
    // Common UI
    BUTTON__CANCEL: 'Cancel',
    BUTTON__DELETE: 'Delete',
    BUTTON__SAVE: 'Save',
    BUTTON__CREATE: 'Create',
    BUTTON__INVITE: 'Invite',
    BUTTON__OK: 'OK',
    BADGE__OVER: '+',
    NO_TITLE: 'No title',
    NO_NAME: '(No name)',
    NO_MEMBERS: '(No members)',
    // Context Menu
    MESSAGE_MENU__COPY: 'Copy',
    MESSAGE_MENU__REPLY: 'Reply',
    MESSAGE_MENU__THREAD: 'Reply in thread',
    MESSAGE_MENU__OPEN_IN_CHANNEL: 'Open in channel',
    MESSAGE_MENU__EDIT: 'Edit',
    MESSAGE_MENU__RESEND: 'Resend',
    MESSAGE_MENU__DELETE: 'Delete',
    MESSAGE_MENU__SAVE: 'Save',
    //  * FIXME: get back legacy, remove after refactoring open channel messages *
    CONTEXT_MENU_DROPDOWN__COPY: 'Copy',
    CONTEXT_MENU_DROPDOWN__EDIT: 'Edit',
    CONTEXT_MENU_DROPDOWN__RESEND: 'Resend',
    CONTEXT_MENU_DROPDOWN__DELETE: 'Delete',
    CONTEXT_MENU_DROPDOWN__SAVE: 'Save',
    // Feature - Message Search
    SEARCH: 'Search',
    SEARCH_IN_CHANNEL: 'Search in channel',
    SEARCH_IN: 'Search in',
    SEARCHING: 'Searching for messages...',
    NO_SEARCHED_MESSAGE: 'No results found.',
    // Feature - Message Reply
    QUOTE_MESSAGE_INPUT__REPLY_TO: 'Reply to',
    QUOTE_MESSAGE_INPUT__FILE_TYPE_IMAGE: 'Photo',
    QUOTE_MESSAGE_INPUT__FILE_TYPE_GIF: 'GIF',
    QUOTE_MESSAGE_INPUT__FILE_TYPE__VIDEO: 'Video',
    QUOTED_MESSAGE__REPLIED_TO: 'replied to',
    QUOTED_MESSAGE__CURRENT_USER: 'You',
    QUOTED_MESSAGE__UNAVAILABLE: 'Message unavailable',
    // Feature - Thread
    THREAD__HEADER_TITLE: 'Thread',
    CHANNEL__THREAD_REPLY: 'reply',
    CHANNEL__THREAD_REPLIES: 'replies',
    CHANNEL__THREAD_OVER_MAX: '99+',
    THREAD__THREAD_REPLY: 'reply',
    THREAD__THREAD_REPLIES: 'replies',
    THREAD__INPUT__REPLY_TO_THREAD: 'Reply to thread',
    THREAD__INPUT__REPLY_IN_THREAD: 'Reply in thread',
    // Feature - Mention
    MENTION_NAME__NO_NAME: '(No name)',
    MENTION_COUNT__OVER_LIMIT: 'You can mention up to %d times at a time.',
    UI__FILE_VIEWER__UNSUPPORT: 'Unsupported message',
    // Feature - Voice Message
    VOICE_RECORDING_PERMISSION_DENIED: `You cannot record the voice since
        voice recording is not permitted in your device system setting`,
    VOICE_MESSAGE: 'Voice Message',
    // Channel preview last message file type display strings
    CHANNEL_PREVIEW_LAST_MESSAGE_FILE_TYPE_GIF: 'GIF',
    CHANNEL_PREVIEW_LAST_MESSAGE_FILE_TYPE_PHOTO: 'Photo',
    CHANNEL_PREVIEW_LAST_MESSAGE_FILE_TYPE_VIDEO: 'Video',
    CHANNEL_PREVIEW_LAST_MESSAGE_FILE_TYPE_AUDIO: 'Audio',
    CHANNEL_PREVIEW_LAST_MESSAGE_FILE_TYPE_VOICE_MESSAGE: 'Voice message',
    CHANNEL_PREVIEW_LAST_MESSAGE_FILE_TYPE_GENERAL: 'File',
    // Date format
    DATE_FORMAT__MESSAGE_LIST__NOTIFICATION__UNREAD_SINCE: 'p \'on\' MMM dd',
    DATE_FORMAT__MESSAGE_LIST__DATE_SEPARATOR: 'MMMM dd, yyyy',
    DATE_FORMAT__THREAD_LIST__DATE_SEPARATOR: 'MMM dd, yyyy',
    // File upload
    FILE_UPLOAD_NOTIFICATION__COUNT_LIMIT: 'Up to %d files can be attached.',
    FILE_UPLOAD_NOTIFICATION__SIZE_LIMIT: 'The maximum size per file is %d MB.',
  },
};

const getStringSet = (lang: keyof typeof stringSet = 'en'): StringSet => {
  return stringSet[lang];
};

export default getStringSet;
