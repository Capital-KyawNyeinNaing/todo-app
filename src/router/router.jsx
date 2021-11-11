import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Routes from "./route.config";

const AppRoute = () => {
  return (
    <Suspense>
      <Switch>
        {Routes.map((route, key) => (
          <Route exact path={route.path} component={route.component} key={key} />
        ))}
      </Switch>
    </Suspense>
  );
};

export default AppRoute;
