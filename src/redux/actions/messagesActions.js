import axios from "axios";

import {
  BASE_URL,
  MESSAGES_REQUEST,
  MESSAGES_SUCCESS,
  MESSAGES_ERROR,
  MESSAGES_HISTORY_REQUEST,
  MESSAGES_HISTORY_ERROR,
  MESSAGES_HISTORY_SUCCESS,
} from "../constants";

export const messagesRequest = () => ({
  type: MESSAGES_REQUEST
});

export const messagesErrors = errors => ({
  type: MESSAGES_ERROR,
  errors
});

export const messagesSuccess = data => ({
  type: MESSAGES_SUCCESS,
  data
});

export const sendMessage = (text) => {
  const URL = `${BASE_URL}/messages`;

  return async dispatch => {
    try {
      // console.log(resJson);
      dispatch(messagesRequest);
      axios.defaults.headers.common["Authorization"] = localStorage.getItem(
          "token"
      );
      const res = await axios.post(URL,
          {
            eventId: 1,
            message: text
          }
      );
      dispatch(messagesSuccess(res.data));
    } catch (errors) {
      console.log(errors);
      dispatch(messagesErrors(errors));
    }
  };
};

export const messagesHistoryRequest = () => ({
  type: MESSAGES_HISTORY_REQUEST
});

export const messagesHistoryErrors = errors => ({
  type: MESSAGES_HISTORY_ERROR,
  errors
});

export const messagesHistorySuccess = data => ({
  type: MESSAGES_HISTORY_SUCCESS,
  data
});

export const getHistoryMessages = (eventId = 1, lastMessageTimestamp = 1) => {
  const URL = `${BASE_URL}/messages?eventId=${eventId}&lastMessageTimestamp=${lastMessageTimestamp}`;

  return async dispatch => {
    try {
      // console.log(resJson);
      dispatch(messagesHistoryRequest);
      axios.defaults.headers.common["Authorization"] = localStorage.getItem(
          "token"
      );
      const res = await axios.get(URL, {});
      dispatch(messagesHistorySuccess(res.data));
    } catch (errors) {
      console.log(errors);
      dispatch(messagesHistoryErrors(errors));
    }
  };
};

