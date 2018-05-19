import { NAV_VISIBLE, NAV_INVISIBLE } from "./constants";
import { fetchProfile } from "./actions/profileActions";
import { sortByWins, sortByXp } from "./actions/sortingActions";
import { loginByTelegram, loginByEmail } from "./actions/loginActions";
import { setAuth, resetAuth } from "./actions/authActions";
import {
  setEmail,
  setPass,
  setFirstName,
  setLastName
} from "./actions/formActions";

export const showNav = () => ({
  type: NAV_VISIBLE
});

export const hideNav = () => ({
  type: NAV_INVISIBLE
});

export {
  fetchProfile,
  sortByWins,
  sortByXp,
  loginByTelegram,
  loginByEmail,
  setEmail,
  setPass,
  setFirstName,
  setLastName,
  setAuth,
  resetAuth
};
