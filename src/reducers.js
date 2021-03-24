import {
  STEP_ONE_RESET,
  STEP_ONE_SUCCESS,
  STEP_ONE_REQUEST,
  STEP_TWO_REQUEST,
  STEP_ONE_SIGNED_MESSAGE,
  STEP_TWO_SIGNED_MESSAGE,
} from './constants';

export const stepOneReducer = (
  state = { stepOne: { general_1: { status: 'LOYAL' } } },
  action
) => {
  switch (action.type) {
    case STEP_ONE_REQUEST:
      return {
        general_0: {
          status: 'LOYAL',
          action: 'SEND_MESSAGE',
          message_1: 'ATTACK',
          message_2: 'ATTACK',
        },
        general_1: {
          status: 'LOYAL',
          action: 'RECEIVE_MESSAGE',
          message: 'ATTACK',
          message_2: null,
        },
        general_2: {
          status: 'FAULTY',
          action: 'RECEIVE_MESSAGE',
          message: 'ATTACK',
          message_1: null,
        },
      };
    case STEP_ONE_RESET:
      return {
        general_0: {
          status: 'LOYAL',
          action: 'HOLDING',
        },
        general_1: {
          status: 'LOYAL',
          action: 'HOLDING',
        },
        general_2: {
          status: 'LOYAL',
          action: 'HOLDING',
        },
      };
    case STEP_TWO_REQUEST:
      return {
        general_0: {
          status: 'LOYAL',
          action: 'ATTACK',
          message_1: 'ATTACK',
          message_2: 'ATTACK',
        },
        general_1: {
          status: 'LOYAL',
          action: 'SEND_MESSAGE',
          message_2: 'ATTACK',
          message: 'ATTACK',
        },
        general_2: {
          status: 'LOYAL',
          action: 'SEND_MESSAGE',
          message_1: 'RETREAT',
          message: 'ATTACK',
        },
      };
    default:
      return {
        general_0: {
          status: 'LOYAL',
          action: 'HOLDING',
        },
        general_1: {
          status: 'LOYAL',
          action: 'HOLDING',
        },
        general_2: {
          status: 'LOYAL',
          action: 'HOLDING',
        },
      };
  }
};
export const signedMessagesReducer = (
  state = { general_1: { status: 'LOYAL', action: 'HOLDING' } },
  action
) => {
  switch (action.type) {
    case STEP_ONE_SIGNED_MESSAGE:
      return {
        general_0: {
          status: 'LOYAL',
          action: 'SIGN_&_SEND',
          message: 'ATTACK',
          message_1: { message: 'ATTACK', signature: 'general_012358' },
          message_2: { message: 'ATTACK', signature: 'general_012358' },
        },
        general_1: {
          status: 'LOYAL',
          action: 'RECEIVE_MESSAGE',
          message: { message: 'ATTACK', signature: 'general_012358' },
          message_2: null,
        },
        general_2: {
          status: 'FAULTY',
          action: 'RECEIVE_MESSAGE',
          message: { message: 'ATTACK', signature: 'general_012358' },
          message_1: null,
        },
      };
    case STEP_TWO_SIGNED_MESSAGE:
      return {
        general_0: {
          status: 'LOYAL',
          action: 'ATTACK',
          message_1: { message: 'ATTACK', signature: 'general_012358' },
          message_2: { message: 'ATTACK', signature: 'general_012358' },
        },
        general_1: {
          status: 'LOYAL',
          action: 'SIGN_SEND',
          message: { message: 'ATTACK', signature: 'general_012358' },
          message_2: {
            message: { message: 'ATTACK', signature: 'general_012358' },
            signature: 'general_155678',
          },
        },
        general_2: {
          status: 'FAULTY',
          action: 'SIGN_SEND',
          message: { message: 'ATTACK', signature: 'general_012358' },
          message_1: {
            message: { message: 'ATTACK', signature: 'general_012358' },
            signature: 'general_2877898',
          },
        },
      };
    default:
      return state;
  }
};
