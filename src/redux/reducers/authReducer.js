import { SET_AUTH, RESET_AUTH } from "../constants";

const initialState = {
  auth: false,
  token: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, auth: true, token: action.token };
    case RESET_AUTH:
      return { ...state, auth: false, token: "" };
    default:
      return state;
  }
};

export default authReducer;
