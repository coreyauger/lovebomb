import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Feed from "./views/Feed";

const ApplicationRoutes = () => {
  return (
    <Router>
      <Switch>
        {/* <PrivateRoute exact path="/dashboard" component={DashboardRoutes} /> */}

        <Route exact path="/test" component={Feed} />
        <Redirect to="/auth" from="/" />
      </Switch>
    </Router>
  );
};
export default ApplicationRoutes;
