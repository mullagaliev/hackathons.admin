import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";
import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";

const locationHelper = locationHelperBuilder({});

const userIsNotAuthenticated = connectedRouterRedirect({
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || "/admin/dashboard",

  allowRedirectBack: false,

  authenticatedSelector: state => state.auth.auth === false,
  //authenticatedSelector: state=>false,

  wrapperDisplayName: "UserIsNotAuthenticated"
});

export default userIsNotAuthenticated;
