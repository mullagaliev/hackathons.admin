import { combineReducers } from "redux";

import login from "./reducers/loginReducer";
import auth from "./reducers/authReducer";
import participants from "./reducers/participantsReducer";
import chatHistory from "./reducers/messagesHistoryReducer";



const rootReducer = combineReducers({
  login,
  auth,
  participants,
  chatHistory
});

export default rootReducer;
