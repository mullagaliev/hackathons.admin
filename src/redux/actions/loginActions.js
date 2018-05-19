import axios from "axios";

import { setAuth } from "./authActions";

import {
  BASE_URL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "../constants";

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginErrors = errors => ({
  type: LOGIN_ERROR,
  errors
});

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  data
});

export const loginByUsername = (login, pwd) => {
  const URL = `${BASE_URL}/login`;

  return async dispatch => {
    try {
      // console.log(resJson);
      dispatch(loginRequest);
      const res = await axios.post(URL, { login, pwd });
      dispatch(loginSuccess(res.data));
    } catch (errors) {
      console.log(errors);
      dispatch(loginErrors(errors));
    }
  };
};

