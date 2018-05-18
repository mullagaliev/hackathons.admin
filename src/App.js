import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import DashboardScreen from "./screens/Dashboard";
import userIsAuthenticated from "./components/HoC/userIsAuthenticated";
import userIsNotAuthenticated from "./components/HoC/userIsNotAuthenticated";
import Screen from './layouts/BaseScreen';

const App = props => {
  return (
      <React.Fragment>
        <Screen>
          <Switch>
            <Route path="/" exact component={userIsNotAuthenticated(Login)}/>
            <Route
                path="/login"
                exact
                component={userIsNotAuthenticated(Login)}
            />
            <Route
                path="/dashboard"
                exact
                component={userIsNotAuthenticated(DashboardScreen)}
            />
            <Route component={Login}/>
          </Switch>
        </Screen>
      </React.Fragment>
  );
};

export default App;
