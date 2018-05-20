import { SET_AUTH, RESET_AUTH } from "../constants";

const token = localStorage.getItem("token");

const initialState = {
  auth: Boolean(token),
  token: Boolean(token) ? token : ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      localStorage.setItem("token", action.token);
      return { ...state, auth: true, token: action.token };
    case RESET_AUTH:
      localStorage.removeItem("token");
      return { ...state, auth: false, token: "" };
    default:
      return state;
  }
};

export default authReducer;
