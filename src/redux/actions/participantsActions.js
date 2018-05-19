import axios from "axios";

import { setAuth } from "./authActions";

import {
  BASE_URL,
  PARTICIPANTS_REQUEST,
  PARTICIPANTS_SUCCESS,
  PARTICIPANTS_ERROR,
  TMP_TOKEN
} from "../constants";

export const participantsRequest = () => ({
  type: PARTICIPANTS_REQUEST
});

export const participantsErrors = errors => ({
  type: PARTICIPANTS_ERROR,
  errors
});

export const participantsSuccess = data => ({
  type: PARTICIPANTS_SUCCESS,
  data
});

export const getParticipants = (id = 1) => {
  const URL = `${BASE_URL}/participants/${id}`;

  return async dispatch => {
    try {
      // console.log(resJson);
      dispatch(participantsRequest);
      // TODO remove token
      const res = await axios.get(URL,
          {
            headers: {
              "Authorization": TMP_TOKEN
            }
          }
      );
      dispatch(participantsSuccess(res.data));
    } catch (errors) {
      console.log(errors);
      dispatch(participantsErrors(errors));
    }
  };
};

