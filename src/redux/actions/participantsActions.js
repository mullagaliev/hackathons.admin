import axios from "axios";

import {
  BASE_URL,
  PARTICIPANTS_REQUEST,
  PARTICIPANTS_SUCCESS,
  PARTICIPANTS_ERROR,
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
      axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
      const res = await axios.get(URL, {});
      dispatch(participantsSuccess(res.data));
    } catch (errors) {
      console.log(errors);
      dispatch(participantsErrors(errors));
    }
  };
};

