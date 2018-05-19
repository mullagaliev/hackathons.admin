import { LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS } from "../constants";

const initialState = {
  requesting: false,
  errors: false,
  success: false,
  data: {}
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        requesting: true,
        success: false,
        errors: false
      };
    case LOGIN_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        errors: action.errors
      };
    case LOGIN_SUCCESS:
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

export default loginReducer;
