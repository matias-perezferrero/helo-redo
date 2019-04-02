import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./src/components/Auth/Auth";
import Dashboard from "./src/components/Dashboard/Dashboard";
import Form from "./src/components/Form/Form";

export default (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/form" component={Form} />
    <Route exact path="/" component={Auth} />
  </Switch>
);
