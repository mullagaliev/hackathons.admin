import { PARTICIPANTS_REQUEST, PARTICIPANTS_ERROR, PARTICIPANTS_SUCCESS } from "../constants";

const initialState = {
  requesting: false,
  errors: false,
  success: false,
  data: []
};

const participantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PARTICIPANTS_REQUEST:
      return {
        ...state,
        requesting: true,
        success: false,
        errors: false
      };
    case PARTICIPANTS_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        errors: action.errors
      };
    case PARTICIPANTS_SUCCESS:
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

export default participantsReducer;
