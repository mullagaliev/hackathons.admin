import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginScreen from "./screens/Login";
import DashboardScreen from "./screens/Dashboard";
import MessagingScreen from "./screens/Messaging";
import userIsAuthenticated from "./components/HoC/userIsAuthenticated";
import userIsNotAuthenticated from "./components/HoC/userIsNotAuthenticated";
import Screen from './layouts/BaseScreen';

const App = props => {
  return (
      <React.Fragment>
        <Screen>
          <Switch>
            <Route path="/" exact component={userIsNotAuthenticated(LoginScreen)}/>
            <Route
                path="/login"
                exact
                component={userIsNotAuthenticated(LoginScreen)}
            />
            <Route
                path="/dashboard"
                exact
                component={userIsAuthenticated(DashboardScreen)}
            />
            <Route
                path="/messaging"
                exact
                component={userIsAuthenticated(MessagingScreen)}
            />
            <Route component={LoginScreen}/>
          </Switch>
        </Screen>
      </React.Fragment>
  );
};

export default App;
