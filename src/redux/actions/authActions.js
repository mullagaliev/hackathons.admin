import { SET_AUTH, RESET_AUTH } from "../constants";

export const setAuth = token => ({
  type: SET_AUTH,
  token
});

export const resetAuth = () => ({
  type: RESET_AUTH
});
