import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";

const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: "/admin",

  authenticatedSelector: state => state.auth.auth === true,

  wrapperDisplayName: "UserIsAuthenticated"
});

export default userIsAuthenticated;
