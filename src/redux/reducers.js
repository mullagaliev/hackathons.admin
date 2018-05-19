import { combineReducers } from "redux";

import login from "./reducers/loginReducer";
import auth from "./reducers/authReducer";
import participants from "./reducers/participantsReducer";



const rootReducer = combineReducers({
  login,
  auth,
  participants
});

export default rootReducer;
