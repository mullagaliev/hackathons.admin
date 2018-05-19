import { MESSAGES_HISTORY_REQUEST, MESSAGES_HISTORY_ERROR, MESSAGES_HISTORY_SUCCESS } from "../constants";

const initialState = {
  requesting: false,
  errors: false,
  success: false,
  data: []
};

const messagesHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_HISTORY_REQUEST:
      return {
        ...state,
        requesting: true,
        success: false,
        errors: false
      };
    case MESSAGES_HISTORY_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        errors: action.errors
      };
    case MESSAGES_HISTORY_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        errors: false,
        data: action.data
      };
    default:
      return state;
  }
};

export default messagesHistoryReducer;
