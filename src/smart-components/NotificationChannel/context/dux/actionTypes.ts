export const actionTypes = {
  FETCH_CHANNEL_START: 'FETCH_CHANNEL_START',
  FETCH_CHANNEL_SUCCESS: 'FETCH_CHANNEL_SUCCESS',
  FETCH_CHANNEL_FAILURE: 'FETCH_CHANNEL_FAILURE',
  RESET_MESSAGES: 'RESET_MESSAGES',
  FETCH_INITIAL_MESSAGES_START: 'FETCH_INITIAL_MESSAGES_START',
  FETCH_INITIAL_MESSAGES_SUCCESS: 'FETCH_INITIAL_MESSAGES_SUCCESS',
  FETCH_INITIAL_MESSAGES_FAILURE: 'FETCH_INITIAL_MESSAGES_FAILURE',
  FETCH_PREV_MESSAGES_SUCCESS: 'FETCH_PREV_MESSAGES_SUCCESS',
  FETCH_PREV_MESSAGES_FAILURE: 'FETCH_PREV_MESSAGES_FAILURE',

  ON_MESSAGE_RECEIVED: 'ON_MESSAGE_RECEIVED',
  ON_MESSAGE_UPDATED: 'ON_MESSAGE_UPDATED',
  ON_MESSAGE_DELETED: 'ON_MESSAGE_DELETED',
  ON_CHANNEL_DELETED: 'ON_CHANNEL_DELETED',
} as const;

// todo: Move to somewhere generic
// using pattern from this video:
// https://youtu.be/jjMbPt_H3RQ?t=316
type ObjectValues<T> = T[keyof T];

export type ActionType = ObjectValues<typeof actionTypes>;
